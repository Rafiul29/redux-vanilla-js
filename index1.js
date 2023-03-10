const redux=require("redux");
const createStore=redux.createStore;

const BUY_PASTA="BUY_PASTA";
const RESTOCK_PASTA="RESTOCK_PASTA";
//action is a object
//action create/ matcine/engine/ function


function buyPasta(){
  return {
    type:BUY_PASTA,
    quantity:10,
  }
}

function restockPasta(){
  return {
    type:RESTOCK_PASTA,
  }
}

// prev ,action -----> new state 
const initialState={
  numberOfPasta:5,
  numberOfPizza:7,
}

const reducer=(state=initialState,action)=>{
  switch(action.type){
    case BUY_PASTA:
      return {
        ...state,
        numberOfPasta:state.numberOfPasta-1,
      };
    case RESTOCK_PASTA:
      return{
        ...state,
        numberOfPasta:state.numberOfPasta+1,
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
store.dispatch(buyPasta())
store.dispatch(buyPasta())
store.dispatch(restockPasta())
store.dispatch(restockPasta())
store.dispatch(restockPasta())


unsubscribe()
