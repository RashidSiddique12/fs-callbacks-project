
const fs = require("fs");
const path = require('path');


const fsProblem1 = (absolutePathOfRandomDirectory, randomNumberOfFiles) => {
    const data = {
      name: "rashid",
      company: "MountBlue",
    };
  
    const accessFolder = (createDir, createFile, deleteFile) => {
      fs.access(absolutePathOfRandomDirectory, (err) => {
        if (err) {
          console.log("Creating new Directory..")
          createDir(createFile, deleteFile);
        } else {
          console.log("Directory already exist...");
          createFile(deleteFile);
        }
      });
    };
  
    const createFile = (deleteFile) => {
      for (let i = 1; i <= randomNumberOfFiles; i++) {
          const filePath = path.join(absolutePathOfRandomDirectory, `file${i}.json`);
        fs.writeFile(
          filePath,
          JSON.stringify(data),
          (err) => {
            if (err) {
              console.log("Error for Creating File : ", err);
              return;
            }
            console.log(`File created successfully ${filePath}`);
            deleteFile(filePath);
          }
        );
      }
    };
  
    const deleteFile = (filePath) => {
      fs.unlink(filePath, (err) => {
        if (err) {
          console.log("Error for  Deleting File",err);
          return;
        }
        console.log(`file deleted successfully ${filePath}`);
      });
    };
  
    const createDir = (createFile, deleteFile) => {
      fs.mkdir(absolutePathOfRandomDirectory, (err) => {
        if (err) {
          console.log("Error for Creating Directory ",err);
          return;
        }
        console.log("Directory Created...");
        createFile(deleteFile);
      });
    };
  
    accessFolder(createDir, createFile, deleteFile);
  };


  module.exports.fsProblem1 = fsProblem1;