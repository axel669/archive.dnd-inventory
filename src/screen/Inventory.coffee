import React, {PureComponent} from "react"
import doric from "doric-components"

import ItemList from "./ItemList.coffee"

import yggdrasil from "../yggdrasil.coffee"
import sheet from "../style.coffee"

sheet.addStyles(
    "table":
        tableLayout: "fixed"
        width: "100%"
    "tbody":
        height: 200
        "overflow-y": "scroll"
    "td":
        border: '1px solid black'
        width: '100%'
    ".test th":
        height: 0
        border: "0px solid transparent"
)

class Spreadsheet extends PureComponent
    defaultRow: (item) =>
        <tr>
            {@props.headers.map(
                (header) ->
                    display = switch
                        when header.display != undefined
                            header.display
                        when header.accessor != undefined
                            (item) -> item[header.accessor]
                        else
                            (item) -> item[header]

                    <td>{display(item)}</td>
            )}
        </tr>
    render: () ->
        row = @props.row ? @defaultRow
        <table className="test">
            <thead>
                <tr>
                    {@props.headers.map(
                        (header, i) ->
                            <th key={i} style={header.style}>
                                {header.title ? header}
                            </th>
                    )}
                </tr>
            </thead>
            <tbody>
                {@props.data.map(row)}
            </tbody>
        </table>

class Inventory extends PureComponent
    @propList = ["items"]

    addItem: () =>
        yggdrasil.screen.change(ItemList);

    render: () ->
        headers = [
            {
                title: ""
                display: ({item}) -> item.name
                style:
                    width: "60%"
                    # minWidth: '60%'
                    # maxWidth: "60%"
            }
            {
                title: ""
                display: ({count}) -> count
            }
            {
                title: ""
                display: ({item}) -> item.price
            }
            {
                title: ""
                display: (item) -> <doric.iconButton block flush icon="ion-edit" onTap={() -> console.log(item)} />
            }
        ]
        <div>
            <doric.button.pure block text="Add" onTap={@addItem} />
            {false && <Spreadsheet data={@props.items} headers={headers} />}
            <div className="test">
            <doric.grid>
                {@props.items.map(
                    ({item, guid, count}) ->
                        <div key={guid}>
                            <doric.grid.col size={12}>
                                {item.name}
                            </doric.grid.col>
                            <doric.grid.col size={2}>
                                {count}
                            </doric.grid.col>
                            <doric.grid.col size={8}>&nbsp;</doric.grid.col>
                            <doric.grid.col size={2}>
                                <doric.iconButton block flush icon="ion-trash" />
                            </doric.grid.col>
                        </div>
                )}
            </doric.grid>
            </div>
        </div>

export default Inventory
