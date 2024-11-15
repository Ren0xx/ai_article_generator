import {
	promptWithFileContent,
	messageForSystem,
	writeToFile,
} from "./helpers.js";

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

//Writing generated content to file:
writeToFile(generatedArticleInHtml, "test_artykul.html");

console.log("Operation was successful");

// Generated article can also be printed out
// console.log(generatedArticleInHtml)

