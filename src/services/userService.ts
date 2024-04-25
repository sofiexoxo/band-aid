import createClient from "openapi-fetch"
import type { paths } from "../lib/api/v1";

const client = createClient<paths>({ baseUrl: "/" });

const getBands = await client.GET("/api/bands");

const postToken = await client.POST("/api/token", {
    params: {
        query: { dsn: "dsn" },
    },
    body: {
        grant_type: "",
        username: "username",
        password: "password",
        scope: "",
        client_id: "",
        client_secret: "",
    }
});
const postRegister = await client.POST("/api/register", (req, res) {
    body: {
        email: "string",
            password: "string",
    },
});




const myMiddleware: Middleware = {
    async onRequest(req, options) {
        // set "foo" header
        req.headers.set("foo", "bar");
        return req;
    },
};
client.use(myMiddleware);