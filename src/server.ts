import app from "./app";
import dotenv from "dotenv";

dotenv.config();

const port = process.env.PORT

app.get('/', (req, res) => {
    res.send("Esto es una prueba");
});

app.listen(port, () => console.log(`Servidor ejecutandose en http://localhost:${port}`));

