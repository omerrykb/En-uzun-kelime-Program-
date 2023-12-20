function enUzunKelimeBul() {
    // Kullanıcıdan bir cümle al
    let cumle = document.querySelector('#GirilecekCumle');
    let inputDegeri = cumle.value;
    
    
    if(inputDegeri==""){
      return;
    }

    // Cümleyi kelimelere ayır
    let kelimeler = inputDegeri.split(" ");
  
    // En uzun kelimeyi bulmak için bir değişken tanımlamakk
    let enUzunKelime = "";
  
    // forEach ile kelimeleri gez
    kelimeler.forEach(function(kelime) {
      // Eğer şu ana kadar bulduğunuz en uzun kelimenin uzunluğundan büyükse güncelleyin
      if (kelime.length > enUzunKelime.length) {
        enUzunKelime = kelime;
      }
    });

    // En uzun kelimeyi bir div içine ekleyin
    let sonucListesi = document.querySelector('#sonucListesi');
    let yeniSonucDiv = document.createElement('div');
    yeniSonucDiv.innerHTML = `<li>Cümledeki en uzun kelime:<span class="blueSpan">${enUzunKelime}</span>ve<span class="blueSpan">${enUzunKelime.length}</span>karakterden oluşmaktadır.`;
    sonucListesi.appendChild(yeniSonucDiv);

    //inputtaki yazıyı temizle
    cumle.value=""
    


    if(sonucListesi.innerHTML===""){
      sonucListesi.style.display="none";
    }
    else{
      sonucListesi.style.display="block";
    }
  }

  
