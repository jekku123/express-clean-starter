import * as dotenv from 'dotenv';
import express from 'express';
import morgan from 'morgan';
import { errorHandler } from './middlewares/errorHandler';
import userRoutes from './routes/user.route';

dotenv.config();

const PORT = process.env.PORT || 1337;

const app = express();

app.use(express.json());
app.use(morgan('dev'));

app.use('/api/user', userRoutes);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
