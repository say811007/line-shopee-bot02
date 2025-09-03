// /api/webhook.js
export default function handler(req, res) {
  if (req.method === 'POST') {
    console.log(req.body); // 這裡可以看到 LINE 傳來的資料
    res.status(200).send('OK'); // 回應 200，LINE 就會通過
  } else {
    res.status(405).send('Method Not Allowed'); // 其他請求不允許
  }
}
