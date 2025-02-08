import React, { useState } from 'react';
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogFooter } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';

const halls = ["Hall 1", "Hall 2", "Hall 3", "Hall 4"];
const films = ["Movie A", "Movie B", "Movie C", "Movie D"];

const EditSessionCard = ({ isOpen, onClose }) => {
    const [hall, setHall] = useState("");
    const [film, setFilm] = useState("");
    const [startTime, setStartTime] = useState("");
    const [endTime, setEndTime] = useState("");

    const handleSave = () => {
        console.log({ hall, film, startTime, endTime });

        setHall("");
        setFilm("");
        setStartTime("");
        setEndTime("");
    };

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent>
                <DialogHeader>
                    <h2>Edit Session</h2>
                </DialogHeader>

                <div className="space-y-4">
                    <div>
                        <label>Hall</label>
                        <Select value={hall} onValueChange={setHall}>
                            <SelectTrigger>
                                <SelectValue placeholder="Select a hall" />
                            </SelectTrigger>
                            <SelectContent>
                                {halls.map((hallOption, index) => (
                                    <SelectItem key={index} value={hallOption}>
                                        {hallOption}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>

                    <div>
                        <label>Film</label>
                        <Select value={film} onValueChange={setFilm}>
                            <SelectTrigger>
                                <SelectValue placeholder="Select a film" />
                            </SelectTrigger>
                            <SelectContent>
                                {films.map((filmOption, index) => (
                                    <SelectItem key={index} value={filmOption}>
                                        {filmOption}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>

                    <div>
                        <label>Start Time</label>
                        <Input
                            type="datetime-local"
                            value={startTime}
                            onChange={(e) => setStartTime(e.target.value)}
                        />
                    </div>

                    <div>
                        <label>End Time</label>
                        <Input
                            type="datetime-local"
                            value={endTime}
                            onChange={(e) => setEndTime(e.target.value)}
                        />
                    </div>
                </div>

                <DialogFooter>
                    <Button type="button" variant="secondary" onClick={onClose}>Cancel</Button>
                    <Button type="button" variant="destructive" onClick={handleSave}>Save Session</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

export default EditSessionCard;
