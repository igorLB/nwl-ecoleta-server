import express from "express";
import cors from "cors";
import routes from "./routes";
import path from "path";
import { errors } from "celebrate"; // é uma lib para validar rotas, tem uma boa integração com o express

require("dotenv").config();

const app = express();

// quando o cors está vazio assim significa que ele deixa qualquer origin requisitar nossa api
app.use(cors());

//serve para o express enteder que o corpo das nossas requests serão em JSON
app.use(express.json());

app.use(routes);

// aqui estamos criando uma rota para pegar arquivos estáticos (sejam fotos, pdfs, zips)
app.use("/uploads", express.static(path.resolve(__dirname, "..", "uploads")));

// errors() vem do celebrate
app.use(errors());

app.listen(process.env.PORT || 3333);
