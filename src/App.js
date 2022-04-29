import React from "react";
import axios from "axios";
import "./App.css";
import Popup from "./Popup";

const headers = {
  "Content-Type": "application/json",
  apikey: "036d2025789d4ca496a6564a87b0c36d",
};

function App() {
  const [text, setText] = React.useState("");
  const [returnUrl, setReturnUrl] = React.useState("");
  const [isShowResult, setIsShowResult] = React.useState(false);

  async function shorten(url) {
    let endpoint = "https://api.rebrandly.com/v1/links";
    let linkRequest = {
      destination: url,
      domain: { fullName: "rebrand.ly" },
    };
    const apiCall = {
      method: "post",
      url: endpoint,
      data: linkRequest,
      headers: headers,
    };
    let apiResponse = await axios(apiCall);
    let link = apiResponse.data;
    setReturnUrl(link.shortUrl);
  }

  function handleChange(e) {
    setText(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    shorten(text);
  }

  function handlePopup() {
    setIsShowResult((isShowResult) => !isShowResult);
  }

  function closePopup() {
    setIsShowResult((isShowResult) => !isShowResult);
  }

  return (
    <div className="App">
      <h1>Want to shorten your link, you come to the right place</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <h3 style={{ margin: "auto" }}>Type in your links</h3>
          <br />
          <input
            type="text"
            className="input"
            value={text}
            onChange={handleChange}
          />
        </label>
        <br />
        <input
          type="submit"
          value="Get your link"
          onClick={handlePopup}
          className="btn"
        />
      </form>
      <Popup
        isShowResult={isShowResult}
        returnUrl={returnUrl}
        handleClick={closePopup}
      />
    </div>
  );
}

export default App;
