let usernameLoggedIn;
let list = document.querySelector('.content');
let modal = document.querySelector('.modal');
let registers = document.querySelector('.modal_body-middle-register');
let logins = document.querySelector('.modal_body-middle-login');
let comebacklogin = document.querySelector('.auth-form_controls-back-login');
let comebackregister = document.querySelector('.auth-form_controls-back-register');
let transferRegister = document.querySelector('.auth-form_switch-btn-transferRegister');
let transferLogin = document.querySelector('.auth-form_switch-btn-transferLogin');
let footer=document.querySelector(".footer");

function login() {
    if (modal.style.display == "none") {
        modal.style.display = "block";
        logins.style.display = "block";
        registers.style.display = "none";
    }
    else {
        modal.style.display = "none";
        logins.style.display = "none";
        registers.style.display = "block";
    }
}
function register() {
    if (modal.style.display == "none") {
        modal.style.display = "block";
        registers.style.display = "block";
        logins.style.display = "none";
    }
    else {
        modal.style.display = "none";
        registers.style.display = "none";
        logins.style.display = "block"
    }
}
comebacklogin.addEventListener('click', () => {
    if (modal.style.display == "block") {
        modal.style.display = "none";
    }
})

comebackregister.addEventListener('click', () => {
    if (modal.style.display == "block") {
        modal.style.display = "none";
    }
})
transferRegister.addEventListener('click', () => {
    logins.style.display = "none";
    registers.style.display = "block";
})
transferLogin.addEventListener('click', () => {
    registers.style.display = "none";
    logins.style.display = "block";
})

