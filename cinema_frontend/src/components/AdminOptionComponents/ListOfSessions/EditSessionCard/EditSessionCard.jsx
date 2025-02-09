import React, { useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useForm } from "react-hook-form";

const halls = ["Hall 1", "Hall 2", "Hall 3", "Hall 4"];
const films = ["Movie A", "Movie B", "Movie C", "Movie D"];

const EditSessionCard = ({ session, onSave, onClose }) => {
    const form = useForm({
        defaultValues: {
            hall: session?.hall || "",
            film: session?.film || "",
            start_time: session?.start_time || "",
            end_time: session?.end_time || "",
        },
        mode: "onChange",
    });

    const { handleSubmit } = form;
    const modalRef = useRef(null);

    const handleClickOutside = (e) => {
        if (modalRef.current && !modalRef.current.contains(e.target)) {
            onClose(); 
        }
    };

    const onSubmit = (data) => {
        onSave(data);
    };

    return (
        <div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
            onClick={handleClickOutside}
        >
            <div
                ref={modalRef}
                className="p-4 border rounded-lg bg-gray-50 w-1/3"
                onClick={(e) => e.stopPropagation()} 
            >
                <h2 className="text-xl font-bold mb-4">Edit Session</h2>
                <Form {...form}>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                        <FormField
                            control={form.control}
                            name="hall"
                            rules={{ required: "Hall is required" }}
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Hall</FormLabel>
                                    <FormControl>
                                        <Select onValueChange={field.onChange} value={field.value}>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select a hall" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {halls.map((hall, index) => (
                                                    <SelectItem key={index} value={hall}>{hall}</SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                    </FormControl>
                                    <FormDescription>
                                        This is the hall where the session will be held.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="film"
                            rules={{ required: "Film is required" }}
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Film</FormLabel>
                                    <FormControl>
                                        <Select onValueChange={field.onChange} value={field.value}>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select a film" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {films.map((film, index) => (
                                                    <SelectItem key={index} value={film}>{film}</SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                    </FormControl>
                                    <FormDescription>
                                        This is the film that will be shown.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="start_time"
                            rules={{ required: "Start time is required" }}
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Start Time</FormLabel>
                                    <FormControl>
                                        <Input {...field} type="text" placeholder="Start Time" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="end_time"
                            rules={{ required: "End time is required" }}
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>End Time</FormLabel>
                                    <FormControl>
                                        <Input {...field} type="text" placeholder="End Time" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <Button type="submit" className="mt-4">
                            Save Changes
                        </Button>
                    </form>
                </Form>
            </div>
        </div>
    );
};

export default EditSessionCard;
