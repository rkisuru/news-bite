import { Nav } from "./Components/Nav";
import NewsBoard from "./Components/NewsBoard";
import { NewsProvider } from "./Components/NewsContext";

export default function App() {
  return (
    <div>
      <NewsProvider>
        <Nav />
        <NewsBoard />
      </NewsProvider>
    </div>
  );
}
