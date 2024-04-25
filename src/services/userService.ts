import createClient from "openapi-fetch"
import type { paths } from "../lib/api/v1";

const client = createClient<paths>({ baseUrl: "/" });

const getBands = await client.GET("/bands");


const postRegister = await client.POST("/register", {
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