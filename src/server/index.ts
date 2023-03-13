import Taro from "@tarojs/taro"
import { host } from "./config"

export const helth = async () => {
    const res = await Taro.request({url: `${host}/test`})
    return res
}

interface nameParams {
    sex: string
    attributes: (string | undefined)[]
    firstName?: string
}
export const getName = async (params: nameParams) => {
    const res = await Taro.request({url: `${host}/api/chat-gpt/ai-name/people-name`, data: params, method: 'POST'})
    return res
}

