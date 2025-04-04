import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const SvgComponent = (props: SvgProps) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        {...props}
    >
        <Path
            fill="#fff"
            d="m4.43 12.822 13 9A1 1 0 0 0 19 21V3a1 1 0 0 0-1.57-.823l-13 9a1.003 1.003 0 0 0 0 1.645Z"
        />
    </Svg>
)
export default SvgComponent
