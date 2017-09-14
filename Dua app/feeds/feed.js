var database = firebase.database().ref('/');
var body = document.getElementById('body');

// console.log(database);

database.child('post').on("child_added", function(snap){
    var obj = snap.val()
    obj.key = snap.key

    var h4 = document.createElement("H4")
    var p = document.createElement("P")

    var textH4 = document.createTextNode(obj.userName)
    var textP = document.createTextNode(obj.pray)

    h4.appendChild(textH4)
    p.appendChild(textP)

    body.appendChild(h4)
    body.appendChild(p)
})