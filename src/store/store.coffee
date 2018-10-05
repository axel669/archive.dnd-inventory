import {PureComponent} from "react"
import {createStore, combineReducers} from "redux"
import update from 'immutable-update-values'
import {batchReducer} from "redux-batching"

import Inventory from "../screen/Inventory.coffee"

import itemSource from "../items.js";

items = batchReducer (state, action) ->
    state = state ? []

    switch action.type
        when "items.add"
            update(
                state
                $push:
                    guid: Date.now()
                    count: 0
                    item: action.item
            )
        else
            state

itemList = batchReducer (state = null, action) ->
    if state == null
        return itemSource
    state

screen = batchReducer (state, action) ->
    state = state ? Inventory

    switch action.type
        when "screen.change"
            action.screen
        else
            state

export default createStore(
    combineReducers({
        items
        itemList
        screen
    })
)
