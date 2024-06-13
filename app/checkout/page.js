"use client";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Checkout() {
    const [user, setUser] = useState(null);
    const router = useRouter();

    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem('user'));
        if (!storedUser) {
            router.push('/login');
        } else {
            setUser(storedUser);
        }
    }, [router]);

    if (!user) return null;

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-6 rounded shadow-md w-full max-w-lg">
                <h2 className="text-2xl font-semibold mb-4">Checkout</h2>
                {/* Checkout form goes here */}
                <p>Welcome, {user.username}</p>
            </div>
        </div>
    );
}
