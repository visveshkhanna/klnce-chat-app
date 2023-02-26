var inputs = {};

var questions = {
    "start": {
        "text": [
            "Hey there, here is MR KLN to assist you", 
            "Are you existing klnce student?"
            ],
        "buttons": {
            "Yes": {
                "text": ["What is your name? "],
                "buttons": {
                    "done": {
                        "text": ["welcome xxxxusername", "Select one of the options below"],
                        "buttons": {
                            "login": {

                            },
                            "circulars": {

                            }
                        }
                    }
                },
                "input": "username"
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
    if(content["input"] == null) {
        content.text.forEach(e => {
            doold += "<span id='name'>Mr. KLNCE: </span>" + e;
            doold+="<br>";
        })
        doold = doold + "<span id='name'>You: </span>" + ev + "<br>";
        olds.innerHTML = doold;
    }
    var das = document.querySelector(".texts");
    var bus = document.querySelector(".buttons");
    var inp = document.querySelector(".inputs");
    var text_cont = "";
    var button_cont = "<span id='name'>You: </span>";
    content = content['buttons'][ev];
    var text = content["text"];
    var button = content["buttons"];
    var input_cont = "";
    text.forEach(e => {
        var d = e;
        if (d.match(/(\bxxxx\S+\b)/ig)){
            d.match(/(\bxxxx\S+\b)/ig).forEach(z => {
            d = d.replace(z, inputs[z.replace("xxxx", "")]);
        });
        }
        text_cont += "<span id='name'>Mr. KLNCE: </span>"+d;
        text_cont += "<br>";
    });
    for(var e in button) {
        let a = '<button onclick="fetchData(\''+e+'\')">'+e+'</button>';
        button_cont += a;
    }

    das.innerHTML = text_cont;

    if (content["input"]) {
        var cont = content["input"];
        //console.log(cont);
        let a = '<center><input type="text" id="'+cont+'"></input><button onclick=inputhandle("'+cont+'") id="'+cont+'">done</button></center>';
        input_cont = a;
        inp.innerHTML = input_cont;
        //console.log('hi');
        button_cont="";
    }
    
    bus.innerHTML = button_cont;
    
}


function inputhandle(ev) {
    var cont = document.getElementById(ev);
    inputs[ev] = cont.value;
    console.log(cont.value);
    cont.remove()
    document.getElementById(ev).remove();
    fetchData("done");
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