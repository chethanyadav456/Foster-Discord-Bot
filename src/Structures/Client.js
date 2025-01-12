import { Client, Collection, GatewayIntentBits, Partials, ThreadAutoArchiveDuration } from 'discord.js';

class Foster extends Client {
    constructor() {
        super({
            shards: 'auto',
            intents: [
                GatewayIntentBits.Guilds,
                GatewayIntentBits.GuildMessages,
                GatewayIntentBits.GuildMessageReactions,
                GatewayIntentBits.GuildMembers,
                GatewayIntentBits.GuildVoiceStates,
                GatewayIntentBits.DirectMessages,
                GatewayIntentBits.DirectMessageReactions,
            ],
            partials: [
                Partials.GuildMember,
                Partials.Message,
                Partials.User,
                Partials.Channel,
                Partials.Reaction,
                Partials.GuildScheduledEvent,
                Partials.ThreadMember
            ],

        });
        this.commands = new Collection();
        this.aliases = new Collection();
        this.cooldowns = new Collection();
        this.config = require('../config.js');
        this.logger = require('@utils/Logger.js');
    }
}

export default Foster;