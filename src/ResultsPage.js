import logo from "./images/logo.svg";

const ResultsPage = ({ score, rating }) => {
  return (
    <main>
      <img src={logo} alt="logo" id="logo" />
      <h1>
        Your score of {score} was {rating} mate!
      </h1>
    </main>
  );
};

export default ResultsPage;
