function sleepRandomAndPrint(msg) {
  const randomTimeSeconds = Math.floor(Math.random() * 3);
  return new Promise((resolve) =>
    setTimeout(() => {
      console.warn(msg);
      resolve();
    }, randomTimeSeconds * 1000),
  );
}

function printEight() {
  sleepRandomAndPrint("One")
    .then(() => sleepRandomAndPrint("Two"))
    .then(() => sleepRandomAndPrint("Three"))
    .then(() => sleepRandomAndPrint("Four"))
    .then(() => sleepRandomAndPrint("Five"))
    .then(() => sleepRandomAndPrint("Six"))
    .then(() => sleepRandomAndPrint("Seven"))
    .then(() => sleepRandomAndPrint("Eight"))
    .catch((err) => {
      console.error("Error:", err);
    });
}

printEight()
