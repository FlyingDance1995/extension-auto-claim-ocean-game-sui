// Nếu cần sét giờ chạy tool thì dùng đống này
const date = new Date();
const hour = date.getHours();
const minutes = date.getMinutes();

// Chạy hàm xử lý chính
init();

function handleClaim() {
  try {
    // Tìm ra vị trí button Claim
    const buttonClaim = document.getElementsByClassName("claim")[0]; 

    if (buttonClaim) { 
      // Click vào button Claim
      buttonClaim.click() 
      console.log('Click done!')
    }
  } catch {
    console.log('Click nút Claim bị lỗi rồi bạn ôiiii!')
  }
}

function isTelegram() {
  try {
    const currentURL = window.location.href;
    const isTeleURL = currentURL.includes('web.telegram');
  
    if (isTeleURL) {
        console.log('Phát hiện ra website Telegram !!!')
        return true
    };

    return false
  } catch {
    console.log('Không phát hiện ra trang web Telegram')
    return false
  }
}

function init() {
  // Click ngay lần đầu tiên khi chạy vào phần mềm
  handleClaim();
  
  // Click mỗi 5 phút 1 lần cho đến vô tận
  setInterval(() => {
    if(isTelegram) {
      handleClaim();
    }
  }, 1 * 60 * 1000);
}