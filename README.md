WEBSITE - CONSULTANT

Fitur Sprint#1

login 
- validasi email dan password (tidak kosong) 
- jika sukses, redirect ke beranda 
- return user object, simpan ke global state 

register
validasi nama lengkap, email, password (tidak kosong, format email sesuai)
jika email sudah terdaftar, tampilkan pesan error email sudah terdaftar
jika sukses, redirect ke beranda, tampilkan pesan lengkapi profil 
jika gagal, tampilkan pesan kesalahan 

beranda
get data konsultasi yang masuk 
get data konsultasi aktif 
get data konsultasi menunggu pembayaran 
get data konsultasi hari ini 
ketika lihat semua diklik, masuk ke list konsultasi (sesuai status) 
ketika data konsultasi diklik, masuk detail konsultasi 

list konsultasi
get data list konsultasi sesuai status 
pagination 10 data/page 

riwayat
get data list riwayat konsultasi (selesai || ditolak) 
paginasi limit 10 data/page 
ketika data diklik, masuk ke detail konsultasi

konsultasi belum terkonfirmasi
get data detail konsultasi 
handle konfirmasi konsultasi 
handle pembatalan konsultasi 
validasi preferensi, jadwal, dan dokumen yang dibutuhkan (tidak kosong) 

konsultasi setelah dikonfirmasi 
get data detail konsultasi (deskripsi, dokumen, jadwal, lokasi) 
insert link conference 
handle download dokumen 

Cara menjalankan front-end
- clone HaloKonsultan-Frontend
- clone HaloKonsultan-Backend https://github.com/HaloKonsultan/halo-konsultan-backend
- npm start
- pastikan backend telah berjalan

Cara menjalankan Backend
- clone Halokonsultan-Backend
- composer install
- composer update
- buat .env file di HaloKonsultan-backend, yang isinya diambil dari .env.example
- nyalakan xampp untuk apache dan MySQL
- buka phpmyadmin dan buat database baru
- ganti DB_DATABASE(line 12) dengan nama database yang dibuat di phpmyadmin
- php artisan jwt:secret
- php artisan migrate:fresh --seed
- untuk menjalankan backend, gunakan perintah "php artisan serve"

Tambahan :
- untuk login dapat menggunakan email yang ada di table consultant yang telah di generate di database phpmyadmin dan password "password"

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
