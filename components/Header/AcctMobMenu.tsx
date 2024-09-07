"use client"
import React, { useState } from "react";
import { VscAccount } from "react-icons/vsc";
import MobMenu from "./MobMenu";

const AcctMobMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    return ( 
        <div className="lg:hidden grid">
            <div className="p-2 flex justify-center items-center bg-neutral rounded-full text-center text-secondary text-3xl">
                <VscAccount onClick={() => setIsOpen(!isOpen)}/>
            </div>
            {isOpen && 
                <MobMenu setIsOpen={setIsOpen} />
            }
        </div>
     );
}
 
export default AcctMobMenu;
