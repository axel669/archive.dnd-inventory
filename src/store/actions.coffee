import update from "immutable-update-values";
import {gen} from "redux-batching";

import store from "./store.coffee";

{batch, action} = gen(store);

pass = (...names) ->
    (...args) ->
        names.reduce(
            (item, name, index) ->
                item[name] = args[index]
                return item
            {}
        )

actions = Object.entries(
    "items.add": pass("item")
    "screen.change": pass("screen")
).reduce(
    (mod, [key, value]) ->
        mod["#{key}.$set"] = action(key, value)
        return mod
    {}
)

export default update({batch}, actions, true)
