import Style from './Time.module.scss'

const Time = ({time}) =>{

    const plusO =(abc) =>{
        if(abc < 10){
            return(
                '0'+ abc
            )
        }
        return(
            abc
        )}

    const hour = () =>{
        const hr = Math.floor(time/60000 )
        return(
            hr
        )}
   
    const minut = () =>{
        const min = Math.floor(time/6000 )
        return(
            min
        )}
   
    const second = () =>{
        let sec = Math.floor(time/100) 
        if(sec === 60){
            return(
                sec= 0
            )} 
        return(
            sec
        )}  
         
    return(
        <div className={Style.abcd}>
            {plusO(hour())}:{plusO(minut() % 60)}:{plusO(second() % 60)}.{time % 100} {/* jak dzieala w tym momecie % */}
        </div>
    );
}

export default Time;