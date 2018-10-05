import React, {Component, PureComponent} from "react"
import doric from "doric-components"
import autobind from "autobind-decorator"

import sheet from "./style.coffee"

import Main from "./screen/Main.coffee"

sheet.attach()
doric.init(
    <Main />
    document.querySelector "app-root"
)
