function enUzunKelimeBul() {
  // Kullanıcıdan bir cümle al
  let cumle = document.querySelector('#GirilecekCumle');
  let inputDegeri = cumle.value;


  // Cümleyi kelimelere ayır
  let kelimeler = inputDegeri.split(" ");

  // En uzun kelimeyi bulmak için bir değişken tanımlamakk
  let enUzunKelime = "";

  // forEach ile kelimeleri gez
  kelimeler.forEach(function (kelime) {
    // Eğer şu ana kadar bulduğunuz en uzun kelimenin uzunluğundan büyükse güncelleyin
    if (kelime.length > enUzunKelime.length) {
      enUzunKelime = kelime;
    }
  });

  //error bloğunu çalıştır
  let errorDiv = document.querySelector(".error");

  //input boşsa eğer hata ver..
  if (inputDegeri == "") {
    errorDiv.innerHTML = `Lütfen Bir Cümle Giriniz!`;
    yeniSonucDiv.innerHTML = null
  }
  else {
    errorDiv.innerHTML = null;
  }

  // En uzun kelimeyi her seferinde yeni div oluşturarak listeye ekle
  let sonucListesi = document.querySelector('#sonucListesi');
  let yeniSonucDiv = document.createElement('div');
  yeniSonucDiv.innerHTML = `<li>Cümledeki en uzun kelime:<span class="blueSpan">${enUzunKelime}</span> ve<span class="blueSpan">${enUzunKelime.length}</span>karakterden oluşmaktadır.`;
  sonucListesi.appendChild(yeniSonucDiv);



  if (yeniSonucDiv !== "") {
    sonucListesi.style.display = "block"
  }
  else {
    sonucListesi.style.display = "none"
  }

  //inputtaki yazıyı temizle
  cumle.value = ""

  //scroll en altta kalsın
  sonucListesi.scrollTop = sonucListesi.scrollHeight

}

//end of file
