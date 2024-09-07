import { RiShoppingBag4Fill } from "react-icons/ri";
import Links from "../Links/Links";
import AcctMgmt from "./AcctMgmt";
import AcctMobMenu from "./AcctMobMenu";
import CatMenu from "./CatMenu";

const Header = () => {
    return ( 
        <nav className="w-full flex justify-between bg-primary items-center 2xl:px-16 px-2 py-3 h-18">
            <div className="flex gap-12">
                <CatMenu />
                <Links />
            </div>
            <RiShoppingBag4Fill className="lg:hidden grid text-cta text-5xl" />
            <div className="lg:grid hidden">
                <AcctMgmt />
            </div>
            <AcctMobMenu />        
        </nav>
     );
}
 
export default Header;
