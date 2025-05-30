// Datos completos de ventas de zapatos
const salesData = `id_venta,id_cliente,nombre_cliente,id_producto,nombre_producto,marca,talla,cantidad_vendida,fecha_venta,ingreso_total
1,101,Juan Pérez,201,Nike Air Max,Nike,42,2,2025-01-15,320
2,102,Maria Gómez,202,Adidas Ultraboost,Adidas,38,1,2025-01-16,180
3,103,Carlos Díaz,203,Puma RS-X,Puma,40,3,2025-02-01,450
4,104,Ana Torres,204,Reebok Classic,Reebok,39,2,2025-02-15,260
5,105,José Fernández,205,New Balance 574,New Balance,41,1,2025-03-05,130
6,106,Laura Medina,206,Converse Chuck Taylor,Converse,37,2,2025-03-18,160
7,107,Roberto Sánchez,207,Vans Old Skool,Vans,42,4,2025-03-25,240
8,108,Elena Ríos,208,Jordan Retro 1,Jordan,40,1,2025-04-02,210
9,109,Andrés Núñez,209,Asics Gel-Kayano,Asics,41,3,2025-04-10,390
10,110,Patricia Castro,210,Under Armour HOVR,Under Armour,39,2,2025-04-18,260
11,111,Fernando Luján,211,Skechers Go Run,Skechers,40,2,2025-04-20,200
12,138,Luisa Salas,203,Nike Air Max,Nike,38,3,2025-01-04,398.28
13,123,Elena Ríos,209,Converse Chuck Taylor,Converse,42,3,2025-01-18,479.57
14,115,David Peralta,210,Asics Gel-Kayano,Asics,37,1,2025-01-27,90.12
15,101,Carlos Díaz,203,Reebok Classic,Reebok,39,2,2025-03-31,253.12
16,117,Andrés Núñez,205,Under Armour HOVR,Under Armour,44,2,2025-04-04,201.7
17,101,Brenda León,209,Adidas Ultraboost,Adidas,37,3,2025-01-17,508.78
18,141,José Fernández,208,Under Armour HOVR,Under Armour,38,1,2025-02-19,158.67
19,126,Rosa Ramírez,203,Puma RS-X,Puma,38,4,2025-04-19,359.87
20,150,Luisa Salas,206,Reebok Classic,Reebok,37,3,2025-03-13,324.3
21,150,Elena Ríos,208,Jordan Retro 1,Jordan,41,4,2025-03-03,527.22
22,120,Diana Cueva,210,Puma RS-X,Puma,38,2,2025-01-06,287.67
23,133,Diana Cueva,202,Nike Air Max,Nike,41,3,2025-04-15,369.61
24,106,Fernando Luján,208,Puma RS-X,Puma,39,2,2025-03-24,244.94
25,141,Brenda León,204,Converse Chuck Taylor,Converse,41,3,2025-03-25,453.38
26,112,Marco Acuña,204,Nike Air Max,Nike,37,4,2025-04-09,709.87
27,130,David Peralta,210,Vans Old Skool,Vans,40,2,2025-03-09,224.63
28,131,Maria Gómez,201,Skechers Go Run,Skechers,36,1,2025-03-09,176.62
29,126,Luisa Salas,207,Vans Old Skool,Vans,42,2,2025-02-17,334.45
30,132,Luis Moreno,203,Adidas Ultraboost,Adidas,36,4,2025-01-03,444.48
31,110,Roberto Sánchez,209,Puma RS-X,Puma,41,1,2025-01-05,145.77
32,146,Juan Pérez,206,Under Armour HOVR,Under Armour,40,3,2025-01-09,398.67
33,108,Rosa Ramírez,201,Jordan Retro 1,Jordan,36,3,2025-01-23,496.56
34,135,Marco Acuña,205,Adidas Ultraboost,Adidas,43,1,2025-04-07,127.89
35,118,José Fernández,208,Nike Air Max,Nike,36,1,2025-04-16,108.82
36,106,Carlos Díaz,211,Asics Gel-Kayano,Asics,37,3,2025-03-25,398.7
37,142,Andrés Núñez,201,Jordan Retro 1,Jordan,43,4,2025-01-19,359.53
38,113,Carlos Díaz,211,Vans Old Skool,Vans,44,1,2025-04-11,130.71
39,108,José Fernández,211,Skechers Go Run,Skechers,40,1,2025-04-07,118.93
40,121,Patricia Castro,209,Skechers Go Run,Skechers,41,4,2025-01-10,520.42
41,110,Maria Gómez,205,New Balance 574,New Balance,37,3,2025-03-26,307.02
42,120,Diana Cueva,207,Nike Air Max,Nike,42,2,2025-02-15,330.18
43,128,Marco Acuña,209,Vans Old Skool,Vans,41,1,2025-04-03,94.94
44,135,Fernando Luján,209,Vans Old Skool,Vans,38,1,2025-02-15,117.83
45,107,José Fernández,201,Adidas Ultraboost,Adidas,42,2,2025-02-15,223.88
46,116,Iván Rivas,207,Reebok Classic,Reebok,41,1,2025-04-20,160.75
47,132,Iván Rivas,210,Asics Gel-Kayano,Asics,41,4,2025-03-20,597.58
48,111,Roberto Sánchez,203,Vans Old Skool,Vans,37,4,2025-03-01,462.6
49,117,Luis Moreno,206,New Balance 574,New Balance,41,1,2025-01-07,138.94
50,127,Andrés Núñez,207,Vans Old Skool,Vans,44,3,2025-04-30,504.89
51,113,Iván Rivas,208,Jordan Retro 1,Jordan,37,2,2025-01-08,344.97
52,148,Luisa Salas,203,Reebok Classic,Reebok,44,1,2025-04-26,144.28
53,108,Patricia Castro,203,Puma RS-X,Puma,41,1,2025-04-06,90.34
54,127,Fernando Luján,210,Nike Air Max,Nike,36,2,2025-01-26,320.4
55,102,Luisa Salas,208,Skechers Go Run,Skechers,41,4,2025-03-25,322.68
56,119,Marco Acuña,204,Jordan Retro 1,Jordan,43,3,2025-02-10,308.43
57,134,Rosa Ramírez,203,Asics Gel-Kayano,Asics,42,3,2025-01-02,290.6
58,112,Ana Torres,208,Converse Chuck Taylor,Converse,39,4,2025-03-25,658.89
59,135,Fernando Luján,209,Converse Chuck Taylor,Converse,41,3,2025-01-29,295.4
60,138,Roberto Sánchez,210,Under Armour HOVR,Under Armour,38,1,2025-02-16,109.48
61,147,Diana Cueva,208,Vans Old Skool,Vans,39,3,2025-03-23,323.25
62,121,David Peralta,205,Nike Air Max,Nike,38,2,2025-03-11,304.33
63,112,Juan Pérez,201,Nike Air Max,Nike,36,4,2025-01-29,374.3
64,129,Juan Pérez,206,Puma RS-X,Puma,36,2,2025-03-30,314.42
65,109,Ana Torres,204,Skechers Go Run,Skechers,39,1,2025-04-02,134.88
66,140,Marco Acuña,203,Reebok Classic,Reebok,44,3,2025-04-13,397.1
67,136,Luis Moreno,208,Under Armour HOVR,Under Armour,38,1,2025-03-13,101.07
68,101,Juan Pérez,203,Adidas Ultraboost,Adidas,37,2,2025-03-27,307.64
69,130,Fernando Luján,201,Reebok Classic,Reebok,41,3,2025-03-06,485.74
70,134,Patricia Castro,203,Converse Chuck Taylor,Converse,36,4,2025-03-10,648.63
71,122,Ana Torres,204,Vans Old Skool,Vans,41,1,2025-02-18,132.52
72,113,Elena Ríos,211,New Balance 574,New Balance,37,4,2025-04-16,368.01
73,143,Elena Ríos,209,New Balance 574,New Balance,37,4,2025-03-12,532.9
74,118,Maria Gómez,209,New Balance 574,New Balance,42,2,2025-04-28,313.49
75,150,Iván Rivas,203,Asics Gel-Kayano,Asics,44,1,2025-01-12,116.37
76,148,Brenda León,202,Skechers Go Run,Skechers,38,2,2025-02-01,259.83
77,137,Elena Ríos,204,Nike Air Max,Nike,36,3,2025-01-20,281.85
78,107,Marco Acuña,201,Reebok Classic,Reebok,37,1,2025-04-11,98.67
79,143,David Peralta,211,Under Armour HOVR,Under Armour,41,3,2025-01-16,507.33
80,131,Iván Rivas,206,Nike Air Max,Nike,36,1,2025-04-14,166.77
81,111,Carlos Díaz,203,Nike Air Max,Nike,41,3,2025-01-13,315.62
82,149,Rosa Ramírez,207,Asics Gel-Kayano,Asics,38,3,2025-01-17,465.9
83,132,Fernando Luján,202,Adidas Ultraboost,Adidas,36,3,2025-02-09,250.48
84,104,Luis Moreno,202,Converse Chuck Taylor,Converse,37,2,2025-02-24,175.42
85,121,Fernando Luján,210,Asics Gel-Kayano,Asics,44,3,2025-01-17,392.68
86,120,Rosa Ramírez,206,Vans Old Skool,Vans,42,4,2025-01-01,341.45
87,123,Carlos Díaz,205,Adidas Ultraboost,Adidas,42,3,2025-03-10,473.48
88,135,Patricia Castro,202,Converse Chuck Taylor,Converse,44,3,2025-04-19,458.87
89,111,Luisa Salas,207,Jordan Retro 1,Jordan,37,4,2025-04-13,684.85
90,104,Andrés Núñez,202,Reebok Classic,Reebok,44,2,2025-04-06,179.31
91,119,Fernando Luján,209,Jordan Retro 1,Jordan,36,3,2025-02-10,486.17
92,130,Luisa Salas,204,Converse Chuck Taylor,Converse,41,1,2025-03-25,174.37
93,104,David Peralta,204,Jordan Retro 1,Jordan,39,4,2025-02-04,655.78
94,111,Rosa Ramírez,205,Reebok Classic,Reebok,43,4,2025-02-03,604.7
95,118,Brenda León,203,Nike Air Max,Nike,38,2,2025-03-20,259.17
96,114,Carlos Díaz,202,Puma RS-X,Puma,41,4,2025-01-30,702.47
97,125,Diana Cueva,206,Asics Gel-Kayano,Asics,37,3,2025-04-12,327.72
98,117,Rosa Ramírez,209,Reebok Classic,Reebok,42,1,2025-01-01,110.57
99,139,Rosa Ramírez,208,New Balance 574,New Balance,43,1,2025-03-15,157.8
100,122,Andrés Núñez,206,Jordan Retro 1,Jordan,39,1,2025-04-25,154.9
101,129,Juan Pérez,207,Vans Old Skool,Vans,41,3,2025-01-15,278.04
102,141,José Fernández,207,Vans Old Skool,Vans,38,3,2025-01-27,483.79
103,126,Rosa Ramírez,202,Adidas Ultraboost,Adidas,39,2,2025-01-06,326.39
104,146,Juan Pérez,209,Asics Gel-Kayano,Asics,40,3,2025-01-30,323.71
105,133,Diana Cueva,208,Jordan Retro 1,Jordan,40,3,2025-01-05,362.07
106,142,Andrés Núñez,204,Reebok Classic,Reebok,41,2,2025-01-16,237.64
107,135,Marco Acuña,201,Nike Air Max,Nike,39,3,2025-01-21,333.28
108,118,José Fernández,210,Under Armour HOVR,Under Armour,41,3,2025-01-23,534.72
109,130,David Peralta,207,Vans Old Skool,Vans,38,3,2025-01-08,203.85
110,149,Rosa Ramírez,201,Nike Air Max,Nike,36,1,2025-01-02,154.94
111,106,Laura Medina,211,Skechers Go Run,Skechers,40,2,2025-01-20,214.95
112,107,Roberto Sánchez,210,Under Armour HOVR,Under Armour,38,3,2025-01-30,345.29
113,148,Luisa Salas,211,Skechers Go Run,Skechers,42,1,2025-01-05,146.14
114,148,Luisa Salas,211,Skechers Go Run,Skechers,41,3,2025-01-29,290.58
115,131,Maria Gómez,209,Asics Gel-Kayano,Asics,37,4,2025-01-24,339.32
116,138,Luisa Salas,201,Nike Air Max,Nike,42,1,2025-01-17,138.23
117,142,Andrés Núñez,210,Under Armour HOVR,Under Armour,37,2,2025-01-26,316.47
118,128,Marco Acuña,208,Jordan Retro 1,Jordan,38,1,2025-01-14,96.26
119,112,Marco Acuña,210,Under Armour HOVR,Under Armour,42,1,2025-01-10,96.48
120,143,Elena Ríos,209,Asics Gel-Kayano,Asics,43,2,2025-01-05,231.46
121,125,Diana Cueva,204,Reebok Classic,Reebok,39,3,2025-02-13,343.54
122,140,Marco Acuña,201,Nike Air Max,Nike,43,3,2025-02-13,453.08
123,125,Diana Cueva,206,Converse Chuck Taylor,Converse,38,2,2025-02-21,216.76
124,121,Patricia Castro,201,Nike Air Max,Nike,43,5,2025-02-28,1269.40
125,147,Diana Cueva,201,Nike Air Max,Nike,42,6,2025-02-11,929.30
126,148,Luisa Salas,208,Jordan Retro 1,Jordan,44,4,2025-02-28,358.59
127,111,Fernando Luján,201,Nike Air Max,Nike,41,3,2025-02-03,315.45
128,113,Carlos Díaz,210,Under Armour HOVR,Under Armour,41,2,2025-02-11,280.87
129,123,Elena Ríos,201,Nike Air Max,Nike,42,3,2025-02-03,425.29
130,117,Andrés Núñez,210,Under Armour HOVR,Under Armour,44,4,2025-02-03,458.20
131,148,Luisa Salas,209,Asics Gel-Kayano,Asics,40,3,2025-02-24,622.74
132,106,Laura Medina,202,Adidas Ultraboost,Adidas,38,3,2025-02-19,578.39
133,142,Andrés Núñez,211,Skechers Go Run,Skechers,42,1,2025-02-14,137.23
134,122,Ana Torres,201,Nike Air Max,Nike,43,4,2025-02-22,263.51
135,106,Laura Medina,210,Under Armour HOVR,Under Armour,42,2,2025-02-19,162.52
136,118,José Fernández,208,Jordan Retro 1,Jordan,41,3,2025-02-26,496.10
137,136,Luis Moreno,210,Under Armour HOVR,Under Armour,42,1,2025-03-31,101.54
138,119,Marco Acuña,210,Under Armour HOVR,Under Armour,40,2,2025-03-17,249.46
139,111,Fernando Luján,211,Skechers Go Run,Skechers,41,4,2025-03-20,420.49
140,104,Ana Torres,205,New Balance 574,New Balance,44,3,2025-03-22,291.09
141,135,Marco Acuña,211,Skechers Go Run,Skechers,41,2,2025-03-19,308.07
142,114,Carlos Díaz,208,Jordan Retro 1,Jordan,41,3,2025-03-11,323.73
143,136,Luis Moreno,211,Skechers Go Run,Skechers,44,1,2025-03-16,141.95
144,146,Juan Pérez,209,Asics Gel-Kayano,Asics,39,3,2025-03-07,311.84
145,114,Carlos Díaz,211,Skechers Go Run,Skechers,42,1,2025-03-09,187.82
146,114,Carlos Díaz,203,Puma RS-X,Puma,39,4,2025-03-09,327.57
147,134,Rosa Ramírez,207,Vans Old Skool,Vans,43,2,2025-03-05,221.61
148,137,Elena Ríos,211,Skechers Go Run,Skechers,38,4,2025-03-12,353.21
149,150,Luisa Salas,209,Asics Gel-Kayano,Asics,42,2,2025-03-17,192.29
150,127,Andrés Núñez,201,Nike Air Max,Nike,42,4,2025-03-05,390.90
151,112,Marco Acuña,208,Jordan Retro 1,Jordan,38,2,2025-03-22,205.97
152,112,Marco Acuña,209,Asics Gel-Kayano,Asics,39,3,2025-03-18,517.73
153,131,Maria Gómez,205,New Balance 574,New Balance,41,2,2025-03-26,321.54
154,103,Carlos Díaz,202,Adidas Ultraboost,Adidas,38,1,2025-03-22,139.27
155,106,Laura Medina,204,Reebok Classic,Reebok,42,3,2025-03-05,241.80
156,107,Roberto Sánchez,211,Skechers Go Run,Skechers,39,4,2025-03-17,533.91
157,112,Marco Acuña,210,Under Armour HOVR,Under Armour,44,2,2025-03-14,261.76
158,137,Elena Ríos,201,Nike Air Max,Nike,36,1,2025-04-27,197.09
159,140,Marco Acuña,209,Asics Gel-Kayano,Asics,38,4,2025-04-12,614.80
160,141,José Fernández,211,Skechers Go Run,Skechers,42,2,2025-04-27,314.23
161,128,Marco Acuña,211,Skechers Go Run,Skechers,40,3,2025-04-30,449.70
162,116,Iván Rivas,210,Under Armour HOVR,Under Armour,41,3,2025-04-10,675.68
163,133,Diana Cueva,211,Skechers Go Run,Skechers,43,3,2025-04-06,494.33
164,121,Patricia Castro,210,Under Armour HOVR,Under Armour,40,2,2025-04-03,230.52
165,127,Andrés Núñez,202,Adidas Ultraboost,Adidas,40,2,2025-04-10,377.11
166,140,Marco Acuña,210,Under Armour HOVR,Under Armour,42,4,2025-04-27,637.48
167,108,Elena Ríos,201,Nike Air Max,Nike,42,2,2025-04-29,425.72
168,132,Luis Moreno,208,Jordan Retro 1,Jordan,39,2,2025-04-21,286.84
169,114,Carlos Díaz,209,Asics Gel-Kayano,Asics,39,2,2025-04-12,373.87
170,131,Maria Gómez,202,Adidas Ultraboost,Adidas,39,1,2025-04-04,177.27
171,133,Diana Cueva,201,Nike Air Max,Nike,38,3,2025-04-04,448.34
172,137,Elena Ríos,208,Jordan Retro 1,Jordan,44,1,2025-04-21,99.58
173,135,Marco Acuña,201,Nike Air Max,Nike,40,2,2025-04-18,227.63
174,130,David Peralta,201,Nike Air Max,Nike,44,4,2025-04-23,478.77
175,127,Andrés Núñez,203,Puma RS-X,Puma,44,1,2025-04-28,117.27
176,101,Juan Pérez,202,Adidas Ultraboost,Adidas,41,1,2025-04-06,118.91
177,141,José Fernández,204,Reebok Classic,Reebok,43,1,2025-04-08,111.70
178,131,Maria Gómez,201,Nike Air Max,Nike,42,4,2025-04-28,362.70
179,110,Patricia Castro,207,Vans Old Skool,Vans,41,1,2025-04-02,161.27
180,148,Luisa Salas,208,Jordan Retro 1,Jordan,42,1,2025-04-17,193.45
181,125,Diana Cueva,209,Asics Gel-Kayano,Asics,41,2,2025-04-05,369.14
182,141,José Fernández,203,Puma RS-X,Puma,42,4,2025-04-05,369.88
183,146,Juan Pérez,207,Vans Old Skool,Vans,39,4,2025-04-04,655.39
184,107,Roberto Sánchez,201,Nike Air Max,Nike,44,2,2025-04-28,407.94
185,126,Rosa Ramírez,202,Adidas Ultraboost,Adidas,44,3,2025-04-16,502.39
186,134,Rosa Ramírez,208,Jordan Retro 1,Jordan,40,2,2025-04-24,325.42
187,121,Patricia Castro,202,Adidas Ultraboost,Adidas,38,4,2025-04-02,472.46
188,135,Marco Acuña,211,Skechers Go Run,Skechers,41,3,2025-04-30,358.85
189,140,Marco Acuña,201,Nike Air Max,Nike,39,4,2025-04-15,470.13
190,135,Marco Acuña,204,Reebok Classic,Reebok,38,3,2025-05-18,342.39
191,127,Andrés Núñez,209,Asics Gel-Kayano,Asics,43,1,2025-05-11,128.57
192,125,Diana Cueva,207,Vans Old Skool,Vans,37,2,2025-05-13,247.22
193,148,Luisa Salas,202,Adidas Ultraboost,Adidas,41,2,2025-05-16,570.33
194,122,Ana Torres,202,Adidas Ultraboost,Adidas,38,3,2025-05-31,328.24
195,118,José Fernández,208,Jordan Retro 1,Jordan,42,4,2025-05-09,449.36
196,141,José Fernández,207,Vans Old Skool,Vans,44,2,2025-05-20,381.68
197,104,Ana Torres,208,Jordan Retro 1,Jordan,39,2,2025-05-26,247.75
198,133,Diana Cueva,203,Puma RS-X,Puma,36,1,2025-05-19,143.01
199,142,Andrés Núñez,202,Adidas Ultraboost,Adidas,40,2,2025-05-31,158.85
200,111,Fernando Luján,211,Skechers Go Run,Skechers,44,1,2025-05-23,180.64
201,114,Carlos Díaz,205,New Balance 574,New Balance,39,1,2025-05-28,174.38
202,116,Iván Rivas,201,Nike Air Max,Nike,39,2,2025-05-05,206.82
203,105,José Fernández,202,Adidas Ultraboost,Adidas,42,5,2025-05-04,331.40
204,141,José Fernández,201,Nike Air Max,Nike,38,3,2025-05-17,356.38
205,139,Rosa Ramírez,201,Nike Air Max,Nike,43,1,2025-05-31,172.44
206,101,Juan Pérez,201,Nike Air Max,Nike,38,2,2025-05-01,363.50
207,147,Diana Cueva,208,Jordan Retro 1,Jordan,38,1,2025-05-28,94.66
208,150,Luisa Salas,202,Adidas Ultraboost,Adidas,41,6,2025-05-04,946.02
209,122,Ana Torres,203,Puma RS-X,Puma,41,4,2025-05-05,535.46
210,133,Diana Cueva,202,Adidas Ultraboost,Adidas,39,2,2025-05-30,531.99
211,127,Andrés Núñez,206,Converse Chuck Taylor,Converse,38,1,2025-05-09,185.59
212,143,Elena Ríos,209,Asics Gel-Kayano,Asics,38,3,2025-05-04,452.41
213,107,Roberto Sánchez,202,Adidas Ultraboost,Adidas,43,4,2025-05-01,353.90
214,130,David Peralta,202,Adidas Ultraboost,Adidas,43,4,2025-05-07,457.47
215,140,Marco Acuña,201,Nike Air Max,Nike,37,3,2025-05-29,507.82
216,133,Diana Cueva,211,Skechers Go Run,Skechers,38,4,2025-05-02,552.56
217,136,Luis Moreno,205,New Balance 574,New Balance,36,3,2025-05-29,541.57
218,138,Luisa Salas,206,Converse Chuck Taylor,Converse,39,2,2025-05-06,303.44
219,142,Andrés Núñez,206,Converse Chuck Taylor,Converse,44,2,2025-05-06,350.24
220,121,Patricia Castro,210,Under Armour HOVR,Under Armour,41,3,2025-05-29,390.76
221,101,Juan Pérez,202,Adidas Ultraboost,Adidas,44,3,2025-05-16,316.68
222,120,Diana Cueva,205,New Balance 574,New Balance,41,1,2025-05-13,169.20
223,143,Elena Ríos,210,Under Armour HOVR,Under Armour,43,1,2025-05-09,161.21
224,122,Ana Torres,210,Under Armour HOVR,Under Armour,43,3,2025-05-15,292.70
225,140,Marco Acuña,201,Nike Air Max,Nike,42,4,2025-05-12,583.89
226,110,Patricia Castro,209,Asics Gel-Kayano,Asics,42,4,2025-05-20,741.36
227,110,Patricia Castro,211,Skechers Go Run,Skechers,42,1,2025-05-26,132.48
228,101,Juan Pérez,210,Under Armour HOVR,Under Armour,39,1,2025-06-18,119.81
229,102,Maria Gómez,202,Adidas Ultraboost,Adidas,40,3,2025-06-22,414.90
230,133,Diana Cueva,202,Adidas Ultraboost,Adidas,40,1,2025-06-02,201.82
231,126,Rosa Ramírez,209,Asics Gel-Kayano,Asics,39,1,2025-06-08,174.66
232,129,Juan Pérez,211,Skechers Go Run,Skechers,39,4,2025-06-17,808.43
233,133,Diana Cueva,211,Skechers Go Run,Skechers,41,3,2025-06-14,383.71
234,118,José Fernández,210,Under Armour HOVR,Under Armour,38,2,2025-06-20,293.34
235,141,José Fernández,207,Vans Old Skool,Vans,42,2,2025-06-09,269.79
236,130,David Peralta,209,Asics Gel-Kayano,Asics,43,3,2025-06-11,532.22
237,137,Elena Ríos,203,Puma RS-X,Puma,44,4,2025-06-16,422.99
238,122,Ana Torres,204,Reebok Classic,Reebok,42,4,2025-06-05,508.44
239,121,Patricia Castro,206,Converse Chuck Taylor,Converse,41,3,2025-06-17,493.75
240,139,Rosa Ramírez,205,New Balance 574,New Balance,41,3,2025-06-23,308.85
241,142,Andrés Núñez,206,Converse Chuck Taylor,Converse,39,3,2025-06-27,369.89
242,107,Roberto Sánchez,204,Reebok Classic,Reebok,42,1,2025-06-02,131.30
243,122,Ana Torres,202,Adidas Ultraboost,Adidas,40,1,2025-06-29,179.42
244,133,Diana Cueva,201,Nike Air Max,Nike,41,4,2025-06-20,662.05
245,150,Luisa Salas,209,Asics Gel-Kayano,Asics,41,4,2025-06-28,871.69
246,148,Luisa Salas,211,Skechers Go Run,Skechers,41,2,2025-06-07,252.63
247,143,Elena Ríos,205,New Balance 574,New Balance,42,1,2025-06-15,149.22
248,113,Carlos Díaz,209,Asics Gel-Kayano,Asics,41,1,2025-06-13,146.27
249,133,Diana Cueva,202,Adidas Ultraboost,Adidas,42,1,2025-06-08,161.77
250,141,José Fernández,204,Reebok Classic,Reebok,41,3,2025-06-18,556.86
251,107,Roberto Sánchez,201,Nike Air Max,Nike,37,3,2025-06-09,476.32
252,123,Elena Ríos,204,Reebok Classic,Reebok,39,3,2025-06-02,478.42
253,146,Juan Pérez,201,Nike Air Max,Nike,43,4,2025-06-21,685.26
254,127,Andrés Núñez,206,Converse Chuck Taylor,Converse,41,1,2025-06-24,150.15
255,150,Luisa Salas,201,Nike Air Max,Nike,40,2,2025-06-24,248.20
256,104,Ana Torres,209,Asics Gel-Kayano,Asics,39,1,2025-06-08,128.65
257,123,Elena Ríos,206,Converse Chuck Taylor,Converse,39,2,2025-07-03,335.38
258,107,Roberto Sánchez,207,Vans Old Skool,Vans,40,1,2025-07-23,103.87
259,105,José Fernández,205,New Balance 574,New Balance,42,3,2025-07-18,366.45
260,133,Diana Cueva,206,Converse Chuck Taylor,Converse,39,2,2025-07-26,134.75
261,137,Elena Ríos,207,Vans Old Skool,Vans,40,4,2025-07-02,692.17
262,107,Roberto Sánchez,206,Converse Chuck Taylor,Converse,36,5,2025-07-12,355.36
263,133,Diana Cueva,203,Puma RS-X,Puma,38,2,2025-07-21,342.10
264,116,Iván Rivas,204,Reebok Classic,Reebok,39,2,2025-07-16,328.29
265,103,Carlos Díaz,211,Skechers Go Run,Skechers,42,2,2025-07-01,208.18
266,118,José Fernández,209,Asics Gel-Kayano,Asics,36,2,2025-07-13,428.39
267,103,Carlos Díaz,201,Nike Air Max,Nike,38,1,2025-07-01,96.08
268,134,Rosa Ramírez,206,Converse Chuck Taylor,Converse,39,3,2025-07-08,272.21
269,128,Marco Acuña,207,Vans Old Skool,Vans,39,4,2025-07-17,476.63
270,109,Andrés Núñez,210,Under Armour HOVR,Under Armour,40,3,2025-07-08,433.61
271,136,Luis Moreno,208,Jordan Retro 1,Jordan,41,2,2025-07-17,241.87
272,120,Diana Cueva,203,Puma RS-X,Puma,41,4,2025-07-23,407.62
273,128,Marco Acuña,205,New Balance 574,New Balance,39,3,2025-07-26,430.09
274,136,Luis Moreno,205,New Balance 574,New Balance,41,3,2025-07-01,618.74
275,118,José Fernández,207,Vans Old Skool,Vans,38,3,2025-07-28,326.67
276,143,Elena Ríos,201,Nike Air Max,Nike,44,2,2025-07-30,215.14
277,141,José Fernández,208,Jordan Retro 1,Jordan,44,4,2025-07-04,535.96
278,127,Andrés Núñez,211,Skechers Go Run,Skechers,37,3,2025-07-03,527.65
279,117,Andrés Núñez,209,Asics Gel-Kayano,Asics,44,3,2025-07-04,323.11
280,135,Marco Acuña,211,Skechers Go Run,Skechers,42,3,2025-07-04,493.47
281,107,Roberto Sánchez,209,Asics Gel-Kayano,Asics,42,3,2025-07-22,471.38
282,133,Diana Cueva,201,Nike Air Max,Nike,41,4,2025-07-16,608.22
283,138,Luisa Salas,209,Asics Gel-Kayano,Asics,39,2,2025-07-09,283.49
284,103,Carlos Díaz,207,Vans Old Skool,Vans,36,4,2025-07-08,332.12
285,148,Luisa Salas,210,Under Armour HOVR,Under Armour,37,1,2025-08-11,137.62
286,103,Carlos Díaz,207,Vans Old Skool,Vans,38,1,2025-08-26,153.90
287,122,Ana Torres,211,Skechers Go Run,Skechers,42,2,2025-08-30,340.74
288,138,Luisa Salas,206,Converse Chuck Taylor,Converse,37,1,2025-08-06,142.77
289,132,Luis Moreno,203,Puma RS-X,Puma,39,1,2025-08-26,89.85
290,142,Andrés Núñez,206,Converse Chuck Taylor,Converse,42,2,2025-08-21,183.34
291,112,Marco Acuña,206,Converse Chuck Taylor,Converse,36,1,2025-08-08,194.50
292,110,Patricia Castro,210,Under Armour HOVR,Under Armour,43,2,2025-08-21,413.06
293,125,Diana Cueva,210,Under Armour HOVR,Under Armour,41,4,2025-08-22,555.73
294,141,José Fernández,205,New Balance 574,New Balance,42,3,2025-08-15,537.95
295,137,Elena Ríos,203,Puma RS-X,Puma,40,3,2025-08-30,320.73
296,126,Rosa Ramírez,204,Reebok Classic,Reebok,37,2,2025-08-05,241.01
297,105,José Fernández,210,Under Armour HOVR,Under Armour,44,4,2025-08-27,449.41
298,150,Luisa Salas,204,Reebok Classic,Reebok,43,4,2025-08-24,570.84
299,143,Elena Ríos,207,Vans Old Skool,Vans,38,1,2025-08-03,120.05
300,149,Rosa Ramírez,208,Jordan Retro 1,Jordan,36,3,2025-08-02,563.62
301,139,Rosa Ramírez,211,Skechers Go Run,Skechers,42,4,2025-08-17,705.85
302,150,Luisa Salas,203,Puma RS-X,Puma,39,2,2025-08-19,318.52
303,115,David Peralta,206,Converse Chuck Taylor,Converse,38,3,2025-08-17,538.84
304,132,Luis Moreno,207,Vans Old Skool,Vans,43,4,2025-08-24,367.80
305,111,Fernando Luján,204,Reebok Classic,Reebok,38,2,2025-08-05,337.04
306,143,Elena Ríos,205,New Balance 574,New Balance,39,3,2025-08-06,440.54
307,149,Rosa Ramírez,205,New Balance 574,New Balance,44,1,2025-08-12,212.31
308,103,Carlos Díaz,205,New Balance 574,New Balance,41,2,2025-08-17,293.20
309,125,Diana Cueva,205,New Balance 574,New Balance,36,3,2025-08-28,557.65
310,141,José Fernández,205,New Balance 574,New Balance,43,1,2025-08-20,115.54
311,103,Carlos Díaz,201,Nike Air Max,Nike,40,4,2025-08-21,439.65
312,149,Rosa Ramírez,202,Adidas Ultraboost,Adidas,43,4,2025-08-01,485.80
313,142,Andrés Núñez,206,Converse Chuck Taylor,Converse,38,2,2025-08-09,358.41
314,149,Rosa Ramírez,205,New Balance 574,New Balance,42,2,2025-08-04,317.90
315,105,José Fernández,208,Jordan Retro 1,Jordan,38,6,2025-09-26,519.74
316,136,Luis Moreno,205,New Balance 574,New Balance,42,1,2025-09-21,183.64
317,134,Rosa Ramírez,208,Jordan Retro 1,Jordan,39,5,2025-09-06,694.67
318,116,Iván Rivas,208,Jordan Retro 1,Jordan,42,4,2025-09-28,330.19
319,127,Andrés Núñez,201,Nike Air Max,Nike,38,2,2025-09-07,241.52
320,146,Juan Pérez,206,Converse Chuck Taylor,Converse,40,2,2025-09-29,386.59
321,113,Carlos Díaz,208,Jordan Retro 1,Jordan,43,3,2025-09-23,309.51
322,141,José Fernández,202,Adidas Ultraboost,Adidas,41,3,2025-09-21,267.19
323,140,Marco Acuña,201,Nike Air Max,Nike,40,1,2025-09-06,108.88
324,113,Carlos Díaz,209,Asics Gel-Kayano,Asics,42,3,2025-09-18,583.77
325,128,Marco Acuña,208,Jordan Retro 1,Jordan,41,2,2025-09-18,169.92
326,107,Roberto Sánchez,203,Puma RS-X,Puma,38,1,2025-09-15,184.26
327,120,Diana Cueva,208,Jordan Retro 1,Jordan,42,3,2025-09-07,417.61
328,113,Carlos Díaz,202,Adidas Ultraboost,Adidas,39,1,2025-09-01,193.08
329,119,Marco Acuña,210,Under Armour HOVR,Under Armour,42,4,2025-09-02,687.17
330,108,Elena Ríos,209,Asics Gel-Kayano,Asics,39,3,2025-09-28,292.28
331,139,Rosa Ramírez,207,Vans Old Skool,Vans,42,3,2025-09-05,259.58
332,116,Iván Rivas,206,Converse Chuck Taylor,Converse,41,4,2025-09-24,556.14
333,111,Fernando Luján,207,Vans Old Skool,Vans,40,1,2025-09-16,153.10
334,118,José Fernández,201,Nike Air Max,Nike,42,1,2025-09-07,102.00
335,150,Luisa Salas,211,Skechers Go Run,Skechers,44,1,2025-09-29,145.31
336,115,David Peralta,209,Asics Gel-Kayano,Asics,44,2,2025-09-19,276.46
337,147,Diana Cueva,206,Converse Chuck Taylor,Converse,43,2,2025-09-20,319.62
338,137,Elena Ríos,209,Asics Gel-Kayano,Asics,44,2,2025-09-11,327.83
339,109,Andrés Núñez,205,New Balance 574,New Balance,38,3,2025-09-04,432.91
340,107,Roberto Sánchez,205,New Balance 574,New Balance,40,4,2025-09-24,682.64
341,125,Diana Cueva,203,Puma RS-X,Puma,42,3,2025-09-08,356.63
342,108,Elena Ríos,208,Jordan Retro 1,Jordan,42,3,2025-09-28,229.70
343,131,Maria Gómez,210,Under Armour HOVR,Under Armour,41,3,2025-09-06,462.94
344,136,Luis Moreno,207,Vans Old Skool,Vans,39,3,2025-09-12,545.60
345,110,Patricia Castro,209,Asics Gel-Kayano,Asics,40,2,2025-09-21,307.62
346,107,Roberto Sánchez,202,Adidas Ultraboost,Adidas,38,4,2025-09-27,542.24
347,107,Roberto Sánchez,204,Reebok Classic,Reebok,39,4,2025-10-09,628.91
348,134,Rosa Ramírez,203,Puma RS-X,Puma,44,1,2025-10-04,182.05
349,107,Roberto Sánchez,204,Reebok Classic,Reebok,41,4,2025-10-26,646.27
350,136,Luis Moreno,202,Adidas Ultraboost,Adidas,40,1,2025-10-17,174.92
351,114,Carlos Díaz,201,Nike Air Max,Nike,41,1,2025-10-30,170.86
352,109,Andrés Núñez,207,Vans Old Skool,Vans,39,3,2025-10-24,319.76
353,140,Marco Acuña,205,New Balance 574,New Balance,44,2,2025-10-21,211.02
354,139,Rosa Ramírez,201,Nike Air Max,Nike,41,2,2025-10-18,402.01
355,121,Patricia Castro,208,Jordan Retro 1,Jordan,41,1,2025-10-16,107.10
356,114,Carlos Díaz,202,Adidas Ultraboost,Adidas,40,1,2025-10-01,99.46
357,110,Patricia Castro,203,Puma RS-X,Puma,39,3,2025-10-05,405.26
358,123,Elena Ríos,207,Vans Old Skool,Vans,39,4,2025-10-11,707.85
359,106,Laura Medina,209,Asics Gel-Kayano,Asics,38,1,2025-10-09,149.38
360,106,Laura Medina,201,Nike Air Max,Nike,39,4,2025-10-24,423.95
361,108,Elena Ríos,201,Nike Air Max,Nike,39,1,2025-10-23,96.37
362,140,Marco Acuña,207,Vans Old Skool,Vans,39,2,2025-10-21,277.94
363,127,Andrés Núñez,205,New Balance 574,New Balance,39,1,2025-10-24,138.81
364,146,Juan Pérez,207,Vans Old Skool,Vans,40,3,2025-10-18,334.85
365,112,Marco Acuña,206,Converse Chuck Taylor,Converse,44,3,2025-10-20,533.56
366,139,Rosa Ramírez,204,Reebok Classic,Reebok,38,1,2025-10-23,128.07
367,120,Diana Cueva,206,Converse Chuck Taylor,Converse,41,3,2025-10-19,345.00
368,128,Marco Acuña,206,Converse Chuck Taylor,Converse,44,4,2025-10-09,480.87
369,130,David Peralta,211,Skechers Go Run,Skechers,43,3,2025-10-18,231.75
370,119,Marco Acuña,210,Under Armour HOVR,Under Armour,43,1,2025-10-20,194.72
371,141,José Fernández,204,Reebok Classic,Reebok,42,3,2025-10-26,485.64
372,112,Marco Acuña,211,Skechers Go Run,Skechers,41,1,2025-10-05,145.52
373,110,Patricia Castro,206,Converse Chuck Taylor,Converse,41,3,2025-10-01,398.06
374,108,Elena Ríos,203,Puma RS-X,Puma,44,2,2025-10-31,272.91
375,114,Carlos Díaz,209,Asics Gel-Kayano,Asics,36,1,2025-10-25,85.60
376,117,Andrés Núñez,208,Jordan Retro 1,Jordan,40,1,2025-10-31,101.22
377,137,Elena Ríos,202,Adidas Ultraboost,Adidas,44,1,2025-10-24,76.15
378,142,Andrés Núñez,206,Converse Chuck Taylor,Converse,41,2,2025-10-26,259.80
379,111,Fernando Luján,211,Skechers Go Run,Skechers,42,4,2025-10-08,496.80
380,132,Luis Moreno,204,Reebok Classic,Reebok,39,4,2025-10-12,736.76
381,132,Luis Moreno,203,Puma RS-X,Puma,37,1,2025-10-23,204.45
382,134,Rosa Ramírez,208,Jordan Retro 1,Jordan,40,2,2025-10-14,339.09
383,104,Ana Torres,202,Adidas Ultraboost,Adidas,38,4,2025-10-19,753.48
384,135,Marco Acuña,205,New Balance 574,New Balance,36,4,2025-10-23,346.62
385,150,Luisa Salas,209,Asics Gel-Kayano,Asics,42,4,2025-10-26,797.74
386,105,José Fernández,203,Puma RS-X,Puma,39,4,2025-10-30,407.75
387,128,Marco Acuña,207,Vans Old Skool,Vans,36,3,2025-10-18,285.43
388,105,José Fernández,203,Puma RS-X,Puma,42,3,2025-11-18,324.86
389,136,Luis Moreno,207,Vans Old Skool,Vans,40,1,2025-11-13,88.33
390,133,Diana Cueva,207,Vans Old Skool,Vans,42,4,2025-11-15,650.60
391,109,Andrés Núñez,201,Nike Air Max,Nike,43,4,2025-11-19,366.59
392,106,Laura Medina,204,Reebok Classic,Reebok,38,1,2025-11-30,105.28
393,127,Andrés Núñez,205,New Balance 574,New Balance,39,3,2025-11-29,596.26
394,105,José Fernández,203,Puma RS-X,Puma,40,6,2025-11-04,337.49
395,133,Diana Cueva,211,Skechers Go Run,Skechers,44,3,2025-11-26,432.56
396,108,Elena Ríos,202,Adidas Ultraboost,Adidas,44,3,2025-11-03,488.85
397,141,José Fernández,206,Converse Chuck Taylor,Converse,38,4,2025-11-29,577.13
398,143,Elena Ríos,208,Jordan Retro 1,Jordan,39,4,2025-11-03,465.90
399,146,Juan Pérez,208,Jordan Retro 1,Jordan,42,3,2025-11-17,254.80
400,143,Elena Ríos,206,Converse Chuck Taylor,Converse,42,2,2025-11-26,273.69
401,148,Luisa Salas,203,Puma RS-X,Puma,40,2,2025-11-27,242.32
402,101,Juan Pérez,207,Vans Old Skool,Vans,42,2,2025-11-13,373.52
403,147,Diana Cueva,209,Asics Gel-Kayano,Asics,37,3,2025-11-05,336.16
404,136,Luis Moreno,204,Reebok Classic,Reebok,40,3,2025-11-22,352.64
405,107,Roberto Sánchez,203,Puma RS-X,Puma,40,6,2025-11-18,768.95
406,125,Diana Cueva,203,Puma RS-X,Puma,39,6,2025-11-05,919.74
407,109,Andrés Núñez,209,Asics Gel-Kayano,Asics,39,3,2025-11-09,441.42
408,111,Fernando Luján,203,Puma RS-X,Puma,36,4,2025-11-26,644.90
409,113,Carlos Díaz,205,New Balance 574,New Balance,38,4,2025-11-10,556.02
410,123,Elena Ríos,207,Vans Old Skool,Vans,39,3,2025-11-12,299.32
411,111,Fernando Luján,208,Jordan Retro 1,Jordan,38,3,2025-11-01,403.01
412,148,Luisa Salas,210,Under Armour HOVR,Under Armour,44,1,2025-11-25,109.23
413,130,David Peralta,203,Puma RS-X,Puma,37,5,2025-11-21,384.36
414,150,Luisa Salas,210,Under Armour HOVR,Under Armour,36,1,2025-11-18,133.66
415,109,Andrés Núñez,211,Skechers Go Run,Skechers,41,4,2025-11-17,613.29
416,109,Andrés Núñez,203,Puma RS-X,Puma,44,3,2025-11-06,315.33
417,134,Rosa Ramírez,202,Adidas Ultraboost,Adidas,41,1,2025-11-04,77.75
418,107,Roberto Sánchez,204,Reebok Classic,Reebok,40,2,2025-11-04,307.61
419,129,Juan Pérez,208,Jordan Retro 1,Jordan,43,1,2025-11-30,147.49
420,131,Maria Gómez,204,Reebok Classic,Reebok,43,3,2025-11-25,373.09
421,129,Juan Pérez,203,Puma RS-X,Puma,40,4,2025-11-28,551.91
422,141,José Fernández,207,Vans Old Skool,Vans,41,2,2025-11-10,250.88
423,115,David Peralta,201,Nike Air Max,Nike,38,4,2025-11-19,521.85
424,125,Diana Cueva,203,Puma RS-X,Puma,39,5,2025-11-29,758.58
425,140,Marco Acuña,203,Puma RS-X,Puma,42,2,2025-11-04,164.83
426,130,David Peralta,203,Puma RS-X,Puma,43,3,2025-11-19,218.65
427,146,Juan Pérez,211,Skechers Go Run,Skechers,43,3,2025-11-06,512.20
428,134,Rosa Ramírez,203,Puma RS-X,Puma,40,5,2025-11-12,660.73
429,149,Rosa Ramírez,203,Puma RS-X,Puma,41,6,2025-11-20,717.09
430,117,Andrés Núñez,203,Puma RS-X,Puma,42,2,2025-11-13,370.12
431,126,Rosa Ramírez,204,Reebok Classic,Reebok,39,4,2025-11-02,683.81
432,122,Ana Torres,209,Asics Gel-Kayano,Asics,43,4,2025-11-14,459.17
433,140,Marco Acuña,206,Converse Chuck Taylor,Converse,44,1,2025-11-12,158.16
434,115,David Peralta,203,Puma RS-X,Puma,38,5,2025-11-27,393.74
435,127,Andrés Núñez,203,Puma RS-X,Puma,38,2,2025-11-17,477.87
436,115,David Peralta,208,Jordan Retro 1,Jordan,43,1,2025-11-04,158.49
437,141,José Fernández,203,Puma RS-X,Puma,43,5,2025-11-17,1115.56
438,114,Carlos Díaz,210,Under Armour HOVR,Under Armour,40,2,2025-11-30,271.32
439,149,Rosa Ramírez,207,Vans Old Skool,Vans,40,3,2025-11-29,335.64
440,129,Juan Pérez,201,Nike Air Max,Nike,39,2,2025-11-10,333.38
441,136,Luis Moreno,207,Vans Old Skool,Vans,36,3,2025-12-13,190.58
442,139,Rosa Ramírez,207,Vans Old Skool,Vans,44,3,2025-12-06,291.37
443,118,José Fernández,211,Skechers Go Run,Skechers,41,2,2025-12-01,199.51
444,109,Andrés Núñez,211,Skechers Go Run,Skechers,44,1,2025-12-14,143.68
445,146,Juan Pérez,207,Vans Old Skool,Vans,40,2,2025-12-04,182.52
446,125,Diana Cueva,206,Converse Chuck Taylor,Converse,41,2,2025-12-24,341.03
447,116,Iván Rivas,204,Reebok Classic,Reebok,39,1,2025-12-23,178.23
448,149,Rosa Ramírez,207,Vans Old Skool,Vans,44,5,2025-12-28,613.50
449,143,Elena Ríos,210,Under Armour HOVR,Under Armour,42,3,2025-12-19,369.28
450,112,Marco Acuña,204,Reebok Classic,Reebok,39,4,2025-12-14,492.37
451,107,Roberto Sánchez,203,Puma RS-X,Puma,40,4,2025-12-01,527.30
452,106,Laura Medina,209,Asics Gel-Kayano,Asics,38,3,2025-12-11,256.56
453,123,Elena Ríos,206,Converse Chuck Taylor,Converse,39,3,2025-12-14,348.23
454,101,Juan Pérez,206,Converse Chuck Taylor,Converse,38,1,2025-12-06,91.53
455,111,Fernando Luján,210,Under Armour HOVR,Under Armour,39,4,2025-12-06,424.54
456,116,Iván Rivas,206,Converse Chuck Taylor,Converse,38,4,2025-12-26,557.12
457,147,Diana Cueva,207,Vans Old Skool,Vans,43,2,2025-12-03,149.55
458,143,Elena Ríos,205,New Balance 574,New Balance,44,4,2025-12-01,523.58
459,112,Marco Acuña,211,Skechers Go Run,Skechers,42,3,2025-12-11,503.46
460,149,Rosa Ramírez,204,Reebok Classic,Reebok,41,4,2025-12-08,486.96
461,135,Marco Acuña,207,Vans Old Skool,Vans,42,6,2025-12-07,430.71
462,107,Roberto Sánchez,206,Converse Chuck Taylor,Converse,41,2,2025-12-31,407.30
463,146,Juan Pérez,204,Reebok Classic,Reebok,37,4,2025-12-26,566.23
464,122,Ana Torres,205,New Balance 574,New Balance,40,2,2025-12-08,328.36
465,104,Ana Torres,202,Adidas Ultraboost,Adidas,38,2,2025-12-19,377.56
466,136,Luis Moreno,203,Puma RS-X,Puma,44,3,2025-12-23,561.39
467,115,David Peralta,207,Vans Old Skool,Vans,41,3,2025-12-23,403.52
468,125,Diana Cueva,207,Vans Old Skool,Vans,39,4,2025-12-22,529.08
469,149,Rosa Ramírez,202,Adidas Ultraboost,Adidas,39,1,2025-12-27,103.16
470,112,Marco Acuña,201,Nike Air Max,Nike,40,2,2025-12-23,207.09
471,140,Marco Acuña,206,Converse Chuck Taylor,Converse,44,2,2025-12-08,388.72
472,121,Patricia Castro,207,Vans Old Skool,Vans,39,3,2025-12-17,302.95
473,136,Luis Moreno,207,Vans Old Skool,Vans,41,2,2025-12-19,371.48
474,120,Diana Cueva,205,New Balance 574,New Balance,38,3,2025-12-11,410.09
475,141,José Fernández,208,Jordan Retro 1,Jordan,43,4,2025-12-09,588.98
476,104,Ana Torres,204,Reebok Classic,Reebok,40,4,2025-12-25,763.84
477,110,Patricia Castro,211,Skechers Go Run,Skechers,39,1,2025-12-22,95.02
478,118,José Fernández,207,Vans Old Skool,Vans,42,6,2025-12-27,721.59
479,120,Diana Cueva,204,Reebok Classic,Reebok,43,1,2025-12-23,153.82
480,112,Marco Acuña,210,Under Armour HOVR,Under Armour,43,3,2025-12-29,252.61
481,113,Carlos Díaz,206,Converse Chuck Taylor,Converse,39,2,2025-12-03,184.70
482,136,Luis Moreno,202,Adidas Ultraboost,Adidas,43,4,2025-12-29,535.53
483,122,Ana Torres,209,Asics Gel-Kayano,Asics,43,2,2025-12-22,385.37
484,110,Patricia Castro,207,Vans Old Skool,Vans,38,4,2025-12-03,236.98
485,104,Ana Torres,207,Vans Old Skool,Vans,42,5,2025-12-02,684.90
486,143,Elena Ríos,207,Vans Old Skool,Vans,40,3,2025-12-18,740.32
487,107,Roberto Sánchez,203,Puma RS-X,Puma,44,1,2025-12-08,111.07
488,137,Elena Ríos,205,New Balance 574,New Balance,42,1,2025-12-02,193.50
489,133,Diana Cueva,208,Jordan Retro 1,Jordan,38,3,2025-12-03,497.90
490,142,Andrés Núñez,207,Vans Old Skool,Vans,38,5,2025-12-24,445.21
491,134,Rosa Ramírez,201,Nike Air Max,Nike,38,1,2025-12-07,194.33
492,108,Elena Ríos,210,Under Armour HOVR,Under Armour,36,3,2025-12-08,385.72
493,147,Diana Cueva,208,Jordan Retro 1,Jordan,41,1,2025-12-11,143.65
494,116,Iván Rivas,207,Vans Old Skool,Vans,43,4,2025-12-16,533.45
495,141,José Fernández,208,Jordan Retro 1,Jordan,38,3,2025-12-07,434.41
496,135,Marco Acuña,206,Converse Chuck Taylor,Converse,43,3,2025-12-21,352.11
497,146,Juan Pérez,201,Nike Air Max,Nike,38,4,2025-12-14,473.39
498,146,Juan Pérez,203,Puma RS-X,Puma,42,3,2025-12-16,614.78
499,125,Diana Cueva,209,Asics Gel-Kayano,Asics,40,4,2025-12-30,321.22
500,139,Rosa Ramírez,202,Adidas Ultraboost,Adidas,43,2,2025-12-26,243.59`;

