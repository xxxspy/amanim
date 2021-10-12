
const colors = {
	"jet" : ["rgb(0,0,127)", "rgb(0,0,132)", "rgb(0,0,136)", "rgb(0,0,141)", "rgb(0,0,145)", "rgb(0,0,150)", "rgb(0,0,154)", "rgb(0,0,159)", "rgb(0,0,163)", "rgb(0,0,168)", "rgb(0,0,172)", "rgb(0,0,177)", "rgb(0,0,182)", "rgb(0,0,186)", "rgb(0,0,191)", "rgb(0,0,195)", "rgb(0,0,200)", "rgb(0,0,204)", "rgb(0,0,209)", "rgb(0,0,213)", "rgb(0,0,218)", "rgb(0,0,222)", "rgb(0,0,227)", "rgb(0,0,232)", "rgb(0,0,236)", "rgb(0,0,241)", "rgb(0,0,245)", "rgb(0,0,250)", "rgb(0,0,254)", "rgb(0,0,255)", "rgb(0,0,255)", "rgb(0,0,255)", "rgb(0,0,255)", "rgb(0,4,255)", "rgb(0,8,255)", "rgb(0,12,255)", "rgb(0,16,255)", "rgb(0,20,255)", "rgb(0,24,255)", "rgb(0,28,255)", "rgb(0,32,255)", "rgb(0,36,255)", "rgb(0,40,255)", "rgb(0,44,255)", "rgb(0,48,255)", "rgb(0,52,255)", "rgb(0,56,255)", "rgb(0,60,255)", "rgb(0,64,255)", "rgb(0,68,255)", "rgb(0,72,255)", "rgb(0,76,255)", "rgb(0,80,255)", "rgb(0,84,255)", "rgb(0,88,255)", "rgb(0,92,255)", "rgb(0,96,255)", "rgb(0,100,255)", "rgb(0,104,255)", "rgb(0,108,255)", "rgb(0,112,255)", "rgb(0,116,255)", "rgb(0,120,255)", "rgb(0,124,255)", "rgb(0,128,255)", "rgb(0,132,255)", "rgb(0,136,255)", "rgb(0,140,255)", "rgb(0,144,255)", "rgb(0,148,255)", "rgb(0,152,255)", "rgb(0,156,255)", "rgb(0,160,255)", "rgb(0,164,255)", "rgb(0,168,255)", "rgb(0,172,255)", "rgb(0,176,255)", "rgb(0,180,255)", "rgb(0,184,255)", "rgb(0,188,255)", "rgb(0,192,255)", "rgb(0,196,255)", "rgb(0,200,255)", "rgb(0,204,255)", "rgb(0,208,255)", "rgb(0,212,255)", "rgb(0,216,255)", "rgb(0,220,254)", "rgb(0,224,250)", "rgb(0,228,247)", "rgb(2,232,244)", "rgb(5,236,241)", "rgb(8,240,237)", "rgb(12,244,234)", "rgb(15,248,231)", "rgb(18,252,228)", "rgb(21,255,225)", "rgb(25,255,221)", "rgb(28,255,218)", "rgb(31,255,215)", "rgb(34,255,212)", "rgb(37,255,208)", "rgb(41,255,205)", "rgb(44,255,202)", "rgb(47,255,199)", "rgb(50,255,195)", "rgb(54,255,192)", "rgb(57,255,189)", "rgb(60,255,186)", "rgb(63,255,183)", "rgb(66,255,179)", "rgb(70,255,176)", "rgb(73,255,173)", "rgb(76,255,170)", "rgb(79,255,166)", "rgb(83,255,163)", "rgb(86,255,160)", "rgb(89,255,157)", "rgb(92,255,154)", "rgb(95,255,150)", "rgb(99,255,147)", "rgb(102,255,144)", "rgb(105,255,141)", "rgb(108,255,137)", "rgb(112,255,134)", "rgb(115,255,131)", "rgb(118,255,128)", "rgb(121,255,125)", "rgb(125,255,121)", "rgb(128,255,118)", "rgb(131,255,115)", "rgb(134,255,112)", "rgb(137,255,108)", "rgb(141,255,105)", "rgb(144,255,102)", "rgb(147,255,99)", "rgb(150,255,95)", "rgb(154,255,92)", "rgb(157,255,89)", "rgb(160,255,86)", "rgb(163,255,83)", "rgb(166,255,79)", "rgb(170,255,76)", "rgb(173,255,73)", "rgb(176,255,70)", "rgb(179,255,66)", "rgb(183,255,63)", "rgb(186,255,60)", "rgb(189,255,57)", "rgb(192,255,54)", "rgb(195,255,50)", "rgb(199,255,47)", "rgb(202,255,44)", "rgb(205,255,41)", "rgb(208,255,37)", "rgb(212,255,34)", "rgb(215,255,31)", "rgb(218,255,28)", "rgb(221,255,25)", "rgb(225,255,21)", "rgb(228,255,18)", "rgb(231,255,15)", "rgb(234,255,12)", "rgb(237,255,8)", "rgb(241,252,5)", "rgb(244,248,2)", "rgb(247,244,0)", "rgb(250,240,0)", "rgb(254,237,0)", "rgb(255,233,0)", "rgb(255,229,0)", "rgb(255,226,0)", "rgb(255,222,0)", "rgb(255,218,0)", "rgb(255,215,0)", "rgb(255,211,0)", "rgb(255,207,0)", "rgb(255,203,0)", "rgb(255,200,0)", "rgb(255,196,0)", "rgb(255,192,0)", "rgb(255,189,0)", "rgb(255,185,0)", "rgb(255,181,0)", "rgb(255,177,0)", "rgb(255,174,0)", "rgb(255,170,0)", "rgb(255,166,0)", "rgb(255,163,0)", "rgb(255,159,0)", "rgb(255,155,0)", "rgb(255,152,0)", "rgb(255,148,0)", "rgb(255,144,0)", "rgb(255,140,0)", "rgb(255,137,0)", "rgb(255,133,0)", "rgb(255,129,0)", "rgb(255,126,0)", "rgb(255,122,0)", "rgb(255,118,0)", "rgb(255,115,0)", "rgb(255,111,0)", "rgb(255,107,0)", "rgb(255,103,0)", "rgb(255,100,0)", "rgb(255,96,0)", "rgb(255,92,0)", "rgb(255,89,0)", "rgb(255,85,0)", "rgb(255,81,0)", "rgb(255,77,0)", "rgb(255,74,0)", "rgb(255,70,0)", "rgb(255,66,0)", "rgb(255,63,0)", "rgb(255,59,0)", "rgb(255,55,0)", "rgb(255,52,0)", "rgb(255,48,0)", "rgb(255,44,0)", "rgb(255,40,0)", "rgb(255,37,0)", "rgb(255,33,0)", "rgb(255,29,0)", "rgb(255,26,0)", "rgb(255,22,0)", "rgb(254,18,0)", "rgb(250,15,0)", "rgb(245,11,0)", "rgb(241,7,0)", "rgb(236,3,0)", "rgb(232,0,0)", "rgb(227,0,0)", "rgb(222,0,0)", "rgb(218,0,0)", "rgb(213,0,0)", "rgb(209,0,0)", "rgb(204,0,0)", "rgb(200,0,0)", "rgb(195,0,0)", "rgb(191,0,0)", "rgb(186,0,0)", "rgb(182,0,0)", "rgb(177,0,0)", "rgb(172,0,0)", "rgb(168,0,0)", "rgb(163,0,0)", "rgb(159,0,0)", "rgb(154,0,0)", "rgb(150,0,0)", "rgb(145,0,0)", "rgb(141,0,0)", "rgb(136,0,0)", "rgb(132,0,0)", "rgb(127,0,0)"],
	"grey" : ["rgb(0,0,0)", "rgb(1,1,1)", "rgb(2,2,2)", "rgb(3,3,3)", "rgb(4,4,4)", "rgb(5,5,5)", "rgb(6,6,6)", "rgb(7,7,7)", "rgb(8,8,8)", "rgb(9,9,9)", "rgb(10,10,10)", "rgb(11,11,11)", "rgb(12,12,12)", "rgb(13,13,13)", "rgb(14,14,14)", "rgb(15,15,15)", "rgb(16,16,16)", "rgb(17,17,17)", "rgb(18,18,18)", "rgb(19,19,19)", "rgb(20,20,20)", "rgb(21,21,21)", "rgb(22,22,22)", "rgb(23,23,23)", "rgb(24,24,24)", "rgb(25,25,25)", "rgb(26,26,26)", "rgb(27,27,27)", "rgb(28,28,28)", "rgb(29,29,29)", "rgb(30,30,30)", "rgb(31,31,31)", "rgb(32,32,32)", "rgb(33,33,33)", "rgb(34,34,34)", "rgb(35,35,35)", "rgb(36,36,36)", "rgb(37,37,37)", "rgb(38,38,38)", "rgb(39,39,39)", "rgb(40,40,40)", "rgb(41,41,41)", "rgb(42,42,42)", "rgb(43,43,43)", "rgb(44,44,44)", "rgb(45,45,45)", "rgb(46,46,46)", "rgb(47,47,47)", "rgb(48,48,48)", "rgb(49,49,49)", "rgb(50,50,50)", "rgb(51,51,51)", "rgb(52,52,52)", "rgb(53,53,53)", "rgb(54,54,54)", "rgb(55,55,55)", "rgb(56,56,56)", "rgb(57,57,57)", "rgb(58,58,58)", "rgb(59,59,59)", "rgb(60,60,60)", "rgb(61,61,61)", "rgb(62,62,62)", "rgb(63,63,63)", "rgb(64,64,64)", "rgb(65,65,65)", "rgb(66,66,66)", "rgb(67,67,67)", "rgb(68,68,68)", "rgb(69,69,69)", "rgb(70,70,70)", "rgb(71,71,71)", "rgb(72,72,72)", "rgb(73,73,73)", "rgb(74,74,74)", "rgb(75,75,75)", "rgb(76,76,76)", "rgb(77,77,77)", "rgb(78,78,78)", "rgb(79,79,79)", "rgb(80,80,80)", "rgb(81,81,81)", "rgb(82,82,82)", "rgb(83,83,83)", "rgb(84,84,84)", "rgb(85,85,85)", "rgb(86,86,86)", "rgb(87,87,87)", "rgb(88,88,88)", "rgb(89,89,89)", "rgb(90,90,90)", "rgb(91,91,91)", "rgb(92,92,92)", "rgb(93,93,93)", "rgb(94,94,94)", "rgb(95,95,95)", "rgb(96,96,96)", "rgb(97,97,97)", "rgb(98,98,98)", "rgb(99,99,99)", "rgb(100,100,100)", "rgb(101,101,101)", "rgb(102,102,102)", "rgb(103,103,103)", "rgb(104,104,104)", "rgb(105,105,105)", "rgb(106,106,106)", "rgb(107,107,107)", "rgb(108,108,108)", "rgb(109,109,109)", "rgb(110,110,110)", "rgb(111,111,111)", "rgb(112,112,112)", "rgb(113,113,113)", "rgb(114,114,114)", "rgb(115,115,115)", "rgb(116,116,116)", "rgb(117,117,117)", "rgb(118,118,118)", "rgb(119,119,119)", "rgb(120,120,120)", "rgb(121,121,121)", "rgb(122,122,122)", "rgb(123,123,123)", "rgb(124,124,124)", "rgb(125,125,125)", "rgb(126,126,126)", "rgb(127,127,127)", "rgb(128,128,128)", "rgb(129,129,129)", "rgb(130,130,130)", "rgb(131,131,131)", "rgb(132,132,132)", "rgb(133,133,133)", "rgb(134,134,134)", "rgb(135,135,135)", "rgb(136,136,136)", "rgb(137,137,137)", "rgb(138,138,138)", "rgb(139,139,139)", "rgb(140,140,140)", "rgb(141,141,141)", "rgb(142,142,142)", "rgb(143,143,143)", "rgb(144,144,144)", "rgb(145,145,145)", "rgb(146,146,146)", "rgb(147,147,147)", "rgb(148,148,148)", "rgb(149,149,149)", "rgb(150,150,150)", "rgb(151,151,151)", "rgb(152,152,152)", "rgb(153,153,153)", "rgb(154,154,154)", "rgb(155,155,155)", "rgb(156,156,156)", "rgb(157,157,157)", "rgb(158,158,158)", "rgb(159,159,159)", "rgb(160,160,160)", "rgb(161,161,161)", "rgb(162,162,162)", "rgb(163,163,163)", "rgb(164,164,164)", "rgb(165,165,165)", "rgb(166,166,166)", "rgb(167,167,167)", "rgb(168,168,168)", "rgb(169,169,169)", "rgb(170,170,170)", "rgb(171,171,171)", "rgb(172,172,172)", "rgb(173,173,173)", "rgb(174,174,174)", "rgb(175,175,175)", "rgb(176,176,176)", "rgb(177,177,177)", "rgb(178,178,178)", "rgb(179,179,179)", "rgb(180,180,180)", "rgb(181,181,181)", "rgb(182,182,182)", "rgb(183,183,183)", "rgb(184,184,184)", "rgb(185,185,185)", "rgb(186,186,186)", "rgb(187,187,187)", "rgb(188,188,188)", "rgb(189,189,189)", "rgb(190,190,190)", "rgb(191,191,191)", "rgb(192,192,192)", "rgb(193,193,193)", "rgb(194,194,194)", "rgb(195,195,195)", "rgb(196,196,196)", "rgb(197,197,197)", "rgb(198,198,198)", "rgb(199,199,199)", "rgb(200,200,200)", "rgb(201,201,201)", "rgb(202,202,202)", "rgb(203,203,203)", "rgb(204,204,204)", "rgb(205,205,205)", "rgb(206,206,206)", "rgb(207,207,207)", "rgb(208,208,208)", "rgb(209,209,209)", "rgb(210,210,210)", "rgb(211,211,211)", "rgb(212,212,212)", "rgb(213,213,213)", "rgb(214,214,214)", "rgb(215,215,215)", "rgb(216,216,216)", "rgb(217,217,217)", "rgb(218,218,218)", "rgb(219,219,219)", "rgb(220,220,220)", "rgb(221,221,221)", "rgb(222,222,222)", "rgb(223,223,223)", "rgb(224,224,224)", "rgb(225,225,225)", "rgb(226,226,226)", "rgb(227,227,227)", "rgb(228,228,228)", "rgb(229,229,229)", "rgb(230,230,230)", "rgb(231,231,231)", "rgb(232,232,232)", "rgb(233,233,233)", "rgb(234,234,234)", "rgb(235,235,235)", "rgb(236,236,236)", "rgb(237,237,237)", "rgb(238,238,238)", "rgb(239,239,239)", "rgb(240,240,240)", "rgb(241,241,241)", "rgb(242,242,242)", "rgb(243,243,243)", "rgb(244,244,244)", "rgb(245,245,245)", "rgb(246,246,246)", "rgb(247,247,247)", "rgb(248,248,248)", "rgb(249,249,249)", "rgb(250,250,250)", "rgb(251,251,251)", "rgb(252,252,252)", "rgb(253,253,253)", "rgb(254,254,254)", "rgb(255,255,255)"],
	"terrain" : ["rgb(51,51,153)", "rgb(49,53,155)", "rgb(48,56,158)", "rgb(47,59,161)", "rgb(45,61,163)", "rgb(44,64,166)", "rgb(43,67,169)", "rgb(41,69,171)", "rgb(40,72,174)", "rgb(39,75,177)", "rgb(37,77,179)", "rgb(36,80,182)", "rgb(35,83,185)", "rgb(33,85,187)", "rgb(32,88,190)", "rgb(31,91,193)", "rgb(29,93,195)", "rgb(28,96,198)", "rgb(27,99,201)", "rgb(25,101,203)", "rgb(24,104,206)", "rgb(23,107,209)", "rgb(21,109,211)", "rgb(20,112,214)", "rgb(19,115,217)", "rgb(17,117,219)", "rgb(16,120,222)", "rgb(15,123,225)", "rgb(13,125,227)", "rgb(12,128,230)", "rgb(11,131,233)", "rgb(9,133,235)", "rgb(8,136,238)", "rgb(7,139,241)", "rgb(5,141,243)", "rgb(4,144,246)", "rgb(3,147,249)", "rgb(1,149,251)", "rgb(0,152,254)", "rgb(0,154,250)", "rgb(0,156,244)", "rgb(0,158,238)", "rgb(0,160,232)", "rgb(0,162,226)", "rgb(0,164,220)", "rgb(0,166,214)", "rgb(0,168,208)", "rgb(0,170,202)", "rgb(0,172,196)", "rgb(0,174,190)", "rgb(0,176,184)", "rgb(0,178,178)", "rgb(0,180,172)", "rgb(0,182,166)", "rgb(0,184,160)", "rgb(0,186,154)", "rgb(0,188,148)", "rgb(0,190,142)", "rgb(0,192,136)", "rgb(0,194,130)", "rgb(0,196,124)", "rgb(0,198,118)", "rgb(0,200,112)", "rgb(0,202,106)", "rgb(1,204,102)", "rgb(5,205,103)", "rgb(9,205,103)", "rgb(13,206,104)", "rgb(17,207,105)", "rgb(21,208,106)", "rgb(25,209,107)", "rgb(29,209,107)", "rgb(33,210,108)", "rgb(37,211,109)", "rgb(41,212,110)", "rgb(45,213,111)", "rgb(49,213,111)", "rgb(53,214,112)", "rgb(57,215,113)", "rgb(61,216,114)", "rgb(65,217,115)", "rgb(69,217,115)", "rgb(73,218,116)", "rgb(77,219,117)", "rgb(81,220,118)", "rgb(85,221,119)", "rgb(89,221,119)", "rgb(93,222,120)", "rgb(97,223,121)", "rgb(101,224,122)", "rgb(105,225,123)", "rgb(109,225,123)", "rgb(113,226,124)", "rgb(117,227,125)", "rgb(121,228,126)", "rgb(125,229,127)", "rgb(129,229,127)", "rgb(133,230,128)", "rgb(137,231,129)", "rgb(141,232,130)", "rgb(145,233,131)", "rgb(149,233,131)", "rgb(153,234,132)", "rgb(157,235,133)", "rgb(161,236,134)", "rgb(165,237,135)", "rgb(169,237,135)", "rgb(173,238,136)", "rgb(177,239,137)", "rgb(181,240,138)", "rgb(185,241,139)", "rgb(189,241,139)", "rgb(193,242,140)", "rgb(197,243,141)", "rgb(201,244,142)", "rgb(205,245,143)", "rgb(209,245,143)", "rgb(213,246,144)", "rgb(217,247,145)", "rgb(221,248,146)", "rgb(225,249,147)", "rgb(229,249,147)", "rgb(233,250,148)", "rgb(237,251,149)", "rgb(241,252,150)", "rgb(245,253,151)", "rgb(249,253,151)", "rgb(253,254,152)", "rgb(254,253,152)", "rgb(252,251,151)", "rgb(250,248,150)", "rgb(248,246,149)", "rgb(246,243,148)", "rgb(244,240,147)", "rgb(242,238,145)", "rgb(240,235,144)", "rgb(238,233,143)", "rgb(236,230,142)", "rgb(234,228,141)", "rgb(232,225,140)", "rgb(230,223,139)", "rgb(228,220,138)", "rgb(226,217,137)", "rgb(224,215,136)", "rgb(222,212,135)", "rgb(220,210,134)", "rgb(218,207,133)", "rgb(216,205,131)", "rgb(214,202,130)", "rgb(212,199,129)", "rgb(210,197,128)", "rgb(208,194,127)", "rgb(206,192,126)", "rgb(204,189,125)", "rgb(202,187,124)", "rgb(200,184,123)", "rgb(198,182,122)", "rgb(196,179,121)", "rgb(194,176,120)", "rgb(192,174,118)", "rgb(190,171,117)", "rgb(188,169,116)", "rgb(186,166,115)", "rgb(184,164,114)", "rgb(182,161,113)", "rgb(180,159,112)", "rgb(178,156,111)", "rgb(176,153,110)", "rgb(174,151,109)", "rgb(172,148,108)", "rgb(170,146,107)", "rgb(168,143,106)", "rgb(166,141,104)", "rgb(164,138,103)", "rgb(162,135,102)", "rgb(160,133,101)", "rgb(158,130,100)", "rgb(156,128,99)", "rgb(154,125,98)", "rgb(152,123,97)", "rgb(150,120,96)", "rgb(148,118,95)", "rgb(146,115,94)", "rgb(144,112,93)", "rgb(142,110,91)", "rgb(140,107,90)", "rgb(138,105,89)", "rgb(136,102,88)", "rgb(134,100,87)", "rgb(132,97,86)", "rgb(130,95,85)", "rgb(128,92,84)", "rgb(129,93,86)", "rgb(131,96,88)", "rgb(133,98,91)", "rgb(135,101,94)", "rgb(137,103,96)", "rgb(139,106,99)", "rgb(141,109,102)", "rgb(143,111,104)", "rgb(145,114,107)", "rgb(147,116,110)", "rgb(149,119,112)", "rgb(151,121,115)", "rgb(153,124,118)", "rgb(155,127,121)", "rgb(157,129,123)", "rgb(159,132,126)", "rgb(161,134,129)", "rgb(163,137,131)", "rgb(165,139,134)", "rgb(167,142,137)", "rgb(169,144,139)", "rgb(171,147,142)", "rgb(173,150,145)", "rgb(175,152,147)", "rgb(177,155,150)", "rgb(179,157,153)", "rgb(181,160,155)", "rgb(183,162,158)", "rgb(185,165,161)", "rgb(187,167,163)", "rgb(189,170,166)", "rgb(191,173,169)", "rgb(193,175,171)", "rgb(195,178,174)", "rgb(197,180,177)", "rgb(199,183,179)", "rgb(201,185,182)", "rgb(203,188,185)", "rgb(205,191,188)", "rgb(207,193,190)", "rgb(209,196,193)", "rgb(211,198,196)", "rgb(213,201,198)", "rgb(215,203,201)", "rgb(217,206,204)", "rgb(219,208,206)", "rgb(221,211,209)", "rgb(223,214,212)", "rgb(225,216,214)", "rgb(227,219,217)", "rgb(229,221,220)", "rgb(231,224,222)", "rgb(233,226,225)", "rgb(235,229,228)", "rgb(237,231,230)", "rgb(239,234,233)", "rgb(241,237,236)", "rgb(243,239,238)", "rgb(245,242,241)", "rgb(247,244,244)", "rgb(249,247,246)", "rgb(251,249,249)", "rgb(253,252,252)", "rgb(255,255,255)"],
	"cool" : ["rgb(0,255,255)", "rgb(1,254,255)", "rgb(2,253,255)", "rgb(3,252,255)", "rgb(4,251,255)", "rgb(5,250,255)", "rgb(6,249,255)", "rgb(7,248,255)", "rgb(8,247,255)", "rgb(9,246,255)", "rgb(10,245,255)", "rgb(11,244,255)", "rgb(12,243,255)", "rgb(13,242,255)", "rgb(14,241,255)", "rgb(15,240,255)", "rgb(16,239,255)", "rgb(17,238,255)", "rgb(18,237,255)", "rgb(19,236,255)", "rgb(20,235,255)", "rgb(21,234,255)", "rgb(22,233,255)", "rgb(23,232,255)", "rgb(24,231,255)", "rgb(25,230,255)", "rgb(26,229,255)", "rgb(27,228,255)", "rgb(28,227,255)", "rgb(29,226,255)", "rgb(30,225,255)", "rgb(31,224,255)", "rgb(32,223,255)", "rgb(33,222,255)", "rgb(34,221,255)", "rgb(35,220,255)", "rgb(36,219,255)", "rgb(37,218,255)", "rgb(38,217,255)", "rgb(39,216,255)", "rgb(40,215,255)", "rgb(41,214,255)", "rgb(42,213,255)", "rgb(43,212,255)", "rgb(44,211,255)", "rgb(45,210,255)", "rgb(46,209,255)", "rgb(47,208,255)", "rgb(48,207,255)", "rgb(49,206,255)", "rgb(50,205,255)", "rgb(51,204,255)", "rgb(52,203,255)", "rgb(53,202,255)", "rgb(54,201,255)", "rgb(55,200,255)", "rgb(56,199,255)", "rgb(57,198,255)", "rgb(58,197,255)", "rgb(59,196,255)", "rgb(60,195,255)", "rgb(61,194,255)", "rgb(62,193,255)", "rgb(63,192,255)", "rgb(64,191,255)", "rgb(65,190,255)", "rgb(66,189,255)", "rgb(67,188,255)", "rgb(68,187,255)", "rgb(69,186,255)", "rgb(70,185,255)", "rgb(71,184,255)", "rgb(72,183,255)", "rgb(73,182,255)", "rgb(74,181,255)", "rgb(75,180,255)", "rgb(76,179,255)", "rgb(77,178,255)", "rgb(78,177,255)", "rgb(79,176,255)", "rgb(80,175,255)", "rgb(81,174,255)", "rgb(82,173,255)", "rgb(83,172,255)", "rgb(84,171,255)", "rgb(85,170,255)", "rgb(86,169,255)", "rgb(87,168,255)", "rgb(88,167,255)", "rgb(89,166,255)", "rgb(90,165,255)", "rgb(91,164,255)", "rgb(92,163,255)", "rgb(93,162,255)", "rgb(94,161,255)", "rgb(95,160,255)", "rgb(96,159,255)", "rgb(97,158,255)", "rgb(98,157,255)", "rgb(99,156,255)", "rgb(100,155,255)", "rgb(101,154,255)", "rgb(102,153,255)", "rgb(103,152,255)", "rgb(104,151,255)", "rgb(105,150,255)", "rgb(106,149,255)", "rgb(107,148,255)", "rgb(108,147,255)", "rgb(109,146,255)", "rgb(110,145,255)", "rgb(111,144,255)", "rgb(112,143,255)", "rgb(113,142,255)", "rgb(114,141,255)", "rgb(115,140,255)", "rgb(116,139,255)", "rgb(117,138,255)", "rgb(118,137,255)", "rgb(119,136,255)", "rgb(120,135,255)", "rgb(121,134,255)", "rgb(122,133,255)", "rgb(123,132,255)", "rgb(124,131,255)", "rgb(125,130,255)", "rgb(126,129,255)", "rgb(127,128,255)", "rgb(128,127,255)", "rgb(129,126,255)", "rgb(130,125,255)", "rgb(131,124,255)", "rgb(132,123,255)", "rgb(133,122,255)", "rgb(134,121,255)", "rgb(135,120,255)", "rgb(136,119,255)", "rgb(137,118,255)", "rgb(138,117,255)", "rgb(139,116,255)", "rgb(140,115,255)", "rgb(141,114,255)", "rgb(142,113,255)", "rgb(143,112,255)", "rgb(144,111,255)", "rgb(145,110,255)", "rgb(146,109,255)", "rgb(147,108,255)", "rgb(148,107,255)", "rgb(149,106,255)", "rgb(150,105,255)", "rgb(151,104,255)", "rgb(152,103,255)", "rgb(153,102,255)", "rgb(154,101,255)", "rgb(155,100,255)", "rgb(156,99,255)", "rgb(157,98,255)", "rgb(158,97,255)", "rgb(159,96,255)", "rgb(160,95,255)", "rgb(161,94,255)", "rgb(162,93,255)", "rgb(163,92,255)", "rgb(164,91,255)", "rgb(165,90,255)", "rgb(166,89,255)", "rgb(167,88,255)", "rgb(168,87,255)", "rgb(169,86,255)", "rgb(170,85,255)", "rgb(171,84,255)", "rgb(172,83,255)", "rgb(173,82,255)", "rgb(174,81,255)", "rgb(175,80,255)", "rgb(176,79,255)", "rgb(177,78,255)", "rgb(178,77,255)", "rgb(179,76,255)", "rgb(180,75,255)", "rgb(181,74,255)", "rgb(182,73,255)", "rgb(183,72,255)", "rgb(184,71,255)", "rgb(185,70,255)", "rgb(186,69,255)", "rgb(187,68,255)", "rgb(188,67,255)", "rgb(189,66,255)", "rgb(190,65,255)", "rgb(191,64,255)", "rgb(192,63,255)", "rgb(193,62,255)", "rgb(194,61,255)", "rgb(195,60,255)", "rgb(196,59,255)", "rgb(197,58,255)", "rgb(198,57,255)", "rgb(199,56,255)", "rgb(200,55,255)", "rgb(201,54,255)", "rgb(202,53,255)", "rgb(203,52,255)", "rgb(204,51,255)", "rgb(205,50,255)", "rgb(206,49,255)", "rgb(207,48,255)", "rgb(208,47,255)", "rgb(209,46,255)", "rgb(210,45,255)", "rgb(211,44,255)", "rgb(212,43,255)", "rgb(213,42,255)", "rgb(214,41,255)", "rgb(215,40,255)", "rgb(216,39,255)", "rgb(217,38,255)", "rgb(218,37,255)", "rgb(219,36,255)", "rgb(220,35,255)", "rgb(221,34,255)", "rgb(222,33,255)", "rgb(223,32,255)", "rgb(224,31,255)", "rgb(225,30,255)", "rgb(226,29,255)", "rgb(227,28,255)", "rgb(228,27,255)", "rgb(229,26,255)", "rgb(230,25,255)", "rgb(231,24,255)", "rgb(232,23,255)", "rgb(233,22,255)", "rgb(234,21,255)", "rgb(235,20,255)", "rgb(236,19,255)", "rgb(237,18,255)", "rgb(238,17,255)", "rgb(239,16,255)", "rgb(240,15,255)", "rgb(241,14,255)", "rgb(242,13,255)", "rgb(243,12,255)", "rgb(244,11,255)", "rgb(245,10,255)", "rgb(246,9,255)", "rgb(247,8,255)", "rgb(248,7,255)", "rgb(249,6,255)", "rgb(250,5,255)", "rgb(251,4,255)", "rgb(252,3,255)", "rgb(253,2,255)", "rgb(254,1,255)", "rgb(255,0,255)"],
	"hot" : ["rgb(10,0,0)", "rgb(13,0,0)", "rgb(15,0,0)", "rgb(18,0,0)", "rgb(21,0,0)", "rgb(23,0,0)", "rgb(26,0,0)", "rgb(28,0,0)", "rgb(31,0,0)", "rgb(34,0,0)", "rgb(36,0,0)", "rgb(39,0,0)", "rgb(42,0,0)", "rgb(44,0,0)", "rgb(47,0,0)", "rgb(49,0,0)", "rgb(52,0,0)", "rgb(55,0,0)", "rgb(57,0,0)", "rgb(60,0,0)", "rgb(63,0,0)", "rgb(65,0,0)", "rgb(68,0,0)", "rgb(70,0,0)", "rgb(73,0,0)", "rgb(76,0,0)", "rgb(78,0,0)", "rgb(81,0,0)", "rgb(84,0,0)", "rgb(86,0,0)", "rgb(89,0,0)", "rgb(91,0,0)", "rgb(94,0,0)", "rgb(97,0,0)", "rgb(99,0,0)", "rgb(102,0,0)", "rgb(105,0,0)", "rgb(107,0,0)", "rgb(110,0,0)", "rgb(112,0,0)", "rgb(115,0,0)", "rgb(118,0,0)", "rgb(120,0,0)", "rgb(123,0,0)", "rgb(126,0,0)", "rgb(128,0,0)", "rgb(131,0,0)", "rgb(133,0,0)", "rgb(136,0,0)", "rgb(139,0,0)", "rgb(141,0,0)", "rgb(144,0,0)", "rgb(147,0,0)", "rgb(149,0,0)", "rgb(152,0,0)", "rgb(154,0,0)", "rgb(157,0,0)", "rgb(160,0,0)", "rgb(162,0,0)", "rgb(165,0,0)", "rgb(168,0,0)", "rgb(170,0,0)", "rgb(173,0,0)", "rgb(175,0,0)", "rgb(178,0,0)", "rgb(181,0,0)", "rgb(183,0,0)", "rgb(186,0,0)", "rgb(189,0,0)", "rgb(191,0,0)", "rgb(194,0,0)", "rgb(196,0,0)", "rgb(199,0,0)", "rgb(202,0,0)", "rgb(204,0,0)", "rgb(207,0,0)", "rgb(210,0,0)", "rgb(212,0,0)", "rgb(215,0,0)", "rgb(217,0,0)", "rgb(220,0,0)", "rgb(223,0,0)", "rgb(225,0,0)", "rgb(228,0,0)", "rgb(231,0,0)", "rgb(233,0,0)", "rgb(236,0,0)", "rgb(238,0,0)", "rgb(241,0,0)", "rgb(244,0,0)", "rgb(246,0,0)", "rgb(249,0,0)", "rgb(252,0,0)", "rgb(254,0,0)", "rgb(255,2,0)", "rgb(255,5,0)", "rgb(255,7,0)", "rgb(255,10,0)", "rgb(255,12,0)", "rgb(255,15,0)", "rgb(255,18,0)", "rgb(255,20,0)", "rgb(255,23,0)", "rgb(255,26,0)", "rgb(255,28,0)", "rgb(255,31,0)", "rgb(255,33,0)", "rgb(255,36,0)", "rgb(255,39,0)", "rgb(255,41,0)", "rgb(255,44,0)", "rgb(255,47,0)", "rgb(255,49,0)", "rgb(255,52,0)", "rgb(255,54,0)", "rgb(255,57,0)", "rgb(255,60,0)", "rgb(255,62,0)", "rgb(255,65,0)", "rgb(255,68,0)", "rgb(255,70,0)", "rgb(255,73,0)", "rgb(255,75,0)", "rgb(255,78,0)", "rgb(255,81,0)", "rgb(255,83,0)", "rgb(255,86,0)", "rgb(255,89,0)", "rgb(255,91,0)", "rgb(255,94,0)", "rgb(255,96,0)", "rgb(255,99,0)", "rgb(255,102,0)", "rgb(255,104,0)", "rgb(255,107,0)", "rgb(255,110,0)", "rgb(255,112,0)", "rgb(255,115,0)", "rgb(255,117,0)", "rgb(255,120,0)", "rgb(255,123,0)", "rgb(255,125,0)", "rgb(255,128,0)", "rgb(255,131,0)", "rgb(255,133,0)", "rgb(255,136,0)", "rgb(255,138,0)", "rgb(255,141,0)", "rgb(255,144,0)", "rgb(255,146,0)", "rgb(255,149,0)", "rgb(255,151,0)", "rgb(255,154,0)", "rgb(255,157,0)", "rgb(255,159,0)", "rgb(255,162,0)", "rgb(255,165,0)", "rgb(255,167,0)", "rgb(255,170,0)", "rgb(255,172,0)", "rgb(255,175,0)", "rgb(255,178,0)", "rgb(255,180,0)", "rgb(255,183,0)", "rgb(255,186,0)", "rgb(255,188,0)", "rgb(255,191,0)", "rgb(255,193,0)", "rgb(255,196,0)", "rgb(255,199,0)", "rgb(255,201,0)", "rgb(255,204,0)", "rgb(255,207,0)", "rgb(255,209,0)", "rgb(255,212,0)", "rgb(255,214,0)", "rgb(255,217,0)", "rgb(255,220,0)", "rgb(255,222,0)", "rgb(255,225,0)", "rgb(255,228,0)", "rgb(255,230,0)", "rgb(255,233,0)", "rgb(255,235,0)", "rgb(255,238,0)", "rgb(255,241,0)", "rgb(255,243,0)", "rgb(255,246,0)", "rgb(255,249,0)", "rgb(255,251,0)", "rgb(255,254,0)", "rgb(255,255,2)", "rgb(255,255,6)", "rgb(255,255,10)", "rgb(255,255,14)", "rgb(255,255,18)", "rgb(255,255,22)", "rgb(255,255,26)", "rgb(255,255,30)", "rgb(255,255,34)", "rgb(255,255,38)", "rgb(255,255,42)", "rgb(255,255,46)", "rgb(255,255,50)", "rgb(255,255,54)", "rgb(255,255,58)", "rgb(255,255,62)", "rgb(255,255,65)", "rgb(255,255,69)", "rgb(255,255,73)", "rgb(255,255,77)", "rgb(255,255,81)", "rgb(255,255,85)", "rgb(255,255,89)", "rgb(255,255,93)", "rgb(255,255,97)", "rgb(255,255,101)", "rgb(255,255,105)", "rgb(255,255,109)", "rgb(255,255,113)", "rgb(255,255,117)", "rgb(255,255,121)", "rgb(255,255,125)", "rgb(255,255,128)", "rgb(255,255,132)", "rgb(255,255,136)", "rgb(255,255,140)", "rgb(255,255,144)", "rgb(255,255,148)", "rgb(255,255,152)", "rgb(255,255,156)", "rgb(255,255,160)", "rgb(255,255,164)", "rgb(255,255,168)", "rgb(255,255,172)", "rgb(255,255,176)", "rgb(255,255,180)", "rgb(255,255,184)", "rgb(255,255,188)", "rgb(255,255,191)", "rgb(255,255,195)", "rgb(255,255,199)", "rgb(255,255,203)", "rgb(255,255,207)", "rgb(255,255,211)", "rgb(255,255,215)", "rgb(255,255,219)", "rgb(255,255,223)", "rgb(255,255,227)", "rgb(255,255,231)", "rgb(255,255,235)", "rgb(255,255,239)", "rgb(255,255,243)", "rgb(255,255,247)", "rgb(255,255,251)", "rgb(255,255,255)"],
	"jetseg" : ["rgb(0,0,128)", "rgb(0,18,255)", "rgb(0,164,255)", "rgb(65,255,182)", "rgb(182,255,65)", "rgb(255,185,0)", "rgb(255,50,0)", "rgb(128,0,0)"],
	"coolseg" : ["rgb(0,255,255)", "rgb(36,219,255)", "rgb(73,182,255)", "rgb(109,146,255)", "rgb(146,109,255)", "rgb(182,73,255)", "rgb(219,36,255)", "rgb(255,0,255)"],
	"hotseg" : ["rgb(11,0,0)", "rgb(106,0,0)", "rgb(202,0,0)", "rgb(255,43,0)", "rgb(255,138,0)", "rgb(255,234,0)", "rgb(255,255,112)", "rgb(255,255,255)"],
	"terrainseg" : ["rgb(51,51,153)", "rgb(2,148,250)", "rgb(36,211,109)", "rgb(182,240,138)", "rgb(219,208,133)", "rgb(146,115,94)", "rgb(182,162,157)", "rgb(255,255,255)"],
	"greyseg" : ["rgb(255,255,255)", "rgb(237,237,237)", "rgb(209,209,209)", "rgb(172,172,172)", "rgb(130,130,130)", "rgb(91,91,91)", "rgb(43,43,43)", "rgb(0,0,0)"]
}


