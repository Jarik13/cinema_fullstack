import React, { useState } from "react";
import {
    Popover,
    PopoverTrigger,
    PopoverContent,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import GenreFilter from "./GenreFilter/GenreFilter";
import YearFilter from "./YearFilter/YearFilter";
import DurationFilter from "./DurationFilter/DurationFilter";
import AgeRatingFilter from "./AgeRatingFilter/AgeRatingFilter";
import MovieRatingFilter from "./MovieRatingFilter/MovieRatingFilter";
import { useDispatch } from "react-redux";
import { filterFilms } from "@/redux/User/Action";

const Filters = () => {
    const dispatch = useDispatch();

    const [selectedGenre, setSelectedGenre] = useState("all");
    const [selectedYear, setSelectedYear] = useState(1930);
    const [duration, setDuration] = useState("01:30");
    const [selectedAgeRating, setSelectedAgeRating] = useState(0);
    const [movieRating, setMovieRating] = useState([0, 10]);

    const applyFilters = () => {
        console.log("selectedGenre:", selectedGenre);
        console.log("movieRating:", movieRating);
        console.log("selectedYear:", selectedYear);
        console.log("selectedAgeRating:", selectedAgeRating);
        console.log("duration:", duration);
    
        dispatch(filterFilms(selectedGenre, movieRating, selectedYear, selectedAgeRating, duration));
    };    

    return (
        <Popover>
            <PopoverTrigger>
                <Button variant="outline" className="flex items-center gap-2">
                    Filters <ChevronDown className="w-4 h-4" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80 p-4">
                <div className="space-y-4">
                    <GenreFilter genre={selectedGenre} setGenre={setSelectedGenre} />
                    <YearFilter year={selectedYear} setYear={setSelectedYear} />
                    <DurationFilter duration={duration} setDuration={setDuration} />
                    <AgeRatingFilter ageRating={selectedAgeRating} setAgeRating={setSelectedAgeRating} />
                    <MovieRatingFilter movieRating={movieRating} setMovieRating={setMovieRating} />

                    <div className="text-right">
                        <Button
                            variant="destructive"
                            onClick={applyFilters}
                        >
                            Apply Filters
                        </Button>
                    </div>
                </div>
            </PopoverContent>
        </Popover>
    );
};

export default Filters;
