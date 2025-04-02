import Code from "./Code";
import Welcome from "./Welcome";

export default function ConditionalComponent() {
  const display = true;
  return display ? <Code /> : <Welcome />;
}
