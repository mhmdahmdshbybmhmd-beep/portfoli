document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".checkout-form");
  const summary = document.querySelector(".cart-summary");

  if (!form) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const inputs = form.querySelectorAll("input, textarea, select");
    let isValid = true;

    inputs.forEach((input) => {
      if (!input.value.trim()) {
        isValid = false;
        input.style.borderColor = "#ef4444";
      } else {
        input.style.borderColor = "#d1d5db";
      }
    });

    if (!isValid) {
      alert("يرجى ملء جميع الحقول قبل تأكيد الشراء");
      return;
    }

    if (summary) {
      const message = document.createElement("p");
      message.textContent = "تم تأكيد الطلب بنجاح! ستصلك رسالة تأكيد قريبًا.";
      message.style.color = "#16a34a";
      message.style.fontWeight = "700";
      message.style.marginTop = "12px";
      summary.appendChild(message);
    }

    form.reset();
  });
});
