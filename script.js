// Biến lưu trữ danh sách hình ảnh
const images = ["image/kiniem1.jpg", "image/kiniem2.jpg", "image/kiniem3.jpg", "image/kiniem4.jpg", "image/kiniem5.jpg", "image/kiniem6.jpg", "image/kiniem7.jpg", "image/kiniem8.jpg", "image/kiniem9.jpg", "image/kiniem10.jpg", "image/kiniem11.jpg"]; // Thêm các hình ảnh kỷ niệm
let currentIndex = 0;

// Xử lý khi nhấp vào bức thư
document.getElementById("letterContainer").onclick = function() {
    document.getElementById("letterContainer").style.display = "none";
    document.getElementById("openArrow").classList.add("hidden"); // Ẩn mũi tên "Mở ra"
    
    const messageContainer = document.getElementById("messageContainer");
    messageContainer.style.display = "block";
    
    // Phóng to hai hình ảnh cá nhân
    const personImages = document.querySelectorAll(".person-image");
    personImages.forEach(img => {
        img.classList.add("zoomed");
    });
    
    // Hiển thị hoa hai bên màn hình
    const flowerContainer = document.querySelector(".flower-container");
    flowerContainer.style.display = "block";
};


// Hiển thị thư viện ảnh
function showPhotoGallery() {
    document.getElementById("messageContainer").style.display = "none";
    const photoGallery = document.getElementById("photoGallery");
    photoGallery.style.display = "block";
    updateImage(); // Cập nhật ảnh đầu tiên
}

// Chuyển ảnh trước
function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage();
}

// Chuyển ảnh sau
function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
}

// Cập nhật hình ảnh hiện tại
function updateImage() {
    document.getElementById("currentImage").src = images[currentIndex];
}

// Xử lý khi nhấp vào mũi tên "Mở ra"
function openLetter() {
    document.getElementById("openArrow").classList.add("hidden");
    document.getElementById("letterContainer").style.display = "block";
}

