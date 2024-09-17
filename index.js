const adviceID = document.getElementById("advice-header-id");
const adviceContent = document.getElementById("advice-comp-content");

async function getAdvice() {
  const urlID = "https://api.adviceslip.com/advice";
  let theAdvice = "";
  let theAdviceId = "";
  try {
    const response = await fetch(urlID);
    const data = await response.json();
    console.log(data);

    if (data.slip.advice && data.slip.id) {
      theAdvice += data.slip.advice;
      theAdviceId += data.slip.id;

      adviceContent.innerHTML = `"${theAdvice}"`;
      adviceID.innerHTML = theAdviceId;
    } else {
      window.alert("Error!");
      window.location.reload();
    }
  } catch (e) {
    console.log("A aparut o eroare!");
  }
}
