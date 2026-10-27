# SAHNE+ Etkinlik Rehberi

Konser, tiyatro, açık hava sineması ve stand-up etkinliklerini bir araya getiren statik bir web sitesi.

## Sayfalar

- `index.html`: Ana sayfa ve öne çıkan etkinlikler
- `etkinlikler.html`: Konser ve tiyatro
- `acik-hava-sinemasi.html`: Açık hava sineması gösterimleri
- `stand-up.html`: Stand-up gösterileri
- `hakkimizda.html`: Rehber hakkında
- `style.css`: Ortak görünüm ve mobil düzen
- `script.js`: Tüm sayfalarda kullanılan ortak JavaScript (mobil menü ve ana sayfa araması)

Ana sayfadaki arama alanı etkinlik türlerini filtreleyerek ilgili kategori sayfasına yönlendirir.

Etkinlikler, tarihler, mekanlar ve bilet bağlantıları örnek içeriktir; yayınlamadan önce güncel bilgilerle değiştirin.

## Yerel olarak çalıştırma

Bu klasörde bir terminal açıp aşağıdaki komutu çalıştırın:

```bash
python3 -m http.server 8000 --bind 0.0.0.0
```

Ardından `http://localhost:8000` adresini tarayıcıda açın. Sunucuyu durdurmak için terminalde `Ctrl+C` tuşlarına basın.
