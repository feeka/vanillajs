//pressed on project_name display corresponding html
function project_show(project) {
    var select_project = document.getElementById(project)

    if (select_project.style.display === "none") {
        select_project.style.display = "block";
    } else {
        select_project.style.display = "none";
    }
  }

  function motivational_quotes(data01){
    
    var randomItem = data01[Math.floor(Math.random()*data01.length)];
    document.getElementById("from").innerHTML=randomItem.from
    document.getElementById("text").innerHTML=randomItem.text
  }
function motivational_quotes_fetch(){
  fetch ("https://gist.githubusercontent.com/b1nary/ea8fff806095bcedacce/raw/6e6de20d7514b93dd69b149289264997b49459dd/enterpreneur-quotes.json").then (function (response) {
    return response.json();
 }).then (function (data01) {
    motivational_quotes(data01);
 }).catch (function (error) {
    console.log ("error: " + error);
 });
}
function helper_experiment(){
  const buttons = document.querySelectorAll('a');
        buttons.forEach(function (button) {
          button.addEventListener('click', function(event) {
          let x = event.clientX - event.target.offsetLeft;
          let y = event.clientY - event.target.offsetTop;
          let rippleElement = document.createElement('span');
          rippleElement.style.left = x +  'px';
          rippleElement.style.top = y + 'px';
          this.appendChild(rippleElement);
          setTimeout(function() {
            rippleElement.remove();
          }, 500);
        });
      });
}
helper_experiment()