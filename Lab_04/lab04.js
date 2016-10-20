window.onload = function () {
    var tds = document.getElementsByTagName("td");
    for (var i = 0; i < tds.length; i++)
        tds[i].onclick = toggleColour;

    var th = document.getElementsByTagName("th");
    for(var i = 0; i < th.length; i++){
      if(th[i].id == 'tableRow') th[i].onclick = toggleTDColour;
        console.log('th[' + i + ']: ')
    }
    
    var th = document.getElementsByTagName("th");
    for(var i = 0; i < th.length; i++){
      if(th[i].id == 'tableCol') th[i].onclick = toggleTRColour;
        console.log('th[' + i + ']: ')
    }
}

function toggleColour() {
    var tr = document.getElementsByTagName("tr");
      for(var i = 1; i < tr.length; i++){
        for(var j = 1; j < tr[i].children.length; j++){
          tr[i].children[j].style.backgroundColor = 'white';
        }
      }
    var element = this;
    this.style.backgroundColor = 'lightBlue';
}

function toggleTDColour() {
    console.log('this');
  var tr = document.getElementsByTagName("tr");
  for(var i = 1; i < tr.length; i++){
    for(var j = 1; j < tr[i].children.length; j++){
      tr[i].children[j].style.backgroundColor = 'white';
    }
  }
  for(var i = 1; i < this.parentElement.children.length; i++){
    this.parentElement.children[i].style.backgroundColor = 'lightBlue';
  }
}

function toggleTRColour() {
    console.log('this');
    var tr = document.getElementsByTagName("tr");
    var index = getRow(this);
    for(var i = 1; i < tr.length; i++){
        for(var j = 1; j < tr[i].children.length; j++){
            tr[i].children[j].style.backgroundColor = 'white';
        }
    }
    for(var i = 1; i < tr.length; i++){
        tr[i].children[index].style.backgroundColor = 'lightBlue';
    }
}

function getRow(element)
{
    var i = 0;
    while (element = element.previousSibling) {
        if (element.nodeType === 1) { ++i }
    }
    return i;
}