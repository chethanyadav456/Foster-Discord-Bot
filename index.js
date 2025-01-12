import Foster from "./src/Structures/Client";
import { config } from "dotenv";
config();

const client = new Foster();
client.start();

