import { SlashCommand } from '../types';
import { AddCommand } from './add';
import { GetRandomAnimeCommand } from './getRandomAnime';
import { GoogleCommand } from './google';
import { HelloCommand } from './hello';
import { PollCommand } from './poll';
import { UserInfoCommand } from './userInfo';

export const SlashCommands: SlashCommand[] = [
  HelloCommand,
  AddCommand,
  GoogleCommand,
  UserInfoCommand,
  PollCommand,
  GetRandomAnimeCommand,
];
