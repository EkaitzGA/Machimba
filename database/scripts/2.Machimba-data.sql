USE Machimba;

-- Insertar productos
INSERT INTO `Machimba`.`product` (`name`, `description`, `collection`, `price`, `image`, `color`, `material`) VALUES
('Azalea', 'Deslumbrante bolso en terciopelo combinado que fusiona elegancia y modernidad. Sus tonos mezclados crean un efecto visual cautivador mientras la suavidad del terciopelo añade un toque de lujo atemporal.', 'Unique Collection', 150, 'https://i.ibb.co/WH5wFbD/Azalea.png', 'Combinado', 'Terciopelo'),
('Vesper', 'La delicadeza del peluche se encuentra con un diseño contemporáneo en este bolso combinado.', 'Unique Collection', 150, 'https://i.ibb.co/K6KKLDn/Vesper.png', 'Combinado', 'Peluche'),
('Roxette', 'La frescura del lino se reinventa en este diseño combinado. Su textura natural y acabado multicolor crean un contraste fascinante.', 'Unique Collection', 150, 'https://i.ibb.co/vwdWCrT/Roxette.png', 'Combinado', 'Lino'),
('Calypso', 'La opulencia del terciopelo negro alcanza nuevas alturas en este diseño. Su acabado monocromático transmite elegancia. Un clásico moderno para las amantes del negro.', 'Unique Collection', 150, 'https://i.ibb.co/YPfYJyY/Calypso.png', 'Negro', 'Terciopelo'),
('Thalia', 'La sofisticación de la piel se presenta en una armoniosa combinación de tonos. Este bolso fusiona durabilidad y estilo, creando un accesorio que mejora con el tiempo.', 'Unique Collection', 150, 'https://i.ibb.co/pPvKnZG/Thalia.png', 'Combinado', 'Piel'),
('Zelda', 'El pelo negro se convierte en protagonista en este diseño audaz. Su textura única y acabado dramático crean un statement piece que no deja indiferente. Perfecto para quienes buscan un toque de extravagancia elegante.', 'Unique Collection', 150, 'https://i.ibb.co/g7xDJ8m/Zelda.png', 'Negro', 'Pelo'),
('Astrid', 'La piel combinada alcanza nuevas cotas de elegancia en este diseño. Su mezcla de tonos crea un efecto visual sofisticado mientras mantiene la practicidad y durabilidad características de la piel.', 'Unique Collection', 150, 'https://i.ibb.co/vjP3151/Astrid.png', 'Combinado', 'Piel'),
('Nova', 'El pelo combinado se transforma en arte en este diseño único. Su mezcla de texturas y tonos crea un efecto visual dinámico y moderno.', 'Unique Collection', 150, 'https://i.ibb.co/ZHgNj8W/Nova.png', 'Combinado', 'Pelo'),
('Cassidy', 'Deslumbrante bolso en terciopelo rojo intenso. Su textura aterciopelada crea suaves destellos que capturan la luz, añadiendo un toque de drama y sofisticación a cualquier look.', 'Unique Collection', 150, 'https://i.ibb.co/wp4S5tz/Cassidy.png', 'Rojo', 'Terciopelo'),
('Pandora', 'La combinación de rojo y negro en piel crea un diseño audaz y elegante. Un bolso bicolor que destaca por su contraste dramático y su acabado refinado.', 'Unique Collection', 150, 'https://i.ibb.co/bdMpFsQ/Pandora.png', 'Rojo y negro', 'Piel'),
('Phoenix', 'Elegante bolso en piel combinada donde los tonos se entrelazan con maestría. Su diseño versátil y acabado premium crean un accesorio que destaca por su originalidad y distinción.', 'Unique Collection', 150, 'https://i.ibb.co/Z1b9T9j/Phoenix.png', 'Combinado', 'Piel'),
('Nikosia', 'Sofisticado bolso en piel negra, un clásico atemporal que combina elegancia y funcionalidad en su diseño más puro.', 'Permanent Collection', 80, 'https://i.ibb.co/THJhsCS/Nikosia-negro.png', 'Negro', 'Piel'),
('Nikosia', 'Bolso bicolor en piel que fusiona el dramatismo del rojo y negro, creando un accesorio llamativo y versátil.', 'Permanent Collection', 80, 'https://i.ibb.co/FzsjcKM/Nikosia-serpiente.png', 'Rojo y negro', 'Piel'),
('Nikosia', 'Cautivador bolso en piel roja, un statement piece que añade un toque de pasión y elegancia a cualquier outfit.', 'Permanent Collection', 80, 'https://i.ibb.co/C96mjVR/Nikosia-rojo.png', 'Rojo', 'Piel'),
('Nikosia', 'Deslumbrante bolso en piel plateada que aporta un toque de luz y modernidad con un acabado metálico sofisticado.', 'Permanent Collection', 80, 'https://i.ibb.co/gztdzP5/Nikosia-plata.png', 'Plateado', 'Piel'),
('Nikosia', 'Fresco diseño en lino multicolor que combina comodidad y estilo, perfecto para un look casual chic.', 'Permanent Collection', 80, 'https://i.ibb.co/2ZKz12j/Nikosia-japo.png', 'Combinado', 'Lino'),
('Nikosia', 'Elegante bolso en piel multicolor que fusiona tonos armoniosos para crear un accesorio único y versátil.', 'Permanent Collection', 80, 'https://i.ibb.co/XCG5f9f/Nikosia-fantasia.png', 'Combinado', 'Piel'),
('Nikosia', 'Sofisticado diseño en piel combinada donde los tonos se entrelazan creando un accesorio distintivo y moderno.', 'Permanent Collection', 80, 'https://i.ibb.co/D1G6PJg/Nikosia-vichy.png', 'Combinado', 'Piel'),
('Trote bag Vermouth', 'Bolso playero en lino combinado con estampado retro de aperitivo, perfecto para tardes de verano con estilo vintage.', 'Vintage Summer Collection', 60, 'https://i.ibb.co/r0zPCzh/Trote-bag-Vermouth.png', 'Combinado', 'Lino'),
('Trote bag Langosta', 'Divertido bolso en lino con diseño marinero y estampado de langostas, ideal para tus aventuras costeras.', 'Vintage Summer Collection', 60, 'https://i.ibb.co/BNg4Gk8/Trote-bag-Langosta.png', 'Combinado', 'Lino'),
('Trote bag Tea', 'Suave bolso en toalla combinada con motivos de té, que fusiona comodidad y encanto británico veraniego.', 'Vintage Summer Collection', 60, 'https://i.ibb.co/hDZJxw0/Trote-bag-Tea.png', 'Combinado', 'Toalla'),
('Trote bag Flor', 'Bolso en lino con estampado floral vibrante, que captura la esencia del verano con un toque romántico.', 'Vintage Summer Collection', 60, 'https://i.ibb.co/gy9bwvC/Trote-bag-Flor.png', 'Combinado', 'Lino'),
('Trote bag Garden', 'Fresco diseño en toalla con motivos de jardín, perfecto para días de playa con estilo botánico.', 'Vintage Summer Collection', 60, 'https://i.ibb.co/M8Q4TcC/Trote-bag-Garden.png', 'Combinado', 'Toalla'),
('Trote bag Toalla', 'Práctico bolso en toalla combinada que mezcla funcionalidad y diseño para tus días de playa.', 'Vintage Summer Collection', 70, 'https://i.ibb.co/L8LNWr2/Trote-bag-Toalla.png', 'Combinado', 'Toalla'),
('Trote bag Fruits', 'Alegre bolso en lino con estampado frutal, que aporta un toque tropical a tu look veraniego.', 'Vintage Summer Collection', 60, 'https://i.ibb.co/hRJrcC5/Trote-bag-fruits.png', 'Combinado', 'Lino'),
('Trote bag Chess', 'Sofisticado diseño en lino con patrón de ajedrez, que combina elegancia retro y frescura estival.', 'Vintage Summer Collection', 60, 'https://i.ibb.co/Qbzk4sH/Trote-bag-Chess.png', 'Combinado', 'Lino'),
('Trote bag Groovy', 'Bolso en lino con estampado psicodélico, que revive el espíritu más divertido de los años 70.', 'Vintage Summer Collection', 60, 'https://i.ibb.co/82xtcKf/Trote-bag-Groovy.png', 'Combinado', 'Lino'),
('Trote bag 60’s', 'Nostálgico diseño en lino que captura la esencia mod de los sesenta con estampados geométricos vintage.', 'Vintage Summer Collection', 70, 'https://i.ibb.co/pj097vQ/Trote-bag-60-s.png', 'Combinado', 'Lino'),
('Minerva', 'Majestuoso bolso en terciopelo combinado que evoca elegancia atemporal con su diseño sofisticado.', 'Antique Collection', 100, 'https://i.ibb.co/P4jKSht/Minerva.png', 'Combinado', 'Terciopelo'),
('Minerva small', 'Versión compacta en terciopelo combinado que mantiene toda la distinción del diseño original.', 'Antique Collection', 100, 'https://i.ibb.co/km1xrvN/Minerva-small.png', 'Combinado', 'Terciopelo'),
('Luna', 'Místico bolso en terciopelo combinado que captura la magia nocturna en sus tonos y texturas.', 'Antique Collection', 100, 'https://i.ibb.co/d015tXm/Luna.png', 'Combinado', 'Terciopelo'),
('Luna small', 'Elegante versión reducida en terciopelo que mantiene el encanto enigmático de Luna.', 'Antique Collection', 100, 'https://i.ibb.co/K6PWCtt/Luna-small.png', 'Combinado', 'Terciopelo'),
('Lysandra', 'Refinado bolso en terciopelo combinado que fusiona delicadeza y carácter aristocrático.', 'Antique Collection', 100, 'https://i.ibb.co/qW96Ng2/Lysandra.png', 'Combinado', 'Terciopelo'),
('Lysandra small', 'Delicada versión pequeña en terciopelo que conserva la esencia noble del modelo original.', 'Antique Collection', 100, 'https://i.ibb.co/gw7vJw6/Lysandra-small.png', 'Combinado', 'Terciopelo'),
('Juniper', 'Cautivador bolso en terciopelo combinado que evoca la sofisticación de épocas pasadas.', 'Antique Collection', 100, 'https://i.ibb.co/XtmdWFM/Juniper.png', 'Combinado', 'Terciopelo'),
('Morgana', 'Misterioso diseño en terciopelo combinado que desprende un aura de elegancia intemporal.', 'Antique Collection', 100, 'https://i.ibb.co/yk71cNm/Morgana.png', 'Combinado', 'Terciopelo'),
('Nixie', 'Encantador bolso en terciopelo combinado que fusiona fantasía y refinamiento clásico.', 'Antique Collection', 100, 'https://i.ibb.co/wJGNxFb/Nixie.png', 'Combinado', 'Terciopelo'),
('Selene', 'Etéreo diseño en terciopelo combinado que refleja luminosidad y elegancia nocturna.', 'Antique Collection', 100, 'https://i.ibb.co/1Lfc6QB/Selene.png', 'Combinado', 'Terciopelo'),
('Susy-Q', 'Distinguido bolso en terciopelo combinado que evoca el glamour vintage.', 'Antique Collection', 100, 'https://i.ibb.co/q0RTXd1/susy-q-antique.png', 'Combinado', 'Terciopelo'),
('Susy', 'Elegante bolso en piel burdeos que combina sofisticación y carácter atemporal.', 'Permanent Collection', 90, 'https://i.ibb.co/nDmHSGS/piel-burdeos.png', 'Burdeos', 'Piel'),
('Susy', 'Bolso en piel multicolor que fusiona tonos para crear un accesorio único.', 'Permanent Collection', 90, 'https://i.ibb.co/ZJht2QX/metalizado-fantasia.png', 'Combinado', 'Piel'),
('Susy', 'Clásico bolso en piel tabaco que destaca por su elegancia intemporal.', 'Permanent Collection', 90, 'https://i.ibb.co/tKZ7zwX/piel-tabaco.png', 'Tabaco', 'Piel'),
('Susy', 'Sofisticado bolso en piel negra, un clásico que nunca pasa de moda.', 'Permanent Collection', 90, 'https://i.ibb.co/n74RpWL/piel-negra.png', 'Negro', 'Piel'),
('Susy', 'Delicado diseño en terciopelo rosa que irradia dulzura y feminidad.', 'Permanent Collection', 90, 'https://i.ibb.co/zZKTGL6/rosa-perla.png', 'Rosa', 'Terciopelo'),
('Susy', 'Cautivador bolso en terciopelo verde que aporta un toque de distinción natural.', 'Permanent Collection', 90, 'https://i.ibb.co/CM7RTN6/verde-billar.png', 'Verde', 'Terciopelo'),
('Susy', 'Sofisticado diseño en terciopelo azul que transmite serenidad y elegancia.', 'Permanent Collection', 90, 'https://i.ibb.co/d4V1sHy/azul-elegante.png', 'Azul', 'Terciopelo'),
('Susy', 'Versátil bolso en terciopelo beige que destaca por su refinada neutralidad.', 'Permanent Collection', 90, 'https://i.ibb.co/pryvHcF/beige.png', 'Beige', 'Terciopelo'),
('Susy', 'Elegante pieza en terciopelo verde que evoca la frescura con estilo.', 'Permanent Collection', 90, 'https://i.ibb.co/MspRNPJ/musgo.png', 'Verde', 'Terciopelo'),
('Susy', 'Vibrante bolso en terciopelo mostaza que aporta calidez y personalidad.', 'Permanent Collection', 90, 'https://i.ibb.co/FD25JP7/mostaza.png', 'Mostaza', 'Terciopelo'),
('Susy', 'Romántico diseño en terciopelo lila que irradia delicadeza y misterio.', 'Permanent Collection', 90, 'https://i.ibb.co/nCVTBkk/lila.png', 'Lila', 'Terciopelo'),
('Susy', 'Majestuoso bolso en terciopelo morado que transmite realeza y distinción.', 'Permanent Collection', 90, 'https://i.ibb.co/NKTNxtP/morado.png', 'Morado', 'Terciopelo'),
('Susy', 'Eterno diseño en terciopelo negro que encarna la elegancia absoluta.', 'Permanent Collection', 90, 'https://i.ibb.co/CtH7RpP/terciopelo-negro.png', 'Negro', 'Terciopelo'),
('Fuzzy', 'Fresco diseño en lino multicolor complementado con asas de madera natural, perfecto para un look cosmopolita y casual.', 'New York Collection', 85, 'https://i.ibb.co/FxmNZW1/japo.png', 'Combinado', 'Lino'),
('Fuzzy', 'Vibrante bolso en lino amarillo con asas de madera, que aporta un toque de alegría veraniega al estilo neoyorquino.', 'New York Collection', 85, 'https://i.ibb.co/93fBP3K/amarillo.png', 'Amarillo', 'Lino'),
('Fuzzy', 'Cautivador bolso en terciopelo rojo con distintivas asas de madera, que fusiona calidez y elegancia urbana.', 'New York Collection', 85, 'https://i.ibb.co/RN1G65K/rojo.png', 'Rojo', 'Terciopelo'),
('Machimbag', 'Clásico bolso en terciopelo verde con asas de piel negra, un diseño original que marcó el estilo de la marca.', 'Permanent Collection', 90, 'https://i.ibb.co/KrK1BC5/verde-rayado.png', 'Verde', 'Terciopelo'),
('Machimbag', 'Emblemático diseño en terciopelo verde realzado por sus asas de piel negra, símbolo del legado de la marca.', 'Permanent Collection', 90, 'https://i.ibb.co/N9WPMMh/verde-pistacho.png', 'Verde', 'Terciopelo'),
('Machimbag', 'Distinguido bolso en terciopelo mostaza con asas de piel negra, que evoca la esencia vintage de la colección.', 'Permanent Collection', 90, 'https://i.ibb.co/vxkd2rF/mostaza-y-verde.png', 'Mostaza', 'Terciopelo'),
('Machimbag', 'Icónico bolso en terciopelo rojo contrastado con asas de piel negra, un clásico atemporal.', 'Permanent Collection', 90, 'https://i.ibb.co/c6TfSfZ/rojo.png', 'Rojo', 'Terciopelo'),
('Machimbag', 'Eterno diseño en terciopelo verde complementado con asas de piel negra, parte de la historia de la marca.', 'Permanent Collection', 90, 'https://i.ibb.co/Dfr3dQh/verde-musgo.png', 'Verde', 'Terciopelo'),
('Machimbag', 'Sofisticado bolso en terciopelo mostaza con asas de piel negra, que mantiene viva la tradición.', 'Permanent Collection', 90, 'https://i.ibb.co/tJvJXkX/mostaza-y-marron.png', 'Mostaza', 'Terciopelo'),
('Machimbag', 'Legendario diseño en terciopelo verde y asas de piel negra, un tributo al origen de la marca.', 'Permanent Collection', 90, 'https://i.ibb.co/1ZL46Bk/verde-botella.png', 'Verde', 'Terciopelo'),
('Machimbag', 'Elegante bolso en terciopelo azul con asas de piel negra, que representa la herencia de la marca.', 'Permanent Collection', 90, 'https://i.ibb.co/CnjJXWf/azul-celeste.png', 'Azul', 'Terciopelo'),
('Machimbag', 'Distinguido diseño en terciopelo tabaco con asas de piel negra, un testamento al estilo original.', 'Permanent Collection', 90, 'https://i.ibb.co/BnRpqpn/tabaco.png', 'Tabaco', 'Terciopelo'),
('Machimbag', 'Majestuoso bolso en terciopelo morado realzado por asas de piel negra, un clásico reinventado.', 'Permanent Collection', 90, 'https://i.ibb.co/cDVbbb9/morado.png', 'Morado', 'Terciopelo'),
('Machimbag', 'Emblemático diseño en terciopelo azul con asas de piel negra, que mantiene vivo el espíritu original.', 'Permanent Collection', 90, 'https://i.ibb.co/YkGqbSh/azul-otro-forro.png', 'Azul', 'Terciopelo');



