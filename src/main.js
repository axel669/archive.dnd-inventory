import React, {Component, PureComponent} from "react";
import doric from "doric-components";
import autobind from "autobind-decorator";

import sheet from "./style.js";

import Main from "./screen/Main.js";

sheet.attach();
doric.init(
    <Main />,
    document.querySelector("app-root")
);
