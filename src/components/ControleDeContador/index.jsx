import { useState } from "react"
import './style.css'
export default function ControleDeContador(){
  
const[num,setNum] = useState(0)



function soma(){
  setNum(num+1)
}
function sub(){
  if(num>0){
    setNum(num-1)
  }
}

  return(
    <div>
      <h2>botão foi clicado {num} vezes</h2>
      <button onClick={soma} >mais 1</button>
      <button onClick={sub}>menos 1</button>
    </div>
  )

}