import { config } from "dotenv";
config();

import { prompt, messageForSystem } from "./helpers.js";

import OpenAI from "openai";
const openai = new OpenAI({ apiKey: process.env.OPEN_AI_API_KEY });


const completion = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
	messages: [
        { role: "system", content: messageForSystem },
		{
            role: "user",
			content: prompt,
		},
	],
});

console.log(prompt);
// console.log(completion.choices[0].message);

