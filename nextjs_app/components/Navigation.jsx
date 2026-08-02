import Link from "next/link";

const Navigation = () => {
  return (
    <div className="flex flex-col items-center gap-4 p-6 font-work-sans">
      <h2>Navigations</h2>

      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/about/teams">About Teams</Link>
          </li>
          <li>
            <Link href="/service">Service</Link>
          </li>
          <li>
            <Link href="/clientcomp">Client Component</Link>
          </li>
          <li>
            <Link href="/servercomp">Server Component</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
