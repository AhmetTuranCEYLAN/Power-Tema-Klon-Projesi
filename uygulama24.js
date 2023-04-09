/*
uygulama24.html anasayfasındaki slaytın her iki kenarında olup biten olayların yer aldığı kod bloğu
başlangıç yeri
*/

function gizle1() {
   var dugme=document.querySelectorAll("#slayt");

   dugme.forEach(item => {
   item.children[2].removeChild(item.children[2].firstElementChild);
 

  });
}



function gizle2() {
   var dugme=document.querySelectorAll("#slayt");

   dugme.forEach(item => {
   item.children[3].removeChild(item.children[3].firstElementChild);

  });
}


function goster1() {

   var dugme=document.querySelectorAll("#slayt");
   dugme.forEach(item => {

   let resim=document.createElement("span");
   resim.setAttribute("class","carousel-control-prev-icon");
   

   item.children[2].appendChild(resim);

});
     
}

   function goster2() {
      var dugme=document.querySelectorAll("#slayt");
      dugme.forEach(item => {
    
   
      let resim=document.createElement("span");
      resim.setAttribute("class","carousel-control-next-icon");
    
   
      item.children[3].appendChild(resim);
  
   });
        
 }
/*
uygulama24.html anasayfasındaki slaytın her iki kenarında olup biten olayların yer aldığı kod bloğu
bitiş yeri
*/





/*   
uygulama24.html sayfası hariç diğer sayfalarda gezinirken ve ekran genişliği medium ve üzerine çıktıktan sonra
slayt üzerindeki "Anasayfa" butonu üzerine
gelindiği vakit sahip olduğu kutu biçimindeki nesnenin dört köşesinden adım adım kırpan kod bloğu başlangıç yeri
*/  
 function kirp1() {

   var kirp=document.querySelectorAll("#dugmegrup");
   kirp.forEach(item => {

      setTimeout(() => {
         item.children[0].classList.remove("rounded-0");
         item.children[0].classList.add("rounded-1");
      }, 60);

      setTimeout(() => {
         item.children[0].classList.remove("rounded-1");
         item.children[0].classList.add("rounded-2");
      }, 120);

      setTimeout(() => {

         item.children[0].classList.remove("rounded-2");
         item.children[0].classList.add("rounded-3")
      }, 180);

      

      
   });
 }
/*   
uygulama24.html sayfası hariç diğer sayfalarda gezinirken ve ekran genişliği medium ve üzerine çıktıktan sonra
slayt üzerindeki "Anasayfa" butonu üzerine
gelindiği vakit sahip olduğu kutu biçimindeki nesnenin dört köşesinden adım adım kırpan kod bloğu bitiş yeri
*/  



/*   
uygulama24hakkimizda.html sayfası hariç diğer sayfalarda gezinirken ve ekran genişliği medium ve üzerine
çıktıktan sonra "Hakkımızda" butonu üzerine
gelindiği vakit sahip olduğu kutu biçimindeki nesnenin dört köşesinden adım adım kırpan kod bloğu başlangıç yeri
*/  
 function kirp2() {

   var kirp=document.querySelectorAll("#dugmegrup");
   kirp.forEach(item => {

      setTimeout(() => {
         item.children[1].classList.remove("rounded-0");
         item.children[1].classList.add("rounded-1");
      }, 60);

      setTimeout(() => {
         item.children[1].classList.remove("rounded-1");
         item.children[1].classList.add("rounded-2");
      }, 120);

      setTimeout(() => {

         item.children[1].classList.remove("rounded-2");
         item.children[1].classList.add("rounded-3")
      }, 180);

      

      
   });
 }
/*   
uygulama24hakkimizda.html sayfası hariç diğer sayfalarda gezinirken ve ekran genişliği medium ve üzerine
çıktıktan sonra "Hakkımızda" butonu üzerine
gelindiği vakit sahip olduğu kutu biçimindeki nesnenin dört köşesinden adım adım kırpan kod bloğu bitiş yeri
*/   




/*   
uygulama24hizmetlerimiz.html sayfası hariç diğer sayfalarda gezinirken ve ekran genişliği medium ve üzerine
çıktıktan sonra "Hizmetlerimiz" butonu üzerine
gelindiği vakit sahip olduğu kutu biçimindeki nesnenin dört köşesinden adım adım kırpan kod bloğu başlangıç yeri
*/    
 function kirp3() {  
 

   var kirp=document.querySelectorAll("#dugmegrup");
   kirp.forEach(item => {
    

      setTimeout(() => {
         item.children[2].classList.remove("rounded-0");
         item.children[2].classList.add("rounded-1");
      }, 60);

      setTimeout(() => {
         item.children[2].classList.remove("rounded-1");
         item.children[2].classList.add("rounded-2");
      }, 120);
        
      setTimeout(() => {

         item.children[2].classList.remove("rounded-2");
         item.children[2].classList.add("rounded-3")
      }, 180);

     


      
   });
 }
/*   
uygulama24hizmetlerimiz.html sayfası hariç diğer sayfalarda gezinirken ve ekran genişliği medium ve üzerine
çıktıktan sonra "Hizmetlerimiz" butonu üzerine
gelindiği vakit sahip olduğu kutu biçimindeki nesnenin dört köşesinden adım adım kırpan kod bloğu bitiş yeri
*/  








/*   
uygulama24.blog.html sayfası hariç diğer sayfalarda gezinirken ve ekran genişliği medium ve üzerine
çıktıktan sonra "Blog" butonu üzerine
gelindiği vakit sahip olduğu kutu biçimindeki nesnenin dört köşesinden adım adım kırpan kod bloğu başlangıç yeri
*/ 
 function kirp4() {

   var kirp=document.querySelectorAll("#dugmegrup");
   kirp.forEach(item => {
   
      setTimeout(() => {
         item.children[3].classList.remove("rounded-0");
         item.children[3].classList.add("rounded-1");
      }, 60);

      setTimeout(() => {
         item.children[3].classList.remove("rounded-1");
         item.children[3].classList.add("rounded-2");
      }, 120);
        
      setTimeout(() => {

         item.children[3].classList.remove("rounded-2");
         item.children[3].classList.add("rounded-3")
      }, 180);

     


     
   });
 }
/*   
uygulama24.blog.html sayfası hariç diğer sayfalarda gezinirken ve ekran genişliği medium ve üzerine
çıktıktan sonra "Blog" butonu üzerine
gelindiği vakit sahip olduğu kutu biçimindeki nesnenin dört köşesinden adım adım kırpan kod bloğu bitiş yeri
*/  


/*   
uygulama24iletisim.html sayfası hariç diğer sayfalarda gezinirken ve ekran genişliği medium ve üzerine
çıktıktan sonra "İletişim" butonu üzerine
gelindiği vakit sahip olduğu kutu biçimindeki nesnenin dört köşesinden adım adım kırpan kod bloğu başlangıç yeri
*/ 
 function kirp5() {


   var kirp=document.querySelectorAll("#dugmegrup");
   kirp.forEach(item => {

      setTimeout(() => {
         item.children[4].classList.remove("rounded-0");
         item.children[4].classList.add("rounded-1");
      }, 60);

      setTimeout(() => {
         item.children[4].classList.remove("rounded-1");
         item.children[4].classList.add("rounded-2");
      },120);
        
      setTimeout(() => {

         item.children[4].classList.remove("rounded-2");
         item.children[4].classList.add("rounded-3")
      }, 180);

     


      
   });
 }
/*   
uygulama24iletisim.html sayfası hariç diğer sayfalarda gezinirken ve ekran genişliği medium ve üzerine
çıktıktan sonra "İletişim" butonu üzerine
gelindiği vakit sahip olduğu kutu biçimindeki nesnenin dört köşesinden adım adım kırpan kod bloğu bitiş yeri
*/ 

 

