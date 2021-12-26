# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'faker'

User.create(email: "admin@email.com", password: "123456", username: "admin", admin: true)

puts "admin created"

5.times do
  User.create(email: Faker::Internet.email, password: "123456", admin: false, username: Faker::Internet.username(specifier: 3..20))
end

puts "5 users created"

10.times do
  City.create(name: Faker::Address.city, zip_code: Faker::Address.zip_code)
end

puts "10 cities created"

15.times do 
  RealEstate.create(name: Faker::Lorem.sentence, price: rand(10000..1000000), sold: false, description: Faker::Lorem.paragraph, city_id: rand(1..5), user_id: rand(1..5))
end

puts "15 real estates created"