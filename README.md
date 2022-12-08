# sharpner_nodejs
This ia a repo for nodejs assignments from sharpner. It will be used to push code folderwise per assignment.

## Debugging the code in node.js

#### 1. Syntax Error:
 You have to look manually in the code to debug.
 #### 2. Runtime Error: 
These error are the error that crashes the app on runtime . To debug you have to focus on first Error line and going down one by one we can read the error full description and get  the line number.
#### 3. Logical Error: 
These errors are hard to debug because they do not crash the app but results in wrong output. So we have to use the node.js debugger in vs-code via Run>start debugger or F5 shortcut and selecting node.js environment. Debugger console andd debugger options pop up i.e now you can look into code as it is running but for that have to put debuggers in the code.
##### To put debugger go to extreme left of code line and left click the red dot to activate debugger break at that point. enter data in app to run and submit form . A yellow arrow with red dot appear on debugging breakpoint line and on hovering the variables on the line and above that lines you will see what they stored after the a flow execution. REad and update .

## Adding auto debugger configuration
Similar to nodemon auto starting app on change ...debugger do not update on any changes in file. So need to do some configuration... Run>add configuration . This will add .vscode folder with launch.json file which will allow to configure the debugger. inside configuration array obj. write:
######  "restart": true , "runtimeExecutable": "nodemon" , "console": "integratedTerminal" 

### Important: 
To restart debugging i.e auto debug it needs nodemon globally so install it globally. (npm install nodemon -g)



