import Footer from "./components/Footer";
import Header from "./components/Header";
import Routing from "./routes/routes";
function App() {
  return (
    <>
      <main className="Rubik">
        <Header/> 
        <Routing />
        <Footer/>
      </main>
    </>
  );
}

//TODO : dont forget to remove the static route on Categoriesitem

export default App;
