import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const features = [
  {
    icon: '✦',
    title: 'High Fidelity Output',
    desc: 'Preserves line details while adding balanced and natural colors.',
  },
  {
    icon: '⚡',
    title: 'Fast Processing',
    desc: 'Optimized workflow for rapid image turnaround in a few seconds.',
  },
  {
    icon: '◉',
    title: 'Simple Workflow',
    desc: 'Upload, colorize, compare, and download in one seamless interface.',
  },
  {
    icon: '⬇',
    title: 'Instant Download',
    desc: 'Export generated images in a clean, ready-to-use format.',
  },
]

function Home() {
  return (
    <div className="section-wrap space-y-10 pb-2">
      <section className="surface relative overflow-hidden p-6 sm:p-10 lg:p-12">
        <div className="absolute -left-14 top-16 h-52 w-52 rounded-full bg-violet-500/15 blur-3xl" />
        <div className="absolute -right-14 bottom-8 h-52 w-52 rounded-full bg-cyan-500/10 blur-3xl" />

        <div className="relative">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-left"
          >
            <p className="mb-3 text-xs uppercase tracking-[0.18em] text-violet-300">InkUAi - Anime Colorizer</p>
            <h1 className="text-4xl font-bold leading-tight text-slate-900 sm:text-5xl lg:text-6xl dark:text-white">
              Transform Sketches into Color
            </h1>
            <p className="mt-4 max-w-xl text-base text-slate-600 sm:text-lg dark:text-slate-300">
              Turn monochrome anime art into polished colorized visuals through a clean and fast production-ready workspace.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link to="/workspace" className="btn-primary">
                Start Now
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <motion.section
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.35 }}
      >
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              whileHover={{ y: -5, scale: 1.01 }}
              className="surface p-6 text-left"
            >
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 text-violet-300">
                {feature.icon}
              </span>
              <h3 className="mt-4 text-base font-semibold text-slate-900 dark:text-white">{feature.title}</h3>
              <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        className="surface p-6 sm:p-8"
      >
        <h2 className="text-center text-2xl font-bold text-slate-900 dark:text-white">How It Works</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {[
            { title: 'Upload', text: 'Select your black and white anime sketch.' },
            { title: 'Process', text: 'Run colorization through the workspace.' },
            { title: 'Download', text: 'Compare and export your final result.' },
          ].map((step, idx) => (
            <div key={step.title} className="rounded-xl border border-slate-200/70 bg-white/40 p-5 text-center dark:border-white/10 dark:bg-white/5">
              <div className="mx-auto mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-violet-500/20 text-sm font-semibold text-violet-300">
                {idx + 1}
              </div>
              <h3 className="text-base font-semibold text-slate-900 dark:text-white">{step.title}</h3>
              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{step.text}</p>
            </div>
          ))}
        </div>
      </motion.section>

      <section className="surface p-8 text-center sm:p-10">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Ready to try it?</h2>
        <p className="mx-auto mt-2 max-w-xl text-sm text-slate-500 dark:text-slate-400">
          Open the workspace and transform your next anime sketch in a few clicks.
        </p>
        <Link to="/workspace" className="btn-primary mt-6">
          Go to Workspace
        </Link>
      </section>
    </div>
  )
}

export default Home

