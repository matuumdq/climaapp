import React from 'react'
import useClima from '../hooks/UseClima'
import Formulario from './Formulario'
import Loading from './Loading'
import Resultado from './Resultado'

const AppClima = () => {

    const { resultado, cargando, noResultado } = useClima()

  return (
    <div className='bg-image'>
        <div className='dos-columnas'>
            <Formulario/>


            {
                cargando ? <Loading/> : 
                resultado?.name ? <Resultado/> :
                noResultado && <p>{noResultado}</p>
            }
            
        </div>
    </div>
  )
}

export default AppClima