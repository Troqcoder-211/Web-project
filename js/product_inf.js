
const allHoverImages = document.querySelectorAll('.hover-container div img');
const imgContainer = document.querySelector('.img-container');

window.addEventListener('DOMContentLoaded', () => {
    allHoverImages[0].parentElement.classList.add('active');
});

allHoverImages.forEach((image) => {
    image.addEventListener('mouseover', () =>{
        imgContainer.querySelector('img').src = image.src;
        resetActiveImg();
        image.parentElement.classList.add('active');
    });
});

function resetActiveImg(){
    allHoverImages.forEach((img) => {
        img.parentElement.classList.remove('active');
    });
}

let productInfo=[
    {
        id:1,
        name:`Đồng hồ Patek Philippe Aquanaut Date Brown 5167R-001 Mặt Số Nâu 40.8mm`,
        image:`PatekPhilippe1.png`,
        price:2504250000,
        brand:`Patek Philippe`,
        Code:`5167R-001`,
        Size:`42mm`,
        Material:`Dây cao su`,
        ShellMaterial:`Vàng hồng`,
        detail:` là một trong những thiết kế được ra mắt vào năm 2021. Đồng hồ là một sự tái khẳng định tinh thần “sang trọng đương đại” của mẫu đồng hồ Aquanaut Chronograph, lần đầu tiên được xuất hiện trong một lớp vỏ bằng vàng trắng. Bảo vệ mặt số là lớp tinh tể sapphire trong suốt để lộ bên dưới là mặt số màu xanh kaki mang xu hướng hiện đại với họa tiết bàn cờ khắc nổi. Trung tâm mặt số là bộ kim giờ, kim phút và kim giây với lớp phủ phát quang màu trắng, cho phép người đeo có thể xem giờ ngay cả khi ở trong điều kiện thiếu ánh sáng. Hơn nữa, để tạo nên nét chấm phá cho mặt số thì thay vì sử dụng một kiểu cọc số đơn lẻ, thương hiệu đã kết hợp cả cọc số Ả Rập và vạch chỉ giờ cho chiếc đồng hồ này. Tại vị trí 3 giờ là một ô cửa sổ lịch ngày. Bộ đếm chronograph 60 phút ở vị trí 6 giờ cũng có hình bát giác bo tròn giống khung bezel.
        còn được trang bị bộ máy CH 28‑520 C, hoạt động ở tần số 28.800vph và có mức dự trữ năng lượng tối đa lên đến 55 giờ. Có thể nhìn thấy qua mặt kính sau là cân bằng Gyromax với lò xo cân bằng Spiromax, con dấu Patek Philippe và cánh quạt được làm bằng vàng hồng 21k. Đồng hồ có khả năng kháng nước ở độ sâu tối đa 120 mét.`
    },
    {
        id:2,
        name:`Đồng Hồ Patek Philippe Calatrava Engraved Black Dial Platium 5088-100P-001 38mm`,
        image:`PatekPhilippe2.png`,
        price:2178000000,
        brand:`Patek Philippe`,
        Code:`5088-100P-001`,
        Size:`38mm`,
        Material:`Dây cá sấu`,
        ShellMaterial:`Platinum`,
        detail:` là một trong những thiết kế được ra mắt vào năm 2021. Đồng hồ là một sự tái khẳng định tinh thần “sang trọng đương đại” của mẫu đồng hồ Aquanaut Chronograph, lần đầu tiên được xuất hiện trong một lớp vỏ bằng vàng trắng. Bảo vệ mặt số là lớp tinh tể sapphire trong suốt để lộ bên dưới là mặt số màu xanh kaki mang xu hướng hiện đại với họa tiết bàn cờ khắc nổi. Trung tâm mặt số là bộ kim giờ, kim phút và kim giây với lớp phủ phát quang màu trắng, cho phép người đeo có thể xem giờ ngay cả khi ở trong điều kiện thiếu ánh sáng. Hơn nữa, để tạo nên nét chấm phá cho mặt số thì thay vì sử dụng một kiểu cọc số đơn lẻ, thương hiệu đã kết hợp cả cọc số Ả Rập và vạch chỉ giờ cho chiếc đồng hồ này. Tại vị trí 3 giờ là một ô cửa sổ lịch ngày. Bộ đếm chronograph 60 phút ở vị trí 6 giờ cũng có hình bát giác bo tròn giống khung bezel.
        còn được trang bị bộ máy CH 28‑520 C, hoạt động ở tần số 28.800vph và có mức dự trữ năng lượng tối đa lên đến 55 giờ. Có thể nhìn thấy qua mặt kính sau là cân bằng Gyromax với lò xo cân bằng Spiromax, con dấu Patek Philippe và cánh quạt được làm bằng vàng hồng 21k. Đồng hồ có khả năng kháng nước ở độ sâu tối đa 120 mét.`

    },
    {
        id:3,
        name:`Đồng hồ Patek Philippe Complications Black-Gray DIal Platium Chronograph 5905P-010 42mm`,
        image:`PatekPhilippe3.png`,
        price:1780000000,
        brand:`Patek Philippe`,
        Code:`5905P-010`,
        Size:`42mm`,
        Material:`Dây cá sấu`,
        ShellMaterial:`Platinum`,
        detail:` là một trong những thiết kế được ra mắt vào năm 2021. Đồng hồ là một sự tái khẳng định tinh thần “sang trọng đương đại” của mẫu đồng hồ Aquanaut Chronograph, lần đầu tiên được xuất hiện trong một lớp vỏ bằng vàng trắng. Bảo vệ mặt số là lớp tinh tể sapphire trong suốt để lộ bên dưới là mặt số màu xanh kaki mang xu hướng hiện đại với họa tiết bàn cờ khắc nổi. Trung tâm mặt số là bộ kim giờ, kim phút và kim giây với lớp phủ phát quang màu trắng, cho phép người đeo có thể xem giờ ngay cả khi ở trong điều kiện thiếu ánh sáng. Hơn nữa, để tạo nên nét chấm phá cho mặt số thì thay vì sử dụng một kiểu cọc số đơn lẻ, thương hiệu đã kết hợp cả cọc số Ả Rập và vạch chỉ giờ cho chiếc đồng hồ này. Tại vị trí 3 giờ là một ô cửa sổ lịch ngày. Bộ đếm chronograph 60 phút ở vị trí 6 giờ cũng có hình bát giác bo tròn giống khung bezel.
        còn được trang bị bộ máy CH 28‑520 C, hoạt động ở tần số 28.800vph và có mức dự trữ năng lượng tối đa lên đến 55 giờ. Có thể nhìn thấy qua mặt kính sau là cân bằng Gyromax với lò xo cân bằng Spiromax, con dấu Patek Philippe và cánh quạt được làm bằng vàng hồng 21k. Đồng hồ có khả năng kháng nước ở độ sâu tối đa 120 mét.`

    },
    {
        id:4,
        name:`Đồng hồ Patek Philippe Grand Complications Chronograph 5204-1R-001 Mặt Số Đen 40.2mm`,
        image:`PatekPhilippe4.png`,
        price:6480000000 ,
        brand:`Patek Philippe`,
        Code:`5204-1R-001`,
        Size:`40.2mm`,
        Material:`Vàng hồng`,
        ShellMaterial:`Vàng hồng`,
        detail:`là một trong những thiết kế được ra mắt vào năm 2021. Đồng hồ là một sự tái khẳng định tinh thần “sang trọng đương đại” của mẫu đồng hồ Aquanaut Chronograph, lần đầu tiên được xuất hiện trong một lớp vỏ bằng vàng trắng. Bảo vệ mặt số là lớp tinh tể sapphire trong suốt để lộ bên dưới là mặt số màu xanh kaki mang xu hướng hiện đại với họa tiết bàn cờ khắc nổi. Trung tâm mặt số là bộ kim giờ, kim phút và kim giây với lớp phủ phát quang màu trắng, cho phép người đeo có thể xem giờ ngay cả khi ở trong điều kiện thiếu ánh sáng. Hơn nữa, để tạo nên nét chấm phá cho mặt số thì thay vì sử dụng một kiểu cọc số đơn lẻ, thương hiệu đã kết hợp cả cọc số Ả Rập và vạch chỉ giờ cho chiếc đồng hồ này. Tại vị trí 3 giờ là một ô cửa sổ lịch ngày. Bộ đếm chronograph 60 phút ở vị trí 6 giờ cũng có hình bát giác bo tròn giống khung bezel.
        còn được trang bị bộ máy CH 28‑520 C, hoạt động ở tần số 28.800vph và có mức dự trữ năng lượng tối đa lên đến 55 giờ. Có thể nhìn thấy qua mặt kính sau là cân bằng Gyromax với lò xo cân bằng Spiromax, con dấu Patek Philippe và cánh quạt được làm bằng vàng hồng 21k. Đồng hồ có khả năng kháng nước ở độ sâu tối đa 120 mét.`

    },
    {
        id:5,
        name:`.Đồng hồ Patek Philippe Ladies Nautilus Rose Gold 7118-1450R-001 Mặt Số Kim Cương 35.2mm`,
        image:`PatekPhilippe5.png`,
        price:9281800000 ,
    },
    {
        id:6,
        name:`Đồng Hồ Patek Philippe Annual Calendar Complications 4947G-001 Mặt Số Xanh 38mm`,
        image:`PatekPhilippe6.png`,
        price:1061325000 ,
        brand:`Patek Philippe`,
        Code:`4947G-010`,
        Size:`38mm`,
        Material:`Da cá sấu`,
        ShellMaterial:`Vàng trắng và kim cương`,
        detail:` là một trong những thiết kế được ra mắt vào năm 2021. Đồng hồ là một sự tái khẳng định tinh thần “sang trọng đương đại” của mẫu đồng hồ Aquanaut Chronograph, lần đầu tiên được xuất hiện trong một lớp vỏ bằng vàng trắng. Bảo vệ mặt số là lớp tinh tể sapphire trong suốt để lộ bên dưới là mặt số màu xanh kaki mang xu hướng hiện đại với họa tiết bàn cờ khắc nổi. Trung tâm mặt số là bộ kim giờ, kim phút và kim giây với lớp phủ phát quang màu trắng, cho phép người đeo có thể xem giờ ngay cả khi ở trong điều kiện thiếu ánh sáng. Hơn nữa, để tạo nên nét chấm phá cho mặt số thì thay vì sử dụng một kiểu cọc số đơn lẻ, thương hiệu đã kết hợp cả cọc số Ả Rập và vạch chỉ giờ cho chiếc đồng hồ này. Tại vị trí 3 giờ là một ô cửa sổ lịch ngày. Bộ đếm chronograph 60 phút ở vị trí 6 giờ cũng có hình bát giác bo tròn giống khung bezel.
        còn được trang bị bộ máy CH 28‑520 C, hoạt động ở tần số 28.800vph và có mức dự trữ năng lượng tối đa lên đến 55 giờ. Có thể nhìn thấy qua mặt kính sau là cân bằng Gyromax với lò xo cân bằng Spiromax, con dấu Patek Philippe và cánh quạt được làm bằng vàng hồng 21k. Đồng hồ có khả năng kháng nước ở độ sâu tối đa 120 mét.`

    },
    {
        id:7,
        name:`Đồng Hồ Patek Philippe Annual Calendar Complications 5961R-010 Chronograph Mặt Số Đen 40.5mm`,
        image:`PatekPhilippe7.png`,
        price:4245300000 ,
        brand:`Patek Philippe`,
        Code:`5961R-010`,
        Size:`40.5mm`,
        Material:`Da `,
        ShellMaterial:`Vàng hồng`,
        detail:` là một trong những thiết kế được ra mắt vào năm 2021. Đồng hồ là một sự tái khẳng định tinh thần “sang trọng đương đại” của mẫu đồng hồ Aquanaut Chronograph, lần đầu tiên được xuất hiện trong một lớp vỏ bằng vàng trắng. Bảo vệ mặt số là lớp tinh tể sapphire trong suốt để lộ bên dưới là mặt số màu xanh kaki mang xu hướng hiện đại với họa tiết bàn cờ khắc nổi. Trung tâm mặt số là bộ kim giờ, kim phút và kim giây với lớp phủ phát quang màu trắng, cho phép người đeo có thể xem giờ ngay cả khi ở trong điều kiện thiếu ánh sáng. Hơn nữa, để tạo nên nét chấm phá cho mặt số thì thay vì sử dụng một kiểu cọc số đơn lẻ, thương hiệu đã kết hợp cả cọc số Ả Rập và vạch chỉ giờ cho chiếc đồng hồ này. Tại vị trí 3 giờ là một ô cửa sổ lịch ngày. Bộ đếm chronograph 60 phút ở vị trí 6 giờ cũng có hình bát giác bo tròn giống khung bezel.
        còn được trang bị bộ máy CH 28‑520 C, hoạt động ở tần số 28.800vph và có mức dự trữ năng lượng tối đa lên đến 55 giờ. Có thể nhìn thấy qua mặt kính sau là cân bằng Gyromax với lò xo cân bằng Spiromax, con dấu Patek Philippe và cánh quạt được làm bằng vàng hồng 21k. Đồng hồ có khả năng kháng nước ở độ sâu tối đa 120 mét.`

    },
    {
        id:8,
        name:`Đồng Hồ Patek Philippe Aquanaut 5067A-027 Singapore Edition Mặt Số Hồng 35.6mm`,
        image:`PatekPhilippe8.png`,
        price:1514475000 ,
        brand:`Patek Philippe`,
        Code:`5067A-027`,
        Size:`35.6mm`,
        Material:`Rubber`,
        ShellMaterial:`Thép không gỉ`,
        detail:` là một trong những thiết kế được ra mắt vào năm 2021. Đồng hồ là một sự tái khẳng định tinh thần “sang trọng đương đại” của mẫu đồng hồ Aquanaut Chronograph, lần đầu tiên được xuất hiện trong một lớp vỏ bằng vàng trắng. Bảo vệ mặt số là lớp tinh tể sapphire trong suốt để lộ bên dưới là mặt số màu xanh kaki mang xu hướng hiện đại với họa tiết bàn cờ khắc nổi. Trung tâm mặt số là bộ kim giờ, kim phút và kim giây với lớp phủ phát quang màu trắng, cho phép người đeo có thể xem giờ ngay cả khi ở trong điều kiện thiếu ánh sáng. Hơn nữa, để tạo nên nét chấm phá cho mặt số thì thay vì sử dụng một kiểu cọc số đơn lẻ, thương hiệu đã kết hợp cả cọc số Ả Rập và vạch chỉ giờ cho chiếc đồng hồ này. Tại vị trí 3 giờ là một ô cửa sổ lịch ngày. Bộ đếm chronograph 60 phút ở vị trí 6 giờ cũng có hình bát giác bo tròn giống khung bezel.
        còn được trang bị bộ máy CH 28‑520 C, hoạt động ở tần số 28.800vph và có mức dự trữ năng lượng tối đa lên đến 55 giờ. Có thể nhìn thấy qua mặt kính sau là cân bằng Gyromax với lò xo cân bằng Spiromax, con dấu Patek Philippe và cánh quạt được làm bằng vàng hồng 21k. Đồng hồ có khả năng kháng nước ở độ sâu tối đa 120 mét.`

    },
    {
        id:9,
        name:`Đồng Hồ Patek Philippe Aquanaut Chronograph 5968G-001 Mặt Số Xanh Đen 42.2mm`,
        image:`PatekPhilippe9.png`,
        price:2842000000 ,
        brand:`Patek Philippe`,
        Code:`5968G-001`,
        Size:`42.2mm`,
        Material:`Composite`,
        ShellMaterial:`Vàng trằng 18K`,
        detail:` là một trong những thiết kế được ra mắt vào năm 2021. Đồng hồ là một sự tái khẳng định tinh thần “sang trọng đương đại” của mẫu đồng hồ Aquanaut Chronograph, lần đầu tiên được xuất hiện trong một lớp vỏ bằng vàng trắng. Bảo vệ mặt số là lớp tinh tể sapphire trong suốt để lộ bên dưới là mặt số màu xanh kaki mang xu hướng hiện đại với họa tiết bàn cờ khắc nổi. Trung tâm mặt số là bộ kim giờ, kim phút và kim giây với lớp phủ phát quang màu trắng, cho phép người đeo có thể xem giờ ngay cả khi ở trong điều kiện thiếu ánh sáng. Hơn nữa, để tạo nên nét chấm phá cho mặt số thì thay vì sử dụng một kiểu cọc số đơn lẻ, thương hiệu đã kết hợp cả cọc số Ả Rập và vạch chỉ giờ cho chiếc đồng hồ này. Tại vị trí 3 giờ là một ô cửa sổ lịch ngày. Bộ đếm chronograph 60 phút ở vị trí 6 giờ cũng có hình bát giác bo tròn giống khung bezel.
        còn được trang bị bộ máy CH 28‑520 C, hoạt động ở tần số 28.800vph và có mức dự trữ năng lượng tối đa lên đến 55 giờ. Có thể nhìn thấy qua mặt kính sau là cân bằng Gyromax với lò xo cân bằng Spiromax, con dấu Patek Philippe và cánh quạt được làm bằng vàng hồng 21k. Đồng hồ có khả năng kháng nước ở độ sâu tối đa 120 mét.`

    },
    {
        id:10,
        name:`Đồng hồ Patek Philippe Aquanaut Chronograph 5968G-010 Mặt Số Xanh Khaki 42.2mm`,
        image:`PatekPhilippe10.png`,
        price:3211800000 ,
        brand:`Patek Philippe`,
        Code:`5968G-010`,
        Size:`42.2mm`,
        Material:`Nguyên liệu hỗn hợp`,
        ShellMaterial:`Vàng trắng`,
        detail:` là một trong những thiết kế được ra mắt vào năm 2021. Đồng hồ là một sự tái khẳng định tinh thần “sang trọng đương đại” của mẫu đồng hồ Aquanaut Chronograph, lần đầu tiên được xuất hiện trong một lớp vỏ bằng vàng trắng. Bảo vệ mặt số là lớp tinh tể sapphire trong suốt để lộ bên dưới là mặt số màu xanh kaki mang xu hướng hiện đại với họa tiết bàn cờ khắc nổi. Trung tâm mặt số là bộ kim giờ, kim phút và kim giây với lớp phủ phát quang màu trắng, cho phép người đeo có thể xem giờ ngay cả khi ở trong điều kiện thiếu ánh sáng. Hơn nữa, để tạo nên nét chấm phá cho mặt số thì thay vì sử dụng một kiểu cọc số đơn lẻ, thương hiệu đã kết hợp cả cọc số Ả Rập và vạch chỉ giờ cho chiếc đồng hồ này. Tại vị trí 3 giờ là một ô cửa sổ lịch ngày. Bộ đếm chronograph 60 phút ở vị trí 6 giờ cũng có hình bát giác bo tròn giống khung bezel.
        còn được trang bị bộ máy CH 28‑520 C, hoạt động ở tần số 28.800vph và có mức dự trữ năng lượng tối đa lên đến 55 giờ. Có thể nhìn thấy qua mặt kính sau là cân bằng Gyromax với lò xo cân bằng Spiromax, con dấu Patek Philippe và cánh quạt được làm bằng vàng hồng 21k. Đồng hồ có khả năng kháng nước ở độ sâu tối đa 120 mét.`

    },
    {
        id:11,
        name:`Đồng hồ Patek Philippe Aquanaut Chronograph 5968A-001 Mặt Số Đen 42.2mm`,
        image:`PatekPhilippe11.png`,
        price:3280000000,
        brand:`Patek Philippe`,
        Code:`5968A-001`,
        Size:`42.2mm`,
        Material:`Cao su`,
        ShellMaterial:`Thép`,
        detail:` là một trong những thiết kế được ra mắt vào năm 2021. Đồng hồ là một sự tái khẳng định tinh thần “sang trọng đương đại” của mẫu đồng hồ Aquanaut Chronograph, lần đầu tiên được xuất hiện trong một lớp vỏ bằng vàng trắng. Bảo vệ mặt số là lớp tinh tể sapphire trong suốt để lộ bên dưới là mặt số màu xanh kaki mang xu hướng hiện đại với họa tiết bàn cờ khắc nổi. Trung tâm mặt số là bộ kim giờ, kim phút và kim giây với lớp phủ phát quang màu trắng, cho phép người đeo có thể xem giờ ngay cả khi ở trong điều kiện thiếu ánh sáng. Hơn nữa, để tạo nên nét chấm phá cho mặt số thì thay vì sử dụng một kiểu cọc số đơn lẻ, thương hiệu đã kết hợp cả cọc số Ả Rập và vạch chỉ giờ cho chiếc đồng hồ này. Tại vị trí 3 giờ là một ô cửa sổ lịch ngày. Bộ đếm chronograph 60 phút ở vị trí 6 giờ cũng có hình bát giác bo tròn giống khung bezel.
        còn được trang bị bộ máy CH 28‑520 C, hoạt động ở tần số 28.800vph và có mức dự trữ năng lượng tối đa lên đến 55 giờ. Có thể nhìn thấy qua mặt kính sau là cân bằng Gyromax với lò xo cân bằng Spiromax, con dấu Patek Philippe và cánh quạt được làm bằng vàng hồng 21k. Đồng hồ có khả năng kháng nước ở độ sâu tối đa 120 mét.`
 
    },
    {
        id:12,
        name:`Đồng Hồ Patek Philippe Aquanaut Date Black 5167A-001 Mặt Số Đen 40.8mm`,
        image:`PatekPhilippe12.png`,
        price:1440000000,
        brand:`Patek Philippe`,
        Code:`5167A-001`,
        Size:`40.8mm`,
        Material:`Cao su`,
        ShellMaterial:`Thép không gỉ`,
        detail:` là một trong những thiết kế được ra mắt vào năm 2021. Đồng hồ là một sự tái khẳng định tinh thần “sang trọng đương đại” của mẫu đồng hồ Aquanaut Chronograph, lần đầu tiên được xuất hiện trong một lớp vỏ bằng vàng trắng. Bảo vệ mặt số là lớp tinh tể sapphire trong suốt để lộ bên dưới là mặt số màu xanh kaki mang xu hướng hiện đại với họa tiết bàn cờ khắc nổi. Trung tâm mặt số là bộ kim giờ, kim phút và kim giây với lớp phủ phát quang màu trắng, cho phép người đeo có thể xem giờ ngay cả khi ở trong điều kiện thiếu ánh sáng. Hơn nữa, để tạo nên nét chấm phá cho mặt số thì thay vì sử dụng một kiểu cọc số đơn lẻ, thương hiệu đã kết hợp cả cọc số Ả Rập và vạch chỉ giờ cho chiếc đồng hồ này. Tại vị trí 3 giờ là một ô cửa sổ lịch ngày. Bộ đếm chronograph 60 phút ở vị trí 6 giờ cũng có hình bát giác bo tròn giống khung bezel.
        còn được trang bị bộ máy CH 28‑520 C, hoạt động ở tần số 28.800vph và có mức dự trữ năng lượng tối đa lên đến 55 giờ. Có thể nhìn thấy qua mặt kính sau là cân bằng Gyromax với lò xo cân bằng Spiromax, con dấu Patek Philippe và cánh quạt được làm bằng vàng hồng 21k. Đồng hồ có khả năng kháng nước ở độ sâu tối đa 120 mét.`
  
    },
    {
        id:13,
        name:`Đồng Hồ Patek Philippe Complications Blue Dial Platium Chronograph 5905P-001 Mặt Số Xanh 42mm`,
        image:`PatekPhilippe13.png`,
        price:1880000000,
        brand:`Patek Philippe`,
        Code:`5905P-001`,
        Size:`42mm`,
        Material:`Da cá sấu`,
        ShellMaterial:`Platinum`,
        detail:` là một trong những thiết kế được ra mắt vào năm 2021. Đồng hồ là một sự tái khẳng định tinh thần “sang trọng đương đại” của mẫu đồng hồ Aquanaut Chronograph, lần đầu tiên được xuất hiện trong một lớp vỏ bằng vàng trắng. Bảo vệ mặt số là lớp tinh tể sapphire trong suốt để lộ bên dưới là mặt số màu xanh kaki mang xu hướng hiện đại với họa tiết bàn cờ khắc nổi. Trung tâm mặt số là bộ kim giờ, kim phút và kim giây với lớp phủ phát quang màu trắng, cho phép người đeo có thể xem giờ ngay cả khi ở trong điều kiện thiếu ánh sáng. Hơn nữa, để tạo nên nét chấm phá cho mặt số thì thay vì sử dụng một kiểu cọc số đơn lẻ, thương hiệu đã kết hợp cả cọc số Ả Rập và vạch chỉ giờ cho chiếc đồng hồ này. Tại vị trí 3 giờ là một ô cửa sổ lịch ngày. Bộ đếm chronograph 60 phút ở vị trí 6 giờ cũng có hình bát giác bo tròn giống khung bezel.
        còn được trang bị bộ máy CH 28‑520 C, hoạt động ở tần số 28.800vph và có mức dự trữ năng lượng tối đa lên đến 55 giờ. Có thể nhìn thấy qua mặt kính sau là cân bằng Gyromax với lò xo cân bằng Spiromax, con dấu Patek Philippe và cánh quạt được làm bằng vàng hồng 21k. Đồng hồ có khả năng kháng nước ở độ sâu tối đa 120 mét.`
  

    },
    {
        id:14,
        name:`Đồng hồ Patek Philippe Complications Automatic 5205R-001 Mặt Số Trắng 40mm`,
        image:`PatekPhilippe14.png`,
        price:1230000000,
        brand:`Patek Philippe`,
        Code:`5205R-001`,
        Size:`40mm`,
        Material:`Da cá sấu`,
        ShellMaterial:`Vàng hồng`,
        detail:` là một trong những thiết kế được ra mắt vào năm 2021. Đồng hồ là một sự tái khẳng định tinh thần “sang trọng đương đại” của mẫu đồng hồ Aquanaut Chronograph, lần đầu tiên được xuất hiện trong một lớp vỏ bằng vàng trắng. Bảo vệ mặt số là lớp tinh tể sapphire trong suốt để lộ bên dưới là mặt số màu xanh kaki mang xu hướng hiện đại với họa tiết bàn cờ khắc nổi. Trung tâm mặt số là bộ kim giờ, kim phút và kim giây với lớp phủ phát quang màu trắng, cho phép người đeo có thể xem giờ ngay cả khi ở trong điều kiện thiếu ánh sáng. Hơn nữa, để tạo nên nét chấm phá cho mặt số thì thay vì sử dụng một kiểu cọc số đơn lẻ, thương hiệu đã kết hợp cả cọc số Ả Rập và vạch chỉ giờ cho chiếc đồng hồ này. Tại vị trí 3 giờ là một ô cửa sổ lịch ngày. Bộ đếm chronograph 60 phút ở vị trí 6 giờ cũng có hình bát giác bo tròn giống khung bezel.
        còn được trang bị bộ máy CH 28‑520 C, hoạt động ở tần số 28.800vph và có mức dự trữ năng lượng tối đa lên đến 55 giờ. Có thể nhìn thấy qua mặt kính sau là cân bằng Gyromax với lò xo cân bằng Spiromax, con dấu Patek Philippe và cánh quạt được làm bằng vàng hồng 21k. Đồng hồ có khả năng kháng nước ở độ sâu tối đa 120 mét.`
   
    },
    {
        id:15,
        name:`Đồng hồ Patek Philippe Complications 5930G-010 Mặt Số Sapphire Xanh 39.5mm`,
        image:`PatekPhilippe15.png`,
        price:1486000000 ,
        brand:`Patek Philippe`,
        Code:`5930G-010`,
        Size:`39.5mm`,
        Material:`Da cá sấu`,
        ShellMaterial:`Vàng trắng`,
        detail:` là một trong những thiết kế được ra mắt vào năm 2021. Đồng hồ là một sự tái khẳng định tinh thần “sang trọng đương đại” của mẫu đồng hồ Aquanaut Chronograph, lần đầu tiên được xuất hiện trong một lớp vỏ bằng vàng trắng. Bảo vệ mặt số là lớp tinh tể sapphire trong suốt để lộ bên dưới là mặt số màu xanh kaki mang xu hướng hiện đại với họa tiết bàn cờ khắc nổi. Trung tâm mặt số là bộ kim giờ, kim phút và kim giây với lớp phủ phát quang màu trắng, cho phép người đeo có thể xem giờ ngay cả khi ở trong điều kiện thiếu ánh sáng. Hơn nữa, để tạo nên nét chấm phá cho mặt số thì thay vì sử dụng một kiểu cọc số đơn lẻ, thương hiệu đã kết hợp cả cọc số Ả Rập và vạch chỉ giờ cho chiếc đồng hồ này. Tại vị trí 3 giờ là một ô cửa sổ lịch ngày. Bộ đếm chronograph 60 phút ở vị trí 6 giờ cũng có hình bát giác bo tròn giống khung bezel.
        còn được trang bị bộ máy CH 28‑520 C, hoạt động ở tần số 28.800vph và có mức dự trữ năng lượng tối đa lên đến 55 giờ. Có thể nhìn thấy qua mặt kính sau là cân bằng Gyromax với lò xo cân bằng Spiromax, con dấu Patek Philippe và cánh quạt được làm bằng vàng hồng 21k. Đồng hồ có khả năng kháng nước ở độ sâu tối đa 120 mét.`
   
    },
    {
        id:16,
        name:'Đồng Hồ Rolex Cosmograph Daytona 40 116505-0001 Mặt Số Hồng Dây Đeo Oyster Vàng Hồng',
        image:'rolex1.png',
        price:197000000,
        brand:`Rolex`,
        Code:`116505-0001`,
        Size:`40mm`,
        Material:`Oyster`,
        ShellMaterial:`Oyster,Platinum`,
        detail:` là một trong những thiết kế được ra mắt vào năm 2021. Đồng hồ là một sự tái khẳng định tinh thần “sang trọng đương đại” của mẫu đồng hồ Aquanaut Chronograph, lần đầu tiên được xuất hiện trong một lớp vỏ bằng vàng trắng. Bảo vệ mặt số là lớp tinh tể sapphire trong suốt để lộ bên dưới là mặt số màu xanh kaki mang xu hướng hiện đại với họa tiết bàn cờ khắc nổi. Trung tâm mặt số là bộ kim giờ, kim phút và kim giây với lớp phủ phát quang màu trắng, cho phép người đeo có thể xem giờ ngay cả khi ở trong điều kiện thiếu ánh sáng. Hơn nữa, để tạo nên nét chấm phá cho mặt số thì thay vì sử dụng một kiểu cọc số đơn lẻ, thương hiệu đã kết hợp cả cọc số Ả Rập và vạch chỉ giờ cho chiếc đồng hồ này. Tại vị trí 3 giờ là một ô cửa sổ lịch ngày. Bộ đếm chronograph 60 phút ở vị trí 6 giờ cũng có hình bát giác bo tròn giống khung bezel.
        còn được trang bị bộ máy CH 28‑520 C, hoạt động ở tần số 28.800vph và có mức dự trữ năng lượng tối đa lên đến 55 giờ. Có thể nhìn thấy qua mặt kính sau là cân bằng Gyromax với lò xo cân bằng Spiromax, con dấu Patek Philippe và cánh quạt được làm bằng vàng hồng 21k. Đồng hồ có khả năng kháng nước ở độ sâu tối đa 120 mét.`
   
    },
    {
        id:17,
        name:'Đồng Hồ Rolex Air-King 40 126900-0001 Mặt Số Đen Dây Đeo Oyster',
        image:'rolex2.png',
        price:268000000,
        brand:`Rolex`,
        Code:`126900-0001`,
        Size:`40mm`,
        Material:`Oyster`,
        ShellMaterial:`Thép 904L`,
        detail:` là một trong những thiết kế được ra mắt vào năm 2021. Đồng hồ là một sự tái khẳng định tinh thần “sang trọng đương đại” của mẫu đồng hồ Aquanaut Chronograph, lần đầu tiên được xuất hiện trong một lớp vỏ bằng vàng trắng. Bảo vệ mặt số là lớp tinh tể sapphire trong suốt để lộ bên dưới là mặt số màu xanh kaki mang xu hướng hiện đại với họa tiết bàn cờ khắc nổi. Trung tâm mặt số là bộ kim giờ, kim phút và kim giây với lớp phủ phát quang màu trắng, cho phép người đeo có thể xem giờ ngay cả khi ở trong điều kiện thiếu ánh sáng. Hơn nữa, để tạo nên nét chấm phá cho mặt số thì thay vì sử dụng một kiểu cọc số đơn lẻ, thương hiệu đã kết hợp cả cọc số Ả Rập và vạch chỉ giờ cho chiếc đồng hồ này. Tại vị trí 3 giờ là một ô cửa sổ lịch ngày. Bộ đếm chronograph 60 phút ở vị trí 6 giờ cũng có hình bát giác bo tròn giống khung bezel.
        còn được trang bị bộ máy CH 28‑520 C, hoạt động ở tần số 28.800vph và có mức dự trữ năng lượng tối đa lên đến 55 giờ. Có thể nhìn thấy qua mặt kính sau là cân bằng Gyromax với lò xo cân bằng Spiromax, con dấu Patek Philippe và cánh quạt được làm bằng vàng hồng 21k. Đồng hồ có khả năng kháng nước ở độ sâu tối đa 120 mét.`
   
    },
    {
        id:18,
        name:'Đồng hồ Rolex Air King 40 116900-0001 Mặt Số Đen Dây Oyster',
        image:'rolex3.png',
        price:430000000,
        brand:`Rolex`,
        Code:`116900-0001`,
        Size:`40mm`,
        Material:`Oystersteel`,
        ShellMaterial:`Oystersteel`,
        detail:` là một trong những thiết kế được ra mắt vào năm 2021. Đồng hồ là một sự tái khẳng định tinh thần “sang trọng đương đại” của mẫu đồng hồ Aquanaut Chronograph, lần đầu tiên được xuất hiện trong một lớp vỏ bằng vàng trắng. Bảo vệ mặt số là lớp tinh tể sapphire trong suốt để lộ bên dưới là mặt số màu xanh kaki mang xu hướng hiện đại với họa tiết bàn cờ khắc nổi. Trung tâm mặt số là bộ kim giờ, kim phút và kim giây với lớp phủ phát quang màu trắng, cho phép người đeo có thể xem giờ ngay cả khi ở trong điều kiện thiếu ánh sáng. Hơn nữa, để tạo nên nét chấm phá cho mặt số thì thay vì sử dụng một kiểu cọc số đơn lẻ, thương hiệu đã kết hợp cả cọc số Ả Rập và vạch chỉ giờ cho chiếc đồng hồ này. Tại vị trí 3 giờ là một ô cửa sổ lịch ngày. Bộ đếm chronograph 60 phút ở vị trí 6 giờ cũng có hình bát giác bo tròn giống khung bezel.
        còn được trang bị bộ máy CH 28‑520 C, hoạt động ở tần số 28.800vph và có mức dự trữ năng lượng tối đa lên đến 55 giờ. Có thể nhìn thấy qua mặt kính sau là cân bằng Gyromax với lò xo cân bằng Spiromax, con dấu Patek Philippe và cánh quạt được làm bằng vàng hồng 21k. Đồng hồ có khả năng kháng nước ở độ sâu tối đa 120 mét.`
   
    
    },
    {
        id:19,
        name:'Đồng Hồ Rolex Celline Date 50515-0011 Mặt Số Đen Dây Đeo Da 39mm',
        image:'rolex4.png',
        price:460000000,
        brand:`Rolex`,
        Code:`50515-0011`,
        Size:`39mm`,
        Material:`Da màu đen`,
        ShellMaterial:`Vàng Everose 18ct`,
        detail:` là một trong những thiết kế được ra mắt vào năm 2021. Đồng hồ là một sự tái khẳng định tinh thần “sang trọng đương đại” của mẫu đồng hồ Aquanaut Chronograph, lần đầu tiên được xuất hiện trong một lớp vỏ bằng vàng trắng. Bảo vệ mặt số là lớp tinh tể sapphire trong suốt để lộ bên dưới là mặt số màu xanh kaki mang xu hướng hiện đại với họa tiết bàn cờ khắc nổi. Trung tâm mặt số là bộ kim giờ, kim phút và kim giây với lớp phủ phát quang màu trắng, cho phép người đeo có thể xem giờ ngay cả khi ở trong điều kiện thiếu ánh sáng. Hơn nữa, để tạo nên nét chấm phá cho mặt số thì thay vì sử dụng một kiểu cọc số đơn lẻ, thương hiệu đã kết hợp cả cọc số Ả Rập và vạch chỉ giờ cho chiếc đồng hồ này. Tại vị trí 3 giờ là một ô cửa sổ lịch ngày. Bộ đếm chronograph 60 phút ở vị trí 6 giờ cũng có hình bát giác bo tròn giống khung bezel.
        còn được trang bị bộ máy CH 28‑520 C, hoạt động ở tần số 28.800vph và có mức dự trữ năng lượng tối đa lên đến 55 giờ. Có thể nhìn thấy qua mặt kính sau là cân bằng Gyromax với lò xo cân bằng Spiromax, con dấu Patek Philippe và cánh quạt được làm bằng vàng hồng 21k. Đồng hồ có khả năng kháng nước ở độ sâu tối đa 120 mét.`
     
    },
    {
        id:20,
        name:'Đồng Hồ Rolex Celline Moonphase 50535-0002 Mặt Số Trắng Dây Đeo Da 39mm',
        image:'rolex5.png',
        price:810000000 ,
        brand:`Rolex`,
        Code:`50535-0002`,
        Size:`39mm`,
        Material:`Dâ đeo da`,
        ShellMaterial:`Vàng Hồng 18k`,
        detail:` là một trong những thiết kế được ra mắt vào năm 2021. Đồng hồ là một sự tái khẳng định tinh thần “sang trọng đương đại” của mẫu đồng hồ Aquanaut Chronograph, lần đầu tiên được xuất hiện trong một lớp vỏ bằng vàng trắng. Bảo vệ mặt số là lớp tinh tể sapphire trong suốt để lộ bên dưới là mặt số màu xanh kaki mang xu hướng hiện đại với họa tiết bàn cờ khắc nổi. Trung tâm mặt số là bộ kim giờ, kim phút và kim giây với lớp phủ phát quang màu trắng, cho phép người đeo có thể xem giờ ngay cả khi ở trong điều kiện thiếu ánh sáng. Hơn nữa, để tạo nên nét chấm phá cho mặt số thì thay vì sử dụng một kiểu cọc số đơn lẻ, thương hiệu đã kết hợp cả cọc số Ả Rập và vạch chỉ giờ cho chiếc đồng hồ này. Tại vị trí 3 giờ là một ô cửa sổ lịch ngày. Bộ đếm chronograph 60 phút ở vị trí 6 giờ cũng có hình bát giác bo tròn giống khung bezel.
        còn được trang bị bộ máy CH 28‑520 C, hoạt động ở tần số 28.800vph và có mức dự trữ năng lượng tối đa lên đến 55 giờ. Có thể nhìn thấy qua mặt kính sau là cân bằng Gyromax với lò xo cân bằng Spiromax, con dấu Patek Philippe và cánh quạt được làm bằng vàng hồng 21k. Đồng hồ có khả năng kháng nước ở độ sâu tối đa 120 mét.`
     
    },
    {
        id:21,
        name:'Đồng Hồ Rolex Cellini Time 50505-0020 Mặt Số Trắng Dây Đeo Da 39mm',
        image:'rolex6.png',
        price:310000000,
        brand:`Rolex`,
        Code:`50505-0020`,
        Size:`39mm`,
        Material:`Dâ đeo da`,
        ShellMaterial:`Vàng Hồng 18k`,
        detail:` là một trong những thiết kế được ra mắt vào năm 2021. Đồng hồ là một sự tái khẳng định tinh thần “sang trọng đương đại” của mẫu đồng hồ Aquanaut Chronograph, lần đầu tiên được xuất hiện trong một lớp vỏ bằng vàng trắng. Bảo vệ mặt số là lớp tinh tể sapphire trong suốt để lộ bên dưới là mặt số màu xanh kaki mang xu hướng hiện đại với họa tiết bàn cờ khắc nổi. Trung tâm mặt số là bộ kim giờ, kim phút và kim giây với lớp phủ phát quang màu trắng, cho phép người đeo có thể xem giờ ngay cả khi ở trong điều kiện thiếu ánh sáng. Hơn nữa, để tạo nên nét chấm phá cho mặt số thì thay vì sử dụng một kiểu cọc số đơn lẻ, thương hiệu đã kết hợp cả cọc số Ả Rập và vạch chỉ giờ cho chiếc đồng hồ này. Tại vị trí 3 giờ là một ô cửa sổ lịch ngày. Bộ đếm chronograph 60 phút ở vị trí 6 giờ cũng có hình bát giác bo tròn giống khung bezel.
        còn được trang bị bộ máy CH 28‑520 C, hoạt động ở tần số 28.800vph và có mức dự trữ năng lượng tối đa lên đến 55 giờ. Có thể nhìn thấy qua mặt kính sau là cân bằng Gyromax với lò xo cân bằng Spiromax, con dấu Patek Philippe và cánh quạt được làm bằng vàng hồng 21k. Đồng hồ có khả năng kháng nước ở độ sâu tối đa 120 mét.`
      
    },
    {
        id:22,
        name:'Đồng Hồ Rolex Cosmograph Daytona 40 116500ln-0001 Mặt Số Trắng Dây Oyster Thép',
        image:'rolex7.png',
        price:420980020,
        brand:`Rolex`,
        Code:`116500ln-0001`,
        Size:`40mm`,
        Material:`Oystersteel`,
        ShellMaterial:`Oystersteel`,
        detail:` là một trong những thiết kế được ra mắt vào năm 2021. Đồng hồ là một sự tái khẳng định tinh thần “sang trọng đương đại” của mẫu đồng hồ Aquanaut Chronograph, lần đầu tiên được xuất hiện trong một lớp vỏ bằng vàng trắng. Bảo vệ mặt số là lớp tinh tể sapphire trong suốt để lộ bên dưới là mặt số màu xanh kaki mang xu hướng hiện đại với họa tiết bàn cờ khắc nổi. Trung tâm mặt số là bộ kim giờ, kim phút và kim giây với lớp phủ phát quang màu trắng, cho phép người đeo có thể xem giờ ngay cả khi ở trong điều kiện thiếu ánh sáng. Hơn nữa, để tạo nên nét chấm phá cho mặt số thì thay vì sử dụng một kiểu cọc số đơn lẻ, thương hiệu đã kết hợp cả cọc số Ả Rập và vạch chỉ giờ cho chiếc đồng hồ này. Tại vị trí 3 giờ là một ô cửa sổ lịch ngày. Bộ đếm chronograph 60 phút ở vị trí 6 giờ cũng có hình bát giác bo tròn giống khung bezel.
        còn được trang bị bộ máy CH 28‑520 C, hoạt động ở tần số 28.800vph và có mức dự trữ năng lượng tối đa lên đến 55 giờ. Có thể nhìn thấy qua mặt kính sau là cân bằng Gyromax với lò xo cân bằng Spiromax, con dấu Patek Philippe và cánh quạt được làm bằng vàng hồng 21k. Đồng hồ có khả năng kháng nước ở độ sâu tối đa 120 mét.`
       
    },
    {
        id:23,
        name:'Đồng Hồ Rolex Cosmograph Daytona 40 116503-0004 Mặt Số Đen Dây Oyster Thép Vàng Vàng',
        image:'rolex8.png',
        price:660020000 ,
        brand:`Rolex`,
        Code:`116503-0004`,
        Size:`40mm`,
        Material:`Oystersteel`,
        ShellMaterial:`Oystersteel`,
        detail:` là một trong những thiết kế được ra mắt vào năm 2021. Đồng hồ là một sự tái khẳng định tinh thần “sang trọng đương đại” của mẫu đồng hồ Aquanaut Chronograph, lần đầu tiên được xuất hiện trong một lớp vỏ bằng vàng trắng. Bảo vệ mặt số là lớp tinh tể sapphire trong suốt để lộ bên dưới là mặt số màu xanh kaki mang xu hướng hiện đại với họa tiết bàn cờ khắc nổi. Trung tâm mặt số là bộ kim giờ, kim phút và kim giây với lớp phủ phát quang màu trắng, cho phép người đeo có thể xem giờ ngay cả khi ở trong điều kiện thiếu ánh sáng. Hơn nữa, để tạo nên nét chấm phá cho mặt số thì thay vì sử dụng một kiểu cọc số đơn lẻ, thương hiệu đã kết hợp cả cọc số Ả Rập và vạch chỉ giờ cho chiếc đồng hồ này. Tại vị trí 3 giờ là một ô cửa sổ lịch ngày. Bộ đếm chronograph 60 phút ở vị trí 6 giờ cũng có hình bát giác bo tròn giống khung bezel.
        còn được trang bị bộ máy CH 28‑520 C, hoạt động ở tần số 28.800vph và có mức dự trữ năng lượng tối đa lên đến 55 giờ. Có thể nhìn thấy qua mặt kính sau là cân bằng Gyromax với lò xo cân bằng Spiromax, con dấu Patek Philippe và cánh quạt được làm bằng vàng hồng 21k. Đồng hồ có khả năng kháng nước ở độ sâu tối đa 120 mét.`
       

    },
    {
        id:24,
        name:'. Đồng Hồ Rolex Cosmograph Daytona 40 116518ln-0047 Mặt Số Đen Dây Đeo Oysterflex',
        image:'rolex9.png',
        price:880019080 ,
        brand:`Rolex`,
        Code:` 116518ln-0047`,
        Size:`40mm`,
        Material:`Rubber`,
        ShellMaterial:`Yellow Gold 18k`,
        detail:` là một trong những thiết kế được ra mắt vào năm 2021. Đồng hồ là một sự tái khẳng định tinh thần “sang trọng đương đại” của mẫu đồng hồ Aquanaut Chronograph, lần đầu tiên được xuất hiện trong một lớp vỏ bằng vàng trắng. Bảo vệ mặt số là lớp tinh tể sapphire trong suốt để lộ bên dưới là mặt số màu xanh kaki mang xu hướng hiện đại với họa tiết bàn cờ khắc nổi. Trung tâm mặt số là bộ kim giờ, kim phút và kim giây với lớp phủ phát quang màu trắng, cho phép người đeo có thể xem giờ ngay cả khi ở trong điều kiện thiếu ánh sáng. Hơn nữa, để tạo nên nét chấm phá cho mặt số thì thay vì sử dụng một kiểu cọc số đơn lẻ, thương hiệu đã kết hợp cả cọc số Ả Rập và vạch chỉ giờ cho chiếc đồng hồ này. Tại vị trí 3 giờ là một ô cửa sổ lịch ngày. Bộ đếm chronograph 60 phút ở vị trí 6 giờ cũng có hình bát giác bo tròn giống khung bezel.
        còn được trang bị bộ máy CH 28‑520 C, hoạt động ở tần số 28.800vph và có mức dự trữ năng lượng tối đa lên đến 55 giờ. Có thể nhìn thấy qua mặt kính sau là cân bằng Gyromax với lò xo cân bằng Spiromax, con dấu Patek Philippe và cánh quạt được làm bằng vàng hồng 21k. Đồng hồ có khả năng kháng nước ở độ sâu tối đa 120 mét.`
       

    },
    {
        id:25,
        name:'Đồng Hồ Rolex Cosmograph Daytona 40 116518ln-0048 Mặt Số Vàng Dây Đeo Oysterflex',
        image:'rolex10.png',
        price:950000000 ,
        brand:`Rolex`,
        Code:` 116518ln-0048`,
        Size:`40mm`,
        Material:`Oysterflex`,
        ShellMaterial:`Oyster,Yellow Gold `,
        detail:` là một trong những thiết kế được ra mắt vào năm 2021. Đồng hồ là một sự tái khẳng định tinh thần “sang trọng đương đại” của mẫu đồng hồ Aquanaut Chronograph, lần đầu tiên được xuất hiện trong một lớp vỏ bằng vàng trắng. Bảo vệ mặt số là lớp tinh tể sapphire trong suốt để lộ bên dưới là mặt số màu xanh kaki mang xu hướng hiện đại với họa tiết bàn cờ khắc nổi. Trung tâm mặt số là bộ kim giờ, kim phút và kim giây với lớp phủ phát quang màu trắng, cho phép người đeo có thể xem giờ ngay cả khi ở trong điều kiện thiếu ánh sáng. Hơn nữa, để tạo nên nét chấm phá cho mặt số thì thay vì sử dụng một kiểu cọc số đơn lẻ, thương hiệu đã kết hợp cả cọc số Ả Rập và vạch chỉ giờ cho chiếc đồng hồ này. Tại vị trí 3 giờ là một ô cửa sổ lịch ngày. Bộ đếm chronograph 60 phút ở vị trí 6 giờ cũng có hình bát giác bo tròn giống khung bezel.
        còn được trang bị bộ máy CH 28‑520 C, hoạt động ở tần số 28.800vph và có mức dự trữ năng lượng tối đa lên đến 55 giờ. Có thể nhìn thấy qua mặt kính sau là cân bằng Gyromax với lò xo cân bằng Spiromax, con dấu Patek Philippe và cánh quạt được làm bằng vàng hồng 21k. Đồng hồ có khả năng kháng nước ở độ sâu tối đa 120 mét.`
       

    },
    {
        id:26,
        name:'Đồng Hồ Rolex Cosmograph Daytona 40 116500ln-0001 Mặt Số Trắng Dây Oyster Thép',
        image:'rolex11.png',
        price:450093020 ,
        brand:`Rolex`,
        Code:`116500ln-0001 `,
        Size:`40mm`,
        Material:`Oystersteel`,
        ShellMaterial:`Oyster,Yellow Gold `,
        detail:` là một trong những thiết kế được ra mắt vào năm 2021. Đồng hồ là một sự tái khẳng định tinh thần “sang trọng đương đại” của mẫu đồng hồ Aquanaut Chronograph, lần đầu tiên được xuất hiện trong một lớp vỏ bằng vàng trắng. Bảo vệ mặt số là lớp tinh tể sapphire trong suốt để lộ bên dưới là mặt số màu xanh kaki mang xu hướng hiện đại với họa tiết bàn cờ khắc nổi. Trung tâm mặt số là bộ kim giờ, kim phút và kim giây với lớp phủ phát quang màu trắng, cho phép người đeo có thể xem giờ ngay cả khi ở trong điều kiện thiếu ánh sáng. Hơn nữa, để tạo nên nét chấm phá cho mặt số thì thay vì sử dụng một kiểu cọc số đơn lẻ, thương hiệu đã kết hợp cả cọc số Ả Rập và vạch chỉ giờ cho chiếc đồng hồ này. Tại vị trí 3 giờ là một ô cửa sổ lịch ngày. Bộ đếm chronograph 60 phút ở vị trí 6 giờ cũng có hình bát giác bo tròn giống khung bezel.
        còn được trang bị bộ máy CH 28‑520 C, hoạt động ở tần số 28.800vph và có mức dự trữ năng lượng tối đa lên đến 55 giờ. Có thể nhìn thấy qua mặt kính sau là cân bằng Gyromax với lò xo cân bằng Spiromax, con dấu Patek Philippe và cánh quạt được làm bằng vàng hồng 21k. Đồng hồ có khả năng kháng nước ở độ sâu tối đa 120 mét.`
       
    },
    {
        id:27,
        name:'Đồng Hồ Rolex Cosmograph Daytona 40 116506-0001 Mặt Số Xanh Băng Dây Oyster Thép',
        image:'rolex12.png',
        price:225000000 ,
        brand:`Rolex`,
        Code:`116500ln-0001 `,
        Size:`40mm`,
        Material:`Oystersteel`,
        ShellMaterial:`Oyster `,
        detail:` là một trong những thiết kế được ra mắt vào năm 2021. Đồng hồ là một sự tái khẳng định tinh thần “sang trọng đương đại” của mẫu đồng hồ Aquanaut Chronograph, lần đầu tiên được xuất hiện trong một lớp vỏ bằng vàng trắng. Bảo vệ mặt số là lớp tinh tể sapphire trong suốt để lộ bên dưới là mặt số màu xanh kaki mang xu hướng hiện đại với họa tiết bàn cờ khắc nổi. Trung tâm mặt số là bộ kim giờ, kim phút và kim giây với lớp phủ phát quang màu trắng, cho phép người đeo có thể xem giờ ngay cả khi ở trong điều kiện thiếu ánh sáng. Hơn nữa, để tạo nên nét chấm phá cho mặt số thì thay vì sử dụng một kiểu cọc số đơn lẻ, thương hiệu đã kết hợp cả cọc số Ả Rập và vạch chỉ giờ cho chiếc đồng hồ này. Tại vị trí 3 giờ là một ô cửa sổ lịch ngày. Bộ đếm chronograph 60 phút ở vị trí 6 giờ cũng có hình bát giác bo tròn giống khung bezel.
        còn được trang bị bộ máy CH 28‑520 C, hoạt động ở tần số 28.800vph và có mức dự trữ năng lượng tối đa lên đến 55 giờ. Có thể nhìn thấy qua mặt kính sau là cân bằng Gyromax với lò xo cân bằng Spiromax, con dấu Patek Philippe và cánh quạt được làm bằng vàng hồng 21k. Đồng hồ có khả năng kháng nước ở độ sâu tối đa 120 mét.`
       
    },
    {
        id:28,
        name:'. Đồng Hồ Rolex Cosmograph Daytona 40 116508-0003 Mặt Số Vàng Dây Oyster Vàng Vàng',
        image:'rolex13.png',
        price:1159069699 ,
        brand:`Rolex`,
        Code:`116508-0003 `,
        Size:`40mm`,
        Material:`Yellow Gold 18k`,
        ShellMaterial:`Yellow Gold 18k`,
        detail:` là một trong những thiết kế được ra mắt vào năm 2021. Đồng hồ là một sự tái khẳng định tinh thần “sang trọng đương đại” của mẫu đồng hồ Aquanaut Chronograph, lần đầu tiên được xuất hiện trong một lớp vỏ bằng vàng trắng. Bảo vệ mặt số là lớp tinh tể sapphire trong suốt để lộ bên dưới là mặt số màu xanh kaki mang xu hướng hiện đại với họa tiết bàn cờ khắc nổi. Trung tâm mặt số là bộ kim giờ, kim phút và kim giây với lớp phủ phát quang màu trắng, cho phép người đeo có thể xem giờ ngay cả khi ở trong điều kiện thiếu ánh sáng. Hơn nữa, để tạo nên nét chấm phá cho mặt số thì thay vì sử dụng một kiểu cọc số đơn lẻ, thương hiệu đã kết hợp cả cọc số Ả Rập và vạch chỉ giờ cho chiếc đồng hồ này. Tại vị trí 3 giờ là một ô cửa sổ lịch ngày. Bộ đếm chronograph 60 phút ở vị trí 6 giờ cũng có hình bát giác bo tròn giống khung bezel.
        còn được trang bị bộ máy CH 28‑520 C, hoạt động ở tần số 28.800vph và có mức dự trữ năng lượng tối đa lên đến 55 giờ. Có thể nhìn thấy qua mặt kính sau là cân bằng Gyromax với lò xo cân bằng Spiromax, con dấu Patek Philippe và cánh quạt được làm bằng vàng hồng 21k. Đồng hồ có khả năng kháng nước ở độ sâu tối đa 120 mét.`
       
    },
    {
        id:29,
        name:'Đồng Hồ Rolex Cosmograph Daytona 40 116508-0013 Mặt Số Xanh Lá Dây Oyster',
        image:'rolex14.png',
        price:1150060600 ,
        brand:`Rolex`,
        Code:`116508-0013  `,
        Size:`40mm`,
        Material:`Yellow Gold 18k`,
        ShellMaterial:`Yellow Gold 18k`,
        detail:` là một trong những thiết kế được ra mắt vào năm 2021. Đồng hồ là một sự tái khẳng định tinh thần “sang trọng đương đại” của mẫu đồng hồ Aquanaut Chronograph, lần đầu tiên được xuất hiện trong một lớp vỏ bằng vàng trắng. Bảo vệ mặt số là lớp tinh tể sapphire trong suốt để lộ bên dưới là mặt số màu xanh kaki mang xu hướng hiện đại với họa tiết bàn cờ khắc nổi. Trung tâm mặt số là bộ kim giờ, kim phút và kim giây với lớp phủ phát quang màu trắng, cho phép người đeo có thể xem giờ ngay cả khi ở trong điều kiện thiếu ánh sáng. Hơn nữa, để tạo nên nét chấm phá cho mặt số thì thay vì sử dụng một kiểu cọc số đơn lẻ, thương hiệu đã kết hợp cả cọc số Ả Rập và vạch chỉ giờ cho chiếc đồng hồ này. Tại vị trí 3 giờ là một ô cửa sổ lịch ngày. Bộ đếm chronograph 60 phút ở vị trí 6 giờ cũng có hình bát giác bo tròn giống khung bezel.
        còn được trang bị bộ máy CH 28‑520 C, hoạt động ở tần số 28.800vph và có mức dự trữ năng lượng tối đa lên đến 55 giờ. Có thể nhìn thấy qua mặt kính sau là cân bằng Gyromax với lò xo cân bằng Spiromax, con dấu Patek Philippe và cánh quạt được làm bằng vàng hồng 21k. Đồng hồ có khả năng kháng nước ở độ sâu tối đa 120 mét.`
       
    },
    {
        id:30,
        name:'Đồng Hồ Rolex Cosmograph Daytona 40 116519ln-0027 Mặt Số Xám Dây Đeo Oysterflex',
        image:'rolex15.png',
        price:882900000,
        brand:`Rolex`,
        Code:`116519ln-0027  `,
        Size:`40mm`,
        Material:`Rubber`,
        ShellMaterial:`Oystersteel `,
        detail:` là một trong những thiết kế được ra mắt vào năm 2021. Đồng hồ là một sự tái khẳng định tinh thần “sang trọng đương đại” của mẫu đồng hồ Aquanaut Chronograph, lần đầu tiên được xuất hiện trong một lớp vỏ bằng vàng trắng. Bảo vệ mặt số là lớp tinh tể sapphire trong suốt để lộ bên dưới là mặt số màu xanh kaki mang xu hướng hiện đại với họa tiết bàn cờ khắc nổi. Trung tâm mặt số là bộ kim giờ, kim phút và kim giây với lớp phủ phát quang màu trắng, cho phép người đeo có thể xem giờ ngay cả khi ở trong điều kiện thiếu ánh sáng. Hơn nữa, để tạo nên nét chấm phá cho mặt số thì thay vì sử dụng một kiểu cọc số đơn lẻ, thương hiệu đã kết hợp cả cọc số Ả Rập và vạch chỉ giờ cho chiếc đồng hồ này. Tại vị trí 3 giờ là một ô cửa sổ lịch ngày. Bộ đếm chronograph 60 phút ở vị trí 6 giờ cũng có hình bát giác bo tròn giống khung bezel.
        còn được trang bị bộ máy CH 28‑520 C, hoạt động ở tần số 28.800vph và có mức dự trữ năng lượng tối đa lên đến 55 giờ. Có thể nhìn thấy qua mặt kính sau là cân bằng Gyromax với lò xo cân bằng Spiromax, con dấu Patek Philippe và cánh quạt được làm bằng vàng hồng 21k. Đồng hồ có khả năng kháng nước ở độ sâu tối đa 120 mét.`

    },
    {
        id:31,
        name:'Đồng Hồ Rolex Cosmograph Daytona 40 116500ln-0002 Mặt Số Đen Dây Oyster',
        image:'rolex16.png',
        price:425983200,
        brand:`Rolex`,
        Code:` 116500ln-0002 `,
        Size:`40mm`,
        Material:`Oyster`,
        ShellMaterial:`Oystersteel `,
        detail:` là một trong những thiết kế được ra mắt vào năm 2021. Đồng hồ là một sự tái khẳng định tinh thần “sang trọng đương đại” của mẫu đồng hồ Aquanaut Chronograph, lần đầu tiên được xuất hiện trong một lớp vỏ bằng vàng trắng. Bảo vệ mặt số là lớp tinh tể sapphire trong suốt để lộ bên dưới là mặt số màu xanh kaki mang xu hướng hiện đại với họa tiết bàn cờ khắc nổi. Trung tâm mặt số là bộ kim giờ, kim phút và kim giây với lớp phủ phát quang màu trắng, cho phép người đeo có thể xem giờ ngay cả khi ở trong điều kiện thiếu ánh sáng. Hơn nữa, để tạo nên nét chấm phá cho mặt số thì thay vì sử dụng một kiểu cọc số đơn lẻ, thương hiệu đã kết hợp cả cọc số Ả Rập và vạch chỉ giờ cho chiếc đồng hồ này. Tại vị trí 3 giờ là một ô cửa sổ lịch ngày. Bộ đếm chronograph 60 phút ở vị trí 6 giờ cũng có hình bát giác bo tròn giống khung bezel.
        còn được trang bị bộ máy CH 28‑520 C, hoạt động ở tần số 28.800vph và có mức dự trữ năng lượng tối đa lên đến 55 giờ. Có thể nhìn thấy qua mặt kính sau là cân bằng Gyromax với lò xo cân bằng Spiromax, con dấu Patek Philippe và cánh quạt được làm bằng vàng hồng 21k. Đồng hồ có khả năng kháng nước ở độ sâu tối đa 120 mét.`
                
    
    },
    {
        id:32,
        name:'Đồng Hồ Rolex Datejust 31 278273-0030 Mặt Số Olive Dây Đeo Jubilee Thép Vàng Vàng',
        image:'rolex17.png',
        price:358460000,
        brand:`Rolex`,
        Code:`  278273-0030  `,
        Size:`31mm`,
        Material:`Oystersteel, Yellow Gold `,
        ShellMaterial:`Oystersteel,Yellow Gold  `,
        detail:` là một trong những thiết kế được ra mắt vào năm 2021. Đồng hồ là một sự tái khẳng định tinh thần “sang trọng đương đại” của mẫu đồng hồ Aquanaut Chronograph, lần đầu tiên được xuất hiện trong một lớp vỏ bằng vàng trắng. Bảo vệ mặt số là lớp tinh tể sapphire trong suốt để lộ bên dưới là mặt số màu xanh kaki mang xu hướng hiện đại với họa tiết bàn cờ khắc nổi. Trung tâm mặt số là bộ kim giờ, kim phút và kim giây với lớp phủ phát quang màu trắng, cho phép người đeo có thể xem giờ ngay cả khi ở trong điều kiện thiếu ánh sáng. Hơn nữa, để tạo nên nét chấm phá cho mặt số thì thay vì sử dụng một kiểu cọc số đơn lẻ, thương hiệu đã kết hợp cả cọc số Ả Rập và vạch chỉ giờ cho chiếc đồng hồ này. Tại vị trí 3 giờ là một ô cửa sổ lịch ngày. Bộ đếm chronograph 60 phút ở vị trí 6 giờ cũng có hình bát giác bo tròn giống khung bezel.
        còn được trang bị bộ máy CH 28‑520 C, hoạt động ở tần số 28.800vph và có mức dự trữ năng lượng tối đa lên đến 55 giờ. Có thể nhìn thấy qua mặt kính sau là cân bằng Gyromax với lò xo cân bằng Spiromax, con dấu Patek Philippe và cánh quạt được làm bằng vàng hồng 21k. Đồng hồ có khả năng kháng nước ở độ sâu tối đa 120 mét.`
                
    },
    {
        id:33,
        name:'Đồng Hồ Rolex Cellini Date 50515-0008 Mặt Số Bạc Dây Đeo Da 39mm',
        image:'rolex18.png',
        price:410000000 ,
        brand:`Rolex`,
        Code:` 50515-0008  `,
        Size:`39mm`,
        Material:`Dây đeo da`,
        ShellMaterial:`Vàng hồng 18k `,
        detail:` là một trong những thiết kế được ra mắt vào năm 2021. Đồng hồ là một sự tái khẳng định tinh thần “sang trọng đương đại” của mẫu đồng hồ Aquanaut Chronograph, lần đầu tiên được xuất hiện trong một lớp vỏ bằng vàng trắng. Bảo vệ mặt số là lớp tinh tể sapphire trong suốt để lộ bên dưới là mặt số màu xanh kaki mang xu hướng hiện đại với họa tiết bàn cờ khắc nổi. Trung tâm mặt số là bộ kim giờ, kim phút và kim giây với lớp phủ phát quang màu trắng, cho phép người đeo có thể xem giờ ngay cả khi ở trong điều kiện thiếu ánh sáng. Hơn nữa, để tạo nên nét chấm phá cho mặt số thì thay vì sử dụng một kiểu cọc số đơn lẻ, thương hiệu đã kết hợp cả cọc số Ả Rập và vạch chỉ giờ cho chiếc đồng hồ này. Tại vị trí 3 giờ là một ô cửa sổ lịch ngày. Bộ đếm chronograph 60 phút ở vị trí 6 giờ cũng có hình bát giác bo tròn giống khung bezel.
        còn được trang bị bộ máy CH 28‑520 C, hoạt động ở tần số 28.800vph và có mức dự trữ năng lượng tối đa lên đến 55 giờ. Có thể nhìn thấy qua mặt kính sau là cân bằng Gyromax với lò xo cân bằng Spiromax, con dấu Patek Philippe và cánh quạt được làm bằng vàng hồng 21k. Đồng hồ có khả năng kháng nước ở độ sâu tối đa 120 mét.`
                

    },
    {
        id:34,
        name:'Đồng Hồ Rolex Cellini Time 50509-0006 Mặt Số Đen Dây Đeo Da 39mm ',
        image:'rolex19.png',
        price: 320000000 ,
        brand:`Rolex`,
        Code:`50509-0006`,
        Size:`39mm`,
        Material:`Dây đeo da`,
        ShellMaterial:`Vàng Trắng 18k `,
        detail:` là một trong những thiết kế được ra mắt vào năm 2021. Đồng hồ là một sự tái khẳng định tinh thần “sang trọng đương đại” của mẫu đồng hồ Aquanaut Chronograph, lần đầu tiên được xuất hiện trong một lớp vỏ bằng vàng trắng. Bảo vệ mặt số là lớp tinh tể sapphire trong suốt để lộ bên dưới là mặt số màu xanh kaki mang xu hướng hiện đại với họa tiết bàn cờ khắc nổi. Trung tâm mặt số là bộ kim giờ, kim phút và kim giây với lớp phủ phát quang màu trắng, cho phép người đeo có thể xem giờ ngay cả khi ở trong điều kiện thiếu ánh sáng. Hơn nữa, để tạo nên nét chấm phá cho mặt số thì thay vì sử dụng một kiểu cọc số đơn lẻ, thương hiệu đã kết hợp cả cọc số Ả Rập và vạch chỉ giờ cho chiếc đồng hồ này. Tại vị trí 3 giờ là một ô cửa sổ lịch ngày. Bộ đếm chronograph 60 phút ở vị trí 6 giờ cũng có hình bát giác bo tròn giống khung bezel.
        còn được trang bị bộ máy CH 28‑520 C, hoạt động ở tần số 28.800vph và có mức dự trữ năng lượng tối đa lên đến 55 giờ. Có thể nhìn thấy qua mặt kính sau là cân bằng Gyromax với lò xo cân bằng Spiromax, con dấu Patek Philippe và cánh quạt được làm bằng vàng hồng 21k. Đồng hồ có khả năng kháng nước ở độ sâu tối đa 120 mét.`
                

    },
    {
        id:35,
        name:'Đồng Hồ Rolex Cosmograph Daytona 40 116519ln-0027 Mặt Số Xám Dây Đeo Oysterflex',
        image:'rolex20.png',
        price:882900000,
        brand:`Rolex`,
        Code:` 116519ln-0027`,
        Size:`40mm`,
        Material:`Rubber`,
        ShellMaterial:`Oystersteel`,
        detail:` là một trong những thiết kế được ra mắt vào năm 2021. Đồng hồ là một sự tái khẳng định tinh thần “sang trọng đương đại” của mẫu đồng hồ Aquanaut Chronograph, lần đầu tiên được xuất hiện trong một lớp vỏ bằng vàng trắng. Bảo vệ mặt số là lớp tinh tể sapphire trong suốt để lộ bên dưới là mặt số màu xanh kaki mang xu hướng hiện đại với họa tiết bàn cờ khắc nổi. Trung tâm mặt số là bộ kim giờ, kim phút và kim giây với lớp phủ phát quang màu trắng, cho phép người đeo có thể xem giờ ngay cả khi ở trong điều kiện thiếu ánh sáng. Hơn nữa, để tạo nên nét chấm phá cho mặt số thì thay vì sử dụng một kiểu cọc số đơn lẻ, thương hiệu đã kết hợp cả cọc số Ả Rập và vạch chỉ giờ cho chiếc đồng hồ này. Tại vị trí 3 giờ là một ô cửa sổ lịch ngày. Bộ đếm chronograph 60 phút ở vị trí 6 giờ cũng có hình bát giác bo tròn giống khung bezel.
        còn được trang bị bộ máy CH 28‑520 C, hoạt động ở tần số 28.800vph và có mức dự trữ năng lượng tối đa lên đến 55 giờ. Có thể nhìn thấy qua mặt kính sau là cân bằng Gyromax với lò xo cân bằng Spiromax, con dấu Patek Philippe và cánh quạt được làm bằng vàng hồng 21k. Đồng hồ có khả năng kháng nước ở độ sâu tối đa 120 mét.`
                

    },
    {
        id:36,
        name:'Đồng Hồ Rolex Cosmograph Daytona 40 116518ln-0041 Mặt Số Trắng Dây Đeo Oysterflex',
        image:'rolex21.png',
        price:1400000000,
        brand:`Rolex`,
        Code:`116518ln-0041`,
        Size:`40mm`,
        Material:`Oysterflex`,
        ShellMaterial:`Oyster, Vàng Vàng 18k`,
        detail:` là một trong những thiết kế được ra mắt vào năm 2021. Đồng hồ là một sự tái khẳng định tinh thần “sang trọng đương đại” của mẫu đồng hồ Aquanaut Chronograph, lần đầu tiên được xuất hiện trong một lớp vỏ bằng vàng trắng. Bảo vệ mặt số là lớp tinh tể sapphire trong suốt để lộ bên dưới là mặt số màu xanh kaki mang xu hướng hiện đại với họa tiết bàn cờ khắc nổi. Trung tâm mặt số là bộ kim giờ, kim phút và kim giây với lớp phủ phát quang màu trắng, cho phép người đeo có thể xem giờ ngay cả khi ở trong điều kiện thiếu ánh sáng. Hơn nữa, để tạo nên nét chấm phá cho mặt số thì thay vì sử dụng một kiểu cọc số đơn lẻ, thương hiệu đã kết hợp cả cọc số Ả Rập và vạch chỉ giờ cho chiếc đồng hồ này. Tại vị trí 3 giờ là một ô cửa sổ lịch ngày. Bộ đếm chronograph 60 phút ở vị trí 6 giờ cũng có hình bát giác bo tròn giống khung bezel.
        còn được trang bị bộ máy CH 28‑520 C, hoạt động ở tần số 28.800vph và có mức dự trữ năng lượng tối đa lên đến 55 giờ. Có thể nhìn thấy qua mặt kính sau là cân bằng Gyromax với lò xo cân bằng Spiromax, con dấu Patek Philippe và cánh quạt được làm bằng vàng hồng 21k. Đồng hồ có khả năng kháng nước ở độ sâu tối đa 120 mét.`
                
    },
    {
        id:37,
        name:'Đồng Hồ Rolex Cosmograph Daytona 40 116503-0009 Xà Cừ Tím Black Mother Of Pearl Dây Đeo Oyster Thép Vàng Vàng',
        image:'rolex22.png',
        price:1100000000, 
        brand:`Rolex`,
        Code:`116503-0009`,
        Size:`40mm`,
        Material:`Oystersteel,Yellow Gold 18k`,
        ShellMaterial:`Oystersteel,Yellow Gold 18k`,
        detail:` là một trong những thiết kế được ra mắt vào năm 2021. Đồng hồ là một sự tái khẳng định tinh thần “sang trọng đương đại” của mẫu đồng hồ Aquanaut Chronograph, lần đầu tiên được xuất hiện trong một lớp vỏ bằng vàng trắng. Bảo vệ mặt số là lớp tinh tể sapphire trong suốt để lộ bên dưới là mặt số màu xanh kaki mang xu hướng hiện đại với họa tiết bàn cờ khắc nổi. Trung tâm mặt số là bộ kim giờ, kim phút và kim giây với lớp phủ phát quang màu trắng, cho phép người đeo có thể xem giờ ngay cả khi ở trong điều kiện thiếu ánh sáng. Hơn nữa, để tạo nên nét chấm phá cho mặt số thì thay vì sử dụng một kiểu cọc số đơn lẻ, thương hiệu đã kết hợp cả cọc số Ả Rập và vạch chỉ giờ cho chiếc đồng hồ này. Tại vị trí 3 giờ là một ô cửa sổ lịch ngày. Bộ đếm chronograph 60 phút ở vị trí 6 giờ cũng có hình bát giác bo tròn giống khung bezel.
        còn được trang bị bộ máy CH 28‑520 C, hoạt động ở tần số 28.800vph và có mức dự trữ năng lượng tối đa lên đến 55 giờ. Có thể nhìn thấy qua mặt kính sau là cân bằng Gyromax với lò xo cân bằng Spiromax, con dấu Patek Philippe và cánh quạt được làm bằng vàng hồng 21k. Đồng hồ có khả năng kháng nước ở độ sâu tối đa 120 mét.`
                
    
    },
    {
        id:38,
        name:'Đồng Hồ Rolex Cosmograph Daytona 40 116506-0002 Mặt Số Xanh Băng Dây Đeo Oyster Thép',
        image:'rolex23.png',
        price:4610000000 ,
        brand:`Rolex`,
        Code:` 116506-0002`,
        Size:`40mm`,
        Material:`Oystersteel`,
        ShellMaterial:`Oystersteel`,
        detail:` là một trong những thiết kế được ra mắt vào năm 2021. Đồng hồ là một sự tái khẳng định tinh thần “sang trọng đương đại” của mẫu đồng hồ Aquanaut Chronograph, lần đầu tiên được xuất hiện trong một lớp vỏ bằng vàng trắng. Bảo vệ mặt số là lớp tinh tể sapphire trong suốt để lộ bên dưới là mặt số màu xanh kaki mang xu hướng hiện đại với họa tiết bàn cờ khắc nổi. Trung tâm mặt số là bộ kim giờ, kim phút và kim giây với lớp phủ phát quang màu trắng, cho phép người đeo có thể xem giờ ngay cả khi ở trong điều kiện thiếu ánh sáng. Hơn nữa, để tạo nên nét chấm phá cho mặt số thì thay vì sử dụng một kiểu cọc số đơn lẻ, thương hiệu đã kết hợp cả cọc số Ả Rập và vạch chỉ giờ cho chiếc đồng hồ này. Tại vị trí 3 giờ là một ô cửa sổ lịch ngày. Bộ đếm chronograph 60 phút ở vị trí 6 giờ cũng có hình bát giác bo tròn giống khung bezel.
        còn được trang bị bộ máy CH 28‑520 C, hoạt động ở tần số 28.800vph và có mức dự trữ năng lượng tối đa lên đến 55 giờ. Có thể nhìn thấy qua mặt kính sau là cân bằng Gyromax với lò xo cân bằng Spiromax, con dấu Patek Philippe và cánh quạt được làm bằng vàng hồng 21k. Đồng hồ có khả năng kháng nước ở độ sâu tối đa 120 mét.`
                

    },
    {
        id:39,
        name:'Đồng Hồ Rolex Cellini Time 50509-0016 Mặt Số Trắng Dây Đeo Da 39mm',
        image:'rolex24.png',
        price:450000000,
        brand:`Rolex`,
        Code:` 50509-0016`,
        Size:`39mm`,
        Material:`Dây da`,
        ShellMaterial:`Vàng trắng 18ct`,
        detail:` là một trong những thiết kế được ra mắt vào năm 2021. Đồng hồ là một sự tái khẳng định tinh thần “sang trọng đương đại” của mẫu đồng hồ Aquanaut Chronograph, lần đầu tiên được xuất hiện trong một lớp vỏ bằng vàng trắng. Bảo vệ mặt số là lớp tinh tể sapphire trong suốt để lộ bên dưới là mặt số màu xanh kaki mang xu hướng hiện đại với họa tiết bàn cờ khắc nổi. Trung tâm mặt số là bộ kim giờ, kim phút và kim giây với lớp phủ phát quang màu trắng, cho phép người đeo có thể xem giờ ngay cả khi ở trong điều kiện thiếu ánh sáng. Hơn nữa, để tạo nên nét chấm phá cho mặt số thì thay vì sử dụng một kiểu cọc số đơn lẻ, thương hiệu đã kết hợp cả cọc số Ả Rập và vạch chỉ giờ cho chiếc đồng hồ này. Tại vị trí 3 giờ là một ô cửa sổ lịch ngày. Bộ đếm chronograph 60 phút ở vị trí 6 giờ cũng có hình bát giác bo tròn giống khung bezel.
        còn được trang bị bộ máy CH 28‑520 C, hoạt động ở tần số 28.800vph và có mức dự trữ năng lượng tối đa lên đến 55 giờ. Có thể nhìn thấy qua mặt kính sau là cân bằng Gyromax với lò xo cân bằng Spiromax, con dấu Patek Philippe và cánh quạt được làm bằng vàng hồng 21k. Đồng hồ có khả năng kháng nước ở độ sâu tối đa 120 mét.`
                

    },
    {
        id:40,
        name:'Đồng Hồ Rolex Cosmograph Daytona 40 116505-0014 Mặt Số Thiên Thạch Dây Oyster Vàng Hồng',
        image:'rolex25.png',
        price:1318078800,
        brand:`Rolex`,
        Code:` 116505-0014`,
        Size:`40mm`,
        Material:`Everose Gole 18k`,
        ShellMaterial:`Everose Gole 18k`,
        detail:` là một trong những thiết kế được ra mắt vào năm 2021. Đồng hồ là một sự tái khẳng định tinh thần “sang trọng đương đại” của mẫu đồng hồ Aquanaut Chronograph, lần đầu tiên được xuất hiện trong một lớp vỏ bằng vàng trắng. Bảo vệ mặt số là lớp tinh tể sapphire trong suốt để lộ bên dưới là mặt số màu xanh kaki mang xu hướng hiện đại với họa tiết bàn cờ khắc nổi. Trung tâm mặt số là bộ kim giờ, kim phút và kim giây với lớp phủ phát quang màu trắng, cho phép người đeo có thể xem giờ ngay cả khi ở trong điều kiện thiếu ánh sáng. Hơn nữa, để tạo nên nét chấm phá cho mặt số thì thay vì sử dụng một kiểu cọc số đơn lẻ, thương hiệu đã kết hợp cả cọc số Ả Rập và vạch chỉ giờ cho chiếc đồng hồ này. Tại vị trí 3 giờ là một ô cửa sổ lịch ngày. Bộ đếm chronograph 60 phút ở vị trí 6 giờ cũng có hình bát giác bo tròn giống khung bezel.
        còn được trang bị bộ máy CH 28‑520 C, hoạt động ở tần số 28.800vph và có mức dự trữ năng lượng tối đa lên đến 55 giờ. Có thể nhìn thấy qua mặt kính sau là cân bằng Gyromax với lò xo cân bằng Spiromax, con dấu Patek Philippe và cánh quạt được làm bằng vàng hồng 21k. Đồng hồ có khả năng kháng nước ở độ sâu tối đa 120 mét.`
                
    },
    { 
        id:41,
        name:'Đồng Hồ Richard Mille RM 014 Manual Winding Tourbillon Marine',
        image:'richardmille1.png',
        price:6200000000,
        brand:`RichardMille`,
        Code:`  RM 014`,
        Size:`45x38.90mm`,
        Material:`Cao su`,
        ShellMaterial:`Bạch kim`,
        detail:` là một trong những thiết kế được ra mắt vào năm 2021. Đồng hồ là một sự tái khẳng định tinh thần “sang trọng đương đại” của mẫu đồng hồ Aquanaut Chronograph, lần đầu tiên được xuất hiện trong một lớp vỏ bằng vàng trắng. Bảo vệ mặt số là lớp tinh tể sapphire trong suốt để lộ bên dưới là mặt số màu xanh kaki mang xu hướng hiện đại với họa tiết bàn cờ khắc nổi. Trung tâm mặt số là bộ kim giờ, kim phút và kim giây với lớp phủ phát quang màu trắng, cho phép người đeo có thể xem giờ ngay cả khi ở trong điều kiện thiếu ánh sáng. Hơn nữa, để tạo nên nét chấm phá cho mặt số thì thay vì sử dụng một kiểu cọc số đơn lẻ, thương hiệu đã kết hợp cả cọc số Ả Rập và vạch chỉ giờ cho chiếc đồng hồ này. Tại vị trí 3 giờ là một ô cửa sổ lịch ngày. Bộ đếm chronograph 60 phút ở vị trí 6 giờ cũng có hình bát giác bo tròn giống khung bezel.
        còn được trang bị bộ máy CH 28‑520 C, hoạt động ở tần số 28.800vph và có mức dự trữ năng lượng tối đa lên đến 55 giờ. Có thể nhìn thấy qua mặt kính sau là cân bằng Gyromax với lò xo cân bằng Spiromax, con dấu Patek Philippe và cánh quạt được làm bằng vàng hồng 21k. Đồng hồ có khả năng kháng nước ở độ sâu tối đa 120 mét.`
                
    }
        ,
    {    
        id:42,
        name:'Đồng Hồ Richard Mille RM 015 Ceramic Blue Parini Navi Cup Dual Time Tourbillon',
        image:'richardmille2.png',
        price:12000000000,
        brand:`RichardMille`,
        Code:`Blue Parini Navi `,
        Size:`48mmx39,3mm`,
        Material:`Cao su`,
        ShellMaterial:`Ceramic`,
        detail:` là một trong những thiết kế được ra mắt vào năm 2021. Đồng hồ là một sự tái khẳng định tinh thần “sang trọng đương đại” của mẫu đồng hồ Aquanaut Chronograph, lần đầu tiên được xuất hiện trong một lớp vỏ bằng vàng trắng. Bảo vệ mặt số là lớp tinh tể sapphire trong suốt để lộ bên dưới là mặt số màu xanh kaki mang xu hướng hiện đại với họa tiết bàn cờ khắc nổi. Trung tâm mặt số là bộ kim giờ, kim phút và kim giây với lớp phủ phát quang màu trắng, cho phép người đeo có thể xem giờ ngay cả khi ở trong điều kiện thiếu ánh sáng. Hơn nữa, để tạo nên nét chấm phá cho mặt số thì thay vì sử dụng một kiểu cọc số đơn lẻ, thương hiệu đã kết hợp cả cọc số Ả Rập và vạch chỉ giờ cho chiếc đồng hồ này. Tại vị trí 3 giờ là một ô cửa sổ lịch ngày. Bộ đếm chronograph 60 phút ở vị trí 6 giờ cũng có hình bát giác bo tròn giống khung bezel.
        còn được trang bị bộ máy CH 28‑520 C, hoạt động ở tần số 28.800vph và có mức dự trữ năng lượng tối đa lên đến 55 giờ. Có thể nhìn thấy qua mặt kính sau là cân bằng Gyromax với lò xo cân bằng Spiromax, con dấu Patek Philippe và cánh quạt được làm bằng vàng hồng 21k. Đồng hồ có khả năng kháng nước ở độ sâu tối đa 120 mét.`
                 
    }    ,
    {    
        id:43,
        name:'Đồng Hồ Richard Mille RM 015 Dual Time Zone Rose Gold Tourbillon',
        image:'richardmille3.png',
        price:6800000000 ,
        brand:`RichardMille`,
        Code:` RM 015`,
        Size:`48mmx39,3mm`,
        Material:`Da cá sấu`,
        ShellMaterial:`Vàng Hồng`,
        detail:` là một trong những thiết kế được ra mắt vào năm 2021. Đồng hồ là một sự tái khẳng định tinh thần “sang trọng đương đại” của mẫu đồng hồ Aquanaut Chronograph, lần đầu tiên được xuất hiện trong một lớp vỏ bằng vàng trắng. Bảo vệ mặt số là lớp tinh tể sapphire trong suốt để lộ bên dưới là mặt số màu xanh kaki mang xu hướng hiện đại với họa tiết bàn cờ khắc nổi. Trung tâm mặt số là bộ kim giờ, kim phút và kim giây với lớp phủ phát quang màu trắng, cho phép người đeo có thể xem giờ ngay cả khi ở trong điều kiện thiếu ánh sáng. Hơn nữa, để tạo nên nét chấm phá cho mặt số thì thay vì sử dụng một kiểu cọc số đơn lẻ, thương hiệu đã kết hợp cả cọc số Ả Rập và vạch chỉ giờ cho chiếc đồng hồ này. Tại vị trí 3 giờ là một ô cửa sổ lịch ngày. Bộ đếm chronograph 60 phút ở vị trí 6 giờ cũng có hình bát giác bo tròn giống khung bezel.
        còn được trang bị bộ máy CH 28‑520 C, hoạt động ở tần số 28.800vph và có mức dự trữ năng lượng tối đa lên đến 55 giờ. Có thể nhìn thấy qua mặt kính sau là cân bằng Gyromax với lò xo cân bằng Spiromax, con dấu Patek Philippe và cánh quạt được làm bằng vàng hồng 21k. Đồng hồ có khả năng kháng nước ở độ sâu tối đa 120 mét.`
                 
    }    ,
    {    
        id:44,
        name:'Đồng Hồ Richard Mille RM 015 Dual Time Zone Rose Gold Tourbillon',
        image:'richardmille4.png',
        price:6800000000, 
        brand:`RichardMille`,
        Code:` RM 015`,
        Size:`48mmx39,3mm`,
        Material:`Da cá sấu`,
        ShellMaterial:`Vàng Hồng`,
        detail:` là một trong những thiết kế được ra mắt vào năm 2021. Đồng hồ là một sự tái khẳng định tinh thần “sang trọng đương đại” của mẫu đồng hồ Aquanaut Chronograph, lần đầu tiên được xuất hiện trong một lớp vỏ bằng vàng trắng. Bảo vệ mặt số là lớp tinh tể sapphire trong suốt để lộ bên dưới là mặt số màu xanh kaki mang xu hướng hiện đại với họa tiết bàn cờ khắc nổi. Trung tâm mặt số là bộ kim giờ, kim phút và kim giây với lớp phủ phát quang màu trắng, cho phép người đeo có thể xem giờ ngay cả khi ở trong điều kiện thiếu ánh sáng. Hơn nữa, để tạo nên nét chấm phá cho mặt số thì thay vì sử dụng một kiểu cọc số đơn lẻ, thương hiệu đã kết hợp cả cọc số Ả Rập và vạch chỉ giờ cho chiếc đồng hồ này. Tại vị trí 3 giờ là một ô cửa sổ lịch ngày. Bộ đếm chronograph 60 phút ở vị trí 6 giờ cũng có hình bát giác bo tròn giống khung bezel.
        còn được trang bị bộ máy CH 28‑520 C, hoạt động ở tần số 28.800vph và có mức dự trữ năng lượng tối đa lên đến 55 giờ. Có thể nhìn thấy qua mặt kính sau là cân bằng Gyromax với lò xo cân bằng Spiromax, con dấu Patek Philippe và cánh quạt được làm bằng vàng hồng 21k. Đồng hồ có khả năng kháng nước ở độ sâu tối đa 120 mét.`
      
        
    }    ,
    {    
        id:45,
        name:'Đồng hồ Richard Mille RM 028 Automatic Winding Divers Watch',
        image:'richardmille5.png',
        price:38000000, 
        brand:`RichardMille`,
        Code:`  RM 028 `,
        Size:`48mmx39,3mm`,
        Material:`Cao su đen`,
        ShellMaterial:`Thép không gỉ`,
        detail:` là một trong những thiết kế được ra mắt vào năm 2021. Đồng hồ là một sự tái khẳng định tinh thần “sang trọng đương đại” của mẫu đồng hồ Aquanaut Chronograph, lần đầu tiên được xuất hiện trong một lớp vỏ bằng vàng trắng. Bảo vệ mặt số là lớp tinh tể sapphire trong suốt để lộ bên dưới là mặt số màu xanh kaki mang xu hướng hiện đại với họa tiết bàn cờ khắc nổi. Trung tâm mặt số là bộ kim giờ, kim phút và kim giây với lớp phủ phát quang màu trắng, cho phép người đeo có thể xem giờ ngay cả khi ở trong điều kiện thiếu ánh sáng. Hơn nữa, để tạo nên nét chấm phá cho mặt số thì thay vì sử dụng một kiểu cọc số đơn lẻ, thương hiệu đã kết hợp cả cọc số Ả Rập và vạch chỉ giờ cho chiếc đồng hồ này. Tại vị trí 3 giờ là một ô cửa sổ lịch ngày. Bộ đếm chronograph 60 phút ở vị trí 6 giờ cũng có hình bát giác bo tròn giống khung bezel.
        còn được trang bị bộ máy CH 28‑520 C, hoạt động ở tần số 28.800vph và có mức dự trữ năng lượng tối đa lên đến 55 giờ. Có thể nhìn thấy qua mặt kính sau là cân bằng Gyromax với lò xo cân bằng Spiromax, con dấu Patek Philippe và cánh quạt được làm bằng vàng hồng 21k. Đồng hồ có khả năng kháng nước ở độ sâu tối đa 120 mét.`
      
        
        
    }    ,
    {    
        id:46,
        name:'Đồng Hồ Richard Mille RM 031 Manual Winding High Performance Chronometer',
        image:'richardmille6.png',
        price:30000000000,
        brand:`RichardMille`,
        Code:`  RM 031`,
        Size:`48mmx39,3mm`,
        Material:`Cao su đen`,
        ShellMaterial:`Titan`,
        detail:` là một trong những thiết kế được ra mắt vào năm 2021. Đồng hồ là một sự tái khẳng định tinh thần “sang trọng đương đại” của mẫu đồng hồ Aquanaut Chronograph, lần đầu tiên được xuất hiện trong một lớp vỏ bằng vàng trắng. Bảo vệ mặt số là lớp tinh tể sapphire trong suốt để lộ bên dưới là mặt số màu xanh kaki mang xu hướng hiện đại với họa tiết bàn cờ khắc nổi. Trung tâm mặt số là bộ kim giờ, kim phút và kim giây với lớp phủ phát quang màu trắng, cho phép người đeo có thể xem giờ ngay cả khi ở trong điều kiện thiếu ánh sáng. Hơn nữa, để tạo nên nét chấm phá cho mặt số thì thay vì sử dụng một kiểu cọc số đơn lẻ, thương hiệu đã kết hợp cả cọc số Ả Rập và vạch chỉ giờ cho chiếc đồng hồ này. Tại vị trí 3 giờ là một ô cửa sổ lịch ngày. Bộ đếm chronograph 60 phút ở vị trí 6 giờ cũng có hình bát giác bo tròn giống khung bezel.
        còn được trang bị bộ máy CH 28‑520 C, hoạt động ở tần số 28.800vph và có mức dự trữ năng lượng tối đa lên đến 55 giờ. Có thể nhìn thấy qua mặt kính sau là cân bằng Gyromax với lò xo cân bằng Spiromax, con dấu Patek Philippe và cánh quạt được làm bằng vàng hồng 21k. Đồng hồ có khả năng kháng nước ở độ sâu tối đa 120 mét.`
       
    }   ,
    {    
        id:47,
        name:'Đồng Hồ Richard Mille RM 038 Bubba Watson Tourbillon',
        image:'richardmille7.png',
        price:24500000000 ,
        brand:`RichardMille`,
        Code:`  RM 038`,
        Size:`48mmx39,3mm`,
        Material:`Cao su `,
        ShellMaterial:`Thép không gỉ`,
        detail:` là một trong những thiết kế được ra mắt vào năm 2021. Đồng hồ là một sự tái khẳng định tinh thần “sang trọng đương đại” của mẫu đồng hồ Aquanaut Chronograph, lần đầu tiên được xuất hiện trong một lớp vỏ bằng vàng trắng. Bảo vệ mặt số là lớp tinh tể sapphire trong suốt để lộ bên dưới là mặt số màu xanh kaki mang xu hướng hiện đại với họa tiết bàn cờ khắc nổi. Trung tâm mặt số là bộ kim giờ, kim phút và kim giây với lớp phủ phát quang màu trắng, cho phép người đeo có thể xem giờ ngay cả khi ở trong điều kiện thiếu ánh sáng. Hơn nữa, để tạo nên nét chấm phá cho mặt số thì thay vì sử dụng một kiểu cọc số đơn lẻ, thương hiệu đã kết hợp cả cọc số Ả Rập và vạch chỉ giờ cho chiếc đồng hồ này. Tại vị trí 3 giờ là một ô cửa sổ lịch ngày. Bộ đếm chronograph 60 phút ở vị trí 6 giờ cũng có hình bát giác bo tròn giống khung bezel.
        còn được trang bị bộ máy CH 28‑520 C, hoạt động ở tần số 28.800vph và có mức dự trữ năng lượng tối đa lên đến 55 giờ. Có thể nhìn thấy qua mặt kính sau là cân bằng Gyromax với lò xo cân bằng Spiromax, con dấu Patek Philippe và cánh quạt được làm bằng vàng hồng 21k. Đồng hồ có khả năng kháng nước ở độ sâu tối đa 120 mét.`
       
    }    ,
    {    
        id:48,
        name:'Đồng hồ Richard Mille RM 050 Tourbillon Chronograph Felipe Massa',
        image:'richardmille8.png',
        price:35000000000 ,
        brand:`RichardMille`,
        Code:`  RM 050 `,
        Size:`48mmx39,3mm`,
        Material:`Cao su đen`,
        ShellMaterial:`Gồm đen`,
        detail:` là một trong những thiết kế được ra mắt vào năm 2021. Đồng hồ là một sự tái khẳng định tinh thần “sang trọng đương đại” của mẫu đồng hồ Aquanaut Chronograph, lần đầu tiên được xuất hiện trong một lớp vỏ bằng vàng trắng. Bảo vệ mặt số là lớp tinh tể sapphire trong suốt để lộ bên dưới là mặt số màu xanh kaki mang xu hướng hiện đại với họa tiết bàn cờ khắc nổi. Trung tâm mặt số là bộ kim giờ, kim phút và kim giây với lớp phủ phát quang màu trắng, cho phép người đeo có thể xem giờ ngay cả khi ở trong điều kiện thiếu ánh sáng. Hơn nữa, để tạo nên nét chấm phá cho mặt số thì thay vì sử dụng một kiểu cọc số đơn lẻ, thương hiệu đã kết hợp cả cọc số Ả Rập và vạch chỉ giờ cho chiếc đồng hồ này. Tại vị trí 3 giờ là một ô cửa sổ lịch ngày. Bộ đếm chronograph 60 phút ở vị trí 6 giờ cũng có hình bát giác bo tròn giống khung bezel.
        còn được trang bị bộ máy CH 28‑520 C, hoạt động ở tần số 28.800vph và có mức dự trữ năng lượng tối đa lên đến 55 giờ. Có thể nhìn thấy qua mặt kính sau là cân bằng Gyromax với lò xo cân bằng Spiromax, con dấu Patek Philippe và cánh quạt được làm bằng vàng hồng 21k. Đồng hồ có khả năng kháng nước ở độ sâu tối đa 120 mét.`
       
        
    }    ,
    {    
        id:49,
        name:'Đồng Hồ Richard Mille RM 005 Titanium Automatic',
        image:'richardmille9.png',
        price:2300000000 ,
        brand:`RichardMille`,
        Code:`  RM 005 `,
        Size:`48mmx39,3mm`,
        Material:`Dây Cao su`,
        ShellMaterial:`Vàng Trắng`,
        detail:` là một trong những thiết kế được ra mắt vào năm 2021. Đồng hồ là một sự tái khẳng định tinh thần “sang trọng đương đại” của mẫu đồng hồ Aquanaut Chronograph, lần đầu tiên được xuất hiện trong một lớp vỏ bằng vàng trắng. Bảo vệ mặt số là lớp tinh tể sapphire trong suốt để lộ bên dưới là mặt số màu xanh kaki mang xu hướng hiện đại với họa tiết bàn cờ khắc nổi. Trung tâm mặt số là bộ kim giờ, kim phút và kim giây với lớp phủ phát quang màu trắng, cho phép người đeo có thể xem giờ ngay cả khi ở trong điều kiện thiếu ánh sáng. Hơn nữa, để tạo nên nét chấm phá cho mặt số thì thay vì sử dụng một kiểu cọc số đơn lẻ, thương hiệu đã kết hợp cả cọc số Ả Rập và vạch chỉ giờ cho chiếc đồng hồ này. Tại vị trí 3 giờ là một ô cửa sổ lịch ngày. Bộ đếm chronograph 60 phút ở vị trí 6 giờ cũng có hình bát giác bo tròn giống khung bezel.
        còn được trang bị bộ máy CH 28‑520 C, hoạt động ở tần số 28.800vph và có mức dự trữ năng lượng tối đa lên đến 55 giờ. Có thể nhìn thấy qua mặt kính sau là cân bằng Gyromax với lò xo cân bằng Spiromax, con dấu Patek Philippe và cánh quạt được làm bằng vàng hồng 21k. Đồng hồ có khả năng kháng nước ở độ sâu tối đa 120 mét.`
       
    }    ,
    {    
        id:50,
        name:'Đồng hồ Richard Mille RM 007 White Gold Auto Orange Lip',
        image:'richardmille10.png',
        price:4770000000 ,
        brand:`RichardMille`,
        Code:`  RM 007 `,
        Size:`48mmx39,3mm`,
        Material:`Cao su`,
        ShellMaterial:`White Gold`,
        detail:` là một trong những thiết kế được ra mắt vào năm 2021. Đồng hồ là một sự tái khẳng định tinh thần “sang trọng đương đại” của mẫu đồng hồ Aquanaut Chronograph, lần đầu tiên được xuất hiện trong một lớp vỏ bằng vàng trắng. Bảo vệ mặt số là lớp tinh tể sapphire trong suốt để lộ bên dưới là mặt số màu xanh kaki mang xu hướng hiện đại với họa tiết bàn cờ khắc nổi. Trung tâm mặt số là bộ kim giờ, kim phút và kim giây với lớp phủ phát quang màu trắng, cho phép người đeo có thể xem giờ ngay cả khi ở trong điều kiện thiếu ánh sáng. Hơn nữa, để tạo nên nét chấm phá cho mặt số thì thay vì sử dụng một kiểu cọc số đơn lẻ, thương hiệu đã kết hợp cả cọc số Ả Rập và vạch chỉ giờ cho chiếc đồng hồ này. Tại vị trí 3 giờ là một ô cửa sổ lịch ngày. Bộ đếm chronograph 60 phút ở vị trí 6 giờ cũng có hình bát giác bo tròn giống khung bezel.
        còn được trang bị bộ máy CH 28‑520 C, hoạt động ở tần số 28.800vph và có mức dự trữ năng lượng tối đa lên đến 55 giờ. Có thể nhìn thấy qua mặt kính sau là cân bằng Gyromax với lò xo cân bằng Spiromax, con dấu Patek Philippe và cánh quạt được làm bằng vàng hồng 21k. Đồng hồ có khả năng kháng nước ở độ sâu tối đa 120 mét.`
       
    }    ,
    {    
        id:51,
        name:'Đồng Hồ Richard Mille RM 002-V1 Tourbillon',
        image:'richardmille11.png',
        price:6800000000 ,
        brand:`RichardMille`,
        Code:` RM 002-V1`,
        Size:`48mmx39,3mm`,
        Material:`Da`,
        ShellMaterial:`Vàng Hồng`,
        detail:` là một trong những thiết kế được ra mắt vào năm 2021. Đồng hồ là một sự tái khẳng định tinh thần “sang trọng đương đại” của mẫu đồng hồ Aquanaut Chronograph, lần đầu tiên được xuất hiện trong một lớp vỏ bằng vàng trắng. Bảo vệ mặt số là lớp tinh tể sapphire trong suốt để lộ bên dưới là mặt số màu xanh kaki mang xu hướng hiện đại với họa tiết bàn cờ khắc nổi. Trung tâm mặt số là bộ kim giờ, kim phút và kim giây với lớp phủ phát quang màu trắng, cho phép người đeo có thể xem giờ ngay cả khi ở trong điều kiện thiếu ánh sáng. Hơn nữa, để tạo nên nét chấm phá cho mặt số thì thay vì sử dụng một kiểu cọc số đơn lẻ, thương hiệu đã kết hợp cả cọc số Ả Rập và vạch chỉ giờ cho chiếc đồng hồ này. Tại vị trí 3 giờ là một ô cửa sổ lịch ngày. Bộ đếm chronograph 60 phút ở vị trí 6 giờ cũng có hình bát giác bo tròn giống khung bezel.
        còn được trang bị bộ máy CH 28‑520 C, hoạt động ở tần số 28.800vph và có mức dự trữ năng lượng tối đa lên đến 55 giờ. Có thể nhìn thấy qua mặt kính sau là cân bằng Gyromax với lò xo cân bằng Spiromax, con dấu Patek Philippe và cánh quạt được làm bằng vàng hồng 21k. Đồng hồ có khả năng kháng nước ở độ sâu tối đa 120 mét.`
       
    }    ,
    {    
        id:52,
        name:'Đồng Hồ Richard Mille RM 002-V2 Tourbillon',
        image:'richardmille12.png',
        price:7200000000 ,
        brand:`RichardMille`,
        Code:` RM 002-V2`,
        Size:`48mmx39,3mm`,
        Material:`Dây da`,
        ShellMaterial:`Vàng Hồng`,
        detail:` là một trong những thiết kế được ra mắt vào năm 2021. Đồng hồ là một sự tái khẳng định tinh thần “sang trọng đương đại” của mẫu đồng hồ Aquanaut Chronograph, lần đầu tiên được xuất hiện trong một lớp vỏ bằng vàng trắng. Bảo vệ mặt số là lớp tinh tể sapphire trong suốt để lộ bên dưới là mặt số màu xanh kaki mang xu hướng hiện đại với họa tiết bàn cờ khắc nổi. Trung tâm mặt số là bộ kim giờ, kim phút và kim giây với lớp phủ phát quang màu trắng, cho phép người đeo có thể xem giờ ngay cả khi ở trong điều kiện thiếu ánh sáng. Hơn nữa, để tạo nên nét chấm phá cho mặt số thì thay vì sử dụng một kiểu cọc số đơn lẻ, thương hiệu đã kết hợp cả cọc số Ả Rập và vạch chỉ giờ cho chiếc đồng hồ này. Tại vị trí 3 giờ là một ô cửa sổ lịch ngày. Bộ đếm chronograph 60 phút ở vị trí 6 giờ cũng có hình bát giác bo tròn giống khung bezel.
        còn được trang bị bộ máy CH 28‑520 C, hoạt động ở tần số 28.800vph và có mức dự trữ năng lượng tối đa lên đến 55 giờ. Có thể nhìn thấy qua mặt kính sau là cân bằng Gyromax với lò xo cân bằng Spiromax, con dấu Patek Philippe và cánh quạt được làm bằng vàng hồng 21k. Đồng hồ có khả năng kháng nước ở độ sâu tối đa 120 mét.`
       
    }    ,
    {    
        id:53,
        name:'Đồng Hồ Richard Mille RM 003-V2 Black Titanium Edition',
        image:'richardmille13.png',
        price:7200000000 ,
        brand:`RichardMille`,
        Code:`RM 003-V2 `,
        Size:`48mmx39,3mm`,
        Material:`Cao su đen`,
        ShellMaterial:`Black Titanium`,
        detail:` là một trong những thiết kế được ra mắt vào năm 2021. Đồng hồ là một sự tái khẳng định tinh thần “sang trọng đương đại” của mẫu đồng hồ Aquanaut Chronograph, lần đầu tiên được xuất hiện trong một lớp vỏ bằng vàng trắng. Bảo vệ mặt số là lớp tinh tể sapphire trong suốt để lộ bên dưới là mặt số màu xanh kaki mang xu hướng hiện đại với họa tiết bàn cờ khắc nổi. Trung tâm mặt số là bộ kim giờ, kim phút và kim giây với lớp phủ phát quang màu trắng, cho phép người đeo có thể xem giờ ngay cả khi ở trong điều kiện thiếu ánh sáng. Hơn nữa, để tạo nên nét chấm phá cho mặt số thì thay vì sử dụng một kiểu cọc số đơn lẻ, thương hiệu đã kết hợp cả cọc số Ả Rập và vạch chỉ giờ cho chiếc đồng hồ này. Tại vị trí 3 giờ là một ô cửa sổ lịch ngày. Bộ đếm chronograph 60 phút ở vị trí 6 giờ cũng có hình bát giác bo tròn giống khung bezel.
        còn được trang bị bộ máy CH 28‑520 C, hoạt động ở tần số 28.800vph và có mức dự trữ năng lượng tối đa lên đến 55 giờ. Có thể nhìn thấy qua mặt kính sau là cân bằng Gyromax với lò xo cân bằng Spiromax, con dấu Patek Philippe và cánh quạt được làm bằng vàng hồng 21k. Đồng hồ có khả năng kháng nước ở độ sâu tối đa 120 mét.`
       
    }    ,
    {    
        id:54,
        name:'Đồng Hồ Richard Mille RM 004-V1 Split-Seconds Chronograph',
        image:'richardmille14.png',
        price:200000000000,
        brand:`RichardMille`,
        Code:` RM 004-V1  `,
        Size:`48mmx39,3mm`,
        Material:`Cao su `,
        ShellMaterial:`Vàng Hồng 18k`,
        detail:` là một trong những thiết kế được ra mắt vào năm 2021. Đồng hồ là một sự tái khẳng định tinh thần “sang trọng đương đại” của mẫu đồng hồ Aquanaut Chronograph, lần đầu tiên được xuất hiện trong một lớp vỏ bằng vàng trắng. Bảo vệ mặt số là lớp tinh tể sapphire trong suốt để lộ bên dưới là mặt số màu xanh kaki mang xu hướng hiện đại với họa tiết bàn cờ khắc nổi. Trung tâm mặt số là bộ kim giờ, kim phút và kim giây với lớp phủ phát quang màu trắng, cho phép người đeo có thể xem giờ ngay cả khi ở trong điều kiện thiếu ánh sáng. Hơn nữa, để tạo nên nét chấm phá cho mặt số thì thay vì sử dụng một kiểu cọc số đơn lẻ, thương hiệu đã kết hợp cả cọc số Ả Rập và vạch chỉ giờ cho chiếc đồng hồ này. Tại vị trí 3 giờ là một ô cửa sổ lịch ngày. Bộ đếm chronograph 60 phút ở vị trí 6 giờ cũng có hình bát giác bo tròn giống khung bezel.
        còn được trang bị bộ máy CH 28‑520 C, hoạt động ở tần số 28.800vph và có mức dự trữ năng lượng tối đa lên đến 55 giờ. Có thể nhìn thấy qua mặt kính sau là cân bằng Gyromax với lò xo cân bằng Spiromax, con dấu Patek Philippe và cánh quạt được làm bằng vàng hồng 21k. Đồng hồ có khả năng kháng nước ở độ sâu tối đa 120 mét.`
       

    }    ,
    {
        id:55,
        name:'Đồng Hồ Richard Mille RM 004-V3 Manual Winding Split-Seconds Chronograph',
        image:'richardmille15.png',
        price:26000000000 ,
        brand:`RichardMille`,
        Code:` RM 004-V3 `,
        Size:`48mmx39,3mm`,
        Material:`Cao su`,
        ShellMaterial:`Carbon Fiber`,
        detail:` là một trong những thiết kế được ra mắt vào năm 2021. Đồng hồ là một sự tái khẳng định tinh thần “sang trọng đương đại” của mẫu đồng hồ Aquanaut Chronograph, lần đầu tiên được xuất hiện trong một lớp vỏ bằng vàng trắng. Bảo vệ mặt số là lớp tinh tể sapphire trong suốt để lộ bên dưới là mặt số màu xanh kaki mang xu hướng hiện đại với họa tiết bàn cờ khắc nổi. Trung tâm mặt số là bộ kim giờ, kim phút và kim giây với lớp phủ phát quang màu trắng, cho phép người đeo có thể xem giờ ngay cả khi ở trong điều kiện thiếu ánh sáng. Hơn nữa, để tạo nên nét chấm phá cho mặt số thì thay vì sử dụng một kiểu cọc số đơn lẻ, thương hiệu đã kết hợp cả cọc số Ả Rập và vạch chỉ giờ cho chiếc đồng hồ này. Tại vị trí 3 giờ là một ô cửa sổ lịch ngày. Bộ đếm chronograph 60 phút ở vị trí 6 giờ cũng có hình bát giác bo tròn giống khung bezel.
        còn được trang bị bộ máy CH 28‑520 C, hoạt động ở tần số 28.800vph và có mức dự trữ năng lượng tối đa lên đến 55 giờ. Có thể nhìn thấy qua mặt kính sau là cân bằng Gyromax với lò xo cân bằng Spiromax, con dấu Patek Philippe và cánh quạt được làm bằng vàng hồng 21k. Đồng hồ có khả năng kháng nước ở độ sâu tối đa 120 mét.`
       
    },
    {
        id:56,
        name:'Đồng Hồ Richard Mille RM 006 Tourbillon Felipe Massa',
        image:'richardmille16.png',
        price:36000000000 ,
        brand:`RichardMille`,
        Code:` RM 006 `,
        Size:`48mmx39,3mm`,
        Material:`Cao su`,
        ShellMaterial:`Titanium & Carbon Fiber`,
        detail:` là một trong những thiết kế được ra mắt vào năm 2021. Đồng hồ là một sự tái khẳng định tinh thần “sang trọng đương đại” của mẫu đồng hồ Aquanaut Chronograph, lần đầu tiên được xuất hiện trong một lớp vỏ bằng vàng trắng. Bảo vệ mặt số là lớp tinh tể sapphire trong suốt để lộ bên dưới là mặt số màu xanh kaki mang xu hướng hiện đại với họa tiết bàn cờ khắc nổi. Trung tâm mặt số là bộ kim giờ, kim phút và kim giây với lớp phủ phát quang màu trắng, cho phép người đeo có thể xem giờ ngay cả khi ở trong điều kiện thiếu ánh sáng. Hơn nữa, để tạo nên nét chấm phá cho mặt số thì thay vì sử dụng một kiểu cọc số đơn lẻ, thương hiệu đã kết hợp cả cọc số Ả Rập và vạch chỉ giờ cho chiếc đồng hồ này. Tại vị trí 3 giờ là một ô cửa sổ lịch ngày. Bộ đếm chronograph 60 phút ở vị trí 6 giờ cũng có hình bát giác bo tròn giống khung bezel.
        còn được trang bị bộ máy CH 28‑520 C, hoạt động ở tần số 28.800vph và có mức dự trữ năng lượng tối đa lên đến 55 giờ. Có thể nhìn thấy qua mặt kính sau là cân bằng Gyromax với lò xo cân bằng Spiromax, con dấu Patek Philippe và cánh quạt được làm bằng vàng hồng 21k. Đồng hồ có khả năng kháng nước ở độ sâu tối đa 120 mét.`
       
    },
    {
        id:57,
        name:'Đồng Hồ Richard Mille RM 007 Ladies Pearl Full Diamonds',
        image:'richardmille17.png',
        price:3900000000 ,
        brand:`RichardMille`,
        Code:` RM 007 Ladies Pearl Full Diamonds `,
        Size:`48mmx39,3mm`,
        Material:`Dây da`,
        ShellMaterial:`White Gold`,
        detail:` là một trong những thiết kế được ra mắt vào năm 2021. Đồng hồ là một sự tái khẳng định tinh thần “sang trọng đương đại” của mẫu đồng hồ Aquanaut Chronograph, lần đầu tiên được xuất hiện trong một lớp vỏ bằng vàng trắng. Bảo vệ mặt số là lớp tinh tể sapphire trong suốt để lộ bên dưới là mặt số màu xanh kaki mang xu hướng hiện đại với họa tiết bàn cờ khắc nổi. Trung tâm mặt số là bộ kim giờ, kim phút và kim giây với lớp phủ phát quang màu trắng, cho phép người đeo có thể xem giờ ngay cả khi ở trong điều kiện thiếu ánh sáng. Hơn nữa, để tạo nên nét chấm phá cho mặt số thì thay vì sử dụng một kiểu cọc số đơn lẻ, thương hiệu đã kết hợp cả cọc số Ả Rập và vạch chỉ giờ cho chiếc đồng hồ này. Tại vị trí 3 giờ là một ô cửa sổ lịch ngày. Bộ đếm chronograph 60 phút ở vị trí 6 giờ cũng có hình bát giác bo tròn giống khung bezel.
        còn được trang bị bộ máy CH 28‑520 C, hoạt động ở tần số 28.800vph và có mức dự trữ năng lượng tối đa lên đến 55 giờ. Có thể nhìn thấy qua mặt kính sau là cân bằng Gyromax với lò xo cân bằng Spiromax, con dấu Patek Philippe và cánh quạt được làm bằng vàng hồng 21k. Đồng hồ có khả năng kháng nước ở độ sâu tối đa 120 mét.`
       
    },
    {
        id:58,
        name:'Đồng Hồ Richard Mille RM 007 Ladies Pearl Rose Gold Full Diamonds',
        image:'richardmille18.png',
        price:3900000000 ,
        brand:`RichardMille`,
        Code:` RM 007 Ladies Pearl RG`,
        Size:`48mmx39,3mm`,
        Material:`Dây da`,
        ShellMaterial:`Róse Gold`,
        detail:` là một trong những thiết kế được ra mắt vào năm 2021. Đồng hồ là một sự tái khẳng định tinh thần “sang trọng đương đại” của mẫu đồng hồ Aquanaut Chronograph, lần đầu tiên được xuất hiện trong một lớp vỏ bằng vàng trắng. Bảo vệ mặt số là lớp tinh tể sapphire trong suốt để lộ bên dưới là mặt số màu xanh kaki mang xu hướng hiện đại với họa tiết bàn cờ khắc nổi. Trung tâm mặt số là bộ kim giờ, kim phút và kim giây với lớp phủ phát quang màu trắng, cho phép người đeo có thể xem giờ ngay cả khi ở trong điều kiện thiếu ánh sáng. Hơn nữa, để tạo nên nét chấm phá cho mặt số thì thay vì sử dụng một kiểu cọc số đơn lẻ, thương hiệu đã kết hợp cả cọc số Ả Rập và vạch chỉ giờ cho chiếc đồng hồ này. Tại vị trí 3 giờ là một ô cửa sổ lịch ngày. Bộ đếm chronograph 60 phút ở vị trí 6 giờ cũng có hình bát giác bo tròn giống khung bezel.
        còn được trang bị bộ máy CH 28‑520 C, hoạt động ở tần số 28.800vph và có mức dự trữ năng lượng tối đa lên đến 55 giờ. Có thể nhìn thấy qua mặt kính sau là cân bằng Gyromax với lò xo cân bằng Spiromax, con dấu Patek Philippe và cánh quạt được làm bằng vàng hồng 21k. Đồng hồ có khả năng kháng nước ở độ sâu tối đa 120 mét.`
       

    },
    {
        id:59,
        name:'Đồng Hồ Richard Mille RM 007 Onyx Ladies Rose Gold',
        image:'richardmille19.png',
        price:2500000000,
        brand:`RichardMille`,
        Code:` RM 007 `,
        Size:`48mmx39,3mm`,
        Material:`Dây da`,
        ShellMaterial:`Róse Gold`,
        detail:` là một trong những thiết kế được ra mắt vào năm 2021. Đồng hồ là một sự tái khẳng định tinh thần “sang trọng đương đại” của mẫu đồng hồ Aquanaut Chronograph, lần đầu tiên được xuất hiện trong một lớp vỏ bằng vàng trắng. Bảo vệ mặt số là lớp tinh tể sapphire trong suốt để lộ bên dưới là mặt số màu xanh kaki mang xu hướng hiện đại với họa tiết bàn cờ khắc nổi. Trung tâm mặt số là bộ kim giờ, kim phút và kim giây với lớp phủ phát quang màu trắng, cho phép người đeo có thể xem giờ ngay cả khi ở trong điều kiện thiếu ánh sáng. Hơn nữa, để tạo nên nét chấm phá cho mặt số thì thay vì sử dụng một kiểu cọc số đơn lẻ, thương hiệu đã kết hợp cả cọc số Ả Rập và vạch chỉ giờ cho chiếc đồng hồ này. Tại vị trí 3 giờ là một ô cửa sổ lịch ngày. Bộ đếm chronograph 60 phút ở vị trí 6 giờ cũng có hình bát giác bo tròn giống khung bezel.
        còn được trang bị bộ máy CH 28‑520 C, hoạt động ở tần số 28.800vph và có mức dự trữ năng lượng tối đa lên đến 55 giờ. Có thể nhìn thấy qua mặt kính sau là cân bằng Gyromax với lò xo cân bằng Spiromax, con dấu Patek Philippe và cánh quạt được làm bằng vàng hồng 21k. Đồng hồ có khả năng kháng nước ở độ sâu tối đa 120 mét.`
       

    },
    {
        id:60,
        name:'Đồng Hồ Richard Mille RM 010 Automatic White Gold',
        image:'richardmille20.png',
        price:3600000000 ,
        brand:`RichardMille`,
        Code:` RM 010 Automatic `,
        Size:`48mmx39,3mm`,
        Material:`Cao su`,
        ShellMaterial:`White Gold`,
        detail:` là một trong những thiết kế được ra mắt vào năm 2021. Đồng hồ là một sự tái khẳng định tinh thần “sang trọng đương đại” của mẫu đồng hồ Aquanaut Chronograph, lần đầu tiên được xuất hiện trong một lớp vỏ bằng vàng trắng. Bảo vệ mặt số là lớp tinh tể sapphire trong suốt để lộ bên dưới là mặt số màu xanh kaki mang xu hướng hiện đại với họa tiết bàn cờ khắc nổi. Trung tâm mặt số là bộ kim giờ, kim phút và kim giây với lớp phủ phát quang màu trắng, cho phép người đeo có thể xem giờ ngay cả khi ở trong điều kiện thiếu ánh sáng. Hơn nữa, để tạo nên nét chấm phá cho mặt số thì thay vì sử dụng một kiểu cọc số đơn lẻ, thương hiệu đã kết hợp cả cọc số Ả Rập và vạch chỉ giờ cho chiếc đồng hồ này. Tại vị trí 3 giờ là một ô cửa sổ lịch ngày. Bộ đếm chronograph 60 phút ở vị trí 6 giờ cũng có hình bát giác bo tròn giống khung bezel.
        còn được trang bị bộ máy CH 28‑520 C, hoạt động ở tần số 28.800vph và có mức dự trữ năng lượng tối đa lên đến 55 giờ. Có thể nhìn thấy qua mặt kính sau là cân bằng Gyromax với lò xo cân bằng Spiromax, con dấu Patek Philippe và cánh quạt được làm bằng vàng hồng 21k. Đồng hồ có khả năng kháng nước ở độ sâu tối đa 120 mét.`
       

    },
    {
        id:61,
        name:'Đồng Hồ Richard Mille RM 010 Rose Gold Automatic Winding',
        image:'richardmille21.png',
        price:3600000000,
        brand:`RichardMille`,
        Code:`  RM 010 Rose Gold`,
        Size:`48mmx39,3mm`,
        Material:`Cao su`,
        ShellMaterial:`Rose Gold`,
        detail:` là một trong những thiết kế được ra mắt vào năm 2021. Đồng hồ là một sự tái khẳng định tinh thần “sang trọng đương đại” của mẫu đồng hồ Aquanaut Chronograph, lần đầu tiên được xuất hiện trong một lớp vỏ bằng vàng trắng. Bảo vệ mặt số là lớp tinh tể sapphire trong suốt để lộ bên dưới là mặt số màu xanh kaki mang xu hướng hiện đại với họa tiết bàn cờ khắc nổi. Trung tâm mặt số là bộ kim giờ, kim phút và kim giây với lớp phủ phát quang màu trắng, cho phép người đeo có thể xem giờ ngay cả khi ở trong điều kiện thiếu ánh sáng. Hơn nữa, để tạo nên nét chấm phá cho mặt số thì thay vì sử dụng một kiểu cọc số đơn lẻ, thương hiệu đã kết hợp cả cọc số Ả Rập và vạch chỉ giờ cho chiếc đồng hồ này. Tại vị trí 3 giờ là một ô cửa sổ lịch ngày. Bộ đếm chronograph 60 phút ở vị trí 6 giờ cũng có hình bát giác bo tròn giống khung bezel.
        còn được trang bị bộ máy CH 28‑520 C, hoạt động ở tần số 28.800vph và có mức dự trữ năng lượng tối đa lên đến 55 giờ. Có thể nhìn thấy qua mặt kính sau là cân bằng Gyromax với lò xo cân bằng Spiromax, con dấu Patek Philippe và cánh quạt được làm bằng vàng hồng 21k. Đồng hồ có khả năng kháng nước ở độ sâu tối đa 120 mét.`
        
    },
    {
        id:62,
        name:'Đồng Hồ Richard Mille RM 011 AET Remould Phantom Lab Sapphire Case',
        image:'richardmille22.png',
        price:6000000000 ,
        brand:`RichardMille`,
        Code:`  RM 011`,
        Size:`48mmx39,3mm`,
        Material:`Cao su`,
        ShellMaterial:`Sapphire`,
        detail:` là một trong những thiết kế được ra mắt vào năm 2021. Đồng hồ là một sự tái khẳng định tinh thần “sang trọng đương đại” của mẫu đồng hồ Aquanaut Chronograph, lần đầu tiên được xuất hiện trong một lớp vỏ bằng vàng trắng. Bảo vệ mặt số là lớp tinh tể sapphire trong suốt để lộ bên dưới là mặt số màu xanh kaki mang xu hướng hiện đại với họa tiết bàn cờ khắc nổi. Trung tâm mặt số là bộ kim giờ, kim phút và kim giây với lớp phủ phát quang màu trắng, cho phép người đeo có thể xem giờ ngay cả khi ở trong điều kiện thiếu ánh sáng. Hơn nữa, để tạo nên nét chấm phá cho mặt số thì thay vì sử dụng một kiểu cọc số đơn lẻ, thương hiệu đã kết hợp cả cọc số Ả Rập và vạch chỉ giờ cho chiếc đồng hồ này. Tại vị trí 3 giờ là một ô cửa sổ lịch ngày. Bộ đếm chronograph 60 phút ở vị trí 6 giờ cũng có hình bát giác bo tròn giống khung bezel.
        còn được trang bị bộ máy CH 28‑520 C, hoạt động ở tần số 28.800vph và có mức dự trữ năng lượng tối đa lên đến 55 giờ. Có thể nhìn thấy qua mặt kính sau là cân bằng Gyromax với lò xo cân bằng Spiromax, con dấu Patek Philippe và cánh quạt được làm bằng vàng hồng 21k. Đồng hồ có khả năng kháng nước ở độ sâu tối đa 120 mét.`
        
    },
    {
        id:63,
        name:'Đồng Hồ Richard Mille RM 011 Felipe Massa Black Night Carbon NTPT',
        image:'richardmille23.png',
        price:6000000000 ,
        brand:`RichardMille`,
        Code:` RM 011 Felipe`,
        Size:`48mmx39,3mm`,
        Material:`Cao su`,
        ShellMaterial:`Sapphire`,
        detail:` là một trong những thiết kế được ra mắt vào năm 2021. Đồng hồ là một sự tái khẳng định tinh thần “sang trọng đương đại” của mẫu đồng hồ Aquanaut Chronograph, lần đầu tiên được xuất hiện trong một lớp vỏ bằng vàng trắng. Bảo vệ mặt số là lớp tinh tể sapphire trong suốt để lộ bên dưới là mặt số màu xanh kaki mang xu hướng hiện đại với họa tiết bàn cờ khắc nổi. Trung tâm mặt số là bộ kim giờ, kim phút và kim giây với lớp phủ phát quang màu trắng, cho phép người đeo có thể xem giờ ngay cả khi ở trong điều kiện thiếu ánh sáng. Hơn nữa, để tạo nên nét chấm phá cho mặt số thì thay vì sử dụng một kiểu cọc số đơn lẻ, thương hiệu đã kết hợp cả cọc số Ả Rập và vạch chỉ giờ cho chiếc đồng hồ này. Tại vị trí 3 giờ là một ô cửa sổ lịch ngày. Bộ đếm chronograph 60 phút ở vị trí 6 giờ cũng có hình bát giác bo tròn giống khung bezel.
        còn được trang bị bộ máy CH 28‑520 C, hoạt động ở tần số 28.800vph và có mức dự trữ năng lượng tối đa lên đến 55 giờ. Có thể nhìn thấy qua mặt kính sau là cân bằng Gyromax với lò xo cân bằng Spiromax, con dấu Patek Philippe và cánh quạt được làm bằng vàng hồng 21k. Đồng hồ có khả năng kháng nước ở độ sâu tối đa 120 mét.`
        

    },
    {
        id:64,
        name:'Đồng Hồ Richard Mille RM 014 Blue Tourbillon Perini Navi',
        image:'richardmille24.png',
        price:150000000000 ,
        brand:`RichardMille`,
        Code:`  RM 014 Blue Tourbillon`,
        Size:`48mmx39,3mm`,
        Material:`Cao su`,
        ShellMaterial:`Quartz TPT`,
        detail:` là một trong những thiết kế được ra mắt vào năm 2021. Đồng hồ là một sự tái khẳng định tinh thần “sang trọng đương đại” của mẫu đồng hồ Aquanaut Chronograph, lần đầu tiên được xuất hiện trong một lớp vỏ bằng vàng trắng. Bảo vệ mặt số là lớp tinh tể sapphire trong suốt để lộ bên dưới là mặt số màu xanh kaki mang xu hướng hiện đại với họa tiết bàn cờ khắc nổi. Trung tâm mặt số là bộ kim giờ, kim phút và kim giây với lớp phủ phát quang màu trắng, cho phép người đeo có thể xem giờ ngay cả khi ở trong điều kiện thiếu ánh sáng. Hơn nữa, để tạo nên nét chấm phá cho mặt số thì thay vì sử dụng một kiểu cọc số đơn lẻ, thương hiệu đã kết hợp cả cọc số Ả Rập và vạch chỉ giờ cho chiếc đồng hồ này. Tại vị trí 3 giờ là một ô cửa sổ lịch ngày. Bộ đếm chronograph 60 phút ở vị trí 6 giờ cũng có hình bát giác bo tròn giống khung bezel.
        còn được trang bị bộ máy CH 28‑520 C, hoạt động ở tần số 28.800vph và có mức dự trữ năng lượng tối đa lên đến 55 giờ. Có thể nhìn thấy qua mặt kính sau là cân bằng Gyromax với lò xo cân bằng Spiromax, con dấu Patek Philippe và cánh quạt được làm bằng vàng hồng 21k. Đồng hồ có khả năng kháng nước ở độ sâu tối đa 120 mét.`
        
    },
    {
        id:65,
        name:'Đồng Hồ Hublot Big Bang Ferrari 1000 GP Carbon Ceramic 45mm 402.QC.0112.NR',
        image:'1.png',
        price:1190000000 ,
        brand:`Hublot`,
        Code:`  1000 GP Carbon`,
        Size:`45mm`,
        Material:`Cao su`,
        ShellMaterial:`Quartz TPT`,
        detail:` là một trong những thiết kế được ra mắt vào năm 2021. Đồng hồ là một sự tái khẳng định tinh thần “sang trọng đương đại” của mẫu đồng hồ Aquanaut Chronograph, lần đầu tiên được xuất hiện trong một lớp vỏ bằng vàng trắng. Bảo vệ mặt số là lớp tinh tể sapphire trong suốt để lộ bên dưới là mặt số màu xanh kaki mang xu hướng hiện đại với họa tiết bàn cờ khắc nổi. Trung tâm mặt số là bộ kim giờ, kim phút và kim giây với lớp phủ phát quang màu trắng, cho phép người đeo có thể xem giờ ngay cả khi ở trong điều kiện thiếu ánh sáng. Hơn nữa, để tạo nên nét chấm phá cho mặt số thì thay vì sử dụng một kiểu cọc số đơn lẻ, thương hiệu đã kết hợp cả cọc số Ả Rập và vạch chỉ giờ cho chiếc đồng hồ này. Tại vị trí 3 giờ là một ô cửa sổ lịch ngày. Bộ đếm chronograph 60 phút ở vị trí 6 giờ cũng có hình bát giác bo tròn giống khung bezel.
        còn được trang bị bộ máy CH 28‑520 C, hoạt động ở tần số 28.800vph và có mức dự trữ năng lượng tối đa lên đến 55 giờ. Có thể nhìn thấy qua mặt kính sau là cân bằng Gyromax với lò xo cân bằng Spiromax, con dấu Patek Philippe và cánh quạt được làm bằng vàng hồng 21k. Đồng hồ có khả năng kháng nước ở độ sâu tối đa 120 mét.`
        
    },
    {
        id:66,
        name:'Đồng Hồ Hublot Big Bang Ferrari Unico Carbon Red Ceramic 45mm ',
        image:'2.png',
        price:1190000000 ,
        brand:`Hublot`,
        Code:`   Unico Carbon Red`,
        Size:`45mm`,
        Material:`Cao su`,
        ShellMaterial:`Quartz TPT`,
        detail:` là một trong những thiết kế được ra mắt vào năm 2021. Đồng hồ là một sự tái khẳng định tinh thần “sang trọng đương đại” của mẫu đồng hồ Aquanaut Chronograph, lần đầu tiên được xuất hiện trong một lớp vỏ bằng vàng trắng. Bảo vệ mặt số là lớp tinh tể sapphire trong suốt để lộ bên dưới là mặt số màu xanh kaki mang xu hướng hiện đại với họa tiết bàn cờ khắc nổi. Trung tâm mặt số là bộ kim giờ, kim phút và kim giây với lớp phủ phát quang màu trắng, cho phép người đeo có thể xem giờ ngay cả khi ở trong điều kiện thiếu ánh sáng. Hơn nữa, để tạo nên nét chấm phá cho mặt số thì thay vì sử dụng một kiểu cọc số đơn lẻ, thương hiệu đã kết hợp cả cọc số Ả Rập và vạch chỉ giờ cho chiếc đồng hồ này. Tại vị trí 3 giờ là một ô cửa sổ lịch ngày. Bộ đếm chronograph 60 phút ở vị trí 6 giờ cũng có hình bát giác bo tròn giống khung bezel.
        còn được trang bị bộ máy CH 28‑520 C, hoạt động ở tần số 28.800vph và có mức dự trữ năng lượng tối đa lên đến 55 giờ. Có thể nhìn thấy qua mặt kính sau là cân bằng Gyromax với lò xo cân bằng Spiromax, con dấu Patek Philippe và cánh quạt được làm bằng vàng hồng 21k. Đồng hồ có khả năng kháng nước ở độ sâu tối đa 120 mét.`
        
    },
    {
        id:67,
        name:'Đồng Hồ Classic Fusion Chronograph Titanium 42mm 541.NX.1171.RX',
        image:'3.png',
        price:1169000000 ,
        brand:`Hublot`,
        Code:`  541.NX.1171.RX`,
        Size:`42mm`,
        Material:`Dây Cao su`,
        ShellMaterial:`Thép không gỉ`,
        detail:` là một trong những thiết kế được ra mắt vào năm 2021. Đồng hồ là một sự tái khẳng định tinh thần “sang trọng đương đại” của mẫu đồng hồ Aquanaut Chronograph, lần đầu tiên được xuất hiện trong một lớp vỏ bằng vàng trắng. Bảo vệ mặt số là lớp tinh tể sapphire trong suốt để lộ bên dưới là mặt số màu xanh kaki mang xu hướng hiện đại với họa tiết bàn cờ khắc nổi. Trung tâm mặt số là bộ kim giờ, kim phút và kim giây với lớp phủ phát quang màu trắng, cho phép người đeo có thể xem giờ ngay cả khi ở trong điều kiện thiếu ánh sáng. Hơn nữa, để tạo nên nét chấm phá cho mặt số thì thay vì sử dụng một kiểu cọc số đơn lẻ, thương hiệu đã kết hợp cả cọc số Ả Rập và vạch chỉ giờ cho chiếc đồng hồ này. Tại vị trí 3 giờ là một ô cửa sổ lịch ngày. Bộ đếm chronograph 60 phút ở vị trí 6 giờ cũng có hình bát giác bo tròn giống khung bezel.
        còn được trang bị bộ máy CH 28‑520 C, hoạt động ở tần số 28.800vph và có mức dự trữ năng lượng tối đa lên đến 55 giờ. Có thể nhìn thấy qua mặt kính sau là cân bằng Gyromax với lò xo cân bằng Spiromax, con dấu Patek Philippe và cánh quạt được làm bằng vàng hồng 21k. Đồng hồ có khả năng kháng nước ở độ sâu tối đa 120 mét.`
        
    },
    {
        id:68,
        name:'Đồng Hồ Classic Fusion Chronograph Titanium Opalin 42mm 541.NX.2611.LR',
        image:'4.png',
        price:220000000 ,
        brand:`Hublot`,
        Code:`  541.NX.2611.LR`,
        Size:`42mm`,
        Material:`Dây da cá sấu`,
        ShellMaterial:`Thép không gỉ`,
        detail:` là một trong những thiết kế được ra mắt vào năm 2021. Đồng hồ là một sự tái khẳng định tinh thần “sang trọng đương đại” của mẫu đồng hồ Aquanaut Chronograph, lần đầu tiên được xuất hiện trong một lớp vỏ bằng vàng trắng. Bảo vệ mặt số là lớp tinh tể sapphire trong suốt để lộ bên dưới là mặt số màu xanh kaki mang xu hướng hiện đại với họa tiết bàn cờ khắc nổi. Trung tâm mặt số là bộ kim giờ, kim phút và kim giây với lớp phủ phát quang màu trắng, cho phép người đeo có thể xem giờ ngay cả khi ở trong điều kiện thiếu ánh sáng. Hơn nữa, để tạo nên nét chấm phá cho mặt số thì thay vì sử dụng một kiểu cọc số đơn lẻ, thương hiệu đã kết hợp cả cọc số Ả Rập và vạch chỉ giờ cho chiếc đồng hồ này. Tại vị trí 3 giờ là một ô cửa sổ lịch ngày. Bộ đếm chronograph 60 phút ở vị trí 6 giờ cũng có hình bát giác bo tròn giống khung bezel.
        còn được trang bị bộ máy CH 28‑520 C, hoạt động ở tần số 28.800vph và có mức dự trữ năng lượng tối đa lên đến 55 giờ. Có thể nhìn thấy qua mặt kính sau là cân bằng Gyromax với lò xo cân bằng Spiromax, con dấu Patek Philippe và cánh quạt được làm bằng vàng hồng 21k. Đồng hồ có khả năng kháng nước ở độ sâu tối đa 120 mét.`
        
    },
    {
        id:69,
        name:'Đồng Hồ Classic Fusion Chronograph Titanium Opalin 45mm 521.NX.2611.LR',
        image:'5.png',
        price:189240000 ,
        brand:`Hublot`,
        Code:`521.NX.2611.LR`,
        Size:`42mm`,
        Material:`Dây Da Cá Sấu`,
        ShellMaterial:`Thép không gỉ`,
        detail:` là một trong những thiết kế được ra mắt vào năm 2021. Đồng hồ là một sự tái khẳng định tinh thần “sang trọng đương đại” của mẫu đồng hồ Aquanaut Chronograph, lần đầu tiên được xuất hiện trong một lớp vỏ bằng vàng trắng. Bảo vệ mặt số là lớp tinh tể sapphire trong suốt để lộ bên dưới là mặt số màu xanh kaki mang xu hướng hiện đại với họa tiết bàn cờ khắc nổi. Trung tâm mặt số là bộ kim giờ, kim phút và kim giây với lớp phủ phát quang màu trắng, cho phép người đeo có thể xem giờ ngay cả khi ở trong điều kiện thiếu ánh sáng. Hơn nữa, để tạo nên nét chấm phá cho mặt số thì thay vì sử dụng một kiểu cọc số đơn lẻ, thương hiệu đã kết hợp cả cọc số Ả Rập và vạch chỉ giờ cho chiếc đồng hồ này. Tại vị trí 3 giờ là một ô cửa sổ lịch ngày. Bộ đếm chronograph 60 phút ở vị trí 6 giờ cũng có hình bát giác bo tròn giống khung bezel.
        còn được trang bị bộ máy CH 28‑520 C, hoạt động ở tần số 28.800vph và có mức dự trữ năng lượng tối đa lên đến 55 giờ. Có thể nhìn thấy qua mặt kính sau là cân bằng Gyromax với lò xo cân bằng Spiromax, con dấu Patek Philippe và cánh quạt được làm bằng vàng hồng 21k. Đồng hồ có khả năng kháng nước ở độ sâu tối đa 120 mét.`
        
    },
    {
        id:70,
        name:'Đồng Hồ Hublot Big Bang Ceramic Blue Diamonds 41mm 341.CM.7170.LR.1204',
        image:'6.png',
        price:427280000, 
        brand:`Hublot`,
        Code:`341.CM.7170.LR.1204`,
        Size:`41mm`,
        Material:`Dây Cao Su`,
        ShellMaterial:`Gốm dên Ceramic`,
        detail:` là một trong những thiết kế được ra mắt vào năm 2021. Đồng hồ là một sự tái khẳng định tinh thần “sang trọng đương đại” của mẫu đồng hồ Aquanaut Chronograph, lần đầu tiên được xuất hiện trong một lớp vỏ bằng vàng trắng. Bảo vệ mặt số là lớp tinh tể sapphire trong suốt để lộ bên dưới là mặt số màu xanh kaki mang xu hướng hiện đại với họa tiết bàn cờ khắc nổi. Trung tâm mặt số là bộ kim giờ, kim phút và kim giây với lớp phủ phát quang màu trắng, cho phép người đeo có thể xem giờ ngay cả khi ở trong điều kiện thiếu ánh sáng. Hơn nữa, để tạo nên nét chấm phá cho mặt số thì thay vì sử dụng một kiểu cọc số đơn lẻ, thương hiệu đã kết hợp cả cọc số Ả Rập và vạch chỉ giờ cho chiếc đồng hồ này. Tại vị trí 3 giờ là một ô cửa sổ lịch ngày. Bộ đếm chronograph 60 phút ở vị trí 6 giờ cũng có hình bát giác bo tròn giống khung bezel.
        còn được trang bị bộ máy CH 28‑520 C, hoạt động ở tần số 28.800vph và có mức dự trữ năng lượng tối đa lên đến 55 giờ. Có thể nhìn thấy qua mặt kính sau là cân bằng Gyromax với lò xo cân bằng Spiromax, con dấu Patek Philippe và cánh quạt được làm bằng vàng hồng 21k. Đồng hồ có khả năng kháng nước ở độ sâu tối đa 120 mét.`
        
    },
    {
        id:71,
        name:'Đồng Hồ Hublot Big Bang Ceramic Blue Diamonds 38mm 361.CM.7170.LR.1204',
        image:'7.png',
        price:219000000 ,
        brand:`Hublot`,
        Code:`361.CM.7170.LR.1204`,
        Size:`38mm`,
        Material:`Cao su`,
        ShellMaterial:`Gốm dên Ceramic`,
        detail:` là một trong những thiết kế được ra mắt vào năm 2021. Đồng hồ là một sự tái khẳng định tinh thần “sang trọng đương đại” của mẫu đồng hồ Aquanaut Chronograph, lần đầu tiên được xuất hiện trong một lớp vỏ bằng vàng trắng. Bảo vệ mặt số là lớp tinh tể sapphire trong suốt để lộ bên dưới là mặt số màu xanh kaki mang xu hướng hiện đại với họa tiết bàn cờ khắc nổi. Trung tâm mặt số là bộ kim giờ, kim phút và kim giây với lớp phủ phát quang màu trắng, cho phép người đeo có thể xem giờ ngay cả khi ở trong điều kiện thiếu ánh sáng. Hơn nữa, để tạo nên nét chấm phá cho mặt số thì thay vì sử dụng một kiểu cọc số đơn lẻ, thương hiệu đã kết hợp cả cọc số Ả Rập và vạch chỉ giờ cho chiếc đồng hồ này. Tại vị trí 3 giờ là một ô cửa sổ lịch ngày. Bộ đếm chronograph 60 phút ở vị trí 6 giờ cũng có hình bát giác bo tròn giống khung bezel.
        còn được trang bị bộ máy CH 28‑520 C, hoạt động ở tần số 28.800vph và có mức dự trữ năng lượng tối đa lên đến 55 giờ. Có thể nhìn thấy qua mặt kính sau là cân bằng Gyromax với lò xo cân bằng Spiromax, con dấu Patek Philippe và cánh quạt được làm bằng vàng hồng 21k. Đồng hồ có khả năng kháng nước ở độ sâu tối đa 120 mét.`
        

    },
    {
        id:72,
        name:'Đồng Hồ Hublot Big Bang e Titanium White Diamonds 42mm 440.NX.1101.RW.1704',
        image:'8.png',
        price:2650000000 ,
        brand:`Hublot`,
        Code:`361.CM.7170.LR.1204`,
        Size:`43mm`,
        Material:`Cao su`,
        ShellMaterial:`Gốm dên Ceramic`,
        detail:` là một trong những thiết kế được ra mắt vào năm 2021. Đồng hồ là một sự tái khẳng định tinh thần “sang trọng đương đại” của mẫu đồng hồ Aquanaut Chronograph, lần đầu tiên được xuất hiện trong một lớp vỏ bằng vàng trắng. Bảo vệ mặt số là lớp tinh tể sapphire trong suốt để lộ bên dưới là mặt số màu xanh kaki mang xu hướng hiện đại với họa tiết bàn cờ khắc nổi. Trung tâm mặt số là bộ kim giờ, kim phút và kim giây với lớp phủ phát quang màu trắng, cho phép người đeo có thể xem giờ ngay cả khi ở trong điều kiện thiếu ánh sáng. Hơn nữa, để tạo nên nét chấm phá cho mặt số thì thay vì sử dụng một kiểu cọc số đơn lẻ, thương hiệu đã kết hợp cả cọc số Ả Rập và vạch chỉ giờ cho chiếc đồng hồ này. Tại vị trí 3 giờ là một ô cửa sổ lịch ngày. Bộ đếm chronograph 60 phút ở vị trí 6 giờ cũng có hình bát giác bo tròn giống khung bezel.
        còn được trang bị bộ máy CH 28‑520 C, hoạt động ở tần số 28.800vph và có mức dự trữ năng lượng tối đa lên đến 55 giờ. Có thể nhìn thấy qua mặt kính sau là cân bằng Gyromax với lò xo cân bằng Spiromax, con dấu Patek Philippe và cánh quạt được làm bằng vàng hồng 21k. Đồng hồ có khả năng kháng nước ở độ sâu tối đa 120 mét.`
        
    },
    {
        id:73,
        name:'Đồng Hồ Hublot Big Bang e UEFA Champions League 42mm 440.EX.1100.RX.UCL20',
        image:'9.png',
        price:1470000000 ,
        brand:`Hublot`,
        Code:`361.CM.7170.LR.1204`,
        Size:`42mm`,
        Material:`Cao su`,
        ShellMaterial:`Gốm dên Ceramic`,
        detail:` là một trong những thiết kế được ra mắt vào năm 2021. Đồng hồ là một sự tái khẳng định tinh thần “sang trọng đương đại” của mẫu đồng hồ Aquanaut Chronograph, lần đầu tiên được xuất hiện trong một lớp vỏ bằng vàng trắng. Bảo vệ mặt số là lớp tinh tể sapphire trong suốt để lộ bên dưới là mặt số màu xanh kaki mang xu hướng hiện đại với họa tiết bàn cờ khắc nổi. Trung tâm mặt số là bộ kim giờ, kim phút và kim giây với lớp phủ phát quang màu trắng, cho phép người đeo có thể xem giờ ngay cả khi ở trong điều kiện thiếu ánh sáng. Hơn nữa, để tạo nên nét chấm phá cho mặt số thì thay vì sử dụng một kiểu cọc số đơn lẻ, thương hiệu đã kết hợp cả cọc số Ả Rập và vạch chỉ giờ cho chiếc đồng hồ này. Tại vị trí 3 giờ là một ô cửa sổ lịch ngày. Bộ đếm chronograph 60 phút ở vị trí 6 giờ cũng có hình bát giác bo tròn giống khung bezel.
        còn được trang bị bộ máy CH 28‑520 C, hoạt động ở tần số 28.800vph và có mức dự trữ năng lượng tối đa lên đến 55 giờ. Có thể nhìn thấy qua mặt kính sau là cân bằng Gyromax với lò xo cân bằng Spiromax, con dấu Patek Philippe và cánh quạt được làm bằng vàng hồng 21k. Đồng hồ có khả năng kháng nước ở độ sâu tối đa 120 mét.`
        
    },
    {
        id:74,
        name:'Đồng Hồ Hublot Big Bang Gold Blue Diamonds 38mm 361.PX.7180.LR.1204',
        image:'10.png',
        price:7190000000,
        brand:`Hublot`,
        Code:`361.CM.7170.LR.1204`,
        Size:`38mm`,
        Material:`Cao su`,
        ShellMaterial:`Gốm dên Ceramic`,
        detail:` là một trong những thiết kế được ra mắt vào năm 2021. Đồng hồ là một sự tái khẳng định tinh thần “sang trọng đương đại” của mẫu đồng hồ Aquanaut Chronograph, lần đầu tiên được xuất hiện trong một lớp vỏ bằng vàng trắng. Bảo vệ mặt số là lớp tinh tể sapphire trong suốt để lộ bên dưới là mặt số màu xanh kaki mang xu hướng hiện đại với họa tiết bàn cờ khắc nổi. Trung tâm mặt số là bộ kim giờ, kim phút và kim giây với lớp phủ phát quang màu trắng, cho phép người đeo có thể xem giờ ngay cả khi ở trong điều kiện thiếu ánh sáng. Hơn nữa, để tạo nên nét chấm phá cho mặt số thì thay vì sử dụng một kiểu cọc số đơn lẻ, thương hiệu đã kết hợp cả cọc số Ả Rập và vạch chỉ giờ cho chiếc đồng hồ này. Tại vị trí 3 giờ là một ô cửa sổ lịch ngày. Bộ đếm chronograph 60 phút ở vị trí 6 giờ cũng có hình bát giác bo tròn giống khung bezel.
        còn được trang bị bộ máy CH 28‑520 C, hoạt động ở tần số 28.800vph và có mức dự trữ năng lượng tối đa lên đến 55 giờ. Có thể nhìn thấy qua mặt kính sau là cân bằng Gyromax với lò xo cân bằng Spiromax, con dấu Patek Philippe và cánh quạt được làm bằng vàng hồng 21k. Đồng hồ có khả năng kháng nước ở độ sâu tối đa 120 mét.`
         
    },
    {
        id:75,
        name:'Đồng Hồ Hublot Big Bang Gold Blue Diamonds 41mm 341.PX.7180.LR.1204',
        image:'11.png',
        price:7291200000 ,
        brand:`Hublot`,
        Code:`341.PX.7180.LR.1204`,
        Size:`41mm`,
        Material:`Cao su`,
        ShellMaterial:`Gốm dên Ceramic`,
        detail:` là một trong những thiết kế được ra mắt vào năm 2021. Đồng hồ là một sự tái khẳng định tinh thần “sang trọng đương đại” của mẫu đồng hồ Aquanaut Chronograph, lần đầu tiên được xuất hiện trong một lớp vỏ bằng vàng trắng. Bảo vệ mặt số là lớp tinh tể sapphire trong suốt để lộ bên dưới là mặt số màu xanh kaki mang xu hướng hiện đại với họa tiết bàn cờ khắc nổi. Trung tâm mặt số là bộ kim giờ, kim phút và kim giây với lớp phủ phát quang màu trắng, cho phép người đeo có thể xem giờ ngay cả khi ở trong điều kiện thiếu ánh sáng. Hơn nữa, để tạo nên nét chấm phá cho mặt số thì thay vì sử dụng một kiểu cọc số đơn lẻ, thương hiệu đã kết hợp cả cọc số Ả Rập và vạch chỉ giờ cho chiếc đồng hồ này. Tại vị trí 3 giờ là một ô cửa sổ lịch ngày. Bộ đếm chronograph 60 phút ở vị trí 6 giờ cũng có hình bát giác bo tròn giống khung bezel.
        còn được trang bị bộ máy CH 28‑520 C, hoạt động ở tần số 28.800vph và có mức dự trữ năng lượng tối đa lên đến 55 giờ. Có thể nhìn thấy qua mặt kính sau là cân bằng Gyromax với lò xo cân bằng Spiromax, con dấu Patek Philippe và cánh quạt được làm bằng vàng hồng 21k. Đồng hồ có khả năng kháng nước ở độ sâu tối đa 120 mét.`
         
    },
    {
        id:76,
        name:'Đồng Hồ Hublot Big Bang Gold Ceramic 41mm 341.PB.131.RX',
        image:'12.png',
        price:5446800000,
        brand:`Hublot`,
        Code:`341.PB.131.RX`,
        Size:`41mm`,
        Material:`Dây Cao su`,
        ShellMaterial:`Vàng 18k & Gốm dên Ceramic`,
        detail:` là một trong những thiết kế được ra mắt vào năm 2021. Đồng hồ là một sự tái khẳng định tinh thần “sang trọng đương đại” của mẫu đồng hồ Aquanaut Chronograph, lần đầu tiên được xuất hiện trong một lớp vỏ bằng vàng trắng. Bảo vệ mặt số là lớp tinh tể sapphire trong suốt để lộ bên dưới là mặt số màu xanh kaki mang xu hướng hiện đại với họa tiết bàn cờ khắc nổi. Trung tâm mặt số là bộ kim giờ, kim phút và kim giây với lớp phủ phát quang màu trắng, cho phép người đeo có thể xem giờ ngay cả khi ở trong điều kiện thiếu ánh sáng. Hơn nữa, để tạo nên nét chấm phá cho mặt số thì thay vì sử dụng một kiểu cọc số đơn lẻ, thương hiệu đã kết hợp cả cọc số Ả Rập và vạch chỉ giờ cho chiếc đồng hồ này. Tại vị trí 3 giờ là một ô cửa sổ lịch ngày. Bộ đếm chronograph 60 phút ở vị trí 6 giờ cũng có hình bát giác bo tròn giống khung bezel.
        còn được trang bị bộ máy CH 28‑520 C, hoạt động ở tần số 28.800vph và có mức dự trữ năng lượng tối đa lên đến 55 giờ. Có thể nhìn thấy qua mặt kính sau là cân bằng Gyromax với lò xo cân bằng Spiromax, con dấu Patek Philippe và cánh quạt được làm bằng vàng hồng 21k. Đồng hồ có khả năng kháng nước ở độ sâu tối đa 120 mét.`
           
    },
    {
        id:77,
        name:'Đồng Hồ Hublot Big Bang Gold White Diamonds 38mm 361.PE.2010.RW.1104',
        image:'13.png',
        price:4723600000 ,
        brand:`Hublot`,
        Code:`361.PX.1280.RX.1704`,
        Size:`38mm`,
        Material:`Dây Cao su`,
        ShellMaterial:`Vàng 18k`,
        detail:` là một trong những thiết kế được ra mắt vào năm 2021. Đồng hồ là một sự tái khẳng định tinh thần “sang trọng đương đại” của mẫu đồng hồ Aquanaut Chronograph, lần đầu tiên được xuất hiện trong một lớp vỏ bằng vàng trắng. Bảo vệ mặt số là lớp tinh tể sapphire trong suốt để lộ bên dưới là mặt số màu xanh kaki mang xu hướng hiện đại với họa tiết bàn cờ khắc nổi. Trung tâm mặt số là bộ kim giờ, kim phút và kim giây với lớp phủ phát quang màu trắng, cho phép người đeo có thể xem giờ ngay cả khi ở trong điều kiện thiếu ánh sáng. Hơn nữa, để tạo nên nét chấm phá cho mặt số thì thay vì sử dụng một kiểu cọc số đơn lẻ, thương hiệu đã kết hợp cả cọc số Ả Rập và vạch chỉ giờ cho chiếc đồng hồ này. Tại vị trí 3 giờ là một ô cửa sổ lịch ngày. Bộ đếm chronograph 60 phút ở vị trí 6 giờ cũng có hình bát giác bo tròn giống khung bezel.
        còn được trang bị bộ máy CH 28‑520 C, hoạt động ở tần số 28.800vph và có mức dự trữ năng lượng tối đa lên đến 55 giờ. Có thể nhìn thấy qua mặt kính sau là cân bằng Gyromax với lò xo cân bằng Spiromax, con dấu Patek Philippe và cánh quạt được làm bằng vàng hồng 21k. Đồng hồ có khả năng kháng nước ở độ sâu tối đa 120 mét.`
           
    },
    {
        id:78,
        name:'Đồng Hồ Hublot Big Bang One Click King Gold White Diamonds 33mm ',
        image:'14.png',
        price:5180000000 ,
        brand:`Hublot`,
        Code:`485.OE.2210.RW.1204`,
        Size:`33mm`,
        Material:`Dây Cao su`,
        ShellMaterial:`Vàng hồng 18k`,
        detail:` là một trong những thiết kế được ra mắt vào năm 2021. Đồng hồ là một sự tái khẳng định tinh thần “sang trọng đương đại” của mẫu đồng hồ Aquanaut Chronograph, lần đầu tiên được xuất hiện trong một lớp vỏ bằng vàng trắng. Bảo vệ mặt số là lớp tinh tể sapphire trong suốt để lộ bên dưới là mặt số màu xanh kaki mang xu hướng hiện đại với họa tiết bàn cờ khắc nổi. Trung tâm mặt số là bộ kim giờ, kim phút và kim giây với lớp phủ phát quang màu trắng, cho phép người đeo có thể xem giờ ngay cả khi ở trong điều kiện thiếu ánh sáng. Hơn nữa, để tạo nên nét chấm phá cho mặt số thì thay vì sử dụng một kiểu cọc số đơn lẻ, thương hiệu đã kết hợp cả cọc số Ả Rập và vạch chỉ giờ cho chiếc đồng hồ này. Tại vị trí 3 giờ là một ô cửa sổ lịch ngày. Bộ đếm chronograph 60 phút ở vị trí 6 giờ cũng có hình bát giác bo tròn giống khung bezel.
        còn được trang bị bộ máy CH 28‑520 C, hoạt động ở tần số 28.800vph và có mức dự trữ năng lượng tối đa lên đến 55 giờ. Có thể nhìn thấy qua mặt kính sau là cân bằng Gyromax với lò xo cân bằng Spiromax, con dấu Patek Philippe và cánh quạt được làm bằng vàng hồng 21k. Đồng hồ có khả năng kháng nước ở độ sâu tối đa 120 mét.`
           
    },
    {
        id:79,
        name:'Đồng Hồ Hublot Big Bang E Titanium 42mm 440.NX.1100.RX',
        image:'15.png',
        price:1170000000,
        brand:`Hublot`,
        Code:`485.OE.2210.RW.1204`,
        Size:`42mm`,
        Material:`Dây Cao su`,
        ShellMaterial:`Vàng hồng 18k`,
        detail:` là một trong những thiết kế được ra mắt vào năm 2021. Đồng hồ là một sự tái khẳng định tinh thần “sang trọng đương đại” của mẫu đồng hồ Aquanaut Chronograph, lần đầu tiên được xuất hiện trong một lớp vỏ bằng vàng trắng. Bảo vệ mặt số là lớp tinh tể sapphire trong suốt để lộ bên dưới là mặt số màu xanh kaki mang xu hướng hiện đại với họa tiết bàn cờ khắc nổi. Trung tâm mặt số là bộ kim giờ, kim phút và kim giây với lớp phủ phát quang màu trắng, cho phép người đeo có thể xem giờ ngay cả khi ở trong điều kiện thiếu ánh sáng. Hơn nữa, để tạo nên nét chấm phá cho mặt số thì thay vì sử dụng một kiểu cọc số đơn lẻ, thương hiệu đã kết hợp cả cọc số Ả Rập và vạch chỉ giờ cho chiếc đồng hồ này. Tại vị trí 3 giờ là một ô cửa sổ lịch ngày. Bộ đếm chronograph 60 phút ở vị trí 6 giờ cũng có hình bát giác bo tròn giống khung bezel.
        còn được trang bị bộ máy CH 28‑520 C, hoạt động ở tần số 28.800vph và có mức dự trữ năng lượng tối đa lên đến 55 giờ. Có thể nhìn thấy qua mặt kính sau là cân bằng Gyromax với lò xo cân bằng Spiromax, con dấu Patek Philippe và cánh quạt được làm bằng vàng hồng 21k. Đồng hồ có khả năng kháng nước ở độ sâu tối đa 120 mét.`
           
    },
    {
        id:80,
        name:'Đồng Hồ Hublot Big Bang Ferrari Unico Magic Gold 45mm 402.MX.0138.WR',
        image:'16.png',
        price:8150000000,
        brand:`Hublot`,
        Code:`402.MX.0138.WR`,
        Size:`45mm`,
        Material:`Dây Cao su`,
        ShellMaterial:`Magic `,
        detail:` là một trong những thiết kế được ra mắt vào năm 2021. Đồng hồ là một sự tái khẳng định tinh thần “sang trọng đương đại” của mẫu đồng hồ Aquanaut Chronograph, lần đầu tiên được xuất hiện trong một lớp vỏ bằng vàng trắng. Bảo vệ mặt số là lớp tinh tể sapphire trong suốt để lộ bên dưới là mặt số màu xanh kaki mang xu hướng hiện đại với họa tiết bàn cờ khắc nổi. Trung tâm mặt số là bộ kim giờ, kim phút và kim giây với lớp phủ phát quang màu trắng, cho phép người đeo có thể xem giờ ngay cả khi ở trong điều kiện thiếu ánh sáng. Hơn nữa, để tạo nên nét chấm phá cho mặt số thì thay vì sử dụng một kiểu cọc số đơn lẻ, thương hiệu đã kết hợp cả cọc số Ả Rập và vạch chỉ giờ cho chiếc đồng hồ này. Tại vị trí 3 giờ là một ô cửa sổ lịch ngày. Bộ đếm chronograph 60 phút ở vị trí 6 giờ cũng có hình bát giác bo tròn giống khung bezel.
        còn được trang bị bộ máy CH 28‑520 C, hoạt động ở tần số 28.800vph và có mức dự trữ năng lượng tối đa lên đến 55 giờ. Có thể nhìn thấy qua mặt kính sau là cân bằng Gyromax với lò xo cân bằng Spiromax, con dấu Patek Philippe và cánh quạt được làm bằng vàng hồng 21k. Đồng hồ có khả năng kháng nước ở độ sâu tối đa 120 mét.`
            
    },
    {
        id:81,
        name:'Đồng Hồ Hublot Big Bang Ceramic Blue 44mm 301.CI.7170.RX',
        image:'17.png',
        price:3510000000,
        brand:`Hublot`,
        Code:`301.CI.7170.RX`,
        Size:`45mm`,
        Material:`Dây Cao su`,
        ShellMaterial:`Tiatanium`,
        detail:` là một trong những thiết kế được ra mắt vào năm 2021. Đồng hồ là một sự tái khẳng định tinh thần “sang trọng đương đại” của mẫu đồng hồ Aquanaut Chronograph, lần đầu tiên được xuất hiện trong một lớp vỏ bằng vàng trắng. Bảo vệ mặt số là lớp tinh tể sapphire trong suốt để lộ bên dưới là mặt số màu xanh kaki mang xu hướng hiện đại với họa tiết bàn cờ khắc nổi. Trung tâm mặt số là bộ kim giờ, kim phút và kim giây với lớp phủ phát quang màu trắng, cho phép người đeo có thể xem giờ ngay cả khi ở trong điều kiện thiếu ánh sáng. Hơn nữa, để tạo nên nét chấm phá cho mặt số thì thay vì sử dụng một kiểu cọc số đơn lẻ, thương hiệu đã kết hợp cả cọc số Ả Rập và vạch chỉ giờ cho chiếc đồng hồ này. Tại vị trí 3 giờ là một ô cửa sổ lịch ngày. Bộ đếm chronograph 60 phút ở vị trí 6 giờ cũng có hình bát giác bo tròn giống khung bezel.
        còn được trang bị bộ máy CH 28‑520 C, hoạt động ở tần số 28.800vph và có mức dự trữ năng lượng tối đa lên đến 55 giờ. Có thể nhìn thấy qua mặt kính sau là cân bằng Gyromax với lò xo cân bằng Spiromax, con dấu Patek Philippe và cánh quạt được làm bằng vàng hồng 21k. Đồng hồ có khả năng kháng nước ở độ sâu tối đa 120 mét.`
            
    },
    {
        id:82,
        name:'Đồng Hồ Hublot Big Bang Gold 44mm 301.PB.131.RX',
        image:'18.png',
        price:4440000000 ,
        brand:`Hublot`,
        Code:`301.PX.1180.RX`,
        Size:`44mm`,
        Material:`Dây Cao su`,
        ShellMaterial:`Tiatanium`,
        detail:` là một trong những thiết kế được ra mắt vào năm 2021. Đồng hồ là một sự tái khẳng định tinh thần “sang trọng đương đại” của mẫu đồng hồ Aquanaut Chronograph, lần đầu tiên được xuất hiện trong một lớp vỏ bằng vàng trắng. Bảo vệ mặt số là lớp tinh tể sapphire trong suốt để lộ bên dưới là mặt số màu xanh kaki mang xu hướng hiện đại với họa tiết bàn cờ khắc nổi. Trung tâm mặt số là bộ kim giờ, kim phút và kim giây với lớp phủ phát quang màu trắng, cho phép người đeo có thể xem giờ ngay cả khi ở trong điều kiện thiếu ánh sáng. Hơn nữa, để tạo nên nét chấm phá cho mặt số thì thay vì sử dụng một kiểu cọc số đơn lẻ, thương hiệu đã kết hợp cả cọc số Ả Rập và vạch chỉ giờ cho chiếc đồng hồ này. Tại vị trí 3 giờ là một ô cửa sổ lịch ngày. Bộ đếm chronograph 60 phút ở vị trí 6 giờ cũng có hình bát giác bo tròn giống khung bezel.
        còn được trang bị bộ máy CH 28‑520 C, hoạt động ở tần số 28.800vph và có mức dự trữ năng lượng tối đa lên đến 55 giờ. Có thể nhìn thấy qua mặt kính sau là cân bằng Gyromax với lò xo cân bằng Spiromax, con dấu Patek Philippe và cánh quạt được làm bằng vàng hồng 21k. Đồng hồ có khả năng kháng nước ở độ sâu tối đa 120 mét.`
            
    },
    {
        id:83,
        name:'Đồng Hồ Hublot Big Bang Gold Blue 44mm 301.PX.7180.LR',
        image:'19.png',
        price:5690000000,
        brand:`Hublot`,
        Code:`HUB4100 Self-winding Chronograph Movement`,
        Size:`44mm`,
        Material:`Dây Cao su`,
        ShellMaterial:`Tiatanium`,
        detail:` là một trong những thiết kế được ra mắt vào năm 2021. Đồng hồ là một sự tái khẳng định tinh thần “sang trọng đương đại” của mẫu đồng hồ Aquanaut Chronograph, lần đầu tiên được xuất hiện trong một lớp vỏ bằng vàng trắng. Bảo vệ mặt số là lớp tinh tể sapphire trong suốt để lộ bên dưới là mặt số màu xanh kaki mang xu hướng hiện đại với họa tiết bàn cờ khắc nổi. Trung tâm mặt số là bộ kim giờ, kim phút và kim giây với lớp phủ phát quang màu trắng, cho phép người đeo có thể xem giờ ngay cả khi ở trong điều kiện thiếu ánh sáng. Hơn nữa, để tạo nên nét chấm phá cho mặt số thì thay vì sử dụng một kiểu cọc số đơn lẻ, thương hiệu đã kết hợp cả cọc số Ả Rập và vạch chỉ giờ cho chiếc đồng hồ này. Tại vị trí 3 giờ là một ô cửa sổ lịch ngày. Bộ đếm chronograph 60 phút ở vị trí 6 giờ cũng có hình bát giác bo tròn giống khung bezel.
        còn được trang bị bộ máy CH 28‑520 C, hoạt động ở tần số 28.800vph và có mức dự trữ năng lượng tối đa lên đến 55 giờ. Có thể nhìn thấy qua mặt kính sau là cân bằng Gyromax với lò xo cân bằng Spiromax, con dấu Patek Philippe và cánh quạt được làm bằng vàng hồng 21k. Đồng hồ có khả năng kháng nước ở độ sâu tối đa 120 mét.`
             
    },
    {
        id:84,
        name:'Đồng Hồ Hublot Big Bang Gold Ceramic 44mm 301.PB.131.RX',
        image:'20.png',
        price:4450000000,
        brand:`Hublot`,
        Code:`301.PM.1780.RX`,
        Size:`44mm`,
        Material:`Dây Cao su`,
        ShellMaterial:`Tiatanium`,
        detail:` là một trong những thiết kế được ra mắt vào năm 2021. Đồng hồ là một sự tái khẳng định tinh thần “sang trọng đương đại” của mẫu đồng hồ Aquanaut Chronograph, lần đầu tiên được xuất hiện trong một lớp vỏ bằng vàng trắng. Bảo vệ mặt số là lớp tinh tể sapphire trong suốt để lộ bên dưới là mặt số màu xanh kaki mang xu hướng hiện đại với họa tiết bàn cờ khắc nổi. Trung tâm mặt số là bộ kim giờ, kim phút và kim giây với lớp phủ phát quang màu trắng, cho phép người đeo có thể xem giờ ngay cả khi ở trong điều kiện thiếu ánh sáng. Hơn nữa, để tạo nên nét chấm phá cho mặt số thì thay vì sử dụng một kiểu cọc số đơn lẻ, thương hiệu đã kết hợp cả cọc số Ả Rập và vạch chỉ giờ cho chiếc đồng hồ này. Tại vị trí 3 giờ là một ô cửa sổ lịch ngày. Bộ đếm chronograph 60 phút ở vị trí 6 giờ cũng có hình bát giác bo tròn giống khung bezel.
        còn được trang bị bộ máy CH 28‑520 C, hoạt động ở tần số 28.800vph và có mức dự trữ năng lượng tối đa lên đến 55 giờ. Có thể nhìn thấy qua mặt kính sau là cân bằng Gyromax với lò xo cân bằng Spiromax, con dấu Patek Philippe và cánh quạt được làm bằng vàng hồng 21k. Đồng hồ có khả năng kháng nước ở độ sâu tối đa 120 mét.`
               
    }
]