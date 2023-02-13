import React, { useContext } from "react"
import { Container } from "./styles"
import Switch from "react-switch"
import { ThemeContext } from "styled-components"

type HeaderProps = {
  onChangeTheme: () => void
}

const Header = ({ onChangeTheme }: HeaderProps) => {
  const { name, colors } = useContext(ThemeContext)
  return (
    <Container>
      <h3>EmpresaHeader</h3>
      <Switch
        onChange={onChangeTheme}
        checked={name === "light"}
        height={20}
        width={40}
        checkedIcon={false}
        uncheckedIcon={false}
        handleDiameter={20}
        offColor={colors.secondary}
        onColor={colors.secondary}
      />
    </Container>
  )
}

export default Header
