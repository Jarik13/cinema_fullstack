import React from 'react';
import { Button } from '../ui/button';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

const MovieDetails = () => {
  const navigate = useNavigate();
  const films = useSelector(store => store.film?.films || []); 
  const currentFilmNumber = useSelector(store => store.film?.currentFilmNumber || 1);
  const selectedLocation = useSelector(store => store.location?.selectedLocation || null);

  const film = films[currentFilmNumber - 1];

  return (
    <div className='flex justify-between'>
        <div className='text-3xl'>
            <h1>{film?.Name || "Film name"}</h1>
            <h2 className='text-xl mb-4'>{film?.Description || "Film description"}</h2>
            <Button 
              variant="destructive" 
              className="mt-2"
              onClick={() => navigate(`${selectedLocation?.id}/sessions`)}
            >
              Choose Session
            </Button>
        </div>
        <div>
            <div className='flex gap-4 mb-3'>
                <span>{film?.Rating || "Film rating"}</span>
                <span>•</span>
                <span>{film?.Release_year || "Film release year"}</span>
                <span>•</span>
                <div>
                  {
                    film?.Genres && film?.Genres.length > 0 ? (
                      film.Genres.map((genre, index) => (
                        <span key={index}>{genre.Name}{index < film.Genres.length - 1 && ", "}</span> 
                      ))
                    ) : (
                      <span>No genres available</span> 
                    )
                  }
                </div>
                <span>•</span>
                <span>{film?.Age_rating || "Film age rating"}</span>
            </div>
            <Button variant="destructive" size="sm">See reviews</Button>
        </div>
    </div>
  )
}

export default MovieDetails;