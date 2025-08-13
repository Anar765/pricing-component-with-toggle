function Change(event) {

    const basic = document.querySelector(".basic span");
    const professional = document.querySelector(".professional span");
    const master = document.querySelector(".master span");

    if(event.target.checked) {
        basic.textContent = basic.textContent.replace("199.99", "19.99");
        professional.textContent = professional.textContent.replace("249.99", "24.99");
        master.textContent = master.textContent.replace("399.99", "39.99");
        
    } else {
        basic.textContent = basic.textContent.replace("19.99", "199.99");
        professional.textContent = professional.textContent.replace("24.99", "249.99");
        master.textContent = master.textContent.replace("39.99", "399.99");
    }
}