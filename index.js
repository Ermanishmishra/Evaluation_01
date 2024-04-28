
let cont = document.getElementById("cont")

let Deparments = document.getElementById("Deparments")

let gender = document.getElementById("gender")

let salary = document.getElementById("Salary")

// this code for salary sort

salary.addEventListener('change', salaryData)

function salaryData(money){

    console.log(salary.value);

    money.forEach(function(ele,i){


    })

}


// this code only for gender

gender.addEventListener('change', genderData)

function genderData(gndr){
   
    gndr.forEach(function(ele,i){
        console.log(ele.gender);

        if(gender.value === ele.gender){
            showData(gndr)
            fetchData()
        }
    })
    
}


// this code only for deparment 

Deparments.addEventListener("change", deparmentData)


function deparmentData(depart){

    depart.forEach(function(ele,i){

        if(Deparments.value == ele.Deparments){
            async function job(){
                let res1 = await fetch("https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees?page=1&limit=10&filterBy=department&filterValue=hr")
                let data1 = await res1.json()

                showData(data1)
            }
            
            fetchData()

        }
    })

}

// this code only data fetch

async function fetchData(){

    let res = await fetch("https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees")
    let data = await res.json()

    // console.log(data.data);
    
    showData(data.data)

    deparmentData(data.data)

    genderData(data.data)

    salaryData(data.data)
}

fetchData()


function showData(arr){
    arr.forEach((element) => {
        
        let tbody = document.createElement("tbody")
        let tr = document.createElement("tr")

         let h4 = document.createElement("td")
         h4.textContent = element.name

         let h5 = document.createElement("td")

         h5.textContent = element.gender

         let h6 = document.createElement("td")

         h6.textContent = element.department

         let h3 = document.createElement("td")
         h3.textContent = element.salary

         let id = document.createElement("td")

         id.textContent = element.id
        
         tr.append(id,h4,h5,h6,h3)

       

         tbody.append(tr)

        cont.append(tr)
        

        //  console.log(cont);
    });
   
}