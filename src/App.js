import "./App.css";
import Dictionary from "./Dictionary";
import logo from "./undraw_Bibliophile_re_xarc.png";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="App-header text-center">
              <img
                src={logo}
                className="App-logo img-fluid"
                alt="logo"
                width={400}
              />
            </div>
            <main className="main fs-6 fw-light mb-5 mt-5">
              <div className="welcome-text text-center fs-4 fw-light mb-5">
                What word do you want to look up?
              </div>
              <Dictionary />
            </main>
          </div>
          <div className="App-footer text-center fs-6 fw-lighter">
            This is an open-source code by Xenia.
          </div>
        </div>
      </div>
    </div>
  );
}
