import { MdOutlineManageAccounts } from "react-icons/md";
import { BsFillHeartFill } from "react-icons/bs";
import { RiShoppingBag4Fill } from "react-icons/ri";

const AcctMgmt = () => {
    return ( 
        <div className="relative flex items-center gap-4">
            {/* Account */}
                <div className="p-2 flex justify-center items-center bg-neutral rounded-full text-center text-secondary text-3xl">
                    <MdOutlineManageAccounts />
                </div>
            {/* Wishlist */}
                <div className="relative p-2 flex justify-center items-center bg-neutral rounded-full text-center text-secondary text-3xl">
                    <BsFillHeartFill />
                    <span className="absolute -top-2 right-0 bg-error w-5 h-5 flex justify-center items-center text-neutral rounded-full p-1 text-xs">0</span>
                </div>
            {/* Cart */}
                <div className="relative p-2 flex justify-center items-center bg-secondary rounded-full text-center text-neutral text-3xl">
                    <RiShoppingBag4Fill />
                    <span className="absolute -top-2 right-0 bg-error w-5 h-5 flex justify-center items-center text-neutral rounded-full p-1 text-xs">0</span>
                </div>
        </div>
     );
}
 
export default AcctMgmt;