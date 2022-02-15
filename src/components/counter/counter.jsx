import {useEffect, useState} from 'react'

const Counter = () => {

    const [count, setCount] = useState(0)


    useEffect(() => {
        // effet pour l'ajout et la mise à jour
        console.log('Effect start');
        document.title = `Counter : ${count}`

        // effet de nettoyage fonction
        return () => {
            console.log('effect clear ');
        }
    })

    const handleUpCounter = () => {
        // mise à jour du state => rerender=new rendu(demande react d'actualiser la page web=composant)
        setCount(c => c + 1 )
    }

    return(
        <>
        {console.log('render')}
        <p>valeur du compteur : {count}</p>
        <button onClick={handleUpCounter}>+1</button>
        
        
        </>
    )
}


export default Counter