import "./App.css";
import "./Results.css";
import Dictionary from "./Dictionary";
import logo from "./undraw_Bibliophile_re_xarc.png";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-8">
            <div className="card shadow-lg p-3 mt-5 mb-5 bg-body rounded">
              <div className="card-body">
                <div className="App-header text-center">
                  <img
                    src={logo}
                    className="App-logo img-fluid mt-3"
                    alt="logo"
                    width={400}
                  />
                </div>
                <section className="main fs-6 mb-5 mt-5">
                  <div className="welcome-text text-center fs-4 fw-light mb-5">
                    What word do you want to look up?
                  </div>
                  <Dictionary />
                </section>
              </div>
            </div>
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
