// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
// const questions = 
    inquirer
    .prompt([
             {
    type:"input", 
    name:"description",
    message:"what is a description of your project"
    },
        {
    type:"input", 
    name:"title",
    message:"what is a the title of this project?"
    },
    {
    type:"input", 
    name:"why",
    message:"why did you build this project?"
    },
        {
    type:"input", 
    name:"problem",
    message:"what problem does this solve?"
    },
        {
    type:"input", 
    name:"learn",
    message:"what did you learn?"
    },
        {
    type:"input", 
    name:"install",
    message:"how can a user install this application"
    },
         {
    type:"input", 
    name:"collaborators",
    message:"list all collaborators and links to their github profiles"
    },

    ]).then((data) => {
        console.log(data);
        fs.writeToFile('README.md', generateMarkdown(data),
        (err)=>{
        if(err) {
            console.log('please input all data')
        }
        console.log('your README was generated')
        } 
        )})
 
// everything above is mine. everything below is what teacher suggested
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeToFile(fileName,data,(err)=>{
        if(err) throw err;
    })
}


// TODO: Create a function to initialize app
function init() {
    // ask the quesitons
    inquirer.prompt(questions).then((answers)=>{
        // pass the answers to the big string
        const string = generateMarkdown(answers);
        // write the file with that string
        writeToFile("readme.md", string)
})
}

// Function call to initialize app
init();
