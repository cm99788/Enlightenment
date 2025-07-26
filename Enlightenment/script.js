function renderCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    if (selectedBackground) {
      ctx.drawImage(selectedBackground, 0, 0, canvas.width, canvas.height);
    }
  
    if (profileImage) {
      const size = 120; // ⬅️ Smaller size
      const x = (canvas.width - size) / 2;
      const y = (canvas.height - size) / 2;
  
      // Draw circular profile picture
      ctx.save();
      ctx.beginPath();
      ctx.arc(canvas.width / 2, canvas.height / 2, size / 2, 0, Math.PI * 2);
      ctx.closePath();
      ctx.clip();
      ctx.drawImage(profileImage, x, y, size, size);
      ctx.restore();
    }
  }
  