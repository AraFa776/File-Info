Folder Info CLI

A simple Node.js Command-Line Interface (CLI) tool that displays basic information about a folder, including the number of files and subfolders inside it.

Project URL

GitHub: https://github.com/AraFa776/File-Info/tree/main

Features
Get information about the current working directory.
Optionally specify a folder path from the command line.
Display:
Folder name
Folder path
Number of files
Number of subfolders
Uses asynchronous file-system operations with fs/promises.
Handles errors when the folder cannot be read.
Sets a process exit code when an error occurs.
Technologies
Node.js
JavaScript
fs/promises
path
Command Line Interface (CLI)
Project Structure
FolderInfo/
│
├── app.js
└── README.md
How It Works

The application gets the folder path from the command line.

If no path is provided, it uses the current working directory:

process.cwd()

If a folder name or relative path is provided, it is joined with the current working directory:

path.join(process.cwd(), process.argv[2])

The application then:

Reads the folder using fs.readdir().
Loops through the folder contents.
Gets information about each item using fs.stat().
Checks whether the item is a file or directory.
Counts files and folders.
Prints the results.
Installation

Make sure Node.js is installed.

Clone the repository and navigate to the project directory:

git clone https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
cd YOUR_REPOSITORY

No external packages are required because the project uses only Node.js built-in modules.

Usage
Check the Current Directory
node app.js

Example output:

Folder: FolderInfo
path: C:\Users\HP\FolderInfo
Files: 2
Folders: 1
Check a Specific Folder
node app.js test

Example:

Folder: test
path: C:\Users\HP\FolderInfo\test
Files: 5
Folders: 3
Command-Line Arguments

The application uses:

process.argv[2]

For example:

node app.js test

The arguments are:

process.argv[0] → Node.js executable
process.argv[1] → JavaScript file
process.argv[2] → User-provided folder path
Error Handling

If the application cannot read the specified folder, an error message is written to stderr:

error: could not read folder: folderName

The application also sets:

process.exitCode = 2;

to indicate that the program finished with an error.

Main Concepts Practiced
process.cwd()
process.argv
process.exitCode
process.stderr
fs/promises
fs.readdir()
fs.stat()
path.join()
path.basename()
async/await
try/catch
File system operations
Command-line applications
Future Improvements
Support absolute paths.
Recursively analyze nested folders.
Display the total size of files.
Show hidden files separately.
Add command-line options.
Sort files and folders.
Display detailed information about each file.
Use fs.readdir() with withFileTypes: true to avoid calling fs.stat() for every item.
License

This project is for learning and practice purposes.
