import React from "react";
import { Layouts } from "../../Components/Layouts/Layouts";
import { Herosection } from "../../Components/Herosection/Herosection";
// import { Gallery } from "../../Components/Gallery/Gallery";
import { Service } from "../../Components/Service/Service";
import { Kids } from "../../Components/Kids/Kids";
// import { Women } from "../../Components/Women/Women";
export function Home(){
    return(
        <>
        <Layouts>
            <Herosection/>
            <Service/>
            {/* <Gallery/> */}
            <Kids withLayout={false} />
             {/* <Women/> */}
            </Layouts>
        </>
    )
}