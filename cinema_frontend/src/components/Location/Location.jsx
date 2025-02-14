import React, { useEffect, useState } from 'react'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { Button } from '../ui/button';
import { Check, ChevronsUpDown } from 'lucide-react';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '../ui/command';
import { cn } from '@/lib/utils';
import { useDispatch, useSelector } from 'react-redux';
import { getLocationList, setSelectedLocation } from '@/redux/Location/Action';

const Location = () => {
    const dispatch = useDispatch();
    const locations = useSelector(store => store.location?.locations || []);
    const selectedLocation = useSelector(store => store.location?.selectedLocation || null);

    const [open, setOpen] = useState(false);

    useEffect(() => {
        dispatch(getLocationList()); 
    }, [dispatch]);

    const formattedLocations = locations.map(location => ({
        id: location.id,
        value: location.name + ", " + location.city, 
        label: `${location.name}, ${location.city}` 
    }));

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger>
                <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="w-[200px] justify-between"
                >
                    {selectedLocation 
                        ? formattedLocations.find((loc) => loc.id === selectedLocation.id)?.label
                        : "Select location..."
                    }
                    <ChevronsUpDown className="opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[200px] p-0">
                <Command>
                    <CommandInput placeholder="Search location..." className="h-9" />
                    <CommandList>
                        <CommandEmpty>No locations found.</CommandEmpty>
                        <CommandGroup>
                            {formattedLocations.map((location) => (
                                <CommandItem
                                    key={location.id}
                                    onSelect={() => {
                                        dispatch(setSelectedLocation(location)); 
                                        setOpen(false);
                                    }}
                                >
                                    {location.label}
                                    <Check
                                        className={cn(
                                            "ml-auto",
                                            selectedLocation?.id === location.id ? "opacity-100" : "opacity-0"
                                        )}
                                    />
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    );
}

export default Location;