AFRAME.registerComponent('dataplot', {
  	schema: {
  		src: { type: 'asset', default: 'none' },
  		raw: {
  			default: 'none',
    		parse: function(data) { return data }
  		},
  		title: { type: 'string' },
	    x: { type: 'string' },
	    y: { type: 'string' },
	    z: { type: 'string' },
	    s: { type: 'string' },
	    val: { type: 'string' },
	    colorpreset: { default: 'jet', type: 'string' },
	    pointcolor: { default: '', type: 'string' },
	    valfill: { 
			default: [],
	    	type: 'array'
	    },
	    xfill: { 
			default: [],
	    	type: 'array'
	    },
	    yfill: { 
			default: [],
	    	type: 'array'
	    },
	    zfill: { 
			default: [],
	    	type: 'array'
	    },
	    sfill: { 
			default: [],
	    	type: 'array'
	    },
	    xlimit: {
	    	type: 'number',
	    	default: 1
	    },
	    ylimit: {
	    	type: 'number',
	    	default: 1
	    },
	    zlimit: {
	    	type: 'number',
	    	default: 1
	    },
	    relationship: {
	    	default: 'none',
    		type: 'string'
	    },
	    pointsprite: {
	    	default: null, /* Default is actually "img/disc.png", but this is set in init() below */
    		type: 'string'
	    },
	    xflip: { type: 'boolean' },
	    yflip: { type: 'boolean' },
	    zflip: { type: 'boolean' },
		xlabel: { type: 'string', default:"" },
		ylabel: { type: 'string', default:"" },
		zlabel: { type: 'string', default:"" },
		nochrome: { type: 'boolean', default:false },
		showTicks: { type: 'boolean', default:true },
		showTickLabels: { type: 'boolean', default:false },
		showcolorbar: { type: 'boolean', default:true },
		cage: { type: 'boolean', default:false },
		numdecimalplaces: { type: 'number', default:4 },
		showFloor: {type:'boolean', default:false },
		floorMaterialParams: {type: 'string', default:'color: #fff; opacity:0.5; transparent:true; '},
		pointsize: { 
	    	type: 'number',
	    	default: 1 
	    }
  	},

  	init: function() {
  		var data = this.data;
  		if (!data.pointsprite) data.pointsprite="img/disc.png";	
		console.log('init ...................')	
  	},

	update: function (oldData) {
		console.log('update..........')
		console.log(oldData)
		var data = this.data
    	var el = this.el
		console.log(data)
    	if (data !== oldData) {
    		if (data.raw !== "none") {
				renderGeometryFromRaw(el, data)		
    		} else if (data.src !== "none") {
				// TODO: This logic is not quite right. If the user actually specifies anything, even the default option, we should set this flag to True. But I dont know how to test whether the value was filled in using the schema default (i.e. the user specified it) or whether the value was provided by the user but coincidientally is the same as the schema default.
				data.userSpecifiedPointsprite = (data.pointsprite != this.__proto__.schema.pointsprite.default);
    			renderGeometryAndKeyFromPath(el, data)			
    		} else {
    			console.log("no data")
    		}	
    	}
    }
})





