# SAHNE+ Projesi — Kod, Prompt ve Öneri Notları

Bu belge, projenin sayfalarını ve ortak dosyalarını açıklar. Promptlar geliştirme sırasında kullanılabilecek örnek isteklerdir; öneri değerlendirmeleri mevcut statik site yapısına göre hazırlanmıştır.

## Sayfalar ve kod açıklamaları

### `index.html` — Ana sayfa

- Üst menüden etkinlik ve bilgi sayfalarına geçiş sağlar.
- Giriş alanı, etkinlik türlerini tanıtan hero bölümü, kategori araması ve öne çıkan etkinlik kartlarını içerir.
- Arama sonuçları `data-search` değerlerindeki kategori ve anahtar kelimelere göre filtrelenir.
- Etkinlik görsellerinde açıklayıcı `alt` metinleri ve geç yükleme için `loading="lazy"` kullanılır.

### `etkinlikler.html` — Konser ve tiyatro

- Konser ve tiyatro etkinliklerini tekrar kullanılabilir kart düzeninde listeler.
- Kartlarda tür, tarih, açıklama, mekan ve bilet bağlantısı bulunur.
- Sayfadaki örnek etkinlik bilgileri yayın öncesinde gerçek verilerle değiştirilmelidir.

### `acik-hava-sinemasi.html` — Açık hava sineması

- Film gösterimlerini afiş/görsel, tarih, açıklama ve gösterim bağlantısıyla sunar.
- Bilgilendirme metni; örnek programın yanı sıra gösterim haklarının, mekanın ve hava koşullarının kontrol edilmesi gerektiğini belirtir.

### `stand-up.html` — Stand-up

- Stand-up ve açık mikrofon gösterilerini etkinlik kartlarıyla listeler.
- Gösteri ve bilet bilgilerinin satın alma öncesinde doğrulanması gerektiğine dair uyarı içerir.

### `hakkimizda.html` — Hakkımızda

- Rehberin amacını anlatır ve “Keşfet, Planla, Katıl” adımlarını tanıtır.
- Etkinlik bilgilerinin ve bilet bağlantılarının örnek olduğunu hatırlatır.

### `style.css` — Ortak görünüm

- Renkleri CSS değişkenlerinde tanımlar; menü, hero, kartlar, bağlantılar ve alt bilgi gibi ortak bileşenleri biçimlendirir.
- Medya sorguları dar ekranlarda menüyü, boşlukları ve kart yerleşimini düzenler.
- `prefers-reduced-motion` tercihi olan kullanıcılar için animasyon ve geçişleri azaltır.

### `script.js` — Ortak etkileşimler

- Her sayfadaki mobil menü düğmesini yönetir; `aria-expanded` ve erişilebilir düğme etiketini günceller.
- Menü bağlantısı seçildiğinde menüyü kapatır. Escape tuşu menüyü kapatıp odağı düğmeye geri taşır.
- Arama kodu yalnızca `#event-search` alanı bulunan ana sayfada çalışır.
- Arama metnini Türkçe karakterleri de kapsayacak biçimde küçük harfe çevirip aksan işaretlerini normalleştirir. Eşleşen kartları gösterir, sonuç sayısını günceller ve sonuç yok mesajını gerektiğinde açar.

### `README.md` ve `AI_NOTLARI.md`

- `README.md` proje sayfalarını ve yerel çalıştırma adımlarını açıklar.
- `AI_NOTLARI.md` arama, görseller, mobil uyarlama ve ortak JavaScript hakkındaki kısa geliştirme notlarını içerir.

## Örnek promptlar

Bu promptlar mevcut özellikleri açıklayan veya benzer geliştirmeleri yönlendiren örneklerdir.

### Genel proje ve sayfa yapısı

> “Mevcut statik etkinlik rehberinin tasarım dilini ve HTML yapısını koru. Yeni sayfa eklerken ortak navigasyonu, mobil menüyü, alt bilgiyi ve `style.css` kullanımını diğer sayfalarla tutarlı tut.”

