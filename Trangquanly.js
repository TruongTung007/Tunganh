// 1. Lấy các phần tử Input từ giao diện HTML (Đặt ở ngoài cùng làm biến toàn cục)
let mssvInput = document.getElementById("mssv"); 
let nameInput = document.getElementById("name"); 
let nvInput = document.getElementById("nv"); 
let hanchotInput = document.getElementById("hanchot"); 
let ghichuInput = document.getElementById("ghichu"); 

// Chọn thẳng vào tbody của bảng để hàng mới không bị nhảy vào thead
let tableBody = document.querySelector(".custom-table tbody"); 

// Biến toàn cục để đếm số nhiệm vụ đã hoàn thành
let completedTasks = 0; 

// 2. Hàm xử lý khi bấm nút Gửi Thông Tin (Chỉ khai báo MỘT LẦN duy nhất)
function guithongtin() {
    let mssv = mssvInput.value.trim(); 
    let name = nameInput.value.trim(); 
    let nv = nvInput.value.trim(); 
    let hanchot = hanchotInput.value.trim(); 
    let ghichu = ghichuInput.value.trim(); 

    // Kiểm tra nhập đủ cả 5 ô dữ liệu
    if (!mssv || !name || !nv || !hanchot || !ghichu) {
        alert("Vui lòng nhập đầy đủ thông tin vào cả 5 ô nhé!"); 
        return; 
    } 

    // XỬ LÝ LOGIC RÀNG BUỘC ĐỊNH DANH (CHẴN / LẺ THEO SỐ CUỐI MSSV)
    let lastDigit = parseInt(mssv.slice(-1)); 

    // Kiểm tra phòng hờ trường hợp người dùng nhập ký tự cuối không phải là số
    if (isNaN(lastDigit)) {
        alert("Ký tự cuối cùng của Mã số sinh viên phải là một chữ số!"); 
        return; 
    } 

    let insertIndex; 
    if (lastDigit % 2 !== 0) {
        // Nếu số cuối là SỐ LẺ: Chèn hàng mới vào ĐẦU BẢNG (Vị trí 0)
        insertIndex = 0; 
        console.log(`MSSV kết thúc bằng số lẻ (${lastDigit}) -> Tự động chèn vào ĐẦU BẢNG`); 
    } else {
        // Nếu số cuối là SỐ CHẴN: Chèn hàng mới vào CUỐI BẢNG (Vị trí -1)
        insertIndex = -1; 
        console.log(`MSSV kết thúc bằng số chẵn (${lastDigit}) -> Tự động chèn vào CUỐI BẢNG`); 
    } 

    // Chèn hàng mới vào tableBody
    let row = tableBody.insertRow(insertIndex); 

    // Tạo 6 ô (Cột) tương ứng trong bảng
    let cell1 = row.insertCell(0); 
    let cell2 = row.insertCell(1); 
    let cell3 = row.insertCell(2); 
    let cell4 = row.insertCell(3); 
    let cell5 = row.insertCell(4); 
    let cell6 = row.insertCell(5); 

    // Gán dữ liệu vào các ô tương ứng
    cell1.innerText = name; 
    cell2.innerText = nv; 
    cell3.innerText = hanchot; 
    cell4.innerText = ghichu; 
    cell5.innerText = mssv; 

    // Chèn ô Checkbox để tích chọn hoàn thành
    cell6.innerHTML = '<input type="checkbox" class="form-check-input" onchange="kiemTraHieuQua(this)">'; 
    cell6.className = "text-center"; 

    console.log("Đã thêm thành viên: " + name); 

    // Xóa sạch dữ liệu trong form sau khi thêm thành công
    mssvInput.value = ""; 
    nameInput.value = ""; 
    nvInput.value = ""; 
    hanchotInput.value = ""; 
    ghichuInput.value = ""; 
} 

// 3. Hàm tính năng đếm số nhiệm vụ hoàn thành
function kiemTraHieuQua(checkboxElement) {
    if (checkboxElement.checked) {
        completedTasks++; // Tăng thêm 1 nếu tích chọn
        if (completedTasks > 15) {
            alert("Nhóm đang làm việc rất hiệu quả!"); 
        } 
    } else {
        completedTasks--; // Trừ bớt 1 nếu hủy tích chọn
    } 
    console.log("Tổng số nhiệm vụ đã hoàn thành hiện tại: " + completedTasks); 
}
