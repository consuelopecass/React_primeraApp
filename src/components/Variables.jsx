import React from 'react'

const Variables = () => {

    const saludo = '  ¡Hola desde constante creada en Variables!'
    const imagen = 'https://i.pinimg.com/736x/ef/a0/fb/efa0fb31a2d7c77fde9fdd278cecbeac.jpg'
  return (
      <div>
          <h2>Nuevo componente {saludo}</h2>
          <img src={imagen} alt="Steven Universe" width="300" height="400"/>
    </div>
  )
}

export default Variables