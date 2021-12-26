require 'faker'



patate = User.create!(email: "patate@p.p",  password: "patate")

19.times do |i|
  user = User.create!(email: Faker::Internet.email,  password: "password")
  puts "user created" if i == 18
end

30.times do |i|
  post = Post.create!(title: Faker::Lorem.sentence(word_count: 3), body: Faker::Lorem.paragraph, user_id: rand(1..20))
  puts "post created" if i == 29
end