import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import img8 from "../../../Image/img8.png";
import icon1 from "../../../Image/token_icon1.png";
import img9 from "../../../Image/img9.png";
import tax from "../../../Image/tax.png";
import "./index.css";

const Benifts = () => {
  return (
    <div className="bg_imgsecond" id="benifts">
      <h1
        style={{
          textAlign: "center",
          color: "white",
          paddingTop: "50px",
          marginBottom: "50px",
          fontFamily: "Times New Roman, Times, serif",
        }}
      >
        BENEFITS OF TOKENS HOLDERS
      </h1>

      <Container>
        {/* First Benefit */}
        <Grid container style={{ justifyContent: "center", color: "white" }}>
          <Grid item lg={10} md={10} sm={10}>
            <p>
              As a BGVT token holder, you are a critical part of the BGV
              ecosystem. Holding BGVT tokens offers you numerous benefits that
              can help you earn amazing profits. Here's how they can help you
              maximize your profits in the ever-expanding world of crypto and
              gaming
            </p>
          </Grid>
        </Grid>

        <Container maxWidth="md">
          <Grid container style={{ justifyContent: "center" }}>
            <Grid item lg={5} md={5} sm={5.8} xs={12} className="benefits_img">
              <img src={img8} alt="" />
              <div style={{ marginTop: "-61%" }}>
                <img
                  src={icon1}
                  alt=""
                  style={{
                    height: "50px",
                    width: "50px",
                    marginLeft: "40%",
                    marginBottom: "20px",
                  }}
                  id="trading_icon"
                />
                <p style={{ textAlign: "center", color: "rgb(177,63,0)" }}>
                  <b>Trading reward</b>
                </p>
                <p
                  style={{
                    textAlign: "center",
                    color: "white",
                    paddingLeft: "30px",
                    paddingRight: "30px",
                    marginTop: "-12px",
                  }}
                >
                  Earn 1% trading fee on all transactions
                </p>
              </div>
            </Grid>
            <Grid item lg={1} md={0.6} sm={0.4}></Grid>
            <Grid item lg={5} md={5} sm={5.8} className="benefits_img">
              <img src={img8} alt="" />
              <div style={{ marginTop: "-61%" }}>
                <img
                  src={icon1}
                  alt=""
                  style={{
                    height: "50px",
                    width: "50px",
                    marginLeft: "40%",
                    marginBottom: "20px",
                  }}
                  id="trading_icon"
                />
                <p style={{ textAlign: "center", color: "rgb(177,63,0)" }}>
                  <b>Liquidity fee</b>
                </p>
                <p
                  style={{
                    textAlign: "center",
                    color: "white",
                    paddingLeft: "30px",
                    paddingRight: "30px",
                    marginTop: "-12px",
                  }}
                >
                  Receive 1% liquidity provider fee on all BGV platform
                  transactions
                </p>
              </div>
            </Grid>
          </Grid>

          {/* Second Benefit */}

          <Grid container style={{ justifyContent: "center" }}>
            <Grid item lg={5} md={5} sm={5.8} className="benefits_img">
              <img src={img8} alt="" />
              <div style={{ marginTop: "-61%" }}>
                <img
                  src={icon1}
                  alt=""
                  style={{
                    height: "50px",
                    width: "50px",
                    marginLeft: "40%",
                    marginBottom: "20px",
                  }}
                  id="trading_icon"
                />
                <p style={{ textAlign: "center", color: "rgb(177,63,0)" }}>
                  <b>Play and Earn</b>
                </p>
                <p
                  style={{
                    textAlign: "center",
                    color: "white",
                    paddingLeft: "30px",
                    paddingRight: "30px",
                    marginTop: "-12px",
                  }}
                >
                  Play favorite games on BGV gaming channel earn BGV tokens
                </p>
              </div>
            </Grid>
            <Grid item lg={1} md={0.6} sm={0.4}></Grid>
            <Grid item lg={5} md={5} sm={5.8} className="benefits_img">
              <img src={img8} alt="" />
              <div style={{ marginTop: "-61%" }}>
                <img
                  src={icon1}
                  alt=""
                  style={{
                    height: "50px",
                    width: "50px",
                    marginLeft: "40%",
                    marginBottom: "20px",
                  }}
                  id="trading_icon"
                />
                <p style={{ textAlign: "center", color: "rgb(177,63,0)" }}>
                  <b>Governance rights</b>
                </p>
                <p
                  style={{
                    textAlign: "center",
                    color: "white",
                    paddingLeft: "30px",
                    paddingRight: "30px",
                    marginTop: "-12px",
                  }}
                  id="trading_icon"
                >
                  Holders of BGVT tokens can participate  governance platform
                </p>
              </div>
            </Grid>
          </Grid>
          {/* Thired Benefit */}

          <Grid container style={{ justifyContent: "center" }}>
            <Grid item lg={5} md={5} sm={5.8} className="benefits_img">
              <img src={img8} alt="" />
              <div style={{ marginTop: "-61%" }}>
                <img
                  src={icon1}
                  alt=""
                  style={{
                    height: "50px",
                    width: "50px",
                    marginLeft: "40%",
                    marginBottom: "20px",
                  }}
                  id="trading_icon"
                />
                <p style={{ textAlign: "center", color: "rgb(177,63,0)" }}>
                  <b>Limited token supply</b>
                </p>
                <p
                  style={{
                    textAlign: "center",
                    color: "white",
                    paddingLeft: "30px",
                    paddingRight: "30px",
                    marginTop: "-12px",
                  }}
                >
                  The supply BGVT tokens is limited, &  value of
                  tokens  skyrocket
                </p>
              </div>
            </Grid>
            <Grid item lg={1} md={0.6} sm={0.4}></Grid>
            <Grid item lg={5} md={5} sm={5.8} className="benefits_img">
              <img src={img8} alt="" />
              <div style={{ marginTop: "-61%" }}>
                <img
                  src={icon1}
                  alt=""
                  style={{
                    height: "50px",
                    width: "50px",
                    marginLeft: "40%",
                    marginBottom: "20px",
                  }}
                  id="trading_icon"
                />
                <p style={{ textAlign: "center", color: "rgb(177,63,0)" }}>
                  <b>Auto Burning</b>
                </p>
                <p
                  style={{
                    textAlign: "center",
                    color: "white",
                    paddingLeft: "30px",
                    paddingRight: "30px",
                    marginTop: "-12px",
                  }}
                >
                  50% of every transaction used to purchase and burn BGV tokens
                </p>
              </div>
            </Grid>
          </Grid>

          <h1
            style={{
              textAlign: "center",
              color: "white",
              paddingTop: "50px",
              marginBottom: "30px",
              fontFamily: "Times New Roman, Times, serif",
            }}
          >
            BGVT TOKENSOMICS
          </h1>
          <Grid container style={{ justifyContent: "center" }}>
            <Grid
              item
              lg={5}
              md={5}
              sm={6}
              xs={6}
              className="bgvt_total_supply"
              style={{ marginBottom: "50px" }}
            >
              <Grid container>
                <Grid item lg={3}>
                  <p style={{ color: "white", padding: "15px" }}>
                    <b>Supply</b>
                  </p>
                  <img src={img9} alt="" className="tottal_suply_img" />
                </Grid>
                <Grid item lg={3}></Grid>
                <Grid item lg={5}>
                  <p style={{ color: "rgb(177,63,0)", padding: "15px" }}>
                    <b>Total Supply</b>
                  </p>
                  <p
                    style={{
                      color: "white",
                      padding: "15px",
                      marginTop: "-30%",
                    }}
                    className="total_supply_text"
                  >
                    55,676,908,445,BGVT
                  </p>
                  <ul style={{ color: "white" }}>
                    <li>Private Sale</li>
                    <li>Pre Sale</li>
                    <li>Tracking</li>
                    <li>Development</li>
                  </ul>
                </Grid>
              </Grid>
            </Grid>
            <Grid item lg={1} md={0.6}></Grid>
            <Grid
              item
              lg={5}
              md={5}
              sm={6}
              xs={6}
              className="bgvt_total_supply1"
              style={{ marginBottom: "50px" }}
            >
              <Grid container>
                <Grid item lg={3}>
                  <p style={{ color: "white", padding: "15px" }}>
                    <b>Sell Tax</b>
                  </p>
                  <img src={tax} alt="" className="tottal_suply_img" />
                </Grid>
                <Grid item lg={3}></Grid>
                <Grid item lg={5}>
                  <p style={{ color: "rgb(177,63,0)", padding: "15px" }}>
                    <b>Total Tax</b>
                  </p>
                  <p
                    style={{
                      color: "white",
                      padding: "15px",
                      marginTop: "-30%",
                    }}
                    className="total_supply_text"
                  >
                    55,676,908,445,BGVT
                  </p>
                  <ul style={{ color: "white" }}>
                    <li>Private Sale</li>
                    <li>Pre Sale</li>
                    <li>Tracking</li>
                    <li>Development</li>
                  </ul>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Container>
    </div>
  );
};

export default Benifts;
