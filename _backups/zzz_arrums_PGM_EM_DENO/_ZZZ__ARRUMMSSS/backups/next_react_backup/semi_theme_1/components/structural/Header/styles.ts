import styled from "styled-components"

import { HeaderStructure } from "@src/styles/_customs/definers/header_structure"

export const Container = styled.div`
  width: ${HeaderStructure.Width};
  height: ${HeaderStructure.Height};
  background: ${(props) => props.theme.colors.primary};

  padding: ${HeaderStructure.PaddingZero} ${HeaderStructure.PaddingDefault};

  display: flex;
  align-items: center;
  justify-content: space-between;

  h3 {
    margin: 0;
    padding: 0;
    color: ${(props) => props.theme.colors.textColor};
    background: ${HeaderStructure.H3Background};
  }
`
