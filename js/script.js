
let element = document.getElementsByClassName('container-func-name')
let elementt = document.querySelectorAll('.func-name')
let display = document.querySelectorAll('.display-body')


for (let i = 0; i < elementt.length; i++) {
    elementt[i].addEventListener('click', () => {
        if (i == 0) {
            display[1].style.display = "block";
            display[0].style.display = "none";
            display[2].style.display = "none";
            elementt[0].classList.add('active-func');
            elementt[1].classList.remove('active-func');
            elementt[2].classList.remove('active-func');
            title_admin.innerText = "Quản lý sản phẩm";
        }
        else if (i == 1) {
            display[2].style.display = "block";
            display[0].style.display = "none";
            display[1].style.display = "none";
            elementt[1].classList.add('active-func');
            elementt[0].classList.remove('active-func');
            elementt[2].classList.remove('active-func');
            title_admin.innerText = "Quản lý đơn hàng"
        }
        else if (i == 2) {
            display[2].style.display = "none";
            display[0].style.display = "block";
            display[1].style.display = "none";
            elementt[2].classList.add('active-func');
            elementt[1].classList.remove('active-func');
            elementt[0].classList.remove('active-func');
            title_admin.innerText = "Quản lý khách hàng"
        }
        else {
            window.location.href = "index.html"
        }
    })
}

let btn_detail = document.querySelectorAll('.display-body-table-btn-detail')
let modal = document.querySelector('.container-modal')
let title_admin = document.querySelector('.header-title-func')
let detailCart=document.querySelectorAll('.display-body-table-btn-detail')
let displayTable = document.querySelectorAll('.display-body-table')
let userdata = {}
let productsData={}
let cartData={}
displayUserData = function () {
    userdata = JSON.parse(localStorage.getItem('users'))
    userdata.forEach((value, key) => {
        let newtr = document.createElement('tr')
       if(value.username=='0342301559'){
        newtr.innerHTML = `
        <td>${value.username}</td>
        <td>${value.password}</td>
        <td>Admin</td>
          <td> <button class="display-body-table-btn" onclick="delete_user(event,${key})">Xóa</button>
          </td>
        `;
       }
        else{
            newtr.innerHTML = `
            <td>${value.username}</td>
            <td>${value.password}</td>
            <td>User</td>
              <td> <button class="display-body-table-btn" onclick="delete_user(event,${key})">Xóa</button>
              </td>
            `;
        }
        displayTable[0].appendChild(newtr)
    })
}
displayUserData()

function delete_user(event, number) {
    let row_delete = event.target;
    let row = row_delete.parentElement.parentElement;
    row.remove()
    localStorage.removeItem(JSON.stringify(userdata[number].username))
    userdata.splice(number, 1)
    localStorage.setItem('users', JSON.stringify(userdata))
}

// 
displayProductData = function () {
    productsData = JSON.parse(localStorage.getItem('products'))
    productsData.forEach((value, key) => {
        let newtr = document.createElement('tr')
            newtr.innerHTML = `
            <td>${value.id}</td>
              <td>${value.name}</td>
              <td>${value.price.toLocaleString()}</td>
              <td>${value.brand}</td>
              <td>
                <button class="display-body-table-btn display-body-table-btn-change">Sửa</button>
                <button class="display-body-table-btn" onclick="delete_products(event,${key})">Xóa</button>
              </td>
              `;
              
              displayTable[1].appendChild(newtr)
            })
        }
displayProductData()
var regexPhone = /(0[9|3])+([0-9]{8})\b/g;
function regex(phone) {
    return phone.match(regexPhone) ? true : false;
}

let k=0;
displaycartData=function(){
    for(let i=0;i<localStorage.length;i++){
        if(regex(localStorage.key(i)))
        {   
            cartData=JSON.parse(localStorage.getItem(localStorage.key(i)))
            // console.log(localStorage.key(i))
            // console.log(cartData)
            
                cartData.forEach((value,key)=>{
                    if(value!=null){

                        let newtr = document.createElement('tr');
                        newtr.innerHTML=`
                        <td>${k}</td>
                        <td>${localStorage.key(i)}</td>
                        <td>${value.time}</td>
                        <td>${value.status}</td>
                        <td>
                          <button class="display-body-table-btn display-body-table-btn-detail" onclick="showDetailCart(${i},${key})">Chi tiết</button>
                          <button class="display-body-table-btn" onclick="confirmCart(${i},${key})">Xác nhận</button>
                          <button class="display-body-table-btn" onclick="cancelCart(${i},${key})">Hủy</button>
                        </td>
                        `
                        displayTable[2].appendChild(newtr)
                        k+=1;
                    }
                })
            
        }
    }
    
}
let modalContainer=document.querySelector('.container-modal');
displaycartData()

