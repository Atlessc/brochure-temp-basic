import { Link } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import MainContent from './components/MainContent'


function App() {

  return (
    <div className="App">
      <Header/>
      <MainContent/>
      <Footer/>
      <Link to="/Page2" className='next-page'>&gt;</Link>
    </div>
  )
}

export default App;
