import {useReducer, useEffect} from 'react'
import axios from 'axios'



//API REST EN HOOKS
//USEGET PEGA DADOS DA API
const reducer = (state, action) => {
    //manipula o estado
    console.log("state: ", state )
    if(action.type === "REQUEST"){
      return {
        ...state,
        loading: true,
      }
    }
  
    if(action.type === "SUCCESS"){
      return {
        ...state,
        loading: false,
        data: action.data,
      }
    }
    return state
  }
  
  //Reutilizar onde quiser com qualquer base
  const useGet = url => {
    const [data, dispatch] = useReducer(reducer, {
      loading: true,
      data: {},
    })
  
    useEffect(() => {
      dispatch({ type: 'REQUEST'})
      axios
        .get(url)
        .then(res => {
          dispatch({ type: 'SUCCESS', data: res.data})
        })
    }, [])
    return data
  }
  
  export default useGet