"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const child_process_1 = require("child_process");
const fs_1 = require("fs");
const posix_1 = require("./posix");
const win32_1 = require("./win32");
function diskinfo(file) {
    return new Promise((resolve, reject) => {
        const isWin = process.platform === 'win32';
        if (file && !fs_1.existsSync(file)) {
            reject(new Error(`No such file or directory: \`${file}\``));
        }
        const { exe, args, parse } = isWin ? win32_1.win32(file) : posix_1.posix(file);
        child_process_1.execFile(exe, args, { timeout: 5000 }, (error, stdout, stderr) => {
            if (error || stderr) {
                reject(new Error(stderr.trim() || error.message));
            }
            else {
                const info = parse(stdout);
                resolve(file ? info[0] : info);
            }
        });
    });
}
exports.diskinfo = diskinfo;
