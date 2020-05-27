import { React } from "./dep.ts";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      button: any;
      div: any;
      h1: any;
      p: any;
    }
  }
}

const App = () => {
  const [count, setCount] = (React as any).useState(0);

  const add = () => setCount(count + 1);

  const subtract = () => setCount(count - 1);

  const reset = () => setCount(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={add}>Add</button>
      <button onClick={subtract}>Subtract</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default App;
