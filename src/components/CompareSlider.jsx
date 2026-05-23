import { useState } from 'react'

function CompareSlider({ beforeSrc, afterSrc }) {
  const [position, setPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)

  const updatePosition = (event) => {
    const container = event.currentTarget.getBoundingClientRect()
    const offsetX = event.clientX - container.left
    const nextPosition = (offsetX / container.width) * 100
    setPosition(Math.min(100, Math.max(0, nextPosition)))
  }

  return (
    <div className="surface overflow-hidden p-4 sm:p-5">
      <div
        className="relative mx-auto w-full select-none overflow-hidden rounded-xl border border-white/10 touch-none"
        onPointerDown={(event) => {
          event.currentTarget.setPointerCapture(event.pointerId)
          setIsDragging(true)
          updatePosition(event)
        }}
        onPointerMove={(event) => {
          if (isDragging) updatePosition(event)
        }}
        onPointerUp={(event) => {
          event.currentTarget.releasePointerCapture(event.pointerId)
          setIsDragging(false)
        }}
        onPointerLeave={() => setIsDragging(false)}
      >
        <img
          src={afterSrc}
          alt="Colorized"
          className="w-full max-h-[500px] object-contain rounded-xl"
          draggable={false}
        />
        <div className="absolute inset-y-0 left-0 overflow-hidden" style={{ width: `${position}%` }}>
          <img
            src={beforeSrc}
            alt="Original"
            className="w-full max-h-[500px] object-contain rounded-xl"
            draggable={false}
          />
        </div>
        <div className="absolute inset-y-0" style={{ left: `calc(${position}% - 1px)` }}>
          <div className="h-full w-0.5 bg-white/90 shadow" />
          <div className="absolute left-1/2 top-1/2 flex h-8 w-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 bg-black/55 shadow-md">
            <span className="text-[10px] text-white">{'<>'}</span>
          </div>
        </div>
      </div>
      <input
        type="range"
        min="0"
        max="100"
        value={position}
        onChange={(e) => setPosition(Number(e.target.value))}
        className="mt-5 w-full accent-violet-500"
      />
    </div>
  )
}

export default CompareSlider

