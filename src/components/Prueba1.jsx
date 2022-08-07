import React from 'react'

const Prueba1 = ({ mensage, setMensage }) => {
  const handleClick = () => {
    setMensage('casa')
  }
  return (
    <div className="div">
      <h2>casa - {mensage}</h2>
      <button type="button" onClick={handleClick}>
        aceptar
      </button>
    </div>
  )
}
export default Prueba1
