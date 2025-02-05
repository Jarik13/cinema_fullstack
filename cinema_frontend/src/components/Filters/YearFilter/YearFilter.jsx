import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import React, { useState } from 'react';

const YearFilter = () => {
    const [selectedYear, setSelectedYear] = useState("");
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
    )
}

export default YearFilter;