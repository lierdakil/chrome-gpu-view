'use babel';
import ChromeGpuViewView from './chrome-gpu-view-view';
import {CompositeDisposable} from 'atom'
export default {
  subscriptions: null,
  activate() {
    this.subscriptions = new CompositeDisposable();
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'chrome-gpu-view:toggle': () => this.toggle()
    }));
  },
  deactivate() {
    this.subscriptions.dispose();
  },
  toggle() {
    atom.workspace.open(new ChromeGpuViewView());
  }
};
