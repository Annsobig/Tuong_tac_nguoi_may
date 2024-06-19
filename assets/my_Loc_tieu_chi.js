// Hộp 3
function redirectToPage() {
    // Đổi đường dẫn sau dấu nháy đơn ('') thành trang bạn muốn chuyển hướng đến
    window.location.href = 'https://www.example.com';
}

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