var  customVertexShader =  [ 
			'attribute float size;',
			'attribute vec3 customColor;',
			'varying vec3 vColor;',
			'void main() {',
			'	vColor = customColor;',
			'	vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );',
			'	gl_PointSize = size * ( 300.0 / -mvPosition.z );',
			'	gl_Position = projectionMatrix * mvPosition;',
			'}'
].join('\n');

var customFragShader = [
			'uniform vec3 color;',
			'uniform sampler2D texture;',
			'varying vec3 vColor;',
			'void main() {',
			'	gl_FragColor = vec4( color * vColor, 1.0 );',
			'	gl_FragColor = gl_FragColor * texture2D( texture, gl_PointCoord );',
			'   if ( gl_FragColor.a < 0.6 ) discard;',
			'}'
].join('\n');






function renderGeometryAndKeyFromPath(el, data) {
	console.log({data, el, })
	d3.json(data.src).then(function(json) {
		var colorPreset = "colors." + data.colorpreset
		console.log('>>>>>>>>>>>>>>>>>>')
		console.log(json)
		// Not sure what is going on here:
		json.slice().reverse().forEach(function(point, index, object) {
  			if (data.valfill.indexOf(String(point[data.val])) !== -1) {
    			json.splice(object.length - 1 - index, 1);
  			}
		})
		json.slice().reverse().forEach(function(point, index, object) {
  			if (data.xfill.indexOf(String(point[data.x])) !== -1) {
    			json.splice(object.length - 1 - index, 1);
  			}
		})
		json.slice().reverse().forEach(function(point, index, object) {
  			if (data.yfill.indexOf(String(point[data.y])) !== -1) {
    			json.splice(object.length - 1 - index, 1);
    			
  			}
		})
		json.slice().reverse().forEach(function(point, index, object) {
  			if (data.zfill.indexOf(String(point[data.z])) !== -1) {
    			json.splice(object.length - 1 - index, 1);
    			
  			}
		})
		json.slice().reverse().forEach(function(point, index, object) {
  			if (data.sfill.indexOf(String(point[data.s])) !== -1) {
    			json.splice(object.length - 1 - index, 1);
  			}
		})
		
		// Figure out value ranges for the axes
		var stats = getDataStats(json, data, colorPreset)
		if (data.xflip) {
			stats.scaleX.range([stats.width, 0])
		} else {
			stats.scaleX.range([0, stats.width])
		}

		if (data.yflip) {
			stats.scaleY.range([stats.height, 0])
		} else {
			stats.scaleY.range([0, stats.height])
		}

		if (data.zflip) {
			stats.scaleZ.range([stats.depth, 0])
		} else {
			stats.scaleZ.range([0, stats.depth])
		}

		var material;
		var geometry;
		
		// If point sizes are specified we have to use a THREE.BufferGeometry + ShaderMaterial.
		// If point sizes are not specified we can simply use THREE.Geometry + PointsMaterial. This supports per-point coloring but not per-point sizes. May be faster?
		
			geometry = new THREE.BufferGeometry();
			var positions = new Float32Array( json.length * 3 );
			var colors = new Float32Array( json.length * 3 );
			var sizes = new Float32Array( json.length );

			var color = new THREE.Color();

			for ( var i = 0, i3 = 0; i < json.length; i ++, i3 += 3 ) {
				
				positions[ i3 + 0 ] = stats.scaleX(json[i][data.x]);
				positions[ i3 + 1 ] = stats.scaleY(json[i][data.y]);
				positions[ i3 + 2 ] = stats.scaleZ(json[i][data.z]);
		
				var c = stats.colorScale(json[i][data.val]); // Returns string like 'rgb(10,0,0)'
				
				if (data.pointcolor) 
					var color = new THREE.Color(data.pointcolor)
				else
					var color = new THREE.Color(c)
			

				colors[ i3 + 0 ] = color.r;
				colors[ i3 + 1 ] = color.g;
				colors[ i3 + 2 ] = color.b;
				
				sizes[ i ] = data.s ? (0.1 + data.pointsize * stats.scaleS(json[i][data.s])) : data.pointsize;

			}
			geometry.setAttribute( 'position', new THREE.BufferAttribute( positions, 3 ) );
			geometry.setAttribute( 'customColor', new THREE.BufferAttribute( colors, 3 ) );
			geometry.setAttribute( 'size', new THREE.BufferAttribute( sizes, 1 ) );
			material = new THREE.PointsMaterial({
				size: data.pointsize * 0.006,
				vertexColors: THREE.VertexColors
			})


		// Create the particle system and add it to the scene
		var particleSystem = new THREE.Points( geometry,  material);
		
		el.setObject3D('mesh', particleSystem) // Can set 'particles' or 'mesh', not sure which is better...
		
		// Add axes, tics, and title? 
		if (!data.nochrome) makeAxisAndKey(el, data, stats);

	})	// End the d3.json() parse of the .json source data.


}

