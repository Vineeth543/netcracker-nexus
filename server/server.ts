import * as express from "express";
import * as bodyParser from "body-parser";
import * as appRouters from "./routers";

const app = express(),
    port = process.env.NODEJS_PORT || 3000,
    root = '/';

const allowCrossDomain = (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
};


// Add your mock router here
const routers = [
    {
        url: 'home',
        middleware: appRouters.homeRouter
    },
    {
        url: 'assets/i18n',
        middleware: appRouters.localizationRouter
    }
];

app.use(allowCrossDomain);
app.use(bodyParser.json());

routers.forEach(router => app.use(root + router.url, router.middleware));

app.listen(port, () => {
    console.log(`Mock server is listening on port ${port}`);
});
