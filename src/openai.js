import {Configuration, OpenAIApi} from "openai";
const configuration = new Configuration({ apiKey:"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"})
const openai = new OpenAIApi(configuration);

export async function sendMsgToOpenAI(message){
    const res = await openai.createCompletion({
        model: 'text-davinci-003',
        prompt: message, 
        temperature: 0.7,
        max_tokens: 256,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0
    });
    return res.data.choices[0].text;
}