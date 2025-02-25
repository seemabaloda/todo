export default function reducer(state,action){
console.log('hello')
    switch(action.type){
        case "add":
            return [...state,{id:Date.now(),text:action.payload}];
        case "remove":
            return [state.filter((todo)=>todo.id !== action.payload)];
        case "clear":
            return  [];
        default:
         return state;
    }
    
}