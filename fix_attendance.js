const fs = require('fs');
const path = 'c:/Users/lasit/Desktop/webapp/du-homes-frontend/src/Attendance.jsx';
let lines = fs.readFileSync(path, 'utf8').split('\n');

const startIdx = 941; // index 940
const endIdx = 978;   // index 977

const newLines = [
    '                                                        <td style={tdStyle}>',
    '                                                            <span style={{ padding: "2px 10px", borderRadius: 12, fontSize: 11, fontWeight: 600, background: "#f1f5f9", color: "#475569" }}>',
    '                                                                {getWorkerType(w.worker_id)}',
    '                                                            </span>',
    '                                                        </td>',
    '                                                        <td style={{ ...tdStyle, color: "#64748b" }}>{w.task || "—"}</td>',
    '                                                        <td style={tdStyle}>',
    '                                                            <span style={statusBadge(status)}>',
    '                                                                {status === "present" ? "Present" : status === "absent" ? "Absent" : "Unmarked"}',
    '                                                            </span>',
    '                                                        </td>',
    '                                                        <td style={tdStyle} className="no-print">',
    '                                                            <div style={{ display: "flex", gap: 8 }}>',
    '                                                                <button style={actionBtn("P", status === "present", isMarking)} onClick={() => markAttendance(w.worker_id, siteId, "present")} disabled={isMarking} title="Mark Present">P</button>',
    '                                                                <button style={actionBtn("A", status === "absent", isMarking)} onClick={() => markAttendance(w.worker_id, siteId, "absent")} disabled={isMarking} title="Mark Absent">A</button>',
    '                                                            </div>',
    '                                                        </td>',
    '                                                    </tr>'
];

lines.splice(startIdx - 1, endIdx - startIdx + 1, ...newLines);
fs.writeFileSync(path, lines.join('\n'), 'utf8');
console.log('Fixed');
