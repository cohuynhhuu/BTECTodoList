---
applyTo: "src/**"
description: "Quy tắc triển khai giao diện, logic và lưu trữ của BTECTodoList."
---
# Front-end
- Tách logic thuần, storage và DOM; không thêm dependency.
- Dùng let/const, named ES module exports; validate cả khi gọi service trực tiếp.
- Trim trước kiểm tra độ dài; lấy giới hạn từ MAX_TITLE_LENGTH.
- Cập nhật theo id, không theo title hoặc index.
- Render input bằng textContent; giữ label, focus, bàn phím và aria-live.
- Khi load dữ liệu, kiểm tra cấu trúc và lỗi JSON/storage; không âm thầm ghi đè dữ liệu hỏng.
- Không bắt lỗi rồi bỏ qua; thông báo khi chưa lưu được dữ liệu.
- Khi chức năng thật đã được nối, bỏ banner starter và bật controls phù hợp.
