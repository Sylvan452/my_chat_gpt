//next api route
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
    const models = await openai.listModels().then((res: Data) => res.data.data);
    console.log(models)

    const modelOptions = models.map((model: { id: any; }) => ({
        value: model.id,
        label: model.id,
    }));
    res.status(200).json({
        modelOptions,
        data: undefined
    });
}