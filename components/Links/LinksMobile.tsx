"use client"
import Link from "next/link";
import { nunito } from "../fonts";

const LinksMobile = () => {

    const linksMobile = [
        {
            title: 'Terms and Conditions',
            path: '/terms-and-conditions',
        },
        {
            title: 'Delivery and Return',
            path: '/delivery-and-return',
        },
        {
            title: 'Privacy Policy',
            path: '/privacy-policy',
        },
        {
            title: 'Blog',
            path: '/blogs',
        },
        // {
        //     title: 'Promotions',
        //     path: '/promotions',
        // }
    ];

    return (
        <div className={`flex flex-col items-center text-center mt-12 gap-6`}>
            {linksMobile.map((link) => (
                <Link
                    href={link.path}
                    key={link.title}
                    className={`text-secondary  font-medium text-xl ${nunito.className}`}
                >
                    {link.title}
                </Link>
            ))}
        </div>
    );
}

export default LinksMobile;
