import Home from "./component/Home";
import Mobile from "./component/Mobile";
import Sidebar from "./component/Sidebar";
import About from "./component/About";
import Services from "./component/Services";
import Portfolio from "./component/Portfolio";
import News from "./component/News";
import Contact from "./component/Contact";

function App() {
  return (
    <div
      className="elisc_tm_all_wrap w-full h-auto clear-both float-left relative"
      data-magic-cursor="show"
      data-enter="fadeInLeft"
      data-exit=""
    >
      <div className="dodo_tm_one_page_wrapper">
        <Mobile />
        <Sidebar />
        <div className="elisc_tm_mainpart w-full min-h-[100vh] clear-both float-left pl-[370px]">
          <div className="mainpart_inner w-full min-h-[100vh] clear-both float-left relative">
            <Home />
            <About />
            <Services />
            <Portfolio />
            <News />
            <Contact />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
