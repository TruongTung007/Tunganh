// Lấy các phần tử Input từ giao diện HTML
const mssvInput = document.getElementById("mssv"); 
const nameInput = document.getElementById("name"); 
const nvInput = document.getElementById("nv"); 
const hanchotInput = document.getElementById("hanchot"); 
const ghichuInput = document.getElementById("ghichu"); 

let completedTasks = 0; 

function guithongtin() {
    
    let tableBody = document.querySelector(".custom-table tbody"); 

    if (!tableBody) {
        alert("Không tìm thấy bảng hiển thị trên giao diện!"); 
        return; 
    } 

    let mssv = mssvInput.value.trim(); 
    let name = nameInput.value.trim(); 
    let nv = nvInput.value.trim(); 
    let hanchot = hanchotInput.value.trim(); 
    let ghichu = ghichuInput.value.trim(); 

    // 1. Kiểm tra nhập đủ cả 5 ô dữ liệu
    if (!mssv || !name || !nv || !hanchot || !ghichu) {
        alert("Vui lòng nhập đầy đủ thông tin vào cả 5 ô nhé!"); 
        return; 
    } 

    let lastDigit = parseInt(mssv.slice(-1)); 
    if (isNaN(lastDigit)) {
        alert("Ký tự cuối cùng của Mã số sinh viên phải là một chữ số!"); 
        return; 
    } 

    let insertIndex = (lastDigit % 2 !== 0) ? 0 : -1; 
    let row = tableBody.insertRow(insertIndex); 

    let cell1 = row.insertCell(0); 
    let cell2 = row.insertCell(1); 
    let cell3 = row.insertCell(2); 
    let cell4 = row.insertCell(3); 
    let cell5 = row.insertCell(4); 
    let cell6 = row.insertCell(5); 
   
    cell1.innerText = name; 
    cell2.innerText = nv; 
    cell3.innerText = hanchot; 
    cell4.innerText = ghichu; 
    cell5.innerText = mssv; 

    
    cell6.innerHTML = '<input type="checkbox" class="form-check-input" onchange="kiemTraHieuQua(this)">'; 
    cell6.className = "text-center"; 

    console.log("Đã thêm thành viên thành công: " + name); 

    
    mssvInput.value = ""; 
    nameInput.value = ""; 
    nvInput.value = ""; 
    hanchotInput.value = ""; 
    ghichuInput.value = ""; 
} 


function kiemTraHieuQua(checkboxElement) {
    if (checkboxElement.checked) {
        completedTasks++; 
        if (completedTasks > 15) {
            alert("Nhóm đang làm việc rất hiệu quả!"); 
        } 
    } else {
        completedTasks--; 
    } 
    console.log("Tổng số nhiệm vụ đã hoàn thành hiện tại: " + completedTasks); 
}
