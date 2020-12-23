class UI {
    constructor() {       
        this.ürünListesi = [];      
        this.ürünAdıMuz = document.querySelector(".ürün-adı-muz");
        this.birimFiyatMuz = document.querySelector(".birim-fiyat-muz");
        this.ürünAdıPortakal = document.querySelector(".ürün-adı-portakal");
        this.birimFiyatPortakal = document.querySelector(".birim-fiyat-portakal");
        this.ürünAdıElma = document.querySelector(".ürün-adı-elma");
        this.birimFiyatElma = document.querySelector(".birim-fiyat-elma");
        this.ürünID = 0;
        this.muzAdet = 0;
        this.portakalAdet = 0;
        this.elmaAdet = 0;
        this.sepetTutarı = document.querySelector(".sepet-tutari");
        this.ürünleriGöster = document.querySelector(".ürünleri-göster");
    }

    ürünEkleMuz(){
        this.muzAdet++;
        var ürünMuz = {
            id : this.ürünID,
            ürünAdı : this.ürünAdıMuz.textContent,
            fiyat : parseInt(this.birimFiyatMuz.innerHTML),
            adet : this.muzAdet,
        };        
        var self = this;
        if(self.ürünListesi.some(ürünVarMı => ürünVarMı.ürünAdı == "Muz")){
            var ürünIndex = self.ürünListesi.findIndex((ürün => ürün.ürünAdı == "Muz"));
            self.ürünListesi[ürünIndex].adet = self.muzAdet;
            self.adetEkle(self.ürünListesi[ürünIndex]);
        }else{
            this.ürünID++;
            self.ürünListesi.push(ürünMuz);
            self.ürünOluştur(ürünMuz);
        }   
        console.log(this.ürünListesi);
        this.tutarHesapla();
    }

    ürünEklePortakal(){
        this.portakalAdet++;
        var ürünPortakal = {
            id : this.ürünID,
            ürünAdı : this.ürünAdıPortakal.textContent,
            fiyat : parseInt(this.birimFiyatPortakal.innerHTML),
            adet : this.portakalAdet,
        };
        var self = this;
        if(self.ürünListesi.some(ürünVarMı => ürünVarMı.ürünAdı == "Portakal")){
            var ürünIndex = self.ürünListesi.findIndex((ürün => ürün.ürünAdı == "Portakal"));
            self.ürünListesi[ürünIndex].adet = self.portakalAdet;
            self.adetEkle(self.ürünListesi[ürünIndex]);
        }else{
            this.ürünID++;
            self.ürünListesi.push(ürünPortakal);
            self.ürünOluştur(ürünPortakal);
        }
        console.log(this.ürünListesi);
        this.tutarHesapla();
    }

    ürünEkleElma(){
        this.elmaAdet++;
        var ürünElma = {
            id : this.ürünID,
            ürünAdı : this.ürünAdıElma.textContent,
            fiyat : parseInt(this.birimFiyatElma.innerHTML),
            adet : this.elmaAdet,
        };
        var self = this;
        if(self.ürünListesi.some(ürünVarMı => ürünVarMı.ürünAdı == "Elma")){
            var ürünIndex = self.ürünListesi.findIndex((ürün => ürün.ürünAdı == "Elma"));
            self.ürünListesi[ürünIndex].adet = self.elmaAdet;
            self.adetEkle(self.ürünListesi[ürünIndex]);
        }else{
            this.ürünID++;
            self.ürünListesi.push(ürünElma);
            self.ürünOluştur(ürünElma);
        }
        console.log(this.ürünListesi);
        this.tutarHesapla();
    }

    ürünÇıkarMuz(){
        if(this.muzAdet >0){
            this.muzAdet--;
            var self = this;
            if(self.muzAdet < 1){
                var ürünIndex = self.ürünListesi.findIndex((ürün => ürün.ürünAdı == "Muz"));
                var buttons = document.querySelectorAll(".delete-icon");
                var btnsArr = Array.prototype.slice.call(buttons);
                var tempList = btnsArr.filter(function (item) {
                    return item.dataset.id == self.ürünListesi[ürünIndex].id;
                });
                btnsArr = tempList;
                var parent = btnsArr[0];
                self.ürünSil(parent);
            }else{
                var ürünIndex = self.ürünListesi.findIndex((ürün => ürün.ürünAdı == "Muz"));
                self.ürünListesi[ürünIndex].adet = self.muzAdet;
                self.adetÇıkar(self.ürünListesi[ürünIndex]);
            }
            console.log(this.ürünListesi);
            this.tutarHesapla();
        }
    }

    ürünÇıkarPortakal(){
        if(this.portakalAdet >0){
            this.portakalAdet--;
            var self = this;
            if(self.portakalAdet < 1){
                var ürünIndex = self.ürünListesi.findIndex((ürün => ürün.ürünAdı == "Portakal"));
                var buttons = document.querySelectorAll(".delete-icon");
                var btnsArr = Array.prototype.slice.call(buttons);
                var tempList = btnsArr.filter(function (item) {
                    return item.dataset.id == self.ürünListesi[ürünIndex].id;
                });
                btnsArr = tempList;
                var parent = btnsArr[0];
                self.ürünSil(parent);
            }else{
                var ürünIndex = self.ürünListesi.findIndex((ürün => ürün.ürünAdı == "Portakal"));
                self.ürünListesi[ürünIndex].adet = self.portakalAdet;
                self.adetÇıkar(self.ürünListesi[ürünIndex]);
            }
            console.log(this.ürünListesi);
            this.tutarHesapla();
        }
    }

    ürünÇıkarElma(){
        if(this.elmaAdet >0){
            this.elmaAdet--;
            var self = this;
            if(self.elmaAdet < 1){
                var ürünIndex = self.ürünListesi.findIndex((ürün => ürün.ürünAdı == "Elma"));
                var buttons = document.querySelectorAll(".delete-icon");
                var btnsArr = Array.prototype.slice.call(buttons);
                var tempList = btnsArr.filter(function (item) {
                    return item.dataset.id == self.ürünListesi[ürünIndex].id;
                });
                btnsArr = tempList;
                var parent = btnsArr[0];
                self.ürünSil(parent);
            }else{
                var ürünIndex = self.ürünListesi.findIndex((ürün => ürün.ürünAdı == "Elma"));
                self.ürünListesi[ürünIndex].adet = self.elmaAdet;
                self.adetÇıkar(self.ürünListesi[ürünIndex]);
            }
            console.log(this.ürünListesi);
            this.tutarHesapla();
        }
    }

    tutarHesapla(){
        var self = this;
        var carpimlar = self.ürünListesi.map( item => item.fiyat * item.adet);
        var toplam = carpimlar.reduce(function(a, b){
            return a + b;
        }, 0);
        this.sepetTutarı.innerHTML = `SEPET TUTARI : ${toplam} TL` ;
    }

    ürünOluştur(gelenÜrün){
        var self = this;
        var parent = document.createElement('li');
        parent.innerHTML = `Ürün : ${gelenÜrün.ürünAdı} : Birim Fiyatı : ${gelenÜrün.fiyat} TL 
        Adet : ${gelenÜrün.adet}
        <a href="#" class="delete-icon" data-id="${self.ürünID - 1}"><i class="fas fa-trash-alt"></i></a>`
        self.ürünleriGöster.appendChild(parent);
    }

    adetEkle(gelenAdet){
        var buttons = document.querySelectorAll(".delete-icon");
        var btnsArr = Array.prototype.slice.call(buttons);
        var tempList = btnsArr.filter(function (item) {
            return item.dataset.id == gelenAdet.id;
          });
        btnsArr = tempList;
        var parent = btnsArr[0].parentElement;
        parent.innerHTML = `Ürün : ${gelenAdet.ürünAdı} : Birim Fiyatı : ${gelenAdet.fiyat} TL 
        Adet : ${gelenAdet.adet}
        <a href="#" class="delete-icon" data-id="${gelenAdet.id}"><i class="fas fa-trash-alt"></i></a>`
    }

    adetÇıkar(gelenAdet){
        var buttons = document.querySelectorAll(".delete-icon");
        var btnsArr = Array.prototype.slice.call(buttons);
        var tempList = btnsArr.filter(function (item) {
            return item.dataset.id == gelenAdet.id;
          });
        btnsArr = tempList;
        var parent = btnsArr[0].parentElement;
        parent.innerHTML = `Ürün : ${gelenAdet.ürünAdı} : Birim Fiyatı : ${gelenAdet.fiyat} TL 
        Adet : ${gelenAdet.adet}
        <a href="#" class="delete-icon" data-id="${gelenAdet.id}"><i class="fas fa-trash-alt"></i></a>`
    }

    ürünSil(element){
        var id = parseInt(element.dataset.id);
        var parent = element.parentElement;
        this.ürünleriGöster.removeChild(parent);
        var tempList = this.ürünListesi.filter(function (item) {
            return item.id !== id;
          });
        this.ürünListesi = tempList;
        this.tutarHesapla();
        var self = this;
        if(!(self.ürünListesi.some(ürünVarMı => ürünVarMı.ürünAdı == "Muz"))){
            self.muzAdet = 0;
        }else if(!(self.ürünListesi.some(ürünVarMı => ürünVarMı.ürünAdı == "Portakal"))){
            self.portakalAdet = 0;
        }else if(!(self.ürünListesi.some(ürünVarMı => ürünVarMı.ürünAdı == "Elma"))){
            self.elmaAdet = 0;
        }
    }
}

