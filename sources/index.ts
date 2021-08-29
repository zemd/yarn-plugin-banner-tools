import { CommandContext, Plugin } from '@yarnpkg/core';
import { Command } from 'clipanion';
import figlet from 'figlet';
import ANSIShadowFont from 'figlet/importable-fonts/ANSI Shadow';
import gradient from 'gradient-string';

figlet.parseFont('ANSI Shadow', ANSIShadowFont);

class ShowBannerCommand extends Command<CommandContext> {
  @Command.String({ required: true })
  text!: string;

  @Command.Path('banner')
  async execute() {
    const text = figlet.textSync(this.text, {
      font: 'ANSI Shadow',
      width: 80,
    });

    this.context.stdout.write('\n\n');
    this.context.stdout.write(gradient.instagram(text));
    this.context.stdout.write('\n\n');
  }
}

ShowBannerCommand.usage = Command.Usage({
  description: 'Showing logo',
  details: 'This command will print big logo',
  examples: [[
    'Show logo to the user',
    'yarn banner <text>'
  ]],
});

const plugin: Plugin = {
  commands: [
    ShowBannerCommand,
  ],
};

export default plugin;
