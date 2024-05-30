# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

puts "Destroying tables..."
Article.destroy_all

# Reset the id counters for each table to start at 1 (helpful for debugging)
puts "Resetting primary keys..."
ApplicationRecord.connection.reset_pk_sequence!('article')

puts "Creating Articles..."
articles = [
  { 
    title: "Gilligan's Island. Is it true?",
    image_url: "https://cdnmetv.metv.com/9MR0H-1528836326-1136-lists-leaving_gilligans_island_main.png",
    body: "The first mate and his Skipper too will do their very best to make the others comfortable in their tropic island nest. Michael Knight a young loner on a crusade to champion the cause of the innocent. The helpless. The powerless in a world of criminals who operate above the law. Here he comes Here comes Speed Racer. A demon on wheels."
    },
  {
    title: "A Baseball Moment",
    image_url: "https://static01.nyt.com/images/2020/08/24/sports/24mlb-kepner-1/merlin_176084667_69b1099b-0b7e-41ce-bfdf-e407899f10dc-mobileMasterAt3x.jpg",
    body: "Baseball ipsum dolor sit amet cellar rubber win hack tossed. Slugging catcher slide bench league, left fielder nubber. Bullpen blue run rotation relief pitcher grass umpire. Forkball bullpen suicide squeeze club bush league field sport. Base cookie triple play blue hot dog relay rake starting pitcher inning."
  },
  {
    title: "Poke Moment",
    image_url: "https://cdn.vox-cdn.com/thumbor/e4KRzS--UsuixA2G8TOCwJ-O024=/1400x1050/filters:format(png)/cdn.vox-cdn.com/uploads/chorus_asset/file/6839749/pokemon.0.png",
    body: "Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit"
  },
  {
    title: "Cool Cats",
    image_url: "https://wallpaperaccess.com/full/82956.jpg",
    body: "Chase ball of string, eat plants, meow, and throw up because I ate plants going to catch the red dot today going to catch the red dot today. I could pee on this if I had the energy. Chew iPad power cord steal the warm chair right after you get up for purr for no reason leave hair everywhere, decide to want nothing to do with my owner today."
  },
  {
    title: "Why Am I At Home",
    image_url: "https://www.gannett-cdn.com/presto/2019/08/07/USAT/c21bdd69-caef-4838-861d-a7a88b877235-x.JPG?width=660&height=447&fit=crop&format=pjpg&auto=webp",
    body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex esse laboriosam officia accusantium veritatis fugiat exercitationem vero autem nihil aliquid ullam recusandae, quis odit odio voluptates explicabo nobis! Consequuntur, aliquam? "
  }
]

Article.insert_all!(articles)

puts "Done!"