-- Insertar usuarios
INSERT INTO `Machimba`.`user` (`user_name`, `password`, `email`, `first_name`, `last_name`)
VALUES
  ('EkaitzGA', 'admin1234', 'ekaitzguerra@gmail.com', 'Ekaitz', 'Guerra'),
  ('inesu', 'admin1234', 'inesuribeb@gmail.com', 'Ines', 'Uribe'),
  ('samucopp', 'admin1234', 'samucop@icloud.com', 'Samuel', 'Correia'),
  ('lauracastillo', 'laura2024', 'lauracastillo@mail.com', 'Laura', 'Castillo'),
  ('jorgefernandez', 'jorgepass', 'jorgefernandez@mail.com', 'Jorge', 'Fernández'),
  ('silviaperez', 'silviapassword', 'silviaperez@mail.com', 'Silvia', 'Pérez'),
  ('luisgomez', 'luisgomez2024', 'luisgomez@mail.com', 'Luis', 'Gómez'),
  ('carlaruiz', 'carla4321', 'carlaruiz@mail.com', 'Carla', 'Ruiz'),
  ('pablovargas', 'pablovargas123', 'pablovargas@mail.com', 'Pablo', 'Vargas'),
  ('marcosluna', 'marcos2024', 'marcosluna@mail.com', 'Marcos', 'Luna'),
  ('mariarojas', 'mariarojas2024', 'mariarojas@mail.com', 'María', 'Rojas'),
  ('franciscogarcia', 'franpass2024', 'franciscogarcia@mail.com', 'Francisco', 'García'),
  ('aliciarivera', 'alicia2024', 'aliciarivera@mail.com', 'Alicia', 'Rivera'),
  ('gabrielmendoza', 'gabrielmendoza123', 'gabrielmendoza@mail.com', 'Gabriel', 'Mendoza'),
  ('monicacruz', 'monicacross', 'monicacruz@mail.com', 'Mónica', 'Cruz'),
  ('danielrodriguez', 'danielpass2024', 'danielrodriguez@mail.com', 'Daniel', 'Rodríguez'),
  ('elenaortega', 'elena2345', 'elenaortega@mail.com', 'Elena', 'Ortega'),
  ('ricardovazquez', 'ricardo2024', 'ricardovazquez@mail.com', 'Ricardo', 'Vázquez'),
  ('teresablanca', 'teresa1234', 'teresablanca@mail.com', 'Teresa', 'Blanca');

