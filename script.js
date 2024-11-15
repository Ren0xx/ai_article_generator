// import { config } from "dotenv";
// config();

import { promptWithFileContent, messageForSystem } from "./helpers.js";

import OpenAI from "openai";
const openai = new OpenAI({ apiKey: process.env.OPEN_AI_API_KEY });

const completion = await openai.chat.completions.create({
	model: "gpt-4o",
	messages: [
		{ role: "system", content: messageForSystem },
		{
			role: "user",
			content: promptWithFileContent,
		},
	],
});

const generatedArticleInHtml = completion.choices[0].message.content;

// Generated article can be printed out
// console.log(generatedArticleInHtml) 
