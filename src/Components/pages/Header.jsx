import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
export default function Header() {
    const [top, setTop] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            var scrolled = document.scrollingElement.scrollTop;
            if (scrolled >= 30) {
                setTop(true);
            } else {
                setTop(false);
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => window.removeEventListener("scroll", handleScroll);
    }, [top]);

    return (
        <div className="">
            <nav
                style={{
                    background: top === false ? "transparent" : " #E6E6E6",
                    boxShadow: top === false ? "" : " 0 8px 16px 0 rgba(0,0,0,0.2)",
                    height: top === false ? "" : "50px",
                    transition: top === false ? "" : "all 0.3s ease 0s",
                    // backgroundImage:top === false ? "" : "linear-gradient(315deg, #05e8ba 0%, #fc575e 74%)"
                }}
                className="navbar navbar-expand-lg navbar-light fixed-top  "
            >
                <div className="container-fluid m-0 p-0">
                    <Link className="navbar-brand" to="/">
                        <img
                            src="https://www.rpatechnologies.in/assets/img/rpa-logo.svg"
                            alt="logo"
                            className="logoHeader"
                            width="150px"
                            height="70px"
                        />
                        {/* <img src={Logo} alt="" width="40" height="35" /> */}
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarTogglerDemo01"
                        aria-controls="navbarTogglerDemo01"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div
                        className="collapse navbar-collapse header_menu "
                        id="navbarTogglerDemo01"
                    >
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a
                                    className="nav-link active"
                                    aria-current="page"
                                    href="#Home"
                                ></a>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a
                                        className="nav-link active"
                                        aria-current="page"
                                        href="/home"
                                        data-bs-toggle="collapse"
                                        style={{
                                            color: top === false ? "black" : "black",
                                            fontWeight: 500,
                                        }}
                                    >
                                        Home
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        className="nav-link active"
                                        aria-current="page"
                                        href="/registration-page"
                                        style={{
                                            color: top === false ? "black" : "black",
                                            fontWeight: 500,
                                        }}
                                    >
                                        Registration Form
                                    </a>
                                </li>

                                <li className="nav-item">
                                    <a
                                        className="nav-link"
                                        style={{
                                            color: top === false ? "black" : "black",
                                            fontWeight: 500,
                                        }}
                                    >
                                        Contact Us
                                    </a>
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    );
}
