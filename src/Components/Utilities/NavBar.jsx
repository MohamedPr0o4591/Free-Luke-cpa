import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./NavBar.css";
import { Link } from "react-router-dom";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
import { useDispatch, useSelector } from "react-redux";
import { getUserProfile } from "../../Redux/Actions/GetUserProfile";

const NavBar = () => {
  useEffect(() => {
    if (localStorage.pointMode) {
      if (localStorage.pointMode === "dollar") {
        setPointsMode("dollar");
      } else setPointsMode("points");
    }
  }, []);

  const [pointsMode, setPointsMode] = useState("points");
  const [pointsValue, setPointsValue] = useState(0);
  const [userImage, setUseRImage] = useState("");
  const [activeItem, setActiveItem] = useState("dashboard");

  const getPoints = useSelector((state) => state.USER_PROFILE.userPoints);
  const getUserPic = useSelector((state) => state.USER_PROFILE.imgProfile);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserProfile());
  }, []);

  useEffect(() => {
    setPointsValue(getPoints);
  }, [getPoints]);

  useEffect(() => {
    setUseRImage(getUserPic);
  }, [getUserPic]);

  const handleDollar = (_) => {
    if (pointsMode === "points") {
      setPointsMode("dollar");
      localStorage.pointMode = "dollar";
    } else {
      setPointsMode("points");
      localStorage.pointMode = "points";
    }
  };

  const handleLogOut = (_) => {
    localStorage.removeItem("token");
    localStorage.removeItem("name");
    localStorage.removeItem("activeItem");
    location.pathname = "/login";
    localStorage.mode = "light";
  };

  let handleLightMode = (_) => {
    document.body.classList.remove("darkMode");
    localStorage.mode = "light";
    location.reload();
  };

  let handleDarkMode = (_) => {
    document.body.classList.add("darkMode");
    localStorage.mode = "dark";
    location.reload();
  };

  if (localStorage.mode === "dark") {
    document.body.classList.add("darkMode");
  } else {
    document.body.classList.remove("darkMode");
  }

  const handleActiveItem = (item) => {
    setActiveItem(item);
    localStorage.activeItem = item;
  };

  useEffect(() => {
    localStorage.activeItem && setActiveItem(localStorage.activeItem);
    if (location.pathname === "/dashboard" || location.pathname === "/") {
      setActiveItem("dashboard");
    }
  }, []);

  useEffect(() => {
    if (location.pathname === "/dashboard") {
      setActiveItem("dashboard");
    } else if (location.pathname === "/withdrawal") {
      setActiveItem("withdrawal");
    } else if (location.pathname === "/profile") {
      setActiveItem("profile");
    }
  }, [location.pathname]);

  return (
    <div
      style={
        !localStorage.terms
          ? { pointerEvents: "none", opacity: 0.4, background: "black" }
          : { pointerEvents: "initial" }
      }
    >
      {localStorage.token && (
        <div
          className={`nav-left mobile-screen  ${
            localStorage.mode === "dark" && "nav-left-dark"
          }`}
        >
          <ul>
            <div className="d-flex flex-column gap-3">
              <li className={activeItem === "dashboard" && "active"}>
                <Link
                  to="dashboard"
                  onClick={(_) => handleActiveItem("dashboard")}
                >
                  <i className=" bx bxs-badge-dollar bx-flashing" id={"earns"} />
                </Link>
              </li>
              <li className={activeItem === "withdrawal" && "active"}>
                <Link
                  to={"withdrawal"}
                  onClick={(_) => handleActiveItem("withdrawal")}
                >
                  <i
                    className="bx bxl-shopify bx-tada bx-horizontal"
                    id={`cashOut`}
                  />
                </Link>
              </li>
              <li className={activeItem === "profile" && "active"}>
                <Link
                  to={"profile"}
                  onClick={(_) => handleActiveItem("profile")}
                >
                  <i className="bx bxs-user-circle bx-horizontal" id={"profile"} />
                </Link>
              </li>
            </div>

            <div>
              <li>
                <button onClick={handleLogOut}>
                  <i className="bx bx-log-out bx-left bx-vertical" id="log-out" />
                </button>
              </li>
            </div>
          </ul>
        </div>
      )}

      {localStorage.token && (
        <div
          className={` fullscreen dis-flex items-menu-mobile-screen  ${
            localStorage.mode === "dark" && "items-menu-mobile-screen-dark"
          }`}
        >
          <ul className="list-unstyled d-flex justify-content-between px-4 m-0 w-100">
            <li>
              <Link
                to={"/withdrawal"}
                className={`${activeItem === "withdrawal" && "active"}`}
                onClick={(_) => handleActiveItem("withdrawal")}
              >
                <i
                  className="bx bxl-shopify bx-tada bx-horizontal"
                  id={`cashOut`}
                />
              </Link>
            </li>
            <li className={`earns ${activeItem === "dashboard" && "active"}`}>
              <Link
                to={"/dashboard"}
                onClick={(_) => handleActiveItem("dashboard")}
              >
                <i className=" bx bxs-badge-dollar bx-flashing" id={"earns"} />
              </Link>
            </li>
            <li>
              <Link
                to={"/profile"}
                className={`${activeItem === "profile" && "active"}`}
                onClick={(_) => handleActiveItem("profile")}
              >
                <i className="bx bxs-user-circle bx-horizontal" id={"profile"} />
              </Link>
            </li>
          </ul>
        </div>
      )}

      <Navbar
        expand="lg"
        className={
          localStorage.mode === "dark" ? "bg-navbar z-2" : "bg-dark z-2"
        }
        variant="dark"
      >
        <Container fluid>
          <div
            className={`d-flex align-items-center justify-content-between logo-container logo-container-mobile-screen ${
              localStorage.token && "w-100"
            }`}
          >
            <div className="d-flex gap-2 align-items-center">
              <Navbar.Brand
                href={!localStorage.token ? "/" : "/dashboard"}
                className="logo-text"
              >
                <span className="text-danger fw-bold ">F</span>ree{" "}
                <span className="text-danger fw-bold">L</span>uke
              </Navbar.Brand>

              <Navbar.Brand
                href={!localStorage.token ? "/" : "/dashboard"}
                className="logo-text-mobile-screen text-danger fullscreen show-mobile-screen"
              >
                F <span> L</span>
              </Navbar.Brand>

              {localStorage.token && (
                <Dropdown>
                  <Dropdown.Toggle
                    id="dropdown-basic"
                    style={{
                      background: "transparent",
                      border: "none",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <i
                      className="bx bxs-sun bx-tada"
                      style={{ fontSize: 1.5 + "rem" }}
                    />
                  </Dropdown.Toggle>

                  <Dropdown.Menu className="bg-dark" variant="dark">
                    <Dropdown.Item
                      className="d-flex gap-3"
                      onClick={handleLightMode}
                    >
                      <i
                        className="bx bxs-sun bx-tada"
                        style={{ fontSize: 1.5 + "rem" }}
                      />{" "}
                      Light Mode
                    </Dropdown.Item>

                    <Dropdown.Item
                      className="d-flex gap-3"
                      onClick={handleDarkMode}
                    >
                      <i
                        className="bx bxs-moon bx-tada"
                        style={{ fontSize: 1.5 + "rem" }}
                      />{" "}
                      Dark Mode
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              )}
            </div>

            {localStorage.token && (
              <div className="points-user points-user-mobile-screen fullscreen show-mobile-screen">
                <label style={{ cursor: "pointer" }} onClick={handleDollar}>
                  {pointsMode === "points" ? (
                    <bold className="d-flex align-items-center gap-2">
                      {pointsValue.toLocaleString()}{" "}
                      <span style={{ color: "#0dcaf0" }}>Points</span>
                    </bold>
                  ) : (
                    <bold className="d-flex align-items-center gap-2">
                      {(pointsValue / 1000).toFixed(1)}{" "}
                      <i
                        className="bx bx-dollar-circle"
                        style={{ color: "#06d038", fontSize: 1.45 + "rem" }}
                      />
                    </bold>
                  )}
                </label>
              </div>
            )}

            {localStorage.token && (
              <div className="d-flex gap-4 align-items-center ">
                <div className="points-user mobile-screen">
                  <label style={{ cursor: "pointer" }} onClick={handleDollar}>
                    {pointsMode === "points" ? (
                      <bold className="d-flex align-items-center gap-2">
                        {pointsValue.toLocaleString()}{" "}
                        <span style={{ color: "#0dcaf0" }}>Points</span>
                      </bold>
                    ) : (
                      <bold className="d-flex align-items-center gap-2">
                        {(pointsValue / 1000).toFixed(1)}{" "}
                        <i
                          className="bx bx-dollar-circle"
                          style={{ color: "#06d038", fontSize: 1.45 + "rem" }}
                        />
                      </bold>
                    )}
                  </label>
                </div>

                <div
                  className="img-user"
                  style={{
                    width: 50 + "px",
                    height: 50 + "px",
                    background: `url(${userImage})`,
                    borderRadius: 50 + "%",
                  }}
                />

                <Dropdown
                  as={ButtonGroup}
                  className="fullscreen btn-group-mobile-screen"
                >
                  <Button variant="dark">
                    <div
                      className="img-user-mobile-screen"
                      style={{
                        width: 40 + "px",
                        height: 40 + "px",
                        background: `url(${userImage})`,
                        borderRadius: 50 + "%",
                      }}
                    />
                  </Button>

                  <Dropdown.Toggle
                    split
                    variant="dark"
                    id="dropdown-split-basic"
                  />

                  <Dropdown.Menu>
                    <Dropdown.Item href="/profile">Profile</Dropdown.Item>
                    <Dropdown.Item
                      href="/withdrawal"
                      className="border-bottom mb-3 border-info"
                    >
                      Withdraw
                    </Dropdown.Item>
                    <Dropdown.Item href="/login" onClick={handleLogOut}>
                      Log out
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>

                <span
                  className={`text-light pe-3 opacity-50 ${
                    localStorage.token && "toggle-remove"
                  }`}
                >
                  {localStorage.name}
                </span>
              </div>
            )}
          </div>

          <Navbar.Toggle
            aria-controls="navbarScroll"
            className={`${localStorage.token && "toggle-remove"}`}
          />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            ></Nav>
            <Form className="d-flex gap-4">
              {!localStorage.token && (
                <>
                  <Button variant="outline-danger">
                    <Link to="/login" className="text-light">
                      Login
                    </Link>
                  </Button>

                  <Button variant="outline-danger">
                    <Link to="/register" className="text-light">
                      Register
                    </Link>
                  </Button>
                </>
              )}
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