function yaz() {//uygulama24.html sayfası yüklendiğinde çalışan fonksiyon

   var yaz=document.querySelectorAll(".container-fluid");
   yaz.forEach(item => {
      var kutu1=document.createElement("div");
      kutu1.setAttribute("class"," col");
      var kutu2=document.createElement("div");
      kutu2.setAttribute("class"," col");
      var kutu3=document.createElement("div");
      kutu3.setAttribute("class","col");
      var kutu4=document.createElement("div");
      kutu4.setAttribute("class","col");
      var foto1=document.createElement("img");
      var foto2=document.createElement("img");
      var foto3=document.createElement("img");
      var foto4=document.createElement("img");

      foto1.setAttribute("class","img-fluid");
      foto1.setAttribute("src","Resimler/fitness.jpg");
      kutu1.appendChild(foto1);

      foto2.setAttribute("class","img-fluid");
      foto2.setAttribute("src","Resimler/boks.jpg");
      kutu2.appendChild(foto2);

      foto3.setAttribute("class","img-fluid");
      foto3.setAttribute("src","Resimler/pilates.jpg");
      kutu3.appendChild(foto3);

      foto4.setAttribute("class","img-fluid");
      foto4.setAttribute("src","Resimler/kickboks.jpg");
      kutu4.appendChild(foto4);
      

      var yazi1=document.createTextNode("FİTNESS");
      var yazi2=document.createTextNode("BOKS");
      var yazi3=document.createTextNode("PİLATES");
      var yazi4=document.createTextNode("KİCKBOKS");






      var kutu5=document.createElement("div");
      kutu5.setAttribute("class","col fs-2 text-center text-secondary");
      kutu5.appendChild(yazi1);
      kutu1.appendChild(kutu5);
      

      var kutu6=document.createElement("div");
      kutu6.setAttribute("class","col fs-2 text-center text-secondary");
      kutu6.appendChild(yazi2);
      kutu2.appendChild(kutu6);

      var kutu7=document.createElement("div");
      kutu7.setAttribute("class","col fs-2 text-center text-secondary");
      kutu7.appendChild(yazi3);
      kutu3.appendChild(kutu7);

      var kutu8=document.createElement("div");
      kutu8.setAttribute("class","col fs-2 text-center text-secondary");
      kutu8.appendChild(yazi4);
      kutu4.appendChild(kutu8);

            
      item.children[2].appendChild(kutu1);
      item.children[2].appendChild(kutu2);
      item.children[2].appendChild(kutu3);
      item.children[2].appendChild(kutu4);
    
   
   });

   var aktif=document.querySelectorAll("#dugmegrup");
   aktif.forEach(item => {

      item.children[0].classList.add("active");
      item.children[0].classList.add("rounded-3");
   
   });

   var baslik=document.getElementById("baslik");
   baslik.style.color="black";
   baslik.style.font="bold 30px 'Noto Sans',sans-serif";

   var kucult=document.getElementById("kucult");
   kucult.classList.add("col-md-4");

}






setInterval(()=>{//uygulama24.html sayfasında "Videolar" isimli buton için çalışan fonksiyon
  
 
   window.setTimeout("var buyut=document.getElementById("+dugme+").style.width=100+'px'",200);
   window.setTimeout("var buyut=document.getElementById('dugme').style.width=120+'px'",240);
   window.setTimeout("var buyut=document.getElementById('dugme').style.width=140+'px'",280);
   window.setTimeout("var buyut=document.getElementById('dugme').style.width=160+'px'",320);
   window.setTimeout("var buyut=document.getElementById('dugme').style.width=180+'px'",360);
   window.setTimeout("var buyut=document.getElementById('dugme').style.width=200+'px'",400);
   window.setTimeout("var buyut=document.getElementById('dugme').style.width=220+'px'",440);
   window.setTimeout("var buyut=document.getElementById('dugme').style.width=240+'px'",480);
   window.setTimeout("var buyut=document.getElementById('dugme').style.width=260+'px'",520);
   window.setTimeout("var buyut=document.getElementById('dugme').style.width=280+'px'",560);
   window.setTimeout("var buyut=document.getElementById('dugme').style.width=300+'px'",600);
   
},2000);



setInterval(()=>{//uygulama24.html sayfasında "Videolar" isimli buton için çalışan fonksiyon
   
   window.setTimeout("var kucult=document.getElementById('dugme').style.width=300+'px'",200);
   window.setTimeout("var kucult=document.getElementById('dugme').style.width=280+'px'",240);
   window.setTimeout("var kucult=document.getElementById('dugme').style.width=260+'px'",280);
   window.setTimeout("var kucult=document.getElementById('dugme').style.width=240+'px'",320);
   window.setTimeout("var kucult=document.getElementById('dugme').style.width=220+'px'",360);
   window.setTimeout("var kucult=document.getElementById('dugme').style.width=200+'px'",400);
   window.setTimeout("var kucult=document.getElementById('dugme').style.width=180+'px'",440);
   window.setTimeout("var kucult=document.getElementById('dugme').style.width=160+'px'",480);
   window.setTimeout("var kucult=document.getElementById('dugme').style.width=140+'px'",520);
   window.setTimeout("var kucult=document.getElementById('dugme').style.width=120+'px'",560);
   window.setTimeout("var kucult=document.getElementById('dugme').style.width=100+'px'",600);


},4000);




/*
Anasayfada üyelik avantajlarını kaçırmayın isimli, hizmetlerimiz ve iletişim sayfalarında da iletişim formu isimli
formların altında yer alan "Gönder" isimli butona basıldığı vakit çalışacak fonksiyonun başlangıç yeri
*/
function bas() {
   
   var adsoyad= document.getElementById("adsoyad");
   var tel=document.getElementById("tel"); 
   var eposta= document.getElementById("eposta");
   var mesaj= document.getElementById("mesaj");
   


   if (adsoyad.value=="") {

      adsoyad.value="Lütfen Bu Alanı Doldurunuz";

   }

   else if(adsoyad.value=="Lütfen Bu Alanı Doldurunuz"){
      adsoyad.value="Lütfen Bu Alanı Doldurunuz";

   }

   else{
      adsoyad.value="Yönlendirileceksiniz"
   }



   if (tel.value=="") {

      tel.value="Lütfen Bu Alanı Doldurunuz";
      
   }

   else if(tel.value=="Lütfen Bu Alanı Doldurunuz"){
      tel.value="Lütfen Bu Alanı Doldurunuz";
   }

   else{
      tel.value="Yönlendirileceksiniz";
   }



   if (eposta.value=="") {
      eposta.value="Lütfen Bu Alanı Doldurunuz";
   }

   else if( eposta.value=="Lütfen Bu Alanı Doldurunuz"){
      eposta.value="Lütfen Bu Alanı Doldurunuz";
   }

   else{
      eposta.value="Yönlendirileceksiniz";
   }



   if (mesaj.value=="") {
      mesaj.value="Lütfen Bu Alanı Doldurunuz";
   
   }

   else if(mesaj.value=="Lütfen Bu Alanı Doldurunuz"){
      mesaj.value="Lütfen Bu Alanı Doldurunuz";
   }

   else{
      mesaj.value="Yönlendirileceksiniz";
   }

  


}
/*
Anasayfada üyelik avantajlarını kaçırmayın isimli, hizmetlerimiz ve iletişim sayfalarında da iletişim formu isimli
formların altında yer alan "Gönder" isimli butona basıldığı vakit çalışacak fonksiyonun bitiş yeri
*/




