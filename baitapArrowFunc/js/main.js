//Mảng màu
const colorList = ["pallet", "viridian", "pewter", "cerulean", "vermillion", "lavender", "celadon","saffron", "fuschia", "cinnabar" ]

loadColor = colorList => {
    let content = '';
    for (let i = 0; i< colorList.length; i++){
        content += `
        <button class="color-button ${colorList[i]}"></button>
        `
    }
    document.querySelector("#colorContainer").innerHTML = content;
}
loadColor(colorList);

//Get the container element
let btnContainer = document.getElementById("colorContainer");

//Get all buttons with class="color-buton" inside the container
let btns = btnContainer.getElementsByClassName("color-button");

//Loop through the buttons and add the active class to the clicked button
for (let i = 0; i < btns.length; i++){
    let color = colorList[i];

    btns[i].addEventListener("click", function(){
        let current = document.getElementsByClassName("active");
        //console.log(active);
        document.getElementById('house').className = "house " + color;

        //If there's no active class
        if (current.length > 0) {
            current[0].className = current[0].className.replace(" active", "");
        }
        //Add the active class to the active button
        this.className += " active";
    });

}

