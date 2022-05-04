//global variables
var deck = {};
var rank = "";
var suit = "";
var deckArr = [];
var cardBack = "<img class='img-thumbnail' src='img/tarot.png'>";
var meanings = {
    upright: [
    //CUPS
    {
        name:
        "Aas van bekers is de kaart voor nieuwe liefde, medeleven, vreugde en creativiteit. Als deze kaart samen met de Aas van Pentakels verschijnt, betekent dit vaak dat je gaat samenwonen in een relatie."
    },
    {
        name:
        "Twee van bekers is de kaart voor verliefdheid en een hechte relatie, er is echte intimiteit in de relatie, en je kent en begrijpt elkaar op een diep niveau."
    },
    {
        name:
        "Drie van bekers is de kaart voor feestvieren, uitgaan met vrienden, plezier maken en deel uitmaken van een gemeenschap. Deze kaart komt vaak voor als iemand zich gaat verloven of gaat trouwen."
    },
    {
        name:
        "Vier van bekers is de kaart voor contemplatie. Zij komt vaak tevoorschijn wanneer de vraagsteller ontevreden is over iets en niet volledig opmerkt wat hem wordt aangeboden."
    },
    {
        name:
        "Vijf van bekers is de kaart voor spijt en teleurstelling, vooral in de liefde. Een relatie is misschien niet zo gelopen als je had gewild."
    },
    {
        name:
        "Zes van bekers is de kaart voor sensualiteit en plezier, herinneringen, onschuld, nostalgie en kindertijd. Soms duikt deze kaart op als iemand uit het verleden weer op weg is naar je leven."
    },
    {
        name:
        "Zeven van bekers is de kaart voor dagdromen, illusies, wensdenken, en fantasieën. Deze kaart komt meestal tevoorschijn wanneer je veel keuzes hebt en een visie nodig hebt om ze te verwezenlijken."
    },
    {
        name:
        "Acht van bekers is de kaart voor het de rug toekeren naar iets om je droom te gaan volgen. Het dagdromen dat in Zeven bekers gebeurde, heeft zich gematerialiseerd in een visioen dat de querent gaat nastreven."
    },
    {
        name:
        "Negen van bekers is de kaart voor krijgen wat je wilt en een wens in vervulling laten gaan. Deze kaart spreekt over overvloed en tevredenheid, en ook over trots zijn op wat je hebt bereikt."
    },
    {
        name:
        "Tien van bekers is de kaart voor totale spirituele gelukzaligheid die je ervaart in je relatie, huis en gezinsleven. Deze kaart gaat over het in overeenstemming zijn met je ware aard en dat alles in je leven in harmonie is met je hogere zelf en je doel op deze planeet."
    },
    {
        name:
        "De schildknaap van bekers duidt op een jong persoon met een zachtaardige en gevoelige aard. Dit is iemand die in verwondering leeft en soms heel naïef kan zijn."
    },
    {
        name:
        " De ridder van bekers duidt op een persoon op een zoektocht om zijn liefde te verklaren. Dit is jouw ridder in blinkend harnas. Hij is een zanger, dichter en schrijver. Hij schildert en creëert waar hij ook gaat. Hij is artistiek en ongelooflijk beminnelijk."
    },
    {
        name:
        "De koningin van bekers duidt op een vrouw die zeer intuïtief en gevoelig is. Ze staat in contact met haar emoties, haar onderbewustzijn en het universum. Ze is meelevend en geeft veel om haar leven en dat van anderen."
    },
    {
        name:
        "De koning van bekers duidt op een warme, eerlijke en gulle man die vriendelijk en eerlijk is. Dit is iemand die zijn eigen emoties onder controle heeft."
    },

    //PENTACLES
    {
        name:
        "Aas van Pentacles symboliseert een nieuw begin in je financiële situatie en een kans om je zekerheid te verdiepen."
    },
    {
        name:
        "Twee van Pentacles symboliseert jongleren met financiën. Misschien heb je inkomsten uit meer dan één bron. Twee van Pentakels wijst ook op het investeren van geld in verschillende projecten, of ruilhandel."
    },
    {
        name:
        "Drie van Pentales symboliseert je werk, vooral als het gaat om teamwerk of luisteren naar klanten/cliënten. Dit is een positieve kaart die wijst op voldoening in je werk en trots zijn op je werk, maar je moet er wel moeite voor doen om resultaten te zien."
    },
    {
        name:
        "Vier van Pentacles symboliseert de behoefte aan zekerheid en erkenning in je leven, om controle te hebben over je bezit en om overvloed en geld te laten toenemen. Deze kaart toont koppigheid in de situatie of in de querent."
    },
    {
        name:
        "Vijf van Pentacles symboliseert financieel verlies of tegenspoed. Het kan ook betekenen dat je je op een plek bevindt waar je je niet veilig voelt en je gezondheid kan eronder lijden."
    },
    {
        name:
        "Zes van Pentacles symboliseert vrijgevigheid jegens hen die het minder hebben dan jij. Het kan ook betekenen dat je vrijgevigheid van anderen ontvangt."
    },
    {
        name:
        "Zeven van Pentacles symboliseert een visie die in de toekomst vruchten zal afwerpen. Je plant de zaadjes zodat je in staat zult zijn een veiliger en overvloediger toekomst voor jezelf te oogsten."
    },
    {
        name:
        "Acht van Pentacles symboliseert vakmanschap met betrekking tot werk. Het kan ook betekenen dat je in de leer gaat en/of een nieuwe vaardigheid leert."
    },
    {
        name:
        "Negen van Pentacles symboliseert luxe, financiële zekerheid en op een uitbundige vakantie zijn."
    },
    {
        name:
        "Tien van Pentacles symboliseert het soort rijkdom dat je krijgt als je iets erft, of dat nu je eigen pensioengeld is, een aalmoes, of bezittingen van iemand die is overleden."
    },
    {
        name:
        "De schildknaap pentacles geeft aan dat je jezelf op de een of andere manier opnieuw aan het uitvinden bent. Het duidt vaak op een kans om iets nieuws te beginnen, of het nu gaat om een creatieve onderneming, een studie, een bedrijf of een nieuwe baan. Page of pentacles is nog geen expert op het gebied van keuze maar heeft een duidelijk doel en droom voor ogen."
    },
    {
        name:
        "De ridder van pentacles staat voor dienstbaar zijn en het eigenlijke werk doen (in tegenstelling tot Page van Pentakels die graag over het idee dagdroomt in plaats van het werkelijk te beleven). Ridder van Pentakels voelt zich op zijn gemak met routine en is efficiënt en conservatief."
    },
    {
        name:
        "De koningin van pentacles is iemand met een nuchtere en praktische benadering van het leven en situaties. Het is belangrijk om werk en privé in balans te hebben, als je vanuit huis zou kunnen werken zou je dat waarschijnlijk doen. Deze kaart geniet van materiële genoegens en succes."
    },
    {
        name:
        "De koning van Pentakels symboliseert een succesvolle zakenman of een persoon in een leidinggevende positie. Dit is een stabiel en gezaghebbend karakter, dat hard werkt en betrouwbaar is."
    },

    //SWORDS
    {
        name:
        "Aas van zwaarden is de kaart voor een nieuwe gedachte en geloofssysteem. Het is de potentie van mentale energie die gebruikt wordt om helderheid en vaak ook rechtvaardigheid te scheppen."
    },
    {
        name:
        "Twee van zwaarden is de kaart voor compromis, passiviteit, de vrede bewaren (als in de boot niet schommelen), patstelling, besluiteloosheid en het vermijden van conflicten."
    },
    {
        name:
        "Drie van zwaarden duidt op liefdesverdriet, verdriet, pijn en scheiding. Soms is de scheiding slechts tijdelijk, andere keren is ze definitief."
    },
    {
        name:
        "Vier van zwaarden gaat over rust en verjonging, voldoende slapen en tijd nemen om te mediteren."
    },
    {
        name:
        "Vijf van zwaarden is de kaart voor nederlaag en verraad, conflict en ongezonde concurrentie. Woorden zullen kwetsend zijn, leugens zullen worden verteld en je zwakheden zullen tegen je worden gebruikt."
    },
    {
        name:
        "Zes van zwaarden gaat over het oversteken van de onrustige zee en het betreden van rustiger water. Dit is de kaart voor het vinden en uitvoeren van oplossingen, waarbij je vaak andere mensen met je meeneemt in het proces, d.w.z. je familie, vrienden en collega's."
    },
    {
        name:
        "Zeven van zwaarden geeft aan dat iemand op een minder eervolle manier vooruit gaat. Er is vaak oneerlijkheid verbonden met deze kaart, en proberen om weg te komen met iets of proberen om onder iets uit te komen door te liegen."
    },
    {
        name:
        "Acht van zwaarden is de kaart van vastzitten en niet verder kunnen door verwarring en niet weten wat er aan de hand is. Vaak trekken mensen deze kaart wanneer hun eigen gevoel wordt overruled door andere mensen."
    },
    {
        name:
        "Negen van zwaarden duidt op bezorgdheid en angst, slapeloosheid en overweldigd worden door negatieve emoties zoals schuldgevoelens en spijt."
    },
    {
        name:
        "Tien van zwaarden is de kaart voor het einde en verlies, achterbaksheid en gebrek aan steun. Soms duidt deze kaart op het bereiken van de bodem. Het heeft de mentaliteit van 'als het regent, giet het', en de vraagsteller kan het gevoel hebben dat er geen einde aan het lijden komt."
    },
    {
        name:
        "De schildknaap van zwaarden duidt op een jong en geestelijk zeer actief en slim persoon. Dit is iemand die zich gedurende lange perioden kan concentreren en die gemakkelijk nieuwe vaardigheden aanleert, vooral mentale vaardigheden."
    },
    {
        name:
        "De ridder van zwaarden duidt op een communicatieve, vastberaden en soms een eigenzinnige persoon die zeer actiegericht is en die van verandering houdt. Dit is iemand met een competitieve inslag en die niet graag zijn/haar positie in een argument loslaat."
    },
    {
        name:
        "De koningin van zwaarden duidt op een vrouw die koud, professioneel en slim is. Ze is geestig en grappig op een intelligente manier (geen toilethumor). Ze vertegenwoordigt vaak alleenstaande vrouwen die gekwetst zijn in de liefde, en is bitter en gekwetst, maar een meester in het verdoezelen ervan."
    },
    {
        name:
        "De koning van zwaarden duidt op een professionele man die op de top van zijn kunnen staat. Dit is iemand die een expert is op zijn gebied en zou hebben moeten studeren om deze kennis te verwerven."
    },
    // WANDS
    {
        name:
        "Aas van staven spreekt van een nieuw begin. Wees moedig en begin iets nieuws. Volg je inspiratie. Aas van Wijs spreekt over geboortes van allerlei aard; de geboorte van ondernemingen en kansen op werk, en ook de geboorte van een baby."
    },
    {
        name:
        "Twee van staven gaat over manifesteren met behulp van de wil en de kracht van je geest. Het kan zijn dat je je opties moet afwegen voordat je beslist welke het beste bij je past."
    },
    {
        name:
        "Drie van staven is de kaart voor schrijvers, en schrijfjobs en freelancers. Het is ook de kaart die volgt op het manifesteren dat de querent deed in Twee van Toverstokken, en de querent heeft nu een nieuwe en opwindende kans of droom beleefd."
    },
    {
        name:
        "Vier van staven is de kaart voor harmonie en ontwikkeling op grotere schaal, vaak het uitbreiden van je woonsituatie, en ook het sterker verbonden zijn met een gemeenschap."
    },
    {
        name:
        "Vijf van staven gaat over opkomen voor wat belangrijk voor je is, zelfs als dat betekent dat je op tegenstand stuit."
    },
    {
        name:
        "Zes van staven is de kaart voor populariteit, vooruitgang, overwinning en succes, zelfvertrouwen en krijgen wat je wilt."
    },
    {
        name:
        "Zeven van staven betekent defensief zijn en barrières en grenzen opwerpen. U beschermt uw standpunt en uw positie."
    },
    {
        name:
        "Acht van staven spreekt van snelle actie en vooruitgang. Het verschijnt vaak als er een bezoeker op komst is, of als de querent bij iemand op bezoek is."
    },
    {
        name:
        "Negen van staven is de kaart voor kracht, moed, veerkracht en uithoudingsvermogen. Geef nooit op en geef je nooit over."
    },
    {
        name:
        "Tien van staven is de kaart voor hard werken en meer verantwoordelijkheid nemen."
    },
    {
        name:
        "De schildknaap van staven duidt op een enthousiaste jongere die staat te popelen om te ontdekken en levenservaring op te doen."
    },
    {
        name:
        "De ridder van staven duidt op een persoon die met hoge snelheid door het leven gaat, die het leven in de fast lane leeft. Dit is iemand die het leven van het feest zal zijn."
    },
    {
        name:
        "De koningin van staven staat voor een warme, vriendelijke en gepassioneerde vrouw. Ze is doelgericht en vastberaden. Ze is ook een metafysica die haar verstand zowel kan gebruiken om harmonie te creëren als om verwoesting aan te richten."
    },
    {
        name:
        "De koning van staven duidt op een getrouwde man die een natuurlijke en charismatische leider is. Hij heeft ondernemerskwaliteiten en houdt ervan om een nieuw en opwindend project te leiden."
    },

    //TRUMPS
    {
        name:
        "Fool represents new beginnings, having faith in the future, being inexperienced, not knowing what to expect, having beginners luck, improvising, believing that the Universe provides, having no strings attached, being carefree."
    },
    {
        name:
        "Magician represents your ability to communicate clearly, to ‘sell’ yourself and to be innovative. The Magician has all the tools and resources available to manifest his desired outcome, so it is a good card to get if you want to create."
    },
    {
        name:
        "High Priestess represents secrets, mystery, intuition, wisdom, making the impossible become possible, and magic."
    },
    {
        name:
        "Empress represents feminine power, a nurturer and a family oriented person, our mother or a mother figure, abundance, femininity, fertility and the love of the home and family."
    },
    {
        name:
        "Emperor represents masculine energy, the ruler, the head of the household, head of a company, organisation and communities. The Emperor is an authority figure that creates a solid foundation to build and create on."
    },
    {
        name:
        "Hierophant represents group consciousness, religion, your belief system, ceremony, traditions, kindness, charity, giving guidance in the form of spiritual counselling."
    },
    {
        name:
        "Lovers represents love and relationship, soul mates, physical attractions, choices to be made, The Lovers represents doing the things that make us feel whole, being with the people who make us feel whole."
    },
    {
        name:
        "Chariot represents your willpower and determination. It represents victory. The Chariot gives you the green light to charge ahead and take control in your life or an area of your life that needs your attention."
    },
    {
        name:
        "Strength represents our courage, passions, strength, self-confidence, patience and compassion. Strength reminds us to follow our passions, to take the time to do the things that make us tick, that makes us strong within ourselves and which builds confidence and self-worth."
    },
    {
        name:
        "Hermit represents spending time alone, being a lone wolf, soul-searching, seeking spiritual guidance, introspection."
    },
    {
        name:
        "Wheel of Fortune is the Big destiny card in the tarot deck. What is meant to be is meant to be. In the tarot when the Wheel of Fortune turns up, it means that the events and people in your life are in your life due to it being pre-decided by destiny."
    },
    {
        name:
        "Justice represents all kinds of legal matters, the spiritual laws of truth and cause and effect. When the Justice card shows up it reminds us to be lawful and fair to achieve the best result."
    },
    {
        name:
        "Hanged Man represents being temporarily suspended. Life is on hold, but it serves a purpose."
    },
    {
        name:
        "Death represents transformation, endings and new beginnings. When the Death card shows up it tells you that things will not be the same again. A transformation is taking place, you are growing and changing with the circumstances you find yourself in."
    },
    {
        name:
        "Temperance represents balanced interaction between the elements to create something new and fresh. Temperance includes all the elements in such a way that it brings out the best of each substance. When the Temperance card shows up in your life there is great balance and strength between the different areas and people in your life that are working together."
    },
    {
        name:
        "Devil represents the primal source of behaviour that shows itself in the form of our desires and earthly needs. It also represents our fears that causes addiction and compulsive behaviour."
    },
    {
        name:
        "Tower represent disaster, emotional ‘meltdowns’ and/or tantrums, anger issues, upheaval, sudden change that is caused by disruption and revelations that rock the foundation of the person, household, organisation or even country, depending on the nature of the question."
    },
    {
        name:
        "Star represents hope, a bright future, joy, optimism, guidance, having answers to your questions, being and feeling the connection to the divine, serenity and inspiration. The Star shines so brightly that when it shows up in a reading it tells you that you are being the light in someone’s life."
    },
    {
        name:
        "Moon represents illusions, intuition, fantasies, fears and anxiety. When the Moon appears things might not be quite as they seem. Your insecurities might be running high or you find yourself on the receiving end of other people’s insecurities."
    },
    {
        name:
        "Sun represents success, joy, sunshine, day, warmth and happiness. The Sun shows up when life is sunny and you are enjoying your time with the people you love. Life is simple rather than complicated. Relationships are blossoming and you are feeling loved."
    },
    {
        name:
        "Judgement represents taking responsibility for your actions and your life, being a good judge of character, seeing the truth and knowing what you want. The Judgement card often shows up when you need to step up and be a leader, speaking the truth and being more assertive."
    },
    {
        name:
        "World is the final Major Arcana card and represents fulfilment and successful completion of a cycle. You know your place in the world, and your life lessons have made you smart and accomplished. The World shows up when the world is ready for you and want what you have to offer."
    },



    ],
    reversed: [

    //CUPS
    {
        name:
        "Aas van Bekers omgekeerd wijst op geblokkeerde creativiteit en geblokkeerde emoties. Toegang tot het onderbewustzijn en paranormale begaafdheid is ook geblokkeerd."
    },
    {
        name:
        "Twee van bekers omgekeerd geeft aan dat men bang is voor liefde en relaties. De zoeker droomt misschien van de liefde, maar als het erop aankomt er daadwerkelijk een te hebben, staat de angst voor afwijzing en verlating in de weg."
    },
    {
        name:
        "Drie van bekers omgekeerd kan duiden op een verkeerd afgelopen feest, krengerij, jaloezie en concurrentie."
    },
    {
        name:
        "Vier van bekers omgekeerd geeft aan dat de zoeker niet meer op zijn plaats zit en iets en/of iemand belangrijks uit de weg gaat."
    },
    {
        name:
        "Vijf van bekers omgekeerd duidt op teleurstelling in de liefde en emotionele zaken. De twee bekers die nog rechtop staan, komen tevoorschijn wanneer deze kaart omgekeerd verschijnt, wat aangeeft dat de zoeker emotioneel totaal leeggezogen kan zijn, meestal door relaties."
    },
    {
        name:
        "Zes van bekers omgekeerd duidt op een moeilijke jeugd en spookachtige, zelfs verontrustende jeugdherinneringen. Allerlei soorten herinneringen kunnen een probleem zijn als deze kaart omgekeerd is, zelfs geheugenverlies."
    },
    {
        name:
        "Zeven van bekers omgekeerd geeft aan dat de verbeelding van de zoeker geblokkeerd is. Dagdromen is veranderd in gedachten van angsten en zorgen."
    },
    {
        name:
        "Acht van bekers omgekeerd geeft aan dat de zoeker zijn droom heeft opgegeven om zich over te geven aan een realiteit die oncomfortabel, liefdeloos en ellendig is. De zoeker kan zijn leven hebben opgegeven om iemand anders te behagen, zijn bedrijf te verkopen om te werken in een baan die hij niet leuk vindt."
    },
    {
        name:
        "Negen van bekers omgekeerd geeft aan dat de zoeker niet gaat krijgen wat hij wenst. Familie en vriendschap kunnen uit elkaar vallen. Er is sprake van desintegratie en scheiding, vaak als gevolg van keuzes in levensstijl."
    },
    {
        name:
        "Tien van bekers omgekeerd wijst op verstoring van de harmonie, iets of iemand maakt het moeilijk om de liefde in stand te houden. De zoeker doet misschien alsof alles nog prachtig is in de hoop dat het voor altijd zo zal blijven."
    },
    {
        name:
        "De schildknaap van bekers omgekeerd duidt op iemand die moeilijk te motiveren is, ze voelen zich verdrietig en halen anderen naar beneden met hun sombere aard. Ze kunnen veel beloven, maar weinig of niets waarmaken."
    },
    {
        name:
        "De ridder van bekers omgekeerd wijst op een persoon die wegloopt van een relatie en/of een creatieve onderneming. De emotionele toestand van de zoeker zou wel eens verre van romantisch kunnen zijn, in plaats daarvan is het waarschijnlijker dat hij cynisch is en zijn inzichten en intuïtie gebruikt om anderen evenveel pijn te doen als hijzelf."
    },
    {
        name:
        "De koningin van bekers omgekeerd wijst op iemand met geblokkeerde paranormale gaven en een emotioneel onstabiel karakter. Deze persoon kan erg gevoelloos zijn of nog erger, zeer donkere gevoelens hebben."
    },
    {
        name:
        "De koning van bekers omgekeerd duidt op iemand die geblokkeerd is in het uiten van zijn gevoelens, niet in staat is te motiveren en gemotiveerd te worden. Dit is iemand met een egoïstische inslag, vaak geboren uit angst voor afwijzing."
    },

    //PENTACLES
    {
        name:
        "Aas van pentacles omgekeerd duidt op financiële verliezen en vermindering van zekerheid. Er is misschien geanticipeerd op een toename van inkomen en rijkdom, maar die is niet uitgekomen."
    },
    {
        name:
        "Twee van pentacles omgekeerd geeft aan dat de zoeker niet in staat is de eisen van het leven te jongleren. Hij verliest zijn financiën en praktische aspecten van het leven uit het oog."
    },
    {
        name:
        "Drie van pentacles omgekeerd wijst op gebrek aan kwaliteit in de werkprestaties."
    },
    {
        name:
        "Vier van pentacles omgekeerd duidt op een gebrek aan iets solide en betrouwbaars. Er is niets echt betrouwbaars om je aan vast te houden."
    },
    {
        name:
        "Vijf van pentacles omgekeerd duidt op wanorde en chaos. Niet alleen is er geen geld, maar er is ook een gebrek aan spiritualiteit en vriendschap."
    },
    {
        name:
        "Zes van pentacles omgekeerd wijst op een gebrek aan vrijgevigheid. Er kan hebzucht zijn in plaats van het delen van rijkdom."
    },
    {
        name:
        "Zeven van pentacles omgekeerd duidt op ongeduld en vooruitgaan voordat de tijd rijp is. Deze kaart omgekeerd kan ook werkloosheid betekenen."
    },
    {
        name:
        "Acht van pentacles omgekeerd wijst op eentonig werk met weinig resultaat. De zoeker kan te laat zijn voor een promotie die hij verdient maar niet krijgt."
    },
    {
        name:
        "Negen van pentacles omgekeerd wijst op eenzaamheid en ongelukkigheid. Het huis is niet veilig en niet erg comfortabel. De zoeker kan zich als een gevangene in zijn eigen huis voelen."
    },
    {
        name:
        "Tien van pentacles omgekeerd wijst op fortuinen of erfenissen die verspild of verloren zijn, of op een minder belangrijke manier, vertraagd. Er kunnen beperkende banden zijn die een last worden."
    },
    {
        name:
        "De schildknaap van pentacles Omgekeerd wijst op leerproblemen en studieproblemen. Het duidt op verspilde talenten, onrealistische ambities en/of intellectueel snobisme."
    },
    {
        name:
        "De ridder van pentacles omgekeerd duidt op slordigheid, bitterheid en afgunst. Dit is iemand die zich optrekt aan degenen die hem kunnen helpen de ladder naar rijkdom en succes te beklimmen, maar niets zal doen voor degenen die geen geld of connecties hebben."
    },
    {
        name:
        "De koningin van pentacles omgekeerd duidt op slechte smaak en gebrek aan gevoeligheid voor de behoeften van andere mensen."
    },
    {
        name:
        "De koning van pentacles omgekeerd wijst op iemand die te conservatief is en geen risico's wil nemen. Hij is terughoudend in het maken van veranderingen in de manier waarop dingen zijn. Hij is waarschijnlijk een vrek en een oppotter."
    },

    //SWORDS
    {
        name:
        "Aas van zwaarden omgekeerd geeft aan dat de roerselen van de azen geblokkeerd zijn. Ideeën en communicatie zijn geblokkeerd."
    },
    {
        name:
        "Twee van zwaarden omgekeerd geeft aan dat conflicten onvermijdelijk zijn en compromissen niet worden bereikt. De querent toont misschien te veel persoonlijkheid en creëert drama alleen maar om iets te doen te hebben."
    },
    {
        name:
        "Drie van zwaarden omgekeerd geeft aan dat er geblokkeerd verdriet is opgeslagen in het hart van de persoon. De persoon is misschien bang om te rouwen en verinnerlijkt het."
    },
    {
        name:
        "Vier van zwaarden omgekeerd duidt op rusteloosheid en burn outs. Gedachten en overtuigingen onderbreken de persoon om te herstellen."
    },
    {
        name:
        "Vijf van zwaarden omgekeerd duidt op conflicten en ruzies die onopgelost blijven, vaak eindeloos aanslepend."
    },
    {
        name:
        "Zes van zwaarden omgekeerd geeft aan dat reisplannen worden opgehouden of vertraagd. Het betekent ook moeilijkheden bij het oplossen van problemen, vooral mentale taken zoals wiskunde en wetenschap."
    },
    {
        name:
        "Zeven van zwaarden omgekeerd duidt op onhandigheid en vergeetachtigheid, vooral als het gaat om het herinneren welke leugens zijn verteld en aan wie."
    },
    {
        name:
        "Acht van zwaarden omgekeerd wijst op een persoon die niet in staat is vooruit te komen door zelftwijfels, angst en isolement. De persoon kent de weg vooruit, maar kiest ervoor om te blijven zitten, vluchtend in zijn eigen hoofd."
    },
    {
        name:
        "Negen van zwaarden omgekeerd geeft aan dat problemen zijn genegeerd in plaats van aangepakt en als ze weer opduiken weet de kweker misschien niet hoe ermee om te gaan."
    },
    {
        name:
        "Tien van zwaarden omgekeerd wijst op een persoon die vasthoudt aan pijn die vaak door anderen is toegebracht. Deze persoon is misschien niet in staat los te laten wat anderen hem hebben aangedaan en voelt geen steun. Niet alleen is er geen steun, er kan zelfs sprake zijn van opzettelijke sabotage."
    },
    {
        name:
        "De schildknaap van zwaarden omgekeerd wijst op een persoon die liegt, roddelt en een betweter is. Dit is iemand die ongepaste dingen zegt en zijn tijd verdoet in chatrooms. Hij houdt zich niet aan geheimen of beloftes."
    },
    {
        name:
        "De ridder van zwaarden omgekeerd wijst op een persoon met een spraakgebrek of leerstoornissen. Dit is iemand die intelligent is, maar om de een of andere reden niet in staat is zich uit te drukken."
    },
    {
        name:
        "De koningin van zwaarden omgekeerd wijst op een vrouw die problemen heeft met het oplossen van problemen en communicatie. Dit is het type persoon dat beschuldigingen zal uiten zonder de feiten te controleren."
    },
    {
        name:
        "De koning van zwaarden omgekeerd wijst op een man die feiten zal manipuleren om zijn zin te krijgen. Er is een blokkade als het gaat om integriteit en objectiviteit. Dit is iemand die een eigen mening heeft en bevooroordeeld is."
    },

    //STAVEN
    {
        name:
        "Aas van staven omgekeerd geeft aan dat een nieuw begin geblokkeerd is. Ideeën en ondernemingen slaan niet aan en er is weinig of geen groei."
    },
    {
        name:
        "Twee van staven omgekeerd wijst op moeilijkheden bij het nemen van een beslissing, mogelijk door de angst om de verkeerde keuze te maken."
    },
    {
        name:
        "Drie van staven omgekeerd geeft aan dat er een vertraging is in beloningen en een vertraging in een uitbetaling. De zoeker is misschien te hoog gegrepen, niet in staat om aan de eisen te voldoen."
    },
    {
        name:
        "Vier van staven omgekeerd geeft aan dat de fundering niet is gelegd of nog niet klaar is."
    },
    {
        name:
        "Vijf van staven omgekeerd wijst op verlies van individualiteit. Er is een strijd om op te vallen tussen anderen die even getalenteerd zijn."
    },
    {
        name:
        "Zes van staven omgekeerd wijst op het niet krijgen van de beloningen die men verschuldigd is, op uitgesteld succes of zelfs op een nederlaag."
    },
    {
        name:
        "Zeven van staven omgekeerd wijst op een onvermogen om stand te houden, vooral als dat niet populair is. Er is een gebrek aan zelfverdediging."
    },
    {
        name:
        "Acht van staven omgekeerd duidt op gebrek aan energie en traagheid, en dingen gaan niet in de goede richting. Er kan sprake zijn van slecht tijdbeheer en vertragingen."
    },
    {
        name:
        "Negen van staven omgekeerd duidt eerder op zwakte en koppigheid dan op kracht en wilskracht. Er is verspilling van energie of gebrek aan energie om iets te redden."
    },
    {
        name:
        "Tien van staven omgekeerd wijst op angst voor verantwoordelijkheden, en onvermogen om de zaken bij te houden. De zoeker kan ongemotiveerd zijn en klaar om weg te lopen van zijn taken."
    },
    {
        name:
        "De schildknaap van staven omgekeerd wijst op een bullebak en een opvliegend persoon die graag opschept en aandacht opeist."
    },
    {
        name:
        "De ridder van van staven omgekeerd wijst op een bullebak die koste wat kost wil winnen. Dit is iemand met acteertalent die zijn charme aan en uit kan zetten en kan manipuleren om zijn zin te krijgen."
    },
    {
        name:
        "De koningin van staven omgekeerd wijst op intimidatie en overheersing. Er is een gebrek aan geloof of nog erger, geloof in zwarte magie en duisternis."
    },
    {
        name:
        "De koning van staven omgekeerd wijst op dictatuur. Dit is iemand met een godcomplex en een slecht humeur, vaak zeer gewelddadig."
    },

    //TRUMPS
    {
        name:
        "Fool reversed indicates new beginnings being blocked, the path is hidden and the querent is having difficulties seeing the world with fresh eyes."
    },
    {
        name:
        "Magician reversed indicates empty promises, false possibilities, a con man, misunderstandings and a lack of substance to make possibilities become a reality."
    },
    {
        name:
        "High Priestess reversed indicates blocked psychic abilities, and little to no awareness of the subconscious influence on our reality. Secrets are kept, answers are not found and instincts are wrong."
    },
    {
        name:
        "Empress reversed indicates neglect and a lack of attention where there should be nurturing. She can represent a mother who gives little affection and hardly any protection to her child. The child can also symbolise a project, a relationship, an enterprise, the home and a business that need attention but are instead being left unattended."
    },
    {
        name:
        "Emperor reversed denotes someone with a childish streak, who is also inconsistent and unpredictable. If this card represents the querent then something is blocking the energy that gives the person authority."
    },
    {
        name:
        "Hierophant reversed denotes prudence, silliness and hypocrisy. There are rules but no knowledge of why these rules are of importance. The ego is without guidance. There is an inflexibility in the system and in the people of the system. It can be an institution who control information and the leaders make themselves rich while the poor remains poor."
    },
    {
        name:
        "Lovers reversed indicates a breakup between partners, families and friends. Whatever it is, the people who split up are not creating the same magic and chemistry on their own and become less whole. Lovers reversed can also indicate a wrong choice being made."
    },
    {
        name:
        "Chariot reversed indicates defeat and cowardice. Instead of charging ahead and taking control of the inner and outer forces, there is the feeling of giving up before you give it a go. ‘What is the use’ is the energy in Chariot reversed."
    },
    {
        name:
        "Strength reversed denotes a lack of courage, lack of passion,fear, even timidity and impatience. Weak will and lack of backbone are indicated when this card shows up reversed. The lion remains untamed, often due to a fear of standing out due to peer pressure."
    },
    {
        name:
        "Hermit reversed indicates isolation and paranoia. There is no insight rather there is a twisted and vicious side to the person. This also denotes someone who is very lonely and is ‘loosing’ their grip on reality due to the amount of time they spend by themselves."
    },
    {
        name:
        "Wheel of fortune reversed indicates bad luck and misfortune. Instead of hitting the top of the wheel and moving forward, you are hitting the bottom, often stagnating. The wheel might not be turning at all and much-needed change is eluding you."
    },
    {
        name:
        "Justice reversed denotes injustice, unfairness, imbalance. You are either getting too much or too little of what you need. Something might be preventing the energy of fairness and balance from succeeding."
    },
    {
        name:
        "Hanged Man reversed indicates stubbornness and selfishness, refusing to give up your perspective to gain new insight. This card reversed denotes someone who is feeling apart from the world and unable to communicate their point of view and their perspective to others."
    },
    {
        name:
        "Death reversed indicates that something that should have come to a blessed end for some reason persists. ‘Not death’ is not a desired thing as it is not living either. For some reason, the person is holding on. Blocked grief is often a factor."
    },
    {
        name:
        "Temperance reversed indicates that the balance between two opposing elements to create a third goes terribly wrong. This card often shows up when two different people who could bring out the best in each other instead bring out the worst."
    },
    {
        name:
        "Devil reversed indicate temptations resisted, stricter moral kept and they escape the chains from the devil. The querent might be too restricted in their life, and they have little or no desires that drive them."
    },
    {
        name:
        "Tower reversed denotes secrets and lies that would have brought down the false structures remain hidden and there is no shake-up. There is no destruction and the Tower remains standing."
    },
    {
        name:
        "Star reversed indicates that any hope or promise offered is going to be false. There is leading astray rather than finding one’s way. There is a feeling of being lost with no way out."
    },
    {
        name:
        "Moon reversed indicates primitive forces at play, a long dark night of the soul. Intuition and creativity are blocked, a sexual block is also possible."
    },
    {
        name:
        "Sun reversed indicates new beginnings, success and happiness being blocked. Success is blocked due to reaching the wrong conclusions and having bad reasoning and poor logic. Things are frustrating and unclear. There might be some problems with pregnancy or raising young children."
    },
    {
        name:
        "Judgement reversed indicates taken on burdens, digging oneself deeper into the old life, being haunted by the past and unable to let go. There is something blocking the querent from renewing themselves."
    },
    {
        name:
        "World reversed indicates staying at home secluded within the comfort zones, projects and ventures remain incomplete. The querent is unable to finish what they started."
    }
    ]
};


