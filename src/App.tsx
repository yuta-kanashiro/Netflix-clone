import { requests } from "./request";
import { Banner } from "./components/Banner";
import { Row } from "./components/Row";

function App() {
  return (
    <div className="App">
      <Banner />
      <Row
        title="NETFLIX ORIGUINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="News Movies" fetchUrl={requests.fetchNewsMovies} />
      <Row title="Kids Movies" fetchUrl={requests.fetchKidsMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentMovies} />
    </div>
  );
}

export default App;
