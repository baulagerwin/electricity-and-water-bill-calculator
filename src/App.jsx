import "./App.css";
import BillCalculator from "./components/BillCalculator";
import Container from "./containers/Container";
import TwoGrids from "./layouts/TwoGrids";
import MainSection from "./sections/MainSection";
import { GiElectric, GiWaterDrop } from "react-icons/gi";

function App() {
  return (
    <MainSection>
      <Container>
        <TwoGrids>
          <BillCalculator
            themeColor="#fc7112"
            icon={
              <GiElectric style={{ fontSize: "3.8rem", color: "#fc7112" }} />
            }
            heading="Meralco Bill Calculator"
          />
          <BillCalculator
            themeColor="#0EA4C9"
            icon={
              <GiWaterDrop style={{ fontSize: "3.8rem", color: "#0EA4C9" }} />
            }
            heading="Manila Water Bill Calculator"
          />
        </TwoGrids>
      </Container>
    </MainSection>
  );
}

export default App;
