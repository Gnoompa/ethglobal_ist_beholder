"use strict";
(globalThis["webpackChunkmask_network"] = globalThis["webpackChunkmask_network"] || []).push([[6077],{

/***/ 46868:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ esm)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/core-js@2.6.12/node_modules/core-js/modules/es6.regexp.replace.js
var es6_regexp_replace = __webpack_require__(34850);
// EXTERNAL MODULE: ./node_modules/.pnpm/core-js@2.6.12/node_modules/core-js/modules/es6.array.index-of.js
var es6_array_index_of = __webpack_require__(99047);
;// CONCATENATED MODULE: ./node_modules/.pnpm/twitter-text@3.1.0/node_modules/twitter-text/dist/esm/regexp/cashtag.js
// Copyright 2018 Twitter, Inc.
// Licensed under the Apache License, Version 2.0
// http://www.apache.org/licenses/LICENSE-2.0
var cashtag = /[a-z]{1,6}(?:[._][a-z]{1,2})?/i;
/* harmony default export */ const regexp_cashtag = (cashtag);
;// CONCATENATED MODULE: ./node_modules/.pnpm/twitter-text@3.1.0/node_modules/twitter-text/dist/esm/regexp/punct.js
// Copyright 2018 Twitter, Inc.
// Licensed under the Apache License, Version 2.0
// http://www.apache.org/licenses/LICENSE-2.0
var punct = /\!'#%&'\(\)*\+,\\\-\.\/:;<=>\?@\[\]\^_{|}~\$/;
/* harmony default export */ const regexp_punct = (punct);
// EXTERNAL MODULE: ./node_modules/.pnpm/core-js@2.6.12/node_modules/core-js/modules/es6.regexp.constructor.js
var es6_regexp_constructor = __webpack_require__(54367);
;// CONCATENATED MODULE: ./node_modules/.pnpm/twitter-text@3.1.0/node_modules/twitter-text/dist/esm/lib/regexSupplant.js



// Copyright 2018 Twitter, Inc.
// Licensed under the Apache License, Version 2.0
// http://www.apache.org/licenses/LICENSE-2.0
// Builds a RegExp
/* harmony default export */ function regexSupplant(regex, map, flags) {
  flags = flags || '';

  if (typeof regex !== 'string') {
    if (regex.global && flags.indexOf('g') < 0) {
      flags += 'g';
    }

    if (regex.ignoreCase && flags.indexOf('i') < 0) {
      flags += 'i';
    }

    if (regex.multiline && flags.indexOf('m') < 0) {
      flags += 'm';
    }

    regex = regex.source;
  }

  return new RegExp(regex.replace(/#\{(\w+)\}/g, function (match, name) {
    var newRegex = map[name] || '';

    if (typeof newRegex !== 'string') {
      newRegex = newRegex.source;
    }

    return newRegex;
  }), flags);
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/twitter-text@3.1.0/node_modules/twitter-text/dist/esm/regexp/spacesGroup.js
// Copyright 2018 Twitter, Inc.
// Licensed under the Apache License, Version 2.0
// http://www.apache.org/licenses/LICENSE-2.0
var spacesGroup = /\x09-\x0D\x20\x85\xA0\u1680\u180E\u2000-\u200A\u2028\u2029\u202F\u205F\u3000/;
/* harmony default export */ const regexp_spacesGroup = (spacesGroup);
;// CONCATENATED MODULE: ./node_modules/.pnpm/twitter-text@3.1.0/node_modules/twitter-text/dist/esm/regexp/spaces.js
// Copyright 2018 Twitter, Inc.
// Licensed under the Apache License, Version 2.0
// http://www.apache.org/licenses/LICENSE-2.0


/* harmony default export */ const spaces = (regexSupplant(/[#{spacesGroup}]/, {
  spacesGroup: regexp_spacesGroup
}));
;// CONCATENATED MODULE: ./node_modules/.pnpm/twitter-text@3.1.0/node_modules/twitter-text/dist/esm/regexp/validCashtag.js
// Copyright 2018 Twitter, Inc.
// Licensed under the Apache License, Version 2.0
// http://www.apache.org/licenses/LICENSE-2.0




var validCashtag = regexSupplant('(^|#{spaces})(\\$)(#{cashtag})(?=$|\\s|[#{punct}])', {
  cashtag: regexp_cashtag,
  spaces: spaces,
  punct: regexp_punct
}, 'gi');
/* harmony default export */ const regexp_validCashtag = (validCashtag);
;// CONCATENATED MODULE: ./node_modules/.pnpm/twitter-text@3.1.0/node_modules/twitter-text/dist/esm/extractCashtagsWithIndices.js


// Copyright 2018 Twitter, Inc.
// Licensed under the Apache License, Version 2.0
// http://www.apache.org/licenses/LICENSE-2.0

/* harmony default export */ function extractCashtagsWithIndices(text) {
  if (!text || text.indexOf('$') === -1) {
    return [];
  }

  var tags = [];
  text.replace(regexp_validCashtag, function (match, before, dollar, cashtag, offset, chunk) {
    var startPosition = offset + before.length;
    var endPosition = startPosition + cashtag.length + 1;
    tags.push({
      cashtag: cashtag,
      indices: [startPosition, endPosition]
    });
  });
  return tags;
}
// EXTERNAL MODULE: ./node_modules/.pnpm/core-js@2.6.12/node_modules/core-js/modules/es6.regexp.match.js
var es6_regexp_match = __webpack_require__(26501);
;// CONCATENATED MODULE: ./node_modules/.pnpm/twitter-text@3.1.0/node_modules/twitter-text/dist/esm/regexp/hashSigns.js
// Copyright 2018 Twitter, Inc.
// Licensed under the Apache License, Version 2.0
// http://www.apache.org/licenses/LICENSE-2.0
var hashSigns = /[#＃]/;
/* harmony default export */ const regexp_hashSigns = (hashSigns);
;// CONCATENATED MODULE: ./node_modules/.pnpm/twitter-text@3.1.0/node_modules/twitter-text/dist/esm/regexp/endHashtagMatch.js
// Copyright 2018 Twitter, Inc.
// Licensed under the Apache License, Version 2.0
// http://www.apache.org/licenses/LICENSE-2.0


var endHashtagMatch = regexSupplant(/^(?:#{hashSigns}|:\/\/)/, {
  hashSigns: regexp_hashSigns
});
/* harmony default export */ const regexp_endHashtagMatch = (endHashtagMatch);
;// CONCATENATED MODULE: ./node_modules/.pnpm/twitter-text@3.1.0/node_modules/twitter-text/dist/esm/regexp/validCCTLD.js

// Copyright 2018 Twitter, Inc.
// Licensed under the Apache License, Version 2.0
// http://www.apache.org/licenses/LICENSE-2.0

var validCCTLD = regexSupplant(RegExp('(?:(?:' + '한국|香港|澳門|新加坡|台灣|台湾|中國|中国|გე|ລາວ|ไทย|ලංකා|ഭാരതം|ಭಾರತ|భారత్|சிங்கப்பூர்|இலங்கை|இந்தியா|ଭାରତ|' + 'ભારત|ਭਾਰਤ|ভাৰত|ভারত|বাংলা|भारोत|भारतम्|भारत|ڀارت|پاکستان|موريتانيا|مليسيا|مصر|قطر|فلسطين|عمان|' + 'عراق|سورية|سودان|تونس|بھارت|بارت|ایران|امارات|المغرب|السعودية|الجزائر|البحرين|الاردن|հայ|қаз|' + 'укр|срб|рф|мон|мкд|ею|бел|бг|ευ|ελ|zw|zm|za|yt|ye|ws|wf|vu|vn|vi|vg|ve|vc|va|uz|uy|us|um|uk|' + 'ug|ua|tz|tw|tv|tt|tr|tp|to|tn|tm|tl|tk|tj|th|tg|tf|td|tc|sz|sy|sx|sv|su|st|ss|sr|so|sn|sm|sl|' + 'sk|sj|si|sh|sg|se|sd|sc|sb|sa|rw|ru|rs|ro|re|qa|py|pw|pt|ps|pr|pn|pm|pl|pk|ph|pg|pf|pe|pa|om|' + 'nz|nu|nr|np|no|nl|ni|ng|nf|ne|nc|na|mz|my|mx|mw|mv|mu|mt|ms|mr|mq|mp|mo|mn|mm|ml|mk|mh|mg|mf|' + 'me|md|mc|ma|ly|lv|lu|lt|ls|lr|lk|li|lc|lb|la|kz|ky|kw|kr|kp|kn|km|ki|kh|kg|ke|jp|jo|jm|je|it|' + 'is|ir|iq|io|in|im|il|ie|id|hu|ht|hr|hn|hm|hk|gy|gw|gu|gt|gs|gr|gq|gp|gn|gm|gl|gi|gh|gg|gf|ge|' + 'gd|gb|ga|fr|fo|fm|fk|fj|fi|eu|et|es|er|eh|eg|ee|ec|dz|do|dm|dk|dj|de|cz|cy|cx|cw|cv|cu|cr|co|' + 'cn|cm|cl|ck|ci|ch|cg|cf|cd|cc|ca|bz|by|bw|bv|bt|bs|br|bq|bo|bn|bm|bl|bj|bi|bh|bg|bf|be|bd|bb|' + 'ba|az|ax|aw|au|at|as|ar|aq|ao|an|am|al|ai|ag|af|ae|ad|ac' + ')(?=[^0-9a-zA-Z@+-]|$))'));
/* harmony default export */ const regexp_validCCTLD = (validCCTLD);
;// CONCATENATED MODULE: ./node_modules/.pnpm/twitter-text@3.1.0/node_modules/twitter-text/dist/esm/regexp/directionalMarkersGroup.js
// Copyright 2018 Twitter, Inc.
// Licensed under the Apache License, Version 2.0
// http://www.apache.org/licenses/LICENSE-2.0
var directionalMarkersGroup = /\u202A-\u202E\u061C\u200E\u200F\u2066\u2067\u2068\u2069/;
/* harmony default export */ const regexp_directionalMarkersGroup = (directionalMarkersGroup);
;// CONCATENATED MODULE: ./node_modules/.pnpm/twitter-text@3.1.0/node_modules/twitter-text/dist/esm/regexp/invalidCharsGroup.js
// Copyright 2018 Twitter, Inc.
// Licensed under the Apache License, Version 2.0
// http://www.apache.org/licenses/LICENSE-2.0
var invalidCharsGroup = /\uFFFE\uFEFF\uFFFF/;
/* harmony default export */ const regexp_invalidCharsGroup = (invalidCharsGroup);
;// CONCATENATED MODULE: ./node_modules/.pnpm/twitter-text@3.1.0/node_modules/twitter-text/dist/esm/lib/stringSupplant.js

// Copyright 2018 Twitter, Inc.
// Licensed under the Apache License, Version 2.0
// http://www.apache.org/licenses/LICENSE-2.0
// simple string interpolation
/* harmony default export */ function stringSupplant(str, map) {
  return str.replace(/#\{(\w+)\}/g, function (match, name) {
    return map[name] || '';
  });
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/twitter-text@3.1.0/node_modules/twitter-text/dist/esm/regexp/invalidDomainChars.js
// Copyright 2018 Twitter, Inc.
// Licensed under the Apache License, Version 2.0
// http://www.apache.org/licenses/LICENSE-2.0





var invalidDomainChars = stringSupplant('#{punct}#{spacesGroup}#{invalidCharsGroup}#{directionalMarkersGroup}', {
  punct: regexp_punct,
  spacesGroup: regexp_spacesGroup,
  invalidCharsGroup: regexp_invalidCharsGroup,
  directionalMarkersGroup: regexp_directionalMarkersGroup
});
/* harmony default export */ const regexp_invalidDomainChars = (invalidDomainChars);
;// CONCATENATED MODULE: ./node_modules/.pnpm/twitter-text@3.1.0/node_modules/twitter-text/dist/esm/regexp/validDomainChars.js
// Copyright 2018 Twitter, Inc.
// Licensed under the Apache License, Version 2.0
// http://www.apache.org/licenses/LICENSE-2.0


var validDomainChars = regexSupplant(/[^#{invalidDomainChars}]/, {
  invalidDomainChars: regexp_invalidDomainChars
});
/* harmony default export */ const regexp_validDomainChars = (validDomainChars);
;// CONCATENATED MODULE: ./node_modules/.pnpm/twitter-text@3.1.0/node_modules/twitter-text/dist/esm/regexp/validDomainName.js
// Copyright 2018 Twitter, Inc.
// Licensed under the Apache License, Version 2.0
// http://www.apache.org/licenses/LICENSE-2.0


var validDomainName = regexSupplant(/(?:(?:#{validDomainChars}(?:-|#{validDomainChars})*)?#{validDomainChars}\.)/, {
  validDomainChars: regexp_validDomainChars
});
/* harmony default export */ const regexp_validDomainName = (validDomainName);
;// CONCATENATED MODULE: ./node_modules/.pnpm/twitter-text@3.1.0/node_modules/twitter-text/dist/esm/regexp/validGTLD.js

// Copyright 2018 Twitter, Inc.
// Licensed under the Apache License, Version 2.0
// http://www.apache.org/licenses/LICENSE-2.0

var validGTLD = regexSupplant(RegExp('(?:(?:' + '삼성|닷컴|닷넷|香格里拉|餐厅|食品|飞利浦|電訊盈科|集团|通販|购物|谷歌|诺基亚|联通|网络|网站|网店|网址|组织机构|移动|珠宝|点看|游戏|淡马锡|机构|書籍|时尚|新闻|' + '政府|政务|招聘|手表|手机|我爱你|慈善|微博|广东|工行|家電|娱乐|天主教|大拿|大众汽车|在线|嘉里大酒店|嘉里|商标|商店|商城|公益|公司|八卦|健康|信息|佛山|企业|' + '中文网|中信|世界|ポイント|ファッション|セール|ストア|コム|グーグル|クラウド|みんな|คอม|संगठन|नेट|कॉम|همراه|موقع|موبايلي|كوم|' + 'كاثوليك|عرب|شبكة|بيتك|بازار|العليان|ارامكو|اتصالات|ابوظبي|קום|сайт|рус|орг|онлайн|москва|ком|' + 'католик|дети|zuerich|zone|zippo|zip|zero|zara|zappos|yun|youtube|you|yokohama|yoga|yodobashi|' + 'yandex|yamaxun|yahoo|yachts|xyz|xxx|xperia|xin|xihuan|xfinity|xerox|xbox|wtf|wtc|wow|world|' + 'works|work|woodside|wolterskluwer|wme|winners|wine|windows|win|williamhill|wiki|wien|whoswho|' + 'weir|weibo|wedding|wed|website|weber|webcam|weatherchannel|weather|watches|watch|warman|' + 'wanggou|wang|walter|walmart|wales|vuelos|voyage|voto|voting|vote|volvo|volkswagen|vodka|' + 'vlaanderen|vivo|viva|vistaprint|vista|vision|visa|virgin|vip|vin|villas|viking|vig|video|' + 'viajes|vet|versicherung|vermögensberatung|vermögensberater|verisign|ventures|vegas|vanguard|' + 'vana|vacations|ups|uol|uno|university|unicom|uconnect|ubs|ubank|tvs|tushu|tunes|tui|tube|trv|' + 'trust|travelersinsurance|travelers|travelchannel|travel|training|trading|trade|toys|toyota|' + 'town|tours|total|toshiba|toray|top|tools|tokyo|today|tmall|tkmaxx|tjx|tjmaxx|tirol|tires|tips|' + 'tiffany|tienda|tickets|tiaa|theatre|theater|thd|teva|tennis|temasek|telefonica|telecity|tel|' + 'technology|tech|team|tdk|tci|taxi|tax|tattoo|tatar|tatamotors|target|taobao|talk|taipei|tab|' + 'systems|symantec|sydney|swiss|swiftcover|swatch|suzuki|surgery|surf|support|supply|supplies|' + 'sucks|style|study|studio|stream|store|storage|stockholm|stcgroup|stc|statoil|statefarm|' + 'statebank|starhub|star|staples|stada|srt|srl|spreadbetting|spot|sport|spiegel|space|soy|sony|' + 'song|solutions|solar|sohu|software|softbank|social|soccer|sncf|smile|smart|sling|skype|sky|' + 'skin|ski|site|singles|sina|silk|shriram|showtime|show|shouji|shopping|shop|shoes|shiksha|shia|' + 'shell|shaw|sharp|shangrila|sfr|sexy|sex|sew|seven|ses|services|sener|select|seek|security|' + 'secure|seat|search|scot|scor|scjohnson|science|schwarz|schule|school|scholarships|schmidt|' + 'schaeffler|scb|sca|sbs|sbi|saxo|save|sas|sarl|sapo|sap|sanofi|sandvikcoromant|sandvik|samsung|' + 'samsclub|salon|sale|sakura|safety|safe|saarland|ryukyu|rwe|run|ruhr|rugby|rsvp|room|rogers|' + 'rodeo|rocks|rocher|rmit|rip|rio|ril|rightathome|ricoh|richardli|rich|rexroth|reviews|review|' + 'restaurant|rest|republican|report|repair|rentals|rent|ren|reliance|reit|reisen|reise|rehab|' + 'redumbrella|redstone|red|recipes|realty|realtor|realestate|read|raid|radio|racing|qvc|quest|' + 'quebec|qpon|pwc|pub|prudential|pru|protection|property|properties|promo|progressive|prof|' + 'productions|prod|pro|prime|press|praxi|pramerica|post|porn|politie|poker|pohl|pnc|plus|' + 'plumbing|playstation|play|place|pizza|pioneer|pink|ping|pin|pid|pictures|pictet|pics|piaget|' + 'physio|photos|photography|photo|phone|philips|phd|pharmacy|pfizer|pet|pccw|pay|passagens|' + 'party|parts|partners|pars|paris|panerai|panasonic|pamperedchef|page|ovh|ott|otsuka|osaka|' + 'origins|orientexpress|organic|org|orange|oracle|open|ooo|onyourside|online|onl|ong|one|omega|' + 'ollo|oldnavy|olayangroup|olayan|okinawa|office|off|observer|obi|nyc|ntt|nrw|nra|nowtv|nowruz|' + 'now|norton|northwesternmutual|nokia|nissay|nissan|ninja|nikon|nike|nico|nhk|ngo|nfl|nexus|' + 'nextdirect|next|news|newholland|new|neustar|network|netflix|netbank|net|nec|nba|navy|natura|' + 'nationwide|name|nagoya|nadex|nab|mutuelle|mutual|museum|mtr|mtpc|mtn|msd|movistar|movie|mov|' + 'motorcycles|moto|moscow|mortgage|mormon|mopar|montblanc|monster|money|monash|mom|moi|moe|moda|' + 'mobily|mobile|mobi|mma|mls|mlb|mitsubishi|mit|mint|mini|mil|microsoft|miami|metlife|merckmsd|' + 'meo|menu|men|memorial|meme|melbourne|meet|media|med|mckinsey|mcdonalds|mcd|mba|mattel|' + 'maserati|marshalls|marriott|markets|marketing|market|map|mango|management|man|makeup|maison|' + 'maif|madrid|macys|luxury|luxe|lupin|lundbeck|ltda|ltd|lplfinancial|lpl|love|lotto|lotte|' + 'london|lol|loft|locus|locker|loans|loan|llp|llc|lixil|living|live|lipsy|link|linde|lincoln|' + 'limo|limited|lilly|like|lighting|lifestyle|lifeinsurance|life|lidl|liaison|lgbt|lexus|lego|' + 'legal|lefrak|leclerc|lease|lds|lawyer|law|latrobe|latino|lat|lasalle|lanxess|landrover|land|' + 'lancome|lancia|lancaster|lamer|lamborghini|ladbrokes|lacaixa|kyoto|kuokgroup|kred|krd|kpn|' + 'kpmg|kosher|komatsu|koeln|kiwi|kitchen|kindle|kinder|kim|kia|kfh|kerryproperties|' + 'kerrylogistics|kerryhotels|kddi|kaufen|juniper|juegos|jprs|jpmorgan|joy|jot|joburg|jobs|jnj|' + 'jmp|jll|jlc|jio|jewelry|jetzt|jeep|jcp|jcb|java|jaguar|iwc|iveco|itv|itau|istanbul|ist|' + 'ismaili|iselect|irish|ipiranga|investments|intuit|international|intel|int|insure|insurance|' + 'institute|ink|ing|info|infiniti|industries|inc|immobilien|immo|imdb|imamat|ikano|iinet|ifm|' + 'ieee|icu|ice|icbc|ibm|hyundai|hyatt|hughes|htc|hsbc|how|house|hotmail|hotels|hoteles|hot|' + 'hosting|host|hospital|horse|honeywell|honda|homesense|homes|homegoods|homedepot|holiday|' + 'holdings|hockey|hkt|hiv|hitachi|hisamitsu|hiphop|hgtv|hermes|here|helsinki|help|healthcare|' + 'health|hdfcbank|hdfc|hbo|haus|hangout|hamburg|hair|guru|guitars|guide|guge|gucci|guardian|' + 'group|grocery|gripe|green|gratis|graphics|grainger|gov|got|gop|google|goog|goodyear|goodhands|' + 'goo|golf|goldpoint|gold|godaddy|gmx|gmo|gmbh|gmail|globo|global|gle|glass|glade|giving|gives|' + 'gifts|gift|ggee|george|genting|gent|gea|gdn|gbiz|gay|garden|gap|games|game|gallup|gallo|' + 'gallery|gal|fyi|futbol|furniture|fund|fun|fujixerox|fujitsu|ftr|frontier|frontdoor|frogans|' + 'frl|fresenius|free|fox|foundation|forum|forsale|forex|ford|football|foodnetwork|food|foo|fly|' + 'flsmidth|flowers|florist|flir|flights|flickr|fitness|fit|fishing|fish|firmdale|firestone|fire|' + 'financial|finance|final|film|fido|fidelity|fiat|ferrero|ferrari|feedback|fedex|fast|fashion|' + 'farmers|farm|fans|fan|family|faith|fairwinds|fail|fage|extraspace|express|exposed|expert|' + 'exchange|everbank|events|eus|eurovision|etisalat|esurance|estate|esq|erni|ericsson|equipment|' + 'epson|epost|enterprises|engineering|engineer|energy|emerck|email|education|edu|edeka|eco|eat|' + 'earth|dvr|dvag|durban|dupont|duns|dunlop|duck|dubai|dtv|drive|download|dot|doosan|domains|' + 'doha|dog|dodge|doctor|docs|dnp|diy|dish|discover|discount|directory|direct|digital|diet|' + 'diamonds|dhl|dev|design|desi|dentist|dental|democrat|delta|deloitte|dell|delivery|degree|' + 'deals|dealer|deal|dds|dclk|day|datsun|dating|date|data|dance|dad|dabur|cyou|cymru|cuisinella|' + 'csc|cruises|cruise|crs|crown|cricket|creditunion|creditcard|credit|cpa|courses|coupons|coupon|' + 'country|corsica|coop|cool|cookingchannel|cooking|contractors|contact|consulting|construction|' + 'condos|comsec|computer|compare|company|community|commbank|comcast|com|cologne|college|coffee|' + 'codes|coach|clubmed|club|cloud|clothing|clinique|clinic|click|cleaning|claims|cityeats|city|' + 'citic|citi|citadel|cisco|circle|cipriani|church|chrysler|chrome|christmas|chloe|chintai|cheap|' + 'chat|chase|charity|channel|chanel|cfd|cfa|cern|ceo|center|ceb|cbs|cbre|cbn|cba|catholic|' + 'catering|cat|casino|cash|caseih|case|casa|cartier|cars|careers|career|care|cards|caravan|car|' + 'capitalone|capital|capetown|canon|cancerresearch|camp|camera|cam|calvinklein|call|cal|cafe|' + 'cab|bzh|buzz|buy|business|builders|build|bugatti|budapest|brussels|brother|broker|broadway|' + 'bridgestone|bradesco|box|boutique|bot|boston|bostik|bosch|boots|booking|book|boo|bond|bom|' + 'bofa|boehringer|boats|bnpparibas|bnl|bmw|bms|blue|bloomberg|blog|blockbuster|blanco|' + 'blackfriday|black|biz|bio|bingo|bing|bike|bid|bible|bharti|bet|bestbuy|best|berlin|bentley|' + 'beer|beauty|beats|bcn|bcg|bbva|bbt|bbc|bayern|bauhaus|basketball|baseball|bargains|barefoot|' + 'barclays|barclaycard|barcelona|bar|bank|band|bananarepublic|banamex|baidu|baby|azure|axa|aws|' + 'avianca|autos|auto|author|auspost|audio|audible|audi|auction|attorney|athleta|associates|asia|' + 'asda|arte|art|arpa|army|archi|aramco|arab|aquarelle|apple|app|apartments|aol|anz|anquan|' + 'android|analytics|amsterdam|amica|amfam|amex|americanfamily|americanexpress|alstom|alsace|' + 'ally|allstate|allfinanz|alipay|alibaba|alfaromeo|akdn|airtel|airforce|airbus|aigo|aig|agency|' + 'agakhan|africa|afl|afamilycompany|aetna|aero|aeg|adult|ads|adac|actor|active|aco|accountants|' + 'accountant|accenture|academy|abudhabi|abogado|able|abc|abbvie|abbott|abb|abarth|aarp|aaa|' + 'onion' + ')(?=[^0-9a-zA-Z@+-]|$))'));
/* harmony default export */ const regexp_validGTLD = (validGTLD);
;// CONCATENATED MODULE: ./node_modules/.pnpm/twitter-text@3.1.0/node_modules/twitter-text/dist/esm/regexp/validPunycode.js
// Copyright 2018 Twitter, Inc.
// Licensed under the Apache License, Version 2.0
// http://www.apache.org/licenses/LICENSE-2.0
var validPunycode = /(?:xn--[\-0-9a-z]+)/;
/* harmony default export */ const regexp_validPunycode = (validPunycode);
;// CONCATENATED MODULE: ./node_modules/.pnpm/twitter-text@3.1.0/node_modules/twitter-text/dist/esm/regexp/validSubdomain.js
// Copyright 2018 Twitter, Inc.
// Licensed under the Apache License, Version 2.0
// http://www.apache.org/licenses/LICENSE-2.0


var validSubdomain = regexSupplant(/(?:(?:#{validDomainChars}(?:[_-]|#{validDomainChars})*)?#{validDomainChars}\.)/, {
  validDomainChars: regexp_validDomainChars
});
/* harmony default export */ const regexp_validSubdomain = (validSubdomain);
;// CONCATENATED MODULE: ./node_modules/.pnpm/twitter-text@3.1.0/node_modules/twitter-text/dist/esm/regexp/validDomain.js
// Copyright 2018 Twitter, Inc.
// Licensed under the Apache License, Version 2.0
// http://www.apache.org/licenses/LICENSE-2.0






var validDomain = regexSupplant(/(?:#{validSubdomain}*#{validDomainName}(?:#{validGTLD}|#{validCCTLD}|#{validPunycode}))/, {
  validDomainName: regexp_validDomainName,
  validSubdomain: regexp_validSubdomain,
  validGTLD: regexp_validGTLD,
  validCCTLD: regexp_validCCTLD,
  validPunycode: regexp_validPunycode
});
/* harmony default export */ const regexp_validDomain = (validDomain);
;// CONCATENATED MODULE: ./node_modules/.pnpm/twitter-text@3.1.0/node_modules/twitter-text/dist/esm/regexp/validPortNumber.js
// Copyright 2018 Twitter, Inc.
// Licensed under the Apache License, Version 2.0
// http://www.apache.org/licenses/LICENSE-2.0
var validPortNumber = /[0-9]+/;
/* harmony default export */ const regexp_validPortNumber = (validPortNumber);
;// CONCATENATED MODULE: ./node_modules/.pnpm/twitter-text@3.1.0/node_modules/twitter-text/dist/esm/regexp/cyrillicLettersAndMarks.js
// Copyright 2018 Twitter, Inc.
// Licensed under the Apache License, Version 2.0
// http://www.apache.org/licenses/LICENSE-2.0
var cyrillicLettersAndMarks = /\u0400-\u04FF/;
/* harmony default export */ const regexp_cyrillicLettersAndMarks = (cyrillicLettersAndMarks);
;// CONCATENATED MODULE: ./node_modules/.pnpm/twitter-text@3.1.0/node_modules/twitter-text/dist/esm/regexp/latinAccentChars.js
// Copyright 2018 Twitter, Inc.
// Licensed under the Apache License, Version 2.0
// http://www.apache.org/licenses/LICENSE-2.0
var latinAccentChars = /\xC0-\xD6\xD8-\xF6\xF8-\xFF\u0100-\u024F\u0253\u0254\u0256\u0257\u0259\u025B\u0263\u0268\u026F\u0272\u0289\u028B\u02BB\u0300-\u036F\u1E00-\u1EFF/;
/* harmony default export */ const regexp_latinAccentChars = (latinAccentChars);
;// CONCATENATED MODULE: ./node_modules/.pnpm/twitter-text@3.1.0/node_modules/twitter-text/dist/esm/regexp/validGeneralUrlPathChars.js
// Copyright 2018 Twitter, Inc.
// Licensed under the Apache License, Version 2.0
// http://www.apache.org/licenses/LICENSE-2.0



var validGeneralUrlPathChars = regexSupplant(/[a-z#{cyrillicLettersAndMarks}0-9!\*';:=\+,\.\$\/%#\[\]\-\u2013_~@\|&#{latinAccentChars}]/i, {
  cyrillicLettersAndMarks: regexp_cyrillicLettersAndMarks,
  latinAccentChars: regexp_latinAccentChars
});
/* harmony default export */ const regexp_validGeneralUrlPathChars = (validGeneralUrlPathChars);
;// CONCATENATED MODULE: ./node_modules/.pnpm/twitter-text@3.1.0/node_modules/twitter-text/dist/esm/regexp/validUrlBalancedParens.js
// Copyright 2018 Twitter, Inc.
// Licensed under the Apache License, Version 2.0
// http://www.apache.org/licenses/LICENSE-2.0

 // Allow URL paths to contain up to two nested levels of balanced parens
//  1. Used in Wikipedia URLs like /Primer_(film)
//  2. Used in IIS sessions like /S(dfd346)/
//  3. Used in Rdio URLs like /track/We_Up_(Album_Version_(Edited))/

var validUrlBalancedParens = regexSupplant('\\(' + '(?:' + '#{validGeneralUrlPathChars}+' + '|' + // allow one nested level of balanced parentheses
'(?:' + '#{validGeneralUrlPathChars}*' + '\\(' + '#{validGeneralUrlPathChars}+' + '\\)' + '#{validGeneralUrlPathChars}*' + ')' + ')' + '\\)', {
  validGeneralUrlPathChars: regexp_validGeneralUrlPathChars
}, 'i');
/* harmony default export */ const regexp_validUrlBalancedParens = (validUrlBalancedParens);
;// CONCATENATED MODULE: ./node_modules/.pnpm/twitter-text@3.1.0/node_modules/twitter-text/dist/esm/regexp/validUrlPathEndingChars.js
// Copyright 2018 Twitter, Inc.
// Licensed under the Apache License, Version 2.0
// http://www.apache.org/licenses/LICENSE-2.0



 // Valid end-of-path chracters (so /foo. does not gobble the period).
// 1. Allow =&# for empty URL parameters and other URL-join artifacts

var validUrlPathEndingChars = regexSupplant(/[\+\-a-z#{cyrillicLettersAndMarks}0-9=_#\/#{latinAccentChars}]|(?:#{validUrlBalancedParens})/i, {
  cyrillicLettersAndMarks: regexp_cyrillicLettersAndMarks,
  latinAccentChars: regexp_latinAccentChars,
  validUrlBalancedParens: regexp_validUrlBalancedParens
});
/* harmony default export */ const regexp_validUrlPathEndingChars = (validUrlPathEndingChars);
;// CONCATENATED MODULE: ./node_modules/.pnpm/twitter-text@3.1.0/node_modules/twitter-text/dist/esm/regexp/validUrlPath.js
// Copyright 2018 Twitter, Inc.
// Licensed under the Apache License, Version 2.0
// http://www.apache.org/licenses/LICENSE-2.0



 // Allow @ in a url, but only in the middle. Catch things like http://example.com/@user/

var validUrlPath = regexSupplant('(?:' + '(?:' + '#{validGeneralUrlPathChars}*' + '(?:#{validUrlBalancedParens}#{validGeneralUrlPathChars}*)*' + '#{validUrlPathEndingChars}' + ')|(?:@#{validGeneralUrlPathChars}+/)' + ')', {
  validGeneralUrlPathChars: regexp_validGeneralUrlPathChars,
  validUrlBalancedParens: regexp_validUrlBalancedParens,
  validUrlPathEndingChars: regexp_validUrlPathEndingChars
}, 'i');
/* harmony default export */ const regexp_validUrlPath = (validUrlPath);
;// CONCATENATED MODULE: ./node_modules/.pnpm/twitter-text@3.1.0/node_modules/twitter-text/dist/esm/regexp/validUrlPrecedingChars.js
// Copyright 2018 Twitter, Inc.
// Licensed under the Apache License, Version 2.0
// http://www.apache.org/licenses/LICENSE-2.0



var validUrlPrecedingChars = regexSupplant(/(?:[^A-Za-z0-9@＠$#＃#{invalidCharsGroup}]|[#{directionalMarkersGroup}]|^)/, {
  invalidCharsGroup: regexp_invalidCharsGroup,
  directionalMarkersGroup: regexp_directionalMarkersGroup
});
/* harmony default export */ const regexp_validUrlPrecedingChars = (validUrlPrecedingChars);
;// CONCATENATED MODULE: ./node_modules/.pnpm/twitter-text@3.1.0/node_modules/twitter-text/dist/esm/regexp/validUrlQueryChars.js
// Copyright 2018 Twitter, Inc.
// Licensed under the Apache License, Version 2.0
// http://www.apache.org/licenses/LICENSE-2.0
var validUrlQueryChars = /[a-z0-9!?\*'@\(\);:&=\+\$\/%#\[\]\-_\.,~|]/i;
/* harmony default export */ const regexp_validUrlQueryChars = (validUrlQueryChars);
;// CONCATENATED MODULE: ./node_modules/.pnpm/twitter-text@3.1.0/node_modules/twitter-text/dist/esm/regexp/validUrlQueryEndingChars.js
// Copyright 2018 Twitter, Inc.
// Licensed under the Apache License, Version 2.0
// http://www.apache.org/licenses/LICENSE-2.0
var validUrlQueryEndingChars = /[a-z0-9\-_&=#\/]/i;
/* harmony default export */ const regexp_validUrlQueryEndingChars = (validUrlQueryEndingChars);
;// CONCATENATED MODULE: ./node_modules/.pnpm/twitter-text@3.1.0/node_modules/twitter-text/dist/esm/regexp/extractUrl.js
// Copyright 2018 Twitter, Inc.
// Licensed under the Apache License, Version 2.0
// http://www.apache.org/licenses/LICENSE-2.0







var extractUrl = regexSupplant('(' + // $1 total match
'(#{validUrlPrecedingChars})' + // $2 Preceeding chracter
'(' + // $3 URL
'(https?:\\/\\/)?' + // $4 Protocol (optional)
'(#{validDomain})' + // $5 Domain(s)
'(?::(#{validPortNumber}))?' + // $6 Port number (optional)
'(\\/#{validUrlPath}*)?' + // $7 URL Path
'(\\?#{validUrlQueryChars}*#{validUrlQueryEndingChars})?' + // $8 Query String
')' + ')', {
  validUrlPrecedingChars: regexp_validUrlPrecedingChars,
  validDomain: regexp_validDomain,
  validPortNumber: regexp_validPortNumber,
  validUrlPath: regexp_validUrlPath,
  validUrlQueryChars: regexp_validUrlQueryChars,
  validUrlQueryEndingChars: regexp_validUrlQueryEndingChars
}, 'gi');
/* harmony default export */ const regexp_extractUrl = (extractUrl);
;// CONCATENATED MODULE: ./node_modules/.pnpm/twitter-text@3.1.0/node_modules/twitter-text/dist/esm/regexp/invalidUrlWithoutProtocolPrecedingChars.js
// Copyright 2018 Twitter, Inc.
// Licensed under the Apache License, Version 2.0
// http://www.apache.org/licenses/LICENSE-2.0
var invalidUrlWithoutProtocolPrecedingChars = /[-_.\/]$/;
/* harmony default export */ const regexp_invalidUrlWithoutProtocolPrecedingChars = (invalidUrlWithoutProtocolPrecedingChars);
// EXTERNAL MODULE: ./node_modules/.pnpm/core-js@2.6.12/node_modules/core-js/modules/es6.regexp.split.js
var es6_regexp_split = __webpack_require__(27570);
// EXTERNAL MODULE: ./node_modules/.pnpm/punycode@1.4.1/node_modules/punycode/punycode.js
var punycode = __webpack_require__(5409);
var punycode_default = /*#__PURE__*/__webpack_require__.n(punycode);
;// CONCATENATED MODULE: ./node_modules/.pnpm/twitter-text@3.1.0/node_modules/twitter-text/dist/esm/regexp/validAsciiDomain.js
// Copyright 2018 Twitter, Inc.
// Licensed under the Apache License, Version 2.0
// http://www.apache.org/licenses/LICENSE-2.0





var validAsciiDomain = regexSupplant(/(?:(?:[\-a-z0-9#{latinAccentChars}]+)\.)+(?:#{validGTLD}|#{validCCTLD}|#{validPunycode})/gi, {
  latinAccentChars: regexp_latinAccentChars,
  validGTLD: regexp_validGTLD,
  validCCTLD: regexp_validCCTLD,
  validPunycode: regexp_validPunycode
});
/* harmony default export */ const regexp_validAsciiDomain = (validAsciiDomain);
;// CONCATENATED MODULE: ./node_modules/.pnpm/twitter-text@3.1.0/node_modules/twitter-text/dist/esm/lib/idna.js


// Copyright 2018 Twitter, Inc.
// Licensed under the Apache License, Version 2.0
// http://www.apache.org/licenses/LICENSE-2.0


var MAX_DOMAIN_LABEL_LENGTH = 63;
var PUNYCODE_ENCODED_DOMAIN_PREFIX = 'xn--'; // This is an extremely lightweight implementation of domain name validation according to RFC 3490
// Our regexes handle most of the cases well enough
// See https://tools.ietf.org/html/rfc3490#section-4.1 for details

var idna = {
  toAscii: function toAscii(domain) {
    if (domain.substring(0, 4) === PUNYCODE_ENCODED_DOMAIN_PREFIX && !domain.match(regexp_validAsciiDomain)) {
      // Punycode encoded url cannot contain non ASCII characters
      return;
    }

    var labels = domain.split('.');

    for (var i = 0; i < labels.length; i++) {
      var label = labels[i];
      var punycodeEncodedLabel = punycode_default().toASCII(label);

      if (punycodeEncodedLabel.length < 1 || punycodeEncodedLabel.length > MAX_DOMAIN_LABEL_LENGTH) {
        // DNS label has invalid length
        return;
      }
    }

    return labels.join('.');
  }
};
/* harmony default export */ const lib_idna = (idna);
;// CONCATENATED MODULE: ./node_modules/.pnpm/twitter-text@3.1.0/node_modules/twitter-text/dist/esm/regexp/validTcoUrl.js
// Copyright 2018 Twitter, Inc.
// Licensed under the Apache License, Version 2.0
// http://www.apache.org/licenses/LICENSE-2.0



var validTcoUrl = regexSupplant(/^https?:\/\/t\.co\/([a-z0-9]+)(?:\?#{validUrlQueryChars}*#{validUrlQueryEndingChars})?/, {
  validUrlQueryChars: regexp_validUrlQueryChars,
  validUrlQueryEndingChars: regexp_validUrlQueryEndingChars
}, 'i');
/* harmony default export */ const regexp_validTcoUrl = (validTcoUrl);
;// CONCATENATED MODULE: ./node_modules/.pnpm/twitter-text@3.1.0/node_modules/twitter-text/dist/esm/extractUrlsWithIndices.js




// Copyright 2018 Twitter, Inc.
// Licensed under the Apache License, Version 2.0
// http://www.apache.org/licenses/LICENSE-2.0





var DEFAULT_PROTOCOL = 'https://';
var DEFAULT_PROTOCOL_OPTIONS = {
  extractUrlsWithoutProtocol: true
};
var MAX_URL_LENGTH = 4096;
var MAX_TCO_SLUG_LENGTH = 40;

var extractUrlsWithIndices = function extractUrlsWithIndices(text) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DEFAULT_PROTOCOL_OPTIONS;

  if (!text || (options.extractUrlsWithoutProtocol ? !text.match(/\./) : !text.match(/:/))) {
    return [];
  }

  var urls = [];

  var _loop = function _loop() {
    var before = RegExp.$2;
    var url = RegExp.$3;
    var protocol = RegExp.$4;
    var domain = RegExp.$5;
    var path = RegExp.$7;
    var endPosition = regexp_extractUrl.lastIndex;
    var startPosition = endPosition - url.length;

    if (!isValidUrl(url, protocol || DEFAULT_PROTOCOL, domain)) {
      return "continue";
    } // extract ASCII-only domains.


    if (!protocol) {
      if (!options.extractUrlsWithoutProtocol || before.match(regexp_invalidUrlWithoutProtocolPrecedingChars)) {
        return "continue";
      }

      var lastUrl = null;
      var asciiEndPosition = 0;
      domain.replace(regexp_validAsciiDomain, function (asciiDomain) {
        var asciiStartPosition = domain.indexOf(asciiDomain, asciiEndPosition);
        asciiEndPosition = asciiStartPosition + asciiDomain.length;
        lastUrl = {
          url: asciiDomain,
          indices: [startPosition + asciiStartPosition, startPosition + asciiEndPosition]
        };
        urls.push(lastUrl);
      }); // no ASCII-only domain found. Skip the entire URL.

      if (lastUrl == null) {
        return "continue";
      } // lastUrl only contains domain. Need to add path and query if they exist.


      if (path) {
        lastUrl.url = url.replace(domain, lastUrl.url);
        lastUrl.indices[1] = endPosition;
      }
    } else {
      // In the case of t.co URLs, don't allow additional path characters.
      if (url.match(regexp_validTcoUrl)) {
        var tcoUrlSlug = RegExp.$1;

        if (tcoUrlSlug && tcoUrlSlug.length > MAX_TCO_SLUG_LENGTH) {
          return "continue";
        } else {
          url = RegExp.lastMatch;
          endPosition = startPosition + url.length;
        }
      }

      urls.push({
        url: url,
        indices: [startPosition, endPosition]
      });
    }
  };

  while (regexp_extractUrl.exec(text)) {
    var _ret = _loop();

    if (_ret === "continue") continue;
  }

  return urls;
};

var isValidUrl = function isValidUrl(url, protocol, domain) {
  var urlLength = url.length;
  var punycodeEncodedDomain = lib_idna.toAscii(domain);

  if (!punycodeEncodedDomain || !punycodeEncodedDomain.length) {
    return false;
  }

  urlLength = urlLength + punycodeEncodedDomain.length - domain.length;
  return protocol.length + urlLength <= MAX_URL_LENGTH;
};

/* harmony default export */ const esm_extractUrlsWithIndices = (extractUrlsWithIndices);
// EXTERNAL MODULE: ./node_modules/.pnpm/core-js@2.6.12/node_modules/core-js/modules/es6.array.sort.js
var es6_array_sort = __webpack_require__(72503);
;// CONCATENATED MODULE: ./node_modules/.pnpm/twitter-text@3.1.0/node_modules/twitter-text/dist/esm/removeOverlappingEntities.js

// Copyright 2018 Twitter, Inc.
// Licensed under the Apache License, Version 2.0
// http://www.apache.org/licenses/LICENSE-2.0
/* harmony default export */ function removeOverlappingEntities(entities) {
  entities.sort(function (a, b) {
    return a.indices[0] - b.indices[0];
  });
  var prev = entities[0];

  for (var i = 1; i < entities.length; i++) {
    if (prev.indices[1] > entities[i].indices[0]) {
      entities.splice(i, 1);
      i--;
    } else {
      prev = entities[i];
    }
  }
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/twitter-text@3.1.0/node_modules/twitter-text/dist/esm/regexp/astralLetterAndMarks.js
// Copyright 2018 Twitter, Inc.
// Licensed under the Apache License, Version 2.0
// http://www.apache.org/licenses/LICENSE-2.0
// Generated from unicode_regex/unicode_regex_groups.scala, same as objective c's \p{L}\p{M}
var astralLetterAndMarks = /\ud800[\udc00-\udc0b\udc0d-\udc26\udc28-\udc3a\udc3c\udc3d\udc3f-\udc4d\udc50-\udc5d\udc80-\udcfa\uddfd\ude80-\ude9c\udea0-\uded0\udee0\udf00-\udf1f\udf30-\udf40\udf42-\udf49\udf50-\udf7a\udf80-\udf9d\udfa0-\udfc3\udfc8-\udfcf]|\ud801[\udc00-\udc9d\udd00-\udd27\udd30-\udd63\ude00-\udf36\udf40-\udf55\udf60-\udf67]|\ud802[\udc00-\udc05\udc08\udc0a-\udc35\udc37\udc38\udc3c\udc3f-\udc55\udc60-\udc76\udc80-\udc9e\udd00-\udd15\udd20-\udd39\udd80-\uddb7\uddbe\uddbf\ude00-\ude03\ude05\ude06\ude0c-\ude13\ude15-\ude17\ude19-\ude33\ude38-\ude3a\ude3f\ude60-\ude7c\ude80-\ude9c\udec0-\udec7\udec9-\udee6\udf00-\udf35\udf40-\udf55\udf60-\udf72\udf80-\udf91]|\ud803[\udc00-\udc48]|\ud804[\udc00-\udc46\udc7f-\udcba\udcd0-\udce8\udd00-\udd34\udd50-\udd73\udd76\udd80-\uddc4\uddda\ude00-\ude11\ude13-\ude37\udeb0-\udeea\udf01-\udf03\udf05-\udf0c\udf0f\udf10\udf13-\udf28\udf2a-\udf30\udf32\udf33\udf35-\udf39\udf3c-\udf44\udf47\udf48\udf4b-\udf4d\udf57\udf5d-\udf63\udf66-\udf6c\udf70-\udf74]|\ud805[\udc80-\udcc5\udcc7\udd80-\uddb5\uddb8-\uddc0\ude00-\ude40\ude44\ude80-\udeb7]|\ud806[\udca0-\udcdf\udcff\udec0-\udef8]|\ud808[\udc00-\udf98]|\ud80c[\udc00-\udfff]|\ud80d[\udc00-\udc2e]|\ud81a[\udc00-\ude38\ude40-\ude5e\uded0-\udeed\udef0-\udef4\udf00-\udf36\udf40-\udf43\udf63-\udf77\udf7d-\udf8f]|\ud81b[\udf00-\udf44\udf50-\udf7e\udf8f-\udf9f]|\ud82c[\udc00\udc01]|\ud82f[\udc00-\udc6a\udc70-\udc7c\udc80-\udc88\udc90-\udc99\udc9d\udc9e]|\ud834[\udd65-\udd69\udd6d-\udd72\udd7b-\udd82\udd85-\udd8b\uddaa-\uddad\ude42-\ude44]|\ud835[\udc00-\udc54\udc56-\udc9c\udc9e\udc9f\udca2\udca5\udca6\udca9-\udcac\udcae-\udcb9\udcbb\udcbd-\udcc3\udcc5-\udd05\udd07-\udd0a\udd0d-\udd14\udd16-\udd1c\udd1e-\udd39\udd3b-\udd3e\udd40-\udd44\udd46\udd4a-\udd50\udd52-\udea5\udea8-\udec0\udec2-\udeda\udedc-\udefa\udefc-\udf14\udf16-\udf34\udf36-\udf4e\udf50-\udf6e\udf70-\udf88\udf8a-\udfa8\udfaa-\udfc2\udfc4-\udfcb]|\ud83a[\udc00-\udcc4\udcd0-\udcd6]|\ud83b[\ude00-\ude03\ude05-\ude1f\ude21\ude22\ude24\ude27\ude29-\ude32\ude34-\ude37\ude39\ude3b\ude42\ude47\ude49\ude4b\ude4d-\ude4f\ude51\ude52\ude54\ude57\ude59\ude5b\ude5d\ude5f\ude61\ude62\ude64\ude67-\ude6a\ude6c-\ude72\ude74-\ude77\ude79-\ude7c\ude7e\ude80-\ude89\ude8b-\ude9b\udea1-\udea3\udea5-\udea9\udeab-\udebb]|\ud840[\udc00-\udfff]|\ud841[\udc00-\udfff]|\ud842[\udc00-\udfff]|\ud843[\udc00-\udfff]|\ud844[\udc00-\udfff]|\ud845[\udc00-\udfff]|\ud846[\udc00-\udfff]|\ud847[\udc00-\udfff]|\ud848[\udc00-\udfff]|\ud849[\udc00-\udfff]|\ud84a[\udc00-\udfff]|\ud84b[\udc00-\udfff]|\ud84c[\udc00-\udfff]|\ud84d[\udc00-\udfff]|\ud84e[\udc00-\udfff]|\ud84f[\udc00-\udfff]|\ud850[\udc00-\udfff]|\ud851[\udc00-\udfff]|\ud852[\udc00-\udfff]|\ud853[\udc00-\udfff]|\ud854[\udc00-\udfff]|\ud855[\udc00-\udfff]|\ud856[\udc00-\udfff]|\ud857[\udc00-\udfff]|\ud858[\udc00-\udfff]|\ud859[\udc00-\udfff]|\ud85a[\udc00-\udfff]|\ud85b[\udc00-\udfff]|\ud85c[\udc00-\udfff]|\ud85d[\udc00-\udfff]|\ud85e[\udc00-\udfff]|\ud85f[\udc00-\udfff]|\ud860[\udc00-\udfff]|\ud861[\udc00-\udfff]|\ud862[\udc00-\udfff]|\ud863[\udc00-\udfff]|\ud864[\udc00-\udfff]|\ud865[\udc00-\udfff]|\ud866[\udc00-\udfff]|\ud867[\udc00-\udfff]|\ud868[\udc00-\udfff]|\ud869[\udc00-\uded6\udf00-\udfff]|\ud86a[\udc00-\udfff]|\ud86b[\udc00-\udfff]|\ud86c[\udc00-\udfff]|\ud86d[\udc00-\udf34\udf40-\udfff]|\ud86e[\udc00-\udc1d]|\ud87e[\udc00-\ude1d]|\udb40[\udd00-\uddef]/;
/* harmony default export */ const regexp_astralLetterAndMarks = (astralLetterAndMarks);
;// CONCATENATED MODULE: ./node_modules/.pnpm/twitter-text@3.1.0/node_modules/twitter-text/dist/esm/regexp/bmpLetterAndMarks.js
// Copyright 2018 Twitter, Inc.
// Licensed under the Apache License, Version 2.0
// http://www.apache.org/licenses/LICENSE-2.0
// Generated from unicode_regex/unicode_regex_groups.scala, same as objective c's \p{L}\p{M}
var bmpLetterAndMarks = /A-Za-z\xaa\xb5\xba\xc0-\xd6\xd8-\xf6\xf8-\u02c1\u02c6-\u02d1\u02e0-\u02e4\u02ec\u02ee\u0300-\u0374\u0376\u0377\u037a-\u037d\u037f\u0386\u0388-\u038a\u038c\u038e-\u03a1\u03a3-\u03f5\u03f7-\u0481\u0483-\u052f\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u05d0-\u05ea\u05f0-\u05f2\u0610-\u061a\u0620-\u065f\u066e-\u06d3\u06d5-\u06dc\u06df-\u06e8\u06ea-\u06ef\u06fa-\u06fc\u06ff\u0710-\u074a\u074d-\u07b1\u07ca-\u07f5\u07fa\u0800-\u082d\u0840-\u085b\u08a0-\u08b2\u08e4-\u0963\u0971-\u0983\u0985-\u098c\u098f\u0990\u0993-\u09a8\u09aa-\u09b0\u09b2\u09b6-\u09b9\u09bc-\u09c4\u09c7\u09c8\u09cb-\u09ce\u09d7\u09dc\u09dd\u09df-\u09e3\u09f0\u09f1\u0a01-\u0a03\u0a05-\u0a0a\u0a0f\u0a10\u0a13-\u0a28\u0a2a-\u0a30\u0a32\u0a33\u0a35\u0a36\u0a38\u0a39\u0a3c\u0a3e-\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a59-\u0a5c\u0a5e\u0a70-\u0a75\u0a81-\u0a83\u0a85-\u0a8d\u0a8f-\u0a91\u0a93-\u0aa8\u0aaa-\u0ab0\u0ab2\u0ab3\u0ab5-\u0ab9\u0abc-\u0ac5\u0ac7-\u0ac9\u0acb-\u0acd\u0ad0\u0ae0-\u0ae3\u0b01-\u0b03\u0b05-\u0b0c\u0b0f\u0b10\u0b13-\u0b28\u0b2a-\u0b30\u0b32\u0b33\u0b35-\u0b39\u0b3c-\u0b44\u0b47\u0b48\u0b4b-\u0b4d\u0b56\u0b57\u0b5c\u0b5d\u0b5f-\u0b63\u0b71\u0b82\u0b83\u0b85-\u0b8a\u0b8e-\u0b90\u0b92-\u0b95\u0b99\u0b9a\u0b9c\u0b9e\u0b9f\u0ba3\u0ba4\u0ba8-\u0baa\u0bae-\u0bb9\u0bbe-\u0bc2\u0bc6-\u0bc8\u0bca-\u0bcd\u0bd0\u0bd7\u0c00-\u0c03\u0c05-\u0c0c\u0c0e-\u0c10\u0c12-\u0c28\u0c2a-\u0c39\u0c3d-\u0c44\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c58\u0c59\u0c60-\u0c63\u0c81-\u0c83\u0c85-\u0c8c\u0c8e-\u0c90\u0c92-\u0ca8\u0caa-\u0cb3\u0cb5-\u0cb9\u0cbc-\u0cc4\u0cc6-\u0cc8\u0cca-\u0ccd\u0cd5\u0cd6\u0cde\u0ce0-\u0ce3\u0cf1\u0cf2\u0d01-\u0d03\u0d05-\u0d0c\u0d0e-\u0d10\u0d12-\u0d3a\u0d3d-\u0d44\u0d46-\u0d48\u0d4a-\u0d4e\u0d57\u0d60-\u0d63\u0d7a-\u0d7f\u0d82\u0d83\u0d85-\u0d96\u0d9a-\u0db1\u0db3-\u0dbb\u0dbd\u0dc0-\u0dc6\u0dca\u0dcf-\u0dd4\u0dd6\u0dd8-\u0ddf\u0df2\u0df3\u0e01-\u0e3a\u0e40-\u0e4e\u0e81\u0e82\u0e84\u0e87\u0e88\u0e8a\u0e8d\u0e94-\u0e97\u0e99-\u0e9f\u0ea1-\u0ea3\u0ea5\u0ea7\u0eaa\u0eab\u0ead-\u0eb9\u0ebb-\u0ebd\u0ec0-\u0ec4\u0ec6\u0ec8-\u0ecd\u0edc-\u0edf\u0f00\u0f18\u0f19\u0f35\u0f37\u0f39\u0f3e-\u0f47\u0f49-\u0f6c\u0f71-\u0f84\u0f86-\u0f97\u0f99-\u0fbc\u0fc6\u1000-\u103f\u1050-\u108f\u109a-\u109d\u10a0-\u10c5\u10c7\u10cd\u10d0-\u10fa\u10fc-\u1248\u124a-\u124d\u1250-\u1256\u1258\u125a-\u125d\u1260-\u1288\u128a-\u128d\u1290-\u12b0\u12b2-\u12b5\u12b8-\u12be\u12c0\u12c2-\u12c5\u12c8-\u12d6\u12d8-\u1310\u1312-\u1315\u1318-\u135a\u135d-\u135f\u1380-\u138f\u13a0-\u13f4\u1401-\u166c\u166f-\u167f\u1681-\u169a\u16a0-\u16ea\u16f1-\u16f8\u1700-\u170c\u170e-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176c\u176e-\u1770\u1772\u1773\u1780-\u17d3\u17d7\u17dc\u17dd\u180b-\u180d\u1820-\u1877\u1880-\u18aa\u18b0-\u18f5\u1900-\u191e\u1920-\u192b\u1930-\u193b\u1950-\u196d\u1970-\u1974\u1980-\u19ab\u19b0-\u19c9\u1a00-\u1a1b\u1a20-\u1a5e\u1a60-\u1a7c\u1a7f\u1aa7\u1ab0-\u1abe\u1b00-\u1b4b\u1b6b-\u1b73\u1b80-\u1baf\u1bba-\u1bf3\u1c00-\u1c37\u1c4d-\u1c4f\u1c5a-\u1c7d\u1cd0-\u1cd2\u1cd4-\u1cf6\u1cf8\u1cf9\u1d00-\u1df5\u1dfc-\u1f15\u1f18-\u1f1d\u1f20-\u1f45\u1f48-\u1f4d\u1f50-\u1f57\u1f59\u1f5b\u1f5d\u1f5f-\u1f7d\u1f80-\u1fb4\u1fb6-\u1fbc\u1fbe\u1fc2-\u1fc4\u1fc6-\u1fcc\u1fd0-\u1fd3\u1fd6-\u1fdb\u1fe0-\u1fec\u1ff2-\u1ff4\u1ff6-\u1ffc\u2071\u207f\u2090-\u209c\u20d0-\u20f0\u2102\u2107\u210a-\u2113\u2115\u2119-\u211d\u2124\u2126\u2128\u212a-\u212d\u212f-\u2139\u213c-\u213f\u2145-\u2149\u214e\u2183\u2184\u2c00-\u2c2e\u2c30-\u2c5e\u2c60-\u2ce4\u2ceb-\u2cf3\u2d00-\u2d25\u2d27\u2d2d\u2d30-\u2d67\u2d6f\u2d7f-\u2d96\u2da0-\u2da6\u2da8-\u2dae\u2db0-\u2db6\u2db8-\u2dbe\u2dc0-\u2dc6\u2dc8-\u2dce\u2dd0-\u2dd6\u2dd8-\u2dde\u2de0-\u2dff\u2e2f\u3005\u3006\u302a-\u302f\u3031-\u3035\u303b\u303c\u3041-\u3096\u3099\u309a\u309d-\u309f\u30a1-\u30fa\u30fc-\u30ff\u3105-\u312d\u3131-\u318e\u31a0-\u31ba\u31f0-\u31ff\u3400-\u4db5\u4e00-\u9fcc\ua000-\ua48c\ua4d0-\ua4fd\ua500-\ua60c\ua610-\ua61f\ua62a\ua62b\ua640-\ua672\ua674-\ua67d\ua67f-\ua69d\ua69f-\ua6e5\ua6f0\ua6f1\ua717-\ua71f\ua722-\ua788\ua78b-\ua78e\ua790-\ua7ad\ua7b0\ua7b1\ua7f7-\ua827\ua840-\ua873\ua880-\ua8c4\ua8e0-\ua8f7\ua8fb\ua90a-\ua92d\ua930-\ua953\ua960-\ua97c\ua980-\ua9c0\ua9cf\ua9e0-\ua9ef\ua9fa-\ua9fe\uaa00-\uaa36\uaa40-\uaa4d\uaa60-\uaa76\uaa7a-\uaac2\uaadb-\uaadd\uaae0-\uaaef\uaaf2-\uaaf6\uab01-\uab06\uab09-\uab0e\uab11-\uab16\uab20-\uab26\uab28-\uab2e\uab30-\uab5a\uab5c-\uab5f\uab64\uab65\uabc0-\uabea\uabec\uabed\uac00-\ud7a3\ud7b0-\ud7c6\ud7cb-\ud7fb\uf870-\uf87f\uf882\uf884-\uf89f\uf8b8\uf8c1-\uf8d6\uf900-\ufa6d\ufa70-\ufad9\ufb00-\ufb06\ufb13-\ufb17\ufb1d-\ufb28\ufb2a-\ufb36\ufb38-\ufb3c\ufb3e\ufb40\ufb41\ufb43\ufb44\ufb46-\ufbb1\ufbd3-\ufd3d\ufd50-\ufd8f\ufd92-\ufdc7\ufdf0-\ufdfb\ufe00-\ufe0f\ufe20-\ufe2d\ufe70-\ufe74\ufe76-\ufefc\uff21-\uff3a\uff41-\uff5a\uff66-\uffbe\uffc2-\uffc7\uffca-\uffcf\uffd2-\uffd7\uffda-\uffdc/;
/* harmony default export */ const regexp_bmpLetterAndMarks = (bmpLetterAndMarks);
;// CONCATENATED MODULE: ./node_modules/.pnpm/twitter-text@3.1.0/node_modules/twitter-text/dist/esm/regexp/nonBmpCodePairs.js
// Copyright 2018 Twitter, Inc.
// Licensed under the Apache License, Version 2.0
// http://www.apache.org/licenses/LICENSE-2.0
var nonBmpCodePairs = /[\uD800-\uDBFF][\uDC00-\uDFFF]/gm;
/* harmony default export */ const regexp_nonBmpCodePairs = (nonBmpCodePairs);
;// CONCATENATED MODULE: ./node_modules/.pnpm/twitter-text@3.1.0/node_modules/twitter-text/dist/esm/regexp/hashtagAlpha.js
// Copyright 2018 Twitter, Inc.
// Licensed under the Apache License, Version 2.0
// http://www.apache.org/licenses/LICENSE-2.0



 // A hashtag must contain at least one unicode letter or mark, as well as numbers, underscores, and select special characters.

var hashtagAlpha = regexSupplant(/(?:[#{bmpLetterAndMarks}]|(?=#{nonBmpCodePairs})(?:#{astralLetterAndMarks}))/, {
  bmpLetterAndMarks: regexp_bmpLetterAndMarks,
  nonBmpCodePairs: regexp_nonBmpCodePairs,
  astralLetterAndMarks: regexp_astralLetterAndMarks
});
/* harmony default export */ const regexp_hashtagAlpha = (hashtagAlpha);
;// CONCATENATED MODULE: ./node_modules/.pnpm/twitter-text@3.1.0/node_modules/twitter-text/dist/esm/regexp/astralNumerals.js
// Copyright 2018 Twitter, Inc.
// Licensed under the Apache License, Version 2.0
// http://www.apache.org/licenses/LICENSE-2.0
var astralNumerals = /\ud801[\udca0-\udca9]|\ud804[\udc66-\udc6f\udcf0-\udcf9\udd36-\udd3f\uddd0-\uddd9\udef0-\udef9]|\ud805[\udcd0-\udcd9\ude50-\ude59\udec0-\udec9]|\ud806[\udce0-\udce9]|\ud81a[\ude60-\ude69\udf50-\udf59]|\ud835[\udfce-\udfff]/;
/* harmony default export */ const regexp_astralNumerals = (astralNumerals);
;// CONCATENATED MODULE: ./node_modules/.pnpm/twitter-text@3.1.0/node_modules/twitter-text/dist/esm/regexp/bmpNumerals.js
// Copyright 2018 Twitter, Inc.
// Licensed under the Apache License, Version 2.0
// http://www.apache.org/licenses/LICENSE-2.0
var bmpNumerals = /0-9\u0660-\u0669\u06f0-\u06f9\u07c0-\u07c9\u0966-\u096f\u09e6-\u09ef\u0a66-\u0a6f\u0ae6-\u0aef\u0b66-\u0b6f\u0be6-\u0bef\u0c66-\u0c6f\u0ce6-\u0cef\u0d66-\u0d6f\u0de6-\u0def\u0e50-\u0e59\u0ed0-\u0ed9\u0f20-\u0f29\u1040-\u1049\u1090-\u1099\u17e0-\u17e9\u1810-\u1819\u1946-\u194f\u19d0-\u19d9\u1a80-\u1a89\u1a90-\u1a99\u1b50-\u1b59\u1bb0-\u1bb9\u1c40-\u1c49\u1c50-\u1c59\ua620-\ua629\ua8d0-\ua8d9\ua900-\ua909\ua9d0-\ua9d9\ua9f0-\ua9f9\uaa50-\uaa59\uabf0-\uabf9\uff10-\uff19/;
/* harmony default export */ const regexp_bmpNumerals = (bmpNumerals);
;// CONCATENATED MODULE: ./node_modules/.pnpm/twitter-text@3.1.0/node_modules/twitter-text/dist/esm/regexp/hashtagSpecialChars.js
// Copyright 2018 Twitter, Inc.
// Licensed under the Apache License, Version 2.0
// http://www.apache.org/licenses/LICENSE-2.0
var hashtagSpecialChars = /_\u200c\u200d\ua67e\u05be\u05f3\u05f4\uff5e\u301c\u309b\u309c\u30a0\u30fb\u3003\u0f0b\u0f0c\xb7/;
/* harmony default export */ const regexp_hashtagSpecialChars = (hashtagSpecialChars);
;// CONCATENATED MODULE: ./node_modules/.pnpm/twitter-text@3.1.0/node_modules/twitter-text/dist/esm/regexp/hashtagAlphaNumeric.js
// Copyright 2018 Twitter, Inc.
// Licensed under the Apache License, Version 2.0
// http://www.apache.org/licenses/LICENSE-2.0







var hashtagAlphaNumeric = regexSupplant(/(?:[#{bmpLetterAndMarks}#{bmpNumerals}#{hashtagSpecialChars}]|(?=#{nonBmpCodePairs})(?:#{astralLetterAndMarks}|#{astralNumerals}))/, {
  bmpLetterAndMarks: regexp_bmpLetterAndMarks,
  bmpNumerals: regexp_bmpNumerals,
  hashtagSpecialChars: regexp_hashtagSpecialChars,
  nonBmpCodePairs: regexp_nonBmpCodePairs,
  astralLetterAndMarks: regexp_astralLetterAndMarks,
  astralNumerals: regexp_astralNumerals
});
/* harmony default export */ const regexp_hashtagAlphaNumeric = (hashtagAlphaNumeric);
;// CONCATENATED MODULE: ./node_modules/.pnpm/twitter-text@3.1.0/node_modules/twitter-text/dist/esm/regexp/codePoint.js
// Copyright 2018 Twitter, Inc.
// Licensed under the Apache License, Version 2.0
// http://www.apache.org/licenses/LICENSE-2.0
var codePoint = /(?:[^\uD800-\uDFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF])/;
/* harmony default export */ const regexp_codePoint = (codePoint);
;// CONCATENATED MODULE: ./node_modules/.pnpm/twitter-text@3.1.0/node_modules/twitter-text/dist/esm/regexp/hashtagBoundary.js
// Copyright 2018 Twitter, Inc.
// Licensed under the Apache License, Version 2.0
// http://www.apache.org/licenses/LICENSE-2.0



var hashtagBoundary = regexSupplant(/(?:^|\uFE0E|\uFE0F|$|(?!#{hashtagAlphaNumeric}|&)#{codePoint})/, {
  codePoint: regexp_codePoint,
  hashtagAlphaNumeric: regexp_hashtagAlphaNumeric
});
/* harmony default export */ const regexp_hashtagBoundary = (hashtagBoundary);
;// CONCATENATED MODULE: ./node_modules/.pnpm/twitter-text@3.1.0/node_modules/twitter-text/dist/esm/regexp/validHashtag.js
// Copyright 2018 Twitter, Inc.
// Licensed under the Apache License, Version 2.0
// http://www.apache.org/licenses/LICENSE-2.0





var validHashtag = regexSupplant(/(#{hashtagBoundary})(#{hashSigns})(?!\uFE0F|\u20E3)(#{hashtagAlphaNumeric}*#{hashtagAlpha}#{hashtagAlphaNumeric}*)/gi, {
  hashtagBoundary: regexp_hashtagBoundary,
  hashSigns: regexp_hashSigns,
  hashtagAlphaNumeric: regexp_hashtagAlphaNumeric,
  hashtagAlpha: regexp_hashtagAlpha
});
/* harmony default export */ const regexp_validHashtag = (validHashtag);
;// CONCATENATED MODULE: ./node_modules/.pnpm/twitter-text@3.1.0/node_modules/twitter-text/dist/esm/extractHashtagsWithIndices.js


// Copyright 2018 Twitter, Inc.
// Licensed under the Apache License, Version 2.0
// http://www.apache.org/licenses/LICENSE-2.0






var extractHashtagsWithIndices = function extractHashtagsWithIndices(text, options) {
  if (!options) {
    options = {
      checkUrlOverlap: true
    };
  }

  if (!text || !text.match(regexp_hashSigns)) {
    return [];
  }

  var tags = [];
  text.replace(regexp_validHashtag, function (match, before, hash, hashText, offset, chunk) {
    var after = chunk.slice(offset + match.length);

    if (after.match(regexp_endHashtagMatch)) {
      return;
    }

    var startPosition = offset + before.length;
    var endPosition = startPosition + hashText.length + 1;
    tags.push({
      hashtag: hashText,
      indices: [startPosition, endPosition]
    });
  });

  if (options.checkUrlOverlap) {
    // also extract URL entities
    var urls = esm_extractUrlsWithIndices(text);

    if (urls.length > 0) {
      var entities = tags.concat(urls); // remove overlap

      removeOverlappingEntities(entities); // only push back hashtags

      tags = [];

      for (var i = 0; i < entities.length; i++) {
        if (entities[i].hashtag) {
          tags.push(entities[i]);
        }
      }
    }
  }

  return tags;
};

/* harmony default export */ const esm_extractHashtagsWithIndices = (extractHashtagsWithIndices);
;// CONCATENATED MODULE: ./node_modules/.pnpm/twitter-text@3.1.0/node_modules/twitter-text/dist/esm/regexp/atSigns.js
// Copyright 2018 Twitter, Inc.
// Licensed under the Apache License, Version 2.0
// http://www.apache.org/licenses/LICENSE-2.0
var atSigns = /[@＠]/;
/* harmony default export */ const regexp_atSigns = (atSigns);
;// CONCATENATED MODULE: ./node_modules/.pnpm/twitter-text@3.1.0/node_modules/twitter-text/dist/esm/regexp/endMentionMatch.js
// Copyright 2018 Twitter, Inc.
// Licensed under the Apache License, Version 2.0
// http://www.apache.org/licenses/LICENSE-2.0



var endMentionMatch = regexSupplant(/^(?:#{atSigns}|[#{latinAccentChars}]|:\/\/)/, {
  atSigns: regexp_atSigns,
  latinAccentChars: regexp_latinAccentChars
});
/* harmony default export */ const regexp_endMentionMatch = (endMentionMatch);
;// CONCATENATED MODULE: ./node_modules/.pnpm/twitter-text@3.1.0/node_modules/twitter-text/dist/esm/regexp/validMentionPrecedingChars.js
// Copyright 2018 Twitter, Inc.
// Licensed under the Apache License, Version 2.0
// http://www.apache.org/licenses/LICENSE-2.0
var validMentionPrecedingChars = /(?:^|[^a-zA-Z0-9_!#$%&*@＠]|(?:^|[^a-zA-Z0-9_+~.-])(?:rt|RT|rT|Rt):?)/;
/* harmony default export */ const regexp_validMentionPrecedingChars = (validMentionPrecedingChars);
;// CONCATENATED MODULE: ./node_modules/.pnpm/twitter-text@3.1.0/node_modules/twitter-text/dist/esm/regexp/validMentionOrList.js
// Copyright 2018 Twitter, Inc.
// Licensed under the Apache License, Version 2.0
// http://www.apache.org/licenses/LICENSE-2.0



var validMentionOrList = regexSupplant('(#{validMentionPrecedingChars})' + // $1: Preceding character
'(#{atSigns})' + // $2: At mark
'([a-zA-Z0-9_]{1,20})' + // $3: Screen name
'(/[a-zA-Z][a-zA-Z0-9_-]{0,24})?', // $4: List (optional)
{
  validMentionPrecedingChars: regexp_validMentionPrecedingChars,
  atSigns: regexp_atSigns
}, 'g');
/* harmony default export */ const regexp_validMentionOrList = (validMentionOrList);
;// CONCATENATED MODULE: ./node_modules/.pnpm/twitter-text@3.1.0/node_modules/twitter-text/dist/esm/extractMentionsOrListsWithIndices.js


// Copyright 2018 Twitter, Inc.
// Licensed under the Apache License, Version 2.0
// http://www.apache.org/licenses/LICENSE-2.0



/* harmony default export */ function extractMentionsOrListsWithIndices(text) {
  if (!text || !text.match(regexp_atSigns)) {
    return [];
  }

  var possibleNames = [];
  text.replace(regexp_validMentionOrList, function (match, before, atSign, screenName, slashListname, offset, chunk) {
    var after = chunk.slice(offset + match.length);

    if (!after.match(regexp_endMentionMatch)) {
      slashListname = slashListname || '';
      var startPosition = offset + before.length;
      var endPosition = startPosition + screenName.length + slashListname.length + 1;
      possibleNames.push({
        screenName: screenName,
        listSlug: slashListname,
        indices: [startPosition, endPosition]
      });
    }
  });
  return possibleNames;
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/twitter-text@3.1.0/node_modules/twitter-text/dist/esm/extractEntitiesWithIndices.js
// Copyright 2018 Twitter, Inc.
// Licensed under the Apache License, Version 2.0
// http://www.apache.org/licenses/LICENSE-2.0





/* harmony default export */ function extractEntitiesWithIndices(text, options) {
  var entities = esm_extractUrlsWithIndices(text, options).concat(extractMentionsOrListsWithIndices(text)).concat(esm_extractHashtagsWithIndices(text, {
    checkUrlOverlap: false
  })).concat(extractCashtagsWithIndices(text));

  if (entities.length == 0) {
    return [];
  }

  removeOverlappingEntities(entities);
  return entities;
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/twitter-text@3.1.0/node_modules/twitter-text/dist/esm/lib/clone.js
// Copyright 2018 Twitter, Inc.
// Licensed under the Apache License, Version 2.0
// http://www.apache.org/licenses/LICENSE-2.0
/* harmony default export */ function clone(o) {
  var r = {};

  for (var k in o) {
    if (o.hasOwnProperty(k)) {
      r[k] = o[k];
    }
  }

  return r;
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/twitter-text@3.1.0/node_modules/twitter-text/dist/esm/extractHtmlAttrsFromOptions.js
// Copyright 2018 Twitter, Inc.
// Licensed under the Apache License, Version 2.0
// http://www.apache.org/licenses/LICENSE-2.0
var BOOLEAN_ATTRIBUTES = {
  disabled: true,
  readonly: true,
  multiple: true,
  checked: true
}; // Options which should not be passed as HTML attributes

var OPTIONS_NOT_ATTRIBUTES = {
  urlClass: true,
  listClass: true,
  usernameClass: true,
  hashtagClass: true,
  cashtagClass: true,
  usernameUrlBase: true,
  listUrlBase: true,
  hashtagUrlBase: true,
  cashtagUrlBase: true,
  usernameUrlBlock: true,
  listUrlBlock: true,
  hashtagUrlBlock: true,
  linkUrlBlock: true,
  usernameIncludeSymbol: true,
  suppressLists: true,
  suppressNoFollow: true,
  targetBlank: true,
  suppressDataScreenName: true,
  urlEntities: true,
  symbolTag: true,
  textWithSymbolTag: true,
  urlTarget: true,
  invisibleTagAttrs: true,
  linkAttributeBlock: true,
  linkTextBlock: true,
  htmlEscapeNonEntities: true
};
/* harmony default export */ function extractHtmlAttrsFromOptions(options) {
  var htmlAttrs = {};

  for (var k in options) {
    var v = options[k];

    if (OPTIONS_NOT_ATTRIBUTES[k]) {
      continue;
    }

    if (BOOLEAN_ATTRIBUTES[k]) {
      v = v ? k : null;
    }

    if (v == null) {
      continue;
    }

    htmlAttrs[k] = v;
  }

  return htmlAttrs;
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/twitter-text@3.1.0/node_modules/twitter-text/dist/esm/htmlEscape.js

// Copyright 2018 Twitter, Inc.
// Licensed under the Apache License, Version 2.0
// http://www.apache.org/licenses/LICENSE-2.0
var HTML_ENTITIES = {
  '&': '&amp;',
  '>': '&gt;',
  '<': '&lt;',
  '"': '&quot;',
  "'": '&#39;'
};
/* harmony default export */ function htmlEscape(text) {
  return text && text.replace(/[&"'><]/g, function (character) {
    return HTML_ENTITIES[character];
  });
}
// EXTERNAL MODULE: ./node_modules/.pnpm/core-js@2.6.12/node_modules/core-js/modules/es6.regexp.to-string.js
var es6_regexp_to_string = __webpack_require__(84539);
// EXTERNAL MODULE: ./node_modules/.pnpm/core-js@2.6.12/node_modules/core-js/modules/es6.date.to-string.js
var es6_date_to_string = __webpack_require__(11867);
// EXTERNAL MODULE: ./node_modules/.pnpm/core-js@2.6.12/node_modules/core-js/modules/es6.object.to-string.js
var es6_object_to_string = __webpack_require__(3832);
;// CONCATENATED MODULE: ./node_modules/.pnpm/twitter-text@3.1.0/node_modules/twitter-text/dist/esm/tagAttrs.js



// Copyright 2018 Twitter, Inc.
// Licensed under the Apache License, Version 2.0
// http://www.apache.org/licenses/LICENSE-2.0

var tagAttrs_BOOLEAN_ATTRIBUTES = {
  disabled: true,
  readonly: true,
  multiple: true,
  checked: true
};
/* harmony default export */ function tagAttrs(attributes) {
  var htmlAttrs = '';

  for (var k in attributes) {
    var v = attributes[k];

    if (tagAttrs_BOOLEAN_ATTRIBUTES[k]) {
      v = v ? k : null;
    }

    if (v == null) {
      continue;
    }

    htmlAttrs += " ".concat(htmlEscape(k), "=\"").concat(htmlEscape(v.toString()), "\"");
  }

  return htmlAttrs;
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/twitter-text@3.1.0/node_modules/twitter-text/dist/esm/linkToText.js
// Copyright 2018 Twitter, Inc.
// Licensed under the Apache License, Version 2.0
// http://www.apache.org/licenses/LICENSE-2.0


/* harmony default export */ function linkToText(entity, text, attributes, options) {
  if (!options.suppressNoFollow) {
    attributes.rel = 'nofollow';
  } // if linkAttributeBlock is specified, call it to modify the attributes


  if (options.linkAttributeBlock) {
    options.linkAttributeBlock(entity, attributes);
  } // if linkTextBlock is specified, call it to get a new/modified link text


  if (options.linkTextBlock) {
    text = options.linkTextBlock(entity, text);
  }

  var d = {
    text: text,
    attr: tagAttrs(attributes)
  };
  return stringSupplant('<a#{attr}>#{text}</a>', d);
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/twitter-text@3.1.0/node_modules/twitter-text/dist/esm/linkToTextWithSymbol.js

// Copyright 2018 Twitter, Inc.
// Licensed under the Apache License, Version 2.0
// http://www.apache.org/licenses/LICENSE-2.0



/* harmony default export */ function linkToTextWithSymbol(entity, symbol, text, attributes, options) {
  var taggedSymbol = options.symbolTag ? "<".concat(options.symbolTag, ">").concat(symbol, "</").concat(options.symbolTag, ">") : symbol;
  text = htmlEscape(text);
  var taggedText = options.textWithSymbolTag ? "<".concat(options.textWithSymbolTag, ">").concat(text, "</").concat(options.textWithSymbolTag, ">") : text;

  if (options.usernameIncludeSymbol || !symbol.match(regexp_atSigns)) {
    return linkToText(entity, taggedSymbol + taggedText, attributes, options);
  } else {
    return taggedSymbol + linkToText(entity, taggedText, attributes, options);
  }
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/twitter-text@3.1.0/node_modules/twitter-text/dist/esm/linkToCashtag.js
// Copyright 2018 Twitter, Inc.
// Licensed under the Apache License, Version 2.0
// http://www.apache.org/licenses/LICENSE-2.0



/* harmony default export */ function linkToCashtag(entity, text, options) {
  var cashtag = htmlEscape(entity.cashtag);
  var attrs = clone(options.htmlAttrs || {});
  attrs.href = options.cashtagUrlBase + cashtag;
  attrs.title = "$".concat(cashtag);
  attrs['class'] = options.cashtagClass;

  if (options.targetBlank) {
    attrs.target = '_blank';
  }

  return linkToTextWithSymbol(entity, '$', cashtag, attrs, options);
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/twitter-text@3.1.0/node_modules/twitter-text/dist/esm/regexp/rtlChars.js
// Copyright 2018 Twitter, Inc.
// Licensed under the Apache License, Version 2.0
// http://www.apache.org/licenses/LICENSE-2.0
var rtlChars = /[\u0600-\u06FF]|[\u0750-\u077F]|[\u0590-\u05FF]|[\uFE70-\uFEFF]/gm;
/* harmony default export */ const regexp_rtlChars = (rtlChars);
;// CONCATENATED MODULE: ./node_modules/.pnpm/twitter-text@3.1.0/node_modules/twitter-text/dist/esm/linkToHashtag.js

// Copyright 2018 Twitter, Inc.
// Licensed under the Apache License, Version 2.0
// http://www.apache.org/licenses/LICENSE-2.0




/* harmony default export */ function linkToHashtag(entity, text, options) {
  var hash = text.substring(entity.indices[0], entity.indices[0] + 1);
  var hashtag = htmlEscape(entity.hashtag);
  var attrs = clone(options.htmlAttrs || {});
  attrs.href = options.hashtagUrlBase + hashtag;
  attrs.title = "#".concat(hashtag);
  attrs['class'] = options.hashtagClass;

  if (hashtag.charAt(0).match(regexp_rtlChars)) {
    attrs['class'] += ' rtl';
  }

  if (options.targetBlank) {
    attrs.target = '_blank';
  }

  return linkToTextWithSymbol(entity, hash, hashtag, attrs, options);
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/twitter-text@3.1.0/node_modules/twitter-text/dist/esm/linkTextWithEntity.js



// Copyright 2018 Twitter, Inc.
// Licensed under the Apache License, Version 2.0
// http://www.apache.org/licenses/LICENSE-2.0


/* harmony default export */ function linkTextWithEntity(entity, options) {
  var displayUrl = entity.display_url;
  var expandedUrl = entity.expanded_url; // Goal: If a user copies and pastes a tweet containing t.co'ed link, the resulting paste
  // should contain the full original URL (expanded_url), not the display URL.
  //
  // Method: Whenever possible, we actually emit HTML that contains expanded_url, and use
  // font-size:0 to hide those parts that should not be displayed (because they are not part of display_url).
  // Elements with font-size:0 get copied even though they are not visible.
  // Note that display:none doesn't work here. Elements with display:none don't get copied.
  //
  // Additionally, we want to *display* ellipses, but we don't want them copied.  To make this happen we
  // wrap the ellipses in a tco-ellipsis class and provide an onCopy handler that sets display:none on
  // everything with the tco-ellipsis class.
  //
  // Exception: pic.twitter.com images, for which expandedUrl = "https://twitter.com/#!/username/status/1234/photo/1
  // For those URLs, display_url is not a substring of expanded_url, so we don't do anything special to render the elided parts.
  // For a pic.twitter.com URL, the only elided part will be the "https://", so this is fine.

  var displayUrlSansEllipses = displayUrl.replace(/…/g, ''); // We have to disregard ellipses for matching
  // Note: we currently only support eliding parts of the URL at the beginning or the end.
  // Eventually we may want to elide parts of the URL in the *middle*.  If so, this code will
  // become more complicated.  We will probably want to create a regexp out of display URL,
  // replacing every ellipsis with a ".*".

  if (expandedUrl.indexOf(displayUrlSansEllipses) != -1) {
    var displayUrlIndex = expandedUrl.indexOf(displayUrlSansEllipses);
    var v = {
      displayUrlSansEllipses: displayUrlSansEllipses,
      // Portion of expandedUrl that precedes the displayUrl substring
      beforeDisplayUrl: expandedUrl.substr(0, displayUrlIndex),
      // Portion of expandedUrl that comes after displayUrl
      afterDisplayUrl: expandedUrl.substr(displayUrlIndex + displayUrlSansEllipses.length),
      precedingEllipsis: displayUrl.match(/^…/) ? '…' : '',
      followingEllipsis: displayUrl.match(/…$/) ? '…' : ''
    };

    for (var k in v) {
      if (v.hasOwnProperty(k)) {
        v[k] = htmlEscape(v[k]);
      }
    } // As an example: The user tweets "hi http://longdomainname.com/foo"
    // This gets shortened to "hi http://t.co/xyzabc", with display_url = "…nname.com/foo"
    // This will get rendered as:
    // <span class='tco-ellipsis'> <!-- This stuff should get displayed but not copied -->
    //   …
    //   <!-- There's a chance the onCopy event handler might not fire. In case that happens,
    //        we include an &nbsp; here so that the … doesn't bump up against the URL and ruin it.
    //        The &nbsp; is inside the tco-ellipsis span so that when the onCopy handler *does*
    //        fire, it doesn't get copied.  Otherwise the copied text would have two spaces in a row,
    //        e.g. "hi  http://longdomainname.com/foo".
    //   <span style='font-size:0'>&nbsp;</span>
    // </span>
    // <span style='font-size:0'>  <!-- This stuff should get copied but not displayed -->
    //   http://longdomai
    // </span>
    // <span class='js-display-url'> <!-- This stuff should get displayed *and* copied -->
    //   nname.com/foo
    // </span>
    // <span class='tco-ellipsis'> <!-- This stuff should get displayed but not copied -->
    //   <span style='font-size:0'>&nbsp;</span>
    //   …
    // </span>


    v['invisible'] = options.invisibleTagAttrs;
    return stringSupplant("<span class='tco-ellipsis'>#{precedingEllipsis}<span #{invisible}>&nbsp;</span></span><span #{invisible}>#{beforeDisplayUrl}</span><span class='js-display-url'>#{displayUrlSansEllipses}</span><span #{invisible}>#{afterDisplayUrl}</span><span class='tco-ellipsis'><span #{invisible}>&nbsp;</span>#{followingEllipsis}</span>", v);
  }

  return displayUrl;
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/twitter-text@3.1.0/node_modules/twitter-text/dist/esm/regexp/urlHasProtocol.js
// Copyright 2018 Twitter, Inc.
// Licensed under the Apache License, Version 2.0
// http://www.apache.org/licenses/LICENSE-2.0
var urlHasProtocol = /^https?:\/\//i;
/* harmony default export */ const regexp_urlHasProtocol = (urlHasProtocol);
;// CONCATENATED MODULE: ./node_modules/.pnpm/twitter-text@3.1.0/node_modules/twitter-text/dist/esm/linkToUrl.js

// Copyright 2018 Twitter, Inc.
// Licensed under the Apache License, Version 2.0
// http://www.apache.org/licenses/LICENSE-2.0





/* harmony default export */ function linkToUrl(entity, text, options) {
  var url = entity.url;
  var displayUrl = url;
  var linkText = htmlEscape(displayUrl); // If the caller passed a urlEntities object (provided by a Twitter API
  // response with include_entities=true), we use that to render the display_url
  // for each URL instead of it's underlying t.co URL.

  var urlEntity = options.urlEntities && options.urlEntities[url] || entity;

  if (urlEntity.display_url) {
    linkText = linkTextWithEntity(urlEntity, options);
  }

  var attrs = clone(options.htmlAttrs || {});

  if (!url.match(regexp_urlHasProtocol)) {
    url = "http://".concat(url);
  }

  attrs.href = url;

  if (options.targetBlank) {
    attrs.target = '_blank';
  } // set class only if urlClass is specified.


  if (options.urlClass) {
    attrs['class'] = options.urlClass;
  } // set target only if urlTarget is specified.


  if (options.urlTarget) {
    attrs.target = options.urlTarget;
  }

  if (!options.title && urlEntity.display_url) {
    attrs.title = urlEntity.expanded_url;
  }

  return linkToText(entity, linkText, attrs, options);
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/twitter-text@3.1.0/node_modules/twitter-text/dist/esm/linkToMentionAndList.js
// Copyright 2018 Twitter, Inc.
// Licensed under the Apache License, Version 2.0
// http://www.apache.org/licenses/LICENSE-2.0



/* harmony default export */ function linkToMentionAndList(entity, text, options) {
  var at = text.substring(entity.indices[0], entity.indices[0] + 1);
  var user = htmlEscape(entity.screenName);
  var slashListname = htmlEscape(entity.listSlug);
  var isList = entity.listSlug && !options.suppressLists;
  var attrs = clone(options.htmlAttrs || {});
  attrs['class'] = isList ? options.listClass : options.usernameClass;
  attrs.href = isList ? options.listUrlBase + user + slashListname : options.usernameUrlBase + user;

  if (!isList && !options.suppressDataScreenName) {
    attrs['data-screen-name'] = user;
  }

  if (options.targetBlank) {
    attrs.target = '_blank';
  }

  return linkToTextWithSymbol(entity, at, isList ? user + slashListname : user, attrs, options);
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/twitter-text@3.1.0/node_modules/twitter-text/dist/esm/autoLinkEntities.js

// Copyright 2018 Twitter, Inc.
// Licensed under the Apache License, Version 2.0
// http://www.apache.org/licenses/LICENSE-2.0






 // Default CSS class for auto-linked lists (along with the url class)

var DEFAULT_LIST_CLASS = 'tweet-url list-slug'; // Default CSS class for auto-linked usernames (along with the url class)

var DEFAULT_USERNAME_CLASS = 'tweet-url username'; // Default CSS class for auto-linked hashtags (along with the url class)

var DEFAULT_HASHTAG_CLASS = 'tweet-url hashtag'; // Default CSS class for auto-linked cashtags (along with the url class)

var DEFAULT_CASHTAG_CLASS = 'tweet-url cashtag';
/* harmony default export */ function autoLinkEntities(text, entities, options) {
  var options = clone(options || {});
  options.hashtagClass = options.hashtagClass || DEFAULT_HASHTAG_CLASS;
  options.hashtagUrlBase = options.hashtagUrlBase || 'https://twitter.com/search?q=%23';
  options.cashtagClass = options.cashtagClass || DEFAULT_CASHTAG_CLASS;
  options.cashtagUrlBase = options.cashtagUrlBase || 'https://twitter.com/search?q=%24';
  options.listClass = options.listClass || DEFAULT_LIST_CLASS;
  options.usernameClass = options.usernameClass || DEFAULT_USERNAME_CLASS;
  options.usernameUrlBase = options.usernameUrlBase || 'https://twitter.com/';
  options.listUrlBase = options.listUrlBase || 'https://twitter.com/';
  options.htmlAttrs = extractHtmlAttrsFromOptions(options);
  options.invisibleTagAttrs = options.invisibleTagAttrs || "style='position:absolute;left:-9999px;'"; // remap url entities to hash

  var urlEntities, i, len;

  if (options.urlEntities) {
    urlEntities = {};

    for (i = 0, len = options.urlEntities.length; i < len; i++) {
      urlEntities[options.urlEntities[i].url] = options.urlEntities[i];
    }

    options.urlEntities = urlEntities;
  }

  var result = '';
  var beginIndex = 0; // sort entities by start index

  entities.sort(function (a, b) {
    return a.indices[0] - b.indices[0];
  });
  var nonEntity = options.htmlEscapeNonEntities ? htmlEscape : function (text) {
    return text;
  };

  for (var i = 0; i < entities.length; i++) {
    var entity = entities[i];
    result += nonEntity(text.substring(beginIndex, entity.indices[0]));

    if (entity.url) {
      result += linkToUrl(entity, text, options);
    } else if (entity.hashtag) {
      result += linkToHashtag(entity, text, options);
    } else if (entity.screenName) {
      result += linkToMentionAndList(entity, text, options);
    } else if (entity.cashtag) {
      result += linkToCashtag(entity, text, options);
    }

    beginIndex = entity.indices[1];
  }

  result += nonEntity(text.substring(beginIndex, text.length));
  return result;
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/twitter-text@3.1.0/node_modules/twitter-text/dist/esm/autoLink.js
// Copyright 2018 Twitter, Inc.
// Licensed under the Apache License, Version 2.0
// http://www.apache.org/licenses/LICENSE-2.0


/* harmony default export */ function autoLink(text, options) {
  var entities = extractEntitiesWithIndices(text, {
    extractUrlsWithoutProtocol: false
  });
  return autoLinkEntities(text, entities, options);
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/twitter-text@3.1.0/node_modules/twitter-text/dist/esm/autoLinkCashtags.js
// Copyright 2018 Twitter, Inc.
// Licensed under the Apache License, Version 2.0
// http://www.apache.org/licenses/LICENSE-2.0


/* harmony default export */ function autoLinkCashtags(text, options) {
  var entities = extractCashtagsWithIndices(text);
  return autoLinkEntities(text, entities, options);
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/twitter-text@3.1.0/node_modules/twitter-text/dist/esm/autoLinkHashtags.js
// Copyright 2018 Twitter, Inc.
// Licensed under the Apache License, Version 2.0
// http://www.apache.org/licenses/LICENSE-2.0


/* harmony default export */ function autoLinkHashtags(text, options) {
  var entities = esm_extractHashtagsWithIndices(text);
  return autoLinkEntities(text, entities, options);
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/twitter-text@3.1.0/node_modules/twitter-text/dist/esm/autoLinkUrlsCustom.js
// Copyright 2018 Twitter, Inc.
// Licensed under the Apache License, Version 2.0
// http://www.apache.org/licenses/LICENSE-2.0


/* harmony default export */ function autoLinkUrlsCustom(text, options) {
  var entities = esm_extractUrlsWithIndices(text, {
    extractUrlsWithoutProtocol: false
  });
  return autoLinkEntities(text, entities, options);
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/twitter-text@3.1.0/node_modules/twitter-text/dist/esm/autoLinkUsernamesOrLists.js
// Copyright 2018 Twitter, Inc.
// Licensed under the Apache License, Version 2.0
// http://www.apache.org/licenses/LICENSE-2.0


/* harmony default export */ function autoLinkUsernamesOrLists(text, options) {
  var entities = extractMentionsOrListsWithIndices(text);
  return autoLinkEntities(text, entities, options);
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/twitter-text@3.1.0/node_modules/twitter-text/dist/esm/lib/convertUnicodeIndices.js


// Copyright 2018 Twitter, Inc.
// Licensed under the Apache License, Version 2.0
// http://www.apache.org/licenses/LICENSE-2.0

/**
 * Copied from https://github.com/twitter/twitter-text/blob/master/js/twitter-text.js
 */
var convertUnicodeIndices = function convertUnicodeIndices(text, entities, indicesInUTF16) {
  if (entities.length === 0) {
    return;
  }

  var charIndex = 0;
  var codePointIndex = 0; // sort entities by start index

  entities.sort(function (a, b) {
    return a.indices[0] - b.indices[0];
  });
  var entityIndex = 0;
  var entity = entities[0];

  while (charIndex < text.length) {
    if (entity.indices[0] === (indicesInUTF16 ? charIndex : codePointIndex)) {
      var len = entity.indices[1] - entity.indices[0];
      entity.indices[0] = indicesInUTF16 ? codePointIndex : charIndex;
      entity.indices[1] = entity.indices[0] + len;
      entityIndex++;

      if (entityIndex === entities.length) {
        // no more entity
        break;
      }

      entity = entities[entityIndex];
    }

    var c = text.charCodeAt(charIndex);

    if (c >= 0xd800 && c <= 0xdbff && charIndex < text.length - 1) {
      // Found high surrogate char
      c = text.charCodeAt(charIndex + 1);

      if (c >= 0xdc00 && c <= 0xdfff) {
        // Found surrogate pair
        charIndex++;
      }
    }

    codePointIndex++;
    charIndex++;
  }
};

/* harmony default export */ const lib_convertUnicodeIndices = (convertUnicodeIndices);
;// CONCATENATED MODULE: ./node_modules/.pnpm/twitter-text@3.1.0/node_modules/twitter-text/dist/esm/modifyIndicesFromUnicodeToUTF16.js
// Copyright 2018 Twitter, Inc.
// Licensed under the Apache License, Version 2.0
// http://www.apache.org/licenses/LICENSE-2.0

/* harmony default export */ function modifyIndicesFromUnicodeToUTF16(text, entities) {
  lib_convertUnicodeIndices(text, entities, false);
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/twitter-text@3.1.0/node_modules/twitter-text/dist/esm/autoLinkWithJSON.js
// Copyright 2018 Twitter, Inc.
// Licensed under the Apache License, Version 2.0
// http://www.apache.org/licenses/LICENSE-2.0


/* harmony default export */ function autoLinkWithJSON(text, json, options) {
  // map JSON entity to twitter-text entity
  if (json.user_mentions) {
    for (var i = 0; i < json.user_mentions.length; i++) {
      // this is a @mention
      json.user_mentions[i].screenName = json.user_mentions[i].screen_name;
    }
  }

  if (json.hashtags) {
    for (var i = 0; i < json.hashtags.length; i++) {
      // this is a #hashtag
      json.hashtags[i].hashtag = json.hashtags[i].text;
    }
  }

  if (json.symbols) {
    for (var i = 0; i < json.symbols.length; i++) {
      // this is a $CASH tag
      json.symbols[i].cashtag = json.symbols[i].text;
    }
  } // concatenate all entities


  var entities = [];

  for (var key in json) {
    entities = entities.concat(json[key]);
  } // modify indices to UTF-16


  modifyIndicesFromUnicodeToUTF16(text, entities);
  return autoLinkEntities(text, entities, options);
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/twitter-text@3.1.0/node_modules/twitter-text/dist/esm/configs.js
// This file is generated by scripts/buildConfig.js
/* harmony default export */ const configs = ({
  version1: {
    version: 1,
    maxWeightedTweetLength: 140,
    scale: 1,
    defaultWeight: 1,
    transformedURLLength: 23,
    ranges: []
  },
  version2: {
    version: 2,
    maxWeightedTweetLength: 280,
    scale: 100,
    defaultWeight: 200,
    transformedURLLength: 23,
    ranges: [{
      start: 0,
      end: 4351,
      weight: 100
    }, {
      start: 8192,
      end: 8205,
      weight: 100
    }, {
      start: 8208,
      end: 8223,
      weight: 100
    }, {
      start: 8242,
      end: 8247,
      weight: 100
    }]
  },
  version3: {
    version: 3,
    maxWeightedTweetLength: 280,
    scale: 100,
    defaultWeight: 200,
    emojiParsingEnabled: true,
    transformedURLLength: 23,
    ranges: [{
      start: 0,
      end: 4351,
      weight: 100
    }, {
      start: 8192,
      end: 8205,
      weight: 100
    }, {
      start: 8208,
      end: 8223,
      weight: 100
    }, {
      start: 8242,
      end: 8247,
      weight: 100
    }]
  },
  defaults: {
    version: 3,
    maxWeightedTweetLength: 280,
    scale: 100,
    defaultWeight: 200,
    emojiParsingEnabled: true,
    transformedURLLength: 23,
    ranges: [{
      start: 0,
      end: 4351,
      weight: 100
    }, {
      start: 8192,
      end: 8205,
      weight: 100
    }, {
      start: 8208,
      end: 8223,
      weight: 100
    }, {
      start: 8242,
      end: 8247,
      weight: 100
    }]
  }
});
;// CONCATENATED MODULE: ./node_modules/.pnpm/twitter-text@3.1.0/node_modules/twitter-text/dist/esm/convertUnicodeIndices.js

// Copyright 2018 Twitter, Inc.
// Licensed under the Apache License, Version 2.0
// http://www.apache.org/licenses/LICENSE-2.0
/* harmony default export */ function esm_convertUnicodeIndices(text, entities, indicesInUTF16) {
  if (entities.length == 0) {
    return;
  }

  var charIndex = 0;
  var codePointIndex = 0; // sort entities by start index

  entities.sort(function (a, b) {
    return a.indices[0] - b.indices[0];
  });
  var entityIndex = 0;
  var entity = entities[0];

  while (charIndex < text.length) {
    if (entity.indices[0] == (indicesInUTF16 ? charIndex : codePointIndex)) {
      var len = entity.indices[1] - entity.indices[0];
      entity.indices[0] = indicesInUTF16 ? codePointIndex : charIndex;
      entity.indices[1] = entity.indices[0] + len;
      entityIndex++;

      if (entityIndex == entities.length) {
        // no more entity
        break;
      }

      entity = entities[entityIndex];
    }

    var c = text.charCodeAt(charIndex);

    if (c >= 0xd800 && c <= 0xdbff && charIndex < text.length - 1) {
      // Found high surrogate char
      c = text.charCodeAt(charIndex + 1);

      if (c >= 0xdc00 && c <= 0xdfff) {
        // Found surrogate pair
        charIndex++;
      }
    }

    codePointIndex++;
    charIndex++;
  }
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/twitter-text@3.1.0/node_modules/twitter-text/dist/esm/extractCashtags.js
// Copyright 2018 Twitter, Inc.
// Licensed under the Apache License, Version 2.0
// http://www.apache.org/licenses/LICENSE-2.0

/* harmony default export */ function extractCashtags(text) {
  var cashtagsOnly = [],
      cashtagsWithIndices = extractCashtagsWithIndices(text);

  for (var i = 0; i < cashtagsWithIndices.length; i++) {
    cashtagsOnly.push(cashtagsWithIndices[i].cashtag);
  }

  return cashtagsOnly;
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/twitter-text@3.1.0/node_modules/twitter-text/dist/esm/extractHashtags.js
// Copyright 2018 Twitter, Inc.
// Licensed under the Apache License, Version 2.0
// http://www.apache.org/licenses/LICENSE-2.0

/* harmony default export */ function extractHashtags(text) {
  var hashtagsOnly = [];
  var hashtagsWithIndices = esm_extractHashtagsWithIndices(text);

  for (var i = 0; i < hashtagsWithIndices.length; i++) {
    hashtagsOnly.push(hashtagsWithIndices[i].hashtag);
  }

  return hashtagsOnly;
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/twitter-text@3.1.0/node_modules/twitter-text/dist/esm/extractMentionsWithIndices.js
// Copyright 2018 Twitter, Inc.
// Licensed under the Apache License, Version 2.0
// http://www.apache.org/licenses/LICENSE-2.0

/* harmony default export */ function extractMentionsWithIndices(text) {
  var mentions = [];
  var mentionOrList;
  var mentionsOrLists = extractMentionsOrListsWithIndices(text);

  for (var i = 0; i < mentionsOrLists.length; i++) {
    mentionOrList = mentionsOrLists[i];

    if (mentionOrList.listSlug === '') {
      mentions.push({
        screenName: mentionOrList.screenName,
        indices: mentionOrList.indices
      });
    }
  }

  return mentions;
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/twitter-text@3.1.0/node_modules/twitter-text/dist/esm/extractMentions.js
// Copyright 2018 Twitter, Inc.
// Licensed under the Apache License, Version 2.0
// http://www.apache.org/licenses/LICENSE-2.0

/* harmony default export */ function extractMentions(text) {
  var screenNamesOnly = [],
      screenNamesWithIndices = extractMentionsWithIndices(text);

  for (var i = 0; i < screenNamesWithIndices.length; i++) {
    var screenName = screenNamesWithIndices[i].screenName;
    screenNamesOnly.push(screenName);
  }

  return screenNamesOnly;
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/twitter-text@3.1.0/node_modules/twitter-text/dist/esm/regexp/validReply.js
// Copyright 2018 Twitter, Inc.
// Licensed under the Apache License, Version 2.0
// http://www.apache.org/licenses/LICENSE-2.0



var validReply = regexSupplant(/^(?:#{spaces})*#{atSigns}([a-zA-Z0-9_]{1,20})/, {
  atSigns: regexp_atSigns,
  spaces: spaces
});
/* harmony default export */ const regexp_validReply = (validReply);
;// CONCATENATED MODULE: ./node_modules/.pnpm/twitter-text@3.1.0/node_modules/twitter-text/dist/esm/extractReplies.js


// Copyright 2018 Twitter, Inc.
// Licensed under the Apache License, Version 2.0
// http://www.apache.org/licenses/LICENSE-2.0


/* harmony default export */ function extractReplies(text) {
  if (!text) {
    return null;
  }

  var possibleScreenName = text.match(regexp_validReply);

  if (!possibleScreenName || RegExp.rightContext.match(regexp_endMentionMatch)) {
    return null;
  }

  return possibleScreenName[1];
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/twitter-text@3.1.0/node_modules/twitter-text/dist/esm/extractUrls.js
// Copyright 2018 Twitter, Inc.
// Licensed under the Apache License, Version 2.0
// http://www.apache.org/licenses/LICENSE-2.0

/* harmony default export */ function extractUrls(text, options) {
  var urlsOnly = [];
  var urlsWithIndices = esm_extractUrlsWithIndices(text, options);

  for (var i = 0; i < urlsWithIndices.length; i++) {
    urlsOnly.push(urlsWithIndices[i].url);
  }

  return urlsOnly;
}
// EXTERNAL MODULE: ./node_modules/.pnpm/core-js@2.6.12/node_modules/core-js/modules/es6.array.is-array.js
var es6_array_is_array = __webpack_require__(41407);
;// CONCATENATED MODULE: ./node_modules/.pnpm/twitter-text@3.1.0/node_modules/twitter-text/dist/esm/lib/getCharacterWeight.js


// Copyright 2018 Twitter, Inc.
// Licensed under the Apache License, Version 2.0
// http://www.apache.org/licenses/LICENSE-2.0
var getCharacterWeight = function getCharacterWeight(ch, options) {
  var defaultWeight = options.defaultWeight,
      ranges = options.ranges;
  var weight = defaultWeight;
  var chCodePoint = ch.charCodeAt(0);

  if (Array.isArray(ranges)) {
    for (var i = 0, length = ranges.length; i < length; i++) {
      var currRange = ranges[i];

      if (chCodePoint >= currRange.start && chCodePoint <= currRange.end) {
        weight = currRange.weight;
        break;
      }
    }
  }

  return weight;
};

/* harmony default export */ const lib_getCharacterWeight = (getCharacterWeight);
;// CONCATENATED MODULE: ./node_modules/.pnpm/twitter-text@3.1.0/node_modules/twitter-text/dist/esm/modifyIndicesFromUTF16ToUnicode.js
// Copyright 2018 Twitter, Inc.
// Licensed under the Apache License, Version 2.0
// http://www.apache.org/licenses/LICENSE-2.0

/* harmony default export */ function modifyIndicesFromUTF16ToUnicode(text, entities) {
  lib_convertUnicodeIndices(text, entities, true);
}
// EXTERNAL MODULE: ./node_modules/.pnpm/core-js@2.6.12/node_modules/core-js/modules/es6.array.reduce.js
var es6_array_reduce = __webpack_require__(2240);
// EXTERNAL MODULE: ./node_modules/.pnpm/core-js@2.6.12/node_modules/core-js/modules/web.dom.iterable.js
var web_dom_iterable = __webpack_require__(65219);
// EXTERNAL MODULE: ./node_modules/.pnpm/core-js@2.6.12/node_modules/core-js/modules/es6.array.iterator.js
var es6_array_iterator = __webpack_require__(59154);
// EXTERNAL MODULE: ./node_modules/.pnpm/core-js@2.6.12/node_modules/core-js/modules/es6.object.keys.js
var es6_object_keys = __webpack_require__(56783);
;// CONCATENATED MODULE: ./node_modules/.pnpm/twitter-text@3.1.0/node_modules/twitter-text/dist/esm/regexp/invalidChars.js
// Copyright 2018 Twitter, Inc.
// Licensed under the Apache License, Version 2.0
// http://www.apache.org/licenses/LICENSE-2.0


var invalidChars = regexSupplant(/[#{invalidCharsGroup}]/, {
  invalidCharsGroup: regexp_invalidCharsGroup
});
/* harmony default export */ const regexp_invalidChars = (invalidChars);
;// CONCATENATED MODULE: ./node_modules/.pnpm/twitter-text@3.1.0/node_modules/twitter-text/dist/esm/hasInvalidCharacters.js
// Copyright 2018 Twitter, Inc.
// Licensed under the Apache License, Version 2.0
// http://www.apache.org/licenses/LICENSE-2.0

/* harmony default export */ function hasInvalidCharacters(text) {
  return regexp_invalidChars.test(text);
}
// EXTERNAL MODULE: ./node_modules/.pnpm/twemoji-parser@11.0.2/node_modules/twemoji-parser/dist/index.js
var dist = __webpack_require__(51706);
;// CONCATENATED MODULE: ./node_modules/.pnpm/twitter-text@3.1.0/node_modules/twitter-text/dist/esm/parseTweet.js





// Copyright 2018 Twitter, Inc.
// Licensed under the Apache License, Version 2.0
// http://www.apache.org/licenses/LICENSE-2.0




 // TODO: WEB-19861 Replace with public package after it is open sourced



/**
 * [parseTweet description]
 * @param  {string} text tweet text to parse
 * @param  {Object} options config options to pass
 * @return {Object} Fields in response described below:
 *
 * Response fields:
 * weightedLength {int} the weighted length of tweet based on weights specified in the config
 * valid {bool} If tweet is valid
 * permillage {float} permillage of the tweet over the max length specified in config
 * validRangeStart {int} beginning of valid text
 * validRangeEnd {int} End index of valid part of the tweet text (inclusive) in utf16
 * displayRangeStart {int} beginning index of display text
 * displayRangeEnd {int} end index of display text (inclusive) in utf16
 */

var parseTweet = function parseTweet() {
  var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : configs.defaults;
  var mergedOptions = Object.keys(options).length ? options : configs.defaults;
  var defaultWeight = mergedOptions.defaultWeight,
      emojiParsingEnabled = mergedOptions.emojiParsingEnabled,
      scale = mergedOptions.scale,
      maxWeightedTweetLength = mergedOptions.maxWeightedTweetLength,
      transformedURLLength = mergedOptions.transformedURLLength;
  var normalizedText = typeof String.prototype.normalize === 'function' ? text.normalize() : text; // Hash all entities by their startIndex for fast lookup

  var urlEntitiesMap = transformEntitiesToHash(esm_extractUrlsWithIndices(normalizedText));
  var emojiEntitiesMap = emojiParsingEnabled ? transformEntitiesToHash((0,dist/* parse */.Qc)(normalizedText)) : [];
  var tweetLength = normalizedText.length;
  var weightedLength = 0;
  var validDisplayIndex = 0;
  var valid = true; // Go through every character and calculate weight

  for (var charIndex = 0; charIndex < tweetLength; charIndex++) {
    // If a url begins at the specified index handle, add constant length
    if (urlEntitiesMap[charIndex]) {
      var _urlEntitiesMap$charI = urlEntitiesMap[charIndex],
          url = _urlEntitiesMap$charI.url,
          indices = _urlEntitiesMap$charI.indices;
      weightedLength += transformedURLLength * scale;
      charIndex += url.length - 1;
    } else if (emojiParsingEnabled && emojiEntitiesMap[charIndex]) {
      var _emojiEntitiesMap$cha = emojiEntitiesMap[charIndex],
          emoji = _emojiEntitiesMap$cha.text,
          _indices = _emojiEntitiesMap$cha.indices;
      weightedLength += defaultWeight;
      charIndex += emoji.length - 1;
    } else {
      charIndex += isSurrogatePair(normalizedText, charIndex) ? 1 : 0;
      weightedLength += lib_getCharacterWeight(normalizedText.charAt(charIndex), mergedOptions);
    } // Only test for validity of character if it is still valid


    if (valid) {
      valid = !hasInvalidCharacters(normalizedText.substring(charIndex, charIndex + 1));
    }

    if (valid && weightedLength <= maxWeightedTweetLength * scale) {
      validDisplayIndex = charIndex;
    }
  }

  weightedLength = weightedLength / scale;
  valid = valid && weightedLength > 0 && weightedLength <= maxWeightedTweetLength;
  var permillage = Math.floor(weightedLength / maxWeightedTweetLength * 1000);
  var normalizationOffset = text.length - normalizedText.length;
  validDisplayIndex += normalizationOffset;
  return {
    weightedLength: weightedLength,
    valid: valid,
    permillage: permillage,
    validRangeStart: 0,
    validRangeEnd: validDisplayIndex,
    displayRangeStart: 0,
    displayRangeEnd: text.length > 0 ? text.length - 1 : 0
  };
};

var transformEntitiesToHash = function transformEntitiesToHash(entities) {
  return entities.reduce(function (map, entity) {
    map[entity.indices[0]] = entity;
    return map;
  }, {});
};

var isSurrogatePair = function isSurrogatePair(text, cIndex) {
  // Test if a character is the beginning of a surrogate pair
  if (cIndex < text.length - 1) {
    var c = text.charCodeAt(cIndex);
    var cNext = text.charCodeAt(cIndex + 1);
    return 0xd800 <= c && c <= 0xdbff && 0xdc00 <= cNext && cNext <= 0xdfff;
  }

  return false;
};

/* harmony default export */ const esm_parseTweet = (parseTweet);
;// CONCATENATED MODULE: ./node_modules/.pnpm/twitter-text@3.1.0/node_modules/twitter-text/dist/esm/getTweetLength.js
// Copyright 2018 Twitter, Inc.
// Licensed under the Apache License, Version 2.0
// http://www.apache.org/licenses/LICENSE-2.0








var getTweetLength = function getTweetLength(text) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : configs.defaults;
  return esm_parseTweet(text, options).weightedLength;
};

/* harmony default export */ const esm_getTweetLength = (getTweetLength);
;// CONCATENATED MODULE: ./node_modules/.pnpm/twitter-text@3.1.0/node_modules/twitter-text/dist/esm/getUnicodeTextLength.js

// Copyright 2018 Twitter, Inc.
// Licensed under the Apache License, Version 2.0
// http://www.apache.org/licenses/LICENSE-2.0

/**
 * Copied from https://github.com/twitter/twitter-text/blob/master/js/twitter-text.js
 */

/* harmony default export */ function getUnicodeTextLength(text) {
  return text.replace(regexp_nonBmpCodePairs, ' ').length;
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/twitter-text@3.1.0/node_modules/twitter-text/dist/esm/splitTags.js

// Copyright 2018 Twitter, Inc.
// Licensed under the Apache License, Version 2.0
// http://www.apache.org/licenses/LICENSE-2.0
// this essentially does text.split(/<|>/)
// except that won't work in IE, where empty strings are ommitted
// so "<>".split(/<|>/) => [] in IE, but is ["", "", ""] in all others
// but "<<".split("<") => ["", "", ""]
/* harmony default export */ function splitTags(text) {
  var firstSplits = text.split('<'),
      secondSplits,
      allSplits = [],
      split;

  for (var i = 0; i < firstSplits.length; i += 1) {
    split = firstSplits[i];

    if (!split) {
      allSplits.push('');
    } else {
      secondSplits = split.split('>');

      for (var j = 0; j < secondSplits.length; j += 1) {
        allSplits.push(secondSplits[j]);
      }
    }
  }

  return allSplits;
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/twitter-text@3.1.0/node_modules/twitter-text/dist/esm/hitHighlight.js
// Copyright 2018 Twitter, Inc.
// Licensed under the Apache License, Version 2.0
// http://www.apache.org/licenses/LICENSE-2.0

/* harmony default export */ function hitHighlight(text, hits, options) {
  var defaultHighlightTag = 'em';
  hits = hits || [];
  options = options || {};

  if (hits.length === 0) {
    return text;
  }

  var tagName = options.tag || defaultHighlightTag,
      tags = ["<".concat(tagName, ">"), "</".concat(tagName, ">")],
      chunks = splitTags(text),
      i,
      j,
      result = '',
      chunkIndex = 0,
      chunk = chunks[0],
      prevChunksLen = 0,
      chunkCursor = 0,
      startInChunk = false,
      chunkChars = chunk,
      flatHits = [],
      index,
      hit,
      tag,
      placed,
      hitSpot;

  for (i = 0; i < hits.length; i += 1) {
    for (j = 0; j < hits[i].length; j += 1) {
      flatHits.push(hits[i][j]);
    }
  }

  for (index = 0; index < flatHits.length; index += 1) {
    hit = flatHits[index];
    tag = tags[index % 2];
    placed = false;

    while (chunk != null && hit >= prevChunksLen + chunk.length) {
      result += chunkChars.slice(chunkCursor);

      if (startInChunk && hit === prevChunksLen + chunkChars.length) {
        result += tag;
        placed = true;
      }

      if (chunks[chunkIndex + 1]) {
        result += "<".concat(chunks[chunkIndex + 1], ">");
      }

      prevChunksLen += chunkChars.length;
      chunkCursor = 0;
      chunkIndex += 2;
      chunk = chunks[chunkIndex];
      chunkChars = chunk;
      startInChunk = false;
    }

    if (!placed && chunk != null) {
      hitSpot = hit - prevChunksLen;
      result += chunkChars.slice(chunkCursor, hitSpot) + tag;
      chunkCursor = hitSpot;

      if (index % 2 === 0) {
        startInChunk = true;
      } else {
        startInChunk = false;
      }
    } else if (!placed) {
      placed = true;
      result += tag;
    }
  }

  if (chunk != null) {
    if (chunkCursor < chunkChars.length) {
      result += chunkChars.slice(chunkCursor);
    }

    for (index = chunkIndex + 1; index < chunks.length; index += 1) {
      result += index % 2 === 0 ? chunks[index] : "<".concat(chunks[index], ">");
    }
  }

  return result;
}
// EXTERNAL MODULE: ./node_modules/.pnpm/core-js@2.6.12/node_modules/core-js/modules/es6.object.define-property.js
var es6_object_define_property = __webpack_require__(9368);
// EXTERNAL MODULE: ./node_modules/.pnpm/core-js@2.6.12/node_modules/core-js/modules/es6.object.define-properties.js
var es6_object_define_properties = __webpack_require__(25816);
// EXTERNAL MODULE: ./node_modules/.pnpm/core-js@2.6.12/node_modules/core-js/modules/es7.object.get-own-property-descriptors.js
var es7_object_get_own_property_descriptors = __webpack_require__(70516);
// EXTERNAL MODULE: ./node_modules/.pnpm/core-js@2.6.12/node_modules/core-js/modules/es6.array.for-each.js
var es6_array_for_each = __webpack_require__(28750);
// EXTERNAL MODULE: ./node_modules/.pnpm/core-js@2.6.12/node_modules/core-js/modules/es6.array.filter.js
var es6_array_filter = __webpack_require__(6871);
// EXTERNAL MODULE: ./node_modules/.pnpm/core-js@2.6.12/node_modules/core-js/modules/es6.symbol.js
var es6_symbol = __webpack_require__(50684);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(39279);
;// CONCATENATED MODULE: ./node_modules/.pnpm/twitter-text@3.1.0/node_modules/twitter-text/dist/esm/isInvalidTweet.js












function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0,defineProperty/* default */.Z)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

// Copyright 2018 Twitter, Inc.
// Licensed under the Apache License, Version 2.0
// http://www.apache.org/licenses/LICENSE-2.0



/* harmony default export */ function isInvalidTweet(text) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : configs.defaults;

  if (!text) {
    return 'empty';
  }

  var mergedOptions = _objectSpread({}, configs.defaults, {}, options);

  var maxLength = mergedOptions.maxWeightedTweetLength; // Determine max length independent of URL length

  if (esm_getTweetLength(text, mergedOptions) > maxLength) {
    return 'too_long';
  }

  if (hasInvalidCharacters(text)) {
    return 'invalid_characters';
  }

  return false;
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/twitter-text@3.1.0/node_modules/twitter-text/dist/esm/isValidHashtag.js
// Copyright 2018 Twitter, Inc.
// Licensed under the Apache License, Version 2.0
// http://www.apache.org/licenses/LICENSE-2.0

/* harmony default export */ function isValidHashtag(hashtag) {
  if (!hashtag) {
    return false;
  }

  var extracted = extractHashtags(hashtag); // Should extract the hashtag minus the # sign, hence the .slice(1)

  return extracted.length === 1 && extracted[0] === hashtag.slice(1);
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/twitter-text@3.1.0/node_modules/twitter-text/dist/esm/isValidList.js

// Copyright 2018 Twitter, Inc.
// Licensed under the Apache License, Version 2.0
// http://www.apache.org/licenses/LICENSE-2.0


var VALID_LIST_RE = regexSupplant(/^#{validMentionOrList}$/, {
  validMentionOrList: regexp_validMentionOrList
});
/* harmony default export */ function isValidList(usernameList) {
  var match = usernameList.match(VALID_LIST_RE); // Must have matched and had nothing before or after

  return !!(match && match[1] == '' && match[4]);
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/twitter-text@3.1.0/node_modules/twitter-text/dist/esm/isValidTweetText.js
// Copyright 2018 Twitter, Inc.
// Licensed under the Apache License, Version 2.0
// http://www.apache.org/licenses/LICENSE-2.0

/* harmony default export */ function isValidTweetText(text, options) {
  return !isInvalidTweet(text, options);
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/twitter-text@3.1.0/node_modules/twitter-text/dist/esm/regexp/validateUrlUnreserved.js
// Copyright 2018 Twitter, Inc.
// Licensed under the Apache License, Version 2.0
// http://www.apache.org/licenses/LICENSE-2.0
var validateUrlUnreserved = /[a-z\u0400-\u04FF0-9\-._~]/i;
/* harmony default export */ const regexp_validateUrlUnreserved = (validateUrlUnreserved);
;// CONCATENATED MODULE: ./node_modules/.pnpm/twitter-text@3.1.0/node_modules/twitter-text/dist/esm/regexp/validateUrlPctEncoded.js
// Copyright 2018 Twitter, Inc.
// Licensed under the Apache License, Version 2.0
// http://www.apache.org/licenses/LICENSE-2.0
var validateUrlPctEncoded = /(?:%[0-9a-f]{2})/i;
/* harmony default export */ const regexp_validateUrlPctEncoded = (validateUrlPctEncoded);
;// CONCATENATED MODULE: ./node_modules/.pnpm/twitter-text@3.1.0/node_modules/twitter-text/dist/esm/regexp/validateUrlSubDelims.js
// Copyright 2018 Twitter, Inc.
// Licensed under the Apache License, Version 2.0
// http://www.apache.org/licenses/LICENSE-2.0
var validateUrlSubDelims = /[!$&'()*+,;=]/i;
/* harmony default export */ const regexp_validateUrlSubDelims = (validateUrlSubDelims);
;// CONCATENATED MODULE: ./node_modules/.pnpm/twitter-text@3.1.0/node_modules/twitter-text/dist/esm/regexp/validateUrlUserinfo.js
// Copyright 2018 Twitter, Inc.
// Licensed under the Apache License, Version 2.0
// http://www.apache.org/licenses/LICENSE-2.0




var validateUrlUserinfo = regexSupplant('(?:' + '#{validateUrlUnreserved}|' + '#{validateUrlPctEncoded}|' + '#{validateUrlSubDelims}|' + ':' + ')*', {
  validateUrlUnreserved: regexp_validateUrlUnreserved,
  validateUrlPctEncoded: regexp_validateUrlPctEncoded,
  validateUrlSubDelims: regexp_validateUrlSubDelims
}, 'i');
/* harmony default export */ const regexp_validateUrlUserinfo = (validateUrlUserinfo);
;// CONCATENATED MODULE: ./node_modules/.pnpm/twitter-text@3.1.0/node_modules/twitter-text/dist/esm/regexp/validateUrlDomainSegment.js
// Copyright 2018 Twitter, Inc.
// Licensed under the Apache License, Version 2.0
// http://www.apache.org/licenses/LICENSE-2.0
var validateUrlDomainSegment = /(?:[a-z0-9](?:[a-z0-9\-]*[a-z0-9])?)/i;
/* harmony default export */ const regexp_validateUrlDomainSegment = (validateUrlDomainSegment);
;// CONCATENATED MODULE: ./node_modules/.pnpm/twitter-text@3.1.0/node_modules/twitter-text/dist/esm/regexp/validateUrlDomainTld.js
// Copyright 2018 Twitter, Inc.
// Licensed under the Apache License, Version 2.0
// http://www.apache.org/licenses/LICENSE-2.0
var validateUrlDomainTld = /(?:[a-z](?:[a-z0-9\-]*[a-z0-9])?)/i;
/* harmony default export */ const regexp_validateUrlDomainTld = (validateUrlDomainTld);
;// CONCATENATED MODULE: ./node_modules/.pnpm/twitter-text@3.1.0/node_modules/twitter-text/dist/esm/regexp/validateUrlSubDomainSegment.js
// Copyright 2018 Twitter, Inc.
// Licensed under the Apache License, Version 2.0
// http://www.apache.org/licenses/LICENSE-2.0
var validateUrlSubDomainSegment = /(?:[a-z0-9](?:[a-z0-9_\-]*[a-z0-9])?)/i;
/* harmony default export */ const regexp_validateUrlSubDomainSegment = (validateUrlSubDomainSegment);
;// CONCATENATED MODULE: ./node_modules/.pnpm/twitter-text@3.1.0/node_modules/twitter-text/dist/esm/regexp/validateUrlDomain.js
// Copyright 2018 Twitter, Inc.
// Licensed under the Apache License, Version 2.0
// http://www.apache.org/licenses/LICENSE-2.0




var validateUrlDomain = regexSupplant(/(?:(?:#{validateUrlSubDomainSegment}\.)*(?:#{validateUrlDomainSegment}\.)#{validateUrlDomainTld})/i, {
  validateUrlSubDomainSegment: regexp_validateUrlSubDomainSegment,
  validateUrlDomainSegment: regexp_validateUrlDomainSegment,
  validateUrlDomainTld: regexp_validateUrlDomainTld
});
/* harmony default export */ const regexp_validateUrlDomain = (validateUrlDomain);
;// CONCATENATED MODULE: ./node_modules/.pnpm/twitter-text@3.1.0/node_modules/twitter-text/dist/esm/regexp/validateUrlDecOctet.js
// Copyright 2018 Twitter, Inc.
// Licensed under the Apache License, Version 2.0
// http://www.apache.org/licenses/LICENSE-2.0
var validateUrlDecOctet = /(?:[0-9]|(?:[1-9][0-9])|(?:1[0-9]{2})|(?:2[0-4][0-9])|(?:25[0-5]))/i;
/* harmony default export */ const regexp_validateUrlDecOctet = (validateUrlDecOctet);
;// CONCATENATED MODULE: ./node_modules/.pnpm/twitter-text@3.1.0/node_modules/twitter-text/dist/esm/regexp/validateUrlIpv4.js
// Copyright 2018 Twitter, Inc.
// Licensed under the Apache License, Version 2.0
// http://www.apache.org/licenses/LICENSE-2.0


var validateUrlIpv4 = regexSupplant(/(?:#{validateUrlDecOctet}(?:\.#{validateUrlDecOctet}){3})/i, {
  validateUrlDecOctet: regexp_validateUrlDecOctet
});
/* harmony default export */ const regexp_validateUrlIpv4 = (validateUrlIpv4);
;// CONCATENATED MODULE: ./node_modules/.pnpm/twitter-text@3.1.0/node_modules/twitter-text/dist/esm/regexp/validateUrlIpv6.js
// Copyright 2018 Twitter, Inc.
// Licensed under the Apache License, Version 2.0
// http://www.apache.org/licenses/LICENSE-2.0
// Punting on real IPv6 validation for now
var validateUrlIpv6 = /(?:\[[a-f0-9:\.]+\])/i;
/* harmony default export */ const regexp_validateUrlIpv6 = (validateUrlIpv6);
;// CONCATENATED MODULE: ./node_modules/.pnpm/twitter-text@3.1.0/node_modules/twitter-text/dist/esm/regexp/validateUrlIp.js
// Copyright 2018 Twitter, Inc.
// Licensed under the Apache License, Version 2.0
// http://www.apache.org/licenses/LICENSE-2.0


 // Punting on IPvFuture for now

var validateUrlIp = regexSupplant('(?:' + '#{validateUrlIpv4}|' + '#{validateUrlIpv6}' + ')', {
  validateUrlIpv4: regexp_validateUrlIpv4,
  validateUrlIpv6: regexp_validateUrlIpv6
}, 'i');
/* harmony default export */ const regexp_validateUrlIp = (validateUrlIp);
;// CONCATENATED MODULE: ./node_modules/.pnpm/twitter-text@3.1.0/node_modules/twitter-text/dist/esm/regexp/validateUrlHost.js
// Copyright 2018 Twitter, Inc.
// Licensed under the Apache License, Version 2.0
// http://www.apache.org/licenses/LICENSE-2.0



var validateUrlHost = regexSupplant('(?:' + '#{validateUrlIp}|' + '#{validateUrlDomain}' + ')', {
  validateUrlIp: regexp_validateUrlIp,
  validateUrlDomain: regexp_validateUrlDomain
}, 'i');
/* harmony default export */ const regexp_validateUrlHost = (validateUrlHost);
;// CONCATENATED MODULE: ./node_modules/.pnpm/twitter-text@3.1.0/node_modules/twitter-text/dist/esm/regexp/validateUrlPort.js
// Copyright 2018 Twitter, Inc.
// Licensed under the Apache License, Version 2.0
// http://www.apache.org/licenses/LICENSE-2.0
var validateUrlPort = /[0-9]{1,5}/;
/* harmony default export */ const regexp_validateUrlPort = (validateUrlPort);
;// CONCATENATED MODULE: ./node_modules/.pnpm/twitter-text@3.1.0/node_modules/twitter-text/dist/esm/regexp/validateUrlAuthority.js
// Copyright 2018 Twitter, Inc.
// Licensed under the Apache License, Version 2.0
// http://www.apache.org/licenses/LICENSE-2.0




var validateUrlAuthority = regexSupplant( // $1 userinfo
'(?:(#{validateUrlUserinfo})@)?' + // $2 host
'(#{validateUrlHost})' + // $3 port
'(?::(#{validateUrlPort}))?', {
  validateUrlUserinfo: regexp_validateUrlUserinfo,
  validateUrlHost: regexp_validateUrlHost,
  validateUrlPort: regexp_validateUrlPort
}, 'i');
/* harmony default export */ const regexp_validateUrlAuthority = (validateUrlAuthority);
;// CONCATENATED MODULE: ./node_modules/.pnpm/twitter-text@3.1.0/node_modules/twitter-text/dist/esm/regexp/validateUrlPchar.js
// Copyright 2018 Twitter, Inc.
// Licensed under the Apache License, Version 2.0
// http://www.apache.org/licenses/LICENSE-2.0



 // These URL validation pattern strings are based on the ABNF from RFC 3986

var validateUrlPchar = regexSupplant('(?:' + '#{validateUrlUnreserved}|' + '#{validateUrlPctEncoded}|' + '#{validateUrlSubDelims}|' + '[:|@]' + ')', {
  validateUrlUnreserved: regexp_validateUrlUnreserved,
  validateUrlPctEncoded: regexp_validateUrlPctEncoded,
  validateUrlSubDelims: regexp_validateUrlSubDelims
}, 'i');
/* harmony default export */ const regexp_validateUrlPchar = (validateUrlPchar);
;// CONCATENATED MODULE: ./node_modules/.pnpm/twitter-text@3.1.0/node_modules/twitter-text/dist/esm/regexp/validateUrlFragment.js
// Copyright 2018 Twitter, Inc.
// Licensed under the Apache License, Version 2.0
// http://www.apache.org/licenses/LICENSE-2.0


var validateUrlFragment = regexSupplant(/(#{validateUrlPchar}|\/|\?)*/i, {
  validateUrlPchar: regexp_validateUrlPchar
});
/* harmony default export */ const regexp_validateUrlFragment = (validateUrlFragment);
;// CONCATENATED MODULE: ./node_modules/.pnpm/twitter-text@3.1.0/node_modules/twitter-text/dist/esm/regexp/validateUrlPath.js
// Copyright 2018 Twitter, Inc.
// Licensed under the Apache License, Version 2.0
// http://www.apache.org/licenses/LICENSE-2.0


var validateUrlPath = regexSupplant(/(\/#{validateUrlPchar}*)*/i, {
  validateUrlPchar: regexp_validateUrlPchar
});
/* harmony default export */ const regexp_validateUrlPath = (validateUrlPath);
;// CONCATENATED MODULE: ./node_modules/.pnpm/twitter-text@3.1.0/node_modules/twitter-text/dist/esm/regexp/validateUrlQuery.js
// Copyright 2018 Twitter, Inc.
// Licensed under the Apache License, Version 2.0
// http://www.apache.org/licenses/LICENSE-2.0


var validateUrlQuery = regexSupplant(/(#{validateUrlPchar}|\/|\?)*/i, {
  validateUrlPchar: regexp_validateUrlPchar
});
/* harmony default export */ const regexp_validateUrlQuery = (validateUrlQuery);
;// CONCATENATED MODULE: ./node_modules/.pnpm/twitter-text@3.1.0/node_modules/twitter-text/dist/esm/regexp/validateUrlScheme.js
// Copyright 2018 Twitter, Inc.
// Licensed under the Apache License, Version 2.0
// http://www.apache.org/licenses/LICENSE-2.0
var validateUrlScheme = /(?:[a-z][a-z0-9+\-.]*)/i;
/* harmony default export */ const regexp_validateUrlScheme = (validateUrlScheme);
;// CONCATENATED MODULE: ./node_modules/.pnpm/twitter-text@3.1.0/node_modules/twitter-text/dist/esm/regexp/validateUrlUnencoded.js
// Copyright 2018 Twitter, Inc.
// Licensed under the Apache License, Version 2.0
// http://www.apache.org/licenses/LICENSE-2.0
 // Modified version of RFC 3986 Appendix B

var validateUrlUnencoded = regexSupplant('^' + // Full URL
'(?:' + '([^:/?#]+):\\/\\/' + // $1 Scheme
')?' + '([^/?#]*)' + // $2 Authority
'([^?#]*)' + // $3 Path
'(?:' + '\\?([^#]*)' + // $4 Query
')?' + '(?:' + '#(.*)' + // $5 Fragment
')?$', 'i');
/* harmony default export */ const regexp_validateUrlUnencoded = (validateUrlUnencoded);
;// CONCATENATED MODULE: ./node_modules/.pnpm/twitter-text@3.1.0/node_modules/twitter-text/dist/esm/regexp/validateUrlUnicodeSubDomainSegment.js
// Copyright 2018 Twitter, Inc.
// Licensed under the Apache License, Version 2.0
// http://www.apache.org/licenses/LICENSE-2.0
var validateUrlUnicodeSubDomainSegment = /(?:(?:[a-z0-9]|[^\u0000-\u007f])(?:(?:[a-z0-9_\-]|[^\u0000-\u007f])*(?:[a-z0-9]|[^\u0000-\u007f]))?)/i;
/* harmony default export */ const regexp_validateUrlUnicodeSubDomainSegment = (validateUrlUnicodeSubDomainSegment);
;// CONCATENATED MODULE: ./node_modules/.pnpm/twitter-text@3.1.0/node_modules/twitter-text/dist/esm/regexp/validateUrlUnicodeDomainSegment.js
// Copyright 2018 Twitter, Inc.
// Licensed under the Apache License, Version 2.0
// http://www.apache.org/licenses/LICENSE-2.0
var validateUrlUnicodeDomainSegment = /(?:(?:[a-z0-9]|[^\u0000-\u007f])(?:(?:[a-z0-9\-]|[^\u0000-\u007f])*(?:[a-z0-9]|[^\u0000-\u007f]))?)/i;
/* harmony default export */ const regexp_validateUrlUnicodeDomainSegment = (validateUrlUnicodeDomainSegment);
;// CONCATENATED MODULE: ./node_modules/.pnpm/twitter-text@3.1.0/node_modules/twitter-text/dist/esm/regexp/validateUrlUnicodeDomainTld.js
// Copyright 2018 Twitter, Inc.
// Licensed under the Apache License, Version 2.0
// http://www.apache.org/licenses/LICENSE-2.0
// Unencoded internationalized domains - this doesn't check for invalid UTF-8 sequences
var validateUrlUnicodeDomainTld = /(?:(?:[a-z]|[^\u0000-\u007f])(?:(?:[a-z0-9\-]|[^\u0000-\u007f])*(?:[a-z0-9]|[^\u0000-\u007f]))?)/i;
/* harmony default export */ const regexp_validateUrlUnicodeDomainTld = (validateUrlUnicodeDomainTld);
;// CONCATENATED MODULE: ./node_modules/.pnpm/twitter-text@3.1.0/node_modules/twitter-text/dist/esm/regexp/validateUrlUnicodeDomain.js
// Copyright 2018 Twitter, Inc.
// Licensed under the Apache License, Version 2.0
// http://www.apache.org/licenses/LICENSE-2.0



 // Unencoded internationalized domains - this doesn't check for invalid UTF-8 sequences

var validateUrlUnicodeDomain = regexSupplant(/(?:(?:#{validateUrlUnicodeSubDomainSegment}\.)*(?:#{validateUrlUnicodeDomainSegment}\.)#{validateUrlUnicodeDomainTld})/i, {
  validateUrlUnicodeSubDomainSegment: regexp_validateUrlUnicodeSubDomainSegment,
  validateUrlUnicodeDomainSegment: regexp_validateUrlUnicodeDomainSegment,
  validateUrlUnicodeDomainTld: regexp_validateUrlUnicodeDomainTld
});
/* harmony default export */ const regexp_validateUrlUnicodeDomain = (validateUrlUnicodeDomain);
;// CONCATENATED MODULE: ./node_modules/.pnpm/twitter-text@3.1.0/node_modules/twitter-text/dist/esm/regexp/validateUrlUnicodeHost.js
// Copyright 2018 Twitter, Inc.
// Licensed under the Apache License, Version 2.0
// http://www.apache.org/licenses/LICENSE-2.0



var validateUrlUnicodeHost = regexSupplant('(?:' + '#{validateUrlIp}|' + '#{validateUrlUnicodeDomain}' + ')', {
  validateUrlIp: regexp_validateUrlIp,
  validateUrlUnicodeDomain: regexp_validateUrlUnicodeDomain
}, 'i');
/* harmony default export */ const regexp_validateUrlUnicodeHost = (validateUrlUnicodeHost);
;// CONCATENATED MODULE: ./node_modules/.pnpm/twitter-text@3.1.0/node_modules/twitter-text/dist/esm/regexp/validateUrlUnicodeAuthority.js
// Copyright 2018 Twitter, Inc.
// Licensed under the Apache License, Version 2.0
// http://www.apache.org/licenses/LICENSE-2.0




var validateUrlUnicodeAuthority = regexSupplant( // $1 userinfo
'(?:(#{validateUrlUserinfo})@)?' + // $2 host
'(#{validateUrlUnicodeHost})' + // $3 port
'(?::(#{validateUrlPort}))?', {
  validateUrlUserinfo: regexp_validateUrlUserinfo,
  validateUrlUnicodeHost: regexp_validateUrlUnicodeHost,
  validateUrlPort: regexp_validateUrlPort
}, 'i');
/* harmony default export */ const regexp_validateUrlUnicodeAuthority = (validateUrlUnicodeAuthority);
;// CONCATENATED MODULE: ./node_modules/.pnpm/twitter-text@3.1.0/node_modules/twitter-text/dist/esm/isValidUrl.js


// Copyright 2018 Twitter, Inc.
// Licensed under the Apache License, Version 2.0
// http://www.apache.org/licenses/LICENSE-2.0








function isValidMatch(string, regex, optional) {
  if (!optional) {
    // RegExp["$&"] is the text of the last match
    // blank strings are ok, but are falsy, so we check stringiness instead of truthiness
    return typeof string === 'string' && string.match(regex) && RegExp['$&'] === string;
  } // RegExp["$&"] is the text of the last match


  return !string || string.match(regex) && RegExp['$&'] === string;
}

/* harmony default export */ function esm_isValidUrl(url, unicodeDomains, requireProtocol) {
  if (unicodeDomains == null) {
    unicodeDomains = true;
  }

  if (requireProtocol == null) {
    requireProtocol = true;
  }

  if (!url) {
    return false;
  }

  var urlParts = url.match(regexp_validateUrlUnencoded);

  if (!urlParts || urlParts[0] !== url) {
    return false;
  }

  var scheme = urlParts[1],
      authority = urlParts[2],
      path = urlParts[3],
      query = urlParts[4],
      fragment = urlParts[5];

  if (!((!requireProtocol || isValidMatch(scheme, regexp_validateUrlScheme) && scheme.match(/^https?$/i)) && isValidMatch(path, regexp_validateUrlPath) && isValidMatch(query, regexp_validateUrlQuery, true) && isValidMatch(fragment, regexp_validateUrlFragment, true))) {
    return false;
  }

  return unicodeDomains && isValidMatch(authority, regexp_validateUrlUnicodeAuthority) || !unicodeDomains && isValidMatch(authority, regexp_validateUrlAuthority);
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/twitter-text@3.1.0/node_modules/twitter-text/dist/esm/isValidUsername.js
// Copyright 2018 Twitter, Inc.
// Licensed under the Apache License, Version 2.0
// http://www.apache.org/licenses/LICENSE-2.0

/* harmony default export */ function isValidUsername(username) {
  if (!username) {
    return false;
  }

  var extracted = extractMentions(username); // Should extract the username minus the @ sign, hence the .slice(1)

  return extracted.length === 1 && extracted[0] === username.slice(1);
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/twitter-text@3.1.0/node_modules/twitter-text/dist/esm/regexp/urlHasHttps.js
// Copyright 2018 Twitter, Inc.
// Licensed under the Apache License, Version 2.0
// http://www.apache.org/licenses/LICENSE-2.0
var urlHasHttps = /^https:\/\//i;
/* harmony default export */ const regexp_urlHasHttps = (urlHasHttps);
;// CONCATENATED MODULE: ./node_modules/.pnpm/twitter-text@3.1.0/node_modules/twitter-text/dist/esm/regexp/index.js
// Copyright 2018 Twitter, Inc.
// Licensed under the Apache License, Version 2.0
// http://www.apache.org/licenses/LICENSE-2.0













































































/* harmony default export */ const regexp = ({
  astralLetterAndMarks: regexp_astralLetterAndMarks,
  astralNumerals: regexp_astralNumerals,
  atSigns: regexp_atSigns,
  bmpLetterAndMarks: regexp_bmpLetterAndMarks,
  bmpNumerals: regexp_bmpNumerals,
  cashtag: regexp_cashtag,
  codePoint: regexp_codePoint,
  cyrillicLettersAndMarks: regexp_cyrillicLettersAndMarks,
  endHashtagMatch: regexp_endHashtagMatch,
  endMentionMatch: regexp_endMentionMatch,
  extractUrl: regexp_extractUrl,
  hashSigns: regexp_hashSigns,
  hashtagAlpha: regexp_hashtagAlpha,
  hashtagAlphaNumeric: regexp_hashtagAlphaNumeric,
  hashtagBoundary: regexp_hashtagBoundary,
  hashtagSpecialChars: regexp_hashtagSpecialChars,
  invalidChars: regexp_invalidChars,
  invalidCharsGroup: regexp_invalidCharsGroup,
  invalidDomainChars: regexp_invalidDomainChars,
  invalidUrlWithoutProtocolPrecedingChars: regexp_invalidUrlWithoutProtocolPrecedingChars,
  latinAccentChars: regexp_latinAccentChars,
  nonBmpCodePairs: regexp_nonBmpCodePairs,
  punct: regexp_punct,
  rtlChars: regexp_rtlChars,
  spaces: spaces,
  spacesGroup: regexp_spacesGroup,
  urlHasHttps: regexp_urlHasHttps,
  urlHasProtocol: regexp_urlHasProtocol,
  validAsciiDomain: regexp_validAsciiDomain,
  validateUrlAuthority: regexp_validateUrlAuthority,
  validateUrlDecOctet: regexp_validateUrlDecOctet,
  validateUrlDomain: regexp_validateUrlDomain,
  validateUrlDomainSegment: regexp_validateUrlDomainSegment,
  validateUrlDomainTld: regexp_validateUrlDomainTld,
  validateUrlFragment: regexp_validateUrlFragment,
  validateUrlHost: regexp_validateUrlHost,
  validateUrlIp: regexp_validateUrlIp,
  validateUrlIpv4: regexp_validateUrlIpv4,
  validateUrlIpv6: regexp_validateUrlIpv6,
  validateUrlPath: regexp_validateUrlPath,
  validateUrlPchar: regexp_validateUrlPchar,
  validateUrlPctEncoded: regexp_validateUrlPctEncoded,
  validateUrlPort: regexp_validateUrlPort,
  validateUrlQuery: regexp_validateUrlQuery,
  validateUrlScheme: regexp_validateUrlScheme,
  validateUrlSubDelims: regexp_validateUrlSubDelims,
  validateUrlSubDomainSegment: regexp_validateUrlSubDomainSegment,
  validateUrlUnencoded: regexp_validateUrlUnencoded,
  validateUrlUnicodeAuthority: regexp_validateUrlUnicodeAuthority,
  validateUrlUnicodeDomain: regexp_validateUrlUnicodeDomain,
  validateUrlUnicodeDomainSegment: regexp_validateUrlUnicodeDomainSegment,
  validateUrlUnicodeDomainTld: regexp_validateUrlUnicodeDomainTld,
  validateUrlUnicodeHost: regexp_validateUrlUnicodeHost,
  validateUrlUnicodeSubDomainSegment: regexp_validateUrlUnicodeSubDomainSegment,
  validateUrlUnreserved: regexp_validateUrlUnreserved,
  validateUrlUserinfo: regexp_validateUrlUserinfo,
  validCashtag: regexp_validCashtag,
  validCCTLD: regexp_validCCTLD,
  validDomain: regexp_validDomain,
  validDomainChars: regexp_validDomainChars,
  validDomainName: regexp_validDomainName,
  validGeneralUrlPathChars: regexp_validGeneralUrlPathChars,
  validGTLD: regexp_validGTLD,
  validHashtag: regexp_validHashtag,
  validMentionOrList: regexp_validMentionOrList,
  validMentionPrecedingChars: regexp_validMentionPrecedingChars,
  validPortNumber: regexp_validPortNumber,
  validPunycode: regexp_validPunycode,
  validReply: regexp_validReply,
  validSubdomain: regexp_validSubdomain,
  validTcoUrl: regexp_validTcoUrl,
  validUrlBalancedParens: regexp_validUrlBalancedParens,
  validUrlPath: regexp_validUrlPath,
  validUrlPathEndingChars: regexp_validUrlPathEndingChars,
  validUrlPrecedingChars: regexp_validUrlPrecedingChars,
  validUrlQueryChars: regexp_validUrlQueryChars,
  validUrlQueryEndingChars: regexp_validUrlQueryEndingChars
});
// EXTERNAL MODULE: ./node_modules/.pnpm/core-js@2.6.12/node_modules/core-js/modules/es6.string.iterator.js
var es6_string_iterator = __webpack_require__(92595);
// EXTERNAL MODULE: ./node_modules/.pnpm/core-js@2.6.12/node_modules/core-js/modules/es6.array.from.js
var es6_array_from = __webpack_require__(72415);
;// CONCATENATED MODULE: ./node_modules/.pnpm/twitter-text@3.1.0/node_modules/twitter-text/dist/esm/standardizeIndices.js



function standardizeIndices(text, startIndex, endIndex) {
  var totalUnicodeTextLength = getUnicodeTextLength(text);
  var encodingDiff = text.length - totalUnicodeTextLength;

  if (encodingDiff > 0) {
    // split the string into codepoints which will map to the API's indices
    var byCodePair = Array.from(text);
    var beforeText = startIndex === 0 ? '' : byCodePair.slice(0, startIndex).join('');
    var actualText = byCodePair.slice(startIndex, endIndex).join('');
    return [beforeText.length, beforeText.length + actualText.length];
  }

  return [startIndex, endIndex];
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/twitter-text@3.1.0/node_modules/twitter-text/dist/esm/index.js
// Copyright 2018 Twitter, Inc.
// Licensed under the Apache License, Version 2.0
// http://www.apache.org/licenses/LICENSE-2.0















































/* harmony default export */ const esm = ({
  autoLink: autoLink,
  autoLinkCashtags: autoLinkCashtags,
  autoLinkEntities: autoLinkEntities,
  autoLinkHashtags: autoLinkHashtags,
  autoLinkUrlsCustom: autoLinkUrlsCustom,
  autoLinkUsernamesOrLists: autoLinkUsernamesOrLists,
  autoLinkWithJSON: autoLinkWithJSON,
  configs: configs,
  convertUnicodeIndices: esm_convertUnicodeIndices,
  extractCashtags: extractCashtags,
  extractCashtagsWithIndices: extractCashtagsWithIndices,
  extractEntitiesWithIndices: extractEntitiesWithIndices,
  extractHashtags: extractHashtags,
  extractHashtagsWithIndices: esm_extractHashtagsWithIndices,
  extractHtmlAttrsFromOptions: extractHtmlAttrsFromOptions,
  extractMentions: extractMentions,
  extractMentionsOrListsWithIndices: extractMentionsOrListsWithIndices,
  extractMentionsWithIndices: extractMentionsWithIndices,
  extractReplies: extractReplies,
  extractUrls: extractUrls,
  extractUrlsWithIndices: esm_extractUrlsWithIndices,
  getTweetLength: esm_getTweetLength,
  getUnicodeTextLength: getUnicodeTextLength,
  hasInvalidCharacters: hasInvalidCharacters,
  hitHighlight: hitHighlight,
  htmlEscape: htmlEscape,
  isInvalidTweet: isInvalidTweet,
  isValidHashtag: isValidHashtag,
  isValidList: isValidList,
  isValidTweetText: isValidTweetText,
  isValidUrl: esm_isValidUrl,
  isValidUsername: isValidUsername,
  linkTextWithEntity: linkTextWithEntity,
  linkToCashtag: linkToCashtag,
  linkToHashtag: linkToHashtag,
  linkToMentionAndList: linkToMentionAndList,
  linkToText: linkToText,
  linkToTextWithSymbol: linkToTextWithSymbol,
  linkToUrl: linkToUrl,
  modifyIndicesFromUTF16ToUnicode: modifyIndicesFromUTF16ToUnicode,
  modifyIndicesFromUnicodeToUTF16: modifyIndicesFromUnicodeToUTF16,
  regexen: regexp,
  removeOverlappingEntities: removeOverlappingEntities,
  parseTweet: esm_parseTweet,
  splitTags: splitTags,
  standardizeIndices: standardizeIndices,
  tagAttrs: tagAttrs
});

/***/ })

}]);
//# sourceMappingURL=npm.twitter-text.js.map