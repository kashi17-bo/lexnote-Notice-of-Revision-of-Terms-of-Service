document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav");

  if (menuButton && nav) {
    menuButton.addEventListener("click", () => {
      const expanded = menuButton.getAttribute("aria-expanded") === "true";
      menuButton.setAttribute("aria-expanded", String(!expanded));
      menuButton.setAttribute("aria-label", expanded ? "メニューを開く" : "メニューを閉じる");
      nav.classList.toggle("is-open", !expanded);
    });

    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.setAttribute("aria-label", "メニューを開く");
        nav.classList.remove("is-open");
      });
    });
  }

  const form = document.getElementById("consent-form");
  if (form) {
    const checkbox = document.getElementById("terms-consent");
    const message = document.getElementById("consent-message");

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      message.className = "consent-message is-visible";
      if (!checkbox.checked) {
        message.classList.add("is-error");
        message.textContent = "利用規約に同意するチェックを入れてください。";
        checkbox.focus();
        return;
      }
      message.classList.add("is-success");
      message.textContent = "利用規約に同意し、サービス利用を開始する手続き（デモ）が完了しました。";
    });

    checkbox.addEventListener("change", () => {
      if (message.classList.contains("is-error")) {
        message.className = "consent-message";
        message.textContent = "";
      }
    });
  }
});