let onDetail=document.querySelector('.detailproudct')

function cancelCart(i,keyCart){
    // console.log(i)
    // console.log(keyCart)
    if(regex(localStorage.key(i)))
    {
        let cartData=JSON.parse(localStorage.getItem(localStorage.key(i)))
        // console.log(cartData)
        cartData.forEach((value,key)=>{
            if(key==keyCart)
            {
                    if(value.status=='Đơn hàng bị hủy')
                    {
                        alert("Đơn hàng đã bị hủy") 
                    }
                    else if(value.status=='Đã thêm vào giỏ hàng')
                    {
                        alert("Đơn hàng chưa được đặt")
                    }
                    else {
                        value.status='Đơn hàng bị hủy'
                        localStorage.setItem(localStorage.key(i),JSON.stringify(cartData))
                        alert("LOADING........")
                        window.location.reload()
                    }
            }
        })
    }
    display[2].style.display = "block";

}
function confirmCart(i,keyCart){
    
    // console.log(i)
    // console.log(keyCart)
    if(regex(localStorage.key(i)))
    {
        let cartData=JSON.parse(localStorage.getItem(localStorage.key(i)))
        // console.log(cartData)
        cartData.forEach((value,key)=>{
            if(key==keyCart)
            {
                if(value.status=='Đã thêm vào giỏ hàng')
                {
                    alert("Khách hàng chưa xác nhận")
                }
                else if(value.status=='Đơn hàng bị hủy')
                {
                    alert("Đơn hàng đã bị hủy")
                }
                else{
                    value.status='Đã xác nhận'
                    alert("Đã xác nhận")
                    localStorage.setItem(localStorage.key(i),JSON.stringify(cartData))
                    alert("LOADING........")
                    window.location.reload()
                }
            }
        })
    }
    display[2].style.display = "block";
}

function showDetailCart(i,keyCart)
{
    modalContainer.style.display='flex';
    onDetail.style.display='block';

    let displayDetailTable=document.querySelector('.detailproduct_body-table')
    while (displayDetailTable.hasChildNodes()) {
        displayDetailTable.removeChild(displayDetailTable.firstChild);
    }
    // console.log(i)
    // console.log(keyCart)
    if(regex(localStorage.key(i)))
    {
        let cartData=JSON.parse(localStorage.getItem(localStorage.key(i)))
        // console.log(cartData)
        cartData.forEach((value,key)=>{
            if(key==keyCart)
            {
                if(value != null){
                    let newtr = document.createElement('tr');
                    newtr.innerHTML=`
                    <td>
                    <img src="./assets/img/All/${value.img}" alt="watch" />
                    </td>
                    <td>${value.name}</td>
                    <td>${value.price.toLocaleString()}</td>
                    <td>${value.quantity}</td>
                    `
                    displayDetailTable.appendChild(newtr)
                }
                else{
                    alert("Người dùng đã bị xóa")
                }
            }
        })
    }
}

function delete_products(event, number) {
     let row_delete = event.target;
     let row = row_delete.parentElement.parentElement;
     row.remove()
     productsData.splice(number, 1)
     localStorage.setItem('products', JSON.stringify(productsData))
}
        
        
let changeProducts=document.querySelectorAll('.display-body-table-btn-change')
let fixproduct=document.querySelector('.fixproduct')
let hideProduct_fix_change=document.querySelector('.fixproduct-btn-hide-change')
let hideProduct_fix_detail=document.querySelector('.fixproduct-btn-hide-detail')
let save_fix;
for(let i=0;i<changeProducts.length;i++)
{   
    changeProducts[i].onclick=function()
    {
        modalContainer.style.display='flex';
        fixproduct.style.display='block';
        save_fix=i
    }
}
hideProduct_fix_change.addEventListener("click",function(){
    modalContainer.style.display='none';
    fixproduct.style.display='none';
})
hideProduct_fix_detail.addEventListener("click",function(){
    modalContainer.style.display='none';
    onDetail.style.display='none';
})

