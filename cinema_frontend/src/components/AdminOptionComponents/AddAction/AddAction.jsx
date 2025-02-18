import { Button } from '@/components/ui/button';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger } from '@/components/ui/select';
import { SelectValue } from '@radix-ui/react-select';
import React from 'react';
import { useForm } from 'react-hook-form';

const AddAction = () => {
    const form = useForm({
        defaultValues: {
            discount: 0,
            type: "Military"
        },
        mode: "onChange",
    });

    const { handleSubmit, setValue, reset } = form;

    const onSubmit = (data) => {
        console.log(data);

        reset({
            discount: 0,
            type: "Military",
        });
    };

    return (
        <div className="p-4 border rounded bg-gray-50 w-1/2">
            <h2 className="text-xl font-bold mb-4">Add a New Action</h2>
            <Form {...form}>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <FormField
                        control={form.control}
                        name="discount"
                        rules={{
                            required: "discount is required",
                            validate: (value) => {
                                if (value === "" || isNaN(value)) {
                                    setValue("discount", 0);
                                    return "Discount must be a valid number";
                                }
                                if (value < 0) {
                                    setValue("discount", 0);
                                    return "Discount cannot be less than 0";
                                }
                                return true;
                            },
                        }}
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Discount</FormLabel>
                                <FormControl>
                                    <Input type="number" placeholder="213 ..." {...field} />
                                </FormControl>
                                <FormDescription>
                                    This is the public discount on tickect/snack.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="type"
                        rules={{ required: "Discount type is required" }}
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Discount Type</FormLabel>
                                <FormControl>
                                    <Select value={field.value} onValueChange={(value) => setValue('type', value)}>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select a discount type" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="Military">Military</SelectItem>
                                            <SelectItem value="Student">Student</SelectItem>
                                            <SelectItem value="Disability">Disability</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </FormControl>
                                <FormDescription>
                                    Select the discount type (Military, Student, or Disability).
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
}

export default AddAction;