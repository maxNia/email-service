import { transporter } from '../config/nodemailer';
import { getContacts } from '../list/list.service';
import { mailOptionFrom } from './constants';
import { IContactBody, IRequestBody } from './email.interfaces';

export async function sendToContactsByListId(body: IRequestBody) {
  const contacts = await getContacts(body.id);
  
  if (!contacts) {
    throw new Error('NOT_FOUND');
  }
  const emailsToSend = contacts.data.map((el: IContactBody) => el.email);

  const mailOption = {
    from: mailOptionFrom,
    to: emailsToSend,
    subject: body.subject,
    text: body.text,
  };

  await transporter.sendMail(mailOption);
}
