import React from 'react'

function Banner() {
  return (
    <div>
         <section className=" bg-blue-200 py-16 px-4 md:px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        {/* Text Section */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
            THE MOST EFFICIENT WAY <br /> TO LEARN A LANGUAGE
          </h1>
          <p className="text-gray-600 text-lg mb-8">
            Talkpal is a GPT-powered AI language teacher. Boost your speaking, listening,
            writing, and pronunciation skills – Learn 5x Faster!
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 transition duration-300 text-white font-semibold px-8 py-3 rounded-xl shadow-md">
            Get started
          </button>
        </div>

        {/* Image Section */}
        <div className="flex justify-center md:justify-end">
          <img
            src='https://i.ibb.co/7tJ2T58L/flags-spain-france-great-britain-other-countries-blackboard-with-text-you-speak-books-656538-2678.jpg'
            alt="Language Learning App"
            className="max-w-full h-auto rounded-xl"
          />
        </div>
      </div>
    </section>
    </div>
  )
}

export default Banner