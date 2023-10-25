import { getMongoClient } from "@/helpers/utils";

export default async function handler(req, res) {
  const eventId = req.query.eventId;

  const client = await getMongoClient('events');
  const db = client.db();

  if (req.method === 'POST') {
    const { email, name, text } = req.body;

    if (!email.includes('@') || !name || name.trim() === '' || !text || text.trim() === '') {
      res.status(422).json({ message: 'Invalid email address' })

      return null;
    }

    const newComment = {
      email,
      name,
      text,
      eventId,
    }

    const result = await db.collection('comments').insertOne(newComment);

    newComment.id = result.insertedId;

    res.status(200).json({ message: 'New comment is added', comment: newComment })
  }

  if (req.method === 'GET') {
    const documents = await db.collection('comments').find().sort({_id: -1}).toArray();

    res.status(200).json({ comments: documents })
  }

  client.close();
}