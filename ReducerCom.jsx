import React, { useReducer } from 'react'

const initialState = 1000
const reducer = (state, action) => {
    switch (action.command) {
        case 'ADD':
            return state + 1
        case 'SUBTRACT':
            return state - 1
            case 'reset':
            return 0
        default:
            return state
    }
}

const ReducerCom = () => {
    const [count, dispatch] = useReducer(reducer, initialState)

    const addCount = (count) => {
        dispatch({
            command: 'ADD',
            payload: count
        })
    }
    const substractCount = (count) => {
        dispatch({
            command: 'SUBTRACT',
            payload: count
        })
    }
    const reset = (count) => {
        dispatch({
            command: 'reset',
            payload: count
        })
    }

    return (
        <div>
            <br />
            <center><h1>{count}</h1></center>
            <br />
            <center><button onClick={() => addCount(count)}>Add</button></center>
            <br />
            <center><button onClick={() => substractCount(count)}>Subtract</button></center>
            <br />
            <center><button onClick={() => reset(count)}>Reset</button></center>
        </div>
    )
}

export { ReducerCom }
