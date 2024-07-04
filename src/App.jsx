import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Stories from './components/Stories'
import Header from './components/Header';

import {  ContextProvider } from './store/ContextApi';

function App() {

  return (
    <>
    <ContextProvider>
    <Header/>
    <center>
    <h1>Welcome To My News Website</h1>
    </center>
    <Stories/>  
    </ContextProvider>
    
    
    </>
  )
}

export default App