function makeAxisAndKey(el, data, stats) {

	var lineDim = []
	var xDim = {}
		yDim = {}
		zDim = {}
	lineDim.push(xDim, yDim, zDim)

	xDim.v = [new THREE.Vector3(0, 0, 0), new THREE.Vector3(stats.width, 0, 0)]
	yDim.v = [new THREE.Vector3(0, 0, 0), new THREE.Vector3(0, stats.height, 0)]
	zDim.v = [new THREE.Vector3(0, 0, 0), new THREE.Vector3(0, 0, stats.depth)]

	lineDim.forEach(function(dim, i){
		makeLine(el, dim.v, i, 'baseLine')
		
		if (i==1 && data.cage) {
			// Add top edge (along Z axis)
			makeLine(el, [new THREE.Vector3(stats.width, 0, 0), new THREE.Vector3(stats.width, 0, stats.depth)], i,'edge_top'); 
			// Add righthand edge (along X axis)
			makeLine(el, [new THREE.Vector3(0, 0, stats.depth), new THREE.Vector3(stats.width, 0, stats.depth)], i,'edge_righthand'); 
			// Add three vertical lines to form a data cage
			makeLine(el, [new THREE.Vector3(stats.width, 0, 0), new THREE.Vector3(stats.width, stats.height, 0)], i,'extraBaseLine1'); // top of X axis (upper left)
			makeLine(el, [new THREE.Vector3(stats.width, 0, stats.depth), new THREE.Vector3(stats.width, stats.height, stats.depth)], i,'extraBaseLine2'); // Upper righthand corner
			makeLine(el, [new THREE.Vector3(0, 0, stats.depth), new THREE.Vector3(0, stats.height, stats.depth)], i,'extraBaseLine3'); // end of Z axis (lower right)
		}
		
		var textHeight = 0.05
		if (i == 0 && data.showTicks ) {
			var marks = Math.round(stats.width/textHeight)
			if (marks == 1) {
				marks++;
			}
			makeAxisTicks(i, dim.v, el, marks, stats.minX, stats.maxX, data.numdecimalplaces, data.showTickLabels)
		} else if (i == 1 && data.showTicks) {
			var marks = Math.round(stats.height/textHeight)
			if (marks == 1) {
				marks++;
			}
			makeAxisTicks(i, dim.v, el, marks, stats.minY, stats.maxY, data.numdecimalplaces, data.showTickLabels)
		} else if (i == 2 && data.showTicks) {
			var marks = Math.round(stats.depth/textHeight)
			if (marks == 1) {
				marks++;
			}
			makeAxisTicks(i, dim.v, el, marks, stats.minZ, stats.maxZ, data.numdecimalplaces, data.showTickLabels)
		}

	})

	var colorPreset = "colors." + data.colorpreset
	if (data.showcolorbar) createColorKey(el, stats, colorPreset, data.numdecimalplaces)
	createAxisLabels(el, data, stats)

	if (data.showFloor) {
		var floorNode = document.createElement("a-entity");
		floorNode.setAttribute('geometry',{"primitive":"plane", "width":stats.width, "height":stats.depth});
		// Small shift down the Y axis so that in case the floor is not transparent (to save GPU) it will not interfere with point sprites.
		floorNode.setAttribute('position',[stats.width/2, -0.01, stats.depth/2].join(" "));
		floorNode.setAttribute('rotation','-90 0 0');
		floorNode.setAttribute('material',AFRAME.utils.styleParser.parse(data.floorMaterialParams));
		el.appendChild(floorNode);
	}
	


}


