import { useEffect } from "react";

export function useCustomHook(count) {
    useEffect(() => {
        document.title = `Count ${count}`
    }, [count])
    return (<h2>State value will change if you click on the count button -- {count}</h2>)
}