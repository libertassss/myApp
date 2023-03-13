import { View } from "@tarojs/components"
import { FC, useState } from "react"
import { TAG } from "../../interface"
import './index.less'

interface ElementProps {
    tag: TAG,
    active: (value: TAG) => void
    style?: Record<string, string>
}
const Elements: FC<ElementProps> = (props: ElementProps) => {
    const { tag, active, ...rest } = props
    const [isActive, setIsActive] = useState<boolean>(false)
    const click = () => {
        setIsActive(!isActive)
        tag.active = !isActive
        active(tag)
    }
    return <View {...rest} onTap={click} className={`element-item ${isActive && 'active-item'}`}>
        {tag.desc}
    </View>
}

export default Elements