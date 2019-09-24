export class Chat {
  uuid: string;
  useruuid: string[];
  userUName: string[];
  lastUpdate: Date;
  unreadMsg: Number;
  lastSender: string;
  msgs: {
    test: string;
    sender: string;
  }[];
}
