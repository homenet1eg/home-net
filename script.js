// Home Net V1

console.log("Home Net V1 Loaded");

// تأثير بسيط عند الضغط على الأزرار
document.querySelectorAll(".btn").forEach(btn => {
    btn.addEventListener("click", function () {
        this.style.transform = "scale(0.96)";
        setTimeout(() => {
            this.style.transform = "scale(1)";
        }, 120);
    });
});
