document.addEventListener("DOMContentLoaded", () => {
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const phoneInput = document.getElementById("phone");
  const passwordInput = document.getElementById("password");
  const avatarInput = document.getElementById("avatar");
  const avatarPreview = document.getElementById("avatarPreview");
  const saveBtn = document.getElementById("save");
  const clearBtn = document.getElementById("clear");
  const loginEmailInput = document.getElementById("loginEmail");
  const loginPasswordInput = document.getElementById("loginPassword");
  const loginBtn = document.getElementById("login");


  if (localStorage.getItem("userData")) {
      const userData = JSON.parse(localStorage.getItem("userData"));
      nameInput.value = userData.name || "";
      emailInput.value = userData.email || "";
      phoneInput.value = userData.phone || "";
      passwordInput.value = userData.password || "";
      if (userData.avatar) avatarPreview.src = userData.avatar;
  }

 
  saveBtn.addEventListener("click", () => {
      const userData = {
          name: nameInput.value,
          email: emailInput.value,
          phone: phoneInput.value,
          password: passwordInput.value,
          avatar: avatarPreview.src
      };
      localStorage.setItem("userData", JSON.stringify(userData));
      alert("Дані збережено!");
  });


  avatarPreview.addEventListener("click", () => avatarInput.click());

    avatarInput.addEventListener("change", (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                avatarPreview.src = e.target.result;

                
                const userData = JSON.parse(localStorage.getItem("userData")) || {};
                userData.avatar = e.target.result;
                localStorage.setItem("userData", JSON.stringify(userData));
            };
            reader.readAsDataURL(file);
          }
  });

  clearBtn.addEventListener("click", () => {
      localStorage.removeItem("userData");
      nameInput.value = "";
      emailInput.value = "";
      phoneInput.value = "";
      passwordInput.value = "";
      avatarPreview.src = "default-avatar.png";
      alert("Дані очищено!");
  });

  
  loginBtn.addEventListener("click", () => {
      const savedData = JSON.parse(localStorage.getItem("userData"));
      if (savedData && savedData.email === loginEmailInput.value && savedData.password === loginPasswordInput.value) {
          alert("Успішний вхід!");
      } else {
          alert("Неправильний email або пароль!");
      }
  });
});