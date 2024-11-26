import express from "express";
import "dotenv/config";
import cors from "cors";
import methodsRoutes from "./routes/methods-routes.js";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.static("./public"));

app.use("/api/methods", methodsRoutes);

app.listen(PORT, () => {
  console.log(`UXscape ${PORT}`);
});