/*
Anasayfada üyelik avantajlarını kaçırmayın isimli, hizmetlerimiz ve iletişim sayfalarında da iletişim formu isimli
formların ortasında yer alan text kutularına tıklandığında çalışacak fonksiyonların başlangıç yeri
*/
function temizle1() {
   var adsoyad=document.getElementById("adsoyad"); 
   adsoyad.value="";
}



function temizle2() {
   var tel=document.getElementById("tel"); 
   tel.value="";
}



function temizle3() {
   
   var eposta= document.getElementById("eposta");
   eposta.value="";
}



function temizle4() {
   var mesaj= document.getElementById("mesaj");
   mesaj.value="";

}
/*
Anasayfada üyelik avantajlarını kaçırmayın isimli, hizmetlerimiz ve iletişim sayfalarında da iletişim formu isimli
formların ortasında yer alan text kutularına tıklandığında çalışacak fonksiyonların bitiş yeri
*/



/*
Slayt üzerinde ve diğer sayfaların başında ekran medium ve medium'dan büyük genişliklere geldikten sonra çıkacak 
olan butonların uzerinden ayrıldıktan sonra çalışacak olan fonksiyonların başlangıç yeri 
*/


/*
uygulama24.html sayfası haricindeki diğer sayfalarda ekran medium ve medium'dan büyük genişliklere
geldikten sonra çıkacak 
olan butonlardan "Anasayfa" isimli butonun üzerinden mouse imleci çekildikten sonra eski haline döndürmek
amacıyla çalışacak fonksiyonun başlangıç yeri
*/


function duzelt1(){
   setTimeout(()=>{
      var duzelt=document.querySelectorAll("#dugmegrup");
      duzelt.forEach(item => {
         item.children[0].classList.remove("rounded-3");
         item.children[0].classList.add("rounded-0");
        
      });
   },60);

}

/*
uygulama24.html sayfası haricindeki diğer sayfalarda ekran medium ve medium'dan büyük genişliklere
geldikten sonra çıkacak 
olan butonlardan "Anasayfa" isimli butonun üzerinden mouse imleci çekildikten sonra eski haline döndürmek
amacıyla çalışacak fonksiyonun bitiş yeri
*/


/*
uygulama24.hakkimizda.html sayfası haricindeki diğer sayfalarda ekran medium ve medium'dan büyük genişliklere 
geldikten sonra çıkacak 
olan butonlardan "Hakkımızda" isimli butonun üzerinden mouse imleci çekildikten sonra eski haline döndürmek
amacıyla çalışacak fonksiyonun başlangıç yeri 
*/
function duzelt2(){
   setTimeout(()=>{
      var duzelt=document.querySelectorAll("#dugmegrup");
      duzelt.forEach(item => {
         item.children[1].classList.remove("rounded-3");
         item.children[1].classList.add("rounded-0");
        
      });
   },60);

}
/*
uygulama24.hakkimizda.html sayfası haricindeki diğer sayfalarda ekran medium ve medium'dan büyük genişliklere 
geldikten sonra çıkacak 
olan butonlardan "Hakkımızda" isimli butonun üzerinden mouse imleci çekildikten sonra eski haline döndürmek
amacıyla çalışacak fonksiyonun bitiş yeri 
*/


/*
uygulama24.hizmetlerimiz.html sayfası haricindeki diğer sayfalarda ekran medium ve medium'dan büyük genişliklere 
geldikten sonra çıkacak 
olan butonlardan "Hizmetlerimiz" isimli butonun üzerinden mouse imleci çekildikten sonra eski haline döndürmek
amacıyla çalışacak fonksiyonun başlangıç yeri 
*/
function duzelt3(){
   setTimeout(()=>{
      var duzelt=document.querySelectorAll("#dugmegrup");
      duzelt.forEach(item => {
         item.children[2].classList.remove("rounded-3");
         item.children[2].classList.add("rounded-0");
        
      })
   },60);

 
}
/*
uygulama24.hizmetlerimiz.html sayfası haricindeki diğer sayfalarda ekran medium ve medium'dan büyük genişliklere 
geldikten sonra çıkacak 
olan butonlardan "Hizmetlerimiz" isimli butonun üzerinden mouse imleci çekildikten sonra eski haline döndürmek
amacıyla çalışacak fonksiyonun bitiş yeri 
*/


/*
uygulama24.blog.html sayfası haricindeki diğer sayfalarda ekran medium ve medium'dan büyük genişliklere 
geldikten sonra çıkacak 
olan butonlardan "Blog" isimli butonun üzerinden mouse imleci çekildikten sonra eski haline döndürmek
amacıyla çalışacak fonksiyonun başlangıç yeri 
*/

function duzelt4(){
   setTimeout(()=>{
      var duzelt=document.querySelectorAll("#dugmegrup");
      duzelt.forEach(item => {
         item.children[3].classList.remove("rounded-3");
         item.children[3].classList.add("rounded-0");
        
      })
   },60);


}
/*
uygulama24.blog.html sayfası haricindeki diğer sayfalarda ekran medium ve medium'dan büyük genişliklere 
geldikten sonra çıkacak 
olan butonlardan "Blog" isimli butonun üzerinden mouse imleci çekildikten sonra eski haline döndürmek
amacıyla çalışacak fonksiyonun bitiş yeri 
*/


/*
uygulama24iletisim.html sayfası haricindeki diğer sayfalarda ekran medium ve medium'dan büyük
genişliklere geldikten sonra çıkacak 
olan "İletişim" isimli butonun üzerinden mouse imleci çekildikten sonra eski haline döndürmek
amacıyla çalışacak fonksiyonun başlangıç yeri 
*/
function duzelt5(){
   setTimeout(()=>{
      var duzelt=document.querySelectorAll("#dugmegrup");
      duzelt.forEach(item => {
         item.children[4].classList.remove("rounded-3");
         item.children[4].classList.add("rounded-0");
        
      })
   },60);

   
}
/*
Slayt üzerinde ve uygulama24iletisim.html sayfası haricindeki diğer sayfalarda ekran medium ve medium'dan büyük genişliklere geldikten sonra, çıkacak 
olan butonlardan "İletişim" isimli buton hariç, üzerlerinden mouse imleci çekildikten sonra eski hallerine döndürmek
amacıyla çalışacak fonksiyonun bitiş yeri 
*/


/*
Slayt üzerinde ve diğer sayfaların başında ekran medium ve medium'dan büyük genişliklere geldikten sonra çıkacak 
olan butonların uzerinden ayrıldıktan sonra çalışacak olan fonksiyonların bitiş yeri 
*/

