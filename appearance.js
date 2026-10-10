const button = document.querySelector('.appearance');
if (button) {
  const ru = document.documentElement.lang === 'ru';
  const dark = () => document.documentElement.dataset.theme ? document.documentElement.dataset.theme === 'dark' : matchMedia('(prefers-color-scheme: dark)').matches;
  const label = () => { button.textContent = dark() ? (ru ? 'Светлая' : 'Light') : (ru ? 'Тёмная' : 'Dark'); };
  button.addEventListener('click', () => { document.documentElement.dataset.theme = dark() ? 'light' : 'dark'; label(); });
  label();
}
