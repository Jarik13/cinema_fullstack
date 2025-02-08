import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';

const halls = ["Hall 1", "Hall 2", "Hall 3", "Hall 4"];
const films = ["Movie A", "Movie B", "Movie C", "Movie D"];

const EditSessionCard = ({ isOpen, onClose, editSession, onChange, onSave }) => {
    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Edit Session</DialogTitle>
                </DialogHeader>
                <div className="flex flex-col gap-4">
                    <Label htmlFor="hall">Hall</Label>
                    <Select
                        value={editSession.hall}
                        onValueChange={(value) => onChange({ name: 'hall', value })}
                    >
                        <SelectTrigger>
                            <SelectValue placeholder="Select a hall" />
                        </SelectTrigger>
                        <SelectContent>
                            {halls.map((hall, index) => (
                                <SelectItem key={index} value={hall}>
                                    {hall}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>

                    <Label htmlFor="film">Film</Label>
                    <Select
                        value={editSession.film}
                        onValueChange={(value) => onChange({ name: 'film', value })}
                    >
                        <SelectTrigger>
                            <SelectValue placeholder="Select a film" />
                        </SelectTrigger>
                        <SelectContent>
                            {films.map((film, index) => (
                                <SelectItem key={index} value={film}>
                                    {film}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>

                    <Label htmlFor="start_time">Start Time</Label>
                    <Input
                        name="start_time"
                        type="time"
                        value={editSession.start_time}
                        onChange={(e) => onChange({ name: 'start_time', value: e.target.value })}
                        placeholder="Start Time"
                    />

                    <Label htmlFor="end_time">End Time</Label>
                    <Input
                        name="end_time"
                        type="time"
                        value={editSession.end_time}
                        onChange={(e) => onChange({ name: 'end_time', value: e.target.value })}
                        placeholder="End Time"
                    />
                </div>
                <DialogFooter>
                    <Button onClick={onSave}>Save Changes</Button>
                    <Button variant="outline" onClick={onClose}>Cancel</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

export default EditSessionCard;
