import React from "react";
import Link from 'next/link'; // Import Link from Next.js
import { nunito } from "../fonts";

type Item = {
    value: string;
    label: string;
}

type Category = {
    value: string;
    label: string;
    items: Item[];
}

type CategorySelectProps = {
    categories: Category[];
};

const CatItem: React.FC<CategorySelectProps> = ({ categories }) => {
    return ( 
        <div className={`${nunito.className} text-base font-normal w-full grid grid-cols-1`}>
            {categories.map((category) => (
                <div key={category.label}>
                    <h1 className={`${nunito.className} bg-secondary text-neutral text-xl font-bold px-6 py-2 rounded-3xl`}>{category.label}</h1>
                    {category.items.map((item) => (
                        <div key={item.value} className="ml-6 flex items-center space-x- mb-2">
                            <Link href={`/category/${item.value}`}>
                                {/* Category icon */}
                                <p className="text-secondary text-base font-bold">{item.label}</p>
                            </Link>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}

export default CatItem;
