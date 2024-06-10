// "use client";
// import { useEffect, useState } from "react";
// import ProductCard from "./components/ProductCard";
// import Navbar from "./components/Navbar";

// export default function Products() {
//    const [products, setProducts] = useState([]);
//    const [cart, setCart] = useState([]);

//    // Fetch products
//    useEffect(() => {
//       fetch("./api/products")
//          .then((res) => res.json())
//          .then((data) => setProducts(data));
//    }, []);

//    useEffect(() => {
//       const storedCart = JSON.parse(localStorage.getItem("cart"));
//       if (storedCart) setCart(storedCart);
//    }, []);

//    // useEffect(() => {
//    //    localStorage.setItem("cart", JSON.stringify(cart));
//    // }, [cart]);

//    const addToCart = (product) => {
//       const existingProduct = cart.find(item => item.id === product.id);
//       if (existingProduct) {
//          let cartProducts = cart.map(item =>
//             item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
//          )
//          setCart(cartProducts);
//          localStorage.setItem("cart", JSON.stringify(cartProducts));
//       } else {
//          let cartProducts = [...cart, { ...product, quantity: 1 }]
//          setCart(cartProducts);
//          localStorage.setItem("cart", JSON.stringify(cartProducts));
//       }
//    };


//    return (
//       <>
//          <Navbar cartItems={cart} />
//          <div className="grid px-4 md:px-6 lg:px-10 pb-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
//             {products.map((car) => (
//                <ProductCard product={car} key={car.id} addToCart={addToCart} />
//             ))}
//          </div>
//       </>
//    );
// }


// page.js
// "use client";
// import { useEffect, useState } from "react";
// import ProductCard from "./components/ProductCard";
// import Navbar from "./components/Navbar";
// import Pagination from "./components/Pagination";

// export default function Products() {
//    const [products, setProducts] = useState([]);
//    const [cart, setCart] = useState([]);
//    const [currentPage, setCurrentPage] = useState(1);
//    const [totalPages, setTotalPages] = useState(1);

//    // Fetch products for the current page
//    const fetchProducts = (page) => {
//       fetch(`./api/products?page=${page}`)
//          .then((res) => res.json())
//          .then((data) => setProducts(data));
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
//          let cartProducts = cart.map(item =>
//             item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
//          )
//          setCart(cartProducts);
//          localStorage.setItem("cart", JSON.stringify(cartProducts));
//       } else {
//          let cartProducts = [...cart, { ...product, quantity: 1 }]
//          setCart(cartProducts);
//          localStorage.setItem("cart", JSON.stringify(cartProducts));
//       }
//    };

//    // const handlePageChange = (page) => {
//    //    setCurrentPage(page);
//    // };

//    return (
//       <>
//          <Navbar cartItems={cart} />
//          <div className="grid px-4 md:px-6 lg:px-10 pb-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
//             {products.map((product) => (
//                <ProductCard product={product} key={product.id} addToCart={addToCart} />
//             ))}
//          </div>
//          <Pagination
//             currentPage={currentPage}
//             totalPages={totalPages}
//             onPageChange={setCurrentPage}
//          />

//          {/* <div className="flex justify-center mt-10">
//             <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
//                Previous
//             </button>
//             <span className="mx-4">Page {currentPage}</span>
//             <button onClick={() => handlePageChange(currentPage + 1)}>
//                Next
//             </button>
//          </div> */}
//       </>
//    );
// }


// It is working

// "use client";
// import { useEffect, useState } from "react";
// import ProductCard from "./components/ProductCard";
// import Navbar from "./components/Navbar";
// import Pagination from "./components/Pagination";

// export default function Products() {
//    const [products, setProducts] = useState([]);
//    const [cart, setCart] = useState([]);
//    const [currentPage, setCurrentPage] = useState(1);
//    const [totalPages, setTotalPages] = useState(1);

//    const fetchProducts = async (page) => {
//       const response = await fetch(`./api/products?page=${page}`);
//       const { products, totalProducts } = await response.json();

