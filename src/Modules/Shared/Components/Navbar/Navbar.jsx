


export default function Navbar({loginData}) {




  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary rounded-3 m-3">
        <div className="container-fluid">


          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"><span className="navbar-toggler-icon" /></button>


          <div className="collapse navbar-collapse" id="navbarSupportedContent">

            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 pe-5">
              <li className="nav-item"> <a className="nav-link active" aria-current="page" href="#">{loginData?.userName}</a></li>
            </ul>


            {/* <form className="d-flex" role="search">
              <span className="d-flex">
                <i className="fa-solid fa-magnifying-glass"></i>
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              </span>
              
            </form> */}

          </div>


        </div>
      </nav>
    </>
  );
}
