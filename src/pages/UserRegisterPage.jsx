import React, { useState, useEffect } from "react";
import logoImage from "../assets/Logo.png";
import googleLogo from "../assets/google.png";
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';
import axios from "axios";
import { useNavigate, useLocation, redirect } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';

function UserRegisterPage() {
    const location = useLocation();
    const navigate = useNavigate();

    const [form, setForm] = useState({
        email: "",
        username: "",
        phoneNumber: "",
        password: "",
        address: "",
    });

    const [showPassword, setShowPassword] = useState(false);

    const togglePassword = () => {
        setShowPassword(!showPassword);
    };

    const handleChange = (e) => {
        const value = e.target.value;
        const name = e.target.name;

        setForm({
            ...form,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        async function register() {
            try {
                const response = await axios.post(
                    import.meta.env.VITE_BASE_URL + "/register",
                    form
                );
                console.log(response, "<< register berhasil");
                navigate("/login");
                
            } catch (err) {
                if (err.response && err.response.status === 400) {
                    toast.error("Login failed. Please try again.");
                } else {
                    toast.error("Login failed. Please try again.");
                }
            }
        }
        register();
    };

    return (
        <div>
            <div className="flex w-full h-screen">
                <div className="hidden relative lg:flex h-full w-1/2 items-center justify-center bg-gray-200">
                    <div className="w-80 h-80 bg-gradient-to-tr from-[#1977F1] to-[#000000] rounded-full animate-bounce" />
                    <div className="w-full h-1/2 absolute bottom-0 bg-white/10 backdrop-blur-lg" />
                </div>
                <div className="w-full flex h-full flex-col gap-8 p-40 lg:w-1/2">
                    <div className="flex justify-center items-center">
                        <img src={logoImage} alt="" className="h-14 w-15" />
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold">Welcome to Xavier Shop</h1>
                        <p className="text-gray-500">Enjoy your shopping anytime!</p>
                    </div>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="relative">
                            <label
                                htmlFor="email"
                                className="absolute -top-2 left-2 inline-block bg-white px-1 text-xs font-medium text-gray-900"
                            >
                                E-mail
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="Email Address"
                                className="block w-full rounded-md border-0 p-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                onChange={handleChange}
                            />
                        </div>
                        <div className="relative">
                            <label
                                htmlFor="username"
                                className="absolute -top-2 left-2 inline-block bg-white px-1 text-xs font-medium text-gray-900"
                            >
                                Username
                            </label>
                            <input
                                id="username"
                                name="username"
                                type="text"
                                placeholder="Username"
                                className="block w-full rounded-md border-0 p-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                onChange={handleChange}
                            />
                        </div>
                        <div className="relative">
                            <label
                                htmlFor="phoneNumber"
                                className="absolute -top-2 left-2 inline-block bg-white px-1 text-xs font-medium text-gray-900"
                            >
                                Phone Number
                            </label>
                            <input
                                id="phoneNumber"
                                name="phoneNumber"
                                type="text"
                                placeholder="Phone Number"
                                className="block w-full rounded-md border-0 p-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                onChange={handleChange}
                            />
                        </div>
                        <div className="relative">
                            <label
                                htmlFor="address"
                                className="absolute -top-2 left-2 inline-block bg-white px-1 text-xs font-medium text-gray-900"
                            >
                                Address
                            </label>
                            <input
                                id="address"
                                name="address"
                                type="text"
                                placeholder="Address"
                                className="block w-full rounded-md border-0 p-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                onChange={handleChange}
                            />
                        </div>
                        <div className="relative">
                            <label
                                htmlFor="password"
                                className="absolute -top-2 left-2 inline-block bg-white px-1 text-xs font-medium text-gray-900"
                            >
                                Password
                            </label>
                            <div>
                                <input
                                    id="password"
                                    name="password"
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Password"
                                    className="block w-full rounded-md border-0 p-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    onChange={handleChange}
                                />
                                <div className="absolute inset-y-0 right-2 flex items-center pr-3">
                                    {showPassword ? (
                                        <EyeSlashIcon
                                            aria-hidden="true"
                                            className="h-5 w-5 text-[#1977F1] cursor-pointer"
                                            onClick={togglePassword}
                                        />
                                    ) : (
                                        <EyeIcon
                                            aria-hidden="true"
                                            className="h-5 w-5 text-gray-400 cursor-pointer"
                                            onClick={togglePassword}
                                        />
                                    )}
                                </div>
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-[#1977F1] text-white py-3 rounded-md text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Sign Up
                        </button>
                    </form>
                    <div className="relative my-6">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-300" />
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="bg-white px-2 text-gray-500">Or Sign In with</span>
                        </div>
                    </div>
                    <button className="w-full mt-[-20px] flex items-center justify-center py-4 border border-gray-300 rounded-md shadow-sm bg-white hover:bg-gray-50">
                        <img src={googleLogo} alt="Google" className="h-5 w-5 mr-2" />
                        <span className="text-sm font-medium text-gray-700">Sign in with Google</span>
                    </button>
                    <div className="flex justify-center text-sm mt-[-10px]">
                        <span className="text-gray-500">Already have an account?</span>
                        <a href="/" className="ml-1 font-semibold text-[#1977F1] hover:underline">Sign In</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserRegisterPage;
