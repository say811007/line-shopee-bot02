export default function handler(req, res) {
  if (req.method === 'POST') {
    console.log('LINE Webhook Event:', req.body);
    res.status(200).send('OK'); // ✅ 回 200
  } else {
    res.status(405).send('Method Not Allowed'); // ❌ 其他方法回 405
  }
}
