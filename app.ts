import Express from "express";
import roomRouter from "./src/routes/room.routes.ts";
import cors from "cors";
import userRouter from "./src/routes/user.routes.ts";
import reservationRouter from "./src/routes/reservation.routes.ts";

const express = Express;
const app = express();
const port = 3000;

app.use(cors());


app.use(express.json());

app.get("/", (req, res) => {
    res.send("HelloWorld!");
});

app.use("/rooms", roomRouter);
app.use("/users", userRouter);
app.use("/reservations", reservationRouter);


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

