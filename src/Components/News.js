import React, { Component } from 'react'
import Newsitem from './Newsitem'

export class News extends Component {
  article =  [
      {
        "source": {
          "id": "bbc-news",
          "name": "BBC News"
        },
        "author": null,
        "title": "Women's T20 Cricket",
        "description": "Highlights of England and Pakistan's third T20 game from Headingley, Leeds.",
        "url": "https://www.bbc.co.uk/iplayer/episode/m001zlg5/womens-t20-cricket-2024-england-v-pakistan-third-t20-highlights",
        "urlToImage": "https://ichef.bbci.co.uk/images/ic/1200x675/p0hwk22m.jpg",
        "publishedAt": "2024-05-19T22:21:54Z",
        "content": "Highlights of England and Pakistan's third T20 game from Headingley, Leeds."
      },
      {
        "source": {
          "id": null,
          "name": "BBC News"
        },
        "author": "Stephan Shemilt",
        "title": "'English cricket must do without Anderson' - Key",
        "description": "Rob Key says English cricket will \"have to do without Jimmy Anderson\" after the fast bowler calls time on his legendary career against West Indies at Lord's in July.",
        "url": "https://www.bbc.com/sport/cricket/articles/cv2xx78ln2no",
        "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_sport/7f68/live/de01a1c0-1166-11ef-9602-b7eb005626eb.jpg",
        "publishedAt": "2024-05-13T21:01:05Z",
        "content": "Key discussed the future of Ollie Robinson, who possesses a one-year central contract, but had a disappointing tour of India.\r\nRobinson struggled with a back injury in the only Test of the five he pl… [+1125 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "BBC News"
        },
        "author": "BBC Sport",
        "title": "BBC signs new four-year audio deal for ICC events",
        "description": "The BBC signs a new four-year audio deal with the International Cricket Council (ICC) to broadcast all major global tournaments.",
        "url": "https://www.bbc.com/sport/cricket/articles/c14454kkg9ro",
        "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_sport/1321/live/7c2fa750-1e66-11ef-a133-cf78601b4a93.jpg",
        "publishedAt": "2024-05-30T09:31:22Z",
        "content": "The BBC has signed a new four-year audio deal with the International Cricket Council (ICC) to broadcast all major global tournaments. \r\nIt means the BBC will have ball-by-ball commentary on every tou… [+1407 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "BBC News"
        },
        "author": "BBC Sport",
        "title": "England 'will never change' style despite collapse",
        "description": "England fast bowler Lauren Bell says the team is committed to their positive approach despite a top order collapse in the first T20.",
        "url": "https://www.bbc.com/sport/cricket/articles/c4n1nndwveno",
        "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_sport/e7ed/live/8042e550-1394-11ef-bee9-6125e244a4cd.jpg",
        "publishedAt": "2024-05-16T15:17:07Z",
        "content": "Since Lewis' appointment in November 2022, England have prioritised an attacking brand of cricket and are prepared to accept the failures that may sometimes come with its territory. \r\nAnd Bell emphas… [+1071 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "NPR"
        },
        "author": "Ammad Omar",
        "title": "Team USA beats Pakistan in Cricket World Cup",
        "description": "Team USA just pulled off one of the biggest upsets in the sport’s history. They beat Pakistan in super-over in group play in this year’s World Cup.",
        "url": "https://www.npr.org/2024/06/06/nx-s1-4995667/team-usa-beats-pakistan-in-cricket-world-cup",
        "urlToImage": "https://media.npr.org/include/images/facebook-default-wide-s1400-c100.jpg",
        "publishedAt": "2024-06-06T20:22:31Z",
        "content": "Team USA just pulled off one of the biggest upsets in the sports history. They beat Pakistan in super-over in group play in this years World Cup."
      },
      {
        "source": {
          "id": "business-insider",
          "name": "Business Insider"
        },
        "author": "Chris Snyder,Clancy Morgan",
        "title": "Why English Willow Cricket Bats Are So Expensive",
        "description": "Top-grade cricket bats used by the pros are made out of English willow. They can sell for over $1,000.",
        "url": "https://www.businessinsider.com/why-indias-12-million-cricket-bat-industry-is-fueled-by-uk-trees-2024-6",
        "urlToImage": "https://i.insider.com/665f465cd0b8e1c832cbcd12?width=1200&format=jpeg",
        "publishedAt": "2024-06-04T20:01:43Z",
        "content": "Read the original article on Business Insider"
      },
      {
        "source": {
          "id": null,
          "name": "NPR"
        },
        "author": "Sally Herships",
        "title": "India defeats Pakistan119-113 in a match Cricket World Cup",
        "description": "Pakistan and archrival India met Sunday in one of the most anticipated matches in Cricket World Cup action. India came out on top. Pakistan, which lost to the USA last week, plays Canada next.",
        "url": "https://www.npr.org/2024/06/10/nx-s1-4995769/india-defeats-pakistan119-113-in-a-match-cricket-world-cup",
        "urlToImage": "https://media.npr.org/include/images/facebook-default-wide-s1400-c100.jpg",
        "publishedAt": "2024-06-10T07:42:53Z",
        "content": "Pakistan and archrival India met Sunday in one of the most anticipated matches in Cricket World Cup action. India came out on top. Pakistan, which lost to the USA last week, plays Canada next."
      },
      {
        "source": {
          "id": null,
          "name": "NPR"
        },
        "author": "Scott Simon",
        "title": "Saturday Sports: Stanley Cup finals, surprise cricket win for the U.S.",
        "description": "NPR's Scott Simon and ESPN's Michele Steele discuss the Stanley Cup Finals and a cricket miracle.",
        "url": "https://www.npr.org/2024/06/08/nx-s1-4994049/saturday-sports-stanley-cup-finals-surprise-cricket-win-for-the-u-s",
        "urlToImage": "https://media.npr.org/include/images/facebook-default-wide-s1400-c100.jpg",
        "publishedAt": "2024-06-08T12:00:34Z",
        "content": "NPR's Scott Simon and ESPN's Michele Steele discuss the Stanley Cup Finals and a cricket miracle."
      },
      {
        "source": {
          "id": "business-insider",
          "name": "Business Insider"
        },
        "author": "Cork Gaines",
        "title": "The 10 richest sports owners are worth a combined $549 billion. Here's how they made their fortunes.",
        "description": "Meet the top billionaire sports team owners who have teams in the NBA, NFL, NHL, MLB, soccer, and cricket.",
        "url": "https://www.businessinsider.com/richest-sports-billionaire-owners-nfl-nba-premier-league-cricket-wealthy-2024-5",
        "urlToImage": "https://i.insider.com/66577cd61cd3b1779041531c?width=1200&format=jpeg",
        "publishedAt": "2024-05-31T10:03:04Z",
        "content": "Steve Ballmer and Miriam Adelson are two of the wealthiest owners in sports.Getty Images\r\n\u003Cul\u003E\u003Cli\u003EThe 10 wealthiest sports owners collectively own 15 major sports teams.\u003C/li\u003E\u003Cli\u003EThese owners include … [+6435 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "BBC News"
        },
        "author": "Timothy Abraham",
        "title": "Police snipers at New York's T20 World Cup games",
        "description": "Security is tightened before the first T20 World Cup match in New York, including positioning police snipers at covert locations around the stadium.",
        "url": "https://www.bbc.com/sport/cricket/articles/cg33y6104qxo",
        "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_sport/c13b/live/8b07f920-215f-11ef-aead-6901c9f8b9ac.jpg",
        "publishedAt": "2024-06-03T05:14:16Z",
        "content": "BBC Sport also spoke to officers from the force's narcotics division who have been seconded from their normal duties to watch the four drop-in pitches on a rolling 24-hour basis to ensure they are no… [+1188 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "CNET"
        },
        "author": "Kevin Lynch",
        "title": "T20 Cricket World Cup Livestream: Pakistan vs. Canada From Anywhere - CNET",
        "description": "The Shaheens look to stay alive in the tournament as they take on the Canucks in New York.",
        "url": "https://www.cnet.com/tech/services-and-software/t20-cricket-world-cup-livestream-pakistan-vs-canada-from-anywhere/",
        "urlToImage": "https://www.cnet.com/a/img/resize/b0a5cf2422480a4a8e9fcd4a57df369327da73d8/hub/2024/06/11/52af1257-c88a-40d2-886f-1cd5026cd2e9/gettyimages-2156820270.jpg?auto=webp&fit=crop&height=675&width=1200",
        "publishedAt": "2024-06-11T14:00:09Z",
        "content": "After consecutive defeats from the opening two T20 World Cup matches, it's do-or-die for Pakistan know they can't afford to lose today as they take on Canada in this vital pool stage match. \r\nThe Sha… [+5400 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "NPR"
        },
        "author": "Steve Inskeep",
        "title": "Cricket World Cup: U.S. men's team pulls of a major upset by beating Pakistan",
        "description": "The U.S. men's team scored a big win in the cricket World Cup when it beat powerhouse Pakistan. The U.S. is co-hosting the tournament for the first time, along with the West Indies.",
        "url": "https://www.npr.org/2024/06/07/nx-s1-4995109/cricket-world-cup-u-s-mens-team-pulls-of-a-major-upset-by-beating-pakistan",
        "urlToImage": "https://media.npr.org/include/images/facebook-default-wide-s1400-c100.jpg",
        "publishedAt": "2024-06-07T07:38:51Z",
        "content": "The U.S. men's team scored a big win in the cricket World Cup when it beat powerhouse Pakistan. The U.S. is co-hosting the tournament for the first time, along with the West Indies."
      },
      {
        "source": {
          "id": null,
          "name": "NPR"
        },
        "author": "Ayana Archie",
        "title": "The U.S. defeats Pakistan in a dramatic upset at the cricket World Cup",
        "description": "Cricket is one of the world’s most popular sports, with about 2.5 billion fans. Several of the U.S. team’s starting players are from other countries, including India, Pakistan and New Zealand.",
        "url": "https://www.npr.org/2024/06/07/g-s1-3363/u-s-pakistan-cricket-world-cup",
        "urlToImage": "https://npr.brightspotcdn.com/dims3/default/strip/false/crop/5219x2937+0+333/resize/1400/quality/100/format/jpeg/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2F3b%2Fd2%2Febe004e5443eb088215260749e47%2Fap24158717090869.jpg",
        "publishedAt": "2024-06-07T07:42:55Z",
        "content": "In a dramatic upset, the U.S. cricket team defeated Pakistan Thursday in this years men's T20 championship tournament.\r\nThe game went to super over, or the equivalent of extra innings in baseball. Pa… [+674 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "NPR"
        },
        "author": "Omkar Khandekar",
        "title": "How to be a cricket fan when you're new to the sport",
        "description": "The U.S. men's team plays India in the T20 World Cup in suburban New York City. India advancing in the tournament is normal, but for the U.S. team it's unexpected. It has already beat Pakistan.",
        "url": "https://www.npr.org/2024/06/12/nx-s1-4998313/how-to-be-a-cricket-fan-when-youre-new-to-the-sport",
        "urlToImage": "https://media.npr.org/include/images/facebook-default-wide-s1400-c100.jpg",
        "publishedAt": "2024-06-12T08:43:16Z",
        "content": "The U.S. men's team plays India in the T20 World Cup in suburban New York City. India advancing in the tournament is normal, but for the U.S. team it's unexpected. It has already beat Pakistan."
      },
      {
        "source": {
          "id": null,
          "name": "ABC 4"
        },
        "author": "Jonathon Sharp",
        "title": "Mormon cricket ‘sludge’ blamed for crashes in northern Nevada",
        "description": "The guts of runover Mormon crickets and rain are a treacherous combination. Over the weekend, officials said the slick “sludge” caused several crashes in...",
        "url": "https://www.abc4.com/news/nevada/mormon-cricket-sludge-blamed-for-crashes-in-northern-nevada/",
        "urlToImage": "https://media.zenfs.com/en/ktvx_articles_781/2391b44ca37fb7fe6214b111d3f29a63",
        "publishedAt": "2024-05-29T18:17:07Z",
        "content": "SALT LAKE CITY (ABC4) The guts of runover Mormon crickets and rain are a treacherous combination. Over the weekend, officials said the slick sludge caused several crashes in northern Nevada.\r\nEureka … [+2073 chars]"
      },
      {
        "source": {
          "id": "time",
          "name": "Time"
        },
        "author": "Chad de Guzman",
        "title": "Americans Celebrate Shock Win Over Pakistan in Cricket World Cup",
        "description": "Team USA’s victory over powerhouse of the sport Pakistan has been described as one of the most stunning upsets in cricket history.",
        "url": "https://time.com/6986541/cricket-us-pakistan-shock-win-reactions/",
        "urlToImage": "https://api.time.com/wp-content/uploads/2024/06/team-usa-cricket.jpg?quality=85&w=1024&h=628&crop=1",
        "publishedAt": "2024-06-07T03:30:00Z",
        "content": "The U.S. cricket team toppled Pakistan, a powerhouse of the sport, in a stunning upset at the Mens T20 World Cup in Dallas on Thursday.\r\nThe U.S., which is co-hosting the tournament with the West Ind… [+2439 chars]"
      },
      {
        "source": {
          "id": "time",
          "name": "Time"
        },
        "author": "Anna Gordon",
        "title": "Trump Speaks Out About VP Hopeful Kristi Noem’s Controversial Dog-Killing Story",
        "description": "Noem received widespread backlash  when she admitted to shooting and killing her 14-month old dog, Cricket.",
        "url": "https://time.com/6978725/donald-trump-kristi-noem-dog-kill-story-response/",
        "urlToImage": "https://api.time.com/wp-content/uploads/2024/05/1.png?w=1200&h=628&crop=1",
        "publishedAt": "2024-05-16T12:00:34Z",
        "content": "Donald Trump reportedly acknowledged South Dakota Governor Kristi Noems recent controversies at a private fundraiser in Manhattan on Tuesday night. Noem, a Republican, received widespread backlash wh… [+2608 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Android Police"
        },
        "author": "Samuel Contreras",
        "title": "Best Cricket plans in 2024",
        "description": "Cricket is a prepaid carrier with fixed and unlimited data plans that are a good fit for single lines and families",
        "url": "https://www.androidpolice.com/best-cricket-plans/",
        "urlToImage": "https://static1.anpoimages.com/wordpress/wp-content/uploads/2024/03/cricket-store-2-2.jpg",
        "publishedAt": "2024-06-13T11:31:14Z",
        "content": "Cricket Wireless is an AT&amp;T-owned prepaid carrier that mostly offers prepaid cell phone plans. Cricket uses AT&amp;T for all of its coverage, which includes 5G. Cricket’s plans are priced simply,… [+10117 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "BBC News"
        },
        "author": null,
        "title": "College pays tribute to teenager killed in crash",
        "description": "Dafydd Hûw Craven-Jones, 18, and his front-seat passenger died after a single-vehicle crash on Saturday",
        "url": "https://www.bbc.com/news/articles/cd11l7qzveqo",
        "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/1214/live/6e344370-1d9b-11ef-80aa-699d54c46324.jpg",
        "publishedAt": "2024-05-29T10:04:15Z",
        "content": "Shyamantha Asokan,BBC News, West Midlands\r\nDafydd Hûw Craven-Jones (left), who studied at Ellesmere College, and Morgan Jones died in the crash on Saturday\r\nA teenager who died in a car crash at the … [+1919 chars]"
      },
      {
        "source": {
          "id": "espn",
          "name": "ESPN"
        },
        "author": "Cameron Ponsonby",
        "title": "A day to believe cricket is not just an American Dream",
        "description": "The likes of Netravalkar, Monank, Nitish and Kenjige highlight USA cricket's depth and ability below big names | ESPN.com",
        "url": "https://www.espn.com/cricket/story/_/id/40295814/a-day-believe-cricket-not-just-american-dream",
        "urlToImage": "https://a2.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1437157_1296x729.jpg",
        "publishedAt": "2024-06-07T13:22:15Z",
        "content": "Saurabh Netravalkar moved to the United States in 2015. He was 23 and had accepted a difficult reality. He wasn't going to be a professional cricketer.\r\n\"It was a very emotional call,\" Netravalkar sa… [+6155 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "BBC News"
        },
        "author": null,
        "title": "The US cricket star who once played for India",
        "description": "Saurabh Netravalkar once represented India. He will now take on his former team in the T20 cricket World Cup.",
        "url": "https://www.bbc.com/news/articles/c511x170v2wo",
        "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/000e/live/09330b40-27ec-11ef-80aa-699d54c46324.jpg",
        "publishedAt": "2024-06-12T01:32:36Z",
        "content": "By Janhavee Moole, BBC Marathi\r\nSaurabh Netravalkar will be part of the US team facing Indian cricketers in a T20 World Cup match on Wednesday\r\nIn 2015, Saurabh Netravalkar gave up his dreams of play… [+6564 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "The Atlantic"
        },
        "author": "Joseph O’Neill",
        "title": "America, Cricket’s Next Frontier",
        "description": "Team USA’s historic win in the current global tournament was a shot heard around the world. Now it just needs a domestic audience.",
        "url": "https://www.theatlantic.com/ideas/archive/2024/06/america-cricket-next-frontier/678656/?utm_source=feed",
        "urlToImage": null,
        "publishedAt": "2024-06-11T18:04:00Z",
        "content": "Tomorrow, a cricket match will take place in a pop-up stadium on Long Island with turf flown in from Australia. From the venue’s north stand, you can just about discern the tallest skyscrapers and br… [+6386 chars]"
      },
      {
        "source": {
          "id": "business-insider",
          "name": "Business Insider"
        },
        "author": "Jordan Hart",
        "title": "The unusual hobbies of Tim Cook, Mark Zuckerberg, Jeff Bezos and more",
        "description": "CEOs like Elon Musk and Mark Zuckerberg aren't just all about work. Here are some of the unusual hobbies of tech execs, from gaming to yacht racing.",
        "url": "https://www.businessinsider.com/unusual-hobbies-of-tech-ceos-cook-zuckerberg-bezos-2024-5",
        "urlToImage": "https://i.insider.com/664b6ecc9fc063e829b2cf3f?width=1200&format=jpeg",
        "publishedAt": "2024-05-21T09:33:01Z",
        "content": "Elon Musk (left), Tim Cook (center), and Mark Zuckerberg (right) all have their own ways of spending time outside of running companies.Ap Images; Bryan Erickson/ BI\r\n\u003Cul\u003E\u003Cli\u003EThe leaders of tech's big… [+6901 chars]"
      },
      {
        "source": {
          "id": "abc-news",
          "name": "ABC News"
        },
        "author": "Josh Margolin",
        "title": "Law enforcement on alert for upcoming Cricket World Cup in New York",
        "description": "The ICC Men's T20 World Cup takes place next month.",
        "url": "https://abcnews.go.com/US/law-enforcement-alert-upcoming-cricket-world-cup-new/story?id=110641401",
        "urlToImage": "https://i.abcnewsfe.com/a/d05160f4-3fb8-4d8b-a449-a5fee9428c41/cricket-world-cup-gty-thg-240529_1716995442335_hpMain_16x9.jpg?w=1600",
        "publishedAt": "2024-05-29T17:55:55Z",
        "content": "The upcoming Cricket World Cup in Nassau County, New York, along with associated events in New York City, could be viewed by extremists as \"an attractive opportunity to perpetrate acts of violence or… [+1271 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "The New Yorker"
        },
        "author": "Simon Webster",
        "title": "If You Build It (a Cricket Stadium on Long Island), Will They Come?",
        "description": "Eisenhower Park, the weedy patch where the batters and bowlers of Long Island play their rec games, is being transformed to host the biggest event in the sport, Simon Webster writes.",
        "url": "https://www.newyorker.com/magazine/2024/06/10/if-you-build-a-cricket-stadium-on-long-island-will-they-come",
        "urlToImage": "https://media.newyorker.com/photos/665a47fde6a6c85b07673ccd/16:9/w_1280,c_limit/r44369illuweb-site.jpg",
        "publishedAt": "2024-06-03T10:00:00Z",
        "content": "Late last year, it was announced that New York would host a handful of crickets T20 World Cup games, in June. One thing was missing: a venue. Since then, a nearly thirty-four-thousand-seat temporary … [+4331 chars]"
      },
      {
        "source": {
          "id": "espn",
          "name": "ESPN"
        },
        "author": "Alagappan Muthu",
        "title": "Shock-seeking USA faces India with eye on Super Eight spot",
        "description": "Read and watch the preview for ICC Men's T20 World Cup 2024 2024 25th Match, Group A, United States of America vs India only on ESPNcricinfo.com",
        "url": "https://www.espn.com/cricket/series/8604/preview/1415725/united-states-america-vs-india-25th-match-group-mens-t20-world-cup",
        "urlToImage": "https://a.espncdn.com/i/cricket/cricinfo/1436575_900x506.jpg",
        "publishedAt": "2024-06-12T13:22:23Z",
        "content": "Match details\r\nIndia vs USANew York, 10.30am local, 8.00pm IST, 2.30pm GMT\r\nBig picture: Party in the USA\r\nThe New York Times is writing articles about it. Drake has been making money off it. Basebal… [+5099 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Digital Trends"
        },
        "author": "Tim Keeney",
        "title": "USA vs India T20 live stream: Can you watch Cricket for free?",
        "description": "Team USA takes on India in the 2024 T20 Cricket World Cup today, and we have all the best ways you can watch a live stream of the match in the US.",
        "url": "https://www.digitaltrends.com/movies/usa-vs-india-t20-live-stream-june-2024/",
        "urlToImage": "https://www.digitaltrends.com/wp-content/uploads/2020/02/cricket-on-espn-plus-featured-1.jpg?resize=1200%2C630&p=1",
        "publishedAt": "2024-06-11T22:00:23Z",
        "content": "Group A leaders USA and India meet in the 2024 T20 World Cup today at Nassau County International Cricket Stadium in New York on Wednesday morning. Both sides look like good bets to advance to the Su… [+3336 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Yahoo Entertainment"
        },
        "author": "Kris Holt",
        "title": "June’s PlayStation Plus offerings include PS VR2 games for the first time",
        "description": "Sony\r\n has revealed the lineup of games\r\n PlayStation Plus members can add to their library in June. For the first time, players will have access to PS VR2\r\n titles through the Premium plan.\nFirst up, subscribers on all tiers will be able to claim SpongeBob S…",
        "url": "https://consent.yahoo.com/v2/collectConsent?sessionId=1_cc-session_99ad4f89-c11f-42d3-b79b-08a4442f8adb",
        "urlToImage": null,
        "publishedAt": "2024-05-28T14:00:41Z",
        "content": "If you click 'Accept all', we and our partners, including 237 who are part of the IAB Transparency &amp; Consent Framework, will also store and/or access information on a device (in other words, use … [+678 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Yahoo Entertainment"
        },
        "author": "Danny Gallagher",
        "title": "PlayStation Plus June offerings include Monster Hunter Rise and three LEGO games",
        "description": "There’s a whole new crop of games headed to your PlayStation console if you’re a subscriber to one of Sony’s various PlayStation Plus tiers. The additional games for the June update include 14 new titles featuring PS5-only games like the medieval RPG Crusader…",
        "url": "https://consent.yahoo.com/v2/collectConsent?sessionId=1_cc-session_f95f4365-c945-41c5-9b7d-ca492b67c458",
        "urlToImage": null,
        "publishedAt": "2024-06-12T20:23:07Z",
        "content": "If you click 'Accept all', we and our partners, including 238 who are part of the IAB Transparency &amp; Consent Framework, will also store and/or access information on a device (in other words, use … [+678 chars]"
      },
      {
        "source": {
          "id": "business-insider",
          "name": "Business Insider"
        },
        "author": "Shubhangi Goel",
        "title": "India's once-hot startup Byju's was valued at $22 billion. Now, HSBC and BlackRock say it's worth nothing.",
        "description": "In a first-quarter summary for one of its funds, Blackrock valued its stake in Byju's at $0.",
        "url": "https://www.businessinsider.com/blackrock-hsbc-funds-byjus-startup-valuation-zero-edtech-india-raveendran-2024-6",
        "urlToImage": "https://i.insider.com/66629d1ed0b8e1c832cce52b?width=1200&format=jpeg",
        "publishedAt": "2024-06-07T07:40:44Z",
        "content": "Byju CEO Byju Raveendran oversees a company navigating several crises.MANJUNATH KIRAN/AFP via Getty Images\r\n\u003Cul\u003E\u003Cli\u003EHSBC and BlackRock have written off their investments in once-hot Indian tech compa… [+2437 chars]"
      },
      {
        "source": {
          "id": "bbc-news",
          "name": "BBC News"
        },
        "author": null,
        "title": "Women's ODI Cricket",
        "description": "The best of the action as England took on Pakistan in the final game of their ODI series.",
        "url": "https://www.bbc.co.uk/iplayer/episode/m001ztc5/womens-odi-cricket-2024-england-v-pakistan-third-odi-highlights",
        "urlToImage": "https://ichef.bbci.co.uk/images/ic/1200x675/p0hzhvnv.jpg",
        "publishedAt": "2024-05-29T22:20:59Z",
        "content": "Watch the best of the action as England took on Pakistan in the final game of their three-match ODI series from The County Ground in Chelmsford."
      },
      {
        "source": {
          "id": null,
          "name": "BBC News"
        },
        "author": null,
        "title": "Engineers recreate 1900s cricket bowling machine",
        "description": "\"It's like no bowler I've ever faced before,\" says one cricketer.",
        "url": "https://www.bbc.com/news/articles/cjmmypey2ngo",
        "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/2af7/live/0222fe10-2633-11ef-baa7-25d483663b8e.jpg",
        "publishedAt": "2024-06-10T05:14:18Z",
        "content": "By Neve Gordon-Farleigh &amp; PA Media, BBC News, Cambridgeshire\r\nThe engineers had no drawings to use from when the contraption was made, only a black and white photograph and a patent application \r… [+2338 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "ReadWrite"
        },
        "author": "Petar Jovanović",
        "title": "‘5th Scape’ Raises $6 Million in Crypto Presale – Best VR/AR Coin to Buy Now?",
        "description": "5th Scape has reached a milestone by surpassing the $6 million mark in its ongoing crypto presale this week. Let’s… Continue reading ‘5th Scape’ Raises $6 Million in Crypto Presale – Best VR/AR Coin to Buy Now?\nThe post ‘5th Scape’ Raises $6 Million in Crypto…",
        "url": "https://readwrite.com/5th-scape-raises-6-million-in-crypto-presale-best-vr-ar-coin-to-buy-now/",
        "urlToImage": "https://readwrite.com/wp-content/uploads/2024/05/exclusive-game-advantage.png",
        "publishedAt": "2024-05-26T11:17:08Z",
        "content": "5th Scape has reached a milestone by surpassing the $6 million mark in its ongoing crypto presale this week.\r\nLet’s explore why this project could potentially be one of the best VR/AR cryptos to inve… [+3542 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "BBC News"
        },
        "author": "BBC Sport",
        "title": "Father's death reason for Woakes' cricket absence",
        "description": "England and Warwickshire all-rounder Chris Woakes says he will return to playing cricket \"when the time is right\" following the death of his father.",
        "url": "https://www.bbc.com/sport/cricket/articles/czrr4zyy0n4o",
        "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_sport/1ba9/live/cd0f24b0-1f93-11ef-a13a-0b8c563da930.jpg",
        "publishedAt": "2024-05-31T21:35:43Z",
        "content": "England and Warwickshire all-rounder Chris Woakes says he will return to playing cricket \"when the time is right\" following the death of his father.\r\nThe 35-year-old has not featured for his county t… [+1106 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Variety"
        },
        "author": "Tim Chan",
        "title": "How to Get India vs. Pakistan Cricket World Cup Tickets: See Latest Prices, Promo Codes for ICC T20 World Cup",
        "description": "Cricket fans in the U.S. are in for a treat this weekend as two of the biggest cricket nations in the world face-off at the ICC Men’s T20 World Cup. Pakistan and India take to the pitch in New York on Sunday for a group stage match that’s expected to pack the…",
        "url": "https://variety.com/2024/shopping/athletes/find-india-pakistan-cricket-world-cup-tickets-buy-online-promo-codes-1236029507/",
        "urlToImage": "https://variety.com/wp-content/uploads/2024/06/GettyImages-2156225253.jpg?w=1000&h=563&crop=1",
        "publishedAt": "2024-06-08T04:19:57Z",
        "content": "If you purchase an independently reviewed product or service through a link on our website, Variety may receive an affiliate commission.Cricket fans in the U.S. are in for a treat this weekend as two… [+2431 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "BBC News"
        },
        "author": "Timothy Abraham",
        "title": "US cricket awaits its authentic Donald Duck moment",
        "description": "The USA co-hosts the T20 World Cup at the start of what feels like a now or never period for cricket in the country. Where will it succeed and fail?",
        "url": "https://www.bbc.com/sport/cricket/articles/cqqq27rxlz5o",
        "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_sport/bd37/live/b0709d30-1f5b-11ef-9347-7f244eca80a1.jpg",
        "publishedAt": "2024-06-01T11:05:38Z",
        "content": "ICC's estimates of 50m-60m cricket fans in the US might feel hugely optimistic.\r\nOne in five Americans questioned in a recent YouGov poll, external did express an interest in the T20 World Cup and 52… [+2262 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "BBC News"
        },
        "author": null,
        "title": "Hunting for New York City's lost cricket ground",
        "description": "BBC Sport searches for a significant piece of cricket history on the streets of Manhattan.",
        "url": "https://www.bbc.com/sport/cricket/videos/c9eegxxpemro",
        "urlToImage": "https://ichef.bbci.co.uk/ace/standard/1024/cpsprodpb/a4c5/live/23d9cec0-22b0-11ef-baa7-25d483663b8e.jpg",
        "publishedAt": "2024-06-04T22:10:26Z",
        "content": "Hunting for New York City's lost cricket ground. Video, 00:03:15Hunting for New York City's lost cricket ground"
      },
      {
        "source": {
          "id": null,
          "name": "Phandroid - News for Android"
        },
        "author": "Ajit Singh",
        "title": "T-Mobile Bill Set to Go Up With Plan Hike? Check Out These Best 5 Alternatives",
        "description": "Check out these best T-Mobile alternatives to save up on your mobile phone bills.\nThe post T-Mobile Bill Set to Go Up With Plan Hike? Check Out These Best 5 Alternatives appeared first on Phandroid.",
        "url": "https://phandroid.com/2024/05/28/t-mobile-best-5-alternatives/",
        "urlToImage": "https://phandroid.com/wp-content/uploads/2017/11/t-mobile-legere.jpg",
        "publishedAt": "2024-05-28T13:59:51Z",
        "content": "T-Mobile is preparing to increase prices for some of the legacy plans. This was first reported a few days ago and the hike is expected to be anywhere from $2 to $5 per line based on the plan. The aff… [+6772 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "BBC News"
        },
        "author": "BBC Sport",
        "title": "Bowler Carse banned for historic betting offences",
        "description": "England and Durham bowler Brydon Carse is suspended from cricket for three months for a historic breach of betting rules.",
        "url": "https://www.bbc.com/sport/cricket/articles/cekkvp420lgo",
        "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_sport/72c7/live/be08e6a0-1f6f-11ef-8a1f-cd910faea9ef.jpg",
        "publishedAt": "2024-05-31T17:37:31Z",
        "content": "England and Durham bowler Brydon Carse has been suspended from cricket for three months for historic breaches of betting rules, effective immediately.\r\nThe South Africa-born England international, 28… [+1842 chars]"
      },
      {
        "source": {
          "id": "al-jazeera-english",
          "name": "Al Jazeera English"
        },
        "author": "Al Jazeera Staff",
        "title": "Preview: India vs Ireland – ICC Men’s T20 World Cup 2024 Group A match",
        "description": "India and Ireland begin their T20 World Cup campaign at New York's mysterious new cricket stadium.",
        "url": "https://www.aljazeera.com/sports/2024/6/5/preview-india-vs-ireland-icc-mens-t20-world-cup-2024-group-a-match",
        "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2024/06/AP24153648204892-1-1717568855.jpg?resize=1920%2C1440",
        "publishedAt": "2024-06-05T08:12:32Z",
        "content": "Who:India vs IrelandWhat:ICC Mens T20 World Cup 2024 Group A matchWhen: Wednesday, June 5, 10:30am local time (14:30 GMT)Where:Nassau County International Cricket Stadium, New York, US\r\nNearly six mo… [+4475 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "NPR"
        },
        "author": "Suzanne Nuyen",
        "title": "Trump's potential VP candidates; NPR's summer TV picks",
        "description": "These are the pros and cons of 10 Republicans Trump could choose for a running mate. NPR critics share their most highly anticipated TV shows of the summer.",
        "url": "https://www.npr.org/2024/06/07/g-s1-3382/up-first-newsletter-trump-vice-president-summer-tv",
        "urlToImage": "https://media.npr.org/assets/img/2023/12/16/gettyimages-1425979534resize_wide-1e330e043e5918b39696c873fc2d3a461e39c0df.jpg?s=1400&c=100&f=jpeg",
        "publishedAt": "2024-06-07T12:09:37Z",
        "content": "Good morning. You're reading the Up First newsletter. Subscribe here to get it delivered to your inbox, and listen to the Up First podcast for all the news you need to start your day.\r\nToday's stop s… [+4470 chars]"
      },
      {
        "source": {
          "id": "al-jazeera-english",
          "name": "Al Jazeera English"
        },
        "author": "Sadef Ali Kully",
        "title": "T20 World Cup brings cricket ‘home’ for New York’s South Asian community",
        "description": "New York's semi-professional cricketers hope the T20 World Cup will inspire the next generation to play the game.",
        "url": "https://www.aljazeera.com/sports/2024/6/4/cricket-in-new-york-icc-t20-world-cup-2024-long-island-india-vs-pakistan-match",
        "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2024/06/IMG3_sadef_cric-copy-1717421724.jpg?resize=1920%2C1440",
        "publishedAt": "2024-06-04T19:50:18Z",
        "content": "Long Island, New York  On a cool Sunday afternoon in May, Anjum Sabar captain of PakAmerica Cricket Club watched on as his team batted against Hawks Cricket Club on a grassy field at Eisenhower Park … [+6775 chars]"
      },
      {
        "source": {
          "id": "al-jazeera-english",
          "name": "Al Jazeera English"
        },
        "author": "Melinda Farrell",
        "title": "Will the ICC T20 World Cup 2024 help cricket finally take off in the US?",
        "description": "Cricket has been historically unsuccessful in winning over the US, so how can the T20 World Cup help flip the script?",
        "url": "https://www.aljazeera.com/sports/2024/6/1/icc-t20-world-cup-2024-will-cricket-finally-take-off-in-north-america-usa-vs-canada",
        "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2024/06/AFP__20240222__34JZ68H__v1__HighRes__CricketWcT20100days-1717237265.jpg?resize=1920%2C1440",
        "publishedAt": "2024-06-01T11:10:12Z",
        "content": "Is cricket really coming to the United States?\r\nThe game has long desired to conquer the land of dreams, and it wont get a better shot at finally making it big.\r\nlist of 4 itemslist 1 of 4\r\nlist 2 of… [+7477 chars]"
      },
      {
        "source": {
          "id": "bleacher-report",
          "name": "Bleacher Report"
        },
        "author": "zach bachar",
        "title": "USA Upsets Pakistan at 2024 T20 Cricket World Cup; Lead Group A, Eye Knockout Bracket",
        "description": "The United States continued an impressive run in the T20 World Cup on Thursday, securing an improbable upset victory over Pakistan. After opening up the…",
        "url": "https://bleacherreport.com/articles/10123840-usa-upsets-pakistan-at-2024-t20-cricket-world-cup-lead-group-a-eye-knockout-bracket",
        "urlToImage": "https://media.bleacherreport.com/image/upload/c_fill,g_faces,w_3800,h_2000,q_95/v1717704523/xa3iyd0hw19md48wkbpo.jpg",
        "publishedAt": "2024-06-06T20:19:54Z",
        "content": "ANDREW CABALLERO-REYNOLDS/AFP via Getty Images\r\nThe United States continued an impressive run in the T20 World Cup on Thursday, securing an improbable upset victory over Pakistan.\r\nAfter opening up t… [+2672 chars]"
      },
      {
        "source": {
          "id": "bleacher-report",
          "name": "Bleacher Report"
        },
        "author": "zach bachar",
        "title": "Team USA Stuns Pakistan in Massive Upset at 2024 T20 Cricket World Cup",
        "description": "The United States continued an impressive run in the T20 World Cup on Thursday, securing an improbable upset victory over Pakistan. After opening up the…",
        "url": "https://bleacherreport.com/articles/10123840-team-usa-stuns-pakistan-in-massive-upset-at-2024-t20-cricket-world-cup",
        "urlToImage": "https://media.bleacherreport.com/image/upload/c_fill,g_faces,w_3800,h_2000,q_95/v1717704523/xa3iyd0hw19md48wkbpo.jpg",
        "publishedAt": "2024-06-06T20:19:54Z",
        "content": "ANDREW CABALLERO-REYNOLDS/AFP via Getty Images\r\nThe United States continued an impressive run in the T20 World Cup on Thursday, securing an improbable upset victory over Pakistan.\r\nAfter opening up t… [+1598 chars]"
      },
      {
        "source": {
          "id": "bleacher-report",
          "name": "Bleacher Report"
        },
        "author": "Joseph Zucker",
        "title": "Aaron Jones, USA Excite Cricket Fans in Historic T20 World Cup 2024 Win vs. Canada",
        "description": "The United States opened the T20 World Cup with a dominant victory over Canada by seven wickets on Saturday in Grand Prairie, Texas. Aaron Jones was the…",
        "url": "https://bleacherreport.com/articles/10123304-aaron-jones-usa-excite-cricket-fans-in-historic-t20-world-cup-2024-win-vs-canada",
        "urlToImage": "https://media.bleacherreport.com/image/upload/x_35,y_27,w_1744,h_1161,c_crop/c_fill,g_faces,w_3800,h_2000,q_95/v1717327589/tvxgbfmhkiuqrlq6ygsq.jpg",
        "publishedAt": "2024-06-02T11:57:42Z",
        "content": "ANDREW CABALLERO-REYNOLDS/AFP via Getty Images\r\nThe United States opened the T20 World Cup with a dominant victory over Canada by seven wickets on Saturday in Grand Prairie, Texas.\r\nAaron Jones was t… [+5309 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Variety"
        },
        "author": "Tim Chan",
        "title": "India vs. Pakistan Cricket World Cup Livestream: How to Watch the T20 Match Online for Free",
        "description": "The 2024 ICC T20 Cricket World Cup is underway and one of the most anticipated matchups takes place this weekend as India faces off against Pakistan in a group stage match airing live on Willow TV. Pakistan is coming off a stunning loss to the U.S. team in Da…",
        "url": "https://variety.com/2024/shopping/athletes/how-to-watch-india-pakistan-t20-cricket-world-cup-match-online-free-1236029205/",
        "urlToImage": "https://variety.com/wp-content/uploads/2024/06/GettyImages-2156379189.jpg?w=1000&h=563&crop=1",
        "publishedAt": "2024-06-09T00:43:00Z",
        "content": "If you purchase an independently reviewed product or service through a link on our website, Variety may receive an affiliate commission.\r\nThe 2024 ICC T20 Cricket World Cup is underway and one of the… [+2732 chars]"
      },
      {
        "source": {
          "id": "al-jazeera-english",
          "name": "Al Jazeera English"
        },
        "author": "Al Jazeera Staff",
        "title": "Australia vs England at T20 World Cup: Head-to-head, form, team news, pitch",
        "description": "The two limited-overs world champions meet to renew their century-old cricket rivalry at the T20 World Cup 2024.",
        "url": "https://www.aljazeera.com/sports/2024/6/8/australia-vs-england-at-t20-world-cup-head-to-head-form-team-news-pitch",
        "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2024/05/2024-05-30T205713Z_2011779077_UP1EK5U1M7B67_RTRMADP_3_CRICKET-T20-ENG-PAK-1717104510.jpg?resize=1920%2C1440",
        "publishedAt": "2024-06-08T09:01:22Z",
        "content": "Who:Australia vs EnglandWhat:ICC T20 World Cup 2024 Group B matchWhen:Saturday, June 8, 1pm local time (17:00 GMT)Where:Kensington Oval, Bridgetown, BarbadosHow to follow: Al Jazeera will have live t… [+4595 chars]"
      },
      {
        "source": {
          "id": "al-jazeera-english",
          "name": "Al Jazeera English"
        },
        "author": "Hafsa Adil",
        "title": "India vs Pakistan, ‘nagin dance’, Ashes : A look at cricket’s top rivalries",
        "description": "A bloody partition, a mock obituary and a serpentine dance – cricket has a history of bitter rivalries.",
        "url": "https://www.aljazeera.com/sports/2024/6/8/crickets-biggest-rivalries-india-pakistan-england-australia-icc-world-cup",
        "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2023/09/AP23244328744632-1694275976.jpg?resize=1920%2C1440",
        "publishedAt": "2024-06-08T08:10:43Z",
        "content": "Some of the most thrilling encounters in sport have been between nations or athletes with historic rivalries that add an extra layer of anticipation and drama.\r\nIn cricket, these rivalries range from… [+8615 chars]"
      },
      {
        "source": {
          "id": "al-jazeera-english",
          "name": "Al Jazeera English"
        },
        "author": "Al Jazeera Staff",
        "title": "India vs Pakistan at T20 World Cup: Time, security, pitch, tickets, history",
        "description": "Al Jazeera's guide to the archrivals' blockbuster cricket match at T20 World Cup in New York on Sunday, June 9.",
        "url": "https://www.aljazeera.com/sports/2024/6/8/india-vs-pakistan-t20-world-cup-kohli-rohit-babar-fakhar-ticket-new-york-weather-pitch-all-you-need-to-know-cricket",
        "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2022/10/000_32LY3JK.jpg?resize=1920%2C1440",
        "publishedAt": "2024-06-08T15:48:19Z",
        "content": "Crickets fiercest rivals India and Pakistan will come face to face in a highly anticipated T20 World Cup 2024 match for the first time in the United States.\r\nIndia head into the Group A match on the … [+6272 chars]"
      },
      {
        "source": {
          "id": "al-jazeera-english",
          "name": "Al Jazeera English"
        },
        "author": "Al Jazeera",
        "title": "T20 World Cup 2024 debutants Uganda claim first victory with win over PNG",
        "description": "The 'cricket cranes' danced and celebrated with their fans after recording their first-ever win in the T20 World Cup.",
        "url": "https://www.aljazeera.com/sports/2024/6/6/t20-world-cup-2024-debutants-uganda-claim-first-victory-with-win-over-png",
        "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2024/06/AP24158116765129-1717659834.jpg?resize=1200%2C675",
        "publishedAt": "2024-06-06T09:20:26Z",
        "content": "Uganda claimed their first special win in their debut at the T20 World Cup as they beat Papua New Guinea by three wickets at Providence Stadium in Guyana.\r\nThe African side bowled out PNG for 77 and,… [+3585 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Variety"
        },
        "author": "Tim Chan",
        "title": "Watch 2024 Men’s T20 World Cup Live: How to Stream the Cricket Tournament Online",
        "description": "Some of the world’s best cricket players are coming to the U.S. for the ICC T20 World Cup 2024, the biggest ICC World Cup ever, with 20 countries competing across 55 matches in the U.S. and West Indies. The tournament runs from June 1 to June 29. Want to watc…",
        "url": "https://variety.com/2024/shopping/athletes/watch-t20-world-cup-2024-live-stream-icc-cricket-tournament-online-1236018757/",
        "urlToImage": "https://variety.com/wp-content/uploads/2024/05/GettyImages-1244750002.jpg?w=1000&h=563&crop=1",
        "publishedAt": "2024-05-30T01:07:26Z",
        "content": "If you purchase an independently reviewed product or service through a link on our website, Variety may receive an affiliate commission.\r\nSome of the world’s best cricket players are coming to the U.… [+2328 chars]"
      },
      {
        "source": {
          "id": "al-jazeera-english",
          "name": "Al Jazeera English"
        },
        "author": "Kevin Hand",
        "title": "ICC T20 World Cup 2024 stadiums: Where’s India vs Pakistan and the final?",
        "description": "Al Jazeera's guide to the nine venues that will host the T20 World Cup matches in the United States and West Indies.",
        "url": "https://www.aljazeera.com/sports/2024/5/25/icc-mens-t20-world-cup-2024-stadium-guide",
        "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2024/05/2015-05-01T000000Z_1047260556_MT1ACI13717512_RTRMADP_3_CRICKET-1716534371.jpg?resize=1920%2C1440",
        "publishedAt": "2024-05-25T05:33:46Z",
        "content": "The ICC Mens T20 World Cup 2024 begins in the United States and the Caribbean on June 1 when the worlds eyes will be on co-hosts USA as they entertain neighbours Canada.\r\nThe opening match will be pl… [+7519 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "BBC News"
        },
        "author": "George O'Neill",
        "title": "Scotland targeting 'scalps and headlines' at World Cup",
        "description": "Scotland hope to punch above their weight again as they start their T20 World Cup campaign against England.",
        "url": "https://www.bbc.com/sport/cricket/articles/c511emnddzgo",
        "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_sport/5e69/live/6fa6f2b0-217f-11ef-9628-ff2abcc9602e.jpg",
        "publishedAt": "2024-06-03T14:14:00Z",
        "content": "Scotland's regular wins against full-member nations are more impressive when one considers they very rarely play against them outside ICC tournaments. \r\nBilateral series come around maybe once a year… [+1061 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Phandroid - News for Android"
        },
        "author": "Mike Viray",
        "title": "Get the Affordable Nokia C300 for an even Lower Price!",
        "description": "The C300 is going for less than 90 bucks.\nThe post Get the Affordable Nokia C300 for an even Lower Price! appeared first on Phandroid.",
        "url": "https://phandroid.com/2024/05/28/get-the-affordable-nokia-c300-for-an-even-lower-price/",
        "urlToImage": "https://phandroid.com/wp-content/uploads/2024/05/nokia-c300.png",
        "publishedAt": "2024-05-28T20:18:48Z",
        "content": "Looking for a cheap smartphone? Then you might want to check out what Nokia has to offer with its range of affordable Android handsets. The Finnish brand sells a number of its phones in North America… [+688 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "BBC News"
        },
        "author": "Stephan Shemilt",
        "title": "Yorkshire to get Tier 1 women's team in 2026",
        "description": "Yorkshire will be granted a Tier 1 women’s team in 2026 following a change of plan from the England and Wales Cricket Board.",
        "url": "https://www.bbc.com/sport/cricket/articles/cv223g9n4v9o",
        "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_sport/754a/live/5165b6e0-17b3-11ef-8de4-535623f228ee.jpg",
        "publishedAt": "2024-05-21T21:01:37Z",
        "content": "At the time, ECB chief executive Richard Gould said Yorkshire were not being \"punished for past sins\" following the lengthy racism scandal at the club.\r\nNow, the ECB says the decision to confirm 2026… [+910 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "BBC News"
        },
        "author": "Timothy Abraham",
        "title": "Little's path from Electric Picnic to Ireland's IPL speedster",
        "description": "Ireland fast bowler Josh Little on his journey from snubbing cricket for festivals to facing India as an IPL star in the making.",
        "url": "https://www.bbc.com/sport/cricket/articles/cg331l371veo",
        "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_sport/5c34/live/32a31e50-22e9-11ef-82fe-93235f4d3d4b.jpg",
        "publishedAt": "2024-06-05T06:52:17Z",
        "content": "Little's international career was almost derailed before it even properly began.\r\nHe once cried off a game for an interprovincial fixture for Leinster Lightning so he could go to a festival called El… [+937 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "BBC News"
        },
        "author": null,
        "title": "USA hold nerve to beat Pakistan in super over",
        "description": "Watch the moment the USA beat Pakistan in a dramatic T20 World Cup super over to seal one of the biggest shocks in cricket history.",
        "url": "https://www.bbc.com/sport/cricket/videos/cmmme5q75yno",
        "urlToImage": "https://ichef.bbci.co.uk/ace/standard/1024/cpsprodpb/91f5/live/f9cf0b90-243f-11ef-baa7-25d483663b8e.jpg",
        "publishedAt": "2024-06-06T20:09:26Z",
        "content": "Watch the moment the USA beat Pakistan in a dramatic T20 World Cup super over to seal one of the biggest shocks in cricket history.\r\nMATCH REPORT: USA stun Pakistan in T20 World Cup super over\r\nAvail… [+21 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "BBC News"
        },
        "author": "BBC Sport",
        "title": "Australia captain Cummins signs for San Francisco",
        "description": "Australia captain Pat Cummins signs for Major League Cricket side San Francisco Unicorns on a deal running from this season until 2027.",
        "url": "https://www.bbc.com/sport/cricket/articles/c7224dv9weeo",
        "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_sport/d803/live/89df5e80-229a-11ef-81fb-6508a3d9334d.jpg",
        "publishedAt": "2024-06-04T18:08:32Z",
        "content": "Australia captain Pat Cummins has signed for Major League Cricket side San Francisco Unicorns.\r\nThe 31-year-old, who is currently leading Australia at the T20 World Cup in the United States and West … [+857 chars]"
      },
      {
        "source": {
          "id": "al-jazeera-english",
          "name": "Al Jazeera English"
        },
        "author": "Melinda Farrell",
        "title": "USA vs India: How the home team could help convert Americans to cricket",
        "description": "Do New Yorkers know there’s a T20 World Cup in their backyard and their team is actually winning? Al Jazeera finds out.",
        "url": "https://www.aljazeera.com/sports/2024/6/12/usa-vs-india-t20-world-cup-2024-match-american-interest-in-cricket-new-york-stadium-long-island",
        "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2024/06/AFP__20240609__2156795543__v2__HighRes__IndiaVPakistanIccMenST20CricketWorldCupWestI-1718161596.jpg?resize=1920%2C1440",
        "publishedAt": "2024-06-12T12:25:19Z",
        "content": "Long Island, New York Alan*, one of the eight million residents of Long Island, is a die-hard New York Yankees fan and an avid consumer of sport. What makes him stand out, though, is his comparativel… [+8053 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "BBC News"
        },
        "author": "BBC Sport",
        "title": "Lamichhane to join Nepal in Windies after US visa refusal",
        "description": "Sandeep Lamichhane will join up with Nepal at the T20 World Cup in the West Indies after being refused a US visa.",
        "url": "https://www.bbc.com/sport/cricket/articles/c4nnr6zj1deo",
        "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_sport/d62f/live/993a9ba0-26f6-11ef-a53e-27e5792075e2.jpg",
        "publishedAt": "2024-06-10T07:34:43Z",
        "content": "Sandeep Lamichhane will join Nepal's T20 World Cup squad in the West Indies after twice being denied a visa to enter the United States.\r\nNepal's government and the Cricket Association of Nepal (CAN) … [+1196 chars]"
      },
      {
        "source": {
          "id": "al-jazeera-english",
          "name": "Al Jazeera English"
        },
        "author": "Melinda Farrell",
        "title": "Who is Jomboy, the American baseball pundit making cricket fun for newbies?",
        "description": "From breaking down bowling spells for fun on a podcast, Jimmy O’Brien has become the new voice of cricket in the US.",
        "url": "https://www.aljazeera.com/sports/2024/5/24/who-is-jomboy-cricket-commentator-baseball-analyst-icc-t20-world-cup-2024",
        "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2024/05/Jimmy-in-studio-1716406289.jpg?resize=1920%2C1440",
        "publishedAt": "2024-05-24T10:36:10Z",
        "content": "New Jersey, United States On a cold March day in Jersey City, the warehouse looks unremarkable from the outside. Surrounded by a mesh fence under a noisy flyover bridge, there is little of note in th… [+8438 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "BBC News"
        },
        "author": "Jon Hotten",
        "title": "Civil war, a president and Frankenstein - a history of cricket in USA",
        "description": "Exploring cricket's roots in the United States, and why the future could be bright for the sport heading into the men's T20 World Cup.",
        "url": "https://www.bbc.com/sport/cricket/articles/cekkjxlvpp8o",
        "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_sport/fc2c/live/16499070-192c-11ef-80aa-699d54c46324.jpg",
        "publishedAt": "2024-05-29T06:39:00Z",
        "content": "These matches and the men that played in them, now misty with time, suggest a kind of sliding doors moment, a chance for the sport of cricket to lay its roots down in the USA just as modernity was ta… [+1347 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "BBC News"
        },
        "author": null,
        "title": "'A proud day for New York!' Fans in US excited by T20 World Cup",
        "description": "Cricket fans in New York share their excitement at the arrival of the T20 World Cup in the Big Apple as Sri Lanka face South Africa.",
        "url": "https://www.bbc.com/sport/cricket/videos/c9rrd036q65o",
        "urlToImage": "https://ichef.bbci.co.uk/ace/standard/1024/cpsprodpb/35c5/live/0401bdd0-21cd-11ef-baa7-25d483663b8e.jpg",
        "publishedAt": "2024-06-03T17:51:31Z",
        "content": "'A proud day for New York!' Fans in US excited by T20 World Cup Video, 00:01:57'A proud day for New York!' Fans in US excited by T20 World Cup"
      },
      {
        "source": {
          "id": null,
          "name": "BBC News"
        },
        "author": null,
        "title": "'I wouldn't swap World Cup medal to be injury-free'",
        "description": "Jofra Archer says he would not swap his 2019 Cricket World Cup winners medal to have been injury free over the last four years.",
        "url": "https://www.bbc.com/sport/cricket/videos/cw557ngzd7ro",
        "urlToImage": "https://ichef.bbci.co.uk/ace/standard/1024/cpsprodpb/b241/live/7d44c210-1dbc-11ef-80aa-699d54c46324.jpg",
        "publishedAt": "2024-05-29T14:05:12Z",
        "content": "Jofra Archer says he would not swap his 2019 Cricket World Cup winners medal to have been injury free over the last four years.\r\nOn Saturday, the 29-year-old took two wickets against Pakistan as Engl… [+389 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Digital Trends"
        },
        "author": "Tim Keeney",
        "title": "How to watch Man City vs Man United FA Cup final live stream",
        "description": "Man City and Man United meet for a Derby in the FA Cup final today, and we have everything you need to know to watch a live stream in the U.S.",
        "url": "https://www.digitaltrends.com/movies/man-city-vs-united-live-stream-may-2024/",
        "urlToImage": "https://www.digitaltrends.com/wp-content/uploads/2021/05/fpv-drone-video-man-city.jpg?resize=1200%2C630&p=1",
        "publishedAt": "2024-05-24T23:00:51Z",
        "content": "A week after winning their fourth consecutive Premier League title, Manchester City take aim at another trophy in the FA Cup final against rivals Manchester United early tomorrow morning. It’s the se… [+1913 chars]"
      },
      {
        "source": {
          "id": "al-jazeera-english",
          "name": "Al Jazeera English"
        },
        "author": "Ahsan Iftikhar Nagi",
        "title": "Kohli vs Amir, Rohit vs Afridi: Five India vs Pakistan match-ups to watch",
        "description": "Al Jazeera breaks down five crucial bowler vs batter battles in the India-Pakistan match at the T20 World Cup 2024.",
        "url": "https://www.aljazeera.com/sports/2024/6/9/kohli-vs-amir-rohit-vs-afridi-five-key-match-ups-in-india-vs-pakistan-t20",
        "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2024/06/AP19167505829708-1717869654.jpg?resize=1920%2C1440",
        "publishedAt": "2024-06-09T06:25:43Z",
        "content": "India and Pakistan have made vastly different starts to their ICC T20 World Cup campaigns but both teams come face to face on a tricky New York pitch in their crucial clash at the Nassau County Stadi… [+6929 chars]"
      },
      {
        "source": {
          "id": "al-jazeera-english",
          "name": "Al Jazeera English"
        },
        "author": "Hafsa Adil",
        "title": "USA vs Pakistan: What are the five biggest upsets in T20 World Cup history?",
        "description": "After USA record a historic win over Pakistan, Al Jazeera lists the five major upsets in the tournament's history.",
        "url": "https://www.aljazeera.com/sports/2024/6/6/usa-vs-pakistan-five-biggest-shocks-in-t20-world-cup-history-shocks-nepal-namibia-afghanistan",
        "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2024/06/AP24158715991038-1717705719.jpg?resize=1920%2C1440",
        "publishedAt": "2024-06-06T22:15:51Z",
        "content": "USA have pulled off one of the biggest upsets in crickets history by beating Pakistan in their T20 World Cup 2024 encounter in Dallas.\r\nThe win, which came in a super over after scores were tied afte… [+4082 chars]"
      },
      {
        "source": {
          "id": "al-jazeera-english",
          "name": "Al Jazeera English"
        },
        "author": "Al Jazeera Staff",
        "title": "ICC T20 World Cup 2024: Teams, groups, format and full match schedule",
        "description": "All you need to know about the groups, format, fixtures, match start times and venues for the tournament.",
        "url": "https://www.aljazeera.com/sports/2024/5/22/icc-mens-t20-world-cup-2024-groups-fixtures-and-full-match-schedule-india-vs-pakistan",
        "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2023/08/AP22296405469137-1693310448.jpg?resize=1920%2C1440",
        "publishedAt": "2024-05-22T12:14:13Z",
        "content": "The ICC Mens T20 World Cup is back.\r\nThe International Cricket Councils Twenty20 tournament will be held in the Caribbean and the United States from June 1 to 29 and will see 20 teams compete for the… [+6764 chars]"
      },
      {
        "source": {
          "id": "al-jazeera-english",
          "name": "Al Jazeera English"
        },
        "author": "Kevin Hand",
        "title": "Indian and Pakistani cricketers band together for USA’s T20 World Cup dream",
        "description": "Co-hosts USA enter the T20 World Cup as outsiders but with a united multiracial dressing room that goes beyond cricket.",
        "url": "https://www.aljazeera.com/sports/2024/5/30/icc-mens-t20-world-cup-2024-usa-team-preview",
        "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2024/05/AP23169289541219-1716495057.jpg?resize=1920%2C1440",
        "publishedAt": "2024-05-30T21:10:22Z",
        "content": "Captain: Monak PatelFixtures: Canada (June 2), Pakistan (June 6), India (June 12), Ireland (June 14)Best finish at T20 World Cup: Debut tournament\r\nFor the best part of the last century, the world of… [+5371 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "BBC News"
        },
        "author": "Stephan Shemilt",
        "title": "Sciver-Brunt missed England T20 after egg-freezing",
        "description": "England’s Nat Sciver-Brunt reveals she missed the first T20 against Pakistan following egg-freezing treatment.",
        "url": "https://www.bbc.com/sport/cricket/articles/c9xz8y92kdpo",
        "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_sport/a3c9/live/6aadb290-13c8-11ef-ac47-2750da7bb5d7.jpg",
        "publishedAt": "2024-05-17T07:09:49Z",
        "content": "Sciver-Brunt is expected to return for the second T20 in Northampton on Friday (18:30 BST).\r\nThe all-rounder is one of the highest-paid female athletes in the UK after being sold for about £320,000 t… [+991 chars]"
      },
      {
        "source": {
          "id": "lenta",
          "name": "Lenta"
        },
        "author": "Полина Кислицына",
        "title": "Раскрыто роскошное совместно нажитое имущество Алсу и ее мужа",
        "description": "",
        "url": "https://lenta.ru/news/2024/05/28/raskryto-roskoshnoe-sovmestno-nazhitoe-imuschestvo-alsu-i-ee-muzha/",
        "urlToImage": "https://icdn.lenta.ru/images/2024/05/28/16/20240528161114967/share_f2c4490dd9baf3cd31a2a22b95d6e87a.jpg",
        "publishedAt": "2024-05-28T15:09:39Z",
        "content": ", , . Mash.\r\n Telegram-, . . , , , 57- . , . 3000 «» , , , , . , - .\r\n , . . , , , , .\r\n Lords Cricket Ground St. John's Wood, . , , . , Maybach 62.\r\n, 18 . 17- , 16- 7- ."
      },
      {
        "source": {
          "id": "al-jazeera-english",
          "name": "Al Jazeera English"
        },
        "author": "Al Jazeera",
        "title": "Preview: USA vs Canada – ICC Men’s T20 World Cup 2024 opening match",
        "description": "History, reputation and bragging rights will be on the line as USA host Canada in the first match of the T20 World Cup.",
        "url": "https://www.aljazeera.com/sports/2024/6/1/preview-usa-vs-canada-icc-mens-t20-world-cup-2024-opening-match",
        "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2024/06/AFP__20240601__2155198274__v4__HighRes__UsaVCanadaPreviewsIccMenST20CricketWorldCupW-1717220600.jpg?resize=1920%2C1440",
        "publishedAt": "2024-06-01T06:19:02Z",
        "content": "Who: USA vs CanadaWhat:ICC Mens T20 World Cup Group A matchWhen: Saturday, June 1 at 7:30pm local time (03:30 GMT, June 2)Where:Grand Prairie Stadium, Texas, United States\r\nIts finally here.\r\nlist of… [+5511 chars]"
      },
      {
        "source": {
          "id": "al-jazeera-english",
          "name": "Al Jazeera English"
        },
        "author": "Al Jazeera",
        "title": "Cricket novices US begin T20 World Cup preparation with win over Bangladesh",
        "description": "Co-hosts US beat star-studded Bangladesh by five wickets in their first T20 match of the series before the World Cup.",
        "url": "https://www.aljazeera.com/sports/2024/5/22/cricket-novices-us-begin-t20-world-cup-preps-with-big-win-over-bangladesh",
        "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2024/05/AP23169289360840-1716357034.jpg?resize=1920%2C1440",
        "publishedAt": "2024-05-22T06:09:23Z",
        "content": "Helped by a burly batsman from New Zealand and a former India junior, the United States have savoured a confidence-boosting five-wicket win over Bangladesh in a T20, just over a week out from co-host… [+1643 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "BBC News"
        },
        "author": null,
        "title": "USA pull off cricket's biggest upset against Pakistan",
        "description": "Watch some of the best moments as the USA pull off one of the biggest shocks in cricket history by beating Pakistan in a thrilling match at the T20 World Cup in Texas.",
        "url": "https://www.bbc.com/sport/cricket/videos/cevv4dnexeyo",
        "urlToImage": "https://ichef.bbci.co.uk/ace/standard/1024/cpsprodpb/158a/live/80f790f0-244b-11ef-baa7-25d483663b8e.jpg",
        "publishedAt": "2024-06-06T21:30:43Z",
        "content": "Watch some of the best moments as the USA pull off one of the biggest shocks in cricket history by beating Pakistan in a thrilling match at the T20 World Cup in Texas.\r\nREAD MORE: USA stun Pakistan i… [+54 chars]"
      },
      {
        "source": {
          "id": "al-jazeera-english",
          "name": "Al Jazeera English"
        },
        "author": "Al Jazeera",
        "title": "Photos: India vs Pakistan brings the biggest cricket party to the US",
        "description": "A sellout crowd descended on New York's Eisenhower Park for the clash of cricketing archrivals India and Pakistan.",
        "url": "https://www.aljazeera.com/gallery/2024/6/10/photos-india-vs-pakistan-cricket-fans-bring-the-party-to-the-usa-new-york-match",
        "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2024/06/AP24161559999584-1718002370.jpg?resize=1920%2C1440",
        "publishedAt": "2024-06-10T07:48:07Z",
        "content": "India and Pakistan cricket fans gathered in New York in their thousands for the ICC T20 World Cup clash between the two nations, bringing a flavour of the subcontinent to unfamiliar terrain for the s… [+2954 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Phandroid - News for Android"
        },
        "author": "Mike Viray",
        "title": "The Nokia G100 is on sale for up to 23% Less!",
        "description": "Get up to $30 off the Nokia G100!\nThe post The Nokia G100 is on sale for up to 23% Less! appeared first on Phandroid.",
        "url": "https://phandroid.com/2024/05/22/the-nokia-g100-is-on-sale-for-up-to-23-less/",
        "urlToImage": "https://phandroid.com/wp-content/uploads/2023/01/nokia-g100-camera.png",
        "publishedAt": "2024-05-22T19:18:45Z",
        "content": "If youre in the market for a relatively cheap smartphone with all the Android essentials, or maybe you need a backup device to complement your main daily driver, then you might want to take a look at… [+774 chars]"
      },
      {
        "source": {
          "id": "business-insider",
          "name": "Business Insider"
        },
        "author": "Dan DeFrancesco",
        "title": "Startups taking on Nvidia face an uphill battle, but the dominant AI chipmaker faces another real threat",
        "description": "Nvidia's dominant position as the AI chipmaker is undeniable, but that hasn't stopped some optimistic entrepreneurs from taking a shot at the crown.",
        "url": "https://www.businessinsider.com/nvidia-dominance-startups-challenge-ai-chipmaker-market-cap-biggest-threat-2024-6",
        "urlToImage": "https://i.insider.com/65f9b6782417f97b87cd57bd?width=1200&format=jpeg",
        "publishedAt": "2024-06-07T14:21:21Z",
        "content": "Chelsea Jia Feng/BI\r\n\u003Cul\u003E\u003Cli\u003EThis post originally appeared in the Insider Today newsletter.\u003C/li\u003E\u003Cli\u003EYou can sign up for Business Insider's daily newsletter here.\u003C/li\u003E\u003C/ul\u003EHappy Friday! Yes, there are… [+6797 chars]"
      },
      {
        "source": {
          "id": "al-jazeera-english",
          "name": "Al Jazeera English"
        },
        "author": "Al Jazeera",
        "title": "Nepal cricketer Sandeep Lamichhane acquitted of rape on appeal",
        "description": "High court overturns eight-year jail sentence on appeal by former captain, who could now join the T20 World Cup squad.",
        "url": "https://www.aljazeera.com/sports/2024/5/15/nepal-cricketer-sandeep-lamichhane-acquitted-of-rape-on-appeal",
        "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2023/12/AP23246500611095-1704000599.jpg?resize=1920%2C1440",
        "publishedAt": "2024-05-15T13:14:19Z",
        "content": "Nepalese cricket star Sandeep Lamichhanes rape conviction was quashed on appeal after the former national captain challenged an eight-year jail sentence for sexual assault handed down in January.\r\nTh… [+1944 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "BBC News"
        },
        "author": "Matthew Henry",
        "title": "Uganda want to bring energy to World Cup",
        "description": "Brian Masaba, Uganda's captain and a part-time procurement manager, discusses his side's journey and a wish to bring \"Ugandan-ness\" to T20 World Cup.",
        "url": "https://www.bbc.com/sport/cricket/articles/c5113nwv7qqo",
        "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_sport/b431/live/76f851e0-1d96-11ef-a090-6b563b2f66e3.jpg",
        "publishedAt": "2024-06-02T07:04:26Z",
        "content": "That process has led Uganda to cricket's global stage, where they will compete in a group with co-hosts West Indies, New Zealand, Afghanistan and Papua New Guinea.\r\nThey are not the lowest-ranked sid… [+3131 chars]"
      },
      {
        "source": {
          "id": "al-jazeera-english",
          "name": "Al Jazeera English"
        },
        "author": "Al Jazeera",
        "title": "Bangladesh’s T20 World Cup squad: Shakib named in Shanto-led side",
        "description": "The 37-year-old all-rounder has played 36 matches in all previous editions of the tournament from 2007 to 2022.",
        "url": "https://www.aljazeera.com/sports/2024/5/14/bangladeshs-t20-world-cup-squad-shakib-named-in-shanto-led-side",
        "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2024/05/2023-10-10T000000Z_1957729715_UP1EJAA0I440X_RTRMADP_3_CRICKET-WORLDCUP-ENG-BGD-1715675890.jpg?resize=1620%2C1080",
        "publishedAt": "2024-05-14T08:55:53Z",
        "content": "Bangladesh have included experienced all-rounder Shakib Al Hasan in their 15-man squad for the Twenty20 World Cup in the West Indies and the United States next month.\r\nThe team will be led by batsman… [+1393 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "BBC News"
        },
        "author": "Timothy Abraham",
        "title": "South Africa win after Sri Lanka dismissed for 77",
        "description": "South Africa begin their T20 World Cup campaign with a six-wicket victory after Sri Lanka are bowled out for just 77 in New York.",
        "url": "https://www.bbc.com/sport/cricket/articles/c9rrdx7wqw4o",
        "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_sport/c0b1/live/8156cc20-21d3-11ef-a13a-0b8c563da930.jpg",
        "publishedAt": "2024-06-03T17:47:23Z",
        "content": "The jewel in the crown for the International Cricket Council (ICC)s American dream for this World Cup is the Nassau County International Cricket Stadium.\r\nThere is no doubt the sparkling ground set i… [+2278 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Forbes"
        },
        "author": "Vitas Carosella, Contributor, \n Vitas Carosella, Contributor\n https://www.forbes.com/sites/vitascarosella/",
        "title": "Usain Bolt Helps Build Excitement For 2024 ICC T20 Cricket World Cup",
        "description": "The 2024 ICC T20 Cricket World Cup is being hosted by the U.S. and the West Indies. Usain Bolt unveiled the new Nassau County International Cricket Stadium on May 15th.",
        "url": "https://www.forbes.com/sites/vitascarosella/2024/05/18/usain-bolt-helps-build-excitement-for-2024-icc-t20-cricket-world-cup/",
        "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/6648ae493c2a6be289e82e83/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
        "publishedAt": "2024-05-18T13:48:04Z",
        "content": "Usain Bolt, Sir Curtly Ambrose, Shoaib Malik, Liam Plunkett, Corey Anderson, Monank Patel, Victor ... [+] Cruz, Bartolo Colon, Elena Delle Donne, John Starks and Ibtihaj Muhammad help unveil the Nass… [+9617 chars]"
      },
      {
        "source": {
          "id": "al-jazeera-english",
          "name": "Al Jazeera English"
        },
        "author": "Al Jazeera",
        "title": "Russell and Chase to the rescue as West Indies beat PNG in T20 World Cup",
        "description": "West Indies beat PNG by five wickets thanks to a late surge in their opening game after the minnows gave them a scare.",
        "url": "https://www.aljazeera.com/sports/2024/6/2/russell-and-chase-to-the-rescue-as-west-indies-beat-png-in-t20-world-cup",
        "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2024/06/AP24154623389043-1717351110.jpg?resize=1920%2C1440",
        "publishedAt": "2024-06-02T19:16:08Z",
        "content": "West Indies stuttered and stumbled before eventually scrambling to a five-wicket win over minnows Papua New Guinea (PNG) in their opening Group C encounter of the ICC Mens T20 World Cup in Guyana.\r\nS… [+2852 chars]"
      },
      {
        "source": {
          "id": "al-jazeera-english",
          "name": "Al Jazeera English"
        },
        "author": "Al Jazeera",
        "title": "Australia’s Starc fit and ready for T20 World Cup after heatwave-hit IPL",
        "description": "Starc took 17 wickets in 13 matches in Kolkata's title-winning run at the IPL 2024 season that lasted two months.",
        "url": "https://www.aljazeera.com/sports/2024/5/27/icc-t20-world-cup-2024-mitchell-starc-australia-ipl-2024-kkr-india-heatwave",
        "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2024/05/AP24142618234714-1716723126.jpg?resize=1920%2C1440",
        "publishedAt": "2024-05-27T06:21:49Z",
        "content": "Mitchell Starc has dismissed fears the intense heat might have drained him during his Indian Premier League-winning exploits, with the Australian declaring he was fit and ready for the ICC Mens Twent… [+2685 chars]"
      },
      {
        "source": {
          "id": "al-jazeera-english",
          "name": "Al Jazeera English"
        },
        "author": "Kevin Hand",
        "title": "ICC Men’s T20 World Cup 2024: Afghanistan team preview",
        "description": "Rashid Khan's men must dig deeper in tough situations to push for a place in the ICC T20 World Cup semifinals.",
        "url": "https://www.aljazeera.com/sports/2024/5/27/icc-t-twenty-world-cup-team-afghanistan-team-preview",
        "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2024/05/AP23288574670932-1716748833.jpg?resize=1920%2C1440",
        "publishedAt": "2024-05-27T03:56:21Z",
        "content": "Captain: Rashid KhanFixtures: Uganda (June 4), New Zealand (June 8), Papua New Guinea (June 14), West Indies (June 18)Best finish at T20 World Cup: Super Eight.\r\nAfghanistan enter the ICC T20 World C… [+4212 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Forbes"
        },
        "author": "Lea Lane, Contributor, \n Lea Lane, Contributor\n https://www.forbes.com/sites/lealane/",
        "title": "Learning While Lodging, Worldwide: Shucking, Cricket, Hula — More",
        "description": "If learning activities appeal to you and your family, check for offerings like ones in this article, before you book.",
        "url": "https://www.forbes.com/sites/lealane/2024/05/29/learning-while-lodging-worldwide-shucking-cricket-hula---more/",
        "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/665775806ee536702c170263/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
        "publishedAt": "2024-05-29T21:17:36Z",
        "content": "You may not want to just laze by your hotels beach. You can learn all about whats in that water, and more; a glorious, innovative kind of Summer School as you travel the world right at your lodgings.… [+4207 chars]"
      },
      {
        "source": {
          "id": "al-jazeera-english",
          "name": "Al Jazeera English"
        },
        "author": "Ahsan Iftikhar Nagi",
        "title": "Australia rely on experience to win ICC T20 World Cup 2024",
        "description": "Can the Australian squad's familiarity and experience of soaking up pressure help Marsh's men win the T20 World Cup?",
        "url": "https://www.aljazeera.com/sports/2024/5/29/icc-mens-t20-world-cup-2024-australia-team-preview",
        "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2024/05/2023-11-19T085706Z_1568891406_UP1EJBJ0OV579_RTRMADP_3_CRICKET-WORLDCUP-IND-AUS-1716990691.jpg?resize=1920%2C1440",
        "publishedAt": "2024-05-29T14:23:30Z",
        "content": "Australia will head into the ICC Mens T20 World Cup 2024 with their sights set on writing a fresh chapter in crickets history by becoming the only mens team to hold the ICC Test Championship title, t… [+4985 chars]"
      },
      {
        "source": {
          "id": "al-jazeera-english",
          "name": "Al Jazeera English"
        },
        "author": "Al Jazeera Staff",
        "title": "Preview: Netherlands vs Nepal – ICC T20 World Cup 2024 Group D match",
        "description": "Nepal return to the T20 World Cup after 10 years and will look to make the most of their clash against familiar foes.",
        "url": "https://www.aljazeera.com/sports/2024/6/4/preview-netherlands-vs-nepal-icc-t20-world-cup-2024-group-d-match",
        "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2024/06/AP23246451767015-1717483766.jpg?resize=1920%2C1440",
        "publishedAt": "2024-06-04T08:22:15Z",
        "content": "In a group comprising former champions Sri Lanka as well as experienced sides South Africa and Bangladesh the Netherlands and Nepal will face each other in their opening game of the ICC T20 World Cup… [+4498 chars]"
      },
      {
        "source": {
          "id": "al-jazeera-english",
          "name": "Al Jazeera English"
        },
        "author": "Al Jazeera Staff",
        "title": "Sri Lanka vs Nepal – T20 World Cup: Team news, head-to-head, pitch, weather",
        "description": "Nepal will look for their first win in the T20 World Cup 2024 when they meet Sri Lanka in a crucial Group D match.",
        "url": "https://www.aljazeera.com/sports/2024/6/11/sri-lanka-vs-nepal-t20-world-cup-team-news-head-to-head-pitch-weather",
        "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2024/06/AP24156543612330-1717516760.jpg?resize=1200%2C675",
        "publishedAt": "2024-06-11T09:44:36Z",
        "content": "Who:Sri Lanka vs NepalWhat: ICC T20 World Cup 2024 Group D matchWhen: Tuesday, June 11, 7:30pm local time (23:30 GMT)Where:Central Broward Park Stadium, Lauderhill, Florida, United StatesHow to follo… [+5250 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Sky Sports"
        },
        "author": null,
        "title": "Rooney appointed Plymouth boss",
        "description": "Wayne Rooney has been appointed the new head coach of Plymouth Argyle.",
        "url": "https://www.skysports.com/football/news/11095/13142334/wayne-rooney-former-manchester-united-and-england-forward-appointed-new-plymouth-argyle-head-coach",
        "urlToImage": "https://e0.365dm.com/24/05/1600x900/skysports-wayne-rooney-birmingham_6564533.jpg?20240524092609",
        "publishedAt": "2024-05-25T12:00:00Z",
        "content": "Wayne Rooney has been appointed the new head coach of Plymouth Argyle.\r\nEngland's second-highest scorer was sacked by Birmingham in January after just 83 days in charge.\r\nThat decision hit Rooney har… [+1364 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Forbes"
        },
        "author": "Tim Ellis, Contributor, \n Tim Ellis, Contributor\n https://www.forbes.com/sites/timellis/",
        "title": "Can The T20 Cricket World Cup Reach The Unconverted In America?",
        "description": "The Cricket T20 World Cup starts in Texas on June 1 when the U.S. takes on Canada. Can the original bat and ball game in America make a move on the mainstream?",
        "url": "https://www.forbes.com/sites/timellis/2024/05/30/can-the-t20-cricket-world-cup-reach-the-unconverted-in-america/",
        "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/6658dbf28ed8170333b18db7/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
        "publishedAt": "2024-05-30T21:57:00Z",
        "content": "A giant cricket ball is seen installed at a marketplace to mark 100 days to go for the ICC Men's T20 ... [+] World Cup in Miami, Florida, on February 22, 2024. The Ball Drop marks a groundbreaking mo… [+5141 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Forbes"
        },
        "author": "Tristan Lavalette, Contributor, \n Tristan Lavalette, Contributor\n https://www.forbes.com/sites/tristanlavalette/",
        "title": "The T20 World Cup Aims To Put Cricket On The American Sports Map",
        "description": "There is hope that the showpiece T20 World Cup can represent a boon for cricket in the U.S. after years of frustration.",
        "url": "https://www.forbes.com/sites/tristanlavalette/2024/05/31/the-t20-world-cup-aims-to-put-cricket-on-the-american-sports-map/",
        "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/662cfafc25281b07338d62fb/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
        "publishedAt": "2024-05-31T09:34:16Z",
        "content": "The U.S. will co-host the T20 World Cup (Photo by Mike Stobe-ICC/ICC via Getty Images)\r\nICC via Getty Images\r\nCricket, a staid bat and ball game that feels very British, never seemed to fit in across… [+4289 chars]"
      },
      {
        "source": {
          "id": "al-jazeera-english",
          "name": "Al Jazeera English"
        },
        "author": "Kevin Hand",
        "title": "ICC Men’s T20 World Cup 2024: Which teams are favourites for the title?",
        "description": "Al Jazeera's five favourites to lift the T20 World Cup in Barbados on June 29.",
        "url": "https://www.aljazeera.com/sports/2024/5/28/icc-mens-t20-world-cup-2024-the-top-five-teams-to-watch",
        "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2024/05/2021-11-14T184731Z_1348461714_UP1EHBE1G75UY_RTRMADP_3_CRICKET-T20WORLDCUP-NZL-AUS-1716841719.jpg?resize=1920%2C1440",
        "publishedAt": "2024-05-28T18:44:32Z",
        "content": "The ninth edition of the ICC Mens T20 World Cup runs from June 1 to June 29, and the 2024 champions will be crowned at the Kensington Oval Stadium in Bridgetown, Barbados.\r\nEngland will try to defend… [+6156 chars]"
      },
      {
        "source": {
          "id": "al-jazeera-english",
          "name": "Al Jazeera English"
        },
        "author": "Kevin Hand",
        "title": "ICC Men’s T20 World Cup 2024: West Indies team preview",
        "description": "Spin may play a crucial role in the West Indies, going in favour of the co-hosts, says former selector Roland Butcher.",
        "url": "https://www.aljazeera.com/sports/2024/6/2/icc-mens-t20-world-cup-2024-west-indies-team-preview",
        "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2024/06/AP24035196955309-1717312832.jpg?resize=1200%2C675",
        "publishedAt": "2024-06-02T10:06:13Z",
        "content": "Captain: Rovman PowellFixtures: Papua New Guinea (June 2), Uganda (June 9), New Zealand (June 13), Afghanistan (June 18)Best finish at T20 World Cup: Champions (2012 and 2016)\r\nThe steady rise of the… [+6142 chars]"
      },
      {
        "source": {
          "id": "al-jazeera-english",
          "name": "Al Jazeera English"
        },
        "author": "Kevin Hand",
        "title": "Kohli, Babar, Archer: 10 players to watch at the ICC T20 World Cup 2024",
        "description": "Al Jazeera's rundown of the biggest players set to take centre stage at the T20 World Cup in the US and West Indies.",
        "url": "https://www.aljazeera.com/sports/2024/5/29/icc-mens-t20-world-cup-2024-the-top-ten-players-to-watch",
        "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2024/05/2023-11-19T074859Z_1742975864_UP1EJBJ0LPM4U_RTRMADP_3_CRICKET-WORLDCUP-IND-AUS-1717006831.jpg?resize=1920%2C1440",
        "publishedAt": "2024-05-29T20:31:41Z",
        "content": "The worlds biggest athletes often choose the most grand occasions to make their mark on the game.\r\nWhen the ICC Mens T20 World Cup 2024 gets under way on Saturday, cricket fans will be eager to see t… [+5691 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Forbes"
        },
        "author": "Tim Ellis, Contributor, \n Tim Ellis, Contributor\n https://www.forbes.com/sites/timellis/",
        "title": "Aaron Jones Powers The T20 World Cup With Home Runs As U.S. Start Fast",
        "description": "USA beat Canada in the first match of the T20 World Cup. Aaron Jones's ten sixes made the perfect opening night for a game that is ready for a relaunch in America.",
        "url": "https://www.forbes.com/sites/timellis/2024/06/03/aaron-jones-powers-the-t20-world-cup-with-home-runs-as-us-start-fast/",
        "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/665e54b6345c78d17d1e5d33/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
        "publishedAt": "2024-06-04T00:37:37Z",
        "content": "DALLAS, TEXAS - JUNE 01: Aaron Jones of USA bats during the ICC Men's T20 Cricket World Cup West ... [+] Indies &amp; USA 2024 match between USA and Canada at Grand Prairie Cricket Stadium on June 01… [+4170 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Forbes"
        },
        "author": "Tristan Lavalette, Contributor, \n Tristan Lavalette, Contributor\n https://www.forbes.com/sites/tristanlavalette/",
        "title": "Cricket’s T20 World Cup Is More Inclusive As U.S. Team Makes History",
        "description": "Smaller cricket countries like the U.S. have started the T20 World Cup strongly to justify the tournament's expansion.",
        "url": "https://www.forbes.com/sites/tristanlavalette/2024/06/03/crickets-t20-world-cup-is-more-inclusive-as-us-team-makes-history/",
        "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/665d6aad2278dcd4697568ea/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
        "publishedAt": "2024-06-03T12:10:22Z",
        "content": "DALLAS, TEXAS - JUNE 01: Aaron Jones and Monank Patel led U.S. to a stunning victory in the T20 ... [+] World Cup (Photo by Matt Roberts-ICC/ICC via Getty Images)\r\nICC via Getty Images\r\nChants of \"US… [+5175 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "BBC News"
        },
        "author": "BBC Sport",
        "title": "Olivia Clark column: Wales duty, unclear club future and golf TikTok",
        "description": "In her first BBC Sport column, Wales goalkeeper Olivia Clark looks forward to their Euro 2025 qualifying games against Ukraine.",
        "url": "https://www.bbc.com/sport/football/articles/cv22p3138gpo",
        "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_sport/58c0/live/19323f10-1d2a-11ef-baa7-25d483663b8e.jpg",
        "publishedAt": "2024-05-28T20:47:03Z",
        "content": "I started playing golf about two months ago and I love it! I love golf now, the next Gareth Bale, thats me.\r\nI hated it when I started playing, because golf is actually really hard. But once I start … [+1536 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Forbes"
        },
        "author": "Tim Ellis, Contributor, \n Tim Ellis, Contributor\n https://www.forbes.com/sites/timellis/",
        "title": "How Canada Got Back On Cricket Map As T20 World Cup Debut Approaches",
        "description": "Canada are not expected to punch above their weight in the T20 Cricket World Cup, but the game is growing fast in the country.",
        "url": "https://www.forbes.com/sites/timellis/2024/05/21/how-canada-got-back-on-cricket-map-as-t20-world-cup-debut-approaches/",
        "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/664c6ac5b4c312c5db4572d5/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
        "publishedAt": "2024-05-21T11:25:46Z",
        "content": "TOPSHOT - Steve Smith of the Toronto Nationals stands on the pitch at the Maple Leaf Cricket Club in ... [+] King City, Ontario during the first inning of the Nationals Global T20 match against the V… [+5798 chars]"
      }
    ]
  
  constructor(){
    super();
    console.log("I am from news components")
    this.state =  { 
      article : this.article,
      loading : false
    }
  }
  render() {
    return (
      <div className='container p-2 my-5'>
        <h1>DailyNews - Top Headlines</h1>
        <div className="cards grid md:grid-cols-2 md:gap-x-4 lg:grid-cols-3 2xl:grid-cols-4"> 
        {this.state.article.map((elem)=>{
          return   <Newsitem key={elem.url}  title={elem.title} description={elem.description} imageUrl="https://ichef.bbci.co.uk/images/ic/1200x675/p0hwk22m.jpg" newsUrl={elem.url}/>

        //  return <Newsitem key={elem.url}  title={elem.title.slice(0, 30)} description={elem.description.slice(0, 80)} imageUrl="https://ichef.bbci.co.uk/images/ic/1200x675/p0hwk22m.jpg" newsUrl={elem.url}/>
          
        })}
        
        </div>
      </div>
    )
  }
}

export default News
