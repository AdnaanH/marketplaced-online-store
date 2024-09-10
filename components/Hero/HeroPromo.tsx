import { zillaSlab } from "../fonts";
import Button from "../ui/Button";
import CountdownTimer from "./CountDownTimer";

const HeroPromo = () => {
    const targetDate = "2024-09-31T23:59:59";

    return ( 
        <section className="flex-grow flex flex-col items-start justify-center h-full hover:bg:scale-110 bg-contain bg-no-repeat bg-right bg-opacity-65 bg-bg bg-primary rounded-md shadow-md px-4 py-6 gap-4">
            <h1 className={`${zillaSlab.className} lg:text-6xl text-3xl font-bold text-cta drop-shadow-md uppercase`}>Biggest Tech Sale</h1>
            <CountdownTimer targetDate={targetDate} />
            <Button>buy now</Button>
        </section>
     );
}
 
export default HeroPromo;