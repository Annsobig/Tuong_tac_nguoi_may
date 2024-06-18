document.addEventListener('DOMContentLoaded', function() {
    // Sự kiện khi nhấn nút "Thêm"
    const addProductBtn = document.getElementById('addProductBtn');
    if (addProductBtn) {
        addProductBtn.addEventListener('click', function() {
            document.getElementById('formTitle').innerText = 'Thêm Sản Phẩm';
            document.getElementById('addProductForm').reset();
            document.getElementById('productForm').style.display = 'block';
            document.getElementById('okBtn').style.display = 'block';
            document.getElementById('updateBtn').style.display = 'none'; // Ẩn nút cập nhật
            document.getElementById('deleteBtn').style.display = 'none'; // Ẩn nút xóa
        });
    } else {
        console.error('Không tìm thấy phần tử addProductBtn');
    }

    // Sự kiện khi nhấn nút "Đóng" trong hộp thoại
    const closeBtns = document.querySelectorAll('.closeBtn');
    closeBtns.forEach(function(btn) {
        btn.addEventListener('click', function() {
            document.getElementById('productForm').style.display = 'none';
        });
    });

    // Sự kiện khi nhấn nút "Hủy" trong form
    const cancelBtn = document.getElementById('cancelBtn');
    if (cancelBtn) {
        cancelBtn.addEventListener('click', function() {
            document.getElementById('productForm').style.display = 'none';
        });
    } else {
        console.error('Không tìm thấy phần tử cancelBtn');
    }

    // Sự kiện khi nhấn nút "OK" trong form để thêm hoặc cập nhật sản phẩm
    const addProductForm = document.getElementById('addProductForm');
    if (addProductForm) {
        addProductForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const updateRowIndex = document.getElementById('updateRowIndex').value;
            if (updateRowIndex === "") {
                addProduct();
            } else {
                updateProduct(updateRowIndex);
            }
        });
    } else {
        console.error('Không tìm thấy phần tử addProductForm');
    }

    // Hàm thêm sản phẩm mới
    function addProduct() {
        const productName = document.getElementById('productName').value;
        const productBrand = document.getElementById('productBrand').value;
        const productType = document.getElementById('productType').value;
        const productConfig = document.getElementById('productConfig').value;
        const screenType = document.getElementById('screenType').value;
        const batteryType = document.getElementById('batteryType').value;
        const ram = document.getElementById('ram').value;
        const condition = document.getElementById('condition').value;
        const yearOfManufacture = document.getElementById('yearOfManufacture').value;
        const color = document.getElementById('color').value;
        const quantity = document.getElementById('quantity').value;
        const image = document.getElementById('image').value;
        const price = document.getElementById('price').value;

        const table = document.getElementById('productTable').getElementsByTagName('tbody')[0];
        const newRow = table.insertRow();

        const cell1 = newRow.insertCell(0);
        const cell2 = newRow.insertCell(1);
        const cell3 = newRow.insertCell(2);
        const cell4 = newRow.insertCell(3);
        const cell5 = newRow.insertCell(4);
        const cell6 = newRow.insertCell(5);
        const cell7 = newRow.insertCell(6);
        const cell8 = newRow.insertCell(7);

        cell1.innerHTML = table.rows.length; // Số thứ tự
        cell2.innerHTML = productName;      // Tên sản phẩm
        cell3.innerHTML = yearOfManufacture; // Năm sản xuất
        cell4.innerHTML = productBrand;     // Hãng sản phẩm
        cell5.innerHTML = price;            // Giá sản phẩm
        cell6.innerHTML = condition;        // Tình trạng
        cell7.innerHTML = `
            <button class="viewDetailBtn">Xem</button>
            <button class="editBtn">Sửa</button>
            <button class="deleteBtn">Xóa</button>
        `;
        cell8.style.display = 'none'; // Ô ẩn chứa JSON data
        cell8.innerHTML = JSON.stringify({
            name: productName,
            brand: productBrand,
            type: productType,
            config: productConfig,
            screen: screenType,
            battery: batteryType,
            ram: ram,
            condition: condition,
            year: yearOfManufacture,
            color: color,
            quantity: quantity,
            image: image,
            price: price
        });

        document.getElementById('productForm').style.display = 'none'; // Ẩn modal sau khi thêm sản phẩm

        // Gán sự kiện cho nút "Sửa", "Xóa" và "Xem" trên hàng mới
        assignEditDeleteViewEvents();
    }

    // Hàm cập nhật sản phẩm
    function updateProduct(index) {
        const productName = document.getElementById('productName').value;
        const productBrand = document.getElementById('productBrand').value;
        const productType = document.getElementById('productType').value;
        const productConfig = document.getElementById('productConfig').value;
        const screenType = document.getElementById('screenType').value;
        const batteryType = document.getElementById('batteryType').value;
        const ram = document.getElementById('ram').value;
        const condition = document.getElementById('condition').value;
        const yearOfManufacture = document.getElementById('yearOfManufacture').value;
        const color = document.getElementById('color').value;
        const quantity = document.getElementById('quantity').value;
        const image = document.getElementById('image').value;
        const price = document.getElementById('price').value;

        const table = document.getElementById('productTable').getElementsByTagName('tbody')[0];
        const row = table.rows[index];

        row.cells[1].innerHTML = productName;
        row.cells[2].innerHTML = yearOfManufacture;
        row.cells[3].innerHTML = productBrand;
        row.cells[4].innerHTML = price;
        row.cells[5].innerHTML = condition;
        row.cells[7].innerHTML = JSON.stringify({
            name: productName,
            brand: productBrand,
            type: productType,
            config: productConfig,
            screen: screenType,
            battery: batteryType,
            ram: ram,
            condition: condition,
            year: yearOfManufacture,
            color: color,
            quantity: quantity,
            image: image,
            price: price
        });

        document.getElementById('productForm').style.display = 'none'; // Ẩn modal sau khi cập nhật sản phẩm

        // Gán sự kiện cho nút "Sửa", "Xóa" và "Xem" trên hàng đã cập nhật
        assignEditDeleteViewEvents();
    }

    // Hàm xóa sản phẩm
    function deleteProduct(index) {
        const table = document.getElementById('productTable').getElementsByTagName('tbody')[0];
        table.deleteRow(index);

        // Cập nhật lại chỉ số thứ tự
        for (let i = 0; i < table.rows.length; i++) {
            table.rows[i].cells[0].innerHTML = i + 1;
        }
    }

    // Hàm xem chi tiết sản phẩm
    function viewProduct(index) {
        const table = document.getElementById('productTable').getElementsByTagName('tbody')[0];
        const row = table.rows[index];
        const productData = JSON.parse(row.cells[7].innerHTML);

        // Đổ dữ liệu vào các trường input của modal
        document.getElementById('productName').value = productData.name;
        document.getElementById('productBrand').value = productData.brand;
        document.getElementById('productType').value = productData.type;
        document.getElementById('productConfig').value = productData.config;
        document.getElementById('screenType').value = productData.screen;
        document.getElementById('batteryType').value = productData.battery;
        document.getElementById('ram').value = productData.ram;
        document.getElementById('condition').value = productData.condition;
        document.getElementById('yearOfManufacture').value = productData.year;
        document.getElementById('color').value = productData.color;
        document.getElementById('quantity').value = productData.quantity;
        document.getElementById('image').value = productData.image;
        document.getElementById('price').value = productData.price;

        // Hiển thị modal với tiêu đề "Chi tiết Sản Phẩm"
        document.getElementById('formTitle').innerText = 'Chi Tiết Sản Phẩm';
        document.getElementById('productForm').style.display = 'block';

        // Ẩn các nút không cần thiết trong modal
        document.getElementById('okBtn').style.display = 'none';
        document.getElementById('updateBtn').style.display = 'none';
        document.getElementById('deleteBtn').style.display = 'none';
        document.getElementById('cancelBtn').innerText = 'Đóng'; // Đổi nút "Hủy" thành "Đóng"
    }

    // Hàm gán sự kiện cho các nút "Sửa", "Xóa" và "Xem" trên từng hàng sản phẩm
    function assignEditDeleteViewEvents() {
        const editButtons = document.getElementsByClassName('editBtn');
        const deleteButtons = document.getElementsByClassName('deleteBtn');
        const viewButtons = document.getElementsByClassName('viewDetailBtn');

        for (let i = 0; i < editButtons.length; i++) {
            editButtons[i].addEventListener('click', function() {
                const rowIndex = this.parentElement.parentElement.rowIndex - 1;
                const table = document.getElementById('productTable').getElementsByTagName('tbody')[0];
                const productData = JSON.parse(table.rows[rowIndex].cells[7].innerHTML);

                // Đổ dữ liệu vào các trường input của modal
                document.getElementById('productName').value = productData.name;
                document.getElementById('productBrand').value = productData.brand;
                document.getElementById('productType').value = productData.type;
                document.getElementById('productConfig').value = productData.config;
                document.getElementById('screenType').value = productData.screen;
                document.getElementById('batteryType').value = productData.battery;
                document.getElementById('ram').value = productData.ram;
                document.getElementById('condition').value = productData.condition;
                document.getElementById('yearOfManufacture').value = productData.year;
                document.getElementById('color').value = productData.color;
                document.getElementById('quantity').value = productData.quantity;
                document.getElementById('image').value = productData.image;
                document.getElementById('price').value = productData.price;
                document.getElementById('updateRowIndex').value = rowIndex.toString();

                // Hiển thị modal với tiêu đề "Sửa Sản Phẩm" và nút "Cập nhật"
                document.getElementById('formTitle').innerText = 'Sửa Sản Phẩm';
                document.getElementById('productForm').style.display = 'block';
                document.getElementById('okBtn').style.display = 'none';
                document.getElementById('updateBtn').style.display = 'block';
                document.getElementById('deleteBtn').style.display = 'none';
                document.getElementById('cancelBtn').innerText = 'Hủy'; // Đổi nút "Đóng" thành "Hủy"
            });
        }

        for (let i = 0; i < deleteButtons.length; i++) {
            deleteButtons[i].addEventListener('click', function() {
                const rowIndex = this.parentElement.parentElement.rowIndex - 1;
                if (confirm('Bạn có chắc chắn muốn xóa sản phẩm này không?')) {
                    deleteProduct(rowIndex);
                }
            });
        }

        for (let i = 0; i < viewButtons.length; i++) {
            viewButtons[i].addEventListener('click', function() {
                const rowIndex = this.parentElement.parentElement.rowIndex - 1;
                viewProduct(rowIndex);
            });
        }
    }

    // Gán sự kiện cho các nút "Sửa", "Xóa" và "Xem" trên các hàng sản phẩm ban đầu
    assignEditDeleteViewEvents();
});