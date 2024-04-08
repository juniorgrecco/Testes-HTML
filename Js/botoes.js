document.getElementById('btn-expand').addEventListener('click', function() {
    var container = document.getElementById('container');
    var newDiv = document.createElement('div');
    newDiv.className = 'expanded';
    newDiv.innerHTML = 'Nova Div Expandida';
    container.appendChild(newDiv);
  });
  