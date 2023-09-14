function displaySignupCard(){
    let dropContent = document.getElementById("dropdown-content");
    if(dropContent.style.display=="none"){
        dropContent.style.display = "block";
    }else{
        dropContent.style.display = "none";
    }
}

function displaySearchCard(){
    let dropContent = document.getElementById("dropdown-search");
    if(dropContent.style.display=="none"){
        dropContent.style.display = "block";
    }else{
        dropContent.style.display = "none";
    }
}

function displayFilter(){
    let modal  = document.getElementById("filter");
    if(modal.style.display=="none"){
        modal.style.display = "block";
    }else{
        modal.style.display = "none";
    }
}