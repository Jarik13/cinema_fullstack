import { Button } from '@/components/ui/button';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import React from 'react';
import { useForm } from 'react-hook-form';

const AddFilm = () => {
    const form = useForm({
        defaultValues: {
            name: "",
            description: "",
            release_year: 1930,
            image_url: "",
            genres: [],
        },
        mode: "onChange",
    });

    const { handleSubmit, setValue, reset } = form;

    const onSubmit = (data) => {
        console.log(data);

        reset({
            name: "",
            description: "",
            release_year: 1930,
            image_url: "",
            genres: [],
        });
    }

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

                    <Button type="submit" variant="destructive">
                        Save All
                    </Button>
                </form>
            </Form>
        </div>
    )
}

export default AddFilm;