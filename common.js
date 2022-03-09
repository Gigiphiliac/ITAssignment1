let coll = document.getElementsByClassName("collapsible");
let cont = document.getElementsByClassName("content");

for (let i = 0; i < coll.length; i++) {
    // Execute whenever an accordion is clicked
    coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.maxHeight){
            hidePanels();
        } else {
            showPanel(this);
        } 
    });
}

function showPanel(elem) {
    hidePanels();
    elem.classList.add("active");
    elem.nextElementSibling.style.maxHeight = elem.nextElementSibling.scrollHeight + "px";
  }

function hidePanels() {
    for (let i = 0; i < cont.length; i++) {
        cont[i].style.maxHeight = null;
        coll[i].classList.remove("active");
    }
  }


