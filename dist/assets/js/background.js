chrome.action.onClicked.addListener((tab) => {
  if (tab.url.includes("chrome://")) return;
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: () => {
        document.dispatchEvent(new CustomEvent('Noteworthy-Toggle'));
    },
  });
});

// const injectCode = (() => {
//     console.log("Code has been injected(.js)!");
// })();

// chrome.action.onClicked.addListener((tab) => {
//     if (tab.url.includes("chrome://")) return;
//     chrome.scripting.executeScript({
//       target: { tabId: tab.id },
//       function: injectCode,
//     });
// });

// chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {
//     if (changeInfo.status == 'complete') {
//         injectCode();
//       // do your things
//     }
//   })
