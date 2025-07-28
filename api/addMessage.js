import { messages } from '../../data/messages';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { msg } = req.body;
    if (msg) {
      messages.push({ msg, time: new Date().toISOString() });
      res.status(200).json({ success: true });
    } else {
      res.status(400).json({ success: false, error: 'Message missing' });
    }
  } else if (req.method === 'GET') {
    res.status(200).json(messages);
  } else {
    res.status(405).json({ success: false, error: 'Method not allowed' });
  }
}
