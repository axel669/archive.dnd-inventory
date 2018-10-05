import store from "./store/store.js";
import actions from "./store/actions.js";

import Inventory from "./screen/Inventory.js";

export default {
    store,
    items: {
        add: item => actions.batch.dispatch(
            actions.items.add(item),
            actions.screen.change(Inventory)
        )
    },
    screen: {
        change: screen => actions.screen.change.dispatch(screen)
    }
};
