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

function fetchData(ev) {
    var das = document.querySelector(".texts");
    var bus = document.querySelector(".buttons");
    var text_cont = "";
    var button_cont = "";
    content = content['buttons'][ev];
    var text = content["text"];
    var button = content["buttons"];
    text.forEach(e => {
        text_cont += e;
        text_cont += "<br>";
    });
    for(var e in button) {
        let a = '<button onclick="fetchData(\''+e+'\')">'+e+'</button>';
        button_cont += a;
    }
    console.log(button_cont);
    das.innerHTML = text_cont;
    bus.innerHTML = button_cont;
    
}