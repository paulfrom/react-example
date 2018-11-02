const ADD_ITEM='ADD_ITEM'



export function commentReducer(state={
    commentList:[]
},action){
    switch (action.type) {
        case ADD_ITEM:
        return {
            commentList:[...state.commentList,action.item]
        }
        default: return state;
    }
}


export function  addItem(data) {
    return {type:ADD_ITEM,item:data}    
}