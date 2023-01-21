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
