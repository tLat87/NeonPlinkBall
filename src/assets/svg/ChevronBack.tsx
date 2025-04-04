import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const SvgComponent = (props: SvgProps) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={18}
        height={24}
        fill="none"
        {...props}
    >
        <Path
            fill="#fff"
            d="M2 11.939c0 .382.146.707.45 1l8.759 8.568c.236.247.55.37.91.37.73 0 1.302-.56 1.302-1.302 0-.36-.146-.685-.393-.932L5.133 11.94l7.895-7.704c.247-.258.393-.584.393-.944A1.28 1.28 0 0 0 12.12 2c-.36 0-.674.124-.91.37l-8.76 8.57a1.376 1.376 0 0 0-.449.999Z"
        />
    </Svg>
)
export default SvgComponent
