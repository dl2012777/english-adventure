// ============================================================
//  英语大冒险 — 完整题库 40天
//  上海教育出版社 五年级英语 (沪教版/牛津上海版 2017版)
//  每个考点预留 50% 冗余题量
// ============================================================

const FULL_QUESTION_BANK = {
// ==================== DAY 1-2: 5A M1U1 My birthday ====================
  day1: {
    title:"My birthday · 序数词+日期",
    vocab: [
      { subtype:'en2cn',difficulty:'easy',question:'"first" 的中文是？',options:['第一','第二','第三','第四'],answer:0,explanation:'first = 第一，序数词。' },
      { subtype:'en2cn',difficulty:'easy',question:'"second" 的中文是？',options:['第二','第一','第三','第五'],answer:0,explanation:'second = 第二。' },
      { subtype:'en2cn',difficulty:'easy',question:'"third" 的中文是？',options:['第三','第一','第二','第四'],answer:0,explanation:'third = 第三，注意拼写是 th-i-r-d。' },
      { subtype:'en2cn',difficulty:'easy',question:'"fourth" 的中文是？',options:['第四','第一','第三','第五'],answer:0,explanation:'fourth = 第四，four + th。' },
      { subtype:'cn2en',difficulty:'easy',question:'"第五" 用英语怎么说？',options:['fifth','first','fourth','sixth'],answer:0,explanation:'fifth = 第五，注意拼写是 f-i-f-t-h。' },
      { subtype:'cn2en',difficulty:'medium',question:'"第八" 用英语怎么说？',options:['eighth','eightth','eigth','eight'],answer:0,explanation:'eighth = 第八，eight + h。' },
      { subtype:'cn2en',difficulty:'medium',question:'"第九" 用英语怎么说？',options:['ninth','nineth','ninethh','nine'],answer:0,explanation:'ninth = 第九，nine 去掉 e 加 th。' },
      { subtype:'cn2en',difficulty:'medium',question:'"第十二" 用英语怎么说？',options:['twelfth','twelveth','twelth','twelve'],answer:0,explanation:'twelfth = 第十二，twelve 变 f 加 th。' },
      { subtype:'spelling',difficulty:'hard',question:'补全: "第二十" = tw _ nti _ th',options:['twentieth','twentith','twentyth','twentith'],answer:0,explanation:'twentieth = 第二十，y 变 ie 加 th。' },
      { subtype:'spelling',difficulty:'hard',question:'补全: "第三十" = th _ rti _ th',options:['thirtieth','thirtyth','thirtith','thirtyith'],answer:0,explanation:'thirtieth = 第三十，y 变 ie 加 th。' },
      { subtype:'en2cn',difficulty:'easy',question:'"birthday" 的中文是？',options:['生日','派对','礼物','蛋糕'],answer:0,explanation:'birthday = 生日。Happy birthday! 生日快乐！' },
      { subtype:'en2cn',difficulty:'easy',question:'"party" 的中文是？',options:['派对','生日','礼物','蛋糕'],answer:0,explanation:'party = 派对、聚会。birthday party = 生日派对。' },
      { subtype:'en2cn',difficulty:'medium',question:'"invite" 的中文是？',options:['邀请','参加','准备','庆祝'],answer:0,explanation:'invite = 邀请。Invite your friends to the party.' },
      { subtype:'cn2en',difficulty:'medium',question:'"礼物" 用英语怎么说？',options:['present','party','parent','please'],answer:0,explanation:'present = 礼物。A birthday present.' },
      { subtype:'spelling',difficulty:'hard',question:'补全: "第六" = s _ xth',options:['sixth','sixt','sixthh','sixeth'],answer:0,explanation:'sixth = 第六，six + th。' },
    ],
    grammar: [
      { subtype:'fill_blank',difficulty:'easy',question:'When _____ your birthday?',options:['is','are','am','be'],answer:0,explanation:'your birthday 是单数，用 is。' },
      { subtype:'fill_blank',difficulty:'easy',question:'My birthday is _____ March 1st.',options:['on','in','at','for'],answer:0,explanation:'具体某一天用 on。' },
      { subtype:'fill_blank',difficulty:'easy',question:'It\'s _____ June 8th.',options:['on','in','at','by'],answer:0,explanation:'on + 具体日期。' },
      { subtype:'fill_blank',difficulty:'medium',question:'Her birthday is _____ May.',options:['in','on','at','to'],answer:0,explanation:'只到月份，用 in。in May = 在五月。' },
      { subtype:'fill_blank',difficulty:'medium',question:'_____ birthday is in July? — Tom\'s.',options:['Whose','Who','What','Which'],answer:0,explanation:'Whose birthday = 谁的生日，回答用 人名\'s。' },
      { subtype:'reorder',difficulty:'medium',question:'排成句子：',words:['birthday','is','when','your'],answerOrder:[3,2,0,1],explanation:'When is your birthday? 注意疑问句语序。' },
      { subtype:'error_fix',difficulty:'hard',question:'哪处有错？"My birthday is in March 8th."',options:['My','is','in','March'],answer:2,explanation:'具体日期用 on，不是 in。改为 on March 8th。' },
      { subtype:'fill_blank',difficulty:'hard',question:'____ is the first month of the year? — January.',options:['Which','What','Who','When'],answer:0,explanation:'Which month = 哪个月份。' },
      { subtype:'fill_blank',difficulty:'medium',question:'I can\'t ____! My birthday is coming.',options:['wait','want','watch','walk'],answer:0,explanation:'I can\'t wait! = 我等不及了！' },
      { subtype:'error_fix',difficulty:'hard',question:'哪处有错？"I am wait for my birthday party."',options:['I am','wait','for','birthday party'],answer:1,explanation:'应该是 "I can\'t wait for my birthday party." wait 不能单独用 am。' },
      { subtype:'fill_blank',difficulty:'easy',question:'Happy birthday _____ you!',options:['to','for','with','of'],answer:0,explanation:'Happy birthday to you! = 祝你生日快乐！' },
      { subtype:'reorder',difficulty:'hard',question:'排成句子：',words:['party','my','to','birthday','welcome'],answerOrder:[4,2,3,0,1],explanation:'Welcome to my birthday party! = 欢迎来我的生日派对！' },
    ],
    listening: [
      { audioText:'When is your birthday? It is on May 1st.',audioLines:[{speaker:'A',text:'When is your birthday?'},{speaker:'B',text:'It is on May 1st.'}],question:'B 的生日是哪天？',options:['5月1日','5月1号','5月1','May 1'],answer:0,explanation:'It is on May 1st. = 在五月一日。' },
      { audioText:'Happy birthday to you! Here is a present for you.',audioLines:[{speaker:'A',text:'Happy birthday to you!'},{speaker:'B',text:'Here is a present for you.'}],question:'B 给了 A 什么？',options:['一份礼物','一个蛋糕','一张卡片','一个气球'],answer:0,explanation:'present = 礼物。' },
      { audioText:'I can not wait for my birthday party on June 8th.',audioLines:[{speaker:'A',text:'I can not wait for my birthday party on June 8th.'}],question:'A 的生日派对在哪天？',options:['6月8日','6月8号','6月8','June 8'],answer:0,explanation:'on June 8th = 在六月八日。' },
      { audioText:'Whose birthday is in July? Tom\'s birthday is in July.',audioLines:[{speaker:'A',text:'Whose birthday is in July?'},{speaker:'B',text:'Tom\'s birthday is in July.'}],question:'谁的生日在七月？',options:['Tom','七月','A','B'],answer:0,explanation:'Tom\'s birthday is in July. = Tom 的生日在七月。' },
      { audioText:'Let\'s have a party! I will invite all my friends.',audioLines:[{speaker:'A',text:'Let\'s have a party!'},{speaker:'B',text:'I will invite all my friends.'}],question:'B 打算邀请谁？',options:['所有朋友','家人','同学','邻居'],answer:0,explanation:'invite all my friends = 邀请我所有的朋友。' },
      { audioText:'The first day of the week is Sunday. The second day is Monday.',audioLines:[{speaker:'A',text:'The first day of the week is Sunday.'},{speaker:'A',text:'The second day is Monday.'}],question:'一周的第一天是星期几？',options:['星期天','星期一','星期二','星期六'],answer:0,explanation:'The first day = 第一天 = Sunday。' },
      { audioText:'Today is my birthday. I am ten years old.',audioLines:[{speaker:'A',text:'Today is my birthday.'},{speaker:'A',text:'I am ten years old.'}],question:'A 今年几岁？',options:['10岁','9岁','11岁','8岁'],answer:0,explanation:'I am ten years old. = 我十岁了。' },
      { audioText:'My birthday is on the third of March. Third is March 3rd.',audioLines:[{speaker:'A',text:'My birthday is on the third of March.'}],question:'A 的生日是哪天？',options:['3月3日','3月1日','3月2日','3月4日'],answer:0,explanation:'the third of March = 三月三日。' },
      { audioText:'Please come to my party at 2 o\'clock on Sunday.',audioLines:[{speaker:'A',text:'Please come to my party at 2 o\'clock on Sunday.'}],question:'派对在什么时候？',options:['周日2点','周六2点','周日12点','周日3点'],answer:0,explanation:'at 2 o\'clock on Sunday = 周日两点。' },
    ],
    boss: [
      { question:'A: "When\'s your birthday?" B: "It\'s _____ January 15th. I can\'t wait!"',options:['on / wait','in / wait','on / want','at / want'],answer:0,explanation:'具体日期用 on，I can\'t wait = 我等不及了。' },
      { question:'My birthday is on June 1st. June is the _____ month of the year.',options:['sixth','seventh','fifth','fourth'],answer:0,explanation:'June = 六月，是一年中的第6个月。' },
      { question:'下面哪句话是正确的？',options:['Her birthday is on May 8th.','Her birthday is in May 8th.','Her birthday is at May 8th.','Her birthday is May 8th.'],answer:0,explanation:'具体日期用 on。' },
      { question:'There are _____ students. Tom is the _____ one.',options:['five / fifth','fifth / five','five / five','fifth / fifth'],answer:0,explanation:'five students = 五个学生（数量），the fifth one = 第五个（序数）。' },
      { question:'"我会邀请你参加我的生日派对" 用英语怎么说？',options:['I\'ll invite you to my birthday party.','I invite your party.','I will to my party.','You come my party.'],answer:0,explanation:'invite somebody to something = 邀请某人参加某活动。' },
    ]
  },

// ==================== DAY 3: 5A M1U2 My way to school ====================
  day3: {
    title:"My way to school · 交通方式",
    vocab: [
      { subtype:'en2cn',difficulty:'easy',question:'"bus" 的中文是？',options:['公共汽车','自行车','出租车','地铁'],answer:0,explanation:'bus = 公共汽车。I come by bus. = 我坐公交来。' },
      { subtype:'en2cn',difficulty:'easy',question:'"bike" 的中文是？',options:['自行车','汽车','公交车','火车'],answer:0,explanation:'bike = 自行车。by bike = 骑自行车。' },
      { subtype:'en2cn',difficulty:'easy',question:'"car" 的中文是？',options:['小汽车','公共汽车','卡车','火车'],answer:0,explanation:'car = 小汽车。by car = 开车。' },
      { subtype:'en2cn',difficulty:'easy',question:'"walk" 的中文是？',options:['步行','跑步','开车','骑车'],answer:0,explanation:'walk = 步行。I walk to school. = 我走路去学校。' },
      { subtype:'cn2en',difficulty:'medium',question:'"地铁" 用英语怎么说？',options:['underground','underwater','underline','understand'],answer:0,explanation:'underground/subway/metro = 地铁。' },
      { subtype:'cn2en',difficulty:'medium',question:'"出租车" 用英语怎么说？',options:['taxi','bus','car','van'],answer:0,explanation:'taxi = 出租车。by taxi = 打车。' },
      { subtype:'en2cn',difficulty:'medium',question:'"near" 的中文是？',options:['附近','远处','里面','外面'],answer:0,explanation:'near = 在…附近。near our school = 在我们学校附近。' },
      { subtype:'en2cn',difficulty:'medium',question:'"far" 的反义词是什么？',options:['near','long','close','short'],answer:0,explanation:'far 的反义词是 near。far from = 远离。' },
      { subtype:'spelling',difficulty:'hard',question:'补全: bicy _ _ e',options:['bicycle','bicyle','bicycl','bycycle'],answer:0,explanation:'bicycle = 自行车，也常说 bike。' },
      { subtype:'spelling',difficulty:'hard',question:'补全: transp _ _ t',options:['transport','transpert','transportt','transprt'],answer:0,explanation:'transport = 交通、运输。' },
      { subtype:'cn2en',difficulty:'easy',question:'"上学" 用英语怎么说？',options:['go to school','go school','to school','school go'],answer:0,explanation:'go to school = 上学。' },
      { subtype:'en2cn',difficulty:'easy',question:'"on foot" 的中文是？',options:['步行','骑车','开车','跑步'],answer:0,explanation:'on foot = 步行。I go to school on foot. = 我走路去学校。' },
      { subtype:'cn2en',difficulty:'hard',question:'"校车" 用英语怎么说？',options:['school bus','bus school','school car','class bus'],answer:0,explanation:'school bus = 校车。' },
      { subtype:'en2cn',difficulty:'medium',question:'"train" 的中文是？',options:['火车','飞机','轮船','汽车'],answer:0,explanation:'train = 火车。by train = 坐火车。' },
      { subtype:'spelling',difficulty:'hard',question:'补全: mo _ or _ i _ e',options:['motorcycle','motorcicle','motocycle','motorcylce'],answer:0,explanation:'motorcycle = 摩托车。' },
    ],
    grammar: [
      { subtype:'fill_blank',difficulty:'easy',question:'How _____ you come to school?',options:['do','does','are','is'],answer:0,explanation:'you 用 do。How do you come to school?' },
      { subtype:'fill_blank',difficulty:'easy',question:'I come to school _____ bus.',options:['by','on','in','with'],answer:0,explanation:'by + 交通工具。by bus = 坐公交。' },
      { subtype:'fill_blank',difficulty:'easy',question:'I go to school _____ foot.',options:['on','by','in','with'],answer:0,explanation:'on foot = 步行，固定搭配。' },
      { subtype:'fill_blank',difficulty:'medium',question:'How _____ your sister go to school?',options:['does','do','is','are'],answer:0,explanation:'your sister = 第三人称单数，用 does。' },
      { subtype:'fill_blank',difficulty:'medium',question:'She _____ to school by bike.',options:['goes','go','going','went'],answer:0,explanation:'She 是第三人称单数，go → goes。' },
      { subtype:'reorder',difficulty:'medium',question:'排成句子：',words:['school','you','to','go','how','do'],answerOrder:[4,5,0,1,3,2],explanation:'How do you go to school? 你怎样去学校？' },
      { subtype:'error_fix',difficulty:'hard',question:'哪处有错？"I by bus go to school."',options:['I','by bus','go to school','没有错'],answer:1,explanation:'应该说 I go to school by bus. by bus 放在句末。' },
      { subtype:'fill_blank',difficulty:'hard',question:'He lives near the school, so he _____ to school.',options:['walks','takes bus','drives','flies'],answer:0,explanation:'住在学校附近所以步行。walks to school。' },
      { subtype:'fill_blank',difficulty:'medium',question:'Tom _____ to school by car with his dad.',options:['goes','go','going','is go'],answer:0,explanation:'Tom 是第三人称单数，go → goes。' },
      { subtype:'error_fix',difficulty:'hard',question:'哪处有错？"She go to school by bus every day."',options:['She','go','by bus','every day'],answer:1,explanation:'She 是第三人称单数，应该用 goes。' },
      { subtype:'fill_blank',difficulty:'easy',question:'Alice _____ to school on foot.',options:['goes','go','going','is go'],answer:0,explanation:'Alice = 第三人称单数，用 goes。' },
      { subtype:'reorder',difficulty:'hard',question:'排成句子：',words:['does','how','school','go','to','peter'],answerOrder:[1,0,5,3,4,2],explanation:'How does Peter go to school? Peter 怎样去学校？' },
    ],
    listening: [
      { audioText:'How do you go to school? I go to school by bike.',audioLines:[{speaker:'A',text:'How do you go to school?'},{speaker:'B',text:'I go to school by bike.'}],question:'B 怎样去学校？',options:['骑自行车','坐公交','走路','开车'],answer:0,explanation:'by bike = 骑自行车。' },
      { audioText:'I live near school, so I walk to school every day.',audioLines:[{speaker:'A',text:'I live near school, so I walk to school every day.'}],question:'A 怎样去学校？',options:['步行','坐车','骑车','跑步'],answer:0,explanation:'walk to school = 走路去学校。' },
      { audioText:'Tom goes to school by bus. His sister goes by car.',audioLines:[{speaker:'A',text:'Tom goes to school by bus.'},{speaker:'A',text:'His sister goes by car.'}],question:'Tom 怎样去学校？',options:['坐公交','坐小汽车','走路','骑车'],answer:0,explanation:'Tom goes to school by bus.' },
      { audioText:'Do you come to school by underground? No, I come by bike.',audioLines:[{speaker:'A',text:'Do you come to school by underground?'},{speaker:'B',text:'No, I come by bike.'}],question:'B 怎样来学校？',options:['骑车','坐地铁','坐公交','走路'],answer:0,explanation:'I come by bike = 我骑车来。' },
      { audioText:'My home is far from school, so I take the bus.',audioLines:[{speaker:'A',text:'My home is far from school, so I take the bus.'}],question:'为什么 A 要坐公交？',options:['家离学校远','家离学校近','没有自行车','喜欢公交'],answer:0,explanation:'far from school = 离学校远。' },
      { audioText:'Peter goes to school on foot because his home is near.',audioLines:[{speaker:'A',text:'Peter goes to school on foot because his home is near.'}],question:'Peter 为什么步行？',options:['家很近','没有车','喜欢走路','学校小'],answer:0,explanation:'because his home is near = 因为他家很近。' },
      { audioText:'How does your mother go to work? She goes by underground.',audioLines:[{speaker:'A',text:'How does your mother go to work?'},{speaker:'B',text:'She goes by underground.'}],question:'妈妈怎样去上班？',options:['坐地铁','坐公交','开车','走路'],answer:0,explanation:'by underground = 坐地铁。' },
      { audioText:'My father and I go to school by car every morning.',audioLines:[{speaker:'A',text:'My father and I go to school by car every morning.'}],question:'A 和爸爸怎样去学校？',options:['开车','坐公交','走路','骑车'],answer:0,explanation:'by car = 开车/坐小汽车。' },
    ],
    boss: [
      { question:'A: "_____ do you come to school?" B: "I come by bus."',options:['How','What','Where','When'],answer:0,explanation:'How do you come to school? = 你怎样来学校？' },
      { question:'我住得离学校很远，所以坐地铁上学。',options:['I live far from school, so I go by underground.','I live near school, so I go by underground.','I far school bus.','I go school by car far.'],answer:0,explanation:'far from = 远离… by underground = 坐地铁。' },
      { question:'选出正确的句子：',options:['She goes to school on foot.','She go to school on foot.','She go to school by foot.','She goes to school in foot.'],answer:0,explanation:'goes（第三人称单数）+ on foot（固定搭配）。' },
    ]
  },

// ==================== DAY 22: 5B M1U1 What a mess! ====================
  day22: {
    title:"What a mess! · 物主代词 mine/yours/his/hers",
    vocab: [
      { subtype:'en2cn',difficulty:'easy',question:'"tidy" 的中文是？',options:['整洁的','凌乱的','安静的','美味的'],answer:0,explanation:'tidy = 整洁的，反义词是 messy。' },
      { subtype:'en2cn',difficulty:'easy',question:'"messy" 的中文是？',options:['凌乱的','整洁的','忙碌的','有趣的'],answer:0,explanation:'messy = 凌乱的。A messy room = 乱糟糟的房间。' },
      { subtype:'en2cn',difficulty:'easy',question:'"put away" 的中文是？',options:['收好放好','拿出来','扔掉','打开'],answer:0,explanation:'put away = 把…收好。Put away your toys!' },
      { subtype:'en2cn',difficulty:'easy',question:'"whose" 的中文是？',options:['谁的','谁的（东西）','哪里','为什么'],answer:0,explanation:'whose = 谁的。Whose book is this?' },
      { subtype:'cn2en',difficulty:'medium',question:'"我的（东西）" 名词性物主代词',options:['mine','my','me','I'],answer:0,explanation:'mine = 我的（东西）。This is my book → The book is mine.' },
      { subtype:'cn2en',difficulty:'medium',question:'"他的（东西）" 名词性物主代词',options:['his','him','he','himself'],answer:0,explanation:'his = 他的（东西）。This is his pen → The pen is his.' },
      { subtype:'cn2en',difficulty:'medium',question:'"她的（东西）" 名词性物主代词',options:['hers','her','she','herself'],answer:0,explanation:'hers = 她的（东西）。This is her bag → The bag is hers.' },
      { subtype:'spelling',difficulty:'hard',question:'补全: y _ _ _ s (你的东西)',options:['yours','yous','yors','yous'],answer:0,explanation:'yours = y-o-u-r-s。' },
      { subtype:'spelling',difficulty:'hard',question:'补全: _ _ rs (她的东西)',options:['hers','herz','hirs','hers'],answer:0,explanation:'hers = h-e-r-s。不是 her + s。' },
      { subtype:'cn2en',difficulty:'hard',question:'"整洁的" 是哪个？',options:['tidy','messy','dirty','clean'],answer:0,explanation:'tidy = 整洁的。Keep your room tidy.' },
      { subtype:'cn2en',difficulty:'medium',question:'"你的（东西）" 名词性物主代词',options:['yours','your','you','yourself'],answer:0,explanation:'yours = 你的（东西）。This is your book → The book is yours.' },
      { subtype:'en2cn',difficulty:'medium',question:'"mine" 的中文是？',options:['我的东西','我的','我的（形容词）','我'],answer:0,explanation:'mine = 我的东西（名词性物主代词）。' },
      { subtype:'en2cn',difficulty:'hard',question:'"ours" 的中文是？',options:['我们的（东西）','我们的','我们','咱们'],answer:0,explanation:'ours = 我们的东西。This is our classroom. The classroom is ours.' },
      { subtype:'cn2en',difficulty:'medium',question:'"他们的（东西）" 名词性物主代词',options:['theirs','their','them','they'],answer:0,explanation:'theirs = 他们的东西。' },
      { subtype:'spelling',difficulty:'hard',question:'补全: _ u r _ (你的/你们的)',options:['your','yours','you','yore'],answer:0,explanation:'your = 你的/你们的（形容词性）。Your book is on the desk.' },
    ],
    grammar: [
      { subtype:'fill_blank',difficulty:'easy',question:'Whose book ____ this?',options:['is','are','am','be'],answer:0,explanation:'book 是单数用 is。' },
      { subtype:'fill_blank',difficulty:'easy',question:'It\'s ____ book. (我的)',options:['my','mine','me','I'],answer:0,explanation:'后面有 book，用形容词性 my。' },
      { subtype:'fill_blank',difficulty:'easy',question:'Put ____ your toys, please!',options:['away','up','on','out'],answer:0,explanation:'put away = 收好。' },
      { subtype:'fill_blank',difficulty:'medium',question:'This is ____ pen. That one is ____.',options:['my / yours','mine / your','my / your','mine / yours'],answer:0,explanation:'第一空后有 pen 用 my；第二空后无名词用 yours。' },
      { subtype:'reorder',difficulty:'medium',question:'排成句子：',words:['is','whose','this','book'],answerOrder:[1,2,3,0],explanation:'Whose book is this?' },
      { subtype:'fill_blank',difficulty:'medium',question:'The bag is ____ (她的).',options:['hers','her','she',"her's"],answer:0,explanation:'后面无名词用 hers。her\'s 是错误写法。' },
      { subtype:'error_fix',difficulty:'hard',question:'哪处有错？"That book is my. This is yours."',options:['That','my','yours','没有错'],answer:1,explanation:'my 不能单独用，改为 mine。' },
      { subtype:'fill_blank',difficulty:'hard',question:'This isn\'t ____ cap. ____ is on the chair.',options:['my / Mine','mine / My','my / My','mine / Mine'],answer:0,explanation:'第一空后 cap 用 my；第二空后无名词首字母大写 Mine。' },
      { subtype:'fill_blank',difficulty:'medium',question:'_____ pencils are these? They\'re ____.',options:['Whose / mine','Who / my','Whose / my','What / mine'],answer:0,explanation:'Whose + 名词 = 谁的…，回答无名词用 mine。' },
      { subtype:'error_fix',difficulty:'hard',question:'哪处有错？"The red bag is her."',options:['The','red','bag','her'],answer:3,explanation:'后面无名词，应该用 hers，不是 her。' },
      { subtype:'fill_blank',difficulty:'easy',question:'____ away your books, please.',options:['Put','Puts','Putting','Puted'],answer:0,explanation:'Put away = 收好。祈使句用动词原形。' },
      { subtype:'reorder',difficulty:'hard',question:'排成句子：',words:['bed','make','please','your'],answerOrder:[1,3,0,2],explanation:'Make your bed, please. = 请整理床铺。' },
    ],
    listening: [
      { audioText:'Whose book is this? It is mine.',audioLines:[{speaker:'A',text:'Whose book is this?'},{speaker:'B',text:'It is mine.'}],question:'这本书是谁的？',options:['我的','你的','他的','她的'],answer:0,explanation:'B说 It is mine = 是我的。' },
      { audioText:'Is this your pen? No, it is not mine. It is his.',audioLines:[{speaker:'A',text:'Is this your pen?'},{speaker:'B',text:'No, it is not mine. It is his.'}],question:'这支笔是谁的？',options:['我的','你的','他的','她的'],answer:2,explanation:'B说 It is his。' },
      { audioText:'Put away your toys, Alice. OK, Mum. And put away your books too.',audioLines:[{speaker:'Mum',text:'Put away your toys, Alice.'},{speaker:'Alice',text:'OK, Mum.'},{speaker:'Mum',text:'And put away your books too.'}],question:'妈妈让 Alice 做什么？',options:['收好玩具和书','写作业','打扫房间','去吃饭'],answer:0,explanation:'put away toys + put away books。' },
      { audioText:'This is my bag. That bag is hers. The red one is yours.',audioLines:[{speaker:'A',text:'This is my bag.'},{speaker:'A',text:'That bag is hers.'},{speaker:'A',text:'The red one is yours.'}],question:'那个包 (that bag) 是谁的？',options:['她的','我的','你的','他的'],answer:0,explanation:'That bag is hers = 那个包是她的。' },
      { audioText:'Whose pencils are these? They look like yours. Yes, they are mine.',audioLines:[{speaker:'Tom',text:'Whose pencils are these? They look like yours.'},{speaker:'Mary',text:'Yes, they are mine.'}],question:'这些铅笔是谁的？',options:['Mary 的','Tom 的','不知道','别人的'],answer:0,explanation:'Mary 说 they are mine。' },
      { audioText:'This room is very messy! Whose T-shirt is on the floor? It is Peter\'s.',audioLines:[{speaker:'Mum',text:'This room is very messy! Whose T-shirt is on the floor?'},{speaker:'Mum',text:'It is Peter\'s.'}],question:'地板上的 T-shirt 是谁的？',options:['Peter 的','Paul 的','妈妈','不知道'],answer:0,explanation:'It is Peter\'s。' },
      { audioText:'Whose socks are these? They are Paul\'s. Put them away!',audioLines:[{speaker:'Mum',text:'Whose socks are these?'},{speaker:'Mum',text:'They are Paul\'s.'},{speaker:'Mum',text:'Put them away!'}],question:'袜子是谁的？',options:['Paul 的','Peter 的','妈妈','Tom 的'],answer:0,explanation:'They are Paul\'s。' },
      { audioText:'Is this your ruler? No, it\'s not mine. Ask Lily, maybe it\'s hers.',audioLines:[{speaker:'A',text:'Is this your ruler?'},{speaker:'B',text:'No, it\'s not mine.'},{speaker:'B',text:'Ask Lily, maybe it\'s hers.'}],question:'尺子可能是谁的？',options:['Lily 的','A 的','B 的','不知道'],answer:0,explanation:'maybe it\'s hers = 可能是她的（Lily 的）。' },
      { audioText:'Your room is a mess! Whose books are on the floor? They are mine. Sorry, Mum.',audioLines:[{speaker:'Mum',text:'Your room is a mess! Whose books are on the floor?'},{speaker:'Child',text:'They are mine. Sorry, Mum.'}],question:'地板上的书是谁的？',options:['孩子的','妈妈的','爸爸的','妹妹的'],answer:0,explanation:'They are mine = 是我的（孩子的）。' },
    ],
    boss: [
      { question:'Kitty: "____ ruler is this?" Alice: "It\'s ____."',options:['Whose / mine','Who / my','Whose / my','What / mine'],answer:0,explanation:'Whose + 名词问"谁的"，回答无名词用 mine。' },
      { question:'妈妈看到房间乱了说什么？',options:['Put away your things!','What a tidy room!','Whose book is that? It\'s mine.','The room is clean.'],answer:0,explanation:'messy 的房间，妈妈说 put away your things。' },
      { question:'Tom: "Is this your pencil?" Jerry: "No, it\'s not ____. Maybe it\'s ____."',options:['mine / hers','my / hers','mine / her','my / her'],answer:0,explanation:'第一空后无名词用 mine，第二空后无名词用 hers。' },
      { question:'选出正确的句子：',options:['The blue bag is mine.','The blue bag is my.','The blue bag is me.','The blue bag is I.'],answer:0,explanation:'后面无名词用名词性物主代词 mine。' },
      { question:'A: "Whose T-shirt is this?" B: "It\'s ____. It\'s my brother\'s."',options:['his','hers','mine','yours'],answer:0,explanation:'my brother\'s = 我哥哥的 → 对应的物主代词是 his。' },
    ]
  }
};

