import { VscAccount } from "react-icons/vsc";

const AcctMobMenu = () => {
    return ( 
        <div className="lg:hidden grid relative">
            <div className="p-2 flex justify-center items-center bg-neutral rounded-full text-center text-secondary text-3xl">
                    <VscAccount />
            </div>

        </div>
     );
}
 
export default AcctMobMenu;