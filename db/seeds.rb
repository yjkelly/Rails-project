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

Destination.delete_all
Destination.create! id: 1, name: "Iceland", description: "The land of fire and ice. Visit beautiful iceland, with it's otherworldy landscapes and striking volcanoes and geysers.|A small dot in the Atlantic between Scandinavia and America, Iceland has built an impressive tourist industry from its abundant natural wonders. Even financial collapse during the global economic crisis failed to hold back “the land of fire and ice” for long, and visitors are once again flocking to its wilderness parks and dramatic landscapes.<br><br>The fire in question, of course, comes from Iceland’s abundant volcanoes, which burst periodically into life, with sometimes costly consequences for European aviation. Elemental forces bubble just below the surface across the island, heating the water in Iceland’s taps and swimming pools, and creating otherworldly landscapes of twisted lava and rainbow-coloured mineral sands.<br><br>Volcanic tourism is big news, with trips to bubbling fumaroles, live lava flows and perhaps the world’s most reliable geyser at Geysir, which blows its top every four to eight minutes. Thermal springs surface everywhere, providing hot spots on the nation’s beaches and heating the waters of the iconic Blue Lagoon, a surreal open-air swimming pool surrounded by a landscape of tortured black lava.<br><br>Ice is Iceland’s other big draw (the clue is in the name) – more specifically, the dramatic glaciers which slice down towards the coast, calving icebergs into eerie lagoons. Glacier tours, by snowmobile, on foot, or on the back of a tiny Icelandic pony, are an integral part of the Iceland experience. In places, you can even tick off a glacier and a volcano on a single trip.|", picture: "/assets/iceland1.jpg|/assets/iceland2.jpg|/assets/iceland3.jpg|"
Destination.create! id: 2, name: "France", description: "Ooh-la-la. From the staggering peaks of the alps, to lazy summer vineyards and breathtaking meditteranean beaches. France has romance and adventure galore.|You could spend a lifetime’s worth of holidays in France and still not feel you’d done the country justice. It remains the planet’s most visited tourist destination, meriting its standing with an almost overwhelming mass of historical treasures, storybook landscapes and cultural idiosyncrasies. The teeming glam of Paris makes for one hell of a centrepiece, matching any city on the planet for ambiance, individuality and set-piece sights. <br><br>But the real beauty of France, in many ways, lies elsewhere. The country’s natural gifts are striking, with white sands, hulking mountains and swathes of rolling countryside. It’s a land that has inspired dreamers and drinkers, revolutionaries and artists. Little wonder that Francophiles (and it’s telling that even the country’s devotees have a given word to describe them) are found the world over. <Br><br>You can soak up the A-list beaches of the Cote d’Azur, drowse in the timeless greenery of the Loire Valley or gaze up at the monumental peaks of the Alps. Wander the lavender fields of Provence, eat your way round the legendary bistros of Lyon or sample the rugged charm of Corsica. France’s cities, coastline and countryside all have their own ooh-la-la rewards, and when taken as a whole, they present a near-perfect visitor package|",picture:"/assets/france1.jpg|/assets/france2.jpg|/assets/france3.jpg|"
Destination.create! id: 3, name: "Mexico", description: "Canyons, Jungles, Pyramids and Salsa. What more could you ask for? Mexico is a vibrant country with secrets and excitement in spades.|As spicy as salsa, intoxicating as tequila and surreal as a Frida Kahlo canvas, Mexico fills the senses, energizes the intellect and nourishes the soul. This huge country encompasses epic landscapes; from northern deserts and snowy peaks of the central sierra, to the jungle highlands of southern Chiapas and the beaches of the Yucatán Peninsula.<br><br>Pre-Colombian civilisations made their mark with the vast pyramids of Teotihuacán, stunning temples of Chichén Itzá and countless other archaeological wonders. The Spanish heritage has also been well preserved, with charming towns built around shady plazas and whitewashed churches; San Miguel de Allende, Guanajuato and Dolores Hidalgo are treasures of the central Colonial Heartland.<br><br>Mexico today is a booming modern economy, led by its gargantuan capital, Mexico City. Once you adjust to the relentless pace of life in this metropolis, you can indulge in world-class museums, dine in exquisite restaurants, cut shapes in clubs and barter at sprawling markets. Beyond the modern cities, lie sleepy villages where age-old customs and ancient beliefs endure. San Cristobal de las Casas is a major hub, ringed by indigenous villages, with churches combining pagan beliefs with Roman Catholicism. Across the country, lively festivals reflect this blending of faiths, most famously at the Day of the Dead ceremony.<br><br>For visitors seeking outdoor adventure, Mexico delivers. Nature lovers can go whale watching in Baja California, reef diving off the Yucatán Peninsula and trekking through the jungle to glowing blue lagoons bordering Guatemala. Adrenaline activities are in amply supply too, from canyoning in Veracruz and hang-gliding in Hidalgo to volcano climbing, caving and river rafting.|",picture:"/assets/mexico1.jpg|/assets/mexico2.jpg|/assets/mexico3.jpg|"
Destination.create! id: 4, name: "Nepal", description: "Buddhist and Hindu temples abound in this remote exciting location. Hiking trails in the Himalayas, Jungles and the highest mountain in the world. Go see it for yourself!|Officially the highest country on Earth, lofty Nepal is commonly referred to as the “roof of the world.” That seems like a fitting moniker for this Himalayan nation, where soaring, snow-capped mountains disappear into the clouds like stairways to heaven.<br><br>Mount Everest is the star attraction. Tourists come in their droves to climb, hike and admire the world’s tallest peak, which flirts with the stratosphere at 8,848m (29,029ft). But this charming country is much more than just mountains. <br><br>Holy places abound in Nepal, but not just of the Buddhist variety; Hinduism has a strong foothold in the country and there are many Hindu temples scattered across the country (though some have been severely damaged by the 2015 earthquakes).<br><br>Also hit hard was the Nepali capital, Kathmandu, which is encircled by soaring mountain ranges. A beautiful, bustling city it stands at a cultural crossroads between India and China, whose influences can be seen in the architecture and tasted in the cuisine. Meanwhile, a Western vibe prevails in the lively Thamel district, which is lined with bars.<br><br>Kathmandu is a good starting point for travellers venturing into the jungle at Chitwan National Park, which is home to Bengali tigers, crocodiles and one-horned rhinos, plus myriad bird species. Phewa Lake is another draw for tourists, as are the hiking trails in the Himalayas.|",picture:"/assets/nepal1.jpg|/assets/nepal2.jpg|/assets/nepal3.jpg|"
Destination.create! id: 5, name: "Turkey", description: "A culturally diverse country, bordering three contintents, Turkey is full of historic sites and archaeologigcal wonder. Beaches, valleys, mountains, churches, palaces. The list of things to see is endless.|For sheer diversity, Turkey is hard to beat. The country is best measured in multitudes – of people, natural landscapes and cultures. It is a land of vast open spaces and massive mountain ranges, fertile valleys and rugged coastline, fast-growing cities and sleepy villages, seaside resorts and remote beaches.<br><br>Turkey overflows with historic sites and archaeological wonders, all set in a varied and beautiful landscape. The Mediterranean coastline is punctuated with well-preserved Greco-Roman cities like Pergamom and Ephesus, while the otherworldly landscapes of the Cappadocia region harbour cave churches and underground cities.<br><br>Though capital status eludes it, Istanbul is very much the beating heart of the nation. The city is an archive of cultural influences throughout the centuries, playing host to Roman aqueducts, Byzantine churches and Ottoman mosques and palaces. Yet it’s no relic. Cafes, bustling bazaars, hammams (public baths), and nightclubs all buzz with activity.<br><br>Still, Istanbul is just one piece of the vast Turkish puzzle. Beach-lovers can while away lazy sunny days at the ever-popular Bodrum, Marmaris and Izmir resorts along Turkey’s Aegean and Mediterranean coasts.<br><br>The unlikely capital city, Ankara, may be less frequented, but its location in central Anatolia makes it worthy of a few days’ visit, if only to witness the contrast between the city’s modernity and the surviving citadel. Away from the more European sensibilities of Istanbul, Ankara also presents an opportunity to gain insight into other facets of Turkish culture.|",picture:"/assets/turkey1.jpg|/assets/turkey2.jpg|/assets/turkey3.jpg|"
Destination.create! id: 6, name: "Australia", description: "The home of kangaroos, koalas and Crocodile Dundee. From its beautiful and vast coastline, to the unknown adventure of the outback, Australia offers more than meets the eye. |Australia is a land of savage beauty, big adventure and even bigger horizons. There are good reasons why it finds itself touted as one of the ultimate travel getaways; it has personality in spades, landscapes to die for and more than its fair share of sunshine. And if beaches, rainforest and outback aren’t your thing, then its major cities are outstanding destinations in their own right.<br><br>In many ways the country breeds extremes. The fiery atmosphere of an Aussie Rules match in Melbourne and the champagne glitz of Sydney Harbour belong to another planet entirely when compared to the quiet expanse of the Red Centre or the surf-bashed coastlines of the west.<br><br>Knowing where to go is arguably the toughest part. There are well-travelled paths, with Sydney and the east coast being a perennially popular choice, although when you’re faced with a country of this magnitude potential itineraries are numberless. The Great Barrier Reef? Uluru? The Great Ocean Road? Kakadu? Hobart? The Kimberley? When the tourist board controversially coined the slogan “So where the bloody hell are you?” it raised a fair point.<br><br>There are iconic Aussie clichés by the barrel-load (from cork hats, barbecues and koalas to crocodiles, cricketers and bush tucker) but the real beauty of the place lies in the stuff you’re not expecting; the dusty open road that unfurls to reveal verdant hills; the cold beer at an outback pub that turns into an evening-long session; the stroll to the beach that throws up a street market, open-air concert and implausibly beautiful sunset.<br><br>A trip Down Under has long been synonymous with escape, exploration and adventure – an image that's unlikely to change anytime soon.|",picture: "/assets/australia1.jpg|/assets/australia2.jpg|/assets/australia3.jpg|"
Destination.create! id: 7, name: "New Zealand", description: "Staggering landscapes, rolling mountains, beaches, lakes and forests. New Zealand is one of the best countries on earth to travel to. Keep a watchful eye out for Hobbits..|Widely held to be one of the most breathtaking countries on the planet, New Zealand is a phenomenal travel destination. The rugged mountains and remote valleys that thrust the destination into the world’s spotlight through The Lord of the Rings trilogy tell only part of the story – you’ll also find beaches, fjords, lakes and gorgeous swathes of forest, not to mention age-old Maori culture, forward-looking cities and, famously, a world-class array of outdoor activities. Not only does it pack a punch as hard as an All Black tackle, but it's also incredibly easy to travel around. What’s not to love?<br><br>Split into two main landmasses – the North and South Islands –New Zealand is a deceptively diverse and complicated destination that rewards both first-time and repeat visitors. The North Island is less visually dramatic than its southern counterpart, but it is home to around two thirds of the country’s inhabitants. The majority of the major urban centres are here, including the capital, Wellington, and the increasingly dynamic city of Auckland. But nature is still a major player, thanks to volcanoes, thermal regions and the magnificent Bay of Islands.<br><br>The South Island is home to far fewer people, but boasts the country’s most spectacular scenery. Empty beaches, soaring mountain ranges, glaciers, fjords, wide-open expanses – they’re all here. Outdoor enthusiasts can take their pick from tramping (hiking), cycling, climbing, white-water rafting, caving, zorbing, sky-diving, bungee jumping and more. Christchurch, a city bouncing back with extraordinary creativity from earthquake damage, is also here.|",picture:"/assets/newzealand1.jpg|/assets/newzealand2.jpg|assets/newzealand3.jpg|"


