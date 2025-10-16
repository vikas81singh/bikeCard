import { LightningElement, wire } from 'lwc';
import { CurrentPageReference } from 'lightning/navigation';
import { fireEvent } from 'c/pubsub';


export default class PublisherComp extends LightningElement {
    @wire(CurrentPageReference) pageRef;
    handleChanges(event){
       // event.preventDefault();
        fireEvent(this.pageRef, 'inputChangeEvent', event.target.value);
    }
}
