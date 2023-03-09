import './App.css';
import Header from './components/Header';
import Movie from './components/Movie';
import movies from './movie.json' 

function App() {
 
  /* ternery operator */


   return (
    <div className="App">
    
      <Header />
      <div className='main'>
     {/* we will use map function to use object of array  */}
    
    {movies.map((element) => {
      return (
      <Movie
        key={element.imdbID}
        title={element.Title}
        year={element.Year}
        img={element.Poster}
      />
      )
    })
    }
     
      </div>
    </div>
  );
}

export default App;
