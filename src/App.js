import { Menu } from "./components/Menu.js";
import { TrialBlock } from "./components/TrialBlock.js";
import { BootCampCard } from "./components/BootCampCard.js";
import { RightMenu } from "./components/RightMenu.js";
import icon1 from "./assets/layer-115@2x.png"
import icon2 from "./assets/layer-114@2x.png"

function App() {
  return (
    <div style={{ backgroundColor: "#FAFAFA", height: "100vh" }}>
      <Menu />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          paddingLeft: 160,
          paddingTop: 100,
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <TrialBlock />
          <div style={{marginTop:40}}>
            <h1 style={{ fontFamily: "avenir heavy", fontSize: 20, marginBottom:30, marginLeft:40 }}>Trial another Bootcamp</h1>
            <div style={{ display: "flex", flexDirection: "row", justifyContent:'space-between' }}>
              <BootCampCard icon ={icon1} title="Mobile Developer Bootcamp" />
              <BootCampCard icon ={icon2} title="Software Engineer Bootcamp" />
            </div>
          </div>
        </div>
        <div>
          <RightMenu />
        </div>
      </div>
    </div>
  );
}

export default App;