// Función para parsear CSV
function parseCSV(csvText) {
    const lines = csvText.trim().split('\n');
    const headers = lines[0].split(',');
    const data = [];
    
    for (let i = 1; i < lines.length; i++) {
        const values = lines[i].split(',');
        const row = {};
        headers.forEach((header, index) => {
            row[header] = values[index];
        });
        data.push(row);
    }
    
    return data;
}

// Función para implementar regresión lineal simple
function linearRegression(x, y) {
    const n = x.length;
    
    // Calcular medias
    const meanX = x.reduce((sum, val) => sum + val, 0) / n;
    const meanY = y.reduce((sum, val) => sum + val, 0) / n;
    
    // Calcular numerador y denominador para la pendiente
    let numerator = 0;
    let denominator = 0;
    
    for (let i = 0; i < n; i++) {
        numerator += (x[i] - meanX) * (y[i] - meanY);
        denominator += (x[i] - meanX) ** 2;
    }
    
    // Calcular pendiente (slope) e intercepto
    const slope = numerator / denominator;
    const intercept = meanY - slope * meanX;
    
    // Calcular R²
    let totalSumSquares = 0;
    let residualSumSquares = 0;
    
    for (let i = 0; i < n; i++) {
        const predicted = slope * x[i] + intercept;
        totalSumSquares += (y[i] - meanY) ** 2;
        residualSumSquares += (y[i] - predicted) ** 2;
    }
    
    const rSquared = 1 - (residualSumSquares / totalSumSquares);
    
    return {
        slope,
        intercept,
        rSquared,
        correlation: Math.sqrt(rSquared) * (slope > 0 ? 1 : -1),
        meanX,
        meanY,
        n,
        residualSumSquares,
        totalSumSquares
    };
}

