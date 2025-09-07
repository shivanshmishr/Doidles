"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export const Loader = () => {
    const pathname = usePathname();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        const timeout = setTimeout(() => setLoading(false), 700); // simulate load
        return () => clearTimeout(timeout);
    }, [pathname]);

    if (!loading) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-400"></div>
        </div>
    );
};
