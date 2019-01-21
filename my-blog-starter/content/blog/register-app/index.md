---
title: Đăng ký ứng dụng
---

# Đăng ký ứng dụng
- Ứng dụng tích hợp với hệ thống ZaloPay cần cung cấp các thông tin:

    * Tên ứng dụng: chuỗi ký tự mô tả ứng dụng hiển thị trên giao diện cho người dùng, dài tối đa 100 ký tự. Ví dụ: “Chuồn Chuồn”
    * CallbackURL: đường dẫn url để ZaloPayServer gọi lại AppServer để cung cấp dịch vụ nếu thanh toán thành công.
    * Logo: hình có kích thước 256 x 256
    * Phương thức xác thực dữ liệu sử dụng
- Sau khi đăng ký xong hệ thống ZaloPay sẽ gửi lại cho ứng dụng các thông tin:
    * appid: số nguyên dương, định danh cho ứng dụng trong quá trình thanh toán với hệ thống ZaloPay.
    * key1: khóa bí mật dùng để tạo dữ liệu xác thực cho đơn hàng
    * key2: khóa bí mật dùng để xác thực dữ liệu do ZaloPayServer gọi qua AppServer lúc callback.
