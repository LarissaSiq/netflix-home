import React from 'react';
import './index.css';
import './responsive.css';

export function FeaturedMovie({
    item
}) {
    const yearMovie = new Date(item.first_air_date);
    const genres = [];
    for (let i in item.genres) {
        genres.push(item.genres[i].name);
    }

    let description = item.overview;
    if (description.length > 300) {
        description = description.substring(0, 300) + '...'
    }

    return (
        <section className="featured" style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
        }}>
            <div className="feature--vertical">
                <div className="feature--horizontal">
                    <div className="featured--name">{item.original_name}</div>
                    <div className="featured--info">
                        <div className="featured--points">{item.vote_average} relevante</div>
                        <div className="featured--year">{yearMovie.getFullYear()}</div>
                        <div className="featured--seasons">{item.number_of_seasons} temporada{item.number_of_seasons !== 1 ? 's' : ''}</div>
                    </div>
                    <div className="featured--description">{description}</div>
                    <div className="featured--btn">
                        <button className="featured--watch">► Assistir</button>
                        <button className="featured--list">+ Minha Lista</button>
                    </div>
                    <div className="featured--genres"><b>Gêneros: </b>{genres.join(', ')}</div>
                </div>
            </div>
        </section>
    )
}