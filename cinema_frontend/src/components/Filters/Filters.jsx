import React, { useState } from "react";
import {
    Popover,
    PopoverTrigger,
    PopoverContent,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Select, SelectTrigger, SelectContent, SelectItem } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { ChevronDown } from "lucide-react";
import GenreFilter from "./GenreFilter/GenreFilter";
import YearFilter from "./YearFilter/YearFilter";
import DurationFilter from "./DurationFilter/DurationFilter";
import AgeRatingFilter from "./AgeRatingFilter/AgeRatingFilter";

const ratingsRange = [0, 10]; 

const Filters = () => {
    const [movieRating, setMovieRating] = useState([0, 10]); 

    return (
        <Popover>
            <PopoverTrigger>
                <Button variant="outline" className="flex items-center gap-2">
                    Filters <ChevronDown className="w-4 h-4" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80 p-4">
                <div className="space-y-4">
                    {/* Genre Filter */}
                    <GenreFilter />

                    {/* Year Filter */}
                    <YearFilter />

                    {/* Duration Filter */}
                    <DurationFilter />

                    {/* Age Rating Filter */}
                    <AgeRatingFilter />

                    {/* Movie Rating Filter */}
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

                    {/* Apply Filters Button */}
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
