const button=document.getElementById('dropdownButton');
const dropDownMenu=document.getElementById('dropdownMenu');
if(button){
    button.addEventListener('click', (e)=>{
        e.preventDefault();
        dropDownMenu.classList.toggle('hidden');  
    })
}
