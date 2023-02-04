import './App.css'
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom'
import {Header,Footer, Home,Watching} from "./component/index"



const App = () => {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/AnimeWorld" exact element={<Home/>} />
        <Route path="/AnimeWorld/anime/:name" exact element={<Watching/>} />
      </Routes>
      <Footer/>
    </Router>
  )
}



export default App
