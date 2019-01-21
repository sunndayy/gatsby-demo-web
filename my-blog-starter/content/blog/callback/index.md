---
title: Callback
---

# Callback

## Thông tin ZalopayServer callback cho AppServer

Nếu trừ tiền user thành công ZaloPayServer callback cho AppServer theo CallbackURL lúc đăng ký ứng dụng. Ứng dụng dùng key2 (được cấp lúc đăng ký ứng dụng) để xác thực data do ZaloPayServer post qua.

* Protocol: HTTP Post
* Content-Type: application/json