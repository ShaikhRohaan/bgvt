import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import teamimg1 from "../../../Image/img11.jpg";
import teamimg2 from "../../../Image/img12.jpg";
import teamimg3 from "../../../Image/img13.jpg";
import teamimg4 from "../../../Image/img14.jpeg";
import "./index.css";

const Team = () => {
  return (
    <div className="bg_imgsecond">
      <h1
        style={{
          textAlign: "center",
          color: "white",
          paddingTop: "50px",
          paddingBottom: "10px",
          fontFamily:'Times New Roman, Times, serif'

        }}
      >
        MEET WITH THE TEAM
      </h1>
      <Container>
        <Grid container className="team_main" style={{paddingBottom:'30px'}}>
          <Grid item lg={2.5} md={3.8} sm={4.8} xs={11} className="team_img">
            <img src={teamimg3} alt="" />
            <h2 style={{ color: "white", textAlign: "center" }}>
              Mr.Anil Yadav
            </h2>
            <h3
              style={{
                color: "rgb(177,63,0)",
                textAlign: "center",
                marginTop: "-10px",
              }}
            >
              <b>CEO</b>
            </h3>
          </Grid>
          <Grid item lg={2.5} md={3.8} sm={4.8} xs={11} className="team_img">
            <img src={teamimg2} alt="" />
            <h2 style={{ color: "white", textAlign: "center" }}>
              Mr.Mintu Yadav
            </h2>
            <h3
              style={{
                color: "rgb(177,63,0)",
                textAlign: "center",
                marginTop: "-10px",
              }}
            >
              <b>COO</b>
            </h3>
          </Grid>

          <Grid item lg={2.5} md={3.8} sm={4.8} xs={12} className="team_img">
            <img src={teamimg4} alt="" />
            <h2 style={{ color: "white", textAlign: "center" }}>
              Mr.Parveen Rai
            </h2>
            <h3
              style={{
                color: "rgb(177,63,0)",
                textAlign: "center",
                marginTop: "-10px",
              }}
            >
              <b>Director</b>
            </h3>
          </Grid>
          <Grid item lg={2.5} md={3.8} sm={4.8} xs={12} className="team_img">
            <img src={teamimg1} alt="" />
            <h2 style={{ color: "white", textAlign: "center" }}>
              Mr.Ujjawal
            </h2>
            <h3
              style={{
                color: "rgb(177,63,0)",
                textAlign: "center",
                marginTop: "-10px",
              }}
            >
              <b>CMO</b>
            </h3>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Team;
