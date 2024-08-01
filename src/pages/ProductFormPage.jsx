import React, { useState } from 'react';
import { PhotoIcon } from '@heroicons/react/24/solid';
import { useDispatch, useSelector } from 'react-redux';
import { addForm, editForm, fetchLoading, fetchProducts, setFormActionValue, setFormReset, setImagePreview } from '../store/product-slice';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

export default function ProductFormPage() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { form, formAction, editId } = useSelector((state) => {
        return {
            form: state.product.form,
            formAction: state.product.formAction,
            editId: state.product.editId,
        };
    });
    const imagePreview = useSelector((state) => state.product.form.imagePreview);

    function handleCancel() {
        navigate('/sellerpage');
    }

    function handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append("name", form.name);
        formData.append("description", form.description);
        formData.append("price", form.price);
        formData.append("stock", form.stock);
        formData.append("categoryId", form.categoryId);
        formData.append("image", form.image);

        async function addProduct() {
            try {
                dispatch(fetchLoading(true));
                if (formAction === "create") {
                    const token = localStorage.getItem("access_token");
                    const response = await axios.post(
                        import.meta.env.VITE_BASE_URL +
                        `/products?cloud_name=${import.meta.env.VITE_CLOUD_NAME
                        }&api_key=${import.meta.env.VITE_API_KEY
                        }&api_secret=${import.meta.env.VITE_API_SECRET}`,
                        formData,
                        {
                            headers: {
                                Authorization: "Bearer " + token,
                                "Content-Type": "multipart/form-data",
                            },
                        }
                    );
                    toast.success("Success Created New Product");
                } else {
                    const token = localStorage.getItem("access_token");
                    const response = await axios.put(
                        import.meta.env.VITE_BASE_URL +
                        `/products/${editId}?cloud_name=${import.meta.env.VITE_CLOUD_NAME
                        }&api_key=${import.meta.env.VITE_API_KEY
                        }&api_secret=${import.meta.env.VITE_API_SECRET}`,
                        formData,
                        {
                            headers: {
                                Authorization: "Bearer " + token,
                                "Content-Type": "multipart/form-data",
                            },
                        }
                    );
                    toast.success("Success Updated Product");
                    dispatch(setFormActionValue("create"));
                }
            } catch (err) {
                console.log(err);
            } finally {
                dispatch(fetchLoading(false));
                dispatch(fetchProducts());
                dispatch(setFormReset());
                e.target?.reset();
                dispatch(setImagePreview(''));
            }
        }
        addProduct();
    }

    function handleChange(e) {
        let value = e.target.value;
        let name = e.target.name;
        if (e.target?.files) {
            value = e.target.files[0];
            const imagePreviewUrl = URL.createObjectURL(value);
            dispatch(setImagePreview(imagePreviewUrl));
        }
        dispatch(
            addForm({
                name,
                value,
            })
        );
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="max-w-4xl w-full p-8 bg-white rounded-lg shadow-lg">
                <form onSubmit={handleSubmit}>
                    <div className="space-y-12">
                        <div className="border-b border-gray-900/10 pb-12">
                        {
                                formAction === "create" ? (<h2 className="text-base font-semibold leading-7 text-gray-900">Add New Product Information</h2>) : (
                                    <h2 className="text-base font-semibold leading-7 text-gray-900">Update Product Information</h2>
                                )

                            }
                            <p className="mt-1 text-sm leading-6 text-gray-600">
                                Fill in the details of the product.
                            </p>

                            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                <div className="sm:col-span-4">
                                    <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                                        Name
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="name"
                                            name="name"
                                            value={form.name}
                                            onChange={handleChange}
                                            type="text"
                                            autoComplete="name"
                                            className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>

                                <div className="col-span-full">
                                    <label htmlFor="description" className="block text-sm font-medium leading-6 text-gray-900">
                                        Description
                                    </label>
                                    <div className="mt-2">
                                        <textarea
                                            id="description"
                                            name="description"
                                            value={form.description}
                                            onChange={handleChange}
                                            rows={3}
                                            className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>

                                <div className="sm:col-span-2">
                                    <label htmlFor="price" className="block text-sm font-medium leading-6 text-gray-900">
                                        Price
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="price"
                                            name="price"
                                            value={form.price}
                                            onChange={handleChange}
                                            type="number"
                                            step="0.01"
                                            className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>

                                <div className="sm:col-span-2">
                                    <label htmlFor="stock" className="block text-sm font-medium leading-6 text-gray-900">
                                        Stock
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="stock"
                                            name="stock"
                                            value={form.stock}
                                            onChange={handleChange}
                                            type="number"
                                            className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>

                                <div className="sm:col-span-2">
                                    <label htmlFor="categoryId" className="block text-sm font-medium leading-6 text-gray-900">
                                        Category ID
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="categoryId"
                                            name="categoryId"
                                            value={form.categoryId}
                                            onChange={handleChange}
                                            type="text"
                                            className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>

                                <div className="col-span-full">
                                    <label htmlFor="image-upload" className="block text-sm font-medium leading-6 text-gray-900">
                                        Image Upload
                                    </label>
                                    <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                                        <div className="text-center">
                                            {!imagePreview && (
                                                <PhotoIcon aria-hidden="true" className="mx-auto h-12 w-12 text-gray-300" />
                                            )}
                                            <div className="mt-4 flex text-sm leading-6 text-gray-600">
                                                <label
                                                    htmlFor="image-upload"
                                                    className="relative cursor-pointer rounded-md bg-white font-semibold text-[#1977F1] focus-within:outline-none focus-within:ring-2 focus-within:ring-[#1977F1] focus-within:ring-offset-2 hover:text-[#1977F1]"
                                                >
                                                    <span>Upload a file</span>
                                                    <input id="image-upload" onChange={handleChange} name="image" type="file" className="sr-only" />
                                                </label>
                                                <p className="pl-1">or drag and drop</p>
                                            </div>
                                            <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                                            {imagePreview && (
                                                <div className="mt-4 w-full h-80 relative">
                                                    <img
                                                        src={imagePreview}
                                                        alt="Image Preview"
                                                        className="object-contain w-full h-full absolute inset-0"
                                                    />
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>

                        <div className="mt-6 flex items-center justify-end gap-x-6">
                            <button onClick={handleCancel} type="button" className="text-sm font-semibold leading-6 text-gray-900">
                                Cancel
                            </button>
                            {
                                formAction === "create" ? (<button
                                    type="submit"
                                    className="rounded-md bg-[#1977F1] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#1977F1] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1977F1]"
                                >
                                    Create
                                </button>) : (
                                    <button
                                        type="submit"
                                        className="rounded-md bg-[#1977F1] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#1977F1] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1977F1]"
                                    >
                                        Update
                                    </button>
                                )

                            }
                        </div>
                    </div>
                </form>
            </div>
            <ToastContainer />
        </div>
    )
}
