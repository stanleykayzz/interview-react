import React from 'react';
import Title from './Title';
import RatioBar from './RatioBar';
import DeleteButton from './DeleteButton';
import { useDispatch } from 'react-redux';
import { deleteMovie, toggleLikeDislikeMovie } from './../App/redux';

const Card = (props) => {
    const { movie } = props;
    let isCardRated = false;
    const dispatch = useDispatch();
    return (
        <div className='Card col' style={{
            margin: '1em'
        }}>
            <div className='Card-Image' style={{
                border: 'solid .5em #ffc107',
                width: '220px',
                height: '360px'
            }}>
                <DeleteButton
                    movie={movie}
                    onClick={() =>
                        dispatch(deleteMovie(movie.id))}
                />
                    <svg 
                    style={{
                        marginTop: '3em',
                        marginLeft: '4em'
                    }}
                    viewBox="0 0 24 24" width="80" height="80" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" className=" css-i6dzq1"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>

                <div className='Card-Info' style={{
                    display: 'inline-block',
                    marginTop: '5em',
                    width: '200px',
                    backgroundColor: '#e9ecef',
                    textAlign: 'center'
                }}>
                    <Title title={props.title} />
                    Category : {props.category}
                    <RatioBar
                    movie={movie}
                    isCardRated={isCardRated}
                    onClick={() =>
                        dispatch(toggleLikeDislikeMovie(movie.id))}
                     like={props.likes} dislike={props.dislikes} />
                </div>
            </div>
        </div>
    );

};

export default Card;
