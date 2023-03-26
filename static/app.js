function updateTime() {
    var date = new Date();
    var time = date.toLocaleTimeString('en-US', {
      hour12: false,
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    });
    document.getElementById('clock').innerText = time;
}
  
  setInterval(updateTime, 1000); // Update the time every second

function addBookmark() {
  var bookmarkName = document.getElementById("bname").value;
  var bookmarkUrl = document.getElementById("burl").value;
  var bookmarkSearch = bookmarkUrl.includes("https://");

  if (bookmarkSearch !== true){
    var bookmarkUrl = "https://"+bookmarkUrl 
  }

  let bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];

  bookmarks.push({ name: bookmarkName, url: bookmarkUrl });
  localStorage.setItem("bookmarks", JSON.stringify(bookmarks));

  var bookmarkName = document.getElementById("bname").value = "";
  var bookmarkUrl = document.getElementById("burl").value = "";

  renderBookmarks();
}

function renderBookmarks() {
  const bookmarksDiv = document.getElementById("bookmarkbar");

  let bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];

  bookmarksDiv.innerHTML = "";

  if (bookmarks.length === 0) {
    bookmarksDiv.innerHTML = "<h1 class='text-1xl'>There aren't any bookmarks here yet! try adding some</h1>";
    return;
  }

  for (let i = 0; i < bookmarks.length; i++) {
    if (i >= 20) {
      break;
    }

    const bookmark = bookmarks[i];

    const bookmarkSpan = document.createElement("span");
    bookmarkSpan.classList.add("rounded-lg", "bg-neutral-500", "m-4", "opacity-50", "text-center", "w-12", "h-12", "hover:opacity-75", "duration-900", "hover:cursor-pointer");
    bookmarkSpan.innerHTML = bookmark.name;

    bookmarkSpan.addEventListener("click", () => {
      window.location.href = bookmark.url;
    });

    bookmarksDiv.appendChild(bookmarkSpan);
  }
}


renderBookmarks();

function getAllBookmarks() {
  // retrieve all bookmarks from local storage and create bookmark buttons for each one
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key.includes("bookmarkName")) {
      const name = localStorage.getItem(key);
      const url = localStorage.getItem(key.replace("Name", "Url"));
      createBookmark(name, url);
    }
  }
}



function settings(HoS) {
  // create a new div element
  const settings = document.getElementById("settings");

  if (HoS == "show"){
    settings.classList.remove("hidden");
  } else if (HoS == "hide") {
    settings.classList.add("hidden");
  } else {
    console.error("invalid HoS: " + HoS)
  }
  
 
}



// function getUsername(){
//   fetch("http://localhost:8080/getlogin")
//   .then((response) => response.text())
//   .then((data) =>  {

//     document.getElementById("welcome").innerText = "Welcome " +data

//   });
// }

function search() {

    const searchQuery = document.getElementById('search').value; // Get the search query from the input field
    const googleSearchUrl = `https://www.google.com/search?q=${searchQuery}`; // Construct the Google search URL
    window.location.href = googleSearchUrl; // Redirect the user to the Google search URL
    

}