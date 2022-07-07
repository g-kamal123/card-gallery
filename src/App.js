import Gallery from "./components/Gallery";

let gallery = [
  {
    heading: "Html",
    subheading: "Checkbox",
    color: "green",
    content:
      "Note that in some flavors of IE, the checkbox.checked value won't stick unless you set it AFTER the control's been appended to the page",
  },
  {
    heading: "Questionaire",
    subheading: "Answer",
    color: "red",
    content:
      "This is a code only answer, Can you explain the code? How does it differ from existing answers?",
  },
  {
    heading: "Html",
    subheading: "Paragraph",
    color: "blue",
    content:
      "A paragraph always starts on a new line, and browsers automatically add some white space (a margin) before and after a paragraph.",
  },
  {
    heading: "Nature",
    subheading: "WWF",
    color: "grey",
    content:
      "For nearly 60 years, WWF has been protecting the future of nature. The world's leading conservation organization, WWF works in 100 countries and is supported by more than one million members in the United States and close to five million globally",
  },
  {
    heading: "Nature",
    subheading: "WWF",
    color: "yellowgreen",
    content:
      "For nearly 60 years, WWF has been protecting the future of nature. The world's leading conservation organization, WWF works in 100 countries and is supported by more than one million members in the United States and close to five million globally",
  },
  {
    heading: "Nature",
    subheading: "WWF",
    color: "white",
    content:
      "For nearly 60 years, WWF has been protecting the future of nature. The world's leading conservation organization, WWF works in 100 countries and is supported by more than one million members in the United States and close to five million globally",
  },
  {
    heading: "Nature",
    subheading: "WWF",
    color: "grey",
    content:
      "For nearly 60 years, WWF has been protecting the future of nature. The world's leading conservation organization, WWF works in 100 countries and is supported by more than one million members in the United States and close to five million globally",
  },
  {
    heading: "Nature",
    subheading: "WWF",
    color: "indianred",
    content:
      "For nearly 60 years, WWF has been protecting the future of nature. The world's leading conservation organization, WWF works in 100 countries and is supported by more than one million members in the United States and close to five million globally",
  },
  {
    heading: "Nature",
    subheading: "WWF",
    color: "blueviolet",
    content:
      "For nearly 60 years, WWF has been protecting the future of nature. The world's leading conservation organization, WWF works in 100 countries and is supported by more than one million members in the United States and close to five million globally",
  },
  {
    heading: "Nature",
    subheading: "WWF",
    color: "yellow",
    content:
      "For nearly 60 years, WWF has been protecting the future of nature. The world's leading conservation organization, WWF works in 100 countries and is supported by more than one million members in the United States and close to five million globally",
  },
  {
    heading: "Nature",
    subheading: "WWF",
    color: "azure",
    content:
      "For nearly 60 years, WWF has been protecting the future of nature. The world's leading conservation organization, WWF works in 100 countries and is supported by more than one million members in the United States and close to five million globally",
  }
];
function App() {
  return (
    <div className="App">
      <Gallery details={gallery} />
    </div>
  );
}

export default App;
