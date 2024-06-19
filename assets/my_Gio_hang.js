// thêm cộng trừ sản phẩm 3
document.addEventListener('DOMContentLoaded', (event) => {
    const decrementButton = document.getElementById('decrement3');
    const incrementButton = document.getElementById('increment3');
    const numberBox = document.getElementById('number3');

    decrementButton.addEventListener('click', () => {
        let currentValue = parseInt(numberBox.textContent);
        if (currentValue > 1) {
            numberBox.textContent = currentValue - 1;
        }
    });

    incrementButton.addEventListener('click', () => {
        let currentValue = parseInt(numberBox.textContent);
        numberBox.textContent = currentValue + 1;
    });
});
// hộp xóa 3
document.getElementById('deleteButton3').addEventListener('click', function() {
    document.getElementById('confirmDialog3').style.display = 'flex';
});

document.getElementById('okButton3').addEventListener('click', function() {
    document.getElementById('Box3').style.display = 'none';
    document.getElementById('confirmDialog3').style.display = 'none';

    // Hiển thị thông báo xóa thành công trong 3 giây
document.getElementById('successMessage3').style.display = 'block';
setTimeout(function() {
    document.getElementById('successMessage3').style.display = 'none';
}, 3000); // 3000 milliseconds = 3 seconds    
});

document.getElementById('cancelButton3').addEventListener('click', function() {
    document.getElementById('confirmDialog3').style.display = 'none';
});


// thêm cộng trừ sản phẩm 4
document.addEventListener('DOMContentLoaded', (event) => {
    const decrementButton = document.getElementById('decrement4');
    const incrementButton = document.getElementById('increment4');
    const numberBox = document.getElementById('number4');

    decrementButton.addEventListener('click', () => {
        let currentValue = parseInt(numberBox.textContent);
        if (currentValue > 1) {
            numberBox.textContent = currentValue - 1;
        }
    });

    incrementButton.addEventListener('click', () => {
        let currentValue = parseInt(numberBox.textContent);
        numberBox.textContent = currentValue + 1;
    });
});
// hộp xóa 4
document.getElementById('deleteButton4').addEventListener('click', function() {
    document.getElementById('confirmDialog4').style.display = 'flex';
});

document.getElementById('okButton4').addEventListener('click', function() {
    document.getElementById('Box4').style.display = 'none';
    document.getElementById('confirmDialog4').style.display = 'none';

// Hiển thị thông báo xóa thành công trong 3 giây
document.getElementById('successMessage4').style.display = 'block';
setTimeout(function() {
    document.getElementById('successMessage4').style.display = 'none';
}, 3000); // 3000 milliseconds = 3 seconds    
});

document.getElementById('cancelButton4').addEventListener('click', function() {
    document.getElementById('confirmDialog4').style.display = 'none';
});

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
