// "use client";
// import { useState } from 'react';
// import axios from 'axios';
// import { useRouter } from 'next/navigation';

// export default function SignUp() {
//     const [username, setUsername] = useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [error, setError] = useState('');
//     const router = useRouter();

//     const handleSignUp = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await axios.post('/wp-json/custom/v1/register', {
//                 username,
//                 email,
//                 password
//             });
//             localStorage.setItem('user', JSON.stringify(response.data));
//             router.push('/checkout');
//         } catch (err) {
//             setError('User registration failed');
//         }
//     };

//     return (
//         <div className="min-h-screen flex items-center justify-center bg-gray-100">
//             <div className="bg-white p-6 rounded shadow-md w-full max-w-sm">
//                 <h2 className="text-2xl font-semibold mb-4">Sign Up</h2>
//                 {error && <p className="text-red-500 mb-4">{error}</p>}
//                 <form onSubmit={handleSignUp}>
//                     <input
//                         type="text"
//                         placeholder="Username"
//                         value={username}
//                         onChange={(e) => setUsername(e.target.value)}
//                         className="w-full p-2 border mb-4"
//                     />
//                     <input
//                         type="email"
//                         placeholder="Email"
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                         className="w-full p-2 border mb-4"
//                     />
//                     <input
//                         type="password"
//                         placeholder="Password"
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                         className="w-full p-2 border mb-4"
//                     />
//                     <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
//                         Sign Up
//                     </button>
//                 </form>
//                 <p className="mt-4">
//                     Already have an account? <a href="/login" className="text-blue-500">Login</a>
//                 </p>
//             </div>
//         </div>
//     );
// }

// http://localhost/ecommerce/wp-json/custom/v1/register

// "use client";
// import { useState } from 'react';
// import axios from 'axios';
// import { useRouter } from 'next/navigation';

// export default function SignUp() {
//     const [username, setUsername] = useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [error, setError] = useState('');
//     const router = useRouter();

//     const handleSignUp = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await axios.post('http://localhost/ecommerce/wp-json/custom/v1/register', {
//                 username,
//                 email,
//                 password
//             });
//             localStorage.setItem('user', JSON.stringify(response.data));
//             router.push('/checkout');
//         } catch (err) {
//             setError('User registration failed');
//         }
//     };

//     return (
//         <div className="min-h-screen flex items-center justify-center bg-gray-100">
//             <div className="bg-white p-6 rounded shadow-md w-full max-w-sm">
//                 <h2 className="text-2xl font-semibold mb-4">Sign Up</h2>
//                 {error && <p className="text-red-500 mb-4">{error}</p>}
//                 <form onSubmit={handleSignUp}>
//                     <input
//                         type="text"
//                         placeholder="Username"
//                         value={username}
//                         onChange={(e) => setUsername(e.target.value)}
//                         className="w-full p-2 border mb-4"
//                     />
//                     <input
//                         type="email"
//                         placeholder="Email"
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                         className="w-full p-2 border mb-4"
//                     />
//                     <input
//                         type="password"
//                         placeholder="Password"
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                         className="w-full p-2 border mb-4"
//                     />
//                     <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
//                         Sign Up
//                     </button>
//                 </form>
//                 <p className="mt-4">
//                     Already have an account? <a href="/login" className="text-blue-500">Login</a>
//                 </p>
//             </div>
//         </div>
//     );
// }


// "use client";
// import { useState } from 'react';
// import axios from 'axios';
// import { useRouter } from 'next/navigation';

// export default function SignUp() {
//     const [username, setUsername] = useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [loading, setLoading] = useState(false);
//     const [success, setSuccess] = useState(false);
//     const [error, setError] = useState('');
//     const router = useRouter();

//     const handleSignUp = async (e) => {
//         e.preventDefault();
//         setLoading(true);
//         setError('');
//         try {
//             const response = await axios.post('http://localhost/ecommerce/wp-json/custom/v1/register', {
//                 username,
//                 email,
//                 password
//             });
//             localStorage.setItem('user', JSON.stringify(response.data));
//             setSuccess(true);
//             setTimeout(() => {
//                 router.push('/checkout');
//             }, 2000);
//         } catch (err) {
//             setError('User registration failed: ' + err.response.data.message || 'Unknown error');
//         } finally {
//             setLoading(false);
//         }
//     };

