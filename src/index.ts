import * as express from "express";

import errorHandler from "./error";
import * as CONFIG from "../config.json";

const app: express.Express = express();

app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({ extended: false }));

app.use((request: express.Request, response: express.Response) => {
    response.status(200);
    response.json({
        "hello": "world"
    });
    response.end();
    return;
});

app.use(errorHandler);

app.listen(CONFIG.PORT);