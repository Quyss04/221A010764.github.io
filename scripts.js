let cart = [];
let vouchers = {
    "DISCOUNT10": 0.1,
    "DISCOUNT20": 0.2
};

function addToCart(name, price) {
    cart.push({ name, price });
    renderCart();
}

function renderCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = '';
    let totalPrice = 0;

    cart.forEach(item => {
        const li = document.createElement('li');
        li.className = 'list-group-item d-flex justify-content-between align-items-center';
        li.innerHTML = `<span>${item.name}</span><span>${item.price} VND</span>`;
        cartItemsContainer.appendChild(li);
        totalPrice += item.price;
    });

    document.getElementById('total-price').textContent = totalPrice;
}

function applyVoucher() {
    const voucherCode = document.getElementById('voucher').value;
    const discount = vouchers[voucherCode.toUpperCase()];

    if (discount) {
        let totalPrice = cart.reduce((sum, item) => sum + item.price, 0);
        totalPrice = totalPrice - (totalPrice * discount);
        document.getElementById('total-price').textContent = totalPrice;
        alert('Voucher áp dụng thành công!');
    } else {
        alert('Mã giảm giá không hợp lệ!');
    }
}

function showLogin() {
    $('#login-modal').modal('show');
}

function showRegister() {
    $('#register-modal').modal('show');
}

function closeModal(modalId) {
    $('#' + modalId).modal('hide');
}

function login() {
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    if (username && password) {
        alert('Đăng nhập thành công!');
        closeModal('login-modal');
    } else {
        alert('Vui lòng nhập đầy đủ thông tin đăng nhập.');
    }
}

function register() {
    const username = document.getElementById('register-username').value;
    const password = document.getElementById('register-password').value;
    const confirmPassword = document.getElementById('register-confirm-password').value;
    const address = document.getElementById('register-address').value;
    const phone = document.getElementById('register-phone').value;
    const name = document.getElementById('register-name').value;

    if (password !== confirmPassword) {
        alert('Mật khẩu không khớp.');
        return;
    }

    if (username && password && address && phone && name) {
        alert('Đăng ký thành công!');
        closeModal('register-modal');
    } else {
        alert('Vui lòng nhập đầy đủ thông tin đăng ký.');
    }
}

document.getElementById('cart-toggle').addEventListener('click', () => {
    const cart = document.getElementById('cart');
    cart.classList.toggle('open');
});

function checkout() {
    alert('Thanh toán thành công!');
    cart = [];
    renderCart();
}
