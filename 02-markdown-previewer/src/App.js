import { Component } from "react";
import { marked } from "marked";
import "./App.css";

marked.setOptions({
  gfm: true,
  break: true,
});

const initialText = `
# This is the main heading
## This is a subheading

In markdown, you can make a text **bold** or _italic_.
You can insert  
1. ordered
2. list
3. items

or you can have
- unordered
- lists
  - with
    - multiple
      - levels
    - of indentation

> You can quote other people in blockquotes.

Insert inline code in your text: \`console.log("Hello World!")\`

And also have entire code blocks. 

\`\`\`javascript
const a = 5
const b = 7

const addNumbers = function(a, b) {
  return a + b
}

console.log(addNumbers(a, b))
\`\`\`
  

You can learn more about Markdown [here](https://www.markdownguide.org/).
![Markdown Logo](https://cdn0.iconfinder.com/data/icons/octicons/1024/markdown-512.png)
`;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: initialText,
      rendered: marked(initialText),
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = function (e) {
    const raw = e.target.value;
    const rendered = marked(raw);
    this.setState({
      text: raw,
      rendered: rendered,
    });
  };

  render() {
    return (
      <div id="app">
        <h1 className="titleHeading">Markdown Previewer</h1>
        <div id="previewer-container">
          <div className="markdown-container">
            <h2 className="header">Raw Markdown</h2>
            <textarea
              name="markdown"
              id="editor"
              className="text-field"
              cols="30"
              rows="10"
              value={this.state.text}
              onChange={this.handleChange}
            />
          </div>
          <div className="markdown-container">
            <h2 className="header">Formatted</h2>
            <div
              id="preview"
              className="text-field"
              dangerouslySetInnerHTML={{ __html: this.state.rendered }}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
