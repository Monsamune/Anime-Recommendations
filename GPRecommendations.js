function AnimeRecs(){var cards=["Cowboy Bebop", "The Daughter of Twenty Faces", "Terror in Resonance", "Ghost in the Shell", "Paranoia Agent"];
var userinput=document.getElementById("in").value
if (userinput==[0])
	var output=""
else if(userinput==[1])
	output="Cowboy Bebop"
else if(userinput==[2])
	output="Cowboy Bebop <br> The Daughter of Twenty Faces"
else if (userinput==[3])
	output="Cowboy Bebop <br> The Daughter of Twenty Faces <br> Terror in Resonance"
else if (userinput==[4])
	output="Cowboy Bebop <br> The Daughter of Twenty Faces <br> Terror in Resonance <br> Ghost in the Shell"
else if (userinput==[5])
	output="Cowboy Bebop <br> The Daughter of Twenty Faces <br> Terror in Resonance <br> Ghost in the Shell <br> Paranoia Agent"
else{
	output=""
}
document.getElementById("y").innerHTML=output
}





/* 
Cowboy Bebop", "The Daughter of Twenty Faces", "Terror in Resonance", "Ghost in the Shell", "Paranoia Agent"

<h4> Top Recommendations </h4>
<button onclick="AnimeRecommendations()"> Click </button> to see my top <input type="text" id="number"> Anime Recommendations based on Great Pretender:
<p id="y">
</p> */