function yaz2() {//uygulama24.hakkimizda.html sayfası yüklendiğinde çalışan fonksiyon
   var aktif=document.querySelectorAll("#dugmegrup");
   aktif.forEach(item => {
      item.children[1].classList.add("active");
      item.children[1].classList.add("rounded-3");
   
   });

   var getir=document.querySelectorAll("#listegrup");
   getir.forEach(item => {

      var yazi1=document.createTextNode("Misyon & Vizyon");
   
      var yazi2=document.createTextNode("İnsan Kaynakları");
      var yazi3=document.createTextNode("Kalite Politikası");
      var yazi4=document.createTextNode("Değerlerimiz");
      var yazi5=document.createTextNode("KURUMSAL");

      var kutu1=document.createElement("span");
      kutu1.style.font="bold 14px 'Noto Sans',sans-serif";
      kutu1.style.letterSpacing=.6+"px";
      kutu1.appendChild(yazi1);
      kutu1.id="kutu1";
      var kutu2=document.createElement("span");
    
      kutu2.appendChild(yazi2);
      kutu2.id="kutu2";
      kutu2.style.font="bold 14px 'Noto Sans',sans-serif";
      kutu2.style.letterSpacing=.6+"px";
      var kutu3=document.createElement("span");
   
      kutu3.appendChild(yazi3);
      kutu3.id="kutu3";
      kutu3.style.font="bold 14px 'Noto Sans',sans-serif";
      kutu3.style.letterSpacing=.6+"px";
      var kutu4=document.createElement("span");

      kutu4.appendChild(yazi4);
      kutu4.id="kutu4";
      kutu4.style.font="bold 14px 'Noto Sans',sans-serif";
      kutu4.style.letterSpacing=.6+"px";
      var kutu5=document.createElement("span");
  
      kutu5.appendChild(yazi5);
      kutu5.id="kutu5";
    

      var a1=document.createElement("a");
      a1.setAttribute("class","list-group-item");
      
      a1.id="madde1";
      a1.addEventListener("mouseover",otele1);
      function otele1() {

        

         window.setTimeout("document.getElementById('kutu1').style.marginLeft=0+'px'",50);
         window.setTimeout("document.getElementById('kutu1').style.marginLeft=1+'px'",75);
         window.setTimeout("document.getElementById('kutu1').style.marginLeft=2+'px'",100);
         window.setTimeout("document.getElementById('kutu1').style.marginLeft=3+'px'",125);
         window.setTimeout("document.getElementById('kutu1').style.marginLeft=4+'px'",150);
    
        
      
      }

      a1.addEventListener("mouseout",gericek1);

      function gericek1() {

         window.setTimeout("document.getElementById('kutu1').style.marginLeft=4+'px'",50);
         window.setTimeout("document.getElementById('kutu1').style.marginLeft=3+'px'",75);
         window.setTimeout("document.getElementById('kutu1').style.marginLeft=2+'px'",100);
         window.setTimeout("document.getElementById('kutu1').style.marginLeft=1+'px'",125);
         window.setTimeout("document.getElementById('kutu1').style.marginLeft=0+'px'",150);     
      
      }

      a1.href="uygulama24misyonvevizyon.html";
      a1.appendChild(kutu1);
      
    

     
      

      
   
      var a2=document.createElement("a");
      a2.id="madde2";
      a2.href="uygulama24insankaynaklari.html";
      a2.setAttribute("class","list-group-item");
      a2.appendChild(kutu2);

      a2.addEventListener("mouseover",otele2);
      function otele2() {
        
         window.setTimeout("document.getElementById('kutu2').style.marginLeft=0+'px'",50); 
         window.setTimeout("document.getElementById('kutu2').style.marginLeft=1+'px'",75); 
         window.setTimeout("document.getElementById('kutu2').style.marginLeft=2+'px'",100);
         window.setTimeout("document.getElementById('kutu2').style.marginLeft=3+'px'",125);
         window.setTimeout("document.getElementById('kutu2').style.marginLeft=4+'px'",150);
         
      }

      a2.addEventListener("mouseout",gericek2);
      function gericek2() {
       
         window.setTimeout("document.getElementById('kutu2').style.marginLeft=4+'px'",50);
         window.setTimeout("document.getElementById('kutu2').style.marginLeft=3+'px'",75);
         window.setTimeout("document.getElementById('kutu2').style.marginLeft=2+'px'",100);
         window.setTimeout("document.getElementById('kutu2').style.marginLeft=1+'px'",125);
         window.setTimeout("document.getElementById('kutu2').style.marginLeft=0+'px'",150);      
      
      }

   
    
      var a3=document.createElement("a");
      a3.id="madde3";
      a3.href="uygulama24kalitepolitikasi.html";
      a3.setAttribute("class","list-group-item");
      a3.appendChild(kutu3);
     
      a3.addEventListener("mouseover",otele3);
      function otele3() {
         window.setTimeout("document.getElementById('kutu3').style.marginLeft=0+'px'",50); 
         window.setTimeout("document.getElementById('kutu3').style.marginLeft=1+'px'",75); 
         window.setTimeout("document.getElementById('kutu3').style.marginLeft=2+'px'",100);
         window.setTimeout("document.getElementById('kutu3').style.marginLeft=3+'px'",125);
         window.setTimeout("document.getElementById('kutu3').style.marginLeft=4+'px'",150);
        

        
       
      
      }

      a3.addEventListener("mouseout",gericek3);
      function gericek3() {
         
         window.setTimeout("document.getElementById('kutu3').style.marginLeft=4+'px'",50);
         window.setTimeout("document.getElementById('kutu3').style.marginLeft=3+'px'",75);
         window.setTimeout("document.getElementById('kutu3').style.marginLeft=2+'px'",100);
         window.setTimeout("document.getElementById('kutu3').style.marginLeft=1+'px'",125);
         window.setTimeout("document.getElementById('kutu3').style.marginLeft=0+'px'",150);  
          
      
      }
     
    

      var a4=document.createElement("a");
      a4.id="madde4";
      a4.href="uygulama24degerlerimiz.html";
      a4.setAttribute("class","list-group-item");
      a4.appendChild(kutu4);
   
      a4.addEventListener("mouseover",otele4);
      function otele4() {

   
   
         window.setTimeout("document.getElementById('kutu4').style.marginLeft=0+'px'",50); 
         window.setTimeout("document.getElementById('kutu4').style.marginLeft=1+'px'",75); 
         window.setTimeout("document.getElementById('kutu4').style.marginLeft=2+'px'",100);
         window.setTimeout("document.getElementById('kutu4').style.marginLeft=3+'px'",125);
         window.setTimeout("document.getElementById('kutu4').style.marginLeft=4+'px'",150);
        
      
      }

      a4.addEventListener("mouseout",gericek4);
      function gericek4() {

    
         window.setTimeout("document.getElementById('kutu4').style.marginLeft=4+'px'",50);
         window.setTimeout("document.getElementById('kutu4').style.marginLeft=3+'px'",75);
         window.setTimeout("document.getElementById('kutu4').style.marginLeft=2+'px'",100);
         window.setTimeout("document.getElementById('kutu4').style.marginLeft=1+'px'",125);
         window.setTimeout("document.getElementById('kutu4').style.marginLeft=0+'px'",150);     
      
      }

      var a5=document.createElement("a");
      a5.id="madde5";
      a5.setAttribute("class","list-group-item  text-left py-5");
      a5.appendChild(kutu5);
      a5.style.fontSize=23+"px";
      a5.style.fontWeight="bold";
      a5.style.color="#000";
    
     

      item.children[0].appendChild(a5);
      item.children[0].appendChild(a1);
      item.children[0].appendChild(a2);
      item.children[0].appendChild(a3);
      item.children[0].appendChild(a4);
      

      
   




});
}

function yaz3() {//uygulama24.blog.html sayfası yüklendiğinde çalışan fonksiyon
   var aktif=document.querySelectorAll("#dugmegrup");
   aktif.forEach(item => {
      item.children[3].classList.add("active");
      item.children[3].classList.add("rounded-3");
   
   });

  
  
  
   var ekle=document.querySelectorAll("#yazi");
   ekle.forEach(item => {
       
     var paragraf=document.createElement("p");
     paragraf.setAttribute("class","text-center");
     var yazi=document.createTextNode("© Power Tema.");
     paragraf.appendChild(yazi);
      
     item.appendChild(paragraf);
     
   });

   
}


