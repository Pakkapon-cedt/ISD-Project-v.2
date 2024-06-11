const text ="สวัสดีทุกท่านที่เข้ามาในเว็บของผม ขอให้สนุกกับการเยี่ยมชม ";
    
    let index =0;

    function type(){
      document.getElementById("typing").textContent +=text[index];
      index++;

      if (index === text.length){
        clearInterval(typingInterval)
      }
    }
    const typingInterval=setInterval(type,50);
