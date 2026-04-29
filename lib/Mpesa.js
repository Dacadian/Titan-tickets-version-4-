const axios = require('axios');

const MPESA_CONFIG = {
  consumer_key: process.env.MPESA_CONSUMER_KEY,
  consumer_secret: process.env.MPESA_CONSUMER_SECRET,
  shortcode: process.env.MPESA_SHORTCODE,
  passkey: process.env.MPESA_PASSKEY,
  callback_url: `${process.env.VERCEL_URL}/api/mpesa/callback`,
  base_url: process.env.MPESA_ENV === 'sandbox' ? 
    'https://sandbox.safaricom.co.ke' : 'https://api.safaricom.co.ke'
};

export async function getMpesaAccessToken() {
  try {
    const auth = Buffer.from(`${MPESA_CONFIG.consumer_key}:${MPESA_CONFIG.consumer_secret}`).toString('base64');
    
    const response = await axios.get(`${MPESA_CONFIG.base_url}/oauth/v1/generate?grant_type=client_credentials`, {
      headers: {
        Authorization: `Basic ${auth}`
      }
    });
    
    return response.data.access_token;
  } catch (error) {
    console.error('MPesa token error:', error.response?.data || error.message);
    throw new Error('Failed to get Mpesa access token');
  }
}

export async function initiateSTKPush(phone, amount, accountReference, transactionDesc) {
  try {
    const token = await getMpesaAccessToken();
    const timestamp = new Date().toISOString().replace(/[^0-9]/g, '').slice(0, -3);
    const password = Buffer.from(`${MPESA_CONFIG.shortcode}${MPESA_CONFIG.passkey}${timestamp}`).toString('base64');

    const data = {
      BusinessShortCode: MPESA_CONFIG.shortcode,
      Password: password,
      Timestamp: timestamp,
      TransactionType: 'CustomerPayBillOnline',
      Amount: amount,
      PartyA: phone,
      PartyB: MPESA_CONFIG.shortcode,
      PhoneNumber: phone,
      CallBackURL: MPESA_CONFIG.callback_url,
      AccountReference: accountReference,
      TransactionDesc: transactionDesc
    };

    const response = await axios.post(
      `${MPESA_CONFIG.base_url}/mpesa/stkpush/v1/processrequest`,
      data,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      }
    );

    return response.data;
  } catch (error) {
    console.error('STK Push error:', error.response?.data || error.message);
    throw new Error('Failed to initiate STK Push');
  }
}
