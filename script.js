//your JS code here. If required
document.querySelector('input[type="button"]').addEventListener('click', function() {
  // Get the reference to the colorSelect element
  const colorSelect = document.getElementById('colorSelect');

  // Remove the selected option from the colorSelect element
  colorSelect.remove(colorSelect.selectedIndex);
});


