
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.statusCode = 405; // Method Not Allowed
    res.end();
    return;
  }

  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer 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',
      },
      body: JSON.stringify({
        messages: [{role: 'system', content: 'Vreau sa imi generezi un subtitlu pentru urmatoarea lectie de robotica' + '. Vreau sa respecti cu strictete lungimea de 100 de caractere, iar textul sa fie scris intr-un mod cat mai catchy'},{role: 'user',content:req.body.prompt}],
        model: 'gpt-3.5-turbo'
      }),
    });

    const data = await response.json();
    return res.status(200).json(data, {prompt: req.body.prompt});
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}

