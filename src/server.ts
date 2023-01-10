import http from 'http';
import express, { Express } from 'express';
import morgan from 'morgan';
import router from './routes';

const app: Express = express();

const isLocal = process.env.NODE_ENV === 'development'
const environment = process.env.NODE_ENV ?? 'development'

function main() {
    app.use(morgan('common'));
    app.use(express.urlencoded({ extended: false }));

    app.use(express.json());

    !isLocal ? app.use('/api/hqs', router) : app.use(router)

    app.use((req, res, next) => {
        const error = new Error('not found');
        return res.status(404).json({
            message: error.message
        });
    });

    const httpServer = http.createServer(app);

    const PORT: any = process.env.PORT ?? 4000;

    httpServer.listen(PORT, () => {
        console.log('******************************');
        console.log(`     HQS API (${environment})     `);
        console.log(`    Listening on port ${PORT} `);
        console.log('******************************');
    });
}

main();