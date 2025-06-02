export default async function handler(req, res) {
  const url = req.url.replace('/api/proxy.js/', '');

  if (!url.startsWith('http://') && !url.startsWith('https://')) {
    return res.status(400).json({ error: 'URL must start with http:// or https://' });
  }

  try {
    const response = await fetch(url, {
      method: req.method,
      headers: { ...req.headers, host: undefined },
      body: ['GET', 'HEAD'].includes(req.method) ? undefined : req.body
    });

    const body = await response.arrayBuffer();

    response.headers.forEach((value, key) => {
      res.setHeader(key, value);
    });

    res.status(response.status).send(Buffer.from(body));
  } catch (err) {
    res.status(500).json({ error: 'Fetch failed', details: err.message });
  }
}
