import { conversation } from "./chat";

class message {
  constructor(side, name, text) {
    this.side = side;
    this.name = name;
    this.text = text;
  }
  text=()=> {
    console.log(conversation.text);
  }
}

class RemoteMessage {
  constructor(side, name) {
    this.side = side;
    this.name = name;
  }
  text = () => {
    console.log(conversation.text);
  };
}
