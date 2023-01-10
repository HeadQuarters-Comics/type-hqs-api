import http from 'http';
import express, { Express } from 'express';
import morgan from 'morgan';

const app: Express = express();

app.use(morgan('common'));

app.use(express.urlencoded({ extended: false }));

app.use(express.json());

app.use((req, res, next) => {
    const error = new Error('not found');
    return res.status(404).json({
        message: error.message
    });
});

const httpServer = http.createServer(app);

const PORT: any = process.env.PORT ?? 4000;

httpServer.listen(PORT, () => console.log(`The server is running on port ${PORT}`));