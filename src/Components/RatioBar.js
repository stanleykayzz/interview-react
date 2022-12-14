import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleLikeDislikeMovie } from '../App/redux';

const RatioBar = (props) => {
    const dispatch = useDispatch();
    let {movie, isCardRated} = props;
    let like = false;

    return (
        <div>
            <button className="btn btn-outline-danger" 
            onClick={() => 
            {
                dispatch(toggleLikeDislikeMovie({id : movie.id, isCardRated, like: movie.like,dislike: movie.dislike}))
            }}
            type="button"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart-fill" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"></path>
                </svg>
                : {props.like} /
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heartbreak-fill" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M8.931.586 7 3l1.5 4-2 3L8 15C22.534 5.396 13.757-2.21 8.931.586ZM7.358.77 5.5 3 7 7l-1.5 3 1.815 4.537C-6.533 4.96 2.685-2.467 7.358.77Z"></path>
                </svg>

                : {props.dislike}
            </button>
        </div>
    );
};

export default RatioBar;