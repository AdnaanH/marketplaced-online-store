import CatComponent from "./CatComponent";

const HeroCat = () => {
    return ( 
        <section className="grid md:grid-cols-2 grid-cols-1 gap-4 flex-grow h-full row-span-1">

            <CatComponent 
                title="Modern Smartphones" 
                description="Pick the best design for you." 
                imgSrc="/iphone.png"
                bg="bg-primary"
            />
            <CatComponent 
                title="Outstanding Gadgets" 
                description="Revolusionize your best entertainment." 
                imgSrc="/earbud.png"
                bg="bg-cta"
            />
        </section>
     );
}
 
export default HeroCat;