import React, { Fragment} from 'react'

const Contador = () => {

    //esta es otra forma de llamar al useState, diferente a la vista en Eventos
    const [contador, setContador] = React.useState(0)
    
    //FORMA LARGA
    // const aumentar = () => {
    //     console.log('click')
    //     setContador(contador + 1)
    // }

  return (
      <Fragment>
          <h2>Contador</h2>
          <h3>Nuestro número aumentando: {contador}</h3>
          {/* FORMA CORTA ya que el contador se modifica en el mismo onClick */}
          <h4>
              {
                //   contador ? exito : negativa - LO QUE SE EVALUA contador, SI se cumple exito, si NO se cumple negativa
                //OPERADOR TERNARIO (IF MODERNO)
                  contador > 2 ? 'Es mayor a 2' : 'Es menor a 2'
              }
          </h4>
          <button onClick={ () => setContador(contador + 1)}>Aumentar contador</button>
        </Fragment>
  )
}

export default Contador