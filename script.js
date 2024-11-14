import { config } from "dotenv";
config();

import OpenAI from "openai";
const openai = new OpenAI({ apiKey: process.env.OPEN_AI_API_KEY });

const completion = await openai.chat.completions.create({
	model: "gpt-3.5-turbo",
	messages: [
		{ role: "system", content: "You are a html generator." },
		{
			role: "user",
			content: "Write me a test html code",
		},
	],
});

console.log(completion.choices[0].message);
