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

const genres = ["Action", "Comedy", "Drama", "Horror", "Romance", "Sci-Fi"];
const ageRatings = ["All Ages", "PG-13", "R", "18+"];

const Filters = () => {
    const [selectedGenre, setSelectedGenre] = useState("all");
    const [selectedYear, setSelectedYear] = useState("");
    const [duration, setDuration] = useState([0, 240]);
    const [selectedAgeRating, setSelectedAgeRating] = useState("all");

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
                    <div>
                        <Label htmlFor="genre" className="font-semibold">
                            Genre
                        </Label>
                        <Select value={selectedGenre} onValueChange={setSelectedGenre}>
                            <SelectTrigger id="genre">
                                {selectedGenre === "all" ? "All" : selectedGenre}
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="all">All</SelectItem>
                                {genres.map((genre) => (
                                    <SelectItem key={genre} value={genre}>
                                        {genre}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>

                    {/* Year Filter */}
                    <div>
                        <Label htmlFor="year" className="font-semibold">
                            Year
                        </Label>
                        <Input
                            id="year"
                            type="number"
                            placeholder="Enter year"
                            value={selectedYear}
                            onChange={(e) => setSelectedYear(e.target.value)}
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
