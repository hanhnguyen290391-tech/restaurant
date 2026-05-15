// Tab Switching Logic
function openTab(evt, tabName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tab-content" and hide them
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].classList.remove("active");
    }

    // Get all elements with class="tab-link" and remove the class "active"
    tablinks = document.getElementsByClassName("tab-link");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).classList.add("active");
    evt.currentTarget.classList.add("active");
    
    // Smooth scroll slightly to main content area if on mobile
    if(window.innerWidth <= 768) {
        window.scrollTo({
            top: document.querySelector('.content-container').offsetTop - 80,
            behavior: 'smooth'
        });
    }
}

// Popup Logic
function closePopup() {
    document.getElementById('notificationPopup').classList.remove('show');
}

// Translations Data
const translations = {
    vi: {
        nav_home: "Trang chủ",
        nav_menu: "Thực đơn",
        nav_reviews: "Đánh giá",
        nav_contact: "Liên hệ",
        hero_title: "Tinh Hoa Ẩm Thực Miền Trung",
        hero_subtitle: "Hương vị truyền thống, đậm đà khó quên",
        intro_title: "Khám Phá Ẩm Thực Miền Trung",
        intro_content: "Ẩm thực miền Trung Việt Nam nổi tiếng với sự tinh tế, đậm đà và cay nồng. Từ những tô Mì Quảng vàng ươm thơm lừng, bún mắm nêm đậm vị, cho đến đĩa cơm gà béo ngậy, mỗi món ăn tại <strong>Quảng Vị</strong> đều được chuẩn bị tỉ mỉ, chắt lọc tinh hoa từ nguyên liệu tươi ngon nhất để mang đến cho thực khách trải nghiệm chân thực và khó quên.",
        gallery_title: "Các Món Ăn Đặc Trưng",
        food_myquang: "Mì Quảng Đặc Biệt",
        food_myquang1: "Mì Quảng Tôm Thịt",
        food_bunmoc: "Bún Mọc Thanh Ngọt",
        food_bunmamnem: "Bún Mắm Nêm Đậm Đà",
        food_comga: "Cơm Gà Xứ Quảng",
        menu_title: "Thực Đơn Của Chúng Tôi",
        menu_fallback_prefix: "Nếu bạn không thể xem thực đơn, vui lòng ",
        menu_fallback_link: "nhấn vào đây để tải về",
        reviews_title: "Khách Hàng Nói Gì Về Quảng Vị",
        contact_title: "Liên Hệ Với Quảng Vị",
        contact_info_title: "Thông Tin Quán",
        contact_address_label: "Địa chỉ:",
        contact_phone_label: "Điện thoại:",
        contact_hours_label: "Giờ mở cửa:",
        contact_hours_value: "06:00 - 22:00 hằng ngày",
        contact_email_label: "Email:",
        contact_form_title: "Gửi Tin Nhắn",
        contact_name_placeholder: "Tên của bạn",
        contact_email_placeholder: "Email của bạn",
        contact_message_placeholder: "Tin nhắn",
        contact_submit: "Gửi Liên Hệ",
        footer_copy: "&copy; 2026 Quảng Vị. Tất cả các quyền được bảo lưu."
    },
    en: {
        nav_home: "Home",
        nav_menu: "Menu",
        nav_reviews: "Reviews",
        nav_contact: "Contact",
        hero_title: "Essence of Central Vietnam",
        hero_subtitle: "Traditional flavors, unforgettable richness",
        intro_title: "Explore Central Vietnamese Cuisine",
        intro_content: "Central Vietnamese cuisine is famous for its sophistication, richness, and spiciness. From fragrant golden Mì Quảng bowls and flavorful Bún Mắm Nêm to savory chicken rice, every dish at <strong>Quảng Vị</strong> is meticulously prepared, distilling the essence of the freshest ingredients to bring diners an authentic and unforgettable experience.",
        gallery_title: "Signature Dishes",
        food_myquang: "Special Quang Noodles",
        food_myquang1: "Shrimp & Pork Quang Noodles",
        food_bunmoc: "Sweet & Savory Bun Moc",
        food_bunmamnem: "Flavorful Bun Mam Nem",
        food_comga: "Quang Province Chicken Rice",
        menu_title: "Our Menu",
        menu_fallback_prefix: "If you cannot view the menu, please ",
        menu_fallback_link: "click here to download",
        reviews_title: "What Our Customers Say",
        contact_title: "Contact Quang Vi",
        contact_info_title: "Restaurant Info",
        contact_address_label: "Address:",
        contact_phone_label: "Phone:",
        contact_hours_label: "Opening Hours:",
        contact_hours_value: "06:00 - 22:00 Daily",
        contact_email_label: "Email:",
        contact_form_title: "Send a Message",
        contact_name_placeholder: "Your Name",
        contact_email_placeholder: "Your Email",
        contact_message_placeholder: "Message",
        contact_submit: "Send Message",
        footer_copy: "&copy; 2026 Quang Vi. All rights reserved."
    }
};

let currentLanguage = localStorage.getItem('preferredLanguage') || 'vi';

function setLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('preferredLanguage', lang);
    
    // Update active button state
    document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
    document.getElementById(`btn-${lang}`).classList.add('active');
    
    // Update elements with data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });
    
    // Update placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (translations[lang][key]) {
            el.placeholder = translations[lang][key];
        }
    });

    // Update document title and lang attribute
    document.title = lang === 'vi' ? 'Quảng Vị - Hương Vị Miền Trung' : 'Quang Vi - Taste of Central Vietnam';
    document.documentElement.lang = lang;
}

// Show popup automatically when page loads (with slight delay for better UX)
window.onload = function() {
    // Initialize language
    setLanguage(currentLanguage);

    setTimeout(function() {
        document.getElementById('notificationPopup').classList.add('show');
    }, 1500); // 1.5 second delay
};

// Close popup if clicking outside the content
window.onclick = function(event) {
    var popup = document.getElementById('notificationPopup');
    if (event.target == popup) {
        closePopup();
    }
}
