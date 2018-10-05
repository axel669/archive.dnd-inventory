import React, {PureComponent} from "react"
import doric from "doric-components"

import sheet from "../style.coffee"
import yggdrasil from "../yggdrasil.coffee"

sheet.addStyles
    "div.test doric-col, div.test doric-button":
        height: 30
    "div.test > doric-grid > div:nth-child(even) > *":
        backgroundColor: 'lightgray'

ItemList = doric.dialogify class ItemList extends PureComponent
    @propList = ['itemList']
    constructor: (props) ->
        super(props)

    render: () ->
        <div className="test">
            <doric.grid>
                {@props.itemList.map(
                    (item) ->
                        onTap = () -> yggdrasil.items.add(item)
                        <div key={item.id}>
                            <doric.grid.col size={8}>
                                {item.name}
                            </doric.grid.col>
                            <doric.grid.col size={2}>
                                {item.price}
                            </doric.grid.col>
                            <doric.grid.col size={2}>
                                <doric.iconButton block flush icon="ion-plus" onTap={onTap} />
                            </doric.grid.col>
                        </div>
                )}
            </doric.grid>
        </div>

export default ItemList
