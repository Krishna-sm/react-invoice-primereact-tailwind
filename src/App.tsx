import React, { useState } from 'react'
import Model from './components/Model'

const App = () => {
  const [isShow,setIsShow] = useState(false)

  return (
    <>
      <div className="flex w-full items-center justify-center min-h-screen flex-col">

            <button onClick={()=>setIsShow(!isShow)} className="px-6 py-2 bg-teal-500 text-white rounded-md shadow-md">
              {!isShow?`Open`:'Close'}
            </button>

        <Model isShow={isShow} setIsShow={setIsShow} />
            
            </div>
    </>
  )
}

export default App