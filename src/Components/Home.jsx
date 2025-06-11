import React from "react";
import '../style/Home.css'

function Home() {
  return (
    <div>
      <div className="flex -mt-10 relative">
        <div className="w-full px-4 max-w-screen-xl mx-auto">
          <svg
            viewBox="0 0 406 368"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="pointer-events-none absolute top-0 left-1/2 -translate-y-[80px] sm:-translate-y-[180px] -translate-x-1/2 w-[300px] sm:w-[400px] md:w-[650px]"
          >
            <path
              d="M314.899 203.5L314.899 349.43L162.5 209.053M314.899 203.5L283.037 203.586M314.899 203.5L337.881 203.586L381 171.109L314.899 171.109M162.5 209.053L118.044 170.96L157.5 171.109M162.5 209.053L65.5 301.465L20.5595 301.465L137.482 189.156M200.5 171.109L283.037 96.5L283.037 171.109M200.5 171.109L283.037 171.109M200.5 171.109L157.5 171.109M283.037 203.586L210.846 203.123L283.037 271.086L283.037 203.586ZM283.037 171.109L314.899 171.109M157.5 171.109L316.135 20.4322L314.899 171.109"
              stroke="#1F2667"
              strokeOpacity="0.9"
              strokeWidth="10"
            />
            <path
              d="M314.899 203.5L314.899 349.43L162.5 209.053M314.899 203.5L283.037 203.586M314.899 203.5L337.881 203.586L381 171.109L314.899 171.109M162.5 209.053L118.044 170.96L157.5 171.109M162.5 209.053L65.5 301.465L20.5595 301.465L137.482 189.156M200.5 171.109L283.037 96.5L283.037 171.109M200.5 171.109L283.037 171.109M200.5 171.109L157.5 171.109M283.037 203.586L210.846 203.123L283.037 271.086L283.037 203.586ZM283.037 171.109L314.899 171.109M157.5 171.109L316.135 20.4322L314.899 171.109"
              stroke="url(#paint0_linear)"
              strokeWidth="10"
            />
            <defs>
              <linearGradient
                id="paint0_linear"
                x1="205.549"
                y1="20.0169"
                x2="204.338"
                y2="342.461"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#1595B6" />
                <stop offset="1" stopColor="#1595B6" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
          <div className="relative ml-4 md:ml-12">
            <h1 className="pointer-events-none text-4xl md:text-[64px] font-['Spartan'] mr-12">
              Anurag Singh
            </h1>
            <p className="pointer-events-none font-['Merriweather'] italic my-4 md:my-8">
              MERN Stack Developer
            </p>
            <button className="bg-[#4595eb] py-2 px-5 rounded font-extrabold bg-gradient-to-l from-[#1595b6] to-[#1f2667e6] relative hover:scale-110 ease-in-out duration-100 group">
              About Me
              <svg
                xmlns:dc="http://purl.org/dc/elements/1.1/"
                xmlns:cc="http://creativecommons.org/ns#"
                xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
                xmlns:svg="http://www.w3.org/2000/svg"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
                xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
                version="1.1"
                x="0px"
                y="0px"
                width="44"
                height="44"
                viewBox="0 0 100 100"
                className="absolute top-1/2 -translate-y-1/2 -right-7 group-hover:-right-8 ease-in-out duration-100"
              >
                <g transform="translate(0,-952.36218)">
                  <path
                    className="st0"
                    d="m 88.999835,1002.3621 c 0,-0.4628 -0.2799,-1.0773 -0.5639,-1.3755 l -15.9997,-17.00026 c -0.747,-0.7723 -1.9572,-0.8618 -2.8281,-0.078 -0.7786,0.7007 -0.798,2.0673 -0.078,2.8282 l 12.8435,13.62516 -69.37347,0 c -1.1046,0 -2,0.8954 -2,2 0,1.1046 0.8954,2.0001 2,2.0001 l 69.37347,0 -12.8435,13.6252 c -0.7199,0.7608 -0.6688,2.0938 0.078,2.8281 0.7885,0.7752 2.0925,0.7062 2.8281,-0.078 l 15.9997,-17.0002 c 0.4701,-0.4611 0.556,-0.9052 0.5639,-1.3748 z"
                    fill="#fff"
                    fillOpacity="1"
                    stroke="white"
                    strokeWidth="2"
                    marker="none"
                    visibility="visible"
                    display="inline"
                    overflow="visible"
                  />
                </g>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
