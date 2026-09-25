# Chạy project React Profile trên Windows

## 1. Cài Node.js
Khuyến nghị Node.js LTS. Kiểm tra:

```powershell
node -v
npm -v
```

## 2. Mở đúng thư mục project

```powershell
cd đường\dẫn\đến\ThucHanh-profile
```

## 3. Xóa cache / dependencies cũ
Nếu trước đó project đã chạy lỗi hoặc bạn vừa thay đổi package.json:

### PowerShell
```powershell
Remove-Item -Recurse -Force node_modules -ErrorAction SilentlyContinue
Remove-Item -Recurse -Force dist -ErrorAction SilentlyContinue
Remove-Item -Recurse -Force .vite -ErrorAction SilentlyContinue
Remove-Item package-lock.json -ErrorAction SilentlyContinue
```

### CMD
```cmd
rmdir /s /q node_modules
rmdir /s /q dist
del package-lock.json
```

## 4. Cài lại package

```powershell
npm install
```

## 5. Chạy trang web

```powershell
npm run dev
```

Mở `http://localhost:5173/`.

## 6. Build

```powershell
npm run build
```

Nếu build thành công, chạy bản build bằng:

```powershell
npm run preview
```

Sau đó mở URL Vite hiển thị trên terminal.

> Lưu ý: `npm run dev` dùng cho lúc code. `npm run build` chỉ tạo thư mục `dist`; nó không tự mở trang web.
