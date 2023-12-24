import { MongoClient } from "mongodb";

export default async function handler(req, res) {
  try {
    // Connection URI
    const uri =
      "mongodb+srv://borneelphukan:borneel1999@cluster0.3elu5kb.mongodb.net/?retryWrites=true&w=majority";

    // Connect to MongoDB
    const client = await MongoClient.connect(uri);
    const db = client.db("all-data");

    // Fetch data from the team-data collection
    const publicationsCollection = db.collection("publications");
    const publicationsData = await publicationsCollection.find({}).toArray();

    // Close the connection
    client.close();

    // Send the data as JSON response
    res.status(200).json({ publicationsData });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
