
import React from 'react';
 
function App() {

  const [carrinho, setCarrinho] = React.useState(0);
  const [notificacao, setNotificacao] = React.useState(null);
  const TimeoutRef = React.useRef();
   
  function handleClick(){
    setNotificacao('item adicionado ao carrinho');
    setCarrinho(carrinho  + 1);

    clearTimeout(TimeoutRef.current);

   TimeoutRef.current = setTimeout(()=>{
      setNotificacao(null);
    },2000)
  }

  return (
    
    <div>
     <p>{notificacao}</p> 
    <button onClick={handleClick}>Adicionar Carrinho {carrinho}</button>
    </div>
  );
}

export default App;