let allProducts = [
    {
        id: 1,
        name: `Đồng hồ Patek Philippe Aquanaut Date Brown 5167R-001 Mặt Số Nâu 40.8mm`,
        image: `PatekPhilippe1.png`,
        price: 2504250000,
        brand: `Patek Philippe`,
        Code: `5167R-001`,
        Size: `42mm`,
        Material: `Dây cao su`,
        ShellMaterial: `Vàng hồng`,
        detail: ` là một trong những thiết kế được ra mắt vào năm 2021. Đồng hồ là một sự tái khẳng định tinh thần “sang trọng đương đại” của mẫu đồng hồ Aquanaut Chronograph, lần đầu tiên được xuất hiện trong một lớp vỏ bằng vàng trắng. Bảo vệ mặt số là lớp tinh tể sapphire trong suốt để lộ bên dưới là mặt số màu xanh kaki mang xu hướng hiện đại với họa tiết bàn cờ khắc nổi. Trung tâm mặt số là bộ kim giờ, kim phút và kim giây với lớp phủ phát quang màu trắng, cho phép người đeo có thể xem giờ ngay cả khi ở trong điều kiện thiếu ánh sáng. Hơn nữa, để tạo nên nét chấm phá cho mặt số thì thay vì sử dụng một kiểu cọc số đơn lẻ, thương hiệu đã kết hợp cả cọc số Ả Rập và vạch chỉ giờ cho chiếc đồng hồ này. Tại vị trí 3 giờ là một ô cửa sổ lịch ngày. Bộ đếm chronograph 60 phút ở vị trí 6 giờ cũng có hình bát giác bo tròn giống khung bezel.
        Sản phẩm còn được trang bị bộ máy CH 28‑520 C, hoạt động ở tần số 28.800vph và có mức dự trữ năng lượng tối đa lên đến 55 giờ. Có thể nhìn thấy qua mặt kính sau là cân bằng Gyromax với lò xo cân bằng Spiromax, con dấu Patek Philippe và cánh quạt được làm bằng vàng hồng 21k. Đồng hồ có khả năng kháng nước ở độ sâu tối đa 120 mét.`
    },
    {
        id: 2,
        name: `Đồng Hồ Patek Philippe Calatrava Engraved Black Dial Platium 5088-100P-001 38mm`,
        image: `PatekPhilippe2.png`,
        price: 2178000000,
        brand: `Patek Philippe`,
        Code: `5088-100P-001`,
        Size: `38mm`,
        Material: `Dây cá sấu`,
        ShellMaterial: `Platinum`,
        detail: ` là một trong những thiết kế được ra mắt vào năm 2021. Đồng hồ là một sự tái khẳng định tinh thần “sang trọng đương đại” của mẫu đồng hồ Aquanaut Chronograph, lần đầu tiên được xuất hiện trong một lớp vỏ bằng vàng trắng. Bảo vệ mặt số là lớp tinh tể sapphire trong suốt để lộ bên dưới là mặt số màu xanh kaki mang xu hướng hiện đại với họa tiết bàn cờ khắc nổi. Trung tâm mặt số là bộ kim giờ, kim phút và kim giây với lớp phủ phát quang màu trắng, cho phép người đeo có thể xem giờ ngay cả khi ở trong điều kiện thiếu ánh sáng. Hơn nữa, để tạo nên nét chấm phá cho mặt số thì thay vì sử dụng một kiểu cọc số đơn lẻ, thương hiệu đã kết hợp cả cọc số Ả Rập và vạch chỉ giờ cho chiếc đồng hồ này. Tại vị trí 3 giờ là một ô cửa sổ lịch ngày. Bộ đếm chronograph 60 phút ở vị trí 6 giờ cũng có hình bát giác bo tròn giống khung bezel.
        Sản phẩm còn được trang bị bộ máy CH 28‑520 C, hoạt động ở tần số 28.800vph và có mức dự trữ năng lượng tối đa lên đến 55 giờ. Có thể nhìn thấy qua mặt kính sau là cân bằng Gyromax với lò xo cân bằng Spiromax, con dấu Patek Philippe và cánh quạt được làm bằng vàng hồng 21k. Đồng hồ có khả năng kháng nước ở độ sâu tối đa 120 mét.`

    },
    {
        id: 3,
        name: `Đồng hồ Patek Philippe Complications Black-Gray DIal Platium Chronograph 5905P-010 42mm`,
        image: `PatekPhilippe3.png`,
        price: 1780000000,
        brand: `Patek Philippe`,
        Code: `5905P-010`,
        Size: `42mm`,
        Material: `Dây cá sấu`,
        ShellMaterial: `Platinum`,
        detail: ` là một trong những thiết kế được ra mắt vào năm 2021. Đồng hồ là một sự tái khẳng định tinh thần “sang trọng đương đại” của mẫu đồng hồ Aquanaut Chronograph, lần đầu tiên được xuất hiện trong một lớp vỏ bằng vàng trắng. Bảo vệ mặt số là lớp tinh tể sapphire trong suốt để lộ bên dưới là mặt số màu xanh kaki mang xu hướng hiện đại với họa tiết bàn cờ khắc nổi. Trung tâm mặt số là bộ kim giờ, kim phút và kim giây với lớp phủ phát quang màu trắng, cho phép người đeo có thể xem giờ ngay cả khi ở trong điều kiện thiếu ánh sáng. Hơn nữa, để tạo nên nét chấm phá cho mặt số thì thay vì sử dụng một kiểu cọc số đơn lẻ, thương hiệu đã kết hợp cả cọc số Ả Rập và vạch chỉ giờ cho chiếc đồng hồ này. Tại vị trí 3 giờ là một ô cửa sổ lịch ngày. Bộ đếm chronograph 60 phút ở vị trí 6 giờ cũng có hình bát giác bo tròn giống khung bezel.
        Sản phẩm còn được trang bị bộ máy CH 28‑520 C, hoạt động ở tần số 28.800vph và có mức dự trữ năng lượng tối đa lên đến 55 giờ. Có thể nhìn thấy qua mặt kính sau là cân bằng Gyromax với lò xo cân bằng Spiromax, con dấu Patek Philippe và cánh quạt được làm bằng vàng hồng 21k. Đồng hồ có khả năng kháng nước ở độ sâu tối đa 120 mét.`

    },
    {
        id: 4,
        name: `Đồng hồ Patek Philippe Grand Complications Chronograph 5204-1R-001 Mặt Số Đen 40.2mm`,
        image: `PatekPhilippe4.png`,
        price: 6480000000,
        brand: `Patek Philippe`,
        Code: `5204-1R-001`,
        Size: `40.2mm`,
        Material: `Vàng hồng`,
        ShellMaterial: `Vàng hồng`,
        detail: `là một trong những thiết kế được ra mắt vào năm 2021. Đồng hồ là một sự tái khẳng định tinh thần “sang trọng đương đại” của mẫu đồng hồ Aquanaut Chronograph, lần đầu tiên được xuất hiện trong một lớp vỏ bằng vàng trắng. Bảo vệ mặt số là lớp tinh tể sapphire trong suốt để lộ bên dưới là mặt số màu xanh kaki mang xu hướng hiện đại với họa tiết bàn cờ khắc nổi. Trung tâm mặt số là bộ kim giờ, kim phút và kim giây với lớp phủ phát quang màu trắng, cho phép người đeo có thể xem giờ ngay cả khi ở trong điều kiện thiếu ánh sáng. Hơn nữa, để tạo nên nét chấm phá cho mặt số thì thay vì sử dụng một kiểu cọc số đơn lẻ, thương hiệu đã kết hợp cả cọc số Ả Rập và vạch chỉ giờ cho chiếc đồng hồ này. Tại vị trí 3 giờ là một ô cửa sổ lịch ngày. Bộ đếm chronograph 60 phút ở vị trí 6 giờ cũng có hình bát giác bo tròn giống khung bezel.
        Sản phẩm còn được trang bị bộ máy CH 28‑520 C, hoạt động ở tần số 28.800vph và có mức dự trữ năng lượng tối đa lên đến 55 giờ. Có thể nhìn thấy qua mặt kính sau là cân bằng Gyromax với lò xo cân bằng Spiromax, con dấu Patek Philippe và cánh quạt được làm bằng vàng hồng 21k. Đồng hồ có khả năng kháng nước ở độ sâu tối đa 120 mét.`

    },
    {
        id: 5,
        name: `.Đồng hồ Patek Philippe Ladies Nautilus Rose Gold 7118-1450R-001 Mặt Số Kim Cương 35.2mm`,
        image: `PatekPhilippe5.png`,
        price: 9281800000,
        brand: `Patek Philippe`,
        Code: `5204-1R-001`,
        Size: `35.2mm`,
        Material: `Vàng hồng`,
        ShellMaterial: `Vàng hồng`,
        detail: `là một trong những thiết kế được ra mắt vào năm 2021. Đồng hồ là một sự tái khẳng định tinh thần “sang trọng đương đại” của mẫu đồng hồ Aquanaut Chronograph, lần đầu tiên được xuất hiện trong một lớp vỏ bằng vàng trắng. Bảo vệ mặt số là lớp tinh tể sapphire trong suốt để lộ bên dưới là mặt số màu xanh kaki mang xu hướng hiện đại với họa tiết bàn cờ khắc nổi. Trung tâm mặt số là bộ kim giờ, kim phút và kim giây với lớp phủ phát quang màu trắng, cho phép người đeo có thể xem giờ ngay cả khi ở trong điều kiện thiếu ánh sáng. Hơn nữa, để tạo nên nét chấm phá cho mặt số thì thay vì sử dụng một kiểu cọc số đơn lẻ, thương hiệu đã kết hợp cả cọc số Ả Rập và vạch chỉ giờ cho chiếc đồng hồ này. Tại vị trí 3 giờ là một ô cửa sổ lịch ngày. Bộ đếm chronograph 60 phút ở vị trí 6 giờ cũng có hình bát giác bo tròn giống khung bezel.
        Sản phẩm còn được trang bị bộ máy CH 28‑520 C, hoạt động ở tần số 28.800vph và có mức dự trữ năng lượng tối đa lên đến 55 giờ. Có thể nhìn thấy qua mặt kính sau là cân bằng Gyromax với lò xo cân bằng Spiromax, con dấu Patek Philippe và cánh quạt được làm bằng vàng hồng 21k. Đồng hồ có khả năng kháng nước ở độ sâu tối đa 120 mét.`

    },
    {
        id: 6,
        name: `Đồng Hồ Patek Philippe Annual Calendar Complications 4947G-001 Mặt Số Xanh 38mm`,
        image: `PatekPhilippe6.png`,
        price: 1061325000,
        brand: `Patek Philippe`,
        Code: `4947G-010`,
        Size: `38mm`,
        Material: `Da cá sấu`,
        ShellMaterial: `Vàng trắng và kim cương`,
        detail: ` là một trong những thiết kế được ra mắt vào năm 2021. Đồng hồ là một sự tái khẳng định tinh thần “sang trọng đương đại” của mẫu đồng hồ Aquanaut Chronograph, lần đầu tiên được xuất hiện trong một lớp vỏ bằng vàng trắng. Bảo vệ mặt số là lớp tinh tể sapphire trong suốt để lộ bên dưới là mặt số màu xanh kaki mang xu hướng hiện đại với họa tiết bàn cờ khắc nổi. Trung tâm mặt số là bộ kim giờ, kim phút và kim giây với lớp phủ phát quang màu trắng, cho phép người đeo có thể xem giờ ngay cả khi ở trong điều kiện thiếu ánh sáng. Hơn nữa, để tạo nên nét chấm phá cho mặt số thì thay vì sử dụng một kiểu cọc số đơn lẻ, thương hiệu đã kết hợp cả cọc số Ả Rập và vạch chỉ giờ cho chiếc đồng hồ này. Tại vị trí 3 giờ là một ô cửa sổ lịch ngày. Bộ đếm chronograph 60 phút ở vị trí 6 giờ cũng có hình bát giác bo tròn giống khung bezel.
        Sản phẩm còn được trang bị bộ máy CH 28‑520 C, hoạt động ở tần số 28.800vph và có mức dự trữ năng lượng tối đa lên đến 55 giờ. Có thể nhìn thấy qua mặt kính sau là cân bằng Gyromax với lò xo cân bằng Spiromax, con dấu Patek Philippe và cánh quạt được làm bằng vàng hồng 21k. Đồng hồ có khả năng kháng nước ở độ sâu tối đa 120 mét.`

    },
    {
        id: 7,
        name: `Đồng Hồ Patek Philippe Annual Calendar Complications 5961R-010 Chronograph Mặt Số Đen 40.5mm`,
        image: `PatekPhilippe7.png`,
        price: 4245300000,
        brand: `Patek Philippe`,
        Code: `5961R-010`,
        Size: `40.5mm`,
        Material: `Da `,
        ShellMaterial: `Vàng hồng`,
        detail: ` là một trong những thiết kế được ra mắt vào năm 2021. Đồng hồ là một sự tái khẳng định tinh thần “sang trọng đương đại” của mẫu đồng hồ Aquanaut Chronograph, lần đầu tiên được xuất hiện trong một lớp vỏ bằng vàng trắng. Bảo vệ mặt số là lớp tinh tể sapphire trong suốt để lộ bên dưới là mặt số màu xanh kaki mang xu hướng hiện đại với họa tiết bàn cờ khắc nổi. Trung tâm mặt số là bộ kim giờ, kim phút và kim giây với lớp phủ phát quang màu trắng, cho phép người đeo có thể xem giờ ngay cả khi ở trong điều kiện thiếu ánh sáng. Hơn nữa, để tạo nên nét chấm phá cho mặt số thì thay vì sử dụng một kiểu cọc số đơn lẻ, thương hiệu đã kết hợp cả cọc số Ả Rập và vạch chỉ giờ cho chiếc đồng hồ này. Tại vị trí 3 giờ là một ô cửa sổ lịch ngày. Bộ đếm chronograph 60 phút ở vị trí 6 giờ cũng có hình bát giác bo tròn giống khung bezel.
        Sản phẩm còn được trang bị bộ máy CH 28‑520 C, hoạt động ở tần số 28.800vph và có mức dự trữ năng lượng tối đa lên đến 55 giờ. Có thể nhìn thấy qua mặt kính sau là cân bằng Gyromax với lò xo cân bằng Spiromax, con dấu Patek Philippe và cánh quạt được làm bằng vàng hồng 21k. Đồng hồ có khả năng kháng nước ở độ sâu tối đa 120 mét.`

    },
    {
        id: 8,
        name: `Đồng Hồ Patek Philippe Aquanaut 5067A-027 Singapore Edition Mặt Số Hồng 35.6mm`,
        image: `PatekPhilippe8.png`,
        price: 1514475000,
        brand: `Patek Philippe`,
        Code: `5067A-027`,
        Size: `35.6mm`,
        Material: `Rubber`,
        ShellMaterial: `Thép không gỉ`,
        detail: ` là một trong những thiết kế được ra mắt vào năm 2021. Đồng hồ là một sự tái khẳng định tinh thần “sang trọng đương đại” của mẫu đồng hồ Aquanaut Chronograph, lần đầu tiên được xuất hiện trong một lớp vỏ bằng vàng trắng. Bảo vệ mặt số là lớp tinh tể sapphire trong suốt để lộ bên dưới là mặt số màu xanh kaki mang xu hướng hiện đại với họa tiết bàn cờ khắc nổi. Trung tâm mặt số là bộ kim giờ, kim phút và kim giây với lớp phủ phát quang màu trắng, cho phép người đeo có thể xem giờ ngay cả khi ở trong điều kiện thiếu ánh sáng. Hơn nữa, để tạo nên nét chấm phá cho mặt số thì thay vì sử dụng một kiểu cọc số đơn lẻ, thương hiệu đã kết hợp cả cọc số Ả Rập và vạch chỉ giờ cho chiếc đồng hồ này. Tại vị trí 3 giờ là một ô cửa sổ lịch ngày. Bộ đếm chronograph 60 phút ở vị trí 6 giờ cũng có hình bát giác bo tròn giống khung bezel.
        Sản phẩm còn được trang bị bộ máy CH 28‑520 C, hoạt động ở tần số 28.800vph và có mức dự trữ năng lượng tối đa lên đến 55 giờ. Có thể nhìn thấy qua mặt kính sau là cân bằng Gyromax với lò xo cân bằng Spiromax, con dấu Patek Philippe và cánh quạt được làm bằng vàng hồng 21k. Đồng hồ có khả năng kháng nước ở độ sâu tối đa 120 mét.`

    },
    {
        id: 9,
        name: `Đồng Hồ Patek Philippe Aquanaut Chronograph 5968G-001 Mặt Số Xanh Đen 42.2mm`,
        image: `PatekPhilippe9.png`,
        price: 2842000000,
        brand: `Patek Philippe`,
        Code: `5968G-001`,
        Size: `42.2mm`,
        Material: `Composite`,
        ShellMaterial: `Vàng trằng 18K`,
        detail: ` là một trong những thiết kế được ra mắt vào năm 2021. Đồng hồ là một sự tái khẳng định tinh thần “sang trọng đương đại” của mẫu đồng hồ Aquanaut Chronograph, lần đầu tiên được xuất hiện trong một lớp vỏ bằng vàng trắng. Bảo vệ mặt số là lớp tinh tể sapphire trong suốt để lộ bên dưới là mặt số màu xanh kaki mang xu hướng hiện đại với họa tiết bàn cờ khắc nổi. Trung tâm mặt số là bộ kim giờ, kim phút và kim giây với lớp phủ phát quang màu trắng, cho phép người đeo có thể xem giờ ngay cả khi ở trong điều kiện thiếu ánh sáng. Hơn nữa, để tạo nên nét chấm phá cho mặt số thì thay vì sử dụng một kiểu cọc số đơn lẻ, thương hiệu đã kết hợp cả cọc số Ả Rập và vạch chỉ giờ cho chiếc đồng hồ này. Tại vị trí 3 giờ là một ô cửa sổ lịch ngày. Bộ đếm chronograph 60 phút ở vị trí 6 giờ cũng có hình bát giác bo tròn giống khung bezel.
        Sản phẩm còn được trang bị bộ máy CH 28‑520 C, hoạt động ở tần số 28.800vph và có mức dự trữ năng lượng tối đa lên đến 55 giờ. Có thể nhìn thấy qua mặt kính sau là cân bằng Gyromax với lò xo cân bằng Spiromax, con dấu Patek Philippe và cánh quạt được làm bằng vàng hồng 21k. Đồng hồ có khả năng kháng nước ở độ sâu tối đa 120 mét.`

    },
    {
        id: 10,
        name: `Đồng hồ Patek Philippe Aquanaut Chronograph 5968G-010 Mặt Số Xanh Khaki 42.2mm`,
        image: `PatekPhilippe10.png`,
        price: 3211800000,
        brand: `Patek Philippe`,
        Code: `5968G-010`,
        Size: `42.2mm`,
        Material: `Nguyên liệu hỗn hợp`,
        ShellMaterial: `Vàng trắng`,
        detail: ` là một trong những thiết kế được ra mắt vào năm 2021. Đồng hồ là một sự tái khẳng định tinh thần “sang trọng đương đại” của mẫu đồng hồ Aquanaut Chronograph, lần đầu tiên được xuất hiện trong một lớp vỏ bằng vàng trắng. Bảo vệ mặt số là lớp tinh tể sapphire trong suốt để lộ bên dưới là mặt số màu xanh kaki mang xu hướng hiện đại với họa tiết bàn cờ khắc nổi. Trung tâm mặt số là bộ kim giờ, kim phút và kim giây với lớp phủ phát quang màu trắng, cho phép người đeo có thể xem giờ ngay cả khi ở trong điều kiện thiếu ánh sáng. Hơn nữa, để tạo nên nét chấm phá cho mặt số thì thay vì sử dụng một kiểu cọc số đơn lẻ, thương hiệu đã kết hợp cả cọc số Ả Rập và vạch chỉ giờ cho chiếc đồng hồ này. Tại vị trí 3 giờ là một ô cửa sổ lịch ngày. Bộ đếm chronograph 60 phút ở vị trí 6 giờ cũng có hình bát giác bo tròn giống khung bezel.
        Sản phẩm còn được trang bị bộ máy CH 28‑520 C, hoạt động ở tần số 28.800vph và có mức dự trữ năng lượng tối đa lên đến 55 giờ. Có thể nhìn thấy qua mặt kính sau là cân bằng Gyromax với lò xo cân bằng Spiromax, con dấu Patek Philippe và cánh quạt được làm bằng vàng hồng 21k. Đồng hồ có khả năng kháng nước ở độ sâu tối đa 120 mét.`

    },
    {
        id: 11,
        name: `Đồng hồ Patek Philippe Aquanaut Chronograph 5968A-001 Mặt Số Đen 42.2mm`,
        image: `PatekPhilippe11.png`,
        price: 3280000000,
        brand: `Patek Philippe`,
        Code: `5968A-001`,
        Size: `42.2mm`,
        Material: `Cao su`,
        ShellMaterial: `Thép`,
        detail: ` là một trong những thiết kế được ra mắt vào năm 2021. Đồng hồ là một sự tái khẳng định tinh thần “sang trọng đương đại” của mẫu đồng hồ Aquanaut Chronograph, lần đầu tiên được xuất hiện trong một lớp vỏ bằng vàng trắng. Bảo vệ mặt số là lớp tinh tể sapphire trong suốt để lộ bên dưới là mặt số màu xanh kaki mang xu hướng hiện đại với họa tiết bàn cờ khắc nổi. Trung tâm mặt số là bộ kim giờ, kim phút và kim giây với lớp phủ phát quang màu trắng, cho phép người đeo có thể xem giờ ngay cả khi ở trong điều kiện thiếu ánh sáng. Hơn nữa, để tạo nên nét chấm phá cho mặt số thì thay vì sử dụng một kiểu cọc số đơn lẻ, thương hiệu đã kết hợp cả cọc số Ả Rập và vạch chỉ giờ cho chiếc đồng hồ này. Tại vị trí 3 giờ là một ô cửa sổ lịch ngày. Bộ đếm chronograph 60 phút ở vị trí 6 giờ cũng có hình bát giác bo tròn giống khung bezel.
        Sản phẩm còn được trang bị bộ máy CH 28‑520 C, hoạt động ở tần số 28.800vph và có mức dự trữ năng lượng tối đa lên đến 55 giờ. Có thể nhìn thấy qua mặt kính sau là cân bằng Gyromax với lò xo cân bằng Spiromax, con dấu Patek Philippe và cánh quạt được làm bằng vàng hồng 21k. Đồng hồ có khả năng kháng nước ở độ sâu tối đa 120 mét.`

    },
    {
        id: 12,
        name: `Đồng Hồ Patek Philippe Aquanaut Date Black 5167A-001 Mặt Số Đen 40.8mm`,
        image: `PatekPhilippe12.png`,
        price: 1440000000,
        brand: `Patek Philippe`,
        Code: `5167A-001`,
        Size: `40.8mm`,
        Material: `Cao su`,
        ShellMaterial: `Thép không gỉ`,
        detail: ` là một trong những thiết kế được ra mắt vào năm 2021. Đồng hồ là một sự tái khẳng định tinh thần “sang trọng đương đại” của mẫu đồng hồ Aquanaut Chronograph, lần đầu tiên được xuất hiện trong một lớp vỏ bằng vàng trắng. Bảo vệ mặt số là lớp tinh tể sapphire trong suốt để lộ bên dưới là mặt số màu xanh kaki mang xu hướng hiện đại với họa tiết bàn cờ khắc nổi. Trung tâm mặt số là bộ kim giờ, kim phút và kim giây với lớp phủ phát quang màu trắng, cho phép người đeo có thể xem giờ ngay cả khi ở trong điều kiện thiếu ánh sáng. Hơn nữa, để tạo nên nét chấm phá cho mặt số thì thay vì sử dụng một kiểu cọc số đơn lẻ, thương hiệu đã kết hợp cả cọc số Ả Rập và vạch chỉ giờ cho chiếc đồng hồ này. Tại vị trí 3 giờ là một ô cửa sổ lịch ngày. Bộ đếm chronograph 60 phút ở vị trí 6 giờ cũng có hình bát giác bo tròn giống khung bezel.
        Sản phẩm còn được trang bị bộ máy CH 28‑520 C, hoạt động ở tần số 28.800vph và có mức dự trữ năng lượng tối đa lên đến 55 giờ. Có thể nhìn thấy qua mặt kính sau là cân bằng Gyromax với lò xo cân bằng Spiromax, con dấu Patek Philippe và cánh quạt được làm bằng vàng hồng 21k. Đồng hồ có khả năng kháng nước ở độ sâu tối đa 120 mét.`

    },
    {
        id: 13,
        name: `Đồng Hồ Patek Philippe Complications Blue Dial Platium Chronograph 5905P-001 Mặt Số Xanh 42mm`,
        image: `PatekPhilippe13.png`,
        price: 1880000000,
        brand: `Patek Philippe`,
        Code: `5905P-001`,
        Size: `42mm`,
        Material: `Da cá sấu`,
        ShellMaterial: `Platinum`,
        detail: ` là một trong những thiết kế được ra mắt vào năm 2021. Đồng hồ là một sự tái khẳng định tinh thần “sang trọng đương đại” của mẫu đồng hồ Aquanaut Chronograph, lần đầu tiên được xuất hiện trong một lớp vỏ bằng vàng trắng. Bảo vệ mặt số là lớp tinh tể sapphire trong suốt để lộ bên dưới là mặt số màu xanh kaki mang xu hướng hiện đại với họa tiết bàn cờ khắc nổi. Trung tâm mặt số là bộ kim giờ, kim phút và kim giây với lớp phủ phát quang màu trắng, cho phép người đeo có thể xem giờ ngay cả khi ở trong điều kiện thiếu ánh sáng. Hơn nữa, để tạo nên nét chấm phá cho mặt số thì thay vì sử dụng một kiểu cọc số đơn lẻ, thương hiệu đã kết hợp cả cọc số Ả Rập và vạch chỉ giờ cho chiếc đồng hồ này. Tại vị trí 3 giờ là một ô cửa sổ lịch ngày. Bộ đếm chronograph 60 phút ở vị trí 6 giờ cũng có hình bát giác bo tròn giống khung bezel.
        Sản phẩm còn được trang bị bộ máy CH 28‑520 C, hoạt động ở tần số 28.800vph và có mức dự trữ năng lượng tối đa lên đến 55 giờ. Có thể nhìn thấy qua mặt kính sau là cân bằng Gyromax với lò xo cân bằng Spiromax, con dấu Patek Philippe và cánh quạt được làm bằng vàng hồng 21k. Đồng hồ có khả năng kháng nước ở độ sâu tối đa 120 mét.`


    },
    {
        id: 14,
        name: `Đồng hồ Patek Philippe Complications Automatic 5205R-001 Mặt Số Trắng 40mm`,
        image: `PatekPhilippe14.png`,
        price: 1230000000,
        brand: `Patek Philippe`,
        Code: `5205R-001`,
        Size: `40mm`,
        Material: `Da cá sấu`,
        ShellMaterial: `Vàng hồng`,
        detail: ` là một trong những thiết kế được ra mắt vào năm 2021. Đồng hồ là một sự tái khẳng định tinh thần “sang trọng đương đại” của mẫu đồng hồ Aquanaut Chronograph, lần đầu tiên được xuất hiện trong một lớp vỏ bằng vàng trắng. Bảo vệ mặt số là lớp tinh tể sapphire trong suốt để lộ bên dưới là mặt số màu xanh kaki mang xu hướng hiện đại với họa tiết bàn cờ khắc nổi. Trung tâm mặt số là bộ kim giờ, kim phút và kim giây với lớp phủ phát quang màu trắng, cho phép người đeo có thể xem giờ ngay cả khi ở trong điều kiện thiếu ánh sáng. Hơn nữa, để tạo nên nét chấm phá cho mặt số thì thay vì sử dụng một kiểu cọc số đơn lẻ, thương hiệu đã kết hợp cả cọc số Ả Rập và vạch chỉ giờ cho chiếc đồng hồ này. Tại vị trí 3 giờ là một ô cửa sổ lịch ngày. Bộ đếm chronograph 60 phút ở vị trí 6 giờ cũng có hình bát giác bo tròn giống khung bezel.
        Sản phẩm còn được trang bị bộ máy CH 28‑520 C, hoạt động ở tần số 28.800vph và có mức dự trữ năng lượng tối đa lên đến 55 giờ. Có thể nhìn thấy qua mặt kính sau là cân bằng Gyromax với lò xo cân bằng Spiromax, con dấu Patek Philippe và cánh quạt được làm bằng vàng hồng 21k. Đồng hồ có khả năng kháng nước ở độ sâu tối đa 120 mét.`

    },
    {
        id: 15,
        name: `Đồng hồ Patek Philippe Complications 5930G-010 Mặt Số Sapphire Xanh 39.5mm`,
        image: `PatekPhilippe15.png`,
        price: 1486000000,
        brand: `Patek Philippe`,
        Code: `5930G-010`,
        Size: `39.5mm`,
        Material: `Da cá sấu`,
        ShellMaterial: `Vàng trắng`,
        detail: ` là một trong những thiết kế được ra mắt vào năm 2021. Đồng hồ là một sự tái khẳng định tinh thần “sang trọng đương đại” của mẫu đồng hồ Aquanaut Chronograph, lần đầu tiên được xuất hiện trong một lớp vỏ bằng vàng trắng. Bảo vệ mặt số là lớp tinh tể sapphire trong suốt để lộ bên dưới là mặt số màu xanh kaki mang xu hướng hiện đại với họa tiết bàn cờ khắc nổi. Trung tâm mặt số là bộ kim giờ, kim phút và kim giây với lớp phủ phát quang màu trắng, cho phép người đeo có thể xem giờ ngay cả khi ở trong điều kiện thiếu ánh sáng. Hơn nữa, để tạo nên nét chấm phá cho mặt số thì thay vì sử dụng một kiểu cọc số đơn lẻ, thương hiệu đã kết hợp cả cọc số Ả Rập và vạch chỉ giờ cho chiếc đồng hồ này. Tại vị trí 3 giờ là một ô cửa sổ lịch ngày. Bộ đếm chronograph 60 phút ở vị trí 6 giờ cũng có hình bát giác bo tròn giống khung bezel.
        Sản phẩm còn được trang bị bộ máy CH 28‑520 C, hoạt động ở tần số 28.800vph và có mức dự trữ năng lượng tối đa lên đến 55 giờ. Có thể nhìn thấy qua mặt kính sau là cân bằng Gyromax với lò xo cân bằng Spiromax, con dấu Patek Philippe và cánh quạt được làm bằng vàng hồng 21k. Đồng hồ có khả năng kháng nước ở độ sâu tối đa 120 mét.`

    },
    {
        id: 16,
        name: 'Đồng Hồ Rolex Cosmograph Daytona 40 116505-0001 Mặt Số Hồng Dây Đeo Oyster Vàng Hồng',
        image: 'rolex1.png',
        price: 197000000,
        brand: `Rolex`,
        Code: `116505-0001`,
        Size: `40mm`,
        Material: `Oyster`,
        ShellMaterial: `Oyster,Platinum`,
        detail: ` là một trong những thiết kế được ra mắt vào năm 2021. Đồng hồ là một sự tái khẳng định tinh thần “sang trọng đương đại” của mẫu đồng hồ Aquanaut Chronograph, lần đầu tiên được xuất hiện trong một lớp vỏ bằng vàng trắng. Bảo vệ mặt số là lớp tinh tể sapphire trong suốt để lộ bên dưới là mặt số màu xanh kaki mang xu hướng hiện đại với họa tiết bàn cờ khắc nổi. Trung tâm mặt số là bộ kim giờ, kim phút và kim giây với lớp phủ phát quang màu trắng, cho phép người đeo có thể xem giờ ngay cả khi ở trong điều kiện thiếu ánh sáng. Hơn nữa, để tạo nên nét chấm phá cho mặt số thì thay vì sử dụng một kiểu cọc số đơn lẻ, thương hiệu đã kết hợp cả cọc số Ả Rập và vạch chỉ giờ cho chiếc đồng hồ này. Tại vị trí 3 giờ là một ô cửa sổ lịch ngày. Bộ đếm chronograph 60 phút ở vị trí 6 giờ cũng có hình bát giác bo tròn giống khung bezel.
        Sản phẩm còn được trang bị bộ máy CH 28‑520 C, hoạt động ở tần số 28.800vph và có mức dự trữ năng lượng tối đa lên đến 55 giờ. Có thể nhìn thấy qua mặt kính sau là cân bằng Gyromax với lò xo cân bằng Spiromax, con dấu Patek Philippe và cánh quạt được làm bằng vàng hồng 21k. Đồng hồ có khả năng kháng nước ở độ sâu tối đa 120 mét.`

    },
    {
        id: 17,
        name: 'Đồng Hồ Rolex Air-King 40 126900-0001 Mặt Số Đen Dây Đeo Oyster',
        image: 'rolex2.png',
        price: 268000000,
        brand: `Rolex`,
        Code: `126900-0001`,
        Size: `40mm`,
        Material: `Oyster`,
        ShellMaterial: `Thép 904L`,
        detail: ` là một trong những thiết kế được ra mắt vào năm 2021. Đồng hồ là một sự tái khẳng định tinh thần “sang trọng đương đại” của mẫu đồng hồ Aquanaut Chronograph, lần đầu tiên được xuất hiện trong một lớp vỏ bằng vàng trắng. Bảo vệ mặt số là lớp tinh tể sapphire trong suốt để lộ bên dưới là mặt số màu xanh kaki mang xu hướng hiện đại với họa tiết bàn cờ khắc nổi. Trung tâm mặt số là bộ kim giờ, kim phút và kim giây với lớp phủ phát quang màu trắng, cho phép người đeo có thể xem giờ ngay cả khi ở trong điều kiện thiếu ánh sáng. Hơn nữa, để tạo nên nét chấm phá cho mặt số thì thay vì sử dụng một kiểu cọc số đơn lẻ, thương hiệu đã kết hợp cả cọc số Ả Rập và vạch chỉ giờ cho chiếc đồng hồ này. Tại vị trí 3 giờ là một ô cửa sổ lịch ngày. Bộ đếm chronograph 60 phút ở vị trí 6 giờ cũng có hình bát giác bo tròn giống khung bezel.
        Sản phẩm còn được trang bị bộ máy CH 28‑520 C, hoạt động ở tần số 28.800vph và có mức dự trữ năng lượng tối đa lên đến 55 giờ. Có thể nhìn thấy qua mặt kính sau là cân bằng Gyromax với lò xo cân bằng Spiromax, con dấu Patek Philippe và cánh quạt được làm bằng vàng hồng 21k. Đồng hồ có khả năng kháng nước ở độ sâu tối đa 120 mét.`

    },
    {
        id: 18,
        name: 'Đồng hồ Rolex Air King 40 116900-0001 Mặt Số Đen Dây Oyster',
        image: 'rolex3.png',
        price: 430000000,
        brand: `Rolex`,
        Code: `116900-0001`,
        Size: `40mm`,
        Material: `Oystersteel`,
        ShellMaterial: `Oystersteel`,
        detail: ` là một trong những thiết kế được ra mắt vào năm 2021. Đồng hồ là một sự tái khẳng định tinh thần “sang trọng đương đại” của mẫu đồng hồ Aquanaut Chronograph, lần đầu tiên được xuất hiện trong một lớp vỏ bằng vàng trắng. Bảo vệ mặt số là lớp tinh tể sapphire trong suốt để lộ bên dưới là mặt số màu xanh kaki mang xu hướng hiện đại với họa tiết bàn cờ khắc nổi. Trung tâm mặt số là bộ kim giờ, kim phút và kim giây với lớp phủ phát quang màu trắng, cho phép người đeo có thể xem giờ ngay cả khi ở trong điều kiện thiếu ánh sáng. Hơn nữa, để tạo nên nét chấm phá cho mặt số thì thay vì sử dụng một kiểu cọc số đơn lẻ, thương hiệu đã kết hợp cả cọc số Ả Rập và vạch chỉ giờ cho chiếc đồng hồ này. Tại vị trí 3 giờ là một ô cửa sổ lịch ngày. Bộ đếm chronograph 60 phút ở vị trí 6 giờ cũng có hình bát giác bo tròn giống khung bezel.
        Sản phẩm còn được trang bị bộ máy CH 28‑520 C, hoạt động ở tần số 28.800vph và có mức dự trữ năng lượng tối đa lên đến 55 giờ. Có thể nhìn thấy qua mặt kính sau là cân bằng Gyromax với lò xo cân bằng Spiromax, con dấu Patek Philippe và cánh quạt được làm bằng vàng hồng 21k. Đồng hồ có khả năng kháng nước ở độ sâu tối đa 120 mét.`


    },
    {
        id: 19,
        name: 'Đồng Hồ Rolex Celline Date 50515-0011 Mặt Số Đen Dây Đeo Da 39mm',
        image: 'rolex4.png',
        price: 460000000,
        brand: `Rolex`,
        Code: `50515-0011`,
        Size: `39mm`,
        Material: `Da màu đen`,
        ShellMaterial: `Vàng Everose 18ct`,
        detail: ` là một trong những thiết kế được ra mắt vào năm 2021. Đồng hồ là một sự tái khẳng định tinh thần “sang trọng đương đại” của mẫu đồng hồ Aquanaut Chronograph, lần đầu tiên được xuất hiện trong một lớp vỏ bằng vàng trắng. Bảo vệ mặt số là lớp tinh tể sapphire trong suốt để lộ bên dưới là mặt số màu xanh kaki mang xu hướng hiện đại với họa tiết bàn cờ khắc nổi. Trung tâm mặt số là bộ kim giờ, kim phút và kim giây với lớp phủ phát quang màu trắng, cho phép người đeo có thể xem giờ ngay cả khi ở trong điều kiện thiếu ánh sáng. Hơn nữa, để tạo nên nét chấm phá cho mặt số thì thay vì sử dụng một kiểu cọc số đơn lẻ, thương hiệu đã kết hợp cả cọc số Ả Rập và vạch chỉ giờ cho chiếc đồng hồ này. Tại vị trí 3 giờ là một ô cửa sổ lịch ngày. Bộ đếm chronograph 60 phút ở vị trí 6 giờ cũng có hình bát giác bo tròn giống khung bezel.
        Sản phẩm còn được trang bị bộ máy CH 28‑520 C, hoạt động ở tần số 28.800vph và có mức dự trữ năng lượng tối đa lên đến 55 giờ. Có thể nhìn thấy qua mặt kính sau là cân bằng Gyromax với lò xo cân bằng Spiromax, con dấu Patek Philippe và cánh quạt được làm bằng vàng hồng 21k. Đồng hồ có khả năng kháng nước ở độ sâu tối đa 120 mét.`

    },
    {
        id: 20,
        name: 'Đồng Hồ Rolex Celline Moonphase 50535-0002 Mặt Số Trắng Dây Đeo Da 39mm',
        image: 'rolex5.png',
        price: 810000000,
        brand: `Rolex`,
        Code: `50535-0002`,
        Size: `39mm`,
        Material: `Dâ đeo da`,
        ShellMaterial: `Vàng Hồng 18k`,
        detail: ` là một trong những thiết kế được ra mắt vào năm 2021. Đồng hồ là một sự tái khẳng định tinh thần “sang trọng đương đại” của mẫu đồng hồ Aquanaut Chronograph, lần đầu tiên được xuất hiện trong một lớp vỏ bằng vàng trắng. Bảo vệ mặt số là lớp tinh tể sapphire trong suốt để lộ bên dưới là mặt số màu xanh kaki mang xu hướng hiện đại với họa tiết bàn cờ khắc nổi. Trung tâm mặt số là bộ kim giờ, kim phút và kim giây với lớp phủ phát quang màu trắng, cho phép người đeo có thể xem giờ ngay cả khi ở trong điều kiện thiếu ánh sáng. Hơn nữa, để tạo nên nét chấm phá cho mặt số thì thay vì sử dụng một kiểu cọc số đơn lẻ, thương hiệu đã kết hợp cả cọc số Ả Rập và vạch chỉ giờ cho chiếc đồng hồ này. Tại vị trí 3 giờ là một ô cửa sổ lịch ngày. Bộ đếm chronograph 60 phút ở vị trí 6 giờ cũng có hình bát giác bo tròn giống khung bezel.
        Sản phẩm còn được trang bị bộ máy CH 28‑520 C, hoạt động ở tần số 28.800vph và có mức dự trữ năng lượng tối đa lên đến 55 giờ. Có thể nhìn thấy qua mặt kính sau là cân bằng Gyromax với lò xo cân bằng Spiromax, con dấu Patek Philippe và cánh quạt được làm bằng vàng hồng 21k. Đồng hồ có khả năng kháng nước ở độ sâu tối đa 120 mét.`

    },
    {
        id: 21,
        name: 'Đồng Hồ Rolex Cellini Time 50505-0020 Mặt Số Trắng Dây Đeo Da 39mm',
        image: 'rolex6.png',
        price: 310000000,
        brand: `Rolex`,
        Code: `50505-0020`,
        Size: `39mm`,
        Material: `Dâ đeo da`,
        ShellMaterial: `Vàng Hồng 18k`,
        detail: ` là một trong những thiết kế được ra mắt vào năm 2021. Đồng hồ là một sự tái khẳng định tinh thần “sang trọng đương đại” của mẫu đồng hồ Aquanaut Chronograph, lần đầu tiên được xuất hiện trong một lớp vỏ bằng vàng trắng. Bảo vệ mặt số là lớp tinh tể sapphire trong suốt để lộ bên dưới là mặt số màu xanh kaki mang xu hướng hiện đại với họa tiết bàn cờ khắc nổi. Trung tâm mặt số là bộ kim giờ, kim phút và kim giây với lớp phủ phát quang màu trắng, cho phép người đeo có thể xem giờ ngay cả khi ở trong điều kiện thiếu ánh sáng. Hơn nữa, để tạo nên nét chấm phá cho mặt số thì thay vì sử dụng một kiểu cọc số đơn lẻ, thương hiệu đã kết hợp cả cọc số Ả Rập và vạch chỉ giờ cho chiếc đồng hồ này. Tại vị trí 3 giờ là một ô cửa sổ lịch ngày. Bộ đếm chronograph 60 phút ở vị trí 6 giờ cũng có hình bát giác bo tròn giống khung bezel.
        Sản phẩm còn được trang bị bộ máy CH 28‑520 C, hoạt động ở tần số 28.800vph và có mức dự trữ năng lượng tối đa lên đến 55 giờ. Có thể nhìn thấy qua mặt kính sau là cân bằng Gyromax với lò xo cân bằng Spiromax, con dấu Patek Philippe và cánh quạt được làm bằng vàng hồng 21k. Đồng hồ có khả năng kháng nước ở độ sâu tối đa 120 mét.`

    },
    {
        id: 22,
        name: 'Đồng Hồ Rolex Cosmograph Daytona 40 116500ln-0001 Mặt Số Trắng Dây Oyster Thép',
        image: 'rolex7.png',
        price: 420980020,
        brand: `Rolex`,
        Code: `116500ln-0001`,
        Size: `40mm`,
        Material: `Oystersteel`,
        ShellMaterial: `Oystersteel`,
        detail: ` là một trong những thiết kế được ra mắt vào năm 2021. Đồng hồ là một sự tái khẳng định tinh thần “sang trọng đương đại” của mẫu đồng hồ Aquanaut Chronograph, lần đầu tiên được xuất hiện trong một lớp vỏ bằng vàng trắng. Bảo vệ mặt số là lớp tinh tể sapphire trong suốt để lộ bên dưới là mặt số màu xanh kaki mang xu hướng hiện đại với họa tiết bàn cờ khắc nổi. Trung tâm mặt số là bộ kim giờ, kim phút và kim giây với lớp phủ phát quang màu trắng, cho phép người đeo có thể xem giờ ngay cả khi ở trong điều kiện thiếu ánh sáng. Hơn nữa, để tạo nên nét chấm phá cho mặt số thì thay vì sử dụng một kiểu cọc số đơn lẻ, thương hiệu đã kết hợp cả cọc số Ả Rập và vạch chỉ giờ cho chiếc đồng hồ này. Tại vị trí 3 giờ là một ô cửa sổ lịch ngày. Bộ đếm chronograph 60 phút ở vị trí 6 giờ cũng có hình bát giác bo tròn giống khung bezel.
        Sản phẩm còn được trang bị bộ máy CH 28‑520 C, hoạt động ở tần số 28.800vph và có mức dự trữ năng lượng tối đa lên đến 55 giờ. Có thể nhìn thấy qua mặt kính sau là cân bằng Gyromax với lò xo cân bằng Spiromax, con dấu Patek Philippe và cánh quạt được làm bằng vàng hồng 21k. Đồng hồ có khả năng kháng nước ở độ sâu tối đa 120 mét.`

    },
    {
        id: 23,
        name: 'Đồng Hồ Rolex Cosmograph Daytona 40 116503-0004 Mặt Số Đen Dây Oyster Thép Vàng Vàng',
        image: 'rolex8.png',
        price: 660020000,
        brand: `Rolex`,
        Code: `116503-0004`,
        Size: `40mm`,
        Material: `Oystersteel`,
        ShellMaterial: `Oystersteel`,
        detail: ` là một trong những thiết kế được ra mắt vào năm 2021. Đồng hồ là một sự tái khẳng định tinh thần “sang trọng đương đại” của mẫu đồng hồ Aquanaut Chronograph, lần đầu tiên được xuất hiện trong một lớp vỏ bằng vàng trắng. Bảo vệ mặt số là lớp tinh tể sapphire trong suốt để lộ bên dưới là mặt số màu xanh kaki mang xu hướng hiện đại với họa tiết bàn cờ khắc nổi. Trung tâm mặt số là bộ kim giờ, kim phút và kim giây với lớp phủ phát quang màu trắng, cho phép người đeo có thể xem giờ ngay cả khi ở trong điều kiện thiếu ánh sáng. Hơn nữa, để tạo nên nét chấm phá cho mặt số thì thay vì sử dụng một kiểu cọc số đơn lẻ, thương hiệu đã kết hợp cả cọc số Ả Rập và vạch chỉ giờ cho chiếc đồng hồ này. Tại vị trí 3 giờ là một ô cửa sổ lịch ngày. Bộ đếm chronograph 60 phút ở vị trí 6 giờ cũng có hình bát giác bo tròn giống khung bezel.
        Sản phẩm còn được trang bị bộ máy CH 28‑520 C, hoạt động ở tần số 28.800vph và có mức dự trữ năng lượng tối đa lên đến 55 giờ. Có thể nhìn thấy qua mặt kính sau là cân bằng Gyromax với lò xo cân bằng Spiromax, con dấu Patek Philippe và cánh quạt được làm bằng vàng hồng 21k. Đồng hồ có khả năng kháng nước ở độ sâu tối đa 120 mét.`


    },
    {
        id: 24,
        name: '. Đồng Hồ Rolex Cosmograph Daytona 40 116518ln-0047 Mặt Số Đen Dây Đeo Oysterflex',
        image: 'rolex9.png',
        price: 880019080,
        brand: `Rolex`,
        Code: ` 116518ln-0047`,
        Size: `40mm`,
        Material: `Rubber`,
        ShellMaterial: `Yellow Gold 18k`,
        detail: ` là một trong những thiết kế được ra mắt vào năm 2021. Đồng hồ là một sự tái khẳng định tinh thần “sang trọng đương đại” của mẫu đồng hồ Aquanaut Chronograph, lần đầu tiên được xuất hiện trong một lớp vỏ bằng vàng trắng. Bảo vệ mặt số là lớp tinh tể sapphire trong suốt để lộ bên dưới là mặt số màu xanh kaki mang xu hướng hiện đại với họa tiết bàn cờ khắc nổi. Trung tâm mặt số là bộ kim giờ, kim phút và kim giây với lớp phủ phát quang màu trắng, cho phép người đeo có thể xem giờ ngay cả khi ở trong điều kiện thiếu ánh sáng. Hơn nữa, để tạo nên nét chấm phá cho mặt số thì thay vì sử dụng một kiểu cọc số đơn lẻ, thương hiệu đã kết hợp cả cọc số Ả Rập và vạch chỉ giờ cho chiếc đồng hồ này. Tại vị trí 3 giờ là một ô cửa sổ lịch ngày. Bộ đếm chronograph 60 phút ở vị trí 6 giờ cũng có hình bát giác bo tròn giống khung bezel.
        Sản phẩm còn được trang bị bộ máy CH 28‑520 C, hoạt động ở tần số 28.800vph và có mức dự trữ năng lượng tối đa lên đến 55 giờ. Có thể nhìn thấy qua mặt kính sau là cân bằng Gyromax với lò xo cân bằng Spiromax, con dấu Patek Philippe và cánh quạt được làm bằng vàng hồng 21k. Đồng hồ có khả năng kháng nước ở độ sâu tối đa 120 mét.`


    },
    {
        id: 25,
        name: 'Đồng Hồ Rolex Cosmograph Daytona 40 116518ln-0048 Mặt Số Vàng Dây Đeo Oysterflex',
        image: 'rolex10.png',
        price: 950000000,
        brand: `Rolex`,
        Code: ` 116518ln-0048`,
        Size: `40mm`,
        Material: `Oysterflex`,
        ShellMaterial: `Oyster,Yellow Gold `,
        detail: ` là một trong những thiết kế được ra mắt vào năm 2021. Đồng hồ là một sự tái khẳng định tinh thần “sang trọng đương đại” của mẫu đồng hồ Aquanaut Chronograph, lần đầu tiên được xuất hiện trong một lớp vỏ bằng vàng trắng. Bảo vệ mặt số là lớp tinh tể sapphire trong suốt để lộ bên dưới là mặt số màu xanh kaki mang xu hướng hiện đại với họa tiết bàn cờ khắc nổi. Trung tâm mặt số là bộ kim giờ, kim phút và kim giây với lớp phủ phát quang màu trắng, cho phép người đeo có thể xem giờ ngay cả khi ở trong điều kiện thiếu ánh sáng. Hơn nữa, để tạo nên nét chấm phá cho mặt số thì thay vì sử dụng một kiểu cọc số đơn lẻ, thương hiệu đã kết hợp cả cọc số Ả Rập và vạch chỉ giờ cho chiếc đồng hồ này. Tại vị trí 3 giờ là một ô cửa sổ lịch ngày. Bộ đếm chronograph 60 phút ở vị trí 6 giờ cũng có hình bát giác bo tròn giống khung bezel.
        Sản phẩm còn được trang bị bộ máy CH 28‑520 C, hoạt động ở tần số 28.800vph và có mức dự trữ năng lượng tối đa lên đến 55 giờ. Có thể nhìn thấy qua mặt kính sau là cân bằng Gyromax với lò xo cân bằng Spiromax, con dấu Patek Philippe và cánh quạt được làm bằng vàng hồng 21k. Đồng hồ có khả năng kháng nước ở độ sâu tối đa 120 mét.`


    },
    {
        id: 26,
        name: 'Đồng Hồ Rolex Cosmograph Daytona 40 116500ln-0001 Mặt Số Trắng Dây Oyster Thép',
        image: 'rolex11.png',
        price: 450093020,
        brand: `Rolex`,
        Code: `116500ln-0001 `,
        Size: `40mm`,
        Material: `Oystersteel`,
        ShellMaterial: `Oyster,Yellow Gold `,
        detail: ` là một trong những thiết kế được ra mắt vào năm 2021. Đồng hồ là một sự tái khẳng định tinh thần “sang trọng đương đại” của mẫu đồng hồ Aquanaut Chronograph, lần đầu tiên được xuất hiện trong một lớp vỏ bằng vàng trắng. Bảo vệ mặt số là lớp tinh tể sapphire trong suốt để lộ bên dưới là mặt số màu xanh kaki mang xu hướng hiện đại với họa tiết bàn cờ khắc nổi. Trung tâm mặt số là bộ kim giờ, kim phút và kim giây với lớp phủ phát quang màu trắng, cho phép người đeo có thể xem giờ ngay cả khi ở trong điều kiện thiếu ánh sáng. Hơn nữa, để tạo nên nét chấm phá cho mặt số thì thay vì sử dụng một kiểu cọc số đơn lẻ, thương hiệu đã kết hợp cả cọc số Ả Rập và vạch chỉ giờ cho chiếc đồng hồ này. Tại vị trí 3 giờ là một ô cửa sổ lịch ngày. Bộ đếm chronograph 60 phút ở vị trí 6 giờ cũng có hình bát giác bo tròn giống khung bezel.
        Sản phẩm còn được trang bị bộ máy CH 28‑520 C, hoạt động ở tần số 28.800vph và có mức dự trữ năng lượng tối đa lên đến 55 giờ. Có thể nhìn thấy qua mặt kính sau là cân bằng Gyromax với lò xo cân bằng Spiromax, con dấu Patek Philippe và cánh quạt được làm bằng vàng hồng 21k. Đồng hồ có khả năng kháng nước ở độ sâu tối đa 120 mét.`

    },
    {
        id: 27,
        name: 'Đồng Hồ Rolex Cosmograph Daytona 40 116506-0001 Mặt Số Xanh Băng Dây Oyster Thép',
        image: 'rolex12.png',
        price: 225000000,
        brand: `Rolex`,
        Code: `116500ln-0001 `,
        Size: `40mm`,
        Material: `Oystersteel`,
        ShellMaterial: `Oyster `,
        detail: ` là một trong những thiết kế được ra mắt vào năm 2021. Đồng hồ là một sự tái khẳng định tinh thần “sang trọng đương đại” của mẫu đồng hồ Aquanaut Chronograph, lần đầu tiên được xuất hiện trong một lớp vỏ bằng vàng trắng. Bảo vệ mặt số là lớp tinh tể sapphire trong suốt để lộ bên dưới là mặt số màu xanh kaki mang xu hướng hiện đại với họa tiết bàn cờ khắc nổi. Trung tâm mặt số là bộ kim giờ, kim phút và kim giây với lớp phủ phát quang màu trắng, cho phép người đeo có thể xem giờ ngay cả khi ở trong điều kiện thiếu ánh sáng. Hơn nữa, để tạo nên nét chấm phá cho mặt số thì thay vì sử dụng một kiểu cọc số đơn lẻ, thương hiệu đã kết hợp cả cọc số Ả Rập và vạch chỉ giờ cho chiếc đồng hồ này. Tại vị trí 3 giờ là một ô cửa sổ lịch ngày. Bộ đếm chronograph 60 phút ở vị trí 6 giờ cũng có hình bát giác bo tròn giống khung bezel.
        Sản phẩm còn được trang bị bộ máy CH 28‑520 C, hoạt động ở tần số 28.800vph và có mức dự trữ năng lượng tối đa lên đến 55 giờ. Có thể nhìn thấy qua mặt kính sau là cân bằng Gyromax với lò xo cân bằng Spiromax, con dấu Patek Philippe và cánh quạt được làm bằng vàng hồng 21k. Đồng hồ có khả năng kháng nước ở độ sâu tối đa 120 mét.`

    },
    {
        id: 28,
        name: '. Đồng Hồ Rolex Cosmograph Daytona 40 116508-0003 Mặt Số Vàng Dây Oyster Vàng Vàng',
        image: 'rolex13.png',
        price: 1159069699,
        brand: `Rolex`,
        Code: `116508-0003 `,
        Size: `40mm`,
        Material: `Yellow Gold 18k`,
        ShellMaterial: `Yellow Gold 18k`,
        detail: ` là một trong những thiết kế được ra mắt vào năm 2021. Đồng hồ là một sự tái khẳng định tinh thần “sang trọng đương đại” của mẫu đồng hồ Aquanaut Chronograph, lần đầu tiên được xuất hiện trong một lớp vỏ bằng vàng trắng. Bảo vệ mặt số là lớp tinh tể sapphire trong suốt để lộ bên dưới là mặt số màu xanh kaki mang xu hướng hiện đại với họa tiết bàn cờ khắc nổi. Trung tâm mặt số là bộ kim giờ, kim phút và kim giây với lớp phủ phát quang màu trắng, cho phép người đeo có thể xem giờ ngay cả khi ở trong điều kiện thiếu ánh sáng. Hơn nữa, để tạo nên nét chấm phá cho mặt số thì thay vì sử dụng một kiểu cọc số đơn lẻ, thương hiệu đã kết hợp cả cọc số Ả Rập và vạch chỉ giờ cho chiếc đồng hồ này. Tại vị trí 3 giờ là một ô cửa sổ lịch ngày. Bộ đếm chronograph 60 phút ở vị trí 6 giờ cũng có hình bát giác bo tròn giống khung bezel.
        Sản phẩm còn được trang bị bộ máy CH 28‑520 C, hoạt động ở tần số 28.800vph và có mức dự trữ năng lượng tối đa lên đến 55 giờ. Có thể nhìn thấy qua mặt kính sau là cân bằng Gyromax với lò xo cân bằng Spiromax, con dấu Patek Philippe và cánh quạt được làm bằng vàng hồng 21k. Đồng hồ có khả năng kháng nước ở độ sâu tối đa 120 mét.`

    },
    {
        id: 29,
        name: 'Đồng Hồ Rolex Cosmograph Daytona 40 116508-0013 Mặt Số Xanh Lá Dây Oyster',
        image: 'rolex14.png',
        price: 1150060600,
        brand: `Rolex`,
        Code: `116508-0013  `,
        Size: `40mm`,
        Material: `Yellow Gold 18k`,
        ShellMaterial: `Yellow Gold 18k`,
        detail: ` là một trong những thiết kế được ra mắt vào năm 2021. Đồng hồ là một sự tái khẳng định tinh thần “sang trọng đương đại” của mẫu đồng hồ Aquanaut Chronograph, lần đầu tiên được xuất hiện trong một lớp vỏ bằng vàng trắng. Bảo vệ mặt số là lớp tinh tể sapphire trong suốt để lộ bên dưới là mặt số màu xanh kaki mang xu hướng hiện đại với họa tiết bàn cờ khắc nổi. Trung tâm mặt số là bộ kim giờ, kim phút và kim giây với lớp phủ phát quang màu trắng, cho phép người đeo có thể xem giờ ngay cả khi ở trong điều kiện thiếu ánh sáng. Hơn nữa, để tạo nên nét chấm phá cho mặt số thì thay vì sử dụng một kiểu cọc số đơn lẻ, thương hiệu đã kết hợp cả cọc số Ả Rập và vạch chỉ giờ cho chiếc đồng hồ này. Tại vị trí 3 giờ là một ô cửa sổ lịch ngày. Bộ đếm chronograph 60 phút ở vị trí 6 giờ cũng có hình bát giác bo tròn giống khung bezel.
        Sản phẩm còn được trang bị bộ máy CH 28‑520 C, hoạt động ở tần số 28.800vph và có mức dự trữ năng lượng tối đa lên đến 55 giờ. Có thể nhìn thấy qua mặt kính sau là cân bằng Gyromax với lò xo cân bằng Spiromax, con dấu Patek Philippe và cánh quạt được làm bằng vàng hồng 21k. Đồng hồ có khả năng kháng nước ở độ sâu tối đa 120 mét.`

    },
    {
        id: 30,
        name: 'Đồng Hồ Rolex Cosmograph Daytona 40 116519ln-0027 Mặt Số Xám Dây Đeo Oysterflex',
        image: 'rolex15.png',
        price: 882900000,
        brand: `Rolex`,
        Code: `116519ln-0027  `,
        Size: `40mm`,
        Material: `Rubber`,
        ShellMaterial: `Oystersteel `,
        detail: ` là một trong những thiết kế được ra mắt vào năm 2021. Đồng hồ là một sự tái khẳng định tinh thần “sang trọng đương đại” của mẫu đồng hồ Aquanaut Chronograph, lần đầu tiên được xuất hiện trong một lớp vỏ bằng vàng trắng. Bảo vệ mặt số là lớp tinh tể sapphire trong suốt để lộ bên dưới là mặt số màu xanh kaki mang xu hướng hiện đại với họa tiết bàn cờ khắc nổi. Trung tâm mặt số là bộ kim giờ, kim phút và kim giây với lớp phủ phát quang màu trắng, cho phép người đeo có thể xem giờ ngay cả khi ở trong điều kiện thiếu ánh sáng. Hơn nữa, để tạo nên nét chấm phá cho mặt số thì thay vì sử dụng một kiểu cọc số đơn lẻ, thương hiệu đã kết hợp cả cọc số Ả Rập và vạch chỉ giờ cho chiếc đồng hồ này. Tại vị trí 3 giờ là một ô cửa sổ lịch ngày. Bộ đếm chronograph 60 phút ở vị trí 6 giờ cũng có hình bát giác bo tròn giống khung bezel.
        Sản phẩm còn được trang bị bộ máy CH 28‑520 C, hoạt động ở tần số 28.800vph và có mức dự trữ năng lượng tối đa lên đến 55 giờ. Có thể nhìn thấy qua mặt kính sau là cân bằng Gyromax với lò xo cân bằng Spiromax, con dấu Patek Philippe và cánh quạt được làm bằng vàng hồng 21k. Đồng hồ có khả năng kháng nước ở độ sâu tối đa 120 mét.`

    },
    {
        id: 31,
        name: 'Đồng Hồ Rolex Cosmograph Daytona 40 116500ln-0002 Mặt Số Đen Dây Oyster',
        image: 'rolex16.png',
        price: 425983200,
        brand: `Rolex`,
        Code: ` 116500ln-0002 `,
        Size: `40mm`,
        Material: `Oyster`,
        ShellMaterial: `Oystersteel `,
        detail: ` là một trong những thiết kế được ra mắt vào năm 2021. Đồng hồ là một sự tái khẳng định tinh thần “sang trọng đương đại” của mẫu đồng hồ Aquanaut Chronograph, lần đầu tiên được xuất hiện trong một lớp vỏ bằng vàng trắng. Bảo vệ mặt số là lớp tinh tể sapphire trong suốt để lộ bên dưới là mặt số màu xanh kaki mang xu hướng hiện đại với họa tiết bàn cờ khắc nổi. Trung tâm mặt số là bộ kim giờ, kim phút và kim giây với lớp phủ phát quang màu trắng, cho phép người đeo có thể xem giờ ngay cả khi ở trong điều kiện thiếu ánh sáng. Hơn nữa, để tạo nên nét chấm phá cho mặt số thì thay vì sử dụng một kiểu cọc số đơn lẻ, thương hiệu đã kết hợp cả cọc số Ả Rập và vạch chỉ giờ cho chiếc đồng hồ này. Tại vị trí 3 giờ là một ô cửa sổ lịch ngày. Bộ đếm chronograph 60 phút ở vị trí 6 giờ cũng có hình bát giác bo tròn giống khung bezel.
        Sản phẩm còn được trang bị bộ máy CH 28‑520 C, hoạt động ở tần số 28.800vph và có mức dự trữ năng lượng tối đa lên đến 55 giờ. Có thể nhìn thấy qua mặt kính sau là cân bằng Gyromax với lò xo cân bằng Spiromax, con dấu Patek Philippe và cánh quạt được làm bằng vàng hồng 21k. Đồng hồ có khả năng kháng nước ở độ sâu tối đa 120 mét.`


    },
    {
        id: 32,
        name: 'Đồng Hồ Rolex Datejust 31 278273-0030 Mặt Số Olive Dây Đeo Jubilee Thép Vàng Vàng',
        image: 'rolex17.png',
        price: 358460000,
        brand: `Rolex`,
        Code: `  278273-0030  `,
        Size: `31mm`,
        Material: `Oystersteel, Yellow Gold `,
        ShellMaterial: `Oystersteel,Yellow Gold  `,
        detail: ` là một trong những thiết kế được ra mắt vào năm 2021. Đồng hồ là một sự tái khẳng định tinh thần “sang trọng đương đại” của mẫu đồng hồ Aquanaut Chronograph, lần đầu tiên được xuất hiện trong một lớp vỏ bằng vàng trắng. Bảo vệ mặt số là lớp tinh tể sapphire trong suốt để lộ bên dưới là mặt số màu xanh kaki mang xu hướng hiện đại với họa tiết bàn cờ khắc nổi. Trung tâm mặt số là bộ kim giờ, kim phút và kim giây với lớp phủ phát quang màu trắng, cho phép người đeo có thể xem giờ ngay cả khi ở trong điều kiện thiếu ánh sáng. Hơn nữa, để tạo nên nét chấm phá cho mặt số thì thay vì sử dụng một kiểu cọc số đơn lẻ, thương hiệu đã kết hợp cả cọc số Ả Rập và vạch chỉ giờ cho chiếc đồng hồ này. Tại vị trí 3 giờ là một ô cửa sổ lịch ngày. Bộ đếm chronograph 60 phút ở vị trí 6 giờ cũng có hình bát giác bo tròn giống khung bezel.
        Sản phẩm còn được trang bị bộ máy CH 28‑520 C, hoạt động ở tần số 28.800vph và có mức dự trữ năng lượng tối đa lên đến 55 giờ. Có thể nhìn thấy qua mặt kính sau là cân bằng Gyromax với lò xo cân bằng Spiromax, con dấu Patek Philippe và cánh quạt được làm bằng vàng hồng 21k. Đồng hồ có khả năng kháng nước ở độ sâu tối đa 120 mét.`

    },
    {
        id: 33,
        name: 'Đồng Hồ Rolex Cellini Date 50515-0008 Mặt Số Bạc Dây Đeo Da 39mm',
        image: 'rolex18.png',
        price: 410000000,
        brand: `Rolex`,
        Code: ` 50515-0008  `,
        Size: `39mm`,
        Material: `Dây đeo da`,
        ShellMaterial: `Vàng hồng 18k `,
        detail: ` là một trong những thiết kế được ra mắt vào năm 2021. Đồng hồ là một sự tái khẳng định tinh thần “sang trọng đương đại” của mẫu đồng hồ Aquanaut Chronograph, lần đầu tiên được xuất hiện trong một lớp vỏ bằng vàng trắng. Bảo vệ mặt số là lớp tinh tể sapphire trong suốt để lộ bên dưới là mặt số màu xanh kaki mang xu hướng hiện đại với họa tiết bàn cờ khắc nổi. Trung tâm mặt số là bộ kim giờ, kim phút và kim giây với lớp phủ phát quang màu trắng, cho phép người đeo có thể xem giờ ngay cả khi ở trong điều kiện thiếu ánh sáng. Hơn nữa, để tạo nên nét chấm phá cho mặt số thì thay vì sử dụng một kiểu cọc số đơn lẻ, thương hiệu đã kết hợp cả cọc số Ả Rập và vạch chỉ giờ cho chiếc đồng hồ này. Tại vị trí 3 giờ là một ô cửa sổ lịch ngày. Bộ đếm chronograph 60 phút ở vị trí 6 giờ cũng có hình bát giác bo tròn giống khung bezel.
        Sản phẩm còn được trang bị bộ máy CH 28‑520 C, hoạt động ở tần số 28.800vph và có mức dự trữ năng lượng tối đa lên đến 55 giờ. Có thể nhìn thấy qua mặt kính sau là cân bằng Gyromax với lò xo cân bằng Spiromax, con dấu Patek Philippe và cánh quạt được làm bằng vàng hồng 21k. Đồng hồ có khả năng kháng nước ở độ sâu tối đa 120 mét.`


    },
    {
        id: 34,
        name: 'Đồng Hồ Rolex Cellini Time 50509-0006 Mặt Số Đen Dây Đeo Da 39mm ',
        image: 'rolex19.png',
        price: 320000000,
        brand: `Rolex`,
        Code: `50509-0006`,
        Size: `39mm`,
        Material: `Dây đeo da`,
        ShellMaterial: `Vàng Trắng 18k `,
        detail: ` là một trong những thiết kế được ra mắt vào năm 2021. Đồng hồ là một sự tái khẳng định tinh thần “sang trọng đương đại” của mẫu đồng hồ Aquanaut Chronograph, lần đầu tiên được xuất hiện trong một lớp vỏ bằng vàng trắng. Bảo vệ mặt số là lớp tinh tể sapphire trong suốt để lộ bên dưới là mặt số màu xanh kaki mang xu hướng hiện đại với họa tiết bàn cờ khắc nổi. Trung tâm mặt số là bộ kim giờ, kim phút và kim giây với lớp phủ phát quang màu trắng, cho phép người đeo có thể xem giờ ngay cả khi ở trong điều kiện thiếu ánh sáng. Hơn nữa, để tạo nên nét chấm phá cho mặt số thì thay vì sử dụng một kiểu cọc số đơn lẻ, thương hiệu đã kết hợp cả cọc số Ả Rập và vạch chỉ giờ cho chiếc đồng hồ này. Tại vị trí 3 giờ là một ô cửa sổ lịch ngày. Bộ đếm chronograph 60 phút ở vị trí 6 giờ cũng có hình bát giác bo tròn giống khung bezel.
        Sản phẩm còn được trang bị bộ máy CH 28‑520 C, hoạt động ở tần số 28.800vph và có mức dự trữ năng lượng tối đa lên đến 55 giờ. Có thể nhìn thấy qua mặt kính sau là cân bằng Gyromax với lò xo cân bằng Spiromax, con dấu Patek Philippe và cánh quạt được làm bằng vàng hồng 21k. Đồng hồ có khả năng kháng nước ở độ sâu tối đa 120 mét.`


    },
    {
        id: 35,
        name: 'Đồng Hồ Rolex Cosmograph Daytona 40 116519ln-0027 Mặt Số Xám Dây Đeo Oysterflex',
        image: 'rolex20.png',
        price: 882900000,
        brand: `Rolex`,
        Code: ` 116519ln-0027`,
        Size: `40mm`,
        Material: `Rubber`,
        ShellMaterial: `Oystersteel`,
        detail: ` là một trong những thiết kế được ra mắt vào năm 2021. Đồng hồ là một sự tái khẳng định tinh thần “sang trọng đương đại” của mẫu đồng hồ Aquanaut Chronograph, lần đầu tiên được xuất hiện trong một lớp vỏ bằng vàng trắng. Bảo vệ mặt số là lớp tinh tể sapphire trong suốt để lộ bên dưới là mặt số màu xanh kaki mang xu hướng hiện đại với họa tiết bàn cờ khắc nổi. Trung tâm mặt số là bộ kim giờ, kim phút và kim giây với lớp phủ phát quang màu trắng, cho phép người đeo có thể xem giờ ngay cả khi ở trong điều kiện thiếu ánh sáng. Hơn nữa, để tạo nên nét chấm phá cho mặt số thì thay vì sử dụng một kiểu cọc số đơn lẻ, thương hiệu đã kết hợp cả cọc số Ả Rập và vạch chỉ giờ cho chiếc đồng hồ này. Tại vị trí 3 giờ là một ô cửa sổ lịch ngày. Bộ đếm chronograph 60 phút ở vị trí 6 giờ cũng có hình bát giác bo tròn giống khung bezel.
        Sản phẩm còn được trang bị bộ máy CH 28‑520 C, hoạt động ở tần số 28.800vph và có mức dự trữ năng lượng tối đa lên đến 55 giờ. Có thể nhìn thấy qua mặt kính sau là cân bằng Gyromax với lò xo cân bằng Spiromax, con dấu Patek Philippe và cánh quạt được làm bằng vàng hồng 21k. Đồng hồ có khả năng kháng nước ở độ sâu tối đa 120 mét.`


    },
    {
        id: 36,
        name: 'Đồng Hồ Rolex Cosmograph Daytona 40 116518ln-0041 Mặt Số Trắng Dây Đeo Oysterflex',
        image: 'rolex21.png',
        price: 1400000000,
        brand: `Rolex`,
        Code: `116518ln-0041`,
        Size: `40mm`,
        Material: `Oysterflex`,
        ShellMaterial: `Oyster, Vàng Vàng 18k`,
        detail: ` là một trong những thiết kế được ra mắt vào năm 2021. Đồng hồ là một sự tái khẳng định tinh thần “sang trọng đương đại” của mẫu đồng hồ Aquanaut Chronograph, lần đầu tiên được xuất hiện trong một lớp vỏ bằng vàng trắng. Bảo vệ mặt số là lớp tinh tể sapphire trong suốt để lộ bên dưới là mặt số màu xanh kaki mang xu hướng hiện đại với họa tiết bàn cờ khắc nổi. Trung tâm mặt số là bộ kim giờ, kim phút và kim giây với lớp phủ phát quang màu trắng, cho phép người đeo có thể xem giờ ngay cả khi ở trong điều kiện thiếu ánh sáng. Hơn nữa, để tạo nên nét chấm phá cho mặt số thì thay vì sử dụng một kiểu cọc số đơn lẻ, thương hiệu đã kết hợp cả cọc số Ả Rập và vạch chỉ giờ cho chiếc đồng hồ này. Tại vị trí 3 giờ là một ô cửa sổ lịch ngày. Bộ đếm chronograph 60 phút ở vị trí 6 giờ cũng có hình bát giác bo tròn giống khung bezel.
        Sản phẩm còn được trang bị bộ máy CH 28‑520 C, hoạt động ở tần số 28.800vph và có mức dự trữ năng lượng tối đa lên đến 55 giờ. Có thể nhìn thấy qua mặt kính sau là cân bằng Gyromax với lò xo cân bằng Spiromax, con dấu Patek Philippe và cánh quạt được làm bằng vàng hồng 21k. Đồng hồ có khả năng kháng nước ở độ sâu tối đa 120 mét.`

    },
    {
        id: 37,
        name: 'Đồng Hồ Rolex Cosmograph Daytona 40 116503-0009 Xà Cừ Tím Black Mother Of Pearl Dây Đeo Oyster Thép',
        image: 'rolex22.png',
        price: 1100000000,
        brand: `Rolex`,
        Code: `116503-0009`,
        Size: `40mm`,
        Material: `Oystersteel,Yellow Gold 18k`,
        ShellMaterial: `Oystersteel,Yellow Gold 18k`,
        detail: ` là một trong những thiết kế được ra mắt vào năm 2021. Đồng hồ là một sự tái khẳng định tinh thần “sang trọng đương đại” của mẫu đồng hồ Aquanaut Chronograph, lần đầu tiên được xuất hiện trong một lớp vỏ bằng vàng trắng. Bảo vệ mặt số là lớp tinh tể sapphire trong suốt để lộ bên dưới là mặt số màu xanh kaki mang xu hướng hiện đại với họa tiết bàn cờ khắc nổi. Trung tâm mặt số là bộ kim giờ, kim phút và kim giây với lớp phủ phát quang màu trắng, cho phép người đeo có thể xem giờ ngay cả khi ở trong điều kiện thiếu ánh sáng. Hơn nữa, để tạo nên nét chấm phá cho mặt số thì thay vì sử dụng một kiểu cọc số đơn lẻ, thương hiệu đã kết hợp cả cọc số Ả Rập và vạch chỉ giờ cho chiếc đồng hồ này. Tại vị trí 3 giờ là một ô cửa sổ lịch ngày. Bộ đếm chronograph 60 phút ở vị trí 6 giờ cũng có hình bát giác bo tròn giống khung bezel.
        Sản phẩm còn được trang bị bộ máy CH 28‑520 C, hoạt động ở tần số 28.800vph và có mức dự trữ năng lượng tối đa lên đến 55 giờ. Có thể nhìn thấy qua mặt kính sau là cân bằng Gyromax với lò xo cân bằng Spiromax, con dấu Patek Philippe và cánh quạt được làm bằng vàng hồng 21k. Đồng hồ có khả năng kháng nước ở độ sâu tối đa 120 mét.`
    },
    {
        id: 38,
        name: 'Đồng Hồ Rolex Cosmograph Daytona 40 116506-0002 Mặt Số Xanh Băng Dây Đeo Oyster Thép',
        image: 'rolex23.png',
        price: 4610000000,
        brand: `Rolex`,
        Code: ` 116506-0002`,
        Size: `40mm`,
        Material: `Oystersteel`,
        ShellMaterial: `Oystersteel`,
        detail: ` là một trong những thiết kế được ra mắt vào năm 2021. Đồng hồ là một sự tái khẳng định tinh thần “sang trọng đương đại” của mẫu đồng hồ Aquanaut Chronograph, lần đầu tiên được xuất hiện trong một lớp vỏ bằng vàng trắng. Bảo vệ mặt số là lớp tinh tể sapphire trong suốt để lộ bên dưới là mặt số màu xanh kaki mang xu hướng hiện đại với họa tiết bàn cờ khắc nổi. Trung tâm mặt số là bộ kim giờ, kim phút và kim giây với lớp phủ phát quang màu trắng, cho phép người đeo có thể xem giờ ngay cả khi ở trong điều kiện thiếu ánh sáng. Hơn nữa, để tạo nên nét chấm phá cho mặt số thì thay vì sử dụng một kiểu cọc số đơn lẻ, thương hiệu đã kết hợp cả cọc số Ả Rập và vạch chỉ giờ cho chiếc đồng hồ này. Tại vị trí 3 giờ là một ô cửa sổ lịch ngày. Bộ đếm chronograph 60 phút ở vị trí 6 giờ cũng có hình bát giác bo tròn giống khung bezel.
        Sản phẩm còn được trang bị bộ máy CH 28‑520 C, hoạt động ở tần số 28.800vph và có mức dự trữ năng lượng tối đa lên đến 55 giờ. Có thể nhìn thấy qua mặt kính sau là cân bằng Gyromax với lò xo cân bằng Spiromax, con dấu Patek Philippe và cánh quạt được làm bằng vàng hồng 21k. Đồng hồ có khả năng kháng nước ở độ sâu tối đa 120 mét.`


    },
    {
        id: 39,
        name: 'Đồng Hồ Rolex Cellini Time 50509-0016 Mặt Số Trắng Dây Đeo Da 39mm',
        image: 'rolex24.png',
        price: 450000000,
        brand: `Rolex`,
        Code: ` 50509-0016`,
        Size: `39mm`,
        Material: `Dây da`,
        ShellMaterial: `Vàng trắng 18ct`,
        detail: ` là một trong những thiết kế được ra mắt vào năm 2021. Đồng hồ là một sự tái khẳng định tinh thần “sang trọng đương đại” của mẫu đồng hồ Aquanaut Chronograph, lần đầu tiên được xuất hiện trong một lớp vỏ bằng vàng trắng. Bảo vệ mặt số là lớp tinh tể sapphire trong suốt để lộ bên dưới là mặt số màu xanh kaki mang xu hướng hiện đại với họa tiết bàn cờ khắc nổi. Trung tâm mặt số là bộ kim giờ, kim phút và kim giây với lớp phủ phát quang màu trắng, cho phép người đeo có thể xem giờ ngay cả khi ở trong điều kiện thiếu ánh sáng. Hơn nữa, để tạo nên nét chấm phá cho mặt số thì thay vì sử dụng một kiểu cọc số đơn lẻ, thương hiệu đã kết hợp cả cọc số Ả Rập và vạch chỉ giờ cho chiếc đồng hồ này. Tại vị trí 3 giờ là một ô cửa sổ lịch ngày. Bộ đếm chronograph 60 phút ở vị trí 6 giờ cũng có hình bát giác bo tròn giống khung bezel.
        Sản phẩm còn được trang bị bộ máy CH 28‑520 C, hoạt động ở tần số 28.800vph và có mức dự trữ năng lượng tối đa lên đến 55 giờ. Có thể nhìn thấy qua mặt kính sau là cân bằng Gyromax với lò xo cân bằng Spiromax, con dấu Patek Philippe và cánh quạt được làm bằng vàng hồng 21k. Đồng hồ có khả năng kháng nước ở độ sâu tối đa 120 mét.`


    },
    {
        id: 40,
        name: 'Đồng Hồ Rolex Cosmograph Daytona 40 116505-0014 Mặt Số Thiên Thạch Dây Oyster Vàng Hồng',
        image: 'rolex25.png',
        price: 1318078800,
        brand: `Rolex`,
        Code: ` 116505-0014`,
        Size: `40mm`,
        Material: `Everose Gole 18k`,
        ShellMaterial: `Everose Gole 18k`,
        detail: ` là một trong những thiết kế được ra mắt vào năm 2021. Đồng hồ là một sự tái khẳng định tinh thần “sang trọng đương đại” của mẫu đồng hồ Aquanaut Chronograph, lần đầu tiên được xuất hiện trong một lớp vỏ bằng vàng trắng. Bảo vệ mặt số là lớp tinh tể sapphire trong suốt để lộ bên dưới là mặt số màu xanh kaki mang xu hướng hiện đại với họa tiết bàn cờ khắc nổi. Trung tâm mặt số là bộ kim giờ, kim phút và kim giây với lớp phủ phát quang màu trắng, cho phép người đeo có thể xem giờ ngay cả khi ở trong điều kiện thiếu ánh sáng. Hơn nữa, để tạo nên nét chấm phá cho mặt số thì thay vì sử dụng một kiểu cọc số đơn lẻ, thương hiệu đã kết hợp cả cọc số Ả Rập và vạch chỉ giờ cho chiếc đồng hồ này. Tại vị trí 3 giờ là một ô cửa sổ lịch ngày. Bộ đếm chronograph 60 phút ở vị trí 6 giờ cũng có hình bát giác bo tròn giống khung bezel.
        Sản phẩm còn được trang bị bộ máy CH 28‑520 C, hoạt động ở tần số 28.800vph và có mức dự trữ năng lượng tối đa lên đến 55 giờ. Có thể nhìn thấy qua mặt kính sau là cân bằng Gyromax với lò xo cân bằng Spiromax, con dấu Patek Philippe và cánh quạt được làm bằng vàng hồng 21k. Đồng hồ có khả năng kháng nước ở độ sâu tối đa 120 mét.`

    },
    {
        id: 41,
        name: 'Đồng Hồ Richard Mille RM 014 Manual Winding Tourbillon Marine',
        image: 'richardmille1.png',
        price: 6200000000,
        brand: `RichardMille`,
        Code: `  RM 014`,
        Size: `45x38.90mm`,
        Material: `Cao su`,
        ShellMaterial: `Bạch kim`,
        detail: ` là một trong những thiết kế được ra mắt vào năm 2021. Đồng hồ là một sự tái khẳng định tinh thần “sang trọng đương đại” của mẫu đồng hồ Aquanaut Chronograph, lần đầu tiên được xuất hiện trong một lớp vỏ bằng vàng trắng. Bảo vệ mặt số là lớp tinh tể sapphire trong suốt để lộ bên dưới là mặt số màu xanh kaki mang xu hướng hiện đại với họa tiết bàn cờ khắc nổi. Trung tâm mặt số là bộ kim giờ, kim phút và kim giây với lớp phủ phát quang màu trắng, cho phép người đeo có thể xem giờ ngay cả khi ở trong điều kiện thiếu ánh sáng. Hơn nữa, để tạo nên nét chấm phá cho mặt số thì thay vì sử dụng một kiểu cọc số đơn lẻ, thương hiệu đã kết hợp cả cọc số Ả Rập và vạch chỉ giờ cho chiếc đồng hồ này. Tại vị trí 3 giờ là một ô cửa sổ lịch ngày. Bộ đếm chronograph 60 phút ở vị trí 6 giờ cũng có hình bát giác bo tròn giống khung bezel.
        Sản phẩm còn được trang bị bộ máy CH 28‑520 C, hoạt động ở tần số 28.800vph và có mức dự trữ năng lượng tối đa lên đến 55 giờ. Có thể nhìn thấy qua mặt kính sau là cân bằng Gyromax với lò xo cân bằng Spiromax, con dấu Patek Philippe và cánh quạt được làm bằng vàng hồng 21k. Đồng hồ có khả năng kháng nước ở độ sâu tối đa 120 mét.`

    }
    ,
    {
        id: 42,
        name: 'Đồng Hồ Richard Mille RM 015 Ceramic Blue Parini Navi Cup Dual Time Tourbillon',
        image: 'richardmille2.png',
        price: 12000000000,
        brand: `RichardMille`,
        Code: `Blue Parini Navi `,
        Size: `48mmx39,3mm`,
        Material: `Cao su`,
        ShellMaterial: `Ceramic`,
        detail: ` là một trong những thiết kế được ra mắt vào năm 2021. Đồng hồ là một sự tái khẳng định tinh thần “sang trọng đương đại” của mẫu đồng hồ Aquanaut Chronograph, lần đầu tiên được xuất hiện trong một lớp vỏ bằng vàng trắng. Bảo vệ mặt số là lớp tinh tể sapphire trong suốt để lộ bên dưới là mặt số màu xanh kaki mang xu hướng hiện đại với họa tiết bàn cờ khắc nổi. Trung tâm mặt số là bộ kim giờ, kim phút và kim giây với lớp phủ phát quang màu trắng, cho phép người đeo có thể xem giờ ngay cả khi ở trong điều kiện thiếu ánh sáng. Hơn nữa, để tạo nên nét chấm phá cho mặt số thì thay vì sử dụng một kiểu cọc số đơn lẻ, thương hiệu đã kết hợp cả cọc số Ả Rập và vạch chỉ giờ cho chiếc đồng hồ này. Tại vị trí 3 giờ là một ô cửa sổ lịch ngày. Bộ đếm chronograph 60 phút ở vị trí 6 giờ cũng có hình bát giác bo tròn giống khung bezel.
        Sản phẩm còn được trang bị bộ máy CH 28‑520 C, hoạt động ở tần số 28.800vph và có mức dự trữ năng lượng tối đa lên đến 55 giờ. Có thể nhìn thấy qua mặt kính sau là cân bằng Gyromax với lò xo cân bằng Spiromax, con dấu Patek Philippe và cánh quạt được làm bằng vàng hồng 21k. Đồng hồ có khả năng kháng nước ở độ sâu tối đa 120 mét.`

    },
    {
        id: 43,
        name: 'Đồng Hồ Richard Mille RM 015 Dual Time Zone Rose Gold Tourbillon',
        image: 'richardmille3.png',
        price: 6800000000,
        brand: `RichardMille`,
        Code: ` RM 015`,
        Size: `48mmx39,3mm`,
        Material: `Da cá sấu`,
        ShellMaterial: `Vàng Hồng`,
        detail: ` là một trong những thiết kế được ra mắt vào năm 2021. Đồng hồ là một sự tái khẳng định tinh thần “sang trọng đương đại” của mẫu đồng hồ Aquanaut Chronograph, lần đầu tiên được xuất hiện trong một lớp vỏ bằng vàng trắng. Bảo vệ mặt số là lớp tinh tể sapphire trong suốt để lộ bên dưới là mặt số màu xanh kaki mang xu hướng hiện đại với họa tiết bàn cờ khắc nổi. Trung tâm mặt số là bộ kim giờ, kim phút và kim giây với lớp phủ phát quang màu trắng, cho phép người đeo có thể xem giờ ngay cả khi ở trong điều kiện thiếu ánh sáng. Hơn nữa, để tạo nên nét chấm phá cho mặt số thì thay vì sử dụng một kiểu cọc số đơn lẻ, thương hiệu đã kết hợp cả cọc số Ả Rập và vạch chỉ giờ cho chiếc đồng hồ này. Tại vị trí 3 giờ là một ô cửa sổ lịch ngày. Bộ đếm chronograph 60 phút ở vị trí 6 giờ cũng có hình bát giác bo tròn giống khung bezel.
        Sản phẩm còn được trang bị bộ máy CH 28‑520 C, hoạt động ở tần số 28.800vph và có mức dự trữ năng lượng tối đa lên đến 55 giờ. Có thể nhìn thấy qua mặt kính sau là cân bằng Gyromax với lò xo cân bằng Spiromax, con dấu Patek Philippe và cánh quạt được làm bằng vàng hồng 21k. Đồng hồ có khả năng kháng nước ở độ sâu tối đa 120 mét.`

    },
    {
        id: 44,
        name: 'Đồng Hồ Richard Mille RM 015 Dual Time Zone Rose Gold Tourbillon',
        image: 'richardmille4.png',
        price: 6800000000,
        brand: `RichardMille`,
        Code: ` RM 015`,
        Size: `48mmx39,3mm`,
        Material: `Da cá sấu`,
        ShellMaterial: `Vàng Hồng`,
        detail: ` là một trong những thiết kế được ra mắt vào năm 2021. Đồng hồ là một sự tái khẳng định tinh thần “sang trọng đương đại” của mẫu đồng hồ Aquanaut Chronograph, lần đầu tiên được xuất hiện trong một lớp vỏ bằng vàng trắng. Bảo vệ mặt số là lớp tinh tể sapphire trong suốt để lộ bên dưới là mặt số màu xanh kaki mang xu hướng hiện đại với họa tiết bàn cờ khắc nổi. Trung tâm mặt số là bộ kim giờ, kim phút và kim giây với lớp phủ phát quang màu trắng, cho phép người đeo có thể xem giờ ngay cả khi ở trong điều kiện thiếu ánh sáng. Hơn nữa, để tạo nên nét chấm phá cho mặt số thì thay vì sử dụng một kiểu cọc số đơn lẻ, thương hiệu đã kết hợp cả cọc số Ả Rập và vạch chỉ giờ cho chiếc đồng hồ này. Tại vị trí 3 giờ là một ô cửa sổ lịch ngày. Bộ đếm chronograph 60 phút ở vị trí 6 giờ cũng có hình bát giác bo tròn giống khung bezel.
        Sản phẩm còn được trang bị bộ máy CH 28‑520 C, hoạt động ở tần số 28.800vph và có mức dự trữ năng lượng tối đa lên đến 55 giờ. Có thể nhìn thấy qua mặt kính sau là cân bằng Gyromax với lò xo cân bằng Spiromax, con dấu Patek Philippe và cánh quạt được làm bằng vàng hồng 21k. Đồng hồ có khả năng kháng nước ở độ sâu tối đa 120 mét.`


    },
    {
        id: 45,
        name: 'Đồng hồ Richard Mille RM 028 Automatic Winding Divers Watch',
        image: 'richardmille5.png',
        price: 3800000000,
        brand: `RichardMille`,
        Code: `  RM 028 `,
        Size: `48mmx39,3mm`,
        Material: `Cao su đen`,
        ShellMaterial: `Thép không gỉ`,
        detail: ` là một trong những thiết kế được ra mắt vào năm 2021. Đồng hồ là một sự tái khẳng định tinh thần “sang trọng đương đại” của mẫu đồng hồ Aquanaut Chronograph, lần đầu tiên được xuất hiện trong một lớp vỏ bằng vàng trắng. Bảo vệ mặt số là lớp tinh tể sapphire trong suốt để lộ bên dưới là mặt số màu xanh kaki mang xu hướng hiện đại với họa tiết bàn cờ khắc nổi. Trung tâm mặt số là bộ kim giờ, kim phút và kim giây với lớp phủ phát quang màu trắng, cho phép người đeo có thể xem giờ ngay cả khi ở trong điều kiện thiếu ánh sáng. Hơn nữa, để tạo nên nét chấm phá cho mặt số thì thay vì sử dụng một kiểu cọc số đơn lẻ, thương hiệu đã kết hợp cả cọc số Ả Rập và vạch chỉ giờ cho chiếc đồng hồ này. Tại vị trí 3 giờ là một ô cửa sổ lịch ngày. Bộ đếm chronograph 60 phút ở vị trí 6 giờ cũng có hình bát giác bo tròn giống khung bezel.
        Sản phẩm còn được trang bị bộ máy CH 28‑520 C, hoạt động ở tần số 28.800vph và có mức dự trữ năng lượng tối đa lên đến 55 giờ. Có thể nhìn thấy qua mặt kính sau là cân bằng Gyromax với lò xo cân bằng Spiromax, con dấu Patek Philippe và cánh quạt được làm bằng vàng hồng 21k. Đồng hồ có khả năng kháng nước ở độ sâu tối đa 120 mét.`

    },
    {
        id: 46,
        name: 'Đồng Hồ Richard Mille RM 031 Manual Winding High Performance Chronometer',
        image: 'richardmille6.png',
        price: 30000000000,
        brand: `RichardMille`,
        Code: `  RM 031`,
        Size: `48mmx39,3mm`,
        Material: `Cao su đen`,
        ShellMaterial: `Titan`,
        detail: ` là một trong những thiết kế được ra mắt vào năm 2021. Đồng hồ là một sự tái khẳng định tinh thần “sang trọng đương đại” của mẫu đồng hồ Aquanaut Chronograph, lần đầu tiên được xuất hiện trong một lớp vỏ bằng vàng trắng. Bảo vệ mặt số là lớp tinh tể sapphire trong suốt để lộ bên dưới là mặt số màu xanh kaki mang xu hướng hiện đại với họa tiết bàn cờ khắc nổi. Trung tâm mặt số là bộ kim giờ, kim phút và kim giây với lớp phủ phát quang màu trắng, cho phép người đeo có thể xem giờ ngay cả khi ở trong điều kiện thiếu ánh sáng. Hơn nữa, để tạo nên nét chấm phá cho mặt số thì thay vì sử dụng một kiểu cọc số đơn lẻ, thương hiệu đã kết hợp cả cọc số Ả Rập và vạch chỉ giờ cho chiếc đồng hồ này. Tại vị trí 3 giờ là một ô cửa sổ lịch ngày. Bộ đếm chronograph 60 phút ở vị trí 6 giờ cũng có hình bát giác bo tròn giống khung bezel.
        Sản phẩm còn được trang bị bộ máy CH 28‑520 C, hoạt động ở tần số 28.800vph và có mức dự trữ năng lượng tối đa lên đến 55 giờ. Có thể nhìn thấy qua mặt kính sau là cân bằng Gyromax với lò xo cân bằng Spiromax, con dấu Patek Philippe và cánh quạt được làm bằng vàng hồng 21k. Đồng hồ có khả năng kháng nước ở độ sâu tối đa 120 mét.`

    },
    {
        id: 47,
        name: 'Đồng Hồ Richard Mille RM 038 Bubba Watson Tourbillon',
        image: 'richardmille7.png',
        price: 24500000000,
        brand: `RichardMille`,
        Code: `  RM 038`,
        Size: `48mmx39,3mm`,
        Material: `Cao su `,
        ShellMaterial: `Thép không gỉ`,
        detail: ` là một trong những thiết kế được ra mắt vào năm 2021. Đồng hồ là một sự tái khẳng định tinh thần “sang trọng đương đại” của mẫu đồng hồ Aquanaut Chronograph, lần đầu tiên được xuất hiện trong một lớp vỏ bằng vàng trắng. Bảo vệ mặt số là lớp tinh tể sapphire trong suốt để lộ bên dưới là mặt số màu xanh kaki mang xu hướng hiện đại với họa tiết bàn cờ khắc nổi. Trung tâm mặt số là bộ kim giờ, kim phút và kim giây với lớp phủ phát quang màu trắng, cho phép người đeo có thể xem giờ ngay cả khi ở trong điều kiện thiếu ánh sáng. Hơn nữa, để tạo nên nét chấm phá cho mặt số thì thay vì sử dụng một kiểu cọc số đơn lẻ, thương hiệu đã kết hợp cả cọc số Ả Rập và vạch chỉ giờ cho chiếc đồng hồ này. Tại vị trí 3 giờ là một ô cửa sổ lịch ngày. Bộ đếm chronograph 60 phút ở vị trí 6 giờ cũng có hình bát giác bo tròn giống khung bezel.
        Sản phẩm còn được trang bị bộ máy CH 28‑520 C, hoạt động ở tần số 28.800vph và có mức dự trữ năng lượng tối đa lên đến 55 giờ. Có thể nhìn thấy qua mặt kính sau là cân bằng Gyromax với lò xo cân bằng Spiromax, con dấu Patek Philippe và cánh quạt được làm bằng vàng hồng 21k. Đồng hồ có khả năng kháng nước ở độ sâu tối đa 120 mét.`

    },
    {
        id: 48,
        name: 'Đồng hồ Richard Mille RM 050 Tourbillon Chronograph Felipe Massa',
        image: 'richardmille8.png',
        price: 35000000000,
        brand: `RichardMille`,
        Code: `  RM 050 `,
        Size: `48mmx39,3mm`,
        Material: `Cao su đen`,
        ShellMaterial: `Gồm đen`,
        detail: ` là một trong những thiết kế được ra mắt vào năm 2021. Đồng hồ là một sự tái khẳng định tinh thần “sang trọng đương đại” của mẫu đồng hồ Aquanaut Chronograph, lần đầu tiên được xuất hiện trong một lớp vỏ bằng vàng trắng. Bảo vệ mặt số là lớp tinh tể sapphire trong suốt để lộ bên dưới là mặt số màu xanh kaki mang xu hướng hiện đại với họa tiết bàn cờ khắc nổi. Trung tâm mặt số là bộ kim giờ, kim phút và kim giây với lớp phủ phát quang màu trắng, cho phép người đeo có thể xem giờ ngay cả khi ở trong điều kiện thiếu ánh sáng. Hơn nữa, để tạo nên nét chấm phá cho mặt số thì thay vì sử dụng một kiểu cọc số đơn lẻ, thương hiệu đã kết hợp cả cọc số Ả Rập và vạch chỉ giờ cho chiếc đồng hồ này. Tại vị trí 3 giờ là một ô cửa sổ lịch ngày. Bộ đếm chronograph 60 phút ở vị trí 6 giờ cũng có hình bát giác bo tròn giống khung bezel.
        Sản phẩm còn được trang bị bộ máy CH 28‑520 C, hoạt động ở tần số 28.800vph và có mức dự trữ năng lượng tối đa lên đến 55 giờ. Có thể nhìn thấy qua mặt kính sau là cân bằng Gyromax với lò xo cân bằng Spiromax, con dấu Patek Philippe và cánh quạt được làm bằng vàng hồng 21k. Đồng hồ có khả năng kháng nước ở độ sâu tối đa 120 mét.`


    },
    {
        id: 49,
        name: 'Đồng Hồ Richard Mille RM 005 Titanium Automatic',
        image: 'richardmille9.png',
        price: 2300000000,
        brand: `RichardMille`,
        Code: `  RM 005 `,
        Size: `48mmx39,3mm`,
        Material: `Dây Cao su`,
        ShellMaterial: `Vàng Trắng`,
        detail: ` là một trong những thiết kế được ra mắt vào năm 2021. Đồng hồ là một sự tái khẳng định tinh thần “sang trọng đương đại” của mẫu đồng hồ Aquanaut Chronograph, lần đầu tiên được xuất hiện trong một lớp vỏ bằng vàng trắng. Bảo vệ mặt số là lớp tinh tể sapphire trong suốt để lộ bên dưới là mặt số màu xanh kaki mang xu hướng hiện đại với họa tiết bàn cờ khắc nổi. Trung tâm mặt số là bộ kim giờ, kim phút và kim giây với lớp phủ phát quang màu trắng, cho phép người đeo có thể xem giờ ngay cả khi ở trong điều kiện thiếu ánh sáng. Hơn nữa, để tạo nên nét chấm phá cho mặt số thì thay vì sử dụng một kiểu cọc số đơn lẻ, thương hiệu đã kết hợp cả cọc số Ả Rập và vạch chỉ giờ cho chiếc đồng hồ này. Tại vị trí 3 giờ là một ô cửa sổ lịch ngày. Bộ đếm chronograph 60 phút ở vị trí 6 giờ cũng có hình bát giác bo tròn giống khung bezel.
        Sản phẩm còn được trang bị bộ máy CH 28‑520 C, hoạt động ở tần số 28.800vph và có mức dự trữ năng lượng tối đa lên đến 55 giờ. Có thể nhìn thấy qua mặt kính sau là cân bằng Gyromax với lò xo cân bằng Spiromax, con dấu Patek Philippe và cánh quạt được làm bằng vàng hồng 21k. Đồng hồ có khả năng kháng nước ở độ sâu tối đa 120 mét.`

    },
    {
        id: 50,
        name: 'Đồng hồ Richard Mille RM 007 White Gold Auto Orange Lip',
        image: 'richardmille10.png',
        price: 4770000000,
        brand: `RichardMille`,
        Code: `  RM 007 `,
        Size: `48mmx39,3mm`,
        Material: `Cao su`,
        ShellMaterial: `White Gold`,
        detail: ` là một trong những thiết kế được ra mắt vào năm 2021. Đồng hồ là một sự tái khẳng định tinh thần “sang trọng đương đại” của mẫu đồng hồ Aquanaut Chronograph, lần đầu tiên được xuất hiện trong một lớp vỏ bằng vàng trắng. Bảo vệ mặt số là lớp tinh tể sapphire trong suốt để lộ bên dưới là mặt số màu xanh kaki mang xu hướng hiện đại với họa tiết bàn cờ khắc nổi. Trung tâm mặt số là bộ kim giờ, kim phút và kim giây với lớp phủ phát quang màu trắng, cho phép người đeo có thể xem giờ ngay cả khi ở trong điều kiện thiếu ánh sáng. Hơn nữa, để tạo nên nét chấm phá cho mặt số thì thay vì sử dụng một kiểu cọc số đơn lẻ, thương hiệu đã kết hợp cả cọc số Ả Rập và vạch chỉ giờ cho chiếc đồng hồ này. Tại vị trí 3 giờ là một ô cửa sổ lịch ngày. Bộ đếm chronograph 60 phút ở vị trí 6 giờ cũng có hình bát giác bo tròn giống khung bezel.
        Sản phẩm còn được trang bị bộ máy CH 28‑520 C, hoạt động ở tần số 28.800vph và có mức dự trữ năng lượng tối đa lên đến 55 giờ. Có thể nhìn thấy qua mặt kính sau là cân bằng Gyromax với lò xo cân bằng Spiromax, con dấu Patek Philippe và cánh quạt được làm bằng vàng hồng 21k. Đồng hồ có khả năng kháng nước ở độ sâu tối đa 120 mét.`

    },
    {
        id: 51,
        name: 'Đồng Hồ Richard Mille RM 002-V1 Tourbillon',
        image: 'richardmille11.png',
        price: 6800000000,
        brand: `RichardMille`,
        Code: ` RM 002-V1`,
        Size: `48mmx39,3mm`,
        Material: `Da`,
        ShellMaterial: `Vàng Hồng`,
        detail: ` là một trong những thiết kế được ra mắt vào năm 2021. Đồng hồ là một sự tái khẳng định tinh thần “sang trọng đương đại” của mẫu đồng hồ Aquanaut Chronograph, lần đầu tiên được xuất hiện trong một lớp vỏ bằng vàng trắng. Bảo vệ mặt số là lớp tinh tể sapphire trong suốt để lộ bên dưới là mặt số màu xanh kaki mang xu hướng hiện đại với họa tiết bàn cờ khắc nổi. Trung tâm mặt số là bộ kim giờ, kim phút và kim giây với lớp phủ phát quang màu trắng, cho phép người đeo có thể xem giờ ngay cả khi ở trong điều kiện thiếu ánh sáng. Hơn nữa, để tạo nên nét chấm phá cho mặt số thì thay vì sử dụng một kiểu cọc số đơn lẻ, thương hiệu đã kết hợp cả cọc số Ả Rập và vạch chỉ giờ cho chiếc đồng hồ này. Tại vị trí 3 giờ là một ô cửa sổ lịch ngày. Bộ đếm chronograph 60 phút ở vị trí 6 giờ cũng có hình bát giác bo tròn giống khung bezel.
        Sản phẩm còn được trang bị bộ máy CH 28‑520 C, hoạt động ở tần số 28.800vph và có mức dự trữ năng lượng tối đa lên đến 55 giờ. Có thể nhìn thấy qua mặt kính sau là cân bằng Gyromax với lò xo cân bằng Spiromax, con dấu Patek Philippe và cánh quạt được làm bằng vàng hồng 21k. Đồng hồ có khả năng kháng nước ở độ sâu tối đa 120 mét.`

    },
    {
        id: 52,
        name: 'Đồng Hồ Richard Mille RM 002-V2 Tourbillon',
        image: 'richardmille12.png',
        price: 7200000000,
        brand: `RichardMille`,
        Code: ` RM 002-V2`,
        Size: `48mmx39,3mm`,
        Material: `Dây da`,
        ShellMaterial: `Vàng Hồng`,
        detail: ` là một trong những thiết kế được ra mắt vào năm 2021. Đồng hồ là một sự tái khẳng định tinh thần “sang trọng đương đại” của mẫu đồng hồ Aquanaut Chronograph, lần đầu tiên được xuất hiện trong một lớp vỏ bằng vàng trắng. Bảo vệ mặt số là lớp tinh tể sapphire trong suốt để lộ bên dưới là mặt số màu xanh kaki mang xu hướng hiện đại với họa tiết bàn cờ khắc nổi. Trung tâm mặt số là bộ kim giờ, kim phút và kim giây với lớp phủ phát quang màu trắng, cho phép người đeo có thể xem giờ ngay cả khi ở trong điều kiện thiếu ánh sáng. Hơn nữa, để tạo nên nét chấm phá cho mặt số thì thay vì sử dụng một kiểu cọc số đơn lẻ, thương hiệu đã kết hợp cả cọc số Ả Rập và vạch chỉ giờ cho chiếc đồng hồ này. Tại vị trí 3 giờ là một ô cửa sổ lịch ngày. Bộ đếm chronograph 60 phút ở vị trí 6 giờ cũng có hình bát giác bo tròn giống khung bezel.
        Sản phẩm còn được trang bị bộ máy CH 28‑520 C, hoạt động ở tần số 28.800vph và có mức dự trữ năng lượng tối đa lên đến 55 giờ. Có thể nhìn thấy qua mặt kính sau là cân bằng Gyromax với lò xo cân bằng Spiromax, con dấu Patek Philippe và cánh quạt được làm bằng vàng hồng 21k. Đồng hồ có khả năng kháng nước ở độ sâu tối đa 120 mét.`

    },
    {
        id: 53,
        name: 'Đồng Hồ Richard Mille RM 003-V2 Black Titanium Edition',
        image: 'richardmille13.png',
        price: 7200000000,
        brand: `RichardMille`,
        Code: `RM 003-V2 `,
        Size: `48mmx39,3mm`,
        Material: `Cao su đen`,
        ShellMaterial: `Black Titanium`,
        detail: ` là một trong những thiết kế được ra mắt vào năm 2021. Đồng hồ là một sự tái khẳng định tinh thần “sang trọng đương đại” của mẫu đồng hồ Aquanaut Chronograph, lần đầu tiên được xuất hiện trong một lớp vỏ bằng vàng trắng. Bảo vệ mặt số là lớp tinh tể sapphire trong suốt để lộ bên dưới là mặt số màu xanh kaki mang xu hướng hiện đại với họa tiết bàn cờ khắc nổi. Trung tâm mặt số là bộ kim giờ, kim phút và kim giây với lớp phủ phát quang màu trắng, cho phép người đeo có thể xem giờ ngay cả khi ở trong điều kiện thiếu ánh sáng. Hơn nữa, để tạo nên nét chấm phá cho mặt số thì thay vì sử dụng một kiểu cọc số đơn lẻ, thương hiệu đã kết hợp cả cọc số Ả Rập và vạch chỉ giờ cho chiếc đồng hồ này. Tại vị trí 3 giờ là một ô cửa sổ lịch ngày. Bộ đếm chronograph 60 phút ở vị trí 6 giờ cũng có hình bát giác bo tròn giống khung bezel.
        Sản phẩm còn được trang bị bộ máy CH 28‑520 C, hoạt động ở tần số 28.800vph và có mức dự trữ năng lượng tối đa lên đến 55 giờ. Có thể nhìn thấy qua mặt kính sau là cân bằng Gyromax với lò xo cân bằng Spiromax, con dấu Patek Philippe và cánh quạt được làm bằng vàng hồng 21k. Đồng hồ có khả năng kháng nước ở độ sâu tối đa 120 mét.`

    },
    {
        id: 54,
        name: 'Đồng Hồ Richard Mille RM 004-V1 Split-Seconds Chronograph',
        image: 'richardmille14.png',
        price: 200000000000,
        brand: `RichardMille`,
        Code: ` RM 004-V1  `,
        Size: `48mmx39,3mm`,
        Material: `Cao su `,
        ShellMaterial: `Vàng Hồng 18k`,
        detail: ` là một trong những thiết kế được ra mắt vào năm 2021. Đồng hồ là một sự tái khẳng định tinh thần “sang trọng đương đại” của mẫu đồng hồ Aquanaut Chronograph, lần đầu tiên được xuất hiện trong một lớp vỏ bằng vàng trắng. Bảo vệ mặt số là lớp tinh tể sapphire trong suốt để lộ bên dưới là mặt số màu xanh kaki mang xu hướng hiện đại với họa tiết bàn cờ khắc nổi. Trung tâm mặt số là bộ kim giờ, kim phút và kim giây với lớp phủ phát quang màu trắng, cho phép người đeo có thể xem giờ ngay cả khi ở trong điều kiện thiếu ánh sáng. Hơn nữa, để tạo nên nét chấm phá cho mặt số thì thay vì sử dụng một kiểu cọc số đơn lẻ, thương hiệu đã kết hợp cả cọc số Ả Rập và vạch chỉ giờ cho chiếc đồng hồ này. Tại vị trí 3 giờ là một ô cửa sổ lịch ngày. Bộ đếm chronograph 60 phút ở vị trí 6 giờ cũng có hình bát giác bo tròn giống khung bezel.
        Sản phẩm còn được trang bị bộ máy CH 28‑520 C, hoạt động ở tần số 28.800vph và có mức dự trữ năng lượng tối đa lên đến 55 giờ. Có thể nhìn thấy qua mặt kính sau là cân bằng Gyromax với lò xo cân bằng Spiromax, con dấu Patek Philippe và cánh quạt được làm bằng vàng hồng 21k. Đồng hồ có khả năng kháng nước ở độ sâu tối đa 120 mét.`


    },
    {
        id: 55,
        name: 'Đồng Hồ Richard Mille RM 004-V3 Manual Winding Split-Seconds Chronograph',
        image: 'richardmille15.png',
        price: 26000000000,
        brand: `RichardMille`,
        Code: ` RM 004-V3 `,
        Size: `48mmx39,3mm`,
        Material: `Cao su`,
        ShellMaterial: `Carbon Fiber`,
        detail: ` là một trong những thiết kế được ra mắt vào năm 2021. Đồng hồ là một sự tái khẳng định tinh thần “sang trọng đương đại” của mẫu đồng hồ Aquanaut Chronograph, lần đầu tiên được xuất hiện trong một lớp vỏ bằng vàng trắng. Bảo vệ mặt số là lớp tinh tể sapphire trong suốt để lộ bên dưới là mặt số màu xanh kaki mang xu hướng hiện đại với họa tiết bàn cờ khắc nổi. Trung tâm mặt số là bộ kim giờ, kim phút và kim giây với lớp phủ phát quang màu trắng, cho phép người đeo có thể xem giờ ngay cả khi ở trong điều kiện thiếu ánh sáng. Hơn nữa, để tạo nên nét chấm phá cho mặt số thì thay vì sử dụng một kiểu cọc số đơn lẻ, thương hiệu đã kết hợp cả cọc số Ả Rập và vạch chỉ giờ cho chiếc đồng hồ này. Tại vị trí 3 giờ là một ô cửa sổ lịch ngày. Bộ đếm chronograph 60 phút ở vị trí 6 giờ cũng có hình bát giác bo tròn giống khung bezel.
        Sản phẩm còn được trang bị bộ máy CH 28‑520 C, hoạt động ở tần số 28.800vph và có mức dự trữ năng lượng tối đa lên đến 55 giờ. Có thể nhìn thấy qua mặt kính sau là cân bằng Gyromax với lò xo cân bằng Spiromax, con dấu Patek Philippe và cánh quạt được làm bằng vàng hồng 21k. Đồng hồ có khả năng kháng nước ở độ sâu tối đa 120 mét.`

    },
    {
        id: 56,
        name: 'Đồng Hồ Richard Mille RM 006 Tourbillon Felipe Massa',
        image: 'richardmille16.png',
        price: 36000000000,
        brand: `RichardMille`,
        Code: ` RM 006 `,
        Size: `48mmx39,3mm`,
        Material: `Cao su`,
        ShellMaterial: `Titanium & Carbon Fiber`,
        detail: ` là một trong những thiết kế được ra mắt vào năm 2021. Đồng hồ là một sự tái khẳng định tinh thần “sang trọng đương đại” của mẫu đồng hồ Aquanaut Chronograph, lần đầu tiên được xuất hiện trong một lớp vỏ bằng vàng trắng. Bảo vệ mặt số là lớp tinh tể sapphire trong suốt để lộ bên dưới là mặt số màu xanh kaki mang xu hướng hiện đại với họa tiết bàn cờ khắc nổi. Trung tâm mặt số là bộ kim giờ, kim phút và kim giây với lớp phủ phát quang màu trắng, cho phép người đeo có thể xem giờ ngay cả khi ở trong điều kiện thiếu ánh sáng. Hơn nữa, để tạo nên nét chấm phá cho mặt số thì thay vì sử dụng một kiểu cọc số đơn lẻ, thương hiệu đã kết hợp cả cọc số Ả Rập và vạch chỉ giờ cho chiếc đồng hồ này. Tại vị trí 3 giờ là một ô cửa sổ lịch ngày. Bộ đếm chronograph 60 phút ở vị trí 6 giờ cũng có hình bát giác bo tròn giống khung bezel.
        Sản phẩm còn được trang bị bộ máy CH 28‑520 C, hoạt động ở tần số 28.800vph và có mức dự trữ năng lượng tối đa lên đến 55 giờ. Có thể nhìn thấy qua mặt kính sau là cân bằng Gyromax với lò xo cân bằng Spiromax, con dấu Patek Philippe và cánh quạt được làm bằng vàng hồng 21k. Đồng hồ có khả năng kháng nước ở độ sâu tối đa 120 mét.`

    },
    {
        id: 57,
        name: 'Đồng Hồ Richard Mille RM 007 Ladies Pearl Full Diamonds',
        image: 'richardmille17.png',
        price: 3900000000,
        brand: `RichardMille`,
        Code: ` RM 007 Ladies Pearl Full Diamonds `,
        Size: `48mmx39,3mm`,
        Material: `Dây da`,
        ShellMaterial: `White Gold`,
        detail: ` là một trong những thiết kế được ra mắt vào năm 2021. Đồng hồ là một sự tái khẳng định tinh thần “sang trọng đương đại” của mẫu đồng hồ Aquanaut Chronograph, lần đầu tiên được xuất hiện trong một lớp vỏ bằng vàng trắng. Bảo vệ mặt số là lớp tinh tể sapphire trong suốt để lộ bên dưới là mặt số màu xanh kaki mang xu hướng hiện đại với họa tiết bàn cờ khắc nổi. Trung tâm mặt số là bộ kim giờ, kim phút và kim giây với lớp phủ phát quang màu trắng, cho phép người đeo có thể xem giờ ngay cả khi ở trong điều kiện thiếu ánh sáng. Hơn nữa, để tạo nên nét chấm phá cho mặt số thì thay vì sử dụng một kiểu cọc số đơn lẻ, thương hiệu đã kết hợp cả cọc số Ả Rập và vạch chỉ giờ cho chiếc đồng hồ này. Tại vị trí 3 giờ là một ô cửa sổ lịch ngày. Bộ đếm chronograph 60 phút ở vị trí 6 giờ cũng có hình bát giác bo tròn giống khung bezel.
        Sản phẩm còn được trang bị bộ máy CH 28‑520 C, hoạt động ở tần số 28.800vph và có mức dự trữ năng lượng tối đa lên đến 55 giờ. Có thể nhìn thấy qua mặt kính sau là cân bằng Gyromax với lò xo cân bằng Spiromax, con dấu Patek Philippe và cánh quạt được làm bằng vàng hồng 21k. Đồng hồ có khả năng kháng nước ở độ sâu tối đa 120 mét.`

    },
    {
        id: 58,
        name: 'Đồng Hồ Richard Mille RM 007 Ladies Pearl Rose Gold Full Diamonds',
        image: 'richardmille18.png',
        price: 3900000000,
        brand: `RichardMille`,
        Code: ` RM 007 Ladies Pearl RG`,
        Size: `48mmx39,3mm`,
        Material: `Dây da`,
        ShellMaterial: `Róse Gold`,
        detail: ` là một trong những thiết kế được ra mắt vào năm 2021. Đồng hồ là một sự tái khẳng định tinh thần “sang trọng đương đại” của mẫu đồng hồ Aquanaut Chronograph, lần đầu tiên được xuất hiện trong một lớp vỏ bằng vàng trắng. Bảo vệ mặt số là lớp tinh tể sapphire trong suốt để lộ bên dưới là mặt số màu xanh kaki mang xu hướng hiện đại với họa tiết bàn cờ khắc nổi. Trung tâm mặt số là bộ kim giờ, kim phút và kim giây với lớp phủ phát quang màu trắng, cho phép người đeo có thể xem giờ ngay cả khi ở trong điều kiện thiếu ánh sáng. Hơn nữa, để tạo nên nét chấm phá cho mặt số thì thay vì sử dụng một kiểu cọc số đơn lẻ, thương hiệu đã kết hợp cả cọc số Ả Rập và vạch chỉ giờ cho chiếc đồng hồ này. Tại vị trí 3 giờ là một ô cửa sổ lịch ngày. Bộ đếm chronograph 60 phút ở vị trí 6 giờ cũng có hình bát giác bo tròn giống khung bezel.
        Sản phẩm còn được trang bị bộ máy CH 28‑520 C, hoạt động ở tần số 28.800vph và có mức dự trữ năng lượng tối đa lên đến 55 giờ. Có thể nhìn thấy qua mặt kính sau là cân bằng Gyromax với lò xo cân bằng Spiromax, con dấu Patek Philippe và cánh quạt được làm bằng vàng hồng 21k. Đồng hồ có khả năng kháng nước ở độ sâu tối đa 120 mét.`


    },
    {
        id: 59,
        name: 'Đồng Hồ Richard Mille RM 007 Onyx Ladies Rose Gold',
        image: 'richardmille19.png',
        price: 2500000000,
        brand: `RichardMille`,
        Code: ` RM 007 `,
        Size: `48mmx39,3mm`,
        Material: `Dây da`,
        ShellMaterial: `Róse Gold`,
        detail: ` là một trong những thiết kế được ra mắt vào năm 2021. Đồng hồ là một sự tái khẳng định tinh thần “sang trọng đương đại” của mẫu đồng hồ Aquanaut Chronograph, lần đầu tiên được xuất hiện trong một lớp vỏ bằng vàng trắng. Bảo vệ mặt số là lớp tinh tể sapphire trong suốt để lộ bên dưới là mặt số màu xanh kaki mang xu hướng hiện đại với họa tiết bàn cờ khắc nổi. Trung tâm mặt số là bộ kim giờ, kim phút và kim giây với lớp phủ phát quang màu trắng, cho phép người đeo có thể xem giờ ngay cả khi ở trong điều kiện thiếu ánh sáng. Hơn nữa, để tạo nên nét chấm phá cho mặt số thì thay vì sử dụng một kiểu cọc số đơn lẻ, thương hiệu đã kết hợp cả cọc số Ả Rập và vạch chỉ giờ cho chiếc đồng hồ này. Tại vị trí 3 giờ là một ô cửa sổ lịch ngày. Bộ đếm chronograph 60 phút ở vị trí 6 giờ cũng có hình bát giác bo tròn giống khung bezel.
        Sản phẩm còn được trang bị bộ máy CH 28‑520 C, hoạt động ở tần số 28.800vph và có mức dự trữ năng lượng tối đa lên đến 55 giờ. Có thể nhìn thấy qua mặt kính sau là cân bằng Gyromax với lò xo cân bằng Spiromax, con dấu Patek Philippe và cánh quạt được làm bằng vàng hồng 21k. Đồng hồ có khả năng kháng nước ở độ sâu tối đa 120 mét.`


    },
    {
        id: 60,
        name: 'Đồng Hồ Richard Mille RM 010 Automatic White Gold',
        image: 'richardmille20.png',
        price: 3600000000,
        brand: `RichardMille`,
        Code: ` RM 010 Automatic `,
        Size: `48mmx39,3mm`,
        Material: `Cao su`,
        ShellMaterial: `White Gold`,
        detail: ` là một trong những thiết kế được ra mắt vào năm 2021. Đồng hồ là một sự tái khẳng định tinh thần “sang trọng đương đại” của mẫu đồng hồ Aquanaut Chronograph, lần đầu tiên được xuất hiện trong một lớp vỏ bằng vàng trắng. Bảo vệ mặt số là lớp tinh tể sapphire trong suốt để lộ bên dưới là mặt số màu xanh kaki mang xu hướng hiện đại với họa tiết bàn cờ khắc nổi. Trung tâm mặt số là bộ kim giờ, kim phút và kim giây với lớp phủ phát quang màu trắng, cho phép người đeo có thể xem giờ ngay cả khi ở trong điều kiện thiếu ánh sáng. Hơn nữa, để tạo nên nét chấm phá cho mặt số thì thay vì sử dụng một kiểu cọc số đơn lẻ, thương hiệu đã kết hợp cả cọc số Ả Rập và vạch chỉ giờ cho chiếc đồng hồ này. Tại vị trí 3 giờ là một ô cửa sổ lịch ngày. Bộ đếm chronograph 60 phút ở vị trí 6 giờ cũng có hình bát giác bo tròn giống khung bezel.
        Sản phẩm còn được trang bị bộ máy CH 28‑520 C, hoạt động ở tần số 28.800vph và có mức dự trữ năng lượng tối đa lên đến 55 giờ. Có thể nhìn thấy qua mặt kính sau là cân bằng Gyromax với lò xo cân bằng Spiromax, con dấu Patek Philippe và cánh quạt được làm bằng vàng hồng 21k. Đồng hồ có khả năng kháng nước ở độ sâu tối đa 120 mét.`


    },
    {
        id: 61,
        name: 'Đồng Hồ Richard Mille RM 010 Rose Gold Automatic Winding',
        image: 'richardmille21.png',
        price: 3600000000,
        brand: `RichardMille`,
        Code: `  RM 010 Rose Gold`,
        Size: `48mmx39,3mm`,
        Material: `Cao su`,
        ShellMaterial: `Rose Gold`,
        detail: ` là một trong những thiết kế được ra mắt vào năm 2021. Đồng hồ là một sự tái khẳng định tinh thần “sang trọng đương đại” của mẫu đồng hồ Aquanaut Chronograph, lần đầu tiên được xuất hiện trong một lớp vỏ bằng vàng trắng. Bảo vệ mặt số là lớp tinh tể sapphire trong suốt để lộ bên dưới là mặt số màu xanh kaki mang xu hướng hiện đại với họa tiết bàn cờ khắc nổi. Trung tâm mặt số là bộ kim giờ, kim phút và kim giây với lớp phủ phát quang màu trắng, cho phép người đeo có thể xem giờ ngay cả khi ở trong điều kiện thiếu ánh sáng. Hơn nữa, để tạo nên nét chấm phá cho mặt số thì thay vì sử dụng một kiểu cọc số đơn lẻ, thương hiệu đã kết hợp cả cọc số Ả Rập và vạch chỉ giờ cho chiếc đồng hồ này. Tại vị trí 3 giờ là một ô cửa sổ lịch ngày. Bộ đếm chronograph 60 phút ở vị trí 6 giờ cũng có hình bát giác bo tròn giống khung bezel.
        Sản phẩm còn được trang bị bộ máy CH 28‑520 C, hoạt động ở tần số 28.800vph và có mức dự trữ năng lượng tối đa lên đến 55 giờ. Có thể nhìn thấy qua mặt kính sau là cân bằng Gyromax với lò xo cân bằng Spiromax, con dấu Patek Philippe và cánh quạt được làm bằng vàng hồng 21k. Đồng hồ có khả năng kháng nước ở độ sâu tối đa 120 mét.`

    },
    {
        id: 62,
        name: 'Đồng Hồ Richard Mille RM 011 AET Remould Phantom Lab Sapphire Case',
        image: 'richardmille22.png',
        price: 6000000000,
        brand: `RichardMille`,
        Code: `  RM 011`,
        Size: `48mmx39,3mm`,
        Material: `Cao su`,
        ShellMaterial: `Sapphire`,
        detail: ` là một trong những thiết kế được ra mắt vào năm 2021. Đồng hồ là một sự tái khẳng định tinh thần “sang trọng đương đại” của mẫu đồng hồ Aquanaut Chronograph, lần đầu tiên được xuất hiện trong một lớp vỏ bằng vàng trắng. Bảo vệ mặt số là lớp tinh tể sapphire trong suốt để lộ bên dưới là mặt số màu xanh kaki mang xu hướng hiện đại với họa tiết bàn cờ khắc nổi. Trung tâm mặt số là bộ kim giờ, kim phút và kim giây với lớp phủ phát quang màu trắng, cho phép người đeo có thể xem giờ ngay cả khi ở trong điều kiện thiếu ánh sáng. Hơn nữa, để tạo nên nét chấm phá cho mặt số thì thay vì sử dụng một kiểu cọc số đơn lẻ, thương hiệu đã kết hợp cả cọc số Ả Rập và vạch chỉ giờ cho chiếc đồng hồ này. Tại vị trí 3 giờ là một ô cửa sổ lịch ngày. Bộ đếm chronograph 60 phút ở vị trí 6 giờ cũng có hình bát giác bo tròn giống khung bezel.
        Sản phẩm còn được trang bị bộ máy CH 28‑520 C, hoạt động ở tần số 28.800vph và có mức dự trữ năng lượng tối đa lên đến 55 giờ. Có thể nhìn thấy qua mặt kính sau là cân bằng Gyromax với lò xo cân bằng Spiromax, con dấu Patek Philippe và cánh quạt được làm bằng vàng hồng 21k. Đồng hồ có khả năng kháng nước ở độ sâu tối đa 120 mét.`

    },
    {
        id: 63,
        name: 'Đồng Hồ Richard Mille RM 011 Felipe Massa Black Night Carbon NTPT',
        image: 'richardmille23.png',
        price: 6000000000,
        brand: `RichardMille`,
        Code: ` RM 011 Felipe`,
        Size: `48mmx39,3mm`,
        Material: `Cao su`,
        ShellMaterial: `Sapphire`,
        detail: ` là một trong những thiết kế được ra mắt vào năm 2021. Đồng hồ là một sự tái khẳng định tinh thần “sang trọng đương đại” của mẫu đồng hồ Aquanaut Chronograph, lần đầu tiên được xuất hiện trong một lớp vỏ bằng vàng trắng. Bảo vệ mặt số là lớp tinh tể sapphire trong suốt để lộ bên dưới là mặt số màu xanh kaki mang xu hướng hiện đại với họa tiết bàn cờ khắc nổi. Trung tâm mặt số là bộ kim giờ, kim phút và kim giây với lớp phủ phát quang màu trắng, cho phép người đeo có thể xem giờ ngay cả khi ở trong điều kiện thiếu ánh sáng. Hơn nữa, để tạo nên nét chấm phá cho mặt số thì thay vì sử dụng một kiểu cọc số đơn lẻ, thương hiệu đã kết hợp cả cọc số Ả Rập và vạch chỉ giờ cho chiếc đồng hồ này. Tại vị trí 3 giờ là một ô cửa sổ lịch ngày. Bộ đếm chronograph 60 phút ở vị trí 6 giờ cũng có hình bát giác bo tròn giống khung bezel.
        Sản phẩm còn được trang bị bộ máy CH 28‑520 C, hoạt động ở tần số 28.800vph và có mức dự trữ năng lượng tối đa lên đến 55 giờ. Có thể nhìn thấy qua mặt kính sau là cân bằng Gyromax với lò xo cân bằng Spiromax, con dấu Patek Philippe và cánh quạt được làm bằng vàng hồng 21k. Đồng hồ có khả năng kháng nước ở độ sâu tối đa 120 mét.`


    },
    {
        id: 64,
        name: 'Đồng Hồ Richard Mille RM 014 Blue Tourbillon Perini Navi',
        image: 'richardmille24.png',
        price: 150000000000,
        brand: `RichardMille`,
        Code: `  RM 014 Blue Tourbillon`,
        Size: `48mmx39,3mm`,
        Material: `Cao su`,
        ShellMaterial: `Quartz TPT`,
        detail: ` là một trong những thiết kế được ra mắt vào năm 2021. Đồng hồ là một sự tái khẳng định tinh thần “sang trọng đương đại” của mẫu đồng hồ Aquanaut Chronograph, lần đầu tiên được xuất hiện trong một lớp vỏ bằng vàng trắng. Bảo vệ mặt số là lớp tinh tể sapphire trong suốt để lộ bên dưới là mặt số màu xanh kaki mang xu hướng hiện đại với họa tiết bàn cờ khắc nổi. Trung tâm mặt số là bộ kim giờ, kim phút và kim giây với lớp phủ phát quang màu trắng, cho phép người đeo có thể xem giờ ngay cả khi ở trong điều kiện thiếu ánh sáng. Hơn nữa, để tạo nên nét chấm phá cho mặt số thì thay vì sử dụng một kiểu cọc số đơn lẻ, thương hiệu đã kết hợp cả cọc số Ả Rập và vạch chỉ giờ cho chiếc đồng hồ này. Tại vị trí 3 giờ là một ô cửa sổ lịch ngày. Bộ đếm chronograph 60 phút ở vị trí 6 giờ cũng có hình bát giác bo tròn giống khung bezel.
        Sản phẩm còn được trang bị bộ máy CH 28‑520 C, hoạt động ở tần số 28.800vph và có mức dự trữ năng lượng tối đa lên đến 55 giờ. Có thể nhìn thấy qua mặt kính sau là cân bằng Gyromax với lò xo cân bằng Spiromax, con dấu Patek Philippe và cánh quạt được làm bằng vàng hồng 21k. Đồng hồ có khả năng kháng nước ở độ sâu tối đa 120 mét.`

    },
    {
        id: 65,
        name: 'Đồng Hồ Hublot Big Bang Ferrari 1000 GP Carbon Ceramic 45mm 402.QC.0112.NR',
        image: '1.png',
        price: 1190000000,
        brand: `Hublot`,
        Code: `  1000 GP Carbon`,
        Size: `45mm`,
        Material: `Cao su`,
        ShellMaterial: `Quartz TPT`,
        detail: ` là một trong những thiết kế được ra mắt vào năm 2021. Đồng hồ là một sự tái khẳng định tinh thần “sang trọng đương đại” của mẫu đồng hồ Aquanaut Chronograph, lần đầu tiên được xuất hiện trong một lớp vỏ bằng vàng trắng. Bảo vệ mặt số là lớp tinh tể sapphire trong suốt để lộ bên dưới là mặt số màu xanh kaki mang xu hướng hiện đại với họa tiết bàn cờ khắc nổi. Trung tâm mặt số là bộ kim giờ, kim phút và kim giây với lớp phủ phát quang màu trắng, cho phép người đeo có thể xem giờ ngay cả khi ở trong điều kiện thiếu ánh sáng. Hơn nữa, để tạo nên nét chấm phá cho mặt số thì thay vì sử dụng một kiểu cọc số đơn lẻ, thương hiệu đã kết hợp cả cọc số Ả Rập và vạch chỉ giờ cho chiếc đồng hồ này. Tại vị trí 3 giờ là một ô cửa sổ lịch ngày. Bộ đếm chronograph 60 phút ở vị trí 6 giờ cũng có hình bát giác bo tròn giống khung bezel.
        Sản phẩm còn được trang bị bộ máy CH 28‑520 C, hoạt động ở tần số 28.800vph và có mức dự trữ năng lượng tối đa lên đến 55 giờ. Có thể nhìn thấy qua mặt kính sau là cân bằng Gyromax với lò xo cân bằng Spiromax, con dấu Patek Philippe và cánh quạt được làm bằng vàng hồng 21k. Đồng hồ có khả năng kháng nước ở độ sâu tối đa 120 mét.`

    },
    {
        id: 66,
        name: 'Đồng Hồ Hublot Big Bang Ferrari Unico Carbon Red Ceramic 45mm ',
        image: '2.png',
        price: 1190000000,
        brand: `Hublot`,
        Code: `   Unico Carbon Red`,
        Size: `45mm`,
        Material: `Cao su`,
        ShellMaterial: `Quartz TPT`,
        detail: ` là một trong những thiết kế được ra mắt vào năm 2021. Đồng hồ là một sự tái khẳng định tinh thần “sang trọng đương đại” của mẫu đồng hồ Aquanaut Chronograph, lần đầu tiên được xuất hiện trong một lớp vỏ bằng vàng trắng. Bảo vệ mặt số là lớp tinh tể sapphire trong suốt để lộ bên dưới là mặt số màu xanh kaki mang xu hướng hiện đại với họa tiết bàn cờ khắc nổi. Trung tâm mặt số là bộ kim giờ, kim phút và kim giây với lớp phủ phát quang màu trắng, cho phép người đeo có thể xem giờ ngay cả khi ở trong điều kiện thiếu ánh sáng. Hơn nữa, để tạo nên nét chấm phá cho mặt số thì thay vì sử dụng một kiểu cọc số đơn lẻ, thương hiệu đã kết hợp cả cọc số Ả Rập và vạch chỉ giờ cho chiếc đồng hồ này. Tại vị trí 3 giờ là một ô cửa sổ lịch ngày. Bộ đếm chronograph 60 phút ở vị trí 6 giờ cũng có hình bát giác bo tròn giống khung bezel.
        Sản phẩm còn được trang bị bộ máy CH 28‑520 C, hoạt động ở tần số 28.800vph và có mức dự trữ năng lượng tối đa lên đến 55 giờ. Có thể nhìn thấy qua mặt kính sau là cân bằng Gyromax với lò xo cân bằng Spiromax, con dấu Patek Philippe và cánh quạt được làm bằng vàng hồng 21k. Đồng hồ có khả năng kháng nước ở độ sâu tối đa 120 mét.`

    },
    {
        id: 67,
        name: 'Đồng Hồ Classic Fusion Chronograph Titanium 42mm 541.NX.1171.RX',
        image: '3.png',
        price: 1169000000,
        brand: `Hublot`,
        Code: `  541.NX.1171.RX`,
        Size: `42mm`,
        Material: `Dây Cao su`,
        ShellMaterial: `Thép không gỉ`,
        detail: ` là một trong những thiết kế được ra mắt vào năm 2021. Đồng hồ là một sự tái khẳng định tinh thần “sang trọng đương đại” của mẫu đồng hồ Aquanaut Chronograph, lần đầu tiên được xuất hiện trong một lớp vỏ bằng vàng trắng. Bảo vệ mặt số là lớp tinh tể sapphire trong suốt để lộ bên dưới là mặt số màu xanh kaki mang xu hướng hiện đại với họa tiết bàn cờ khắc nổi. Trung tâm mặt số là bộ kim giờ, kim phút và kim giây với lớp phủ phát quang màu trắng, cho phép người đeo có thể xem giờ ngay cả khi ở trong điều kiện thiếu ánh sáng. Hơn nữa, để tạo nên nét chấm phá cho mặt số thì thay vì sử dụng một kiểu cọc số đơn lẻ, thương hiệu đã kết hợp cả cọc số Ả Rập và vạch chỉ giờ cho chiếc đồng hồ này. Tại vị trí 3 giờ là một ô cửa sổ lịch ngày. Bộ đếm chronograph 60 phút ở vị trí 6 giờ cũng có hình bát giác bo tròn giống khung bezel.
        Sản phẩm còn được trang bị bộ máy CH 28‑520 C, hoạt động ở tần số 28.800vph và có mức dự trữ năng lượng tối đa lên đến 55 giờ. Có thể nhìn thấy qua mặt kính sau là cân bằng Gyromax với lò xo cân bằng Spiromax, con dấu Patek Philippe và cánh quạt được làm bằng vàng hồng 21k. Đồng hồ có khả năng kháng nước ở độ sâu tối đa 120 mét.`

    },
    {
        id: 68,
        name: 'Đồng Hồ Classic Fusion Chronograph Titanium Opalin 42mm 541.NX.2611.LR',
        image: '4.png',
        price: 220000000,
        brand: `Hublot`,
        Code: `  541.NX.2611.LR`,
        Size: `42mm`,
        Material: `Dây da cá sấu`,
        ShellMaterial: `Thép không gỉ`,
        detail: ` là một trong những thiết kế được ra mắt vào năm 2021. Đồng hồ là một sự tái khẳng định tinh thần “sang trọng đương đại” của mẫu đồng hồ Aquanaut Chronograph, lần đầu tiên được xuất hiện trong một lớp vỏ bằng vàng trắng. Bảo vệ mặt số là lớp tinh tể sapphire trong suốt để lộ bên dưới là mặt số màu xanh kaki mang xu hướng hiện đại với họa tiết bàn cờ khắc nổi. Trung tâm mặt số là bộ kim giờ, kim phút và kim giây với lớp phủ phát quang màu trắng, cho phép người đeo có thể xem giờ ngay cả khi ở trong điều kiện thiếu ánh sáng. Hơn nữa, để tạo nên nét chấm phá cho mặt số thì thay vì sử dụng một kiểu cọc số đơn lẻ, thương hiệu đã kết hợp cả cọc số Ả Rập và vạch chỉ giờ cho chiếc đồng hồ này. Tại vị trí 3 giờ là một ô cửa sổ lịch ngày. Bộ đếm chronograph 60 phút ở vị trí 6 giờ cũng có hình bát giác bo tròn giống khung bezel.
        Sản phẩm còn được trang bị bộ máy CH 28‑520 C, hoạt động ở tần số 28.800vph và có mức dự trữ năng lượng tối đa lên đến 55 giờ. Có thể nhìn thấy qua mặt kính sau là cân bằng Gyromax với lò xo cân bằng Spiromax, con dấu Patek Philippe và cánh quạt được làm bằng vàng hồng 21k. Đồng hồ có khả năng kháng nước ở độ sâu tối đa 120 mét.`

    },
    {
        id: 69,
        name: 'Đồng Hồ Classic Fusion Chronograph Titanium Opalin 45mm 521.NX.2611.LR',
        image: '5.png',
        price: 189240000,
        brand: `Hublot`,
        Code: `521.NX.2611.LR`,
        Size: `42mm`,
        Material: `Dây Da Cá Sấu`,
        ShellMaterial: `Thép không gỉ`,
        detail: ` là một trong những thiết kế được ra mắt vào năm 2021. Đồng hồ là một sự tái khẳng định tinh thần “sang trọng đương đại” của mẫu đồng hồ Aquanaut Chronograph, lần đầu tiên được xuất hiện trong một lớp vỏ bằng vàng trắng. Bảo vệ mặt số là lớp tinh tể sapphire trong suốt để lộ bên dưới là mặt số màu xanh kaki mang xu hướng hiện đại với họa tiết bàn cờ khắc nổi. Trung tâm mặt số là bộ kim giờ, kim phút và kim giây với lớp phủ phát quang màu trắng, cho phép người đeo có thể xem giờ ngay cả khi ở trong điều kiện thiếu ánh sáng. Hơn nữa, để tạo nên nét chấm phá cho mặt số thì thay vì sử dụng một kiểu cọc số đơn lẻ, thương hiệu đã kết hợp cả cọc số Ả Rập và vạch chỉ giờ cho chiếc đồng hồ này. Tại vị trí 3 giờ là một ô cửa sổ lịch ngày. Bộ đếm chronograph 60 phút ở vị trí 6 giờ cũng có hình bát giác bo tròn giống khung bezel.
        Sản phẩm còn được trang bị bộ máy CH 28‑520 C, hoạt động ở tần số 28.800vph và có mức dự trữ năng lượng tối đa lên đến 55 giờ. Có thể nhìn thấy qua mặt kính sau là cân bằng Gyromax với lò xo cân bằng Spiromax, con dấu Patek Philippe và cánh quạt được làm bằng vàng hồng 21k. Đồng hồ có khả năng kháng nước ở độ sâu tối đa 120 mét.`

    },
    {
        id: 70,
        name: 'Đồng Hồ Hublot Big Bang Ceramic Blue Diamonds 41mm 341.CM.7170.LR.1204',
        image: '6.png',
        price: 427280000,
        brand: `Hublot`,
        Code: `341.CM.7170.LR.1204`,
        Size: `41mm`,
        Material: `Dây Cao Su`,
        ShellMaterial: `Gốm dên Ceramic`,
        detail: ` là một trong những thiết kế được ra mắt vào năm 2021. Đồng hồ là một sự tái khẳng định tinh thần “sang trọng đương đại” của mẫu đồng hồ Aquanaut Chronograph, lần đầu tiên được xuất hiện trong một lớp vỏ bằng vàng trắng. Bảo vệ mặt số là lớp tinh tể sapphire trong suốt để lộ bên dưới là mặt số màu xanh kaki mang xu hướng hiện đại với họa tiết bàn cờ khắc nổi. Trung tâm mặt số là bộ kim giờ, kim phút và kim giây với lớp phủ phát quang màu trắng, cho phép người đeo có thể xem giờ ngay cả khi ở trong điều kiện thiếu ánh sáng. Hơn nữa, để tạo nên nét chấm phá cho mặt số thì thay vì sử dụng một kiểu cọc số đơn lẻ, thương hiệu đã kết hợp cả cọc số Ả Rập và vạch chỉ giờ cho chiếc đồng hồ này. Tại vị trí 3 giờ là một ô cửa sổ lịch ngày. Bộ đếm chronograph 60 phút ở vị trí 6 giờ cũng có hình bát giác bo tròn giống khung bezel.
        Sản phẩm còn được trang bị bộ máy CH 28‑520 C, hoạt động ở tần số 28.800vph và có mức dự trữ năng lượng tối đa lên đến 55 giờ. Có thể nhìn thấy qua mặt kính sau là cân bằng Gyromax với lò xo cân bằng Spiromax, con dấu Patek Philippe và cánh quạt được làm bằng vàng hồng 21k. Đồng hồ có khả năng kháng nước ở độ sâu tối đa 120 mét.`

    },
    {
        id: 71,
        name: 'Đồng Hồ Hublot Big Bang Ceramic Blue Diamonds 38mm 361.CM.7170.LR.1204',
        image: '7.png',
        price: 219000000,
        brand: `Hublot`,
        Code: `361.CM.7170.LR.1204`,
        Size: `38mm`,
        Material: `Cao su`,
        ShellMaterial: `Gốm dên Ceramic`,
        detail: ` là một trong những thiết kế được ra mắt vào năm 2021. Đồng hồ là một sự tái khẳng định tinh thần “sang trọng đương đại” của mẫu đồng hồ Aquanaut Chronograph, lần đầu tiên được xuất hiện trong một lớp vỏ bằng vàng trắng. Bảo vệ mặt số là lớp tinh tể sapphire trong suốt để lộ bên dưới là mặt số màu xanh kaki mang xu hướng hiện đại với họa tiết bàn cờ khắc nổi. Trung tâm mặt số là bộ kim giờ, kim phút và kim giây với lớp phủ phát quang màu trắng, cho phép người đeo có thể xem giờ ngay cả khi ở trong điều kiện thiếu ánh sáng. Hơn nữa, để tạo nên nét chấm phá cho mặt số thì thay vì sử dụng một kiểu cọc số đơn lẻ, thương hiệu đã kết hợp cả cọc số Ả Rập và vạch chỉ giờ cho chiếc đồng hồ này. Tại vị trí 3 giờ là một ô cửa sổ lịch ngày. Bộ đếm chronograph 60 phút ở vị trí 6 giờ cũng có hình bát giác bo tròn giống khung bezel.
        Sản phẩm còn được trang bị bộ máy CH 28‑520 C, hoạt động ở tần số 28.800vph và có mức dự trữ năng lượng tối đa lên đến 55 giờ. Có thể nhìn thấy qua mặt kính sau là cân bằng Gyromax với lò xo cân bằng Spiromax, con dấu Patek Philippe và cánh quạt được làm bằng vàng hồng 21k. Đồng hồ có khả năng kháng nước ở độ sâu tối đa 120 mét.`


    },
    {
        id: 72,
        name: 'Đồng Hồ Hublot Big Bang e Titanium White Diamonds 42mm 440.NX.1101.RW.1704',
        image: '8.png',
        price: 2650000000,
        brand: `Hublot`,
        Code: `361.CM.7170.LR.1204`,
        Size: `43mm`,
        Material: `Cao su`,
        ShellMaterial: `Gốm dên Ceramic`,
        detail: ` là một trong những thiết kế được ra mắt vào năm 2021. Đồng hồ là một sự tái khẳng định tinh thần “sang trọng đương đại” của mẫu đồng hồ Aquanaut Chronograph, lần đầu tiên được xuất hiện trong một lớp vỏ bằng vàng trắng. Bảo vệ mặt số là lớp tinh tể sapphire trong suốt để lộ bên dưới là mặt số màu xanh kaki mang xu hướng hiện đại với họa tiết bàn cờ khắc nổi. Trung tâm mặt số là bộ kim giờ, kim phút và kim giây với lớp phủ phát quang màu trắng, cho phép người đeo có thể xem giờ ngay cả khi ở trong điều kiện thiếu ánh sáng. Hơn nữa, để tạo nên nét chấm phá cho mặt số thì thay vì sử dụng một kiểu cọc số đơn lẻ, thương hiệu đã kết hợp cả cọc số Ả Rập và vạch chỉ giờ cho chiếc đồng hồ này. Tại vị trí 3 giờ là một ô cửa sổ lịch ngày. Bộ đếm chronograph 60 phút ở vị trí 6 giờ cũng có hình bát giác bo tròn giống khung bezel.
        Sản phẩm còn được trang bị bộ máy CH 28‑520 C, hoạt động ở tần số 28.800vph và có mức dự trữ năng lượng tối đa lên đến 55 giờ. Có thể nhìn thấy qua mặt kính sau là cân bằng Gyromax với lò xo cân bằng Spiromax, con dấu Patek Philippe và cánh quạt được làm bằng vàng hồng 21k. Đồng hồ có khả năng kháng nước ở độ sâu tối đa 120 mét.`

    },
    {
        id: 73,
        name: 'Đồng Hồ Hublot Big Bang e UEFA Champions League 42mm 440.EX.1100.RX.UCL20',
        image: '9.png',
        price: 1470000000,
        brand: `Hublot`,
        Code: `361.CM.7170.LR.1204`,
        Size: `42mm`,
        Material: `Cao su`,
        ShellMaterial: `Gốm dên Ceramic`,
        detail: ` là một trong những thiết kế được ra mắt vào năm 2021. Đồng hồ là một sự tái khẳng định tinh thần “sang trọng đương đại” của mẫu đồng hồ Aquanaut Chronograph, lần đầu tiên được xuất hiện trong một lớp vỏ bằng vàng trắng. Bảo vệ mặt số là lớp tinh tể sapphire trong suốt để lộ bên dưới là mặt số màu xanh kaki mang xu hướng hiện đại với họa tiết bàn cờ khắc nổi. Trung tâm mặt số là bộ kim giờ, kim phút và kim giây với lớp phủ phát quang màu trắng, cho phép người đeo có thể xem giờ ngay cả khi ở trong điều kiện thiếu ánh sáng. Hơn nữa, để tạo nên nét chấm phá cho mặt số thì thay vì sử dụng một kiểu cọc số đơn lẻ, thương hiệu đã kết hợp cả cọc số Ả Rập và vạch chỉ giờ cho chiếc đồng hồ này. Tại vị trí 3 giờ là một ô cửa sổ lịch ngày. Bộ đếm chronograph 60 phút ở vị trí 6 giờ cũng có hình bát giác bo tròn giống khung bezel.
        Sản phẩm còn được trang bị bộ máy CH 28‑520 C, hoạt động ở tần số 28.800vph và có mức dự trữ năng lượng tối đa lên đến 55 giờ. Có thể nhìn thấy qua mặt kính sau là cân bằng Gyromax với lò xo cân bằng Spiromax, con dấu Patek Philippe và cánh quạt được làm bằng vàng hồng 21k. Đồng hồ có khả năng kháng nước ở độ sâu tối đa 120 mét.`

    },
    {
        id: 74,
        name: 'Đồng Hồ Hublot Big Bang Gold Blue Diamonds 38mm 361.PX.7180.LR.1204',
        image: '10.png',
        price: 7190000000,
        brand: `Hublot`,
        Code: `361.CM.7170.LR.1204`,
        Size: `38mm`,
        Material: `Cao su`,
        ShellMaterial: `Gốm dên Ceramic`,
        detail: ` là một trong những thiết kế được ra mắt vào năm 2021. Đồng hồ là một sự tái khẳng định tinh thần “sang trọng đương đại” của mẫu đồng hồ Aquanaut Chronograph, lần đầu tiên được xuất hiện trong một lớp vỏ bằng vàng trắng. Bảo vệ mặt số là lớp tinh tể sapphire trong suốt để lộ bên dưới là mặt số màu xanh kaki mang xu hướng hiện đại với họa tiết bàn cờ khắc nổi. Trung tâm mặt số là bộ kim giờ, kim phút và kim giây với lớp phủ phát quang màu trắng, cho phép người đeo có thể xem giờ ngay cả khi ở trong điều kiện thiếu ánh sáng. Hơn nữa, để tạo nên nét chấm phá cho mặt số thì thay vì sử dụng một kiểu cọc số đơn lẻ, thương hiệu đã kết hợp cả cọc số Ả Rập và vạch chỉ giờ cho chiếc đồng hồ này. Tại vị trí 3 giờ là một ô cửa sổ lịch ngày. Bộ đếm chronograph 60 phút ở vị trí 6 giờ cũng có hình bát giác bo tròn giống khung bezel.
        Sản phẩm còn được trang bị bộ máy CH 28‑520 C, hoạt động ở tần số 28.800vph và có mức dự trữ năng lượng tối đa lên đến 55 giờ. Có thể nhìn thấy qua mặt kính sau là cân bằng Gyromax với lò xo cân bằng Spiromax, con dấu Patek Philippe và cánh quạt được làm bằng vàng hồng 21k. Đồng hồ có khả năng kháng nước ở độ sâu tối đa 120 mét.`

    },
    {
        id: 75,
        name: 'Đồng Hồ Hublot Big Bang Gold Blue Diamonds 41mm 341.PX.7180.LR.1204',
        image: '11.png',
        price: 7291200000,
        brand: `Hublot`,
        Code: `341.PX.7180.LR.1204`,
        Size: `41mm`,
        Material: `Cao su`,
        ShellMaterial: `Gốm dên Ceramic`,
        detail: ` là một trong những thiết kế được ra mắt vào năm 2021. Đồng hồ là một sự tái khẳng định tinh thần “sang trọng đương đại” của mẫu đồng hồ Aquanaut Chronograph, lần đầu tiên được xuất hiện trong một lớp vỏ bằng vàng trắng. Bảo vệ mặt số là lớp tinh tể sapphire trong suốt để lộ bên dưới là mặt số màu xanh kaki mang xu hướng hiện đại với họa tiết bàn cờ khắc nổi. Trung tâm mặt số là bộ kim giờ, kim phút và kim giây với lớp phủ phát quang màu trắng, cho phép người đeo có thể xem giờ ngay cả khi ở trong điều kiện thiếu ánh sáng. Hơn nữa, để tạo nên nét chấm phá cho mặt số thì thay vì sử dụng một kiểu cọc số đơn lẻ, thương hiệu đã kết hợp cả cọc số Ả Rập và vạch chỉ giờ cho chiếc đồng hồ này. Tại vị trí 3 giờ là một ô cửa sổ lịch ngày. Bộ đếm chronograph 60 phút ở vị trí 6 giờ cũng có hình bát giác bo tròn giống khung bezel.
        Sản phẩm còn được trang bị bộ máy CH 28‑520 C, hoạt động ở tần số 28.800vph và có mức dự trữ năng lượng tối đa lên đến 55 giờ. Có thể nhìn thấy qua mặt kính sau là cân bằng Gyromax với lò xo cân bằng Spiromax, con dấu Patek Philippe và cánh quạt được làm bằng vàng hồng 21k. Đồng hồ có khả năng kháng nước ở độ sâu tối đa 120 mét.`

    },
    {
        id: 76,
        name: 'Đồng Hồ Hublot Big Bang Gold Ceramic 41mm 341.PB.131.RX',
        image: '12.png',
        price: 5446800000,
        brand: `Hublot`,
        Code: `341.PB.131.RX`,
        Size: `41mm`,
        Material: `Dây Cao su`,
        ShellMaterial: `Vàng 18k & Gốm dên Ceramic`,
        detail: ` là một trong những thiết kế được ra mắt vào năm 2021. Đồng hồ là một sự tái khẳng định tinh thần “sang trọng đương đại” của mẫu đồng hồ Aquanaut Chronograph, lần đầu tiên được xuất hiện trong một lớp vỏ bằng vàng trắng. Bảo vệ mặt số là lớp tinh tể sapphire trong suốt để lộ bên dưới là mặt số màu xanh kaki mang xu hướng hiện đại với họa tiết bàn cờ khắc nổi. Trung tâm mặt số là bộ kim giờ, kim phút và kim giây với lớp phủ phát quang màu trắng, cho phép người đeo có thể xem giờ ngay cả khi ở trong điều kiện thiếu ánh sáng. Hơn nữa, để tạo nên nét chấm phá cho mặt số thì thay vì sử dụng một kiểu cọc số đơn lẻ, thương hiệu đã kết hợp cả cọc số Ả Rập và vạch chỉ giờ cho chiếc đồng hồ này. Tại vị trí 3 giờ là một ô cửa sổ lịch ngày. Bộ đếm chronograph 60 phút ở vị trí 6 giờ cũng có hình bát giác bo tròn giống khung bezel.
        Sản phẩm còn được trang bị bộ máy CH 28‑520 C, hoạt động ở tần số 28.800vph và có mức dự trữ năng lượng tối đa lên đến 55 giờ. Có thể nhìn thấy qua mặt kính sau là cân bằng Gyromax với lò xo cân bằng Spiromax, con dấu Patek Philippe và cánh quạt được làm bằng vàng hồng 21k. Đồng hồ có khả năng kháng nước ở độ sâu tối đa 120 mét.`

    },
    {
        id: 77,
        name: 'Đồng Hồ Hublot Big Bang Gold White Diamonds 38mm 361.PE.2010.RW.1104',
        image: '13.png',
        price: 4723600000,
        brand: `Hublot`,
        Code: `361.PX.1280.RX.1704`,
        Size: `38mm`,
        Material: `Dây Cao su`,
        ShellMaterial: `Vàng 18k`,
        detail: ` là một trong những thiết kế được ra mắt vào năm 2021. Đồng hồ là một sự tái khẳng định tinh thần “sang trọng đương đại” của mẫu đồng hồ Aquanaut Chronograph, lần đầu tiên được xuất hiện trong một lớp vỏ bằng vàng trắng. Bảo vệ mặt số là lớp tinh tể sapphire trong suốt để lộ bên dưới là mặt số màu xanh kaki mang xu hướng hiện đại với họa tiết bàn cờ khắc nổi. Trung tâm mặt số là bộ kim giờ, kim phút và kim giây với lớp phủ phát quang màu trắng, cho phép người đeo có thể xem giờ ngay cả khi ở trong điều kiện thiếu ánh sáng. Hơn nữa, để tạo nên nét chấm phá cho mặt số thì thay vì sử dụng một kiểu cọc số đơn lẻ, thương hiệu đã kết hợp cả cọc số Ả Rập và vạch chỉ giờ cho chiếc đồng hồ này. Tại vị trí 3 giờ là một ô cửa sổ lịch ngày. Bộ đếm chronograph 60 phút ở vị trí 6 giờ cũng có hình bát giác bo tròn giống khung bezel.
        Sản phẩm còn được trang bị bộ máy CH 28‑520 C, hoạt động ở tần số 28.800vph và có mức dự trữ năng lượng tối đa lên đến 55 giờ. Có thể nhìn thấy qua mặt kính sau là cân bằng Gyromax với lò xo cân bằng Spiromax, con dấu Patek Philippe và cánh quạt được làm bằng vàng hồng 21k. Đồng hồ có khả năng kháng nước ở độ sâu tối đa 120 mét.`

    },
    {
        id: 78,
        name: 'Đồng Hồ Hublot Big Bang One Click King Gold White Diamonds 33mm ',
        image: '14.png',
        price: 5180000000,
        brand: `Hublot`,
        Code: `485.OE.2210.RW.1204`,
        Size: `33mm`,
        Material: `Dây Cao su`,
        ShellMaterial: `Vàng hồng 18k`,
        detail: ` là một trong những thiết kế được ra mắt vào năm 2021. Đồng hồ là một sự tái khẳng định tinh thần “sang trọng đương đại” của mẫu đồng hồ Aquanaut Chronograph, lần đầu tiên được xuất hiện trong một lớp vỏ bằng vàng trắng. Bảo vệ mặt số là lớp tinh tể sapphire trong suốt để lộ bên dưới là mặt số màu xanh kaki mang xu hướng hiện đại với họa tiết bàn cờ khắc nổi. Trung tâm mặt số là bộ kim giờ, kim phút và kim giây với lớp phủ phát quang màu trắng, cho phép người đeo có thể xem giờ ngay cả khi ở trong điều kiện thiếu ánh sáng. Hơn nữa, để tạo nên nét chấm phá cho mặt số thì thay vì sử dụng một kiểu cọc số đơn lẻ, thương hiệu đã kết hợp cả cọc số Ả Rập và vạch chỉ giờ cho chiếc đồng hồ này. Tại vị trí 3 giờ là một ô cửa sổ lịch ngày. Bộ đếm chronograph 60 phút ở vị trí 6 giờ cũng có hình bát giác bo tròn giống khung bezel.
        Sản phẩm còn được trang bị bộ máy CH 28‑520 C, hoạt động ở tần số 28.800vph và có mức dự trữ năng lượng tối đa lên đến 55 giờ. Có thể nhìn thấy qua mặt kính sau là cân bằng Gyromax với lò xo cân bằng Spiromax, con dấu Patek Philippe và cánh quạt được làm bằng vàng hồng 21k. Đồng hồ có khả năng kháng nước ở độ sâu tối đa 120 mét.`

    },
    {
        id: 79,
        name: 'Đồng Hồ Hublot Big Bang E Titanium 42mm 440.NX.1100.RX',
        image: '15.png',
        price: 1170000000,
        brand: `Hublot`,
        Code: `485.OE.2210.RW.1204`,
        Size: `42mm`,
        Material: `Dây Cao su`,
        ShellMaterial: `Vàng hồng 18k`,
        detail: ` là một trong những thiết kế được ra mắt vào năm 2021. Đồng hồ là một sự tái khẳng định tinh thần “sang trọng đương đại” của mẫu đồng hồ Aquanaut Chronograph, lần đầu tiên được xuất hiện trong một lớp vỏ bằng vàng trắng. Bảo vệ mặt số là lớp tinh tể sapphire trong suốt để lộ bên dưới là mặt số màu xanh kaki mang xu hướng hiện đại với họa tiết bàn cờ khắc nổi. Trung tâm mặt số là bộ kim giờ, kim phút và kim giây với lớp phủ phát quang màu trắng, cho phép người đeo có thể xem giờ ngay cả khi ở trong điều kiện thiếu ánh sáng. Hơn nữa, để tạo nên nét chấm phá cho mặt số thì thay vì sử dụng một kiểu cọc số đơn lẻ, thương hiệu đã kết hợp cả cọc số Ả Rập và vạch chỉ giờ cho chiếc đồng hồ này. Tại vị trí 3 giờ là một ô cửa sổ lịch ngày. Bộ đếm chronograph 60 phút ở vị trí 6 giờ cũng có hình bát giác bo tròn giống khung bezel.
        Sản phẩm còn được trang bị bộ máy CH 28‑520 C, hoạt động ở tần số 28.800vph và có mức dự trữ năng lượng tối đa lên đến 55 giờ. Có thể nhìn thấy qua mặt kính sau là cân bằng Gyromax với lò xo cân bằng Spiromax, con dấu Patek Philippe và cánh quạt được làm bằng vàng hồng 21k. Đồng hồ có khả năng kháng nước ở độ sâu tối đa 120 mét.`

    },
    {
        id: 80,
        name: 'Đồng Hồ Hublot Big Bang Ferrari Unico Magic Gold 45mm 402.MX.0138.WR',
        image: '16.png',
        price: 8150000000,
        brand: `Hublot`,
        Code: `402.MX.0138.WR`,
        Size: `45mm`,
        Material: `Dây Cao su`,
        ShellMaterial: `Magic `,
        detail: ` là một trong những thiết kế được ra mắt vào năm 2021. Đồng hồ là một sự tái khẳng định tinh thần “sang trọng đương đại” của mẫu đồng hồ Aquanaut Chronograph, lần đầu tiên được xuất hiện trong một lớp vỏ bằng vàng trắng. Bảo vệ mặt số là lớp tinh tể sapphire trong suốt để lộ bên dưới là mặt số màu xanh kaki mang xu hướng hiện đại với họa tiết bàn cờ khắc nổi. Trung tâm mặt số là bộ kim giờ, kim phút và kim giây với lớp phủ phát quang màu trắng, cho phép người đeo có thể xem giờ ngay cả khi ở trong điều kiện thiếu ánh sáng. Hơn nữa, để tạo nên nét chấm phá cho mặt số thì thay vì sử dụng một kiểu cọc số đơn lẻ, thương hiệu đã kết hợp cả cọc số Ả Rập và vạch chỉ giờ cho chiếc đồng hồ này. Tại vị trí 3 giờ là một ô cửa sổ lịch ngày. Bộ đếm chronograph 60 phút ở vị trí 6 giờ cũng có hình bát giác bo tròn giống khung bezel.
        Sản phẩm còn được trang bị bộ máy CH 28‑520 C, hoạt động ở tần số 28.800vph và có mức dự trữ năng lượng tối đa lên đến 55 giờ. Có thể nhìn thấy qua mặt kính sau là cân bằng Gyromax với lò xo cân bằng Spiromax, con dấu Patek Philippe và cánh quạt được làm bằng vàng hồng 21k. Đồng hồ có khả năng kháng nước ở độ sâu tối đa 120 mét.`

    },
    {
        id: 81,
        name: 'Đồng Hồ Hublot Big Bang Ceramic Blue 44mm 301.CI.7170.RX',
        image: '17.png',
        price: 3510000000,
        brand: `Hublot`,
        Code: `301.CI.7170.RX`,
        Size: `45mm`,
        Material: `Dây Cao su`,
        ShellMaterial: `Tiatanium`,
        detail: ` là một trong những thiết kế được ra mắt vào năm 2021. Đồng hồ là một sự tái khẳng định tinh thần “sang trọng đương đại” của mẫu đồng hồ Aquanaut Chronograph, lần đầu tiên được xuất hiện trong một lớp vỏ bằng vàng trắng. Bảo vệ mặt số là lớp tinh tể sapphire trong suốt để lộ bên dưới là mặt số màu xanh kaki mang xu hướng hiện đại với họa tiết bàn cờ khắc nổi. Trung tâm mặt số là bộ kim giờ, kim phút và kim giây với lớp phủ phát quang màu trắng, cho phép người đeo có thể xem giờ ngay cả khi ở trong điều kiện thiếu ánh sáng. Hơn nữa, để tạo nên nét chấm phá cho mặt số thì thay vì sử dụng một kiểu cọc số đơn lẻ, thương hiệu đã kết hợp cả cọc số Ả Rập và vạch chỉ giờ cho chiếc đồng hồ này. Tại vị trí 3 giờ là một ô cửa sổ lịch ngày. Bộ đếm chronograph 60 phút ở vị trí 6 giờ cũng có hình bát giác bo tròn giống khung bezel.
        Sản phẩm còn được trang bị bộ máy CH 28‑520 C, hoạt động ở tần số 28.800vph và có mức dự trữ năng lượng tối đa lên đến 55 giờ. Có thể nhìn thấy qua mặt kính sau là cân bằng Gyromax với lò xo cân bằng Spiromax, con dấu Patek Philippe và cánh quạt được làm bằng vàng hồng 21k. Đồng hồ có khả năng kháng nước ở độ sâu tối đa 120 mét.`

    },
    {
        id: 82,
        name: 'Đồng Hồ Hublot Big Bang Gold 44mm 301.PB.131.RX',
        image: '18.png',
        price: 4440000000,
        brand: `Hublot`,
        Code: `301.PX.1180.RX`,
        Size: `44mm`,
        Material: `Dây Cao su`,
        ShellMaterial: `Tiatanium`,
        detail: ` là một trong những thiết kế được ra mắt vào năm 2021. Đồng hồ là một sự tái khẳng định tinh thần “sang trọng đương đại” của mẫu đồng hồ Aquanaut Chronograph, lần đầu tiên được xuất hiện trong một lớp vỏ bằng vàng trắng. Bảo vệ mặt số là lớp tinh tể sapphire trong suốt để lộ bên dưới là mặt số màu xanh kaki mang xu hướng hiện đại với họa tiết bàn cờ khắc nổi. Trung tâm mặt số là bộ kim giờ, kim phút và kim giây với lớp phủ phát quang màu trắng, cho phép người đeo có thể xem giờ ngay cả khi ở trong điều kiện thiếu ánh sáng. Hơn nữa, để tạo nên nét chấm phá cho mặt số thì thay vì sử dụng một kiểu cọc số đơn lẻ, thương hiệu đã kết hợp cả cọc số Ả Rập và vạch chỉ giờ cho chiếc đồng hồ này. Tại vị trí 3 giờ là một ô cửa sổ lịch ngày. Bộ đếm chronograph 60 phút ở vị trí 6 giờ cũng có hình bát giác bo tròn giống khung bezel.
        Sản phẩm còn được trang bị bộ máy CH 28‑520 C, hoạt động ở tần số 28.800vph và có mức dự trữ năng lượng tối đa lên đến 55 giờ. Có thể nhìn thấy qua mặt kính sau là cân bằng Gyromax với lò xo cân bằng Spiromax, con dấu Patek Philippe và cánh quạt được làm bằng vàng hồng 21k. Đồng hồ có khả năng kháng nước ở độ sâu tối đa 120 mét.`

    },
    {
        id: 83,
        name: 'Đồng Hồ Hublot Big Bang Gold Blue 44mm 301.PX.7180.LR',
        image: '19.png',
        price: 5690000000,
        brand: `Hublot`,
        Code: `HUB4100 Self-winding Chronograph Movement`,
        Size: `44mm`,
        Material: `Dây Cao su`,
        ShellMaterial: `Tiatanium`,
        detail: ` là một trong những thiết kế được ra mắt vào năm 2021. Đồng hồ là một sự tái khẳng định tinh thần “sang trọng đương đại” của mẫu đồng hồ Aquanaut Chronograph, lần đầu tiên được xuất hiện trong một lớp vỏ bằng vàng trắng. Bảo vệ mặt số là lớp tinh tể sapphire trong suốt để lộ bên dưới là mặt số màu xanh kaki mang xu hướng hiện đại với họa tiết bàn cờ khắc nổi. Trung tâm mặt số là bộ kim giờ, kim phút và kim giây với lớp phủ phát quang màu trắng, cho phép người đeo có thể xem giờ ngay cả khi ở trong điều kiện thiếu ánh sáng. Hơn nữa, để tạo nên nét chấm phá cho mặt số thì thay vì sử dụng một kiểu cọc số đơn lẻ, thương hiệu đã kết hợp cả cọc số Ả Rập và vạch chỉ giờ cho chiếc đồng hồ này. Tại vị trí 3 giờ là một ô cửa sổ lịch ngày. Bộ đếm chronograph 60 phút ở vị trí 6 giờ cũng có hình bát giác bo tròn giống khung bezel.
        Sản phẩm còn được trang bị bộ máy CH 28‑520 C, hoạt động ở tần số 28.800vph và có mức dự trữ năng lượng tối đa lên đến 55 giờ. Có thể nhìn thấy qua mặt kính sau là cân bằng Gyromax với lò xo cân bằng Spiromax, con dấu Patek Philippe và cánh quạt được làm bằng vàng hồng 21k. Đồng hồ có khả năng kháng nước ở độ sâu tối đa 120 mét.`

    },
    {
        id: 84,
        name: 'Đồng Hồ Hublot Big Bang Gold Ceramic 44mm 301.PB.131.RX',
        image: '20.png',
        price: 4450000000,
        brand: `Hublot`,
        Code: `301.PM.1780.RX`,
        Size: `44mm`,
        Material: `Dây Cao su`,
        ShellMaterial: `Tiatanium`,
        detail: ` là một trong những thiết kế được ra mắt vào năm 2021. Đồng hồ là một sự tái khẳng định tinh thần “sang trọng đương đại” của mẫu đồng hồ Aquanaut Chronograph, lần đầu tiên được xuất hiện trong một lớp vỏ bằng vàng trắng. Bảo vệ mặt số là lớp tinh tể sapphire trong suốt để lộ bên dưới là mặt số màu xanh kaki mang xu hướng hiện đại với họa tiết bàn cờ khắc nổi. Trung tâm mặt số là bộ kim giờ, kim phút và kim giây với lớp phủ phát quang màu trắng, cho phép người đeo có thể xem giờ ngay cả khi ở trong điều kiện thiếu ánh sáng. Hơn nữa, để tạo nên nét chấm phá cho mặt số thì thay vì sử dụng một kiểu cọc số đơn lẻ, thương hiệu đã kết hợp cả cọc số Ả Rập và vạch chỉ giờ cho chiếc đồng hồ này. Tại vị trí 3 giờ là một ô cửa sổ lịch ngày. Bộ đếm chronograph 60 phút ở vị trí 6 giờ cũng có hình bát giác bo tròn giống khung bezel.
        Sản phẩm còn được trang bị bộ máy CH 28‑520 C, hoạt động ở tần số 28.800vph và có mức dự trữ năng lượng tối đa lên đến 55 giờ. Có thể nhìn thấy qua mặt kính sau là cân bằng Gyromax với lò xo cân bằng Spiromax, con dấu Patek Philippe và cánh quạt được làm bằng vàng hồng 21k. Đồng hồ có khả năng kháng nước ở độ sâu tối đa 120 mét.`
    }
]

