//README DOSYASINDAKİ ADIMLARI TAKİP ETTİKTEN SONRA AŞAĞIDAKİLERİ YAPINIZ

// Başlangıç Challenge'ı

/**Örnek Görev: İlkini Dön
 *
 * Bu örnek sonradan gelecek olan görevleri nasıl çözeceğinizi size gösterecek.
 *
 * Aşağdıaki Yüksek dereceden fonskiyonu(higher-order function) kullanarak aşağıdakileri yapınız
 *  1. Stringlerden oluşan bir array'i parametre olarak alın
 *  2. Bir string'i değişken olarak alan bir callback fonksiyonunu parametre olarak alın
 *  3. Array'in İLK elemanını değişken olarak alarak çalışacak olan callback fonksiyonunun sonucunu dönün
 *
 * Aşağıdaki kodlar bu görevin nasıl yapılacağına örnek olacaktır
 * Bu fonskiyon 'asas' dönmeli(return)
 */

function ilkiniDon(stringArray, callback) {
  return callback(stringArray[0]);
}
console.log(
  "örnek görev:",
  ilkiniDon(["as", "sa"], function (metin) {
    return metin + metin;
  })
);

// Başlangıç Challenge'ı Sonu

///// M V P ///////

/*Görev 1: macSkoru()
  
  Aşağıdaki skor1 ve skor2 kodlarını inceleyiniz ve aşağıdaki soruları altına not alarak cevaplayın
  
  1. skor1 ve skor2 arasındaki fark nedir?

  skor1, iç içe geçmiş iki fonksiyon içeriyor. İlk fonksiyon olan skorArtirici, skor degiskenini koruyor. Bu sayede dışarıdan erişilemeyen bir fonksiyon döndürüyor. 
  
  İkinci fonksiyon olan skorGuncelle, bu içerdeki skor değişkenini 1 artırıyor ve bu değeri döndürüyor. 
  
  Yani skor1, bir fonksiyon döndürerek skorun güncellenmesini sağliyor. Bu sayede skor degiskenine disaridan mudahale edilemiyor.
  
  skor2 ise sadece bir global değişken olan yani disaridan müdahaleye acik olan 'skor'u artıran bir fonksiyondur. Yani skor degiskenine disaridan mudahale edebiliriz.
  
  2. Hangisi bir closure kullanmaktadır? Nasıl tarif edebilirsin? (yarınki derste öğreneceksin :) )
  
  skor1 bir closure kullanmaktadır. 
  
  Bir closure, iç içe bir fonksiyonun, dıştaki fonksiyonun kapsamındaki değişkenlere erişim sağladığı bir yapıdır.
  
  skorArtirici fonksiyonu, içerde tanımlanan skor değişkenine erişilebilir ve onu güncelleyebilir. 
  
  skorGuncelle fonksiyonu dışarıdaki skor değişkenini kullanabilir ve güncelleyebilir. Yani skorGuncelle fonksiyonu, skor değişkenini kapsayan bir closure'dır.

  3. Hangi durumda skor1 tercih edilebilir? Hangi durumda skor2 daha mantıklıdır?

  Eğer skor değişkeninin sadece belirli bir fonksiyon aracılığıyla güncellenmesini ve kontrol altında tutulmasını istiyorsak skor1 tercih edilebilir.

  Eğer skor değişkenini çok farklı yerlerden degistirmek istersek veya skor degiskenini herkesin degistirmesinde bir sakinca yoksa skor2 tercih edilebilir.
*/

// skor1 kodları
function skorArtirici() {
  let skor = 0;
  return function skorGuncelle() {
    return skor++;
  };
}

const skor1 = skorArtirici();

// skor2 kodları
let skor = 0;

function skor2() {
  return skor++;
}

/* Görev 2: takimSkoru() 
Aşağıdaki takimSkoru() fonksiyonununda aşağıdakileri yapınız:
  1. Bir çeyrekte bir takımın ürettiği skoru rastgele(random) elde eden bir sonuc dönünüz(return)
  
  Ön Bilgi: Bir çeyrekte takımlar ortalama 10 ile 25 sayı üretebiliyor
  Örnek: takimSkoru çağrıldığında 10-25 arasında bir skor dönmeli
  
Not: Bu fonskiyon, aşağıdaki diğer görevler için de bir callback fonksiyonu olarak da kullanılacak
*/

function takimSkoru(baslangic = 10, bitis = 25) {
  const rastgeleSkor =
    baslangic + Math.floor(Math.random() * (bitis - baslangic + 1));

  return rastgeleSkor;
}

console.log("GÖREV 2: TAKIM SKORU: ", takimSkoru());

/* Görev 3: macSonucu() 
Aşağıdaki macSonucu() fonksiyonununda aşağıdakileri yapınız:
  1. Görev 2'de oluşturduğunuz 'takimSkoru'nu callback fonskiyonunu olarak ilk parametrede alın
  2. Bir basketbol maçında oynanan çeyrek sayısını ikinci parametre olarak alın
  3. Her çeyrekte EvSahibi ve KonukTakim için bir skor oluşturun
  4. Her oynanan çeyrekten sonra EvSahibi ve KonukTakim için skoru güncelleyin
  5. Son çeyrekten sonra, maçın bitiş skorunu bir object olarak dönün(return)

  Örneğin: macSonucu(takimSkoru, 4) çalıştırınca aşağıdaki object'i dönmeli
{
  "EvSahibi": 92,
  "KonukTakim": 80
}
*/

function macSonucu(callback, ceyrekSayisi) {
  let evSahibiSkor = 0;
  let konukTakimSkor = 0;

  for (let i = 0; i < ceyrekSayisi; i++) {
    evSahibiSkor += callback();
    konukTakimSkor += callback();
  }

  const sonuc = {
    EvSahibi: evSahibiSkor,
    KonukTakim: konukTakimSkor,
  };

  return sonuc;
}