// Función para calcular estadísticas descriptivas
function calculateStats(arr) {
    const sorted = [...arr].sort((a, b) => a - b);
    const n = arr.length;
    const mean = arr.reduce((sum, val) => sum + val, 0) / n;
    const variance = arr.reduce((sum, val) => sum + (val - mean) ** 2, 0) / (n - 1);
    const stdDev = Math.sqrt(variance);
    
    return {
        min: Math.min(...arr),
        max: Math.max(...arr),
        mean,
        median: n % 2 === 0 ? (sorted[n/2 - 1] + sorted[n/2]) / 2 : sorted[Math.floor(n/2)],
        stdDev,
        variance,
        q1: sorted[Math.floor(n * 0.25)],
        q3: sorted[Math.floor(n * 0.75)]
    };
}

// Función para hacer predicciones
function predict(x, slope, intercept) {
    return slope * x + intercept;
}

// Función para calcular intervalos de confianza
function calculateConfidenceInterval(x, y, newX, confidence = 0.95) {
    const n = x.length;
    const model = linearRegression(x, y);
    const { slope, intercept, residualSumSquares } = model;
    
    const prediction = predict(newX, slope, intercept);
    const mse = residualSumSquares / (n - 2);
    const se = Math.sqrt(mse);
    
    // t-value para el nivel de confianza dado
    const alpha = 1 - confidence;
    const tValue = 2.0; // Aproximación para n grande
    
    const margin = tValue * se;
    
    return {
        prediction,
        lowerBound: prediction - margin,
        upperBound: prediction + margin
    };
}

