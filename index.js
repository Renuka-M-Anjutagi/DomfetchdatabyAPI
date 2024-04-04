

var res = fetch("https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
res.then((data) => data.json())
.then((data1) => console.log(data1));
var res = fetch("https://restcountries.com/v3.1/all");
res.then((data) => data.json())
.then((data1) => foo(data1));



var container = document.createElement("div")
container.className ="container"

var row = document.createElement("div")
row.className ="row"


function foo(data1)
{
    for(var i =0 ; i< data1.length;i++)
    {
        var col = document.createElement("div")
        col.className = "col-md-4"
        col.innerHTML = `<div class="card" style="width: 18rem;">
        <img src="${data1[i].flags.png}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${data1[i].name}</h5>
          
          <p class="card-text">
         Capital: ${data1[i].capital}<br>
         Region :  ${data1[i].region}<br>
         Population:  ${data1[i].population}
          </p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>`

        row.append(col)
        container.append(row)
        document.body.append(container)
    }
}