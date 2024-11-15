import fs from "node:fs";
const messageForSystem = "You are a html generator";

function readFile() {
	const filePath = "Tresc_artykulu.txt";
	const fileContent = fs.readFileSync(filePath, "utf8");
	return fileContent;
}

function writeToFile(content, fileName) {
	if (fs.existsSync(fileName)) {
		console.error("File already exits, change the name of the file");
		return;
	}
	fs.writeFile(fileName, content, (err) => {
		if (err) console.error(err);
		else {
			console.log("File read successfully!");
		}
	});
}
const fileContent = readFile();

const promptContent = ` Please generate HTML content with well-structured text and appropriate topic sections. 
Use appropriate HTML tags such as headings (<h1>, <h2>, etc.), paragraphs (<p>), and lists to divide and highlight different sections of content
Add <img> tags with the src="image_placeholder.jpg" attribute in places where the content could be better understood with the help of images. 
In each <img> tag, include a detailed description of the image in the alt attribute, which can be used to generate the image by the AI.
Also add appropriate captions under the images using the <figcaption> tag.
Other requirements: Do not add CSS or Javascript. The generated code should only contain elements that are to be placed inside <body> </body> tags.
Do not include <html>, <head>, or <body> tags.
This is the content on which you should rely on:`;

const promptWithFileContent = `${promptContent} ${fileContent}`;

export { promptWithFileContent, messageForSystem, writeToFile };

