
$(document).ready(function() {
    const $images = $(".container-slider img");  // lấy tất cả ảnh
    let current = 0; // index ảnh hiện tại

    // Ẩn tất cả ảnh trừ ảnh đầu tiên
    $images.each(function(index, img) {
        if (index !== 0) {
            $(img).hide();
        }
    });

    // Hàm chuyển ảnh
    setInterval(function() {
        $images.eq(current).fadeOut(500);           // ẩn ảnh hiện tại
        current = (current + 1) % $images.length;    // sang ảnh tiếp theo (quay vòng)
        $images.eq(current).fadeIn(500);             // hiện ảnh tiếp theo
    }, 2000); // 2 giây chuyển ảnh
});
