import {useState , useEffect} from 'react'

function DocumentTitleOne(){
    const [count , setCount] = useState(0)

    useEffect(() => {
        document.title = `Count ${count}`
    })
    
    return (
        <>
            <button onClick={() => {setCount(count+1)}}>count - {count}</button>
        </>
    )
}

export default DocumentTitleOne;