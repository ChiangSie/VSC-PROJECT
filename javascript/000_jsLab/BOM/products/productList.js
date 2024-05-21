let products = [
    {psn:1,pname:"PHP4+MySQL",price:220,author:"馬孝瑀",image:"1.gif"},
    {psn:2,pname:"Acess程式設計",price:710,author:"郭尚君",image:"2.gif"},
    {psn:3,pname:"VisualC++ 入門進階",price:"620",author:"郭尚君",image:"3.gif"},
    {psn:4,pname:"Visio5.0輕鬆學習",price:310,author:"位元文化",image:"4.gif"},
    {psn:5,pname:"PHP祕笈",price:710,author:"董董",image:"5.gif"},
    {psn:6,pname:"精通VB.NET完全手冊",price:960,author:"王小明",image:"6.gif"},
    {psn:7,pname:"JavaScript大絶招",price:998,author:"董董",image:"7.gif"}
    ]; 

    function showProducts(){y7
        let html = "";
        for(let i = 0; i < products.length; i++){
            html += `<tr>
                <td>${products[i].psn}</td>
                <td>${products[i].pname}</td>
                <td>${products[i].price}</td>
                <td>${products[i].author}</td></tr>`
        }
        document.getElementById("prodRowsPanel").innerHTML = html;
    }

    window.addEventListener("load",function(){

        showProducts();

        this.document.getElementById("order").onchange = function(e){
            let value = e.target.value;
            if(value === "descending"){
                products.sort(functon(product1,product2));
                return product2.price - product1.price;
            }
            else if(value === "ascending"){
                products.sort(function(product1,product2){
                    return product1 - product2;
                })
            }
            else{
                products.sort(function(product1,product2){
                    return praduct1.psn - product2.psn
                })
            }
            showProducts();
        }

    })