//     return (
//         <div className="min-h-screen flex items-center justify-center bg-gray-100">
//             <div className="bg-white p-6 rounded shadow-md w-full max-w-sm">
//                 <h2 className="text-2xl font-semibold mb-4">Sign Up</h2>
//                 {error && <p className="text-red-500 mb-4">{error}</p>}
//                 {success && <p className="text-green-500 mb-4">Registration successful! Redirecting...</p>}
//                 <form onSubmit={handleSignUp}>
//                     <input
//                         type="text"
//                         placeholder="Username"
//                         value={username}
//                         onChange={(e) => setUsername(e.target.value)}
//                         className="w-full p-2 border mb-4"
//                         disabled={loading}
//                     />
//                     <input
//                         type="email"
//                         placeholder="Email"
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                         className="w-full p-2 border mb-4"
//                         disabled={loading}
//                     />
//                     <input
//                         type="password"
//                         placeholder="Password"
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                         className="w-full p-2 border mb-4"
//                         disabled={loading}
//                     />
//                     <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded" disabled={loading}>
//                         {loading ? 'Signing Up...' : 'Sign Up'}
//                     </button>
//                 </form>
//                 <p className="mt-4">
//                     Already have an account? <a href="/login" className="text-blue-500">Login</a>
//                 </p>
//             </div>
//         </div>
//     );
// }


// "use client";
// import { useState } from 'react';
// import axios from 'axios';
// import { useRouter } from 'next/navigation';

// export default function SignUp() {
//     const [username, setUsername] = useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [loading, setLoading] = useState(false);
//     const [success, setSuccess] = useState(false);
//     const [error, setError] = useState('');
//     const router = useRouter();

//     const handleSignUp = async (e) => {
//         e.preventDefault();
//         setLoading(true);
//         setError('');
//         try {
//             const response = await axios.post('http://localhost/ecommerce/wp-json/custom/v1/register', {
//                 username,
//                 email,
//                 password
//             });
//             localStorage.setItem('user', JSON.stringify(response.data));
//             setSuccess(true);
//             setTimeout(() => {
//                 router.push('/checkout');
//             }, 2000);
//         } catch (err) {
//             setError('User registration failed: ' + (err.response?.data?.message || 'Unknown error'));
//         } finally {
//             setLoading(false);
//         }
//     };

//     return (
//         <div className="min-h-screen flex items-center justify-center bg-gray-100">
//             <div className="bg-white p-6 rounded shadow-md w-full max-w-sm">
//                 <h2 className="text-2xl font-semibold mb-4">Sign Up</h2>
//                 {error && <p className="text-red-500 mb-4">{error}</p>}
//                 {success && <p className="text-green-500 mb-4">Registration successful! Redirecting...</p>}
//                 <form onSubmit={handleSignUp} className={`relative ${loading ? 'opacity-50' : ''}`}>
//                     <input
//                         type="text"
//                         placeholder="Username"
//                         value={username}
//                         onChange={(e) => setUsername(e.target.value)}
//                         className="w-full p-2 border mb-4"
//                         disabled={loading}
//                     />
//                     <input
//                         type="email"
//                         placeholder="Email"
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                         className="w-full p-2 border mb-4"
//                         disabled={loading}
//                     />
//                     <input
//                         type="password"
//                         placeholder="Password"
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                         className="w-full p-2 border mb-4"
//                         disabled={loading}
//                     />
//                     <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded flex items-center justify-center" disabled={loading}>
//                         {loading && (
//                             <svg
//                                 className="animate-spin h-5 w-5 mr-3 text-white"
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 fill="none"
//                                 viewBox="0 0 24 24"
//                             >
//                                 <circle
//                                     className="opacity-25"
//                                     cx="12"
//                                     cy="12"
//                                     r="10"
//                                     stroke="currentColor"
//                                     strokeWidth="4"
//                                 ></circle>
//                                 <path
//                                     className="opacity-75"
//                                     fill="currentColor"
//                                     d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
//                                 ></path>
//                             </svg>
//                         )}
//                         {loading ? 'Signing Up...' : 'Sign Up'}
//                     </button>
//                 </form>
//                 <p className="mt-4">
//                     Already have an account? <a href="/login" className="text-blue-500">Login</a>
//                 </p>
//             </div>
//         </div>
//     );
// }


