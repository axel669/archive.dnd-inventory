import React, {Component, PureComponent} from "react";
import doric from "doric-components";

import ItemList from "./ItemList.js";

import yggdrasil from "../yggdrasil.js";

const connect = store =>
    Parent => class extends Component {
        static displayName = `Conected<${Parent.displayName ?? Parent.name}`;

        constructor(props) {
            super(props);

            this.state = store.getState();
            store.subscribe(
                () => this.setState(store.getState())
            );
        }

        render() {
            return <Parent {...this.state} />;
        }
    };

@connect(yggdrasil.store)
// @doric.dialogify
class Main extends PureComponent {
    render() {
        const Screen = this.props.screen;
        const props = Screen.propList.reduce(
            (p, name) => {
                p[name] = this.props[name];
                return p;
            },
            {}
        );

        return <Screen {...props} />;
    }
}

export default Main;
