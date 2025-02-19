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
                    "content": "Day 1: Start with an early morning visit to the grand entrance of Gwalior Fort.<br>Explore the stunning architecture and historical significance."
                },
                "Point 2": {
                    "name": "Man Singh Palace",
                    "content": "Day 1: Visit the exquisite palace known for its vibrant blue tiles and stunning carvings.<br>Learn about its historical importance and underground prison cells."
                },
                "Point 3": {
                    "name": "Gujari Mahal Archaeological Museum",
                    "content": "Day 1: Explore the museum showcasing rare artifacts and sculptures from different eras.<br>Understand the cultural significance of the region."
                },
                "end date": "15 March 2025",
                "end time": "4:00 PM"
            },
            "Day 2": {
                "start date": "16 March 2025",
                "start time": "8:00 AM",
                "Point 1": {
                    "name": "Sas Bahu Temples",
                    "content": "Day 2: Visit the intricately carved twin temples dedicated to Lord Vishnu.<br>Admire the beautiful architecture and peaceful surroundings."
                },
                "Point 2": {
                    "name": "Teli Ka Mandir",
                    "content": "Day 2: Explore the tallest temple in the fort complex.<br>Marvel at its blend of Dravidian and North Indian architectural styles."
                },
                "Point 3": {
                    "name": "Jain Sculptures",
                    "content": "Day 2: Discover the massive Jain rock-cut sculptures along the fort walls.<br>Learn about the significance of Jainism in the region."
                },
                "end date": "16 March 2025",
                "end time": "4:00 PM"
            },
            "Day 3": {
                "start date": "17 March 2025",
                "start time": "8:00 AM",
                "Point 1": {
                    "name": "Gurdwara Data Bandi Chhod",
                    "content": "Day 3: Visit this historic Sikh pilgrimage site within the fort.<br>Learn about the release of Guru Hargobind Sahib and its significance."
                },
                "Point 2": {
                    "name": "Scindia School",
                    "content": "Day 3: Take a quick tour of the famous Scindia School, located within the fort complex.<br>Explore its heritage and contribution to education."
                },
                "Point 3": {
                    "name": "Sunset View from Gwalior Fort",
                    "content": "Day 3: End your trip with a breathtaking sunset view from the fort walls.<br>Capture beautiful memories of the trip."
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
                    "content": "Day 1: Begin your day with the peaceful morning aarti at iskcon ujjain temple.<br>Experience the spiritual energy and divine atmosphere."
                },
                "Point 2": {
                    "name": "temple architecture & murals",
                    "content": "Day 1: Explore the stunning temple architecture and beautiful murals depicting lord krishna’s life.<br>Learn about the significance of the iskcon movement."
                },
                "Point 3": {
                    "name": "govinda’s prasadam",
                    "content": "Day 1: Enjoy a delicious sattvic meal at govinda’s restaurant inside the temple.<br>Taste the authentic prasadam prepared with devotion."
                },
                "end date": "15 March 2025",
                "end time": "4:00 PM"
            },
            "Day 2": {
                "start date": "16 March 2025",
                "start time": "8:00 AM",
                "Point 1": {
                    "name": "spiritual discourse session",
                    "content": "Day 2: Attend a discourse on bhagavad gita and spirituality.<br>Gain insights into vedic wisdom and Krishna consciousness."
                },
                "Point 2": {
                    "name": "gaushala visit",
                    "content": "Day 2: Visit the gaushala inside the temple complex.<br>Feed the cows and understand their spiritual importance."
                },
                "Point 3": {
                    "name": "evening kirtan",
                    "content": "Day 2: Participate in the enchanting evening kirtan.<br>Experience the bliss of devotional chanting and meditation."
                },
                "end date": "16 March 2025",
                "end time": "4:00 PM"
            },
            "Day 3": {
                "start date": "17 March 2025",
                "start time": "8:00 AM",
                "Point 1": {
                    "name": "visit to mahakaleshwar jyotirlinga",
                    "content": "Day 3: Take a trip to the famous mahakaleshwar jyotirlinga.<br>Experience the divine energy of one of the 12 jyotirlingas."
                },
                "Point 2": {
                    "name": "ram ghat on shipra river",
                    "content": "Day 3: Spend time at the serene ram ghat.<br>Witness the evening aarti and soak in the spiritual ambiance."
                },
                "Point 3": {
                    "name": "shopping for spiritual souvenirs",
                    "content": "Day 3: End your journey by shopping for religious books, beads, and idols.<br>Take home memories of your spiritual retreat."
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
                    "content": "Day 1: Start with the most famous temples like kandariya mahadev and lakshmana temple.<br>Admire the exquisite sculptures and carvings."
                },
                "Point 2": {
                    "name": "light & sound show",
                    "content": "Day 1: In the evening, witness the mesmerizing light & sound show.<br>Learn about the history of khajuraho through a captivating narration."
                },
                "Point 3": {
                    "name": "khajuraho local market",
                    "content": "Day 1: Explore local handicraft markets.<br>Buy unique souvenirs, sculptures, and paintings."
                },
                "end date": "15 March 2025",
                "end time": "4:00 PM"
            },
            "Day 2": {
                "start date": "16 March 2025",
                "start time": "8:00 AM",
                "Point 1": {
                    "name": "eastern group of temples",
                    "content": "Day 2: Visit jain temples like parshvanatha and adinatha temple.<br>Understand the jain influence on khajuraho's architecture."
                },
                "Point 2": {
                    "name": "raneh falls",
                    "content": "Day 2: Visit the scenic raneh falls.<br>Enjoy the breathtaking canyon and rock formations."
                },
                "Point 3": {
                    "name": "ken gharial sanctuary",
                    "content": "Day 2: Explore the wildlife sanctuary near khajuraho.<br>Spot gharials, deer, and migratory birds."
                },
                "end date": "16 March 2025",
                "end time": "4:00 PM"
            },
            "Day 3": {
                "start date": "17 March 2025",
                "start time": "8:00 AM",
                "Point 1": {
                    "name": "ayurvedic spa experience",
                    "content": "Day 3: Enjoy a rejuvenating ayurvedic massage.<br>Relax in the tranquil atmosphere of khajuraho’s wellness centers."
                },
                "Point 2": {
                    "name": "panna tiger reserve",
                    "content": "Day 3: Take a safari to panna tiger reserve.<br>Spot tigers, leopards, and other wildlife."
                },
                "Point 3": {
                    "name": "farewell dinner",
                    "content": "Day 3: Conclude your trip with a traditional bundelkhandi meal.<br>Experience the local flavors at a heritage restaurant."
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
                    "content": "Day 1: Begin your journey at the magnificent great stupa.<br>Admire the ancient Buddhist architecture and carvings."
                },
                "Point 2": {
                     "name": "ashoka pillar",
                     "content": "Day 1: Explore the famous ashoka pillar near the stupa.<br>Learn about emperor ashoka’s contribution to Buddhism."
                },
                "Point 3": {
                    "name": "sanchi museum",
                    "content": "Day 1: Visit the archaeological museum showcasing artifacts from the Mauryan and Gupta periods.<br>Understand the rich Buddhist heritage of Sanchi."
                },
                    "end date": "15 March 2025",
                    "end time": "4:00 PM"
                },
            "Day 2": {
                "start date": "16 March 2025",
                "start time": "8:00 AM",
                "Point 1": {
                    "name": "toranas (gateway carvings)",
                    "content": "Day 2: Observe the intricately carved gateways surrounding the stupa.<br>Decode the Buddhist teachings depicted in the carvings."
                },
                "Point 2": {
                    "name": "nearby buddhist monasteries",
                      "content": "Day 2: Explore the ruins of ancient Buddhist monasteries.<br>Discover the lifestyle of monks in the early centuries."
                 },
                "Point 3": {
                    "name": "sunset view from sanchi hill",
                        "content": "Day 2: Experience a mesmerizing sunset view from the hilltop.<br>Capture stunning photographs of the stupa in golden light."
                },
                    "end date": "16 March 2025",
                    "end time": "4:00 PM"
                },
            "Day 3": {
                    "start date": "17 March 2025",
                    "start time": "8:00 AM",
                "Point 1": {
                    "name": "travel to vidisha",
                    "content": "Day 3: Visit the historic town of Vidisha, located near Sanchi.<br>Explore the ruins and temples from the Gupta era."
                },
                "Point 2": {
                    "name": "udo giri caves",
                    "content": "Day 3: Explore the rock-cut udayagiri caves featuring Hindu and Jain sculptures.<br>See the famous Varaha (boar) sculpture of Lord Vishnu."
                },
                "Point 3": {
                    "name": "shopping for handicrafts",
                    "content": "Day 3: End your trip with some souvenir shopping.<br>Buy traditional Madhya Pradesh handicrafts and Buddhist artifacts."
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
                    "content": "Day 1: Start your journey by admiring the intricate carvings of the sun temple.<br>Learn about its historical and religious significance."
                },
                "Point 2": {
                    "name": "natya mandapa",
                    "content": "Day 1: Explore the natya mandapa, where ancient dances were performed in devotion to the sun god.<br>Observe the beautifully carved pillars."
                },
                "Point 3": {
                    "name": "sunset at sun temple",
                    "content": "Day 1: Enjoy a breathtaking sunset near the temple complex.<br>Capture the scenic beauty of the surroundings."
                },
                "end date": "15 March 2025",
                "end time": "4:00 PM"
            },
            "Day 2": {
                "start date": "16 March 2025",
                "start time": "8:00 AM",
                "Point 1": {
                    "name": "archaeological museum",
                    "content": "Day 2: Visit the nearby museum displaying relics from the temple.<br>Learn about the history and architecture of the sun temple."
                },
                "Point 2": {
                    "name": "konark beach",
                    "content": "Day 2: Take a relaxing break at the nearby konark beach.<br>Enjoy the serene environment and sea breeze."
                },
                "Point 3": {
                    "name": "sound & light show",
                    "content": "Day 2: Witness a spectacular light & sound show in the evening.<br>Learn about the temple’s glorious past through an engaging narration."
                },
                "end date": "16 March 2025",
                "end time": "4:00 PM"
            },
            "Day 3": {
                "start date": "17 March 2025",
                "start time": "8:00 AM",
                "Point 1": {
                    "name": "chandrabhaga beach",
                    "content": "Day 3: Visit the beautiful chandrabhaga beach near the temple.<br>Enjoy a peaceful morning walk along the shore."
                },
                "Point 2": {
                    "name": "ramchandi temple",
                    "content": "Day 3: Explore the ramchandi temple dedicated to goddess Ramachandi.<br>Experience the spiritual aura and scenic surroundings."
                },
                "Point 3": {
                    "name": "local handicrafts shopping",
                    "content": "Day 3: End your trip with shopping for famous Pattachitra paintings and stone carvings.<br>Take home exquisite souvenirs from Odisha."
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
                        "content": "Day 1: Begin your journey at the iconic hawa mahal.<br>Explore the stunning facade and learn about its architectural uniqueness."
                    },
                    "Point 2": {
                        "name": "city palace",
                        "content": "Day 1: Visit the majestic city palace.<br>Discover the royal heritage of Jaipur and explore the museums."
                    },
                    "Point 3": {
                        "name": "jantar mantar",
                        "content": "Day 1: Explore the famous astronomical observatory.<br>Understand ancient Indian astronomical techniques."
                    },
                    "end date": "15 March 2025",
                    "end time": "4:00 PM"
                },
                "Day 2": {
                    "start date": "16 March 2025",
                    "start time": "8:00 AM",
                    "Point 1": {
                        "name": "amber fort",
                        "content": "Day 2: Visit the magnificent amber fort.<br>Enjoy the elephant ride and explore the royal palace interiors."
                    },
                    "Point 2": {
                        "name": "jal mahal",
                        "content": "Day 2: Admire the beauty of the floating palace, jal mahal.<br>Capture stunning photographs of the serene lake views."
                    },
                    "Point 3": {
                        "name": "shopping at johari bazar",
                        "content": "Day 2: Explore the vibrant local market.<br>Shop for traditional jewelry and handicrafts."
                    },
                    "end date": "16 March 2025",
                    "end time": "4:00 PM"
                },
                "Day 3": {
                    "start date": "17 March 2025",
                    "start time": "8:00 AM",
                    "Point 1": {
                        "name": "nahargarh fort",
                        "content": "Day 3: Enjoy breathtaking views from nahargarh fort.<br>Learn about its historical significance in Jaipur’s defense system."
                    },
                    "Point 2": {
                        "name": "albert hall museum",
                        "content": "Day 3: Visit Rajasthan’s oldest museum.<br>Explore artifacts, paintings, and royal belongings."
                    },
                    "Point 3": {
                        "name": "sunset at hawa mahal",
                        "content": "Day 3: Conclude your trip by witnessing the golden sunset at hawa mahal.<br>Enjoy a relaxing evening before departure."
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
                        "content": "Day 1: Start your trip by exploring the golden jaisalmer fort.<br>Discover the stunning Rajput architecture and history."
                    },
                "Point 2": {
                        "name": "patwon ki haveli",
                        "content": "Day 1: Visit the grand patwon ki haveli.<br>Admire the detailed carvings and historic artifacts."
                    },
                "Point 3": {
                        "name": "gadisar lake",
                        "content": "Day 1: Enjoy a peaceful evening at gadisar lake.<br>Experience boating and admire the scenic surroundings."
                    },
                    "end date": "15 March 2025",
                    "end time": "4:00 PM"
                },
                "Day 2": {
                    "start date": "16 March 2025",
                    "start time": "8:00 AM",
                "Point 1": {
                        "name": "sam sand dunes",
                        "content": "Day 2: Head to the vast sam sand dunes for a desert safari.<br>Enjoy camel rides and witness a mesmerizing sunset."
                    },
                "Point 2": {
                        "name": "kuldhara village",
                        "content": "Day 2: Visit the abandoned village of kuldhara.<br>Learn about its mysterious history and legends."
                    },
                "Point 3": {
                        "name": "cultural folk show",
                        "content": "Day 2: Experience an evening of Rajasthani folk dance and music.<br>Enjoy authentic Rajasthani cuisine."
                    },
                    "end date": "16 March 2025",
                    "end time": "4:00 PM"
                },
                "Day 3": {
                    "start date": "17 March 2025",
                    "start time": "8:00 AM",
                "Point 1": {
                        "name": "jain temples",
                        "content": "Day 3: Explore the beautifully carved jain temples inside the fort.<br>Marvel at the intricate stonework."
                    },
                "Point 2": {
                        "name": "war museum",
                        "content": "Day 3: Visit the Jaisalmer war museum.<br>Learn about India’s military history and heroism."
                    },
                "Point 3": {
                        "name": "sunset view at bada bagh",
                        "content": "Day 3: End your trip with a stunning sunset view at bada bagh.<br>Capture the beauty of the royal cenotaphs."
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
                        "content": "Day 1: Begin your trip at the grand mehrangarh fort.<br>Explore its vast courtyards, museums, and breathtaking views."
                    },
                "Point 2": {
                        "name": "jaswant thada",
                        "content": "Day 1: Visit the stunning marble cenotaph of Jaswant Thada.<br>Enjoy the peaceful surroundings and intricate carvings."
                    },
                "Point 3": {
                        "name": "clock tower market",
                        "content": "Day 1: Explore the vibrant clock tower market.<br>Shop for traditional handicrafts and Jodhpuri textiles."
                    },
                    "end date": "15 March 2025",
                    "end time": "4:00 PM"
                },
                "Day 2": {
                    "start date": "16 March 2025",
                    "start time": "8:00 AM",
                "Point 1": {
                        "name": "umaid bhawan palace",
                        "content": "Day 2: Visit the grand umaid bhawan palace.<br>Explore the museum showcasing royal artifacts and vintage cars."
                    },
                "Point 2": {
                        "name": "rao jodha desert rock park",
                        "content": "Day 2: Take a nature walk in rao jodha desert rock park.<br>Learn about desert vegetation and conservation efforts."
                    },
                "Point 3": {
                        "name": "mandore gardens",
                        "content": "Day 2: Visit the historic mandore gardens.<br>Discover cenotaphs of Marwar rulers and beautiful temples."
                    },
                    "end date": "16 March 2025",
                    "end time": "4:00 PM"
                },
                "Day 3": {
                    "start date": "17 March 2025",
                    "start time": "8:00 AM",
                "Point 1": {
                        "name": "toorji ka jhalra",
                        "content": "Day 3: Start your day at this beautifully restored stepwell.<br>Admire the architecture and enjoy local cafes nearby."
                    },
                "Point 2": {
                        "name": "machia biological park",
                        "content": "Day 3: Visit machia biological park to see desert wildlife.<br>Spot leopards, deer, and various bird species."
                    },
                "Point 3": {
                        "name": "sunset at mehrangarh fort",
                        "content": "Day 3: Conclude your journey with a sunset view from mehrangarh fort.<br>Capture the breathtaking landscape of Jodhpur."
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
                        "content": "Day 1: Start your day at the famous dilwara temples.<br>Marvel at the exquisite marble carvings and peaceful ambiance."
                    },
                "Point 2": {
                        "name": "nakki lake",
                        "content": "Day 1: Enjoy boating at nakki lake.<br>Explore the surrounding markets and scenic beauty."
                    },
                "Point 3": {
                        "name": "sunset point",
                        "content": "Day 1: Witness a mesmerizing sunset at sunset point.<br>Enjoy panoramic views of the Aravalli hills."
                    },
                    "end date": "15 March 2025",
                    "end time": "4:00 PM"
                    },
                "Day 2": {
                        "start date": "16 March 2025",
                        "start time": "8:00 AM",
                "Point 1": {
                        "name": "guru shikhar",
                        "content": "Day 2: Visit the highest peak in Rajasthan, guru shikhar.<br>Enjoy the breathtaking views and visit the temple at the summit."
                    },
                "Point 2": {
                        "name": "achalgarh fort",
                        "content": "Day 2: Explore the historic achalgarh fort.<br>Visit the famous Achaleshwar Mahadev Temple."
                        },
                "Point 3": {
                        "name": "peace park",
                        "content": "Day 2: Relax in the peaceful environment of peace park.<br>Enjoy meditation and nature walks."
                    },
                    "end date": "16 March 2025",
                    "end time": "4:00 PM"
                    },
                "Day 3": {
                        "start date": "17 March 2025",
                        "start time": "8:00 AM",
                "Point 1": {
                        "name": "trevor’s tank",
                        "content": "Day 3: Visit trevor’s tank, a nature park known for its crocodiles and birdwatching.<br>Enjoy the serene atmosphere."
                    },
                "Point 2": {
                        "name": "honeymoon point",
                        "content": "Day 3: Enjoy a peaceful time at honeymoon point.<br>Capture stunning views of Mount Abu."
                            }
                }
            },
    
            "udaipur city palace": {
                "Day 1": {
                        "start date": "15 March 2025",
                        "start time": "8:00 AM",
                "Point 1": {
                        "name": "udaipur city palace entrance",
                        "content": "Day 1: Begin your exploration at the grand udaipur city palace.<br>Discover its beautiful courtyards, museums, and heritage."
                    },
                "Point 2": {
                        "name": "jagdish temple",
                        "content": "Day 1: Visit the historic jagdish temple near the palace.<br>Admire its stunning Indo-Aryan architecture."
                    },
                "Point 3": {
                        "name": "lake pichola boat ride",
                        "content": "Day 1: Enjoy a scenic boat ride on lake pichola.<br>Visit the famous Jag Mandir and Taj Lake Palace."
                    },
                    "end date": "15 March 2025",
                    "end time": "4:00 PM"
                    },
                "Day 2": {
                        "start date": "16 March 2025",
                        "start time": "8:00 AM",
                "Point 1": {
                        "name": "sajjangarh palace",
                        "content": "Day 2: Visit sajjangarh palace, also known as the monsoon palace.<br>Enjoy panoramic views of the city."
                    },
                "Point 2": {
                            "name": "saheliyon ki bari",
                            "content": "Day 2: Explore the beautiful gardens of saheliyon ki bari.<br>Enjoy the fountains, lotus pools, and marble pavilions."
                    },
                "Point 3": {
                        "name": "bagore ki haveli",
                        "content": "Day 2: Experience Rajasthani culture at bagore ki haveli.<br>Attend a folk dance and puppet show in the evening."
                    },
                    "end date": "16 March 2025",
                    "end time": "4:00 PM"
                    },
                "Day 3": {
                        "start date": "17 March 2025",
                        "start time": "8:00 AM",
                "Point 1": {
                        "name": "fateh sagar lake",
                        "content": "Day 3: Start your day at the serene fateh sagar lake.<br>Enjoy a peaceful walk and boat ride."
                    },
                "Point 2": {
                        "name": "shilpgram",
                        "content": "Day 3: Visit the rural arts and crafts complex, shilpgram.<br>Explore traditional Rajasthani handicrafts."
                    },
                "Point 3": {
                        "name": "sunset at karni mata temple",
                        "content": "Day 3: End your trip with a sunset view from karni mata temple.<br>Enjoy a ropeway ride to the temple."
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
                        "content": "Day 1: Begin your journey with a houseboat cruise through the picturesque backwaters of alleppey.<br>Experience the serene beauty and local village life."
                    },
                "Point 2": {
                        "name": "vembanad lake",
                        "content": "Day 1: Visit the stunning vembanad lake, Kerala’s longest lake.<br>Enjoy birdwatching and peaceful boat rides."
                    },
                "Point 3": {
                        "name": "marari beach",
                        "content": "Day 1: Relax at marari beach, a pristine and less crowded beach.<br>Enjoy sunset views and local seafood."
                    },
                    "end date": "15 March 2025",
                    "end time": "4:00 PM"
                    },
                "Day 2": {
                        "start date": "16 March 2025",
                        "start time": "8:00 AM",
                "Point 1": {
                        "name": "kumarakom bird sanctuary",
                        "content": "Day 2: Take an early morning trip to kumarakom bird sanctuary.<br>Spot rare migratory birds in their natural habitat."
                    },
                "Point 2": {
                        "name": "alleppey beach",
                        "content": "Day 2: Spend some time at alleppey beach.<br>Walk along the historic pier and enjoy the peaceful environment."
                    },
                "Point 3": {
                        "name": "mullakkal temple",
                        "content": "Day 2: Visit mullakkal temple, dedicated to Goddess Rajarajeshwari.<br>Explore its traditional Kerala-style architecture."
                    },
                    "end date": "16 March 2025",
                    "end time": "4:00 PM"
                     },
                "Day 3": {
                        "start date": "17 March 2025",
                        "start time": "8:00 AM",
                "Point 1": {
                        "name": "pathiramanal island",
                        "content": "Day 3: Explore pathiramanal island, a haven for birdwatchers.<br>Enjoy the natural beauty of this secluded spot."
                    },
                "Point 2": {
                        "name": "krishnapuram palace",
                        "content": "Day 3: Visit krishnapuram palace, an 18th-century palace with stunning murals.<br>Learn about Kerala’s royal history."
                    },
                "Point 3": {
                        "name": "sunset at alleppey lighthouse",
                        "content": "Day 3: End your trip with a breathtaking sunset at alleppey lighthouse.<br>Enjoy panoramic views of the coastline."
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
                        "content": "Day 1: Start your adventure at the majestic athirappilly waterfall.<br>Experience the roaring cascade and lush greenery."
                    },
                "Point 2": {
                        "name": "charpa waterfall",
                        "content": "Day 1: Visit charpa waterfall, a smaller but equally scenic waterfall nearby.<br>Enjoy the natural beauty and fresh air."
                    },
                "Point 3": {
                        "name": "thumburmuzhi butterfly park",
                        "content": "Day 1: Explore thumburmuzhi butterfly park.<br>Witness a variety of butterfly species in a vibrant ecosystem."
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
                        "content": "Day 1: Begin your day exploring the historic fort kochi.<br>Walk through the colonial streets and visit heritage sites."
                    },
                "Point 2": {
                        "name": "chinese fishing nets",
                        "content": "Day 1: See the iconic chinese fishing nets at the waterfront.<br>Experience the traditional fishing techniques of Kerala."
                    },
                "Point 3": {
                        "name": "mattancherry palace",
                        "content": "Day 1: Visit mattancherry palace, also known as the Dutch Palace.<br>Explore its beautiful murals and royal artifacts."
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
                        "content": "Day 1: Start your day at the picturesque lighthouse beach.<br>Enjoy sunbathing and beachside cafes."
                    },
                "Point 2": {
                        "name": "vizhinjam marine aquarium",
                        "content": "Day 1: Visit vizhinjam marine aquarium to explore marine life.<br>Learn about different species of fish and corals."
                    },
                "Point 3": {
                        "name": "kovalam art gallery",
                        "content": "Day 1: Explore kovalam art gallery showcasing local artworks.<br>Enjoy paintings and sculptures by Kerala artists."
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
                        "content": "Day 1: Begin your journey with a visit to Munnar’s lush tea gardens.<br>Learn about tea processing and enjoy fresh tea."
                    },
                "Point 2": {
                        "name": "mattupetty dam",
                        "content": "Day 1: Visit mattupetty dam, a scenic reservoir.<br>Enjoy a boat ride amidst misty hills."
                    },
                "Point 3": {
                        "name": "top station",
                        "content": "Day 1: Conclude your day with a trip to top station.<br>Enjoy breathtaking views of the Western Ghats."
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
                        "content": "Day 1: Start your journey from Pahalgam, the base for the Amarnath Yatra.<br>Enjoy the scenic beauty and acclimatize before the trek."
                    },
                "Point 2": {
                        "name": "chandanwari",
                        "content": "Day 1: Travel to Chandanwari, the starting point of the trek.<br>Experience the breathtaking views of snow-capped peaks."
                    },
                "Point 3": {
                        "name": "sheshnag lake",
                        "content": "Day 1: Trek to the picturesque Sheshnag Lake.<br>Relax and admire the serene beauty of the lake surrounded by mountains."
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
                        "content": "Day 1: Begin your exploration at the historic Bahu Fort.<br>Admire its ancient architecture and spiritual significance."
                    },
                "Point 2": {
                        "name": "bawe wali mata temple",
                        "content": "Day 1: Visit Bawe Wali Mata Temple inside the fort complex.<br>Seek blessings at this revered Hindu temple."
                    },
                "Point 3": {
                        "name": "bagh-e-bahu",
                        "content": "Day 1: Explore Bagh-e-Bahu, a beautiful terraced garden.<br>Enjoy panoramic views of Jammu city and the Tawi River."
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
                        "content": "Day 1: Begin your day with a relaxing Shikara ride on Dal Lake.<br>Admire the floating gardens and vibrant houseboats."
                    },
                "Point 2": {
                        "name": "nigeen lake",
                        "content": "Day 1: Visit the serene Nigeen Lake, an extension of Dal Lake.<br>Enjoy the peaceful surroundings and fewer crowds."
                    },
                "Point 3": {
                        "name": "floating market",
                        "content": "Day 1: Explore the unique floating market on Dal Lake.<br>Experience shopping from vendors on boats."
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
                        "content": "Day 1: Begin your journey with a scenic drive to Razdan Pass.<br>Enjoy breathtaking views of the snow-clad mountains."
                    },
                "Point 2": {
                        "name": "kishanganga river",
                        "content": "Day 1: Visit the Kishanganga River in Gurez Valley.<br>Relax by the riverbank and enjoy the peaceful surroundings."
                    },
                "Point 3": {
                        "name": "habba khatoon peak",
                        "content": "Day 1: Explore Habba Khatoon Peak, named after a famous Kashmiri poetess.<br>Marvel at the stunning mountain scenery."
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
                        "content": "Day 1: Start your day with an excursion to Nathatop.<br>Enjoy panoramic views and adventure activities like paragliding."
                    },
                "Point 2": {
                        "name": "sanasar lake",
                        "content": "Day 1: Visit the beautiful Sanasar Lake.<br>Experience boating and horse riding amidst the lush green meadows."
                    },
                "Point 3": {
                        "name": "nag temple",
                        "content": "Day 1: End your trip with a visit to the ancient Nag Temple.<br>Seek blessings and enjoy the spiritual atmosphere."
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
                        "content": "Day 1: Start your visit at the iconic Great Banyan Tree, the largest in the world.<br>Marvel at its massive canopy spread over several acres."
                    },
                "Point 2": {
                        "name": "palm house",
                        "content": "Day 1: Explore the Palm House with its collection of rare and exotic palm species.<br>Enjoy the lush greenery and diverse flora."
                    },
                "Point 3": {
                        "name": "lotus pond",
                        "content": "Day 1: Visit the scenic Lotus Pond, a peaceful spot within the garden.<br>Relax and take in the beauty of the blooming lotus flowers."
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
                        "content": "Day 2: Begin your journey from Darjeeling Railway Station.<br>Board the iconic toy train and experience a nostalgic ride."
                    },
                "Point 2": {
                        "name": "batasia loop",
                        "content": "Day 2: Stop at Batasia Loop, a scenic spiral railway track.<br>Enjoy breathtaking views of the surrounding hills and the Kanchenjunga range."
                    },
                "Point 3": {
                        "name": "ghoom monastery",
                        "content": "Day 2: Visit Ghoom Monastery, one of the oldest monasteries in Darjeeling.<br>Admire its serene atmosphere and Buddhist artifacts."
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
                        "content": "Day 2: Take a leisurely walk across the iconic Howrah Bridge.<br>Experience the bustling atmosphere and stunning river views."
                    },
                "Point 2": {
                        "name": "river ferry ride",
                        "content": "Day 2: Enjoy a boat ride on the Hooghly River.<br>Capture beautiful sunset views of the bridge."
                    },
                "Point 3": {
                        "name": "mallik ghat flower market",
                        "content": "Day 2: Visit Mallik Ghat Flower Market, one of the largest in Asia.<br>Experience the vibrant colors and fragrances of fresh flowers."
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
                        "content": "Day 3: Start your jungle safari at Sajnekhali Watchtower.<br>Spot rare wildlife, including the Bengal tiger and saltwater crocodiles."
                    },
                "Point 2": {
                        "name": "dobanki canopy walk",
                        "content": "Day 3: Experience the thrilling Dobanki Canopy Walk.<br>Enjoy a bird's-eye view of the mangrove forest."
                    },
                "Point 3": {
                        "name": "sundarbans delta",
                        "content": "Day 3: Take a boat cruise through the stunning Sundarbans Delta.<br>Witness the unique biodiversity of the world's largest mangrove forest."
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
                        "content": "Day 3: Explore the grand museum inside the Victoria Memorial.<br>Discover exhibits showcasing British colonial history and artwork."
                    },
                "Point 2": {
                        "name": "gardens of victoria memorial",
                        "content": "Day 3: Stroll through the beautifully landscaped gardens.<br>Admire the iconic white marble architecture and take memorable photographs."
                    },
                "Point 3": {
                        "name": "light and sound show",
                        "content": "Day 3: End your trip with the mesmerizing light and sound show.<br>Learn about Kolkata's rich history through a captivating visual presentation."
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

                    const placeItem = document.createElement("li");
                    placeItem.innerHTML = `<strong>📍 ${place.name || place.title}</strong><br><span>${place.content}</span>`;
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
            fetch("http://localhost:5000/api/visits/add", {
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
        

        const backButton = document.createElement("a");
        backButton.textContent = "⬅ Back";
        backButton.href = "/index.html";
        backButton.classList.add("action-button", "back-button");

        buttonContainer.appendChild(addToVisitButton);
        buttonContainer.appendChild(backButton);
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



