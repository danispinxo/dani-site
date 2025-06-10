import TopNavbar from "../components/Navbar";
import Link from "next/link";

const DigitalProjects = () => {
  return (
    <>
      <TopNavbar />
      <main className="page-content">
        <h1 className="title">Digital Writing</h1>
        <ul className="bullet-list">
          <li className="list-item">
            <Link href="/when">When</Link>
          </li>
          <li className="list-item">
            <Link href="/form">Form</Link>
          </li>
          <li className="list-item">
            <Link href="/all-you-hold">All You Hold</Link>
          </li>
          <li className="list-item">
            <Link href="/swift-sonnets">The Swift Sonnets</Link>
          </li>
        </ul>
      </main>
    </>
  );
};

export default DigitalProjects;
