function About() {
  return (
    <div className="section-wrap space-y-7">
      <section className="surface p-6 sm:p-8 lg:p-10">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">About InkUAi</h1>
        <p className="mt-3 text-slate-600 dark:text-slate-300">
          InkUAi is a web application designed to transform monochrome anime sketches into full-color images with a fast and intuitive workflow.
        </p>
      </section>

      <section className="surface p-6 sm:p-8 lg:p-10">
        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">How It Works</h2>
        <ol className="mt-3 list-decimal space-y-2 pl-5 text-slate-600 dark:text-slate-300">
          <li>User uploads a black and white image in the workspace.</li>
          <li>The frontend sends image data to the backend using multipart form data.</li>
          <li>The backend returns a colorized image URL or Base64 payload.</li>
          <li>The interface renders output, comparison, and download controls.</li>
        </ol>
      </section>

      <section className="grid gap-4 sm:grid-cols-2">
        <div className="surface p-6">
          <h3 className="font-semibold text-slate-900 dark:text-white">Team Members</h3>
          <p className="mt-2 text-slate-600 dark:text-slate-300">Vyankatesh, Omkumar, Shravani, Prabhu</p>
        </div>
        <div className="surface p-6">
          <h3 className="font-semibold text-slate-900 dark:text-white">Technologies</h3>
          <p className="mt-2 text-slate-600 dark:text-slate-300">React, Vite, Tailwind CSS, Framer Motion, Axios, React Router</p>
        </div>
      </section>
    </div>
  )
}

export default About

