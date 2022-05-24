import "./App.css";
import Dictionary from "./Dictionary";
import logo from "./undraw_Bibliophile_re_xarc.png";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="card shadow-lg p-3 mt-5 mb-5 bg-body rounded">
          <div className="card-body">
            <div className="App-header text-center">
              <img
                src={logo}
                className="App-logo img-fluid"
                alt="logo"
                width={400}
              />
            </div>
            <main className="main fs-6 fw-light mb-5 mt-5">
              <div className="welcome-text text-center fs-4 fw-light mb-3">
                What word do you want to look up?
              </div>
              <Dictionary />
            </main>
          </div>
        </div>
      </div>
      <div className="App-footer text-center fs-6 fw-lighter mb-5">
        This is an{" "}
        <a
          href="https://github.com/XENIAAPavlova/dictionary-project"
          target="blank"
        >
          open-source{" "}
        </a>
        code by Xenia.
      </div>
    </div>
  );
}
