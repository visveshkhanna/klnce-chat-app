from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.http import HttpResponse
from django.template import loader



def get_data(datass):
    questions = {
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
    if (datass != ""):
        datas = datass.replace("/", "").split(",")
        ans = questions["start"]
        for data in datas:
            data = data.strip()
            ans = ans["buttons"][data]
        return ans
    return questions["start"]


def web(request):
    template = loader.get_template('template.html')
    enc=""
    if ('text' in request.GET):
        d = request.GET['text']
        enc = d
        comp = get_data(d)
    else:
        comp = get_data('')
    for i in comp["buttons"]:
        print(i)
    context = {
        "comp": comp["text"],
        "buttons": comp["buttons"],
        "quer": enc
    }
    return HttpResponse(template.render(context, request)) 
