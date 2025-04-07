const passwordInput = document.getElementById('password');
const strengthMeter = document.getElementById('strength-meter');

passwordInput.addEventListener('input', () => {
  const value = passwordInput.value;
  let strength = 0;
  if (value.length >= 8) strength++;
  if (/[A-Z]/.test(value)) strength++;
  if (/[0-9]/.test(value)) strength++;
  if (/[^A-Za-z0-9]/.test(value)) strength++;

  strengthMeter.value = strength;
});