function yaz4(){//uygulama24misyonvevizyon.html sayfası yüklendiğinde çalışan fonksiyon
   var aktif=document.querySelectorAll("#dugmegrup");
   aktif.forEach(item => {
      item.children[1].classList.add("active");
      item.children[1].classList.add("rounded-3");
   
   });

   var getir=document.querySelectorAll("#listegrup");
   getir.forEach(item => {

      var yazi1=document.createTextNode("Misyon & Vizyon");
      var yazi2=document.createTextNode("İnsan Kaynakları");
      var yazi3=document.createTextNode("Kalite Politikası");
      var yazi4=document.createTextNode("Değerlerimiz");
      var yazi5=document.createTextNode("KURUMSAL");

      var kutu1=document.createElement("span");
      kutu1.style.font="bold 14px 'Noto Sans',sans-serif";
      kutu1.style.letterSpacing=.6+"px";
      kutu1.appendChild(yazi1);
      kutu1.id="kutu1";
      var kutu2=document.createElement("span");
      kutu2.style.font="bold 14px 'Noto Sans',sans-serif";
      kutu2.style.letterSpacing=.6+"px";
      kutu2.appendChild(yazi2);
      kutu2.id="kutu2";
      var kutu3=document.createElement("span");
      kutu3.style.font="bold 14px 'Noto Sans',sans-serif";
      kutu3.style.letterSpacing=.6+"px";
      kutu3.appendChild(yazi3);
      kutu3.id="kutu3";
      var kutu4=document.createElement("span");
      kutu4.style.font="bold 14px 'Noto Sans',sans-serif";
      kutu4.style.letterSpacing=.6+"px";
      kutu4.appendChild(yazi4);
      kutu4.id="kutu4";
      var kutu5=document.createElement("span");
    
      kutu5.appendChild(yazi5);
      kutu5.id="kutu5";

      var a1=document.createElement("a");
      a1.setAttribute("class","list-group-item");
      a1.id="madde1";
      a1.href="uygulama24misyonvevizyon.html";
      a1.appendChild(kutu1);

      kutu1.style.marginLeft=10+"px";
      a1.style.backgroundColor="#bfe300";
      a1.style.color="white";
      

     
      

      
   
      var a2=document.createElement("a");
      a2.id="madde2";
      a2.href="uygulama24insankaynaklari.html";
      a2.setAttribute("class","list-group-item ");
      a2.appendChild(kutu2);
      a2.addEventListener("mouseover",otele2);
      function otele2() {
        
         window.setTimeout("document.getElementById('kutu2').style.marginLeft=0+'px'",50); 
         window.setTimeout("document.getElementById('kutu2').style.marginLeft=1+'px'",75); 
         window.setTimeout("document.getElementById('kutu2').style.marginLeft=2+'px'",100);
         window.setTimeout("document.getElementById('kutu2').style.marginLeft=3+'px'",125);
         window.setTimeout("document.getElementById('kutu2').style.marginLeft=4+'px'",150);
         
      }

      a2.addEventListener("mouseout",gericek2);
      function gericek2() {
    
         window.setTimeout("document.getElementById('kutu2').style.marginLeft=4+'px'",50);
         window.setTimeout("document.getElementById('kutu2').style.marginLeft=3+'px'",75);
         window.setTimeout("document.getElementById('kutu2').style.marginLeft=2+'px'",100);
         window.setTimeout("document.getElementById('kutu2').style.marginLeft=1+'px'",125);
         window.setTimeout("document.getElementById('kutu2').style.marginLeft=0+'px'",150);      
      
      }

   
    
      var a3=document.createElement("a");
      a3.id="madde3";
      a3.href="uygulama24kalitepolitikasi.html";
      a3.setAttribute("class","list-group-item");
      a3.appendChild(kutu3);
    
      a3.addEventListener("mouseover",otele3);
      function otele3() {
         window.setTimeout("document.getElementById('kutu3').style.marginLeft=0+'px'",50); 
         window.setTimeout("document.getElementById('kutu3').style.marginLeft=1+'px'",75); 
         window.setTimeout("document.getElementById('kutu3').style.marginLeft=2+'px'",100);
         window.setTimeout("document.getElementById('kutu3').style.marginLeft=3+'px'",125);
         window.setTimeout("document.getElementById('kutu3').style.marginLeft=4+'px'",150);
        

        
       
      
      }

      a3.addEventListener("mouseout",gericek3);
      function gericek3() {
      
         window.setTimeout("document.getElementById('kutu3').style.marginLeft=4+'px'",50);
         window.setTimeout("document.getElementById('kutu3').style.marginLeft=3+'px'",75);
         window.setTimeout("document.getElementById('kutu3').style.marginLeft=2+'px'",100);
         window.setTimeout("document.getElementById('kutu3').style.marginLeft=1+'px'",125);
         window.setTimeout("document.getElementById('kutu3').style.marginLeft=0+'px'",150);  
          
      
      }
     
    

      var a4=document.createElement("a");
      a4.id="madde4";
      a4.href="uygulama24degerlerimiz.html";
      a4.setAttribute("class","list-group-item");
      a4.appendChild(kutu4);
   
      a4.addEventListener("mouseover",otele4);
      function otele4() {

   
   
         window.setTimeout("document.getElementById('kutu4').style.marginLeft=0+'px'",50); 
         window.setTimeout("document.getElementById('kutu4').style.marginLeft=1+'px'",75); 
         window.setTimeout("document.getElementById('kutu4').style.marginLeft=2+'px'",100);
         window.setTimeout("document.getElementById('kutu4').style.marginLeft=3+'px'",125);
         window.setTimeout("document.getElementById('kutu4').style.marginLeft=4+'px'",150);
  

      
      }

      a4.addEventListener("mouseout",gericek4);
      function gericek4() {

    
        
         window.setTimeout("document.getElementById('kutu4').style.marginLeft=4+'px'",50);
         window.setTimeout("document.getElementById('kutu4').style.marginLeft=3+'px'",75);
         window.setTimeout("document.getElementById('kutu4').style.marginLeft=2+'px'",100);
         window.setTimeout("document.getElementById('kutu4').style.marginLeft=1+'px'",125);
         window.setTimeout("document.getElementById('kutu4').style.marginLeft=0+'px'",150);     
      
      }

      var a5=document.createElement("a");
      a5.id="madde5";
      a5.setAttribute("class","list-group-item  text-left py-5");
      a5.appendChild(kutu5);
      
      a5.style.fontSize=23+"px";
      a5.style.fontWeight="bold";
      a5.style.color="#000";
    
     

      item.children[0].appendChild(a5);
      item.children[0].appendChild(a1);
      item.children[0].appendChild(a2);
      item.children[0].appendChild(a3);
      item.children[0].appendChild(a4);

});


}

