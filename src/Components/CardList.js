import React, { useEffect, useState } from 'react';
import Card from './Card';
import Pagination from './Pagination';
import { useDispatch, useSelector } from 'react-redux';
import { searchMovieCategory,updateMovie } from '../App/redux';
import {movies$} from '../movies';

async function fetchFunction() {
  try{
	const response = await (movies$);
  return new Promise((resolve,reject) =>{
      resolve(response);
  });
  }
  catch(err) {
    throw err;
    console.log(err);
  }
}

const CardList = () => {
  const [input, setInput] = useState('');
  const [data, setData] = useState([]);

  const sortedMovies = (useSelector((state) => state.movies)).filter((m) => m.category.includes(input));
  const movies = useSelector((state) => state.movies);
  const dispatch = useDispatch();
  let tmpMovies = (input)? sortedMovies : movies; 
  return (
    <div>
      <header>
        <nav class="navbar navbar-expand-lg navbar-light bg-white">
          <div class="container-fluid">
            <button
              class="navbar-toggler"
              type="button"
              data-mdb-toggle="collapse"
              data-mdb-target="#navbarExample01"
              aria-controls="navbarExample01"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i class="fas fa-bars"></i>
            </button>
            <div class="collapse navbar-collapse" id="navbarExample01">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item active">
                  <input type={Text}
                    placeholder="Search"
                    onChange={(e) => {
                        setInput(e.currentTarget.value);
                      console.log(input)
                      dispatch(searchMovieCategory({input}));
                    }
                    }
                    />{input}
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div class="p-5 text-center bg-warning">
          <h1 class="mb-3">Particeep</h1>
          <img itemprop="image" src="https://www.particeep.com/public/ecc8540e-79a2-49fe-81de-43af604fc825/images/header/logo.svg" class="logo-on-top" alt="Logo Particeep top"></img>
        </div>
      </header>

      <div class="container-md text-center ">
        <h1>My Page</h1>
        <p>This part is inside a .container class.</p>
        <p>The .container class provides a responsive fixed width container.</p>
        <p>Resize the browser window to see that its width (max-width) will change at different breakpoints.</p>

        <div className='cardList row'>
          {
            tmpMovies.map((movie) => {
              return (
                <Card
                  movie={movie}
                  title={movie.title}
                  category={movie.category}
                  likes={movie.likes}
                  dislikes={movie.dislikes}
                />);
            })
          }
        </div>
      </div>
      <Pagination />
    </div>
  );

};

export default CardList;
