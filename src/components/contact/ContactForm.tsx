"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

type FormValues = {
    name: string;
    phone: string;
    query: string;
};

const ContactForm = () => {
    const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);
    const [loading, setLoading] = useState(false);

    const form = useForm<FormValues>({
        defaultValues: {
            name: "",
            phone: "",
            query: "",
        },
    });

    const onSubmit = async (data: FormValues) => {
        setLoading(true);
        try {
            const body = new URLSearchParams({
                name: data.name,
                phone: data.phone,
                query: data.query,
                source: "contact",
                secret: "doodles-2025-9c1a7d6f5b3e4a2f",
            });

            const res = await fetch(
                "https://script.google.com/macros/s/AKfycbxkX7KVW1JsSN_fD46eE_p1ZyAMKDHQc0va3vrNGSr-JPNiWy-QRW0cfGK9ET2QcONH/exec",
                {
                    method: "POST",
                    mode: "no-cors",
                    body,
                }
            );

            if (res.ok || res.type === "opaque") {
                setMessage({ type: "success", text: "Thank you! Your message has been sent." });
                form.reset();
            } else {
                setMessage({ type: "error", text: "Failed to send message. Please try again." });
            }
        } catch (err) {
            console.error(err);
            setMessage({ type: "error", text: "Server error. Try again later." });
        } finally {
            setLoading(false);
            setTimeout(() => setMessage(null), 9000); // auto-hide after 4s
        }
    };

    return (
        <div className="flex flex-col justify-center items-center px-4">
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
                            disabled={loading}
                            className={`w-full py-3 rounded-md font-semibold transition-colors ${loading
                                ? "bg-purple-600 cursor-not-allowed"
                                : "bg-purple-800 hover:bg-purple-900 text-white"
                                }`}
                        >
                            {loading ? "Sending..." : "Send"}
                        </button>
                    </form>
                </Form>

                {/* Success/Error Message */}
                {message && (
                    <p
                        className={`mt-4 text-center font-medium ${message.type === "success" ? "text-purple-500" : "text-red-400"
                            }`}
                    >
                        {message.text}
                    </p>
                )}
            </div>
        </div>
    );
};

export default ContactForm;
