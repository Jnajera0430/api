import React from 'react'
import {Link} from 'react-router-dom'
function Heading() {
  return (
    <div>
        <div className="flex item-center mb-10">
            <Link to='/' >
                <h5 className="text-gray-100">Task app</h5>
            </Link>
        </div>
        <div className="flex-grow text-right px-4 py-2 m-2">
            <Link to='/add'>
                <button type='rteloaded' className="bg-green-400 hover:bg-green-500 text-white font-semibold py-2 px-4 rounded inline-flex items-center">
                    Add employee
                </button>
            </Link>
            
        </div>
    </div>
  )
}

export default Heading