monNom = "Cindy"


for(x = 0; x <=100; x++)
{ 
    message = "Je m'appelle : "  + monNom + x + " "

    if(x%2 == 0)
        message += ("comment-vous appelez vous ? ");  
    else
        message += ("où sont les toilettes ?");

    if(x%3 == 0)
        message += ("je ne parle pas binaire.")

    if(x <= 1)
        message += (" est-ce que le micro fonctionne ?")

    console.log(message);
}

    