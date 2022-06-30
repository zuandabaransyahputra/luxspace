import { useState } from 'react'

const useForm = (initialState) => {

    const [state, steState] = useState(initialState)

    function fnUpdateState(event) {
        steState(prev => ({
            ...prev,
            [event.target.name]: event.target.value
        }))
    }

    return { state, fnUpdateState }
}

export default useForm