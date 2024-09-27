import Image from "next/image";
import { bitter, nunito } from "../fonts";
import Button from "../ui/Button";
import ProductCard from "../ui/ProductCard";
import BlogCard from "../ui/BlogCard";

const HomeBlogs = () => {
    return ( 
        <section className="lg:h-[85vh] h-full grid lg:grid-cols-6 grid-cols-1 gap-6 justify-start items-start px-4 py-6 bg-secondary shadow">
            <div className="lg:col-span-2 col-span-6 bg-primary h-full rounded-md py-4">
                <div className="flex flex-col justify-start items-center gap-2">
                    <h1 className={`${bitter.className} text-xl font-extrabold drop-shadow-md text-neutral uppercase`}>Get all the Info!</h1>
                    <h2 className={`${nunito.className} lg:text-4xl text-3xl font-bold drop-shadow-md text-cta`}>Why AI is for you?</h2>
                    <Button>Read Now</Button>
                </div>
                <div className="w-full flex justify-center rounded-md">
                <Image
                    src="/iphone-series.png"
                    alt="product image"
                    width={270}
                    height={270}
                />
            </div>
            </div>
            <div className="flex flex-col justify-start items-start gap-4 lg:col-span-4 col-span-6">
                    <div className="w-full flex justify-between items-center">
                        <h1 className={`${nunito.className} text-3xl text-neutral font-bold`}>New Blogs</h1>
                        <span className={`${nunito.className} text-base text-neutral font-bold bg-cta px-3 py-2 rounded-3xl shadow-md hover:opacity-80 cursor-pointer`}>{`Read More >`}</span>
                    </div>
                    <div className="w-full grid md:grid-cols-3 grid-cols-1 gap-2">
                        <BlogCard />
                        <BlogCard />
                        <BlogCard />
                    </div>
            </div>
        </section>
     );
}
 
export default HomeBlogs;