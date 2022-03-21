import './App.css';
import Home from './view/home/Home';
import CadComrpomisso from './view/cadCompromisso/CadComrpomisso';
import CadCompromissoForm from './view/cadCompromissoForm/CadCompromissoForm';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { Component } from 'react';
import { connect } from 'react-redux'
import { getDados } from './store/actions/compromissos'

class App extends Component {
  componentDidMount() {
    console.log('component montando')
    this.props.getDados()
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Routes >
            <Route path="/home" element={<Home />} />
            <Route path="invoices/:invoiceId" element={<CadComrpomisso />} />
            <Route path="compromissos/:compromissoId" element={<CadCompromissoForm />} />
            <Route path="/" element={<Home />} />
            <Route
              path="*"
              element={
                <main style={{ padding: "1rem" }}>
                  <p>Pagina não encontrada!</p>
                </main>
              }
            />
          </Routes>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = state => ({ auth: state.auth })

function mapDispatchToProps(dispatch) {
  return {
    getDados() {
      const action = getDados()
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