function eventListeners() {
    var buttons = document.querySelectorAll(".ekle-butonu").length;
    var btns = document.querySelectorAll(".çıkar-butonu").length;
    var sepet = document.querySelector(".sepet");
    var ui = new UI();
    for (var i = 0; i < buttons ; i++) {
        document.querySelectorAll(".ekle-butonu")[i].addEventListener("click", function(event) {
            event.preventDefault;
            if(event.target.parentElement.classList.contains("ürün-1")){
                ui.ürünEkleMuz();           
            }else if(event.target.parentElement.classList.contains("ürün-2")){
                ui.ürünEklePortakal();
            }else if(event.target.parentElement.classList.contains("ürün-3")){
                ui.ürünEkleElma();
            }   
        });
    }

    for (var i = 0; i < btns ; i++) {
        document.querySelectorAll(".çıkar-butonu")[i].addEventListener("click", function(event) {
            event.preventDefault;
            if(event.target.parentElement.classList.contains("ürün-1")){
                ui.ürünÇıkarMuz();           
            }else if(event.target.parentElement.classList.contains("ürün-2")){
                ui.ürünÇıkarPortakal();
            }else if(event.target.parentElement.classList.contains("ürün-3")){
                ui.ürünÇıkarElma();
            }   
        });
    }

    sepet.addEventListener("click", function (event) {
        event.preventDefault();
        if(event.target.parentElement.classList.contains("delete-icon")){
            ui.ürünSil(event.target.parentElement);
        }
    });
}

document.addEventListener("DOMContentLoaded", function () {
    eventListeners();
})