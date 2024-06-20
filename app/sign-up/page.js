"use client";
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from '../components/Navbar';

// Validation schema
const schema = yup.object().shape({
    username: yup.string().required('Username is required.'),
    email: yup.string().email('Email is invalid.').required('Email is required.'),
    password: yup.string().required('Password is required.'),
});

export default function SignUp() {
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(schema),
    });
    const [isSigningUp, setIsSigningUp] = useState(false);
    const [cart, setCart] = useState([]);
    const router = useRouter();

    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem("cart"));
        if (storedCart) setCart(storedCart);
    }, []);

    const onSubmit = async (data) => {
        setIsSigningUp(true);

        try {
            const response = await axios.post('http://localhost/ecommerce/wp-json/custom/v1/register', data);
            localStorage.setItem('user', JSON.stringify(response.data));
            toast.success('Registration successful! Redirecting...', {
                onClose: () => {
                    router.push('/checkout');
                },
            });
            reset(); // Reset the form immediately after showing the success message
        } catch (err) {
            console.log("err", err);
            toast.error(err?.response?.data?.message || 'Unknown error');
        } finally {
            setIsSigningUp(false);
        }
    };

    return (
        <>
            <Navbar cartItems={cart} />
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <div className={`bg-white p-6 rounded shadow-md w-full max-w-sm ${isSigningUp ? 'opacity-50' : ''}`}>
                    <h2 className="text-2xl font-semibold mb-4">Sign Up</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-4">
                            <input
                                type="text"
                                placeholder="Username"
                                {...register('username')}
                                className="w-full p-2 border mb-1"
                            />
                            {errors.username && <p className="text-red-500 text-sm">{errors.username.message}</p>}
                        </div>
                        <div className="mb-4">
                            <input
                                type="email"
                                placeholder="Email"
                                {...register('email')}
                                className="w-full p-2 border mb-1"
                            />
                            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                        </div>
                        <div className="mb-4">
                            <input
                                type="password"
                                placeholder="Password"
                                {...register('password')}
                                className="w-full p-2 border mb-1"
                            />
                            {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
                        </div>
                        <button
                            type="submit"
                            className={`w-full bg-blue-500 text-white p-2 rounded flex items-center justify-center ${isSigningUp ? 'opacity-50' : ''}`}
                            disabled={isSigningUp}
                        >
                            {isSigningUp && (
                                <svg
                                    className="animate-spin h-5 w-5 mr-3 text-white"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <circle
                                        className="opacity-25"
                                        cx="12"
                                        cy="12"
                                        r="10"
                                        stroke="currentColor"
                                        strokeWidth="4"
                                    ></circle>
                                    <path
                                        className="opacity-75"
                                        fill="currentColor"
                                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.963 7.963 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                    ></path>
                                </svg>
                            )}
                            {isSigningUp ? 'Signing Up...' : 'Sign Up'}
                        </button>
                    </form>
                    <p className="mt-4">
                        Already have an account? <a href="/login" className="text-blue-500">Login</a>
                    </p>
                    <ToastContainer />
                </div>
            </div>
        </>
    );
}
