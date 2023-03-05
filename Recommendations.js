function GPAnimeRecs(){var cards=["Cowboy Bebop", "The Daughter of Twenty Faces", "Terror in Resonance", "Ghost in the Shell", "Paranoia Agent"];
var userinput=document.getElementById("input").value
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
document.getElementById("GP").innerHTML=output
}


function AOTAnimeRecs(){var cards=["Berserk", "Castlevania", "Tokyo Ghoul", "God Eater", "Fullmetal Alchemist: Brotherhood"];
var userinput=document.getElementById("input").value
if (userinput==[0])
	var output=""
else if(userinput==[1])
	output="Berserk"
else if(userinput==[2])
	output="Berserk <br> Castlevania"
else if (userinput==[3])
	output="Berserk <br> Castlevania <br> Tokyo Ghoul"
else if (userinput==[4])
	output="Berserk <br> Castlevania <br> Tokyo Ghoul <br> God Eater"
else if (userinput==[5])
	output="Berserk <br> Castlevania <br> Tokyo Ghoul <br> God Eater <br> Fullmetal Alchemist: Brotherhood"
else{
	output=""
}
document.getElementById("AOT").innerHTML=output
}

function JJKAnimeRecs(){var cards=["Yu Yu Hakusho", "Demon Slayer: Kimetsu No Yaiba", "Dororo", "The God of High School", "Parasyte"];
var userinput=document.getElementById("input").value
if (userinput==[0])
	var output=""
else if(userinput==[1])
	output="Yu Yu Hakusho"
else if(userinput==[2])
	output="Yu Yu Hakusho <br> Demon Slayer: Kimetsu No Yaiba"
else if (userinput==[3])
	output="Yu Yu Hakusho <br> Demon Slayer: Kimetsu No Yaiba <br> Dororo"
else if (userinput==[4])
	output="Yu Yu Hakusho <br> Demon Slayer: Kimetsu No Yaiba <br> Dororo <br> The God of High School"
else if (userinput==[5])
	output="Yu Yu Hakusho <br> Demon Slayer: Kimetsu No Yaiba <br> Dororo <br> The God of High School <br> Parasyte"
else{
	output=""
}
document.getElementById("JJK").innerHTML=output
}