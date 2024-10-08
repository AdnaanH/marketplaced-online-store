import { useEffect, useState } from "react";
import { getCategoriesGroupedByParent } from '@/lib/apis';
import CatItem from "./CatItem";
import { FaTimes } from "react-icons/fa";

type Item = {
  value: string;
  label: string;
};

type Category = {
  value: string; 
  label: string;
  items: Item[];
};

type SideBarProps = {
    setIsMenuOpen: (isOpen: boolean) => void;
};

const SideBar: React.FC<SideBarProps> = ({ setIsMenuOpen }) => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    async function fetchCategories() {
      try {
        const groupedCategories: any[] = await getCategoriesGroupedByParent(); // Assuming response structure is different
        
        // Map the response to ensure `value` is present in the items
        const categoriesWithValues: Category[] = groupedCategories.map((category) => ({
          ...category,
          value: category.value || category.label, // Ensure `value` exists for category
          items: category.items.map((item: any) => ({
            ...item,
            value: item.value || item.label, // Ensure `value` exists for each item
          })),
        }));
  
        setCategories(categoriesWithValues);
      } catch (error) {
        console.error('Failed to fetch categories', error);
      }
    }
  
    fetchCategories();
  }, []);
  

  return (
    <aside
      className="scroll-container absolute top-0 bottom-0 left-0 transition-all ease-in duration-300 z-50 lg:w-[350px] w-full h-full bg-neutral px-4 py-2 overflow-y-scroll"
      onMouseLeave={() => setIsMenuOpen(false)}
    >
        <div
        className="lg:hidden flex w-full justify-end mb-2 text-neutral text-3xl"
        onClick={() => setIsMenuOpen(false)}
      >
          <FaTimes className="cursor-pointer bg-secondary rounded-full p-1" />
        </div>
       <CatItem categories={categories} />        
    </aside>
  );
};

export default SideBar;
