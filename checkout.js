document.addEventListener("DOMContentLoaded", function () {
  const discountInput = document.getElementById("discount-code");
  const applyBtn = document.getElementById("apply-discount");
  const errorMsg = document.querySelector(".discount-error");
  const loadingIcon = document.getElementById("loading-icon");

  discountInput.addEventListener("input", () => {
    if (discountInput.value.trim() !== "") {
      applyBtn.classList.add("active");
      applyBtn.disabled = false;
      errorMsg.style.display = "none";
    } else {
      applyBtn.classList.remove("active");
      applyBtn.disabled = true;
    }
  });

  applyBtn.addEventListener("click", () => {
    applyBtn.disabled = true;
    loadingIcon.classList.remove("hidden");

    setTimeout(() => {
      loadingIcon.classList.add("hidden");

      if (discountInput.value.trim().toLowerCase() !== "validcode") {
        discountInput.classList.add("invalid");
        errorMsg.style.display = "block";
        applyBtn.disabled = false;
      } else {
        alert("Discount applied!");
      }
    }, 1500);
  });
});
