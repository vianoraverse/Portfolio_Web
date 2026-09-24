# Alexa Serrafona Juliet — Portfolio

Website portofolio single-page berbasis HTML, CSS, dan JavaScript tanpa framework.

## Menjalankan secara lokal

Buka `index.html` langsung di browser, atau jalankan server lokal:

```bash
python3 -m http.server 8000
```

Kemudian buka <http://localhost:8000>.

## Deploy ke GitHub Pages

### Opsi otomatis (direkomendasikan)

Workflow `.github/workflows/pages.yml` akan melakukan deploy setiap kali ada push ke branch `main`.
Setelah push pertama, buka **Settings → Pages**, pilih **GitHub Actions** sebagai source, lalu
workflow akan meneruskan deployment secara otomatis.

1. Buat repository GitHub baru, lalu salin semua file (`index.html`, `styles.css`, dan `script.js`) ke root repository.
2. Commit dan push:

   ```bash
   git init
   git add .
   git commit -m "Create Alexa portfolio website"
   git branch -M main
   git remote add origin https://github.com/USERNAME/REPOSITORY.git
   git push -u origin main
   ```

3. Di GitHub, buka **Settings → Pages**.
4. Pada **Build and deployment**, pilih **Deploy from a branch**, branch `main`, folder `/ (root)`, lalu **Save**.
5. Situs akan tersedia di `https://USERNAME.github.io/REPOSITORY/`.

Ganti tautan LinkedIn di `index.html` apabila URL profil LinkedIn yang digunakan berbeda.
