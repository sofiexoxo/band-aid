import React from "react";
import image0 from "./../assets/images/foto0.jpg";

const ProjectsPage: React.FC = () => {
    return (
        <>
            <main className="p-0 border-b-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${image0})`, height: '100vh' }}>
                <header className="bg-base-100 mb-0 shadow-xl rounded-box" >
                </header>
                <div className="flex flex-col items-end rounded-lg content-wrapper">
                    <h1 className="font-bold text-pink-300 text-3xl m-10 mb-5 ">Welkom op de Hoofdpagina van Band-aid!</h1>
                    <p className="font-bold  m-10 mb-0">Op deze website kunt u verschillende bands booken,</p>
                    <p className="font-bold mr-10">wij beschikken van een grote variatie van verschillende bands.</p>
                </div>
            </main>
        </>
    );
}

export default ProjectsPage;