### Ana sayfa araması

> “Ana sayfaya etkinlik kategorilerini ve anahtar kelimeleri filtreleyen bir arama ekle. Türkçe karakterlerde doğru eşleşme yap, görünen kategori sayısını güncelle ve eşleşme yoksa açıklayıcı bir mesaj göster.”

### Konser ve tiyatro listesi

> “Konser ve tiyatro etkinliklerini erişilebilir HTML kartlarında göster. Her kartta tür, tarih, kısa açıklama, mekan ve bilet bağlantısı olsun. Etkinlik verilerinin örnek olduğunu kullanıcıya bildir.”

### Açık hava sineması sayfası

> “Açık hava sineması gösterimleri için ayrı bir kategori sayfası hazırla. Film başlığı, tarih, açıklama ve görsel içeren kartlar kullan; gösterim hakları ve organizasyon bilgilerinin doğrulanması gerektiğini belirt.”

### Stand-up sayfası

> “Stand-up ve açık mikrofon etkinlikleri için mevcut kart tasarımını kullanan bir liste sayfası oluştur. Görseller için açıklayıcı alternatif metin ekle ve örnek bilet bilgilerinin kontrol edilmesi gerektiğini belirt.”

### Erişilebilir mobil gezinme

> “Tüm sayfalarda ortak kullanılacak mobil menü davranışı ekle. Menü düğmesinin erişilebilir durumunu güncelle, menüyü bağlantı seçilince ve Escape tuşuna basılınca kapat, klavye odağını uygun şekilde yönet.”

### Görsel ve mobil düzen

> “Etkinlik görsellerine anlamlı alt metin ekle ve kart görsellerini geç yükle. Ortak CSS’i kullanarak kartları, başlıkları ve menüyü küçük ekranlarda taşma olmadan düzenle.”

## Öneri değerlendirmeleri

| Öneri | Değerlendirme | Durum |
|---|---|---|
| Etkinlik türü ve anahtar kelime araması | Ana sayfada kategorileri filtreler; sonuç sayısı ve boş sonuç mesajı sunar. Türkçe metin normalleştirmesi arama deneyimini iyileştirir. | Uygulandı |
| Ortak mobil menü | Menü etkileşimi tek `script.js` dosyasındadır. `aria-expanded`, bağlantı seçimi ve Escape davranışı ele alınmıştır. | Uygulandı |
| Sayfalara göre etkinlik kategorileri | Konser/tiyatro, açık hava sineması ve stand-up içerikleri ayrı sayfalarda sunulur. | Uygulandı |
| Görsel erişilebilirliği ve performansı | Görsellerde alternatif metin bulunur; etkinlik kartı görselleri geç yüklemeyi kullanır. | Uygulandı |
| Mobil uyum | Ortak stil dosyasındaki medya sorguları küçük ekranlarda menü, kartlar ve boşlukları uyarlar. | Uygulandı |
| Gerçek ve güncel etkinlik verileri | Site statiktir; tarih, mekan ve bilet bağlantıları örnek içerik olarak belirtilmiştir. Gerçek veriye geçiş için içeriklerin yayın öncesinde doğrulanması gerekir. | Sonraki geliştirme |
| Arama için otomatik kategori sayfasına yönlendirme | Arama sonuçları kategori kartlarını filtreler; kullanıcı doğru sayfaya kart bağlantısından geçer. Otomatik yönlendirme eklenmemiştir; mevcut davranış kullanıcıya sonuçları seçme olanağı verir. | Mevcut davranış korunuyor |

## Kontrol notları

- Yerel sayfalar ve görseller yayına alınmadan önce kontrol edilmelidir.
- Etkinlik tarihleri, mekanları, bilet bağlantıları ve sinema gösterim hakları doğrulanmalıdır.
- Mobil menü, arama alanı ve kategori bağlantıları masaüstü ve dar ekranlarda denenmelidir.
