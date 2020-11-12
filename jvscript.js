const name = document.getElementById("customername")
const course = document.getElementById("course")
const author = document.getElementById("author")
const form = document.getElementById("form")


//Validation thing
form.addEventListener("change", (e) => {
  if (name.value !== "" && name.value !== null && course.value !== "" && course.value !== null && author.value !== "" && author.value !== null) {
    document.getElementById("button").disabled = false;
  }
}
)

//NAME GREEN/RED INDICATOR
//green
name.addEventListener("change", (e) => {
  if (name.value !== "" || name.value !== null) {
    document.getElementById("customername").style.borderColor = "green";
  }
}
)
//red
name.addEventListener("change", (e) => {
  if (name.value == "" || name.value == null) {
    document.getElementById("name").style.borderColor = "red";
  }
}
)

//COURSE GREEN/RED INDICATOR
//green
course.addEventListener("change", (e) => {
  if (course.value !== "" || course.value !== null) {
    document.getElementById("course").style.borderColor = "green";
  }
}
)
//red
course.addEventListener("change", (e) => {
  if (course.value == "" || course.value == null) {
    document.getElementById("course").style.borderColor = "red";
  }
}
)

//AUTHOR GREEN/RED INDICATOR
//green
author.addEventListener("change", (e) => {
  if (author.value !== "" || author.value !== null) {
    document.getElementById("author").style.borderColor = "green";
  }
}
)
//red
author.addEventListener("change", (e) => {
  if (author.value == "" || author.value == null) {
    document.getElementById("author").style.borderColor = "red";
  }
}
)

//New card

function addCustomer(customer) {
  const card = document.createElement("div");
  document.getElementById("customerlist").appendChild(card);
  card.classList.add("col-11", "mx-auto", "col-md-6", "my-3", "col-lg-4");
  card.innerHTML =
    `<img src="https://i.insider.com/5c59e77ceb3ce80d46564023?width=600&format=jpeg&auto=webp" class="card-img-top" alt="">
     <div class="card-body">
      <h6 class="text-capitalize "><span class="badge badge-warning mr-2">name :</span><span id="customer-name">${name.value}</span></h6>
      <h6 class="text-capitalize my-3"><span class="badge badge-success mr-2">course :</span><span id="customer-course">
        ${course.value}
       </span></h6>
      <h6 class="text-capitalize"><span class="badge badge-danger mr-2">author :</span><span id="course-author">${author.value}</span></h6>

     </div>
    </div>`;
  this.customers.appendChild(card);
}

