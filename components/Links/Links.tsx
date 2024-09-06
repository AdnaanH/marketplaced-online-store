import { usePathname } from "next/navigation";
import Link from "next/link";
import { nunito } from "../fonts";

const Links = () => {
    const pathname = usePathname({links});


    return (
        <div className={`lg:relative absolute left-0 lg:top-0 top-16 w-full lg:h-min h-[calc(100vh-56px)] lg:bg-transparent bg-primary flex lg:flex-row flex-col items-center justify-center gap-6 font-medium z-10 lg:text-primary text-white text-xl`}>
            {links.map((link) => (
                <Link
                    href={link.path}
                    key={link.title}
                    className={`py-1 lg:border-b-2 border-b-secondary ${nunito.className} ${
                        pathname === link.path ? 'lg:border-b-2 lg:bg-transparent lg:py-1 lg:p-0 p-3 lg:rounded-none rounded-full lg:shadow-none shadow-sm bg-secondary lg:border-cta-button' : 'lg:hover:border-b-2 lg:hover:border-neutral'
                    }`}
                >
                    {link.title}
                </Link>
            ))}
        </div>
    );
}

export default Links;
