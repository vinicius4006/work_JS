console.log("Usando Fetch")
	const doGet = (url) => {
		const promisseCallback = (resolve, reject) => {
		fetch(url)
			.then(function(response){
			if(!response.ok) throw new Error("Erro ao executar requisição")
			return response.json();
			})
			.then(resolve)
			.catch(reject)
		}

		return new Promise(promisseCallback);
	}
	doGet("https://swapi.dev/api/people/10").then(console.log).catch(console.error)