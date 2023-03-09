import Taro from "@tarojs/taro"
import { host } from "./config"

export const helth = async () => {
    const res = await Taro.request({url: `${host}/test`})
    return res
}

