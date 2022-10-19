import React, { useState } from 'react'
//ACA RECORREMOS UN ARRAY CON MAP DE JS Y KEY DE REACT
const Listas = () => {


    const estadoInicial = [1, 2, 3, 4, 5]

    const [lista, setLista] = useState(estadoInicial)

  return (
      <div>
          <h2>Listas</h2>
          {
              lista.map((item, index) => (
                //   para usar map en React siempre debe estar asociado a una key
                  <h4 key={index}>{item}</h4>
              ))
          }
    </div>
  )
}

export default Listas