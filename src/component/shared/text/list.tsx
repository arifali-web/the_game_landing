import React from 'react'



interface ListProps {
    text: string
    litext: string[]
}
function List( { text, litext }: ListProps) {
    return (
        <div className='list'>
            <p>{text}</p>
            <ul className='text-white'>
                {litext.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    )
}

export default List
