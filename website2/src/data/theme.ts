export type TypeThemeValue = {
	[key: string]: string;
};
export const theme = {
	dark: {
		background: "#131313",
		color: "#fefefe",
		primary: "#008AFF",
		secondary: "#000DAA",
		tertiary: "#4d1790",
		quatenary: "#515151",
		heroImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1008%26quot%3b)' fill='none'%3e%3crect width='1440' height='560' x='0' y='0' fill='rgba(237%2c 241%2c 253%2c 1)'%3e%3c/rect%3e%3cpath d='M980 212.92C945.3 212.92 903.33 242 903.33 280C903.33 329.2 946.72 387.33 980 387.33C1009.83 387.33 1029.54 331.13 1029.54 280C1029.54 243.93 1008.4 212.92 980 212.92' stroke='rgba(170%2c 175%2c 197%2c 0.25)' stroke-width='2'%3e%3c/path%3e%3cpath d='M1260 259.19C1244.65 259.19 1230.94 269.6 1230.94 280C1230.94 290.4 1244.65 300.81 1260 300.81C1279.99 300.81 1301.62 290.4 1301.62 280C1301.62 269.6 1279.99 259.19 1260 259.19' stroke='rgba(170%2c 175%2c 197%2c 0.25)' stroke-width='2'%3e%3c/path%3e%3cpath d='M420 356.36C406.34 356.36 393.58 389.94 393.58 420C393.58 438.84 406.46 454.15 420 454.15C433.96 454.15 448.57 439.05 448.57 420C448.57 390.15 433.83 356.36 420 356.36' stroke='rgba(170%2c 175%2c 197%2c 0.25)' stroke-width='2'%3e%3c/path%3e%3cpath d='M1400 351.37C1373.51 351.37 1360.23 386.41 1360.23 420C1360.23 449.89 1374.44 478.33 1400 478.33C1438.07 478.33 1487.5 450.85 1487.5 420C1487.5 387.37 1437.14 351.37 1400 351.37' stroke='rgba(170%2c 175%2c 197%2c 0.25)' stroke-width='2'%3e%3c/path%3e%3cpath d='M28 0C60.43 58.89 85.42 78.88 77.1 140C71.42 181.72 23.39 205.68 0 205.68C-15.16 205.68 0 172.84 0 140C0 70 -11.67 58.33 0 0C2.33 -11.67 21.88 -11.11 28 0' stroke='rgba(170%2c 175%2c 197%2c 0.25)' stroke-width='2'%3e%3c/path%3e%3cpath d='M488.85 140C484.53 69.56 444.22 42.03 465.58 0C479.79 -27.97 512.79 0 560 0C587.07 0 605.96 -19.51 614.13 0C635.28 50.49 623.26 70.45 618.65 140C613.98 210.45 588.16 211.92 595.56 280C603.38 351.92 644.5 348.7 649.09 420C653.51 488.7 646.07 508.94 613.58 560C601.53 578.94 586.79 560 560 560C490 560 490 560 420 560C387.69 560 355.38 565 355.38 560C355.38 554.75 395.05 560.73 420 539.51C477.36 490.73 503.74 487.24 520 420C535.12 357.49 490.68 351.16 482.76 280C475.1 211.16 493.12 209.56 488.85 140' stroke='rgba(170%2c 175%2c 197%2c 0.25)' stroke-width='2'%3e%3c/path%3e%3cpath d='M792.62 140C779.33 72.63 773.18 51.77 790.7 0C796.87 -18.23 815.35 0 840 0C875 0 888.37 -21.63 910 0C958.37 48.37 996.37 81.52 980 140C961.37 206.52 896.01 250 840 250C802.32 250 803.98 197.63 792.62 140' stroke='rgba(170%2c 175%2c 197%2c 0.25)' stroke-width='2'%3e%3c/path%3e%3cpath d='M980 140C969.73 74.72 993.59 45.73 1039.32 0C1063.59 -24.27 1079.66 0 1120 0C1190 0 1190 0 1260 0C1330 0 1330 0 1400 0C1445 0 1453.14 -16.75 1490 0C1523.14 15.07 1527.14 27.62 1540 63.64C1552.14 97.62 1540 101.82 1540 140C1540 196 1568.57 218.67 1540 252C1508.57 288.67 1480.15 266.79 1420 280C1410.15 282.16 1409.65 282.75 1400 282.75C1397.76 282.75 1398.3 281.06 1396.22 280C1328.3 245.63 1325.42 211.89 1260 211.89C1209.76 211.89 1206.5 240.13 1164.91 280C1136.5 307.24 1140.95 346.11 1120 346.11C1100.19 346.11 1104.57 311.2 1083.38 280C1034.57 208.15 991.76 214.72 980 140' stroke='rgba(170%2c 175%2c 197%2c 0.25)' stroke-width='2'%3e%3c/path%3e%3cpath d='M205.23 280C227.18 235.94 239.34 209.25 280 209.25C331.56 209.25 378.73 231.52 389.67 280C402.51 336.89 359.29 350.31 327.55 420C304.45 470.71 313.08 520.8 280 520.8C236.8 520.8 193.84 480.68 175 420C156.46 360.28 174.68 341.31 205.23 280' stroke='rgba(170%2c 175%2c 197%2c 0.25)' stroke-width='2'%3e%3c/path%3e%3cpath d='M720.74 420C720.74 366.28 782.98 296.15 840 296.15C892.92 296.15 940.63 365.18 940.63 420C940.63 462.11 891.66 490 840 490C781.72 490 720.74 463.21 720.74 420' stroke='rgba(170%2c 175%2c 197%2c 0.25)' stroke-width='2'%3e%3c/path%3e%3cpath d='M1166.67 420C1205.36 377.16 1217.22 348.11 1260 348.11C1294.11 348.11 1292.49 382.34 1320.45 420C1362.49 476.62 1356.03 482.53 1400 536.67C1412.88 552.53 1434.15 553.61 1434.15 560C1434.15 565.28 1417.07 560 1400 560C1330 560 1330 560 1260 560C1190 560 1190 560 1120 560C1103.75 560 1087.5 569.43 1087.5 560C1087.5 540.99 1103.88 531.64 1120 503.13C1143.46 461.64 1135.36 454.67 1166.67 420' stroke='rgba(170%2c 175%2c 197%2c 0.25)' stroke-width='2'%3e%3c/path%3e%3cpath d='M0 535.29C9.45 535.29 30.73 553.06 30.73 560C30.73 565.41 8.52 566.85 0 560C-6.85 554.49 -5.92 535.29 0 535.29' stroke='rgba(170%2c 175%2c 197%2c 0.25)' stroke-width='2'%3e%3c/path%3e%3cpath d='M0 86.47C6.95 86.47 26.38 115.96 26.38 140C26.38 153.96 8 162.47 0 162.47C-5.19 162.47 0 151.24 0 140C0 113.24 -6.24 86.47 0 86.47' stroke='rgba(170%2c 175%2c 197%2c 0.25)' stroke-width='2'%3e%3c/path%3e%3cpath d='M546.23 140C541.62 70.59 540.68 64.04 546.98 0C547.57 -5.96 553.49 0 560 0C563.74 0 567.18 -3.54 567.47 0C572.86 66.46 574 70.4 571.35 140C570.27 168.4 566.25 196 560 196C553.69 196 548.13 168.59 546.23 140' stroke='rgba(170%2c 175%2c 197%2c 0.25)' stroke-width='2'%3e%3c/path%3e%3cpath d='M1096.67 140C1089.14 71.7 1088.52 60.73 1098.64 0C1100.18 -9.27 1109.32 0 1120 0C1165 0 1168.92 -11.41 1210 0C1238.92 8.03 1235.64 38.89 1260 38.89C1282.51 38.89 1277.28 7.35 1303.75 0C1347.28 -12.09 1351.88 0 1400 0C1413.75 0 1427.5 -11.31 1427.5 0C1427.5 58.69 1413.75 70 1400 140C1400 140 1400 140 1400 140C1330 152.3 1329.78 151.17 1260 164.59C1189.78 178.09 1177.91 202.57 1120 193.85C1096.24 190.27 1099.82 168.63 1096.67 140' stroke='rgba(170%2c 175%2c 197%2c 0.25)' stroke-width='2'%3e%3c/path%3e%3cpath d='M245 280C245 259.02 260.97 246.88 280 246.88C304.13 246.88 331.33 256.23 331.33 280C331.33 325.9 302.16 386.21 280 386.21C258.99 386.21 245 328.69 245 280' stroke='rgba(170%2c 175%2c 197%2c 0.25)' stroke-width='2'%3e%3c/path%3e%3cpath d='M785.56 420C785.56 395.48 813.97 363.46 840 363.46C864.16 363.46 885.94 394.97 885.94 420C885.94 439.22 863.59 451.96 840 451.96C813.4 451.96 785.56 439.73 785.56 420' stroke='rgba(170%2c 175%2c 197%2c 0.25)' stroke-width='2'%3e%3c/path%3e%3cpath d='M1228.07 420C1228.07 403.86 1245.36 395.41 1260 395.41C1271.67 395.41 1280.68 405.6 1280.68 420C1280.68 451.6 1272.78 487.41 1260 487.41C1246.48 487.41 1228.07 449.86 1228.07 420' stroke='rgba(170%2c 175%2c 197%2c 0.25)' stroke-width='2'%3e%3c/path%3e%3cpath d='M526.4 560C526.4 544.19 548.08 510.59 560 510.59C570.07 510.59 570.37 539.5 570.37 560C570.37 564.21 565.18 560 560 560C543.2 560 526.4 568.89 526.4 560' stroke='rgba(170%2c 175%2c 197%2c 0.25)' stroke-width='2'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1008'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e")`,
		aboutSectionImage: "",
	},
	light: {
		background: "#fff",
		color: "#000",
		primary: "#008AFF",
		secondary: "#000DAA",
		tertiary: "#4d1790",
		quatenary: "#515151",
		// heroImage: ` url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask4310%26quot%3b)' fill='none'%3e%3crect width='1440' height='560' x='0' y='0' fill='url(%23SvgjsLinearGradient4311)'%3e%3c/rect%3e%3cg transform='translate(0%2c 340)' stroke-linecap='round'%3e%3cpath d='M20 129.175 L20 155.425' stroke-width='26.25' stroke='rgba(26%2c 115%2c 232%2c 0.04)'%3e%3c/path%3e%3cpath d='M20 194.8 L20 299.8' stroke-width='26.25' stroke='rgba(85%2c 73%2c 241%2c 0.05)'%3e%3c/path%3e%3cpath d='M20 339.175 L20 430.825' stroke-width='26.25' stroke='rgba(85%2c 73%2c 241%2c 0.025)'%3e%3c/path%3e%3cpath d='M55 244.195 L55 315.805' stroke-width='26.25' stroke='rgba(85%2c 73%2c 241%2c 0.05)'%3e%3c/path%3e%3cpath d='M90 180.505 L90 233.005' stroke-width='26.25' stroke='rgba(85%2c 73%2c 241%2c 0.025)'%3e%3c/path%3e%3cpath d='M90 272.38 L90 298.63' stroke-width='26.25' stroke='rgba(85%2c 73%2c 241%2c 0.05)'%3e%3c/path%3e%3cpath d='M90 338.005 L90 379.495' stroke-width='26.25' stroke='rgba(26%2c 115%2c 232%2c 0.04)'%3e%3c/path%3e%3cpath d='M125 154.375 L125 233.125' stroke-width='26.25' stroke='rgba(85%2c 73%2c 241%2c 0.05)'%3e%3c/path%3e%3cpath d='M125 272.5 L125 298.75' stroke-width='26.25' stroke='rgba(26%2c 115%2c 232%2c 0.04)'%3e%3c/path%3e%3cpath d='M125 338.125 L125 405.625' stroke-width='26.25' stroke='rgba(26%2c 115%2c 232%2c 0.014)'%3e%3c/path%3e%3cpath d='M160 149.745 L160 280.995' stroke-width='26.25' stroke='rgba(26%2c 115%2c 232%2c 0.04)'%3e%3c/path%3e%3cpath d='M160 320.37 L160 410.255' stroke-width='26.25' stroke='rgba(26%2c 115%2c 232%2c 0.04)'%3e%3c/path%3e%3cpath d='M195 55.055 L195 396.305' stroke-width='26.25' stroke='rgba(85%2c 73%2c 241%2c 0.05)'%3e%3c/path%3e%3cpath d='M195 435.68 L195 504.95500000000004' stroke-width='26.25' stroke='rgba(26%2c 115%2c 232%2c 0.04)'%3e%3c/path%3e%3cpath d='M230 138.45499999999998 L230 421.545' stroke-width='26.25' stroke='rgba(85%2c 73%2c 241%2c 0.05)'%3e%3c/path%3e%3cpath d='M265 86.275 L265 270.025' stroke-width='26.25' stroke='rgba(85%2c 73%2c 241%2c 0.05)'%3e%3c/path%3e%3cpath d='M265 309.4 L265 361.9' stroke-width='26.25' stroke='rgba(26%2c 115%2c 232%2c 0.04)'%3e%3c/path%3e%3cpath d='M265 401.275 L265 473.725' stroke-width='26.25' stroke='rgba(85%2c 73%2c 241%2c 0.05)'%3e%3c/path%3e%3cpath d='M300 242.955 L300 317.045' stroke-width='26.25' stroke='rgba(26%2c 115%2c 232%2c 0.04)'%3e%3c/path%3e%3cpath d='M335 18.955 L335 150.205' stroke-width='26.25' stroke='rgba(26%2c 115%2c 232%2c 0.04)'%3e%3c/path%3e%3cpath d='M335 189.58 L335 541.045' stroke-width='26.25' stroke='rgba(26%2c 115%2c 232%2c 0.04)'%3e%3c/path%3e%3cpath d='M370 175.005 L370 201.255' stroke-width='26.25' stroke='rgba(85%2c 73%2c 241%2c 0.05)'%3e%3c/path%3e%3cpath d='M370 240.63 L370 385.005' stroke-width='26.25' stroke='rgba(85%2c 73%2c 241%2c 0.05)'%3e%3c/path%3e%3cpath d='M405 202.015 L405 357.985' stroke-width='26.25' stroke='rgba(26%2c 115%2c 232%2c 0.04)'%3e%3c/path%3e%3cpath d='M440 57.725 L440 241.475' stroke-width='26.25' stroke='rgba(26%2c 115%2c 232%2c 0.04)'%3e%3c/path%3e%3cpath d='M440 280.85 L440 502.265' stroke-width='26.25' stroke='rgba(85%2c 73%2c 241%2c 0.05)'%3e%3c/path%3e%3cpath d='M475 170.845 L475 223.345' stroke-width='26.25' stroke='rgba(26%2c 115%2c 232%2c 0.04)'%3e%3c/path%3e%3cpath d='M475 262.72 L475 315.22' stroke-width='26.25' stroke='rgba(85%2c 73%2c 241%2c 0.05)'%3e%3c/path%3e%3cpath d='M475 354.595 L475 389.145' stroke-width='26.25' stroke='rgba(26%2c 115%2c 232%2c 0.04)'%3e%3c/path%3e%3cpath d='M510 221.185 L510 247.435' stroke-width='26.25' stroke='rgba(85%2c 73%2c 241%2c 0.05)'%3e%3c/path%3e%3cpath d='M510 286.81 L510 338.815' stroke-width='26.25' stroke='rgba(26%2c 115%2c 232%2c 0.04)'%3e%3c/path%3e%3cpath d='M545 37.465 L545 273.715' stroke-width='26.25' stroke='rgba(26%2c 115%2c 232%2c 0.04)'%3e%3c/path%3e%3cpath d='M545 313.09 L545 522.535' stroke-width='26.25' stroke='rgba(26%2c 115%2c 232%2c 0.04)'%3e%3c/path%3e%3cpath d='M580 249.905 L580 310.095' stroke-width='26.25' stroke='rgba(85%2c 73%2c 241%2c 0.05)'%3e%3c/path%3e%3cpath d='M615 125.085 L615 256.335' stroke-width='26.25' stroke='rgba(26%2c 115%2c 232%2c 0.04)'%3e%3c/path%3e%3cpath d='M615 295.71 L615 348.21' stroke-width='26.25' stroke='rgba(85%2c 73%2c 241%2c 0.05)'%3e%3c/path%3e%3cpath d='M615 387.585 L615 434.915' stroke-width='26.25' stroke='rgba(85%2c 73%2c 241%2c 0.05)'%3e%3c/path%3e%3cpath d='M650 43.055 L650 384.305' stroke-width='26.25' stroke='rgba(85%2c 73%2c 241%2c 0.05)'%3e%3c/path%3e%3cpath d='M650 423.68 L650 449.93' stroke-width='26.25' stroke='rgba(85%2c 73%2c 241%2c 0.05)'%3e%3c/path%3e%3cpath d='M650 489.305 L650 516.945' stroke-width='26.25' stroke='rgba(85%2c 73%2c 241%2c 0.05)'%3e%3c/path%3e%3cpath d='M685 104.915 L685 367.415' stroke-width='26.25' stroke='rgba(85%2c 73%2c 241%2c 0.05)'%3e%3c/path%3e%3cpath d='M685 406.79 L685 455.085' stroke-width='26.25' stroke='rgba(85%2c 73%2c 241%2c 0.05)'%3e%3c/path%3e%3cpath d='M720 176.725 L720 229.225' stroke-width='26.25' stroke='rgba(85%2c 73%2c 241%2c 0.05)'%3e%3c/path%3e%3cpath d='M720 268.6 L720 383.275' stroke-width='26.25' stroke='rgba(85%2c 73%2c 241%2c 0.05)'%3e%3c/path%3e%3cpath d='M755 156.535 L755 314.03499999999997' stroke-width='26.25' stroke='rgba(26%2c 115%2c 232%2c 0.04)'%3e%3c/path%3e%3cpath d='M755 353.40999999999997 L755 403.475' stroke-width='26.25' stroke='rgba(85%2c 73%2c 241%2c 0.05)'%3e%3c/path%3e%3cpath d='M790 24.775 L790 156.025' stroke-width='26.25' stroke='rgba(85%2c 73%2c 241%2c 0.05)'%3e%3c/path%3e%3cpath d='M790 195.4 L790 535.225' stroke-width='26.25' stroke='rgba(85%2c 73%2c 241%2c 0.05)'%3e%3c/path%3e%3cpath d='M825 154.655 L825 259.655' stroke-width='26.25' stroke='rgba(26%2c 115%2c 232%2c 0.04)'%3e%3c/path%3e%3cpath d='M825 299.03 L825 405.345' stroke-width='26.25' stroke='rgba(85%2c 73%2c 241%2c 0.05)'%3e%3c/path%3e%3cpath d='M860 257.125 L860 302.875' stroke-width='26.25' stroke='rgba(85%2c 73%2c 241%2c 0.05)'%3e%3c/path%3e%3cpath d='M895 81.295 L895 317.545' stroke-width='26.25' stroke='rgba(26%2c 115%2c 232%2c 0.04)'%3e%3c/path%3e%3cpath d='M895 356.92 L895 478.705' stroke-width='26.25' stroke='rgba(26%2c 115%2c 232%2c 0.04)'%3e%3c/path%3e%3cpath d='M930 93.275 L930 329.525' stroke-width='26.25' stroke='rgba(85%2c 73%2c 241%2c 0.05)'%3e%3c/path%3e%3cpath d='M930 368.9 L930 466.735' stroke-width='26.25' stroke='rgba(85%2c 73%2c 241%2c 0.05)'%3e%3c/path%3e%3cpath d='M965 82.655 L965 240.155' stroke-width='26.25' stroke='rgba(26%2c 115%2c 232%2c 0.04)'%3e%3c/path%3e%3cpath d='M965 279.53 L965 477.355' stroke-width='26.25' stroke='rgba(26%2c 115%2c 232%2c 0.04)'%3e%3c/path%3e%3cpath d='M1000 81.585 L1000 239.08499999999998' stroke-width='26.25' stroke='rgba(85%2c 73%2c 241%2c 0.05)'%3e%3c/path%3e%3cpath d='M1000 278.46 L1000 330.96' stroke-width='26.25' stroke='rgba(26%2c 115%2c 232%2c 0.04)'%3e%3c/path%3e%3cpath d='M1000 370.335 L1000 478.415' stroke-width='26.25' stroke='rgba(26%2c 115%2c 232%2c 0.04)'%3e%3c/path%3e%3cpath d='M1035 217.045 L1035 243.295' stroke-width='26.25' stroke='rgba(85%2c 73%2c 241%2c 0.05)'%3e%3c/path%3e%3cpath d='M1035 282.66999999999996 L1035 342.955' stroke-width='26.25' stroke='rgba(85%2c 73%2c 241%2c 0.05)'%3e%3c/path%3e%3cpath d='M1070 199.815 L1070 252.315' stroke-width='26.25' stroke='rgba(85%2c 73%2c 241%2c 0.05)'%3e%3c/path%3e%3cpath d='M1070 291.69 L1070 360.185' stroke-width='26.25' stroke='rgba(26%2c 115%2c 232%2c 0.04)'%3e%3c/path%3e%3cpath d='M1105 154.285 L1105 180.535' stroke-width='26.25' stroke='rgba(26%2c 115%2c 232%2c 0.04)'%3e%3c/path%3e%3cpath d='M1105 219.91 L1105 405.715' stroke-width='26.25' stroke='rgba(85%2c 73%2c 241%2c 0.05)'%3e%3c/path%3e%3cpath d='M1140 221.185 L1140 247.435' stroke-width='26.25' stroke='rgba(26%2c 115%2c 232%2c 0.04)'%3e%3c/path%3e%3cpath d='M1140 286.81 L1140 338.815' stroke-width='26.25' stroke='rgba(85%2c 73%2c 241%2c 0.05)'%3e%3c/path%3e%3cpath d='M1175 236.115 L1175 323.885' stroke-width='26.25' stroke='rgba(26%2c 115%2c 232%2c 0.04)'%3e%3c/path%3e%3cpath d='M1210 102.865 L1210 207.865' stroke-width='26.25' stroke='rgba(26%2c 115%2c 232%2c 0.04)'%3e%3c/path%3e%3cpath d='M1210 247.24 L1210 325.99' stroke-width='26.25' stroke='rgba(26%2c 115%2c 232%2c 0.04)'%3e%3c/path%3e%3cpath d='M1210 365.365 L1210 457.135' stroke-width='26.25' stroke='rgba(26%2c 115%2c 232%2c 0.04)'%3e%3c/path%3e%3cpath d='M1245 225.715 L1245 251.965' stroke-width='26.25' stroke='rgba(85%2c 73%2c 241%2c 0.05)'%3e%3c/path%3e%3cpath d='M1245 291.34000000000003 L1245 334.285' stroke-width='26.25' stroke='rgba(85%2c 73%2c 241%2c 0.05)'%3e%3c/path%3e%3cpath d='M1280 87.875 L1280 472.125' stroke-width='26.25' stroke='rgba(85%2c 73%2c 241%2c 0.05)'%3e%3c/path%3e%3cpath d='M1315 115.855 L1315 247.10500000000002' stroke-width='26.25' stroke='rgba(85%2c 73%2c 241%2c 0.05)'%3e%3c/path%3e%3cpath d='M1315 286.48 L1315 365.23' stroke-width='26.25' stroke='rgba(26%2c 115%2c 232%2c 0.04)'%3e%3c/path%3e%3cpath d='M1315 404.605 L1315 444.145' stroke-width='26.25' stroke='rgba(85%2c 73%2c 241%2c 0.05)'%3e%3c/path%3e%3cpath d='M1350 56.835 L1350 161.835' stroke-width='26.25' stroke='rgba(26%2c 115%2c 232%2c 0.04)'%3e%3c/path%3e%3cpath d='M1350 201.21 L1350 503.16499999999996' stroke-width='26.25' stroke='rgba(26%2c 115%2c 232%2c 0.04)'%3e%3c/path%3e%3cpath d='M1385 204.125 L1385 355.875' stroke-width='26.25' stroke='rgba(26%2c 115%2c 232%2c 0.04)'%3e%3c/path%3e%3cpath d='M1420 170.845 L1420 223.345' stroke-width='26.25' stroke='rgba(26%2c 115%2c 232%2c 0.04)'%3e%3c/path%3e%3cpath d='M1420 262.72 L1420 315.22' stroke-width='26.25' stroke='rgba(85%2c 73%2c 241%2c 0.05)'%3e%3c/path%3e%3cpath d='M1420 354.595 L1420 389.155' stroke-width='26.25' stroke='rgba(85%2c 73%2c 241%2c 0.05)'%3e%3c/path%3e%3c/g%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask4310'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3clinearGradient x1='100%25' y1='50%25' x2='0%25' y2='50%25' gradientUnits='userSpaceOnUse' id='SvgjsLinearGradient4311'%3e%3cstop stop-color='rgba(246%2c 249%2c 254%2c 1)' offset='0'%3e%3c/stop%3e%3cstop stop-color='rgba(237%2c 241%2c 253%2c 1)' offset='1'%3e%3c/stop%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e")`,
		aboutSectionImage: "",
	},
};