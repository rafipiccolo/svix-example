import { Svix } from "svix";
import { NextApiRequest, NextApiResponse } from "next";

interface DataIn {
  username: string;
  company: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  const data: DataIn = req.body;

  // Do real signup stuff
  // ...

  // Create Svix application (can also do lazily at a later stage. See docs)
  const svix = new Svix(process.env.SVIX_TOKEN!);

  // Create an application with a uid so that we can refer to it later
  // We are using getOrCreate to avoid conflicts in this fake signup flow.
  await svix.application.getOrCreate({ name: data.company, uid: data.username });

  res.json({});
}