let ProductLocal
function loadLocal(){
    ProductLocal=JSON.parse(localStorage.getItem('products'))
    if(ProductLocal==null)
    {
        localStorage.setItem('products',JSON.stringify(allProducts))
        window.location.reload();
    }
}
loadLocal()                                                                                                                     
function initApp(product) {
    product.forEach((value, key) => {
        let newDiv = document.createElement('div');
        newDiv.classList.add('products-card');
        newDiv.classList.add('products-card-click');
        newDiv.innerHTML = `
        <img src="./assets/img/All/${value.image}" class="products_card-img">
        <p class="products_card-name">${value.name}</p>
        <h6 class="products_card-price">Giá : ${value.price.toLocaleString()} VND</h6>
        `;
        list.appendChild(newDiv);
    });
}
initApp( ProductLocal);
let listProduct = document.querySelectorAll('.content .products-card');
let thisPage = 1;
let limit = 12;                              
function loadItem(listProduct) {
    let beginGet = (thisPage - 1) * limit;
    let endGet = (thisPage - 1) * limit + 11;
    listProduct.forEach((item, key) => {
        if (key >= beginGet && key <= endGet) {
            item.style.display = "block";
        }
        else {
            item.style.display = "none";
        }
    })
    listPage(listProduct);
}
loadItem(listProduct);
function listPage(listProduct) {
    let count = Math.ceil(listProduct.length / limit);
    document.querySelector('.listPage').innerHTML = ``;

    if (thisPage != 1) {
        let prev = document.createElement('li');
        prev.innerText = '< PREVIOUS';
        prev.setAttribute('onclick', "changePage(" + (thisPage - 1) + ")");
        document.querySelector('.listPage').appendChild(prev);
    }

    for (let i = 1; i <= count; i++) {
        let newPage = document.createElement('li');
        newPage.innerText = i;
        if (i == thisPage) {
            newPage.classList.add('active-page');
        }
        newPage.setAttribute('onclick', "changePage(" + i + ")");
        document.querySelector('.listPage').appendChild(newPage);
    }

    if (thisPage != count) {
        let next = document.createElement('li');
        next.innerText = 'NEXT >';
        next.setAttribute('onclick', "changePage(" + (thisPage + 1) + ")");
        document.querySelector('.listPage').appendChild(next);
    }
}
function changePage(i) {
    thisPage = i;
    loadItem(listProduct);
}
let btnClassify = document.querySelectorAll('.has-child-click');
let container = document.querySelector(".container");
let privacy = document.querySelector('.privacy-wrap');
let listproducts = document.querySelector('.listproduct');
let buyTickets = document.querySelectorAll('.products-card-click');
let pagination = document.querySelector('.listPage');

