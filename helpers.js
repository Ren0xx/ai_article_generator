import fs from "node:fs";
const messageForSystem = "You are a html generator";

function readFile() {
	const filePath = "Tresc_artykulu.txt";
	const fileContent = fs.readFileSync(filePath, "utf8");
	return fileContent;
}
const fileContent = readFile();

const prompt = `Write me a test html code based on this text: ${fileContent}`;

export { prompt, messageForSystem };