ActivityCategory.delete_all
snow = ActivityCategory.create(name: "Snowsports", description:"Snowsports", picture:'/img/activities/skiing.jpg')
hiking = ActivityCategory.create(name: "Hiking", description:"Hiking", picture:'/img/activities/travelling-alone.jpg')
offroading = ActivityCategory.create(name: "Offroading", description:"Offroading", picture:'/img/activities/offroading.jpg')
water = ActivityCategory.create(name: "Watersports", description:"Watersports", picture: '/img/activities/scubadiving.jpg')
biking = ActivityCategory.create(name: "Biking", description:"Biking", picture:'/img/activities/biking.jpg')

Activity.delete_all
Activity.create(activity_category:snow,name:"Skiing", description:"Ski across the snow-caped peaks and experience everything the mountains have to offer", picture:"/img/activities/skiing2.jpg", price:500)
Activity.create(activity_category:snow, name:"Snowboarding", description: "Enjoy our specialised snowboarding tours and experience something new", picture:"/img/activities/snowboarding.jpg", price:800)
Activity.create(activity_category:snow, name:"Snowmobiling", description: "Race across the snowy mountains and enjoy beautiful landscapes", picture:"/img/activities/snowmobiling.jpg", price:1000)
Activity.create(activity_category:hiking, name: "Day Hike", description: "Take our challanging day hike across this rocky terrain", picture:"/img/activities/dayhike.jpg", price:200)
Activity.create(activity_category:hiking, name: "Night Hike", description:"Take our night hike and explore the mountains in a whole new light", picture:"/img/activities/nighthike.jpg", price:400)
Activity.create(activity_category:hiking, name: "Extreme Hike", description:"For experienced hikers explore challanging terrain and a new adventure", picture:"/img/activities/extremehike.jpg", price:800)
Activity.create(activity_category:water, name: "Scuba Diving", description:"Explore new and exciting dive sites with our experienced divers", picture:"/img/activities/scubadiving2.jpg", price:1000)
Activity.create(activity_category:water, name: "Snorkeling", description:"Take this snorkeling tour and see what lies beneath the surface.", picture:"/img/activities/snorkeling.jpg",price:500)
Activity.create(activity_category:water, name: "White Water Rafting", description:"Experience this exhillarating ride throught the fast rapid rivers", picture:"/img/activities/whitewaterrafting.jpg", price:400)
Activity.create(activity_category:biking, name: "Beginner Biking", description:"Experience our beginner biking tour to set you on the right path", picture:"/img/activities/beginnerbiking.jpg", price:500)
Activity.create(activity_category:biking, name: "Intermediate Biking", description:"For those with more experience take our challanging tour with new routes", picture:"/img/activities/intermediatebiking.jpg", price:800)
Activity.create(activity_category:biking, name: "Extreme Biking", description:"Experience our off road biking tour with rough terrain and extreme conditions", picture:"/img/activities/extremebiking.jpg", price:1000)
Activity.create(activity_category:offroading, name: "Guided Tour", description:"Take our guided tour in our 4x4 vehicles, no path is too treacherous", picture: "/img/activities/extremebiking.jpg", price:500)
Activity.create(activity_category:offroading, name: "Mountain Offroad", description:"Experince our mountain offroad tour and climb the peaks and valleys", picture:"/img/activities/mountainoffroad.jpeg", price:800)
Activity.create(activity_category:offroading, name: "River Offroad", description: "Follow the river to its source in our new offroad tour", price:1000, picture:"/img/activities/river-offroad.jpg")

# Accommodation name, description , picture, type , price
Accommodation.delete_all
Accommodation.create(name:"Local host family", description:"Stay with a local family and immerse yourself in the culture", picture:"/img/accommodation/localfamily.jpg", price:50)
Accommodation.create(name:"Local host", description:"Experience life as one of the locals, gain an authentic experience",picture:"/img/accommodation/localhost.jpeg", price:70)
Accommodation.create(name:"Camp site", description:"For those who like to sleep under the stars",picture:"/img/accommodation/campsite.jpg", price:20 )
