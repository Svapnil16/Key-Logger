const logDiv = document.getElementById("log");
const stateDiv = document.getElementById("state");
const start_btn = document.getElementById("start_btn");
const stop_btn = document.getElementById("stop_btn");

start_btn.addEventListener("click", () => {
  document.addEventListener("keydown", handleDown);
  document.addEventListener("keyup", handleUp);
  start_btn.disabled = true;
  stop_btn.disabled = false;
});

stop_btn.addEventListener("click", () => {
  document.removeEventListener("keydown", handleDown);
  document.removeEventListener("keyUp", handleUp);
  logDiv.textContent = "";
  stateDiv.textContent = " ";
  stop_btn.disabled = true;
  start_btn.disabled = false;
});

function handleDown(e) {
  logDiv.textContent = ` Key ${e.key} pressed down`;
  stateDiv.textContent = " key is down";
}

function handleUp(e) {
  logDiv.textContent = `Key ${e.key} pressed up`;
  stateDiv.textContent = ` key is up`;
}
