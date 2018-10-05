import {PureComponent} from "react"
import {createStore, combineReducers} from "redux"
import update from 'immutable-update-values'
import {batchReducer} from "redux-batching"

import Inventory from "../screen/Inventory.js"

import itemSource from "../items.js";

const items = batchReducer(
    (state, action) => {
        state = state ?? [];
        switch (action.type) {
            case "items.add":
                return update(
                    state,
                    {
                        $push: {
                            guid: Date.now(),
                            count: 0,
                            item: action.item
                        }
                    }
                );
            default:
                return state;
        }
    }
);

const itemList = batchReducer(
    (state = null, action) => {
        return (state === null) ? itemSource : state;
    }
);

const screen = batchReducer(
    (state, action) => {
        state = state ?? Inventory;

        switch (action.type) {
            case "screen.change":
                return action.screen;
            default:
                return state;
        }
    }
);

export default createStore(
    combineReducers({
        items,
        itemList,
        screen
    })
);
