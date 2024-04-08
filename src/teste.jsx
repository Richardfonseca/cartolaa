import { useEffect, useState } from 'react'
import './Home.css'
import axios from 'axios'
import { useParams } from 'react-router-dom'

function Clubes() {
    const [time, setTime] = useState()
    const [times, setTimes] = useState([]);
    let { id } = useParams()

    useEffect(() => {
        mostrarClubes()
    }, [])

    const mostrarClubes = async () => {
        const resultado = await axios.get('https://api.cartola.globo.com/clubes')
        const timeInfo = Object.values(resultado.data)
        console.log(timeInfo)
        setTime(timeInfo)
    }

    return (
        <>
            {time.map((times) =>
                <div>
                    <h5>{times.nome}</h5>
                    <h5>{times.apelido}</h5>
                    <img src={times.escudos['60x60']}></img>
                </div>
            )}{!time && (
                <p>Carregando...</p>
            )}
        </>
    )
}
z
export default Clubes