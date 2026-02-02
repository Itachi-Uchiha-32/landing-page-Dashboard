import React from 'react'

export default function Youtube() {
  return (
    <section className='flex item-center justify-center bg-white py-8'>
        <div className="w-full max-w-4xl aspect-video rounded-2xl md:rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] border-4 md:border-8 border-white">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/uFjU5zFJx3E?si=RT7Xn3jWMWMTSNxK" 
            title="Product Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
    </div>
    </section>
  )
}
