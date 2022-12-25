const redux=require("redux")
const createStore=redux.createStore;
const combineReducers=redux.combineReducers;
const BUY_FOOTBALL="BUY_FOOTBALL";
const RESTOCK_FOOTBALL="RESTOCK_FOOTBALL";
const BUY_JURSEY = "BUY_JURSEY"
const RESTOCK_JURSEY = "RESTOCK_JURSEY"
function buyFootball(qty=1){
  return{
    type:BUY_FOOTBALL,
    quantity:qty
   
  }
}
function restockFootball(qty=1){
  return {
    type:RESTOCK_FOOTBALL,
    quantity:qty
  }
}

function buyJursey(qty=1){
  return{
    type: BUY_JURSEY,
    quantity:qty
  }
}

function restockJursey(qty=1){
  return{
    type: RESTOCK_JURSEY,
    quantity:qty
  }
}

const initialState={
  numberOfFootball:10,
  numberOfJursey:12
}

const footballReducer=((state=initialState,action)=>{
  switch(action.type){
    case BUY_FOOTBALL:
      return {
        ...state,
      numberOfFootball:state.numberOfFootball-action.quantity      
    };
    case RESTOCK_FOOTBALL:
      return{
        ...state,
        numberOfFootball:state.numberOfFootball+action.quantity
      };
    default:
      return state;
  }
})


const jurseyReducer=((state=initialState,action)=>{
  switch(action.type){
      case BUY_JURSEY:
        return{
          ...state,
          numberOfJursey:state.numberOfJursey-action.quantity,
        }
        case RESTOCK_JURSEY:
          return{
            ...state,
            numberOfJursey:state.numberOfJursey+action.quantity
          }
    default:
      return state;
  }
})

const multipleReducer=combineReducers({
  football:footballReducer,
  jursey:jurseyReducer
})
const store =createStore(multipleReducer);
console.log("initialState",store.getState())

const unsubscribe=store.subscribe(()=>{
  console.log("Updated Sate",store.getState())
})


store.dispatch(buyFootball(5))
store.dispatch(restockFootball(10))
store.dispatch(buyJursey(5))
store.dispatch(restockJursey(10))