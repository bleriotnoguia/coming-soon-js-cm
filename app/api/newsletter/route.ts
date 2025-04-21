import { NextResponse } from 'next/server';
import Mailjet from 'node-mailjet';

const mailjet = new Mailjet({
  apiKey: process.env.MAILJET_API_KEY,
  apiSecret: process.env.MAILJET_API_SECRET
});

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    const response = await mailjet
      .post('contact')
      .request({
        Email: email,
        IsExcludedFromCampaigns: false
      });

    if (response.response.status === 201) {
      // Add contact to your newsletter list
      await mailjet
        .post('listrecipient')
        .request({
          ListID: process.env.MAILJET_LIST_ID,
          ContactAlt: email
        });

      return NextResponse.json({ 
        message: 'Inscription réussie' 
      });
    }

    return NextResponse.json({ 
      error: 'Une erreur est survenue' 
    }, { 
      status: 400 
    });

  } catch (error: any) {
    if (error.statusCode === 409) {
      return NextResponse.json({ 
        error: 'Cette adresse email est déjà inscrite' 
      }, { 
        status: 409 
      });
    }

    return NextResponse.json({ 
      error: 'Une erreur est survenue' 
    }, { 
      status: 500 
    });
  }
}