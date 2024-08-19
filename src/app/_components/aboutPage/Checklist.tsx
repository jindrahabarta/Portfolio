import React from 'react'
import ChecklistItem from './ChecklistItem'

const Checklist = () => {
    return (
        <ul className="mt-2 flex flex-col flex-wrap max-h-96 gap-2 ">
            <ChecklistItem
                text="Zkusit si život v zahraničí"
                checked={1}
            ></ChecklistItem>
            <ChecklistItem
                text="Tvořit nové originální věci"
                checked={1}
            ></ChecklistItem>
            <ChecklistItem text="Zkusit remote job"></ChecklistItem>
            <ChecklistItem text="Procestovat kus světa"></ChecklistItem>

            <ChecklistItem text="Jednou vydělat 100k měsíčně :D"></ChecklistItem>
            <ChecklistItem text="Zaběhnout půlmaraton"></ChecklistItem>
            <ChecklistItem text="Nikdy se nepřestat vzdělávat"></ChecklistItem>
        </ul>
    )
}

export default Checklist
