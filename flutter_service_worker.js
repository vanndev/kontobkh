'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "4c838ace478f1737c86790644d240f85",
"version.json": "e28d00356fe31675ba66ce8a7b1242ee",
"index.html": "7cbc1f5e6f71827204ff7f14ccc084d1",
"/": "7cbc1f5e6f71827204ff7f14ccc084d1",
"main.dart.js": "3165b62c5578b4ddf164ed954e4709bb",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"logo.jpg": "931416d177e2613a2888feaa8f07ac70",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "19b5bf64e1ca8057949dd888c0a543ba",
".git/config": "ee9b84f62ab46ec3b8202e4d2ccee533",
".git/objects/95/3da0d4416726d3f51c484d0c48e8fc7d389535": "fed1755d3c9c98f47593e33d00409272",
".git/objects/0c/1d95fa99d38687d1baa334e5989afc96997318": "fef0217a480f6664d0fd1976fd3970fd",
".git/objects/50/1e078f8c246d593f690573388d440d04c716e8": "16eff9bcd0fd53238d6f62f4614e9a72",
".git/objects/50/89c353a5151b9d7989abb53a350ee9d105d83c": "8e4efd3bbf1847301e9f8c99fe080a78",
".git/objects/68/43fddc6aef172d5576ecce56160b1c73bc0f85": "2a91c358adf65703ab820ee54e7aff37",
".git/objects/57/93b2f771dfafdce22d31291f48a888204a657e": "08db907fac3967f73d9bd2ae076fb281",
".git/objects/6f/7661bc79baa113f478e9a717e0c4959a3f3d27": "985be3a6935e9d31febd5205a9e04c4e",
".git/objects/9b/57a04b8e6c6499c65a7e07f50d18bf3ea9139f": "24e38ced59256e0d4cdf08728f2b9284",
".git/objects/9e/81638d702446dcdf18fca49211b59bc9775447": "3ef5e5e07e2fe423ba4379891d5114f1",
".git/objects/35/eb1ddfbbc029bcab630581847471d7f238ec53": "b69277a8e391674b63a06b70141a9094",
".git/objects/69/b2023ef3b84225f16fdd15ba36b2b5fc3cee43": "6ccef18e05a49674444167a08de6e407",
".git/objects/51/03e757c71f2abfd2269054a790f775ec61ffa4": "d437b77e41df8fcc0c0e99f143adc093",
".git/objects/93/b363f37b4951e6c5b9e1932ed169c9928b1e90": "c8d74fb3083c0dc39be8cff78a1d4dd5",
".git/objects/94/d0251fcae560900dc145df7be84d434a772abe": "e2b7ee147a32bb644f377076b65b1aaf",
".git/objects/94/f4212dec95c5b81e62e40534db1a84a490ee2f": "d8ea6f34008cf2e780c9aa9c4fe28612",
".git/objects/60/81f228ffa74887e55042dcb2350c27f5d5144c": "f0934ce2f9df7a43a24a72ae9e076663",
".git/objects/5f/31c6f243843004d0f04c44bf3b8d28a52eaea1": "03244f6df119d76cd956105922c65b31",
".git/objects/d9/4e6c6bcab121be71fd856c3e11ef7d73786cad": "f6344452e733d3e01af90be52950c035",
".git/objects/d9/5b1d3499b3b3d3989fa2a461151ba2abd92a07": "a072a09ac2efe43c8d49b7356317e52e",
".git/objects/d9/7c644dcd3ff49f967c5f13552b1bee452f0f93": "82f922101a11d4661023ee48a462315a",
".git/objects/ad/ced61befd6b9d30829511317b07b72e66918a1": "37e7fcca73f0b6930673b256fac467ae",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/b4/6a4b80c9eb70cbf176e0acd155dbd4c48420a9": "52a2fd00820ddbb83f34b010e238a5dd",
".git/objects/d1/615bc1f1936daf3c56b6034e8b9a3aa93f9bab": "42b36be2dec0caf78f15f4e9003011e4",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/ebd4805981b8400db3e3291c74a743fef9a824": "6c33f0e88a71d9ba8563eab3ee932f04",
".git/objects/bc/77415644680d14dc8c8012e0fc4ba85bf59693": "064c043179a4c033906f71510f5206ce",
".git/objects/f3/3e0726c3581f96c51f862cf61120af36599a32": "afcaefd94c5f13d3da610e0defa27e50",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c0/b321ee748e02424a0806109e20617d917a362e": "c48659d9b1e84dc59d7e3d0bd6ae8684",
".git/objects/c9/ed79fc68f8fd00115bc87a5d5788f844851c6c": "854211e0add31dc85c796fdd1f086a3e",
".git/objects/fd/05cfbc927a4fedcbe4d6d4b62e2c1ed8918f26": "5675c69555d005a1a244cc8ba90a402c",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f5/89ca37d210990980a9d9b1a5cb4a29d2db6c70": "8b8d21aac8e6cdbec1fc106163311c31",
".git/objects/e3/e1054439532cd64dadf0d66057fcc7d400fb56": "d2508c9c87d799a90b569f025d421da7",
".git/objects/fe/d512b21b8b9c83d6fa1cc1052096ab1e92067e": "f7a480e57473da37ef878a76a1d86bd3",
".git/objects/c8/3af99da428c63c1f82efdcd11c8d5297bddb04": "144ef6d9a8ff9a753d6e3b9573d5242f",
".git/objects/fb/78890063d03975c0412999a9064418248abc9a": "3596d3a0d0b40b6f9eebb61d73ebe512",
".git/objects/ec/67f17888fda8675625582eddd9260fd24feb9c": "5b8a3eb32248dfd4e3c93b6cde91d59a",
".git/objects/ec/7c70e7277deac6da2f1eaf4df5c3da31991ef9": "9b4598a3d3d2b8959edcb45c937b976b",
".git/objects/18/8022c407cc4e84bd85fb8b2b2f7264c4a0c670": "54469d4153814cf7d22de23d772a9b9f",
".git/objects/27/84d545399e09d6ff29a412ed2e4caad2a9becd": "9c77c1abe22100a1bb3d94eb21c6d444",
".git/objects/4b/55a7818ee143e39945ba7e6901728daedae743": "ca9c8063a35942dee53fd727cec80515",
".git/objects/11/39efb5a1ee23e5433dc7d80d0aac68270472b6": "b520627af1421b1e5ed8c08cdd1b0f4a",
".git/objects/29/5419ef53a66cc4e9fe50e8275f816a0fb41ca7": "60b0f54c88de5e5c62c3ed185fe3268c",
".git/objects/7c/3463b788d022128d17b29072564326f1fd8819": "37fee507a59e935fc85169a822943ba2",
".git/objects/7c/020a7bee6ff125c2bcc18f058d4f22875af931": "506bad33fb90cd3cac0838284a328860",
".git/objects/89/853f6cc5b2d2cbc0bbf9952dc9d8956389850c": "e663b61c50f18eae589a6a595a25452f",
".git/objects/1f/4411ed07f71d68fd59c324d69734c52957564e": "a81a69d92535d6bcbcbf997ffd603c14",
".git/objects/73/88095ac4e1af3a6144202aaa08940b100325c2": "ebe2fbe415208128c41620a1f200ab5f",
".git/objects/87/32e858711974cb38dc2337147b99e90e260ba7": "0528e6d80ec0af9b4266c006d49f2cb3",
".git/objects/8a/e5492906408af96cec4488456c745683a41b13": "bd26e06c41acaccda2a04e3591c44980",
".git/objects/10/fa74ca175f498437ef413ccd676799fa3e25f3": "a07f8ea1b2b8c6471bd9df70cd568a8d",
".git/objects/4c/1a584bffa052dea405151c5038ca5d03e6ca7d": "2cd3269f14a02beaeb44e0d033573e19",
".git/objects/26/d33521af10bcc7fd8cea344038eaaeb78d0ef5": "39554bb11371007e021a7fb3361ecd47",
".git/objects/26/312d2d7a8e36e59d7a7d74660cd85eae5f7d11": "75079f8f06d172a657acd51fa67e7612",
".git/objects/26/d2bee5ecc958d32b6f2dfb562d2d211b1327ad": "c843f6c018c4d57a901c84ad29d98e84",
".git/objects/4d/d48069b30bca885cc38ce9d78b1866979a44b1": "7253dcad639c0c51b88ff90ec7401150",
".git/objects/72/9830b2c2e4ac8bca90ca436e226c3884e68713": "1dae63958a4759bcbcf4714a23fb4a63",
".git/objects/72/5c12f595670a9171392526889b81a10136fb5d": "69204d5a30d34318a373d0976fd565de",
".git/objects/44/fa599e0bbdcca000a9b1c949fa607d7acc75cc": "916377f7326bab1c72af11ac6dd5e6bd",
".git/objects/2a/a13524890fc57babd1a16302118624a074914c": "1255d1197df91a25511922e26275a0d9",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/89bd5433595cf172fa0422db8e1bc261b94a23": "73a70c03d9f626e002470aaeac817dc6",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/07/fdf4fdb9ff571838be07723dd6cbbe8bb27c3d": "0046fca9050575cd0b2b561b254b215c",
".git/objects/09/09610a18f1b085b50340afd09a7c261fc67826": "4f7c0183a845af149cd10c2df9b38b23",
".git/objects/31/176ee809befe8b9e871649e6e7f899edc27c51": "1f514a609aa637a0de2809881517468a",
".git/objects/91/caceb5d239933ef254f3a3c8cb80612f625fe2": "634fc570b5f8d52f8d7850b2037fe0f5",
".git/objects/62/68d3825590ba27f3cf0e33148cf2fa7c615e10": "618d33b6e195c3027f0c2346e17d6dae",
".git/objects/3a/8cda5335b4b2a108123194b84df133bac91b23": "1636ee51263ed072c69e4e3b8d14f339",
".git/objects/08/632fb3eba4980e87d40098c1759ab758a57b0b": "13d81040d97cd7a0ffb9ae8ded7a46a7",
".git/objects/08/27c17254fd3959af211aaf91a82d3b9a804c2f": "360dc8df65dabbf4e7f858711c46cc09",
".git/objects/6d/8c6ea30fcedc7332292b4bd3e76a1499b07d85": "b7eb8f328ae6c2405fc3889acc8d62e4",
".git/objects/6c/386c8af380999a6898d5de5a9a1f65da356660": "6454af9fa7363614655a923c4d74440e",
".git/objects/0f/956af5f83f73dfc594e698e05615a98862579b": "18a403228fecb73b26fe92941e887f10",
".git/objects/90/4b6519bc7ff931abfc43a891e2fdfa85689416": "014e713d5d397248847e9639b8ef1c84",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/ba/da939c96a17b610265ccc6546a4a16b0af5b3e": "5d3fbbd8f05bc9eca2d737e96febe8f9",
".git/objects/ba/a39ae820a1488eef5baa0ec3763dc6bed2fc42": "c60cdeba5e5ba3cdb3aa31f86790fb6f",
".git/objects/b8/464fcf459d4facbca686f075ac7ee02d80309d": "da0c43a6292de2fae93acff1cd724f71",
".git/objects/b8/bde99f1774ebd4e9a5febbfc592673a090dcc8": "de1b5b52f57d373fd11388cbb30a52d5",
".git/objects/dc/4d631ce9cf590235e27de0a97affe1acf673a2": "bec8c0fe534df885beded0f566aae454",
".git/objects/a9/115ae72a5464307623872c5efadef406e7588b": "08aa0ba753a701a995f19c41dd13178a",
".git/objects/a9/994c940da62cc7ab7b4ac6fde01169676ad984": "a6fa000ccedd1a69a373f1158b462682",
".git/objects/aa/8b484a832e870a5e87a686449dec14c25d9017": "2d67fd6a25f25927086a3dce6bc91a17",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/f3fce424c11f234f69d1ecc5fea054cf5dd7ef": "a444a139a0fdd3cb7bffe93fbeacfd57",
".git/objects/b9/3e39bd49dfaf9e225bb598cd9644f833badd9a": "666b0d595ebbcc37f0c7b61220c18864",
".git/objects/e6/e7f6881d67f59757c1f838b5bd0294ebb37605": "4c878a9825752056fa993cfaed692358",
".git/objects/e6/eb8f689cbc9febb5a913856382d297dae0d383": "466fce65fb82283da16cdd7c93059ff3",
".git/objects/e6/90e77402daa99783ab705cb98df7818874ee9c": "18a3a88387382e3ce3be8492722976e7",
".git/objects/f9/9cda105cace0e10c941ea34411b18d7c6f4910": "4aea98ce25ce3e5c43ba0526a47ec8ba",
".git/objects/ff/21748a67015d9f558444bedf399d9af956ce9d": "3768961108966364111173b1ec9f1909",
".git/objects/ff/a6b2b516d50f3136308046a8a4a2dcc86f5610": "6d3698fbaf4175841dad20ccddc367ba",
".git/objects/f6/e6c75d6f1151eeb165a90f04b4d99effa41e83": "95ea83d65d44e4c524c6d51286406ac8",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/e7/53188f62ae3e33df4f68be19cc29664854c50d": "cb20ddf4ed756239fb1a451f03a4027b",
".git/objects/f8/c5304276d149ca36d0e416e9f0cac9daccf725": "7eaf15cee7ee332a16b8e13dabc8fda9",
".git/objects/e0/1a97a153679ac833e8419193c974103a6969c1": "3734ada6ffe565590480140b279b0af6",
".git/objects/e0/fd79d814d268d3d4e87236a84f6682431d137e": "575c02b515f9b2c313ca7686e9e7bbf0",
".git/objects/83/1d95be271f19265b86b61b4213d9b460ac3edd": "9091d1068aeef573c6228918079d52f7",
".git/objects/77/4b08fae0ac273d9ffc2426c194aa0187667fd7": "d466948850f9484f3f6b401995a2449b",
".git/objects/4a/edbc85aa51dbe406e3111afe277d4f32aff21e": "6cb7f9fd3172d87c47025cc47196dde2",
".git/objects/8c/301508fa56559da5862ae7051b2190b56e279d": "1c9ab49594a308a8e74ebc427da2b4fe",
".git/objects/8c/f01e8cda393a256d4863f29bd305e489679027": "d4ef94c2ebedfbd149674c7834cd688c",
".git/objects/85/63aed2175379d2e75ec05ec0373a302730b6ad": "997f96db42b2dde7c208b10d023a5a8e",
".git/objects/1d/cb900ac42e22522ca8806d4e243c36ec41daa6": "6a33fc2c65c96c13785560ff5ca97f9a",
".git/objects/1c/66b73387012379e030da27f67b9a67159f8a9a": "fc4e33da4d52a421754c9b548e3049f9",
".git/objects/49/ba688fb39b223024c9d7ed48e8c9f27dc86d39": "d458ff692e0c83d22ff63d77b3c3be1b",
".git/objects/49/17943e4388ce8cccc2a63de78f0e04ca69b655": "b3030bcc4bd85244cb3c213453848250",
".git/objects/14/ab4ca0478fa0516073fd324eac75e768b12a61": "09f32a70f595d059d7a8a70e7deda4ef",
".git/objects/22/efdb5f37ef3af1eea8715f10c5786131906722": "73d19f58f0a2dd0d4608c4630e51c68c",
".git/HEAD": "5ab7a4355e4c959b0c5c008f202f51ec",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "9039a6c6a11a4a965928af24a79fa982",
".git/logs/refs/heads/gh-pages": "9039a6c6a11a4a965928af24a79fa982",
".git/logs/refs/remotes/origin/gh-pages": "ec75bb34e92045ce2eadc71fa8fc4bb0",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/gh-pages": "a5463887589304952c3e8383e799975c",
".git/refs/remotes/origin/gh-pages": "a5463887589304952c3e8383e799975c",
".git/index": "5c018b7f046a7973aec99c933ae69c55",
".git/COMMIT_EDITMSG": "f2c7294bce1a8b400f323f1193882ebc",
"assets/products/img_L_46.JPG": "08118a51356c12f913bfc4008e029fbe",
"assets/products/img_M_12.jpg": "918241280152d7a3cc1643f19d513763",
"assets/products/img_M_13.jpg": "06b2427f78dada059309da04f1011e34",
"assets/products/img_M_39.jpg": "b52d352336a8db226bf7cb31cb80a760",
"assets/products/img_M_11.jpg": "d8cc4c93e3f89f8570db024b6748c287",
"assets/products/img_M_10.jpg": "7bc9d362a338dd3be4dc123126cfeecc",
"assets/products/img_M_38.jpg": "b33bc5bb7c8c8cedfbd795b59aed66a7",
"assets/products/img_L_44.jpg": "e1744a5fce7587cfe7760f573af7ead3",
"assets/products/img_M_14.jpg": "e882fcbc355a55c6200c4728409ec1b3",
"assets/products/img_M_28.jpg": "5f49f1ee408f6fee89dc059820b3c089",
"assets/products/img_M_29.jpg": "e63a30fb5696f68ca69afa9735a695ed",
"assets/products/img_L_43.jpg": "92672aed689b9569757eeed448445520",
"assets/products/img_M_17.jpg": "82a4b149df0df9c99f489f24245e888b",
"assets/products/img_M_16.jpg": "ef03877485ba7bace34c62ea3c96132c",
"assets/products/img_L_31.jpg": "d2b6fc6780021f89384173092c6aa41a",
"assets/products/img_M_9.jpg": "9c3b867d1cfb315bb51fd11426f69fe2",
"assets/products/img_M_8.jpg": "ce0b7dca607eaeff9e5ccd5b586f73f5",
"assets/products/img_L_18.jpg": "fb0a88b1bde8ca258f4bb7758dbad853",
"assets/products/img_L_30.jpg": "7ae7bf96cce1a1d09f45386beb1a0dea",
"assets/products/img_L_24.jpg": "03640b5d41f1d53afd0234a9ac07e486",
"assets/products/img_L_33.jpg": "066d8c4aaf6e28d2887a7f390edb543a",
"assets/products/img_L_21.jpg": "3a9b9ea47969f3896e391476a6dd1243",
"assets/products/img_M_50.jpg": "45a92fbc591adae78fa998431e9bb9a4",
"assets/products/img_M_45.JPG": "662b6aca260c0eb713813cfa64e47559",
"assets/products/img_M_51.jpg": "a497042cea8709b25eea7416b9b08658",
"assets/products/img_M_1.jpg": "3ccdf2dca69f32eb018dd6a0669198c7",
"assets/products/img_M_47.JPG": "f887f85a40803b6827f2c890e8bf2b20",
"assets/products/img_M_53.jpg": "72b5497fe27722443f0978095048458b",
"assets/products/img_M_52.jpg": "41d891c9767f4b3025bdc6a5e63e90dc",
"assets/products/img_M_6.jpg": "cba4f2ad85fdd6a928408e2cad788e5b",
"assets/products/img_M_42.jpg": "8312c13869b885842d651c5bd1642115",
"assets/products/img_M_7.jpg": "dc627f6a409372e43dd58f81063cb8e0",
"assets/products/img_L_15.jpg": "b1056047c97328ec1942a982360b6321",
"assets/products/img_M_5.jpg": "a6b4d9da4a621bed82798b2a6081e171",
"assets/products/img_M_41.jpg": "1b66370f1f27f14c3b130754a1f4b1e8",
"assets/products/img_M_40.jpg": "7bb696f7fbc54c9e8e0b7903ae57773d",
"assets/products/img_M_54.jpg": "53239956f1a50ff9300ad73e32bc5df3",
"assets/products/img_M_27.jpg": "f8efc03d1a65c4cd2c4b3bf814833fce",
"assets/products/img_M_26.jpg": "ad09275057ead0f01ae2a4d522f5edf8",
"assets/products/img_M_32.jpg": "0bc291e18945544c73e45906351eb451",
"assets/products/img_M_25.jpg": "78f678f42a701ea39d954f540655ed4b",
"assets/products/img_M_19.jpg": "9aba8e756917b3a7d37cf8d06038e1f3",
"assets/products/img_L_49.jpg": "92b73ea2ca26ff07b39bc220a5e6bdab",
"assets/products/img_M_35.jpg": "4717a9cff5990cbced51a08151cb374d",
"assets/products/img_M_34.jpg": "e4ccc0b1bf651460366491daf0eac8d7",
"assets/products/img_M_20.jpg": "fbbc77905d1411f74d0f17a21cedf55a",
"assets/products/img_L_48.JPG": "75b89bdf290c13f6a1366ec106b8f9d2",
"assets/products/img_M_36.jpg": "e9d521f526b6d78f618226068b49a485",
"assets/products/img_M_22.jpg": "523bed94a0a78a0787957d8c1cc40f6c",
"assets/products/img_M_23.jpg": "478eaad80d282341fd9be48fc15adeb9",
"assets/products/img_M_37.jpg": "b90cd36168e4cd86b764809d1d2da2ae",
"assets/NOTICES": "2361b7eaaad150bcb1c533b491025c6f",
"assets/FontManifest.json": "bd804aea2c9fe83c9e00206e38ed28a7",
"assets/AssetManifest.bin.json": "5ec3d014549ca026060fd6280a3a0540",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"assets/AssetManifest.bin": "d00d71a8f200b89d635d2234c52b4163",
"assets/fonts/MaterialIcons-Regular.otf": "341f68a96dd9d0ce4815596e86fc3443",
"assets/assets/products/img_L_46.JPG": "08118a51356c12f913bfc4008e029fbe",
"assets/assets/products/img_M_12.jpg": "918241280152d7a3cc1643f19d513763",
"assets/assets/products/img_M_13.jpg": "06b2427f78dada059309da04f1011e34",
"assets/assets/products/img_M_39.jpg": "b52d352336a8db226bf7cb31cb80a760",
"assets/assets/products/img_M_11.jpg": "d8cc4c93e3f89f8570db024b6748c287",
"assets/assets/products/img_M_10.jpg": "7bc9d362a338dd3be4dc123126cfeecc",
"assets/assets/products/img_M_38.jpg": "b33bc5bb7c8c8cedfbd795b59aed66a7",
"assets/assets/products/img_L_44.jpg": "e1744a5fce7587cfe7760f573af7ead3",
"assets/assets/products/img_M_14.jpg": "e882fcbc355a55c6200c4728409ec1b3",
"assets/assets/products/img_M_28.jpg": "5f49f1ee408f6fee89dc059820b3c089",
"assets/assets/products/img_M_29.jpg": "e63a30fb5696f68ca69afa9735a695ed",
"assets/assets/products/img_L_43.jpg": "92672aed689b9569757eeed448445520",
"assets/assets/products/img_M_17.jpg": "82a4b149df0df9c99f489f24245e888b",
"assets/assets/products/img_M_16.jpg": "ef03877485ba7bace34c62ea3c96132c",
"assets/assets/products/img_L_31.jpg": "d2b6fc6780021f89384173092c6aa41a",
"assets/assets/products/img_M_9.jpg": "9c3b867d1cfb315bb51fd11426f69fe2",
"assets/assets/products/img_M_8.jpg": "ce0b7dca607eaeff9e5ccd5b586f73f5",
"assets/assets/products/img_L_18.jpg": "fb0a88b1bde8ca258f4bb7758dbad853",
"assets/assets/products/img_L_30.jpg": "7ae7bf96cce1a1d09f45386beb1a0dea",
"assets/assets/products/img_L_24.jpg": "03640b5d41f1d53afd0234a9ac07e486",
"assets/assets/products/img_L_33.jpg": "066d8c4aaf6e28d2887a7f390edb543a",
"assets/assets/products/img_L_21.jpg": "3a9b9ea47969f3896e391476a6dd1243",
"assets/assets/products/img_M_50.jpg": "45a92fbc591adae78fa998431e9bb9a4",
"assets/assets/products/img_M_45.JPG": "662b6aca260c0eb713813cfa64e47559",
"assets/assets/products/img_M_51.jpg": "a497042cea8709b25eea7416b9b08658",
"assets/assets/products/img_M_1.jpg": "3ccdf2dca69f32eb018dd6a0669198c7",
"assets/assets/products/img_M_47.JPG": "f887f85a40803b6827f2c890e8bf2b20",
"assets/assets/products/img_M_53.jpg": "72b5497fe27722443f0978095048458b",
"assets/assets/products/img_M_52.jpg": "41d891c9767f4b3025bdc6a5e63e90dc",
"assets/assets/products/img_M_6.jpg": "cba4f2ad85fdd6a928408e2cad788e5b",
"assets/assets/products/img_M_42.jpg": "8312c13869b885842d651c5bd1642115",
"assets/assets/products/img_M_7.jpg": "dc627f6a409372e43dd58f81063cb8e0",
"assets/assets/products/img_L_15.jpg": "b1056047c97328ec1942a982360b6321",
"assets/assets/products/img_M_5.jpg": "a6b4d9da4a621bed82798b2a6081e171",
"assets/assets/products/img_M_41.jpg": "1b66370f1f27f14c3b130754a1f4b1e8",
"assets/assets/products/img_M_40.jpg": "7bb696f7fbc54c9e8e0b7903ae57773d",
"assets/assets/products/img_M_54.jpg": "53239956f1a50ff9300ad73e32bc5df3",
"assets/assets/products/img_M_27.jpg": "f8efc03d1a65c4cd2c4b3bf814833fce",
"assets/assets/products/img_M_26.jpg": "ad09275057ead0f01ae2a4d522f5edf8",
"assets/assets/products/img_M_32.jpg": "0bc291e18945544c73e45906351eb451",
"assets/assets/products/img_M_25.jpg": "78f678f42a701ea39d954f540655ed4b",
"assets/assets/products/img_M_19.jpg": "9aba8e756917b3a7d37cf8d06038e1f3",
"assets/assets/products/img_L_49.jpg": "92b73ea2ca26ff07b39bc220a5e6bdab",
"assets/assets/products/img_M_35.jpg": "4717a9cff5990cbced51a08151cb374d",
"assets/assets/products/img_M_34.jpg": "e4ccc0b1bf651460366491daf0eac8d7",
"assets/assets/products/img_M_20.jpg": "fbbc77905d1411f74d0f17a21cedf55a",
"assets/assets/products/img_L_48.JPG": "75b89bdf290c13f6a1366ec106b8f9d2",
"assets/assets/products/img_M_36.jpg": "e9d521f526b6d78f618226068b49a485",
"assets/assets/products/img_M_22.jpg": "523bed94a0a78a0787957d8c1cc40f6c",
"assets/assets/products/img_M_23.jpg": "478eaad80d282341fd9be48fc15adeb9",
"assets/assets/products/img_M_37.jpg": "b90cd36168e4cd86b764809d1d2da2ae",
"assets/assets/images/telegram.png": "0788bd23d86360c661b8fa9a91d99550",
"assets/assets/images/cover_page.jpg": "3b72163db22cacb48ca8c66d53587116",
"assets/assets/images/tiktok.png": "c28071fcea9742f039d0ae44468caf22",
"assets/assets/images/logo.jpg": "931416d177e2613a2888feaa8f07ac70",
"assets/assets/images/facebook.png": "7c8d991e8a2be6abd4986c3e00c35aec",
"assets/assets/fonts/NotoSansKhmer.ttf": "0d1259cabba8c1589517f776626b8e52",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
".idea/vcs.xml": "8c9c0403ab0f6457841c605f08a3340c",
".idea/workspace.xml": "33e864d955e6f478833131a1624e5876",
".idea/modules.xml": "1eb3b065c55895e347308e50cd717dee",
".idea/web.iml": "52db5efd0fe9f576a1302b8c4b5eac6c",
".idea/misc.xml": "dd27079528ce472da59d95f71336b205",
".idea/caches/deviceStreaming.xml": "71e046e360ac4188c88d661ac9fb8f64"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
