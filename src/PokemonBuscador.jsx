import React from 'react'
import { useState } from 'react'



export const PokemonBuscador = () => {
    const [buscador, setBuscador] = useState('')
    const [pokemon, setPokemon] = useState('')
    const [first, setfirst] = useState('')

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
          console.log(data)
          setPokemon(data)
          setfirst(data.sprites.back_default)
        } catch (error) {
          console.error('Ha ocurrido un error: ', error)
        }
      }

      
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
        
        <div>
            <h2>{pokemon.name}</h2>
            <img src={first} alt={pokemon.name} />
            <p>{pokemon.id}</p>
        </div>

    

    </div>
  )
}
