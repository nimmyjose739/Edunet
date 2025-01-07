export default function Header(){
    return(
      <div>
        <header>
            <nav className="navbar navbar-expand-lg navbar-light py-3">
              <div className="container">
                {/* Logo Section */}
                <a className="navbar-brand" href="/">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_Bélo.svg"
                    alt="Airbnb Logo"
                    height="30" />
                </a>

                <div className="d-flex m-3">
                  <div className="nav-link me-3">Stays</div>
                  <div className="nav-link me-3">Experience</div>
                </div>

                {/* Links Section */}
                <div className="d-flex p-3 border border-secondary rounded">
                  <a className="nav-link me-3" href="/login">
                    Login
                  </a>
                  <a className="nav-link" href="/register">
                    Register
                  </a>
                </div>
              </div>
            </nav>
          </header>
        </div>
    );
}