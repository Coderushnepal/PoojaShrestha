import fs from 'fs';

export function getAPIDetails() {
	const data = fs.readFileSync(process.cwd() + '/package.json').toString();

	const parsedData = JSON.parse(data);

	console.log('here:', parsedData.name);

	return {
		name: parsedData.name,
		version: parsedData.version,
		description: parsedData.description,
		message: 'hi',
	};
}