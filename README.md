# BTECTodoList — GitHub Copilot AI-DLC Workshop Starter

Bộ khung sẵn sàng để lập trình từng bước trong workshop. Chức năng app CHƯA được triển khai; controls đang tắt, service/storage có TODO chủ ý. Không nhầm bộ khung này với app hoàn chỉnh.

## Mở trên Windows
1. Giải nén file ZIP vào `D:\FPI\Workshop6\Demo`; ZIP có thư mục gốc BTECTodoList.
2. Mở đúng thư mục `D:\FPI\Workshop6\Demo\BTECTodoList` trong VS Code, hoặc mở BTECTodoList.code-workspace.
3. Dùng phiên bản VS Code cập nhật hỗ trợ custom agents/skills; cài và đăng nhập GitHub Copilot với tài khoản có quyền sử dụng. Trust thư mục nếu VS Code yêu cầu.
4. Máy cần Node.js 22 trở lên cho server và unit test. Không cần npm install hoặc tải dependencies của app.
5. Mở Copilot Chat, chọn business-analyst và gửi prompt đầu tiên trong docs/demo-prompts.md.

## Chạy bản giao diện starter
Terminal tại thư mục BTECTodoList:
```powershell
npm start
```
Mở http://localhost:5173. Giữ cùng URL/port khi demo persistence. Ctrl+C để dừng.
Nếu PowerShell chặn npm.ps1, dùng `npm.cmd start` (tương tự check/test).
Các lệnh khác: `npm run check` và `npm test`. Ban đầu test có 9 TODO, 0 behavioral pass; tester sẽ viết assertions sau khi có implementation.

## Harness đã chuẩn bị
| Thành phần | Vị trí | Mục đích |
|---|---|---|
| 4 custom agents | .github/agents/*.agent.md | BA → Architect → Front-end → Tester |
| Global instructions | .github/copilot-instructions.md | Ngữ cảnh, phạm vi, quy trình và kiểm chứng |
| 2 scoped instructions | .github/instructions/*.instructions.md | Quy tắc frontend và test |
| 5 skills | .github/skills/*/SKILL.md | Requirements, design, implementation, testing, review |
| Tài liệu dự án | docs/ | Brief/spec/design/plan/test và prompt demo |

Agent files không khóa model hoặc tools để dùng cấu hình Copilot hiện tại. Ranh giới vai trò là hướng dẫn hành vi, không phải cơ chế chặn quyền chỉnh file.
Handoffs dùng send:false; giảng viên chủ động review và chuyển vai trò. Không tự chạy các agent song song.
Skills có name/description và đúng thư mục. Nếu Copilot không tự nạp, yêu cầu đọc file SKILL.md tương ứng trong prompt.

## Nếu chưa thấy agents/skills
- Kiểm tra mở đúng root BTECTodoList, không chỉ mở thư mục src hoặc thư mục cha.
- Reload Window sau khi cập nhật VS Code/Copilot.
- Trong Copilot Chat, mở Configure Chat/Agent Customizations và kiểm tra Agents, Skills, Instructions cho môi trường Copilot đang chọn.
- Các tùy chỉnh có thể bị giới hạn bởi phiên bản hoặc chính sách tài khoản; không tự tắt bảo vệ hoặc mở quyền toàn bộ để khắc phục.
- Có thể gắn file .agent.md và SKILL.md vào chat để cung cấp ngữ cảnh khi đang khắc phục nhận diện; đây không thay thế việc kiểm tra cấu hình native.

## Cấu trúc source
src/index.html: giao diện khởi đầu; src/styles.css: style.
src/js/app.js: DOM và điều phối.
src/js/task-service.js: logic task thuần.
src/js/storage.js: lưu và đọc dữ liệu.
tests/task-service.test.js: chỗ viết unit test theo AC.
scripts/serve.mjs: static server local, không backend ứng dụng.
scripts/check.mjs: syntax check.

## Bắt đầu ngay
Chọn business-analyst và gửi:
> Đọc product brief và bản spec nháp. Dùng skill requirements-discovery, hỏi tối đa 5 câu để chốt MVP. Chưa viết code.

Quy trình đầy đủ và prompt cho từng mốc ở docs/demo-prompts.md.

## Tham khảo định dạng
- https://code.visualstudio.com/docs/agent-customization/custom-agents
- https://code.visualstudio.com/docs/agent-customization/custom-instructions
- https://code.visualstudio.com/docs/agent-customization/agent-skills
