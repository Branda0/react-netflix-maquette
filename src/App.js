import "./App.css";
import data from "./assets/data/movies_rnexgr.json";
import Section from "./components/Section";

function App() {
  return (
    <div className="app-container">
      <img
        className="logo"
        src="https://lereacteur-react-netflix.netlify.app/static/media/logo.696c2101.png"
        alt="logo"
      />
      {data.map((section, index) => {
        return <Section key={index} category={section.category} images={section.images} />;
      })}
      ;
    </div>
  );
}

export default App;
