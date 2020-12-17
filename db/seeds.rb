# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'faker'
User.create(username: 'demo', password:"demoOne2", email:"atlasneiko@gmail.com", about:"Welcome to Storytopia")
40.times do 
  User.create(
    username: Faker::Internet.username(specifier: 5..8),
    password: Faker::Internet.password(min_length: 6),
    about: Faker::Quote.most_interesting_man_in_the_world,
    email: Faker::Internet.email
  )
end
200.times do
  Story.create(
    title: Faker::Books::Lovecraft.sentence(word_count: 3, random_words_to_add: 1),
    subtitle: Faker::Books::Lovecraft.tome,
    user_id: rand(1..41),
    img_id: rand(0...950),
    body: Faker::Books::Lovecraft.paragraphs(number: rand(2..5)).join("\n")
  )
end
600.times do 
  Clap.create(
    user_id: rand(1..41),
    story_id: rand(1..200),
    clap_count: rand(1..20)
  )
end
