function toggleAnswer(){if(question[0].showing){solutionButton.innerHTML="Hide Solution";exampleText.innerHTML="<div>"+question[0].question+"</div>"+"<div>"+question[0].answer+"</div>";}else{solutionButton.innerHTML="Show Solution";exampleText.innerHTML="<div>"+question[0].question+"</div>";}
question[0].showing=!question[0].showing;MathJax.typesetPromise();}
function createExample(){if(!isNaN(topicSelect.value)){question=[];solutionButton.innerHTML="Show Solution";if(topicSelect.value==="-1"){exampleText.innerHTML="";}else{var currentTopic=topicSelect.value;var level=parseFloat(levelSelect.value/10);getQuestion(currentTopic,level);exampleText.innerHTML=question[0].question;question[0].showing=true;MathJax.typesetPromise();}}
topicSelect.blur();}
function getEPPData(){if(localStorage.getItem("q")){question=[];question[0]={};question[0].question=localStorage.getItem("q");question[0].answer=localStorage.getItem("a");question[0].showing=true;exampleText.innerHTML=localStorage.getItem("q");MathJax.typesetPromise();for(var i=0;i<topicSelect.length;i++){if(topicSelect[i].value===localStorage.getItem("id")){topicSelect[i].selected=true;}}
localStorage.clear();}else{exampleText.innerHTML="";}}