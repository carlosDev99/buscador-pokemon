import React from 'react'
import { useState } from 'react'



export const PokemonBuscador = () => {
    const [buscador, setBuscador] = useState('')
    const [Pokemon, setPokemon] = useState('')

    const Subir=(e)=>{
        e.preventDefault()
        fetchPokemon()

    }

    const Change=(e)=>{
        setBuscador(e.target.value)

    }

    const fetchPokemon = async () => {
        try {
          const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${buscador}`)
          const data = await response.json()
          console.log(data.results)
          setPokemon(data.results)
        } catch (error) {
          console.error('Ha ocurrido un error: ', error)
        }
      }
      console.log({Pokemon})

  return (
    <div>
        <h1>Buscador de Pokemon</h1>
        <form onSubmit={Subir}>
            <input
                type='text'
                placeholder='busca un pokemon'
                value={buscador}
                onChange={Change}
            />
            <button type='submit' >Buscar</button>

    
        </form>
        
        <div>{Pokemon}
        </div>
    </div>
  )
}
