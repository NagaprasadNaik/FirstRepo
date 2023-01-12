import { useState } from 'react'
import { useCustomHook } from './UseCustomHook'

function DocumentTitleTwo() {
    const [count, setCount] = useState(0)

    
    const value = useCustomHook(count)

    return (
        <>
            <button onClick={() => { setCount(count + 1) }}>count - {count}</button>
            <div>{value}</div>
        </>
    )
}

export default DocumentTitleTwo;
