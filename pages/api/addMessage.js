
పిlet messages = [];

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({ error: 'Message is required' });
    }

    messages.push({ msg: message, time: new Date().toISOString() });
    return res.status(200).json({ success: true, message: 'Message added' });
  }

  if (req.method === 'GET') {
    return res.status(200).json(messages);
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