function yaz5(){//uygulama24insankaynaklari.html sayfası yüklendiğinde çalışan fonksiyon
   var aktif=document.querySelectorAll("#dugmegrup");
   aktif.forEach(item => {
      item.children[1].classList.add("active");
      item.children[1].classList.add("rounded-3");
   
   });

   var getir=document.querySelectorAll("#listegrup");
   getir.forEach(item => {

      var yazi1=document.createTextNode("Misyon & Vizyon");
      var yazi2=document.createTextNode("İnsan Kaynakları");
      var yazi3=document.createTextNode("Kalite Politikası");
      var yazi4=document.createTextNode("Değerlerimiz");
      var yazi5=document.createTextNode("KURUMSAL");

      var kutu1=document.createElement("span");
      kutu1.style.font="bold 14px 'Noto Sans',sans-serif";
      kutu1.style.letterSpacing=.6+"px";
      kutu1.appendChild(yazi1);
      kutu1.id="kutu1";
      var kutu2=document.createElement("span");
      kutu2.style.font="bold 14px 'Noto Sans',sans-serif";
      kutu2.style.letterSpacing=.6+"px";
      kutu2.appendChild(yazi2);
      kutu2.id="kutu2";
      var kutu3=document.createElement("span");
      kutu3.style.font="bold 14px 'Noto Sans',sans-serif";
      kutu3.style.letterSpacing=.6+"px";
      kutu3.appendChild(yazi3);
      kutu3.id="kutu3";
      var kutu4=document.createElement("span");
      kutu4.style.font="bold 14px 'Noto Sans',sans-serif";
      kutu4.style.letterSpacing=.6+"px";
      kutu4.appendChild(yazi4);
      kutu4.id="kutu4";
      var kutu5=document.createElement("span");
      kutu5.appendChild(yazi5);
      kutu5.id="kutu5";

      var a1=document.createElement("a");
      a1.setAttribute("class","list-group-item");
      a1.id="madde1";
      a1.href="uygulama24misyonvevizyon.html";
      a1.appendChild(kutu1);
    
      
   
      a1.addEventListener("mouseover",otele1);
      function otele1() {
        
         window.setTimeout("document.getElementById('kutu1').style.marginLeft=0+'px'",50); 
         window.setTimeout("document.getElementById('kutu1').style.marginLeft=1+'px'",75); 
         window.setTimeout("document.getElementById('kutu1').style.marginLeft=2+'px'",100);
         window.setTimeout("document.getElementById('kutu1').style.marginLeft=3+'px'",125);
         window.setTimeout("document.getElementById('kutu1').style.marginLeft=4+'px'",150);
       
      }

      a1.addEventListener("mouseout",gericek1);
      function gericek1() {
       
         window.setTimeout("document.getElementById('kutu1').style.marginLeft=4+'px'",50);
         window.setTimeout("document.getElementById('kutu1').style.marginLeft=3+'px'",75);
         window.setTimeout("document.getElementById('kutu1').style.marginLeft=2+'px'",100);
         window.setTimeout("document.getElementById('kutu1').style.marginLeft=1+'px'",125);
         window.setTimeout("document.getElementById('kutu1').style.marginLeft=0+'px'",150);      
      
      }
      

     
      

      
   
      var a2=document.createElement("a");
      a2.id="madde2";
      a2.href="uygulama24insankaynaklari.html";
      a2.setAttribute("class","list-group-item");
      a2.appendChild(kutu2);
    
      kutu2.style.marginLeft=10+"px";
      a2.style.backgroundColor="#bfe300";
      a2.style.color="white";
      
    
      var a3=document.createElement("a");
      a3.id="madde3";
      a3.href="uygulama24kalitepolitikasi.html";
      a3.setAttribute("class","list-group-item");
      a3.appendChild(kutu3);
    
      a3.addEventListener("mouseover",otele3);
      function otele3() {
         window.setTimeout("document.getElementById('kutu3').style.marginLeft=0+'px'",50); 
         window.setTimeout("document.getElementById('kutu3').style.marginLeft=1+'px'",75); 
         window.setTimeout("document.getElementById('kutu3').style.marginLeft=2+'px'",100);
         window.setTimeout("document.getElementById('kutu3').style.marginLeft=3+'px'",125);
         window.setTimeout("document.getElementById('kutu3').style.marginLeft=4+'px'",150);
        
        
       
      
      }

      a3.addEventListener("mouseout",gericek3);
      function gericek3() {
     
         window.setTimeout("document.getElementById('kutu3').style.marginLeft=4+'px'",50);
         window.setTimeout("document.getElementById('kutu3').style.marginLeft=3+'px'",75);
         window.setTimeout("document.getElementById('kutu3').style.marginLeft=2+'px'",100);
         window.setTimeout("document.getElementById('kutu3').style.marginLeft=1+'px'",125);
         window.setTimeout("document.getElementById('kutu3').style.marginLeft=0+'px'",150);  
          
      
      }
     
    

      var a4=document.createElement("a");
      a4.id="madde4";
      a4.href="uygulama24degerlerimiz.html";
      a4.setAttribute("class","list-group-item");
      a4.appendChild(kutu4);
  
      a4.addEventListener("mouseover",otele4);
      function otele4() {

   
   
         window.setTimeout("document.getElementById('kutu4').style.marginLeft=0+'px'",50); 
         window.setTimeout("document.getElementById('kutu4').style.marginLeft=1+'px'",75); 
         window.setTimeout("document.getElementById('kutu4').style.marginLeft=2+'px'",100);
         window.setTimeout("document.getElementById('kutu4').style.marginLeft=3+'px'",125);
         window.setTimeout("document.getElementById('kutu4').style.marginLeft=4+'px'",150);
       

      
      }

      a4.addEventListener("mouseout",gericek4);
      function gericek4() {

    
       
         window.setTimeout("document.getElementById('kutu4').style.marginLeft=4+'px'",50);
         window.setTimeout("document.getElementById('kutu4').style.marginLeft=3+'px'",75);
         window.setTimeout("document.getElementById('kutu4').style.marginLeft=2+'px'",100);
         window.setTimeout("document.getElementById('kutu4').style.marginLeft=1+'px'",125);
         window.setTimeout("document.getElementById('kutu4').style.marginLeft=0+'px'",150);     
      
      }

      var a5=document.createElement("a");
      a5.id="madde5";
      a5.setAttribute("class","list-group-item  text-left py-5");
    
      a5.appendChild(kutu5);
      a5.style.fontSize=23+"px";
      a5.style.fontWeight="bold";
      a5.style.color="#000";
    
     

      item.children[0].appendChild(a5);
      item.children[0].appendChild(a1);
      item.children[0].appendChild(a2);
      item.children[0].appendChild(a3);
      item.children[0].appendChild(a4);

});


}

