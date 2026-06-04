// Menangkap semua elemen dari HTML
const messageInput = document.getElementById('message');
const secretKeyInput = document.getElementById('secret-key');
const resultOutput = document.getElementById('result');
const btnEncrypt = document.getElementById('btn-encrypt');
const btnDecrypt = document.getElementById('btn-decrypt');

// Menangkap elemen untuk fitur tambahan (Salin & Lihat Password)
const btnCopy = document.getElementById('btn-copy');
const toggleKeyView = document.getElementById('toggle-key-view');

// Aksi ketika tombol "Enkripsi" ditekan
btnEncrypt.addEventListener('click', function() {
    const text = messageInput.value;
    const key = secretKeyInput.value;
    
    // Memanggil mesin enkripsi
    const result = CryptoEngine.encrypt(text, key);
    
    // Menampilkan hasil
    resultOutput.value = result;
});

// Aksi ketika tombol "Dekripsi" ditekan
btnDecrypt.addEventListener('click', function() {
    const text = messageInput.value;
    const key = secretKeyInput.value;
    
    // Memanggil mesin dekripsi
    const result = CryptoEngine.decrypt(text, key);
    
    // Menampilkan hasil
    resultOutput.value = result;
});

// --- FITUR TAMBAHAN UX ---

// 1. Fitur Tombol Salin
btnCopy.addEventListener('click', function() {
    // Memilih teks di dalam textarea hasil
    resultOutput.select();
    resultOutput.setSelectionRange(0, 99999); /* Untuk dukungan di HP */
    
    // Menyalin ke clipboard
    navigator.clipboard.writeText(resultOutput.value);
    
    // Efek visual tombol berubah saat berhasil disalin
    const originalText = btnCopy.innerHTML;
    btnCopy.innerHTML = '<i class="fas fa-check"></i> Tersalin!';
    btnCopy.style.backgroundColor = '#00e676';
    btnCopy.style.color = '#000000';
    
    // Kembali ke semula setelah 2 detik
    setTimeout(() => {
        btnCopy.innerHTML = originalText;
        btnCopy.style.backgroundColor = ''; 
        btnCopy.style.color = '';
    }, 2000);
});

// 2. Fitur Lihat/Sembunyikan Kunci (Show Password)
toggleKeyView.addEventListener('click', function() {
    // Cek tipe input saat ini, lalu balikkan
    const type = secretKeyInput.getAttribute('type') === 'password' ? 'text' : 'password';
    secretKeyInput.setAttribute('type', type);
    
    // Ganti ikon mata dari tertutup ke terbuka (atau sebaliknya)
    this.classList.toggle('fa-eye');
    this.classList.toggle('fa-eye-slash');
});