import React, { useEffect, useState } from 'react'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { Button } from '../ui/button';
import { Check, ChevronsUpDown } from 'lucide-react';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '../ui/command';
import { cn } from '@/lib/utils';
import { useDispatch, useSelector } from 'react-redux';
import { getLocationList } from '@/redux/Location/Action';

const Location = () => {
    const dispatch = useDispatch();
    const locations = useSelector(store => store.location?.locations || []);

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState("");

    useEffect(() => {
        dispatch(getLocationList()); 
    }, [dispatch]);

    const formattedLocations = locations.map(location => ({
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
                    {value
                        ? formattedLocations.find((location) => location.value === value)?.label
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
                                    key={location.value}
                                    onSelect={() => {
                                        setValue(location.value === value ? "" : location.value);
                                        setOpen(false);
                                    }}
                                >
                                    {location.label}
                                    <Check
                                        className={cn(
                                            "ml-auto",
                                            value === location.value ? "opacity-100" : "opacity-0"
                                        )}
                                    />
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover >
    )
}

export default Location;