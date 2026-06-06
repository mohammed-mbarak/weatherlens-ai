function Loader({ size = "md", fullScreen = false, text = "" }) {
  const sizeClass =
    size === "sm"
      ? "h-5 w-5 border-2"
      : size === "lg"
      ? "h-12 w-12 border-4"
      : "h-8 w-8 border-3";

  const content = (
    <div className="flex flex-col items-center gap-3">
      <div className="relative flex items-center justify-center">
        <div
          className={`${sizeClass} animate-spin border-slate-700 border-t-sky-500 rounded-full`}
        />
        <div className="absolute text-sky-500 text-lg">🌤</div>
      </div>
      {text && (
        <p className="text-sm text-slate-400 tracking-wide">{text}</p>
      )}
    </div>
  );

  if (fullScreen) {
    return (
      <div className="flex justify-center items-center h-screen w-full bg-slate-950">
        {content}
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center py-10 w-full">
      {content}
    </div>
  );
}

export default Loader;