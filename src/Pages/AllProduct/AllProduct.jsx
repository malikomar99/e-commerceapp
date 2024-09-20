import axios from "axios";
import React, { useEffect, useState } from "react";
import { Layouts } from "../../Components/Layouts/Layouts";

export function AllProduct({AddToCart}) {
  const [allCategory, setAllCategory] = useState([]);

  const [Product, setProduct] = useState([]);
  const [selectProduct, setSelectProduct] = useState("");

  const [AllProduct, ShowallProduct] = useState([]);
  const [HideProduct, ShowProduct] = useState(false);
  // Fetch categories
  useEffect(() => {
    const getAllProduct = async () => {
      try {
        const res = await axios.get("https://dummyjson.com/products/categories");
        setAllCategory(res.data); // categories are strings, not objects
      } catch (error) {
        console.log("Error fetching categories: ", error);
      }
    };
    getAllProduct();
  }, []);

  // Filter products by selected category
  const filter = (category) => {
    setSelectProduct(category); // Set the selected category
    ShowProduct(true)
  };
// useEffect(()=>{
// console.log("product>>",Product)
// }, [Product])
  // Fetch products when selectProduct changes
  useEffect(() => {
    const getProduct = async () => {
      try {
        if (selectProduct) {
            console.log("selectP>>", selectProduct)
          const res = await axios.get(
            `https://dummyjson.com/products/category/${selectProduct}`
          );
          setProduct(res.data.products);
        }
      } catch (error) {
        console.log("Error fetching products: ", error);
      }
    };
    getProduct();
  }, [selectProduct]); // Trigger when selectProduct changes

  useEffect(() => {
    const fetchAllProducts = async () => {
      try {
        const res = await axios.get("https://dummyjson.com/products");
        ShowallProduct(res.data.products); // Ensure you're accessing 'products' array from the API response
      } catch (error) {
        console.log("Error fetching products: ", error);
      }
    };
    fetchAllProducts();
  }, []);


  return (
    <>
      <Layouts>
        <div className="min-h-screen"> {/* Ensures content takes up at least full screen height */}
          <div className="text-center">
            <h1>All Categories</h1>
          </div>

          <div className="flex gap-3 flex-wrap">
            {allCategory.length>0 && allCategory?.map((category, index) => (
              <div className="border" key={index}>
                <button
                  className="border bg-black text-white px-2"
                  onClick={() => {
                    filter(category?.slug);
                    // console.log("cat>>>",category?.slug)
                }}
                >
                  {category.slug} {/* Use the category string directly */}
                </button>
              </div>
            ))}
          </div>

          
         {
            HideProduct?
            <div className="container mt-10">
            <h1 className="text-center font-bold text-3xl mb-6">
              <strong>All Product</strong>
            </h1>

            <div className="mt-16">
              <h3 className="text-gray-600 text-2xl font-medium">Fashions</h3>
              <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
                {Product.length>0 && Product?.map((item, index) => (
                  <div
                    key={index}
                    className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden"
                  >
                    <div
                      className="flex items-end justify-end h-56 w-full bg-center"
                      style={{
                        backgroundImage: `url(${item.thumbnail})`, // Inject product thumbnail dynamically
                      }}
                    >
                      <button className="p-2 rounded-full bg-blue-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500" onClick={()=>AddToCart(Product)} >
                        <svg
                          className="h-5 w-5"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                        </svg>
                      </button>
                    </div>
                    <div className="px-5 py-3">
                      <h3 className="text-gray-700 uppercase">{item.title}</h3> {/* Display product title */}
                      <span className="text-gray-500 mt-2">Price:${item.price}</span> {/* Display product price */}

                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>:
          <div className="container mt-10">
          <h1 className="text-center font-bold text-3xl mb-6">
            <strong>All Products</strong>
          </h1>

          <div className="mt-16">
            <h3 className="text-gray-600 text-2xl font-medium">Fashions</h3>
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
              {AllProduct.map((Allitem, index) => (
                <div
                  key={index}
                  className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden"
                >
                  <div
                    className="flex items-end justify-end h-56 w-full bg-center"
                    style={{
                      backgroundImage: `url(${Allitem.thumbnail})`, // Inject product thumbnail dynamically
                    }}
                  >
                    <button className="p-2 rounded-full bg-blue-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                      <svg
                        className="h-5 w-5"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                      </svg>
                    </button>
                  </div>
                  <div className="px-5 py-3">
                    <h3 className="text-gray-700 uppercase">{Allitem.title}</h3> {/* Display product title */}
                    <span className="text-gray-500 mt-2">Price: ${Allitem.price}</span> {/* Display product price */}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
         }
          
        </div>
      </Layouts>
    </>
  );
}