let Type;
btnClassify.forEach(btn => {
    btn.addEventListener('click', (value) => {
        container.style.display = 'block';
        active.style.display = 'none';
        privacy.style.display = 'none';
        slider.style.display = 'none';
        footer.style.display='block';
        thisPage = 1;
        let type = value.currentTarget.getAttribute('type');
        Type = type;
        changeTitle(type+'\'s '+'Products');
        let filterData =ProductLocal.filter(function (brands) {
            return brands.brand == type;
        })

        listproducts.innerText="";
        list.innerText="";
        initApp(filterData);
         listProduct=document.querySelectorAll('.content .products-card');
        loadItem(listProduct)
        initProductsInf(filterData);
        
        //////console.log(type);
        let buyTicket = document.querySelectorAll('.products-card-click');
        //////console.log(buyTicket);
        // let listProductfilter=document.querySelectorAll('.content .products-card');
        pagination.style.display = 'block';
        showInfo(buyTicket, listproducts);
    })
})



let save = 0
function showInfo(buyTickets, listproducts) {

    for (let i = 0; i < buyTickets.length; i++) {
        buyTickets[i].addEventListener('click', () => {
            listproducts.children[i].classList.add('open');
            container.style.display = 'none';
            privacy.style.display = 'none';

            footer.style.display = 'none';

            save = i;
            //////console.log(save);
        }
        )
    }
}
showInfo(buyTickets, listproducts);
initProductsInf(ProductLocal)
function initProductsInf(product) {
    product.forEach((value, key) => {
        
        let newDiv = document.createElement('div');
        newDiv.classList.add('product-info');
        newDiv.innerHTML = `<div class="main-wrapper">
        <div class="container-product">
          <div class="product-div">
            <div class="product-div-left">
              <div class="img-container">
                <img src="./assets/img/All/${value.image}" alt="watch" />
              </div>
            </div>
            <div class="product-div-right">
            <div class="product-text">
              <div class="product">
                <span class="product-name">
                 ${value.name}</span
                >
                <span class="product-price"> ${value.price.toLocaleString()}
                </span>
              </div>

              <div class="product-description">
                <table>
                  <tr>
                    <td><b>Hãng</b></td>
                    <td>${value.brand}</td>
                  </tr>
                  <tr>
                    <td><b>Mã sản phẩm</b></td>
                    <td>${value.Code}</td>
                  </tr>
                  <tr>
                    <td><b>Kích thước</b></td>
                    <td>${value.Size}</td>
                  </tr>
                  <tr>
                    <td><b>Chất liệu dây</b></td>
                    <td>${value.Material}</td>
                  </tr>
                  <tr>
                    <td><b>Chất liệu vỏ</b></td>
                    <td>${value.ShellMaterial}</td>
                  </tr>
                </table>
              </div>
              </div>

              <div class="btn-groups">
                <button type="button" class="add-cart-btn" onclick="addtoCard(${key})">
                  <i class="fas fa-shopping-cart"></i>Thêm vào giỏ hàng
                </button>
                
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="product-guide">
        <div class="product-detail">
          <h3 class="ordering-guide-h3">
            <i class="fa-solid fa-shop" style="color: #808080"></i>Chi tiết
            sản phẩm
          </h3>
          <p>
           ${value.name} ${value.detail}
          </p>
          <br />
          <p>
            Bên cạnh đó, ${value.name} còn được trang bị
            bộ máy Automatic HUB1110 Self-winding Movement gồm chứa 25 chân
            kính, dao động ở tần số 28800 vph và có mức dự trữ năng lượng xấp
            xỉ 42 giờ, được tối ưu hoá hoàn toàn khi có độ kháng nước cực kỳ
            cao lên đến 50m (~150 feet).
          </p>
        </div>
        <div class="ordering-guide">
          <h3 class="ordering-guide-h3">
            <i class="fa-solid fa-quote-left" style="color: #808080"></i>Hướng
            dẫn đặt hàng
          </h3>
          <p>Giá sẽ thay đổi theo thời điểm mua hàng</p>
          <h1 class="ordering-guide-h1">
            Chính sách mua hàng, vận chuyển và bảo hành
          </h1>
          <h2 class="ordering-guide-h2">Cách thức mua hàng</h2>
          <ul>
            <li>
              <strong>Bước 1:</strong>
              Lựa chọn những mẫu ưng ý nhất trên website
            </li>
            <li>
              <strong>Bước 2:</strong>
              Liên hệ trực tiếp tới số điện thoại 0828 136 136 hoặc Liên hệ tư
              vấn online
            </li>
            <li>
              <strong>Bước 3:</strong>
              Chọn hình thức mua hàng:
              <ol>
                <li>Giao hàng – Thu tiền</li>
                <li>Chuyển khoản trực tiếp</li>
                <li>Đặt hàng online</li>
              </ol>
            </li>
            <li>
              <strong>Bước 4:</strong>
              Quý khách gửi thông tin đầy đủ để tiến hành mua hàng.
            </li>
            <li>
              <strong>Bước 5:</strong>
              Bảo hành – theo đúng chính sách hãng đưa ra đối với sản phẩm mới
              tinh. Hai năm tại cửa hàng đối với hàng đã qua sử dụng.
            </li>
          </ul>
          <h4>Về các dịch vụ của chúng tôi</h4>
          <p>
            Hơn cả một địa chỉ tin cậy để khách hàng tìm đến, sở hữu những sản
            phẩm đồng hồ từ những thương hiệu đẳng cấp nhất trên thế giới.
          </p>
        </div>
      </div>

      <div class="heading2">
        <h2>sản phẩm liên quan</h2>
      </div>

      <div class="contact">
        <div class="row">
          <div class="col colx">
            <div class="item">
              <i class="fa-solid fa-phone-volume" style="color: #fcd0ad"></i>
              <span>0388 338 338</span>
            </div>
          </div>
          <div class="col colx">
            <div class="item">
              <i
                class="fa-solid fa-map-location-dot"
                style="color: #fcd0ad"
              ></i>
              <span>273 An Dương Vương P.3 Q.5 TP.Hồ Chí Minh</span>
            </div>
          </div>
          <div class="col colx">
            <div class="item">
              <i class="fa-solid fa-envelope" style="color: #fcd0ad"></i>
              <span>contact@fivetluxury.vn</span>
            </div>
          </div>
        </div>
      </div>`;
        listproducts.appendChild(newDiv);
    })
}

