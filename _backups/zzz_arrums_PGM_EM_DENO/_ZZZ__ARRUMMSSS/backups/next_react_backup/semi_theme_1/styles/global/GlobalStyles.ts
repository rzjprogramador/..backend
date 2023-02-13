import { createGlobalStyle } from "styled-components"
import { GlobalStyleStructure } from "@src/styles/_customs/definers/global_style_structure"

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        background: red;
    }

    html, body, #root {
        height: ${GlobalStyleStructure.Height};
    }

    *, button, input {
        border: 0;
        outline: 0;

        font-family: ${GlobalStyleStructure.Font}, sans-serif;
    }
`