// "use client";
// import { useState } from 'react';
// import axios from 'axios';
// import { useRouter } from 'next/navigation';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// export default function SignUp() {
//     const [username, setUsername] = useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [loading, setLoading] = useState(false);
//     const router = useRouter();

//     const handleSignUp = async (e) => {
//         e.preventDefault();
//         setLoading(true);
//         try {
//             const response = await axios.post('http://localhost/ecommerce/wp-json/custom/v1/register', {
//                 username,
//                 email,
//                 password
//             });
//             localStorage.setItem('user', JSON.stringify(response.data));
//             toast.success('Registration successful! Redirecting...');
//             setTimeout(() => {
//                 router.push('/checkout');
//             }, 2000);
//         } catch (err) {
//             toast.error('User registration failed');
//         } finally {
//             setLoading(false);
//         }
//     };

//     return (
//         <div className="min-h-screen flex items-center justify-center bg-gray-100">
//             <div className="bg-white p-6 rounded shadow-md w-full max-w-sm relative">
//                 <h2 className="text-2xl font-semibold mb-4">Sign Up</h2>
//                 <form onSubmit={handleSignUp} className={loading ? "opacity-50" : ""}>
//                     <input
//                         type="text"
//                         placeholder="Username"
//                         value={username}
//                         onChange={(e) => setUsername(e.target.value)}
//                         className="w-full p-2 border mb-4"
//                         disabled={loading}
//                     />
//                     <input
//                         type="email"
//                         placeholder="Email"
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                         className="w-full p-2 border mb-4"
//                         disabled={loading}
//                     />
//                     <input
//                         type="password"
//                         placeholder="Password"
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                         className="w-full p-2 border mb-4"
//                         disabled={loading}
//                     />
//                     <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded flex items-center justify-center" disabled={loading}>
//                         {loading && (
//                             <svg className="animate-spin h-5 w-5 mr-3 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//                                 <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                                 <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
//                             </svg>
//                         )}
//                         {loading ? 'Signing Up...' : 'Sign Up'}
//                     </button>
//                 </form>
//             </div>
//             <ToastContainer />
//         </div>
//     );
// }


// "use client";
// import { useState } from 'react';
// import axios from 'axios';
// import { useRouter } from 'next/navigation';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// export default function SignUp() {
//     const [username, setUsername] = useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [loading, setLoading] = useState(false);
//     const [errors, setErrors] = useState({});
//     const router = useRouter();

//     const validate = () => {
//         const newErrors = {};
//         if (!username) newErrors.username = "Username is required.";
//         if (!email) {
//             newErrors.email = "Email is required.";
//         } else if (!/\S+@\S+\.\S+/.test(email)) {
//             newErrors.email = "Email is invalid.";
//         }
//         if (!password) newErrors.password = "Password is required.";
//         setErrors(newErrors);
//         return Object.keys(newErrors).length === 0;
//     };

//     const handleSignUp = async (e) => {
//         e.preventDefault();
//         if (!validate()) return;

//         setLoading(true);
//         try {
//             const response = await axios.post('http://localhost/ecommerce/wp-json/custom/v1/register', {
//                 username,
//                 email,
//                 password
//             });
//             localStorage.setItem('user', JSON.stringify(response.data));
//             toast.success('Registration successful! Redirecting...');
//             setTimeout(() => {
//                 router.push('/checkout');
//             }, 1500);
//         } catch (err) {
//             toast.error('User registration failed');
//         } finally {
//             setLoading(false);
//         }
//     };

