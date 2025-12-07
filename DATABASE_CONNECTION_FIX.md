# Sửa lỗi Database Connection: getaddrinfo failed

## 🔴 Vấn đề

Lỗi: `[Errno 11001] getaddrinfo failed`

**Nguyên nhân**: Hostname database thiếu phần domain đầy đủ.

Hostname hiện tại: `dpg-d4qgi0be5dus73encn40-a` ❌  
Hostname đúng phải có dạng: `dpg-d4qgi0be5dus73encn40-a.oregon-postgres.render.com` ✅

## ✅ Giải pháp

### Cách 1: Lấy Connection String đầy đủ từ Render.com (Khuyến nghị)

1. **Đăng nhập vào Render Dashboard**
2. **Vào PostgreSQL Database** của bạn
3. **Copy Internal Database URL** hoặc **Connection String** đầy đủ

Connection string đúng sẽ có dạng:

```
postgresql://ecenter_db_user:password@dpg-d4qgi0be5dus73encn40-a.oregon-postgres.render.com:5432/ecenter_db
```

### Cách 2: Lấy từ Neon.tech (nếu dùng Neon)

1. Vào Neon Dashboard
2. Chọn project và database
3. Copy **Connection String** từ tab **Connection Details**

Connection string đúng sẽ có dạng:

```
postgresql://ecenter_db_user:password@dpg-d4qgi0be5dus73encn40-a.xxxxx.neon.tech:5432/ecenter_db?sslmode=require
```

### Cách 3: Sửa thủ công trong pgAdmin

Trong pgAdmin, thay vì chỉ nhập:

```
Host: dpg-d4qgi0be5dus73encn40-a
```

Hãy nhập đầy đủ:

```
Host: dpg-d4qgi0be5dus73encn40-a.oregon-postgres.render.com
```

Hoặc:

```
Host: dpg-d4qgi0be5dus73encn40-a.xxxxx.neon.tech
```

## 🔧 Cấu hình cho Backend

### 1. Tạo file `.env` trong thư mục `backend/`

```bash
# Database
DATABASE_URL="postgresql://ecenter_db_user:YOUR_PASSWORD@dpg-d4qgi0be5dus73encn40-a.oregon-postgres.render.com:5432/ecenter_db?sslmode=require"
```

**Lưu ý**:

- Thay `YOUR_PASSWORD` bằng password thực tế
- Thay hostname bằng hostname đầy đủ từ Render/Neon dashboard
- Thêm `?sslmode=require` nếu database yêu cầu SSL

### 2. Kiểm tra kết nối

```bash
cd backend
npm run prisma:generate
npm run start:dev
```

### 3. Test kết nối với Prisma Studio

```bash
npx prisma studio
```

## 📋 Các thông tin cần thiết

Từ Render.com PostgreSQL dashboard, bạn cần:

- ✅ **Internal Database URL** (đầy đủ) - Dùng cho backend trên Render
- ✅ **External Database URL** (nếu cần kết nối từ máy local)
- ✅ **Host**: `dpg-xxxxx.oregon-postgres.render.com` (đầy đủ)
- ✅ **Port**: `5432`
- ✅ **Database**: `ecenter_db`
- ✅ **Username**: `ecenter_db_user`
- ✅ **Password**: (từ Render dashboard)

## 🔒 Bảo mật

**KHÔNG commit file `.env` vào git!**

File `.env` đã được thêm vào `.gitignore`:

```
.env
.env.development.local
.env.test.local
.env.production.local
.env.local
```

## 🚀 Deploy lên Render

Khi deploy backend lên Render:

1. Vào **Environment** tab trong Render dashboard
2. Thêm biến môi trường:
   - **Key**: `DATABASE_URL`
   - **Value**: Internal Database URL từ Render PostgreSQL (đã có sẵn trên Render)

Render tự động cung cấp Internal Database URL cho các service trong cùng account.

## ❓ Kiểm tra lại

Sau khi sửa, test kết nối:

```bash
# Test với psql (nếu có)
psql "postgresql://ecenter_db_user:password@dpg-d4qgi0be5dus73encn40-a.oregon-postgres.render.com:5432/ecenter_db"

# Hoặc test với Prisma
cd backend
npx prisma db pull
```

Nếu vẫn lỗi, kiểm tra:

- ✅ Firewall/Security Groups cho phép IP của bạn
- ✅ Database đang chạy (không bị sleep)
- ✅ Username/Password đúng
- ✅ SSL mode (nếu database yêu cầu)
