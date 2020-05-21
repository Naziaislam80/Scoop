# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Channel.destroy_all
Message.destroy_all
WorkSpace.destroy_all
User.destroy_all

demo = User.create!(username: "Demo", email: "test@aol.com", password: "password")
user2 = User.create!(username: 'Mike', email: 'mike@yahoo.com', password: 'hunter2')
user3 = User.create!(username: 'kush', email: 'kush@aol.com', password: 'hunter2')
user4 = User.create!(username: 'Test', email: 'test@gmail.com', password: 'hunter2')
user5 = User.create!(username: 'appacademy', email: 'appacademy@email.com', password: 'hunter2')
user6 = User.create!(username: 'Adam', email: 'adam@aol.com', password: 'hunter2')
user7 = User.create!(username: 'Satomi', email: 'satomi@gmail.com', password: 'hunter2')
user8 = User.create!(username: 'Emily', email: 'emily@gmail.com', password: 'hunter2')
user9 = User.create!(username: 'Steven', email: 'steven@aol.com', password: 'hunter2')
user10 = User.create!(username: 'JoeXiao', email: 'joe@email.com', password: 'hunter2')
user11 = User.create!(username: 'Elijah', email: 'elijah@gmail.com', password: 'hunter2')
user12 = User.create!(username: 'Eddy', email: 'eddy@yahoo.com', password: 'hunter2')
user13 = User.create!(username: 'Soloman', email: 'soloman@gmail.com', password: 'hunter2')
user14 = User.create!(username: 'PeterTheTA', email: 'gmail@aol.com', password: 'hunter2')
user15 = User.create!(username: 'Christian', email: 'christain@aol.com', password: 'hunter2')


ws1 = WorkSpace.create!(name: 'testing1', user_id: user3.id)
ws2 = WorkSpace.create!(name: 'testing2', user_id: user2.id)
ws3 = WorkSpace.create!(name: 'testing3', user_id: user4.id)
ws4 = WorkSpace.create!(name: 'testing4', user_id: user5.id)
ws5 = WorkSpace.create!(name: 'testing5', user_id: user6.id)
ws6 = WorkSpace.create!(name: 'testing6', user_id: user7.id)
ws7 = WorkSpace.create!(name: 'testing7', user_id: user8.id)
ws8 = WorkSpace.create!(name: 'testing8', user_id: user9.id)
ws9 = WorkSpace.create!(name: 'testing9', user_id: user10.id)
ws10 = WorkSpace.create!(name: 'testing10', user_id: user11.id)
ws11 = WorkSpace.create!(name: 'testing11', user_id: user13.id)
ws12 = WorkSpace.create!(name: 'testing12', user_id: user12.id)
ws13 = WorkSpace.create!(name: 'testing13', user_id: user14.id)
ws14 = WorkSpace.create!(name: 'testing14', user_id: user3.id)
ws15 = WorkSpace.create!(name: 'testing15', user_id: user15.id)


ch1 = Channel.create!(title: 'General', work_space_id: ws1.id )
ch2 = Channel.create!(title: 'App Academy', work_space_id: ws2.id)
ch3 = Channel.create!(title: 'Random', work_space_id: ws3.id)
ch4 = Channel.create!(title: 'friends', work_space_id: ws4.id)
ch5 = Channel.create!(title: 'circle', work_space_id: ws5.id)
ch6 = Channel.create!(title: 'Jokes', work_space_id: ws6.id)
ch7 = Channel.create!(title: 'Steven is the best', work_space_id: ws7.id)
ch8 = Channel.create!(title: 'Random', work_space_id: ws8.id)
ch9 = Channel.create!(title: 'Mike', work_space_id: ws9.id)
ch10 = Channel.create!(title: 'Joe', work_space_id: ws10.id)
ch11 = Channel.create!(title: 'Emily', work_space_id: ws11.id)
ch12 = Channel.create!(title: 'Steven', work_space_id: ws12.id)




msg1 = Message.create!(body: 'Welcome to Scoop, clone of Slack', user_id: demo.id, channel_id: ch1.id)
msg2 = Message.create!(body: 'Hello World', user_id: user5.id, channel_id: ch1.id)
msg3 = Message.create!(body: 'Grandma can you pick me up?', user_id: user6.id, channel_id: ch1.id)
msg4 = Message.create!(body: 'Did you loose the rap battle again?', user_id: user10.id, channel_id: ch1.id)
msg5 = Message.create!(body: 'I love spiderman', user_id: user12.id, channel_id: ch1.id)
msg6 = Message.create!(body: 'MICHEAL???', user_id: user3.id, channel_id: ch1.id )
msg7 = Message.create!(body: 'Anonymous report time', user_id: user15.id, channel_id: ch1.id)
msg8 = Message.create!(body: 'Animal Crossing time!', user_id: user7.id, channel_id: ch1.id)
msg9 = Message.create!(body: 'SHHHH NO ONE CAN KNOW', user_id: user11.id, channel_id: ch1.id)
msg10 = Message.create!(body: 'read the docs', user_id: user5.id, channel_id: ch1.id)
msg11 = Message.create!(body: 'who is your favorite TA?', user_id: user4.id, channel_id: ch1.id)
msg12 = Message.create!(body: 'datz eazy', user_id: user8.id, channel_id: ch1.id )