//       setProducts(products);
//       const pages = Math.ceil(totalProducts / 12); // 12 products per page
//       setTotalPages(pages);
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
//          let cartProducts = cart.map(item =>
//             item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
//          );
//          setCart(cartProducts);
//          localStorage.setItem("cart", JSON.stringify(cartProducts));
//       } else {
//          let cartProducts = [...cart, { ...product, quantity: 1 }];
//          setCart(cartProducts);
//          localStorage.setItem("cart", JSON.stringify(cartProducts));
//       }
//    };

//    return (
//       <>
//          <Navbar cartItems={cart} />
//          <div className="grid px-4 md:px-6 lg:px-10 pb-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
//             {products.map((product) => (
//                <ProductCard product={product} key={product.id} addToCart={addToCart} />
//             ))}
//          </div>
//          <Pagination
//             currentPage={currentPage}
//             totalPages={totalPages}
//             onPageChange={setCurrentPage}
//          />
//       </>
//    );
// }





// It woks nice

// "use client";
// import { useEffect, useState } from "react";
// import ProductCard from "./components/ProductCard";
// import Navbar from "./components/Navbar";
// import Pagination from "./components/Pagination";
// import { FaSpinner } from 'react-icons/fa'; // Importing the spinner from react-icons

// export default function Products() {
//     const [products, setProducts] = useState([]);
//     const [cart, setCart] = useState([]);
//     const [currentPage, setCurrentPage] = useState(1);
//     const [totalPages, setTotalPages] = useState(1);
//     const [isLoading, setIsLoading] = useState(false);
//     const [error, setError] = useState('');

//     const fetchProducts = async (page) => {
//         setIsLoading(true);
//         try {
//             const response = await fetch(`/api/products?page=${page}`);
//             if (!response.ok) {
//                 throw new Error('Failed to fetch products');
//             }
//             const data = await response.json();
//             setProducts(data.products);
//             const pages = Math.ceil(data.totalProducts / 12); // 12 products per page
//             setTotalPages(pages);
//             setError('');
//         } catch (error) {
//             console.error('Error fetching products:', error);
//             setError('Failed to load products. Please try again later.');
//         } finally {
//             setIsLoading(false);
//         }
//     };

//     useEffect(() => {
//         fetchProducts(currentPage);
//     }, [currentPage]);

//     useEffect(() => {
//         const storedCart = JSON.parse(localStorage.getItem("cart"));
//         if (storedCart) setCart(storedCart);
//     }, []);

//     const addToCart = (product) => {
//         const existingProduct = cart.find(item => item.id === product.id);
//         if (existingProduct) {
//             const updatedCart = cart.map(item =>
//                 item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
//             );
//             setCart(updatedCart);
//             localStorage.setItem("cart", JSON.stringify(updatedCart));
//         } else {
//             const updatedCart = [...cart, { ...product, quantity: 1 }];
//             setCart(updatedCart);
//             localStorage.setItem("cart", JSON.stringify(updatedCart));
//         }
//     };

//     return (
//         <>
//             <Navbar cartItems={cart} />
//             {isLoading ? (
//                 <div className="flex justify-center items-center h-screen">
//                     <FaSpinner className="text-6xl animate-spin" />
//                 </div>
//             ) : error ? (
//                 <div className="flex justify-center items-center h-screen">
//                     <p>{error}</p>
//                 </div>
//             ) : (
//                 <div>
//                     <div className="grid px-4 md:px-6 lg:px-10 pb-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
//                         {products.map((product) => (
//                             <ProductCard product={product} key={product.id} addToCart={addToCart} />
//                         ))}
//                     </div>
//                     {products.length > 0 && (
//                         <Pagination
//                             currentPage={currentPage}
//                             totalPages={totalPages}
//                             onPageChange={setCurrentPage}
//                         />
//                     )}
//                 </div>
//             )}
//         </>
//     );
// }







// "use client";
// import { useEffect, useState } from "react";
// import axios from 'axios';
// import ProductCard from "./components/ProductCard";
// import Navbar from "./components/Navbar";
// import Pagination from "./components/Pagination";

