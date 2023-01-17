window.onload = ShowCartData;
function ShowCartData() {
    let htmlData = "";
    let ProductData = JSON.parse(localStorage.getItem("products"));
    let CartData = JSON.parse(localStorage.getItem("cart"));
    CartData.map((object, index) => {
        for (let i in ProductData) {
            if (object == ProductData[i].id) {
                htmlData += `
            <div class="row border-top border-bottom">
            <div class="row main align-items-center">
                <div class="col-2"><img class="img-fluid" src="./images/${ProductData[i].Image}"></div>
                <div class="col">
                    <div class="row">${ProductData[i].Name}</div>
                    <div class="row text-muted">LV</div>
                </div>
                <div class="col">
                    <a href="#">-</a><a href="#" class="border">1</a><a href="#">+</a>
                </div>
                <div class="col">&#8377; ${ProductData[i].Price} <span class="close">&#10005;</span></div>
            </div>
        </div>
            `;
            }
        }
        document.getElementById('objectData').innerHTML = htmlData;
    });
}