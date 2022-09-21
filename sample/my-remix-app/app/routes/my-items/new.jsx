import { redirect, json } from "@remix-run/node";
import { Form, useLoaderData } from "@remix-run/react";

export const action = async ({ request }) => {
  console.log("New-item action function", request.url);
  // return redirect("/my-items");
  return null
};

export const loader = async ({request}) => {
  const randomNumber = Math.floor(Math.random() * 100);
  const message = `Hello from the server. Here is a random Number: ${randomNumber}`;
  return json({
    message
  })
}

export default function NewItem() {
  const data = useLoaderData()
  return (
    <div>
      <h1>New Item</h1>
      <Form method="post">
        <input type="text" name="name" placeholder="Your name" />
        <input type="submit" value="Submit" />
      </Form>
      <a href="/">Home</a>
      <h1>{data?.message}</h1>
    </div>
  );
}
