import React, { useEffect, useState, Fragment, useContext } from 'react';
import Navbar from '../components/Navbar';
import thumbnail from '../assets/thumbnail.jpg';
import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
} from '@headlessui/react'
import { ChevronDownIcon, FunnelIcon, PlusIcon } from '@heroicons/react/20/solid'
import ProductCard from '../components/ProductCard';
import { ProductContext } from '../store/product-context';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, fetchPubProducts } from '../store/public-product-slice';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const filters = {
    price: [
        { value: '0', label: '$0 - $25', checked: false },
        { value: '25', label: '$25 - $50', checked: false },
        { value: '50', label: '$50 - $75', checked: false },
        { value: '75', label: '$75+', checked: false },
    ],
    color: [
        { value: 'white', label: 'White', checked: false },
        { value: 'beige', label: 'Beige', checked: false },
        { value: 'blue', label: 'Blue', checked: true },
        { value: 'brown', label: 'Brown', checked: false },
        { value: 'green', label: 'Green', checked: false },
        { value: 'purple', label: 'Purple', checked: false },
    ],
    memory: [
        { value: '128GB', label: '128GB', checked: false },
        { value: '256GB', label: '256GB', checked: true },
        { value: '512GB', label: '512GB', checked: false },
        { value: '1TB', label: '1TB', checked: false },
        { value: '2TB', label: '2TB', checked: false },
        { value: '3TB', label: '3TB', checked: false },
    ],
    category: [
        { value: 'iphone', label: 'iPhone', checked: false },
        { value: 'macbook', label: 'Macbook', checked: false },
        { value: 'imac', label: 'iMac', checked: false },
        { value: 'ipad', label: 'iPad', checked: false },
        { value: 'airpod', label: 'Airpods', checked: false },
    ],
}
const sortOptions = [
    { name: 'Most Popular', href: '#', current: true },
    { name: 'Best Rating', href: '#', current: false },
    { name: 'Newest', href: '#', current: false },
    { name: 'Price: Low to High', href: '#', current: false },
    { name: 'Price: High to Low', href: '#', current: false },
]


