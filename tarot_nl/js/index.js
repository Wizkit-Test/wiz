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
      name: "Aas van bekers is de kaart voor nieuwe liefde, medeleven, vreugde en creativiteit. Als deze kaart samen met de Aas van Pentakels verschijnt, betekent dit vaak dat je gaat samenwonen in een relatie."
    },
    {
      name: "Twee van bekers is de kaart voor verliefdheid en een hechte relatie, er is echte intimiteit in de relatie, en je kent en begrijpt elkaar op een diep niveau."
    },
    {
      name: "Drie van bekers is de kaart voor feestvieren, uitgaan met vrienden, plezier maken en deel uitmaken van een gemeenschap. Deze kaart komt vaak voor als iemand zich gaat verloven of gaat trouwen."
    },
    {
      name: "Vier van bekers is de kaart voor contemplatie. Zij komt vaak tevoorschijn wanneer de vraagsteller ontevreden is over iets en niet volledig opmerkt wat hem wordt aangeboden."
    },
    {
      name: "Vijf van bekers is de kaart voor spijt en teleurstelling, vooral in de liefde. Een relatie is misschien niet zo gelopen als je had gewild."
    },
    {
      name: "Zes van bekers is de kaart voor sensualiteit en plezier, herinneringen, onschuld, nostalgie en kindertijd. Soms duikt deze kaart op als iemand uit het verleden weer op weg is naar je leven."
    },
    {
      name: "Zeven van bekers is de kaart voor dagdromen, illusies, wensdenken, en fantasieën. Deze kaart komt meestal tevoorschijn wanneer je veel keuzes hebt en een visie nodig hebt om ze te verwezenlijken."
    },
    {
      name: "Acht van bekers is de kaart voor het de rug toekeren naar iets om je droom te gaan volgen. Het dagdromen dat in Zeven bekers gebeurde, heeft zich gematerialiseerd in een visioen dat de querent gaat nastreven."
    },
    {
      name: "Negen van bekers is de kaart voor krijgen wat je wilt en een wens in vervulling laten gaan. Deze kaart spreekt over overvloed en tevredenheid, en ook over trots zijn op wat je hebt bereikt."
    },
    {
      name: "Tien van bekers is de kaart voor totale spirituele gelukzaligheid die je ervaart in je relatie, huis en gezinsleven. Deze kaart gaat over het in overeenstemming zijn met je ware aard en dat alles in je leven in harmonie is met je hogere zelf en je doel op deze planeet."
    },
    {
      name: "De schildknaap van bekers duidt op een jong persoon met een zachtaardige en gevoelige aard. Dit is iemand die in verwondering leeft en soms heel naïef kan zijn."
    },
    {
      name: " De ridder van bekers duidt op een persoon op een zoektocht om zijn liefde te verklaren. Dit is jouw ridder in blinkend harnas. Hij is een zanger, dichter en schrijver. Hij schildert en creëert waar hij ook gaat. Hij is artistiek en ongelooflijk beminnelijk."
    },
    {
      name: "De koningin van bekers duidt op een vrouw die zeer intuïtief en gevoelig is. Ze staat in contact met haar emoties, haar onderbewustzijn en het universum. Ze is meelevend en geeft veel om haar leven en dat van anderen."
    },
    {
      name: "De koning van bekers duidt op een warme, eerlijke en gulle man die vriendelijk en eerlijk is. Dit is iemand die zijn eigen emoties onder controle heeft."
    },

    //PENTACLES
    {
      name: "Aas van Pentacles symboliseert een nieuw begin in je financiële situatie en een kans om je zekerheid te verdiepen."
    },
    {
      name: "Twee van Pentacles symboliseert jongleren met financiën. Misschien heb je inkomsten uit meer dan één bron. Twee van Pentakels wijst ook op het investeren van geld in verschillende projecten, of ruilhandel."
    },
    {
      name: "Drie van Pentales symboliseert je werk, vooral als het gaat om teamwerk of luisteren naar klanten/cliënten. Dit is een positieve kaart die wijst op voldoening in je werk en trots zijn op je werk, maar je moet er wel moeite voor doen om resultaten te zien."
    },
    {
      name: "Vier van Pentacles symboliseert de behoefte aan zekerheid en erkenning in je leven, om controle te hebben over je bezit en om overvloed en geld te laten toenemen. Deze kaart toont koppigheid in de situatie of in de querent."
    },
    {
      name: "Vijf van Pentacles symboliseert financieel verlies of tegenspoed. Het kan ook betekenen dat je je op een plek bevindt waar je je niet veilig voelt en je gezondheid kan eronder lijden."
    },
    {
      name: "Zes van Pentacles symboliseert vrijgevigheid jegens hen die het minder hebben dan jij. Het kan ook betekenen dat je vrijgevigheid van anderen ontvangt."
    },
    {
      name: "Zeven van Pentacles symboliseert een visie die in de toekomst vruchten zal afwerpen. Je plant de zaadjes zodat je in staat zult zijn een veiliger en overvloediger toekomst voor jezelf te oogsten."
    },
    {
      name: "Acht van Pentacles symboliseert vakmanschap met betrekking tot werk. Het kan ook betekenen dat je in de leer gaat en/of een nieuwe vaardigheid leert."
    },
    {
      name: "Negen van Pentacles symboliseert luxe, financiële zekerheid en op een uitbundige vakantie zijn."
    },
    {
      name: "Tien van Pentacles symboliseert het soort rijkdom dat je krijgt als je iets erft, of dat nu je eigen pensioengeld is, een aalmoes, of bezittingen van iemand die is overleden."
    },
    {
      name: "De schildknaap pentacles geeft aan dat je jezelf op de een of andere manier opnieuw aan het uitvinden bent. Het duidt vaak op een kans om iets nieuws te beginnen, of het nu gaat om een creatieve onderneming, een studie, een bedrijf of een nieuwe baan. Page of pentacles is nog geen expert op het gebied van keuze maar heeft een duidelijk doel en droom voor ogen."
    },
    {
      name: "De ridder van pentacles staat voor dienstbaar zijn en het eigenlijke werk doen (in tegenstelling tot Page van Pentakels die graag over het idee dagdroomt in plaats van het werkelijk te beleven). Ridder van Pentakels voelt zich op zijn gemak met routine en is efficiënt en conservatief."
    },
    {
      name: "De koningin van pentacles is iemand met een nuchtere en praktische benadering van het leven en situaties. Het is belangrijk om werk en privé in balans te hebben, als je vanuit huis zou kunnen werken zou je dat waarschijnlijk doen. Deze kaart geniet van materiële genoegens en succes."
    },
    {
      name: "De koning van Pentakels symboliseert een succesvolle zakenman of een persoon in een leidinggevende positie. Dit is een stabiel en gezaghebbend karakter, dat hard werkt en betrouwbaar is."
    },

    //SWORDS
    {
      name: "Aas van zwaarden is de kaart voor een nieuwe gedachte en geloofssysteem. Het is de potentie van mentale energie die gebruikt wordt om helderheid en vaak ook rechtvaardigheid te scheppen."
    },
    {
      name: "Twee van zwaarden is de kaart voor compromis, passiviteit, de vrede bewaren (als in de boot niet schommelen), patstelling, besluiteloosheid en het vermijden van conflicten."
    },
    {
      name: "Drie van zwaarden duidt op liefdesverdriet, verdriet, pijn en scheiding. Soms is de scheiding slechts tijdelijk, andere keren is ze definitief."
    },
    {
      name: "Vier van zwaarden gaat over rust en verjonging, voldoende slapen en tijd nemen om te mediteren."
    },
    {
      name: "Vijf van zwaarden is de kaart voor nederlaag en verraad, conflict en ongezonde concurrentie. Woorden zullen kwetsend zijn, leugens zullen worden verteld en je zwakheden zullen tegen je worden gebruikt."
    },
    {
      name: "Zes van zwaarden gaat over het oversteken van de onrustige zee en het betreden van rustiger water. Dit is de kaart voor het vinden en uitvoeren van oplossingen, waarbij je vaak andere mensen met je meeneemt in het proces, d.w.z. je familie, vrienden en collega's."
    },
    {
      name: "Zeven van zwaarden geeft aan dat iemand op een minder eervolle manier vooruit gaat. Er is vaak oneerlijkheid verbonden met deze kaart, en proberen om weg te komen met iets of proberen om onder iets uit te komen door te liegen."
    },
    {
      name: "Acht van zwaarden is de kaart van vastzitten en niet verder kunnen door verwarring en niet weten wat er aan de hand is. Vaak trekken mensen deze kaart wanneer hun eigen gevoel wordt overruled door andere mensen."
    },
    {
      name: "Negen van zwaarden duidt op bezorgdheid en angst, slapeloosheid en overweldigd worden door negatieve emoties zoals schuldgevoelens en spijt."
    },
    {
      name: "Tien van zwaarden is de kaart voor het einde en verlies, achterbaksheid en gebrek aan steun. Soms duidt deze kaart op het bereiken van de bodem. Het heeft de mentaliteit van 'als het regent, giet het', en de vraagsteller kan het gevoel hebben dat er geen einde aan het lijden komt."
    },
    {
      name: "De schildknaap van zwaarden duidt op een jong en geestelijk zeer actief en slim persoon. Dit is iemand die zich gedurende lange perioden kan concentreren en die gemakkelijk nieuwe vaardigheden aanleert, vooral mentale vaardigheden."
    },
    {
      name: "De ridder van zwaarden duidt op een communicatieve, vastberaden en soms een eigenzinnige persoon die zeer actiegericht is en die van verandering houdt. Dit is iemand met een competitieve inslag en die niet graag zijn/haar positie in een argument loslaat."
    },
    {
      name: "De koningin van zwaarden duidt op een vrouw die koud, professioneel en slim is. Ze is geestig en grappig op een intelligente manier (geen toilethumor). Ze vertegenwoordigt vaak alleenstaande vrouwen die gekwetst zijn in de liefde, en is bitter en gekwetst, maar een meester in het verdoezelen ervan."
    },
    {
      name: "De koning van zwaarden duidt op een professionele man die op de top van zijn kunnen staat. Dit is iemand die een expert is op zijn gebied en zou hebben moeten studeren om deze kennis te verwerven."
    },
    // WANDS
    {
      name: "Aas van staven spreekt van een nieuw begin. Wees moedig en begin iets nieuws. Volg je inspiratie. Aas van Wijs spreekt over geboortes van allerlei aard; de geboorte van ondernemingen en kansen op werk, en ook de geboorte van een baby."
    },
    {
      name: "Twee van staven gaat over manifesteren met behulp van de wil en de kracht van je geest. Het kan zijn dat je je opties moet afwegen voordat je beslist welke het beste bij je past."
    },
    {
      name: "Drie van staven is de kaart voor schrijvers, en schrijfjobs en freelancers. Het is ook de kaart die volgt op het manifesteren dat de querent deed in Twee van Toverstokken, en de querent heeft nu een nieuwe en opwindende kans of droom beleefd."
    },
    {
      name: "Vier van staven is de kaart voor harmonie en ontwikkeling op grotere schaal, vaak het uitbreiden van je woonsituatie, en ook het sterker verbonden zijn met een gemeenschap."
    },
    {
      name: "Vijf van staven gaat over opkomen voor wat belangrijk voor je is, zelfs als dat betekent dat je op tegenstand stuit."
    },
    {
      name: "Zes van staven is de kaart voor populariteit, vooruitgang, overwinning en succes, zelfvertrouwen en krijgen wat je wilt."
    },
    {
      name: "Zeven van staven betekent defensief zijn en barrières en grenzen opwerpen. U beschermt uw standpunt en uw positie."
    },
    {
      name: "Acht van staven spreekt van snelle actie en vooruitgang. Het verschijnt vaak als er een bezoeker op komst is, of als de querent bij iemand op bezoek is."
    },
    {
      name: "Negen van staven is de kaart voor kracht, moed, veerkracht en uithoudingsvermogen. Geef nooit op en geef je nooit over."
    },
    {
      name: "Tien van staven is de kaart voor hard werken en meer verantwoordelijkheid nemen."
    },
    {
      name: "De schildknaap van staven duidt op een enthousiaste jongere die staat te popelen om te ontdekken en levenservaring op te doen."
    },
    {
      name: "De ridder van staven duidt op een persoon die met hoge snelheid door het leven gaat, die het leven in de fast lane leeft. Dit is iemand die het leven van het feest zal zijn."
    },
    {
      name: "De koningin van staven staat voor een warme, vriendelijke en gepassioneerde vrouw. Ze is doelgericht en vastberaden. Ze is ook een metafysica die haar verstand zowel kan gebruiken om harmonie te creëren als om verwoesting aan te richten."
    },
    {
      name: "De koning van staven duidt op een getrouwde man die een natuurlijke en charismatische leider is. Hij heeft ondernemerskwaliteiten en houdt ervan om een nieuw en opwindend project te leiden."
    },

    //TRUMPS
    {
      name: "De dwaas staat voor een nieuw begin, vertrouwen hebben in de toekomst, onervaren zijn, niet weten wat je kunt verwachten, beginnersgeluk hebben, improviseren, geloven dat het universum voorziet, er geen verplichtingen aan verbinden, zorgeloos zijn."
    },
    {
      name: "De magiër staat voor je vermogen om duidelijk te communiceren, om jezelf te 'verkopen' en om innovatief te zijn. De Magiër heeft alle gereedschappen en middelen tot zijn beschikking om zijn gewenste resultaat te manifesteren, dus het is een goede kaart om te krijgen als je wilt creëren."
    },
    {
      name: "De hoge priesteres staat voor geheimen, mysterie, intuïtie, wijsheid, het onmogelijke mogelijk maken, en magie."
    },
    {
      name: "De keizerin vertegenwoordigt vrouwelijke kracht, een verzorger en een op het gezin gericht persoon, onze moeder of een moederfiguur, overvloed, vrouwelijkheid, vruchtbaarheid en de liefde voor het huis en het gezin."
    },
    {
      name: "De keizer vertegenwoordigt de mannelijke energie, de heerser, het hoofd van het huishouden, het hoofd van een bedrijf, organisatie en gemeenschappen. De keizer is een autoriteitsfiguur die een solide basis creëert om op te bouwen en te creëren."
    },
    {
      name: "De hoge priester vertegenwoordigt groepsbewustzijn, religie, je geloofssysteem, ceremonie, tradities, vriendelijkheid, liefdadigheid, het geven van begeleiding in de vorm van spirituele counseling."
    },
    {
      name: "De geliefden staat voor liefde en relatie, zielsverwanten, fysieke aantrekkingskracht, keuzes die gemaakt moeten worden, The Lovers staat voor de dingen doen die ons heel doen voelen, samen zijn met de mensen die ons heel doen voelen."
    },
    {
      name: "De zegewagen vertegenwoordigt uw wilskracht en vastberadenheid. Het staat voor overwinning. De Chariot geeft je het groene licht om door te stoten en de controle te nemen in je leven of een gebied in je leven dat je aandacht nodig heeft."
    },
    {
      name: "Kracht staat voor onze moed, passies, kracht, zelfvertrouwen, geduld en compassie. Kracht herinnert ons eraan onze passies te volgen, de tijd te nemen om de dingen te doen die ons doen tikken, die ons sterk maken in onszelf en die vertrouwen en eigenwaarde opbouwen."
    },
    {
      name: "De kluizenaar staat voor tijd alleen doorbrengen, een eenzame wolf zijn, zielenonderzoek, spirituele begeleiding zoeken, introspectie."
    },
    {
      name: "Het rad van fortuin is de grote lotkaart in het tarotspel. Wat bedoeld is om te zijn, is bedoeld om te zijn. Als in de tarot het Rad van Fortuin opduikt, betekent dit dat de gebeurtenissen en mensen in je leven zijn omdat het voorbeschikt is door het lot."
    },
    {
      name: "Gerechtigheid vertegenwoordigt allerlei juridische zaken, de geestelijke wetten van waarheid en oorzaak en gevolg. Wanneer de Justice kaart verschijnt herinnert het ons eraan om wettig en eerlijk te zijn om het beste resultaat te bereiken."
    },
    {
      name: "De gehangene staat voor tijdelijk stilstaan. Het leven is opgeschort, maar het dient een doel."
    },
    {
      name: "De dood vertegenwoordigt transformatie, einde en nieuw begin. Wanneer de kaart Dood opduikt, vertelt het je dat de dingen niet meer hetzelfde zullen zijn. Er vindt een transformatie plaats, je groeit en verandert met de omstandigheden waarin je je bevindt."
    },
    {
      name: "Geduld staat voor een evenwichtige wisselwerking tussen de elementen om iets nieuws en fris te creëren. Gematigdheid omvat alle elementen op zo'n manier dat het het beste van elke stof naar boven brengt. Wanneer de Temperance kaart in je leven opduikt is er een grote balans en kracht tussen de verschillende gebieden en mensen in je leven die met elkaar samenwerken."
    },
    {
      name: "De duivel vertegenwoordigt de oerbron van gedrag dat zich toont in de vorm van onze verlangens en aardse behoeften. Hij vertegenwoordigt ook onze angsten die verslaving en dwangmatig gedrag veroorzaken."
    },
    {
      name: "De toren vertegenwoordigt rampspoed, emotionele 'meltdowns' en/of driftbuien, woedeproblemen, omwenteling, plotselinge verandering die wordt veroorzaakt door ontwrichting en onthullingen die het fundament van de persoon, het huishouden, de organisatie of zelfs het land doen schudden, afhankelijk van de aard van de vraag."
    },
    {
      name: "Ster staat voor hoop, een stralende toekomst, vreugde, optimisme, leiding, antwoorden op je vragen, verbondenheid met het goddelijke, sereniteit en inspiratie. De Ster schijnt zo helder dat wanneer hij in een reading opduikt, het je vertelt dat je het licht in iemands leven bent."
    },
    {
      name: "Maan staat voor illusies, intuïtie, fantasieën, angsten en onrust. Als de Maan verschijnt, zijn de dingen misschien niet helemaal zoals ze lijken. Je onzekerheden kunnen hoog oplopen of je bevindt je aan de ontvangende kant van de onzekerheden van andere mensen."
    },
    {
      name: "Zon staat voor succes, vreugde, zonneschijn, dag, warmte en geluk. De Zon laat zich zien als het leven zonnig is en je geniet van je tijd met de mensen van wie je houdt. Het leven is eenvoudig in plaats van ingewikkeld. Relaties bloeien op en je voelt je geliefd."
    },
    {
      name: "Het oordeel staat voor verantwoordelijkheid nemen voor je daden en je leven, je karakter goed inschatten, de waarheid zien en weten wat je wilt. De Oordelen-kaart komt vaak tevoorschijn wanneer je een stap vooruit moet zetten en een leider moet zijn, de waarheid moet spreken en assertiever moet zijn."
    },
    {
      name: "Wereld is de laatste Grote Arcana kaart en vertegenwoordigt vervulling en succesvolle voltooiing van een cyclus. Je kent je plaats in de wereld, en je levenslessen hebben je slim en volbracht gemaakt. De Wereld verschijnt wanneer de wereld klaar voor je is en wil wat je te bieden hebt."
    },

  ],
  reversed: [

    //CUPS
    {
      name: "Aas van Bekers omgekeerd wijst op geblokkeerde creativiteit en geblokkeerde emoties. Toegang tot het onderbewustzijn en paranormale begaafdheid is ook geblokkeerd."
    },
    {
      name: "Twee van bekers omgekeerd geeft aan dat men bang is voor liefde en relaties. De zoeker droomt misschien van de liefde, maar als het erop aankomt er daadwerkelijk een te hebben, staat de angst voor afwijzing en verlating in de weg."
    },
    {
      name: "Drie van bekers omgekeerd kan duiden op een verkeerd afgelopen feest, krengerij, jaloezie en concurrentie."
    },
    {
      name: "Vier van bekers omgekeerd geeft aan dat de zoeker niet meer op zijn plaats zit en iets en/of iemand belangrijks uit de weg gaat."
    },
    {
      name: "Vijf van bekers omgekeerd duidt op teleurstelling in de liefde en emotionele zaken. De twee bekers die nog rechtop staan, komen tevoorschijn wanneer deze kaart omgekeerd verschijnt, wat aangeeft dat de zoeker emotioneel totaal leeggezogen kan zijn, meestal door relaties."
    },
    {
      name: "Zes van bekers omgekeerd duidt op een moeilijke jeugd en spookachtige, zelfs verontrustende jeugdherinneringen. Allerlei soorten herinneringen kunnen een probleem zijn als deze kaart omgekeerd is, zelfs geheugenverlies."
    },
    {
      name: "Zeven van bekers omgekeerd geeft aan dat de verbeelding van de zoeker geblokkeerd is. Dagdromen is veranderd in gedachten van angsten en zorgen."
    },
    {
      name: "Acht van bekers omgekeerd geeft aan dat de zoeker zijn droom heeft opgegeven om zich over te geven aan een realiteit die oncomfortabel, liefdeloos en ellendig is. De zoeker kan zijn leven hebben opgegeven om iemand anders te behagen, zijn bedrijf te verkopen om te werken in een baan die hij niet leuk vindt."
    },
    {
      name: "Negen van bekers omgekeerd geeft aan dat de zoeker niet gaat krijgen wat hij wenst. Familie en vriendschap kunnen uit elkaar vallen. Er is sprake van desintegratie en scheiding, vaak als gevolg van keuzes in levensstijl."
    },
    {
      name: "Tien van bekers omgekeerd wijst op verstoring van de harmonie, iets of iemand maakt het moeilijk om de liefde in stand te houden. De zoeker doet misschien alsof alles nog prachtig is in de hoop dat het voor altijd zo zal blijven."
    },
    {
      name: "De schildknaap van bekers omgekeerd duidt op iemand die moeilijk te motiveren is, ze voelen zich verdrietig en halen anderen naar beneden met hun sombere aard. Ze kunnen veel beloven, maar weinig of niets waarmaken."
    },
    {
      name: "De ridder van bekers omgekeerd wijst op een persoon die wegloopt van een relatie en/of een creatieve onderneming. De emotionele toestand van de zoeker zou wel eens verre van romantisch kunnen zijn, in plaats daarvan is het waarschijnlijker dat hij cynisch is en zijn inzichten en intuïtie gebruikt om anderen evenveel pijn te doen als hijzelf."
    },
    {
      name: "De koningin van bekers omgekeerd wijst op iemand met geblokkeerde paranormale gaven en een emotioneel onstabiel karakter. Deze persoon kan erg gevoelloos zijn of nog erger, zeer donkere gevoelens hebben."
    },
    {
      name: "De koning van bekers omgekeerd duidt op iemand die geblokkeerd is in het uiten van zijn gevoelens, niet in staat is te motiveren en gemotiveerd te worden. Dit is iemand met een egoïstische inslag, vaak geboren uit angst voor afwijzing."
    },

    //PENTACLES
    {
      name: "Aas van pentacles omgekeerd duidt op financiële verliezen en vermindering van zekerheid. Er is misschien geanticipeerd op een toename van inkomen en rijkdom, maar die is niet uitgekomen."
    },
    {
      name: "Twee van pentacles omgekeerd geeft aan dat de zoeker niet in staat is de eisen van het leven te jongleren. Hij verliest zijn financiën en praktische aspecten van het leven uit het oog."
    },
    {
      name: "Drie van pentacles omgekeerd wijst op gebrek aan kwaliteit in de werkprestaties."
    },
    {
      name: "Vier van pentacles omgekeerd duidt op een gebrek aan iets solide en betrouwbaars. Er is niets echt betrouwbaars om je aan vast te houden."
    },
    {
      name: "Vijf van pentacles omgekeerd duidt op wanorde en chaos. Niet alleen is er geen geld, maar er is ook een gebrek aan spiritualiteit en vriendschap."
    },
    {
      name: "Zes van pentacles omgekeerd wijst op een gebrek aan vrijgevigheid. Er kan hebzucht zijn in plaats van het delen van rijkdom."
    },
    {
      name: "Zeven van pentacles omgekeerd duidt op ongeduld en vooruitgaan voordat de tijd rijp is. Deze kaart omgekeerd kan ook werkloosheid betekenen."
    },
    {
      name: "Acht van pentacles omgekeerd wijst op eentonig werk met weinig resultaat. De zoeker kan te laat zijn voor een promotie die hij verdient maar niet krijgt."
    },
    {
      name: "Negen van pentacles omgekeerd wijst op eenzaamheid en ongelukkigheid. Het huis is niet veilig en niet erg comfortabel. De zoeker kan zich als een gevangene in zijn eigen huis voelen."
    },
    {
      name: "Tien van pentacles omgekeerd wijst op fortuinen of erfenissen die verspild of verloren zijn, of op een minder belangrijke manier, vertraagd. Er kunnen beperkende banden zijn die een last worden."
    },
    {
      name: "De schildknaap van pentacles Omgekeerd wijst op leerproblemen en studieproblemen. Het duidt op verspilde talenten, onrealistische ambities en/of intellectueel snobisme."
    },
    {
      name: "De ridder van pentacles omgekeerd duidt op slordigheid, bitterheid en afgunst. Dit is iemand die zich optrekt aan degenen die hem kunnen helpen de ladder naar rijkdom en succes te beklimmen, maar niets zal doen voor degenen die geen geld of connecties hebben."
    },
    {
      name: "De koningin van pentacles omgekeerd duidt op slechte smaak en gebrek aan gevoeligheid voor de behoeften van andere mensen."
    },
    {
      name: "De koning van pentacles omgekeerd wijst op iemand die te conservatief is en geen risico's wil nemen. Hij is terughoudend in het maken van veranderingen in de manier waarop dingen zijn. Hij is waarschijnlijk een vrek en een oppotter."
    },

    //SWORDS
    {
      name: "Aas van zwaarden omgekeerd geeft aan dat de roerselen van de azen geblokkeerd zijn. Ideeën en communicatie zijn geblokkeerd."
    },
    {
      name: "Twee van zwaarden omgekeerd geeft aan dat conflicten onvermijdelijk zijn en compromissen niet worden bereikt. De querent toont misschien te veel persoonlijkheid en creëert drama alleen maar om iets te doen te hebben."
    },
    {
      name: "Drie van zwaarden omgekeerd geeft aan dat er geblokkeerd verdriet is opgeslagen in het hart van de persoon. De persoon is misschien bang om te rouwen en verinnerlijkt het."
    },
    {
      name: "Vier van zwaarden omgekeerd duidt op rusteloosheid en burn outs. Gedachten en overtuigingen onderbreken de persoon om te herstellen."
    },
    {
      name: "Vijf van zwaarden omgekeerd duidt op conflicten en ruzies die onopgelost blijven, vaak eindeloos aanslepend."
    },
    {
      name: "Zes van zwaarden omgekeerd geeft aan dat reisplannen worden opgehouden of vertraagd. Het betekent ook moeilijkheden bij het oplossen van problemen, vooral mentale taken zoals wiskunde en wetenschap."
    },
    {
      name: "Zeven van zwaarden omgekeerd duidt op onhandigheid en vergeetachtigheid, vooral als het gaat om het herinneren welke leugens zijn verteld en aan wie."
    },
    {
      name: "Acht van zwaarden omgekeerd wijst op een persoon die niet in staat is vooruit te komen door zelftwijfels, angst en isolement. De persoon kent de weg vooruit, maar kiest ervoor om te blijven zitten, vluchtend in zijn eigen hoofd."
    },
    {
      name: "Negen van zwaarden omgekeerd geeft aan dat problemen zijn genegeerd in plaats van aangepakt en als ze weer opduiken weet de kweker misschien niet hoe ermee om te gaan."
    },
    {
      name: "Tien van zwaarden omgekeerd wijst op een persoon die vasthoudt aan pijn die vaak door anderen is toegebracht. Deze persoon is misschien niet in staat los te laten wat anderen hem hebben aangedaan en voelt geen steun. Niet alleen is er geen steun, er kan zelfs sprake zijn van opzettelijke sabotage."
    },
    {
      name: "De schildknaap van zwaarden omgekeerd wijst op een persoon die liegt, roddelt en een betweter is. Dit is iemand die ongepaste dingen zegt en zijn tijd verdoet in chatrooms. Hij houdt zich niet aan geheimen of beloftes."
    },
    {
      name: "De ridder van zwaarden omgekeerd wijst op een persoon met een spraakgebrek of leerstoornissen. Dit is iemand die intelligent is, maar om de een of andere reden niet in staat is zich uit te drukken."
    },
    {
      name: "De koningin van zwaarden omgekeerd wijst op een vrouw die problemen heeft met het oplossen van problemen en communicatie. Dit is het type persoon dat beschuldigingen zal uiten zonder de feiten te controleren."
    },
    {
      name: "De koning van zwaarden omgekeerd wijst op een man die feiten zal manipuleren om zijn zin te krijgen. Er is een blokkade als het gaat om integriteit en objectiviteit. Dit is iemand die een eigen mening heeft en bevooroordeeld is."
    },

    //WANDS
    {
      name: "Aas van staven omgekeerd geeft aan dat een nieuw begin geblokkeerd is. Ideeën en ondernemingen slaan niet aan en er is weinig of geen groei."
    },
    {
      name: "Twee van staven omgekeerd wijst op moeilijkheden bij het nemen van een beslissing, mogelijk door de angst om de verkeerde keuze te maken."
    },
    {
      name: "Drie van staven omgekeerd geeft aan dat er een vertraging is in beloningen en een vertraging in een uitbetaling. De zoeker is misschien te hoog gegrepen, niet in staat om aan de eisen te voldoen."
    },
    {
      name: "Vier van staven omgekeerd geeft aan dat de fundering niet is gelegd of nog niet klaar is."
    },
    {
      name: "Vijf van staven omgekeerd wijst op verlies van individualiteit. Er is een strijd om op te vallen tussen anderen die even getalenteerd zijn."
    },
    {
      name: "Zes van staven omgekeerd wijst op het niet krijgen van de beloningen die men verschuldigd is, op uitgesteld succes of zelfs op een nederlaag."
    },
    {
      name: "Zeven van staven omgekeerd wijst op een onvermogen om stand te houden, vooral als dat niet populair is. Er is een gebrek aan zelfverdediging."
    },
    {
      name: "Acht van staven omgekeerd duidt op gebrek aan energie en traagheid, en dingen gaan niet in de goede richting. Er kan sprake zijn van slecht tijdbeheer en vertragingen."
    },
    {
      name: "Negen van staven omgekeerd duidt eerder op zwakte en koppigheid dan op kracht en wilskracht. Er is verspilling van energie of gebrek aan energie om iets te redden."
    },
    {
      name: "Tien van staven omgekeerd wijst op angst voor verantwoordelijkheden, en onvermogen om de zaken bij te houden. De zoeker kan ongemotiveerd zijn en klaar om weg te lopen van zijn taken."
    },
    {
      name: "De schildknaap van staven omgekeerd wijst op een bullebak en een opvliegend persoon die graag opschept en aandacht opeist."
    },
    {
      name: "De ridder van van staven omgekeerd wijst op een bullebak die koste wat kost wil winnen. Dit is iemand met acteertalent die zijn charme aan en uit kan zetten en kan manipuleren om zijn zin te krijgen."
    },
    {
      name: "De koningin van staven omgekeerd wijst op intimidatie en overheersing. Er is een gebrek aan geloof of nog erger, geloof in zwarte magie en duisternis."
    },
    {
      name: "De koning van staven omgekeerd wijst op dictatuur. Dit is iemand met een godcomplex en een slecht humeur, vaak zeer gewelddadig."
    },

    //TRUMPS
    {
      name: "De dwaas omgekeerd geeft aan dat een nieuw begin wordt geblokkeerd, dat het pad verborgen is en dat de kwade geest moeite heeft om de wereld met frisse ogen te zien."
    },
    {
      name: "De magiër omgekeerd duidt op loze beloften, valse mogelijkheden, een oplichter, misverstanden en een gebrek aan inhoud om mogelijkheden tot werkelijkheid te maken."
    },
    {
      name: "De hoge priesteres omgekeerd duidt op geblokkeerde paranormale vermogens, en weinig tot geen besef van de onderbewuste invloed op onze werkelijkheid. Geheimen worden bewaard, antwoorden worden niet gevonden en instincten kloppen niet."
    },
    {
      name: "De keizerin omgekeerd duidt op verwaarlozing en een gebrek aan aandacht waar er koestering zou moeten zijn. Ze kan een moeder voorstellen die haar kind weinig genegenheid en nauwelijks bescherming geeft. Het kind kan ook symbool staan voor een project, een relatie, een onderneming, het huis en een bedrijf die aandacht nodig hebben, maar die in plaats daarvan onbeheerd worden achtergelaten."
    },
    {
      name: "De keizer omgekeerd duidt op iemand met een kinderlijke inslag, die ook inconsequent en onvoorspelbaar is. Als deze kaart de persoon vertegenwoordigt, dan is er iets dat de energie blokkeert die de persoon autoriteit geeft."
    },
    {
      name: "De hoge priester omgekeerd duidt op voorzichtigheid, dwaasheid en hypocrisie. Er zijn regels maar geen kennis van waarom deze regels van belang zijn. Het ego is zonder leiding. Er is een onbuigzaamheid in het systeem en in de mensen van het systeem. Het kan een instelling zijn die de informatie beheerst en de leiders maken zichzelf rijk terwijl de armen arm blijven."
    },
    {
      name: "De geliefden omgekeerd duidt op een breuk tussen partners, families en vrienden. Wat het ook is, de mensen die uit elkaar gaan creëren niet dezelfde magie en chemie in hun eentje en worden minder heel. Lovers reversed kan ook wijzen op een verkeerde keuze die wordt gemaakt."
    },
    {
      name: "De Zegewagen omgekeerd wijst op nederlaag en lafheid. In plaats van vooruit te stormen en de innerlijke en uiterlijke krachten onder controle te krijgen, is er het gevoel van opgeven voordat je het een kans hebt gegeven. 'Wat heeft het voor zin' is de energie in Chariot reversed."
    },
    {
      name: "Kracht omgekeerd duidt op een gebrek aan moed, gebrek aan passie, angst, zelfs schuchterheid en ongeduld. Zwakke wil en gebrek aan ruggengraat worden aangegeven wanneer deze kaart omgekeerd verschijnt. De leeuw blijft ongetemd, vaak als gevolg van een angst om op te vallen door groepsdruk."
    },
    {
      name: "De Kluizenaar omgekeerd duidt op isolement en paranoia. Er is geen inzicht, eerder een verdraaide en gemene kant van de persoon. Dit duidt ook op iemand die erg eenzaam is en zijn greep op de werkelijkheid 'verliest' door de hoeveelheid tijd die hij alleen doorbrengt."
    },
    {
      name: "Het rad van fortuin omgekeerd wijst op pech en ongeluk. In plaats van de top van het rad te raken en vooruit te komen, raak je de bodem en stagneer je vaak. Het kan zijn dat het wiel helemaal niet draait en dat de broodnodige verandering je ontglipt."
    },
    {
      name: "Gerechtigheid omgekeerd duidt op onrechtvaardigheid, oneerlijkheid, onevenwichtigheid. Je krijgt of te veel of te weinig van wat je nodig hebt. Iets kan de energie van eerlijkheid en evenwicht verhinderen om te slagen."
    },
    {
      name: "De gehangene omgekeerd wijst op koppigheid en egoïsme, en weigert je perspectief op te geven om nieuwe inzichten te verwerven. Deze kaart omgekeerd duidt op iemand die zich afgescheiden voelt van de wereld en niet in staat is zijn standpunt en perspectief aan anderen over te brengen."
    },
    {
      name: "De dood omgekeerd geeft aan dat iets wat tot een gezegend einde had moeten komen om de een of andere reden blijft voortbestaan. 'Niet dood' is niet iets wat gewenst is, want het is ook niet levend. Om de een of andere reden houdt de persoon vol. Geblokkeerd verdriet is vaak een factor."
    },
    {
      name: "Geduld omgekeerd geeft aan dat het evenwicht tussen twee tegengestelde elementen om een derde te creëren vreselijk mis gaat. Deze kaart komt vaak voor wanneer twee verschillende mensen die het beste in elkaar naar boven zouden kunnen brengen, in plaats daarvan het slechtste naar boven brengen."
    },
    {
      name: "De duivel omgekeerd wijst op verleidingen weerstaan, strengere moraal gehandhaafd en ze ontsnappen aan de ketenen van de duivel. De querent kan te beperkt zijn in zijn leven, en hij heeft weinig of geen verlangens die hem drijven."
    },
    {
      name: "Tower omgekeerd duidt op geheimen en leugens die de valse structuren zouden hebben neergehaald, blijven verborgen en er is geen opschudding. Er is geen vernietiging en de Toren blijft staan."
    },
    {
      name: "Ster omgekeerd geeft aan dat elke hoop of belofte die geboden wordt, vals zal zijn. Men wordt op een dwaalspoor gebracht in plaats van de weg te vinden. Er is een gevoel van verdwaald zijn zonder uitweg."
    },
    {
      name: "Maan omgekeerd wijst op primitieve krachten die spelen, een lange donkere nacht van de ziel. Intuïtie en creativiteit zijn geblokkeerd, een seksuele blokkade is ook mogelijk."
    },
    {
      name: "Zon omgekeerd betekent dat een nieuw begin, succes en geluk geblokkeerd zijn. Succes wordt geblokkeerd door verkeerde conclusies, slechte redeneringen en slechte logica. Dingen zijn frustrerend en onduidelijk. Er kunnen problemen zijn met zwangerschap of het opvoeden van jonge kinderen."
    },
    {
      name: "Het oordeel omgekeerd duidt op lasten op zich nemen, zichzelf dieper ingraven in het oude leven, achtervolgd worden door het verleden en niet in staat zijn het los te laten. Er is iets dat de querent ervan weerhoudt zichzelf te vernieuwen."
    },
    {
      name: "De wereld omgekeerd wijst op thuis blijven, afgezonderd binnen de comfortzones, projecten en ondernemingen blijven onvoltooid. De persoon in kwestie is niet in staat af te maken waar hij aan begonnen is."
    }
  ]
};



$(document).ready(function() { //Displays back of cards
  _.times(3, function(i) {
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
