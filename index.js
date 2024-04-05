

var res = fetch("https://restcountries.com/v3.1/all");
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
        <img src="${data1[i].flags.png}" class="card-img-top" style="max-width: 540px;" alt="...">
        <div class="card-body">
          <h5 class="card-title">Countries List from API</h5>
          <ul class="list-group list-group-flush">
          <li class="list-group-item">Capital: ${data1[i].capital}</li>
          <li class="list-group-item"> Region :  ${data1[i].region}</li>
          <li class="list-group-item"> Population:  ${data1[i].population}</li>
        </ul>
          
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>`

        row.append(col)
        container.append(row)
        document.body.append(container)
    }
}