function createAxisLabels(el, data, stats) {
	var pos = new THREE.Vector3(stats.width + 0.05,0,stats.depth)
	var objName = "title"
	var textString = data.title
	var align = "center"
	var rot = {x: THREE.Math.degToRad(90), y: THREE.Math.degToRad(0), z: THREE.Math.degToRad(-90)}
	// addText(el, pos, objName, textString, align, rot)


	//                                Ydim   Height  Xdim
	var xlabpos = new THREE.Vector3(stats.width/2, 0 , -0.13) 
	var ylabpos = new THREE.Vector3(-0.01, stats.height/3 , -0.025) // Lower left corner, 1/3rd above the bottom
	var zlabpos = new THREE.Vector3(-0.14, 0 ,stats.depth)
	if (data.xlabel) addText(el, xlabpos, "xlabel", data.xlabel, "right", rot)
	if (data.ylabel) addText(el, ylabpos, "ylabel", data.ylabel, "right", rot)
	if (data.zlabel) addText(el, zlabpos, "zlabel", data.zlabel, "center", rot) // correct
	
}

function makeAxisTicks(i, dimStartAndEndVectors, el, marks, min, max, numdecimalplaces, showTickLabels) {
	var axisStats = []
	var d = []

	for (m = 0; m < marks; m++) {
		var val = m / (marks - 1)
		d.push(val)
	}

	d.forEach(function(v) {
		var vScale = d3.scaleLinear().domain([0, 1]).range([min, max])
		axisStats.push(vScale(v).toFixed(numdecimalplaces) * 1) 
	})
	makeTicks(el, d, dimStartAndEndVectors, i, axisStats, showTickLabels)
}

