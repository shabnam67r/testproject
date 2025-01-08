/**
 * loads and decorates the footer
 * @param {Element} block The footer block element
 */
export default async function decorate(block) {
  // Clear the existing content of the footer block
  block.textContent = '';

  // Create the footer DOM structure
  const footer = document.createElement('div');
  footer.classList.add('footer-content');

  // Add Logo Section
  const logoSection = document.createElement('div');
  logoSection.classList.add('footer-logo');
  const logo = document.createElement('img');
  logo.src = '/assets/images/logo-s.svg';
  logo.alt = 'Logo';
  logoSection.appendChild(logo);

  // Add Text Section
  const textSection = document.createElement('div');
  textSection.classList.add('footer-text');
  const footerNote = document.createElement('p');
  footerNote.textContent = 'Footer Note';
  textSection.appendChild(footerNote);

  // Append sections to the footer
  footer.appendChild(logoSection);
  footer.appendChild(textSection);

  // Append the footer to the block
  block.appendChild(footer);
}
