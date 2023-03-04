import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import logo from "../../Image/logo.png";
import facebook from "../../Image/icon/facebook.png";
import letter from "../../Image/icon/letter.png";
import linkedin from "../../Image/icon/linkedin.png";
import twitter from "../../Image/icon/twitter.png";
import insta from "../../Image/icon/insta.png";
import "./index.css";
import { CircularProgress } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import { HashLink as link } from "react-router-hash-link";

const Header = () => {
  return (
    <BrowserRouter>
      <div style={{ backgroundColor: "black" }}>
        <Grid container>
          <Grid item lg={0.3}></Grid>
          <Grid item lg={2} md={2} sm={2} xs={4} className="header_logo">
            <img src={logo} alt="" />
          </Grid>
          <Grid item lg={7} md={7} sm={7} xs={2}></Grid>
          <Grid
            item
            lg={0.5}
            md={0.5}
            sm={0.5}
            xs={1.2}
            className="header_icon"
          >
            <img src={facebook} alt="" />
          </Grid>
          <Grid
            item
            lg={0.5}
            md={0.5}
            sm={0.5}
            xs={1.2}
            className="header_icon"
          >
            <img src={linkedin} alt="" />
          </Grid>
          <Grid
            item
            lg={0.5}
            md={0.5}
            sm={0.5}
            xs={1.2}
            className="header_icon"
          >
            <img src={twitter} alt="" />
          </Grid>
          <Grid
            item
            lg={0.5}
            md={0.5}
            sm={0.5}
            xs={1.2}
            className="header_icon"
          >
            <img src={letter} alt="" />
          </Grid>
          <Grid
            item
            lg={0.5}
            md={0.5}
            sm={0.5}
            xs={1.2}
            className="header_icon"
          >
            <img src={insta} alt="" />
          </Grid>
        </Grid>
        <nav
          class="navbar navbar-expand-lg navbar-light "
          style={{ backgroundColor: "#080808" }}
        >
          <div class="container-fluid">
            {/* <a class="navbar-brand" href="#">Navbar</a> */}
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <Container>
                <Grid container>
                  <Grid item lg={0.4}></Grid>
                  <Grid item lg={2} md={2} sm={1.5} xs={12}>
                    <p style={{ color: "white" }} id="header_text_resp">
                      <b>HOME</b>
                    </p>
                  </Grid>
                  <Grid item lg={2} md={2} sm={1.5} xs={12}>
                    <p style={{ color: "white" }} id="header_text_resp">
                      <a
                        href="#why_bgvt"
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        <b>STACK</b>
                      </a>
                    </p>
                  </Grid>
                  <Grid item lg={2} md={2} sm={2.5} xs={12}>
                    <p style={{ color: "white" }} id="header_text_resp">
                      <a
                        href="#bit_game"
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        <b>TOKENOMICS</b>
                      </a>
                    </p>
                  </Grid>
                  <Grid item lg={2} md={2} sm={2.5} xs={12}>
                    <p style={{ color: "white" }} id="header_text_resp">
                      <a
                        href="#benifts"
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        <b>BENIFTS</b>
                      </a>
                    </p>
                  </Grid>
                  <Grid item lg={2} md={2} sm={2} xs={12}>
                    <p style={{ color: "white" }} id="header_text_resp">
                      <a
                        href="#raod_map"
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        <b>ROAD MAP</b>
                      </a>
                    </p>
                  </Grid>
                  <Grid item lg={1.5} md={1.5} sm={2} xs={12}>
                    <Button
                      variant="outlined"
                      style={{
                        color: "rgb(177,63,0)",
                        border: "1px solid rgb(177,63,0)",
                      }}
                      id="header_btn_resp"
                    >
                      Buy Now
                    </Button>
                  </Grid>
                </Grid>
              </Container>
              {/* <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li>
      </ul> */}
            </div>
          </div>
        </nav>
      </div>
    </BrowserRouter>
  );
};

export default Header;
