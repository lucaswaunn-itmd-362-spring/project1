function updateOSOptions() {
  const deviceChoice = document.getElementById('device').value;
  const osChoice = document.getElementById('os');

  osChoice.innerHTML = '';

  if (deviceChoice === 'desktop' || deviceChoice === 'laptop') {
    const options = ['MacOS', 'Windows', 'Linux', 'Other'];
    addOptions(osChoice, options);
  }
  else if (deviceChoice === 'smartphone') {
    const options = ['iOS', 'Android', 'Windows', 'Other'];
    addOptions(osChoice, options);
  }
  else if (deviceChoice === 'tablet') {
    const options = ['iPadOS', 'Android', 'Windows', 'Other'];
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