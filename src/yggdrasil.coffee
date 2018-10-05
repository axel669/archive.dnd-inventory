import store from "./store/store.coffee"
import actions from "./store/actions.coffee"

import Inventory from "./screen/Inventory.coffee"

export default
    store: store
    items:
        add: (item) ->
            actions.batch.dispatch(
                actions.items.add(item),
                actions.screen.change(Inventory)
            )
            # actions.items.add.dispatch itemSource.find((item) -> item.id == id)
    screen:
        change: (screen) ->
            actions.screen.change.dispatch(screen)
