function isTelegram(url) {
    let currentUrl = new URL(url)['host'];
    let isTele = currentUrl['indexOf']('web.telegram.org') > -1;
    if (isTele ||  currentUrl['indexOf']('pages.fm') > -1) {
        console.log('Phát hiện ra website telegram !!!')
        return true
    };
    return false
}

// Check khi nào url trên tab chrome thay đổi thì hoạt động hàm này
chrome['tabs']['onUpdated']['addListener'](function(tabID, response) {
    if (response.status === 'complete') {
        chrome['tabs']['get'](tabID, function(resp) {
            //isTelegram
            if (isTelegram(resp['url'])) {
                // Sử dụng file claim-ocean.js để tạo thêm các hành động trong tab google
                chrome['tabs']['executeScript'](tabID, {
                    file: 'claim-ocean.js'
                }, function() {});
                // Sử dụng css để thêm style cho trang web
                chrome['tabs']['insertCSS'](tabID, {
                    file: 'app.css'
                })
            }
        })
    }
});

