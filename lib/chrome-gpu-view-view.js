'use babel';
export default class ChromeGpuViewView {
  constructor(src = 'chrome://gpu/') {
    // Create root element
    this.element = document.createElement('div');
    this.element.classList.add('chrome-gpu-view');
    // Create message element
    const wv = document.createElement('webview');
    wv.src = src
    wv.style.height = '100%'
    wv.style.width = '100%'
    wv.style.background = 'white'
    this.element.appendChild(wv);
  }
  destroy() {
    this.element.remove();
  }
  getElement() {
    return this.element;
  }
  getTitle() {
    return "GPU View";
  }
}
