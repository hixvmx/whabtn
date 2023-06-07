import Head from "next/head";
import { useState } from "react";
import fs from "fs";
import path from "path";

export async function getStaticProps() {
   const folderPath = path.resolve(".", "assets", "icons");

   const files = fs.readdirSync(folderPath);

   const fileContents = await Promise.all(
      files.map(async (fileName) => {
         const filePath = path.join(folderPath, fileName);
         const content = await fs.promises.readFile(filePath, "utf-8");
         return { fileName, content };
      })
   );

   return {
      props: {
         icons: fileContents,
      },
   };
}

export default function Index({ icons }) {
   const AvailablePositions = [
      { value: "TL", label: "Top Left", style: "left:1rem;top:1rem;" },
      {
         value: "TC",
         label: "Top Center",
         style: "top:1rem;left:50%;transform:translateX(-50%);",
      },
      { value: "TR", label: "Top Right", style: "right:1rem;top:1rem;" },
      {
         value: "CL",
         label: "Center Left",
         style: "left:1rem;top:50%;transform:translateY(-50%);",
      },
      {
         value: "CC",
         label: "Center Center",
         style: "left:50%;top:50%;transform:translate(-50%,-50%);",
      },
      {
         value: "CR",
         label: "Center Right",
         style: "right:1rem;top:50%;transform:translateY(-50%);",
      },
      { value: "BL", label: "Bottom Left", style: "left:1rem;bottom:1rem;" },
      {
         value: "BC",
         label: "Bottom Center",
         style: "left:50%;bottom:1rem;transform:translateX(-50%);",
      },
      { value: "BR", label: "Bottom Right", style: "right:1rem;bottom:1rem;" },
   ];

   const [selectedIconIndex, setSelectedIconIndex] = useState(0);
   const [phoneNumber, setPhoneNumber] = useState("");
   const [bgColor, setBgColor] = useState("#62d33f");
   const [iconColor, setIconColor] = useState("#ffffff");
   const [padding, setPadding] = useState(10);
   const [iconSize, setIconSize] = useState(30);
   const [borderRadius, setBorderRadius] = useState(50);
   const [position, setPosition] = useState(AvailablePositions.at(-1).value);
   const [ShadowXoffset, setShadowXoffset] = useState(0);
   const [ShadowYoffset, setShadowYoffset] = useState(5);
   const [ShadowBlur, setShadowBlur] = useState(20);
   const [ShadowSpread, setShadowSpread] = useState(0);
   const [ShadowColor, setShadowColor] = useState("#B0B0B0");

   const [isPreviewCode, setIsPreviewCode] = useState(true);

   function fn_icon(iconNumber) {
      const icon = icons[iconNumber].content;

      return icon.replace(
         /<svg/g,
         `<svg style="width:${iconSize}px;height:${iconSize}px;fill:${iconColor};"`
      );
   }

   function fn_position(code) {
      return AvailablePositions.find((item) => item.value === code).style;
   }

   const ShadowCode = `box-shadow:${ShadowXoffset}px ${ShadowYoffset}px ${ShadowBlur}px ${ShadowSpread}px ${ShadowColor};`;

   const svgTag = fn_icon(selectedIconIndex);

   const buttonTag = `<button style="background:${bgColor};display:flex;padding:${padding}px;border-radius:${borderRadius}%;${ShadowCode};">\n${svgTag}\n</button>`;

   const aTag = `<a href="https://wa.me/${phoneNumber}" target="_blank">\n${buttonTag}\n</a>`;

   const divTag = `<div style="position:absolute;z-index:999;${fn_position(
      position
   )}">\n${aTag}\n</div>`;

   const ButtonCode = divTag;

   function createMarkup(HtmlCode) {
      if (HtmlCode) {
         return { __html: HtmlCode };
      }
   }

   return (
      <>
         <Head>
            <title>Easy to create whatsapp button.</title>
            <meta
               name="viewport"
               content="width=device-width, initial-scale=1"
            />
         </Head>
         <div className="main">
            <div className="aside">
               {/* Aside Header */}
               <a href="/">
                  <div className="aside_header">
                     <img src="/favicon.png" alt="WHABTN" />
                     <div>
                        <h1>WHABTN</h1>
                        <p>Easy to create whatsapp button.</p>
                     </div>
                  </div>
               </a>

               {/* Aside Body */}
               <div className="aside_body">
                  <div className="group">
                     <span className="group_title">icon style</span>
                     <div className="icon_style">
                        {icons.map((icon, index) => (
                           <button
                              key={`icon-${index}`}
                              onClick={(e) => setSelectedIconIndex(index)}
                              type="button"
                              dangerouslySetInnerHTML={createMarkup(
                                 icon.content
                              )}
                           />
                        ))}
                     </div>
                  </div>

                  <div className="group">
                     <span className="group_title">Colors</span>
                     <div className="colors">
                        <input
                           onChange={(e) => setBgColor(e.target.value)}
                           value={bgColor}
                           type="color"
                           id="BGColor"
                           hidden
                        />
                        <input
                           onChange={(e) => setIconColor(e.target.value)}
                           value={iconColor}
                           type="color"
                           id="IconColor"
                           hidden
                        />
                        <label htmlFor="BGColor">
                           Background Color
                           <div style={{ background: bgColor }} />
                        </label>
                        <label htmlFor="IconColor">
                           Icon Color
                           <div style={{ background: iconColor }} />
                        </label>
                     </div>
                  </div>

                  <div className="group">
                     <span className="group_title">Padding</span>
                     <input
                        onChange={(e) => setPadding(+e.target.value)}
                        value={padding}
                        type="range"
                     />

                     <span className="group_title">Icon size</span>
                     <input
                        onChange={(e) => setIconSize(+e.target.value)}
                        value={iconSize}
                        type="range"
                     />

                     <span className="group_title">Border radius</span>
                     <input
                        onChange={(e) => setBorderRadius(+e.target.value)}
                        value={borderRadius}
                        type="range"
                     />
                  </div>

                  <div className="group">
                     <span className="group_title">Position</span>
                     <div className="position">
                        {AvailablePositions.map((position, index) => (
                           <button
                              key={`position-${position.value}`}
                              onClick={(e) => setPosition(position.value)}
                              title={position.label}
                           >
                              {position.value}
                           </button>
                        ))}
                     </div>
                  </div>

                  <div className="group">
                     <span className="group_title">Shadow</span>
                     <div className="shadow">
                        <div className="numz">
                           <input
                              onChange={(e) =>
                                 setShadowXoffset(+e.target.value)
                              }
                              value={ShadowXoffset}
                              type="number"
                           />
                           <input
                              onChange={(e) =>
                                 setShadowYoffset(+e.target.value)
                              }
                              value={ShadowYoffset}
                              type="number"
                           />
                           <input
                              onChange={(e) => setShadowBlur(+e.target.value)}
                              value={ShadowBlur}
                              type="number"
                           />
                           <input
                              onChange={(e) => setShadowSpread(+e.target.value)}
                              value={ShadowSpread}
                              type="number"
                           />
                        </div>
                        <input
                           onChange={(e) => setShadowColor(e.target.value)}
                           value={ShadowColor}
                           type="color"
                           id="ShadowColor"
                           hidden
                        />
                        <label htmlFor="ShadowColor">
                           <div style={{ background: ShadowColor }}></div>
                        </label>
                     </div>
                  </div>
               </div>
            </div>

            <div className="content">
               {/* Preview */}
               <div className="website_body">
                  <div className="NumberAndBtn">
                     <input
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        value={phoneNumber}
                        type="text"
                        placeholder="+212 000 000 000"
                     />
                     <button
                        onClick={(e) =>
                           setIsPreviewCode(isPreviewCode ? false : true)
                        }
                        className="copyCodeBtn"
                     >
                        {isPreviewCode ? "Html Code" : "Preview"}
                     </button>
                  </div>

                  {(isPreviewCode && (
                     <div className="preview">
                        <header>header</header>
                        <main>
                           <aside>aside</aside>
                           <article>article</article>
                        </main>
                        <footer>footer</footer>
                        <div
                           dangerouslySetInnerHTML={createMarkup(ButtonCode)}
                        />
                     </div>
                  )) || (
                     <>
                        <div className="showCode">
                           <pre>
                              <code>{ButtonCode}</code>
                           </pre>
                        </div>
                        <button
                           onClick={() => {
                              navigator.clipboard.writeText(ButtonCode);
                              alert("Copied!");
                           }}
                           className="CC_Btn"
                        >
                           Copy Code
                        </button>
                     </>
                  )}
               </div>

               <div className="footer">
                  <p id="by">
                     made with <span>❤</span> by{" "}
                     <a href="https://hixvm.com" target="_blank">
                        hixvm
                     </a>
                  </p>
                  <ul id="social">
                     <li>
                        <a href="https://twitter.com/hixvmx/" target="_blank">
                           <svg viewBox="0 0 24 24">
                              <path
                                 fillRule="evenodd"
                                 clipRule="evenodd"
                                 d="M14.8486 5.65845C13.1442 5.65845 11.7626 7.0401 11.7626 8.74446C11.7626 8.95304 11.7831 9.15581 11.822 9.35119C11.8846 9.66589 11.7924 9.99153 11.5741 10.2267C11.3558 10.4619 11.0379 10.578 10.7194 10.5389C8.51116 10.268 6.50248 9.35556 4.88498 7.9954C4.91649 8.59732 5.12515 9.23671 5.57799 9.90654L6.25677 10.9106L5.14211 11.3863L4.92704 11.4781C5.0869 11.6609 5.2791 11.8487 5.49369 12.0332C5.73717 12.2425 5.97247 12.4165 6.14726 12.5381C6.23408 12.5985 6.30452 12.645 6.35171 12.6755C6.37527 12.6907 6.39294 12.7018 6.40383 12.7086L6.41495 12.7155L6.41519 12.7157L6.41551 12.7159L6.41578 12.7161L6.41619 12.7163L6.41647 12.7165L7.96448 13.655L6.34397 14.4653C6.26374 14.5054 6.18367 14.5412 6.10393 14.573C6.42924 14.8471 6.82517 15.0995 7.2464 15.2986L8.63623 15.9556L7.47226 16.9598C6.8369 17.508 6.19778 17.9166 5.36946 18.1326C6.59681 18.7875 8.00315 19.1596 9.49941 19.1596C14.3045 19.1596 18.1746 15.325 18.1746 10.6256V10.1059L18.5998 9.80721C19.2636 9.34107 19.7329 8.71068 20.0689 7.99004H18.5398H17.9084L17.637 7.41994C17.1401 6.37633 16.0772 5.65845 14.8486 5.65845ZM3.56882 12.9581C3.38031 13.174 3.29093 13.4642 3.33193 13.7553C3.44474 14.5563 3.92441 15.2462 4.45444 15.7728C4.59838 15.9158 4.75232 16.0531 4.91396 16.184C4.88926 16.1909 4.86437 16.1975 4.83925 16.2038C4.35789 16.3243 3.70926 16.3494 2.62755 16.2434C2.20934 16.2024 1.81014 16.4273 1.62841 16.8062C1.44668 17.185 1.5212 17.6371 1.81492 17.9376C3.75693 19.9245 6.48413 21.1596 9.49941 21.1596C15.212 21.1596 19.8978 16.7239 20.1628 11.126C21.4521 10.0429 22.0976 8.57673 22.4458 7.24263C22.5241 6.94292 22.459 6.62387 22.2696 6.37873C22.0803 6.13359 21.788 5.99004 21.4783 5.99004H19.1247C18.2201 4.58853 16.6437 3.65845 14.8486 3.65845C12.1796 3.65845 9.99072 5.71435 9.7793 8.32892C7.91032 7.84456 6.2705 6.78758 5.05863 5.35408C4.83759 5.09261 4.49814 4.9624 4.15894 5.00897C3.81974 5.05554 3.52794 5.27241 3.38555 5.58378C2.78087 6.90597 2.66434 8.43104 3.34116 9.98046L3.10746 10.0802C2.64466 10.2777 2.40073 10.7884 2.5379 11.2725C2.72276 11.925 3.14129 12.5011 3.56882 12.9581Z"
                              ></path>
                           </svg>
                        </a>
                     </li>
                     <li>
                        <a href="https://github.com/hixvmx/" target="_blank">
                           <svg viewBox="0 0 48 48">
                              <g>
                                 <path
                                    d="M0 .011h48v48H0v-48z"
                                    fill="none"
                                 ></path>
                                 <path d="M39.155 13.946c-.214-.604-.538-1.212-.999-1.869.848-3.154.253-5.792.225-5.915l-.365-1.564-1.606.019c-.15.002-3.48.063-6.724 1.955a29.635 29.635 0 0 0-11.371 0c-3.243-1.892-6.573-1.953-6.724-1.955l-1.607-.02-.365 1.564c-.028.123-.623 2.761.225 5.915-.461.657-.785 1.266-.999 1.869-1.187 3.356-1.187 6.76.001 10.117 1.07 3.023 4.697 6.116 7.225 6.862.851.251 1.704.422 2.558.545A5.236 5.236 0 0 0 18 34.004v1.281c-.062.036-.127.065-.187.108-.289.211-2.869 1.967-5.505.09-.93-.946-1.386-1.639-1.826-2.309-.988-1.5-1.841-2.586-4.588-3.96a2 2 0 1 0-1.789 3.579c1.991.995 2.341 1.525 3.035 2.581.515.781 1.155 1.754 2.445 3.044l.215.186c1.692 1.27 3.447 1.723 5.053 1.723A9.286 9.286 0 0 0 18 39.76v4.253h4V34.004c0-1.103.897-2 2-2s2 .897 2 2v10h4v-10c0-.955-.23-1.803-.628-2.534a18.287 18.287 0 0 0 2.558-.545c2.527-.746 6.154-3.839 7.226-6.863 1.187-3.357 1.187-6.76-.001-10.116zm-3.77 8.781c-.591 1.667-3.167 3.942-4.588 4.362-4.509 1.331-9.083 1.332-13.594 0-1.421-.42-3.997-2.695-4.587-4.361-.875-2.472-.853-4.969-.001-7.447.485-1.41 1.724-2.427 1.724-2.427l-.398-1.08a9.24 9.24 0 0 1-.548-2.886c.992.233 2.247.664 3.416 1.459l.716.487.845-.188a25.659 25.659 0 0 1 11.262 0l.845.188.716-.487c1.167-.794 2.423-1.225 3.415-1.458a9.169 9.169 0 0 1-.547 2.885l-.398 1.08s1.093.81 1.724 2.427c.951 2.441.872 4.976-.002 7.446z"></path>
                              </g>
                           </svg>
                        </a>
                     </li>
                  </ul>
               </div>
            </div>
         </div>
      </>
   );
}
