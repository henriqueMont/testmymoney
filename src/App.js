import React from 'react';

//import useGet from './useGet.js';
//import usePost from './usePost.js';
//import useDelete from './useDelete.js';

import Rest from './rest.js'

 
const baseURL = "https://mymoneyhenryproject.firebaseio.com/";
const {useGet, usePost, useDelete} = Rest(baseURL);

/*

//Pegar um dado API Rest
axios 
  .get('https://mymoneyhenryproject.firebaseio.com/Valor.json')
  .then( res => {
    console.log(res);
  })

//Mandar um dado API Rest
axios
  .post('https://mymoneyhenryproject.firebaseio.com/Valor.json', {
    outro: "Monteiro"
  })
  .then(res => {
    console.log(res)
  })
*/

const url = 'https://mymoneyhenryproject.firebaseio.com/movimentacoes/2020-05.json'
//const urlapp = 'https://emplaca-facil-backend.herokuapp.com';

//UseGet pega via axios nossa restAPI
//Get traz
//Post insere

function App() {
  const data = useGet("movimentacoes/2020-05")
  const [postData, post] = usePost("movimentacoes/2020-05")
  const [deleteData, remove] = useDelete()

  
  const saveNew = () => {
    post({ valor: 10, descricao: "Olá"})
  }

  const doRemove = () => {
    remove("movimentacoes/2020-05/-M8NTj0R9rxUK9TFSsVT");
  }

  return (
    <div>
      <h1>My Money Henry</h1>
      {JSON.stringify(data)}
      { data.loading && <p>Loading ...</p>}
      <br/>
      <button onClick={saveNew}>Salvar</button>
      <prev>{JSON.stringify(postData)}</prev>
      <br/>
      <button onClick={doRemove}>Remover</button>
      <prev>{JSON.stringify(deleteData)}</prev>
    </div>
  );
}

export default App;