// Parsear los datos
const data = parseCSV(salesData);

console.log("🔍 MODELO DE REGRESIÓN LINEAL: CANTIDAD vs INGRESO");
console.log("=" .repeat(60));
console.log(`📊 Dataset: ${data.length} registros de ventas de zapatos\n`);

// Extraer variables
const cantidades = data.map(row => parseInt(row.cantidad_vendida));
const ingresos = data.map(row => parseFloat(row.ingreso_total));

// Análisis exploratorio de datos
console.log("📈 ANÁLISIS EXPLORATORIO DE DATOS");
console.log("-" .repeat(40));

const statsX = calculateStats(cantidades);
const statsY = calculateStats(ingresos);

console.log("Variable X (Cantidad Vendida):");
console.log(`  • Rango: ${statsX.min} - ${statsX.max} unidades`);
console.log(`  • Media: ${statsX.mean.toFixed(2)} unidades`);
console.log(`  • Mediana: ${statsX.median} unidades`);
console.log(`  • Desviación estándar: ${statsX.stdDev.toFixed(2)}`);
console.log(`  • Q1: ${statsX.q1}, Q3: ${statsX.q3}`);

console.log("\nVariable Y (Ingreso Total):");
console.log(`  • Rango: $${statsY.min.toFixed(2)} - $${statsY.max.toFixed(2)}`);
console.log(`  • Media: $${statsY.mean.toFixed(2)}`);
console.log(`  • Mediana: $${statsY.median.toFixed(2)}`);
console.log(`  • Desviación estándar: $${statsY.stdDev.toFixed(2)}`);
console.log(`  • Q1: $${statsY.q1.toFixed(2)}, Q3: $${statsY.q3.toFixed(2)}`);

