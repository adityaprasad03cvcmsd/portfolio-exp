import "../App.css";
import Project1 from "../images/faasos.png";
import Project2 from "../images/healthmug.png";
import Project4 from "../images/news.png";
import Project3 from "../images/recipe.png";
import Project5 from "../images/weather.png";
import "./Project.css";

function Project() {
  return (
    <div className="project component__space" id="Project">
      <div className="heading">
        <h1 className="heading projectText">PROJECTS</h1>
        <p className="heading p__color">
          These contain both colaborative and solo projects as well.
        </p>
      </div>
      <div className="container">
        <div className="row">
          <div className="col__3 border">
            <div className="project__box pointer relative">
              <h4 className="project__text">Faasos Clone</h4>
              <h5 className="project__text">
                Faasos is an Indian "food on demand" service app. it an
                E-commerce type website for snacks. features included are:
                Product details, respective product pages, search for products,
                signup , login, current location, sorting and filtering..
              </h5>
              <h5 className="project__text">
                Tech stack: mongoDB, ExpressJS, HTML, CSS, JavaScript
              </h5>
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img src={Project1} alt="" className="project__img" />
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="project__meta absolute">
                <a
                  href="https://github.com/gopimudumal99/faasos-masai-clone"
                  target={"_blank"}
                  rel="noreferrer"
                  className="project__btn"
                >
                  View Details
                </a>
                <a
                  href="https://faasos-masai-clone.herokuapp.com/"
                  target={"_blank"}
                  rel="noreferrer"
                  className="project__btn"
                >
                  Deployed
                </a>
              </div>
            </div>
          </div>

          <div className="col__3 border">
            <div className="project__box pointer relative">
              <h4 className="project__text">HealthMug Clone</h4>
              <h5 className="project__text">
                An E-commerce website for medicens and medical equipments.
                Website with features included searching products, sorting
                products, filtering products, products details of the several
                products in sections: unani, personal care, nutrition,
                homeopathy, ayurveda, allopathy, respective products page.
              </h5>
              <h5 className="project__text">
                Tech stack: HTML, CSS, JavaScript
              </h5>
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img src={Project2} alt="" className="project__img" />
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="project__meta absolute">
                <a
                  href="https://github.com/Akshay-Kumar2000/HealthMug-Clone"
                  target={"_blank"}
                  rel="noreferrer"
                  className="project__btn"
                >
                  View Details
                </a>
                <a
                  href="https://healthmug.vercel.app/"
                  target={"_blank"}
                  rel="noreferrer"
                  className="project__btn"
                >
                  Deployed
                </a>
              </div>
            </div>
          </div>

          <div className="col__3 border">
            <div className="project__box pointer relative">
              <h4 className="project__text">Food Recipe</h4>
              <h5 className="project__text">
                Food recipes of dishes of several cuisines. Features included:
                searching for food based on name and ingredient, debouncing
              </h5>
              <h5 className="project__text">
                Tech stack: HTML, CSS, JavaScript
              </h5>
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img src={Project3} alt="" className="project__img" />
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="project__meta absolute">
                <a
                  href="https://github.com/adityaprasad03cvcmsd/food-recipe-app.git"
                  className="project__btn"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  View Details
                </a>
                <a
                  href="https://foodrecipemasaiadityaprasad.netlify.app/"
                  className="project__btn"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  Deployed
                </a>
              </div>
            </div>
          </div>

          <div className="col__3 border">
            <div className="project__box pointer relative">
              <h4 className="project__text">News App</h4>
              <h5 className="project__text">
                Geting the latest news and of any desired topic. Features
                included: searching for news based on name, region or date and
                debouncing.
              </h5>
              <h5 className="project__text">
                Tech stack: HTML, CSS, JavaScript
              </h5>
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img src={Project4} alt="" className="project__img" />
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="project__meta absolute">
                <a
                  href="https://github.com/adityaprasad03cvcmsd/news-app"
                  className="project__btn"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  View Details
                </a>
                <a
                  href="https://priceless-fermi-f19d8e.netlify.app/"
                  className="project__btn"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  Deployed
                </a>
              </div>
            </div>
          </div>

          <div className="col__3 border">
            <div className="project__box pointer relative">
              <h4 className="project__text">Weather App</h4>
              <h5 className="project__text">
                Weather forecast of any place or region. Feature included:
                search region based on name
              </h5>
              <h5 className="project__text">
                Tech stack: HTML, CSS, JavaScript
              </h5>
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img src={Project5} alt="" className="project__img" />
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="project__meta absolute">
                <a
                  href="https://github.com/adityaprasad03cvcmsd/Weather-forceasting-app"
                  className="project__btn"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  View Details
                </a>
                <a
                  href="https://weathermasai.netlify.app/"
                  className="project__btn"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  Deployed
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
