import logo from "./logo.svg";
import "./App.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import First from "./First.jpg";
import Second from "./Second.avif";
import Third from "./Third.avif";
import Fourth from "./Fourth.avif";
import { useRef } from "react";
import { useInView } from "framer-motion";

function App() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="App">
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginRight: "5%",
          marginLeft: "5%",
        }}
      >
        <div>
          <p className="Head1">Lorem Ipsum</p>
          <p className="para1">
            The lorem ipsum is a placeholder text used in publishing and graphic
            design. This filler text is a short paragraph that contains all the
            letters of the alphabet. The characters are spread out evenly so
            that the reader's attention is focused on the layout of the text
            instead of its content.
          </p>
        </div>

        <p className="para1">
          <img className="Image1" src={Fourth} />
        </p>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          backgroundColor: "black",
        }}
      >
        <div className="divvv">
          <p className="para2">
            The lorem ipsum is a placeholder text used in publishing and graphic
            design. This filler text is a short paragraph that contains all the
            letters of the alphabet. The characters are spread out evenly so
            that the reader's attention.
          </p>
          <button className="button1">Learn More</button>
        </div>
        <div className="divvv2">
          <Carousel autoPlay>
            <div>
              <img className="Image2" src={First} />
              <div class="text">The lorem ipsum is a placeholder text used in publishing and graphic design.</div>
            </div>
            <div>
              <img className="Image2" src={Second} />
              <div class="text">The lorem ipsum is a placeholder text used in publishing and graphic design.</div>

            </div>
            <div>
              <img className="Image2" src={Third} />
              <div class="text">The lorem ipsum is a placeholder text used in publishing and graphic design.</div>

            </div>
            <div>
              <img className="Image2" src={Fourth} />
              <div class="text">The lorem ipsum is a placeholder text used in publishing and graphic design.</div>

            </div>
            <div>
              <img className="Image2" src={First} />
              <div class="text">The lorem ipsum is a placeholder text used in publishing and graphic design.</div>

            </div>
            <div>
              <img className="Image2" src={Second} />
              <div class="text">The lorem ipsum is a placeholder text used in publishing and graphic design.</div>

            </div>
          </Carousel>
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", width: "40%" }}>
        <div
          ref={ref}
          style={{
            transform: isInView ? "none" : "translateY(-200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
          class="vl"
        ></div>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <hr
            ref={ref}
            style={{
              transform: isInView ? "none" : "translateY(-200px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.6s",
            }}
            class="v2"
          />
          <div
            ref={ref}
            style={{
              transform: isInView ? "none" : "translateX(200px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.9s",
            }}
            className="box1"
          >
            Box 1
          </div>
        </div>
        <div  ref={ref}
          style={{
            transform: isInView ? "none" : "translateY(-200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.7s",
          }}
           class="vl"></div>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <hr  ref={ref}
            style={{
              transform: isInView ? "none" : "translateY(-200px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.8s",
            }} class="v3" />
          <div
            ref={ref}
            style={{
              transform: isInView ? "none" : "translateX(200px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.9s",
            }}
            className="box2"
          >
            Box 2
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
