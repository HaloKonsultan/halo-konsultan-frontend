WEBSITE - CONSULTANT

Fitur Sprint#3

Urutan berdasarkan prioritas
1. Notifikasi
   Konsultan akan menerima notifikasi apabila ada order masuk dari klien atau pesan masuk dari klien
3. Redesign
   Perubahan tampilan dengan menyesuaikan saran pada stackholder pada sprint review 2
5. Refactor
7. Responsive
   Web harus responsive ketika dalam tampilan mobile
9. Forum
   Sarana komunikasi antara konsultan dan klien (tidak realtime)

Aplikasi dapat dilihat di
halokonsultan.me

=========================================================

Fitur Sprint#2

Dashboard
- pagination tabel pesanan masuk 
- pagination tabel pesanan aktif 
- pagination tabel menunggu pembayaran 
- konsultasi belum terkonfirmasi
- handle pembatalan konsultasi 
- detail konsultasi
- get nama klien 

Riwayat
- get data pesan konsultasi sukses/ditolak 
- tampilkan pesan konsultasi sukses 
- tampilkan pesan konsultasi ditolak

Profil konsultasi
- get data profil konsultasi 
- ketika edit profile diklik, masuk edit profile 
- edit profil konsultasi
- validasi semua input (tidak kosong, format sesuai) 
- tambah rekening
- tambah dokumentasi kerja
- alert konfirmasi simpan 

Biodata
- get data biodata 
- ketika edit biodata diklik, masuk edit biodata

Edit biodata 
- validasi semua input (tidak kosong, format sesuai)
- tambah pengalaman kerja
- tambah keahlihan
- tambah pendidikan
- alert konfirmasi simpan

Sidebar
- get data profil   
- payment
- menerima pembayaran

=========================================================

Fitur Sprint#1

login (http://localhost:3000/login)
- validasi email dan password (tidak kosong) 
- jika sukses, redirect ke beranda 
- return user object, simpan ke global state 

register (http://localhost:3000/register)
- validasi nama lengkap, email, password (tidak kosong, format email sesuai)
- jika email sudah terdaftar, tampilkan pesan error email sudah terdaftar
- jika sukses, redirect ke beranda, tampilkan pesan lengkapi profil 
- jika gagal, tampilkan pesan kesalahan 

beranda (http://localhost:3000)
- get data konsultasi yang masuk 
- get data konsultasi aktif 
- get data konsultasi menunggu pembayaran 
- get data konsultasi hari ini 
- ketika lihat semua diklik, masuk ke list konsultasi (sesuai status) 
- ketika data konsultasi diklik, masuk detail konsultasi 

list konsultasi (http://localhost:3000/incoming-order, http://localhost:3000/order, http://localhost:3000/waiting-payment)
- get data list konsultasi sesuai status 
- pagination 10 data/page 

riwayat (http://localhost:3000/history)
- get data list riwayat konsultasi (selesai || ditolak) 
- paginasi limit 10 data/page 
- ketika data diklik, masuk ke detail konsultasi

konsultasi belum terkonfirmasi (http://localhost:3000/incoming-order/detail/:id)
- get data detail konsultasi 
- handle konfirmasi konsultasi 
- handle pembatalan konsultasi 
- validasi preferensi, jadwal, dan dokumen yang dibutuhkan (tidak kosong) 

konsultasi setelah dikonfirmasi (http://localhost:3000/incoming-order/detail/accept/:id)
- get data detail konsultasi (deskripsi, dokumen, jadwal, lokasi) 
- insert link conference 
- handle download dokumen 

=========================================================

Cara menjalankan front-end 
- clone HaloKonsultan-Frontend
- npm start

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
