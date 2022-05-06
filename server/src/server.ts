import express, { Application, Request, Response, NextFunction } from 'express';
import path from 'path';

const app: Application = express();

const PORT = 5000;
const publicDirectory = path.join(__dirname, '../../client/build');
app.use(express.static(publicDirectory));

// app.get('*', (req, res) => {
//   res.sendFile(publicDirectory);
// });

app.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.send('Hello World!');
});

app.listen(PORT, () => {
  console.log(`server running on http://localhost:${PORT}`);
});
