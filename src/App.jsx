import React from 'react';
import FormTodo from './FormTodo';
import ListTodo from './ListTodo';

const App = () => {

  const [showFormTodo, setShowFormTodo] = React.useState(false);
  const [listTodo, setListTodo] = React.useState([]);


  return (
    <>
      <section className="min-h-screen bg-gray-500 flex justify-center items-center text-white">
        <div className="max-w-[500px] w-full bg-black rounded-md p-4 ">

          <FormTodo
          setShowFormTodo={setShowFormTodo}
          setListTodo={setListTodo}
          listTodo={listTodo}/>
          <ListTodo listTodo={listTodo}/>

        </div>
      </section>
    </>
  )
}

export default App