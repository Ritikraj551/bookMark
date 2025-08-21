const tabs = document.querySelectorAll(".tab");
const panels = document.querySelectorAll(".panel");

tabs.forEach((tab)=>tab.addEventListener('click',onTabClick))

function onTabClick(e){
  tabs.forEach((tab)=>{
    tab.children[0].classList.remove(
      "border-red-500",
      "border-b-4",
      "md:border-b-0"
    )
  })

  // Hide all Panels
  panels.forEach((panel)=>panel.classList.add("hidden"));

  // Activate a new tab and panel based on the target
  e.target.classList.add("border-red-500","border-b-4")
  const classString = e.target.getAttribute("data-target");
  document.getElementById('panels').getElementsByClassName(classString)[0].classList.remove("hidden");
}