-- Insertar clientes
INSERT INTO `Machimba`.`client` (`address`, `phone`, `user_id`)
VALUES
  ('Calle Falsa 123, Madrid', '912345678', 1),
  ('Avenida de la Paz 45, Barcelona', '932456789', 2),
  ('Calle del Sol 10, Sevilla', '954567890', 3),
  ('Calle Gran Vía 200, Valencia', '963678901', 4),
  ('Calle Larga 50, Zaragoza', '976789012', 5),
  ('Calle de las Flores 33, Bilbao', '944890123', 6),
  ('Avenida Libertad 100, Málaga', '951901234', 7),
  ('Calle Mayor 20, Alicante', '965012345', 8),
  ('Plaza Central 15, Murcia', '968123456', 9),
  ('Calle del Mar 120, Tarragona', '977234567', 10),
  ('Avenida de Aragón 60, Girona', '972345678', 11),
  ('Calle de las Dalias 22, Cádiz', '956456789', 12),
  ('Calle Rosaleda 8, Salamanca', '923567890', 13),
  ('Avenida del Norte 50, Oviedo', '985678901', 14),
  ('Calle de la Luna 99, Lugo', '982789012', 15),
  ('Calle del Río 75, León', '987890123', 16);

-- Insertar trabajadores
INSERT INTO `Machimba`.`worker` (`user_id`)
VALUES
  (1),
  (2),
  (3);
  
