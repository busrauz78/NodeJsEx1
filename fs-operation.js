const fs = require('fs');

const createOp = (folderPath, filePath, content, additionalContent) => fs.mkdir(folderPath, (err) => {
  if (err) {
    console.log('Error is found while creating folder');
  } else {
    console.log('Folder is created');
    fs.writeFile(filePath, content, 'utf8', (err) => {
      if (err) {
          console.log('Error is found while creating file');
      } else {
        console.log('File is created');
        fs.appendFile(filePath, additionalContent, (err) => {
          if (err) {
            console.log('Error is found while appending content');
          } else {
            console.log('Content is added into file');
            fs.readFile(filePath, 'utf8', (err, data) => {
              if (err) {
                console.log('Error is found while reading file');
              } else {
                console.log(`Content: ${data}`);
              }
            });
          }
        });
      }
    });
  }
});


const deleteOp = (folderPath, filePath) =>  fs.unlink(filePath, (err) => {
  if (err) {
    console.log('Error is found while deleting file');
  } else {
    console.log('File is deleted');
    fs.rmdir(folderPath, (err) => {
      if (err) {
        console.log('Error is found while deleting folder');
      } else {
        console.log('Folder is deleted');
      }
    });
  }
});

module.exports = {
    createOp,
    deleteOp,
};
