import React, {useState, useEffect} from 'react'


const ItemCount = ({initial, stock, onAdd}) => {
    const [add] = useState("Cantidad");
    const [counter, setCounter] = useState(parseInt(initial));

    const handlerCounterDown= ()=>{
        setCounter(counter - 1);
    }

    const handlerCounterUp= ()=>{
        setCounter(counter + 1);
    }

    useEffect (()=> {
        setCounter(parseInt(initial));
    }, [initial])

  return (
    <div>
        <p>{add}</p>
        <p>{counter}</p>
        <button disabled={counter <=0} onClick={handlerCounterDown}>-</button>
        <button disabled={counter >= stock} onClick={handlerCounterUp}>+</button>
        <div>
            <button disabled={stock<=0} onClick={()=> onAdd(counter)} >Agregar al carrito</button>
        </div>
    </div>
  )
}

export default ItemCount