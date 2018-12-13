import React from 'react'
import Table from './table'

const students = [
    {
        name: 'Goofy',
        course: 'Canine Behavior',
        grade: '99'
    },
    {
        name: 'Scrooge McDuck',
        course: 'Finance',
        grade: '100'
    },
    {
        name: 'Ariel',
        course: 'Marine Bio',
        grade: '95'
    }
]

export default ()=>{
    return (
    <div className = 'container'>
        <h1>Student Grade Table</h1>
        <Table data = {students}/>
    </div>
    )
}

