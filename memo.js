/*
========================= 1 =========================;
⭐️ Modul Packagelar - ishimizni osonlashtiradigan tayyor mantiqlar!
    3 turda boaldi ** CORE ** EXTERNAL ** FILE ** // Hammasini aniq maqsadli vazifasi bor ornatish turi farqli

const fs = require("fs");       -           CommonJS    - boshlash uchun yaxshi
import fs from "fs";            -           ESM js      - kuchli ⚡️

⭐️ CORE - odatda npm installda ornatilgan boladi!              [node] [->] [->] : Ko'rish mumkin
    - CORE packagelar qayerda boladi?       ==>   (which node) NodeJS o'rnashgan joyda / yuklagan versiyamiz / bin / ichida
        - shunchaki yozib ketamiz yoki (install qilib o'trmay) require('') bilan boshlaymiz;

⭐️ EXTERNAL - Install bilan avval yuklab keyin CORE kabi ishlatsak boladi buni NPMJS saytidan korishimiz docs ni oqib olishimiz mumkin.
    - EXTERNAL packagelar qayerda boladi?   ==>   install qilganimizda YANGI node_modules FOLDER yaratilib ichida boladi.
        - EXTERNALlarni yuklashda 3 xil usul bor 
            -dependencies           => node_modules joylashadi : loyiha davomida doyimiy ishlatamiz PUBLISHING dan keyin ham.
            -dev-dependencies       => node_modules joylashadi : FAQAT loyiha DEVELOP qismida ishlatamiz.
            -global                 => biz foydalanayotgan node version ichidagi lib (library)ga yuklanib keyin ham boshqa loyihalarda ishlatsak boladi.;

⭐️ FILE - ozimiz file ochib ***.js qilib ichida mantiq yozimiz va u File package 
    - Tabiiyki joyi biz fileni ochgan joyimizda bo'ladi
    - u fileni package qilish va oddiy ***.js filedan AJRATADIGAN QISM: 
        - ***.js ichida: module.exports = ""
        - bizga olish kerak bolga fileda require("./") FAQAT ichida PATH ni berish darkor
            - bu turdagi ***.js file ichida Class ham function ham object bolishi mumkin...;

⭐️⭐️⭐️ DEMAKKI HAMMA PACKAGELAR ASLI KIM UCHUNDIR ODDIY FILE PACKAGE !!!


========================= 2 =========================;
⭐️ - Express framework va bu framework orqali web server quramiz
    - Express framework - bu o'zini nima, nima vazifa bajaradi? ==> kichik web framework (agar BILMASAM DOCS GA BORAMAN)
        - 🧱 Framework = poydevor yoki boglovchi asos
        - Biz foydalanyabmiz Express NODEJS uchun eng mashxuri 

        ⭐️ PATTERNS:
            - ARCHITECTURE PATTERN > MVC
            - DESIGN PATTERN > MIDDLEWARE
        ⭐️ FRONTEND QURISH:
            - BSSR (EJS)
            - SPA (REACT)
        ⭐️ API REQUEST:
            - TYPE > Traditional API | Rest API | GraphQL API
            - METHOD > GET | POST
            - STUCTURE > header | body

        Traditional API -  to'liq htmlni backganda turib yuborsak
        Rest API -  json filelarini yuboradi

⭐️ -  EJS framework orqali ananaviy frontend quramiz
    1. EJS -> buni ham Routing qilishimiz kerak bo'lgani sabab avvalo Expressni va HTTP tayyorlab olamiz.
    2.  1) public folder - bu frontend uchun yuboriladigan {css file imagelarni} shu faylga yuklaymiz chunki backend hech qanaqasiga ko'rinmaydi
            - bu filemizni app.use bilan dostup berganmiz...
        2) session code: hozircha yoq => Session — foydalanuvchini “taniy olish” va holatini (state) saqlash uchun kerak. Login kabi...    
        3)  views qismi - bu qismda Qaysi Enginee ishlayotgani + qayerda nima nom bilan joylashganini aytadi...
        4) Routing qismi - korsatgan mazilimizga *rootga kirganda / qiladigan amallari RES REQ ⭐️ bu bilan biz API yaratib oldik 
            - misol biz: >>> roting qilib renderda faqat file nomini bersak yetadi chunki viewsda joyi va turini korsatganmiz
            app.get("/", function (req, res) {
                res.render('harid')
            });
    3.  Serverni eshitish 
        - http yaratilib app uchun ishlaydi va serverni eshitadi


    PATTERNS : for system desing 
                    - ARTICHECTURE PATTERN          types: MVC
                        - part of artichecture desing is DESING PATTERN
========================= 3 =========================;
⭐️ -  NodeJS event loop va Callback functionlarni 
    1. NodeJS Single thread ====> thread pools : kam resurs + 🆘 LIBUV yordam beradi taskni threadga taqsimlashga  *togri ishlatish muhim aks xolda clintlar bilan ishlash muammo

    2. PHP Multi thread : kop resurs => Har user uchun yangi thread ochishi kerak


 ⭐️⭐️⭐️ VIDEO DARSDAGI XULOSALAR:

    DEFINATION      :       CALL                                - setTimeout / setInterval
      callback      >     callback                              -      o     /      o 
      async/await   >     then/catch || async/await             -      x     /      x
      promise       >     then/catch || async/await             -      o     /      x || o

    sync : ... callback
    async : callback, async , promise

========================= 4 =========================;
mongoDB -> togridan togri 
mongose -> package orqali
----------------------------------------------------------
mongoDB : Cluster0 > DataBase > Collection > Document > DataSet
MySQL : Cluster0 > DataBase > Table > Record > DataSet
----------------------------------------------------------
* MongoDB compass - database frontendi yohud qulaylik uchun interface (Clinet Application)
    DataBase esa biz yaratgan hududda (Bahrain, Seoul, ...)
----------------------------------------------------------
⭐️ TCP vs HTTP 
TCP - doimiy ulanish (bir tunel hosil qildi va doimiy ulanish bor....!)
HTTP - bir martalik (vazifasini bajaradi va yoq bolib ketadi) > (yuqoridagi tunel ichida ma'lum vazifani bajardi tugadi!) TAMAM - Take It Easy
----------------------------------------------------------
⭐️ DataBase - turli ko'p, sabab turli maqsadda datani turlicha saqlash va uni ustida amal bajarish kerak....
    -Asosiy uchun: MySQL , DynamoDB , MongoDB
    -Chatting uchun: Redis , FireBase, ...

RDBMS - Relational Data Base Manage System (SQL - deymiz)   * bir biriga bog'liq relationalda hullas!
* SQL , Oracle , MariaDB , Postgre SQL , etch...        || bir biriga juda yaqin va o'xshash
* SQL BigData Application da ya'ni ma'lumot kengayganda ko'p qismi manual qo'lda kiritsh talab qiladi

DBMS - Data Base Manage System             (NoSQL -deymiz)  *  wide column , document , key-value, graph : turlari bor!
* MongoDB , Firebase, redis , couchDb , cassandra       || butkul bir biriga o'xashamadi
* NoSQL BigData Application uchun foydali (ya'ni ma'lumot kengayganda qiyin emas)
----------------------------------------------------------
⭐️ flow of working API || DEBUGING
FRONTEND 🖥️ => BACKEND ⚙️ => DATABASE 🗃️ => BACKEND ⚙️ => FRONTEND 🖥️
step 1: FRONTEND 🖥️ => BACKEND ⚙️ =>
step 2: BACKEND ⚙️ => DATABASE 🗃️ =>
step 3: DATABASE 🗃️ => BACKEND ⚙️ =>
step 4: BACKEND ⚙️ => FRONTEND 🖥️ .

FRONTEND <=> BACKEND - ma'lumot .json formatda olib borsa bu - REST API         
    (*bu holatda React  .json formatdagi datadan frontend shakillantirib oladi)
FRONTEND <=> BACKEND - ma'lumot backendda qurib keyin borsa bu - Traditional API
----------------------------------------------------------



*/
