import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import logoImage from "../../assets/Logo.png";
import googleLogo from "../../assets/google.png";
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';
import 'react-toastify/dist/ReactToastify.css';
import Alert from '../../components/Alert';

function SellerLoginPage() {
    const [form, setForm] = useState({
        email: "",
        password: "",
    });
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [alertMessage, setAlertMessage] = useState("");
    const [alertType, setAlertType] = useState("");
    const navigate = useNavigate();

    const togglePassword = () => {
        setShowPassword(!showPassword);
    };

    function handleSubmit(e) {
        e.preventDefault();

        // Validation for 400 Status / Empty Field
        if (!form.email || !form.password) {
            setAlertMessage("Email and password are required");
            setAlertType("error");
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
                navigate("/sellerPage");
            } catch (err) {
                if (err.response && err.response.status === 401) {
                    setAlertMessage("Invalid email or password");
                    setAlertType("error");
                } else {
                    console.log(err);
                    setAlertMessage("Login failed. Please try again.");
                    setAlertType("error");
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
                navigate('/login');
                return;
            }
        }
    }

    useEffect(() => {
        const successAlert = sessionStorage.getItem("alertMessage");
        const alertType = sessionStorage.getItem("alertType");
        if (successAlert) {
            setAlertMessage(successAlert);
            setAlertType(alertType);
            sessionStorage.removeItem("alertMessage");
            sessionStorage.removeItem("alertType");
        }
    }, []);


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
                navigate("/sellerPage");
            }
            login();
        } catch (err) {
            if (err.response && err.response.status === 401) {
                setAlertMessage("Invalid email or password");
                setAlertType("error");
            } else {
                console.log(err);
                setAlertMessage("Login failed. Please try again.");
                setAlertType("error");
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
        <div>
            <Alert message={alertMessage} type={alertType} />
            <div className="flex w-full h-screen">
                <div className="hidden relative lg:flex h-full w-1/2 items-center justify-center bg-gray-200">
                    <div className="w-80 h-80 bg-gradient-to-tr from-[#1977F1] to-[#000000] rounded-full animate-bounce" />
                    <div className="w-full h-1/2 absolute bottom-0 bg-white/10 backdrop-blur-lg" />
                </div>
                <div className="w-full flex flex-col gap-8 p-40 lg:w-1/2">
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
                                className="absolute -top-2 left-2 inline-block bg-white px-1 text-xs font-medium text-gray-900"
                            >
                                Role
                            </label>
                            <div className="">
                                <select
                                    id="role"
                                    name="role"
                                    value={form.role}
                                    onChange={handleChange}
                                    className="block w-full rounded-md border-0 p-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 appearance-none"
                                >
                                    <option value="seller">Seller</option>
                                    <option value="user">Buyer</option>
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
                    {/* <div id="buttonDiv" className="w-full mt-[-20px] flex items-center justify-center py-4 border border-gray-300 rounded-md shadow-sm bg-white hover:bg-gray-50">
                        <img src={googleLogo} alt="Google" className="h-5 w-5 mr-2" />
                        <span className="text-sm font-medium text-gray-700">Sign in with Google</span>
                    </div> */}
                    <div className="flex justify-center text-sm mt-[-10px]">
                        <span className="text-gray-500">Don't have an account?</span>
                        <a href="/seller/register" className="ml-1 font-semibold text-[#1977F1] hover:underline">Sign Up</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SellerLoginPage;
