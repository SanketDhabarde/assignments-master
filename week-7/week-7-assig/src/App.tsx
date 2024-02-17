import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <>
      <Card
        name="Rita corrida"
        age={32}
        place="London"
        followers={83}
        likes={803}
        posts={1.4}
        image="https://a.storyblok.com/f/191576/1200x800/faa88c639f/round_profil_picture_before_.webp"
      />
    </>
  );
}

export default App;
