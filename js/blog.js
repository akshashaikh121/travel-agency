function element_create(user_name, email, comment) {

    let div = document.getElementById("card");

    let container = document.createElement("div");
    let name_span = document.createElement("span");
    let email_span = document.createElement("span");
    let p = document.createElement("p");

    name_span.innerHTML = "<strong>" + user_name + "</strong>";
    email_span.innerHTML = " (" + email + ")";
    p.innerHTML = comment;

    container.appendChild(name_span);
    container.appendChild(email_span);
    container.appendChild(p);
    div.appendChild(container);

    container.style.border = "1px solid #ccc";
    container.style.padding = "10px";
    container.style.margin = "10px 0";
    container.style.borderRadius = "8px";
}

function input_value() {
    let user_name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let comment = document.getElementById("comment").value;

    element_create(user_name, email, comment);

    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("comment").value = "";
}
