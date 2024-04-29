import createClient from "openapi-fetch"
import type { paths } from "../lib/api/v1";

const client = createClient<paths>({ baseUrl: "/" });


export const getToken = async (dsn: string, username: string, password: string) => {
    return await client.POST("/api/login", {
        params: {
            query: { dsn: dsn },
        },
        body: {
            username: username,
            password: password,
            scope: ""
        }
    });
};
export const registerUser = async (dsn: string, email: string, password: string) => {
    return await client.POST("/api/register", {
        params: {
            query: { dsn: dsn },
        },
        body: {
            email: email,
            password: password,
        },
    });
};


const logoutUser = async () => {
    return client.POST("/api/logout");
}


export const bookBand = async (name: string, email: string, date: string, band: string) => {
    return await client.POST("/api/bookingpage", {
        body: {
            name: name,
            email: email,
            date: date,
            band: band,
        },
    });
};

