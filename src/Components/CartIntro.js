import classes from "./CartIntro.module.css";

import img from "../images/CartBackground1.jpg";
import img1 from "../images/cartBackground.jpg";
import img2 from "../images/cartimage.jpg";
import img3 from "../images/cartimage1.jpg"
import img4 from "../images/cartimage2.jpg"

const CartIntro = () => {
    return <div className={classes.cart_intro}>
        <div className={`container ${classes.cart_sect}`}>
            <div className={classes.cart__text}>
                <h1>hillsStores</h1>
                {/* <p>...your fashion, our topmost priority</p> */}
                <p className={classes.intro__text}>At hillsStores, we pride ourselves with
                                quality services and excellent customer service. Your fashion is our topmost priority! </p>
            </div>
            <div className={classes.img_container}>
                <img src={img4} className={classes.intro_img} alt="intro-img" />
            </div>
        </div>
    </div>
    // return <div id="carouselExampleIndicators" className="carousel slide">
    //         <div className="carousel-indicators">
    //         <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    //         <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    //         <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    //         <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
    //         <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
    //         </div>
    //         <div className="carousel-inner">
    //         <div className={`carousel-item active ${classes.img_container}`}>
    //             <img src={img} className="d-block w-100" alt="..." />
    //         </div>
    //         <div className={`carousel-item ${classes.img_container}`}>
    //             <img src={img1} className="d-block w-100" alt="..." />
    //         </div>
    //         <div className={`carousel-item ${classes.img_container}`}>
    //             <img src={img2} className="d-block w-100" alt="..." />
    //         </div>
    //         <div className={`carousel-item ${classes.img_container}`}>
    //             <img src={img3} className="d-block w-100" alt="..." />
    //         </div>
    //         <div className={`carousel-item ${classes.img_container}`}>
    //             <img src={img4} className="d-block w-100" alt="..." />
    //         </div>
    //         </div>
    //         <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    //         <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    //         <span className="visually-hidden">Previous</span>
    //         </button>
    //         <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    //         <span className="carousel-control-next-icon" aria-hidden="true"></span>
    //         <span className="visually-hidden">Next</span>
    //         </button>
    // </div>
}

export default CartIntro;