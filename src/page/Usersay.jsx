import React from 'react'

function Usersay() {
  return (
    <div>
        <div className="bg-gray-500 py-16 px-6     max-w-5xl rounded-xl my-[10px] mx-auto rounded-b-2xl" >
  <div className="max-w-6xl mx-auto text-center">
    {/* Header   */}
    <h1 className="text-4xl font-bold  hover:text-green-100 duration-200 ">LISTEN TO WHAT THEY SAY</h1>
    <p className="text-xl text-gray-800 mb-12 hover:text-green-100 duration-200">
      Inspiring, award-winning design meets modern, mobile-first service. Welcome to the future of hospitality.
    </p>

    {/*   Grid */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
      {/*   1 */}
      <div className="bg-gray-200 p-6 rounded-lg shadow-sm hover:-translate-y-3.5 transition-all duration-200 hover:shadow-md   hover:bg-green-100  ">
        <div className="text-left mb-4">
          <span className="text-sm font-semibold text-gray-500">VIA TRIPADVISOR</span>
          <p className="text-xs text-gray-400">New York, USA</p>
        </div>
        <h3 className="text-lg font-bold text-gray-800 mb-3">Great experiences</h3>
        <p className="text-gray-600">
          I had a wonderful stay and was blown away by the thoughtful design and functionality of the apartment. Can't wait to check out other Sonders in the future.
        </p>
      </div>

      {/*   2 */}
      <div className="bg-gray-200 p-6 rounded-lg shadow-sm hover:-translate-y-3.5 transition-all duration-200 hover:shadow-md hover:bg-green-100">
        <div className="text-left mb-4">
          <span className="text-sm font-semibold text-gray-500">VIA TRIPADVISOR</span>
          <p className="text-xs text-gray-400">New York, USA</p>
        </div>
        <h3 className="text-lg font-bold text-gray-800 mb-3">Great experiences</h3>
        <p className="text-gray-600">
          I had a wonderful stay and was blown away by the thoughtful design and functionality of the apartment. Can't wait to check out other Sonders in the future.
        </p>
      </div>

      {/*   3 */}
      <div className="bg-gray-200 p-6 rounded-lg shadow-sm hover:-translate-y-3.5 transition-all duration-200 hover:shadow-md hover:bg-green-100">
        <div className="text-left mb-4">
          <span className="text-sm font-semibold text-gray-500">VIA TRIPADVISOR</span>
          <p className="text-xs text-gray-400">New York, USA</p>
        </div>
        <h3 className="text-lg font-bold text-gray-800 mb-3">Great experiences</h3>
        <p className="text-gray-600">
          I had a wonderful stay and was blown away by the thoughtful design and functionality of the apartment. Can't wait to check out other Sonders in the future.
        </p>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Usersay