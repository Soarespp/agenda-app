import React from 'react';
import Header from '../../containers/Header/Header';
import ListaCompromissos from '../../containers/listaCompromissos/ListaCompromissos';

const Home = (props) => {
    return (
        <div>
            <Header />
            <ListaCompromissos />
        </div>
    );
}
export default Home;