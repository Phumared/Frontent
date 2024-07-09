import Image from "next/image";
import styles from "./page.module.css";
import { NavigationBar } from "./componnent/nav";

export default function Home() {
  return (
    <>
      <NavigationBar></NavigationBar>
      <div className="mt-4">
        <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img style={{ width: '400px', height: '500px', objectFit: 'cover' }} src="https://img.freepik.com/premium-photo/high-angle-view-food-table_1048944-8058939.jpg?w=826" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item ">
              <img style={{ width: '400px', height: '500px', objectFit: 'cover' }} src="https://img.freepik.com/premium-photo/varieties-malaysian-local-signature-delight-delicacies_1048944-3894728.jpg?w=1380" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item ">
              <img style={{ width: '400px', height: '500px', objectFit: 'cover' }} src="https://as1.ftcdn.net/v2/jpg/02/52/38/80/1000_F_252388016_KjPnB9vglSCuUJAumCDNbmMzGdzPAucK.jpg" className="d-block w-100" alt="..." />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row mt-4">
          <div className="col-md-4">
            <div className="card">
              <img className="card-img-top" src="https://img.freepik.com/premium-photo/som-tam-chicken-grilled-rice_45583-76.jpg?w=1380" alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">Som tam and chicken grilled rice.</h5>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img className="card-img-top" src="https://img.freepik.com/free-photo/pad-thai-fresh-shrimp-white-plate_1150-22354.jpg?t=st=1720501474~exp=1720505074~hmac=a099ebc395ee3d3e78b19129f91dbd2d8bd3095048bfba642ae90f41cb4ee1cf&w=1380" alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">Pad Thai fresh shrimp in a white plate.</h5>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img className="card-img-top" src="https://img.freepik.com/free-photo/spicy-minced-pork-salad-white-plate-wooden-table_1150-21449.jpg?t=st=1720501346~exp=1720504946~hmac=f536b5510a4588397f74796bd382b61ec4ca4669c89895fad3f5200f1f9ae1e4&w=1380" alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">Spicy Minced Pork Salad on a white plate on wooden table.</h5>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="text-center text-white mt-5 flex-grow-1" style={{ backgroundColor: '#0a4275' }}>
        <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
          © 2024 Copyright:
          <a className="text-white" href="https://github.com/Phumared"> Poomared</a>
        </div>
      </footer>

    </>

  );
}
