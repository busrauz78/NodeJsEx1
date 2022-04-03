const fs = require('fs');
const {
    createOp,
    deleteOp,
} = require('./fs-operation');

const existFolder = fs.existsSync('files');
const existFile = fs.existsSync('files/example.txt');
if (!existFile && !existFolder) {
  createOp('files', 'files/example.txt', 'Hello', 'World');
}

if (existFile && existFolder) {
  deleteOp('files', 'files/example.txt');
};
