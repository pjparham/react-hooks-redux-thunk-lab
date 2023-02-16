//7.create fetchCats function to intitally dispatch loading state since fetch is async
//8. call fetch to api after the above and .then call json() on response
// 9. pass json data as payload in dispatch with type "cats/catsLoaded" since our data is avaiable to be put into state
// now move on to Cats.js
export function fetchCats() {
    return function (dispatch) {
        dispatch({ type: "cats/catsLoading" }); //7
        fetch("https://learn-co-curriculum.github.io/cat-api/cats.json")
            .then((response) => response.json()) //8
            .then((cats) =>
                dispatch({
                    type: "cats/catsLoaded",
                    payload: cats.images
                })
            )
    }
}

//1. define intital state
const initialState = {
    entities: [], // array of cats
    status: "idle", //loading status
}

//2. pass state and action as params into reducer
//3. create actions based on switch
//4. create loading state to cover action before entities is defined
//5. created loaded state which changes status back to idle and delivers the entities
//6. define default to return 'inital state' in case of errors
export default function catsReducer(state = initialState, action) {
    switch(action.type){
        case "cats/catsLoading":
            return {
                ...state,
                status: "loading"
            };
        case "cats/catsLoaded":
            return {
                ...state,
                entities: action.payload,
                status: "idle",
            };
        default:
            return state;
    }
}
