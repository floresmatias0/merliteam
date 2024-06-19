import { NextResponse } from "next/server";

const nodemailer = require('nodemailer');

export async function POST(req: Request) {
  try {
    const usermail = process.env.GMAIL_EMAIL_ADDRESS
    const userpass = process.env.GMAIL_APP_PASSWORD

    if (!usermail || !userpass) {
      throw new Error('Faltan el mail y pass en env')
    }

    const res: FormData = await req.formData()
    let resData: any = {}

    res.forEach((element: any, key) => {
      return resData = { ...resData, [key]: element }
    });

    if (!resData.email || !resData.subject || !resData.message) {
      throw new Error('Faltan los datos de contacto')
    }

    const message = {
      from: process.env.GMAIL_EMAIL_ADDRESS,
      to: 'pablosonez11@gmail.com',
      subject: resData.subject,
      html: `
        <body
          style="
            background: radial-gradient(104.59% 91.52% at 50% -19.25%, #45025D 0%, #070009 100%);
            color: #B19BB9;
            text-align: center;
            padding: 20px 40px;
          "
        >
          <h2>Hola este es un mensaje automatico</h2>
          <h3>Hay una persona que quiere ponerse en contacto contigo, su mail es el siguiente: <b>${resData.email}</b></h3>
          <h4>y te ha dejado un mensaje: </h4>
          <p>${resData.message}</p>
        </body>
      `,
    };

    console.log({user: process.env.GMAIL_EMAIL_ADDRESS})

    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_EMAIL_ADDRESS,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
      //only localhost
      // tls: {
      //   rejectUnauthorized: false
      // }
    })

    let response = {
      message: "mensaje enviado"
    }

    try {
      let resTransporter = await transporter.sendMail(message)
      response.message = resTransporter
    }catch(err: any) {
      throw new Error(err?.message)
    }

    return NextResponse.json({ message: response.message }, { status: 200 })
  } catch (e: any) {
    console.error("Error in catch post send mail", e?.message);
    return NextResponse.json({ message: e?.message }, { status: 400 })
  }
}