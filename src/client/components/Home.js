import React from 'react'

const Home = () => {
  return (
    <div>
      <div>I'm the Home Component !!!!</div>
      <button onClick={() => console.log('Hi There')}>Click Me</button>
      <input type="text" />
    </div>
  )
}

export default Home