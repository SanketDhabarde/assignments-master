import "./App.css";
import Card from "./components/Card";
import ColorPicker from "./components/ColorPicker";
import Otp from "./components/Otp";

function App() {
  function handleOtp(otp: string) {
    console.log("logged In", otp);
  }
  return (
    <>
      {/* <Card
        name="Rita corrida"
        age={32}
        place="London"
        followers={83}
        likes={803}
        posts={1.4}
        image="https://a.storyblok.com/f/191576/1200x800/faa88c639f/round_profil_picture_before_.webp"
      /> */}
      {/* <ColorPicker/> */}
      <Otp length={4} onSubmit={handleOtp} />
    </>
  );
}

export default App;
