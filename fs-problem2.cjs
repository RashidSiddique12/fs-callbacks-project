const fs =require('fs');

const fsProblem2 = ()=>{

    const readFile = (fileName, cb)=>{
        fs.readFile(fileName,'utf-8', cb);
    }

    const writeFile = (fileName, content, cb)=>{
        fs.writeFile(fileName, content, cb);
    }

    const addFileName = (filename, newFileName, cb)=>{
        fs.appendFile(filename, `${newFileName}\n`, cb);
    }

    const unLinkFile = (fileName, cb)=>{
        fs.unlink(fileName, cb);
    }

    readFile('./lipsum.txt', (err, data)=>{
        if(err) {
            console.log("Error to Reading Lipsum File : ", err);
            return;
        }
        console.log("lipsum data is read succesful..")
        const upperCaseContent = data.toUpperCase();
        writeFile('./upperCaseFile.txt', upperCaseContent, (err)=>{
                if(err){
                    console.log("Error for writting in  UpperCaseFile : ", err);
                    return;
                }
                console.log("UpperCase Data is written Successful..");
                addFileName('./filenames.txt', './upperCaseFile.txt', (err)=>{
                   if(err){
                    console.log("Error for appending UpperCase file name : ", err);
                    return;
                   }
                   console.log("Uppercase file name added Succesful..");
                   readFile('./upperCaseFile.txt', (err, data)=>{
                        if(err){
                            console.log("Error for reading UpperCase file : ", err);
                            return;
                        }
                        console.log("Successfully read Uppercase file..")
                        const lowerCaseContent = data.toLowerCase();
                        const sentences = lowerCaseContent.split('.').join('\n');
                        // console.log(sentences);
                        writeFile('./lowerCaseFile.txt', sentences, (err)=>{
                            if(err){
                                console.log("Error for writing LowerCaseFile : ", err);
                                return;
                            }
                            console.log("Lowercase data is written successful...");
                            addFileName('./filenames.txt', './lowerCaseFile.txt', (err)=>{
                                if(err){
                                    console.log("Error for writing LowerCase File name : ", err);
                                    return;
                                }
                                console.log("lowerCase file name is added...");
                                readFile('./lowerCaseFile.txt', (err, data)=>{
                                    if(err){
                                        console.log("Error for Reading LowerCase file : ", err);
                                        return;
                                    }
                                    console.log("Successfully read data from lowercase file");
                                    const sortContent = data.split(" ").sort().join(" ");
                                    writeFile('./sortedContent.txt', sortContent, (err)=>{
                                        if(err){
                                            console.log("Error for writing Sorted Content : ", err);
                                            return;
                                        }
                                        console.log("Successfully Sorted content written");
                                        addFileName('./filenames.txt', './sortedContent.txt', (err)=>{
                                            if(err){
                                                console.log("Error for adding sortedContent file name : ", err);
                                                return;
                                            }
                                            console.log("Successfully sortedContent file name added..");
                                            readFile('./filenames.txt', (err, data)=>{
                                                if(err){
                                                    console.log("Error for reading Filenames : ", err);
                                                    return;
                                                }
                                                const fileName = data.split('\n').filter(Boolean);
                                                // console.log(fileName)
                                                fileName.forEach((name)=>{
                                                    unLinkFile(name, (err)=>{
                                                        if(err){
                                                            console.log(`Error for unlinking file ${name}`, err);
                                                            return;
                                                        }
                                                        console.log(`${name} file is deleted...`);

                                                    })
                                                })
                                                
                                            })

                                        })
                                    })
                                })

                            })
                        })
                   })
                })

        })
    })

}

module.exports.fsProblem2 = fsProblem2

