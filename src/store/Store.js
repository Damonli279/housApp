import { createStore,combineReducers } from 'redux'

function name(state = '未登录', action){
    switch(action.type){
        case 'changename': return action.name
        default : return state
    }
}
function age(state = '26', action){
    switch(action.type){
        
        default : return state
    }
}
function sex(state = '男', action){
    switch(action.type){
        
        default : return state
    }
}
function city(state = '成都', action){
    switch(action.type){
        
        default : return state
    }
}

function historylist(state = [],action){
    switch(action.type){
        case 'pushlist': {
            let arr = state.filter(item => {
                if(item.id == action.item.id){
                    return
                };
                return item
            })
            if(arr.length == 5){
                arr.pop()
            }
            return [action.item,...arr]
        }
        default: return state
    }
}


var store = createStore(combineReducers({
    name,age,sex,city,historylist
}))



export default store

// var store = createStore(function(state = 0,action){
//     switch(action.type){
//         case 'addnum' : return state + action.num

//         default : return state
//     }
    
    
// })

// let changNun = {
//     type: 'addnum',
//     num: -10
// }
// store.dispatch({
//     type: 'addnum',
//     num: -10
// })
// store.dispatch({
//     type: 'addnum',
//     num: 20
// })

// console.log(store.getState());


// export default store