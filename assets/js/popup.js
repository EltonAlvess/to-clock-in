const sendMessageButton = document.getElementById("btnPopup");
// const msgContent = document.getElementById("msgContent");

sendMessageButton.onclick = async function (e) {
  let queryOptions = {
    currentWindow: true,
    url: "https://app.tradingworks.net/*",
  };
  let tab = await chrome.tabs.query(queryOptions);

  console.warn(tab);

  if (tab.length > 0) {
    // imgIcon.setAttribute("src", tab[0].favIconUrl);
    return;
  }
  // msgContent.textContent = "Nenhuma Aba Aberta";
};
