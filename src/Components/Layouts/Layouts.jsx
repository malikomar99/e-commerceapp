import React, { Children } from "react";
import { Navbar } from "../Navbar/Navbar";
import { Footer } from "../Footer/Footer";
export function Layouts({children}) {
    return (
        <>
            <Navbar />
            <div className="content">
                {children}
            </div>
            <Footer />
        </>
    )
}
