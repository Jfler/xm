/*
 Navicat Premium Data Transfer

 Source Server         : jf
 Source Server Type    : MySQL
 Source Server Version : 50714
 Source Host           : localhost:3306
 Source Schema         : zouxiu

 Target Server Type    : MySQL
 Target Server Version : 50714
 File Encoding         : 65001

 Date: 28/10/2018 19:24:37
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for denglu
-- ----------------------------
DROP TABLE IF EXISTS `denglu`;
CREATE TABLE `denglu`  (
  `usernumber` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `yzword` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`usernumber`) USING BTREE
) ENGINE = MyISAM CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of denglu
-- ----------------------------
INSERT INTO `denglu` VALUES ('13912345678', '1234');
INSERT INTO `denglu` VALUES ('13511112222', '5814');
INSERT INTO `denglu` VALUES ('15922223333', '0491');
INSERT INTO `denglu` VALUES ('13811112222', '9208');
INSERT INTO `denglu` VALUES ('18912341234', '0624');
INSERT INTO `denglu` VALUES ('13211112222', '6057');

-- ----------------------------
-- Table structure for msg
-- ----------------------------
DROP TABLE IF EXISTS `msg`;
CREATE TABLE `msg`  (
  `guid` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `imgurl` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `tu01url` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `styles` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `price` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `sale` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `size` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `zhekou` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `zk` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `yanse` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `data` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`guid`) USING BTREE
) ENGINE = MyISAM CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of msg
-- ----------------------------
INSERT INTO `msg` VALUES ('0', '../images/msg01.jpg', '../images/datu_01.jpg', 'Prada', '女士牛皮斜挎包', '14400', '7900', '均码', '限时5.5折', '5.5', '黑色', '2018-10-1');
INSERT INTO `msg` VALUES ('1', '../images/msg02.jpg', '../images/datu_06.jpg', 'Tory Burch', '女士链条单肩', '4100', '3895', '中码', '限时9.5折', '9.5', '金色', '2018-3-1');
INSERT INTO `msg` VALUES ('2', '../images/msg03.jpg', '../images/datu_07.jpg', 'Furla', '女士小号链条拼接肩带单肩包', '3490', '1396', 'TU', '限时4折', '4', '粉色', '2008-1-1');
INSERT INTO `msg` VALUES ('3', '../images/msg04.jpg', '../images/datu_08.jpg', 'Tory Burch', '女士菱格纹羊皮单肩包', '2900', '2380', '均码', '限时8.5折', '8.5', '粉色', '2018-5-1');
INSERT INTO `msg` VALUES ('4', '../images/msg05.jpg', '../images/datu_09.jpg', 'Michael Kors', '女士铆钉链条皮包', '1799', '1530', '均码', '限时8.5折', '8.5', '酒红色', '2018-6-1');
INSERT INTO `msg` VALUES ('5', '../images/msg01.jpg', '../images/datu_01.jpg', 'Prada', '女士牛皮斜挎包01', '14400', '7900', '均码', '限时5.5折', '5.5', '黑色', '2012-10-1');
INSERT INTO `msg` VALUES ('6', '../images/msg01.jpg', '../images/datu_01.jpg', 'Prada', '女士牛皮斜挎包02', '14400', '7900', '均码', '限时5.5折', '5.5', '黑色', '2018-10-1');
INSERT INTO `msg` VALUES ('7', '../images/msg01.jpg', '../images/datu_01.jpg', 'Prada', '女士牛皮斜挎包03', '14400', '7900', '均码', '限时5.5折', '5.5', '黑色', '2018-2-1');
INSERT INTO `msg` VALUES ('8', '../images/msg01.jpg', '../images/datu_01.jpg', 'Prada', '女士牛皮斜挎包04', '14400', '7900', '均码', '限时5.5折', '5.5', '黑色', '2018-7-1');
INSERT INTO `msg` VALUES ('9', '../images/msg01.jpg', '../images/datu_01.jpg', 'Prada', '女士牛皮斜挎包05', '14400', '7900', '均码', '限时5.5折', '5.5', '黑色', '2014-10-1');
INSERT INTO `msg` VALUES ('10', '../images/msg01.jpg', '../images/datu_01.jpg', 'Prada', '女士牛皮斜挎包06', '14400', '7900', '均码', '限时5.5折', '5.5', '黑色', '2017-10-1');
INSERT INTO `msg` VALUES ('11', '../images/msg01.jpg', '../images/datu_01.jpg', 'Prada', '女士牛皮斜挎包07', '14400', '7900', '均码', '限时5.5折', '5.5', '黑色', '2018-10-9');
INSERT INTO `msg` VALUES ('12', '../images/msg01.jpg', '../images/datu_01.jpg', 'Prada', '女士牛皮斜挎包08', '14400', '7900', '均码', '限时5.5折', '5.5', '黑色', '2018-20-1');
INSERT INTO `msg` VALUES ('13', '../images/msg01.jpg', '../images/datu_01.jpg', 'Prada', '女士牛皮斜挎包09', '14400', '7900', '均码', '限时5.5折', '5.5', '黑色', '2018-10-1');
INSERT INTO `msg` VALUES ('14', '../images/msg01.jpg', '../images/datu_01.jpg', 'Prada', '女士牛皮斜挎包10', '14400', '7900', '均码', '限时5.5折', '5.5', '黑色', '2018-10-1');
INSERT INTO `msg` VALUES ('15', '../images/msg01.jpg', '../images/datu_01.jpg', 'Prada', '女士牛皮斜挎包11', '14400', '7900', '均码', '限时5.5折', '5.5', '黑色', '2018-10-1');
INSERT INTO `msg` VALUES ('16', '../images/msg01.jpg', '../images/datu_01.jpg', 'Prada', '女士牛皮斜挎包12', '14400', '7900', '均码', '限时5.5折', '5.5', '黑色', '2018-10-1');
INSERT INTO `msg` VALUES ('17', '../images/msg01.jpg', '../images/datu_01.jpg', 'Prada', '女士牛皮斜挎包13', '14400', '7900', '均码', '限时5.5折', '5.5', '黑色', '2018-10-1');
INSERT INTO `msg` VALUES ('18', '../images/msg01.jpg', '../images/datu_01.jpg', 'Prada', '女士牛皮斜挎包14', '14400', '7900', '均码', '限时5.5折', '5.5', '黑色', '2018-10-1');
INSERT INTO `msg` VALUES ('19', '../images/msg01.jpg', '../images/datu_01.jpg', 'Prada', '女士牛皮斜挎包15', '14400', '7900', '均码', '限时5.5折', '5.5', '黑色', '2018-10-1');
INSERT INTO `msg` VALUES ('20', '../images/msg01.jpg', '../images/datu_01.jpg', 'Prada', '女士牛皮斜挎包16', '14400', '7900', '均码', '限时5.5折', '5.5', '黑色', '2018-10-1');
INSERT INTO `msg` VALUES ('21', '../images/msg01.jpg', '../images/datu_01.jpg', 'Prada', '女士牛皮斜挎包17', '14400', '7900', '均码', '限时5.5折', '5.5', '黑色', '2018-10-1');
INSERT INTO `msg` VALUES ('22', '../images/msg01.jpg', '../images/datu_01.jpg', 'Prada', '女士牛皮斜挎包18', '14400', '7900', '均码', '限时5.5折', '5.5', '黑色', '2018-10-1');
INSERT INTO `msg` VALUES ('23', '../images/msg01.jpg', '../images/datu_01.jpg', 'Prada', '女士牛皮斜挎包19', '14400', '7900', '均码', '限时5.5折', '5.5', '黑色', '2018-10-1');
INSERT INTO `msg` VALUES ('24', '../images/msg01.jpg', '../images/datu_01.jpg', 'Prada', '女士牛皮斜挎包20', '14400', '7900', '均码', '限时5.5折', '5.5', '黑色', '2018-10-1');
INSERT INTO `msg` VALUES ('25', '../images/msg01.jpg', '../images/datu_01.jpg', 'Prada', '女士牛皮斜挎包21', '14400', '7900', '均码', '限时5.5折', '5.5', '黑色', '2018-10-1');
INSERT INTO `msg` VALUES ('26', '../images/msg01.jpg', '../images/datu_01.jpg', 'Prada', '女士牛皮斜挎包22', '14400', '7900', '均码', '限时5.5折', '5.5', '黑色', '2018-10-1');
INSERT INTO `msg` VALUES ('27', '../images/msg01.jpg', '../images/datu_01.jpg', 'Prada', '女士牛皮斜挎包23', '14400', '7900', '均码', '限时5.5折', '5.5', '黑色', '2018-10-1');
INSERT INTO `msg` VALUES ('28', '../images/msg01.jpg', '../images/datu_01.jpg', 'Prada', '女士牛皮斜挎包24', '14400', '7900', '均码', '限时5.5折', '5.5', '黑色', '2018-10-1');
INSERT INTO `msg` VALUES ('29', '../images/msg01.jpg', '../images/datu_01.jpg', 'Prada', '女士牛皮斜挎包25', '14400', '7900', '均码', '限时5.5折', '5.5', '黑色', '2018-10-1');
INSERT INTO `msg` VALUES ('30', '../images/msg01.jpg', '../images/datu_01.jpg', 'Prada', '女士牛皮斜挎包26', '14400', '7900', '均码', '限时5.5折', '5.5', '黑色', '2018-10-1');
INSERT INTO `msg` VALUES ('31', '../images/msg01.jpg', '../images/datu_01.jpg', 'Prada', '女士牛皮斜挎包27', '14400', '7900', '均码', '限时5.5折', '5.5', '黑色', '2018-10-1');

-- ----------------------------
-- Table structure for uesrcat
-- ----------------------------
DROP TABLE IF EXISTS `uesrcat`;
CREATE TABLE `uesrcat`  (
  `guid` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `imgurl` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `price` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `sale` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `yanse` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `size` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `styles` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `num` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`guid`) USING BTREE
) ENGINE = MyISAM CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of uesrcat
-- ----------------------------
INSERT INTO `uesrcat` VALUES ('xx', 'xx', 'xx', 'xx', 'xx', 'xx', 'xx', 'xx', 'xx');

SET FOREIGN_KEY_CHECKS = 1;
