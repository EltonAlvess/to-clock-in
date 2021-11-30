const sendMessageButton = document.getElementById("btnPopup");
const msgContent = document.getElementById("msgContent");
const imgIcon = document.getElementById("imgIcon");

sendMessageButton.onclick = async function (e) {
  let queryOptions = {
    currentWindow: true,
    url: "https://app.tradingworks.net/*",
  };
  let tab = await chrome.tabs.query(queryOptions);

  console.log(tab);

  if (tab.length > 0) {
    imgIcon.setAttribute("src", tab[0].favIconUrl);
    return;
  }
  msgContent.textContent = "Nenhuma Aba Aberta";
};
