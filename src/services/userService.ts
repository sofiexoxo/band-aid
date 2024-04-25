import createClient from "openapi-fetch"
import type { paths } from "../lib/api/v1";

const client = createClient<paths>({ baseUrl: "/" });

const getBands = async () => {
    return await client.GET("/api/bands");
}

const getToken = async (dsn: string, grant_type: string, username: string, password: string, scope: string, client_id: string, client_secret: string) => {
    return client.POST("/api/token", {
        params: {
            query: { dsn: dsn },
        },
        body: {
            grant_type: grant_type,
            username: username,
            password: password,
            scope: scope,
            client_id: client_id,
            client_secret: client_secret,
        }
    });
};
const registerUser = async (dsn: string, email: string, password: string) => {
    return client.POST("/api/register", {
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


const bookBand = async (name: string, email: string, date: string, band: string) => {
    return client.POST("/api/book", {
        body: {
            name: name,
            email: email,
            date: date,
            band: band,
        },
    });
};

