---
name: human-review
description: "Review BTECTodoList về đúng đặc tả, an toàn hiển thị, xử lý lỗi và bằng chứng kiểm thử."
---

# human-review

1. Đọc yêu cầu và quyết định được xác nhận; kiểm tra phạm vi thay đổi.
2. Review validation, id, DOM textContent, schema và lỗi lưu/đọc.
3. Phân biệt kiểm tra code với kiểm thử thực sự; không suy luận tất cả AC pass từ code review.
4. Xem test coverage, các TODO, browser checks còn thiếu.
5. Báo findings có file, lý do, AC liên quan và cách tái hiện nếu có.
6. Tóm tắt READY FOR HUMAN REVIEW hoặc NEEDS CHANGES kèm giới hạn. Người dùng quyết định chấp nhận.
