import express from "express";
import productRoutes from "./src/api/product/index.js";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "./swagger.json" assert {type: "json"};

const PORT = process.env.NODE_PORT || 5000;
const app = express();
app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use("/products", productRoutes);

app
  .listen(PORT, () => {
    console.log(`App listening at http://localhost:${PORT}`);
  })
  .on("error", (error) => {
    console.log(error.message);
  });
