---
name: frontend-implementation
description: "Triển khai một mốc BTECTodoList theo spec/design, chạy kiểm tra và báo thay đổi."
---

# frontend-implementation

1. Đọc spec/design/plan và source hiện tại; xác định mốc được yêu cầu.
2. Chỉ triển khai mốc đó. Thay TODO liên quan bằng logic; không gọi TODO của mốc chưa làm.
3. Logic thuần trong task-service, storage trong storage, DOM trong app.
4. Dùng textContent, label/keyboard/aria-live; không thêm dependency.
5. Chạy npm run check, test phù hợp; ghi rõ còn TODO hoặc chưa chạy UI.
6. Liệt kê file, AC, cách chạy thử; dừng đúng ranh giới mốc và đề xuất tester.
Đầu ra: source của mốc và tóm tắt kiểm chứng; không sửa phạm vi yêu cầu.