//     return (
//         <div className="min-h-screen flex items-center justify-center bg-gray-100">
//             <div className="bg-white p-6 rounded shadow-md w-full max-w-sm">
//                 <h2 className="text-2xl font-semibold mb-4">Sign Up</h2>
//                 <form onSubmit={handleSignUp} noValidate>
//                     <div className="mb-4">
//                         <input
//                             type="text"
//                             placeholder="Username"
//                             value={username}
//                             onChange={(e) => setUsername(e.target.value)}
//                             className="w-full p-2 border"
//                         />
//                         {errors.username && <p className="text-red-500">{errors.username}</p>}
//                     </div>
//                     <div className="mb-4">
//                         <input
//                             type="email"
//                             placeholder="Email"
//                             value={email}
//                             onChange={(e) => setEmail(e.target.value)}
//                             className="w-full p-2 border"
//                         />
//                         {errors.email && <p className="text-red-500">{errors.email}</p>}
//                     </div>
//                     <div className="mb-4">
//                         <input
//                             type="password"
//                             placeholder="Password"
//                             value={password}
//                             onChange={(e) => setPassword(e.target.value)}
//                             className="w-full p-2 border"
//                         />
//                         {errors.password && <p className="text-red-500">{errors.password}</p>}
//                     </div>
//                     <button
//                         type="submit"
//                         className="w-full bg-blue-500 text-white p-2 rounded flex items-center justify-center"
//                         disabled={loading}
//                     >
//                         {loading && (
//                             <svg className="animate-spin mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//                                 <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                                 <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
//                             </svg>
//                         )}
//                         {loading ? "Signing Up..." : "Sign Up"}
//                     </button>
//                 </form>
//                 <p className="mt-4">
//                     Already have an account? <a href="/login" className="text-blue-500">Login</a>
//                 </p>
//             </div>

//             <ToastContainer />
//         </div>
//     );
// }


// "use client";
// import { useState } from 'react';
// import axios from 'axios';
// import { useRouter } from 'next/navigation';
// import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { useForm } from 'react-hook-form';
// import { yupResolver } from '@hookform/resolvers/yup';
// import * as yup from 'yup';

// // Validation schema
// const schema = yup.object().shape({
//     username: yup.string().required('Username is required.'),
//     email: yup.string().email('Email is invalid.').required('Email is required.'),
//     password: yup.string().required('Password is required.'),
// });

// export default function SignUp() {
//     const { register, handleSubmit, formState: { errors }, clearErrors } = useForm({
//         resolver: yupResolver(schema)
//     });
//     const [loading, setLoading] = useState(false);
//     const router = useRouter();

//     const onSubmit = async (data) => {
//         setLoading(true);
//         try {
//             const response = await axios.post('http://localhost/ecommerce/wp-json/custom/v1/register', data);
//             localStorage.setItem('user', JSON.stringify(response.data));
//             toast.success('Registration successful! Redirecting...');
//             setTimeout(() => {
//                 router.push('/checkout');
//             }, 1500);
//         } catch (err) {
//             toast.error('User registration failed');
//         } finally {
//             setLoading(false);
//         }
//     };

//     return (
//         <div className="min-h-screen flex items-center justify-center bg-gray-100">
//             <div className="bg-white p-6 rounded shadow-md w-full max-w-sm">
//                 <h2 className="text-2xl font-semibold mb-4">Sign Up</h2>
//                 <form onSubmit={handleSubmit(onSubmit)} noValidate>
//                     <div className="mb-4">
//                         <input
//                             type="text"
//                             placeholder="Username"
//                             {...register('username')}
//                             className={`w-full p-2 border ${errors.username ? 'border-red-500' : ''}`}
//                             onInput={() => clearErrors('username')}
//                         />
//                         {errors.username && <p className="text-red-500">{errors.username.message}</p>}
//                     </div>
//                     <div className="mb-4">
//                         <input
//                             type="email"
//                             placeholder="Email"
//                             {...register('email')}
//                             className={`w-full p-2 border ${errors.email ? 'border-red-500' : ''}`}
//                             onInput={() => clearErrors('email')}
//                         />
//                         {errors.email && <p className="text-red-500">{errors.email.message}</p>}
//                     </div>
//                     <div className="mb-4">
//                         <input
//                             type="password"
//                             placeholder="Password"
//                             {...register('password')}
//                             className={`w-full p-2 border ${errors.password ? 'border-red-500' : ''}`}
//                             onInput={() => clearErrors('password')}
//                         />
//                         {errors.password && <p className="text-red-500">{errors.password.message}</p>}
//                     </div>
//                     <button
//                         type="submit"
//                         className="w-full bg-blue-500 text-white p-2 rounded flex items-center justify-center"
//                         disabled={loading}
//                     >
//                         {loading && (
//                             <svg className="animate-spin mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//                                 <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                                 <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
//                             </svg>
//                         )}
//                         {loading ? "Signing Up..." : "Sign Up"}
//                     </button>
//                 </form>
//                 <p className="mt-4">
//                     Already have an account? <a href="/login" className="text-blue-500">Login</a>
//                 </p>
//             </div>
//             <ToastContainer />
//         </div>
//     );
// }

