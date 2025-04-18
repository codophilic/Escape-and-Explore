function toTitleCase(str) {
    return str.replace(/\b\w/g, (char) => char.toUpperCase());
}


const itineraryData = {
    "gwalior fort": {
            "Day 1": {
                "start date": "15 March 2025",
                "start time": "8:00 AM",
                "Point 1": {
                    "name": "Gwalior Fort Entrance",
                    "content": "Start with an early morning visit to the grand entrance of Gwalior Fort.Explore the stunning architecture and historical significance.",
                    "image": "/images/india/MP/itineraryimages/Gwalior_Fort/GwaliorFortGate.jpg"
                },
                "Point 2": {
                    "name": "Man Singh Palace",
                    "content": "Visit the exquisite palace known for its vibrant blue tiles and stunning carvings.Learn about its historical importance and underground prison cells.",
                    "image": "/images/india/MP/itineraryimages/Gwalior_Fort/ManSinghPalace.jpg"
                },
                "Point 3": {
                    "name": "Gujari Mahal Archaeological Museum",
                    "content": "Explore the museum showcasing rare artifacts and sculptures from different eras.Understand the cultural significance of the region.",
                    "image": "/images/india/MP/itineraryimages/Gwalior_Fort/GujariMahal.jpg"
                },
                "end date": "15 March 2025",
                "end time": "4:00 PM"
            },
            "Day 2": {
                "start date": "16 March 2025",
                "start time": "8:00 AM",
                "Point 1": {
                    "name": "Sas Bahu Temples",
                    "content": "Visit the intricately carved twin temples dedicated to Lord Vishnu.Admire the beautiful architecture and peaceful surroundings.",
                    "image": "/images/india/MP/itineraryimages/Gwalior_Fort/Sas_Bahu_Temple.jpg"
                },
                "Point 2": {
                    "name": "Teli Ka Mandir",
                    "content": "Explore the tallest temple in the fort complex.Marvel at its blend of Dravidian and North Indian architectural styles.",
                    "image": "/images/india/MP/itineraryimages/Gwalior_Fort/Teli_Ka_Mandir.jpg"
                },
                "Point 3": {
                    "name": "Jain Sculptures",
                    "content": "Discover the massive Jain rock-cut sculptures along the fort walls.Learn about the significance of Jainism in the region.",
                    "image": "/images/india/MP/itineraryimages/Gwalior_Fort/Jain_Sculptures.jpg"
                },
                "end date": "16 March 2025",
                "end time": "4:00 PM"
            },
            "Day 3": {
                "start date": "17 March 2025",
                "start time": "8:00 AM",
                "Point 1": {
                    "name": "Gurudwara Data Bandi Chhod",
                    "content": "Visit this historic Sikh pilgrimage site within the fort.Learn about the release of Guru Hargobind Sahib and its significance.",
                    "image": "/images/india/MP/itineraryimages/Gwalior_Fort/Gurudwara_Data_Bandi_Chhod_Sahab.jpg"
                },
                "Point 2": {
                    "name": "Scindia School",
                    "content": "Take a quick tour of the famous Scindia School, located within the fort complex.Explore its heritage and contribution to education.",
                    "image": "/images/india/MP/itineraryimages/Gwalior_Fort/Scindia_School.jpg"
                },
                "Point 3": {
                    "name": "Sunset View from Gwalior Fort",
                    "content": "End your trip with a breathtaking sunset view from the fort walls.Capture beautiful memories of the trip.",
                    "image": "/images/india/MP/itineraryimages/Gwalior_Fort/Gwalior_Fort_(sunset).jpg"
                },
                "end date": "17 March 2025",
                "end time": "4:00 PM"
            },
            "Price": "2000"
        },
        "iskcon ujjain temple": {
            "Day 1": {
                "start date": "15 March 2025",
                "start time": "8:00 AM",
                "Point 1": {
                    "name": "morning aarti & darshan",
                    "content": "Begin your day with the peaceful morning aarti at iskcon ujjain temple.Experience the spiritual energy and divine atmosphere.",
                    "image": "/images/india/MP/itineraryimages/Iskcon_Ujjain_Temple/morning_aarti.jpg"
                },
                "Point 2": {
                    "name": "temple architecture & murals",
                    "content": "Explore the stunning temple architecture and beautiful murals depicting lord krishna’s life.Learn about the significance of the iskcon movement.",
                    "image": "/images/india/MP/itineraryimages/Iskcon_Ujjain_Temple/temple_architecture.jpg"
                },
                "Point 3": {
                    "name": "govinda’s prasadam",
                    "content": "Enjoy a delicious sattvic meal at govinda’s restaurant inside the temple.Taste the authentic prasadam prepared with devotion.",
                    "image": "/images/india/MP/itineraryimages/Iskcon_Ujjain_Temple/govinda_prasadam.jpg"
                },
                "end date": "15 March 2025",
                "end time": "4:00 PM"
            },
            "Day 2": {
                "start date": "16 March 2025",
                "start time": "8:00 AM",
                "Point 1": {
                    "name": "spiritual discourse session",
                    "content": "Attend a discourse on bhagavad gita and spirituality.Gain insights into vedic wisdom and Krishna consciousness.",
                    "image": "/images/india/MP/itineraryimages/Iskcon_Ujjain_Temple/spiritual_discourse.jpg"
                },
                "Point 2": {
                    "name": "gaushala visit",
                    "content": "Visit the gaushala inside the temple complex.Feed the cows and understand their spiritual importance.",
                    "image": "/images/india/MP/itineraryimages/Iskcon_Ujjain_Temple/gaushala_visit.jpg"
                },
                "Point 3": {
                    "name": "evening kirtan",
                    "content": "Participate in the enchanting evening kirtan.Experience the bliss of devotional chanting and meditation.",
                    "image": "/images/india/MP/itineraryimages/Iskcon_Ujjain_Temple/evening_kirtan.jpg"
                },
                "end date": "16 March 2025",
                "end time": "4:00 PM"
            },
            "Day 3": {
                "start date": "17 March 2025",
                "start time": "8:00 AM",
                "Point 1": {
                    "name": "visit to mahakaleshwar jyotirlinga",
                    "content": "Take a trip to the famous mahakaleshwar jyotirlinga.Experience the divine energy of one of the 12 jyotirlingas.",
                    "image": "/images/india/MP/itineraryimages/Iskcon_Ujjain_Temple/mahakaleshwar_jyotirlinga.jpg"
                },
                "Point 2": {
                    "name": "ram ghat on shipra river",
                    "content": "Spend time at the serene ram ghat.Witness the evening aarti and soak in the spiritual ambiance.",
                    "image": "/images/india/MP/itineraryimages/Iskcon_Ujjain_Temple/ram_ghat.jpg"
                },
                "Point 3": {
                    "name": "shopping for spiritual souvenirs",
                    "content": "End your journey by shopping for religious books, beads, and idols.Take home memories of your spiritual retreat.",
                    "image": "/images/india/MP/itineraryimages/Iskcon_Ujjain_Temple/shopping.jpg"
                },
                "end date": "17 March 2025",
                "end time": "4:00 PM"
            },
            "Price": "2000"
        },
    
        "khajuraho temple": {
            "Day 1": {
                "start date": "15 March 2025",
                "start time": "8:00 AM",
                "Point 1": {
                    "name": "western group of temples",
                    "content": "Start with the most famous temples like kandariya mahadev and lakshmana temple.Admire the exquisite sculptures and carvings.",
                    "image": "/images/india/MP/itineraryimages/Khajuraho_Temple/western_group_of_temples.jpg"
                },
                "Point 2": {
                    "name": "light & sound show",
                    "content": "In the evening, witness the mesmerizing light & sound show.Learn about the history of khajuraho through a captivating narration.",
                    "image": "/images/india/MP/itineraryimages/Khajuraho_Temple/light_sound_show.jpg"
                },
                "Point 3": {
                    "name": "khajuraho local market",
                    "content": "Explore local handicraft markets.Buy unique souvenirs, sculptures, and paintings.",
                    "image": "/images/india/MP/itineraryimages/Khajuraho_Temple/khajuraho_local_market.jpg"
                },
                "end date": "15 March 2025",
                "end time": "4:00 PM"
            },
            "Day 2": {
                "start date": "16 March 2025",
                "start time": "8:00 AM",
                "Point 1": {
                    "name": "eastern group of temples",
                    "content": "Visit jain temples like parshvanatha and adinatha temple.Understand the jain influence on khajuraho's architecture.",
                    "image": "/images/india/MP/itineraryimages/Khajuraho_Temple/eastern_group_of_temples.jpg"
                },
                "Point 2": {
                    "name": "raneh falls",
                    "content": "Visit the scenic raneh falls.Enjoy the breathtaking canyon and rock formations.",
                    "image": "/images/india/MP/itineraryimages/Khajuraho_Temple/raneh_falls.jpg"
                },
                "Point 3": {
                    "name": "ken gharial sanctuary",
                    "content": "Explore the wildlife sanctuary near khajuraho.Spot gharials, deer, and migratory birds.",
                    "image": "/images/india/MP/itineraryimages/Khajuraho_Temple/ken_gharial_sanctuary.jpg"
                },
                "end date": "16 March 2025",
                "end time": "4:00 PM"
            },
            "Day 3": {
                "start date": "17 March 2025",
                "start time": "8:00 AM",
                "Point 1": {
                    "name": "ayurvedic spa experience",
                    "content": "Enjoy a rejuvenating ayurvedic massage.Relax in the tranquil atmosphere of khajuraho’s wellness centers.",
                    "image": "/images/india/MP/itineraryimages/Khajuraho_Temple/ayurvedic_spa_experience.jpg"
                },
                "Point 2": {
                    "name": "panna tiger reserve",
                    "content": "Take a safari to panna tiger reserve.Spot tigers, leopards, and other wildlife.",
                    "image": "/images/india/MP/itineraryimages/Khajuraho_Temple/panna_tiger.jpg"
                },
                "Point 3": {
                    "name": "farewell dinner",
                    "content": "Conclude your trip with a traditional bundelkhandi meal.Experience the local flavors at a heritage restaurant.",
                    "image": "/images/india/MP/itineraryimages/Khajuraho_Temple/bundelkhandi_meal.jpg"
                },
                "end date": "17 March 2025",
                "end time": "4:00 PM"
            },
            "Price": "3000"
        },
    
        "sanchi stupa": {
             "Day 1": {
                "start date": "15 March 2025",
                "start time": "8:00 AM",
                "Point 1": {
                    "name": "great stupa",
                    "content": "Begin your journey at the magnificent great stupa.Admire the ancient Buddhist architecture and carvings.",
                    "image": "/images/india/MP/itineraryimages/Sanchi_Stupa/great_stupa.jpg"
                },
                "Point 2": {
                     "name": "ashoka pillar",
                     "content": "Explore the famous ashoka pillar near the stupa.Learn about emperor ashoka’s contribution to Buddhism.",
                     "image": "/images/india/MP/itineraryimages/Sanchi_Stupa/ashoka_pillar.jpg"
                },
                "Point 3": {
                    "name": "sanchi museum",
                    "content": "Visit the archaeological museum showcasing artifacts from the Mauryan and Gupta periods.Understand the rich Buddhist heritage of Sanchi.",
                    "image": "/images/india/MP/itineraryimages/Sanchi_Stupa/sanchi_museum.jpg"
                },
                    "end date": "15 March 2025",
                    "end time": "4:00 PM"
                },
            "Day 2": {
                "start date": "16 March 2025",
                "start time": "8:00 AM",
                "Point 1": {
                    "name": "toranas (gateway carvings)",
                    "content": "Observe the intricately carved gateways surrounding the stupa.Decode the Buddhist teachings depicted in the carvings.",
                    "image": "/images/india/MP/itineraryimages/Sanchi_Stupa/toranas.jpg"
                },
                "Point 2": {
                    "name": "nearby buddhist monasteries",
                      "content": "Explore the ruins of ancient Buddhist monasteries.Discover the lifestyle of monks in the early centuries.",
                      "image": "/images/india/MP/itineraryimages/Sanchi_Stupa/buddhist_monasteries.jpg"
                 },
                "Point 3": {
                    "name": "sunset view from sanchi hill",
                        "content": "Experience a mesmerizing sunset view from the hilltop.Capture stunning photographs of the stupa in golden light.",
                        "image": "/images/india/MP/itineraryimages/Sanchi_Stupa/sunset_view.jpg"
                },
                    "end date": "16 March 2025",
                    "end time": "4:00 PM"
                },
            "Day 3": {
                    "start date": "17 March 2025",
                    "start time": "8:00 AM",
                "Point 1": {
                    "name": "travel to vidisha",
                    "content": "Visit the historic town of Vidisha, located near Sanchi.Explore the ruins and temples from the Gupta era.",
                    "image": "/images/india/MP/itineraryimages/Sanchi_Stupa/vidisha.jpg"
                },
                "Point 2": {
                    "name": "udayagiri caves",
                    "content": "Explore the rock-cut udayagiri caves featuring Hindu and Jain sculptures.See the famous Varaha (boar) sculpture of Lord Vishnu.",
                    "image": "/images/india/MP/itineraryimages/Sanchi_Stupa/udayagiri_caves.jpg"
                },
                "Point 3": {
                    "name": "shopping for handicrafts",
                    "content": "End your trip with some souvenir shopping.Buy traditional Madhya Pradesh handicrafts and Buddhist artifacts.",
                    "image": "/images/india/MP/itineraryimages/Sanchi_Stupa/shopping_for_handicrafts.jpg"
                },
                    "end date": "17 March 2025",
                    "end time": "4:00 PM"
                },
                "Price": "2500"
            },
    
            "sun temple": {
            "Day 1": {
                "start date": "15 March 2025",
                "start time": "8:00 AM",
                "Point 1": {
                    "name": "main temple structure",
                    "content": "Start your journey by admiring the intricate carvings of the sun temple.Learn about its historical and religious significance.",
                    "image": "/images/india/MP/itineraryimages/Sun_Temple/main_temple_structure.jpg"
                },
                "Point 2": {
                    "name": "natya mandapa",
                    "content": "Explore the natya mandapa, where ancient dances were performed in devotion to the sun god.Observe the beautifully carved pillars.",
                    "image": "/images/india/MP/itineraryimages/Sun_Temple/natya_mandapa.jpg"
                },
                "Point 3": {
                    "name": "sunset at sun temple",
                    "content": "Enjoy a breathtaking sunset near the temple complex.Capture the scenic beauty of the surroundings.",
                    "image": "/images/india/MP/itineraryimages/Sun_Temple/sunset_at_sun_temple.jpg"
                },
                "end date": "15 March 2025",
                "end time": "4:00 PM"
            },
            "Day 2": {
                "start date": "16 March 2025",
                "start time": "8:00 AM",
                "Point 1": {
                    "name": "archaeological museum",
                    "content": "Visit the nearby museum displaying relics from the temple.Learn about the history and architecture of the sun temple.",
                    "image": "/images/india/MP/itineraryimages/Sun_Temple/archaeological_museum.jpg"
                },
                "Point 2": {
                    "name": "konark beach",
                    "content": "Take a relaxing break at the nearby konark beach.Enjoy the serene environment and sea breeze.",
                    "image": "/images/india/MP/itineraryimages/Sun_Temple/konark_beach.jpg"
                },
                "Point 3": {
                    "name": "sound & light show",
                    "content": "Witness a spectacular light & sound show in the evening.Learn about the temple’s glorious past through an engaging narration.",
                    "image": "/images/india/MP/itineraryimages/Sun_Temple/sound_light_show.jpg"
                },
                "end date": "16 March 2025",
                "end time": "4:00 PM"
            },
            "Day 3": {
                "start date": "17 March 2025",
                "start time": "8:00 AM",
                "Point 1": {
                    "name": "chandrabhaga beach",
                    "content": "Visit the beautiful chandrabhaga beach near the temple.Enjoy a peaceful morning walk along the shore.",
                    "image": "/images/india/MP/itineraryimages/Sun_Temple/chandrabhaga_beach.jpg"
                },
                "Point 2": {
                    "name": "ramchandi temple",
                    "content": "Explore the ramchandi temple dedicated to goddess Ramachandi.Experience the spiritual aura and scenic surroundings.",
                    "image": "/images/india/MP/itineraryimages/Sun_Temple/ramchandi_temple.jpg"
                },
                "Point 3": {
                    "name": "local handicrafts shopping",
                    "content": "End your trip with shopping for famous Pattachitra paintings and stone carvings.Take home exquisite souvenirs from Odisha.",
                    "image": "/images/india/MP/itineraryimages/Sun_Temple/local_handicrafts_shopping.jpg"
                },
                "end date": "17 March 2025",
                "end time": "4:00 PM"
            },
            "Price": "3000"
        },
    
            "hawa mahal": {
                "Day 1": {
                    "start date": "15 March 2025",
                    "start time": "8:00 AM",
                    "Point 1": {
                        "name": "hawa mahal entrance",
                        "content": "Begin your journey at the iconic hawa mahal.Explore the stunning facade and learn about its architectural uniqueness.",
                        "image": "/images/india/Rajasthan/itineraryimages/Hawa_Mahal/hawa_mahal_entrance.jpg"
                    },
                    "Point 2": {
                        "name": "city palace",
                        "content": "Visit the majestic city palace.Discover the royal heritage of Jaipur and explore the museums.",
                        "image": "/images/india/Rajasthan/itineraryimages/Hawa_Mahal/City_palace.jpg"
                    },
                    "Point 3": {
                        "name": "jantar mantar",
                        "content": "Explore the famous astronomical observatory.Understand ancient Indian astronomical techniques.",
                        "image": "/images/india/Rajasthan/itineraryimages/Hawa_Mahal/Jantar_Mantar.jpg"
                    },
                    "end date": "15 March 2025",
                    "end time": "4:00 PM"
                },
                "Day 2": {
                    "start date": "16 March 2025",
                    "start time": "8:00 AM",
                    "Point 1": {
                        "name": "amber fort",
                        "content": "Visit the magnificent amber fort.Enjoy the elephant ride and explore the royal palace interiors.",
                        "image": "/images/india/Rajasthan/itineraryimages/Hawa_Mahal/amber_fort.jpg"
                    },
                    "Point 2": {
                        "name": "jal mahal",
                        "content": "Admire the beauty of the floating palace, jal mahal.Capture stunning photographs of the serene lake views.",
                        "image": "/images/india/Rajasthan/itineraryimages/Hawa_Mahal/Jal_Mahal.jpg"
                    },
                    "Point 3": {
                        "name": "shopping at johari bazar",
                        "content": "Explore the vibrant local market.Shop for traditional jewelry and handicrafts.",
                        "image": "/images/india/Rajasthan/itineraryimages/Hawa_Mahal/johari_bazar.jpg"
                    },
                    "end date": "16 March 2025",
                    "end time": "4:00 PM"
                },
                "Day 3": {
                    "start date": "17 March 2025",
                    "start time": "8:00 AM",
                    "Point 1": {
                        "name": "nahargarh fort",
                        "content": "Enjoy breathtaking views from nahargarh fort.Learn about its historical significance in Jaipur’s defense system.",
                        "image": "/images/india/Rajasthan/itineraryimages/Hawa_Mahal/nahargarh_fort.jpg"
                    },
                    "Point 2": {
                        "name": "albert hall museum",
                        "content": "Visit Rajasthan’s oldest museum.Explore artifacts, paintings, and royal belongings.",
                        "image": "/images/india/Rajasthan/itineraryimages/Hawa_Mahal/albert_hall_museum.jpg"
                    },
                    "Point 3": {
                        "name": "sunset at hawa mahal",
                        "content": "Conclude your trip by witnessing the golden sunset at hawa mahal.Enjoy a relaxing evening before departure.",
                        "image": "/images/india/Rajasthan/itineraryimages/Hawa_Mahal/sunset_at_hawa_mahal.jpg"
                    },
                    "end date": "17 March 2025",
                    "end time": "4:00 PM"
                },
                "Price": "2500"
            },
            "jaisalmer fort": {
                "Day 1": {
                    "start date": "15 March 2025",
                    "start time": "8:00 AM",
                "Point 1": {
                        "name": "jaisalmer fort entrance",
                        "content": "Start your trip by exploring the golden jaisalmer fort.Discover the stunning Rajput architecture and history.",
                        "image": "/images/india/Rajasthan/itineraryimages/Jaisalmer_Fort/jaisalmer_fort_entrance.jpg"
                    },
                "Point 2": {
                        "name": "patwon ki haveli",
                        "content": "Visit the grand patwon ki haveli.Admire the detailed carvings and historic artifacts.",
                        "image": "/images/india/Rajasthan/itineraryimages/Jaisalmer_Fort/patwaon_ki_haveli.jpg"
                    },
                "Point 3": {
                        "name": "gadisar lake",
                        "content": "Enjoy a peaceful evening at gadisar lake.Experience boating and admire the scenic surroundings.",
                        "image": "/images/india/Rajasthan/itineraryimages/Jaisalmer_Fort/gadisar_lake.jpg"
                    },
                    "end date": "15 March 2025",
                    "end time": "4:00 PM"
                },
                "Day 2": {
                    "start date": "16 March 2025",
                    "start time": "8:00 AM",
                "Point 1": {
                        "name": "sam sand dunes",
                        "content": "Head to the vast sam sand dunes for a desert safari.Enjoy camel rides and witness a mesmerizing sunset.",
                        "image": "/images/india/Rajasthan/itineraryimages/Jaisalmer_Fort/sam_sand_dunes.jpg"
                    },
                "Point 2": {
                        "name": "kuldhara village",
                        "content": "Visit the abandoned village of kuldhara.Learn about its mysterious history and legends.",
                        "image": "/images/india/Rajasthan/itineraryimages/Jaisalmer_Fort/kuldhara_village.jpg"
                    },
                "Point 3": {
                        "name": "cultural folk show",
                        "content": "Experience an evening of Rajasthani folk dance and music.Enjoy authentic Rajasthani cuisine.",
                        "image": "/images/india/Rajasthan/itineraryimages/Jaisalmer_Fort/cultural_folk_show.jpg"
                    },
                    "end date": "16 March 2025",
                    "end time": "4:00 PM"
                },
                "Day 3": {
                    "start date": "17 March 2025",
                    "start time": "8:00 AM",
                "Point 1": {
                        "name": "jain temples",
                        "content": "Explore the beautifully carved jain temples inside the fort.Marvel at the intricate stonework.",
                        "image": "/images/india/Rajasthan/itineraryimages/Jaisalmer_Fort/Jain_Temple.jpg"
                    },
                "Point 2": {
                        "name": "war museum",
                        "content": "Visit the Jaisalmer war museum.Learn about India’s military history and heroism.",
                        "image": "/images/india/Rajasthan/itineraryimages/Jaisalmer_Fort/war_museum.jpg"
                    },
                "Point 3": {
                        "name": "sunset view at bada bagh",
                        "content": "End your trip with a stunning sunset view at bada bagh.Capture the beauty of the royal cenotaphs.",
                        "image": "/images/india/Rajasthan/itineraryimages/Jaisalmer_Fort/sunset_view_at_bada_bagh.jpg"
                    },
                    "end date": "17 March 2025",
                    "end time": "4:00 PM"
                },
                    "Price": "2800"
            },
            "mehrangarh": {
                "Day 1": {
                    "start date": "15 March 2025",
                    "start time": "8:00 AM",
                "Point 1": {
                        "name": "mehrangarh fort entrance",
                        "content": "Begin your trip at the grand mehrangarh fort.Explore its vast courtyards, museums, and breathtaking views.",
                        "image": "/images/india/Rajasthan/itineraryimages/Mehrangarh/mehrangarh_fort_entrance.jpg"
                    },
                "Point 2": {
                        "name": "jaswant thada",
                        "content": "Visit the stunning marble cenotaph of Jaswant Thada.Enjoy the peaceful surroundings and intricate carvings.",
                        "image": "/images/india/Rajasthan/itineraryimages/Mehrangarh/jaswant_thada.jpg"
                    },
                "Point 3": {
                        "name": "clock tower market",
                        "content": "Explore the vibrant clock tower market.Shop for traditional handicrafts and Jodhpuri textiles.",
                        "image": "/images/india/Rajasthan/itineraryimages/Mehrangarh/clock_tower_market.jpg"
                    },
                    "end date": "15 March 2025",
                    "end time": "4:00 PM"
                },
                "Day 2": {
                    "start date": "16 March 2025",
                    "start time": "8:00 AM",
                "Point 1": {
                        "name": "umaid bhawan palace",
                        "content": "Visit the grand umaid bhawan palace.Explore the museum showcasing royal artifacts and vintage cars.",
                        "image": "/images/india/Rajasthan/itineraryimages/Mehrangarh/umaid_bhawan_palace.jpg"
                    },
                "Point 2": {
                        "name": "rao jodha desert rock park",
                        "content": "Take a nature walk in rao jodha desert rock park.Learn about desert vegetation and conservation efforts.",
                        "image": "/images/india/Rajasthan/itineraryimages/Mehrangarh/rao_jodha_desert_rock_park.jpg"
                    },
                "Point 3": {
                        "name": "mandore gardens",
                        "content": "Visit the historic mandore gardens.Discover cenotaphs of Marwar rulers and beautiful temples.",
                        "image": "/images/india/Rajasthan/itineraryimages/Mehrangarh/mandore_gardens.jpg"
                    },
                    "end date": "16 March 2025",
                    "end time": "4:00 PM"
                },
                "Day 3": {
                    "start date": "17 March 2025",
                    "start time": "8:00 AM",
                "Point 1": {
                        "name": "toorji ka jhalra",
                        "content": "Start your day at this beautifully restored stepwell.Admire the architecture and enjoy local cafes nearby.",
                        "image": "/images/india/Rajasthan/itineraryimages/Mehrangarh/toorji_ka_jhalra.jpg"
                    },
                "Point 2": {
                        "name": "machia biological park",
                        "content": "Visit machia biological park to see desert wildlife.Spot leopards, deer, and various bird species.",
                        "image": "/images/india/Rajasthan/itineraryimages/Mehrangarh/machia_biological_park.jpg"
                    },
                "Point 3": {
                        "name": "sunset at mehrangarh fort",
                        "content": "Conclude your journey with a sunset view from mehrangarh fort.Capture the breathtaking landscape of Jodhpur.",
                        "image": "/images/india/Rajasthan/itineraryimages/Mehrangarh/sunset_at_mehrangarh_fort.jpg"
                    },
                    "end date": "17 March 2025",
                    "end time": "4:00 PM"
                },
                    "Price": "3000"
            },
            "mount abu": {
                "Day 1": {
                    "start date": "15 March 2025",
                    "start time": "8:00 AM",
                "Point 1": {
                        "name": "dilwara temples",
                        "content": "Start your day at the famous dilwara temples.Marvel at the exquisite marble carvings and peaceful ambiance.",
                        "image": "/images/india/Rajasthan/itineraryimages/Mount_Abu/Dilwara_Temples.jpg"
                    },
                "Point 2": {
                        "name": "nakki lake",
                        "content": "Enjoy boating at nakki lake.Explore the surrounding markets and scenic beauty.",
                        "image": "/images/india/Rajasthan/itineraryimages/Mount_Abu/nakki_lake.jpg"
                    },
                "Point 3": {
                        "name": "sunset point",
                        "content": "Witness a mesmerizing sunset at sunset point.Enjoy panoramic views of the Aravalli hills.",
                        "image": "/images/india/Rajasthan/itineraryimages/Mount_Abu/sunset_point.jpg"
                    },
                    "end date": "15 March 2025",
                    "end time": "4:00 PM"
                    },
                "Day 2": {
                        "start date": "16 March 2025",
                        "start time": "8:00 AM",
                "Point 1": {
                        "name": "guru shikhar",
                        "content": "Visit the highest peak in Rajasthan, guru shikhar.Enjoy the breathtaking views and visit the temple at the summit.",
                        "image": "/images/india/Rajasthan/itineraryimages/Mount_Abu/guru_shikhar.jpg"
                    },
                "Point 2": {
                        "name": "achalgarh fort",
                        "content": "Explore the historic achalgarh fort.Visit the famous Achaleshwar Mahadev Temple.",
                        "image": "/images/india/Rajasthan/itineraryimages/Mount_Abu/achalgarh_fort.jpg"
                        },
                "Point 3": {
                        "name": "peace park",
                        "content": "Relax in the peaceful environment of peace park.Enjoy meditation and nature walks.",
                        "image": "/images/india/Rajasthan/itineraryimages/Mount_Abu/peace_park.jpg"
                    },
                    "end date": "16 March 2025",
                    "end time": "4:00 PM"
                    },
                "Day 3": {
                        "start date": "17 March 2025",
                        "start time": "8:00 AM",
                "Point 1": {
                        "name": "trevor’s tank",
                        "content": "Visit trevor’s tank, a nature park known for its crocodiles and birdwatching.Enjoy the serene atmosphere.",
                        "image": "/images/india/Rajasthan/itineraryimages/Mount_Abu/trevor_tank.jpg"
                    },
                "Point 2": {
                        "name": "honeymoon point",
                        "content": "Enjoy a peaceful time at honeymoon point.Capture stunning views of Mount Abu.",
                        "image": "/images/india/Rajasthan/itineraryimages/Mount_Abu/honeymoon_point.jpg"
                            }
                },
                "Price": "2000"
            },
    
            "udaipur city palace": {
                "Day 1": {
                        "start date": "15 March 2025",
                        "start time": "8:00 AM",
                "Point 1": {
                        "name": "udaipur city palace entrance",
                        "content": "Begin your exploration at the grand udaipur city palace.Discover its beautiful courtyards, museums, and heritage.",
                        "image": "/images/india/Rajasthan/itineraryimages/Udaipur_City/udaipur_city_palace_entrance.jpg"
                    },
                "Point 2": {
                        "name": "jagdish temple",
                        "content": "Visit the historic jagdish temple near the palace.Admire its stunning Indo-Aryan architecture.",
                        "image": "/images/india/Rajasthan/itineraryimages/Udaipur_City/jagdish_temple.jpg"
                    },
                "Point 3": {
                        "name": "lake pichola boat ride",
                        "content": "Enjoy a scenic boat ride on lake pichola.Visit the famous Jag Mandir and Taj Lake Palace.",
                        "image": "/images/india/Rajasthan/itineraryimages/Udaipur_City/lake_pichola_boat_ride.jpg"
                    },
                    "end date": "15 March 2025",
                    "end time": "4:00 PM"
                    },
                "Day 2": {
                        "start date": "16 March 2025",
                        "start time": "8:00 AM",
                "Point 1": {
                        "name": "sajjangarh palace",
                        "content": "Visit sajjangarh palace, also known as the monsoon palace.Enjoy panoramic views of the city.",
                        "image": "/images/india/Rajasthan/itineraryimages/Udaipur_City/sajjangarh_palace.jpg"
                    },
                "Point 2": {
                            "name": "saheliyon ki bari",
                            "content": "Explore the beautiful gardens of saheliyon ki bari.Enjoy the fountains, lotus pools, and marble pavilions.",
                            "image": "/images/india/Rajasthan/itineraryimages/Udaipur_City/saheliyon_ki_bari.jpg"
                    },
                "Point 3": {
                        "name": "bagore ki haveli",
                        "content": "Experience Rajasthani culture at bagore ki haveli.Attend a folk dance and puppet show in the evening.",
                        "image": "/images/india/Rajasthan/itineraryimages/Udaipur_City/bagore_ki_haveli.jpg"
                    },
                    "end date": "16 March 2025",
                    "end time": "4:00 PM"
                    },
                "Day 3": {
                        "start date": "17 March 2025",
                        "start time": "8:00 AM",
                "Point 1": {
                        "name": "fateh sagar lake",
                        "content": "Start your day at the serene fateh sagar lake.Enjoy a peaceful walk and boat ride.",
                        "image": "/images/india/Rajasthan/itineraryimages/Udaipur_City/fateh_sagar_lake.jpg"
                    },
                "Point 2": {
                        "name": "shilpgram",
                        "content": "Visit the rural arts and crafts complex, shilpgram.Explore traditional Rajasthani handicrafts.",
                        "image": "/images/india/Rajasthan/itineraryimages/Udaipur_City/shilpgram.jpg"
                    },
                "Point 3": {
                        "name": "sunset at karni mata temple",
                        "content": "End your trip with a sunset view from karni mata temple.Enjoy a ropeway ride to the temple.",
                        "image": "/images/india/Rajasthan/itineraryimages/Udaipur_City/sunset_at_karni_mata_temple.jpg"
                    },
                    "end date": "17 March 2025",
                    "end time": "4:00 PM"
                },
                    "Price": "2800"
            },
            "alleppey backwaters": {
                "Day 1": {
                        "start date": "15 March 2025",
                        "start time": "8:00 AM",
                "Point 1": {
                        "name": "alleppey backwaters houseboat",
                        "content": "Begin your journey with a houseboat cruise through the picturesque backwaters of alleppey.Experience the serene beauty and local village life.",
                        "image": "/images/india/Kerala/itineraryimages/Alleppey_Backwaters/alleppey_backwaters_houseboat.jpg"
                    },
                "Point 2": {
                        "name": "vembanad lake",
                        "content": "Visit the stunning vembanad lake, Kerala’s longest lake.Enjoy birdwatching and peaceful boat rides.",
                        "image": "/images/india/Kerala/itineraryimages/Alleppey_Backwaters/vembanad_lake.jpg"
                    },
                "Point 3": {
                        "name": "marari beach",
                        "content": "Relax at marari beach, a pristine and less crowded beach.Enjoy sunset views and local seafood.",
                        "image": "/images/india/Kerala/itineraryimages/Alleppey_Backwaters/marari_beach.jpg"
                    },
                    "end date": "15 March 2025",
                    "end time": "4:00 PM"
                    },
                "Day 2": {
                        "start date": "16 March 2025",
                        "start time": "8:00 AM",
                "Point 1": {
                        "name": "kumarakom bird sanctuary",
                        "content": "Take an early morning trip to kumarakom bird sanctuary.Spot rare migratory birds in their natural habitat.",
                        "image": "/images/india/Kerala/itineraryimages/Alleppey_Backwaters/kumarakom_bird_sanctuary.jpg"
                    },
                "Point 2": {
                        "name": "alleppey beach",
                        "content": "Spend some time at alleppey beach.Walk along the historic pier and enjoy the peaceful environment.",
                        "image": "/images/india/Kerala/itineraryimages/Alleppey_Backwaters/alleppey_beach.jpg"
                    },
                "Point 3": {
                        "name": "mullakkal temple",
                        "content": "Visit mullakkal temple, dedicated to Goddess Rajarajeshwari.Explore its traditional Kerala-style architecture.",
                        "image": "/images/india/Kerala/itineraryimages/Alleppey_Backwaters/mullakkal_temple.jpg"
                    },
                    "end date": "16 March 2025",
                    "end time": "4:00 PM"
                     },
                "Day 3": {
                        "start date": "17 March 2025",
                        "start time": "8:00 AM",
                "Point 1": {
                        "name": "pathiramanal island",
                        "content": "Explore pathiramanal island, a haven for birdwatchers.Enjoy the natural beauty of this secluded spot.",
                        "image": "/images/india/Kerala/itineraryimages/Alleppey_Backwaters/pathiramanal_island.jpg"
                    },
                "Point 2": {
                        "name": "krishnapuram palace",
                        "content": "Visit krishnapuram palace, an 18th-century palace with stunning murals.Learn about Kerala’s royal history.",
                        "image": "/images/india/Kerala/itineraryimages/Alleppey_Backwaters/krishnapuram_palace.jpg"
                    },
                "Point 3": {
                        "name": "sunset at alleppey lighthouse",
                        "content": "End your trip with a breathtaking sunset at alleppey lighthouse.Enjoy panoramic views of the coastline.",
                        "image": "/images/india/Kerala/itineraryimages/Alleppey_Backwaters/sunset_at_alleppey_lighthouse.jpg"
                    },
                    "end date": "17 March 2025",
                    "end time": "4:00 PM"
                },
                    "Price": "3500"
            },
            "athirappilly waterfall": {
                "Day 1": {
                        "start date": "15 March 2025",
                        "start time": "8:00 AM",
                "Point 1": {
                        "name": "athirappilly waterfall",
                        "content": "Start your adventure at the majestic athirappilly waterfall.Experience the roaring cascade and lush greenery.",
                        "image": "/images/india/Kerala/itineraryimages/Athirappilly_waterfall/athirappilly_waterfall.jpg"
                    },
                "Point 2": {
                        "name": "charpa waterfall",
                        "content": "Visit charpa waterfall, a smaller but equally scenic waterfall nearby.Enjoy the natural beauty and fresh air.",
                        "image": "/images/india/Kerala/itineraryimages/Athirappilly_waterfall/charpa_waterfall.jpg"
                    },
                "Point 3": {
                        "name": "thumburmuzhi butterfly park",
                        "content": "Explore thumburmuzhi butterfly park.Witness a variety of butterfly species in a vibrant ecosystem.",
                        "image": "/images/india/Kerala/itineraryimages/Athirappilly_waterfall/thumburmuzhi_butterfly_park.jpg"
                    },
                    "end date": "15 March 2025",
                    "end time": "4:00 PM"
                },
                    "Price": "2000"
            },
            "kochi": {
                "Day 1": {
                        "start date": "15 March 2025",
                        "start time": "8:00 AM",
                "Point 1": {
                        "name": "fort kochi",
                        "content": "Begin your day exploring the historic fort kochi.Walk through the colonial streets and visit heritage sites.",
                        "image": "/images/india/Kerala/itineraryimages/Kochi/fort_kochi.jpg"
                    },
                "Point 2": {
                        "name": "chinese fishing nets",
                        "content": "See the iconic chinese fishing nets at the waterfront.Experience the traditional fishing techniques of Kerala.",
                        "image": "/images/india/Kerala/itineraryimages/Kochi/chinese_fishing_nets.jpg"
                    },
                "Point 3": {
                        "name": "mattancherry palace",
                        "content": "Visit mattancherry palace, also known as the Dutch Palace.Explore its beautiful murals and royal artifacts.",
                        "image": "/images/india/Kerala/itineraryimages/Kochi/mattancherry_palace.jpg"
                    },
                    "end date": "15 March 2025",
                    "end time": "4:00 PM"
                },
                    "Price": "2500"
            },
            "lighthouse beach-kovalam - periyar wildlife": {
                "Day 1": {
                    "start date": "15 March 2025",
                    "start time": "8:00 AM",
                "Point 1": {
                        "name": "lighthouse beach",
                        "content": "Start your day at the picturesque lighthouse beach.Enjoy sunbathing and beachside cafes.",
                        "image": "/images/india/Kerala/itineraryimages/Lighthouse_Beach/lighthouse_beach.jpg"
                    },
                "Point 2": {
                        "name": "vizhinjam marine aquarium",
                        "content": "Visit vizhinjam marine aquarium to explore marine life.Learn about different species of fish and corals.",
                        "image": "/images/india/Kerala/itineraryimages/Lighthouse_Beach/vizhinjam_marine_aquarium.jpg"
                    },
                "Point 3": {
                        "name": "kovalam art gallery",
                        "content": "Explore kovalam art gallery showcasing local artworks.Enjoy paintings and sculptures by Kerala artists.",
                        "image": "/images/india/Kerala/itineraryimages/Lighthouse_Beach/kovalam_art_gallery.jpg"
                    },
                    "end date": "15 March 2025",
                    "end time": "4:00 PM"
                },
                    "Price": "2200"
            },
            "munnar tea gardens": {
                "Day 1": {
                    "start date": "15 March 2025",
                    "start time": "8:00 AM",
                "Point 1": {
                        "name": "tea gardens",
                        "content": "Begin your journey with a visit to Munnar’s lush tea gardens.Learn about tea processing and enjoy fresh tea.",
                        "image": "/images/india/Kerala/itineraryimages/Munnar_Tea_Gardens/tea_gardens.jpg"
                    },
                "Point 2": {
                        "name": "mattupetty dam",
                        "content": "Visit mattupetty dam, a scenic reservoir.Enjoy a boat ride amidst misty hills.",
                        "image": "/images/india/Kerala/itineraryimages/Munnar_Tea_Gardens/mattupetty_dam.jpg"
                    },
                "Point 3": {
                        "name": "top station",
                        "content": "Conclude your day with a trip to top station.Enjoy breathtaking views of the Western Ghats.",
                        "image": "/images/india/Kerala/itineraryimages/Munnar_Tea_Gardens/top_station.jpg"
                    },
                    "end date": "15 March 2025",
                    "end time": "4:00 PM"
                },
                    "Price": "2800"
            },
            "amarnath temple": {
                "Day 1": {
                    "start date": "15 March 2025",
                    "start time": "6:00 AM",
                "Point 1": {
                        "name": "pahalgam",
                        "content": "Start your journey from Pahalgam, the base for the Amarnath Yatra.Enjoy the scenic beauty and acclimatize before the trek.",
                        "image": "/images/india/J&K/itineraryimages/Amarnath_Temple/pahalgam.jpg"
                    },
                "Point 2": {
                        "name": "chandanwari",
                        "content": "Travel to Chandanwari, the starting point of the trek.Experience the breathtaking views of snow-capped peaks.",
                        "image": "/images/india/J&K/itineraryimages/Amarnath_Temple/chandanwari.jpg"
                    },
                "Point 3": {
                        "name": "sheshnag lake",
                        "content": "Trek to the picturesque Sheshnag Lake.Relax and admire the serene beauty of the lake surrounded by mountains.",
                        "image": "/images/india/J&K/itineraryimages/Amarnath_Temple/sheshnag_lake.jpg"
                    },
                    "end date": "15 March 2025",
                    "end time": "6:00 PM"
                },
                    "Price": "5000"
            },
            "bahu fort": {
                "Day 1": {
                        "start date": "16 March 2025",
                        "start time": "9:00 AM",
                "Point 1": {
                        "name": "bahu fort",
                        "content": "Begin your exploration at the historic Bahu Fort.Admire its ancient architecture and spiritual significance.",
                        "image": "/images/india/J&K/itineraryimages/Bahu_Fort/bahu_fort.jpg"
                    },
                "Point 2": {
                        "name": "bawe wali mata temple",
                        "content": "Visit Bawe Wali Mata Temple inside the fort complex.Seek blessings at this revered Hindu temple.",
                        "image": "/images/india/J&K/itineraryimages/Bahu_Fort/bawe_wali_mata_temple.jpg"
                    },
                "Point 3": {
                        "name": "bagh-e-bahu",
                        "content": "Explore Bagh-e-Bahu, a beautiful terraced garden.Enjoy panoramic views of Jammu city and the Tawi River.",
                        "image": "/images/india/J&K/itineraryimages/Bahu_Fort/bagh-e-bahu.jpg"
                    },
                    "end date": "16 March 2025",
                    "end time": "5:00 PM"
                },
                    "Price": "1500"
            },
            "dal lake": {
                "Day 1": {
                        "start date": "17 March 2025",
                        "start time": "8:00 AM",
                "Point 1": {
                        "name": "shikara ride",
                        "content": "Begin your day with a relaxing Shikara ride on Dal Lake.Admire the floating gardens and vibrant houseboats.",
                        "image": "/images/india/J&K/itineraryimages/Dal_Lake/shikara_ride.jpg"
                    },
                "Point 2": {
                        "name": "nigeen lake",
                        "content": "Visit the serene Nigeen Lake, an extension of Dal Lake.Enjoy the peaceful surroundings and fewer crowds.",
                        "image": "/images/india/J&K/itineraryimages/Dal_Lake/nigeen_lake.jpg"
                    },
                "Point 3": {
                        "name": "floating market",
                        "content": "Explore the unique floating market on Dal Lake.Experience shopping from vendors on boats.",
                        "image": "/images/india/J&K/itineraryimages/Dal_Lake/floating_market.jpg"
                    },
                    "end date": "17 March 2025",
                    "end time": "4:00 PM"
                },
                    "Price": "2500"
            },
            "gurez valley": {
                "Day 1": {
                        "start date": "18 March 2025",
                        "start time": "6:00 AM",
                "Point 1": {
                        "name": "razdan pass",
                        "content": "Begin your journey with a scenic drive to Razdan Pass.Enjoy breathtaking views of the snow-clad mountains.",
                        "image": "/images/india/J&K/itineraryimages/Gurez_Valley/razdan_pass.jpg"
                    },
                "Point 2": {
                        "name": "kishanganga river",
                        "content": "Visit the Kishanganga River in Gurez Valley.Relax by the riverbank and enjoy the peaceful surroundings.",
                        "image": "/images/india/J&K/itineraryimages/Gurez_Valley/kishanganga_river.jpg"
                    },
                "Point 3": {
                        "name": "habba khatoon peak",
                        "content": "Explore Habba Khatoon Peak, named after a famous Kashmiri poetess.Marvel at the stunning mountain scenery.",
                        "image": "/images/india/J&K/itineraryimages/Gurez_Valley/habba_khatoon_peak.jpg"
                    },
                    "end date": "18 March 2025",
                    "end time": "5:00 PM"
                },
                    "Price": "4000"
            },
            "patnitop": {
                "Day 1": {
                        "start date": "19 March 2025",
                        "start time": "8:00 AM",
                "Point 1": {
                        "name": "nathatop",
                        "content": "Start your day with an excursion to Nathatop.Enjoy panoramic views and adventure activities like paragliding.",
                        "image": "/images/india/J&K/itineraryimages/Patnitop/nathatop.jpg"
                    },
                "Point 2": {
                        "name": "sanasar lake",
                        "content": "Visit the beautiful Sanasar Lake.Experience boating and horse riding amidst the lush green meadows.",
                        "image": "/images/india/J&K/itineraryimages/Patnitop/sanasar_lake.jpg"
                    },
                "Point 3": {
                        "name": "nag temple",
                        "content": "End your trip with a visit to the ancient Nag Temple.Seek blessings and enjoy the spiritual atmosphere.",
                        "image": "/images/india/J&K/itineraryimages/Patnitop/nag_temple.jpg"
                    },
                    "end date": "19 March 2025",
                    "end time": "4:00 PM"
                },
                    "Price": "3000"
            },
            "botanical garden": {
                "Day 1": {
                        "start date": "15 March 2025",
                        "start time": "8:00 AM",
                "Point 1": {
                        "name": "great banyan tree",
                        "content": "Start your visit at the iconic Great Banyan Tree, the largest in the world.Marvel at its massive canopy spread over several acres.",
                        "image": "/images/india/West Bengal/itineraryimages/Botanical_Garden/great_banyan_tree.jpg"
                    },
                "Point 2": {
                        "name": "palm house",
                        "content": "Explore the Palm House with its collection of rare and exotic palm species.Enjoy the lush greenery and diverse flora.",
                        "image": "/images/india/West Bengal/itineraryimages/Botanical_Garden/palm_house.jpg"
                    },
                "Point 3": {
                        "name": "lotus pond",
                        "content": "Visit the scenic Lotus Pond, a peaceful spot within the garden.Relax and take in the beauty of the blooming lotus flowers.",
                        "image": "/images/india/West Bengal/itineraryimages/Botanical_Garden/lotus_pond.jpg"
                    },
                    "end date": "15 March 2025",
                    "end time": "4:00 PM"
                },
                    "Price": "500"
            },
            "darjeeling toy train": {
                "Day 2": {
                        "start date": "16 March 2025",
                        "start time": "9:00 AM",
                "Point 1": {
                        "name": "darjeeling station",
                        "content": "Begin your journey from Darjeeling Railway Station.Board the iconic toy train and experience a nostalgic ride.",
                        "image": "/images/india/West Bengal/itineraryimages/Darjeeling_Toy_Train/darjeeling_station.jpg"
                    },
                "Point 2": {
                        "name": "batasia loop",
                        "content": "Stop at Batasia Loop, a scenic spiral railway track.Enjoy breathtaking views of the surrounding hills and the Kanchenjunga range.",
                        "image": "/images/india/West Bengal/itineraryimages/Darjeeling_Toy_Train/batasia_loop.jpg"
                    },
                "Point 3": {
                        "name": "ghoom monastery",
                        "content": "Visit Ghoom Monastery, one of the oldest monasteries in Darjeeling.Admire its serene atmosphere and Buddhist artifacts.",
                        "image": "/images/india/West Bengal/itineraryimages/Darjeeling_Toy_Train/ghoom_monastery.jpg"
                    },
                    "end date": "16 March 2025",
                    "end time": "3:00 PM"
                },
                        "Price": "1500"
            },
            "howrah bridge": {
                "Day 2": {
                        "start date": "16 March 2025",
                        "start time": "5:00 PM",
                "Point 1": {
                        "name": "howrah bridge walk",
                        "content": "Take a leisurely walk across the iconic Howrah Bridge.Experience the bustling atmosphere and stunning river views.",
                        "image": "/images/india/West Bengal/itineraryimages/Howrah_Bridge/howrah_bridge_walk.jpg"
                    },
                "Point 2": {
                        "name": "river ferry ride",
                        "content": "Enjoy a boat ride on the Hooghly River.Capture beautiful sunset views of the bridge.",
                        "image": "/images/india/West Bengal/itineraryimages/Howrah_Bridge/river_ferry_ride.jpg"
                    },
                "Point 3": {
                        "name": "mallik ghat flower market",
                        "content": "Visit Mallik Ghat Flower Market, one of the largest in Asia.Experience the vibrant colors and fragrances of fresh flowers.",
                        "image": "/images/india/West Bengal/itineraryimages/Howrah_Bridge/mallik_ghat_flower_market.jpg"
                    },
                    "end date": "16 March 2025",
                    "end time": "7:00 PM"
                },
                        "Price": "300"
            },
            "sundarbans national park": {
                "Day 3": {
                        "start date": "17 March 2025",
                        "start time": "7:00 AM",
                "Point 1": {
                        "name": "sajnekhali watchtower",
                        "content": "Start your jungle safari at Sajnekhali Watchtower.Spot rare wildlife, including the Bengal tiger and saltwater crocodiles.",
                        "image": "/images/india/West Bengal/itineraryimages/Sundarbans_National_Park/sajnekhali_watchtower.jpg"
                    },
                "Point 2": {
                        "name": "dobanki canopy walk",
                        "content": "Experience the thrilling Dobanki Canopy Walk.Enjoy a bird's-eye view of the mangrove forest.",
                        "image": "/images/india/West Bengal/itineraryimages/Sundarbans_National_Park/dobanki_canopy_walk.jpg"
                    },
                "Point 3": {
                        "name": "sundarbans delta",
                        "content": "Take a boat cruise through the stunning Sundarbans Delta.Witness the unique biodiversity of the world's largest mangrove forest.",
                        "image": "/images/india/West Bengal/itineraryimages/Sundarbans_National_Park/sundarbans_delta.jpg"
                    },
                    "end date": "17 March 2025",
                    "end time": "4:00 PM"
                },
                        "Price": "4000"
            },
            "victoria memorial": {
                "Day 3": {
                    "start date": "17 March 2025",
                    "start time": "5:00 PM",
                "Point 1": {
                        "name": "victoria memorial museum",
                        "content": "Explore the grand museum inside the Victoria Memorial.Discover exhibits showcasing British colonial history and artwork.",
                        "image": "/images/india/West Bengal/itineraryimages/Victoria_Memorial/victoria_memorial_museum.jpg"
                    },
                "Point 2": {
                        "name": "gardens of victoria memorial",
                        "content": "Stroll through the beautifully landscaped gardens.Admire the iconic white marble architecture and take memorable photographs.",
                        "image": "/images/india/West Bengal/itineraryimages/Victoria_Memorial/gardens_of_victoria_memorial.jpg"
                    },
                "Point 3": {
                        "name": "light and sound show",
                        "content": "End your trip with the mesmerizing light and sound show.Learn about Kolkata's rich history through a captivating visual presentation.",
                        "image": "/images/india/West Bengal/itineraryimages/Victoria_Memorial/light_and_sound_show.jpg"
                    },
                    "end date": "17 March 2025",
                    "end time": "8:00 PM"
                },
                        "Price": "800"
            },                                               
    };

