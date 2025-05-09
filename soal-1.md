| Title      | Project Kuala Lumpur              | Identifier | smu/doc/1/II.V/2025   |
| ---------- | --------------------------------- | ---------- | --------------------- |
| Subject    | Test Kompetensi calon programming | Version    | 1.0                   |
| Status     | Published                         | Publisher  | Sultan Media Utama    |
| Production | 07 Mei 2025                       | Release    | 09 Mei 2025           |
| Team       | Al Muhdil Karim                   | Access     | Iwan Wirawan          |
|            | Sultan Fajar Ramadhan             |            | Surya Purnomo         |
| Scope      | Internal                          | Approval   | Sultan Fajar Ramadhan |


# Ketentuan
1. gunakan git repository, github atat gitlab
2. upload hasil dari pengerjaan yang telah di lakukan di dalam komputer lokal ke git repository
3. berikan akses dari git repository kepada akun pelaksana tugas seleksi yang ditunjuk.
4. Durasi pengerjaan selama 2 Jam
5. Untuk akses informasi, hanya di pekenankan untuk melihat dokumentasi dari bahasa pemograman dan aplikasi RDBMS yang digunakan.


# Materi Ujian

### 1. Database

Salin tabel dibawah ke spreadsheet, kemudian import di perangkat aplikasi pengelolaan data terstruktur yang dimiliki di komputer lokal.

1. Customers:

| customer_id | customer_name | customer_city |
| ----------- | ------------- | ------------- |
| 1           | Alpha Corp    | New York      |
| 2           | Beta Ltd      | London        |
| 3           | Gamma Inc     | Sydney        |
| 4           | Delta Corp    | Madrid        |

2. Salesman:

| salesman_id | salesman_name | salesman_city | commission |
| ----------- | ------------- | ------------- | ---------- |
| 1           | Lauda         | New York      | 0.15       |
| 2           | Miomio        | Los Angeles   | 0.12       |
| 3           | Kamille       | Houston       | 0.10       |
| 4           | Agus          | Chicago       | 0.14       |

3. Orders:

| order_id | order_date | amount | salesman_id | customer_id |
| -------- | ---------- | ------ | ----------- | ----------- |
| 1        | 2023-01-01 | 200.00 | 1           | 1           |
| 2        | 2023-01-02 | 250.00 | 2           | 1           |
| 3        | 2023-01-03 | 150.00 | 3           | 2           |
| 4        | 2023-01-04 | 300.00 | 4           | 3           |
| 5        | 2023-01-05 | 400.00 | 1           | 2           |
| 6        | 2023-01-06 | 350.00 | 2           | 3           |
| 7        | 2023-01-07 | 500.00 | 3           | 1           |
| 8        | 2023-01-08 | 200.00 | 4           | 3           |

4. Stock:

| stock_id   | Stock  |
| --------   | ------ |
| 1          | 200    |
| 2          | 250    |
| 3          | 150    |
| 4          | 300    |
| 5          | 400    |
| 6          | 350    |
| 7          | 500    |
| 8          | 200    |

5. Product:
   
| product_id | Product  | 
| --------   | ------   | 
| 1          | Computer | 
| 2          | Mouse    | 
| 3          | Headset  | 
| 4          | Mousepad | 
| 5          | Monitor  | 
| 6          | HDMI     | 
| 7          | LAN      | 
| 8          | Speaker  |

Berdasarkan data yang telah di lampirkan, tentukan pelanggan yang tidak membuat pesanan.




### 2. Logic Based

Di perusahaan saya, pekerjaan dibagi-bagi berdasarkan daftar ID karyawan. Nah, tiap tugas punya daftarnya sendiri, isinya itu ID-ID karyawan yang dijadwalkan mengerjakan tugas tersebut. Tapi belakangan, mulai muncul masalah: beberapa orang merasa mereka “langganan” pekerjaan paling nyebelin. Mereka merasa dapat giliran terlalu sering.

Daripada menunggu mereka protes atau mogok kerja, kamu diminta bikin sistem otomatis. Gampangnya seperti ini: kalau ada karyawan yang sudah dapat tugas tertentu lebih dari n kali, langsung coret semua giliran dia dari daftar. Jadi gak menunggu protes dulu. Pokoknya kalau sudah lewat batas, dia gak ikut tugas itu sama sekali.

Misalnya:
```
data = [5, 10, 15, 10, 7]
```

```
n = 1
```

Karyawan 10 muncul dua kali. Karena itu lebih dari 1, dia langsung dicoret total dari daftar. Jadinya:
```
[5, 15, 7]
```

Tugas Kamu:
1. Bikin fungsi dengan nama answer(data, n) yang:
2. Dapat data, yaitu daftar ID karyawan (isinya angka),
3. Dapat  n, yaitu batas maksimal berapa kali ID boleh muncul di daftar,
4. Kembalikan daftar baru dengan semua ID yang muncul lebih dari n kali dihapus seluruhnya,
5. Urutan ID dalam daftar harus tetap kayak aslinya.


