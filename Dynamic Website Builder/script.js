
let cont = document.querySelector(".container");  
document.body.style.color = "white"

function viewscheck(views){
    if(views >= 100000){
        views /= 1000;
        return views + "K views";
    }else if(views >= 1000000){
        views /= 10000
        return views + "M views";
    }
    return views + "views";
}

function createCard(title, channelName, views, monthsOld, duration, thumbnail){
    
    let card = document.createElement("div");
    card.style.display = "flex";
    card.style.backgroundColor = "black"
    card.style.padding = "5px"

    // For the text
    let text = document.createElement("div");
    text.className = "text";
    text.innerHTML = title;

    // For the Image
    let image = document.createElement("img");
    image.className = "image";
    image.src = thumbnail;
    image.style.borderRadius = "8px"
    image.style.position = "block"
    image.style.width = "150px"
    // image.style.marginRight = 30;

    // For the below things
    let belowtext = document.createElement("div");
    belowtext.innerHTML = channelName + "\t• " + viewscheck(views) + "\t• " + monthsOld + " months ago";
    belowtext.style.whiteSpace = "pre"; // Preserve whitespace and tabs
    belowtext.style.opacity = "0.7" 
    belowtext.style.fontSize = "13px"
    belowtext.style.marginTop = "10px"

    // For the Duration
    let time = document.createElement("div");
    time.innerHTML = duration;
    time.style.position = "absolute";
    time.style.top = "65px";
    time.style.left = "105px"
    time.style.backgroundColor = "black"
    time.style.borderRadius = "5px"
    time.style.fontSize = "14px"
    time.style.width = "42px"
    time.style.textAlign = "center"
    time.style.opacity = "0.7"


    // LEFT DIV
    let div1 = document.createElement("div");
    div1.style.marginRight = "5px";
    div1.style.position = "relative"
    div1.append(image);
    div1.append(time);

    // RIGHT DIV
    let div2 = document.createElement("div");
    div2.style.marginTop = "5px"
    div2.append(text);
    div2.append(belowtext);

    // ADDING BOTH DIV
    card.append(div1);
    card.append(div2);

    cont.append(card);

    // For the channel name

    console.log(views, monthsOld, duration, thumbnail)
}

createCard("Introduction to Backend | Sigma Web Dev video #2", "Abdul Rahman Azam", 560000, 7, "31:20", "https://i.ytimg.com/vi/kJEsTjH5mVg/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBTa4i6NuryzZhcPo7BkCK1G6PqGg")
createCard("Introduction to Backend | Sigma Web Dev video #2", "Abdul Rahman Azam", 560000, 7, "31:20", "https://i.ytimg.com/vi/kJEsTjH5mVg/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBTa4i6NuryzZhcPo7BkCK1G6PqGg")
createCard("Introduction to Backend | Sigma Web Dev video #2", "Abdul Rahman Azam", 560000, 7, "31:20", "https://i.ytimg.com/vi/kJEsTjH5mVg/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBTa4i6NuryzZhcPo7BkCK1G6PqGg")