// Distribución de frecuencias
console.log("\n📊 DISTRIBUCIÓN DE FRECUENCIAS");
console.log("-" .repeat(40));

const cantidadFreq = {};
cantidades.forEach(cant => {
    cantidadFreq[cant] = (cantidadFreq[cant] || 0) + 1;
});

console.log("Frecuencia por cantidad vendida:");
Object.keys(cantidadFreq).sort((a, b) => a - b).forEach(cant => {
    const freq = cantidadFreq[cant];
    const percentage = (freq / data.length * 100).toFixed(1);
    const bar = "█".repeat(Math.floor(freq / 10));
    console.log(`  ${cant} unidades: ${freq} ventas (${percentage}%) ${bar}`);
});

// Modelo de regresión lineal
console.log("\n🔬 MODELO DE REGRESIÓN LINEAL");
console.log("-" .repeat(40));

const modelo = linearRegression(cantidades, ingresos);

console.log(`📐 Ecuación del modelo:`);
console.log(`    Y = ${modelo.slope.toFixed(2)}X + ${modelo.intercept.toFixed(2)}`);
console.log(`    Ingreso = ${modelo.slope.toFixed(2)} × Cantidad + ${modelo.intercept.toFixed(2)}`);

console.log(`\n📊 Métricas del modelo:`);
console.log(`  • Pendiente (β₁): ${modelo.slope.toFixed(4)}`);
console.log(`  • Intercepto (β₀): ${modelo.intercept.toFixed(2)}`);
console.log(`  • Coeficiente de correlación (r): ${modelo.correlation.toFixed(4)}`);
console.log(`  • Coeficiente de determinación (R²): ${modelo.rSquared.toFixed(4)}`);
console.log(`  • Varianza explicada: ${(modelo.rSquared * 100).toFixed(2)}%`);

