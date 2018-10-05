import ssjs from "ssjs"

sheet = ssjs.create()

sheet.addStyles
    "html, body":
        padding: 0
        margin: 0
        width: "100%"
        height: "100%"
    "*":
        boxSizing: "border-box"

export default sheet
