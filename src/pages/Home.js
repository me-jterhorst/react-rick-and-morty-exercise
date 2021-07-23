import "./Home.css";
import home_img from "../images/rick-and-morty-app-cover.png";
export default function Home() {
  return (
    <section className="home">
      <h1>Thank you for coming to our Rick & Morty Page</h1>

      <img className="home__img" src={home_img} alt="Welcome to our page" />

      <h2>Developed by � Me </h2>
    </section>
  );
}
