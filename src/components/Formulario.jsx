import React from 'react'

const Formulario = () => {

    const [fruta, setFruta] = React.useState(''); 
    const [descripcion, setDescripcion] = React.useState(''); 
    const [lista4, setLista4] = React.useState([])

    const guardarDatos = (evento) => {
        evento.preventDefault()

    //validaciones para que existan datos en el formulario
    if (!fruta.trim()) {
        console.log('esta vacio fruta')
        return
    }

    if (!descripcion.trim()) {
        console.log('esta vacio descripcion')
        return
    }

        console.log('procesando datos....' + fruta + ' ' + descripcion)

        setLista4([
            ...lista4, 
            //el objeto que ira recibiendo las frutas que se vayan agregando
            {
                nombreFruta: fruta,
                nombreDescripcion: descripcion
            }
        ])

        //este reset es para limpiar
        evento.target.reset()
        //setFruta y setDescripcion son seteados para que vuelva a limpiar el estado
        setFruta('')
        setDescripcion('')
    }

  return (
      <div>
          <h2>Formulario</h2>
          {/* cada vez que use el onSubmit debo poner el preventDefault en la funcion del onSubmit */}
          <form onSubmit={ guardarDatos }>
              <input
                  type="text"
                  placeholder='Ingrese fruta'
                  className='form-control mb-2'
                  onChange={ (evento) => setFruta(evento.target.value) } 
              />
              <input
                  type="text"
                  placeholder='Ingrese descripción'
                  className='form-control mb-2'
                  onChange={ (evento) => setDescripcion(evento.target.value) }
              />
              <button
                  className="btn btn-primary btn-block"
                  type='submit'>
                  Agregar
              </button>
          </form>
          <ul>
              {
                  lista4.map((item4, index4)=> (
                      <li key={index4}>
                          {item4.nombreFruta} - {item4.nombreDescripcion}
                      </li>
                  ))
              }
          </ul>
    </div>
  )
}

export default Formulario