function makeTicks(el, tickVals, dimStartAndEndVectors, dimensionID, axisStats, showTickLabels) {
	tickVals.forEach(function(perc, j) {
		var v1 = getPointInBetweenByPerc(dimStartAndEndVectors[0], dimStartAndEndVectors[1], perc)
		var v2;
		var v2Text;
		var objName = "" + dimensionID + "" + j
		var textString = ""
		if (dimensionID == 0) {
			v2 = new THREE.Vector3(v1.x, v1.y, v1.z - 0.03)
			v2Text = new THREE.Vector3(v1.x - 0.01, v1.y, v1.z - 0.04)
			var rot = {x: THREE.Math.degToRad(90), y: THREE.Math.degToRad(0), z: THREE.Math.degToRad(-90)}
			textString += parseFloat(axisStats[j].toFixed(4))
		} else if (dimensionID == 1) {
			v2 = new THREE.Vector3(v1.x - 0.03, v1.y, v1.z - 0.03)
			v2Text = new THREE.Vector3(v1.x - 0.75, v1.y, v1.z + 0.25)
			var rot = {x: THREE.Math.degToRad(90), y: THREE.Math.degToRad(0), z: THREE.Math.degToRad(225)}
			textString += parseFloat(axisStats[j].toFixed(4))
		} else if (dimensionID == 2) {
			v2 = new THREE.Vector3(v1.x - 0.03, v1.y, v1.z)
			v2Text = new THREE.Vector3(v1.x - 1.035, v1.y, v1.z + 1.01)
			var rot = {x: THREE.Math.degToRad(90), y: THREE.Math.degToRad(0), z: THREE.Math.degToRad(-180)}
			textString += parseFloat(axisStats[j].toFixed(4))
		}

		var nV = [v1, v2]
		makeLine(el, nV, objName, 'xLine')
		if (showTickLabels) { addText(el, v2Text, objName, textString, 'right', rot) }
	
	})

}

