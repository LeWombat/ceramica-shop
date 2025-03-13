#!/bin/bash

# Создаем директорию для оптимизированных изображений
mkdir -p public/images-optimized

# Оптимизируем все JPG изображения
find public/images -name "*.jpg" | while read img; do
  output_path=${img/public\/images/public\/images-optimized}
  output_dir=$(dirname "$output_path")
  mkdir -p "$output_dir"
  echo "Оптимизация $img -> $output_path"
  convert "$img" -strip -quality 80 -resize 1920x1920\> "$output_path"
done

# Оптимизируем все PNG изображения
find public/images -name "*.png" | while read img; do
  output_path=${img/public\/images/public\/images-optimized}
  output_dir=$(dirname "$output_path")
  mkdir -p "$output_dir"
  echo "Оптимизация $img -> $output_path"
  convert "$img" -strip -quality 80 -resize 1920x1920\> "$output_path"
done

# Заменяем оригинальные изображения оптимизированными
echo "Заменяем оригинальные изображения оптимизированными..."
cp -R public/images-optimized/* public/images/

# Удаляем временную директорию
rm -rf public/images-optimized

echo "Оптимизация завершена!" 