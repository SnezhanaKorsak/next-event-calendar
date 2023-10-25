import { getMongoClient } from "@/helpers/utils";

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const userEmail = req.body.email;

    if (!userEmail || !userEmail.includes('@')) {
      res.status(422).json({ message: 'Invalid email address' })

      return null;
    }

    const client = await getMongoClient('events');
    const db = client.db();
    await db.collection('emails').insertOne({ email: userEmail });

    client.close();

    res.status(200).json({ message: 'Signed up!' })
  }
}