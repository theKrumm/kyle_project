

var tempForum = `<form> First name:<br>
  <input type="text" name="firstname" id="firstName"><br>
  Last name:<br>
  <input type="text" name="lastname" id="lastName"><br>
    <input type="submit" value="Submit" onClick="submitSignIn()">
</form>`

var nav = `<div class='topnav'>
  <a href='#sign_in' onClick='toSignIn()'>Sign in</a>
  <a href='#threads' onclick='doSomething()'>Show Threads</a>
</div>`
var body = `<div class='the_bod'>BODY BODY BODY BODY</div>`

// var footer = `<div class='footer'>This is q footers!!</div>`;
var footer = `<div id='footer'>
  <div class="container siteNav">
    <span style="border-bottom:2px solid">Kyle loves you! God Bless!!!</span>
  </div>
</div>`;

function app() {
  document.getElementById('nav').innerHTML = nav;
  document.getElementById('body').innerHTML = body;
  document.getElementById('footer').innerHTML = footer;

  var cssFile = document.createElement("link");
  cssFile.setAttribute("rel", "stylesheet");
  cssFile.setAttribute("type", "text/css");
  // Add event listener
  cssFile.onload = function(){ console.log('loaded'); }
  cssFile.setAttribute("href", 'styles.css');
  document.getElementsByTagName("head")[0].appendChild(cssFile);

}

function toSignIn() {
  document.getElementsByClassName('the_bod')[0].innerHTML=tempForum;
}

function submitSignIn() {
  var firstName = document.getElementById("firstName").value;
  var lastName = document.getElementById("lastName").value;

  console.log("ayyoo, im " + firstName + " cosby.");
  console.log("ayyoo, im " + lastName + " cosby.");

    document.getElementsByClassName('the_bod')[0].innerHTML= "~*~*~*~ Thanks! ;) ~*~*~*~";
}

function doSomething() {
  var maFuqa = Snippet.index().then(result => {
    var data = JSON.parse(result);
    var snippets = data.snippets;
    console.log(snippets);

    var toAddToList = "";
    for(var item in snippets) {
      toAddToList += "<li>"
      + snippets[item].text +
      `<div class='snippet'>
        <input type="text" id="` + snippets[item]._id + `"name="newText"><br>
        <button onClick="submitSnippet('` + snippets[item]._id + `')"> submit </button>`
        + "</li>";
    }
    document.getElementsByClassName('the_bod')[0].innerHTML= "<ul class='snippetList'>"
      + toAddToList
      + "</ul>";
  });
  console.log(maFuqa);
}

function submitSnippet(snippetId) {
  //console.log(document.getElementById(snippetId).value);
  var update = {
    "text": document.getElementById(snippetId).value
  };

   Snippet.update(snippetId, update).then(response => {
      doSomething();
   });
  console.log(snippetId);
}

window.onload = app;
