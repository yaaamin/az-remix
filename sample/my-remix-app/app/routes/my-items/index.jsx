import { Link } from "@remix-run/react";
import { PrismaClient } from "@prisma/client";
import { useLoaderData } from "@remix-run/react";
import {json} from '@remix-run/node'
export const loader = async () => {
  const prisma = new PrismaClient();
  const homes = await prisma.homes.findMany()

  return json({homes})
}

export default function Index() {
  const data = useLoaderData()
  return (
    <div>
      <h1>My Items</h1>
      <Link to="/my-items/new">New Item</Link>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
