import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface BookingData {
  fullName: string;
  whatsapp: string;
  email: string;
  spellType: string;
  targetName: string;
  situation: string;
  location?: {
    latitude: number;
    longitude: number;
    accuracy: number;
  };
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const bookingData: BookingData = await req.json();
    
    // Get client IP address
    const clientIP = req.headers.get('x-forwarded-for') || 
                    req.headers.get('x-real-ip') || 
                    'IP not available';

    // Get location info from IP if geolocation wasn't provided
    let locationInfo = '';
    if (bookingData.location) {
      locationInfo = `📍 Location: ${bookingData.location.latitude}, ${bookingData.location.longitude} (±${bookingData.location.accuracy}m)`;
    }

    // Try to get location from IP address
    let ipLocationInfo = '';
    try {
      const ipResponse = await fetch(`http://ip-api.com/json/${clientIP}`);
      const ipData = await ipResponse.json();
      if (ipData.status === 'success') {
        ipLocationInfo = `🌍 IP Location: ${ipData.city}, ${ipData.regionName}, ${ipData.country}`;
      }
    } catch (error) {
      console.log('Could not fetch IP location:', error);
    }

    // Format the message for Telegram
    const message = `
🔮 NEW SPELL BOOKING REQUEST 🔮

👤 Client Information:
• Name: ${bookingData.fullName}
• WhatsApp: ${bookingData.whatsapp}
• Email: ${bookingData.email}

💫 Spell Details:
• Type: ${bookingData.spellType}
• Target: ${bookingData.targetName || 'Not specified'}

📝 Situation:
${bookingData.situation}

🌐 Technical Info:
• IP Address: ${clientIP}
${ipLocationInfo}
${locationInfo}

⏰ Submitted: ${new Date().toLocaleString()}

---
Please respond to the client within 12 hours via WhatsApp.
    `.trim();

    // Send to Telegram
    const telegramToken = '6858405369:AAHIBm11hz5SSLgH_BZb9mSSFBIOkeiExb8';
    const chatId = '5485468089';
    
    const telegramUrl = `https://api.telegram.org/bot${telegramToken}/sendMessage`;
    
    const telegramResponse = await fetch(telegramUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
        parse_mode: 'HTML'
      }),
    });

    if (!telegramResponse.ok) {
      const error = await telegramResponse.text();
      console.error('Telegram API error:', error);
      throw new Error('Failed to send to Telegram');
    }

    console.log('Booking notification sent to Telegram successfully');

    return new Response(
      JSON.stringify({ success: true, message: 'Booking sent to Telegram' }),
      {
        status: 200,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );

  } catch (error: any) {
    console.error('Error in send-telegram-booking function:', error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
};

serve(handler);