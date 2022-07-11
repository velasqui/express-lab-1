import express from 'express';
import cors from 'cors';
import { cartRouter } from './routes/cartRouter';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/cart-items', cartRouter);

const port = 3000;
app.listen(port, () => console.log(`Listening on: http://localhost:${port}`));