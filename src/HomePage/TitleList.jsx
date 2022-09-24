import React, { useEffect, useState } from 'react'
import CardContent from './CardContent'
import Text from './Text'
import AnimatedExample from './AnimatedExample';

export default function TitleList() {

    const[count,setcount] = useState(0);

    useEffect(()=>{
        
        AnimatedExample(setcount(count))
        
    }, [count])

    function countaddition(){
        setcount(prev => prev+25)
        
    }

    const [val1, setVal1] = React.useState(false)
    function handleChange1() {
        setVal1(prev => !prev)
    }

    const [val2, setVal2] = React.useState(false)
    function handleChange2() {
        setVal2(prev => !prev)
    }

    const [val3, setVal3] = React.useState(false)
    function handleChange3() {
        setVal3(prev => !prev)
    }

    const [val4, setVal4] = React.useState(false)
    function handleChange4() {
        setVal4(prev => !prev)
    }

    return (
        <div className='FixStuff'>
            <div className="progres"  style={{ position: 'sticky',top: '0px',fontSize: '20px'}}>
            {AnimatedExample(count)}
            </div>
            <Text clickThis={handleChange1} count={count} No={1}/>
            {val1 && <CardContent onClick = {countaddition} />}
            <Text clickThis={handleChange2} count={count} No={2}/>
            {val2 && <CardContent onClick = {countaddition}/>}
            <Text clickThis={handleChange3} count={count} No={3}/>
            {val3 && <CardContent onClick = {countaddition}/>}
            <Text clickThis={handleChange4} count={count} No={4}/>
            {val4 && <CardContent onClick = {countaddition}/>}
        </div>
    )
}