// Change text content dynamically
document.getElementById('change-text-btn').addEventListener('click', () => {
    const textElement = document.getElementById('dynamic-text');
    textElement.textContent = "You've just changed this text!";
  });
  
  // Modify CSS styles via JavaScript
  document.getElementById('change-style-btn').addEventListener('click', () => {
    document.body.style.backgroundColor = '#f0f8ff';
    document.getElementById('main-heading').style.color = 'teal';
  });
  
  // Add or remove an element
  document.getElementById('toggle-element-btn').addEventListener('click', () => {
    const container = document.getElementById('box-container');
    const existingBox = document.getElementById('dynamic-box');
  
    if (existingBox) {
      existingBox.remove();
    } else {
      const newBox = document.createElement('div');
      newBox.id = 'dynamic-box';
      newBox.style.width = '100px';
      newBox.style.height = '100px';
      newBox.style.backgroundColor = 'coral';
      newBox.textContent = "I'm a box!";
      newBox.style.display = 'flex';
      newBox.style.alignItems = 'center';
      newBox.style.justifyContent = 'center';
      newBox.style.marginTop = '10px';
      container.appendChild(newBox);
    }
  });
  