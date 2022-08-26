
SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";



--
-- Banco de dados: `encomendas`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `products`
--

DROP TABLE IF EXISTS `products`;
CREATE TABLE IF NOT EXISTS `products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `trackingId` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `trackingId` (`trackingId`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `products`
--

INSERT INTO `products` (`id`, `name`, `trackingId`, `createdAt`, `updatedAt`) VALUES
(1, 'Navio', 1, '2022-07-23 14:48:06', '2022-07-23 14:48:06'),
(2, 'balao', 2, '2022-07-26 21:52:59', '2022-07-26 21:52:59'),
(3, 'avio', 3, '2022-07-26 22:11:04', '2022-07-26 22:11:04'),
(4, 'caixinha', 4, '2022-07-26 22:12:17', '2022-07-26 22:12:17'),
(5, 'biscoito', 5, '2022-07-26 22:41:25', '2022-07-26 22:41:25'),
(6, 'bicicleta', 6, '2022-07-26 23:18:29', '2022-07-26 23:18:29'),
(7, '', 7, '2022-07-27 22:54:41', '2022-07-27 22:54:41'),
(8, 'qual', 8, '2022-07-27 22:54:58', '2022-07-27 22:54:58'),
(9, 'bola2', 9, '2022-08-01 21:56:55', '2022-08-01 21:56:55');

-- --------------------------------------------------------

--
-- Estrutura da tabela `sequelizemeta`
--

DROP TABLE IF EXISTS `sequelizemeta`;
CREATE TABLE IF NOT EXISTS `sequelizemeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`name`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Extraindo dados da tabela `sequelizemeta`
--

INSERT INTO `sequelizemeta` (`name`) VALUES
('20220723172341-create-user.js'),
('20220723172514-create-tracking.js'),
('20220723172610-create-product.js'),
('20220801223406-create-token.js');

-- --------------------------------------------------------

--
-- Estrutura da tabela `tokens`
--

DROP TABLE IF EXISTS `tokens`;
CREATE TABLE IF NOT EXISTS `tokens` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `token` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estrutura da tabela `trackings`
--

DROP TABLE IF EXISTS `trackings`;
CREATE TABLE IF NOT EXISTS `trackings` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `code` varchar(255) DEFAULT NULL,
  `local` varchar(255) DEFAULT NULL,
  `userId` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `userId` (`userId`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `trackings`
--

INSERT INTO `trackings` (`id`, `code`, `local`, `userId`, `createdAt`, `updatedAt`) VALUES
(1, 'BR7876HGH66', 'Natal', 1, '2022-07-23 14:45:43', '2022-07-23 14:45:43'),
(2, '3meQrTEdl0z0l3KoEmD0', 'Av. Prudente de morais, 200 - Natal / RN', 1, '2022-07-26 21:52:59', '2022-07-26 21:52:59'),
(3, 'nNhne2J2oYtvd9bkcm59', 'Av. Prudente de morais, 200 - Natal / RN', 1, '2022-07-26 22:11:04', '2022-07-26 22:11:04'),
(4, 'YMm000iIbFF3bjYLc5KO', 'Av. Prudente de morais, 200 - Natal / RN', 1, '2022-07-26 22:12:17', '2022-07-26 22:12:17'),
(5, 'QJAUq2gT4JLnAt6Mqst1', 'Av. Prudente de morais, 200 - Natal / RN', 1, '2022-07-26 22:41:25', '2022-07-26 22:41:25'),
(6, 'CJfoBbiKVWr2EsDNnCS6', 'Av. Prudente de morais, 200 - Natal / RN', 1, '2022-07-26 23:18:29', '2022-07-26 23:18:29'),
(7, 'Ae2ppWfhKPdbrend5Wv5', 'Av. Prudente de morais, 200 - Natal / RN', 1, '2022-07-27 22:54:41', '2022-07-27 22:54:41'),
(8, 'g8h2uf0eqMkiq8dFRsNj', 'Av. Prudente de morais, 200 - Natal / RN', 1, '2022-07-27 22:54:58', '2022-07-27 22:54:58'),
(9, 'clEZoqHCt3M1n7PmvCFV', 'Av. Prudente de morais, 200 - Natal / RN', 1, '2022-08-01 21:56:55', '2022-08-01 21:56:55');

-- --------------------------------------------------------

--
-- Estrutura da tabela `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `users`
--

INSERT INTO `users` (`id`, `name`, `password`, `createdAt`, `updatedAt`) VALUES
(1, 'marques', '123', '2022-07-23 14:41:42', '2022-08-01 22:12:26'),
(2, 'gustavo', '123', '2022-07-23 17:41:42', '2022-07-23 17:41:42'),
(3, 'joao', 'abc', '2022-07-23 18:37:16', '2022-07-23 18:37:16'),
(4, 'tes', 'eee', '2022-07-30 18:31:55', '2022-07-30 18:31:55');

--
-- Restrições para despejos de tabelas
--

--
-- Limitadores para a tabela `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_ibfk_1` FOREIGN KEY (`trackingId`) REFERENCES `trackings` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Limitadores para a tabela `trackings`
--
ALTER TABLE `trackings`
  ADD CONSTRAINT `trackings_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

