import { Client } from 'discord.js';
import { SlashCommands } from '../slash-commands';

export const onReady = (client: Client) => {
  client.on('ready', () => {
    console.log(`${client.user?.username} is online`);

    const commands = SlashCommands.map(c => c.command.toJSON());
    client.application?.commands.set(commands)
  });
};
