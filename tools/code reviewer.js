const axios = require("axios");
const esprima = require("esprima"); // For parsing JavaScript code
const complexity = require("escomplex"); // For analyzing complexity


const GEMINI_API_KEY = "YOUR_API_KEY";

const system_prompt = `
You are an AI code reviewer. Analyze the provided JavaScript code and generate a structured feedback report.
- Identify syntax errors.
- Evaluate cyclomatic complexity and suggest optimizations.
- Provide constructive suggestions for improving code efficiency and readability.
`

function codeReviewer(){
    
}