function yaz6(){//uygulama24kalitepolitikasi.html sayfası yüklendiğinde çalışan fonksiyon
   var aktif=document.querySelectorAll("#dugmegrup");
   aktif.forEach(item => {
      item.children[1].classList.add("active");
      item.children[1].classList.add("rounded-3");
   
   });

   var getir=document.querySelectorAll("#listegrup");
   getir.forEach(item => {

      var yazi1=document.createTextNode("Misyon & Vizyon");
      var yazi2=document.createTextNode("İnsan Kaynakları");
      var yazi3=document.createTextNode("Kalite Politikası");
      var yazi4=document.createTextNode("Değerlerimiz");
      var yazi5=document.createTextNode("KURUMSAL");

      var kutu1=document.createElement("span");
      kutu1.style.font="bold 14px 'Noto Sans',sans-serif";
      kutu1.style.letterSpacing=.6+"px";
      kutu1.appendChild(yazi1);   
      kutu1.id="kutu1";
      var kutu2=document.createElement("span");
      kutu2.style.font="bold 14px 'Noto Sans',sans-serif";
      kutu2.style.letterSpacing=.6+"px";
      kutu2.appendChild(yazi2);
      kutu2.id="kutu2";
      var kutu3=document.createElement("span");
      kutu3.style.font="bold 14px 'Noto Sans',sans-serif";
      kutu3.style.letterSpacing=.6+"px";
      kutu3.appendChild(yazi3);
      kutu3.id="kutu3";
      var kutu4=document.createElement("span");
      kutu4.style.font="bold 14px 'Noto Sans',sans-serif";
      kutu4.style.letterSpacing=.6+"px";
      kutu4.appendChild(yazi4);
      kutu4.id="kutu4";
      var kutu5=document.createElement("span");
      
      kutu5.appendChild(yazi5);
      kutu5.id="kutu5";

      var a1=document.createElement("a");
      a1.setAttribute("class","list-group-item");
      a1.id="madde1";
      a1.href="uygulama24misyonvevizyon.html";
      a1.appendChild(kutu1);
      
      
   
      a1.addEventListener("mouseover",otele1);
      function otele1() {
        
         window.setTimeout("document.getElementById('kutu1').style.marginLeft=0+'px'",50); 
         window.setTimeout("document.getElementById('kutu1').style.marginLeft=1+'px'",75); 
         window.setTimeout("document.getElementById('kutu1').style.marginLeft=2+'px'",100);
         window.setTimeout("document.getElementById('kutu1').style.marginLeft=3+'px'",125);
         window.setTimeout("document.getElementById('kutu1').style.marginLeft=4+'px'",150);
      
      }

      a1.addEventListener("mouseout",gericek1);
      function gericek1() {
        
         window.setTimeout("document.getElementById('kutu1').style.marginLeft=4+'px'",50);
         window.setTimeout("document.getElementById('kutu1').style.marginLeft=3+'px'",75);
         window.setTimeout("document.getElementById('kutu1').style.marginLeft=2+'px'",100);
         window.setTimeout("document.getElementById('kutu1').style.marginLeft=1+'px'",125);
         window.setTimeout("document.getElementById('kutu1').style.marginLeft=0+'px'",150);      
      
      }
      

     
      

      
   
      var a2=document.createElement("a");
      a2.id="madde2";
      a2.href="uygulama24insankaynaklari.html";
      a2.setAttribute("class","list-group-item");
      a2.appendChild(kutu2);

      a2.addEventListener("mouseover",otele2);
      function otele2() {
        
         window.setTimeout("document.getElementById('kutu2').style.marginLeft=0+'px'",50); 
         window.setTimeout("document.getElementById('kutu2').style.marginLeft=1+'px'",75); 
         window.setTimeout("document.getElementById('kutu2').style.marginLeft=2+'px'",100);
         window.setTimeout("document.getElementById('kutu2').style.marginLeft=3+'px'",125);
         window.setTimeout("document.getElementById('kutu2').style.marginLeft=4+'px'",150);
       
      }

      a2.addEventListener("mouseout",gericek2);
      function gericek2() {
        
         window.setTimeout("document.getElementById('kutu2').style.marginLeft=4+'px'",50);
         window.setTimeout("document.getElementById('kutu2').style.marginLeft=3+'px'",75);
         window.setTimeout("document.getElementById('kutu2').style.marginLeft=2+'px'",100);
         window.setTimeout("document.getElementById('kutu2').style.marginLeft=1+'px'",125);
         window.setTimeout("document.getElementById('kutu2').style.marginLeft=0+'px'",150);      
      
      }
      

    
    
      var a3=document.createElement("a");
      a3.id="madde3";
      a3.href="uygulama24kalitepolitikasi.html";
      a3.setAttribute("class","list-group-item");
      a3.appendChild(kutu3);
     
      kutu3.style.marginLeft=10+"px";
      a3.style.backgroundColor="#bfe300";
      a3.style.color="white";
     
    

      var a4=document.createElement("a");
      a4.id="madde4";
      a4.href="uygulama24degerlerimiz.html";
      a4.setAttribute("class","list-group-item");
      a4.appendChild(kutu4);
   
      a4.addEventListener("mouseover",otele4);
      function otele4() {

   
   
         window.setTimeout("document.getElementById('kutu4').style.marginLeft=0+'px'",50); 
         window.setTimeout("document.getElementById('kutu4').style.marginLeft=1+'px'",75); 
         window.setTimeout("document.getElementById('kutu4').style.marginLeft=2+'px'",100);
         window.setTimeout("document.getElementById('kutu4').style.marginLeft=3+'px'",125);
         window.setTimeout("document.getElementById('kutu4').style.marginLeft=4+'px'",150);
         

      
      }

      a4.addEventListener("mouseout",gericek4);
      function gericek4() {

    
   
         window.setTimeout("document.getElementById('kutu4').style.marginLeft=4+'px'",50);
         window.setTimeout("document.getElementById('kutu4').style.marginLeft=3+'px'",75);
         window.setTimeout("document.getElementById('kutu4').style.marginLeft=2+'px'",100);
         window.setTimeout("document.getElementById('kutu4').style.marginLeft=1+'px'",125);
         window.setTimeout("document.getElementById('kutu4').style.marginLeft=0+'px'",150);     
      
      }

      var a5=document.createElement("a");
      a5.id="madde5";
      a5.setAttribute("class","list-group-item  text-left py-5");
      a5.appendChild(kutu5);
      a5.style.fontSize=23+"px";
      a5.style.fontWeight="bold";
      a5.style.color="#000";
    
     

      item.children[0].appendChild(a5);
      item.children[0].appendChild(a1);
      item.children[0].appendChild(a2);
      item.children[0].appendChild(a3);
      item.children[0].appendChild(a4);

});


}

