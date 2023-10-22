
function side(){
    const sidebar = document.querySelector(".sidebar");
    const hamburger = document.querySelector('.hamburger');
    var side = true;
    hamburger.addEventListener('click', () => {
      if(side){
      sidebar.style.width = "6vw";
    }else{
      sidebar.style.width = "40vh";
    }
    side = !side;
    })
    }
    
    side();
    