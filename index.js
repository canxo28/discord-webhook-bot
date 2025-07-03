const express = require('express');
const app = express();
app.use(express.json());

const webhookUrl = 'https://discord.com/api/webhooks/1390438194436247662/wXdxijnL-nS4wDn6OA954WhWOdhcBjqGyeqUVmC5675YVQKj13DOGOjnq5_8cZOaiVk0';
const axios = require('axios');

app.post('/guncelleme', async (req, res) => {
    const mesaj = req.body.message;

    await axios.post(webhookUrl, {
        content: `🆕 Yeni Güncelleme:\n\`\`\`${mesaj}\`\`\``
    });

    res.sendStatus(200);
});

app.get('/', (req, res) => {
    res.send("Bot aktif!");
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
    console.log("Bot çalışıyor, port " + PORT);
});