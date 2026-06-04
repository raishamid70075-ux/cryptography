// Objek untuk mengelola fungsi enkripsi dan dekripsi
const CryptoEngine = {
    
    // Fungsi untuk mengenkripsi teks
    encrypt: function(text, secretKey) {
        if (!text || !secretKey) return "Pesan dan Kunci tidak boleh kosong!";
        
        // Menggunakan AES dari CryptoJS
        const cipherText = CryptoJS.AES.encrypt(text, secretKey).toString();
        return cipherText;
    },

    // Fungsi untuk mendekripsi teks
    decrypt: function(cipherText, secretKey) {
        if (!cipherText || !secretKey) return "Pesan terenkripsi dan Kunci tidak boleh kosong!";
        
        try {
            // Proses dekripsi
            const bytes = CryptoJS.AES.decrypt(cipherText, secretKey);
            const originalText = bytes.toString(CryptoJS.enc.Utf8);
            
            // Jika hasilnya kosong (kunci salah), lempar error
            if (!originalText) throw new Error("Kunci salah");
            
            return originalText;
        } catch (error) {
            return "Dekripsi gagal! Kunci rahasia salah atau teks sudah rusak.";
        }
    }
};