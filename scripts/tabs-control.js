var previousTab = document.getElementsByClassName("knowledge")[0];

function swtichTab(tab) {
    console.log(previousTab);

    switch (tab) {
        case "about":
            previousTab.style.display = "none";
            previousTab = document.getElementsByClassName("about")[0];
            previousTab.style.display = "block";
        break;
        case "knowledge":
            previousTab.style.display = "none";
            previousTab = document.getElementsByClassName("knowledge")[0];
            previousTab.style.display = "block";
        break;
        case "projects":
            previousTab.style.display = "none";
            previousTab = document.getElementsByClassName("projects")[0];
            previousTab.style.display = "block";
            break;
        case "contact":
            previousTab.style.display = "none";
            previousTab = document.getElementsByClassName("contact")[0];
            previousTab.style.display = "block";
            break;
    }
}