import { Routes, Route } from 'react-router-dom';
import './App.css'
import MovieList from "./components/MovieList";
 

function App() {
  

  return (
     <>
         <Routes>
            <Route path="/" element={ <MovieList/>} />
        </Routes>
        <MovieList />
    </>

  )
}

export default App;