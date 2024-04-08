// import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
// import clubes from './clubes.json'
// import Jogadores from './jogadores.json'
import './App.css';

function MostrarJogadores() {
    useEffect(() => {
        buscarTime()
    }, [])


    const [nomeTime, setNomeTime] = useState('')
    const [atletas, setAtletas] = useState([])
    let { id } = useParams()
    let { time } = useParams()

    const buscarTime = async () => {
        try {
            console.log('Sucesso buscar');

            const response = await axios.get(`https://api.cartola.globo.com/atletas/mercado/${id}`);
            let atletas = response.data.atletas;
            if (atletas != null) {
                setAtletas(atletas)
                setNomeTime(time)

            } else {
                setNomeTime(time)
            }

        } catch (erro) {
            console.log('ERRO')
            console.log(erro)
        }


    }

    const resolucaoFoto = (foto) => {
        if (typeof (foto) == 'string') {
            let mudarResolucao = foto.replace('FORMATO', '220x220');
            return mudarResolucao
        }
    }
    return (
        <div >
            <img src="https://logodownload.org/wp-content/uploads/2017/05/cartola-fc-logo-5.png"
                className='cartola'></img>
            <br></br>
            <h1>Jogadores do {nomeTime}!</h1>

            {
                atletas.length > 0 && (
                    <ul>
                        {atletas.map((item, index) =>
                            <li key={index}>
                                <img src={resolucaoFoto(item.foto)} className='fotoJogador'></img>
                                <p className='mostar'> {item.apelido}</p>


                            </li>

                        )
                        }
                    </ul>
                )
            }

            {
                atletas.length == 0 && (
                    <p>Nenhum atleta cadastrado!</p>
                )
            }

        </div>
    )
}

export default MostrarJogadores