function addText(el, pos, objName, textString, align, rot) {

	fontLoader({
      font: 'https://cdn.rawgit.com/bryik/aframe-bmfont-text-component/aa0655cf90f646e12c40ab4708ea90b4686cfb45/assets/DejaVu-sdf.fnt',
      image: 'https://cdn.rawgit.com/bryik/aframe-bmfont-text-component/aa0655cf90f646e12c40ab4708ea90b4686cfb45/assets/DejaVu-sdf.png'
    }, start)

	function start (font, texture) {
      texture.needsUpdate = true
      texture.anisotropy = 16

      var options = {
        font: font,
        text: textString,
        width: 1000,
        align: align,
        letterSpacing: 0,
        lineHeight: 38,
        mode: 'normal'
      }

      var geometry = createText(options)

      var material = new THREE.RawShaderMaterial(SDFShader({
        map: texture,
        side: THREE.DoubleSide,
        transparent: true,
        color: el.getAttribute("textColor")? el.getAttribute("textColor") : '#000', /* Default is black */
        opacity: 1.0
      }))

      var text = new THREE.Mesh(geometry, material)
      
      text.scale.multiplyScalar(-0.001)
      text.rotation.set(rot.x, rot.y, rot.z)
      text.position.set(pos.x, pos.y, pos.z - 1.0)

      el.setObject3D('bmfont-text' + objName, text)
    }
}

function fontLoader (opt, cb) {
	loadFont(opt.font, function (err, font) {
		if (err) {
			throw err
		}

		var textureLoader = new THREE.TextureLoader()
		textureLoader.load(opt.image, function (texture) {
		cb(font, texture)
		})
	})
}

function createColorKey(el, stats, colorPreset, numdecimalplaces) {

	let axisStatsVal = [stats.minVal, (stats.minVal + ((stats.maxVal + stats.minVal) * 0.5))/2, (stats.minVal + stats.maxVal)  * 0.5, (stats.maxVal + ((stats.maxVal + stats.minVal) * 0.5))/2, stats.maxVal]
	let v1, v2;

	let geometry = new THREE.BoxGeometry( 0.075, 0.001, 0.4)

	let tt = new THREE.Texture( generateTexture(colorPreset) )
	tt.needsUpdate = true

    let material = new THREE.MeshBasicMaterial( { map: tt, transparent: true } )
	
	mesh = new THREE.Mesh( geometry, material )

	mesh.position.set(stats.width * 0.5, 0, stats.depth + 0.1)
	mesh.rotateY(THREE.Math.degToRad(90))

	v1 = new THREE.Vector3((stats.width * 0.5) - 0.2, 0, stats.depth + 0.1375)
	v2 = new THREE.Vector3((stats.width * 0.5) + 0.2, 0, stats.depth + 0.1375)

	let d = [0, 0.25, 0.5, 0.75, 1]

	d.forEach(function(dVal, i){
		let v1Tick = getPointInBetweenByPerc(v1, v2, dVal)
		let v2Tick = new THREE.Vector3(v1Tick.x, v1Tick.y, v1Tick.z + 0.03)
		let labelV = new THREE.Vector3(v1Tick.x - 0.01, v1Tick.y, v1Tick.z + 1.04)
		let rot = {x: THREE.Math.degToRad(90), y: THREE.Math.degToRad(0), z: THREE.Math.degToRad(-90)}
		makeLine(el,[v1Tick,v2Tick], i, "colorKeyBaseLine")
		// addText(el, labelV, "colorKeyLabel" + i, "" + parseFloat(axisStatsVal[i].toFixed(numdecimalplaces)), 'left', rot)
	})

	el.setObject3D('colorcube', mesh)

}

/* Builds the color bar */
function generateTexture(colorPreset) {

	var size = 512

	canvas = document.createElement( 'canvas' )
	canvas.width = size
	canvas.height = size

	var colorPresetPath = eval(colorPreset)

	var context = canvas.getContext( '2d' )

	context.rect( 0, 0, size, size )
	var gradient = context.createLinearGradient( 0, 0, 0, size )

	colorPresetPath.forEach(function(c, i){
		var step = i/256
		gradient.addColorStop(step, c)
	})
	
	context.fillStyle = gradient
	context.fill()

	return canvas

}

function getPointInBetweenByPerc(pointA, pointB, percentage) {

    var dir = pointB.clone().sub(pointA)
    var len = dir.length()
    dir = dir.normalize().multiplyScalar(len*percentage)
    return pointA.clone().add(dir)

}

