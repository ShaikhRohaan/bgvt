import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MacroOffIcon from "@mui/icons-material/MacroOff";
import Button from "@mui/material/Button";
import img15 from "../../../Image/img15.png";
import logo1 from "../../../Image/logo1.png";
import icon30 from "../../../Image/icon30.png";
import icon31 from "../../../Image/icon31.png";
import icon36 from "../../../Image/icon36.png";
import icon39 from "../../../Image/icon39.png";



import icon12 from "../../../Image/icon12.png";
import icon14 from "../../../Image/icon14.png";

import icon19 from "../../../Image/icon22.png";
import icon20 from "../../../Image/icon20.png";

import icon23 from "../../../Image/icon24.png";


import "./index.css";
import { fontSize } from "@mui/system";

const OurPartner = () => {
  return (
    <div>
      <div className="bg_imgsecond">
        <h1
          style={{
            textAlign: "center",
            color: "white",
            paddingTop: "30px",
            paddingBottom: "30px",
            fontFamily: "Times New Roman, Times, serif",
          }}
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <b>Our Partner</b>{" "}
        </h1>
        <Container>
          <Grid container className="avialble_main">
            <Grid
              item
              lg={2.5}
              md={2.5}
              sm={3.3}
              xs={6}
              className="avialable_text_comming"
              style={{ textAlign: "center" }}
            >
              <img src={icon30} alt=""  style={{ marginTop:'5px',width:'60%' }}/>
            </Grid>
            <Grid
              item
              lg={2.5}
              md={2.5}
              sm={3.3}
              xs={6}
              className="avialable_text_comming"
              style={{ textAlign: "center" }}
            >
              <img src={icon31} alt=""style={{ marginTop:'5px',width:'55%' }}  />
            </Grid>
            <Grid
              item
              lg={2.5}
              md={2.5}
              sm={3.3}
              xs={6}
              className="avialable_text_comming"
              style={{ textAlign: "center" }}
            >
              <img src={icon19} alt="" style={{ marginTop:'5px',width:'60%' }} />
            </Grid>
          </Grid>
          <Grid
            container
            className="avialble_main"
            style={{ marginTop: "30px" }}
          >
            <Grid
              item
              lg={2.5}
              md={2.5}
              sm={3.3}
              xs={6}
              className="avialable_text_comming"
              style={{ textAlign: "center" }}
            >
                     <img src={icon12} alt=""style={{ marginTop:'5px',width:'55%' }}  />

            </Grid>
            <Grid
              item
              lg={2.5}
              md={2.5}
              sm={3.3}
              xs={6}
              className="avialable_text_comming"
              style={{ textAlign: "center" }}
            >
                        <img src={icon14} alt=""style={{ marginTop:'5px',width:'55%' }}  />

            </Grid>
            <Grid
              item
              lg={2.5}
              md={2.5}
              sm={3.3}
              xs={6}
              className="avialable_text_comming"
              style={{ textAlign: "center" }}
            >
                      <img src={icon20} alt=""style={{ marginTop:'5px',width:'55%' }}  />

            </Grid>
          </Grid>
          <Grid
            container
            className="avialble_main"
            style={{ marginTop: "30px", paddingBottom: "70px" }}
          >
            <Grid
              item
              lg={2.5}
              md={2.5}
              sm={3.3}
              xs={6}
              className="avialable_text_comming"
              style={{ textAlign: "center" }}
            >
                          <img src={icon23} alt=""style={{ marginTop:'5px',width:'55%' }}  />

            </Grid>
            <Grid
              item
              lg={2.5}
              md={2.5}
              sm={3.3}
              xs={6}
              className="avialable_text_comming"
              style={{ textAlign: "center" }}
              id="avialable_text"
            >
                      <img src={icon39} alt=""style={{ marginTop:'5px',width:'55%' }}  />

            </Grid>

            <Grid
              item
              lg={2.5}
              md={2.5}
              sm={3.3}
              xs={6}
              className="avialable_text_comming"
              style={{ textAlign: "center" }}
              id="avialable_text"
            >
                      <img src={icon36} alt=""style={{ marginTop:'5px',width:'55%' }}  />

            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );
};

export default OurPartner;
