const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 4000;

app.use(cors());

const initialMenuItems = [
    {
        id: 1,
        name: "Gourmet Burger",
        price: 150,
        image: "http://localhost:5000/images/burger.jpg",
    },
    {
        id: 2,
        name: "Margherita Pizza",
        price: 560,
        image: "http://localhost:5000/images/pizza.jpg",
    },
    {
        id: 3,
        name: "Caesar Salad",
        price: 180,
        image: "http://localhost:5000/images/salad.jpg",
    },
    {
        id: 4,
        name: "Truffle Fries",
        price: 140,
        image: "http://localhost:5000/images/fries.jpg",
    },
    {
        id: 5,
        name: "Iced Latte",
        price: 220,
        image: "http://localhost:5000/images/coffee.jpg",
    },
    {
        id: 6,
        name: "Macroni Pasta",
        price: 310,
        image: "http://localhost:5000/images/pasta.jpg",
    },
];

app.use("/images", express.static("assets/images"));

app.get("/api/menu", (req, res) => {
    res.json(initialMenuItems);
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
