import React from "react";
import selfie from "../assets/images/sunsetBackgroundSquare.jpg";

const styles = {
  heroSubtitle: {
    "backgroundColor": "rgb(17, 30, 48)",
    "padding": "5px",
    "marginRight": "2vh",
    "borderRadius": "15%",
    "borderStyle": "outset",
    "borderColor": "rgb(12, 25, 43)"
  }
}

export default function Home() {
  return (
    <div>
      <div className="hero" alt="The word developer on a dark background surrounded by yellow angle brackets">
        <img src={selfie} alt="Phoenix Staley in a white cardigan, wearing square glasses, with the sunset in the background" className="pineapple-shirt" />
        <div> </div> {/* This div helps utilize the flex-between property */}
      </div>

      <main className="flex-container main-section" id="about-me">
            <aside className="sidebar flex-container">
                <h2 className="section-heading">Su di Me</h2>
            </aside>
            <div className="content">
                <p>
                  Benvenuti al mio sito web! Sono una sviluppatrice di JavaScript, con un certificazione della Università di Washington.
                  Sto studiando per una laurea in Computer Science, ma sto cercando per un lavoro mentre finisco la laurea, oppure per una estate.
                  Avevo fatto videogiochi per divertimento, quando ero giovane. Dopo di quello, il mio desiderio per imparare
                  e continuare sviluppare non è mai cessato.
                </p>
                <br />
                <p>
                  Con il link al mio portolio sopra questo, Lei può vedere progetti che ho sviluppato,
                  con una squadra o senza una.
                </p>
            </div>
        </main>
    </div>
  );
}
