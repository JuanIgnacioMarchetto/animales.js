
let principal  = document.getElementById('cont-princ')

animal = new Array();

animal[0] = ['./ardilla.jpg','Ardilla'],
animal[1] = ['./koala.jpeg','Koala'],
animal[2] = ['./animal.jpg','Zuricata'],
animal[3] = ['./orangutan.jpg','Orangutan'],
animal[4] = ['./panda.jpg','Panda'],
animal[5] = ['./tigre.jpg','Tigre'],
animal[6] = ['./tucan.jpeg','Tucan'],
animal[7] = ['./vaca.jpeg','Vaca'];

animal[8] = ['./ardilla.jpg','Ardilla'],
animal[9] = ['./koala.jpeg','Koala'],
animal[10] = ['./animal.jpg','Zuricata'],
animal[11] = ['./orangutan.jpg','Orangutan'],
animal[12] = ['./panda.jpg','Panda'],
animal[13] = ['./tigre.jpg','Tigre'],
animal[14] = ['./tucan.jpeg','Tucan'],
animal[15] = ['./vaca.jpeg','Vaca'];





document.addEventListener("DOMContentLoaded", function(){
    // código de Cuani 
    if(principal){
        for(i=0;i<animal.length;i++){
            let creaDiv = document.createElement('div');
            let creaImg = document.createElement('img');
    
            creaDiv.setAttribute('class','foto');
            creaDiv.innerHTML = animal[i][1]
            creaImg.setAttribute('src',animal[i][0])
            principal.appendChild(creaDiv);
            principal.appendChild(creaImg);
    
            
    
        }
    
    }
  });


if(principal){
    for(i=0;i<animal.length;i++){
        let creaDiv = document.createElement('div');
        let creaImg = document.createElement('img');

        creaDiv.setAttribute('class','foto');
        creaDiv.innerHTML = animal[i][1]
        creaImg.setAttribute('src',animal[i][0])
        principal.appendChild(creaDiv);
        principal.appendChild(creaImg);

        

    }

}