function ProductPage() {
    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }

    const { items: products, loading } = useSelector((state) => {
        return {
            items: state.publicProduct.items,
            loading: state.publicProduct.loading,
        }
    });
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { user_role, isAuthenticated } = useSelector((state) => state.auth);

    useEffect(() => {
        dispatch(fetchPubProducts());
    }, []);

    const handleAdd = () => {
        if (isAuthenticated && user_role === 'seller') {
            navigate('/addProduct');
        } 
    };


    return (
        <div>
            <Navbar />
            {loading && <p>Loading......</p>}
            <section aria-labelledby="featured-heading" className="relative overflow-hidden lg:h-96">
                <div className="absolute inset-0">
                    <img
                        alt=""
                        src={thumbnail}
                        className="h-full w-full object-cover object-center"
                    />
                </div>
                <div aria-hidden="true" className="relative h-96 w-full lg:hidden" />
                <div aria-hidden="true" className="relative h-32 w-full lg:hidden" />
                <div className="absolute inset-x-0 bottom-0 rounded-bl-lg rounded-br-lg bg-black bg-opacity-75 p-6 backdrop-blur backdrop-filter sm:flex sm:items-center sm:justify-between lg:inset-x-auto lg:inset-y-0 lg:w-96 lg:flex-col lg:items-start lg:rounded-br-none lg:rounded-tl-lg">
                    <div>
                        <h2 id="featured-heading" className="text-xl font-bold text-white">
                            Electronic & Gadget Store
                        </h2>
                        <p className="mt-1 text-sm text-gray-300">
                            Power Up Your Life with the Latest Tech and Gadgets!
                        </p>
                    </div>
                    <a
                        href="#"
                        className="mt-6 flex flex-shrink-0 items-center justify-center rounded-md border  hover:text-[#1977F1] border-white border-opacity-25 bg-white bg-opacity-0 px-4 py-3 text-base font-medium text-white hover:bg-opacity-10 sm:ml-8 sm:mt-0 lg:ml-0 lg:w-full"
                    >
                        View the collection
                    </a>
                </div>
            </section>

            <main className="pb-24">


                {/* Filters */}
                <Disclosure
                    as="section"
                    aria-labelledby="filter-heading"
                    className="grid items-center border-b border-t border-gray-200"
                >
                    <h2 id="filter-heading" className="sr-only">
                        Filters
                    </h2>
                    <div className="relative col-start-1 row-start-1 py-4">
                        <div className="mx-auto flex max-w-7xl space-x-6 divide-x divide-gray-200 px-4 text-sm sm:px-6 lg:px-8">
                            <div>
                                <DisclosureButton className="group flex items-center font-medium text-gray-700">
                                    <FunnelIcon
                                        aria-hidden="true"
                                        className="mr-2 h-5 w-5 flex-none text-gray-400 group-hover:text-gray-500"
                                    />
                                    2 Filters
                                </DisclosureButton>
                            </div>
                            <div className="pl-6">
                                <button type="button" className="text-gray-500">
                                    Clear all
                                </button>
                            </div>
                        </div>
                    </div>
                    <DisclosurePanel className="border-t border-gray-200 py-10">
                        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-x-4 px-4 text-sm sm:px-6 md:gap-x-6 lg:px-8">
                            <div className="grid auto-rows-min grid-cols-1 gap-y-10 md:grid-cols-2 md:gap-x-6">
                                <fieldset>
                                    <legend className="block font-medium">Price</legend>
                                    <div className="space-y-6 pt-6 sm:space-y-4 sm:pt-4">
                                        {filters.price.map((option, optionIdx) => (
                                            <div key={option.value} className="flex items-center text-base sm:text-sm">
                                                <input
                                                    defaultValue={option.value}
                                                    defaultChecked={option.checked}
                                                    id={`price-${optionIdx}`}
                                                    name="price[]"
                                                    type="checkbox"
                                                    className="h-4 w-4 flex-shrink-0 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                                />
                                                <label htmlFor={`price-${optionIdx}`} className="ml-3 min-w-0 flex-1 text-gray-600">
                                                    {option.label}
                                                </label>
                                            </div>
                                        ))}
                                    </div>
                                </fieldset>
                                <fieldset>
                                    <legend className="block font-medium">Color</legend>
                                    <div className="space-y-6 pt-6 sm:space-y-4 sm:pt-4">
                                        {filters.color.map((option, optionIdx) => (
                                            <div key={option.value} className="flex items-center text-base sm:text-sm">
                                                <input
                                                    defaultValue={option.value}
                                                    defaultChecked={option.checked}
                                                    id={`color-${optionIdx}`}
                                                    name="color[]"
                                                    type="checkbox"
                                                    className="h-4 w-4 flex-shrink-0 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                                />
                                                <label htmlFor={`color-${optionIdx}`} className="ml-3 min-w-0 flex-1 text-gray-600">
                                                    {option.label}
                                                </label>
                                            </div>
                                        ))}
                                    </div>
                                </fieldset>
                            </div>
                            <div className="grid auto-rows-min grid-cols-1 gap-y-10 md:grid-cols-2 md:gap-x-6">
                                <fieldset>
                                    <legend className="block font-medium">Memory</legend>
                                    <div className="space-y-6 pt-6 sm:space-y-4 sm:pt-4">
                                        {filters.memory.map((option, optionIdx) => (
                                            <div key={option.value} className="flex items-center text-base sm:text-sm">
                                                <input
                                                    defaultValue={option.value}
                                                    defaultChecked={option.checked}
                                                    id={`size-${optionIdx}`}
                                                    name="size[]"
                                                    type="checkbox"
                                                    className="h-4 w-4 flex-shrink-0 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                                />
                                                <label htmlFor={`size-${optionIdx}`} className="ml-3 min-w-0 flex-1 text-gray-600">
                                                    {option.label}
                                                </label>
                                            </div>
                                        ))}
                                    </div>
                                </fieldset>
                                <fieldset>
                                    <legend className="block font-medium">Category</legend>
                                    <div className="space-y-6 pt-6 sm:space-y-4 sm:pt-4">
                                        {filters.category.map((option, optionIdx) => (
                                            <div key={option.value} className="flex items-center text-base sm:text-sm">
                                                <input
                                                    defaultValue={option.value}
                                                    defaultChecked={option.checked}
                                                    id={`category-${optionIdx}`}
                                                    name="category[]"
                                                    type="checkbox"
                                                    className="h-4 w-4 flex-shrink-0 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                                />
                                                <label htmlFor={`category-${optionIdx}`} className="ml-3 min-w-0 flex-1 text-gray-600">
                                                    {option.label}
                                                </label>
                                            </div>
                                        ))}
                                    </div>
                                </fieldset>
                            </div>
                        </div>
                    </DisclosurePanel>
                    <div className="col-start-1 row-start-1 py-4">
                        <div className="mx-auto flex max-w-7xl justify-end px-4 sm:px-6 lg:px-8 gap-10">
                            {isAuthenticated && user_role === 'seller' && (
                                <button type="button" onClick={handleAdd} className="relative z-10 flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900 cursor-pointer">
                                    Add Product
                                    <PlusIcon
                                        aria-hidden="true"
                                        className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                                    />
                                </button>
                            )}
                            <Menu as="div" className="relative inline-block">
                                <div className="flex">
                                    <MenuButton className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                                        Sort
                                        <ChevronDownIcon
                                            aria-hidden="true"
                                            className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                                        />
                                    </MenuButton>
                                </div>

                                <MenuItems
                                    transition
                                    className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                                >
                                    <div className="py-1">
                                        {sortOptions.map((option) => (
                                            <MenuItem key={option.name}>
                                                <a
                                                    href={option.href}
                                                    className={classNames(
                                                        option.current ? 'font-medium text-gray-900' : 'text-gray-500',
                                                        'block px-4 py-2 text-sm data-[focus]:bg-gray-100',
                                                    )}
                                                >
                                                    {option.name}
                                                </a>
                                            </MenuItem>
                                        ))}
                                    </div>
                                </MenuItems>
                            </Menu>
                        </div>
                    </div>
                </Disclosure>

                {/* Product grid */}
                <section aria-labelledby="products-heading" className="mx-auto max-w-7xl overflow-hidden sm:px-6 lg:px-8">
                    <h2 id="products-heading" className="sr-only">
                        Products
                    </h2>

                    <div className="-mx-px grid grid-cols-2 border-l border-gray-200 sm:mx-0 md:grid-cols-3 lg:grid-cols-4">
                        {products &&
                            products.map((product, idx) => (
                                <ProductCard key={idx} product={product} />
                            ))}
                    </div>
                </section>

                {/* Pagination */}
                <nav
                    aria-label="Pagination"
                    className="mx-auto mt-6 flex max-w-7xl justify-between px-4 text-sm font-medium text-gray-700 sm:px-6 lg:px-8"
                >
                    <div className="min-w-0 flex-1">
                        <a
                            href="#"
                            className="inline-flex h-10 items-center rounded-md border border-gray-300 bg-white px-4 hover:bg-gray-100 focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-opacity-25 focus:ring-offset-1 focus:ring-offset-indigo-600"
                        >
                            Previous
                        </a>
                    </div>
                    <div className="hidden space-x-2 sm:flex">
                        {/* Current: "border-indigo-600 ring-1 ring-indigo-600", Default: "border-gray-300" */}
                        <a
                            href="#"
                            className="inline-flex h-10 items-center rounded-md border border-gray-300 bg-white px-4 hover:bg-gray-100 focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-opacity-25 focus:ring-offset-1 focus:ring-offset-indigo-600"
                        >
                            1
                        </a>
                        <a
                            href="#"
                            className="inline-flex h-10 items-center rounded-md border border-gray-300 bg-white px-4 hover:bg-gray-100 focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-opacity-25 focus:ring-offset-1 focus:ring-offset-indigo-600"
                        >
                            2
                        </a>
                        <a
                            href="#"
                            className="inline-flex h-10 items-center rounded-md border border-indigo-600 bg-white px-4 ring-1 ring-indigo-600 hover:bg-gray-100 focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-opacity-25 focus:ring-offset-1 focus:ring-offset-indigo-600"
                        >
                            3
                        </a>
                        <span className="inline-flex h-10 items-center px-1.5 text-gray-500">...</span>
                        <a
                            href="#"
                            className="inline-flex h-10 items-center rounded-md border border-gray-300 bg-white px-4 hover:bg-gray-100 focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-opacity-25 focus:ring-offset-1 focus:ring-offset-indigo-600"
                        >
                            8
                        </a>
                        <a
                            href="#"
                            className="inline-flex h-10 items-center rounded-md border border-gray-300 bg-white px-4 hover:bg-gray-100 focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-opacity-25 focus:ring-offset-1 focus:ring-offset-indigo-600"
                        >
                            9
                        </a>
                        <a
                            href="#"
                            className="inline-flex h-10 items-center rounded-md border border-gray-300 bg-white px-4 hover:bg-gray-100 focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-opacity-25 focus:ring-offset-1 focus:ring-offset-indigo-600"
                        >
                            10
                        </a>
                    </div>
                    <div className="flex min-w-0 flex-1 justify-end">
                        <a
                            href="#"
                            className="inline-flex h-10 items-center rounded-md border border-gray-300 bg-white px-4 hover:bg-gray-100 focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-opacity-25 focus:ring-offset-1 focus:ring-offset-indigo-600"
                        >
                            Next
                        </a>
                    </div>
                </nav>
            </main>
        </div>
    );
}

export default ProductPage;
