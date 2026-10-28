---
name: acceptance-testing
description: "Tạo và chạy unit test, lập manual test theo AC; dùng khi kiểm thử hoặc kiểm chứng bug fix."
---

# acceptance-testing

1. Đọc specification.md trước khi đọc implementation; map từng AC tới test.
2. Đọc docs/test-cases.md và tests; thêm assertions dùng node:test, node:assert/strict.
3. Bao phủ dữ liệu biên, cùng tên khác id, lưu/đọc và storage giả ném lỗi; không chỉ happy path.
4. Chạy npm test và npm run check. Ghi đúng số pass/fail/skip/todo; TODO không chứng minh tính năng.
5. Nếu có browser tool: chạy npm start, kiểm tra UI/keyboard/reload/HTML-as-text. Nếu không: ghi NOT RUN, hướng dẫn người dùng.
6. Báo lỗi bằng steps, expected, actual, AC và bằng chứng. Không sửa source hay đổi expected để xanh.
7. Ghi docs/test-report.md: phạm vi kiểm tra, bằng chứng, lỗi, giới hạn và bước tiếp theo.
