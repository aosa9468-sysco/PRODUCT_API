import express from "express";
import productRoutes from "./src/api/product/index.js";

const PORT = process.env.NODE_PORT || 5000;
const app = express();
app.use(express.json());

app.use("/products", productRoutes);

app
  .listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
  })
  .on("error", (error) => {
    console.log(error.message);
  });
