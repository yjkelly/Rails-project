# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

ProductCategory.delete_all
ProductCategory.create! id: 1, name: "Tent", description: "All kinds of tents for camping, large and small."
ProductCategory.create! id: 2, name: "Hiking Boots", description: "Rugged boots to get you through all kinds of terrain."
ProductCategory.create! id: 3, name: "Hiking Sticks", description: "Get into the swing of it and keep going longer with hiking sticks."
ProductCategory.create! id: 4, name: "Sleeping Bags", description: "Rugged boots to get you through all kinds of terrain."

Product.delete_all
Product.create! id: 1, name: "Coleman 2 person tent", description: "Coleman 2 person tent description here", picture: "assets/store/coleman-2-person-tent.jpg", price: 49.99, product_category_id: 1, active: true
Product.create! id: 2, name: "Coleman 3 person tent", description: "Coleman 3 person tent description here", picture: "assets/store/coleman-3-person-tent.jpg", price: 79.99, product_category_id: 1, active: true
Product.create! id: 3, name: "Coleman 4 person tent", description: "Coleman 4 person tent description here", picture: "assets/store/coleman-4-person-tent.jpg", price: 99.99, product_category_id: 1, active: true
Product.create! id: 4, name: "Coleman 2 person tent", description: "Coleman 8 person tent description here", picture: "assets/store/coleman-8-person-tent.jpg", price: 199.99, product_category_id: 1, active: true
Product.create! id: 5, name: "Yodo 2 person tent", description: "Yodo 2 person tent description here", picture: "assets/store/yodo-2-person-tent.jpg", price: 39.99, product_category_id: 1, active: true
Product.create! id: 6, name: "Berghaus Hiking Boots", description: "Berghaus Hiking Boots description here", picture: "assets/store/berghaus-boots.jpg", price: 94.99, product_category_id: 2, active: true
Product.create! id: 7, name: "Hi-Tec Hiking Boots", description: "Hi-Tec Hiking Boots description here", picture: "assets/store/hi-tec-boots.jpg", price: 70.00, product_category_id: 2, active: true
Product.create! id: 8, name: "Karrimor Hiking Boots", description: "Karrimor Hiking Boots description here", picture: "assets/store/karrimor-boots.jpg", price: 53.95, product_category_id: 2, active: true
Product.create! id: 9, name: "Regatta Hiking Boots", description: "Regatta Hiking Boots description here", picture: "assets/store/regatta-boots.jpg", price: 84.99, product_category_id: 2, active: true
Product.create! id: 10, name: "CampTeck Hiking Sticks", description: "CampTeck Hiking Sticks description here", picture: "assets/store/campteck-sticks.jpg", price: 19.99, product_category_id: 3, active: true
Product.create! id: 11, name: "Mountaintop Hiking Sticks", description: "Mountaintop Hiking Sticks description here", picture: "assets/store/mountaintop-sticks.jpg", price: 28.99, product_category_id: 3, active: true
Product.create! id: 12, name: "Trekrite Hiking Sticks", description: "Trekrite Hiking Sticks description here", picture: "assets/store/trekrite-sticks.jpg", price: 14.99, product_category_id: 3, active: true
Product.create! id: 13, name: "EGOZ Sleeping Bag", description: "EGOZ Sleeping Bag description here", picture: "assets/store/egoz-bag.jpg", price: 22.99, product_category_id: 4, active: true
Product.create! id: 14, name: "Kingcamp Sleeping Bag", description: "Kingcamp Sleeping Bag description here", picture: "assets/store/kingcamp-bag.jpg", price: 34.99, product_category_id: 4, active: true
Product.create! id: 15, name: "Milestone Sleeping Bag", description: "Milestone Sleeping Bag description here", picture: "assets/store/milestone-bag.jpg", price: 41.99, product_category_id: 4, active: true

OrderStatus.delete_all
OrderStatus.create! id: 1, name: "In Progress"
OrderStatus.create! id: 2, name: "Placed"
OrderStatus.create! id: 3, name: "Shipped"
OrderStatus.create! id: 4, name: "Cancelled"