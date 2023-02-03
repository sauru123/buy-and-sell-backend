import Hapi from '@hapi/hapi';
// const Path = require('path');
// const Inert = require('@hapi/inert');
import routes from './routes/index.js';
import { db } from './database.js';
//import * as admin from 'firebase-admin';
import admin from 'firebase-admin';
import { readFileSync } from "fs";
const credential = JSON.parse(readFileSync('./credentials.json'));
//import credential from '../credentials.json' assert {type: 'json'};


admin.initializeApp({
    credential: admin.credential.cert(credential),
});


let server;

const start = async () => {
    server = Hapi.server({
        port: 8000,
        host: 'localhost',
        routes: {
            cors: {
                origin: ['*'],
                headers: ['AuthToken'],
                exposedHeaders: ['Accept'],
                additionalExposedHeaders: ['Accept'],
                maxAge: 60,
                credentials: true
            },
        }
    });

    routes.forEach(route => {
        //console.log("Router",route);
        server.route(route)
    });

    // server.route({
    //     method: 'POST',
    //     path: '/hello',
    //     handler:(req,h)=>{
    //         const payload = req.payload;
    //         const name = payload.name;
    //         return `Hello ${name}`;
    //     }
    // })
    db.connect();
    await server.start();
    console.log(`Server is listening on ${server.info.uri}`);
}

process.on('unhandledRejection', err => {
    console.log(err);
    process.exit(1);
});

process.on('SIGINT', async () => {
    console.log('Stopping server...');
    await server.stop({ timeout: 1000 });
    db.end();
    console.log('Server stopped');
    process.exit(0);
});

start();