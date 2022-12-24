const redux=require("redux");
const createStore=redux.createStore;


//action is a object
//action create/ matcine/engine/ function

const BUY_PASTA="BUY_PASTA"
function buyPasta(){
  return {
    type:BUY_PASTA,
    quantity:10,
  }
}


// prev ,action -----> new state 
const initialState={
  numberOfPasta:20,
  numberOfPizza:10,
}

const reducer=(state=initialState,action)=>{
  switch(action.type){
    case BUY_PASTA:
      return {
        ...state,
        numberOfPasta:state.numberOfPasta-1,
      }
    default:
      return state;  
  }
}

const store= createStore(reducer)
console.log("InitalState",store.getState())

const unsubscribe=store.subscribe(()=>{
  console.log("updated State", store.getState())
})
store.dispatch(buyPasta())
store.dispatch(buyPasta())
store.dispatch(buyPasta())
unsubscribe()
