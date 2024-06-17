import {useState} from 'react'
const Content = () =>{
    const [count,setCount] = useState(0);
    const increaseNum = ()=>{
        setCount(count+1)
        
    }

    const decreaseNum = () =>{
        setCount(count-1);
        console.log(count-1);
    }

    const resetNum = () =>{
        setCount(0);
    }

    return (
        
        <div>
            
            <h2>{count}</h2>
            <button onClick={increaseNum}>Increase</button>
            <div>
                <button onClick = {decreaseNum}>Decrease</button>
            </div>
            <div>
                <button onClick={resetNum}>
                    Reset
                </button>
            </div>
        </div>
    )
}

export default Content;