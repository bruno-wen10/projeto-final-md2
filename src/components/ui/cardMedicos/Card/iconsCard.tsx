import { type } from "os"
import styled from "styled-components"

type IconColor = {
  icon: string
  color: string
}

const IconColor = styled.div<{color:string}>`
background-color: ${({color})=>color};
display: flex;
justify-content: center;
align-items: center;
border-radius: 100%;
width: 60px;
height: 60px;
`

function IconsColor({icon, color}:IconColor) {
  return (
    <IconColor color={color}>
      <img src={icon}/>
    </IconColor>
  )
}

export default IconsColor
