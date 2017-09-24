// @flow

function sendMessage() {
  var client = ChatWorkClient.factory({tokn: 'xxx'}); // typo token
  client.sendMessage({room_id: 'xx', body: 'xx'});
}

