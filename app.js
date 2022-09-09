let mobiles = [
    {
        category: "Iphone", mobilenmae: "v13promax", ram: 16, rom: 256, price: 120000,
    },
    {
        category: "Iphone", mobilenmae: "v13pro", ram: 12, rom: 64, price: 120000,
    },
    {
        category: "Iphone", mobilenmae: "v13", ram: 4, rom: 64, price: 120000,
    },
    {
        category: "Samsung",
        mobilenmae: "a20",
        ram: 16,
        rom: 256,
        price: 120000,
    },
    {
        category: "Samsung",
        mobilenmae: "s21 ultra",
        ram: 12,
        rom: 64,
        price: 120000,
    },
    {
        category: "Samsung",
        mobilenmae: "a32",
        ram: 4,
        rom: 64,
        price: 120000,
    },

    {
        category: "Xiaomi",
        mobilenmae: "c20",
        ram: 4,
        rom: 64,
        price: 120000,
    },
    {
        category: "Xiaomi",
        mobilenmae: "c6",
        ram: 6,
        rom: 128,
        price: 120000,
    },
    {
        category: "Xiaomi",
        mobilenmae: "c2",
        ram: 12,
        rom: 64,
        price: 120000,
    },

]
let model = document.getElementById('mobileModel');
let mobileName = document.getElementById('mobileName');
let showdetails = document.getElementById('details');

function mobcompany() {
    model.innerHTML = ""
     mobmodel = mobiles.filter((value, index, self) =>
        index === self.findIndex((t) => (
            t.place === value.place && t.category === value.category
        ))
    )
    mobmodel.map(mobName => model.innerHTML += `<option>${mobName.category}</option>`)
}
mobcompany()

function fillvalue() {
    mobileName.disabled = false
    mobileName.innerHTML = ""
    let mobname = model.value
    let modalArr = mobiles.filter(mobiles => mobiles.category === mobname)
    modalArr.map( value => mobileName.innerHTML += `<option >${value.mobilenmae}</option>`)
}
fillvalue()

function searchVal(){
    let mobName = mobileName.value
    let detailArr = mobiles.filter(mobiles => mobiles.mobilenmae === mobName)
    showdetails.innerHTML = "";
    showdetails.innerHTML += `<h1 >${model.value} ${mobileName.value} </h1>`
    detailArr.map( details => showdetails.innerHTML += `<ul class="sc">
    <li><b>Ram</b> : ${details.ram}</li>
    <li><b>Rom</b> : ${details.rom}</li>
    <li><b>Price</b> : ${details.price}</li>
    </ul>`
)
}