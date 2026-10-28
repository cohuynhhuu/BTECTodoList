---
applyTo: "tests/**"
description: "Quy tắc viết kiểm thử hành vi BTECTodoList theo acceptance criteria."
---
# Tests
- Dùng node:test và node:assert/strict; không thêm thư viện.
- Test hành vi quan sát được, đối chiếu AC thay vì sao chép implementation.
- Inject storage giả cho lưu/đọc; không cần DOM trong unit test.
- Bao phủ rỗng, whitespace, 1/100/101 ký tự, id, cùng title, round-trip, JSON/schema hỏng, lỗi lưu.
- Thay test.todo bằng test có assertion khi mốc đã triển khai.
- Không bỏ test fail hoặc nới expected chỉ để xanh.
- UI, keyboard, HTML-as-text, reload cần kiểm tra trình duyệt riêng.
