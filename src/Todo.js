import { ACTIONS } from "./index";

export default function Todo ({todo, dispatch}){
    return(
        <div>
            <span style={{color: todo.completed? '#AAA' : '#000'}}>{todo.name}</span>
            <button onClick={()=> dispatch({type: ACTIONS.TOGGLE_DONE, payload:{id: todo.id}})}>TOGGLE DONE</button>
            <button onClick={()=> dispatch({type: ACTIONS.DELETE_TODO, payload:{id: todo.id}})}>DELETE TODO</button>
        </div>
    );
}