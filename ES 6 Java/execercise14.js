function createImage (title , cName, views , monthsOld , duration , Thumbnail){
let viewsstr
    if(views<1000){
        viewsstr = views;
    }
    else if (views>1000000){
        viewsstr = views/1000000 + "M";
    }
    else {
        viewsstr = views/1000 + "K";
    }
    let html = `<div class="card">
            <div class="image">
                <img src="${Thumbnail}"
                alt="" srcset="">
                <div class="capsule">${duration}</div>
            </div>
            <div class="text">
                <h1> ${title}</h1>
                <p>${cName}. ${viewsstr} views . ${monthsOld} months ago</p>
            </div>
        </div>`
        document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + html
    }
createImage("Installing VS Code  How Websites Work | Sigma Web Development Course - Tutorial #2","CodeWithHarry",72, 4,"31:20","https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLB0alxLSXCSEPITzWr-XXUiv1oglQ")