let openShopping = document.querySelector('.openShopping');
let active = document.querySelector('.shopping')
let slider = document.querySelector('.slider')
let total = document.querySelector('.total')
let payMent = document.querySelector('.payment')
let listCard = document.querySelector('.listCard')
let quantity = document.querySelector('.quantity')
let productInfo = document.querySelector('.product-info')
let button_shopping = document.querySelectorAll('.add-cart-btn');
let checkout = document.querySelector('.checkout')
let listCards = [];
openShopping.addEventListener('click', () => {
    active.style.display = 'block';
    container.style.display = 'none';
    privacy.style.display = 'none';
    slider.style.display = 'none';
    footer.style.display='none';
    listproducts.children[save].classList.remove('open');
}
)

let checkLogin = false;
function addtoCard(key) {
    userCard = JSON.parse(localStorage.getItem(usernameLoggedIn)) ||[];
    if (checkLogin == false) {
        alert("Bạn cần phải đăng nhập")
    }
    else {
        // ////console.log(key)
        let tmp = {
            id: '',
            img: '',
            name: '',
            time:'',
            price: 0,
            quantity: 0, 
            status:'Đã thêm vào giỏ hàng'
        }
        let date =new Date();
        if(Type=="Hublot"){
            tmp.id = ProductLocal[key+64].id;
            tmp.img = ProductLocal[key+64].image;
            tmp.name = ProductLocal[key+64].name;
            tmp.price = ProductLocal[key+64].price;
            tmp.time=formatTime(date).toString();
        }
        else if(Type=="Rolex"){
            tmp.id = ProductLocal[key+15].id;
            tmp.img = ProductLocal[key+15].image;
            tmp.name = ProductLocal[key+15].name;
            tmp.price = ProductLocal[key+15].price;
            tmp.time=formatTime(date).toString();
        }
        else if(Type=="RichardMille"){
            tmp.id = ProductLocal[key+40].id;
            tmp.img = ProductLocal[key+40].image;
            tmp.name = ProductLocal[key+40].name;
            tmp.price = ProductLocal[key+40].price;
            tmp.time=formatTime(date).toString();   
        }
        else{
            tmp.id = ProductLocal[key].id;
            tmp.img = ProductLocal[key].image;
            tmp.name = ProductLocal[key].name;
            tmp.price = ProductLocal[key].price;
            tmp.time=formatTime(date).toString();
        }
        let ucIndex = userCard.findIndex(uc => uc.id == tmp.id);
        // console.log(ucIndex)    
        if (ucIndex != -1) {   
            userCard[ucIndex].quantity += 1;
            userCard[ucIndex].price = userCard[ucIndex].quantity * allProducts[key].price;
        }
        else {
            tmp.quantity = 1;
            userCard.push(tmp);
        }
        localStorage.setItem(usernameLoggedIn, JSON.stringify(userCard));
        reloadCard()
    }

}
function reloadCard() {
    let json = JSON.parse(localStorage.getItem(usernameLoggedIn));
    let count = 0;
    let totalPrice = 0;
    listCard.innerText="";
    json.forEach((value, key) => {
        if (value != null) {
            totalPrice = totalPrice + value.price;
            count = count + value.quantity;
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
           <img src="./assets/img/All/${value.img}" class="products_card-img">
           <div>${value.name}</div>
           <div> ${value.price.toLocaleString()}</div>
           <div class="pending" >${value.status}</div>
           <div>${value.time}</div>
           <div class="btn-quantity"> 
           <button onclick="changeQuantity(${key},${value.quantity - 1})">-</button>
           <div>${value.quantity}</div>
            <button onclick="changeQuantity(${key},${value.quantity + 1})">+</button>
            </div>
           `
            listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
let userCard
var btn_login = document.querySelector('.btn-login')
// Login 
btn_login.onclick = function () {
    let username_login = document.querySelector('.auth-form_input-username_login').value;
    let password_login = document.querySelector('.auth-form_input-password_login').value;

    var existingUsers = JSON.parse(localStorage.getItem('users')) || [];
    var loggedInUser = existingUsers.find(u => u.username === username_login && u.password === password_login);
    if (loggedInUser) {
        alert("Đăng nhập thành công")
        if (loggedInUser.username == '0342301559') {
            window.location.href = 'index2.html'
        }
        else {
            checkLogin = true;
            nav_list[2].style.display = 'none';
            nav_list[3].style.display = 'flex';
            modal.style.display = 'none';
            changeUser.innerText = username_login;
            usernameLoggedIn = JSON.stringify(username_login);
            userCard= JSON.parse(localStorage.getItem(usernameLoggedIn)) ||[];
            localStorage.setItem(usernameLoggedIn,JSON.stringify(userCard));
            reloadCard()
        }
    }
    else alert("Đăng nhập thất bại")

}
function changeQuantity(key, quantity) {
    let json = JSON.parse(localStorage.getItem(usernameLoggedIn));
    if (quantity == 0) {
        // delete json[key];
        json.splice(key,1);
    ////console.log(json);
    }
    else {
        json[key].quantity = quantity;
        json[key].price = allProducts[key].price * quantity;
    }
    localStorage.setItem(usernameLoggedIn, JSON.stringify(json));
    reloadCard();
    //////console.log(json)
}

function Main() {
    pagination.style.display = 'block';
    while (list.hasChildNodes()) {
        list.removeChild(list.firstChild);
    }
    initApp(allProducts)
    while (listproducts.hasChildNodes()) {
        listproducts.removeChild(listproducts.firstChild)
    }
    initProductsInf(allProducts);
    listProduct=document.querySelectorAll('.content .products-card');
    thisPage=1
    loadItem(listProduct);
    container.style.display = "block";
    privacy.style.display = "block";
    slider.style.display = "block";
    active.style.display = 'none';
    
    listproducts.children[save].classList.remove('open');
    let buyTicketsMain = document.querySelectorAll('.products-card-click');
    showInfo(buyTicketsMain, listproducts);
    footer.style.display= 'block';
    changeTitle("ALL PRODUCTS");
}


// Register
var btn_register = document.querySelector('.btn-register')

var regexPhone = /(0[9|3])+([0-9]{8})\b/g;
var check = true;
function regex(phone) {
    return phone.match(regexPhone) ? true : false;
}

btn_register.onclick = function () {
    // alert("hehehehehehe")
    var username_register = document.querySelector('.auth-form_input-username').value;
    var password_register = document.querySelector('.auth-form_input-password').value;
    var password_verify_register = document.querySelector('.auth-form_input-password-verify').value;
    if (!username_register || !password_register || !password_verify_register) {
        alert('Vui lòng điền đầy đủ thông tin');
        return;
    }

    if (password_register !== password_verify_register) {
        alert('Mật khẩu và xác nhận mật khẩu không khớp');
        return;
    }

    let user =
    {
        username: username_register,
        password: password_register,
    }
    var existingUsers = JSON.parse(localStorage.getItem('users')) || [];

    // Check if the username is already taken
    if (existingUsers.some(u => u.username === username_register)) {
        alert('Tên đăng nhập đã tồn tại');
        return;
    }

    if (!regex(username_register)) {
        alert("Số điện thoại không hợp lệ")
    }
    else if (JSON.stringify(password_register) == null || JSON.stringify(password_verify_register) == null || JSON.stringify(password_register) != JSON.stringify(password_verify_register)) {
        alert("Mật khẩu chưa được xác thực hoặc bỏ trống")
    }
    else {

        // Add the new user to the array
        existingUsers.push(user);

        // Save the updated user array to localStorage
        localStorage.setItem('users', JSON.stringify(existingUsers));
        alert("Đăng kí thành công")
    }
}


let changeUser = document.querySelector('.header_navbar-item-username');
let nav_list = document.querySelectorAll('.header_navbar-list')



function formatTime(date){
    let hours=date.getHours("");
    let minutes=date.getMinutes();
    let seconds=date.getSeconds();
    let day=date.getDate()
    let month=date.getMonth();
    let year=date.getFullYear();
    let amOrpm=hours >=12 ? "pm" : "am";
 
    hours =(hours%12) || 12;
    hours=formatZeroes(hours);
    minutes=formatZeroes(minutes);
    seconds=formatZeroes(seconds);
    
    return `${hours}:${minutes}:${seconds} ${amOrpm} | ${day}/${month+1}/${year}`
 }
 function formatZeroes(time)
 {
    time =time.toString();
    return time.length <2 ? "0"+time : time;
 }

 let logoutAccount =document.querySelector('.header_navbar-item-logout')
 logoutAccount.addEventListener('click',()=>{
    nav_list[2].style.display = 'flex';
    nav_list[3].style.display = 'none';
    checkLogin = false;
    while (listCard.hasChildNodes()) {
        listCard.removeChild(listCard.firstChild);
    }
    total.innerText = 0;
    quantity.innerText = 0;
 })
 
 payMent.addEventListener('click',()=>{
    let json = JSON.parse(localStorage.getItem(usernameLoggedIn));
    json.forEach((value, key) => {
        if (value != null) {
          value.status="Chờ xác nhận";
        }
    })
    localStorage.setItem(usernameLoggedIn,JSON.stringify(json))
    reloadCard()
})



function changeTitle(value){
    document.getElementById('title').innerHTML=value;
}

let productList=document.querySelectorAll('.product-text');
let searchInput=document.querySelector('.search input');
let count;
searchInput.addEventListener('input',(e)=>{
    let search=document.getElementById('search-ic');
    search.addEventListener('click',()=>{
        count=0;
        Main();
        container.style.display = 'block';
        active.style.display = 'none';
        privacy.style.display = 'none';
        slider.style.display = 'none';
        footer.style.display='block';
        let searchData=e.target.value.trim().toLowerCase();
        console.log(searchData);
        let searchList=[];
        productList.forEach((item,key)=>{
        console.log(item.innerText);
        if(item.innerText.toLowerCase().includes(searchData))
        {
            // listProduct[key].style.display="block";
            count+=1;
            searchList.push(allProducts[key]);
            console.log(searchList);
        }
        else{
            listProduct[key].style.display="none";
        }
        })
        if(count==0){
            changeTitle('No Search Result...'); 
            pagination.style.display= 'none';
        }
        else {
            changeTitle('Search Result');
            console.log(searchList);
            while (list.hasChildNodes()) {
                list.removeChild(list.firstChild);
            }
            initApp(searchList);
            listProduct = document.querySelectorAll('.content .products-card');
            while (listproducts.hasChildNodes()) {
                listproducts.removeChild(listproducts.firstChild)
            }
            initProductsInf(searchList);
            loadItem(listProduct);
            thisPage=1;
            pagination.style.display = 'block';
            
            
        }
        
        
        
        container.style.display='block';
        let buyTicket = document.querySelectorAll('.products-card-click');
        for(let i=0;i<buyTicket.length;i++)
        {
         buyTicket[i].addEventListener('click',()=>{
                listproducts.children[i].classList.add('open');
                container.style.display='none';
                privacy.style.display='none';
        }
        )
        }

    // console.log(resultData);
})
   
searchInput.addEventListener('keypress',(e)=>{
    var keycode = (e.keyCode ? e.keyCode : e.which);
    if (keycode == '13') {
        count=0;
        Main();
        container.style.display = 'block';
        active.style.display = 'none';
        privacy.style.display = 'none';
        slider.style.display = 'none';
        footer.style.display='block';
        let searchData=e.target.value.trim().toLowerCase();
        console.log(searchData);
        let searchList=[];
        productList.forEach((item,key)=>{
        console.log(item.innerText);
        if(item.innerText.toLowerCase().includes(searchData))
        {
            // listProduct[key].style.display="block";
            count+=1;
            searchList.push(allProducts[key]);
            console.log(searchList);
        }
        else{
            listProduct[key].style.display="none";
        }
        })
        if(count==0){
            changeTitle('No Search Result...'); 
            pagination.style.display= 'none';
        }
        else {
            changeTitle('Search Result');
            console.log(searchList);
            while (list.hasChildNodes()) {
                list.removeChild(list.firstChild);
            }
            initApp(searchList);
            listProduct = document.querySelectorAll('.content .products-card');
            while (listproducts.hasChildNodes()) {
                listproducts.removeChild(listproducts.firstChild)
            }
            initProductsInf(searchList);
            loadItem(listProduct);
            thisPage=1;
            pagination.style.display = 'block';
            
        }
        
        
        
        container.style.display='block';
        let buyTicket = document.querySelectorAll('.products-card-click');
        for(let i=0;i<buyTicket.length;i++)
        {
         buyTicket[i].addEventListener('click',()=>{
                listproducts.children[i].classList.add('open');
                container.style.display='none';
                privacy.style.display='none';
        }
        )
        }

}
})
   
})