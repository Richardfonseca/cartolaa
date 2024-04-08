import { Link } from 'react-router-dom';
import axios from 'axios';
import mostrarJogadores from './mostrarJogadores.jsx';

import { useEffect, useState } from 'react';


function Home() {

    useEffect(() => {
        buscarTimes();
    }, []);

    const [listarTimes, setListarTimes] = useState([]);

    const buscarTimes = async () => {
        try {
            console.log('Sucesso buscar');
            const response = await axios.get('https://api.cartola.globo.com/clubes');
            let listaTimes = Object.values(response.data)
            listaTimes.shift();
            setListarTimes(listaTimes)

        } catch (error) {
            console.log('ERRO A BUSCAR');
            console.log(error);
        }
    }


    return (
        <div>
            <img src="https://logodownload.org/wp-content/uploads/2017/05/cartola-fc-logo-5.png"
                className='cartola'></img>
            <br></br>
            {
                listarTimes.length > 0 && (
                    <ul>
                        {listarTimes.map((item, index) =>
                            <li key={index}>
                                <div>
                                    <Link to={`/mostrarJogadores/${item.id}/${item.nome}`}>
                                        <img src={item.escudos['60x60']}></img>
                                    </Link>
                                </div>
                                <div className='nomeTime'>
                                    <p> <strong>{item.nome} </strong></p>
                                    <p> {item.apelido}  </p>
                                </div>

                            </li>

                        )
                        }
                    </ul>
                )
            }
        </div>
    )
}

export default Home