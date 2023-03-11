import { View } from "@tarojs/components";
import { FC, ReactNode } from "react";
import './index.less'

interface layoutProps {
    children?: ReactNode
}
const Layout: FC<layoutProps> = (props: layoutProps) => {
    const { children } = props
    return <View className='layout'>{children}</View>
}

export default Layout