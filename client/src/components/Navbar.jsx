export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Code Sense Analyzer</h1>
        <div className="space-x-4">
          <a href="#" className="hover:text-gray-200">Home</a>
          <a href="#" className="hover:text-gray-200">Docs</a>
          <a href="#" className="hover:text-gray-200">About</a>
        </div>
      </div>
    </nav>
  );
}
