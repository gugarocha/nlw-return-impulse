import nodemailer from 'nodemailer';

import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "8daebac2260c96",
    pass: "bb1a04b0c31087"
  }
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
      await transport.sendMail({
        from: 'Equipe Feedget <oi@feedget.com>',
        to: 'Gustavo Rocha <guga.rocha.silveira@gmail.com>',
        subject,
        html: body
      });
  };
};