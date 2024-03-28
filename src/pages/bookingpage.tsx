import React, { useState } from "react";

const BookingPage: React.FC = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [date, setDate] = useState("");
    const [band, setBand] = useState("");
    const [bookings, setBookings] = useState<{ [date: string]: { [bandName: string]: number } }>({});

    const handleBooking = (e: React.FormEvent) => {
        e.preventDefault();
        // Voeg hier je boekingslogica toe, zoals het verzenden van de gegevens naar de backend
        console.log("Booking submitted:", { name, email, date, band });
        // Update het aantal boekingen voor de geselecteerde band op de geselecteerde datum
        setBookings((prevBookings) => ({
            ...prevBookings,
            [date]: {
                ...prevBookings[date],
                [band]: (prevBookings[date]?.[band] || 0) + 1,
            }
        }));
        // Reset het formulier na het indienen
        setName("");
        setEmail("");
        setDate("");
        setBand("");
    };

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
            <main className="p-0 border-b-0 grid grid-cols-2 gap-8 m-5">
                <header className="bg-base-100 mb-40 shadow-xl rounded-box p-6">
                    <h1 className="text-2xl font-bold mb-4">Booking Page</h1>
                    <form onSubmit={handleBooking} className="space-y-4">
                        <div className="flex flex-col">
                            <label htmlFor="name" className="text-lg font-medium">
                                Name:
                            </label>
                            <input
                                type="text"
                                id="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                                className="input input-bordered"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="email" className="text-lg font-medium">
                                Email:
                            </label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="input input-bordered"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="date" className="text-lg font-medium">
                                Date:
                            </label>
                            <input
                                type="date"
                                id="date"
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                                required
                                className="input input-bordered"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="band" className="text-lg font-medium">
                                Band:
                            </label>
                            <select
                                id="band"
                                value={band}
                                onChange={(e) => setBand(e.target.value)}
                                required
                                className="input input-bordered"
                            >
                                <option value="">Select a band</option>
                                {bandDescriptions.map((bandName) => (
                                    <option key={bandName} value={bandName}>{bandName}</option>
                                ))}
                            </select>
                        </div>
                        <button type="submit" className="btn btn-primary">
                            Book
                        </button>
                    </form>
                </header>
                <div className="bg-base-100 p-6 rounded-box">
                    <h2 className="text-lg font-bold">Booking Summary</h2>
                    {Object.keys(bookings).map(date => (
                        <div key={date}>
                            <h3>{date}</h3>
                            <ul className="list-disc list-inside">
                                {Object.entries(bookings[date]).map(([bandName, count]) => (
                                    <li key={bandName}>{`${bandName}: ${count} bookings`}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </main>
        </>
    );
};

export default BookingPage;
