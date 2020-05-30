<img width="300" alt="Screen Shot 2020-05-25 at 8 17 55 PM" src="https://user-images.githubusercontent.com/55370959/82849222-e91d1f80-9ec4-11ea-9bdd-73cd1f37818f.png">

Scoop is a web app inspired by Slack. It is a messaging application that is designed to be a company's primary method of communication. It allows users to organize their messages via channels and direct messages.

[Live Link](https://scoop-slack.herokuapp.com/#/)

## Features

### Overview:
![ezgif com-video-to-gif](https://user-images.githubusercontent.com/55370959/82958994-bfc3c880-9f84-11ea-9eab-efd571d5cf9c.gif)

### Live Chat:
![ezgif com-video-to-gif](https://user-images.githubusercontent.com/55370959/82959343-7a53cb00-9f85-11ea-8ba3-2c96d121a949.gif)

### Search:
Users are able to search for channels/existing direct messages.
![ezgif com-video-to-gif](https://user-images.githubusercontent.com/55370959/82959442-b5ee9500-9f85-11ea-8cd1-2270fec0dfc2.gif)

### Channels:
Users are able to create/delete channels and view the messages within that channel.
![ezgif com-video-to-gif](https://user-images.githubusercontent.com/55370959/82958430-5becd000-9f83-11ea-8009-2818badcc042.gif)


### Direct Messages:
Users are able to send direct messages. 

![ezgif com-video-to-gif](https://user-images.githubusercontent.com/55370959/82959197-22b55f80-9f85-11ea-90b9-c10570e6bffa.gif)

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
        if (App.currentChannel) {
            App.currentChannel.unsubscribe();
        }
        const { receiveMessage, receiveMessages } = this.props;
        App.currentChannel = App.cable.subscriptions.create(
            { channel: "ChatChannel", id: `${channelId}` },
           
            {
                received: data => {
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

