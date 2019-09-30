home.style.setProperty("--my-var", screen.height + "px");
console.log(getComputedStyle(home).getPropertyValue("--my-var"));