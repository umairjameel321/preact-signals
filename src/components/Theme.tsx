import { useTheme } from "../store/useStore";
import { effect } from "@preact/signals";

const Theme = () => {
  const theme: any = useTheme();
  const toggleTheme = () => {
    theme.value = theme.value === "light" ? "dark" : "light";
  };

  effect(() => {
    document.body.style.backgroundColor =
      theme.value === "dark" ? "#000000" : "#FFFFFF";
    document.body.style.color = theme.value === "dark" ? "#FFFFFF" : "#000000";
  });

  return (
    <div style={{ margin: "100px" }}>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

export default Theme;
