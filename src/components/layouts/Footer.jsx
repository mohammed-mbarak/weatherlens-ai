import { Link } from "react-router-dom";

function Footer() {
  const links = [
    { to: "/", label: "Home" },
    { to: "/forecast", label: "Forecast" },
    { to: "/insights", label: "Insights" },
    { to: "/usage", label: "Usage" },
  ];

  const year = new Date().getFullYear();
  const copyright = `© ${year} WeatherLens`;
  const poweredBy = "Powered by Weather-AI · Built with React and Tailwind CSS";

  return (
    <footer className="bg-slate-900 mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-sky-500 flex items-center justify-center">
              <span className="text-white text-xs font-bold">W</span>
            </div>
            <span className="font-semibold text-white text-sm">
              WeatherLens
            </span>
          </div>

          <div className="flex items-center gap-5">
            {links.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className="text-sm text-slate-400 hover:text-white transition-colors duration-150"
              >
                {label}
              </Link>
            ))}
          </div>

          <p className="text-sm text-slate-400">{copyright}</p>

        </div>

        <div className="mt-6 pt-5 border-t border-slate-700 text-center">
          <p className="text-xs text-slate-500">{poweredBy}</p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;