import TopNavbar from '../components/Navbar';

const DigitalProjects = () => {
  return (
    <>
      <TopNavbar />
      <main className="page-content">
        <h1 className="title">Digital Writing</h1>
        <ul className="bullet-list">
          <li className="list-item">
            <a href="/when">When</a>
          </li>
          <li className="list-item">
            <a href="/form">Form</a>
          </li>
          <li className="list-item">
            <a href="/all-you-hold">All You Hold</a>
          </li>
          <li className="list-item">
            <a href="/swift-sonnets">The Swift Sonnets</a>
          </li>
        </ul>
      </main>
    </>
  );
};

export default DigitalProjects;
