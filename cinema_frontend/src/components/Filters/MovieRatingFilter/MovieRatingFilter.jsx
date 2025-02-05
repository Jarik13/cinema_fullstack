import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import React, { useState } from 'react'

const ratingsRange = [0, 10]; 

const MovieRatingFilter = () => {
    const [movieRating, setMovieRating] = useState([0, 10]); 

    return (
        <div>
            <Label htmlFor="movieRating" className="font-semibold">
                Movie Rating (0 to 10)
            </Label>
            <Slider
                value={movieRating}
                min={ratingsRange[0]}
                max={ratingsRange[1]}
                step={0.1}
                onChange={setMovieRating}
            />
            <div className="flex justify-between text-sm mt-2">
                <span>{movieRating[0]}</span>
                <span>{movieRating[1]}</span>
            </div>
        </div>
    )
}

export default MovieRatingFilter;