import update from "immutable-update-values";
import {gen} from "redux-batching";

import store from "./store.tea";

const {batch, action} = gen(store);

const pass = (...names) =>
    (...args) => {
        return names.reduce(
            (item, name, index) => {
                item[name] = args[index];
                return item;
            },
            {}
        );
    };
const actions = Object.entries({
    "items.add": pass("item"),
    "screen.change": pass("screen")
}).reduce(
    (mod, [key, value]) => {
        mod[`${key}.$set`] = action(key, value);
        return mod;
    },
    {}
);

export default update({batch}, actions, true);
