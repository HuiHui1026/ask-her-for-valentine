import { useState } from "react";
import "./App.css";

const phrases = [
  "No",
  "Yaar dekh lo na, please Aastha?",
  "Ese mat karo yaar Aastha😭",
  "pleaseeeeee maanjaaaa meri jaan 🥺",
  "Aastha mera dil na todo aaj 💔",
  " Jaana mai katti ho jaaaugaaaaa 😡😤",
  "Kitni besharam ho tum ? Abhi tk hnn nhi ki ab krdo chalo 🥰",
  "Kuch toh sharam karo, mere pyaar ki 😡😡😡😡😡😡😡",
  "Tumse ek hnn nahi ho rahi mujhe 😞😞",
  "Ab hnn krna hi hoga wrna tum moti ho jaaogi 🥰"
];

function App() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 10 + 16;

  function handleNoClick() {
    setNoCount(noCount + 1);
  }

  function getNoButtonText() {
    return phrases[Math.min(noCount, phrases.length - 1)];
  }

  return (
    <div className="Valentine-Container">
      {yesPressed ? (
        <>
          <img
            alt="bears kissing"
            src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif"
          />
          <div className="text">Yay! Good Decision. 😘</div>
        </>
      ) : (
        <>
          <img
            alt="bear with hearts"
            src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif"
          />
          <div className="text">Will you be my Valentine?</div>
          <div>
            <button
              className="yesButton"
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Yes
            </button>
            <button onClick={handleNoClick} className="noButton">
              {getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
