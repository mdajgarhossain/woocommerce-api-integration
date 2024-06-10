// "use client";
// import { useEffect, useState } from "react";
// import axios from 'axios';
// import ProductCard from "./components/ProductCard";
// import Navbar from "./components/Navbar";
// import Pagination from "./components/Pagination";
// import { FaSpinner } from 'react-icons/fa'; // Importing the spinner from react-icons

// export default function Products() {
//    const [products, setProducts] = useState([]);
//    const [cart, setCart] = useState([]);
//    const [currentPage, setCurrentPage] = useState(1);
//    const [totalPages, setTotalPages] = useState(1);
//    const [isLoading, setIsLoading] = useState(false);
//    const [error, setError] = useState('');

//    const fetchProducts = async (page) => {
//       setIsLoading(true);
//       try {
//          const response = await axios.get(`/api/products?page=${page}`);
//          const { products, totalProducts } = response.data;

//          setProducts(products);
//          const pages = Math.ceil(totalProducts / 12); // 12 products per page
//          setTotalPages(pages);
//          setError('');
//       } catch (error) {
//          console.error('Error fetching products:', error);
//          setError('Failed to load products. Please try again later.');
//       } finally {
//          setIsLoading(false);
//       }
//    };

//    useEffect(() => {
//       fetchProducts(currentPage);
//    }, [currentPage]);

//    useEffect(() => {
//       const storedCart = JSON.parse(localStorage.getItem("cart"));
//       if (storedCart) setCart(storedCart);
//    }, []);

//    const addToCart = (product) => {
//       const existingProduct = cart.find(item => item.id === product.id);
//       if (existingProduct) {
//          const updatedCart = cart.map(item =>
//             item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
//          );
//          setCart(updatedCart);
//          localStorage.setItem("cart", JSON.stringify(updatedCart));
//       } else {
//          const updatedCart = [...cart, { ...product, quantity: 1 }];
//          setCart(updatedCart);
//          localStorage.setItem("cart", JSON.stringify(updatedCart));
//       }
//    };

//    return (
//       <>
//          <Navbar cartItems={cart} />
//          {isLoading ? (
//             <div className="flex justify-center items-center h-screen">
//                <FaSpinner className="text-6xl animate-spin" />
//             </div>
//          ) : error ? (
//             <div className="flex justify-center items-center h-screen">
//                <p>{error}</p>
//             </div>
//          ) : (
//             <div>
//                <div className="grid px-4 md:px-6 lg:px-10 pb-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
//                   {products.map((product) => (
//                      <ProductCard product={product} key={product.id} addToCart={addToCart} />
//                   ))}
//                </div>
//                {products.length > 0 && (
//                   <Pagination
//                      currentPage={currentPage}
//                      totalPages={totalPages}
//                      onPageChange={setCurrentPage}
//                   />
//                )}
//             </div>
//          )}
//       </>
//    );
// }

"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./components/ProductCard";
import Navbar from "./components/Navbar";
import Pagination from "./components/Pagination";
import { FaSpinner, FaSearch } from "react-icons/fa"; // Importing the spinner from react-icons

export default function Products() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const fetchProducts = async (page, query) => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        `/api/products?page=${page}&search=${query}`
      );
      const { products, totalProducts } = response.data;

      setProducts(products);
      const pages = Math.ceil(totalProducts / 12); // 12 products per page
      setTotalPages(pages);
      setError("");
    } catch (error) {
      console.error("Error fetching products:", error);
      setError("Failed to load products. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts(currentPage, searchQuery);
  }, [currentPage, searchQuery]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart"));
    if (storedCart) setCart(storedCart);
  }, []);

  const addToCart = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);
    if (existingProduct) {
      const updatedCart = cart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCart(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    } else {
      const updatedCart = [...cart, { ...product, quantity: 1 }];
      setCart(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    }
  };

  //   const handleSearchChange = (event) => {
  //     setSearchQuery(event.target.value);
  //     setCurrentPage(1); // Reset to first page on search
  //   };

  const handleSearch = (e) => {
    e.preventDefault();
    setCurrentPage(1);
    fetchProducts(1, searchQuery);
  };

  return (
    <>
      <Navbar cartItems={cart} />
      {/* <div className="px-4 md:px-6 lg:px-10 pb-4">
                <input
                    type="text"
                    value={searchQuery}
                    onChange={handleSearchChange}
                    placeholder="Search products..."
                    className="w-full p-2 border border-gray-300 rounded mb-4"
                />
            </div> */}
      {/* <div className="flex justify-end px-4 md:px-6 lg:px-10 pb-4 mt-8">
        <form onSubmit={handleSearch} className="relative w-full max-w-sm">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search products..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
          <FaSearch className="absolute left-3 top-3 text-gray-400" />
        </form>
      </div>
      {isLoading ? (
        <div className="flex justify-center items-center h-screen">
          <FaSpinner className="text-6xl animate-spin" />
        </div>
      ) : error ? (
        <div className="flex justify-center items-center h-screen">
          <p>{error}</p>
        </div>
      ) : (
        <div className="">
          <div className="grid px-4 md:px-6 lg:px-10 pb-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {products.map((product) => (
              <ProductCard
                product={product}
                key={product.id}
                addToCart={addToCart}
              />
            ))}
          </div>
          {products.length > 0 && (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          )}
          {products.length === 0 && !isLoading && (
            <div className="flex justify-center items-center h-screen">
              <p>No products available.</p>
            </div>
          )}
        </div>
      )} */}

      <div className="bg-gray-200 pt-6 pb-10">
        <div className="flex justify-end px-4 md:px-6 lg:px-10 pb-6">
          <form onSubmit={handleSearch} className="relative w-full max-w-sm">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search products..."
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            <FaSearch className="absolute left-4 top-4 text-gray-400" />
          </form>
        </div>
        {isLoading ? (
          <div className="flex justify-center items-center h-screen">
            <FaSpinner className="text-6xl animate-spin" />
          </div>
        ) : error ? (
          <div className="flex justify-center items-center h-screen">
            <p>{error}</p>
          </div>
        ) : (
          <div className="">
            <div className="grid px-4 md:px-6 lg:px-10 pb-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
              {products.map((product) => (
                <ProductCard
                  product={product}
                  key={product.id}
                  addToCart={addToCart}
                />
              ))}
            </div>
            {products.length > 0 && (
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
              />
            )}
            {products.length === 0 && !isLoading && (
              <div className="flex justify-center items-center h-screen">
                <p>No products available.</p>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
}
