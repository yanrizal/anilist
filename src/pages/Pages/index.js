import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, CardBody, Spinner } from 'reactstrap';
import { Link } from "react-router-dom";
import { useAnime } from "../../stores/anime";
import ReactPaginate from 'react-paginate';
import LazyLoad from "react-lazyload";


//Import components
import PageBreadcrumb from "../../components/Shared/PageBreadcrumb";

const Topbar = React.lazy(() => import('../Home/Topbar'));
const Footer = React.lazy(() => import('../Home/Footer'));


const Home = () => {
    const animeStore = useAnime();
    const pathItems = [
        //id must required
        { id : 1, name : "Anime", link : "/" },
        { id : 2, name : "List", link : "#" },
    ]
    const [displayCategory, setDisplayCategory] = useState(null)
    const [isOpen, setIsOpen] = useState(false)
    const [loading, setLoading] = useState(true)
    const [loadingPage, setLoadingPage] = useState(true)

    const setCategory = (category) => {
        setDisplayCategory(category)
    }
    
    useEffect(() => {
        //loadData()
        window.addEventListener("scroll", scrollNavigation, true);
        return () => {
            window.removeEventListener("scroll", scrollNavigation, true);
        }
    },[])

    useEffect(() => {
        loadData()
    },[displayCategory])

    const loadData = async () => {
        setLoading(true)
        setLoadingPage(true)
        await animeStore.getAnimeList(1,displayCategory)
        setLoading(false)
        setLoadingPage(false)
    }

    const handlePageClick = async (event) => {
        setLoading(true)
        await animeStore.getAnimeList(event.selected+1,displayCategory)
        setLoading(false)
    };

    const scrollNavigation = () => {
        var doc = document.documentElement;
        var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
        var topnav = document.getElementById('topnav');
        if (top > 80 && topnav) {
            topnav.classList.add('nav-sticky');
        }
        else if(topnav) {
            topnav.classList.remove('nav-sticky');
        }
    }

    return (
        <React.Fragment>
            <Topbar/>
            {/* breadcrumb */}
            <PageBreadcrumb title="Welcome To Anilist" pathItems = {pathItems} />
            <div className="position-relative">
                <div className="shape overflow-hidden text-white">
                    <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                    </svg>
                </div>
            </div>

    <section className="section">
        <Container>
            <Row className="justify-content-center">
            <div className="col-12 filters-group-wrap">
                <div className="filters-group">
                <ul
                    className="container-filter list-inline mb-0 filter-options text-center"
                    id="filter"
                >
                    <li onClick={() => setCategory(null)}
                        className={
                        displayCategory === null
                            ? "list-inline-item categories-name border text-dark rounded active"
                            : "list-inline-item categories-name border text-dark rounded"
                        }
                    >
                        All
                
                    </li>{" "}
                    <li onClick={() => setCategory("Action")}
                        className={
                        displayCategory === "Action"
                            ? "list-inline-item categories-name border text-dark rounded active"
                            : "list-inline-item categories-name border text-dark rounded"
                        }
                    >
                        Action
                
                    </li>{" "}
                    <li onClick={() => setCategory("Adventure")}
                        className={
                        displayCategory === "Adventure"
                            ? "list-inline-item categories-name border text-dark rounded active"
                            : "list-inline-item categories-name border text-dark rounded"
                        }
                    >
                        Adventure
                
                    </li>{" "}
                    <li onClick={() =>  setCategory("Comedy")}
                        className={
                        displayCategory === "Comedy"
                            ? "list-inline-item categories-name border text-dark rounded active"
                            : "list-inline-item categories-name border text-dark rounded"
                        }
                    >
                        Comedy
                
                    </li>{" "}
                    <li onClick={() => setCategory("Drama")}
                        className={
                        displayCategory === "Drama"
                            ? "list-inline-item categories-name border text-dark rounded active"
                            : "list-inline-item categories-name border text-dark rounded"
                        }
                    >
                        Drama
                    </li>
                </ul>
                </div>
            </div>
            </Row>
            
            {loading &&
                <Row className="justify-content-center align-items-center mt-4">
                    <Spinner
                    className=""
                    color="primary" type="grow"
                    >.</Spinner>
                </Row>
            }
            <Row className="projects-wrapper">
            
            {!loading && animeStore.anime.map((item, key) => (
                <Col key={key} lg={2} md={3} sm={4} xs={12} className="mt-4 pt-2 branding">
                   
                    <Card className="border-0 work-container work-grid position-relative d-block overflow-hidden rounded">
                        <CardBody className="p-0 text-center">
                            <LazyLoad height={261} once>
                                <Link className="mfp-image d-inline-block" to={"/anime/"+item.id} title="">
                                    <img src={item.image} className="img-fluid" alt="work"/>
                                </Link>
                            </LazyLoad>
                            <div className="content bg-white p-3">
                                <h5 className="mb-0"><Link to="page-work-detail" className="text-dark title">{item.title}</Link></h5>
                                <h6 className="text-muted tag mb-0"></h6>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
                ))}
           
                <Col xs={12} className="mt-4 pt-2">
                    {!loadingPage &&
                    <ReactPaginate
                        className="justify-content-center mb-0 pagination"
                        pageClassName="page-item"
                        pageLinkClassName="page-link"
                        previousClassName="page-item"
                        previousLinkClassName="page-link"
                        nextLinkClassName="page-link"
                        nextClassName="page-item"
                        activeClassName="active"
                        breakLabel="..."
                        nextLabel="next >"
                        onPageChange={handlePageClick}
                        pageRangeDisplayed={5}
                        pageCount={animeStore.lastPage}
                        previousLabel="< previous"
                        renderOnZeroPageCount={null}
                    />
                    }
                </Col>

            </Row>
        </Container>
    </section>
    
    <Footer/>
        </React.Fragment>
    );
}

export default Home;