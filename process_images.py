#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
去除太极球图片背景
"""
import os
from rembg import remove
from PIL import Image

# 图片目录
input_dir = r"C:\Users\DELL\taiji-ball-website\public\images"
output_dir = r"C:\Users\DELL\taiji-ball-website\public\images\processed"

# 创建输出目录
os.makedirs(output_dir, exist_ok=True)

# 要处理的图片
images = ["太极球1.jpg", "太极球2.jpg", "太极球3.jpg", "太极球4.jpg", "太极球5.jpg"]

print("开始处理图片，去除背景...")

for img_name in images:
    input_path = os.path.join(input_dir, img_name)
    output_path = os.path.join(output_dir, img_name.replace(".jpg", "_nobg.png"))

    if os.path.exists(input_path):
        print(f"处理: {img_name}")
        try:
            # 读取图片
            with open(input_path, 'rb') as f:
                input_data = f.read()

            # 去除背景
            output_data = remove(input_data)

            # 保存为PNG（保留透明通道）
            with open(output_path, 'wb') as f:
                f.write(output_data)

            print(f"  -> 保存到: {output_path}")
        except Exception as e:
            print(f"  -> 处理失败: {e}")
    else:
        print(f"文件不存在: {input_path}")

print("\n处理完成！")
print(f"去背景后的图片保存在: {output_dir}")