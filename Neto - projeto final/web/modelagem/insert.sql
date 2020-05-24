insert into dados191n.caes 
		(cao_dtcadastro, cao_nome, cao_sexo, cao_raca, cao_idade)
values 	(CURRENT_TIMESTAMP, 'Mocinha', 'fêmea', 'sem raça definida', 4),
		(CURRENT_TIMESTAMP, 'Totó', 'macho', 'pastor alemão', 1),
        (CURRENT_TIMESTAMP, 'Tarike', 'macho', 'sem raça definida', 3),
        (CURRENT_TIMESTAMP, 'Tica', 'fêmea', 'sem raça definida', 8),
        (CURRENT_TIMESTAMP, 'Thor', 'macho', 'sem raça definida', 3);
        
insert into dados191n.pessoas
		(pes_dtcadastro, pes_nome, pes_email, pes_endereco, pes_cidade, pes_telefone) 
values 	(CURRENT_TIMESTAMP, 'Fernando Chinaglia', 'fernando@gmail.com', 'Rua das Flores, 171', 'Franca','11-52054907'),
		(CURRENT_TIMESTAMP, 'Aguinaldo Fernandes', 'aguinaldo@hotmail.com', 'Rua Três, 171', 'Ribeirão Preto','21-2568-1507'),
		(CURRENT_TIMESTAMP,'Vladimir Abreu', 'vladimir@gmail.com', 'Rua Miragaia, 799','Ipuã', '11-2148-1437'),
		(CURRENT_TIMESTAMP,'Willian da Silva', 'willian@gmail.com', 'Rua Barão Santo Ângelo, 788', 'Franca', '16-3713-3300'),
        (CURRENT_TIMESTAMP,'João da Silva', 'joao@gmail.com', 'Rua Martins, 7444', 'Restinga', '16-3713-6660');