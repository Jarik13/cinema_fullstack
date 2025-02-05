import { Label } from '@/components/ui/label'
import { Slider } from '@/components/ui/slider'
import React, { useState } from 'react'

const DurationFilter = () => {
    const [duration, setDuration] = useState([0, 240]);

    return (
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
    )
}

export default DurationFilter