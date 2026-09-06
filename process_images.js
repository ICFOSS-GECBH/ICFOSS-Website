const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'image data');
const targetDir = path.join(__dirname, 'public', 'Execom');

if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
}

let jsonResult = [];

function parseFilename(filename, isDir) {
    if (isDir) {
        // Parse directory name
        let name = filename;
        let role = "Member";
        if (filename.includes('_')) {
            const parts = filename.split('_');
            name = parts[0].trim();
            role = parts.slice(1).join('_').trim();
        } else if (filename.includes('  ')) {
            const parts = filename.split('  ');
            name = parts[0].trim();
            role = parts.slice(1).join(' ').trim();
        }
        return { name, role };
    } else {
        // Parse file name without extension
        const ext = path.extname(filename);
        let base = path.basename(filename, ext);
        
        let name = base;
        let role = "Member";
        
        if (base.includes('_')) {
            const parts = base.split('_');
            name = parts[0].trim();
            role = parts.slice(1).join('_').trim();
            // some have '__'
            role = role.replace(/_/g, ' ').trim();
        } else if (base.includes('(') && base.includes(')')) {
            const match = base.match(/(.*)\((.*)\)/);
            if (match) {
                name = match[1].trim();
                role = match[2].trim();
            }
        } else if (base.includes('-')) {
            const parts = base.split('-');
            name = parts[0].trim();
            role = parts.slice(1).join('-').trim();
        } else {
            // Check for space separated where last words are role
            // e.g. "Jyothika K Design team"
            if (base.toLowerCase().includes('design team')) {
                name = base.substring(0, base.toLowerCase().indexOf('design team')).trim();
                role = "Design Team";
            } else if (base.toLowerCase().includes('design head')) {
                name = base.substring(0, base.toLowerCase().indexOf('design head')).trim();
                role = "Design Head";
            }
        }
        
        return { name, role };
    }
}

function processFolder(dir, dirName = "") {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
            const { name, role } = parseFilename(file, true);
            // Process the files inside this directory
            const subFiles = fs.readdirSync(fullPath);
            if (subFiles.length > 0) {
                const subFile = subFiles[0]; // Take the first image
                const subExt = path.extname(subFile);
                
                // Copy the file
                const newFileName = `${name}${subExt}`;
                fs.copyFileSync(path.join(fullPath, subFile), path.join(targetDir, newFileName));
                
                jsonResult.push({
                    occupation: role,
                    name: name,
                    image: `Execom/${newFileName}`
                });
            }
        } else {
            if (file === '.DS_Store') continue;
            
            const ext = path.extname(file);
            const { name, role } = parseFilename(file, false);
            
            // Copy file
            const newFileName = `${name}${ext}`;
            fs.copyFileSync(fullPath, path.join(targetDir, newFileName));
            
            jsonResult.push({
                occupation: role,
                name: name,
                image: `Execom/${newFileName}`
            });
        }
    }
}

processFolder(srcDir);

fs.writeFileSync(path.join(__dirname, 'src', 'Data', 'CradCarousal.json'), JSON.stringify(jsonResult, null, 4));
console.log('Successfully processed ' + jsonResult.length + ' members');
