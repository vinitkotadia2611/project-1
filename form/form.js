let updat = false;
window.onload = dataLoad;

function dataLoad() {
    let localdata = JSON.parse(localStorage.getItem("products"));
    let row = "";
    row += "<table border= 2px solid black>";
    row += "<tr>";
    row = row + "<th>" + "Id" + "</th>";
    row = row + "<th>" + "Name" + "</th>";
    row = row + "<th>" + "Price" + "</th>";
    row = row + "<th>" + "Quantity" + "</th>";
    row = row + "<th>" + "Image" + "</th>";
    row = row + "<th>" + "Buttons" + "</th>";
    row += "</tr>";
    localdata.map((d, i) => {
        row += "<tr>";
        row += "<td>" + d.id;
        row += "</td>";
        row += "<td>" + d.Name;
        row += "</td>";
        row += "<td>" + d.Price;
        row += "</td>";
        row += "<td>" + d.Quantity;
        row += "</td>";
        row += "<td><img src='./images/" + d.Image + "'width = '100px' height='100px'>";
        row += "</td>";
        row += "<td><button onclick='editData(" + d.id + ")'>Edit</button><button onclick='delData(" + d.id + ")'>Delete</button></td>";
        row += "</tr>";

    })
    row += "<table>";
    document.getElementById("demo").innerHTML = row;
}
function submit1() {

    let pi = document.getElementById("id").value;
    let pn = document.getElementById("productName").value;
    let pp = document.getElementById("productPrice").value;
    let pq = document.getElementById("productQuantity").value;
    let img = document.getElementById("img1").value;
    let obj = {
        id: pi,
        Name: pn,
        Price: pp,
        Quantity: pq,
        Image: img
    }

    let localdata = JSON.parse(localStorage.getItem("products"));
    if (localdata !== null) {
        localdata.push(obj);
        localStorage.setItem("products", JSON.stringify(localdata));
    } else {
        localStorage.setItem("products", JSON.stringify([obj]));
    }

}
function delData(id) {
    let localdata = JSON.parse(localStorage.getItem("products"));
    localdata.map((d, i) => {
        if (d.id == id) {
            localdata.splice(i, 1);
        }
    })
    localStorage.setItem("products", JSON.stringify(localdata))
    dataLoad()
}
function editData(id) {
    let localData = JSON.parse(localStorage.getItem("products"));
    localData.map((d, i) => {
        if (d.id == id) {
            document.getElementById("id").value = d.id;
            document.getElementById("productName").value = d.Name;
            document.getElementById("productPrice").value = d.Price;
            document.getElementById("productQuantity").value = d.Quantity;
            document.getElementById("img1").value = d.Image;
        }
    })
    document.getElementById("id").setAttribute('disabled', '');
    document.getElementById("first").style.display = 'none';
    document.getElementById("sec").style.display = 'block';

}
function update() {
    let upi = document.getElementById("id").value;
    let upn = document.getElementById("productName").value;
    let upp = document.getElementById("productPrice").value;
    let upq = document.getElementById("productQuantity").value;
    let img = document.getElementById("img1").value;
    let localData = JSON.parse(localStorage.getItem("products"));
    localData.map((d, i) => {
        if (d.id == upi) {
            d.Name = upn;
            d.Price = upp;
            d.Quantity = upq;
            d.Image = img;
        }

    })
    localStorage.setItem("products", JSON.stringify(localData))

    dataLoad();

}
