
import React from 'react';
 
function App() {

   const [comentario, setComentario] = React.useState([]);
   const [input, setInput] = React.useState('');
   const inputElement = React.useRef();
 
   function handleClick(){

    setComentario([...comentario, input]);
    setInput('');

    inputElement.current.focus();

   }
   


  return (
    
    <div>
      <ul>
        {comentario.map(comentario => <li key={comentario}>{comentario}</li>) }
   
      </ul>
      <input type="text" ref={inputElement} value={input} onChange={({target})=> setInput(target.value)}/>

      <button onClick={handleClick}>Enviar</button>
    </div>
  );
}

export default App;
