import Logo from './resources/Logo.png';
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-transparent">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
        <img src={Logo} alt="Logo" width="150" className="d-inline-block align-text-top" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                <ul class="navbar-nav lexend" style={{fontSize: "15px"}}>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle active" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Services
                        </a>
                        <ul class="dropdown-menu" style={{fontSize: "15px"}}>
                            <li><a class="dropdown-item" href="/">Service 1</a></li>
                            <li><a class="dropdown-item" href="/">Service 2</a></li>
                            <li><a class="dropdown-item" href="/">Service 3</a></li>
                        </ul>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link active" href="/">Products</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link active" href="/">Consultation</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle active" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Learn
                        </a>
                        <ul class="dropdown-menu" style={{fontSize: "15px"}}>
                            <li><a class="dropdown-item" href="/">Resource 1</a></li>
                            <li><a class="dropdown-item" href="/">Resource 2</a></li>
                            <li><a class="dropdown-item" href="/">Resource 3</a></li>
                        </ul>
                    </li>
                </ul>
          </ul>
          <div className="d-flex gap-1 poppins-medium">
                <button className="btn btn-dark" type="submit" style={{ borderRadius: "18px" , fontSize: "14px" }}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" width="18px" fill="#e3e3e3"><path d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z"/></svg>&nbsp; Book a call
                </button>
                <button className="btn btn-primary" type="submit" style={{ borderRadius: "18px" , fontSize: "14px" }}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" width="18px" fill="#e3e3e3"><path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z"/></svg>&nbsp; Products
                </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
