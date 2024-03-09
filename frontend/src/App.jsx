import React from 'react'
import Nav from './components/Nav'

const App = () => {
  return (
    <div>
      <Nav />
      
      <div className='flex justify-center'>

        <div className="card w-96 bg-neutral  text-neutral-content">
          <div className="card-body items-center text-center">
            <h2 className="card-title">Cookies!</h2>
            <p>We are using cookies for no reason.</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Favorite</button>

            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default App
