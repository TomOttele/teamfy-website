export default function Home() {
  return (
    <main className="min-h-screen bg-gray-950 text-white flex items-center justify-center px-4">
      <div className="text-center space-y-6">
        <h1 className="text-5xl font-extrabold tracking-tight">
          Tom is <span className="text-green-500">live</span>
        </h1>

        <button className="bg-green-500 hover:bg-green-600 text-black font-semibold py-3 px-6 rounded-xl transition duration-200">
          🚀 Get Started
        </button>
      </div>
    </main>
  );
}