// ============================================================
//  题库辅助函数
// ============================================================

// 打乱数组
function shuffle(arr){
  const a=[...arr];
  for(let i=a.length-1;i>0;i--){
    const j=Math.floor(Math.random()*(i+1));
    [a[i],a[j]]=[a[j],a[i]];
  }
  return a;
}

// 从题库中随机抽取指定数量的题目
function pickQuestions(pool,count){
  if(!pool||pool.length===0)return [];
  const shuffled=shuffle(pool);
  return shuffled.slice(0,Math.min(count,shuffled.length));
}

// 生成某一天的完整题目列表 (27题 + 冗余)
function getDayQuestions(day){
  const bank=FULL_QUESTION_BANK[day];
  if(!bank)return [];

  const vocabCount=10;   // 需要10道词汇
  const grammarCount=8;  // 需要8道语法
  const listenCount=6;   // 需要6道听力
  const bossCount=3;     // 需要3道Boss

  const vocabs=pickQuestions(bank.vocab,vocabCount).map((q,i)=>({...q,id:`v${i+1}`,stage:'vocab'}));
  const grams=pickQuestions(bank.grammar,grammarCount).map((q,i)=>({...q,id:`g${i+1}`,stage:'grammar'}));
  const listens=pickQuestions(bank.listening,listenCount).map((q,i)=>({...q,id:`l${i+1}`,stage:'listening'}));
  const bosses=pickQuestions(bank.boss,bossCount).map((q,i)=>({...q,id:`b${i+1}`,stage:'boss'}));

  return [...vocabs,...grams,...listens,...bosses];
}

// 获取某一天的信息
function getDayInfo(day){
  return FULL_QUESTION_BANK[day]?{title:FULL_QUESTION_BANK[day].title}:{title:'未知'};
}

// 可用天数列表
function getAvailableDays(){
  return Object.keys(FULL_QUESTION_BANK).filter(k=>k.startsWith('day'));
}
