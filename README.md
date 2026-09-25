# Good Profile - React

Bài thực hành môn Lập trình Web: xây dựng một trang profile cá nhân bằng React + Vite.

## Chức năng
- Trang profile cá nhân theo phong cách gamification
- Navigation: Home, Sobre, Ranking, Galeria
- Scroll đến từng khu vực bằng React state
- Hiển thị thông tin cá nhân, huy hiệu và ranking
- Nút Logout hiển thị thông báo minh họa
- Liên kết GitHub và nút Email
- Responsive trên máy tính và điện thoại

## Cài đặt
```bash
npm install
npm run dev
```

Mở địa chỉ mà Vite in ra trong terminal, thường là `http://localhost:5173`.

## Build bản production
```bash
npm run build
npm run preview
```

## Thay thông tin cá nhân
Mở `src/App.jsx`, chỉnh object `profile`, danh sách `badges`, `projects` và `gallery`.

## Thay ảnh đại diện
Thay file `src/assets/avatar.svg` bằng ảnh của bạn và cập nhật import trong `src/App.jsx`.
