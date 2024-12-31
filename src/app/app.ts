import express, { Request, Response } from 'express';
import userRouter from '../user/user.route';
const app = express();

// middleware:
app.use(express.json());

// routes:
app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.use('/users', userRouter);

export default app;