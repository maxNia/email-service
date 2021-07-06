import nodemailer from 'nodemailer';
import { serviceType } from './constants';

export const transporter = nodemailer.createTransport({
  service: serviceType,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});
