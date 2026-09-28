const fs=require('fs/promises');
const path=require('path');

let url=process.cwd(),length=process.argv.length;
if(length>2&&process.argv[2].length)
    url=path.join(process.cwd(),process.argv[2]);

 async function FolderInfo(url)
{
try
{
const details = await fs.readdir(url);
console.log('Folder: '+path.basename(url));
console.log('path: '+url);
let files=0,folders=0;
for(let i=0; i<details.length;i++)
{
      const filePath = path.join(url, details[i]);
        const stats=  await fs.stat(filePath);
        if(stats.isDirectory())
            folders++;
            else  if(stats.isFile())
                files++;

};
console.log('Files: '+files);
console.log('Folders: '+folders);
}
catch(err)
{
    process.stderr.write(`error: could not read folder: ${path.basename(url)}`);
    process.exitCode=2;
}
}
FolderInfo(url);