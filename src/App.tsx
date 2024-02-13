import Footer from "./components/Footer";
import Header from "./components/Header";
import Routing from "./routes/routes";
function App() {
  return (
    <>
      <main className="Rubik">
        <Header/> 
        <section className="min-h-screen">       
        <Routing />
        </section>
        <Footer/>
      </main>
    </>
  );
}

export default App;
