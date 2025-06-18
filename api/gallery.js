import { readdir } from 'fs/promises';
import { join } from 'path';

export default async function handler(req, res) {
  try {
    const dir = join(process.cwd(), 'images/gallery');
    const files = await readdir(dir);

    // Vrací pouze názvy souborů (bez cesty)
    const urls = files.map((file) => `/images/gallery/${file}`);

    res.status(200).json({ files: urls });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
