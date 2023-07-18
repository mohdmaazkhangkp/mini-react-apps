import React, { useState } from 'react'
import './Calculator.css';

const Calculator = () => {
    const [displayValue, setDisplayValue] = useState("");
    return (
        <div className="container">
            <div className="wrapper">
                <div className="displayBox">
                    <input type="text" value={displayValue}/>
                </div>
                    <div className="inputButtons">
                        <div className="buttonRow">
                            <input type="button" value="AC" onClick={()=>setDisplayValue("")} />
                            <input type="button" value="Del" onClick={()=> setDisplayValue(prev=> prev.slice(0,-1))}/>
                            <input type="button" value="."  onClick={(e)=> setDisplayValue((prev)=> prev + e.target.value)}/>
                            <input type="button" value="/"  onClick={(e)=> setDisplayValue((prev)=> prev + e.target.value)}/>
                        </div>
                        <div className="buttonRow">
                            <input type="button" value="7"  onClick={(e)=> setDisplayValue((prev)=> prev + e.target.value)}/>
                            <input type="button" value="8"  onClick={(e)=> setDisplayValue((prev)=> prev + e.target.value)}/>
                            <input type="button" value="9"  onClick={(e)=> setDisplayValue((prev)=> prev + e.target.value)}/>
                            <input type="button" value="*"  onClick={(e)=> setDisplayValue((prev)=> prev + e.target.value)}/>
                        </div>
                        <div className="buttonRow">
                            <input type="button" value="4"  onClick={(e)=> setDisplayValue((prev)=> prev + e.target.value)}/>
                            <input type="button" value="5"  onClick={(e)=> setDisplayValue((prev)=> prev + e.target.value)}/>
                            <input type="button" value="6"  onClick={(e)=> setDisplayValue((prev)=> prev + e.target.value)}/>
                            <input type="button" value="-"  onClick={(e)=> setDisplayValue((prev)=> prev + e.target.value)}/>
                        </div>
                        <div className="buttonRow">
                            <input type="button" value="1"  onClick={(e)=> setDisplayValue((prev)=> prev + e.target.value)}/>
                            <input type="button" value="2"  onClick={(e)=> setDisplayValue((prev)=> prev + e.target.value)}/>
                            <input type="button" value="3"  onClick={(e)=> setDisplayValue((prev)=> prev + e.target.value)}/>
                            <input type="button" value="+"  onClick={(e)=> setDisplayValue((prev)=> prev + e.target.value)}/>
                        </div>
                        <div className="buttonRow">
                            <input type="button" value="00" onClick={(e)=> setDisplayValue((prev)=> prev + e.target.value)} />
                            <input type="button" value="0"  onClick={(e)=> setDisplayValue((prev)=> prev + e.target.value)}/>
                            <input style={{width:"122px"}} type="button" value="=" onClick={()=> setDisplayValue(eval(displayValue).toFixed(2))}/>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default Calculator