import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import logoImage from "../../assets/Logo.png";
import googleLogo from "../../assets/google.png";
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';
import 'react-toastify/dist/ReactToastify.css';
import Alert from '../../components/Alert';
import { toast } from "react-toastify";

function UserLoginPage() {
    const [form, setForm] = useState({
        email: "",
        password: "",
    });
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const togglePassword = () => {
        setShowPassword(!showPassword);
    };

    function handleSubmit(e) {
        e.preventDefault();

        // Validation for 400 Status / Empty Field
        if (!form.email || !form.password) {
            toast.error("Email and password are required");
            return;
        }

        async function login() {
            try {
                setLoading(true);
                const response = await axios.post(
                    import.meta.env.VITE_BASE_URL + "/login",
                    {
                        email: form.email,
                        password: form.password
                    }
                );
                const accessToken = response.data.access_token;
                const userRole = response.data.role;
                localStorage.setItem("access_token", accessToken);
                localStorage.setItem("user_role", userRole);
                navigate("/");
            } catch (err) {
                if (err.response && err.response.status === 401) {
                    toast.error("Login failed. Please try again.");
                } else {
                    console.log(err);
                    toast.error("Login failed. Please try again.");
                }
            } finally {
                setLoading(false);
            }
        }
        login();
    }

    function handleChange(e) {
        const value = e.target.value;
        const name = e.target.name;
        setForm({
            ...form,
            [name]: value,
        });

        if (name === "role") {
            if (value === "seller") {
                navigate('/seller/login');
                return;
            } else if (value === "user") {
                navigate('/');
                return;
            }
        }
    }

    function handleCredentialResponse(response) {
        console.log("Encoded JWT ID token: " + response.credential);
        const googleToken = response.credential;
        try {
            setLoading(true);
            async function login(){
                const response = await axios.post(
                    import.meta.env.VITE_BASE_URL + "/google-login",
                    {
                        googleToken,
                        googleClientId: import.meta.env.VITE_GOOGLE_CLIENT_ID,
                    }
                );
                console.log(response, "<< login berhasil");
                const accessToken = response.data.access_token;
                localStorage.setItem("access_token", accessToken);
                navigate("/");
            }
            login();
        } catch (err) {
            if (err.response && err.response.status === 401) {
                toast.error("Invalid email or password. Please try again.");
            } else {
                console.log(err);
                toast.error("Login failed. Please try again.");
            }
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        window.google.accounts.id.initialize({
            client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
            callback: handleCredentialResponse
        });
        window.google.accounts.id.renderButton(
            document.getElementById("buttonDiv"), // Use a unique ID for the div
            { theme: "outline", size: "large" }
        );
        window.google.accounts.id.prompt(); // also display the One Tap dialog
    }, []);

    return (
        <div className="flex flex-col min-h-screen">
            <div className="flex flex-col lg:flex-row w-full h-full">
                <div className="hidden lg:flex lg:w-1/2 items-center justify-center bg-gray-200 min-h-screen">
                    <div className="w-80 h-80 bg-gradient-to-tr from-[#1977F1] to-[#000000] rounded-full animate-bounce" />
                    <div className="w-1/2 h-1/2 absolute bottom-0 bg-white/10 backdrop-blur-lg" />
                </div>
                <div className="w-full flex flex-col justify-center gap-8 p-8 sm:p-16 lg:px-16 lg:py-8 lg:w-1/2 min-h-screen">
                    <div className="flex justify-center items-center">
                        <img src={logoImage} alt="Logo" className="h-14 w-15" />
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold text-center lg:text-left">Welcome to Xavier Shop</h1>
                        <p className="text-gray-500 text-center lg:text-left">Enjoy your shopping anytime!</p>
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
                        <div className="relative">
                            <label
                                htmlFor="role"
                                className="absolute z-10 -top-2 left-2 inline-block bg-white px-1 text-xs font-medium text-gray-900"
                            >
                                Role
                            </label>
                            <div className="relative">
                                <select
                                    id="role"
                                    name="role"
                                    value={form.role}
                                    onChange={handleChange}
                                    className="block w-full rounded-md border-0 p-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 appearance-none"
                                >
                                    <option value="user">Buyer</option>
                                    <option value="seller">Seller</option>
                                </select>
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-5 text-gray-700">
                                    <svg className="fill-current h-4 w-4" viewBox="0 0 20 20">
                                        <path d="M7 10l5 5 5-5H7z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-end">
                            <a href="#" className="font-semibold hover:text-[#1977F1]">Forgot Password?</a>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-[#1977F1] text-white py-3 rounded-md text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Sign In
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
                    <div id="buttonDiv"></div>
                    <div className="flex justify-center text-sm mt-[-10px]">
                        <span className="text-gray-500">Don't have an account?</span>
                        <a href="/register" className="ml-1 font-semibold text-[#1977F1] hover:underline">Sign Up</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserLoginPage;
