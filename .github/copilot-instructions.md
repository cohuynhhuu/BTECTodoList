# BTECTodoList project instructions
Đây là starter cho workshop AI-DLC. Chỉ triển khai khi người dùng giao nhiệm vụ; không tự hoàn thành cả app khi được yêu cầu tìm hiểu project.

## Ngữ cảnh và ngôn ngữ
Trao đổi, tài liệu và UI bằng tiếng Việt; định danh code bằng tiếng Anh.
Đọc docs/product-brief.md, specification.md, design.md, implementation-plan.md trước khi hành động.
Source là bộ khung chưa có chức năng; các Error TODO là chủ ý, phải thay bằng logic trong mốc tương ứng.

## Quy trình
BA làm rõ yêu cầu → người dùng xác nhận → architect chốt thiết kế/kế hoạch → front-end-dev triển khai từng mốc → tester kiểm tra → người dùng review.
Không tự đổi Status thành APPROVED. Xác nhận rõ trong chat là đủ; ghi lại quyết định vào tài liệu. Nếu người dùng đã cho phép bước tiếp theo thì tiếp tục, không xin lại cùng xác nhận.
Khi thiếu quyết định ảnh hưởng phạm vi, hỏi tối đa 5 câu. Không tự thêm tính năng.
Tài liệu là ngữ cảnh bền vững; không chỉ dựa vào lịch sử chat.

## Công nghệ và phạm vi
HTML, CSS, JavaScript ES modules và localStorage. Node >=22 dùng cho server/test, không phải backend.
Không thêm React, thư viện, CDN, backend hoặc tài khoản nếu chưa được yêu cầu.
Không đổi key lưu trữ hay cấu trúc dữ liệu mà không cập nhật thiết kế.
Không dùng innerHTML cho title; dùng textContent/DOM APIs.

## Kiểm chứng
npm run check: kiểm tra syntax. npm test: unit test. npm start: http://localhost:5173.
Không cần npm install, package không có dependencies.
Không tuyên bố tests pass nếu chỉ có TODO hoặc chưa chạy. Phân biệt PASS, FAIL, NOT RUN, BLOCKED.
Khi không có browser tool, cung cấp bước kiểm tra thủ công và ghi UI checks là NOT RUN.
Kết thúc mỗi mốc: file thay đổi, AC liên quan, lệnh và kết quả thật, bước cần người dùng kiểm tra.
Không tự deploy, cài extension hay thay đổi thiết lập quyền của VS Code.
