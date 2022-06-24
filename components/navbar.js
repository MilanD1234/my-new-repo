import Link from "next/link";
const navbar = () => {
  return (
    <>
      <nav className="menu-container">
        <ul className="menu-bar">
          <div className="menu">
            <Link href="/">Home</Link>
            <Link href="/about">About Us</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/contact">Contact us</Link>
          </div>
        </ul>
      </nav>
    </>
  );
};
export default navbar;