function makeLine(el, v, i, objName) {
	
	//var c = el.getAttribute("textColor")?  parseInt(el.getAttribute("textColor").replace(/^#/,''),16) : 0x000000, /* Default is black */
	var c = el.getAttribute("textColor")?  el.getAttribute("textColor") : 0x000; /* Default is black */

	var material = new THREE.LineBasicMaterial({
		color: c,
		opacity: 0.45, 
		transparent: true, 
		depthWrite: false
	})

	var geometry = new THREE.BufferGeometry()
	geometry.setFromPoints(v)
	var line = new THREE.Line( geometry, material )
	el.setObject3D(objName + i, line)
}


function renderGeometryFromRaw(el, data) {
		/* NOTE! This does not support the new per-point sizes, ie. does not use BufferGeometry */
	var json = JSON.parse(data.raw)
	var colorPreset = "colors." + data.colorpreset
	var geometry = new THREE.Geometry()
	json.slice().reverse().forEach(function(point, index, object) {
			if (data.valfill.indexOf(String(point[data.val])) !== -1) {
			json.splice(object.length - 1 - index, 1);
			}
	})
	json.slice().reverse().forEach(function(point, index, object) {
			if (data.xfill.indexOf(String(point[data.x])) !== -1) {
			json.splice(object.length - 1 - index, 1);
			
			}
	})
	json.slice().reverse().forEach(function(point, index, object) {
			if (data.yfill.indexOf(String(point[data.y])) !== -1) {
			json.splice(object.length - 1 - index, 1);
			
			}
	})
	json.slice().reverse().forEach(function(point, index, object) {
			if (data.zfill.indexOf(String(point[data.z])) !== -1) {
			json.splice(object.length - 1 - index, 1);
			
			}
	})
	var stats = getDataStats(json, data, colorPreset)
	json.forEach(function(point){
		var vertex = new THREE.Vector3()
		if (data.xflip) {
			stats.scaleX.range([stats.width, 0])
		} else {
			stats.scaleX.range([0, stats.width])
		}

		if (data.yflip) {
			stats.scaleY.range([stats.height, 0])
		} else {
			stats.scaleY.range([0, stats.height])
		}

		if (data.zflip) {
			stats.scaleZ.range([stats.depth, 0])
		} else {
			stats.scaleZ.range([0, stats.depth])
		}

		vertex.x = stats.scaleX(point[data.x])
		vertex.y = stats.scaleY(point[data.y])
		vertex.z = stats.scaleZ(point[data.z])
		geometry.vertices.push( vertex )
		var c = stats.colorScale(point[data.val])
		geometry.colors.push(new THREE.Color(c))
	})
	var material = new THREE.PointsMaterial({
		size: data.pointsize * 0.006,
		vertexColors: THREE.VertexColors
	})
	var model = new THREE.Points( geometry, material )
	makeAxisAndKey(el, data, stats)

	el.setObject3D('particles', model)
}


		
		
function getDataStats(json, data, colorPreset) {
	var stats = {}

	stats.minX = d3.min(json, function(d) { return d[data.x]})
	stats.maxX = d3.max(json, function(d) { return d[data.x]})
	stats.minY = d3.min(json, function(d) { return d[data.y]})
	stats.maxY = d3.max(json, function(d) { return d[data.y]})
	stats.minZ = d3.min(json, function(d) { return d[data.z]})
	stats.maxZ = d3.max(json, function(d) { return d[data.z]})
	stats.minS = d3.min(json, function(d) { return d[data.s]})
	stats.maxS = d3.max(json, function(d) { return d[data.s]})
	stats.minVal = d3.min(json, function(d) { return d[data.val]})
	stats.maxVal = d3.max(json, function(d) { return d[data.val]})

	stats.totalX = Math.abs(stats.minX) + Math.abs(stats.maxX)
	stats.totalZ = Math.abs(stats.minZ) + Math.abs(stats.maxZ)
	stats.totalY = Math.abs(stats.minY) + Math.abs(stats.maxY)

	var xz = false
	var xy = false
	var yz = false
	var xyz = false

	if (data.relationship == "xy" || data.relationship == "yx") {
		xy = true
	} else if (data.relationship == "xz" || data.relationship == "zx") {
		xz = true
	} else if (data.relationship == "yz" || data.relationship == "zy") {
		yz = true
	} else if (data.relationship == "xyz" || data.relationship == "yzx" || data.relationship == "zxy" || data.relationship == "xzy" || data.relationship == "yxz" || data.relationship == "zyx") {
		xyz = true
	}

	if (xy) {
		if (stats.totalX < stats.totalY) {
			var shape = stats.totalX/stats.totalY
			stats.height = 1
			stats.width = shape
		} else {
			var shape = stats.totalY/stats.totalX
			stats.height = shape
			stats.width = 1
		}
		stats.depth = data.zlimit
	} else if (xz) {
		if (stats.totalX < stats.totalZ) {
			var shape = stats.totalX/stats.totalZ
			stats.width = shape
			stats.depth = 1
		} else {
			var shape = stats.totalZ/stats.totalX
			stats.width = 1
			stats.depth = shape
		}
		stats.height = data.ylimit
	} else if (yz) {
		if (stats.totalY < stats.totalZ) {
			var shape = stats.totalY/stats.totalZ
			stats.height = shape
			stats.depth = 1
		} else {
			var shape = stats.totalZ/stats.totalY
			stats.depth = shape
			stats.height = 1
		}
		stats.width = data.xlimit
	} else if (xyz) {
		if (stats.totalX >= stats.totalY && stats.totalX >= stats.totalZ) {
			var shape1 = stats.totalZ/stats.totalX
			var shape2 = stats.totalY/stats.totalX
			stats.width = 1
			stats.height = shape2
			stats.depth = shape1
		} else if (stats.totalY >= stats.totalZ && stats.totalY >= stats.totalX) {
			var shape1 = stats.totalZ/stats.totalY
			var shape2 = stats.totalX/stats.totalY
			stats.width = shape2
			stats.height = 1
			stats.depth = shape1
		} else if (stats.totalZ >= stats.totalY && stats.totalZ >= stats.totalX) {
			var shape1 = stats.totalX/stats.totalZ
			var shape2 = stats.totalY/stats.totalZ
			stats.width = shape1
			stats.height = shape2
			stats.depth = 1
		}
	} else {
		stats.width = data.xlimit
		stats.height = data.ylimit
		stats.depth = data.zlimit
	}

	stats.scaleX = d3.scaleLinear().domain([stats.minX, stats.maxX]).range([0, stats.width])
	stats.scaleY = d3.scaleLinear().domain([stats.minY, stats.maxY]).range([0, stats.height])
	stats.scaleZ = d3.scaleLinear().domain([stats.minZ, stats.maxZ]).range([0, stats.depth])
	stats.scaleS = d3.scaleLinear().domain([stats.minS, stats.maxS]).range([0, 1])
	
	stats.colorScale = d3.scaleQuantile().domain([stats.minVal, stats.maxVal]).range(eval(colorPreset))
	
	return stats
}

AFRAME.registerPrimitive('a-scatterplot', {
	defaultComponents: {
		dataplot: {}
	},
	mappings: {
		src: 'dataplot.src',
		raw: 'dataplot.raw',
		title: 'dataplot.title',
		x: 'dataplot.x',
		y: 'dataplot.y',
		z: 'dataplot.z',
		s: 'dataplot.s',
		val: 'dataplot.val',
		colorpreset: 'dataplot.colorpreset',
		pointcolor: 'dataplot.pointcolor',
		fillval: 'dataplot.valfill',
		xfill: 'dataplot.xfill',
		yfill: 'dataplot.yfill',
		zfill: 'dataplot.zfill',
		sfill: 'dataplot.sfill',
		xlimit: 'dataplot.xlimit',
		ylimit: 'dataplot.ylimit',
		zlimit: 'dataplot.zlimit',
		relationship: 'dataplot.relationship',
		xflip: 'dataplot.xflip',
		yflip: 'dataplot.yflip',
		zflip: 'dataplot.zflip',
		xlabel: 'dataplot.xlabel',
		ylabel: 'dataplot.ylabel',
		zlabel: 'dataplot.zlabel',
		numdecimalplaces: 'dataplot.numdecimalplaces',
		nochrome: 'dataplot.nochrome',
		showticks: 'dataplot.showTicks',
		showticklabels: 'dataplot.showTickLabels',
		showfloor: 'dataplot.showFloor',
		floormaterialparams: 'dataplot.floorMaterialParams',
		cage: 'dataplot.cage',
		showcolorbar: 'dataplot.showcolorbar',
		pointsprite: 'dataplot.pointsprite',
		pointsize: 'dataplot.pointsize'
	}
})

