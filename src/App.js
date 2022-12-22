import { Container } from "react-bootstrap";
import MyHeader from "./components/Header";
import Footer from "./components/Footer";
import HomeScreens from "./screens/HomeScreens";


function App() {
  return (
    <div>
      <MyHeader />
      <main className="py-3">
        <Container>
          <HomeScreens/>
        </Container>
      </main>
      <Footer />
    </div>
  );
}

export default App;
