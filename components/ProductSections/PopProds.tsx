import { bitter } from "../fonts";
import ProdCard from "../ui/ProdCard";

const PopProds = () => {
    return ( 
        <section className="min-h-72 flex flex-col gap-8 justify-start items-start px-4 py-8">
            <h1 className={`${bitter.className} lg:text-4xl text-3xl font-bold text-secondary lg:text-start text-center`}>Popular Products</h1>
            <div className="w-full grid 2xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-3 grid-cols-1 gap-4">
                <ProdCard />
                <ProdCard />
                <ProdCard />
                <ProdCard />
                <ProdCard />
            </div>
        </section>
     );
}
 
export default PopProds;