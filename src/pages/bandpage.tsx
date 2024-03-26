import FlexboxList from "../components/FlexboxList";
import { Item } from "../models";

const BandPage: React.FC = () => {
    const bands: Item[] = [
        {
            name: "Band 1",
            image: "url_to_image1.jpg" // Voeg hier de URL van de afbeelding toe
        },
        {
            name: "Band 2",
            image: "url_to_image2.jpg" // Voeg hier de URL van de afbeelding toe
        },
        {
            name: "Band 3",
            image: "url_to_image3.jpg" // Voeg hier de URL van de afbeelding toe
        }
    ];
    return (
        <>
            <main className="p-0 border-b-0 m-0">
                <header className="bg-base-100 mb-15 shadow-x1 rounded-box" >
                    <h1 className=" p-10 font-bold text-3xl grid-rows-4">Bands</h1>
                </header>

                <div>
                    <div>
                        <h1>Band Page</h1>
                        <FlexboxList />
                    </div>
                </div>
            </main>
        </>
    );
}

export default BandPage;