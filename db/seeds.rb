# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'faker'
User.create(username: 'demo', password:"demoOne2", email:"atlasneiko@gmail.com", about:"Welcome to Storytopia")
20.times do 
  User.create(
    username: Faker::Internet.username(specifier: 5..8),
    password: Faker::Internet.password(min_length: 6),
    about: Faker::Quote.most_interesting_man_in_the_world,
    email: Faker::Internet.email
  )
end
100.times do
  Story.create(
    title: Faker::Book.title,
    subtitle: Faker::Book.title,
    user_id: rand(1..21),
    img_id: rand(0...950),
    body: Faker::Books::Lovecraft.paragraphs(number: rand(2..5)).join("\n")
  )
end
10.times do 
  Clap.create(
    user_id: rand(1..21),
    clapable_id: rand(1..100),
    clapable_type: "Story",
    clap_count: rand(1..20)
  )
end
200.times do
  Comment.create(
    user_id: rand(1..21),
    story_id: rand(1..100),
    body: Faker::Books::Lovecraft.sentence 
  )
end
100.times do
  Clap.create(
    user_id: rand(1..21),
    clapable_id: rand(1..100),
    clapable_type: "Comment",
    clap_count: rand(1..20)
  )
end