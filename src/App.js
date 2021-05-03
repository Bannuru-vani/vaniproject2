import React from 'react';
import './style.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content';
function App(){
  return(
    <div>
        <h2 class="pa">welcome to react</h2>
        <Header/>
        <Footer/>
       <Content/>
    </div>
  )
}
export default App;