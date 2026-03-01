
import {useState} from 'react';
import { Button } from 'react-bootstrap';

import './eas.css';

function Traffic(){
    const[red,setRed]=useState("white")
    const[yellow,setYellow]=useState("white")
    const[green,setGreen]=useState("white")

    const change1=()=>{
        setRed("red")
        setYellow("white")
        setGreen("white")
    }
    const change2=()=>{
        setRed("white")
        setYellow("yellow")
        setGreen("white")
    }
    const change3=()=>{
        setRed("white")
        setYellow("white")
        setGreen("green")
    }
    return(
        <>
        <center>
        <div className="main">

            <div className="traffic-light" style={{backgroundColor:red}}></div>
            <div className="traffic-light" style={{backgroundColor:yellow}}></div>
            <div className="traffic-light" style={{backgroundColor:green}}></div>



        </div><br /><br />
        <div className="btn">
            <Button variant='danger' onClick={change1}>STOP</Button>
            <Button variant='warning' onClick={change2}>WAIT</Button>
            <Button variant='success' onClick={change3}>GO</Button>
        </div>
        </center>
        </>
    )
}
export default Traffic;