// Function to create an overlay before redirecting
function showRedirectOverlay() {
    const overlay = document.createElement("div");
    overlay.id = "redirect-overlay";
    overlay.innerHTML = `
        <div class="overlay-content">
            <p>Redirecting to login page...</p>
        </div>
    `;
    document.body.appendChild(overlay);
}
document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const placeName = urlParams.get("place");

    if (placeName && itineraryData[placeName.toLowerCase()]) {
        const itinerary = itineraryData[placeName.toLowerCase()];
        const itineraryContent = document.getElementById("itinerary-content");
        itineraryContent.innerHTML = ""; // Clear existing content

        // Set place name in the heading
        document.getElementById("place-name").textContent = placeName.toUpperCase();

        // Loop through each day and generate the itinerary
        Object.keys(itinerary).forEach((day) => {
            if (day === "Price") return; // Skip the price key

            const dayData = itinerary[day];

            // Create a day container
            const dayContainer = document.createElement("div");
            dayContainer.classList.add("day-container");

            // Create a header for the date and time
            const dateHeader = document.createElement("h2");
            dateHeader.classList.add("date-header");
            dateHeader.textContent = `📅 ${dayData["start date"]} | ${day} | ⏰ ${dayData["start time"]} - ${dayData["end time"]}`;
            dayContainer.appendChild(dateHeader);

            // Create a list for places visited that day
            const placesList = document.createElement("ul");
            placesList.classList.add("places-list");

            // Loop through points and add them to the list
            Object.keys(dayData).forEach((key) => {
                if (key.startsWith("Point")) {
                    const place = dayData[key];
                    let wholeContent=place.content.split('.').map(s => s.trim()).filter(s => s.length > 0);;
                    // Create UL dynamically
                    let listElement = document.createElement("ul");

                    wholeContent.forEach(statement => {
                        let li = document.createElement("li");
                        li.textContent = statement;
                        listElement.appendChild(li);
                    });
                    const imgPlacetag=document.createElement("img");
                    imgPlacetag.src=place.image;
                    imgPlacetag.id="iternariesimage";

                    const placeItem = document.createElement("li");
                    placeItem.innerHTML = `<h3 class="inneriternary">📍 ${place.name || place.title}</h3><br>${listElement.innerHTML}`;
                    placeItem.appendChild(imgPlacetag);
                    placesList.appendChild(placeItem);
                }
            });

            // Append the list to the day container
            dayContainer.appendChild(placesList);
            itineraryContent.appendChild(dayContainer);
        });

        // Add total price section
        const priceSection = document.createElement("div");
        priceSection.classList.add("price-section");
        priceSection.innerHTML = `<h2>Total Price: ₹${itinerary.Price}</h2>`;
        itineraryContent.appendChild(priceSection);

        // Add buttons
        const buttonContainer = document.createElement("div");
        buttonContainer.classList.add("button-container");

        const addToVisitButton = document.createElement("button");
        addToVisitButton.textContent = "➕ Add to Visit List";
        addToVisitButton.classList.add("action-button");
        addToVisitButton.onclick = () => {
            // Check if the user is logged in
            const loggedInUser = localStorage.getItem("loggedInUser");
        
            if (!loggedInUser) {
                showRedirectOverlay();
                document.body.classList.add("no-scroll"); // Prevent scrolling
                setTimeout(() => {
                    window.location.href = "/login.html";
                }, 2000); // Redirect after 2 seconds
            }

            // Prepare data to send
            const visitData = {
                user_id: loggedInUser,
                place_name: toTitleCase(placeName),
                price: itineraryData[placeName]["Price"]
            };
        
            // Send a POST request to the backend to store the visit
            fetch(`http://${window.location.hostname}:5000/api/visits/add`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(visitData)
            })
            .then(response => response.json())
            .then(data => {
                if (data.message) {
                    showToastMessage("✅ Place added to your visit list!");
                } else {
                    // alert("Failed to add visit. Please try again.");
                }
            })
            .catch(error => {
                console.error("Error:", error);
                alert("An error occurred while adding the visit.");
            });
        };
        

        buttonContainer.appendChild(addToVisitButton);
        itineraryContent.appendChild(buttonContainer);
    } else {
        document.querySelector(".container").innerHTML = "<h1>Itinerary not found</h1>";
    }
});

function showToastMessage(message) {
    const toast = document.createElement("div");
    toast.className = "toast-message";
    toast.textContent = message;
    document.body.appendChild(toast);

    // Show animation
    setTimeout(() => {
        toast.classList.add("show");
    }, 100);

    // Hide after 3 seconds
    setTimeout(() => {
        toast.classList.remove("show");
        setTimeout(() => toast.remove(), 500); // Remove from DOM
        window.location.href = "/addvisit.html"; // Redirect after the toast disappears
    }, 1500);
}



