var database = firebase.database().ref('/');
var body = document.getElementById('body');

// console.log(database);

database.child('post').on("child_added", function(snap){
    var obj = snap.val()
    obj.key = snap.key

    var div1 = document.createElement("DIV");
    
    div1.setAttribute("class", "card")
    div1.setAttribute("style", "width: 20rem")

    var div2 = document.createElement("DIV")
    div2.setAttribute("class", "card-body")

    var h4 = document.createElement("H4")
    h4.setAttribute("class", "card-title")
    var p = document.createElement("P")
    p.setAttribute("class", "card-text")

    var textH4 = document.createTextNode(obj.userName)
    var textP = document.createTextNode(obj.pray)

    h4.appendChild(textH4)
    p.appendChild(textP)

    div2.appendChild(h4)
    div2.appendChild(p)

    div1.appendChild(div2)
    body.appendChild(div1)

   
})