export const reducer = (state, action) => {
    let itemSelected = action.payload;

    let itemList = [...state];
    let newState = [];

    switch (action.type) {
        case "ADD_ITEM":
            let item = {
                id: action.payload.id,
                name: action.payload.name,
                bought: action.payload.bought,
            };
            return [...state, item];
        case "DELETE_ITEM":

            for (let i = 0; i < itemList.length; i++) {
                if (itemList[i].id !== itemSelected) {
                    newState.push(itemList[i])
                }
            }
            return newState;
        case "BUY_ITEM":
            if (document.getElementById(action.payload).checked) {
                for (let i = 0; i < itemList.length; i++) {
                    if (itemList[i].id === itemSelected) {
                        itemList[i].bought = "boughted"
                        newState.push(itemList[i])
                    } else {
                        newState.push(itemList[i])
                    }
                }
                return newState;
            }
            else {
                for (let i = 0; i < itemList.length; i++) {
                    if (itemList[i].id === itemSelected) {
                        itemList[i].bought = ""
                        newState.push(itemList[i])
                    } else {
                        newState.push(itemList[i])
                    }
                }
                return newState;
            }
        default:
            return state;
    }
};