// "use client";
// import { useState } from 'react';
// import axios from 'axios';
// import { useRouter } from 'next/navigation';
// import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { useForm } from 'react-hook-form';
// import { yupResolver } from '@hookform/resolvers/yup';
// import * as yup from 'yup';

// // Validation schema
// const schema = yup.object().shape({
//     username: yup.string().required('Username is required.'),
//     email: yup.string().email('Email is invalid.').required('Email is required.'),
//     password: yup.string().required('Password is required.'),
// });

// export default function SignUp() {
//     const { register, handleSubmit, formState: { errors }, clearErrors } = useForm({
//         resolver: yupResolver(schema)
//     });
//     const [loading, setLoading] = useState(false);
//     const router = useRouter();

//     const onSubmit = async (data) => {
//         setLoading(true);
//         try {
//             const response = await axios.post('http://localhost/ecommerce/wp-json/custom/v1/register', data);
//             localStorage.setItem('user', JSON.stringify(response.data));
//             toast.success('Registration successful! Redirecting...');
//             setTimeout(() => {
//                 router.push('/checkout');
//             }, 1500);
//         } catch (err) {
//             toast.error('User registration failed');
//         } finally {
//             setLoading(false);
//         }
//     };

//     return (
//         <div className="min-h-screen flex items-center justify-center bg-gray-100">
//             <div className={`bg-white p-6 rounded shadow-md w-full max-w-sm ${loading ? 'opacity-50' : ''}`}>
//                 <h2 className="text-2xl font-semibold mb-4">Sign Up</h2>
//                 <form onSubmit={handleSubmit(onSubmit)} noValidate>
//                     <div className="mb-4">
//                         <input
//                             type="text"
//                             placeholder="Username"
//                             {...register('username')}
//                             className={`w-full p-2 border ${errors.username ? 'border-red-500' : ''}`}
//                             onInput={() => clearErrors('username')}
//                         />
//                         {errors.username && <p className="text-red-500">{errors.username.message}</p>}
//                     </div>
//                     <div className="mb-4">
//                         <input
//                             type="email"
//                             placeholder="Email"
//                             {...register('email')}
//                             className={`w-full p-2 border ${errors.email ? 'border-red-500' : ''}`}
//                             onInput={() => clearErrors('email')}
//                         />
//                         {errors.email && <p className="text-red-500">{errors.email.message}</p>}
//                     </div>
//                     <div className="mb-4">
//                         <input
//                             type="password"
//                             placeholder="Password"
//                             {...register('password')}
//                             className={`w-full p-2 border ${errors.password ? 'border-red-500' : ''}`}
//                             onInput={() => clearErrors('password')}
//                         />
//                         {errors.password && <p className="text-red-500">{errors.password.message}</p>}
//                     </div>
//                     <button
//                         type="submit"
//                         className="w-full bg-blue-500 text-white p-2 rounded flex items-center justify-center"
//                         disabled={loading}
//                     >
//                         {loading && (
//                             <svg className="animate-spin mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//                                 <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                                 <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
//                             </svg>
//                         )}
//                         {loading ? "Signing Up..." : "Sign Up"}
//                     </button>
//                 </form>
//                 <p className="mt-4">
//                     Already have an account? <a href="/login" className="text-blue-500">Login</a>
//                 </p>
//             </div>
//             <ToastContainer />
//         </div>
//     );
// }





