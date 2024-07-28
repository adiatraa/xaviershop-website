import React, { useEffect, useState } from 'react'
import Breadcrumb from '../components/Breadcrumb';
import Navbar from '../components/Navbar';
import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Radio,
    RadioGroup,
    Tab,
    TabGroup,
    TabList,
    TabPanel,
    TabPanels,
} from '@headlessui/react'
import { StarIcon } from '@heroicons/react/20/solid'
import { HeartIcon, MinusIcon, PlusIcon } from '@heroicons/react/24/outline'
import { IoCart, IoCheckmarkDone, IoEye } from 'react-icons/io5';
import phone1 from '../assets/bestDeal.png'
import Footer from '../components/Footer';

const product = {
    name: 'iPhone 15 Pro',
    price: 'Rp 1.500.000',
    rating: 4,
    images: [
        {
            id: 1,
            name: 'Angled view',
            src: phone1,
            alt: 'Angled front view with bag zipped and handles upright.',
        },
        {
            id: 2,
            name: 'Angled view',
            src: 'https://tailwindui.com/img/ecommerce-images/product-page-03-product-01.jpg',
            alt: 'Angled front view with bag zipped and handles upright.',
        },
        {
            id: 3,
            name: 'Angled view',
            src: phone1,
            alt: 'Angled front view with bag zipped and handles upright.',
        },
        {
            id: 4,
            name: 'Angled view',
            src: phone1,
            alt: 'Angled front view with bag zipped and handles upright.',
        },
        // More images...
    ],
    colors: [
        { name: 'Washed Black', bgColor: 'bg-gray-700', selectedColor: 'ring-blue-500' },
        { name: 'White', bgColor: 'bg-white', selectedColor: 'ring-blue-500' },
        { name: 'Washed Gray', bgColor: 'bg-gray-500', selectedColor: 'ring-blue-500' },
    ],
    description: `
      <p>iPhone 15 Pro. Lahir dari titanium dan dilengkapi chip A17 Pro terobosan, tombol Tindakan <br /> yang dapat disesuaikan, dan sistem kamera Pro yang lebih serbaguna.
      </p>
      <p>Isi Kotak : <br/>
      • iPhone dengan iOS 17. <br/>
      • Kabel USB-C ke USB-C. <br/>
      • Buku Manual dan dokumentasi lain.</p> 
    `,
    details: [
        {
            name: 'Features',
            items: [
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget ipsum eleifend, aliquet mauris sed, dapibus quam. Quisque maximus massa non urna tempor congue. Duis egestas elementum molestie. Aliquam suscipit, ante id pulvinar posuere, sapien nibh finibus enim, vulputate vulputate quam magna a odio.',
            ],
        },
        {
            name: 'Specification',
            items: [
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget ipsum eleifend, aliquet mauris sed, dapibus quam. Quisque maximus massa non urna tempor congue. Duis egestas elementum molestie. Aliquam suscipit, ante id pulvinar posuere, sapien nibh finibus enim, vulputate vulputate quam magna a odio.',
            ],
        },
        {
            name: 'Reviews',
            items: [
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget ipsum eleifend, aliquet mauris sed, dapibus quam. Quisque maximus massa non urna tempor congue. Duis egestas elementum molestie. Aliquam suscipit, ante id pulvinar posuere, sapien nibh finibus enim, vulputate vulputate quam magna a odio.',
            ],
        },
    ],
}

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}


