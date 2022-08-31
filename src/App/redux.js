import { configureStore, createSlice } from '@reduxjs/toolkit';
import { movies$ } from '../movies';

async function fetchFunction() {
  try {
    const response = await (movies$);
    return new Promise((resolve, reject) => {
      resolve(response);
    });
  }
  catch (err) {
    throw err;
  }
}

const moviesSlice = createSlice({
  name: "movie",
  initialState: [
    {
      id: '1',
      title: 'Oceans 8',
      category: 'Comedy',
      likes: 4,
      dislikes: 1
    }, {
      id: '2',
      title: 'Midnight Sun',
      category: 'Comedy',
      likes: 2,
      dislikes: 0
    }, {
      id: '3',
      title: 'Les indestructibles 2',
      category: 'Animation',
      likes: 3,
      dislikes: 1
    }, {
      id: '4',
      title: 'Sans un bruit',
      category: 'Thriller',
      likes: 6,
      dislikes: 6
    }, {
      id: '5',
      title: 'Creed II',
      category: 'Drame',
      likes: 16,
      dislikes: 2
    }, {
      id: '6',
      title: 'Pulp Fiction',
      category: 'Thriller',
      likes: 11,
      dislikes: 3
    }, {
      id: '7',
      title: 'Pulp Fiction',
      category: 'Thriller',
      likes: 12333,
      dislikes: 32
    }, {
      id: '8',
      title: 'Seven',
      category: 'Thriller',
      likes: 2,
      dislikes: 1
    }, {
      id: '9',
      title: 'Inception',
      category: 'Thriller',
      likes: 2,
      dislikes: 1
    }, {
      id: '10',
      title: 'Gone Girl',
      category: 'Thriller',
      likes: 22,
      dislikes: 12
    },
  ],
  reducers: {
    addMovie: (state, action) => {
      const newMovie = {
        id: 11,
        title: action.payload.title,
        category: action.payload.category,
        likes: action.payload.likes,
        dislikes: action.payload.dislikes
      };
      state.push(newMovie);
    },
    updateMovie: (state, action) => {
      state.push(action.payload);
    },
    toggleLikeDislikeMovie: (state, action) => {
      let movie = state.find((m) => m.id == action.payload.id);
      (action.payload.like %2 !== 0) ? movie.likes += 1 : movie.dislikes += 1;
    },
    deleteMovie: (state, action) => {
      state = state.filter((m) => m.id !== action.payload);
      return state;
    },
  }
});

export const store = configureStore({
  reducer: {
    movies: moviesSlice.reducer
  },
});

export const { deleteMovie, updateMovie, toggleLikeDislikeMovie, searchMovieCategory } = moviesSlice.actions;
