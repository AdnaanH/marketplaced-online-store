import Image from "next/image";
import { nunito } from "../fonts";

const CatCard = () => {
    return ( 
        <div className="relative grid gap-2 items-start rounded-md h-56 bg-neutral">
            <div className="absolute h-56 w-full flex justify-end items-end rounded-md">
                <Image
                    src="/product.png"
                    alt="product image"
                    fill
                    className="w-full object-cover"
                />
                <h2 className={`${nunito.className} text-xl font-bold text-primary rounded-tl-3xl rounded-bl-3xl z-50 bg-cta pl-3 py-2`}>MAIN CATEGORIES</h2>
            </div>
        </div>
     );
}
 
export default CatCard;