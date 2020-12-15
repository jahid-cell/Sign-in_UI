const tabItems = document.querySelectorAll(".tab-items");
const tabContentItems = document.querySelectorAll(".tab-content-item");
//Main Function
function selectItem(e) {
    removeBorder();
    removeShow();
    this.classList.add('tab-border');
    const realTabContent = document.querySelector(`#${this.id}-content`); //Tricks
    realTabContent.classList.add('show');
}
//Removing Border
function removeBorder() {
    tabItems.forEach(item => item.classList.remove('tab-border'))
}
//Removing Show Class
function removeShow() {
    tabContentItems.forEach(item => item.classList.remove('show'))
}
//Adding EventListener and Calling the main function
tabItems.forEach(item => item.addEventListener('click', selectItem));

