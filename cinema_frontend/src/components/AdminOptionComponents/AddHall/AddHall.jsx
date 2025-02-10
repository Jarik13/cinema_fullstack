import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";

const AddHall = () => {
    const form = useForm({
        defaultValues: {
            name: "",
            seats_count: 0,
        },
        mode: "onChange",
    });

    const { handleSubmit, setValue, reset } = form;

    const onSubmit = (data) => {
        console.log(data);

        reset({
            name: "",
            seats_count: 0,
        });
    }

    return (
        <div className="p-4 border rounded bg-gray-50 w-1/2">
            <h2 className="text-xl font-bold mb-4">Add a New Hall</h2>
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
                                    <Input placeholder="Hall name ..." {...field} />
                                </FormControl>
                                <FormDescription>
                                    This is public name of hall.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="seats_count"
                        rules={{
                            required: "Count of seats is required",
                            validate: (value) => {
                                if (value === "" || isNaN(value)) {
                                    setValue("seats_count", 0);
                                    return "Seats count must be a valid number";
                                }
                                if (value < 0) {
                                    setValue("seats_count", 0);
                                    return "Seats count cannot be less than 0";
                                }
                                return true;
                            },
                        }}
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Seats count</FormLabel>
                                <FormControl>
                                    <Input type="number" placeholder="213 ..." {...field} />
                                </FormControl>
                                <FormDescription>
                                    This is public count of all seats of hall.
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
    );
};

export default AddHall;