// Interpretación del modelo
console.log(`\n💡 INTERPRETACIÓN DEL MODELO:`);
console.log(`  • Por cada unidad adicional vendida, el ingreso aumenta en promedio $${modelo.slope.toFixed(2)}`);
console.log(`  • El ingreso base (cuando cantidad = 0) sería $${modelo.intercept.toFixed(2)}`);

if (modelo.rSquared > 0.8) {
    console.log(`  • ✅ Correlación muy fuerte (R² > 0.8)`);
} else if (modelo.rSquared > 0.6) {
    console.log(`  • ✅ Correlación fuerte (R² > 0.6)`);
} else if (modelo.rSquared > 0.4) {
    console.log(`  • ⚠️  Correlación moderada (R² > 0.4)`);
} else {
    console.log(`  • ❌ Correlación débil (R² < 0.4)`);
}

// Predicciones con intervalos de confianza
console.log(`\n🔮 PREDICCIONES DEL MODELO (con intervalos de confianza 95%)`);
console.log("-" .repeat(60));

for (let cantidad = 1; cantidad <= 6; cantidad++) {
    const ci = calculateConfidenceInterval(cantidades, ingresos, cantidad);
    console.log(`${cantidad} unidad${cantidad > 1 ? 'es' : ''}: $${ci.prediction.toFixed(2)} [${ci.lowerBound.toFixed(2)} - ${ci.upperBound.toFixed(2)}]`);
}

