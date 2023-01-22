export class Chat {
    openai = null;
  constructor(apikey) {
    const { Configuration, OpenAIApi } = require("openai");
    this.openai = new OpenAIApi(new Configuration({ apiKey: apikey }));
    this.text = " AI:hi\n";
  }
  async Ask(txt) {
    var s = txt.split("\n");
    txt = "";
    s.map((i) => txt+=i + " ")
    this.text += " Human:" + txt+"\n";
    const response = await this.openai.createCompletion({
      model: "text-davinci-003",
      prompt: this.text,
      temperature: 0,
      max_tokens: 150,
      top_p: 1,
      frequency_penalty: 0.0,
      presence_penalty: 0.6,
      stop: [" Human:", " AI:"],
    });
    var ans = response.data["choices"][0]["text"];
    // var  = ans+"";
    // ans = ans.slice(1, ans.length)
    this.text+= " AI:" + ans+"\n";
    // console.log(this.text);
    return ans;
  }
}
