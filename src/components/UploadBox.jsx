import { motion } from 'framer-motion'

function UploadBox({ onFileSelect }) {
  const onDrop = (event) => {
    event.preventDefault()
    const file = event.dataTransfer.files?.[0]
    if (file) onFileSelect(file)
  }

  const onFileChange = (event) => {
    const file = event.target.files?.[0]
    if (file) onFileSelect(file)
  }

  return (
    <motion.label
      whileHover={{ scale: 1.012 }}
      whileTap={{ scale: 0.995 }}
      onDrop={onDrop}
      onDragOver={(e) => e.preventDefault()}
      className="surface block cursor-pointer border border-dashed border-slate-300/80 p-9 text-center transition duration-200 hover:border-violet-400 dark:border-white/15 dark:hover:border-violet-500"
    >
      <input type="file" accept="image/*" className="hidden" onChange={onFileChange} />
      <p className="text-lg font-semibold text-slate-800 dark:text-slate-100">Drag and drop image</p>
      <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">or click to browse files</p>
    </motion.label>
  )
}

export default UploadBox

