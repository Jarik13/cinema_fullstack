import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger } from '@/components/ui/select';
import React, { useState } from 'react'

const ageRatings = ["0+", "3+", "6+", "12+", "16+", "18+"];

const AgeRatingFilter = () => {
    const [selectedAgeRating, setSelectedAgeRating] = useState("all");

    return (
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
    )
}

export default AgeRatingFilter