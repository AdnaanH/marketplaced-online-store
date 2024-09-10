import { FaTimes } from "react-icons/fa";
import AcctMgmt from "./AcctMgmt";
import LinksMobile from "../Links/LinksMobile";

type MobMenuProps = {
    setIsOpen:(isOpen: boolean) => void;
}

const MobMenu: React.FC<MobMenuProps> = ({ setIsOpen }) => {
    return ( 
        <div className="absolute top-0 left-0 min-h-screen w-full flex flex-col justify-center items-center bg-neutral z-50 transition-all ease-in duration-300">
            <div
                className="absolute top-2 right-2"
                onClick={() => setIsOpen(false)}
            >
                <FaTimes className="cursor-pointer bg-secondary rounded-full p-1 text-primary text-3xl" />
            </div>
            <AcctMgmt />
            <LinksMobile />
        </div>
     );
}
 
export default MobMenu;