let loadProduct_fixed=document.querySelector('.fixproduct-load')
let img_fix=document.getElementById("fixproduct-img")
let input_fix=document.getElementById("file-upload")
input_fix.onchange=(e)=>{
    if(input_fix.files[0]){
        img_fix.src=URL.createObjectURL(input_fix.files[0])
    }
}
loadProduct_fixed.onclick=function(){
    let product_fix_name=document.querySelector('.product_name_input').value;
    let product_fix_price=document.querySelector('.price_admin_input').value;
    let product_fix_brand=document.querySelector('.product_brand_input').value;
    let product_fix_img =input_fix.files[0].name;
    
    let json =JSON.parse((localStorage.getItem('products')))
    json.forEach((value,key)=>{
        if(key==save_fix)
        {
            value.name=product_fix_name
            value.price=product_fix_price
            value.brand=product_fix_brand
            value.image=product_fix_img
            modalContainer.style.display='none';
            fixproduct.style.display='none';
        }
    })
    localStorage.setItem("products",JSON.stringify(json))
    window.location.reload()
}
let addProduct=document.querySelector('.addproduct')
let pushProduct=document.querySelector('.display-body-title-btn')
pushProduct.onclick=function(){
    addProduct.style.display='block'
    modalContainer.style.display='flex';
 }

 let btn_push=document.querySelector('.push_button')
 let img_push=document.getElementById("pushproduct-img")
 let input_push=document.getElementById("file-upload-push")
 input_push.onchange=(e)=>{
     if(input_push.files[0]){
         img_push.src=URL.createObjectURL(input_push.files[0])
        }
    }
    btn_push.onclick=function(){
        let product_push_name=document.querySelector('.product_name_input_push').value;
        let product_push_price=document.querySelector('.price_admin_input_push').value;
        let product_push_brand=document.querySelector('.product_brand_input_push').value;
        let product_push_img =input_push.files[0].name;
        
        let json =JSON.parse((localStorage.getItem('products')))
        let tmp={
            id:json.length+1,
            name:product_push_name,
            price:product_push_price,
            brand:product_push_brand,
            image:product_push_img,
            Code: `301.PM.1780.RX`,
            Size: `44mm`,
            Material: `Kim loại không gỉ`,
            ShellMaterial: `Tiatanium`,
            detail: ` là một trong những thiết kế được ra mắt vào năm 2021. Đồng hồ là một sự tái khẳng định tinh thần “sang trọng đương đại” của mẫu đồng hồ Aquanaut Chronograph, lần đầu tiên được xuất hiện trong một lớp vỏ bằng vàng trắng. Bảo vệ mặt số là lớp tinh tể sapphire trong suốt để lộ bên dưới là mặt số màu xanh kaki mang xu hướng hiện đại với họa tiết bàn cờ khắc nổi. Trung tâm mặt số là bộ kim giờ, kim phút và kim giây với lớp phủ phát quang màu trắng, cho phép người đeo có thể xem giờ ngay cả khi ở trong điều kiện thiếu ánh sáng. Hơn nữa, để tạo nên nét chấm phá cho mặt số thì thay vì sử dụng một kiểu cọc số đơn lẻ, thương hiệu đã kết hợp cả cọc số Ả Rập và vạch chỉ giờ cho chiếc đồng hồ này. Tại vị trí 3 giờ là một ô cửa sổ lịch ngày. Bộ đếm chronograph 60 phút ở vị trí 6 giờ cũng có hình bát giác bo tròn giống khung bezel.
            Sản phẩm còn được trang bị bộ máy CH 28‑520 C, hoạt động ở tần số 28.800vph và có mức dự trữ năng lượng tối đa lên đến 55 giờ. Có thể nhìn thấy qua mặt kính sau là cân bằng Gyromax với lò xo cân bằng Spiromax, con dấu Patek Philippe và cánh quạt được làm bằng vàng hồng 21k. Đồng hồ có khả năng kháng nước ở độ sâu tối đa 120 mét.`
        }
        json.push(tmp)
        localStorage.setItem('products',JSON.stringify(json))
    modalContainer.style.display='none';
    addProduct.style.display='none';
    window.location.reload();
}


hideProduct_push=document.querySelector('.btn-hide_push')
hideProduct_push.addEventListener("click",function(){
    modalContainer.style.display='none';
    addProduct.style.display='none';
})




