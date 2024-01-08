import miller from "./miller.png"
const allproducts = [
  {
    id: 1,
    image:
      "https://www.ulcdn.net/images/products/808519/product/FNBDNS11MH35069_LP.png?1683921491",
    pname: "Beirut Solid Wood Queen Size Bed In Mahogany Finish",
    pdts: "By urban ladder",
    price: 18300,
    mrp: 20299,
    category: "bed",
    material: "wood",
    prange: "10k 20k",
    image2:
      "https://www.ulcdn.net/images/products/547317/slide/666x363/FNBDNS11MH35069_1.jpg?1652358935",
    image3:
      "https://www.ulcdn.net/images/products/547321/slide/666x363/FNBDNS11MH35069_2.jpg?1652358938",
    image4:
      "https://www.ulcdn.net/images/products/547325/slide/666x363/FNBDNS11MH35069_3.jpg?1652358941",
    image5:
      "https://www.ulcdn.net/images/products/547329/slide/666x363/FNBDNS11MH35069_4.jpg?1652358945",
    image6:
      "https://www.ulcdn.net/images/products/547335/slide/666x363/FNBDNS11MH35069_6.jpg?1652358950"
  },
  {
    id: 2,
    image:
      "https://www.ulcdn.net/images/products/836963/product/Florence_ArmchairFinish-Mahogany_Color-Xavier_ZigZag_Beige_LP.png?1690539153",
    pname: "Florence Accent Chair In Carmine Cassia Colour",
    pdts: "By febonic",
    image2:
      "https://www.ulcdn.net/images/products/547090/slide/666x363/Florence_ArmchairFinish-Mahogany_Color-Xavier_ZigZag_Beige_1.jpg?1652347160",

    price: 9800,
    image3:"https://www.ulcdn.net/images/products/547091/slide/666x363/Florence_ArmchairFinish-Mahogany_Color-Xavier_ZigZag_Beige_1a.jpg?1652347241",
    mrp: 10299,
    category: "lights",
    material: "wood",
    prange: "5k 10k",
    image6:"https://www.ulcdn.net/images/products/547095/slide/666x363/Florence_ArmchairFinish-Mahogany_Color-Xavier_ZigZag_Beige_6.png?1652347541",
    image5:"https://www.ulcdn.net/images/products/547093/slide/666x363/Florence_ArmchairFinish-Mahogany_Color-Xavier_ZigZag_Beige_3.jpg?1652347371",
    image4:"https://www.ulcdn.net/images/products/547094/slide/666x363/Florence_ArmchairFinish-Mahogany_Color-Xavier_ZigZag_Beige_4.jpg?1652347426"
  },
  {
    id: 3,
    image:
      "https://www.ulcdn.net/images/products/809549/product/Taarkashi_Upholstered_Bed_American_Walnut_Seal_Grey_LP.png?1683924354",
    pname: "Taarkashi Solid Wood King Size Non Storage Bed",
    pdts: "By urban ladder",
    price: 26600,
    image3:"https://www.ulcdn.net/images/products/720808/slide/666x363/Taarkashi_Upholstered_Bed_American_Walnut_Seal_Grey_2.jpg?1674464529",
    image4:"https://www.ulcdn.net/images/products/720809/slide/666x363/Taarkashi_Upholstered_Bed_American_Walnut_Seal_Grey_3.jpg?1674464546",
    image5:"https://www.ulcdn.net/images/products/720810/slide/666x363/Taarkashi_Upholstered_Bed_American_Walnut_Seal_Grey_4.jpg?1674464559",
    image6:"https://www.ulcdn.net/images/products/720813/slide/666x363/Taarkashi_Upholstered_Bed_American_Walnut_Seal_Grey_7.jpg?1674464607",
    image2:
      "https://www.ulcdn.net/images/products/720807/slide/666x363/Taarkashi_Upholstered_Bed_American_Walnut_Seal_Grey_1.jpg?1674464515",

    category: "bed",
    mrp: 28299,
    material: "wood",
    prange: "10k 20k"
  },
  {
    id: 4,
    image:
      "https://www.ulcdn.net/images/products/823413/product/FNCOMB11TK31733_LP.jpg?1686132848",
    pname: "Faroe Engineered Wood Queen Size Drawer Storage",
    pdts: "By febonic",
    price: 31220,
    category: "bed",
    image3:"https://www.ulcdn.net/images/products/823415/slide/666x363/FNCOMB11TK31733_2.jpg?1686132877",
    image4:"https://www.ulcdn.net/images/products/823416/slide/666x363/FNCOMB11TK31733_3.jpg?1686132891",
    image5:"https://www.ulcdn.net/images/products/823418/slide/666x363/FNCOMB11TK31733_5.jpg?1686132922",
    image6:"https://www.ulcdn.net/images/products/823420/slide/666x363/FNCOMB11TK31733_7.jpg?1686132982",
    image2:
      "https://www.ulcdn.net/images/products/823414/slide/666x363/FNCOMB11TK31733_1.jpg?1686132862",

    mrp: 35299,
    material: "wood",
    prange: "10k 20k"

  },
  
  {
    id: 5,
    image:
      "https://www.ulcdn.net/images/products/808141/original/Aer_Cocoon_Queen_00_LP.png?1683919677",
    pname: "Amaze Eco High Density Foam Queen Size Mattress",
    pdts: "By febonic",
    price: 6400,
    category: "bed",
    image3:"https://www.ulcdn.net/images/products/265632/slide/666x363/Aer_Latex_Mattress_with_Memory_Foam_37.png?1551769878",
    image4:"https://www.ulcdn.net/images/products/120677/slide/666x363/Aer_Cocoon_Queen_07_8.jpg?1477426762",
    image5:"https://www.ulcdn.net/images/products/189503/slide/666x363/Aer_Latex_Mattress_with_Memory_Foam_02.jpg?1525452925",
    image6:"https://www.ulcdn.net/images/products/360448/slide/666x363/Aer_Latex_Mattress_With_Memory_Foam_Queen_8.png?1627280307",
    mrp: 8299,
    material: "foam",
    prange: "5k 10k",
    image2:
      "https://www.ulcdn.net/images/products/120675/slide/666x363/Aer_Cocoon_Queen_05_6.jpg?1477426760"
  },
  {
    id: 6,
    image:
      "https://www.ulcdn.net/images/products/529058/product/Cozy_coir_LP.jpg?1651222894",
    pname: "Aer Latex Mattress With Memory Foam",
    pdts: "By vintage",
    price: 4500,
    category: "bed",
    material: "foam",
    image3:"https://www.ulcdn.net/images/products/529166/slide/666x363/Cozy_coir_2.jpg?1651222962",
    image4:"https://www.ulcdn.net/images/products/529220/slide/666x363/Cozy_coir_3.jpg?1651222997",
    image5:"https://www.ulcdn.net/images/products/529274/slide/666x363/Cozy_coir_6.jpg?1651223026",
    mrp: 6299,
    prange: "1k 5k",
    image2:
      "https://www.ulcdn.net/images/products/529112/slide/666x363/Cozy_coir_1.jpg?1651222925"
  },
  {
    id: 7,
    image:
      "https://www.ulcdn.net/images/products/338715/product/Madeleine_Floor_Lamp_Walnut_LP.JPG?1621323150",
    pname: "Shaela Natural Linen Shade Floor Lamp",
    pdts: "By urban ladder",
    price: 2500,
    category: "living",
    image3:"https://www.ulcdn.net/images/products/338700/slide/666x363/Giselle_Floor_Lamp_Natural_3.JPG?1621322699",
    image4:"https://www.ulcdn.net/images/products/338708/slide/666x363/Giselle_Floor_Lamp_Natural_4.JPG?1621322705",
    image5:"https://www.ulcdn.net/images/products/338714/slide/666x363/Giselle_Floor_Lamp_Natural_5.JPG?1621322709",
    material: "fibre",
    image6:"https://www.ulcdn.net/images/products/338692/slide/666x363/Giselle_Floor_Lamp_Natural_2.JPG?1621322695",
    image2:
      "https://www.ulcdn.net/images/products/338725/slide/666x363/Margot_Floor_Lamp_Walnut_1.JPG?1621323156",

    mrp: 4299,
    prange: "1k 5k"
  },
  {
    id: 8,
    image:
      "https://www.ulcdn.net/images/products/305371/product/Nicolo_Carpet_LP.jpg?1606204207",
    pname: "Purple Geometric Hand Tufted Wool 3 X 5 Feet Carpet",
    pdts: "By febonic",
    price: 3300,
    category: "living",
    material: "polyster",
    image3:"https://www.ulcdn.net/images/products/305375/slide/666x363/Nicolo_Carpet_2.jpg?1606204208",
    image4:"https://www.ulcdn.net/images/products/305378/slide/666x363/Nicolo_Carpet_3.jpg?1606204209",
    image5:"https://www.ulcdn.net/images/products/305380/slide/666x363/Nicolo_Carpet_4.jpg?1606204209",
    image6:"https://www.ulcdn.net/images/products/305382/slide/666x363/Nicolo_Carpet_5.jpg?1606204210",
    image2:
      "https://www.ulcdn.net/images/products/305373/slide/666x363/Nicolo_Carpet_1.jpg?1606204208",

    mrp: 5299,
    prange: "1k 5k"
  },
  {
    id: 9,
    image:
      "https://www.ulcdn.net/images/products/809541/product/SimplyWud_Basic_Foam_mattress_King_LP.png?1683924231",
    pname: "SimplyWud Classic Foam Mattress",
    pdts: "By febonic",
    price: 5430,
    category: "bed",
    material: "foam",
    mrp: 7299,
    image2:
      "https://www.ulcdn.net/images/products/753408/slide/666x363/SimplyWud_Basic_Foam_mattress_King_1.jpg?1678086552",
      image3:"https://www.ulcdn.net/images/products/753415/slide/666x363/SimplyWud_Basic_Foam_mattress_King_3.jpg?1678086557",
      image4:"https://www.ulcdn.net/images/products/753419/slide/666x363/SimplyWud_Basic_Foam_mattress_King_4.jpg?1678086560",
      image5:"https://www.ulcdn.net/images/products/753423/slide/666x363/SimplyWud_Basic_Foam_mattress_King_6.png?1678086564",
      image6:"https://www.ulcdn.net/images/products/826738/slide/666x363/foam.png?1686721054",

    prange: "5k 10k"
  },
  {
    id: 10,
    image:
      "https://www.ulcdn.net/images/products/655648/product/VDATAF81BL62029_LP.jpg?1660129337",
    pname: "Blue Polyester Artificial Flower False",
    pdts: "By febonic",
    price: 1060,
    category: "living",
    material: "fibre",
    image2:
      "https://www.ulcdn.net/images/products/655667/slide/666x363/VDATAF81BL62029_1.jpg?1660129346",
      image3:"https://www.ulcdn.net/images/products/655718/slide/666x363/VDATAF81BL62029_3.jpg?1660129362",
      image4:"https://www.ulcdn.net/images/products/655738/slide/666x363/VDATAF81BL62029_4.jpg?1660129369",
      image5:"https://www.ulcdn.net/images/products/655762/slide/666x363/VDATAF81BL62029_6.jpg?1660129379",
      image6:"https://www.ulcdn.net/images/products/655691/slide/666x363/VDATAF81BL62029_2.jpg?1660129355",

    prange: "1k 5k",
    mrp: 1299
  },
  {
    id: 11,
    image:
      "https://www.ulcdn.net/images/products/303373/product/Meirit_Wall_Light_Single_LP.jpg?1604335666",
    pname: "Meirit Wall Light",
    pdts: "By vintage",
    price: 3450,
    category: "living",
    image2:
      "https://www.ulcdn.net/images/products/303374/slide/666x363/Meirit_Wall_Light_Single_1.jpg?1604335667",

    material: "metal",
    image3:"https://www.ulcdn.net/images/products/303375/slide/666x363/Meirit_Wall_Light_Single_2.jpg?1604335668",
    image4:"https://www.ulcdn.net/images/products/303378/slide/666x363/Meirit_Wall_Light_Single_5.jpg?1604335670",
    image5:"https://www.ulcdn.net/images/products/303380/slide/666x363/Meirit_Wall_Light_Single_7.jpg?1604335671",
    image6:"https://www.ulcdn.net/images/products/370688/slide/666x363/Meirit_Wall_Light_Single_8.jpg?1628524152",
    prange: "1k 5k",
    mrp: 3599
  },
  {
    id: 12,
    image:
      "https://www.ulcdn.net/images/products/380726/product/Strella_Wall_Art_Set_of_3_LP.jpg?1629462275",
    pname: "Multi Coloured Canvas Wall Art",
    pdts: "By vintage",
    price: 2400,
    category: "living",
    image3:"https://www.ulcdn.net/images/products/380757/slide/666x363/Strella_Wall_Art_Set_of_3_2.jpg?1629462293",
    image4:"https://www.ulcdn.net/images/products/380772/slide/666x363/Strella_Wall_Art_Set_of_3_3.jpg?1629462301",
    mrp:3998,
    image5:"https://www.ulcdn.net/images/products/380787/slide/666x363/Strella_Wall_Art_Set_of_3_6.jpg?1629462316",
    image2:
      "https://www.ulcdn.net/images/products/380742/slide/666x363/Strella_Wall_Art_Set_of_3_1.jpg?1629462284",

    material: "fibre",
    prange: "1k 5k"
  },
  {
    id: 13,
    image:
      "https://www.ulcdn.net/images/products/820352/product/VASPVS61BK77006_LP.jpg?1685699347",
    pname: "Black metal planter",
    pdts: "By urban ladder",
    price: 2100,
    category: "lights",
    material: "fibre",

    prange: "1k 5k",
    image2:
      "https://www.ulcdn.net/images/products/820369/slide/666x363/VASPVS61BK77006_1.jpg?1685699352",
      image3:"https://www.ulcdn.net/images/products/820430/slide/666x363/VASPVS61BK77006_5.jpg?1685699378",
      image4:"https://www.ulcdn.net/images/products/820454/slide/666x363/VASPVS61BK77006_6.jpg?1685699386",
      image5:"https://www.ulcdn.net/images/products/835413/slide/666x363/VASPVS61BK77006_12.jpg?1689769833",
      image6:"https://www.ulcdn.net/images/products/835411/slide/666x363/VASPVS61BK77006_11.jpg?1689769832",


    mrp: 3050
  },
  {
    id: 14,
    image:
      "https://www.ulcdn.net/images/products/808326/product/Carven_lounge_chair_Maroon_replace_LP.png?1683920838",
    pname: "Florence Accent Chair In Carmine Cassia Colour",
    pdts: "By vintage",
    price: 16000,
    category: "lights",
    image2:
      "https://www.ulcdn.net/images/products/216194/slide/666x363/Carven_Lounge_Chair_Maroon_1.jpg?1568359281",
      image3:"https://www.ulcdn.net/images/products/216195/slide/666x363/Carven_Lounge_Chair_Maroon_2.jpg?1568359281",
      image4:"https://www.ulcdn.net/images/products/216196/slide/666x363/Carven_Lounge_Chair_Maroon_3.jpg?1568359282",
      image5:"https://www.ulcdn.net/images/products/216197/slide/666x363/Carven_Lounge_Chair_Maroon_5.jpg?1568359282",
      image6:"https://www.ulcdn.net/images/products/216199/slide/666x363/Carven_Lounge_Chair_Maroon_6.jpg?1568359284",

    prange: "10k 20k",
    material: "wood",
    mrp: 17299
  },
  {
    id: 15,
    image:
      "https://www.ulcdn.net/images/products/808820/product/FNTBCF33CO15133_LP.png?1685012453",
    pname: "Lorelai Rectangular Engineered Wood Coffee Table",
    pdts: "By vintage",
    price: 5440,
    category: "living",
    image2:
      "https://www.ulcdn.net/images/products/811860/slide/666x363/au.jpg?1684324533",
      image3:"https://www.ulcdn.net/images/products/710033/slide/666x363/b.jpg?1670566501",
      image4:"https://www.ulcdn.net/images/products/710034/slide/666x363/c.jpg?1670566515",
      image5:"https://www.ulcdn.net/images/products/710035/slide/666x363/d.jpg?1670566532",
      image6:"https://www.ulcdn.net/images/products/710035/slide/666x363/d.jpg?1670566532",

    prange: "1k 5k",
    material: "wood",
    mrp: 7299
  },
  {
    id: 16,
    image:
      "https://www.ulcdn.net/images/products/809095/product/Hathwin_Outdoor_Chair_Colour_-_black_LP.png?1683922952",
    pname: "Hathwin Metal Outdoor Chair In Black Colour",
    pdts: "By urban ladder",
    price: 8460,
    category: "lights",
    image2:
      "https://www.ulcdn.net/images/products/633148/slide/666x363/Hathwin_Outdoor_Chair_Colour-black_1.jpg?1658817777",

    prange: "5k 10k",
    material: "metal",
    image3:"https://www.ulcdn.net/images/products/633158/slide/666x363/Hathwin_Outdoor_Chair_Colour-black_2.jpg?1658817781",
    image4:"https://www.ulcdn.net/images/products/633201/slide/666x363/Hathwin_Outdoor_Chair_Colour-black_3.jpg?1658817806",
    image5:"https://www.ulcdn.net/images/products/633215/slide/666x363/Hathwin_Outdoor_Chair_Colour-black_5.jpg?1658817816",
    image6:"https://www.ulcdn.net/images/products/633218/slide/666x363/Hathwin_Outdoor_Chair_Colour-black_9.png?1658817820",
    mrp: 10299
  },
  {
    id: 17,
    image:
      "https://www.ulcdn.net/images/products/837001/product/Ibiza_Patio_Chair_Set_of_two_Green_LP.jpg?1690539162",
    pname: "Ibiza Plastic Outdoor Chair In Green Colour",
    pdts: "By febonic",
    price: 7460,
    category: "lights",
    material: "metal",
    image3:"https://www.ulcdn.net/images/products/410654/slide/666x363/Ibiza_Patio_Chair_Set_of_two_Green_1.jpg?1634560147",
    image4:"https://www.ulcdn.net/images/products/410666/slide/666x363/Ibiza_Patio_Chair_Set_of_two_Green_3.jpg?1634560153",
    image5:"https://www.ulcdn.net/images/products/410670/slide/666x363/Ibiza_Patio_Chair_Set_of_two_Green_4.jpg?1634560155",
    image6:"https://www.ulcdn.net/images/products/410676/slide/666x363/Ibiza_Patio_Chair_Set_of_two_Green_5.png?1634560158",

    prange: "5k 10k",
    image2:
      "https://www.ulcdn.net/images/products/497800/slide/666x363/Ibiza_Patio_Chair_Set_of_two_Green_17.jpg?1649852661",

    mrp: 10550
  },
  {
    id: 18,
    image:
      "https://www.ulcdn.net/images/products/809651/product/Wellington_Shoe_Rack_Bench_transition_LP.png?1683924511",
    pname: "Wellington Shoe Rack In Mango Mahogany Finish",
    pdts: "By vintage",
    price: 10400,
    category: "lights",
    mrp:11398,
    image2:
      "https://www.ulcdn.net/images/products/352224/slide/666x363/Wellington_Shoe_Rack_Bench_transition_1.jpg?1625993907",
      image3:"https://www.ulcdn.net/images/products/352225/slide/666x363/Wellington_Shoe_Rack_Bench_transition_4.jpg?1625993943",
      image4:"https://www.ulcdn.net/images/products/352228/slide/666x363/Wellington_Shoe_Rack_Bench_transition_5.jpg?1625994087",
      image5:"https://www.ulcdn.net/images/products/352230/slide/666x363/Wellington_Shoe_Rack_Bench_transition_dim1.png?1626170327",
      image6:"https://www.ulcdn.net/images/products/352229/slide/666x363/Wellington_Shoe_Rack_Bench_transition_6.jpg?1625994154",

    material: "wood",
    prange: "5k 10k"
  },
  {
    id: 19,
    image:
      "https://www.ulcdn.net/images/products/816368/product/FNSGAV41WL30061_LP.png?1684836302",
 image2:
      "https://www.ulcdn.net/images/products/156873/slide/666x363/ewrdf.jpg?1507801465",
      image3:"https://www.ulcdn.net/images/products/155623/slide/666x363/Baltoro_TV_Unit_00.jpg?1506062005",
      image4:"https://www.ulcdn.net/images/products/155625/slide/666x363/Baltoro_TV_Unit_02.jpg?1506062009",
      image5:"https://www.ulcdn.net/images/products/155627/slide/666x363/Baltoro_TV_Unit_04.jpg?1506062012",
      image6:"https://www.ulcdn.net/images/products/360154/slide/666x363/Baltoro_TV_Unit.jpg?1627279849",
    
    pname: "Baltoro Engineering Wood Free Standing TV Unit",
    pdts: "By febonic",
    price: 12220,
    category: "living",
    mrp: 14299,
    material: "wood",
    prange: "10k 20k"

  },
  {
    id: 20,
    image:
      "https://www.ulcdn.net/images/products/809667/product/Wallace_Desk_Wenge_00_LP.png?1683924528",
      image2:
      "https://www.ulcdn.net/images/products/146342/slide/666x363/Wallace_Desk_Wenge_00.jpg?1492594403",
      image3:"https://www.ulcdn.net/images/products/146343/slide/666x363/Wallace_Desk_Wenge_01.jpg?1492594405",
      image4:"https://www.ulcdn.net/images/products/146345/slide/666x363/Wallace_Desk_Wenge_03.jpg?1492594408",
      image5:"https://www.ulcdn.net/images/products/146346/slide/666x363/Wallace_Desk_Wenge_04.jpg?1492594410",
      image6:"https://www.ulcdn.net/images/products/146348/slide/666x363/Wallace_Desk_Wenge_06.jpg?1492594413", 
    pname: "Wallace Engineered Wood Study Table In Wenge Finish",
    pdts: "By febonic",
    price: 8220,
    category: "living",
    mrp: 10299,
    material: "metal",
    prange: "10k 20k"

  },
  {
    id: 21,
    image:
      "https://www.ulcdn.net/images/products/809330/product/Miller_3_Door_Wardrobe_2_Drawer_Finish_Two_tone_merc_lp.png?1683923716",
    pname: "Zoey Engineered Wood 3 Door Wardrobe With Mirror",
    pdts: "By febonic",
    price: 14220,
    category: "bed",
    
  image2:
  "https://www.ulcdn.net/images/products/384207/slide/666x363/Miller_3_Door_Wardrobe_2_Drawer_Finish_Two_tone_merc-1.jpg?1630046270",
  image3:"https://www.ulcdn.net/images/products/381902/slide/666x363/Miller_3_Door_Wardrobe_2_Drawer_Finish_Two_tone_1.jpg?1629878242",
  image4:"https://www.ulcdn.net/images/products/381904/slide/666x363/Miller_3_Door_Wardrobe_2_Drawer_Finish_Two_tone_2.jpg?1629878295",
  image5:"https://www.ulcdn.net/images/products/486770/slide/666x363/Miller_3_Door_Wardrobe_2_Drawer_Finish_Two_tone_3.png?1648717119",
  image6:"https://www.ulcdn.net/images/products/486771/slide/666x363/Miller_3_Door_Wardrobe_2_Drawer_Finish_Two_tone_4.png?1648717183",


    mrp: 16299,
    material: "wood",
    prange: "5k 10k"
  }

 
  
 
];
export default allproducts;
