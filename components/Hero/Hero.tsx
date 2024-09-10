import HeroCat from "./HeroCat";
import HeroPromo from "./HeroPromo";
import Slider from "./Slider";

const Hero = () => {
    return ( 
        <section className="min-h-[550px] p-4 grid lg:grid-cols-2 grid-cols-1 grid-rows-1 items-center gap-4">
            <div className="row-span-1">
                <Slider />
            </div>
            <div className="row-span-1 flex flex-col gap-4 justify-between">
                <HeroPromo  />
                <HeroCat  />
            </div>
        </section>
    );
}
 
export default Hero;
