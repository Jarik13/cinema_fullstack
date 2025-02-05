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

const ageRatings = ["0+", "3+", "6+", "12+", "16+", "18+"];
const ratingsRange = [0, 10]; 

const Filters = () => {
    const [selectedYear, setSelectedYear] = useState("");
    const [duration, setDuration] = useState([0, 240]);
    const [selectedAgeRating, setSelectedAgeRating] = useState("all");
    const [movieRating, setMovieRating] = useState([0, 10]); 

    const currentYear = new Date().getFullYear();

    const handleYearChange = (e) => {
        const value = e.target.value;
        setSelectedYear(value);
    };

    const handleYearBlur = () => {
        const value = parseInt(selectedYear, 10);
        if (value < 1930) {
            setSelectedYear(1930);  
        } else if (value > currentYear) {
            setSelectedYear(currentYear); 
        }
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
                    {/* Genre Filter */}
                    <GenreFilter />

                    {/* Year Filter */}
                    <div>
                        <Label htmlFor="year" className="font-semibold">
                            Year (from 1930 to current year)
                        </Label>
                        <Input
                            id="year"
                            type="text"
                            placeholder="Enter year"
                            value={selectedYear}
                            onChange={handleYearChange}
                            onBlur={handleYearBlur} 
                            min={1930} 
                            max={currentYear}
                        />
                    </div>

                    {/* Duration Filter */}
                    <div>
                        <Label htmlFor="duration" className="font-semibold">
                            Duration (min)
                        </Label>
                        <Slider
                            value={duration}
                            min={0}
                            max={300}
                            step={10}
                            onChange={setDuration}
                        />
                        <div className="flex justify-between text-sm mt-2">
                            <span>{duration[0]} min</span>
                            <span>{duration[1]} min</span>
                        </div>
                    </div>

                    {/* Age Rating Filter */}
                    <div>
                        <Label htmlFor="ageRating" className="font-semibold">
                            Age Rating
                        </Label>
                        <Select value={selectedAgeRating} onValueChange={setSelectedAgeRating}>
                            <SelectTrigger id="ageRating">
                                {selectedAgeRating === "all" ? "All" : selectedAgeRating}
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="all">All</SelectItem>
                                {ageRatings.map((rating) => (
                                    <SelectItem key={rating} value={rating}>
                                        {rating}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>

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
