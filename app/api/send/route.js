// import { NextResponse } from 'next/server'
// import { Resend } from 'resend'

// const resend = new Resend(process.env.RESEND_API_KEY)

// export async function POST() {
//   try {
//     console.log('RESEND_API_KEY:', process.env.RESEND_API_KEY ? 'Loaded' : 'Missing')

//     const { data, error } = await resend.emails.send({
//       from: 'Hemanth <onboarding@resend.dev>', // ✅ Verified domain
//       to: ['saihemanthnk07@gmail.com'],
//       subject: 'New Message from Your Portfolio Website',
//       html: `
//         <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
//           <h2 style="color: #0070f3;">Hi Hemanth,</h2>
//           <p>You just received a new message through your portfolio website.</p>
//           <p><strong>Message Details:</strong></p>
//           <ul>
//             <li><strong>Name:</strong> John Doe</li>
//             <li><strong>Email:</strong> johndoe@example.com</li>
//             <li><strong>Subject:</strong> Collaboration Opportunity</li>
//           </ul>
//           <p style="margin-top: 10px;">Here’s the message:</p>
//           <blockquote style="border-left: 3px solid #0070f3; margin: 10px 0; padding-left: 10px; color: #555;">
//             Hey Hemanth, I came across your portfolio and I’m really impressed by your projects!
//             I’d love to discuss a potential collaboration. Let’s connect soon.
//           </blockquote>
//           <p>Best regards,<br>John Doe</p>
//           <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;">
//           <p style="font-size: 12px; color: #999;">This message was sent automatically from your portfolio contact form.</p>
//         </div>
//       `,
//     })

//     if (error) {
//       console.error('Resend error:', error)
//       return NextResponse.json({ error }, { status: 500 })
//     }

//     return NextResponse.json(data)
//   } catch (err) {
//     console.error('Unexpected error:', err)
//     return NextResponse.json({ error: err.message }, { status: 500 })
//   }
// }



import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
   
    const body = await req.json();
    const { email, subject, message } = body;

 
    if (!email || !subject || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    
    const { data, error } = await resend.emails.send({
      from: "Hemanth <onboarding@resend.dev>", // Use your verified sender
      to: ["saihemanthnk07@gmail.com"], // Your inbox (where you’ll receive the message)
      subject: `New message: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; color: #333;">
          <h2>New Contact Message</h2>
          <p><strong>From:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong></p>
          <blockquote style="border-left: 3px solid #7c3aed; padding-left: 10px; margin-top: 10px;">
            ${message}
          </blockquote>
          <hr style="margin-top:20px; border:none; border-top:1px solid #eee;">
          <p style="font-size: 12px; color: #888;">This message was sent from your portfolio contact form.</p>
        </div>
      `,
    });

    
    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error }, { status: 500 });
    }

   
    return NextResponse.json({ success: true, data }, { status: 200 });

  } catch (err) {
    console.error("Unexpected error:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

