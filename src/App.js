import { useState, useEffect, useCallback } from 'react';



function App() {

  const[tarefas, setTarefas] = useState( () =>{
    const tarefasStorage = localStorage.getItem('Array de tarefas');
    return tarefasStorage ? JSON.parse(tarefasStorage) : [
      'Acordar Cedo',
      'Estudar JSE6+',
      'Lavar o carro',
      'Estudar Hooks'
    ];
  });

  const [campo, setCampo] = useState('');

  const adicionarItem = useCallback(()=>{
  setTarefas([...tarefas, campo])
  setCampo('');
} , [tarefas, campo]);

  const handleCampo = (e) =>{
    setCampo(e.target.value);
  }

  // const limparPlaceHolder = () =>{
  //   setPlaceHolder(" ");
  // }


  // useEffect(()=>{
  //   const tarefasStorage = localStorage.getItem('Array de tarefas');
  //   if(tarefasStorage){
  //     setTarefas(JSON.parse(tarefasStorage));
  //   }
  // }, [])


  //funciona como um componentDidUpdate
  useEffect(()=>{
    localStorage.setItem('Array de tarefas', JSON.stringify(tarefas));
  },)



  return (
    <div className='App'>
    <h1>To do list</h1>

    <ul>

      {
        tarefas.map((item, index) =>{
          return(
            <li key={index}>{item}</li>
          )
        })
      }
    </ul>

    <input type="text" value={campo} name="nome" placeholder="Digite sua tarefa" onChange={handleCampo} />
    <button type='button' id='add-btn' disabled={campo.length < 3 } onClick={adicionarItem}>Adicionar</button>
    </div>
  );
}

export default App;