function yaz7(){//uygulama24egerlerimiz.html sayfası yüklendiğinde çalışan fonksiyon
   var aktif=document.querySelectorAll("#dugmegrup");
   aktif.forEach(item => {
      item.children[1].classList.add("active");
      item.children[1].classList.add("rounded-3");
   
   });

   var getir=document.querySelectorAll("#listegrup");
   getir.forEach(item => {

      var yazi1=document.createTextNode("Misyon & Vizyon");
      var yazi2=document.createTextNode("İnsan Kaynakları");
      var yazi3=document.createTextNode("Kalite Politikası");
      var yazi4=document.createTextNode("Değerlerimiz");
      var yazi5=document.createTextNode("KURUMSAL");

      var kutu1=document.createElement("span");
      kutu1.style.font="bold 14px 'Noto Sans',sans-serif";
      kutu1.style.letterSpacing=.6+"px";
      kutu1.appendChild(yazi1);
      kutu1.id="kutu1";
      var kutu2=document.createElement("span");
      kutu2.style.font="bold 14px 'Noto Sans',sans-serif";
      kutu2.style.letterSpacing=.6+"px";
      kutu2.appendChild(yazi2);
      kutu2.id="kutu2";
      var kutu3=document.createElement("span");
      kutu3.style.font="bold 14px 'Noto Sans',sans-serif";
      kutu3.style.letterSpacing=.6+"px";
      kutu3.appendChild(yazi3);
      kutu3.id="kutu3";
      var kutu4=document.createElement("span");
      kutu4.style.font="bold 14px 'Noto Sans',sans-serif";
      kutu4.style.letterSpacing=.6+"px";
      kutu4.appendChild(yazi4);
      kutu4.id="kutu4";
      var kutu5=document.createElement("span");
   
      kutu5.appendChild(yazi5);
      kutu5.id="kutu5";

      var a1=document.createElement("a");
      a1.setAttribute("class","list-group-item");
      a1.id="madde1";
      a1.href="uygulama24misyonvevizyon.html";
      a1.appendChild(kutu1);

      
   
      a1.addEventListener("mouseover",otele1);
      function otele1() {
        
         window.setTimeout("document.getElementById('kutu1').style.marginLeft=0+'px'",50); 
         window.setTimeout("document.getElementById('kutu1').style.marginLeft=1+'px'",75); 
         window.setTimeout("document.getElementById('kutu1').style.marginLeft=2+'px'",100);
         window.setTimeout("document.getElementById('kutu1').style.marginLeft=3+'px'",125);
         window.setTimeout("document.getElementById('kutu1').style.marginLeft=4+'px'",150);
      
      }

      a1.addEventListener("mouseout",gericek1);
      function gericek1() {
      
         window.setTimeout("document.getElementById('kutu1').style.marginLeft=4+'px'",50);
         window.setTimeout("document.getElementById('kutu1').style.marginLeft=3+'px'",75);
         window.setTimeout("document.getElementById('kutu1').style.marginLeft=2+'px'",100);
         window.setTimeout("document.getElementById('kutu1').style.marginLeft=1+'px'",125);
         window.setTimeout("document.getElementById('kutu1').style.marginLeft=0+'px'",150);      
      
      }
      

     
      

      
   
      var a2=document.createElement("a");
      a2.id="madde2";
      a2.href="uygulama24insankaynaklari.html";
      a2.setAttribute("class","list-group-item");
      a2.appendChild(kutu2);
   
      a2.addEventListener("mouseover",otele2);
      function otele2() {
        
         window.setTimeout("document.getElementById('kutu2').style.marginLeft=0+'px'",50); 
         window.setTimeout("document.getElementById('kutu2').style.marginLeft=1+'px'",75); 
         window.setTimeout("document.getElementById('kutu2').style.marginLeft=2+'px'",100);
         window.setTimeout("document.getElementById('kutu2').style.marginLeft=3+'px'",125);
         window.setTimeout("document.getElementById('kutu2').style.marginLeft=4+'px'",150);
         
      }

      a2.addEventListener("mouseout",gericek2);
      function gericek2() {
    
         window.setTimeout("document.getElementById('kutu2').style.marginLeft=4+'px'",50);
         window.setTimeout("document.getElementById('kutu2').style.marginLeft=3+'px'",75);
         window.setTimeout("document.getElementById('kutu2').style.marginLeft=2+'px'",100);
         window.setTimeout("document.getElementById('kutu2').style.marginLeft=1+'px'",125);
         window.setTimeout("document.getElementById('kutu2').style.marginLeft=0+'px'",150);      
      
      }
      

    
    
      var a3=document.createElement("a");
      a3.id="madde3";
      a3.href="uygulama24kalitepolitikasi.html";
      a3.setAttribute("class","list-group-item");
      a3.appendChild(kutu3);

      a3.addEventListener("mouseover",otele3);
      function otele3() {
        
         window.setTimeout("document.getElementById('kutu3').style.marginLeft=0+'px'",50); 
         window.setTimeout("document.getElementById('kutu3').style.marginLeft=1+'px'",75); 
         window.setTimeout("document.getElementById('kutu3').style.marginLeft=2+'px'",100);
         window.setTimeout("document.getElementById('kutu3').style.marginLeft=3+'px'",125);
         window.setTimeout("document.getElementById('kutu3').style.marginLeft=4+'px'",150);
     
      }

      a3.addEventListener("mouseout",gericek3);
      function gericek3() {
 
         window.setTimeout("document.getElementById('kutu3').style.marginLeft=4+'px'",50);
         window.setTimeout("document.getElementById('kutu3').style.marginLeft=3+'px'",75);
         window.setTimeout("document.getElementById('kutu3').style.marginLeft=2+'px'",100);
         window.setTimeout("document.getElementById('kutu3').style.marginLeft=1+'px'",125);
         window.setTimeout("document.getElementById('kutu3').style.marginLeft=0+'px'",150);      
      
      }
      
     
    

      var a4=document.createElement("a");
      a4.id="madde4";
      a4.href="uygulama24degerlerimiz.html";
      a4.setAttribute("class","list-group-item");
      a4.appendChild(kutu4);
      kutu4.style.marginLeft=10+"px";
      a4.style.backgroundColor="#bfe300";
      a4.style.color="white";



      var a5=document.createElement("a");
      a5.id="madde5";
      a5.setAttribute("class","list-group-item  text-left py-5");
      a5.appendChild(kutu5);
      a5.style.fontSize=23+"px";
      a5.style.fontWeight="bold";
      a5.style.color="#000";
    
     

      item.children[0].appendChild(a5);
      item.children[0].appendChild(a1);
      item.children[0].appendChild(a2);
      item.children[0].appendChild(a3);
      item.children[0].appendChild(a4);

});


}

function yaz8(){//uygulama24hizmetlerimiz.html sayfası yüklendiğinde çalışan fonksiyon
   var aktif=document.querySelectorAll("#dugmegrup");
   aktif.forEach(item => {
      item.children[2].classList.add("active");
      item.children[2].classList.add("rounded-3");
   
   });

   

   var kucult=document.getElementById("kucult");
   kucult.classList.add("col-md-4");


}

function yaz9(){//uygulama24squad.html ve //uygulama24omuzegzersizleri.html sayfaları yüklendiğinde çalışan fonksiyon 
   var aktif=document.querySelectorAll("#dugmegrup");
   aktif.forEach(item => {
      item.children[3].classList.add("active");
      item.children[3].classList.add("rounded-3");
   
   });

   

   var kucult=document.getElementById("kucult");
   kucult.classList.add("col-md-4");


}

function yaz10(){//uygulama24iletisim.html sayfası yüklendiğinde çalışan fonksiyon
   var aktif=document.querySelectorAll("#dugmegrup");
   aktif.forEach(item => {
      item.children[4].classList.add("active");
      item.children[4].classList.add("rounded-3");
   
   });

   

   var kucult=document.getElementById("kucult");
   kucult.classList.add("col-md-4");
   
   




   var dizi1=new Array("+90 999 999 99 99");
  
   var telno=document.querySelector("#telno");
   var sayac=500;
   
   
   setInterval(() => {
      setTimeout(() => {
         for (let i = 0; i <= dizi1[0].length-10; i++) {
      
      
           
            telno.innerHTML+=dizi1[0].charAt(i);
         
            
         }
      }, sayac);
      
      
      
      
      setTimeout(() => {
         
      
         for (let i = 7; i <= dizi1[0].length-6; i++) {
      
      
            telno.innerHTML+=dizi1[0].charAt(i);
         
            
         }
      
      }, sayac*2);
      
      
      
      
      
      setTimeout(() => {
         for (let i =11; i <= dizi1[0].length; i++) {
      
   
            telno.innerHTML+=dizi1[0].charAt(i);
         
            
         }
         
      }, sayac*3);
   
      
   
   
    
      
 },sayac*4);


   setInterval(() => {
      
     
         
   var telnokutu=document.querySelectorAll("#telnokutu");
      
   telnokutu.forEach(item => {

      item.children[2].removeChild(telno.firstChild);
      item.children[2].removeChild(telno.lastChild);

   });
      
      
      
   

   }, sayac*4);

   var adresyazi= new Array("Cras ", "condimentum ", "tellus ", "ligula ", "nec ", "aliquam ", "tortor ", "mollis ", "at.");

   var adres=document.querySelector("#adres");

   var adreskutu=document.querySelectorAll("#adreskutu");


   var sayac2=500;


   setInterval(() => {

      setTimeout(() => {
         adres.innerHTML+=adresyazi[0];

      }, sayac2);

      setTimeout(() => {
         adres.innerHTML+=adresyazi[1];

      }, sayac2*2);
      
      setTimeout(() => {
         adres.innerHTML+=adresyazi[2];

      }, sayac2*3);
      setTimeout(() => {
         adres.innerHTML+=adresyazi[3];

      }, sayac2*4);
      setTimeout(() => {
         adres.innerHTML+=adresyazi[4];

      }, sayac2*5);
      setTimeout(() => {
         adres.innerHTML+=adresyazi[5];

      }, sayac2*6);
      setTimeout(() => {
         adres.innerHTML+=adresyazi[6];

      }, sayac2*7);
      setTimeout(() => {
         adres.innerHTML+=adresyazi[7];

      }, sayac2*8);

      setTimeout(() => {
         adres.innerHTML+=adresyazi[8];

      }, sayac2*9);
     
     
      
   }, sayac2*10);


   setInterval(() => {
      adreskutu.forEach(item=> {
         
         item.children[2].removeChild(adres.firstChild);
         item.children[2].removeChild(adres.lastChild); 
      

      });

   }, sayac2*10);  


}













