import Link from "next/link";

export function NavigationBar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" href="#">
                    <img src="https://marketplace.canva.com/EAFaFUz4aKo/2/0/1600w/canva-yellow-abstract-cooking-fire-free-logo-JmYWTjUsE-Q.jpg" width={50}></img>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse flex-row-reverse" id="navbarNav">
                        <ul className="navbar-nav mb-2 mb-lg-0">
                            <li className="nav-item mx-3">
                                <Link className="nav-link active" aria-current="page" href="/">Home</Link>
                            </li>
                            <li className="nav-item mx-3">
                                <Link className="nav-link" href="/about">About</Link>
                            </li>
                            <li className="nav-item mx-3">
                                <Link className="nav-link" href="/service">Service</Link>
                            </li>
                            <li className="nav-item mx-3">
                                <Link className="nav-link" href="/contact">Contact</Link>
                            </li>

                            <button className="btn btn-outline-success mx-2" type="button">SignUp</button>
                            <button className="btn btn-outline-primary mx-2" type="button">SignIn</button>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}