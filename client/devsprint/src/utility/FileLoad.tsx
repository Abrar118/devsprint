export const convertBase64 = (file: File) => {
	const fileReader = new FileReader();

	return new Promise((resolve, reject) => {
		fileReader.readAsDataURL(file);
		fileReader.onload = () => {
			resolve(fileReader.result);
		};
		fileReader.onerror = (error) => {
			reject(error);
		};
	});
};
