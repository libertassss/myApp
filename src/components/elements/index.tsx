import { View } from "@tarojs/components"
import { FC, useState } from "react"
import './index.less'

interface ElementProps {
    tag: {
        desc: string,
        id: number
    },
    active: (value: number) => void
    style?: Record<string, string>
}
const Elements: FC<ElementProps> = (props: ElementProps) => {
    const { tag, active, ...rest } = props
    const [isActive, setIsActive] = useState<boolean>(false)
    const click = () => {
        setIsActive(!isActive)
        active(tag.id)
    }
    return <View {...rest} onTap={click} className={`element-item ${isActive && 'active-item'}`}>
        {tag.desc}
    </View>
}

export default Elements