function ProductDetailPage() {
    const [pages, setPages] = useState([]);
    const [selectedColor, setSelectedColor] = useState(product.colors[0])

    useEffect(() => {
        setPages([{ name: 'Product Detail', href: '/productDetail', current: true }]);
    }, []);

    return (
        <div>
            <Navbar />
            <Breadcrumb pages={pages} />
            <div className="bg-white">
                <div className="mx-10 px-4 py-16 sm:px-6 sm:py-10 lg:max-w-[123rem] lg:px-8">
                    <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-20">
                        {/* Image gallery */}
                        <TabGroup className="flex">
                            {/* TabPanels (main image) */}
                            <TabPanels className="aspect-h-1 aspect-w-1 w-full items-center flex justify-center">
                                {product.images.map((image) => (
                                    <TabPanel key={image.id}>
                                        <img
                                            alt={image.alt}
                                            src={image.src}
                                            className="h-[690px] w-[500px] object-cover object-center sm:rounded-lg" // Perbesar ukuran gambar di sini
                                        />
                                    </TabPanel>
                                ))}
                            </TabPanels>

                            {/* Image selector */}
                            <div className="ml-6 hidden w-1/4 max-w-2xl sm:block lg:max-w-none lg:flex lg:flex-col lg:justify-center">
                                <TabList className="grid grid-cols-1 gap-10">
                                    {product.images.map((image) => (
                                        <Tab
                                            key={image.id}
                                            className="group relative flex h-32 w-32 cursor-pointer items-center justify-center rounded-md bg-white text-sm font-medium uppercase text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-offset-4"
                                        >
                                            <span className="sr-only">{image.name}</span>
                                            <span className="inset-0 overflow-hidden rounded-md">
                                                <img alt="" src={image.src} className="h-[120px] w-[90px] object-cover object-center" />
                                            </span>
                                            <span
                                                aria-hidden="true"
                                                className="pointer-events-none absolute inset-0 rounded-md ring-2 ring-transparent ring-offset-2 group-data-[selected]:ring-indigo-500"
                                            />
                                        </Tab>
                                    ))}
                                </TabList>
                            </div>
                        </TabGroup>

                        {/* Product info */}
                        <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
                            <h1 className="text-3xl mt-6 font-bold font-prompt tracking-tight text-gray-900">{product.name}</h1>

                            {/* Reviews */}
                            <div className="mt-3">
                                <h3 className="sr-only">Reviews</h3>
                                <div className="flex items-center gap-3">
                                    <h1 className="font-bold text-blue-500">4.0</h1>
                                    <div className="flex items-center">
                                        {[0, 1, 2, 3, 4].map((rating) => (
                                            <StarIcon
                                                key={rating}
                                                aria-hidden="true"
                                                className={classNames(
                                                    product.rating > rating ? 'text-blue-500' : 'text-gray-300',
                                                    'h-5 w-5 flex-shrink-0',
                                                )}
                                            />
                                        ))}
                                    </div>
                                    <p className="text-gray-400">(300)</p>
                                    <p className="sr-only">{product.rating} out of 5 stars</p>
                                    <div className="divide-x divide-gray-500 border-l-2">
                                        <div className="px-2 flex gap-3">
                                            <IoCart className="h-6 w-6 text-gray-400" />
                                            <h1 className="font-bold">100</h1>
                                            <p>Stock</p>
                                        </div>
                                    </div>
                                    <div className="divide-x divide-gray-500 border-l-2">
                                        <div className="px-2 flex gap-3">
                                            <IoCheckmarkDone className="h-6 w-6 text-gray-400" />
                                            <h1 className="font-bold">2000</h1>
                                            <p>Sold</p>
                                        </div>
                                    </div>
                                    <div className="divide-x divide-gray-500 border-l-2">
                                        <div className="px-2 flex gap-3">
                                            <IoEye className="h-6 w-6 text-gray-400" />
                                            <h1 className="font-bold">5000</h1>
                                            <p>Viewed</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-20 flex gap-4 items-center">
                                <h2 className="sr-only">Product information</h2>
                                <p className="text-3xl font-prompt tracking-tight text-blue-500">{product.price}</p>
                                <p className="line-through text-gray-500">Rp 10.000.000</p>
                                <div className="h-6 w-30 bg-[#3AB137] p-1 rounded-md">
                                    <p className="text-[12px] text-white font-bold">20%</p>
                                </div>
                            </div>
                            <div className="mt-6">
                                <h3 className="sr-only">Description</h3>
                                <div
                                    dangerouslySetInnerHTML={{ __html: product.description }}
                                    className="space-y-6 text-base text-gray-700"
                                />
                            </div>

                            <form className="mt-6">
                                {/* Size */}
                                <div className="flex items-center gap-60 mt-10">
                                    <h1 className="font-bold font-prompt text-lg">Size</h1>
                                    <div className="flex gap-5">
                                        <div className="h-[40px] w-[120px] border-gray-500 font-bold text-gray-500 border flex items-center justify-center rounded-lg hover:bg-blue-500 hover:text-white cursor-pointer">
                                            <h1>256 GB</h1>
                                        </div>
                                        <div className="h-[40px] w-[120px] bg-blue-500 font-bold text-white border flex items-center justify-center rounded-lg cursor-pointer">
                                            <h1>512 GB</h1>
                                        </div>
                                        <div className="h-[40px] w-[120px] border-gray-500 font-bold text-gray-500 border flex items-center justify-center rounded-lg hover:bg-blue-500 hover:text-white cursor-pointer">
                                            <h1>1 TB</h1>
                                        </div>
                                    </div>
                                </div>

                                {/* Colors */}
                                <div className="flex space-x-[510px] items-center mt-6">
                                    <h1 className="font-bold font-prompt text-lg">Color</h1>

                                    <fieldset aria-label="Choose a color" className="mt-2">
                                        <RadioGroup value={selectedColor} onChange={setSelectedColor} className="flex items-center space-x-3">
                                            {product.colors.map((color) => (
                                                <Radio
                                                    key={color.name}
                                                    value={color}
                                                    aria-label={color.name}
                                                    className={classNames(
                                                        color.selectedColor,
                                                        'relative  flex cursor-pointer items-center justify-center rounded-full focus:outline-none data-[checked]:ring-2 data-[focus]:data-[checked]:ring data-[focus]:data-[checked]:ring-offset-1',
                                                    )}
                                                >
                                                    <span
                                                        aria-hidden="true"
                                                        className={classNames(
                                                            color.bgColor,
                                                            'h-8 w-8 rounded-full border border-black border-opacity-10',
                                                        )}
                                                    />
                                                </Radio>
                                            ))}
                                        </RadioGroup>
                                    </fieldset>
                                </div>

                                <div className="mt-10 flex gap-36">
                                    <button
                                        type="submit"
                                        className="flex max-w-xs flex-1 items-center justify-center rounded-md border border-blue-500 bg-transparent px-8 py-3 text-blue-500 font-medium hover:bg-blue-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-full"
                                    >
                                        Buy
                                    </button>

                                    <div className="flex">
                                        <button
                                            type="submit"
                                            className="flex max-w-xs flex-1 items-center justify-center rounded-md border border-transparent bg-blue-500 px-8 py-3 text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-full"
                                        >
                                            Add to Cart
                                        </button>

                                        <button
                                            type="button"
                                            className="ml-4 flex items-center justify-center rounded-md px-3 py-3 text-gray-400 hover:bg-gray-100 hover:text-gray-500"
                                        >
                                            <HeartIcon aria-hidden="true" className="h-6 w-6 flex-shrink-0" />
                                            <span className="sr-only">Add to favorites</span>
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <section aria-labelledby="details-heading" className="mt-12">
                                <h2 id="details-heading" className="sr-only">Additional details</h2>

                                <div className="divide-y divide-gray-200 border-t">
                                    {product.details.map((detail) => (
                                        <Disclosure key={detail.name} as="div">
                                            <h3>
                                                <DisclosureButton className="group relative flex w-full items-center bg-white justify-between py-6 text-left">
                                                    <span className="text-sm font-medium text-gray-900 group-data-[open]:text-blue-600">
                                                        {detail.name}
                                                    </span>
                                                    <span className="ml-6 flex items-center">
                                                        <PlusIcon
                                                            aria-hidden="true"
                                                            className="block h-6 w-6 text-gray-400 group-hover:text-gray-500 group-data-[open]:hidden"
                                                        />
                                                        <MinusIcon
                                                            aria-hidden="true"
                                                            className="hidden h-6 w-6 text-indigo-400 group-hover:text-blue-500 group-data-[open]:block"
                                                        />
                                                    </span>
                                                </DisclosureButton>
                                            </h3>
                                            <DisclosurePanel className="prose prose-sm pb-6">
                                                <ul role="list">
                                                    {detail.items.map((item) => (
                                                        <li key={item}>{item}</li>
                                                    ))}
                                                </ul>
                                            </DisclosurePanel>
                                        </Disclosure>
                                    ))}
                                </div>
                            </section>
                </div>
            </div>
        <Footer />
        </div>
    )
}

export default ProductDetailPage