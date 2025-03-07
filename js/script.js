function updateOSOptions() {
  const deviceChoice = document.getElementById('device').value;
  const osChoice = document.getElementById('os');

  osChoice.innerHTML = '';

  if (deviceChoice === 'Desktop') {
    const options = ['Windows', 'MacOS', 'Linux', 'Other'];
    addOptions(osChoice, options);
  }
  else if (deviceChoice === 'Tablet'){
    const options = ['iOS', 'Android', 'Other'];
    addOptions(osChoice, options);
  }
  else {
    const option = document.createElement('option');
    option.text = 'Choose a Device First';
    option.value = '';
    os.add(option);
  }
}

function addOptions(selectElement, optionsArray) {
  optionsArray.forEach(option => {
    const newOption = document.createElement('option');
    newOption.text = option;
    newOption.value = option.toLowerCase();
    selectElement.add(newOption);
  });
}