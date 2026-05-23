import { useState } from 'react'
import { motion } from 'framer-motion'

function Gallery() {
  const [images, setImages] = useState(() => JSON.parse(localStorage.getItem('inkuai-gallery') || '[]'))
  const [active, setActive] = useState(null)
  
  const handleDelete = (id) => {
    const updated = images.filter((img) => img.id !== id)
    setImages(updated)
    localStorage.setItem('inkuai-gallery', JSON.stringify(updated))
    if (active && !updated.some((img) => img.src === active)) {
      setActive(null)
    }
  }

  return (
    <div className="section-wrap space-y-7">
      <section className="surface p-6 sm:p-8 lg:p-10">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">Gallery</h1>
        <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
          Collection of generated colorized images.
        </p>
      </section>

      {images.length === 0 ? (
        <div className="surface p-10 text-center text-slate-500 dark:text-slate-400">No images yet.</div>
      ) : (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ y: -3, scale: 1.02 }}
              className="relative group surface overflow-hidden p-2 transition hover:scale-[1.02]"
            >
              <button
                onClick={() => handleDelete(item.id)}
                className="absolute top-2 right-2 z-10 bg-red-500/90 hover:bg-red-600 text-white rounded-full px-2 py-1 text-xs opacity-0 group-hover:opacity-100 transition"
              >
                ✕
              </button>
              <button onClick={() => setActive(item.src)} className="w-full">
                <img
                  src={item.src}
                  alt="Gallery item"
                  className="w-full max-h-[500px] object-contain rounded-xl shadow-md transition hover:shadow-lg"
                />
              </button>
            </motion.div>
          ))}
        </div>
      )}

      {active && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4"
          onClick={() => setActive(null)}
        >
          <div className="surface max-h-[90vh] w-full max-w-3xl p-4 sm:p-5" onClick={(e) => e.stopPropagation()}>
            <img src={active} alt="Large preview" className="max-h-[75vh] w-full rounded-xl object-contain" />
            <div className="mt-4 flex justify-end">
              <a
                href={active}
                download="inkuai-gallery-image.png"
                className="inline-flex items-center justify-center rounded-xl bg-emerald-600 px-4 py-2 text-sm font-medium text-white transition duration-200 hover:scale-[1.02] hover:bg-emerald-500"
              >
                Download
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Gallery

