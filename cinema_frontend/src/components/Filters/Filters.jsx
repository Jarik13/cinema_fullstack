import React from "react";
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

const Filters = () => {
    return (
        <Popover>
            <PopoverTrigger>
                <Button variant="outline" className="flex items-center gap-2">
                    Filters <ChevronDown className="w-4 h-4" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80 p-4">
                <div className="space-y-4">
                    <GenreFilter />
                    <YearFilter />
                    <DurationFilter />
                    <AgeRatingFilter />
                    <MovieRatingFilter />

                    <div className="text-right">
                        <Button
                            variant="destructive"
                            onClick={() =>
                                console.log({
                                    selectedGenre,
                                    selectedYear,
                                    duration,
                                    selectedAgeRating,
                                    movieRating,
                                })
                            }
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
