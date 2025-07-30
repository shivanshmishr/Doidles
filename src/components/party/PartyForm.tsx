"use client";
import React from "react";
import { useForm } from "react-hook-form";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea"; // Add this if not already created

type FormValues = {
    name: string;
    phone: string;
    query: string;
};

const PartyForm = () => {
    const form = useForm<FormValues>({
        defaultValues: {
            name: "",
            phone: "",
            query: "",
        },
    });

    const onSubmit = (data: FormValues) => {
        console.log("Form Data:", data);
        form.reset();
    };

    return (
        <div className="flex flex-col justify-center items-center mt-4 mb-10 px-4">
            <h1 className="text-center text-white text-2xl md:text-4xl font-semibold my-10">
                Need more information then write to us
            </h1>
            <div className="w-full max-w-lg p-8 bg-[#111111] rounded-2xl shadow-[0_0_20px_#8e2de210] text-white">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        {/* Name Field */}
                        <FormField
                            control={form.control}
                            name="name"
                            rules={{ required: "Name is required" }}
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-md md:text-xl">Name</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Type your name"
                                            {...field}
                                            className="bg-white/10 px-4 text-md md:text-lg py-2 border-2 border-white/10 text-white placeholder-gray-400"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )} 
                        />

                        {/* Phone Number Field */}
                        <FormField
                            control={form.control}
                            name="phone"
                            rules={{
                                required: "Phone number is required",
                                pattern: {
                                    value: /^[0-9]{10}$/,
                                    message: "Enter a valid 10-digit phone number",
                                },
                            }}
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-md md:text-xl">Phone Number</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Type your phone number"
                                            {...field}
                                            className="bg-white/10 px-4 text-md md:text-lg py-2 border-2 border-white/10 text-white placeholder-gray-400"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* Query Field */}
                        <FormField
                            control={form.control}
                            name="query"
                            rules={{ required: "Query is required" }}
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-md md:text-xl">Query</FormLabel>
                                    <FormControl>
                                        <Textarea
                                            placeholder="Type your query"
                                            rows={4}
                                            {...field}
                                            className="bg-white/10 px-4 text-md md:text-lg py-2 border-2 border-white/10 text-white placeholder-gray-400"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full py-3 rounded-md bg-purple-800 hover:bg-purple-900 text-white font-semibold transition-colors"
                        >
                            Send
                        </button>
                    </form>
                </Form>
            </div>
        </div>
    );
};

export default PartyForm;
