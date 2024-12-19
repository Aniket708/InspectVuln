chrome.runtime.onInstalled.addListener(() => {
    console.log("Vulnerability Scanner Extension Installed");

    // Optional: Set up initial configuration or data storage
    chrome.storage.sync.set({ scanHistory: [] }, () => {
        console.log("Initial scan history is set to an empty array.");
    });
});

chrome.action.onClicked.addListener((tab) => {
    console.log("Vulnerability Scanner Icon Clicked");

    // Optional: You can programmatically open the popup or do something else
    chrome.tabs.create({ url: chrome.runtime.getURL("popup.html") });
});

// Listen for messages from popup.js or other scripts
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "logScanResult") {
        console.log("Scan result received:", message.data);

        // Save the scan result to storage
        chrome.storage.sync.get(["scanHistory"], (result) => {
            const scanHistory = result.scanHistory || [];
            scanHistory.push(message.data);
            chrome.storage.sync.set({ scanHistory: scanHistory }, () => {
                console.log("Scan result saved to history.");
            });
        });

        // Optional: Send a response back to the sender
        sendResponse({ status: "success", message: "Scan result logged." });
    }

    return true; // Keep the message channel open for async responses
});

// Optional: Handle browser tab updates, if you need to monitor user navigation
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === "complete") {
        console.log("Tab updated:", tab.url);

        // Optional: Trigger scan or other action based on tab URL
    }
});
