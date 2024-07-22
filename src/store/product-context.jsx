import { createContext, useState, useEffect } from "react";
import axios from "axios";
import { redirect, useNavigate } from "react-router-dom";

export const ProductContext = createContext({
    products: [],
    setProducts: () => { },
    fetchProducts: () => { },
});


export default function ProductContextProvider({ children }) {
    const [products, setProducts] = useState([]);


    async function fetchProducts() {
        const token = localStorage.getItem('access_token');
        if (!token) {
            return redirect("/buyerPage");
        }

        try {
            const response = await axios.get(
                import.meta.env.VITE_BASE_URL + "/products?category=1",
                {
                    headers: {
                        Authorization: "Bearer " + token,
                    }
                }
            );
            const products = response.data.rows;
            setProducts(products);
        } catch (error) {
            console.error("Failed to fetch products", error);
        }
    }

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <ProductContext.Provider value={{ products, setProducts, fetchProducts }}>
            {children}
        </ProductContext.Provider>
    );
}
