import express from 'express';
import morgan from 'morgan';
import { errorHandler } from './middlewares/errorHandler';
import userRoutes from './routes/user.route';

const app = express();

app.use(express.json());
app.use(morgan('dev'));

app.use('/api/user', userRoutes);

app.use(errorHandler);

export default app;
