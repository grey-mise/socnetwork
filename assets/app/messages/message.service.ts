import {Message} from "./message.model";
export class MessageService {
    private messages: Message[] = [
        new Message('some message', 'Tan'),
        new Message('some message two', 'Tan'),
        new Message('some message 3', 'Tan'),
        new Message('some message 4', 'Tan'),
    ];

    addMessage(message: Message) {
        this.messages.push(message);
    }

    getMessage() {
        return this.messages;
    }

    deleteMessage(message: Message) {
        this.messages.splice(this.messages.indexOf(message), 1);
    }
}