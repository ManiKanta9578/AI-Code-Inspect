import express from "express";
import cors from "cors";

const app = express();
const PORT = 5000;

app.use(express.json());
app.use(cors());

app.post('/api/v1/reviews', (req, res) => {

    const code = req.body.code;

    console.log(code);

    return res.send({
        review: "### Your code is awesome",
    });
})

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
})