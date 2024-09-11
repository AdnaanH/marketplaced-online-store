import Image from "next/image";
import { nunito } from "../fonts";

const ProdCard = () => {
    return ( 
        <div className="grid gap-2 items-start rounded-md min-h-56 bg-neutral">
            <div className="h-56 w-full rounded-md">
                <Image
                    src="/product.png"
                    alt="product image"
                    width={100}
                    height={100}
                    className="w-full object-cover"
                />
            </div>
            <div className="flex flex-col px-2 py-6 text-primary">
                <h2 className={`${nunito.className} text-xl font-bold`} >Apple iPhone 13</h2>
                <h3 className={`${nunito.className} flex md:justify-start justify-center items-center gap-2 font-bold text-base`}> <span className="font-normal line-through">25,000</span> 19,999</h3>
            </div>
        </div>
     );
}
 
export default ProdCard;