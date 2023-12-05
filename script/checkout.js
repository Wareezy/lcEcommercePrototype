let cartItems=JSON.parse(localStorage.getItem('purchasedJackets'))
let table= document.querySelector('table')

// function filterDuplicates()
// {
//     let filteredJackets = purchasedJackets.filter(item =>item.id)

//     if(filteredJackets.id >1)
//     {
//         displayCheckout()
//     }
//     else()
//     {

//     }

// }



    table.innerHTML=cartItems.map((item,index)=>{


        return `
        <tr>
            <td>${index+1}</td>
            <td>${item.name}</td>
            <td>${item.description}</td>
            <td>R${item.price}</td>
            
        </tr>
    
        `
    })

