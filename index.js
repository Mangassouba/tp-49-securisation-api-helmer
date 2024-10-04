import express from "express";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import cors from "cors"

express
const app = express();
const port = 3000;

app.use(helmet());
app.use(cors({
  origin: 'http://Example', 
  methods: ['GET', 'POST'] 
}));


const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, 
  max: 100 
});
app.use(limiter);


app.get('/api/secure', (req, res) => {
  res.json({ message: "Hello world" });
});

app.listen(port, () => {
  console.log(`Serveur démarré sur http://localhost:${port}`);
});
