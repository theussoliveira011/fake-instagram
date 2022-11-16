// create a promise
const meuNome = 'Jefferson'
const promise = new Promise((resolve, reject) => {
  if(meuNome != 'Jefferson'){
    reject(new Error('Deu Xabu!'));
  } else {
    resolve({
      name: 'Jefferson',
      age: 22,
      city: 'SP - Diadema'
    });
  }
  
})
  .then(response => console.log(response)) // async
  .catch(error => console.log(error)); // async

console.log(promise);