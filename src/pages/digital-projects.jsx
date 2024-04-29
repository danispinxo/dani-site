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
        </ul>
      </main>
    </>
  );
};

export default DigitalProjects;
