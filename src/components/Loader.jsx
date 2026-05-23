function Loader({ text = 'Processing image...' }) {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-violet-400/30 bg-violet-500/10 px-4 py-3 text-sm text-violet-200">
      <span className="h-5 w-5 animate-spin rounded-full border-2 border-violet-300 border-t-transparent" />
      <span>{text}</span>
    </div>
  )
}

export default Loader

