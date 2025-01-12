import Foster from "@structures/Client.js";
import { config } from "dotenv";
config();

const client = new Foster();

client.start(); // Start the Foster

export default client;

process.on("unhandledRejection", (err) => {
    client.logger.error(err + err.message);
});

process.on("uncaughtException", (err) => {
    console.error(err + err.message);
});

process.on("warning", (err) => {
    console.warn(err + err.message);
});

process.on('rateLimit', (rateLimitInfo) => {
    console.log(`Rate limited: ${rateLimitInfo}`);
});

process.on("exit", (code) => {
    console.log(`Process exited with code ${code}`);
});