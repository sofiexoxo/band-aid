import React from "react";
import image1 from "./../assets/images/foto1.jpg";
import image2 from "./../assets/images/foto2.jpg";
import image3 from "./../assets/images/foto3.jpg";
import image4 from "./../assets/images/foto4.jpg";
import image5 from "./../assets/images/foto5.jpg";
import image6 from "./../assets/images/foto6.jpg";
import image7 from "./../assets/images/foto7.jpg";
import image8 from "./../assets/images/foto8.jpg";
import image9 from "./../assets/images/foto9.jpg";

interface YourImageProps {
    bandDescriptions: string[];
}

const YourImage: React.FC<YourImageProps> = (props) => {
    return (
        <div className="flex flex-wrap justify-between gap-4">
            <div className="flex flex-col items-center p-4 border rounded-lg" style={{ maxWidth: 'calc(33.33% - 2rem)' }}>
                <img src={image1} alt="Image 1" className="w-full h-auto rounded-lg" />
                <p className="mt-2">{props.bandDescriptions[0]}</p>
            </div>
            <div className="flex flex-col items-center p-4 border rounded-lg" style={{ maxWidth: 'calc(33.33% - 2rem)' }}>
                <img src={image2} alt="Image 2" className="w-full h-auto rounded-lg" />
                <p className="mt-2">{props.bandDescriptions[1]}</p>
            </div>
            <div className="flex flex-col items-center p-4 border rounded-lg" style={{ maxWidth: 'calc(33.33% - 2rem)' }}>
                <img src={image3} alt="Image 3" className="w-full h-auto rounded-lg" />
                <p className="mt-2">{props.bandDescriptions[2]}</p>
            </div>
            <div className="flex flex-col items-center p-4 border rounded-lg" style={{ maxWidth: 'calc(33.33% - 2rem)' }}>
                <img src={image4} alt="Image 4" className="w-full h-auto rounded-lg" />
                <p className="mt-2">{props.bandDescriptions[3]}</p>
            </div>
            <div className="flex flex-col items-center p-4 border rounded-lg" style={{ maxWidth: 'calc(33.33% - 2rem)' }}>
                <img src={image5} alt="Image 5" className="w-full h-auto rounded-lg" />
                <p className="mt-2">{props.bandDescriptions[4]}</p>
            </div>
            <div className="flex flex-col items-center p-4 border rounded-lg" style={{ maxWidth: 'calc(33.33% - 2rem)' }}>
                <img src={image6} alt="Image 6" className="w-full h-auto rounded-lg" />
                <p className="mt-2">{props.bandDescriptions[5]}</p>
            </div>
            <div className="flex flex-col items-center p-4 border rounded-lg" style={{ maxWidth: 'calc(33.33% - 2rem)' }}>
                <img src={image7} alt="Image 7" className="w-full h-auto rounded-lg" />
                <p className="mt-2">{props.bandDescriptions[6]}</p>
            </div>
            <div className="flex flex-col items-center p-4 border rounded-lg" style={{ maxWidth: 'calc(33.33% - 2rem)' }}>
                <img src={image8} alt="Image 8" className="w-full h-auto rounded-lg" />
                <p className="mt-2">{props.bandDescriptions[7]}</p>
            </div>
            <div className="flex flex-col items-center p-4 border rounded-lg" style={{ maxWidth: 'calc(33.33% - 2rem)' }}>
                <img src={image9} alt="Image 9" className="w-full h-auto rounded-lg" />
                <p className="mt-2">{props.bandDescriptions[8]}</p>
            </div>
        </div>
    );
}

export default YourImage;