// Análisis de residuos
console.log(`\n🔍 ANÁLISIS DE RESIDUOS`);
console.log("-" .repeat(40));

const residuos = [];
const predicciones = [];

for (let i = 0; i < cantidades.length; i++) {
    const pred = predict(cantidades[i], modelo.slope, modelo.intercept);
    const residuo = ingresos[i] - pred;
    residuos.push(residuo);
    predicciones.push(pred);
}

const statsResiduos = calculateStats(residuos);
const errorCuadraticoMedio = Math.sqrt(modelo.residualSumSquares / (modelo.n - 2));

console.log(`Error cuadrático medio (RMSE): $${errorCuadraticoMedio.toFixed(2)}`);
console.log(`Media de residuos: $${statsResiduos.mean.toFixed(2)} (debe estar cerca de 0)`);
console.log(`Desviación estándar de residuos: $${statsResiduos.stdDev.toFixed(2)}`);
console.log(`Rango de residuos: $${statsResiduos.min.toFixed(2)} a $${statsResiduos.max.toFixed(2)}`);

// Identificar outliers (residuos > 2 desviaciones estándar)
const outliers = [];
for (let i = 0; i < residuos.length; i++) {
    if (Math.abs(residuos[i]) > 2 * statsResiduos.stdDev) {
        outliers.push({
            index: i + 1,
            cantidad: cantidades[i],
            ingreso: ingresos[i],
            prediccion: predicciones[i],
            residuo: residuos[i]
        });
    }
}

