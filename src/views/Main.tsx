import Footer from "./Footer";
import Heading from "./Heading";
import Products from "./Products";
import Testimonial from "./Testimonial";
import Videos from "./Videos";

function App() {
  return (
    <>
      <main className="container mx-auto mt-2 mb-8 px-4">
        <section className="text-center">
          <Heading />
        </section>
        <section>
          <Videos />
        </section>
        <section className="text-center">
          <Products />
        </section>
        <section className="text-center">
          <Testimonial />
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
