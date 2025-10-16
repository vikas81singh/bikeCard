import { LightningElement ,track,wire} from 'lwc';
import getAccounts from '@salesforce/apex/AccountController.getAccounts';

export default class HelloWorldLwc extends LightningElement {

   @track isVisible=false;
   @track messagetochild='Hello from Parent--------------------------';
   @wire(getAccounts) accounts;
   handleMessage(event) {
        this.messagetochild = event.detail.value;
    }
    connectedCallback(){
      this.messagetochild='Hello from Parent----------------------123456----';
      console.log('-----------',this.accounts);
    }

}