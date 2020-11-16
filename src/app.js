import express, { json } from 'express';
import morgan from 'morgan';
import AuthRoutes from './routes/auth';
import restLogging from './middleware/restLogging';
import DataRoutes from './routes/data';

//initializition
const app = express();

//Middleware
app.use(morgan("combined"));
app.use(json({limit: '50mb'}));

app.use(restLogging);

app.use('/api/v1/auth', AuthRoutes);
app.use('/api/v1/data', DataRoutes);


export default app;