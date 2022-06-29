import {useState} from "react";
import {Nav, NavDois} from "./components/nav";
import "./style.css";

function App() {
  const [contador, setContador] = useState(0);
  const [ativo, setAtivo] = useState(false);
  const [dadosPessoa, setDadosPessoa] = useState({
    nome:"Lidi",
    idade: "37"
  });

  const menor = () =>{
    if (contador !== 0){
    setContador(contador-1)
    }
  };

  const maior = () =>{
    setContador(contador+1)
  }

  const handleAtivo = () => {
    setAtivo(!ativo);
    // ! nega o que tem ali
  }

  return (
    <div className="App">
      <Nav/>
      <NavDois/>
      <h1>Contador</h1>
      <h1>{contador}</h1>
      <h1>{contador * 250}</h1>
      <button onClick={maior}>Somar</button>
      <button onClick={menor}>Diminuir</button>
      <button onClick={handleAtivo} className={ativo ? "ativo" : "inativo"}>{ativo ? "Ativo" : "Inativo"}</button>
    </div>
  );
}

export default App;
// No caso, aqui, está exportando apenas um componente