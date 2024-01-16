import React from 'react'

const Categories = ({ categories, filterItem }) => {
    return (
        <div className='btn-container'>
            {categories.map((category) => {
                return (
                    <button className='btn' type='button' key={category} onClick={()=>filterItem(category)}>{category}</button>
                )
            })}
        </div>
    )
}

export default Categories
