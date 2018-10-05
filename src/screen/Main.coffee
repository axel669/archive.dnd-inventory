import React, {Component, PureComponent} from "react"
import doric from "doric-components"

import ItemList from "./ItemList.coffee"

import yggdrasil from "../yggdrasil.coffee"

connect = (store) ->
    (Parent) -> class extends Component
        @displayName = "Connected<#{Parent.name ? Parent.displayName}>"

        constructor: (props) ->
            super(props)
            @state = store.getState();
            store.subscribe(
                () => @setState(store.getState())
            )

        render: () ->
            return <Parent {...@state} />

Main = connect(yggdrasil.store) doric.dialogify class Main extends PureComponent
    render: () ->
        Screen = @props.screen
        props = Screen.propList.reduce(
            (p, name) =>
                p[name] = @props[name]
                return p
            {}
        );
        <Screen {...props} />

export default Main
