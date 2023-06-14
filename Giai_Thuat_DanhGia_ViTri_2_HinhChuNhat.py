# Yêu cầu:
# 1. nhập tọa độ x1
# 2. nhập tọa độ y1
# 3. nhập chiều dài (hcn 1)
# 4. nhập chiều rộng (hcn 1)

# 5. nhập tọa độ x2
# 6. nhập tọa độ y2
# 7. nhập chiều dài (hcn 2)
# 8. nhập chiều rộng (hcn 2)

# GIAONHAU
# nếu hai hình chữ nhật giao nhau

# KHONGGIAONHAU
# nếu hai hình không giao nhau

x1 = float(input())
y1 = float(input())
chieu_dai_1 = float(input())
chieu_rong_1 = float(input())

x2 = float(input())
y2 = float(input())
chieu_dai_2 = float(input())
chieu_rong_2 = float(input())

kiemTra1 = True if x1 + chieu_dai_1 < x2 else False
kiemTra2 = True if x2 + chieu_dai_2 < x1 else False

kiemTra3 = True if y1 + chieu_rong_1 < y2 else False
kiemTra4 = True if y2 + chieu_rong_2 < y1 else False

if kiemTra1 or kiemTra2 or kiemTra3 or kiemTra4:
    print(f"KHONGGIAONHAU")

else:
    print(f"GIAONHAU")