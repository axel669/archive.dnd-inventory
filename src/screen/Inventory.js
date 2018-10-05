import React, {PureComponent} from "react";
import doric from "doric-components";
import autobind from "autobind-decorator";
import update from "immutable-update-values";

import ItemList from "./ItemList.tea";

import yggdrasil from "../yggdrasil.tea";
import sheet from "../style.tea";



sheet.addStyles({
    "item-display": {
        display: "grid",
        gridTemplateAreas: `
            "d a a b"
            "d c c b"
            ;`,
        gridTemplateColumns: "35px auto auto 35px",
        gridAutoRows: 30
    },
    "item-name": {
        gridArea: 'a',
        padding: 4
    },
    "item-count": {
        gridArea: 'c',
        padding: 4
    },
    "item-remove": {
        gridArea: 'b'
    },
    "item-edit": {
        gridArea: "d"
    },
    "item-display:nth-child(even)": {
        backgroundColor: "#c4dfdf"
    },
    "item-display doric-button": {
        height: "100%"
    }
});

@doric.dialogify
class ItemDisplay extends PureComponent {
    render() {
        const {item, guid, count} = this.props.item;

        return <item-display key={guid}>
            <item-name>
                {item.name}
            </item-name>
            <item-count>
                {count}
            </item-count>

            <item-edit>
                <doric.iconButton flush block
                    icon="ion-edit" />
            </item-edit>
            <item-remove>
                <doric.iconButton block flush
                    icon="ion-trash-a" />
            </item-remove>
        </item-display>
    }
}

const dialogLists = new WeakMap();
const setList = (component, list) => dialogLists.set(component, list);
const getList = (component) => dialogLists.get(component);
const dialogWrap = Parent => class extends Parent {
    static displayName = `DialogWrapped(${Parent.displayName ?? Parent.name})`;

    constructor(props) {
        super(props);
        dialogLists.set(this, []);
        this.state = {
            ...this.state,
            _dialogUpdate: Date.now()
        };
    }

    showDialog(stuff) {
        const guid = Date.now();
        const dialog = {
            component: stuff,
            guid,
            close: () => {
                setList(
                    this,
                    getList(this).filter(d => d.guid !== guid)
                );
                this.setState({
                    _dialogUpdate: Date.now()
                });
            }
        };
        setList(
            this,
            update(getList(this), {$push: dialog})
        );
        this.setState({
            _dialogUpdate: Date.now()
        });
    }

    render() {
        return <React.Fragment>
            {super.render()}
            {getList(this).map(
                dialog => <dialog.component key={dialog.guid} {...this.props} close={dialog.close} />
            )}
        </React.Fragment>
    }
};

@dialogWrap
class Inventory extends PureComponent {
    static propList = ["items"];

    @autobind
    addItem() {
        yggdrasil.screen.change(ItemList);
        // const t = Date.now();
        // this.showDialog(({close}) => <doric.button block onTap={close}>{this.state._dialogUpdate} - {t}</doric.button>);
    }

    render() {
        const headers = [
            {
                title: "",
                display: ({item}) => item.name,
                style: {
                    width: "60%"
                }
            },
            {
                title: "",
                display: ({count}) => count
            },
            {
                title: "",
                display: ({item}) => item.price
            },
            {
                title: "",
                display: (item) => <doric.iconButton block flush icon="ion-edit" onTap={() => console.log(item)} />
            }
        ];

        return <div>
            <doric.button.pure block text="Add" onTap={this.addItem} />
            {false && <Spreadsheet data={this.props.items} headers={headers} />}
            <div>
                {this.props.items.map(
                    (item) => <ItemDisplay item={item} />
                )}
            </div>
        </div>
    }
}

export default Inventory;
