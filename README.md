<div align="center">

# 📸 Instagram Clone

**Giao diện Instagram được xây dựng lại bằng React 19 & Material UI**

![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=white)
![MUI](https://img.shields.io/badge/MUI-6-007FFF?style=flat-square&logo=mui&logoColor=white)
![License](https://img.shields.io/badge/license-MIT-green?style=flat-square)

</div>

---

## 📝 Giới thiệu

Dự án tái hiện giao diện trang chủ (Home) của Instagram với bố cục 3 cột quen thuộc: **thanh điều hướng**, **bảng tin (feed) kèm story**, và **gợi ý theo dõi**. Đây là một dự án front-end thuần (static UI), phù hợp để luyện tập React, làm quen với hệ thống component và styling bằng Material UI.

> Dự án hiện tại tập trung vào phần giao diện hiển thị, dữ liệu bài đăng/story là dữ liệu mẫu (mock), chưa kết nối backend hay xử lý tương tác thực (like, comment, follow...).

## 🖼️ Giao diện

Bố cục chia 3 phần chính trên màn hình desktop:

| Cột trái | Cột giữa | Cột phải |
|---|---|---|
| Logo + menu điều hướng (Home, Search, Explore, Reel, Messages, Notification, Create, Profile, Thread, More) | Story ngang trên cùng + danh sách bài đăng (feed) | Thông tin tài khoản đang đăng nhập + danh sách gợi ý theo dõi |

## 🌟 Tính năng hiện có

- **Story bar** — hiển thị danh sách story từ dữ liệu mẫu (`src/story.json`), render dạng vòng tròn cuộn ngang.
- **Bảng tin (Feed)** — hiển thị bài đăng dạng card gồm ảnh, tên người đăng, số lượt thích, caption và số bình luận.
- **Thanh điều hướng trái** — đầy đủ icon Material Icons cho các mục Home, Search, Explore, Reel, Messages, Notification, Create, Profile, Thread, More.
- **Gợi ý theo dõi (cột phải)** — hiển thị tài khoản đang dùng và danh sách "Suggested For You" kèm nút Follow.

## 🔧 Công nghệ sử dụng

| Công nghệ | Vai trò |
|---|---|
| [React 19](https://react.dev/) | Thư viện chính dựng giao diện theo component |
| [Create React App](https://create-react-app.dev/) (`react-scripts`) | Toolchain build & dev server |
| [MUI (Material UI) v6](https://mui.com/) | Hệ thống icon (`@mui/icons-material`) và component UI |
| [Emotion](https://emotion.sh/) (`@emotion/react`, `@emotion/styled`) | Engine styling phía dưới MUI |
| CSS thuần (file `.css` riêng theo từng component) | Tuỳ biến layout, màu sắc, responsive |

> Repo hiện **chưa sử dụng** React Router hay Axios — toàn bộ dữ liệu hiện tại là tĩnh/mock, chưa có điều hướng nhiều trang hay gọi API thực.

## 🚀 Cách chạy dự án

### Yêu cầu

- [Node.js](https://nodejs.org/) (khuyến nghị bản LTS ≥ 18)
- npm (đi kèm Node.js) hoặc yarn

### Các bước

```bash
# 1. Clone dự án
git clone https://github.com/vohuynhdatpy/instagram-clone.git
cd instagram-clone

# 2. Cài đặt dependencies
npm install

# 3. Chạy ở môi trường development
npm start
```

Mở trình duyệt tại [http://localhost:3000](http://localhost:3000) để xem kết quả. Trang sẽ tự tải lại mỗi khi bạn lưu thay đổi.

### Các script khác

```bash
npm test       # Chạy test runner ở chế độ watch
npm run build  # Build bản production vào thư mục build/
```

## 📂 Cấu trúc thư mục

```
instagram-clone/
├── public/                  # File tĩnh & ảnh demo (img1–img5.jpg, favicon, manifest...)
├── src/
│   ├── assets/               # Logo & ảnh profile dùng trong UI
│   │   ├── logo.png
│   │   └── profile.jpg
│   ├── Component/
│   │   ├── leftSide.js        # Thanh điều hướng bên trái
│   │   ├── leftSide.css
│   │   ├── middleSide.js      # Story bar + danh sách bài đăng
│   │   ├── middleSide.css
│   │   ├── rightSide.js       # Thông tin tài khoản + gợi ý theo dõi
│   │   ├── rightSide.css
│   │   └── Post/
│   │       └── post.js        # Component 1 bài đăng (post card)
│   ├── story.json            # Dữ liệu mẫu cho story bar
│   ├── App.js                # Ghép layout 3 cột (Left / Middle / Right)
│   ├── App.css
│   ├── index.js              # Điểm khởi chạy ứng dụng React
│   └── index.css
├── package.json
└── README.md
```

## 📚 Hướng phát triển tiếp theo

Một số gợi ý để mở rộng dự án xa hơn mức demo UI hiện tại:

- [ ] Kết nối dữ liệu bài đăng/story qua API thực (REST hoặc Firebase) thay cho dữ liệu mẫu cố định.
- [ ] Thêm `react-router-dom` để hỗ trợ điều hướng nhiều trang (Profile, Explore, Messages...).
- [ ] Thêm state quản lý like/comment/follow (Context API hoặc Redux/Zustand).
- [ ] Responsive đầy đủ cho mobile (hiện đã có khung `mobileTopBar` ở cột giữa, có thể mở rộng thêm).
- [ ] Tích hợp backend (Node.js/Express hoặc Firebase) để lưu trữ dữ liệu người dùng thực.
- [ ] Triển khai lên Vercel hoặc Netlify để chia sẻ bản demo trực tuyến.

## 👤 Tác giả

**Võ Huỳnh Đạt**
📧 vhuyndat08@gmail.com
🔗 [github.com/vohuynhdatpy](https://github.com/vohuynhdatpy)

---

<div align="center">

Nếu thấy dự án hữu ích, hãy cho một ⭐ trên GitHub nhé!

</div>
