import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon, ShoppingBagIcon } from '@heroicons/react/24/outline'
import logo from '../assets/Logo.png'
import profile from '../assets/profile.jpeg'

export default function Navbar() {
    return (
        <Disclosure as="nav" className="bg-white shadow">
            <div className="mx-10 max-w-full px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 justify-between">
                    <div className="flex">
                        <div className="flex flex-shrink-0 items-center">
                            <img
                                alt="Xavier Shop"
                                src={logo}
                                className="h-8 w-auto"
                            />
                        </div>
                        <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                            {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
                            <a
                                href="#"
                                className="inline-flex items-center border-b-2 border-[#1977F1] px-1 pt-1 text-sm font-medium text-gray-900"
                            >
                                Products
                            </a>
                            <a
                                href="#"
                                className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                            >
                                Cart
                            </a>
                            <a
                                href="#"
                                className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                            >
                                Order
                            </a>
                        </div>
                    </div>
                    <div className="hidden sm:ml-6 sm:flex sm:items-center gap-2">
                        <div className="flow-root">
                            <a href="#" className="group -m-2 flex items-center p-2">
                                <ShoppingBagIcon
                                    aria-hidden="true"
                                    className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                                />
                                <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">0</span>
                                <span className="sr-only">items in cart, view bag</span>
                            </a>
                        </div>
                        <button
                            type="button"
                            className="relative rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#1977F1] focus:ring-offset-2"
                        >
                            <span className="absolute -inset-1.5" />
                            <span className="sr-only">View notifications</span>
                            <BellIcon aria-hidden="true" className="h-6 w-6" />
                        </button>

                        {/* Profile dropdown */}
                        <Menu as="div" className="relative ml-3">
                            <div>
                                <MenuButton className="relative flex rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#1977F1] focus:ring-offset-2">
                                    <span className="absolute -inset-1.5" />
                                    <span className="sr-only">Open user menu</span>
                                    <img
                                        alt=""
                                        src={profile}
                                        className="h-8 w-8 rounded-full object-cover"
                                    />
                                </MenuButton>
                            </div>
                            <MenuItems
                                transition
                                className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                            >
                                <MenuItem>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">
                                        Your Profile
                                    </a>
                                </MenuItem>
                                <MenuItem>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">
                                        Settings
                                    </a>
                                </MenuItem>
                                <MenuItem>
                                    <a href="/logout" className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">
                                        Sign out
                                    </a>
                                </MenuItem>
                            </MenuItems>
                        </Menu>
                    </div>
                    <div className="-mr-2 flex items-center sm:hidden">
                        {/* Mobile menu button */}
                        <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#1977F1]">
                            <span className="absolute -inset-0.5" />
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
                            <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
                        </DisclosureButton>
                    </div>
                </div>
            </div>

            <DisclosurePanel className="sm:hidden">
                <div className="space-y-1 pb-3 pt-2">
                    {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
                    <DisclosureButton
                        as="a"
                        href="#"
                        className="block border-l-4 border-[#1977F1] bg-[#1977F1] py-2 pl-3 pr-4 text-base font-medium text-[#1977F1]"
                    >
                        Dashboard
                    </DisclosureButton>
                    <DisclosureButton
                        as="a"
                        href="#"
                        className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
                    >
                        Team
                    </DisclosureButton>
                    <DisclosureButton
                        as="a"
                        href="#"
                        className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
                    >
                        Projects
                    </DisclosureButton>
                    <DisclosureButton
                        as="a"
                        href="#"
                        className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
                    >
                        Calendar
                    </DisclosureButton>
                </div>
                <div className="border-t border-gray-200 pb-3 pt-4">
                    <div className="flex items-center px-4">
                        <div className="flex-shrink-0">
                            <img
                                alt=""
                                src={profile}
                                className="h-10 w-10 rounded-full"
                            />
                        </div>
                        <div className="ml-3">
                            <div className="text-base font-medium text-gray-800">Adiat Rahman</div>
                            <div className="text-sm font-medium text-gray-500">adiatrahman31@gmail.com</div>
                        </div>
                        <button
                            type="button"
                            className="relative ml-auto flex-shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#1977F1] focus:ring-offset-2"
                        >
                            <span className="absolute -inset-1.5" />
                            <span className="sr-only">View notifications</span>
                            <BellIcon aria-hidden="true" className="h-6 w-6" />
                        </button>
                    </div>
                    <div className="mt-3 space-y-1">
                        <DisclosureButton
                            as="a"
                            href="#"
                            className="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800"
                        >
                            Your Profile
                        </DisclosureButton>
                        <DisclosureButton
                            as="a"
                            href="#"
                            className="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800"
                        >
                            Settings
                        </DisclosureButton>
                        <DisclosureButton
                            as="a"
                            href="/logout"
                            className="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800"
                        >
                            Sign out
                        </DisclosureButton>
                    </div>
                </div>
            </DisclosurePanel>
        </Disclosure>
    )
}
