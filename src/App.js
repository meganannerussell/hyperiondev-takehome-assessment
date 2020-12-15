import { Menu } from "./components/Menu.js";
import { TrialBlock } from "./components/TrialBlock.js";
import { BootCampCard } from "./components/BootCampCard.js";
import { RightMenuItem } from "./components/RightMenuItem.js";
import icon1 from "./assets/layer-115@2x.png";
import icon2 from "./assets/layer-114@2x.png";
import titleIcon from "./assets/questionMarkIcon.png"
import styles from "./App.css";

function App() {
  return (
    <div style={{ backgroundColor: "#FAFAFA", height: "100vh" }}>
      <Menu />
      <div className="componentsContainer">
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div className="trialBlockContainer">
            <TrialBlock />
          </div>

          <div style={{ marginTop: 40 }}>
            <h1 className="BootCampCardsHeading">Trial another Bootcamp</h1>
            <div className="BootCampCardsContainer">
              <BootCampCard icon={icon1} title="Mobile Developer Bootcamp" />
              <BootCampCard icon={icon2} title="Software Engineer Bootcamp" />
            </div>
          </div>
        </div>
        <div className="RightMenuContainer">
          <RightMenuItem
            title="Your coding journey"
            titleIcon= {titleIcon}
            icon1="1"
            icon2="4"
            line1=" Total programs written"
            line2="Total code reviews"
            border="solid"
          />
          <RightMenuItem
            title="Get more information"
            description="We're ready to help with any questions you may have"
            button1="Book a call"
            button2="Join an info session"
            border="solid"
          />
          <RightMenuItem
            title="Upgrade to the full bootcamp"
            description="Our next cohort starts 3 January 2018."
            button1="Reserve your spot"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
