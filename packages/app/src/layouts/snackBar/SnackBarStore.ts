import { makeAutoObservable } from 'mobx'

type severityType = 'error' | 'warning' | 'info' | 'success';

export class SnackBarStore {
  message: string;
  severity: severityType = 'success';
  isOpen: boolean;

  constructor() {
    makeAutoObservable(this)
    this.isOpen = false;
    this.message = '';
  }

  open() {
    this.isOpen = true
  }

  close() {
    this.isOpen = false
  }
}

export default new SnackBarStore();