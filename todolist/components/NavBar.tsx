import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="bg-slate-900 text-white shadow-md">
      <div className="mx-auto max-w-6xl flex items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="text-2xl font-bold tracking-wide text-cyan-400 hover:text-cyan-300 transition"
        >
          TodoApp
        </Link>

    
        <div className="flex items-center gap-6">
          <Link
            href="/"
            className="text-gray-300 hover:text-cyan-400 transition font-medium"
          >
            Home
          </Link>

          <Link
            href="/completed"
            className="text-gray-300 hover:text-green-400 transition font-medium"
          >
            ✅ Completed
          </Link>

          <Link
            href="/uncompleted"
            className="text-gray-300 hover:text-yellow-400 transition font-medium"
          >
            ⏳ Uncompleted
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
