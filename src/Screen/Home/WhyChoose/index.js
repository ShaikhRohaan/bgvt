import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import TuneIcon from "@mui/icons-material/Tune";
import img4 from "../../../Image/img4.png";
import img5 from "../../../Image/img5.png";
import img6 from "../../../Image/img6.png";
import "./index.css";

const WhyChoose = () => {
  return (
    <div className="bg_imgsecond" id='why_bgvt'>
      <h1
        style={{
          textAlign: "center",
          color: "white",
          paddingTop: "50px",
          fontFamily: "Times New Roman, Times, serif",
        }}
      >
        Why Choose BGVT?
      </h1>
      {/* <Container> */}

      <Grid container className="why_choose_main">
        <Grid item lg={2.5} md={1.5} sm={2.5} xs={5} className="why_choose_img">
          <img src={img4} alt="" id="why_choose_img_resp1" />
        </Grid>

        <Grid
          item
          lg={3}
          md={3.8}
          sm={5.5}
          xs={11}
          className="why_choose_img"
        >
          <img src={img6} alt="" style={{ paddingTop: "50px" }} />
          <div style={{ marginTop: "-47%" }}>
            <TuneIcon
              style={{ color: "white", marginLeft: "43%" }}
              className="why_choose_six_resp"
            />
            <h4 className="why_choose_text_resp">Trending for a Reason</h4>
            <p id="why_choose_p" style={{padding:'5px'}}>
            We are one of the most popular and looked at coins at Coinmarketcap
            </p>
          </div>
          <img
            src={img6}
            alt=""
            style={{ paddingTop: "50px" }}
            className="why_choose-second_resp"
          />
          <div style={{ marginTop: "-47%" }}>
            <TuneIcon
              style={{ color: "white", marginLeft: "43%" }}
              className="why_choose_six_resp"
            />
            <h4 className="why_choose_text_resp">Locked liquidity</h4>
            <p id="why_choose_p" style={{padding:'2px'}}>
            BGVT has locked $4 million worth of liquidity for many decades, ensuring stability and minimizing.
            </p>
          </div>
        </Grid>

        <Grid
          item
          lg={3.1}
          md={3.8}
          sm={5.5}
          xs={11}
          className="why_choose_img"
          id="high_quality_resp1"
        >
          <img src={img6} alt="" style={{ paddingTop: "50px" }} />
          <div style={{ marginTop: "-47%" }}>
            <TuneIcon
              style={{ color: "white", marginLeft: "43%" }}
              className="why_choose_six_resp"
            />
            <h4 className="why_choose_text_resp">Profitable Gaming</h4>
            <p id="why_choose_p" style={{padding:'8px'}}>
            With the Play to Earn model, BGVT enables gamers to earn real money while playing games (COMING SOON)
            </p>
          </div>

          <img src={img6} alt="" style={{ paddingTop: "25px" }} />
          <div style={{ marginTop: "-47%" }}>
            <TuneIcon
              style={{ color: "white", marginLeft: "43%" }}
              className="why_choose_six_resp"
            />
            <h4 className="why_choose_text_resp">Audited by Certik</h4>
            <p id="why_choose_p">
            BGVT has undergone a thorough security audit by Certik
            </p>
          </div>
        </Grid>

        <Grid item lg={2.5} md={1.7} sm={3.5} xs={5} className="why_choose_img">
          <img
            src={img5}
            alt=""
            style={{ paddingTop: "90%" }}
            id="why_choose_img_resp"
          />
        </Grid>
      </Grid>

      <Container>
        <Grid
          container
          style={{
            justifyContent: "center",
            marginTop: "-24%",
            paddingBottom: "12%",
          }}
          id="high_ranked_card"
        >
          <Grid
            item
            lg={3.5}
            md={4}
            sm={5.5}
            xs={11.5}
            className="why_choose_img"
            style={{marginTop:'60px'}}
          >
            <img src={img6} alt="" style={{ paddingTop: "50px" }} />
            <div style={{ marginTop: "-47%" }}>
              <TuneIcon
                style={{ color: "white", marginLeft: "43%" }}
                className="why_choose_six_resp"
              />
              <h4 className="why_choose_text_resp">Loved at CoinGecko</h4>
              <p style={{ padding: "5px" }}>
              BGVT has risen to rank 900th at CoinGecko, owing to our incredible performance.
              </p>
            </div>
          </Grid>
        </Grid>
      </Container>
      {/* </Container> */}
    </div>
  );
};

export default WhyChoose;