-- Inserta una compra para un cliente
INSERT INTO `Machimba`.`purchase` (`client_id`, `status`)
VALUES
    (1, 'pendiente'), 
    (2, 'aceptado/solicitado'),
    (3, 'pendiente'),
    (4, 'aceptado/solicitado'),
    (5, 'pendiente'),
    (6, 'aceptado/solicitado'),
    (7, 'pendiente'),
    (8, 'aceptado/solicitado'),
    (12, 'aceptado/solicitado'),
    (13, 'pendiente'),
    (14, 'aceptado/solicitado'),
    (15, 'pendiente'),
    (16, 'aceptado/solicitado');
    
-- Inserta productos en las compras (product_id entre 1 y 34)
INSERT INTO `Machimba`.`purchase_has_product` (`purchase_id`, `product_id`, `quantity`)
VALUES
    (1, 1, 2),  -- Compra 1: Producto 1, cantidad 2
    (1, 3, 1),  -- Compra 1: Producto 3, cantidad 1
    (2, 5, 3),  -- Compra 2: Producto 5, cantidad 3
    (2, 8, 2),  -- Compra 2: Producto 8, cantidad 2
    (3, 12, 1), -- Compra 3: Producto 12, cantidad 1
    (3, 6, 4),  -- Compra 3: Producto 6, cantidad 4
    (4, 7, 2),  -- Compra 4: Producto 7, cantidad 2
    (4, 10, 1), -- Compra 4: Producto 10, cantidad 1
    (5, 15, 5), -- Compra 5: Producto 15, cantidad 5
    (6, 9, 3),  -- Compra 6: Producto 9, cantidad 3
    (6, 14, 2), -- Compra 6: Producto 14, cantidad 2
    (7, 2, 1),  -- Compra 7: Producto 2, cantidad 1
    (8, 11, 4), -- Compra 8: Producto 11, cantidad 4
    (9, 20, 1), -- Compra 12: Producto 20, cantidad 1
    (10, 23, 4), -- Compra 13: Producto 23, cantidad 4
    (11, 25, 5), -- Compra 14: Producto 25, cantidad 5
    (12, 30, 2), -- Compra 15: Producto 30, cantidad 2
    (13, 34, 3); -- Compra 16: Producto 34, cantidad 3