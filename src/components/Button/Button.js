
const Button = props =>{

    return(
        <div>
            <button onClick={props.start}>Start</button>
            <button onClick={props.stop}>Stop</button>
            <button onClick= {props.reset}>Restart</button>
        </div>
    )
}

export default Button
