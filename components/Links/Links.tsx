"use client"
import { usePathname } from "next/navigation";
import Link from "next/link";
import { nunito } from "../fonts";

const Links = () => {
    const pathname = usePathname();

    const links = [
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
        <div className={`lg:flex hidden items-center gap-6 font-medium text-neutral text-base`}>
            {links.map((link) => (
                <Link
                    href={link.path}
                    key={link.title}
                    className={`hover:text-secondary ease-in-out ${nunito.className} ${
                        pathname === link.path ? 'text-secondary' : ''
                    }`}
                >
                    {link.title}
                </Link>
            ))}
        </div>
    );
}

export default Links;
