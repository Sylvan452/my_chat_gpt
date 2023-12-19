import openai from "./chatgpt";

const query = async (prompt: string, chatId: string, model: string) => {
  try {
    const res = await openai.completions.create({
      model,
      prompt,
      temperature: 0.9,
      top_p: 1,
      max_tokens: 1000,
      frequency_penalty: 0,
      presence_penalty: 0,
    });

    return res.choices[0].text;
  } catch (err) {
    console.error("Error during query:", err);
    return `ChatGPT was unable to find an answer for that! (Error: ${err})`;
  }
};

export default query;