console.log("GÖREV 3: MAC SONUCU: ", macSonucu(takimSkoru, 4));

/* Zorlayıcı Görev 4: periyotSkoru()
Aşağıdaki periyotSkoru() fonksiyonununda aşağıdakileri yapınız:
  1. Görev 2'de oluşturduğunuz 'takimSkoru'nu callback fonskiyonunu olarak ilk parametrede alın
  2. takimSkoru callback fonksiyonunu kullanarak, EvSahibi ve KonukTakim için bir skor üretin
  3. Bir object olarak EvSahibi ve KonukTakim skorunu dönün
  
Örneğin: periyotSkoru(takimSkoru) çalıştırınca aşağıdaki object'i dönmeli
{
  "EvSahibi": 18,
  "KonukTakim": 12
}
  */

function periyotSkoru(callback) {
  let evSahibiSkor = 0;
  let konukTakimSkor = 0;

  evSahibiSkor = callback();
  konukTakimSkor = callback();

  const sonuc = {
    EvSahibi: evSahibiSkor,
    KonukTakim: konukTakimSkor,
  };
  return sonuc;
}

console.log("GÖREV 4: PERIYOT SKORU: ", periyotSkoru(takimSkoru));

/* Zorlayıcı Görev 5: skorTabelasi() 
Aşağıdaki skorTabelasi() fonksiyonunu kullanarak aşağıdakileri yapınız:
  1. İlk parametre olarak Görev 4'te oluşturduğumuz 'periyotSkoru'nu bir değişken olarak almalı
  2. İkinci parametre olarak Gröev 2'de oluşturduğumuz 'takimSkoru'nu bir değişken olarak almalı
  3. Üçüncü parametre olarak da oynanacak olan çeyrek sayısını alın
  4. Her bir çeyreğin sonucunu bir string olarak bir array içinde dönün. Aşadaki örnek gibi olmalı. Her çeyrekteki atılan sayıları ayrı ayrı yazmalı(toplam skoru değil!).
  5. Eğer maç berabere biterse uzatmalar oynanmalı ve "Uzatma 1: Ev Sahibi 13 - Konuk Takım 11" eklemeli. (Her uzatma için ayrı ayrı eklemeli)
  6. Maç bitince de final skoru yazmalı: "Maç Sonucu: Ev Sahibi 101 - Konuk Takım 98"

MAÇ UZAMAZ ise skorTabelasi(periyotSkoru,takimSkoru,4)
  
[
  "1. Periyot: Ev Sahibi 10 - Konuk Takım 21", 
  "2. Periyot: Ev Sahibi 20 - Konuk Takım 13",
  "3. Periyot: Ev Sahibi 13 - Konuk Takım 9", 
  "4. Periyot: Ev Sahibi 18 - Konuk Takım 11", 
  "Maç Sonucu: Ev Sahibi 61 - Konuk Takım 54"  
]

MAÇ UZAR ise skorTabelasi(periyotSkoru,takimSkoru,4)
[
  "1. Periyot: Ev Sahibi 10 - Konuk Takım 21", 
  "2. Periyot: Ev Sahibi 20 - Konuk Takım 13",
  "3. Periyot: Ev Sahibi 13 - Konuk Takım 9", 
  "4. Periyot: Ev Sahibi 18 - Konuk Takım 18",
  "1. Uzatma: Ev Sahibi 10 - Konuk Takım 6" 
  "Maç Sonucu: Ev Sahibi 71 - Konuk Takım 67"  
]
] */
// NOTE: Bununla ilgili bir test yoktur. Eğer logladığınız sonuçlar yukarıdakine benziyor ise tmamlandı sayabilirsiniz.

function skorTabelasi(periyotFn, takimSkoruFn, ceyrekSayisi) {
  const scoreBoard = [];

  let evSahibiSkor = 0;
  let konukTakimSkor = 0;

  for (let i = 1; i <= ceyrekSayisi; i++) {
    const periyot = periyotFn(takimSkoruFn);

    evSahibiSkor += periyot.EvSahibi;
    konukTakimSkor += periyot.KonukTakim;

    scoreBoard.push(
      i +
        ". Periyot: Ev Sahibi " +
        periyot.EvSahibi +
        " - Konuk Takım " +
        periyot.KonukTakim
    );
  }
  //Burada beraberlik durumuna bakacagız
  let uzatmaSayisi = 0;

  while (evSahibiSkor === konukTakimSkor) {
    uzatmaSayisi++;
    const periyot = periyotFn(takimSkoruFn);
    evSahibiSkor += periyot.EvSahibi;
    konukTakimSkor += periyot.KonukTakim;

    scoreBoard.push(
      `${uzatmaSayisi}. Uzatma: Ev Sahibi ${periyot.EvSahibi} - Konuk Takım ${periyot.KonukTakim}`
    );
  }
  scoreBoard.push(
    "Maç Sonucu: Ev Sahibi " + evSahibiSkor + " - Konuk Takım " + konukTakimSkor
  );
  return scoreBoard;
}

console.log(
  "GÖREV 5: SKOR TABLASI: ",
  skorTabelasi(periyotSkoru, takimSkoru, 4)
);

/* Aşağıdaki satırları lütfen değiştirmeyiniz*/
function sa() {
  console.log("Kodlar çalışıyor");
  return "as";
}
sa();
module.exports = {
  sa,
  ilkiniDon,
  skor1,
  skor2,
  takimSkoru,
  macSonucu,
  periyotSkoru,
  skorTabelasi,
};