$(document).ready(function () {//Displays back of cards
    _.times(3, function (i) {
        i++; //incremented to avoid creating 'img-0'
        $('#img-' + i).html(cardBack);
    });
});

//Creates a tarot card deck
function createDeck() {
    deckArr = [];

    function deckConst(name, displayName) {
        this.name = name;
        this.displayName = displayName;
    }

    var id = 0;
    for (var a0 = 0; a0 < 4; a0++) {
        switch (a0) {
            case 0:
                suit = "cups";
                break;
            case 1:
                suit = "pentacles";
                break;
            case 2:
                suit = "swords";
                break;
            case 3:
                suit = "wands";
                break;
        }

        for (var a1 = 1; a1 < 15; a1++) {

            switch (a1) {
                case 1:
                    rank = "ace";
                    break;
                case 2:
                    rank = "two";
                    break;
                case 3:
                    rank = "three";
                    break;
                case 4:
                    rank = "four";
                    break;
                case 5:
                    rank = "five";
                    break;
                case 6:
                    rank = "six";
                    break;
                case 7:
                    rank = "seven";
                    break;
                case 8:
                    rank = "eight";
                    break;
                case 9:
                    rank = "nine";
                    break;
                case 10:
                    rank = "ten";
                    break;
                case 11:
                    rank = "page";
                    break;
                case 12:
                    rank = "knight";
                    break;
                case 13:
                    rank = "queen";
                    break;
                case 14:
                    rank = "king";
                    break;
                default:
                    break;
            }
            id++;
            var displayName = rank + " of " + suit;
            var name = _.kebabCase(displayName);
            //var name = rank + "-of-" + suit;
            card = new deckConst(name, displayName);
            deck[id] = card;
        }
    }
    deck[57] = new deckConst('the-fool');
    deck[58] = new deckConst('the-magician');
    deck[59] = new deckConst('the-high-priestess');
    deck[60] = new deckConst('the-empress');
    deck[61] = new deckConst('the-emperor');
    deck[62] = new deckConst('the-hierophant');
    deck[63] = new deckConst('the-lovers');
    deck[64] = new deckConst('the-chariot');
    deck[65] = new deckConst('strength');
    deck[66] = new deckConst('the-hermit');
    deck[67] = new deckConst('wheel-of-fortune');
    deck[68] = new deckConst('justice');
    deck[69] = new deckConst('the-hanged-man');
    deck[70] = new deckConst('death');
    deck[71] = new deckConst('temperance');
    deck[72] = new deckConst('the-devil');
    deck[73] = new deckConst('the-tower');
    deck[74] = new deckConst('the-star');
    deck[75] = new deckConst('the-moon');
    deck[76] = new deckConst('the-sun');
    deck[77] = new deckConst('judgement');
    deck[78] = new deckConst('the-world');

    for (var t = 1; t <= 78; t++) {
        deckArr.push(t);
        deck[t].displayName = _.startCase(deck[t].name);
    }

    return deckArr;
    return deck;
}

