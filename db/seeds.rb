# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'faker'
40.times do 
  User.create(
    username: Faker::Internet.username(specifier: 5..8),
    password: Faker::Internet.password(min_length: 6),
    about: Faker::Quote.most_interesting_man_in_the_world,
    email: Faker::Internet.email
  )
end
User.create(username: 'demo', password:"demoOne2", email:"atlasneiko@gmail.com", about:"Welcome to Storytopia")