import React, { useEffect, useState } from "react";
import SubTitle from "../Utilities/SubTitle";
import { Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getUserProfile } from "../../Redux/Actions/GetUserProfile";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const UsersInfo = () => {
  const handleImageChange = async (event) => {
    let selected;

    const file = event.target.files[0];
    selected = file;

    const formData = new FormData();
    formData.append("profilePic", selected);

    toast.success("Change was successfully. Wait a minute to change", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });

    try {
      const response = await axios.patch(
        `https://luke-app2.onrender.com/user/edit-profile-image`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${localStorage.token}`,
          },
        }
      );

      location.reload();
    } catch (error) {
      console.error("failed to upload image:", error);
    }
  };

  const [userData, setUserData] = useState([]);

  const [userPic, setUserPic] = useState([]);

  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const data = useSelector((state) => state.USER_PROFILE.userProfile);

  const getUserPic = useSelector((state) => state.USER_PROFILE.imgProfile);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserProfile());
  }, []);

  useEffect(() => {
    setUserData(data);
  }, [data]);

  useEffect(() => {
    setUserPic(getUserPic);
  }, [getUserPic]);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [emailErr, setEmailErr] = useState(0);

  const [active, setActive] = useState(false);

  const handleChangePass = async (_) => {
    let flag;
    setActive(true);

    if (
      password.length < minLength ||
      !hasUppercase ||
      !hasLowercase ||
      !hasNumber ||
      !hasSpecialChar
    ) {
      flag = false;
    } else flag = true;

    if (flag) {
      try {
        let res = await axios.patch(
          "https://luke-app2.onrender.com/user/reset-password",
          {
            email: email,
            password: password,
          }
        );

        toast.success(
          "Password changed You will be redirected to the login page .",
          {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          }
        );

        setTimeout(() => {
          location.pathname = "/login";
          localStorage.removeItem("mode");
          localStorage.removeItem("token");
          localStorage.removeItem("activeItem");
        }, 2000);
      } catch (err) {
        setEmailErr(err.response.status);
      }
    }
  };

  const minLength = 8;
  const hasUppercase = /[A-Z]/.test(password);
  const hasLowercase = /[a-z]/.test(password);
  const hasNumber = /\d/.test(password);
  const hasSpecialChar = /[\W_]/.test(password);

  return (
    <div>
      <ToastContainer />
      <SubTitle title={`User Info`} />

      <Row className="border-bottom pb-4">
        <Col sm="12" xxl="6">
          <div className="user-info-container">
            <Row className="gap-3 w-auto">
              <div className="img-user-2 w-auto p-0">
                <img
                  src={userPic}
                  style={{
                    marginLeft: 10 + "px",
                  }}
                />
              </div>

              <div className="content w-auto">
                <div>
                  <h3>ID : {userData.id}</h3>
                  <label>
                    <h4 className="opacity-50">
                      Username : {userData.userName}
                    </h4>
                  </label>
                </div>

                <div>
                  <input
                    type="file"
                    id="upload-img"
                    accept="image/*"
                    className="d-none"
                    onChange={handleImageChange}
                  />

                  <div
                    className="d-grid gap-2 w-100"
                    style={{ gridTemplateColumns: "repeat(2,1fr)" }}
                  >
                    <label
                      className="upload-img text-center text-light"
                      htmlFor="upload-img"
                    >
                      Change image
                    </label>

                    <button
                      onClick={handleShow}
                      className="text-light"
                      style={{
                        borderRadius: 0.4 + "rem",
                        background: "#060",
                      }}
                    >
                      Change password
                    </button>
                  </div>
                </div>

                <Modal
                  show={show}
                  onHide={handleClose}
                  backdrop="static"
                  keyboard={false}
                >
                  <Modal.Header closeButton>
                    <Modal.Title>Change Password</Modal.Title>
                  </Modal.Header>
                  <Modal.Body className="d-flex flex-column gap-3">
                    <div>
                      <input
                        type="email"
                        className="email-changePass w-100"
                        placeholder="Enter your e-mail"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        style={{
                          padding: "10px 20px",
                          outline: "none",
                          background: "transparent",
                          border: "1px solid #060",
                          borderRadius: 0.4 + "rem",
                        }}
                      />

                      {emailErr === 500 && (
                        <p className="text-danger fw-bold">
                          Invalid Email Address! Please try again
                        </p>
                      )}
                    </div>

                    <div>
                      <input
                        type="password"
                        className="email-changePass w-100"
                        placeholder="Enter the new password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        style={{
                          padding: "10px 20px",
                          outline: "none",
                          background: "transparent",
                          border: "1px solid #060",
                          borderRadius: 0.4 + "rem",
                        }}
                      />
                      {(password.length < minLength ||
                        !hasUppercase ||
                        !hasLowercase ||
                        !hasNumber ||
                        !hasSpecialChar) &&
                        active && (
                          <p className="text-danger fw-bold">
                            Password must be at least 8 characters long and
                            include both uppercase and lowercase letters, at
                            least one number, and a special character.
                          </p>
                        )}
                    </div>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      Cancel
                    </Button>
                    <Button variant="success" onClick={handleChangePass}>
                      Change password
                    </Button>
                  </Modal.Footer>
                </Modal>
              </div>
            </Row>
          </div>
        </Col>

        <Col sm="12" xxl="6">
          <div className="mt-4 our-application d-flex flex-column gap-2">
            <label>
              <h5>
                Download our application to use in an easier and faster way
              </h5>
            </label>

            <div className="play-store d-flex gap-3 align-items-center">
              <span>Download via play store :</span>

              <a
                href=""
                className="download-google-play d-flex align-items-center gap-2"
              >
                <i className="bx bxl-play-store bx-tada fs-4"></i>

                <span>Google Play</span>
              </a>
            </div>

            <div className="app-store d-flex gap-3 align-items-center">
              <span>Download via app store :</span>

              <a
                href=""
                className="download-app-store d-flex gap-2 align-items-center"
              >
                <i className="bx bxl-apple bx-tada fs-4"></i>

                <span>App Store</span>
              </a>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default UsersInfo;