//gets Rider Waite Card Image i = id from createDeck()
function tarotCards(i) {
    var img = $("<img class='img-thumbnail' src='img/cards/" +
      deck[i].name + ".jpg' alt=" + deck[i].name + "/>");
    return img;
}

//Selects random cards & prevents doubles
function randGen() {
    var cardsLeft = deckArr.length;
    var randInt = Math.floor((Math.random() * cardsLeft));
    var randNum = deckArr[randInt];
    deckArr.splice(randInt, 1);
    return randNum;
}

function showValue(newValue) {
    $("#range").html(newValue);
}
//Past, Present, Future spread
function pastPresentFuture() {
    createDeck();
    $("img").remove();
    $("#blurb").remove();
    $("#pastPresentFuture").html("Another Reading?");
    var percentRevs = $("#range").html();

    for (var b = 1; b <= 3; b++) {
        //$("#rev-" + b).html("");
        var rand = randGen();
        var randInvert = Math.floor((Math.random() * 101));

        if (randInvert >= percentRevs) {
            $("#img-" + b).html(tarotCards(rand));
            $("#info-" + b).html("<h4><b>" + deck[rand].displayName + "</b></h4>");
            $("#info-" + b).append(meanings.upright[rand - 1].name);
        } else {
            $("#img-" + b).html(tarotCards(rand).addClass("invert"));
            $("#info-" + b).html("<h4><b>" + deck[rand].displayName + " - <i>Reversed</i></b></h4>");
            $("#info-" + b).append(meanings.reversed[rand - 1].name);
        }
    }
}
