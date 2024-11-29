import React from 'react'

const ListTodo = ({listTodo}) => {
  return (
    <div className="list-Todo mt-5 h-[200px] custom-scroll overflow-auto border border-white rounded-md ">
            <h5 className='text-center mb-3 mt-3 text-xl'>TODO LIST</h5>

            <ul className='px-10 '>
                {listTodo !== 0 ? (
                    listTodo.map((item, key) => (
                    <li 
                    className='p-2 border bg-blue-500 mb-2 text-black  '
                    key={key}>{item.description}
                    </li>
                    ))
                ) : 
                (<h3>No List</h3>)}
                
            </ul>
            
          </div>
  )
}

export default ListTodo