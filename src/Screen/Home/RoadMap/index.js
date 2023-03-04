import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import img10 from '../../../Image/img10.png'
import "./index.css";

const RoadMap = () => {
  return (
    <div className="bg_imgsecond" id='raod_map'>
      <h1
        style={{
          textAlign: "center",
          color: "white",
          paddingTop: "50px",
          paddingBottom: "10px",
          fontFamily:'Times New Roman, Times, serif'

        }}
      >
        BG VERSE ROADMAP
      </h1>
      <Grid container className="roadmap_main">
        
        <Grid item lg={3.5} md={3.5} xs={9.5}>
          <h4 style={{ color: "rgb(177,63,0)" }}>
            <b>Q1-2022</b>
          </h4>
          <ul style={{ color: "white" }}>
            <li>Core Team Bussiness Plain Generated</li>
            <li>BGV Token Sale Speed Round</li>
            <li>BGV Token Sale Private Round</li>
            <li>Game Alpha Version Round</li>
          </ul>
        </Grid>

        <Grid item lg={3.5} md={3.5} xs={9.5}>
          <h4 style={{ color: "rgb(177,63,0)" }}>
            <b>Q2-2022</b>
          </h4>
          <ul style={{ color: "white" }}>
            <li>Core Team Bussiness Plain Generated</li>
            <li>BGV Token Sale Speed Round</li>
            <li>BGV Token Sale Private Round</li>
            <li>Game Alpha Version Round</li>
          </ul>
        </Grid>

        <Grid item lg={3.5} md={3.5} xs={9.5}>
          <h4 style={{ color: "rgb(177,63,0)" }}>
            <b>Q3-2022</b>
          </h4>
          <ul style={{ color: "white" }}>
            <li>Core Team Bussiness Plain Generated</li>
            <li>BGV Token Sale Speed Round</li>
            <li>BGV Token Sale Private Round</li>
            <li>Game Alpha Version Round</li>
          </ul>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item lg={12} md={12} xs={12} className='img_road_map'>
            <img src={img10} alt='' style={{padding:'12px'}}/>
        </Grid>
      </Grid>
      <Grid container className="roadmap_main" style={{marginTop:'-20%',paddingBottom:'50px'}}> 
        
        <Grid item lg={4.5} md={4.5} xs={9.5}>
          <h4 style={{ color: "rgb(177,63,0)" }}>
            <b>Q1-2022</b>
          </h4>
          <ul style={{ color: "white" }}>
            <li>Core Team Bussiness Plain Generated</li>
            <li>BGV Token Sale Speed Round</li>
            <li>BGV Token Sale Private Round</li>
            <li>Game Alpha Version Round</li>
          </ul>
        </Grid>

        <Grid item lg={4} md={4} xs={9.5}>
          <h4 style={{ color: "rgb(177,63,0)" }}>
            <b>Q2-2022</b>
          </h4>
          <ul style={{ color: "white" }}>
            <li>Core Team Bussiness Plain Generated</li>
            <li>BGV Token Sale Speed Round</li>
            <li>BGV Token Sale Private Round</li>
            <li>Game Alpha Version Round</li>
          </ul>
        </Grid>
      </Grid>
    </div>
  );
};

export default RoadMap;
