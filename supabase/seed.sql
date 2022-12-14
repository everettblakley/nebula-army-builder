INSERT INTO factions
  (name, description)
VALUES
  ('Exo Militia',	'Exo Militia are born and trained on earth. No one born off the Mother Planet is allowed to join this exclusive faction. The Exo Militia defend their home, their honor, and their way of life with a near-religious zeal. The Exo Militia consists of only the most highly ranked and physically fit humans, selected to fight for earth on their planet''s and their faction’s behalf. The Exo Militia have heavy armor and advanced technology, accompanied by space travel, that allows them to pose a threat to the alien races of the universe as well as to defend their own precious Earth.'),
  ('Legion',	    'The Legion is comprised of an elite sect of humanoids trained to serve a theocracy. Most Legionnaires are human hybrids, descended from humans that left earth and over the years interbred with various alien races whose home planets or space stations they inhabited. The Legion has a deep resentment for the Exo Militia, seeing them as xenophobic and archaic, and as a whole worships “The Creator,” a god whose tenets and military techniques are all centered around. The most talented of the Legion join E.R.Z.A, the Elite Response Zealot Army, which is tasked with maintaining the often chaotic provinces of the Legion and planning for potential conflicts with Earth or other worlds farther removed.'),
  ('Res''Ai',	    'Res''Ai are a mystery to most other races, they are an aggressive, parasitic species of creatures that operate as a singular hive-mind. Their fragmented, communal knowledge spanning thousands of years, ability to communicate across the universe in milliseconds, and invasive reproduction and parasitic assimilation have made this race one of the most deadly in all the universe. Res''Ai do not use any form of technological weapons. They rely solely on sheer numbers and varied weapons of physicality to dispatch their foes.'),
  ('Ugnix',	      'The Ugnix is a faction of allied races and worlds dedicated to a cause of expansion and military discipline. Viewing most other factions or indoctrinated worlds as inferior, the Ugnix fear nothing apart from the Res''Ai. The faction is led by two primary races, the Kinkalis and the Ghazneeks. With the faction itself controlled by a council of elders from these two races, each representing countless conquered worlds from the far reaches of the universe.')
;

INSERT INTO units 
  (name, faction, base_size, cost, initiative, defense, resilience, hit_points, movement) 
VALUES 
  ('Armored Supporter',   'Exo Militia', 35,   35, 2, 4, 5, 7,  6),
  ('Exo Commander',       'Exo Militia', 30,   35, 3, 3, 5, 4,  6),
  ('Exo Marine',          'Exo Militia', 35,   20, 3, 3, 6, 4,  6), 
  ('Exo Ranger',          'Exo Militia', 35,   25, 3, 3, 6, 4,  6), 
  ('Strider Tank',        'Exo Militia', NULL, 45, 1, 4, 6, 8,  8),
  ('Colossus',            'Exo Militia', NULL, 70, 7, 2, 4, 9,  6),
  ('Moon Arrows',         'Exo Militia', 80,   35, 5, 4, 4, 4,  10),
  ('Romulus',             'Exo Militia', 35,   35, 3, 3, 6, 3,  6),
  ('Sledgehammer',        'Exo Militia', 35,   30, 4, 4, 5, 4,  6),
  ('E.R.Z.A. Gunner',     'Legion',      30,   40, 4, 3, 6, 5,  5), 
  ('E.R.Z.A. Knight',     'Legion',      30,   15, 4, 3, 6, 4,  8), 
  ('E.R.Z.A. Leader',     'Legion',      30,   30, 4, 3, 6, 4,  8), 
  ('Legion Commander',    'Legion',      35,   30, 5, 2, 4, 4,  7), 
  ('Legion Trooper',      'Legion',      30,   20, 4, 2, 4, 3,  6), 
  ('Prime Mech',          'Legion',      50,   35, 2, 4, 5, 8,  6),
  ('The Crusader',        'Legion',      NULL, 75, 9, 2, 5, 10, 10),
  ('Samaritan',           'Legion',      50,   40, 4, 4, 5, 4,  5),
  ('Presbyter',           'Legion',      NULL, 40, 2, 5, 5, 7,  8 ),
  ('Hive Nightmare',      'Res''Ai',     50,   21, 3, 4, 5, 6,  10),
  ('Res''ai Corrupter',   'Res''Ai',     35,   8,  2, 2, 4, 2,  8), 
  ('Res''aigon',          'Res''Ai',     35,   12, 2, 3, 5, 3,  8), 
  ('Res''aigon Alpha',    'Res''Ai',     50,   18, 2, 3, 5, 4,  9), 
  ('Res''ailing',         'Res''Ai',     25,   7,  1, 2, 4, 2,  10),
  ('Crawler',             'Res''Ai',     35,   21, 2, 4, 6, 5,  8),
  ('Hive Gehenna',        'Res''Ai',     NULL, 65, 7, 4, 5, 8,  8),
  ('Dread Scout',         'Ugnix',       NULL, 35, 5, 3, 5, 8,  10), 
  ('Ghazneeks Commander', 'Ugnix',       35,   30, 5, 3, 6, 6,  5), 
  ('Ghazneeks Ranger',    'Ugnix',       25,   20, 6, 3, 6, 4,  6), 
  ('Ghazneeks Trooper',   'Ugnix',       25,   20, 6, 3, 6, 4,  6), 
  ('Kinkalis Commander',  'Ugnix',       35,   40, 2, 4, 6, 6,  6), 
  ('Kinkalis Trooper',    'Ugnix',       35,   25, 2, 4, 6, 5,  6),
  ('Tarkus',              'Ugnix',       NULL, 75, 8, 4, 6, 10, 6),
  ('Death Hornets',       'Ugnix',       25,   7,  6, 2, 4, 3,  6),
  ('Faustus Mount',       'Ugnix',       NULL, 40, 4, 5, 5, 7,  10)
; 