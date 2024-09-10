import Image from "next/image";
import Button from "../ui/Button";
import { nunito } from "../fonts";

type CatProps = {
    title: string;
    description: string;
    imgSrc: string;
    bg?: string;
}

const CatComponent = ({
    title,
    description,
    imgSrc,
    bg="bg-primary",
}: CatProps) => {
    return (
        <div className={`${nunito.className} relative ${bg}  bg-primary shadow rounded-md py-6 px-4`}>
            <div className="absolute flex flex-col justify-center items-start p-4 z-10">
                <h2 className="text-3xl font-bold mb-2 text-neutral w-full uppercase">{title}</h2>
                <h3 className="text-xl text-neutral mb-4 w-full">{description}</h3>
                <Button>View More</Button>
            </div>
            <div className="flex justify-end">
                <Image
                    src={imgSrc}
                    alt={title}
                    width={150}
                    height={150}className="hover:scale-150"
                />
            </div>
        </div>
    );
}

export default CatComponent;
