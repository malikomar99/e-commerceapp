import React from "react";
import { FaShippingFast } from "react-icons/fa";
import { MdPayments,MdProductionQuantityLimits,MdLocalShipping  } from "react-icons/md";
export function Service(){
    return(
        <>
        <div className="container flex gap-10 mx-auto items-center justify-center py-7 flex-wrap">
      <div className="bg-red-600 py-3 px-5 text-white flex gap-2 flex-col items-center w-[220px]">
      <FaShippingFast size={80} />
        <p>Free Shipping</p>
        
        </div>
      <div className="bg-red-600 py-3 px-5 text-white flex gap-2 flex-col items-center w-[220px]">
      <MdProductionQuantityLimits size={80}  />
        <p>Authentic Products</p>
        
        </div>
      <div className="bg-red-600 py-3 px-5 text-white flex gap-2 flex-col items-center w-[220px]">
      <MdLocalShipping size={80}  />
        <p>Easy Return</p>
        
        </div>
      <div className="bg-red-600 py-3 px-5 text-white flex gap-2 flex-col items-center w-[220px]">
      <MdPayments size={80}  />

        <p>Secure Payment</p>
        
        </div>
        </div>
        </>
    )
}