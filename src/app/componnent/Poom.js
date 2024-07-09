import Link from "next/link";

export function NavigationBar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" href="/">
                        <img src="./images/logo.png" style={{width: "20%"}}></img>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                      <div className="collapse navbar-collapse flex-row-reverse" id="navbarNav">
                        <ul className="navbar-nav mb-2 mb-lg-0" style={{fontSize:"25px"}}>
                            <li className="nav-item mx-3">
                                <Link className="nav-link" aria-current="page" href="/"><i className="bi bi-house-add-fill p-2"></i>Home</Link>
                            </li>
                            <li className="nav-item mx-3">
                                <Link className="nav-link" href="/about"><i className="bi bi-file-person-fill p-2"></i>About</Link>
                            </li>
                            <li className="nav-item mx-3">
                                <Link className="nav-link" href="/service"><i className="bi bi-backpack2-fill p-2"></i>Service</Link>
                            </li>
                            <li className="nav-item mx-3">
                                <Link className="nav-link" href="/contact"><i className="bi bi-telephone-fill p-2"></i>Contact</Link>
                            </li>

                            <button className="btn btn-outline-success mx-1 my-1" type="button">SignUp</button>
                            <button className="btn btn-outline-primary mx-1 my-1" type="button">SignIn</button>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}