// export default function Products() {
//    const [products, setProducts] = useState([]);
//    const [cart, setCart] = useState([]);
//    const [currentPage, setCurrentPage] = useState(1);
//    const [totalPages, setTotalPages] = useState(1);
//    const [loading, setLoading] = useState(true);
//    const [error, setError] = useState('');

//    const fetchProducts = async (page) => {
//       setLoading(true);
//       try {
//          const response = await axios.get(`./api/products?page=${page}`);
//          const { products, totalProducts } = response.data;

//          setProducts(products);
//          const pages = Math.ceil(totalProducts / 12); // 12 products per page
//          setTotalPages(pages);
//          setLoading(false);
//       } catch (err) {
//          console.error('Failed to fetch products:', err);
//          setError('Failed to fetch products');
//          setLoading(false);
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
//          let cartProducts = cart.map(item =>
//             item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
//          );
//          setCart(cartProducts);
//          localStorage.setItem("cart", JSON.stringify(cartProducts));
//       } else {
//          let cartProducts = [...cart, { ...product, quantity: 1 }];
//          setCart(cartProducts);
//          localStorage.setItem("cart", JSON.stringify(cartProducts));
//       }
//    };

//    return (
//       <>
//          <Navbar cartItems={cart} />
//          <div className="grid px-4 md:px-6 lg:px-10 pb-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
//             {loading ? <p>Loading...</p> : products.map((product) => (
//                <ProductCard product={product} key={product.id} addToCart={addToCart} />
//             ))}
//             {error && <p>{error}</p>}
//          </div>
//          <Pagination
//             currentPage={currentPage}
//             totalPages={totalPages}
//             onPageChange={setCurrentPage}
//          />
//       </>
//    );
// }


// It works with axios without No da message
"use client";
import { useEffect, useState } from "react";
import axios from 'axios';
import ProductCard from "./components/ProductCard";
import Navbar from "./components/Navbar";
import Pagination from "./components/Pagination";
import { FaSpinner } from 'react-icons/fa'; // Importing the spinner from react-icons

export default function Products() {
   const [products, setProducts] = useState([]);
   const [cart, setCart] = useState([]);
   const [currentPage, setCurrentPage] = useState(1);
   const [totalPages, setTotalPages] = useState(1);
   const [isLoading, setIsLoading] = useState(false);
   const [error, setError] = useState('');

   const fetchProducts = async (page) => {
      setIsLoading(true);
      try {
         const response = await axios.get(`/api/products?page=${page}`);
         const { products, totalProducts } = response.data;

         setProducts(products);
         const pages = Math.ceil(totalProducts / 12); // 12 products per page
         setTotalPages(pages);
         setError('');
      } catch (error) {
         console.error('Error fetching products:', error);
         setError('Failed to load products. Please try again later.');
      } finally {
         setIsLoading(false);
      }
   };

   useEffect(() => {
      fetchProducts(currentPage);
   }, [currentPage]);

   useEffect(() => {
      const storedCart = JSON.parse(localStorage.getItem("cart"));
      if (storedCart) setCart(storedCart);
   }, []);

   const addToCart = (product) => {
      const existingProduct = cart.find(item => item.id === product.id);
      if (existingProduct) {
         const updatedCart = cart.map(item =>
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

   return (
      <>
         <Navbar cartItems={cart} />
         {isLoading ? (
            <div className="flex justify-center items-center h-screen">
               <FaSpinner className="text-6xl animate-spin" />
            </div>
         ) : error ? (
            <div className="flex justify-center items-center h-screen">
               <p>{error}</p>
            </div>
         ) : (
            <div>
               <div className="grid px-4 md:px-6 lg:px-10 pb-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                  {products.map((product) => (
                     <ProductCard product={product} key={product.id} addToCart={addToCart} />
                  ))}
               </div>
               {products.length > 0 && (
                  <Pagination
                     currentPage={currentPage}
                     totalPages={totalPages}
                     onPageChange={setCurrentPage}
                  />
               )}
            </div>
         )}
      </>
   );
}





