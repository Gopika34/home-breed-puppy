# Image assets

The current live website uses external Unsplash images. These are the image URLs referenced in `index.html`:

- Hero: https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=1100&q=85
- Golden Retriever example: https://images.unsplash.com/photo-1633722715463-d30f4f325e24?auto=format&fit=crop&w=720&q=80
- Shih Tzu / small fluffy dog example: https://images.unsplash.com/photo-1593134257782-e89567b7718a?auto=format&fit=crop&w=720&q=80
- Beagle example: https://images.unsplash.com/photo-1505628346881-b72b27e84530?auto=format&fit=crop&w=720&q=80
- Labrador Retriever example: https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=720&q=80

The current ZIP preserves these live references rather than embedding binary photo files. To self-host them, download each image, place it in this folder, then change the corresponding `img src` in `public/index.html` to a relative path.
