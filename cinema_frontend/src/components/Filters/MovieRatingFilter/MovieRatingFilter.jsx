import { Label } from '@/components/ui/label';
import { Select, SelectTrigger, SelectContent, SelectItem } from '@/components/ui/select';
import React, { useState } from 'react';

const MovieRatingFilter = () => {
    const [sortDirection, setSortDirection] = useState("highest"); // "highest" or "lowest"

    return (
        <div>
            <div className="mt-4">
                <Label htmlFor="sortDirection" className="font-semibold">
                    Sort By
                </Label>
                <Select
                    value={sortDirection}
                    onValueChange={setSortDirection}
                >
                    <SelectTrigger id="sortDirection">
                        {sortDirection === "highest" ? "Highest to Lowest" : "Lowest to Highest"}
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="highest">Highest to Lowest Movie Rating</SelectItem>
                        <SelectItem value="lowest">Lowest to Highest Movie Rating</SelectItem>
                    </SelectContent>
                </Select>
            </div>
        </div>
    );
};

export default MovieRatingFilter;
