const App = () => (
  <div>
    <h1 className="text">Hello World!</h1>
    <LikeButton />
  </div>
);

const LikeButton = () => <button className="button">Like</button>;

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
