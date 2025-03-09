import express from "express";
import cors from "cors";
import generateReview from "./review.js";

const app = express();
const PORT = 5000;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send("Hello world")
})


app.post('/api/v1/reviews', async (req, res) => {
    const code = req.body.code;

    try {
        let reviewResponse = await generateReview(code)
        console.log(reviewResponse)
        return res.send({
            code: 1,
            data: [
                { review: reviewResponse },
            ],
            message: 'Code Reviewed sucessfully'
        });
    } catch (error) {
        res.status(500).send({
            code: 0,
            data: null,
            message: error
        })
    }


})

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
})