document.addEventListener('DOMContentLoaded', () => {
    const menuItem = document.getElementById('menuItem1');
    const listContainer = document.getElementById('listContainer1');
    const icon = menuItem.querySelector('i');

    menuItem.addEventListener('click', (event) => {
        event.preventDefault();
        event.stopPropagation();

        if (listContainer1.innerHTML === '') {
            // Tạo danh sách và hiển thị
            const list = document.createElement('ul');
            list.className = 'dynamic-list';

            const items = [
                { text: 'Item 1', href: 'https://www.example.com' },
                { text: 'Item 2', href: '#item2' },
                { text: 'Item 3', href: '#item3' },
                { text: 'Item 4', href: '#item4' },
                { text: 'Item 5', href: '#item5' }
            ];
            items.forEach(item => {
                const listItem = document.createElement('li');
                const link = document.createElement('a');
                link.textContent = item.text;
                link.href = item.href;
                listItem.appendChild(link);
                list.appendChild(listItem);

                // Thêm sự kiện click cho các liên kết trong danh sách
                link.addEventListener('click', (event) => {
                    event.stopPropagation();
                    listContainer1.innerHTML = '';
                    icon.className = 'fa fa-caret-square-o-down'; // Thay đổi icon sang biểu tượng menu
                });
            });

            listContainer1.appendChild(list);
            icon.className = 'fa fa-caret-square-o-down'; // Thay đổi icon sang dấu 'x'
        } else {
            // Ẩn danh sách nếu nó đang hiển thị
            listContainer1.innerHTML = '';
            icon.className = 'fa fa-caret-square-o-down'; // Thay đổi icon sang biểu tượng menu
        }
    });

    document.addEventListener('click', (event) => {
        if (!menuItem.contains(event.target) && !listContainer1.contains(event.target)) {
            // Ẩn danh sách nếu nhấp bên ngoài mục menu hoặc danh sách
            listContainer1.innerHTML = '';
            icon.className = 'fa fa-caret-square-o-down'; // Thay đổi icon sang biểu tượng menu
        }
    });
});



document.addEventListener('DOMContentLoaded', () => {
    const menuItem = document.getElementById('menuItem2');
    const listContainer = document.getElementById('listContainer2');
    const icon = menuItem.querySelector('i');

    menuItem.addEventListener('click', (event) => {
        event.preventDefault();
        event.stopPropagation();

        if (listContainer.innerHTML === '') {
            // Tạo danh sách và hiển thị
            const list = document.createElement('ul');
            list.className = 'dynamic-list';

            const items = [
                { text: 'Item 1', href: 'https://www.example.com' },
                { text: 'Item 2', href: '#item2' },
                { text: 'Item 3', href: '#item3' },
                { text: 'Item 4', href: '#item4' },
                { text: 'Item 5', href: '#item5' }
            ];
            items.forEach(item => {
                const listItem = document.createElement('li');
                const link = document.createElement('a');
                link.textContent = item.text;
                link.href = item.href;
                listItem.appendChild(link);
                list.appendChild(listItem);

                // Thêm sự kiện click cho các liên kết trong danh sách
                link.addEventListener('click', (event) => {
                    event.stopPropagation();
                    listContainer.innerHTML = '';
                    icon.className = 'fa fa-caret-square-o-down'; // Thay đổi icon sang biểu tượng menu
                });
            });

            listContainer.appendChild(list);
            icon.className = 'fa fa-caret-square-o-down'; // Thay đổi icon sang dấu 'x'
        } else {
            // Ẩn danh sách nếu nó đang hiển thị
            listContainer.innerHTML = '';
            icon.className = 'fa fa-caret-square-o-down'; // Thay đổi icon sang biểu tượng menu
        }
    });

    document.addEventListener('click', (event) => {
        if (!menuItem.contains(event.target) && !listContainer.contains(event.target)) {
            // Ẩn danh sách nếu nhấp bên ngoài mục menu hoặc danh sách
            listContainer.innerHTML = '';
            icon.className = 'fa fa-caret-square-o-down'; // Thay đổi icon sang biểu tượng menu
        }
    });
});

// Hộp 5
function redirectToPage() {
    // Đổi đường dẫn sau dấu nháy đơn ('') thành trang bạn muốn chuyển hướng đến
    window.location.href = 'https://www.example.com';
}

// Su kiện
// Danh sách các sản phẩm
var products = [
    "Sản phẩm 1",
    "Sản phẩm 2",
    "Sản phẩm 3",
    "Sản phẩm 4",
    "Sản phẩm 5",
    "Sản phẩm 6",
    "Sản phẩm 7",
    "Sản phẩm 8",
    "Sản phẩm 9",
    "Sản phẩm 10",
    "Sản phẩm 11",
    "Sản phẩm 12",
    "Sản phẩm 13",
    "Sản phẩm 14",
    "Sản phẩm 15",
    "Sản phẩm 16",
    "Sản phẩm 17",
    "Sản phẩm 18",
    "Sản phẩm 19",
    "Sản phẩm 20"
];

var currentPage = 0;
var productsPerPage = 5;

// Hàm để hiển thị các sản phẩm trên trang
function displayProducts(page) {
    var productsContainer = document.getElementById("productsContainer");
    productsContainer.innerHTML = "";
    for (var i = page * productsPerPage; i < (page + 1) * productsPerPage && i < products.length; i++) {
        var productDiv = document.createElement("div");
        productDiv.className = "product";
        productDiv.textContent = products[i];
        productsContainer.appendChild(productDiv);
    }
}


