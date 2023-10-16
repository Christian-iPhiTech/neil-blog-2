import {useState, useEffect} from 'react'

const useFetch = (url) => {
    const [data, setData] = useState(null)    
    const [isLoading, setIsLoading] = useState(true)  
    const [error, setError] = useState(null)  
    
    const deleteBlog = (id) => {
        setData(prev => prev.filter(blog => blog.id !== id))
    }

    useEffect(() => {
        const abortCont = new AbortController()
        setTimeout(() => {
            fetch(url, {signal: abortCont.signal})
            .then(res => {
                if(!res.ok){
                    throw Error('Could not fetch the data')
                }
                return res.json()
            })
            .then (data => {
                setData(data)
                setIsLoading(false)
                setError(null)
            })
            .catch (err => {
                if( err.name === 'AbortError'){
                    console.log('Fetch aborted')
                }else{
                    setError(err.message)
                    setIsLoading(false)
                }
            })
        }, 1000)

        return () => abortCont.abort()
    }, [url])

    

    return {data, isLoading, error, deleteBlog}
}
 
export default useFetch;