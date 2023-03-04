import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import img1 from '../../../Image/Real/img1.jpg'
import img2 from '../../../Image/Real/img2.jpg'
import img3 from '../../../Image/Real/img3.jpg'
import img4 from '../../../Image/Real/img4.jpg'
import img5 from '../../../Image/Real/img5.jpg'
import img7 from '../../../Image/Real/img7.jpg'
import img8 from '../../../Image/Real/img8.jpg'
import img9 from '../../../Image/Real/img9.jpg'
import img16 from '../../../Image/img16.jpg'
import './index.css'

const BgReal = () => {
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
    The Team Behind The Phenomenon
      </h1>
      <p style={{ textAlign: "center", color: "white" }}>
      Our team met the community at CRYPTO EXPO DUBAI 2022
      </p>

      <Container>
   
        <Grid container className="mango_real_img" >
          <Grid item lg={3.5} md={3.5} sm={5.5} xs={11.4} className="real_mango_img">
            <img src={img1} alt="" />
          </Grid>

          <Grid item lg={3.5} md={3.5} sm={5.5} xs={11.4} className="real_mango_img">
            <img src={img2} alt="" />
          </Grid>

          <Grid item lg={3.5} md={3.5} sm={5.5} xs={11.4} className="real_mango_img">
            <img src={img3} alt="" />
          </Grid>

          <Grid item lg={3.5} md={3.5} sm={5.5} xs={11.4} className="real_mango_img">
            <img src={img4} alt="" />
          </Grid>

          <Grid item lg={3.5} md={3.5} sm={5.5} xs={11.4} className="real_mango_img">
            <img src={img5} alt="" />
          </Grid>

          <Grid item lg={3.5} md={3.5} sm={5.5} xs={11.4} className="real_mango_img">
            <img src={img16} alt="" />
          </Grid>

          <Grid item lg={3.5} md={3.5} sm={5.5} xs={11.4} className="real_mango_img">
            <img src={img7} alt="" />
          </Grid>

          <Grid item lg={3.5} md={3.5} sm={5.5} xs={11.4} className="real_mango_img">
            <img src={img8} alt="" />
          </Grid>
          <Grid item lg={3.5} md={3.5} sm={5.5} xs={11.4} className="real_mango_img">
            <img src={img9} alt=""  />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default BgReal;
