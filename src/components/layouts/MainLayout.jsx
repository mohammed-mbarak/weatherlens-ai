import Navbar from "./Navbar";
import Footer from "./Footer";

function MainLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Navbar />

      <main className="flex-1 container mx-auto p-4">
        {children}
      </main>

      <Footer />
    </div>
  );
}

export default MainLayout;