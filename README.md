React Profile Website
Website profile cá nhân được xây dựng bằng React và Vite.
Project được thực hiện nhằm thực hành phát triển Frontend với React Framework. Nội dung tập trung vào cấu trúc của một ứng dụng React, cách render component, quản lý trạng thái, xử lý sự kiện, hiển thị dữ liệu động và thiết kế giao diện bằng CSS.
1. Tổng quan Project
Đây là một ứng dụng Frontend được xây dựng bằng React.
Project hiện tại không sử dụng Backend hoặc Database. Phần lớn dữ liệu được khai báo dưới dạng các object và array trong JavaScript, sau đó được React render động thông qua JSX.
Các công nghệ chính được sử dụng:
- React
- JavaScript
- JSX
- CSS
- Vite
- Node.js
- npm
Project được tổ chức theo cấu trúc đơn giản, phù hợp với một ứng dụng React quy mô nhỏ.
2. Công nghệ sử dụng
Công nghệ	Mục đích
React	Xây dựng giao diện người dùng
JavaScript	Xử lý logic của ứng dụng
JSX	Xây dựng cấu trúc giao diện trong React
CSS	Thiết kế giao diện và responsive
Vite	Chạy môi trường phát triển và build project
Node.js	Môi trường chạy các công cụ phát triển
npm	Quản lý package và dependency
GitHub	Lưu trữ và quản lý mã nguồn


3. Cấu trúc Project
react-profile-ptit/
│
├── public/
│   └── favicon.svg
│
├── src/
│   ├── assets/
│   │   ├── adventure-banner.svg
│   │   └── avatar.svg
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md

Chức năng của các thư mục và file chính
public/
Chứa các tài nguyên tĩnh của project.
src/assets/
Chứa hình ảnh được sử dụng trong giao diện như ảnh đại diện và ảnh banner.
src/App.jsx
File chính của ứng dụng React. File này chứa cấu trúc giao diện, dữ liệu và logic xử lý của trang profile.
src/App.css
Chứa các CSS được sử dụng để thiết kế giao diện của ứng dụng.
src/index.css
Chứa các thiết lập CSS dùng chung cho toàn bộ ứng dụng.
src/main.jsx
File khởi tạo ứng dụng React và render component App vào trang HTML.
index.html
Trang HTML gốc được Vite sử dụng để khởi chạy ứng dụng.
package.json
Chứa thông tin project, dependency và các script để chạy project.
package-lock.json
Lưu phiên bản cụ thể của các dependency được cài đặt.
vite.config.js
File cấu hình cho Vite.
.gitignore
Xác định các file và thư mục không đưa lên GitHub, ví dụ như node_modules và dist.
