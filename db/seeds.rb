# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


#I find this seed file to put out very funny body's for the animals
#it feels like they are fighting characters in a game lol
require 'faker'
Hobby.destroy_all
Animal.destroy_all
10.times do
    y = (Faker::Verb.ing_form.capitalize)
    x = (Faker::Games::Minecraft.status_effect)
   a = Animal.create(name: Faker::Creature::Animal.name.capitalize, body: "#{y} #{x}" )
   2.times do
   a.hobbies.create(name: Faker::Game.title, body: Faker::Game.genre)
   end
end

puts "seeded #{Animal.all}"

