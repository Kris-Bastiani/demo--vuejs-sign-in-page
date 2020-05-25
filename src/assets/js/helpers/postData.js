export default async (uri, data) => {
	const response = await fetch(uri, {
		body: JSON.stringify(data),
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
	});
	return response.json();
};
