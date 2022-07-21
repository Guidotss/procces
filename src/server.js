import express from "express";
import morgan from "morgan";
import yargs from "yargs";
import { hideBin } from "yargs/helpers"; 
import rotuesInfo from "./routes/info.routes.js";
import routesRandom from "./routes/random.routes.js";

const app = express();

app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"))

app.use("/info",rotuesInfo); 
app.use("/api/random",routesRandom); 

const yargsParser = yargs(hideBin(process.argv));
yargsParser.default("PORT",8080 || 3000); 
const PORT = yargsParser.argv.PORT;



const server = app.listen(PORT, () => {
    console.log(`Server is running on port ${server.address().port}`);
}); 


 


