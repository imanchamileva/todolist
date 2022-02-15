import { useState, useEffect } from 'react'
import moment from 'moment'


const Horloge = () => {


    const [time, setTime] = useState(new Date());

    //
    //setTimeout : renvoie un message apres un certain moment 1x
    //setInterval: renvoie un message apres un certain moment non stop juska clearInterval
    useEffect(() => {
        //start du timer
        const timerID =  setTimeout(() => {
            console.log('click');

            //mise à jour du state
            setTime(new Date())
        }, 500)

        //arret du timer
        return () =>{
            clearTimeout(timerID)
        }
        // (comme cest un tableau vide, ça ne refresh pas le Useffect)
    })



    const heure = moment(time).format('HH')
    const minute = moment(time).format('mm')
    const seconde = moment(time).format('ss')
    // const mounia = moment(time).format('HH: mm : ss')


    return (

        <>
            <p>{heure} : {minute} : {seconde}</p>

        </>

    )
}


export default Horloge