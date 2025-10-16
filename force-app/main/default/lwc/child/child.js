import { LightningElement,api } from 'lwc';

export default class Child extends LightningElement {

    @api message; // public property

     handleClick() {
        this.dispatchEvent(new CustomEvent('sendmsg', {
            detail: { value: 'Message from Child' }
        })
);
    }

}