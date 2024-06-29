import Prompt from "@models/prompt";
import { connectToDB } from "@utils/database";

export const GET = async (request) => {
  console.log("Received request to /api/prompt");

  try {
    await connectToDB();
    console.log("Connected to database");

    const prompts = await Prompt.find({}).populate("creator");
    console.log("Fetched prompts:", prompts);

    return new Response(JSON.stringify(prompts), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Cache-Control":
          "no-store, no-cache, must-revalidate, proxy-revalidate",
        Pragma: "no-cache",
        Expires: "0",
        "Surrogate-Control": "no-store",
      },
    });
  } catch (error) {
    console.error("Error fetching prompts:", error);
    return new Response(
      JSON.stringify({ error: "Failed to fetch all prompts" }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
          "Cache-Control":
            "no-store, no-cache, must-revalidate, proxy-revalidate",
          Pragma: "no-cache",
          Expires: "0",
          "Surrogate-Control": "no-store",
        },
      }
    );
  }
};
