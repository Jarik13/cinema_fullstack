import { Button } from '@/components/ui/button';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const genres = ["Genre 1", "Genre 2", "Genre 3", "Genre 4"];

const AddFilm = () => {
    const form = useForm({
        defaultValues: {
            name: "",
            description: "",
            release_year: 1930,
            image_url: "",
            trailer_url: "",
            genres: [],
        },
        mode: "onChange",
    });

    const [selectedGenres, setSelectedGenres] = useState([]);
    const { handleSubmit, setValue, reset } = form;

    const onSubmit = (data) => {
        console.log(data);

        setSelectedGenres([]);
        reset({
            name: "",
            description: "",
            release_year: 1930,
            image_url: "",
            trailer_url: "",
            genres: [],
        });
    }

    const handleGenreChange = (value) => {
        if (!selectedGenres.includes(value)) {
            const updatedGenres = [...selectedGenres, value];
            setSelectedGenres(updatedGenres);
            setValue('genres', updatedGenres);
        }
    };

    return (
        <div className="p-4 border rounded bg-gray-50 w-1/2">
            <h2 className="text-xl font-bold mb-4">Add a New Film</h2>
            <Form {...form}>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <FormField
                        control={form.control}
                        name="name"
                        rules={{ required: "Name is required" }}
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Name</FormLabel>
                                <FormControl>
                                    <Input placeholder="Film name ..." {...field} />
                                </FormControl>
                                <FormDescription>
                                    This is public name of film.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="description"
                        rules={{ required: "Description is required" }}
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Description</FormLabel>
                                <FormControl>
                                    <Textarea placeholder="Film description ..." {...field} />
                                </FormControl>
                                <FormDescription>
                                    This is public description of film.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="release_year"
                        rules={{
                            required: "Release year is required",
                            validate: (value) => {
                                if (value === "" || isNaN(value)) {
                                    setValue("release_year", 1930);
                                    return "Release year must be a valid number";
                                }
                                if (value < 1930) {
                                    setValue("release_year", 1930);
                                    return "Release year cannot be less than 1930";
                                }
                                return true;
                            },
                        }}
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Release year</FormLabel>
                                <FormControl>
                                    <Input type="number" placeholder="1930 ..." {...field} />
                                </FormControl>
                                <FormDescription>
                                    This is release year of film.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="image_url"
                        rules={{ required: "Image URL is required" }}
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Film image url</FormLabel>
                                <FormControl>
                                    <Input placeholder="Film image url ..." {...field} />
                                </FormControl>
                                <FormDescription>
                                    This is public image of film.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="trailer_url"
                        rules={{ required: "Trailer URL is required" }}
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Film trailer url</FormLabel>
                                <FormControl>
                                    <Input placeholder="Film trailer url ..." {...field} />
                                </FormControl>
                                <FormDescription>
                                    This is public trailer of film.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="genres"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Genres</FormLabel>
                                <FormControl>
                                    <Select onValueChange={(value) => handleGenreChange(value)}>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select a genre" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {genres.map((genre, index) => (
                                                <SelectItem key={index} value={genre}>{genre}</SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </FormControl>
                                <FormDescription>
                                    This is film genres.
                                </FormDescription>
                                <FormMessage />
                                <div className="mt-4 w-full">
                                    <div className="flex gap-4">
                                        {selectedGenres.map((genre, index) => (
                                            <div key={index} className="w-20 px-3 py-1 text-[12px] shadow-lg rounded-lg bg-white">{genre}</div>
                                        ))}
                                    </div>
                                </div>

                            </FormItem>
                        )}
                    />

                    <Button type="submit" variant="destructive">
                        Save All
                    </Button>
                </form>
            </Form>
        </div>
    );
};

export default AddFilm;
