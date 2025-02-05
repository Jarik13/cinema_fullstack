import React, { useState } from 'react'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { Button } from '../ui/button';
import { Check, ChevronsUpDown } from 'lucide-react';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '../ui/command';
import { cn } from '@/lib/utils';

const locations = [
    {
        value: "lviv",
        label: "Lviv, Forum",
    },
    {
        value: "kiev",
        label: "Kiev",
    },
    {
        value: "odessa",
        label: "Odessa, Arcadia",
    },
    {
        value: "dnipro",
        label: "Dnipro, Most City",
    },
    {
        value: "kharkiv",
        label: "Kharkiv, Ave Plaza",
    },
    {
        value: "chernivtsi",
        label: "Chernivtsi, Central Square",
    },
    {
        value: "uzhhorod",
        label: "Uzhhorod, Korzo Street",
    },
    {
        value: "vinnytsia",
        label: "Vinnytsia, Roshen Fountain",
    },
    {
        value: "zaporizhzhia",
        label: "Zaporizhzhia, Khortytsia Island",
    },
    {
        value: "mykolaiv",
        label: "Mykolaiv, Soborna Street",
    },
];

const Location = () => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState("");

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
                        ? locations.find((location) => location.value === value)?.label
                        : "Select location..."
                    }
                    <ChevronsUpDown className="opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[200px] p-0">
                <Command>
                    <CommandInput placeholder="Search framework..." className="h-9" />
                    <CommandList>
                        <CommandEmpty>No locations found.</CommandEmpty>
                        <CommandGroup>
                            {locations.map((location) => (
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

export default Location