console.log(`\n⚠️  OUTLIERS DETECTADOS (${outliers.length} registros):`);
if (outliers.length > 0) {
    outliers.slice(0, 5).forEach(outlier => {
        console.log(`  Venta #${outlier.index}: ${outlier.cantidad} unidades → $${outlier.ingreso} (esperado: $${outlier.prediccion.toFixed(2)}, diferencia: $${outlier.residuo.toFixed(2)})`);
    });
    if (outliers.length > 5) {
        console.log(`  ... y ${outliers.length - 5} más`);
    }
} else {
    console.log(`  ✅ No se detectaron outliers significativos`);
}

// Validación cruzada
console.log(`\n🧪 VALIDACIÓN CRUZADA`);
console.log("-" .repeat(40));

const trainSize = Math.floor(data.length * 0.8);
const trainX = cantidades.slice(0, trainSize);
const trainY = ingresos.slice(0, trainSize);
const testX = cantidades.slice(trainSize);
const testY = ingresos.slice(trainSize);

const modeloEntrenamiento = linearRegression(trainX, trainY);

// Calcular métricas en datos de prueba
let sumaErroresCuadrados = 0;
let sumaErroresAbsolutos = 0;

for (let i = 0; i < testX.length; i++) {
    const prediccion = predict(testX[i], modeloEntrenamiento.slope, modeloEntrenamiento.intercept);
    const error = testY[i] - prediccion;
    sumaErroresCuadrados += error ** 2;
    sumaErroresAbsolutos += Math.abs(error);
}

const rmseTest = Math.sqrt(sumaErroresCuadrados / testX.length);
const maeTest = sumaErroresAbsolutos / testX.length;

console.log(`Datos de entrenamiento: ${trainSize} registros (80%)`);
console.log(`Datos de prueba: ${testX.length} registros (20%)`);
console.log(`RMSE en datos de prueba: $${rmseTest.toFixed(2)}`);
console.log(`MAE en datos de prueba: $${maeTest.toFixed(2)}`);
console.log(`R² en entrenamiento: ${modeloEntrenamiento.rSquared.toFixed(4)}`);

// Calcular R² en datos de prueba
const meanTestY = testY.reduce((sum, val) => sum + val, 0) / testY.length;
let totalSumSquaresTest = 0;
let residualSumSquaresTest = 0;

for (let i = 0; i < testX.length; i++) {
    const prediccion = predict(testX[i], modeloEntrenamiento.slope, modeloEntrenamiento.intercept);
    totalSumSquaresTest += (testY[i] - meanTestY) ** 2;
    residualSumSquaresTest += (testY[i] - prediccion) ** 2;
}

const r2Test = 1 - (residualSumSquaresTest / totalSumSquaresTest);
console.log(`R² en datos de prueba: ${r2Test.toFixed(4)}`);

// Análisis por rangos de cantidad
console.log(`\n📊 ANÁLISIS POR RANGOS DE CANTIDAD`);
console.log("-" .repeat(40));

const rangos = [
    { min: 1, max: 1, label: "1 unidad" },
    { min: 2, max: 2, label: "2 unidades" },
    { min: 3, max: 3, label: "3 unidades" },
    { min: 4, max: 4, label: "4 unidades" },
    { min: 5, max: 6, label: "5-6 unidades" }
];

rangos.forEach(rango => {
    const ventasRango = data.filter(row => {
        const cant = parseInt(row.cantidad_vendida);
        return cant >= rango.min && cant <= rango.max;
    });
    
    if (ventasRango.length > 0) {
        const ingresosRango = ventasRango.map(row => parseFloat(row.ingreso_total));
        const statsRango = calculateStats(ingresosRango);
        
        console.log(`${rango.label}:`);
        console.log(`  • ${ventasRango.length} ventas (${(ventasRango.length / data.length * 100).toFixed(1)}%)`);
        console.log(`  • Ingreso promedio: $${statsRango.mean.toFixed(2)}`);
        console.log(`  • Rango: $${statsRango.min.toFixed(2)} - $${statsRango.max.toFixed(2)}`);
    }
});

// Resumen ejecutivo
console.log(`\n📋 RESUMEN EJECUTIVO`);
console.log("=" .repeat(60));

console.log(`✅ FORTALEZAS DEL MODELO:`);
console.log(`  • Relación lineal clara entre cantidad e ingreso`);
console.log(`  • R² = ${modelo.rSquared.toFixed(3)} indica ${(modelo.rSquared * 100).toFixed(1)}% de varianza explicada`);
console.log(`  • Error promedio de predicción: $${errorCuadraticoMedio.toFixed(2)}`);

console.log(`\n🎯 APLICACIONES PRÁCTICAS:`);
console.log(`  • Estimación de ingresos por cantidad de productos`);
console.log(`  • Planificación de inventario basada en objetivos de ingresos`);
console.log(`  • Identificación de ventas atípicas (outliers)`);

console.log(`\n💰 INSIGHTS DE NEGOCIO:`);
console.log(`  • Precio promedio por unidad: $${modelo.slope.toFixed(2)}`);
console.log(`  • Ventas más frecuentes: ${Object.keys(cantidadFreq).reduce((a, b) => cantidadFreq[a] > cantidadFreq[b] ? a : b)} unidades`);
console.log(`  • Rango de ingresos típico: $${statsY.q1.toFixed(2)} - $${statsY.q3.toFixed(2)}`);

console.log(`\n🔧 RECOMENDACIONES:`);
if (modelo.rSquared > 0.7) {
    console.log(`  ✅ El modelo es confiable para predicciones`);
} else {
    console.log(`  ⚠️  Considerar variables adicionales para mejorar el modelo`);
}

if (outliers.length > data.length * 0.05) {
    console.log(`  ⚠️  Revisar ${outliers.length} ventas atípicas detectadas`);
}

console.log(`  📈 Usar el modelo para: pronósticos de corto plazo, análisis de precios, detección de anomalías`);
