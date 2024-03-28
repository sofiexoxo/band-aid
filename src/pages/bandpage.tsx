import React from "react";
import YourImage from "../components/images";
const BandPage: React.FC = () => {
    const bandDescriptions = [
        "BandRockers",
        "GhostRockers",
        "Karikatura Reggae Fusion Band",
        "Festi",
        "Fusion Band",
        "Catastrophe",
        "Outlanders",
        "ReACT",
        "LAUnch"
    ];
    return (
        <>
            <main className="p-0 border-b-0 m-0">
                <header className="bg-base-100 mb-5 shadow-x1 rounded-box" >
                    <h1 className=" p-10 font-bold text-3xl grid-rows-4 text-center">Bands</h1>
                    <h3 className=" m-10 grid-rows-4 text-center">Here are all the bands you can choose from!</h3>
                </header>

                <div className="m-10 mb-0">
                    <div>
                        <div className="mt-5">
                            <YourImage
                                bandDescriptions={bandDescriptions}
                            />
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}

export default BandPage;