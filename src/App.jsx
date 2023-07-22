import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function App() {
  return (
    <div>
      <div
        style={{
          backgroundColor: "green",
          fontFamily: "Franklin Gothic Medium, Arial Narrow, Arial, sans-serif",
          color: "#E6CD11",
        }}
      ></div>
      <div
        style={{
          textAlign: "center",
          backgroundColor: "#071952",
          color: "white",
        }}
        className="b1"
      >
        <h1
          style={{
            color: "white",
          }}
          className="h1"
        >
          Google Developer Student Store
        </h1>
      </div>
      <div
        className="abc d-flex flex-column flex-shrink-0 p-3 text-white bg-dark "
        style={{
          position: "fixed",
          top: "0%",
          width: "20%",
          height: "670px",
        }}
      >
        <a
          href="/" // Replace this with the actual link for the home page
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
        >
          <span className="fs-4">
            <img
              src="https://res.cloudinary.com/startup-grind/image/upload/dpr_2.0,fl_sanitize/v1/gcs/platform-data-dsc/contentbuilder/logo_dark_stacked_5giak2X.svg"
              alt=""
              width="80%"
              height="80%"
            />
          </span>
          <br />
        </a>
        <ul
          className="nav nav-pills flex-column mb-auto"
          style={{
            position: "fixed",
            top: "20%",
            width: "17%",
            height: "670px",
          }}
        >
          <li className="nav-item">
            <a href="/home" className="nav-link text-white">
              <svg className="bi me-2" width="16" height="16">
                <use xlinkHref="#home"></use>
              </svg>
              Home
            </a>
          </li>
          <li>
            <a href="/dashboard" className="nav-link text-white ">
              <svg className="bi me-2" width="16" height="16">
                <use xlinkHref="#speedometer2"></use>
              </svg>
              Dashboard
            </a>
          </li>
          <li>
            <a href="/orders" className="nav-link text-white">
              <svg className="bi me-2" width="16" height="16">
                <use xlinkHref="#table"></use>
              </svg>
              Orders
            </a>
          </li>
          <li>
            <a href="/products" className="nav-link text-white">
              <svg className="bi me-2" width="16" height="16">
                <use xlinkHref="#grid"></use>
              </svg>
              Products
            </a>
          </li>
          <li>
            <a href="/customers" className="nav-link text-white">
              <svg className="bi me-2" width="16" height="16">
                <use xlinkHref="#people-circle"></use>
              </svg>
              Customers
            </a>
          </li>
        </ul>
        <div
          className="dropdown"
          style={{
            position: "fixed",
            top: "93%",
            width: "15%",
          }}
        >
          <a
            href="#" // Replace this with the appropriate link for the user profile
            className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
            id="dropdownUser1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img
              // src="/images/google.png"
              src="https://imgeng.jagran.com/images/2023/apr/best%20apple%20laptops%20price%20in%20India1682674778272.jpg"
              alt=""
              width="30%"
              height="30%"
              className="rounded-circle me-2"
            />
            {/* <strong>mdo</strong> */}
          </a>

          <ul
            className="dropdown-menu dropdown-menu-dark text-small shadow"
            aria-labelledby="dropdownUser1"
          >
            <li>
              <a href="#">New project...</a>
            </li>
            <li>
              <a href="#">Settings</a>
            </li>
            <li>
              <a href="#">Profile</a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a href="#">Sign out</a>
            </li>
          </ul>
        </div>
      </div>
      <select
        className="form-select form-select-sm mb-3"
        aria-label=".form-select-sm example"
        style={{
          width: "20%",
          position: "absolute",
          left: "25%",
          top: "12%",
          backgroundColor: "black",
          color: "white",
        }}
      >
        <option selected>Companies</option>
        <option value="1">Amazon</option>
        <option value="2">Flipkart</option>
        <option value="3">SnapDeal</option>
      </select>
      <select
        className="form-select form-select-sm mb-3"
        aria-label=".form-select-sm example"
        style={{ width: "20%", position: "absolute", left: "50%", top: "12%" }}
      >
        <option selected>Category</option>
        <option value="1">T-shirts</option>
        <option value="2">Stickers</option>
        <option value="3">Merchandise</option>
      </select>
      <button
        type="button"
        className="btn btn-primary"
        style={{ width: "7%", position: "absolute", left: "75%", top: "12%" }}
      >
        Submit
      </button>

      <div
        class="video-container loaded"
        style={{ position: "absolute", top: "270px", left: "500px" }}
      >
        <div class="video">
          <iframe
            id="sg-promo-video"
            class="youtube-video"
            frameborder="0"
            allowfullscreen="1"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            title="#DeveloperStudentClubs GDSC LPU Orientation Session 2021 | Google Developer Student Club - LPU"
            width="640"
            height="360"
            src="https://www.youtube.com/embed/-oK69g51dn8?autoplay=0&amp;controls=0&amp;showinfo=0&amp;enablejsapi=1&amp;origin=https%3A%2F%2Fgdsc.community.dev&amp;widgetid=1"
          ></iframe>
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          top: "770px",
          left: "300px",
          height: "1110px",
          width: "1020px",
          marginBottom: "100px",
          backgroundColor: "rgb(88,28,135)",
          borderRadius: "2%",
          boxShadow: "5px  black",
        }}
      >
        <h1
          style={{
            position: "absolute",
            top: "10px",
            left: "320px",
            color: "White",
            fontFamily: "Cursive",
          }}
        >
          {" "}
          <span className="abc">RECENT </span>
          PROJECTS{" "}
        </h1>
        <div
          className="out"
          style={{
            position: "absolute",
            top: "85px",
            left: "67px",
            height: "300px",
            width: "395px",
            backgroundColor: "rgb(15,23,42)",
            boxShadow: "5px 5px 5px black",
          }}
        >
          {" "}
          <div
            style={{
              position: "absolute",
              top: "10px",
              left: "17px",
              height: "230px",
              width: "380px",
            }}
          >
            <img src="/images/w1.png" alt="" width="95%" height="120%" />
          </div>
        </div>
        <div
          className="out"
          style={{
            position: "absolute",
            top: "85px",
            left: "535px",
            height: "300px",
            width: "395px",
            backgroundColor: "rgb(15,23,42)",
            boxShadow: "5px 5px 5px black",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "10px",
              left: "17px",
              height: "230px",
              width: "380px",
            }}
          >
            <img src="/images/w6.png" alt="" width="95%" height="120%" />
          </div>
        </div>

        <div
          className="out"
          style={{
            position: "absolute",
            top: "430px",
            left: "67px",
            height: "300px",
            width: "395px",
            backgroundColor: "rgb(15,23,42)",
            boxShadow: "5px 5px 5px black",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "10px",
              left: "17px",
              height: "230px",
              width: "380px",
            }}
          >
            <img src="/images/w3.gif" alt="" width="95%" height="120%" />
          </div>
        </div>
        <div
          className="out"
          style={{
            position: "absolute",
            top: "430px",
            left: "535px",
            height: "300px",
            width: "395px",
            backgroundColor: "rgb(15,23,42)",
            boxShadow: "5px 5px 5px black",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "10px",
              left: "17px",
              height: "230px",
              width: "380px",
            }}
          >
            <img src="/images/w4.png" alt="" width="95%" height="120%" />
          </div>
        </div>

        <div
          className="out"
          style={{
            position: "absolute",
            top: "775px",
            left: "67px",
            height: "300px",
            width: "395px",
            backgroundColor: "rgb(15,23,42)",
            boxShadow: "5px 5px 5px black",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "10px",
              left: "17px",
              height: "230px",
              width: "380px",
            }}
          >
            <img src="/images/w5.png" alt="" width="95%" height="120%" />
          </div>
        </div>
        <div
          className="out"
          style={{
            position: "absolute",
            top: "775px",
            left: "535px",
            height: "300px",
            width: "395px",
            backgroundColor: "rgb(15,23,42)",
            boxShadow: "5px 5px 5px black",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "10px",
              left: "17px",
              height: "230px",
              width: "380px",
            }}
          >
            <img src="/images/w2.png" alt="" width="95%" height="120%" />
          </div>
        </div>
      </div>
      {/* 










































































// 2nd Container  









*/}
      <div
        style={{
          position: "absolute",
          top: "1970px",
          left: "300px",
          height: "1810px",
          width: "1020px",
          marginBottom: "100px",
          backgroundColor: "rgb(88,28,135)",
          borderRadius: "2%",
          boxShadow: "5px  black",
        }}
      >
        <h1
          style={{
            position: "absolute",
            top: "10px",
            left: "270px",
            color: "White",
            fontFamily: "Cursive",
          }}
        >
          {" "}
          <span className="abc"> RECENT </span>
          CERTIFICATIONS{" "}
        </h1>
        <div
          className="out"
          style={{
            position: "absolute",
            top: "85px",
            left: "67px",
            height: "300px",
            width: "395px",
            backgroundColor: "rgb(15,23,42)",
            boxShadow: "5px 5px 5px black",
          }}
        >
          {" "}
          <div
            style={{
              position: "absolute",
              top: "10px",
              left: "17px",
              height: "230px",
              width: "380px",
            }}
          >
            <img src="/images/w8.png" alt="" width="95%" height="120%" />
          </div>
        </div>

        <div
          className="out"
          style={{
            position: "absolute",
            top: "430px",
            left: "535px",
            height: "300px",
            width: "395px",
            backgroundColor: "rgb(15,23,42)",
            boxShadow: "5px 5px 5px black",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "10px",
              left: "17px",
              height: "230px",
              width: "380px",
            }}
          >
            <img src="/images/w9.png" alt="" width="95%" height="120%" />
          </div>
        </div>

        <div
          className="out"
          style={{
            position: "absolute",
            top: "775px",
            left: "67px",
            height: "300px",
            width: "395px",
            backgroundColor: "rgb(15,23,42)",
            boxShadow: "5px 5px 5px black",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "10px",
              left: "17px",
              height: "230px",
              width: "380px",
              color: "aliceBlue",
            }}
          >
            <img src="/images/w10.png" alt="" width="95%" height="120%" />{" "}
          </div>
        </div>

        {/* ?



















*/}
        <div
          className="out"
          style={{
            position: "absolute",
            top: "1125px",
            left: "535px",
            height: "300px",
            width: "395px",
            backgroundColor: "rgb(15,23,42)",
            boxShadow: "5px 5px 5px black",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "10px",
              left: "17px",
              height: "230px",
              width: "380px",
            }}
          >
            <img src="/images/w11.png" alt="" width="95%" height="120%" />
          </div>
        </div>

        <div
          className="out"
          style={{
            position: "absolute",
            top: "1475px",
            left: "67px",
            height: "300px",
            width: "395px",
            backgroundColor: "rgb(15,23,42)",
            boxShadow: "5px 5px 5px black",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "10px",
              left: "17px",
              height: "230px",
              width: "380px",
              color: "aliceBlue",
            }}
          >
            <img src="/images/w12.png" alt="" width="95%" height="120%" />{" "}
          </div>
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          top: "3800px",
          left: "650px",

          color: "black",
        }}
      >
        <h6>@All Rights Reserved Prince Kumar 2k23</h6>
      </div>
    </div>
  );
}

export default App;
