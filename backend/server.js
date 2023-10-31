import express from 'express';
import cors from 'cors';
import {getUsers, getUserById, getBooking } from './queries.js';

const app = express();
const port = 8002;

app.use(express.json());
app.use(cors());

app.get("/booking", getBooking);

app.get("/users", getUsers);
app.get("/users/:id", getUserById);
// app.post("/users", createUser);
// app.put("/users/:id", updateUser);
// app.delete("/users/:id", deleteUser);

(async () => {
    app.listen(port, () => {
        console.log(`CORS-enabled web server listening on port 8002`);
    });
})();