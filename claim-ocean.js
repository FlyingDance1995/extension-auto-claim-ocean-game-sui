// Nếu cần sét giờ chạy tool thì dùng đống này và bỏ vào điều kiện if bên dưới
const date = new Date();
const hour = date.getHours();
const minutes = date.getMinutes();

if (true) {
  init();
}

function handleClaim() {
  // Tìm ra vị trí button claim
  const buttonClaim = document.getElementsByClassName("claim")[0]; 

  try {
    if (buttonClaim) { 
      // Click vào button Claim
      buttonClaim.click() 
    }
  } catch {
    console.log('Lỗi rồi bạn ôiiiiiiiiiiiiii')
  }
}

function init() {
  handleClaim();

  setInterval(() => {
    // Click mỗi 5 phút 1 lần cho đến vô tận
    handleClaim();
  }, 5 * 60 * 1000);
}

