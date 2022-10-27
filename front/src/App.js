import './Styles/App.css';
import React from 'react'
import Header from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { ProductsAdm } from './components/ProductsAdm';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <Router>
    <div className="App">
        <Header />
        <br />
        <div className='container container-fluid'>
          <Routes>
            <Route path={"/ProductsAdmin"} element={<ProductsAdm />} />
          </Routes>
        </div>
        
        
        <Footer />
    </div>
    </Router>
  );
}

export default App;
