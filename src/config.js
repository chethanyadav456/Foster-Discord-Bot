import { Colors } from "discord.js";

export const config = {
    prefix: process.env.BOT_PREFIX || "!",
    token: process.env.BOT_TOKEN || "Your Token",
    owner: process.env.BOT_OWNER || "Your ID",
    admins: process.env.ADMINS.split(', ') || ["ADMIN_ID"],
    support: process.env.SUPPORTERS.split(', ') || ["SUPPORTER_ID"],
    defaultCooldown: process.env.DEFAULT_COOLDOWN || 3,
    colors: {
        success: Colors.Green,
        error: Colors.Red,
        warning: Colors.Orange
    },
    emojis: {
        success: "<:success:732298639736721469>",
        error: "<:error:732298639736721469>",
        warning: "<:warning:732298639736721469>"
    }
};