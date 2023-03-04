import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import img1 from "../../../Image/Rectangle 73.png";
import img2 from "../../../Image/bgImg.png";
import img3 from "../../../Image/img3.png";
import "./index.css";

const Crytomade = () => {
  return (
    <div className="bg_img">
      {/* <Grid container>
        <Grid item lg={12} className="imgtwo">
          <img src={img1} />
        </Grid>
      </Grid> */}
      <Container>
        <Grid container>
          <Grid item lg={8} md={8} sm={8} xs={8} className="text_bg">
            <h1>
            The Ultimate Token for <br></br> Gamers
            </h1>
            <p>
            BGVT is the Only Currency You'll Need in the Gaming World. Here's Why:
            </p>
          </Grid>
          <Grid item lg={3.5} md={3.5} sm={3.5} xs={3.5} className="bg_imgtwo">
            <img src={img2} alt="" style={{ paddingTop: "90px" }} />
          </Grid>
        </Grid>
        <Grid container>
          <Grid item lg={7.5} md={7.5} sm={7.5} xs={7.5}></Grid>
          <Grid item lg={3} md={3} sm={3} xs={3} className="bg_imgtwo">
            <img src={img3} alt="" style={{ paddingBottom: "60px" }} id='made_img'/>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Crytomade;
