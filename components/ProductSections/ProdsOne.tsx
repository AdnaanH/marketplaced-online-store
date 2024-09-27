import Image from "next/image";
import { bitter, nunito } from "../fonts";
import Button from "../ui/Button";
import ProductCard from "../ui/ProductCard";

type ProdsOneProps = {
    catTitle: string;
}

const ProdsOne = ({catTitle}: ProdsOneProps) => {
    return ( 
        <section className="min-h-96 grid px-4 py-6">
            <div className="w-full flex flex-col justify-start items-start gap-4">
                    <div className="w-full flex justify-between items-center">
                        <h1 className={`${nunito.className} text-3xl text-primary font-bold`}>{catTitle}</h1>
                        <span className={`${nunito.className} text-base text-neutral font-bold bg-cta px-3 py-2 rounded-3xl shadow-md hover:opacity-80 cursor-pointer`}>{`Shop More >`}</span>
                    </div>
                    <div className="w-full grid lg:grid-cols-6 md:grid-cols-3 grid-cols-1 gap-2">
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                    </div>
            </div>
        </section>
     );
}
 
export default ProdsOne;