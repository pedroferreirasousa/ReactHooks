import { useState } from 'react';



function App() {

  const[tarefas, setTarefas] = useState([
    'Acordar cedo',
    'Estudar JSES6+',
    'Lavar o carro',
    'Estudar Hooks'
  ]);

  const [campo, setCampo] = useState('');

  const [placeholder, setPlaceHolder] = useState("Digite sua tarefa");

  const adicionarItem = () =>{
    setTarefas([...tarefas, campo]);	
    setCampo("");

  }

  const handleCampo = (e) =>{
    setCampo(e.target.value);
  }

  const limparPlaceHolder = () =>{
    setPlaceHolder(" ");
  }




  return (
    <div className='App'>
    <h1>Pedro Ferreira</h1>

    <ul>
      {
        tarefas.map((item, index) =>{
          return(
            <li key={index}>{item}</li>
          )
        })
      }
    </ul>

    <input type="text" value={campo} name="nome" placeholder={placeholder} onChange={handleCampo} />
    <button type='button' id='add-btn' disabled={campo.length < 3 } onClick={adicionarItem}>Adicionar</button>
    </div>
  );
}

export default App;
