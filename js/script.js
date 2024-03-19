function buildMenu() 
{

    var links = [
        ["Flux", "index.html"],
        ["Kläder", "klader.html"],
        ["Våra designers", "designers.html"],
        ["Om oss", "omoss.html"],
        ["Kontakta oss", "kontakt.html"],
        ["Kampanj", "https://annamariawbcb4f2586d.wordpress.com/pask-erbjudande-20-pa-alla-tights/"]
    ]


    var content =""
    for (var i = 0; i < links.length; i++) {
        var text = links[i][0]

        var adress = links[i][1]

        content = content + "<li><a href=\"" + adress + "\">" + text + "</a></li>"

        // <li><a href="index.html">Startsidan</a></li>

    }
    document.getElementById("menu").innerHTML = content
}
