import { useState } from "react";
import "./App.css";

const phrases = [
  "No",
  "Yaar maan jaao na, please jaan",
  "Itna bhi mt gussa hou 😭",
  "pleaseeeeee maanjaaaao meri jaan 🥺",
  "Radhikaaaa ese na kro :(",
  "Jaaao mai hi katti ho jaaaugaaaaa 😡😤",
  "Kitni besharam ho tum ? Abhi tk maani nhi ? maan jaao chlo 🥰",
  "Kuch toh sharam karo, mere pyaar ki 😡😡😡😡😡😡😡",
  "Tumse ek hnn nahi ho rahi mujhe 😞😞",
  "Is radhika paglu ki baaat maan jaaao wrna......",
  "Ab manna hi hoga tmko, wrna moti ho jaaogi 🥰"
];

function App() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

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
          <div className="text">Yay! Good girl. 😘</div>
        </>
      ) : (
        <>
          <img
            alt="bear with hearts"
            src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif"
          />
          <div className="text">Abhi bhi gussa ho darling?</div>
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
