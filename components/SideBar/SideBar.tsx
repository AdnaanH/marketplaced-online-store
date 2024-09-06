import { nunito } from "../fonts";

type SideBarProps = {
    setIsMenuOpen?: (isOpen: boolean) => void;
  };
  
  const SideBar: React.FC<SideBarProps> = ({ setIsMenuOpen }) => {
    return (
      <aside
        className="absolute top-0 left-0 ease-in-out z-50 w-[350px] h-full bg-neutral p-4"
        // onMouseLeave={() => setIsMenuOpen(false)}
      >
        <h1 className={`${nunito.className} bg-primary text-neutral text-xl font-bold px-6 py-2 rounded-3xl`}>All Categories</h1>

        
      </aside>
    );
  };
  
  export default SideBar;
  