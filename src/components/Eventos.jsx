import React, { Fragment, useState } from 'react'
//useState es un HOOK, es un estado que le da interactividad al funcionamiento de algun elemento

const Eventos = () => {

    //texto es nuestro estado, setTexto es la funcion que modifica el estado
    const [texto, setTexto] = useState('Texto desde estado')

    const eventoClick = () => {
        console.log('Me diste un click')
        setTexto('Cambiando el texto....')
    }

    return (
      //el uso de Fragment iguala al div que se utiliza en cada componente
      <Fragment>
          <hr />
            <h2>{ texto }</h2>
          <button onClick={ () =>eventoClick() }>Click</button>
    </Fragment>
  )
}

export default Eventos