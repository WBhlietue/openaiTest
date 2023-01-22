import { Chat } from "./Chat";

var chat;

function ask(txt) {
  chat.Ask(txt).then((res) => {
    console.log(res);
  });
}

function App() {
   chat = new Chat("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");
  return (
    <div>
      <textarea id="t"></textarea>
      <button
        onClick={() => {
          ask(document.getElementById("t").value);
        }}
      >
        Ask
      </button>
    </div>
  );
}

export default App;
