import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger } from '@/components/ui/select';
import React, { useState } from 'react'

const genres = ["Action", "Comedy", "Drama", "Horror", "Romance", "Sci-Fi"];

const GenreFilter = () => {
    const [selectedGenre, setSelectedGenre] = useState("all");

    return (
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
    )
}

export default GenreFilter