import React, {useState} from 'react'

const Listas2 = () => {

    //array de objetos
    const estadoInicial2 = [
        { id: 1, texto: 'tarea 1' }, 
        { id: 2, texto: 'tarea 2' }, 
        { id: 3, texto: 'tarea 3' }, 
    ]

    const [lista2, setLista2] = useState(estadoInicial2)

  return (
      <div>
          <h2>Listas 2</h2>
          {
              lista2.map((item2, index2) => (
                  //si es array de objeto debe ser llamando a un parametro del objeto, en este caso, texto
                  <h4 key={index2}>{ item2.texto }</h4>
              ))
          }
    </div>
  )
}

export default Listas2