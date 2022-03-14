import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Spinner,
  Card,
  CardBody,
} from "reactstrap";
import { useParams, useHistory } from "react-router-dom";
import { useAnime } from "../../stores/anime";
import LazyLoad from "react-lazyload";

//Import Icons
import FeatherIcon from "feather-icons-react";


const PageDetail = () => {
  const animeStore = useAnime();
  const animeDetail = animeStore.animeDetail
  const params = useParams()
  const [isOpen, setIsOpen] = useState(false)
  const [modal, setModal] = useState(false)
  const [loading, setLoading] = useState(true)
  const history = useHistory();

  useEffect(() => {
    loadData()
    setTimeout(() => {
      document.body.classList = "";
      document.getElementById("top-menu").classList.add("nav-light");
      document.getElementById("buyButton").className = "btn btn-light";
    },0)
    window.scrollTo(0, 0)
    window.addEventListener("scroll", scrollNavigation, true);
    return () => {
      window.removeEventListener("scroll", scrollNavigation, true);
    }
  },[])

  const loadData = async () => {
    await animeStore.getAnimeDetail(params.id)
    setLoading(false)
  }

  const scrollNavigation = () => {
    var doc = document.documentElement;
    var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    if (top > 80) {
      document.getElementById("topnav").classList.add("nav-sticky");
      document.getElementById("buyButton").className = "btn btn-primary";
    } else {
      document.getElementById("topnav").classList.remove("nav-sticky");
      document.getElementById("buyButton").className = "btn btn-light";
    }
  };

  const togglemodal = () => {
    setModal(prevState => !prevState.modal)
  };

  return (
    <React.Fragment>
      {(!loading) ? (
      <section
        className="bg-half-260 d-table w-100"
        style={{ backgroundImage: `url(${animeDetail.bannerImage})`, backgroundSize:'cover !important' }}
      >
        <div className="bg-overlay"></div>
      </section>
      ): (
        <section
          className="bg-half-260 d-table w-100"
        >
          <div className="bg-overlay"></div>
        </section>
      )
      }

      <section className="section">
        <Container>
          <Row>
            
            <Col lg="4" md="5" xs="12">
              <Card className="job-profile shadow border-0">
              {!loading &&
                <div className="text-center py-5 border-bottom rounded-top">
                  <LazyLoad height={261} once>
                  <img
                    src={animeDetail.coverImage}
                    className="mx-auto shadow d-block"
                    style={{width:150}}
                  />
                  </LazyLoad>
                  <h5 className="mt-3 mb-0">{animeDetail.title}</h5>
                  <p className="text-muted mb-0">{animeDetail.type}</p>
                </div>
              }
                <CardBody>
                  <h5 className="card-title">Details :</h5>

                  <ul className="list-unstyled">
                    <li className="h6">
                      <span className="text-muted">Format :</span>{" "}
                      {animeDetail.format}
                    </li>
                    <li className="h6">
                      <span className="text-muted">Episodes :</span>{" "}
                      {animeDetail.episodes}
                    </li>
                    <li className="h6">
                      <span className="text-muted">Episode Duration :</span>{" "}
                      {animeDetail.duration}
                    </li>
                    <li className="h6">
                      <span className="text-muted">Status :</span>{" "}
                      {animeDetail.status}
                    </li>
                    <li className="h6">
                      <span className="text-muted">Popularity :</span>{" "}
                      {animeDetail.popularity}
                    </li>
                    <li className="h6">
                      <span className="text-muted">Favorites :</span>{" "}
                      {animeDetail.favourites}
                    </li>

                    <li>
                      <ul className="list-unstyled social-icon mb-0 mt-4">
                        <li className="list-inline-item">
                          <Link to="#" className="rounded">
                            <i>
                              <FeatherIcon
                                icon="facebook"
                                className="fea icon-sm fea-social"
                              />
                            </i>
                          </Link>
                        </li>{" "}
                        <li className="list-inline-item">
                          <Link to="#" className="rounded">
                            <i>
                              <FeatherIcon
                                icon="instagram"
                                className="fea icon-sm fea-social"
                              />
                            </i>
                          </Link>
                        </li>{" "}
                        <li className="list-inline-item">
                          <Link to="#" className="rounded">
                            <i>
                              <FeatherIcon
                                icon="twitter"
                                className="fea icon-sm fea-social"
                              />
                            </i>
                          </Link>
                        </li>{" "}
                        <li className="list-inline-item">
                          <Link to="#" className="rounded">
                            <i>
                              <FeatherIcon
                                icon="linkedin"
                                className="fea icon-sm fea-social"
                              />
                            </i>
                          </Link>
                        </li>{" "}
                        <li className="list-inline-item">
                          <Link to="#" className="rounded">
                            <i>
                              <FeatherIcon
                                icon="github"
                                className="fea icon-sm fea-social"
                              />
                            </i>
                          </Link>
                        </li>{" "}
                        <li className="list-inline-item">
                          <Link to="#" className="rounded">
                            <i>
                              <FeatherIcon
                                icon="youtube"
                                className="fea icon-sm fea-social"
                              />
                            </i>
                          </Link>
                        </li>{" "}
                        <li className="list-inline-item">
                          <Link to="#" className="rounded">
                            <i>
                              <FeatherIcon
                                icon="gitlab"
                                className="fea icon-sm fea-social"
                              />
                            </i>
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <div className="d-grid">
                    <Link
                      to="#"
                      onClick={togglemodal}
                      className="btn btn-block btn-primary"
                    >
                      Watch Now 
                  </Link>
                  </div>
                </CardBody>
              </Card>
            </Col>

            {loading &&
                <Col lg="8" md="7" xs="12" className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                <Row className="justify-content-center align-items-center mt-4">
                    <Spinner
                    className=""
                    color="primary" type="grow"
                    >.</Spinner>
                </Row>
                </Col>
            }
            
            {!loading &&
            <Col lg="8" md="7" xs="12" className="mt-4 mt-sm-0 pt-2 pt-sm-0">
              <div className="ms-lg-4">
                <h4>Description :</h4>
                <p className="text-muted" dangerouslySetInnerHTML={ { __html: animeDetail.description } }>
                </p>

                
                <h4 className="mt-lg-5 mt-4">Characters :</h4>
                <Row>
                  {animeDetail.characters.map((item, key) => (
                    <Col key={key} lg="6" className="mt-4 pt-2">
                      <div className="d-flex">
                        <div className="company-logo text-muted h6 me-3 text-center">
                          <img
                            src={item.image}
                            className="avatar avatar-md-sm mx-auto d-block mb-2"
                            alt="experience"
                          />
                        </div>
                        <div className="flex-1">
                          <h5 className="title mb-0">{item.name}</h5>
                          <small className="text-muted company-university">
                          {item.gender} - {item.age}
                          </small>
                          {/* <p className="text-muted mt-2 mb-0">{item.dateOfBirth}</p> */}
                        </div>
                      </div>
                    </Col>
                  ))}
                </Row>
                <h4 className="mt-lg-5 mt-4">Relations :</h4>
                <Row>
                  {animeDetail.relations.map((item, key) => (
                    <Col key={key} md={4} xs={12} className="mt-4 pt-2">
                      <Card className="border-0 work-container work-classic">
                        <CardBody className="p-0">
                          
                            <img
                              src={item.image}
                              className="img-fluid rounded work-image"
                              alt="Landrick"
                            />
                          <div className="content pt-3">
                            <h5 className="mb-0">
                              <span
                                className="text-dark title"
                              >
                                {item.title}
                              </span>
                            </h5>
                            {/* <h6 className="text-muted tag mb-0">
                              {project.subtitle}
                            </h6> */}
                          </div>
                        </CardBody>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </div>
            </Col>
            }
          </Row>
        </Container>
      </section>

    </React.Fragment>
  );
}


export default PageDetail;
