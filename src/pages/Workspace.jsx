import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import UploadBox from "../components/UploadBox";
import Loader from "../components/Loader";
import { colorizeImage } from "../services/api";

function Workspace() {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Generate preview URL
  useEffect(() => {
    if (!file) {
      setPreview("");
      return;
    }

    const objectUrl = URL.createObjectURL(file);
    setPreview(objectUrl);

    return () => URL.revokeObjectURL(objectUrl);
  }, [file]);

  const canSubmit = useMemo(() => Boolean(file) && !loading, [file, loading]);

  // Handle colorization
  const handleColorize = async () => {
    if (!file) return;

    try {
      setLoading(true);
      setError("");

      const output = await colorizeImage(file);

      if (!output) throw new Error("No output received");

      setResult(output);

      // Save to local gallery
      const current = JSON.parse(localStorage.getItem("inkuai-gallery") || "[]");

      localStorage.setItem(
        "inkuai-gallery",
        JSON.stringify(
          [{ id: Date.now(), src: output }, ...current].slice(0, 18)
        )
      );
    } catch (err) {
      console.error(err);
      setError(
        err?.response?.data?.message ||
        err?.message ||
        "Failed to process image. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = async () => {
    try {
      const response = await fetch(result);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = url;
      link.download = "inkuai-colorized.png";

      document.body.appendChild(link);
      link.click();
      link.remove();

      window.URL.revokeObjectURL(url);
    } catch (err) {
      console.error("Download failed", err);
    }
  };

  // Reset workspace
  const resetWorkspace = () => {
    setFile(null);
    setPreview("");
    setResult("");
    setError("");
  };

  return (
    <div className="section-wrap space-y-7">
      {/* Upload Section */}
      <section className="surface p-6 sm:p-8 lg:p-10">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
          Workspace
        </h1>

        <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
          Upload a black and white anime image and generate a colorized version.
        </p>

        <div className="mt-7 space-y-5">
          <UploadBox onFileSelect={setFile} />

          {/* Preview */}
          {preview && (
            <img
              src={preview}
              alt="Uploaded preview"
              className="w-full max-h-[500px] object-contain rounded-xl shadow-md hover:shadow-lg"
            />
          )}

          {/* Loader */}
          {loading && <Loader />}

          {/* Error */}
          {error && (
            <p className="text-sm font-medium text-red-500">{error}</p>
          )}

          {/* Buttons */}
          <div className="flex flex-wrap gap-3">
            <button
              onClick={handleColorize}
              disabled={!canSubmit}
              className="btn-primary disabled:cursor-not-allowed disabled:opacity-50"
            >
              {loading ? "Processing..." : "Colorize"}
            </button>

            <button
              onClick={resetWorkspace}
              className="btn-secondary"
            >
              Reset
            </button>
          </div>
        </div>
      </section>

      {/* Result Section */}
      {result && preview && (
        <motion.section
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="surface space-y-5 p-6 sm:p-8"
        >
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
            Result
          </h2>

          {/* Final Image */}
          <img
            src={result}
            alt="Colorized output"
            className="w-full max-h-[500px] object-contain rounded-xl shadow-md"
          />

          {/* Download */}
          <button
            onClick={handleDownload}
            className="inline-flex items-center justify-center rounded-xl bg-emerald-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-emerald-500"
          >
            Download Result
          </button>
        </motion.section>
      )}
    </div>
  );
}

export default Workspace;