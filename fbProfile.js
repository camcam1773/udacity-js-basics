/*
 * Programming Quiz: Facebook Friends (7-5)
 */

// your code goes here
var facebookProfile = {
    name: "MC",
    friends: 0,
    messages: [],
    postMessage: function(message) {
        this.messages.push(message);
    },
    deleteMessage: function(index){
        this.messages.splice(index,1);
    },
    addFriend: function(){
        this.friends++;
    },
    removeFriend: function(){
        this.friends--;
    }
};

facebookProfile.postMessage("yolo");
facebookProfile.postMessage("test");
facebookProfile.deleteMessage(1);
console.log(facebookProfile['messages']);
