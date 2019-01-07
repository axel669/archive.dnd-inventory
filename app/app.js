(function (React$1, ReactDOM) {
    'use strict';

    var React$1__default = 'default' in React$1 ? React$1['default'] : React$1;
    ReactDOM = ReactDOM && ReactDOM.hasOwnProperty('default') ? ReactDOM['default'] : ReactDOM;

    const actions = {
        $set: (source, value) => value,
        $unset: (source, names) => {
            const copy = {
                ...source
            };
            for (const name of names) {
                delete copy[name];
            }
            return copy;
        },
        $push: (source, value) => [...source, value],
        $append: (source, value) => [...source, ...value],
        $apply: (source, func) => func(source),
        $filter: (source, condition) => source.filter(condition),
        $merge: (source, addition) => ({
            ...source,
            ...addition
        })
    };
    const internal_copyObject = (obj, createIfVoid = false) => {
        if (obj === undefined && createIfVoid === true) {
            return {};
        }
        if (typeof obj !== "object" || obj === null) {
            return obj;
        }
        if (obj instanceof Map) {
            return new Map(obj);
        }
        if (obj instanceof Set) {
            return new Set(obj);
        }
        if (obj.constructor !== Object) {
            return obj;
        }
        return {
            ...obj
        };
    };
    const internal_setValues = (dest, key, n, value, create) => {
        const name = key[n];
        if (n === key.length - 1) {
            return actions[name](dest, value);
        } else {
            dest = internal_copyObject(dest, create);
            dest[name] = internal_setValues(dest[name], key, n + 1, value, create);
        }
        return dest;
    };
    const update = (source, obj, createIfUndefined = false) =>
        Object.keys(obj).reduce(
            (source, key) =>
                internal_setValues(
                    source,
                    key.split("."),
                    0,
                    obj[key],
                    createIfUndefined
                ),
            source
        );
    update.actions = actions;

    var update_1 = update;

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
                                return self.unsub();
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

    var __class0;
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
    const state = (() => {
        const p = Publisher();
        let currentState = storage.read("charList", {
            list: [],
            items: {}
        });
        return {
            get subscribe() {
                return p.subscribe;
            },
            get current() {
                return currentState;
            },
            publish: (changes) => {
                currentState = update_1(currentState, changes);
                return p.publish(currentState);
            }
        };
    })();
    const actions$1 = {
        chars: {
            add: (name) => {
                const id = Date.now();
                return state.publish({
                    "list.$push": id,
                    [`items.${id}.$set`]: {
                        id: id,
                        name: name,
                        bags: {
                            items: {},
                            list: []
                        }
                    }
                });
            }
        },
        bag: {
            addItem: (source, name) => {
                const id = Date.now();
                return state.publish({
                    [`items.${source}.list.$push`]: id,
                    [`items.${source}.items.${id}.$set`]: {
                        id: id,
                        name: name,
                        count: 0,
                        weight: 1
                    }
                });
            },
            addBag: (source, name, weight) => {
                const id = Date.now();
                return state.publish({
                    [`items.${source}.list.$push`]: id,
                    [`items.${source}.items.${id}.$set`]: {
                        name: name,
                        weight: weight,
                        list: [],
                        items: {}
                    }
                });
            }
        }
    };
    state.subscribe((latest) => storage.write("charList", latest));
    const bind = (target, key, description) => {
        const { value: unbound, writable, ...desc } = description;
        return {
            ...desc,
            get: function() {
                const bound = unbound.bind(this);
                Object.defineProperty(this, key, {
                    value: bound,
                    writeable: true,
                    configurable: true
                });
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
                    ...this.state
                }),
                React$1__default.createElement(BagDisplay, {
                    chars: this.state.items
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
                actions$1.chars.add(name);
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
                    this.props.list.map((id) =>
                        React$1__default.createElement(
                            "div",
                            {
                                key: id
                            },
                            React$1__default.createElement(
                                "a",
                                {
                                    href: `#/${id}`
                                },
                                this.props.items[id].name
                            )
                        )
                    )
                );
            }
        }
    );
    const BagDisplay = MainRouter.connect("/:charID")(
        (__class0 = class BagDisplay extends React$1.PureComponent {
            addBag() {
                const {
                    chars,
                    _router: { params }
                } = this.props;
                const name = prompt(``);
                if (name === null || name.trim() === ``) {
                    return;
                }
                actions$1.bag.addBag(`${params.charID}.bags`, name, null);
            }
            render() {
                const {
                    chars,
                    _router: { params }
                } = this.props;
                const { bags, name } = chars[params.charID];
                return React$1__default.createElement(
                    "div",
                    {},
                    React$1__default.createElement("div", {}, name),
                    React$1__default.createElement(
                        "button",
                        {
                            onClick: this.addBag
                        },
                        "Add Bag"
                    ),
                    bags.list.map((bagID) =>
                        React$1__default.createElement(Bag, {
                            key: bagID,
                            source: `${params.charID}.bags.items.${bagID}`,
                            ...bags.items[bagID]
                        })
                    )
                );
            }
        })
    );
    Object.defineProperty(
        __class0.prototype,
        "addBag",
        [bind].reduceRight(
            (descriptor, decorator) =>
                decorator(__class0.prototype, "addBag", descriptor),
            Object.getOwnPropertyDescriptor(__class0.prototype, "addBag")
        )
    );
    class Bag extends React$1.PureComponent {
        addItem() {
            const name = prompt(``);
            if (name === null || name.trim() === ``) {
                return;
            }
            actions$1.bag.addItem(this.props.source, name);
        }
        itemMap(id) {
            const item = this.props.items[id];
            return React$1__default.createElement(
                "tr",
                {
                    key: id
                },
                React$1__default.createElement("td", {}, item.name),
                React$1__default.createElement("td", {}, item.count),
                React$1__default.createElement("td", {}, item.weight * item.count)
            );
        }
        render() {
            const { list, items, name } = this.props;
            return React$1__default.createElement(
                "div",
                {
                    style: {
                        border: "1px solid black"
                    }
                },
                React$1__default.createElement("div", {}, name),
                React$1__default.createElement(
                    "button",
                    {
                        onClick: this.addItem
                    },
                    "Add Item"
                ),
                React$1__default.createElement(
                    "table",
                    {
                        style: {
                            width: "100%"
                        }
                    },
                    React$1__default.createElement(
                        "tbody",
                        {},
                        React$1__default.createElement(
                            "tr",
                            {},
                            React$1__default.createElement("th", {}, "Item"),
                            React$1__default.createElement(
                                "th",
                                {
                                    style: {
                                        width: 40
                                    }
                                },
                                "Count"
                            ),
                            React$1__default.createElement(
                                "th",
                                {
                                    style: {
                                        width: 40
                                    }
                                },
                                "Weight"
                            )
                        ),
                        list.map(this.itemMap)
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
    Object.defineProperty(
        Bag.prototype,
        "itemMap",
        [bind].reduceRight(
            (descriptor, decorator) =>
                decorator(Bag.prototype, "itemMap", descriptor),
            Object.getOwnPropertyDescriptor(Bag.prototype, "itemMap")
        )
    );
    ReactDOM.render(
        React$1__default.createElement(Main, {}),
        document.querySelector("app-root")
    );

}(React, ReactDOM));
