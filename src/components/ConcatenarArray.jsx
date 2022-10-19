import React, { useState} from 'react'


const ConcatenarArray = () => {

    const estadoInicial3 = [
        { id: 1, texto: 'tarea 1' },
        { id: 2, texto: 'tarea 2' }, 
        { id: 3, texto: 'tarea 3' }, 
    ]

    const [lista3, setLista3] = useState(estadoInicial3)

    //con este ...lista3 me traigo todo lo del array estadoInicial3 que se idnica como lista3 en el useState
    const agregarElemento = () => {
        console.log('objeto')
        setLista3([
            ...lista3, 
            { id: 4, texto: 'tarea 4' }
        ])
    }


  return (
      <div>
          <h2>Listas concatenar Array</h2>
          {
              lista3.map((item3, index3) => (
                  <h4 key={index3}>{ item3.texto}</h4>
              ))
          }
          <button onClick={()=> agregarElemento()}>Agregar</button>
    </div>
  )
}

export default ConcatenarArray