// Danh sách các điện thoại
// Danh sách các điện thoại và URL tương ứng
// Danh sách các điện thoại và URL tương ứng
var phones = [
    { name: "iPhone 12", url: "https://example.com/iphone-12", img: "https://tse3.mm.bing.net/th?id=OIP.99qJd0KiYicICEzUQ8l13wHaHa&pid=Api&P=0&h=180" },
    { name: "Samsung Galaxy S21", url: "https://example.com/galaxy-s21", img: "https://example.com/galaxy-s21.jpg" },
    { name: "Google Pixel 5", url: "https://example.com/pixel-5", img: "https://example.com/pixel-5.jpg" },
    { name: "OnePlus 9", url: "https://example.com/oneplus-9", img: "https://example.com/oneplus-9.jpg" },
    { name: "Xiaomi Mi 11", url: "https://example.com/mi-11", img: "https://example.com/mi-11.jpg" },
    { name: "Huawei P40", url: "https://example.com/p40", img: "https://example.com/p40.jpg" },
    { name: "Sony Xperia 1 II", url: "https://example.com/xperia-1-ii", img: "https://example.com/xperia-1-ii.jpg" },
    { name: "LG Velvet", url: "https://example.com/lg-velvet", img: "https://example.com/lg-velvet.jpg" },
    { name: "Motorola Edge", url: "https://example.com/motorola-edge", img: "https://example.com/motorola-edge.jpg" },
    { name: "Nokia 8.3", url: "https://example.com/nokia-8-3", img: "https://example.com/nokia-8-3.jpg" },
    { name: "ASUS Zenfone 8", url: "https://example.com/zenfone-8", img: "https://example.com/zenfone-8.jpg" },
    { name: "Oppo Find X3", url: "https://example.com/find-x3", img: "https://example.com/find-x3.jpg" },
    { name: "Realme GT", url: "https://example.com/realme-gt", img: "https://example.com/realme-gt.jpg" },
    { name: "Vivo X60", url: "https://example.com/vivo-x60", img: "https://example.com/vivo-x60.jpg" },
    { name: "Lenovo Legion Phone Duel", url: "https://example.com/legion-phone-duel", img: "https://example.com/legion-phone-duel.jpg" },
    { name: "BlackBerry Key2", url: "https://example.com/key2", img: "https://example.com/key2.jpg" },
    { name: "HTC U12+", url: "https://example.com/u12-plus", img: "https://example.com/u12-plus.jpg" },
    { name: "ZTE Axon 30 Ultra", url: "https://example.com/axon-30-ultra", img: "https://example.com/axon-30-ultra.jpg" },
    { name: "TCL 20 Pro 5G", url: "https://example.com/20-pro-5g", img: "https://example.com/20-pro-5g.jpg" },
    { name: "CAT S62 Pro", url: "https://example.com/s62-pro", img: "https://example.com/s62-pro.jpg" }
];

var currentPage = 0;
var phonesPerPage = 5;

// Hàm để hiển thị các điện thoại trên trang
function displayPhones(page) {
    var phoneContainer = document.getElementById("phoneContainer");
    phoneContainer.innerHTML = "";
    for (var i = page * phonesPerPage; i < (page + 1) * phonesPerPage && i < phones.length; i++) {
        var phoneDiv = document.createElement("div");
        phoneDiv.className = "phone";
        
        var phoneLink = document.createElement("a");
        phoneLink.href = phones[i].url;
        
        var phoneImg = document.createElement("img");
        phoneImg.src = phones[i].img;
        phoneImg.alt = phones[i].name;

        var phoneName = document.createElement("div");
        phoneName.className = "name";
        phoneName.textContent = phones[i].name;

        phoneLink.appendChild(phoneImg);
        phoneLink.appendChild(phoneName);
        phoneDiv.appendChild(phoneLink);
        phoneContainer.appendChild(phoneDiv);
    }
}

// Hiển thị trang hiện tại
displayPhones(currentPage);

// Hàm khi nhấn vào nút trang trước
function previousPage() {
    if (currentPage > 0) {
        currentPage--;
        displayPhones(currentPage);
    }
}

// Hàm khi nhấn vào nút trang tiếp theo
function nextPage() {
    if (currentPage < Math.ceil(phones.length / phonesPerPage) - 1) {
        currentPage++;
        displayPhones(currentPage);
    }
}

// hộp mes
function toggleChatbox() {
    const chatbox = document.getElementById('chatbox');
    chatbox.style.display = chatbox.style.display === 'none' ? 'flex' : 'none';
}

function sendMessage() {
    const userInput = document.getElementById('user-input');
    const chatboxBody = document.getElementById('chatbox-body');

    if (userInput.value.trim() !== "") {
        // Display user's message
        const userMessage = document.createElement('div');
        userMessage.textContent = userInput.value;
        userMessage.className = 'message right';
        chatboxBody.appendChild(userMessage);

        // Prepare response message
        let responseMessage = '';
        const userText = userInput.value.trim().toLowerCase();

        if (userText.includes('sản phẩm này còn hàng không')) {
            responseMessage = 'Dạ, còn hàng anh/chị ạ.';
        } else {
            responseMessage = 'Phần nội dung này chúng tôi chưa cập nhật.';
        }

        // Display response message
        const botMessage = document.createElement('div');
        botMessage.textContent = responseMessage;
        botMessage.className = 'message left';
        chatboxBody.appendChild(botMessage);

        // Clear input
        userInput.value = '';
        chatboxBody.scrollTop = chatboxBody.scrollHeight;
    }
}
