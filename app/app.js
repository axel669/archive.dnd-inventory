(function (React$1, ReactDOM) {
    'use strict';

    var React$1__default = 'default' in React$1 ? React$1['default'] : React$1;
    ReactDOM = ReactDOM && ReactDOM.hasOwnProperty('default') ? ReactDOM['default'] : ReactDOM;

    const createReducer = (desc) => {
        var ref0;

        const reducers = [];
        for (const key of Object.keys((ref0 = desc))) {
            const map = ref0[key];
            const reducer = (() => {
                if (typeof map === "function") {
                    return map;
                } else {
                    return createReducer(map);
                }
            })();
            reducers.push([key, reducer]);
        }
        return async (state, action) => {
            const newState = {};
            for (const [key, reducer] of reducers) {
                newState[key] = await reducer(state[key], action);
            }
            return newState;
        };
    };
    const generateStateInfo = (source, desc) => {
        var ref0, ref1;

        const reducers = {};
        const initialState = {};
        let definedActions = new Set();
        for (const key of Object.keys((ref0 = desc))) {
            const info = ref0[key];
            const path = source !== null ? `${source}.${key}` : key;
            const initial = info.initial;
            if (initial === undefined) {
                const child = generateStateInfo(path, info);
                [reducers[key], initialState[key]] = child;
                definedActions = new Set([...definedActions, ...child[2]]);
            } else {
                const actionHandlers = {};
                for (const action of Object.keys((ref1 = info))) {
                    const func = ref1[action];
                    actionHandlers[action] = func;
                    if (action.startsWith("$") === true) {
                        definedActions.add(`${path}.${action}`);
                    }
                    if (action.indexOf("$") > 0) {
                        definedActions.add(action);
                    }
                }
                initialState[key] =
                    typeof initial === "function" ? initial() : initial;
                reducers[key] = async (state, action) => {
                    let actions = [action];
                    if (action.type === "batch") {
                        actions = action.actions;
                    }
                    let newState = state;
                    for (const action of actions) {
                        let type = action.type;
                        if (type.startsWith(`${path}.`) === true) {
                            type = type.slice(path.length + 1, undefined);
                        }
                        const reducer = actionHandlers[type];
                        if (reducer !== undefined) {
                            newState = await reducer(newState, action);
                        }
                    }
                    return newState;
                };
            }
        }
        return [reducers, initialState, definedActions];
    };
    const createState = (desc, actionProcessors = {}) => {
        const [reducers, initialState, definedActions] = generateStateInfo(
            null,
            desc
        );
        const reducer = createReducer(reducers);
        const dispatch = async (action) => {
            currentState = await reducer(currentState, action);
            for (const listener of subscriptions.values()) {
                listener(currentState);
            }
            return currentState;
        };
        const actions = [...definedActions].reduce(
            (actions, type) => {
                var nullref0;

                const preProcessor =
                    (nullref0 = actionProcessors[type]) != null
                        ? nullref0
                        : (i) => i;
                return {
                    ...actions,
                    [type]: (...args) =>
                        dispatch({
                            type: type,
                            ...preProcessor(...args)
                        })
                };
            },
            {
                $batch: (...pairs) =>
                    dispatch({
                        type: "batch",
                        actions: pairs.map(([type, data]) => ({
                            type: type,
                            ...data
                        }))
                    })
            }
        );
        let currentState = initialState;
        const subscriptions = new Map();
        const subscribe = (listener) => {
            const key = `${Math.random()}:${Date.now()}`;
            subscriptions.set(key, listener);
            return () => subscriptions.delete(key);
        };
        const validActions = [...definedActions].sort();
        return {
            get state() {
                return currentState;
            },
            get current() {
                return currentState;
            },
            actions: actions,
            subscribe: subscribe,
            get validActions() {
                return [...validActions];
            }
        };
    };

    const Publisher = (() => {
        const construct = function construct() {
            const self = {};
            Object.defineProperties(this, {});
            this.publish = (message) => {
                for (const handler of self.listeners.values()) {
                    handler(message);
                }
            };
            this.subscribe = (handler) => {
                const id = `${Date.now()}.${Math.random()}`;
                self.listeners.set(id, handler);
                return () => self.listeners.delete(id);
            };
            self.listeners = new Map();
            return this;
        };
        return (...args) => construct.apply({}, args);
    })();

    const HashListener = (() => {
        const construct = function construct() {
            const self = {};
            Object.defineProperties(this, {
                hash: {
                    get: () => location.hash.toString().replace(/^#/, ``)
                },
                state: {
                    get: () => ({
                        path: this.hash,
                        parts: this.hash.split("/")
                    })
                },
                subscribe: {
                    get: () => self.publisher.subscribe
                },
                publish: {
                    get: () => self.publisher.publish
                }
            });
            self.publisher = Publisher();
            self.currentHash = this.hash;
            self.interval = setInterval(() => {
                const hash = this.hash;
                if (hash !== self.currentHash) {
                    self.currentHash = hash;
                    this.publish({
                        path: hash,
                        parts: hash.split("/")
                    });
                }
            }, 50);
            return this;
        };
        return (...args) => construct.apply({}, args);
    })();

    const createMatcher = (route, exact) => {
        const names = [];
        const regexParts = route
            .replace(/^\//, ``)
            .split("/")
            .map((check) => {
                if (check.startsWith(":") === true) {
                    const name = check.slice(1, undefined);
                    names.push(name);
                    return "(\\w+)";
                }
                if (check.startsWith("*") === true) {
                    const name = check.slice(1, undefined);
                    names.push(name);
                    return "(.*)";
                }
                return check;
            });
        const endMatch = exact === true ? "$" : ``;
        const regex = RegExp(`^/?${regexParts.join("/")}/?${endMatch}`);
        return (route) => {
            const match = route.match(regex);
            if (match === null) {
                return null;
            }
            return names.reduce(
                (params, name, index) => ({
                    ...params,
                    [name]: match[index + 1]
                }),
                {}
            );
        };
    };
    const Router = (() => {
        const construct = function construct(routeListener) {
            const self = {};
            Object.defineProperties(this, {});
            this.connect = (route, exactMatch = false) => {
                const matcher = createMatcher(route, exactMatch);
                return (Component) => {
                    var _class0, nullref0;

                    return (
                        (_class0 = class extends React.Component {
                            constructor(props) {
                                super(props);
                                this.state = self.routeListener.state;
                            }
                            componentDidMount() {
                                self.unsub = self.routeListener.subscribe(
                                    (newState) => this.setState(newState)
                                );
                            }
                            componentWillUnmount() {
                                return self.ubsub();
                            }
                            render() {
                                const params = matcher(this.state.path);
                                if (params === null) {
                                    return null;
                                }
                                return React.createElement(Component, {
                                    ...this.props,
                                    _router: {
                                        ...this.state,
                                        params: params
                                    }
                                });
                            }
                        }),
                        (_class0.displayName = `Router[${
                        (nullref0 = Component.displayName) != null
                            ? nullref0
                            : Component.name
                    }]`),
                        _class0
                    );
                };
            };
            self.routeListener = routeListener;
            return this;
        };
        return (...args) => construct.apply({}, args);
    })();

    var MainRouter = Router(HashListener());

    const storage = {
        read: (name, defaultValue) => {
            const source = localStorage.getItem(name);
            if (source === null) {
                return defaultValue;
            }
            return JSON.parse(source);
        },
        write: (name, value) => {
            localStorage.setItem(name, JSON.stringify(value));
        }
    };
    const MapList = (() => {
        const construct = function construct(list = [], items = {}) {
            const self = {};
            Object.defineProperties(this, {
                list: {
                    get: () =>
                        self.list.map((id) => ({
                            id: id,
                            info: self.items[id]
                        }))
                }
            });
            this.add = (item) => {
                const id = `${Date.now()}.${Math.random()}`;
                return MapList([...self.list, id], {
                    ...self.items,
                    [id]: item
                });
            };
            this.updateItem = (id, newItem) =>
                MapList(self.list, {
                    ...self.items,
                    [id]: newItem
                });
            this.item = (id) => self.items[id];
            this.index = (index) => self.items[self.list[index]];
            this.toJSON = () => ({
                list: self.list,
                items: self.items
            });
            if (typeof list === "string") {
                ({ list, items } = JSON.parse(list));
            }
            [self.list, self.items] = [list, items];
            return this;
        };
        return (...args) => construct.apply({}, args);
    })();
    window.wat = createState(
        {
            chars: {
                initial: () => storage.read("chars", []),
                $add: (chars, { type, ...ch }) => [...chars, ch]
            },
            bags: {
                initial: () => {
                    const source = storage.read("bags", {});
                    return Object.keys(source).reduce(
                        (bags, key) => ({
                            ...bags,
                            [key]: MapList(source[key].list, source[key].list)
                        }),
                        {}
                    );
                },
                "chars.$add": (bags, { id }) => ({
                    ...bags,
                    [id]: MapList()
                }),
                $add: (bags, { id, item }) => ({
                    ...bags,
                    [id]: bags[id].add(item)
                }),
                $update: (bags, { id, item }) => ({
                    ...bags,
                    [id]: bags[id].updateItem(item.id, item.info)
                })
            }
        },
        {
            "chars.$add": (name) => ({
                name: name,
                id: Date.now()
            }),
            "bags.$add": (id, name) => ({
                id: id,
                item: {
                    name: name
                }
            }),
            "bags.$update": (id, item) => ({
                id: id,
                item: item
            })
        }
    );
    let last = wat.current;
    wat.subscribe((newState) => {
        var ref0;

        for (const key of Object.keys((ref0 = newState))) {
            const value = ref0[key];
            if (last[key] !== value) {
                storage.write(key, value);
                console.log("updated:", key);
            }
        }
    });
    const { actions: actions$1, ...state } = wat;

    const bind = (target, key, description) => {
        const { value: unbound, writable, ...desc } = description;
        let bound = null;
        return {
            ...desc,
            get: function() {
                if (bound === null) {
                    bound = unbound.bind(this);
                }
                return bound;
            }
        };
    };
    class Main extends React$1.Component {
        constructor(props) {
            super(props);
            this.state = state.current;
            state.subscribe((newState) => this.setState(newState));
        }
        render() {
            return React$1__default.createElement(
                "div",
                {},
                React$1__default.createElement(CharList, {
                    chars: this.state.chars
                }),
                React$1__default.createElement(BagDisplay, {
                    bags: this.state.bags
                })
            );
        }
    }
    window.appActions = actions$1;
    const CharList = MainRouter.connect(
        "/",
        true
    )(
        class CharList extends React$1.PureComponent {
            addChar() {
                const name = prompt(``);
                if (name === null || name.trim() === ``) {
                    return;
                }
                actions$1["chars.$add"](name);
            }
            render() {
                return React$1__default.createElement(
                    "div",
                    {},
                    React$1__default.createElement(
                        "button",
                        {
                            onClick: this.addChar
                        },
                        "Add Char"
                    ),
                    this.props.chars.map((ch) =>
                        React$1__default.createElement(
                            "div",
                            {
                                key: ch.id
                            },
                            React$1__default.createElement(
                                "a",
                                {
                                    href: `#/${ch.id}`
                                },
                                ch.name
                            )
                        )
                    )
                );
            }
        }
    );
    const propSort = (...props) => (first, second) => {
        for (const prop of props) {
            const [a, b] = [first[prop], second[prop]];
            if (a < b) {
                return -1;
            }
            if (a > b) {
                return 1;
            }
        }
        return 0;
    };
    const list = [
        {
            name: "Herb",
            id: 3
        },
        {
            name: "Herb",
            id: 1
        },
        {
            name: "Herb",
            id: 2
        },
        {
            name: "Thing",
            id: 1
        },
        {
            name: "Bag",
            id: 2
        }
    ];
    console.log(list);
    console.log(list.sort(propSort("name", "id")));
    const BagDisplay = MainRouter.connect("/:bagID")(
        class BagDisplay extends React$1.PureComponent {
            render() {
                const {
                    bags,
                    _router: { params }
                } = this.props;
                return React$1__default.createElement(Bag, {
                    bag: bags[params.bagID],
                    bagID: params.bagID
                });
            }
        }
    );
    class Bag extends React$1.PureComponent {
        addItem() {
            const name = prompt(``);
            if (name === null || name.trim() === ``) {
                return;
            }
            actions$1["bags.$add"](this.props.bagID, name);
        }
        render() {
            console.log(this.props);
            return React$1__default.createElement(
                "div",
                {},
                React$1__default.createElement(
                    "button",
                    {
                        onClick: this.addItem
                    },
                    "Add Item"
                ),
                this.props.bag.list.map((item) =>
                    React$1__default.createElement(
                        "div",
                        {
                            key: item.key
                        },
                        item.name
                    )
                )
            );
        }
    }
    Object.defineProperty(
        Bag.prototype,
        "addItem",
        [bind].reduceRight(
            (descriptor, decorator) =>
                decorator(Bag.prototype, "addItem", descriptor),
            Object.getOwnPropertyDescriptor(Bag.prototype, "addItem")
        )
    );
    ReactDOM.render(
        React$1__default.createElement(Main, {}),
        document.querySelector("app-root")
    );

}(React, ReactDOM));
