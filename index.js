const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 4000;
const BASE_URL = process.env.HOSTED_URL;

app.use(cors());

const path = require("path");

const initialMenuItems = [
    {
        id: 1,
        name: "Gourmet Burger",
        price: 150,
        image: `${BASE_URL}/images/burger.jpg`,
    },
    {
        id: 2,
        name: "Margherita Pizza",
        price: 560,
        image: `${BASE_URL}/images/pizza.jpg`,
    },
    {
        id: 3,
        name: "Caesar Salad",
        price: 180,
        image: `${BASE_URL}/images/salad.jpg`,
    },
    {
        id: 4,
        name: "Truffle Fries",
        price: 140,
        image: `${BASE_URL}/images/fries.jpg`,
    },
    {
        id: 5,
        name: "Iced Latte",
        price: 220,
        image: `${BASE_URL}/images/coffee.jpg`,
    },
    {
        id: 6,
        name: "Macroni Pasta",
        price: 310,
        image: `${BASE_URL}/images/pasta.jpg`,
    },
];

app.use("/images", express.static(path.join(__dirname, "assets/images")));

app.get("/api/menu", (req, res) => {
    res.json(initialMenuItems);
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
