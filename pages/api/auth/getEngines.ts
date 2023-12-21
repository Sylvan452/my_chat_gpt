import type { NextApiRequest, NextApiResponse } from "next";
import openai from "@/lib/chatgpt";

type Option = {
    value: string;
    label: string;
};

type Data = {
    data: any;
    modelOptions: Option[];
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    try {
        // Fetch the list of models from the OpenAI API
        const models = await openai.models.list();

        // Map the models to the desired format for the response
        const modelOptions = models.data.map((model: { id: any }) => ({
            value: model.id,
            label: model.id,
        }));

        // Return a JSON response with the model options and undefined data
        res.status(200).json({
            modelOptions,
            data: undefined
        });
    } catch (error) {
        console.error("Error fetching models:", error);
        res.status(500).json({ modelOptions: [], data: undefined });
    }
}
