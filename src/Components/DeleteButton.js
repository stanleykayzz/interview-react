import React from 'react';
import { deleteMovie } from './../App/redux';
import { useDispatch } from 'react-redux';

function DeleteButton(props) {
    const dispatch = useDispatch();
    const { movie } = props;

    return (
        <button
            type="button"
            className="btn-close"
            aria-label="Close"
            onClick={() =>
                dispatch(deleteMovie(movie.id))}
            style={{
                backgroundColor: "red",
                display: 'block',
                marginTop: '0.5em',
                marginRight: '0.5em',
                marginLeft: '85%',
                width: '20px',
                height: '20px',
                textAlign: 'center'
            }}>
        </button>
    );
}

export default DeleteButton;