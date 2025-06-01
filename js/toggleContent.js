document.addEventListener("DOMContentLoaded", function () {
  //(hiệu ứng mượt)
  const buttons = document.querySelectorAll(".toggle-more");

  buttons.forEach(button => {
    const content = button.previousElementSibling;

    button.addEventListener("click", () => {
      const isOpen = content.classList.contains("open");

      if (isOpen) {
        // Thu gọn
        content.style.maxHeight = null;
        content.classList.remove("open");
        button.textContent = "Đọc tiếp";
      } else {
        // Mở rộng
        content.style.maxHeight = content.scrollHeight + "px";
        content.classList.add("open");
        button.textContent = "Đóng lại";
      }
    });

    
    window.addEventListener("resize", () => {
      if (content.classList.contains("open")) {
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });
  });

  // Hiện chi tiết dịch vụ
  document.querySelectorAll(".btn-detail").forEach(btn => {
    btn.addEventListener("click", function () {
      const targetId = this.dataset.target;

      // Ẩn tất cả chi tiết dịch vụ trước
      document.querySelectorAll(".service-details").forEach(el => {
        el.style.display = "none";
      });

      // Hiện phần chi tiết tương ứng
      const targetEl = document.getElementById(targetId);
      targetEl.style.display = "block";

      // Cuộn mượt
      window.scrollTo({
        top: targetEl.offsetTop - 100,
        behavior: "smooth",
      });
    });
  });

  // Đóng chi tiết dịch vụ
  document.querySelectorAll(".close-detail").forEach(closeBtn => {
    closeBtn.addEventListener("click", function () {
      this.closest(".service-details").style.display = "none";
    });
  });
});
