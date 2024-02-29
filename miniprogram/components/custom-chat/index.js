// components/custom-chat/index.js
Component({

  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
  
      chatRecords: [  
        {  
          "sender": "User1",  
          "receiver": "User2",  
          "message": "Hi, how's your day going?",  
          "timestamp": "2023-07-19T09:00:00Z"  
        },  
        {  
          "sender": "User2",  
          "receiver": "User1",  
          "message": "It's been good, thanks. Busy, but good. You know how it is.",  
          "timestamp": "2023-07-19T09:05:00Z"  
        },  
        {  
          "sender": "User1",  
          "receiver": "User2",  
          "message": "Yeah, I know. I'm just checking in. Anything exciting happening?",  
          "timestamp": "2023-07-19T09:10:00Z"  
        },  
        {  
          "sender": "User2",  
          "receiver": "User1",  
          "message": "Well, I have a meeting with the boss later. That's always exciting, right?",  
          "timestamp": "2023-07-19T09:15:00Z"  
        },  
        {  
          "sender": "User1",  
          "receiver": "User2",  
          "message": "Haha, yeah, I bet. Let me know how it goes.",  
          "timestamp": "2023-07-19T09:20:00Z"  
        },  
        {  
          "sender": "User2",  
          "receiver": "User1",  
          "message": "Will do. Thanks for checking in. How's work been?",  
          "timestamp": "2023-07-19T09:25:00Z"  
        },  
        {  
          "sender": "User1",  
          "receiver": "User2",  
          "message": "It's been good. I've been getting a lot of new clients lately, which is great.",  
          "timestamp": "2023-07-19T09:30:00Z"  
        },  
        {  
          "sender": "User2",  
          "receiver": "User1",  
          "message": "That sounds like great news! Congrats on the new clients.",  
          "timestamp": "2023-07-19T09:35:00Z"  
        },  
        {  
          "sender": "User1",  
          "receiver": "User2",  
          "message": "Yeah, it's been good. But I'm looking forward to the weekend. Gonna take a break and relax a bit.",  
          "timestamp": "2023-07-19T09:40:00Z"  
        },  
        {  
          "sender": "User2",  
          "receiver": "User1",  
          "message": "Same here. I'm looking forward to it too. We'll have to catch up then.",  
          "timestamp": "2023-07-19T09:45:00Z"  
        }  
      ]  
    
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onClickLeft() {
      this.triggerEvent("hideFrame")
    },
  },
  lifetimes:{
    attached() {  
    }
  }
})