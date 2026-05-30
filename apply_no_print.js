const fs = require('fs');

function addNoPrint(filePath, searchStr, replaceStr) {
    if (fs.existsSync(filePath)) {
        let content = fs.readFileSync(filePath, 'utf8');
        if (content.includes(searchStr)) {
            content = content.replace(searchStr, replaceStr);
            fs.writeFileSync(filePath, content, 'utf8');
            console.log(`Updated ${filePath}`);
        } else {
            console.log(`Search string not found in ${filePath}`);
        }
    }
}

// Attendance.jsx
addNoPrint(
    'c:/Users/lasit/Desktop/webapp/du-homes-frontend/src/Attendance.jsx',
    '<div style={{ display: "flex", gap: 4, marginBottom: 0 }}>',
    '<div style={{ display: "flex", gap: 4, marginBottom: 0 }} className="no-print">'
);

// ToolsAndEquipment.jsx (hiding tabs)
addNoPrint(
    'c:/Users/lasit/Desktop/webapp/du-homes-frontend/src/ToolsAndEquipment.jsx',
    '<div style={{ display: "flex", gap: 10, marginBottom: 20 }}>',
    '<div style={{ display: "flex", gap: 10, marginBottom: 20 }} className="no-print">'
);
