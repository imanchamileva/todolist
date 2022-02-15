import { nanoid } from 'nanoid';
import { useState } from 'react';
import style from './tasks.module.css'



function TodoForm(props) {

    const [nom, setNom] = useState('')
    const [description, setDescription] = useState('')
    const [priorite, setPriorite] = useState('')



    const handleSubmit = (e) => {
        e.preventDefault()

        const data = {
            nom,
            description,
            priorite,
        }

        // Event
        props.onNewTask(data);



    }


    return (

        <div className="principale">


            <form onSubmit={handleSubmit}>
                <h2>Ajouter une nouvelle tâche</h2>
                <div >
                    <label htmlFor="ajout" >Nom</label>
                    <input type="text" id="nom" onChange={(e) => setNom(e.target.value)} value={nom} />

                </div>

                <div>
                    <label htmlFor="description">Description</label>
                    <textarea name="description" onChange={(e) => setDescription(e.target.value)} value={description}></textarea>
                </div>

                <div>
                    <label htmlFor="priorite">Priorité</label>
                    <select name="" id="priorite" onChange={(e) => setPriorite(e.target.value)} value={priorite}>
                        <option value="basse">basse</option>
                        <option value="normale">normale</option>
                        <option value="urgent">urgent</option>
                    </select>

                    <button className={style.thebutton}>Ajouter</button>
                </div>
            </form>
        </div>
    );
}






export default TodoForm;