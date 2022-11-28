
import express, { Express } from 'express';
import routesmattias from './routes/routes-mattias';

const app: Express = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/menus', routesmattias);


// if url is / go to index.js
app.get('/', (req, res) => {
    res.send('Hello World!');
});


app.listen(process.env.PORT || 3000, () => {
    console.log('Server is running on port 3000');
});
