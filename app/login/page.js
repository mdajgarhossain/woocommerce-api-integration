"use client";
import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Validation schema
const schema = yup.object().shape({
    username: yup.string().required('Username is required.'),
    password: yup.string().required('Password is required.'),
});

export default function Login() {
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(schema),
    });
    const [isLoggingIn, setIsLoggingIn] = useState(false);
    const router = useRouter();

    const onSubmit = async (data) => {
        setIsLoggingIn(true);

        try {
            const response = await axios.post('http://localhost/ecommerce/wp-json/custom/v1/login', data);
            localStorage.setItem('user', JSON.stringify(response.data));
            toast.success('Login successful! Redirecting...', {
                onClose: () => {
                    router.push('/checkout');
                },
            });
            reset();
        } catch (err) {
            toast.error(err?.response?.data?.message || 'Invalid login credentials');
        } finally {
            setIsLoggingIn(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className={`bg-white p-6 rounded shadow-md w-full max-w-sm ${isLoggingIn ? 'opacity-50' : ''}`}>
                <h2 className="text-2xl font-semibold mb-4">Login</h2>
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
                            type="password"
                            placeholder="Password"
                            {...register('password')}
                            className="w-full p-2 border mb-1"
                        />
                        {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
                    </div>
                    <button
                        type="submit"
                        className={`w-full bg-blue-500 text-white p-2 rounded flex items-center justify-center ${isLoggingIn ? 'opacity-50' : ''}`}
                        disabled={isLoggingIn}
                    >
                        {isLoggingIn && (
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
                        {isLoggingIn ? 'Logging In...' : 'Login'}
                    </button>
                </form>
                <p className="mt-4">
                    Don't have an account? <a href="/sign-up" className="text-blue-500">Sign Up</a>
                </p>
                <ToastContainer />
            </div>
        </div>
    );
}
