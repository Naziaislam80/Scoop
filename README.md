<img width="300" alt="Screen Shot 2020-05-25 at 8 17 55 PM" src="https://user-images.githubusercontent.com/55370959/82849222-e91d1f80-9ec4-11ea-9bdd-73cd1f37818f.png">

Scoop is a web app inspired by Slack. It is a messaging application that is designed to be a company's primary method of communication. It allows users to organize their messages via channels and direct messages.

[Live Link](https://scoop-slack.herokuapp.com/#/)

## Features

### Overview:

### Live Chat:

### Search:
Users are able to search for channels/ existing direct messages

### Channels:
Users are able to create/delete channels and view the messages within that channel

### Direct Messages:
Users are able to send DMs 

## Technologies
* HTML
* CSS
* JavaScript
* Postgres
* Ruby on Rails
* Webpack
* React
* Redux
* Websockets/ Action Cable

## Code Highlight
Impelmented Action Cable to subscribe/boardcast message to a channel.
```
getCurrentChannel(channelId) {
    //debugger
        if (App.currentChannel) {
            App.currentChannel.unsubscribe();
        }
        const { receiveMessage, receiveMessages } = this.props;
        App.currentChannel = App.cable.subscriptions.create(
            { channel: "ChatChannel", id: `${channelId}` },
           
            {
                received: data => {
                    debugger
                    switch (data.type) {
                        case "message":
                            receiveMessage(data.message); 
                            break;
                        case "messages":
                            receiveMessages(data.messages);
                            break;
                    }
                },
                speak: function (data) {
                    return this.perform("speak", data);
                },
                load: function () {
                    return this.perform("load");
                }
            }
        );
    }
```

