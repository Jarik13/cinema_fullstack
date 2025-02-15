import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { getFilmList } from "@/redux/Film/Action";
import { getHallList } from "@/redux/Hall/Action";
import { createSession } from "@/redux/Session/Action";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

const AddSession = () => {
    const dispatch = useDispatch();
    const halls = useSelector((store) => store.hall?.halls || []);
    const films = useSelector((store) => store.film?.films || []);

    console.log("Halls: ", halls);
    console.log("Films: ", films);

    useEffect(() => {
        dispatch(getHallList());
        dispatch(getFilmList());
    }, [dispatch]);

    const form = useForm({
        defaultValues: {
            hall: "",
            film: "",
            start_time: "",
            end_time: "",
        },
        mode: "onChange",
    });

    const { handleSubmit, reset } = form;

    const onSubmit = (data) => {
        console.log(data);
        dispatch(createSession(data));

        reset({
            hall: "",
            film: "",
            start_time: "",
            end_time: "",
        });
    }

    return (
        <div className="p-4 border rounded bg-gray-50 w-1/2">
            <h2 className="text-xl font-bold mb-4">Add a New Session</h2>
            {/* <Form {...form}>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <FormField
                        control={form.control}
                        name="hall"
                        rules={{ required: "Hall is required" }}
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Hall</FormLabel>
                                <FormControl>
                                    <Select onValueChange={field.onChange}>
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
                                    This is hall where will be session.
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
                                    <Select onValueChange={field.onChange}>
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
                                    This is film what will be shown.
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
                                    <Input type="datetime-local" {...field} />
                                </FormControl>
                                <FormDescription>
                                    Date and time when session will start.
                                </FormDescription>
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
                                    <Input type="datetime-local" {...field} />
                                </FormControl>
                                <FormDescription>
                                    Date and time when session will end.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <Button type="submit" variant="destructive">
                        Save Session
                    </Button>
                </form>
            </Form> */}
        </div>
    );
}

export default AddSession;