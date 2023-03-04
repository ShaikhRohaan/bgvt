import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import img7 from "../../../Image/img7.png";
import diagram from "../../../Image/diagram.png";
import Button from "@mui/material/Button";
import ForumIcon from "@mui/icons-material/Forum";
import vediobg from "../../../video/bgVideo.mp4";
import "./index.css";
const Bitgame = () => {
  return (
    <div id="bit_game">
      <div className="bg_imgsecond">
        <Container>
          <Grid container className="bit_main">
            <Grid item lg={5} md={7} sm={7} xs={11} className="bit_text">
              <h2>What Is Bit Game Verse (BGVT)?</h2>
              <p>
                Introducing Bit Game Verse (BGV), the game-changing crypto
                platform that is revolutionizing the way we play and earn
                through gaming. BGV is a peer-to-peer marketplace that enables
                direct transactions between crypto traders, providing a seamless
                and secure platform for gamers to earn and trade
                cryptocurrencies.
              </p>
              <br></br>
              <p>
                But BGV is much more than just a crypto trading platform. With
                its upcoming Money Heist gaming platform, BGV is taking the
                gaming world by storm with its unique blend of popular culture
                and cutting-edge technology.<br></br> The platform features
                iconic characters like the Professor, Tokyo, and Berlin, who
                guide gamers through tasks assigned in the central bank and
                reward them with cryptocurrency.<br></br> And with the rise of
                decentralized exchanges (DEXs), BGV is at the forefront of a new
                era of gaming that prioritizes user autonomy and control. By
                using pre-funded pools of assets known as liquidity pools, BGV
                allows users to earn cryptocurrency directly from their peers
                without any intermediaries, banks, or brokers involved.<br></br>
                But BGV is much more than just a crypto trading platform. With
                its upcoming Money Heist gaming platform, BGV is taking the
                gaming world by storm with its unique blend of popular culture
                and cutting-edge technology. The platform features iconic
                characters like the Professor, Tokyo, and Berlin, who guide
                gamers through tasks assigned in the central bank and reward
                them with cryptocurrency. And with the rise of decentralized
                exchanges (DEXs), BGV is at the forefront of a new era of gaming
                that prioritizes user autonomy and control. By using pre-funded
                pools of assets known as liquidity pools, BGV allows users to
                earn cryptocurrency directly from their peers without any
                intermediaries, banks, or brokers involved.
              </p>
              <Button
                variant="contained"
                style={{
                  backgroundColor: "rgb(177,63,0)",
                  marginTop: "20px",
                  marginBottom: "20px",
                }}
              >
                See WhitePaper
              </Button>
            </Grid>

            <Grid item lg={5} md={4} sm={4} xs={10} className="bit_img">
              <img src={img7} alt="" />
            </Grid>
          </Grid>
        </Container>
      </div>

      {/* bgvt price */}
      <div style={{ backgroundColor: "black" }}>
        <Grid container>
          <Grid item lg={12} md={12} sm={12} xs={12} className="bg_video">
            <video autoPlay loop muted>
              <source src={vediobg} type="video/mp4" />
            </video>
          </Grid>
          <Container style={{ position: "absolute" }}>
            <Grid container className="bgvt_main_price">
              <Grid
                item
                lg={5}
                md={5.5}
                sm={5}
                xs={12}
                className="contract_address"
                style={{ marginTop: "15%", height: "230px" }}
              >
                <Grid container>
                  <Grid item lg={10} md={10} sm={10} xs={10}>
                    <h1 id="contact-address_resp">CONTACT ADDRESS</h1>
                    <p
                      style={{
                        paddingLeft: "20px",
                        color: "white",
                        fontFamily: "Arial, Helvetica, sans-serif",
                      }}
                    >
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered
                    </p>
                    <p
                      style={{
                        textAlign: "end",
                        color: "white",
                        fontSize: "20px",
                      }}
                      id="which_dont"
                    >
                      <b> which don't look </b>
                    </p>
                  </Grid>
                  <Grid item lg={2}>
                    <ForumIcon
                      style={{
                        color: "black",
                        fontSize: "35px",
                        marginTop: "23px",
                      }}
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid
                item
                lg={5}
                md={5}
                sm={5.7}
                xs={12}
                className="bgvt_card"
                style={{ marginTop: "15%" }}
              >
                <Container id="abc">
                  <Grid container>
                    <Grid item lg={5} md={6} sm={5} xs={7}>
                      <p
                        style={{ color: "rgb(253,231,2)", paddingTop: "30px" }}
                      >
                        $BGVT Price
                      </p>
                      <p style={{ color: "white" }}>TOKEN LAUNCHED</p>
                      <Grid container style={{ marginTop: "-9%" }}>
                        <Grid item lg={8}>
                          <p style={{ color: "rgb(253,231,2)" }}>
                            {" "}
                            414DAYS AGO{" "}
                          </p>
                        </Grid>
                      </Grid>

                      <p style={{ color: "white" }}>MARKET CAP</p>
                      <Grid container style={{ marginTop: "-9%" }}>
                        <Grid item lg={8}>
                          <p style={{ color: "rgb(69,255,0)" }}> $51,534467 </p>
                        </Grid>
                      </Grid>

                      <p style={{ color: "white" }}>TOKEN LAUNCHED</p>
                      <Grid container style={{ marginTop: "-9%" }}>
                        <Grid item lg={8}>
                          <p style={{ color: "white" }}>55.6566% </p>
                        </Grid>
                      </Grid>

                      <p style={{ color: "white" }}>TOKEN LAUNCHED</p>
                      <Grid container style={{ marginTop: "-9%" }}>
                        <Grid item lg={10}>
                          <p style={{ color: "white" }}> 188.854 sextillion </p>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item lg={1.5}></Grid>
                    <Grid item lg={5.5} xs={5} style={{ paddingTop: "30px" }}>
                      <p style={{ color: "white" }}>
                        <b>$1=12.432sqd SHIBDOGE</b>{" "}
                      </p>
                      <h3 style={{ color: "white", marginTop: "-18px" }}>
                        $0.0...00803
                      </h3>
                      <p style={{ textAlign: "center", color: "white" }}>
                        16 Zeros
                      </p>
                      <p style={{ color: "white", marginTop: "73%" }}>
                        HOLDERS COUNT
                      </p>
                      <p
                        style={{
                          color: "white",
                          textAlign: "center",
                          marginTop: "-15px",
                        }}
                      >
                        28,456
                      </p>
                    </Grid>
                  </Grid>
                </Container>
              </Grid>
            </Grid>
          </Container>
        </Grid>
        {/* <Container>
          <Grid container style={{ paddingBottom: "50px" }}>
            <Grid item lg={1} md={1} sm={1.2}></Grid>
            <Grid
              item
              lg={6}
              md={7}
              sm={7}
              xs={12}
              className="contract_address"
              style={{ marginTop: "50px" }}
            >
              <Grid container>
                <Grid item lg={10} md={10} sm={10} xs={10}>
                  <h1>CONTACT ADDRESS</h1>
                  <p
                    style={{
                      paddingLeft: "20px",
                      color: "black",
                      fontFamily: "Arial, Helvetica, sans-serif",
                    }}
                  >
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered
                  </p>
                  <p
                    style={{
                      textAlign: "end",
                      color: "white",
                      fontSize: "20px",
                    }}
                  >
                    <b> which don't look </b>
                  </p>
                </Grid>
                <Grid item lg={2}>
                  <ForumIcon
                    style={{
                      color: "black",
                      fontSize: "35px",
                      marginTop: "23px",
                    }}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container> */}
      </div>
    </div>
  );
};

export default Bitgame;
