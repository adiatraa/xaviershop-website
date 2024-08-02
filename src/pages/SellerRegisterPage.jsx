import React, { useState } from "react";
import logoImage from "../assets/Logo.png";
import googleLogo from "../assets/google.png";
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import { toast } from "react-toastify";
import Alert from '../components/Alert';

function SellerRegisterPage() {
    const navigate = useNavigate();
    const [form, setForm] = useState({
        email: "",
        username: "",
        phoneNumber: "",
        password: "",
        address: "",
    });
    const [showPassword, setShowPassword] = useState(false);
    const [alertMessage, setAlertMessage] = useState("");
    const [alertType, setAlertType] = useState("");

    const togglePassword = () => {
        setShowPassword(!showPassword);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm(prevForm => ({
            ...prevForm,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.post(
                import.meta.env.VITE_BASE_URL + "/seller/register",
                form
            );
            navigate("/seller/login");
            toast.success("Registration as seller successful. Please log in.");
        } catch (err) {
            toast.error("Registration failed. Please try again.");
        }
    };

    return (
        <div className="flex flex-col lg:flex-row h-screen">
            <div className="hidden lg:flex lg:w-1/2 items-center justify-center bg-gray-200 relative">
                <div className="w-80 h-80 bg-gradient-to-tr from-[#1977F1] to-[#000000] rounded-full animate-bounce" />
                <div className="w-full h-1/2 absolute bottom-0 bg-white/10 backdrop-blur-lg" />
            </div>
            <div className="w-full lg:w-1/2 flex flex-col justify-center p-8 sm:p-16 lg:p-32">
                <div className="flex justify-center lg:justify-center mb-8">
                    <img src={logoImage} alt="Logo" className="h-14 w-15" />
                </div>
                <h1 className="text-2xl font-bold text-center lg:text-left mb-2">Welcome to Xavier Shop</h1>
                <p className="text-gray-500 text-center lg:text-left mb-6">Enjoy your shopping anytime!</p>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="relative">
                        <label htmlFor="email" className="absolute -top-2 left-2 bg-white px-1 text-xs font-medium text-gray-900">E-mail</label>
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
                        <label htmlFor="username" className="absolute -top-2 left-2 bg-white px-1 text-xs font-medium text-gray-900">Username</label>
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
                        <label htmlFor="phoneNumber" className="absolute -top-2 left-2 bg-white px-1 text-xs font-medium text-gray-900">Phone Number</label>
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
                        <label htmlFor="address" className="absolute -top-2 left-2 bg-white px-1 text-xs font-medium text-gray-900">Address</label>
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
                        <label htmlFor="password" className="absolute -top-2 left-2 bg-white px-1 text-xs font-medium text-gray-900">Password</label>
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
                <button className="w-full flex items-center justify-center py-4 border border-gray-300 rounded-md shadow-sm bg-white hover:bg-gray-50">
                    <img src={googleLogo} alt="Google" className="h-5 w-5 mr-2" />
                    <span className="text-sm font-medium text-gray-700">Sign in with Google</span>
                </button>
                <div className="flex justify-center text-sm mt-4">
                    <span className="text-gray-500">Already have an account?</span>
                    <a href="/seller/login" className="ml-1 font-semibold text-[#1977F1] hover:underline">Sign In</a>
                </div>
            </div>
        </div>
    );
}

export default SellerRegisterPage;
