import { useSignal, useComputed } from "@preact/signals";

const UseHome = () => {
  const count = useSignal(0);

  const even = useComputed(() => count.value % 2 == 0);

  const increment = () => {
    count.value++;
  };

  return (
    <div>
      <p>
        {count.value} is {`${even.value ? "Even" : "Odd"}`}
      </p>
      <p>Count: {count.value}</p>
      <button onClick={increment}>click me</button>
    </div>
  );
};

export default UseHome;
