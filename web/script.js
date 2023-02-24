var questions = {
    "start": {
        "text": [
            "Hey there, here is MR KLN to assist you", 
            "Are you existing klnce student?"
            ],
        "buttons": {
            "Yes": {
                "text": ["UNDER DEVELOPMENT"],
                "buttons": [],
            },
            "No": {
                "text": ["Do you want to join us?"],
                "buttons": {
                    "Yes": {
                        "text": ["Have you heard about KLNCE ?"],
                        "buttons": {
                            "Yes! Well": {
                                "text": [],
                                "buttons": {

                                }
                            },
                            "Nah! Explain me?": {
                                "text": [],
                                "buttons": {

                                }
                            }
                        }
                    },
                    "No": {
                        "text": ["Seralaina velia poda"],
                        "buttons": [],
                    }
                }
            }
        }
    }  
}

var content = questions["start"];
var doold = "";
function fetchData(ev) {
    var olds = document.querySelector(".olds");
    content.text.forEach(e => {
        doold += "<span id='name'>Mr. KLNCE: </span>" + e;
        doold+="<br>";
    })
    doold = doold + "<span id='name'>You: </span>" + ev + "<br>";
    olds.innerHTML = doold;
    var das = document.querySelector(".texts");
    var bus = document.querySelector(".buttons");
    var text_cont = "";
    var button_cont = "<span id='name'>You: </span>";
    content = content['buttons'][ev];
    var text = content["text"];
    var button = content["buttons"];
    text.forEach(e => {
        text_cont += "<span id='name'>Mr. KLNCE: </span>"+e;
        text_cont += "<br>";
    });
    for(var e in button) {
        let a = '<button onclick="fetchData(\''+e+'\')">'+e+'</button>';
        button_cont += a;
    }
    console.log(doold);
    das.innerHTML = text_cont;
    bus.innerHTML = button_cont;
    
}

function chaticon() {
    const chatui = document.getElementById("chat-ui");
    const chaticon = document.getElementById("chat-icon");
    if (chatui.style.display != "none") {
        chatui.style.display = "none";
        chaticon.setAttribute("src", "icon.png");
    } else {
        chatui.style.display = "block";
        chaticon.setAttribute("src", "close-icon.png");

    }
}