// "use client";
// import { useState } from 'react';
// import axios from 'axios';
// import { useRouter } from 'next/navigation';
// import { useForm } from 'react-hook-form';
// import { yupResolver } from '@hookform/resolvers/yup';
// import * as yup from 'yup';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// // Validation schema
// const schema = yup.object().shape({
//     username: yup.string().required('Username is required.'),
//     email: yup.string().email('Email is invalid.').required('Email is required.'),
//     password: yup.string().required('Password is required.'),
// });

// export default function SignUp() {
//     const { register, handleSubmit, formState: { errors }, reset } = useForm({
//         resolver: yupResolver(schema),
//     });
//     const [isSigningUp, setIsSigningUp] = useState(false);
//     const router = useRouter();

//     const onSubmit = async (data) => {
//         setIsSigningUp(true);

//         try {
//             const response = await axios.post('http://localhost/ecommerce/wp-json/custom/v1/register', data);
//             localStorage.setItem('user', JSON.stringify(response.data));
//             toast.success('Registration successful! Redirecting...', {
//                 onClose: () => {
//                     reset();
//                     router.push('/checkout');
//                 },
//             });
//         } catch (err) {
//             toast.error('User registration failed');
//         } finally {
//             setIsSigningUp(false);
//         }
//     };

//     return (
//         <div className="min-h-screen flex items-center justify-center bg-gray-100">
//             <div className={`bg-white p-6 rounded shadow-md w-full max-w-sm ${isSigningUp ? 'opacity-50' : ''}`}>
//                 <h2 className="text-2xl font-semibold mb-4">Sign Up</h2>
//                 <form onSubmit={handleSubmit(onSubmit)}>
//                     <div className="mb-4">
//                         <input
//                             type="text"
//                             placeholder="Username"
//                             {...register('username')}
//                             className="w-full p-2 border mb-1"
//                         />
//                         {errors.username && <p className="text-red-500 text-sm">{errors.username.message}</p>}
//                     </div>
//                     <div className="mb-4">
//                         <input
//                             type="email"
//                             placeholder="Email"
//                             {...register('email')}
//                             className="w-full p-2 border mb-1"
//                         />
//                         {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
//                     </div>
//                     <div className="mb-4">
//                         <input
//                             type="password"
//                             placeholder="Password"
//                             {...register('password')}
//                             className="w-full p-2 border mb-1"
//                         />
//                         {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
//                     </div>
//                     <button
//                         type="submit"
//                         className={`w-full bg-blue-500 text-white p-2 rounded flex items-center justify-center ${isSigningUp ? 'opacity-50' : ''}`}
//                         disabled={isSigningUp}
//                     >
//                         {isSigningUp && (
//                             <svg
//                                 className="animate-spin h-5 w-5 mr-3 text-white"
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 fill="none"
//                                 viewBox="0 0 24 24"
//                             >
//                                 <circle
//                                     className="opacity-25"
//                                     cx="12"
//                                     cy="12"
//                                     r="10"
//                                     stroke="currentColor"
//                                     strokeWidth="4"
//                                 ></circle>
//                                 <path
//                                     className="opacity-75"
//                                     fill="currentColor"
//                                     d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.963 7.963 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
//                                 ></path>
//                             </svg>
//                         )}
//                         {isSigningUp ? 'Signing Up...' : 'Sign Up'}
//                     </button>
//                 </form>
//                 <p className="mt-4">
//                     Already have an account? <a href="/login" className="text-blue-500">Login</a>
//                 </p>
//                 <ToastContainer />
//             </div>
//         </div>
//     );
// }



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
    email: yup.string().email('Email is invalid.').required('Email is required.'),
    password: yup.string().required('Password is required.'),
});

export default function SignUp() {
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(schema),
    });
    const [isSigningUp, setIsSigningUp] = useState(false);
    const router = useRouter();

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
    );
}



