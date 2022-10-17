import { createContext, useContext, useReducer } from "react";
import { useFetch } from "../components/hooks/useFetch";
import { RANDON_COLOR_URL } from "../constants/urlConstatnts";
import {CreateTaskReducer, initialState} from '../reducer';




const TaskContext = createContext(initialState);

export const TaskContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(CreateTaskReducer, initialState);
    const {data, error, loading } = useFetch(RANDON_COLOR_URL);

    const value = {
        state,
        dispatch,
        data,
        error,
        loading
    }
    return (
        <TaskContext.Provider value={{value}}>
            {children}
        </TaskContext.Provider>
    )
}

export const useTaskContext = () =>{
    const context = useContext(TaskContext);
    if(context === undefined){
        return new Error('useTaskContext must be wrapped TaskContextProvider')
    }
    return context
}
