{
  Inbox: {
    abi: [ [Object], [Object], [Object] ],
    devdoc: { kind: 'dev', methods: {}, version: 1 },
    evm: {
      assembly: '    /* "inbox":25:264  contract Inbox {... */\n' +
        '  mstore(0x40, 0x80)\n' +
        '    /* "inbox":78:162  constructor(string memory initialMessage)  {... */\n' +
        '  callvalue\n' +
        '  dup1\n' +
        '  iszero\n' +
        '  tag_1\n' +
        '  jumpi\n' +
        '  0x00\n' +
        '  dup1\n' +
        '  revert\n' +
        'tag_1:\n' +
        '  pop\n' +
        '  mload(0x40)\n' +
        '  sub(codesize, bytecodeSize)\n' +
        '  dup1\n' +
        '  bytecodeSize\n' +
        '  dup4\n' +
        '  codecopy\n' +
        '  dup2\n' +
        '  dup2\n' +
        '  add\n' +
        '  0x40\n' +
        '  mstore\n' +
        '  dup2\n' +
        '  add\n' +
        '  swap1\n' +
        '  tag_2\n' +
        '  swap2\n' +
        '  swap1\n' +
        '  tag_3\n' +
        '  jump\t// in\n' +
        'tag_2:\n' +
        '    /* "inbox":141:155  initialMessage */\n' +
        '  dup1\n' +
        '    /* "inbox":131:138  message */\n' +
        '  0x00\n' +
        '    /* "inbox":131:155  message = initialMessage */\n' +
        '  swap1\n' +
        '  dup1\n' +
        '  mload\n' +
        '  swap1\n' +
        '  0x20\n' +
        '  add\n' +
        '  swap1\n' +
        '  tag_6\n' +
        '  swap3\n' +
        '  swap2\n' +
        '  swap1\n' +
        '  tag_7\n' +
        '  jump\t// in\n' +
        'tag_6:\n' +
        '  pop\n' +
        '    /* "inbox":78:162  constructor(string memory initialMessage)  {... */\n' +
        '  pop\n' +
        '    /* "inbox":25:264  contract Inbox {... */\n' +
        '  jump(tag_8)\n' +
        'tag_7:\n' +
        '  dup3\n' +
        '  dup1\n' +
        '  sload\n' +
        '  tag_9\n' +
        '  swap1\n' +
        '  tag_10\n' +
        '  jump\t// in\n' +
        'tag_9:\n' +
        '  swap1\n' +
        '  0x00\n' +
        '  mstore\n' +
        '  keccak256(0x00, 0x20)\n' +
        '  swap1\n' +
        '  0x1f\n' +
        '  add\n' +
        '  0x20\n' +
        '  swap1\n' +
        '  div\n' +
        '  dup2\n' +
        '  add\n' +
        '  swap3\n' +
        '  dup3\n' +
        '  tag_12\n' +
        '  jumpi\n' +
        '  0x00\n' +
        '  dup6\n' +
        '  sstore\n' +
        '  jump(tag_11)\n' +
        'tag_12:\n' +
        '  dup3\n' +
        '  0x1f\n' +
        '  lt\n' +
        '  tag_13\n' +
        '  jumpi\n' +
        '  dup1\n' +
        '  mload\n' +
        '  not(0xff)\n' +
        '  and\n' +
        '  dup4\n' +
        '  dup1\n' +
        '  add\n' +
        '  or\n' +
        '  dup6\n' +
        '  sstore\n' +
        '  jump(tag_11)\n' +
        'tag_13:\n' +
        '  dup3\n' +
        '  dup1\n' +
        '  add\n' +
        '  0x01\n' +
        '  add\n' +
        '  dup6\n' +
        '  sstore\n' +
        '  dup3\n' +
        '  iszero\n' +
        '  tag_11\n' +
        '  jumpi\n' +
        '  swap2\n' +
        '  dup3\n' +
        '  add\n' +
        'tag_14:\n' +
        '  dup3\n' +
        '  dup2\n' +
        '  gt\n' +
        '  iszero\n' +
        '  tag_15\n' +
        '  jumpi\n' +
        '  dup3\n' +
        '  mload\n' +
        '  dup3\n' +
        '  sstore\n' +
        '  swap2\n' +
        '  0x20\n' +
        '  add\n' +
        '  swap2\n' +
        '  swap1\n' +
        '  0x01\n' +
        '  add\n' +
        '  swap1\n' +
        '  jump(tag_14)\n' +
        'tag_15:\n' +
        'tag_11:\n' +
        '  pop\n' +
        '  swap1\n' +
        '  pop\n' +
        '  tag_16\n' +
        '  swap2\n' +
        '  swap1\n' +
        '  tag_17\n' +
        '  jump\t// in\n' +
        'tag_16:\n' +
        '  pop\n' +
        '  swap1\n' +
        '  jump\t// out\n' +
        'tag_17:\n' +
        'tag_18:\n' +
        '  dup1\n' +
        '  dup3\n' +
        '  gt\n' +
        '  iszero\n' +
        '  tag_19\n' +
        '  jumpi\n' +
        '  0x00\n' +
        '  dup2\n' +
        '  0x00\n' +
        '  swap1\n' +
        '  sstore\n' +
        '  pop\n' +
        '  0x01\n' +
        '  add\n' +
        '  jump(tag_18)\n' +
        'tag_19:\n' +
        '  pop\n' +
        '  swap1\n' +
        '  jump\t// out\n' +
        '    /* "#utility.yul":7:361   */\n' +
        'tag_21:\n' +
        '    /* "#utility.yul":96:101   */\n' +
        '  0x00\n' +
        '    /* "#utility.yul":121:187   */\n' +
        '  tag_23\n' +
        '    /* "#utility.yul":137:186   */\n' +
        '  tag_24\n' +
        '    /* "#utility.yul":179:185   */\n' +
        '  dup5\n' +
        '    /* "#utility.yul":137:186   */\n' +
        '  tag_25\n' +
        '  jump\t// in\n' +
        'tag_24:\n' +
        '    /* "#utility.yul":121:187   */\n' +
        '  tag_26\n' +
        '  jump\t// in\n' +
        'tag_23:\n' +
        '    /* "#utility.yul":112:187   */\n' +
        '  swap1\n' +
        '  pop\n' +
        '    /* "#utility.yul":210:216   */\n' +
        '  dup3\n' +
        '    /* "#utility.yul":203:208   */\n' +
        '  dup2\n' +
        '    /* "#utility.yul":196:217   */\n' +
        '  mstore\n' +
        '    /* "#utility.yul":248:252   */\n' +
        '  0x20\n' +
        '    /* "#utility.yul":241:246   */\n' +
        '  dup2\n' +
        '    /* "#utility.yul":237:253   */\n' +
        '  add\n' +
        '    /* "#utility.yul":286:289   */\n' +
        '  dup5\n' +
        '    /* "#utility.yul":277:283   */\n' +
        '  dup5\n' +
        '    /* "#utility.yul":272:275   */\n' +
        '  dup5\n' +
        '    /* "#utility.yul":268:284   */\n' +
        '  add\n' +
        '    /* "#utility.yul":265:290   */\n' +
        '  gt\n' +
        '    /* "#utility.yul":262:264   */\n' +
        '  iszero\n' +
        '  tag_27\n' +
        '  jumpi\n' +
        '    /* "#utility.yul":303:304   */\n' +
        '  0x00\n' +
        '    /* "#utility.yul":300:301   */\n' +
        '  dup1\n' +
        '    /* "#utility.yul":293:305   */\n' +
        '  revert\n' +
        '    /* "#utility.yul":262:264   */\n' +
        'tag_27:\n' +
        '    /* "#utility.yul":316:355   */\n' +
        '  tag_28\n' +
        '    /* "#utility.yul":348:354   */\n' +
        '  dup5\n' +
        '    /* "#utility.yul":343:346   */\n' +
        '  dup3\n' +
        '    /* "#utility.yul":338:341   */\n' +
        '  dup6\n' +
        '    /* "#utility.yul":316:355   */\n' +
        '  tag_29\n' +
        '  jump\t// in\n' +
        'tag_28:\n' +
        '    /* "#utility.yul":102:361   */\n' +
        '  pop\n' +
        '  swap4\n' +
        '  swap3\n' +
        '  pop\n' +
        '  pop\n' +
        '  pop\n' +
        '  jump\t// out\n' +
        '    /* "#utility.yul":381:669   */\n' +
        'tag_30:\n' +
        '    /* "#utility.yul":448:453   */\n' +
        '  0x00\n' +
        '    /* "#utility.yul":497:500   */\n' +
        '  dup3\n' +
        '    /* "#utility.yul":490:494   */\n' +
        '  0x1f\n' +
        '    /* "#utility.yul":482:488   */\n' +
        '  dup4\n' +
        '    /* "#utility.yul":478:495   */\n' +
        '  add\n' +
        '    /* "#utility.yul":474:501   */\n' +
        '  slt\n' +
        '    /* "#utility.yul":464:466   */\n' +
        '  tag_32\n' +
        '  jumpi\n' +
        '    /* "#utility.yul":515:516   */\n' +
        '  0x00\n' +
        '    /* "#utility.yul":512:513   */\n' +
        '  dup1\n' +
        '    /* "#utility.yul":505:517   */\n' +
        '  revert\n' +
        '    /* "#utility.yul":464:466   */\n' +
        'tag_32:\n' +
        '    /* "#utility.yul":548:554   */\n' +
        '  dup2\n' +
        '    /* "#utility.yul":542:555   */\n' +
        '  mload\n' +
        '    /* "#utility.yul":573:663   */\n' +
        '  tag_33\n' +
        '    /* "#utility.yul":659:662   */\n' +
        '  dup5\n' +
        '    /* "#utility.yul":651:657   */\n' +
        '  dup3\n' +
        '    /* "#utility.yul":644:648   */\n' +
        '  0x20\n' +
        '    /* "#utility.yul":636:642   */\n' +
        '  dup7\n' +
        '    /* "#utility.yul":632:649   */\n' +
        '  add\n' +
        '    /* "#utility.yul":573:663   */\n' +
        '  tag_21\n' +
        '  jump\t// in\n' +
        'tag_33:\n' +
        '    /* "#utility.yul":564:663   */\n' +
        '  swap2\n' +
        '  pop\n' +
        '    /* "#utility.yul":454:669   */\n' +
        '  pop\n' +
        '  swap3\n' +
        '  swap2\n' +
        '  pop\n' +
        '  pop\n' +
        '  jump\t// out\n' +
        '    /* "#utility.yul":675:1065   */\n' +
        'tag_3:\n' +
        '    /* "#utility.yul":755:761   */\n' +
        '  0x00\n' +
        '    /* "#utility.yul":804:806   */\n' +
        '  0x20\n' +
        '    /* "#utility.yul":792:801   */\n' +
        '  dup3\n' +
        '    /* "#utility.yul":783:790   */\n' +
        '  dup5\n' +
        '    /* "#utility.yul":779:802   */\n' +
        '  sub\n' +
        '    /* "#utility.yul":775:807   */\n' +
        '  slt\n' +
        '    /* "#utility.yul":772:774   */\n' +
        '  iszero\n' +
        '  tag_35\n' +
        '  jumpi\n' +
        '    /* "#utility.yul":820:821   */\n' +
        '  0x00\n' +
        '    /* "#utility.yul":817:818   */\n' +
        '  dup1\n' +
        '    /* "#utility.yul":810:822   */\n' +
        '  revert\n' +
        '    /* "#utility.yul":772:774   */\n' +
        'tag_35:\n' +
        '    /* "#utility.yul":884:885   */\n' +
        '  0x00\n' +
        '    /* "#utility.yul":873:882   */\n' +
        '  dup3\n' +
        '    /* "#utility.yul":869:886   */\n' +
        '  add\n' +
        '    /* "#utility.yul":863:887   */\n' +
        '  mload\n' +
        '    /* "#utility.yul":914:932   */\n' +
        '  0xffffffffffffffff\n' +
        '    /* "#utility.yul":906:912   */\n' +
        '  dup2\n' +
        '    /* "#utility.yul":903:933   */\n' +
        '  gt\n' +
        '    /* "#utility.yul":900:902   */\n' +
        '  iszero\n' +
        '  tag_36\n' +
        '  jumpi\n' +
        '    /* "#utility.yul":946:947   */\n' +
        '  0x00\n' +
        '    /* "#utility.yul":943:944   */\n' +
        '  dup1\n' +
        '    /* "#utility.yul":936:948   */\n' +
        '  revert\n' +
        '    /* "#utility.yul":900:902   */\n' +
        'tag_36:\n' +
        '    /* "#utility.yul":974:1048   */\n' +
        '  tag_37\n' +
        '    /* "#utility.yul":1040:1047   */\n' +
        '  dup5\n' +
        '    /* "#utility.yul":1031:1037   */\n' +
        '  dup3\n' +
        '    /* "#utility.yul":1020:1029   */\n' +
        '  dup6\n' +
        '    /* "#utility.yul":1016:1038   */\n' +
        '  add\n' +
        '    /* "#utility.yul":974:1048   */\n' +
        '  tag_30\n' +
        '  jump\t// in\n' +
        'tag_37:\n' +
        '    /* "#utility.yul":964:1048   */\n' +
        '  swap2\n' +
        '  pop\n' +
        '    /* "#utility.yul":834:1058   */\n' +
        '  pop\n' +
        '    /* "#utility.yul":762:1065   */\n' +
        '  swap3\n' +
        '  swap2\n' +
        '  pop\n' +
        '  pop\n' +
        '  jump\t// out\n' +
        '    /* "#utility.yul":1071:1200   */\n' +
        'tag_26:\n' +
        '    /* "#utility.yul":1105:1111   */\n' +
        '  0x00\n' +
        '    /* "#utility.yul":1132:1152   */\n' +
        '  tag_39\n' +
        '  tag_40\n' +
        '  jump\t// in\n' +
        'tag_39:\n' +
        '    /* "#utility.yul":1122:1152   */\n' +
        '  swap1\n' +
        '  pop\n' +
        '    /* "#utility.yul":1161:1194   */\n' +
        '  tag_41\n' +
        '    /* "#utility.yul":1189:1193   */\n' +
        '  dup3\n' +
        '    /* "#utility.yul":1181:1187   */\n' +
        '  dup3\n' +
        '    /* "#utility.yul":1161:1194   */\n' +
        '  tag_42\n' +
        '  jump\t// in\n' +
        'tag_41:\n' +
        '    /* "#utility.yul":1112:1200   */\n' +
        '  swap2\n' +
        '  swap1\n' +
        '  pop\n' +
        '  jump\t// out\n' +
        '    /* "#utility.yul":1206:1281   */\n' +
        'tag_40:\n' +
        '    /* "#utility.yul":1239:1245   */\n' +
        '  0x00\n' +
        '    /* "#utility.yul":1272:1274   */\n' +
        '  0x40\n' +
        '    /* "#utility.yul":1266:1275   */\n' +
        '  mload\n' +
        '    /* "#utility.yul":1256:1275   */\n' +
        '  swap1\n' +
        '  pop\n' +
        '    /* "#utility.yul":1246:1281   */\n' +
        '  swap1\n' +
        '  jump\t// out\n' +
        '    /* "#utility.yul":1287:1595   */\n' +
        'tag_25:\n' +
        '    /* "#utility.yul":1349:1353   */\n' +
        '  0x00\n' +
        '    /* "#utility.yul":1439:1457   */\n' +
        '  0xffffffffffffffff\n' +
        '    /* "#utility.yul":1431:1437   */\n' +
        '  dup3\n' +
        '    /* "#utility.yul":1428:1458   */\n' +
        '  gt\n' +
        '    /* "#utility.yul":1425:1427   */\n' +
        '  iszero\n' +
        '  tag_45\n' +
        '  jumpi\n' +
        '    /* "#utility.yul":1461:1479   */\n' +
        '  tag_46\n' +
        '  tag_47\n' +
        '  jump\t// in\n' +
        'tag_46:\n' +
        '    /* "#utility.yul":1425:1427   */\n' +
        'tag_45:\n' +
        '    /* "#utility.yul":1499:1528   */\n' +
        '  tag_48\n' +
        '    /* "#utility.yul":1521:1527   */\n' +
        '  dup3\n' +
        '    /* "#utility.yul":1499:1528   */\n' +
        '  tag_49\n' +
        '  jump\t// in\n' +
        'tag_48:\n' +
        '    /* "#utility.yul":1491:1528   */\n' +
        '  swap1\n' +
        '  pop\n' +
        '    /* "#utility.yul":1583:1587   */\n' +
        '  0x20\n' +
        '    /* "#utility.yul":1577:1581   */\n' +
        '  dup2\n' +
        '    /* "#utility.yul":1573:1588   */\n' +
        '  add\n' +
        '    /* "#utility.yul":1565:1588   */\n' +
        '  swap1\n' +
        '  pop\n' +
        '    /* "#utility.yul":1354:1595   */\n' +
        '  swap2\n' +
        '  swap1\n' +
        '  pop\n' +
        '  jump\t// out\n' +
        '    /* "#utility.yul":1601:1908   */\n' +
        'tag_29:\n' +
        '    /* "#utility.yul":1669:1670   */\n' +
        '  0x00\n' +
        '    /* "#utility.yul":1679:1792   */\n' +
        'tag_51:\n' +
        '    /* "#utility.yul":1693:1699   */\n' +
        '  dup4\n' +
        '    /* "#utility.yul":1690:1691   */\n' +
        '  dup2\n' +
        '    /* "#utility.yul":1687:1700   */\n' +
        '  lt\n' +
        '    /* "#utility.yul":1679:1792   */\n' +
        '  iszero\n' +
        '  tag_53\n' +
        '  jumpi\n' +
        '    /* "#utility.yul":1778:1779   */\n' +
        '  dup1\n' +
        '    /* "#utility.yul":1773:1776   */\n' +
        '  dup3\n' +
        '    /* "#utility.yul":1769:1780   */\n' +
        '  add\n' +
        '    /* "#utility.yul":1763:1781   */\n' +
        '  mload\n' +
        '    /* "#utility.yul":1759:1760   */\n' +
        '  dup2\n' +
        '    /* "#utility.yul":1754:1757   */\n' +
        '  dup5\n' +
        '    /* "#utility.yul":1750:1761   */\n' +
        '  add\n' +
        '    /* "#utility.yul":1743:1782   */\n' +
        '  mstore\n' +
        '    /* "#utility.yul":1715:1717   */\n' +
        '  0x20\n' +
        '    /* "#utility.yul":1712:1713   */\n' +
        '  dup2\n' +
        '    /* "#utility.yul":1708:1718   */\n' +
        '  add\n' +
        '    /* "#utility.yul":1703:1718   */\n' +
        '  swap1\n' +
        '  pop\n' +
        '    /* "#utility.yul":1679:1792   */\n' +
        '  jump(tag_51)\n' +
        'tag_53:\n' +
        '    /* "#utility.yul":1810:1816   */\n' +
        '  dup4\n' +
        '    /* "#utility.yul":1807:1808   */\n' +
        '  dup2\n' +
        '    /* "#utility.yul":1804:1817   */\n' +
        '  gt\n' +
        '    /* "#utility.yul":1801:1803   */\n' +
        '  iszero\n' +
        '  tag_54\n' +
        '  jumpi\n' +
        '    /* "#utility.yul":1890:1891   */\n' +
        '  0x00\n' +
        '    /* "#utility.yul":1881:1887   */\n' +
        '  dup5\n' +
        '    /* "#utility.yul":1876:1879   */\n' +
        '  dup5\n' +
        '    /* "#utility.yul":1872:1888   */\n' +
        '  add\n' +
        '    /* "#utility.yul":1865:1892   */\n' +
        '  mstore\n' +
        '    /* "#utility.yul":1801:1803   */\n' +
        'tag_54:\n' +
        '    /* "#utility.yul":1650:1908   */\n' +
        '  pop\n' +
        '  pop\n' +
        '  pop\n' +
        '  pop\n' +
        '  jump\t// out\n' +
        '    /* "#utility.yul":1914:2234   */\n' +
        'tag_10:\n' +
        '    /* "#utility.yul":1958:1964   */\n' +
        '  0x00\n' +
        '    /* "#utility.yul":1995:1996   */\n' +
        '  0x02\n' +
        '    /* "#utility.yul":1989:1993   */\n' +
        '  dup3\n' +
        '    /* "#utility.yul":1985:1997   */\n' +
        '  div\n' +
        '    /* "#utility.yul":1975:1997   */\n' +
        '  swap1\n' +
        '  pop\n' +
        '    /* "#utility.yul":2042:2043   */\n' +
        '  0x01\n' +
        '    /* "#utility.yul":2036:2040   */\n' +
        '  dup3\n' +
        '    /* "#utility.yul":2032:2044   */\n' +
        '  and\n' +
        '    /* "#utility.yul":2063:2081   */\n' +
        '  dup1\n' +
        '    /* "#utility.yul":2053:2055   */\n' +
        '  tag_56\n' +
        '  jumpi\n' +
        '    /* "#utility.yul":2119:2123   */\n' +
        '  0x7f\n' +
        '    /* "#utility.yul":2111:2117   */\n' +
        '  dup3\n' +
        '    /* "#utility.yul":2107:2124   */\n' +
        '  and\n' +
        '    /* "#utility.yul":2097:2124   */\n' +
        '  swap2\n' +
        '  pop\n' +
        '    /* "#utility.yul":2053:2055   */\n' +
        'tag_56:\n' +
        '    /* "#utility.yul":2181:2183   */\n' +
        '  0x20\n' +
        '    /* "#utility.yul":2173:2179   */\n' +
        '  dup3\n' +
        '    /* "#utility.yul":2170:2184   */\n' +
        '  lt\n' +
        '    /* "#utility.yul":2150:2168   */\n' +
        '  dup2\n' +
        '    /* "#utility.yul":2147:2185   */\n' +
        '  eq\n' +
        '    /* "#utility.yul":2144:2146   */\n' +
        '  iszero\n' +
        '  tag_57\n' +
        '  jumpi\n' +
        '    /* "#utility.yul":2200:2218   */\n' +
        '  tag_58\n' +
        '  tag_59\n' +
        '  jump\t// in\n' +
        'tag_58:\n' +
        '    /* "#utility.yul":2144:2146   */\n' +
        'tag_57:\n' +
        '    /* "#utility.yul":1965:2234   */\n' +
        '  pop\n' +
        '  swap2\n' +
        '  swap1\n' +
        '  pop\n' +
        '  jump\t// out\n' +
        '    /* "#utility.yul":2240:2521   */\n' +
        'tag_42:\n' +
        '    /* "#utility.yul":2323:2350   */\n' +
        '  tag_61\n' +
        '    /* "#utility.yul":2345:2349   */\n' +
        '  dup3\n' +
        '    /* "#utility.yul":2323:2350   */\n' +
        '  tag_49\n' +
        '  jump\t// in\n' +
        'tag_61:\n' +
        '    /* "#utility.yul":2315:2321   */\n' +
        '  dup2\n' +
        '    /* "#utility.yul":2311:2351   */\n' +
        '  add\n' +
        '    /* "#utility.yul":2453:2459   */\n' +
        '  dup2\n' +
        '    /* "#utility.yul":2441:2451   */\n' +
        '  dup2\n' +
        '    /* "#utility.yul":2438:2460   */\n' +
        '  lt\n' +
        '    /* "#utility.yul":2417:2435   */\n' +
        '  0xffffffffffffffff\n' +
        '    /* "#utility.yul":2405:2415   */\n' +
        '  dup3\n' +
        '    /* "#utility.yul":2402:2436   */\n' +
        '  gt\n' +
        '    /* "#utility.yul":2399:2461   */\n' +
        '  or\n' +
        '    /* "#utility.yul":2396:2398   */\n' +
        '  iszero\n' +
        '  tag_62\n' +
        '  jumpi\n' +
        '    /* "#utility.yul":2464:2482   */\n' +
        '  tag_63\n' +
        '  tag_47\n' +
        '  jump\t// in\n' +
        'tag_63:\n' +
        '    /* "#utility.yul":2396:2398   */\n' +
        'tag_62:\n' +
        '    /* "#utility.yul":2504:2514   */\n' +
        '  dup1\n' +
        '    /* "#utility.yul":2500:2502   */\n' +
        '  0x40\n' +
        '    /* "#utility.yul":2493:2515   */\n' +
        '  mstore\n' +
        '    /* "#utility.yul":2283:2521   */\n' +
        '  pop\n' +
        '  pop\n' +
        '  pop\n' +
        '  jump\t// out\n' +
        '    /* "#utility.yul":2527:2707   */\n' +
        'tag_59:\n' +
        '    /* "#utility.yul":2575:2652   */\n' +
        '  0x4e487b7100000000000000000000000000000000000000000000000000000000\n' +
        '    /* "#utility.yul":2572:2573   */\n' +
        '  0x00\n' +
        '    /* "#utility.yul":2565:2653   */\n' +
        '  mstore\n' +
        '    /* "#utility.yul":2672:2676   */\n' +
        '  0x22\n' +
        '    /* "#utility.yul":2669:2670   */\n' +
        '  0x04\n' +
        '    /* "#utility.yul":2662:2677   */\n' +
        '  mstore\n' +
        '    /* "#utility.yul":2696:2700   */\n' +
        '  0x24\n' +
        '    /* "#utility.yul":2693:2694   */\n' +
        '  0x00\n' +
        '    /* "#utility.yul":2686:2701   */\n' +
        '  revert\n' +
        '    /* "#utility.yul":2713:2893   */\n' +
        'tag_47:\n' +
        '    /* "#utility.yul":2761:2838   */\n' +
        '  0x4e487b7100000000000000000000000000000000000000000000000000000000\n' +
        '    /* "#utility.yul":2758:2759   */\n' +
        '  0x00\n' +
        '    /* "#utility.yul":2751:2839   */\n' +
        '  mstore\n' +
        '    /* "#utility.yul":2858:2862   */\n' +
        '  0x41\n' +
        '    /* "#utility.yul":2855:2856   */\n' +
        '  0x04\n' +
        '    /* "#utility.yul":2848:2863   */\n' +
        '  mstore\n' +
        '    /* "#utility.yul":2882:2886   */\n' +
        '  0x24\n' +
        '    /* "#utility.yul":2879:2880   */\n' +
        '  0x00\n' +
        '    /* "#utility.yul":2872:2887   */\n' +
        '  revert\n' +
        '    /* "#utility.yul":2899:3001   */\n' +
        'tag_49:\n' +
        '    /* "#utility.yul":2940:2946   */\n' +
        '  0x00\n' +
        '    /* "#utility.yul":2991:2993   */\n' +
        '  0x1f\n' +
        '    /* "#utility.yul":2987:2994   */\n' +
        '  not\n' +
        '    /* "#utility.yul":2982:2984   */\n' +
        '  0x1f\n' +
        '    /* "#utility.yul":2975:2980   */\n' +
        '  dup4\n' +
        '    /* "#utility.yul":2971:2985   */\n' +
        '  add\n' +
        '    /* "#utility.yul":2967:2995   */\n' +
        '  and\n' +
        '    /* "#utility.yul":2957:2995   */\n' +
        '  swap1\n' +
        '  pop\n' +
        '    /* "#utility.yul":2947:3001   */\n' +
        '  swap2\n' +
        '  swap1\n' +
        '  pop\n' +
        '  jump\t// out\n' +
        '    /* "inbox":25:264  contract Inbox {... */\n' +
        'tag_8:\n' +
        '  dataSize(sub_0)\n' +
        '  dup1\n' +
        '  dataOffset(sub_0)\n' +
        '  0x00\n' +
        '  codecopy\n' +
        '  0x00\n' +
        '  return\n' +
        'stop\n' +
        '\n' +
        'sub_0: assembly {\n' +
        '        /* "inbox":25:264  contract Inbox {... */\n' +
        '      mstore(0x40, 0x80)\n' +
        '      callvalue\n' +
        '      dup1\n' +
        '      iszero\n' +
        '      tag_1\n' +
        '      jumpi\n' +
        '      0x00\n' +
        '      dup1\n' +
        '      revert\n' +
        '    tag_1:\n' +
        '      pop\n' +
        '      jumpi(tag_2, lt(calldatasize, 0x04))\n' +
        '      shr(0xe0, calldataload(0x00))\n' +
        '      dup1\n' +
        '      0x368b8772\n' +
        '      eq\n' +
        '      tag_3\n' +
        '      jumpi\n' +
        '      dup1\n' +
        '      0xe21f37ce\n' +
        '      eq\n' +
        '      tag_4\n' +
        '      jumpi\n' +
        '    tag_2:\n' +
        '      0x00\n' +
        '      dup1\n' +
        '      revert\n' +
        '        /* "inbox":172:262  function setMessage(string memory newMessage) public {... */\n' +
        '    tag_3:\n' +
        '      tag_5\n' +
        '      0x04\n' +
        '      dup1\n' +
        '      calldatasize\n' +
        '      sub\n' +
        '      dup2\n' +
        '      add\n' +
        '      swap1\n' +
        '      tag_6\n' +
        '      swap2\n' +
        '      swap1\n' +
        '      tag_7\n' +
        '      jump\t// in\n' +
        '    tag_6:\n' +
        '      tag_8\n' +
        '      jump\t// in\n' +
        '    tag_5:\n' +
        '      stop\n' +
        '        /* "inbox":46:67  string public message */\n' +
        '    tag_4:\n' +
        '      tag_9\n' +
        '      tag_10\n' +
        '      jump\t// in\n' +
        '    tag_9:\n' +
        '      mload(0x40)\n' +
        '      tag_11\n' +
        '      swap2\n' +
        '      swap1\n' +
        '      tag_12\n' +
        '      jump\t// in\n' +
        '    tag_11:\n' +
        '      mload(0x40)\n' +
        '      dup1\n' +
        '      swap2\n' +
        '      sub\n' +
        '      swap1\n' +
        '      return\n' +
        '        /* "inbox":172:262  function setMessage(string memory newMessage) public {... */\n' +
        '    tag_8:\n' +
        '        /* "inbox":245:255  newMessage */\n' +
        '      dup1\n' +
        '        /* "inbox":235:242  message */\n' +
        '      0x00\n' +
        '        /* "inbox":235:255  message = newMessage */\n' +
        '      swap1\n' +
        '      dup1\n' +
        '      mload\n' +
        '      swap1\n' +
        '      0x20\n' +
        '      add\n' +
        '      swap1\n' +
        '      tag_14\n' +
        '      swap3\n' +
        '      swap2\n' +
        '      swap1\n' +
        '      tag_15\n' +
        '      jump\t// in\n' +
        '    tag_14:\n' +
        '      pop\n' +
        '        /* "inbox":172:262  function setMessage(string memory newMessage) public {... */\n' +
        '      pop\n' +
        '      jump\t// out\n' +
        '        /* "inbox":46:67  string public message */\n' +
        '    tag_10:\n' +
        '      0x00\n' +
        '      dup1\n' +
        '      sload\n' +
        '      tag_16\n' +
        '      swap1\n' +
        '      tag_17\n' +
        '      jump\t// in\n' +
        '    tag_16:\n' +
        '      dup1\n' +
        '      0x1f\n' +
        '      add\n' +
        '      0x20\n' +
        '      dup1\n' +
        '      swap2\n' +
        '      div\n' +
        '      mul\n' +
        '      0x20\n' +
        '      add\n' +
        '      mload(0x40)\n' +
        '      swap1\n' +
        '      dup2\n' +
        '      add\n' +
        '      0x40\n' +
        '      mstore\n' +
        '      dup1\n' +
        '      swap3\n' +
        '      swap2\n' +
        '      swap1\n' +
        '      dup2\n' +
        '      dup2\n' +
        '      mstore\n' +
        '      0x20\n' +
        '      add\n' +
        '      dup3\n' +
        '      dup1\n' +
        '      sload\n' +
        '      tag_18\n' +
        '      swap1\n' +
        '      tag_17\n' +
        '      jump\t// in\n' +
        '    tag_18:\n' +
        '      dup1\n' +
        '      iszero\n' +
        '      tag_19\n' +
        '      jumpi\n' +
        '      dup1\n' +
        '      0x1f\n' +
        '      lt\n' +
        '      tag_20\n' +
        '      jumpi\n' +
        '      0x0100\n' +
        '      dup1\n' +
        '      dup4\n' +
        '      sload\n' +
        '      div\n' +
        '      mul\n' +
        '      dup4\n' +
        '      mstore\n' +
        '      swap2\n' +
        '      0x20\n' +
        '      add\n' +
        '      swap2\n' +
        '      jump(tag_19)\n' +
        '    tag_20:\n' +
        '      dup3\n' +
        '      add\n' +
        '      swap2\n' +
        '      swap1\n' +
        '      0x00\n' +
        '      mstore\n' +
        '      keccak256(0x00, 0x20)\n' +
        '      swap1\n' +
        '    tag_21:\n' +
        '      dup2\n' +
        '      sload\n' +
        '      dup2\n' +
        '      mstore\n' +
        '      swap1\n' +
        '      0x01\n' +
        '      add\n' +
        '      swap1\n' +
        '      0x20\n' +
        '      add\n' +
        '      dup1\n' +
        '      dup4\n' +
        '      gt\n' +
        '      tag_21\n' +
        '      jumpi\n' +
        '      dup3\n' +
        '      swap1\n' +
        '      sub\n' +
        '      0x1f\n' +
        '      and\n' +
        '      dup3\n' +
        '      add\n' +
        '      swap2\n' +
        '    tag_19:\n' +
        '      pop\n' +
        '      pop\n' +
        '      pop\n' +
        '      pop\n' +
        '      pop\n' +
        '      dup2\n' +
        '      jump\t// out\n' +
        '    tag_15:\n' +
        '      dup3\n' +
        '      dup1\n' +
        '      sload\n' +
        '      tag_22\n' +
        '      swap1\n' +
        '      tag_17\n' +
        '      jump\t// in\n' +
        '    tag_22:\n' +
        '      swap1\n' +
        '      0x00\n' +
        '      mstore\n' +
        '      keccak256(0x00, 0x20)\n' +
        '      swap1\n' +
        '      0x1f\n' +
        '      add\n' +
        '      0x20\n' +
        '      swap1\n' +
        '      div\n' +
        '      dup2\n' +
        '      add\n' +
        '      swap3\n' +
        '      dup3\n' +
        '      tag_24\n' +
        '      jumpi\n' +
        '      0x00\n' +
        '      dup6\n' +
        '      sstore\n' +
        '      jump(tag_23)\n' +
        '    tag_24:\n' +
        '      dup3\n' +
        '      0x1f\n' +
        '      lt\n' +
        '      tag_25\n' +
        '      jumpi\n' +
        '      dup1\n' +
        '      mload\n' +
        '      not(0xff)\n' +
        '      and\n' +
        '      dup4\n' +
        '      dup1\n' +
        '      add\n' +
        '      or\n' +
        '      dup6\n' +
        '      sstore\n' +
        '      jump(tag_23)\n' +
        '    tag_25:\n' +
        '      dup3\n' +
        '      dup1\n' +
        '      add\n' +
        '      0x01\n' +
        '      add\n' +
        '      dup6\n' +
        '      sstore\n' +
        '      dup3\n' +
        '      iszero\n' +
        '      tag_23\n' +
        '      jumpi\n' +
        '      swap2\n' +
        '      dup3\n' +
        '      add\n' +
        '    tag_26:\n' +
        '      dup3\n' +
        '      dup2\n' +
        '      gt\n' +
        '      iszero\n' +
        '      tag_27\n' +
        '      jumpi\n' +
        '      dup3\n' +
        '      mload\n' +
        '      dup3\n' +
        '      sstore\n' +
        '      swap2\n' +
        '      0x20\n' +
        '      add\n' +
        '      swap2\n' +
        '      swap1\n' +
        '      0x01\n' +
        '      add\n' +
        '      swap1\n' +
        '      jump(tag_26)\n' +
        '    tag_27:\n' +
        '    tag_23:\n' +
        '      pop\n' +
        '      swap1\n' +
        '      pop\n' +
        '      tag_28\n' +
        '      swap2\n' +
        '      swap1\n' +
        '      tag_29\n' +
        '      jump\t// in\n' +
        '    tag_28:\n' +
        '      pop\n' +
        '      swap1\n' +
        '      jump\t// out\n' +
        '    tag_29:\n' +
        '    tag_30:\n' +
        '      dup1\n' +
        '      dup3\n' +
        '      gt\n' +
        '      iszero\n' +
        '      tag_31\n' +
        '      jumpi\n' +
        '      0x00\n' +
        '      dup2\n' +
        '      0x00\n' +
        '      swap1\n' +
        '      sstore\n' +
        '      pop\n' +
        '      0x01\n' +
        '      add\n' +
        '      jump(tag_30)\n' +
        '    tag_31:\n' +
        '      pop\n' +
        '      swap1\n' +
        '      jump\t// out\n' +
        '        /* "#utility.yul":7:352   */\n' +
        '    tag_33:\n' +
        '        /* "#utility.yul":85:90   */\n' +
        '      0x00\n' +
        '        /* "#utility.yul":110:176   */\n' +
        '      tag_35\n' +
        '        /* "#utility.yul":126:175   */\n' +
        '      tag_36\n' +
        '        /* "#utility.yul":168:174   */\n' +
        '      dup5\n' +
        '        /* "#utility.yul":126:175   */\n' +
        '      tag_37\n' +
        '      jump\t// in\n' +
        '    tag_36:\n' +
        '        /* "#utility.yul":110:176   */\n' +
        '      tag_38\n' +
        '      jump\t// in\n' +
        '    tag_35:\n' +
        '        /* "#utility.yul":101:176   */\n' +
        '      swap1\n' +
        '      pop\n' +
        '        /* "#utility.yul":199:205   */\n' +
        '      dup3\n' +
        '        /* "#utility.yul":192:197   */\n' +
        '      dup2\n' +
        '        /* "#utility.yul":185:206   */\n' +
        '      mstore\n' +
        '        /* "#utility.yul":237:241   */\n' +
        '      0x20\n' +
        '        /* "#utility.yul":230:235   */\n' +
        '      dup2\n' +
        '        /* "#utility.yul":226:242   */\n' +
        '      add\n' +
        '        /* "#utility.yul":275:278   */\n' +
        '      dup5\n' +
        '        /* "#utility.yul":266:272   */\n' +
        '      dup5\n' +
        '        /* "#utility.yul":261:264   */\n' +
        '      dup5\n' +
        '        /* "#utility.yul":257:273   */\n' +
        '      add\n' +
        '        /* "#utility.yul":254:279   */\n' +
        '      gt\n' +
        '        /* "#utility.yul":251:253   */\n' +
        '      iszero\n' +
        '      tag_39\n' +
        '      jumpi\n' +
        '        /* "#utility.yul":292:293   */\n' +
        '      0x00\n' +
        '        /* "#utility.yul":289:290   */\n' +
        '      dup1\n' +
        '        /* "#utility.yul":282:294   */\n' +
        '      revert\n' +
        '        /* "#utility.yul":251:253   */\n' +
        '    tag_39:\n' +
        '        /* "#utility.yul":305:346   */\n' +
        '      tag_40\n' +
        '        /* "#utility.yul":339:345   */\n' +
        '      dup5\n' +
        '        /* "#utility.yul":334:337   */\n' +
        '      dup3\n' +
        '        /* "#utility.yul":329:332   */\n' +
        '      dup6\n' +
        '        /* "#utility.yul":305:346   */\n' +
        '      tag_41\n' +
        '      jump\t// in\n' +
        '    tag_40:\n' +
        '        /* "#utility.yul":91:352   */\n' +
        '      pop\n' +
        '      swap4\n' +
        '      swap3\n' +
        '      pop\n' +
        '      pop\n' +
        '      pop\n' +
        '      jump\t// out\n' +
        '        /* "#utility.yul":372:645   */\n' +
        '    tag_42:\n' +
        '        /* "#utility.yul":428:433   */\n' +
        '      0x00\n' +
        '        /* "#utility.yul":477:480   */\n' +
        '      dup3\n' +
        '        /* "#utility.yul":470:474   */\n' +
        '      0x1f\n' +
        '        /* "#utility.yul":462:468   */\n' +
        '      dup4\n' +
        '        /* "#utility.yul":458:475   */\n' +
        '      add\n' +
        '        /* "#utility.yul":454:481   */\n' +
        '      slt\n' +
        '        /* "#utility.yul":444:446   */\n' +
        '      tag_44\n' +
        '      jumpi\n' +
        '        /* "#utility.yul":495:496   */\n' +
        '      0x00\n' +
        '        /* "#utility.yul":492:493   */\n' +
        '      dup1\n' +
        '        /* "#utility.yul":485:497   */\n' +
        '      revert\n' +
        '        /* "#utility.yul":444:446   */\n' +
        '    tag_44:\n' +
        '        /* "#utility.yul":535:541   */\n' +
        '      dup2\n' +
        '        /* "#utility.yul":522:542   */\n' +
        '      calldataload\n' +
        '        /* "#utility.yul":560:639   */\n' +
        '      tag_45\n' +
        '        /* "#utility.yul":635:638   */\n' +
        '      dup5\n' +
        '        /* "#utility.yul":627:633   */\n' +
        '      dup3\n' +
        '        /* "#utility.yul":620:624   */\n' +
        '      0x20\n' +
        '        /* "#utility.yul":612:618   */\n' +
        '      dup7\n' +
        '        /* "#utility.yul":608:625   */\n' +
        '      add\n' +
        '        /* "#utility.yul":560:639   */\n' +
        '      tag_33\n' +
        '      jump\t// in\n' +
        '    tag_45:\n' +
        '        /* "#utility.yul":551:639   */\n' +
        '      swap2\n' +
        '      pop\n' +
        '        /* "#utility.yul":434:645   */\n' +
        '      pop\n' +
        '      swap3\n' +
        '      swap2\n' +
        '      pop\n' +
        '      pop\n' +
        '      jump\t// out\n' +
        '        /* "#utility.yul":651:1026   */\n' +
        '    tag_7:\n' +
        '        /* "#utility.yul":720:726   */\n' +
        '      0x00\n' +
        '        /* "#utility.yul":769:771   */\n' +
        '      0x20\n' +
        '        /* "#utility.yul":757:766   */\n' +
        '      dup3\n' +
        '        /* "#utility.yul":748:755   */\n' +
        '      dup5\n' +
        '        /* "#utility.yul":744:767   */\n' +
        '      sub\n' +
        '        /* "#utility.yul":740:772   */\n' +
        '      slt\n' +
        '        /* "#utility.yul":737:739   */\n' +
        '      iszero\n' +
        '      tag_47\n' +
        '      jumpi\n' +
        '        /* "#utility.yul":785:786   */\n' +
        '      0x00\n' +
        '        /* "#utility.yul":782:783   */\n' +
        '      dup1\n' +
        '        /* "#utility.yul":775:787   */\n' +
        '      revert\n' +
        '        /* "#utility.yul":737:739   */\n' +
        '    tag_47:\n' +
        '        /* "#utility.yul":856:857   */\n' +
        '      0x00\n' +
        '        /* "#utility.yul":845:854   */\n' +
        '      dup3\n' +
        '        /* "#utility.yul":841:858   */\n' +
        '      add\n' +
        '        /* "#utility.yul":828:859   */\n' +
        '      calldataload\n' +
        '        /* "#utility.yul":886:904   */\n' +
        '      0xffffffffffffffff\n' +
        '        /* "#utility.yul":878:884   */\n' +
        '      dup2\n' +
        '        /* "#utility.yul":875:905   */\n' +
        '      gt\n' +
        '        /* "#utility.yul":872:874   */\n' +
        '      iszero\n' +
        '      tag_48\n' +
        '      jumpi\n' +
        '        /* "#utility.yul":918:919   */\n' +
        '      0x00\n' +
        '        /* "#utility.yul":915:916   */\n' +
        '      dup1\n' +
        '        /* "#utility.yul":908:920   */\n' +
        '      revert\n' +
        '        /* "#utility.yul":872:874   */\n' +
        '    tag_48:\n' +
        '        /* "#utility.yul":946:1009   */\n' +
        '      tag_49\n' +
        '        /* "#utility.yul":1001:1008   */\n' +
        '      dup5\n' +
        '        /* "#utility.yul":992:998   */\n' +
        '      dup3\n' +
        '        /* "#utility.yul":981:990   */\n' +
        '      dup6\n' +
        '        /* "#utility.yul":977:999   */\n' +
        '      add\n' +
        '        /* "#utility.yul":946:1009   */\n' +
        '      tag_42\n' +
        '      jump\t// in\n' +
        '    tag_49:\n' +
        '        /* "#utility.yul":936:1009   */\n' +
        '      swap2\n' +
        '      pop\n' +
        '        /* "#utility.yul":799:1019   */\n' +
        '      pop\n' +
        '        /* "#utility.yul":727:1026   */\n' +
        '      swap3\n' +
        '      swap2\n' +
        '      pop\n' +
        '      pop\n' +
        '      jump\t// out\n' +
        '        /* "#utility.yul":1032:1396   */\n' +
        '    tag_50:\n' +
        '        /* "#utility.yul":1120:1123   */\n' +
        '      0x00\n' +
        '        /* "#utility.yul":1148:1187   */\n' +
        '      tag_52\n' +
        '        /* "#utility.yul":1181:1186   */\n' +
        '      dup3\n' +
        '        /* "#utility.yul":1148:1187   */\n' +
        '      tag_53\n' +
        '      jump\t// in\n' +
        '    tag_52:\n' +
        '        /* "#utility.yul":1203:1274   */\n' +
        '      tag_54\n' +
        '        /* "#utility.yul":1267:1273   */\n' +
        '      dup2\n' +
        '        /* "#utility.yul":1262:1265   */\n' +
        '      dup6\n' +
        '        /* "#utility.yul":1203:1274   */\n' +
        '      tag_55\n' +
        '      jump\t// in\n' +
        '    tag_54:\n' +
        '        /* "#utility.yul":1196:1274   */\n' +
        '      swap4\n' +
        '      pop\n' +
        '        /* "#utility.yul":1283:1335   */\n' +
        '      tag_56\n' +
        '        /* "#utility.yul":1328:1334   */\n' +
        '      dup2\n' +
        '        /* "#utility.yul":1323:1326   */\n' +
        '      dup6\n' +
        '        /* "#utility.yul":1316:1320   */\n' +
        '      0x20\n' +
        '        /* "#utility.yul":1309:1314   */\n' +
        '      dup7\n' +
        '        /* "#utility.yul":1305:1321   */\n' +
        '      add\n' +
        '        /* "#utility.yul":1283:1335   */\n' +
        '      tag_57\n' +
        '      jump\t// in\n' +
        '    tag_56:\n' +
        '        /* "#utility.yul":1360:1389   */\n' +
        '      tag_58\n' +
        '        /* "#utility.yul":1382:1388   */\n' +
        '      dup2\n' +
        '        /* "#utility.yul":1360:1389   */\n' +
        '      tag_59\n' +
        '      jump\t// in\n' +
        '    tag_58:\n' +
        '        /* "#utility.yul":1355:1358   */\n' +
        '      dup5\n' +
        '        /* "#utility.yul":1351:1390   */\n' +
        '      add\n' +
        '        /* "#utility.yul":1344:1390   */\n' +
        '      swap2\n' +
        '      pop\n' +
        '        /* "#utility.yul":1124:1396   */\n' +
        '      pop\n' +
        '      swap3\n' +
        '      swap2\n' +
        '      pop\n' +
        '      pop\n' +
        '      jump\t// out\n' +
        '        /* "#utility.yul":1402:1715   */\n' +
        '    tag_12:\n' +
        '        /* "#utility.yul":1515:1519   */\n' +
        '      0x00\n' +
        '        /* "#utility.yul":1553:1555   */\n' +
        '      0x20\n' +
        '        /* "#utility.yul":1542:1551   */\n' +
        '      dup3\n' +
        '        /* "#utility.yul":1538:1556   */\n' +
        '      add\n' +
        '        /* "#utility.yul":1530:1556   */\n' +
        '      swap1\n' +
        '      pop\n' +
        '        /* "#utility.yul":1602:1611   */\n' +
        '      dup2\n' +
        '        /* "#utility.yul":1596:1600   */\n' +
        '      dup2\n' +
        '        /* "#utility.yul":1592:1612   */\n' +
        '      sub\n' +
        '        /* "#utility.yul":1588:1589   */\n' +
        '      0x00\n' +
        '        /* "#utility.yul":1577:1586   */\n' +
        '      dup4\n' +
        '        /* "#utility.yul":1573:1590   */\n' +
        '      add\n' +
        '        /* "#utility.yul":1566:1613   */\n' +
        '      mstore\n' +
        '        /* "#utility.yul":1630:1708   */\n' +
        '      tag_61\n' +
        '        /* "#utility.yul":1703:1707   */\n' +
        '      dup2\n' +
        '        /* "#utility.yul":1694:1700   */\n' +
        '      dup5\n' +
        '        /* "#utility.yul":1630:1708   */\n' +
        '      tag_50\n' +
        '      jump\t// in\n' +
        '    tag_61:\n' +
        '        /* "#utility.yul":1622:1708   */\n' +
        '      swap1\n' +
        '      pop\n' +
        '        /* "#utility.yul":1520:1715   */\n' +
        '      swap3\n' +
        '      swap2\n' +
        '      pop\n' +
        '      pop\n' +
        '      jump\t// out\n' +
        '        /* "#utility.yul":1721:1850   */\n' +
        '    tag_38:\n' +
        '        /* "#utility.yul":1755:1761   */\n' +
        '      0x00\n' +
        '        /* "#utility.yul":1782:1802   */\n' +
        '      tag_63\n' +
        '      tag_64\n' +
        '      jump\t// in\n' +
        '    tag_63:\n' +
        '        /* "#utility.yul":1772:1802   */\n' +
        '      swap1\n' +
        '      pop\n' +
        '        /* "#utility.yul":1811:1844   */\n' +
        '      tag_65\n' +
        '        /* "#utility.yul":1839:1843   */\n' +
        '      dup3\n' +
        '        /* "#utility.yul":1831:1837   */\n' +
        '      dup3\n' +
        '        /* "#utility.yul":1811:1844   */\n' +
        '      tag_66\n' +
        '      jump\t// in\n' +
        '    tag_65:\n' +
        '        /* "#utility.yul":1762:1850   */\n' +
        '      swap2\n' +
        '      swap1\n' +
        '      pop\n' +
        '      jump\t// out\n' +
        '        /* "#utility.yul":1856:1931   */\n' +
        '    tag_64:\n' +
        '        /* "#utility.yul":1889:1895   */\n' +
        '      0x00\n' +
        '        /* "#utility.yul":1922:1924   */\n' +
        '      0x40\n' +
        '        /* "#utility.yul":1916:1925   */\n' +
        '      mload\n' +
        '        /* "#utility.yul":1906:1925   */\n' +
        '      swap1\n' +
        '      pop\n' +
        '        /* "#utility.yul":1896:1931   */\n' +
        '      swap1\n' +
        '      jump\t// out\n' +
        '        /* "#utility.yul":1937:2245   */\n' +
        '    tag_37:\n' +
        '        /* "#utility.yul":1999:2003   */\n' +
        '      0x00\n' +
        '        /* "#utility.yul":2089:2107   */\n' +
        '      0xffffffffffffffff\n' +
        '        /* "#utility.yul":2081:2087   */\n' +
        '      dup3\n' +
        '        /* "#utility.yul":2078:2108   */\n' +
        '      gt\n' +
        '        /* "#utility.yul":2075:2077   */\n' +
        '      iszero\n' +
        '      tag_69\n' +
        '      jumpi\n' +
        '        /* "#utility.yul":2111:2129   */\n' +
        '      tag_70\n' +
        '      tag_71\n' +
        '      jump\t// in\n' +
        '    tag_70:\n' +
        '        /* "#utility.yul":2075:2077   */\n' +
        '    tag_69:\n' +
        '        /* "#utility.yul":2149:2178   */\n' +
        '      tag_72\n' +
        '        /* "#utility.yul":2171:2177   */\n' +
        '      dup3\n' +
        '        /* "#utility.yul":2149:2178   */\n' +
        '      tag_59\n' +
        '      jump\t// in\n' +
        '    tag_72:\n' +
        '        /* "#utility.yul":2141:2178   */\n' +
        '      swap1\n' +
        '      pop\n' +
        '        /* "#utility.yul":2233:2237   */\n' +
        '      0x20\n' +
        '        /* "#utility.yul":2227:2231   */\n' +
        '      dup2\n' +
        '        /* "#utility.yul":2223:2238   */\n' +
        '      add\n' +
        '        /* "#utility.yul":2215:2238   */\n' +
        '      swap1\n' +
        '      pop\n' +
        '        /* "#utility.yul":2004:2245   */\n' +
        '      swap2\n' +
        '      swap1\n' +
        '      pop\n' +
        '      jump\t// out\n' +
        '        /* "#utility.yul":2251:2350   */\n' +
        '    tag_53:\n' +
        '        /* "#utility.yul":2303:2309   */\n' +
        '      0x00\n' +
        '        /* "#utility.yul":2337:2342   */\n' +
        '      dup2\n' +
        '        /* "#utility.yul":2331:2343   */\n' +
        '      mload\n' +
        '        /* "#utility.yul":2321:2343   */\n' +
        '      swap1\n' +
        '      pop\n' +
        '        /* "#utility.yul":2310:2350   */\n' +
        '      swap2\n' +
        '      swap1\n' +
        '      pop\n' +
        '      jump\t// out\n' +
        '        /* "#utility.yul":2356:2525   */\n' +
        '    tag_55:\n' +
        '        /* "#utility.yul":2440:2451   */\n' +
        '      0x00\n' +
        '        /* "#utility.yul":2474:2480   */\n' +
        '      dup3\n' +
        '        /* "#utility.yul":2469:2472   */\n' +
        '      dup3\n' +
        '        /* "#utility.yul":2462:2481   */\n' +
        '      mstore\n' +
        '        /* "#utility.yul":2514:2518   */\n' +
        '      0x20\n' +
        '        /* "#utility.yul":2509:2512   */\n' +
        '      dup3\n' +
        '        /* "#utility.yul":2505:2519   */\n' +
        '      add\n' +
        '        /* "#utility.yul":2490:2519   */\n' +
        '      swap1\n' +
        '      pop\n' +
        '        /* "#utility.yul":2452:2525   */\n' +
        '      swap3\n' +
        '      swap2\n' +
        '      pop\n' +
        '      pop\n' +
        '      jump\t// out\n' +
        '        /* "#utility.yul":2531:2685   */\n' +
        '    tag_41:\n' +
        '        /* "#utility.yul":2615:2621   */\n' +
        '      dup3\n' +
        '        /* "#utility.yul":2610:2613   */\n' +
        '      dup2\n' +
        '        /* "#utility.yul":2605:2608   */\n' +
        '      dup4\n' +
        '        /* "#utility.yul":2592:2622   */\n' +
        '      calldatacopy\n' +
        '        /* "#utility.yul":2677:2678   */\n' +
        '      0x00\n' +
        '        /* "#utility.yul":2668:2674   */\n' +
        '      dup4\n' +
        '        /* "#utility.yul":2663:2666   */\n' +
        '      dup4\n' +
        '        /* "#utility.yul":2659:2675   */\n' +
        '      add\n' +
        '        /* "#utility.yul":2652:2679   */\n' +
        '      mstore\n' +
        '        /* "#utility.yul":2582:2685   */\n' +
        '      pop\n' +
        '      pop\n' +
        '      pop\n' +
        '      jump\t// out\n' +
        '        /* "#utility.yul":2691:2998   */\n' +
        '    tag_57:\n' +
        '        /* "#utility.yul":2759:2760   */\n' +
        '      0x00\n' +
        '        /* "#utility.yul":2769:2882   */\n' +
        '    tag_77:\n' +
        '        /* "#utility.yul":2783:2789   */\n' +
        '      dup4\n' +
        '        /* "#utility.yul":2780:2781   */\n' +
        '      dup2\n' +
        '        /* "#utility.yul":2777:2790   */\n' +
        '      lt\n' +
        '        /* "#utility.yul":2769:2882   */\n' +
        '      iszero\n' +
        '      tag_79\n' +
        '      jumpi\n' +
        '        /* "#utility.yul":2868:2869   */\n' +
        '      dup1\n' +
        '        /* "#utility.yul":2863:2866   */\n' +
        '      dup3\n' +
        '        /* "#utility.yul":2859:2870   */\n' +
        '      add\n' +
        '        /* "#utility.yul":2853:2871   */\n' +
        '      mload\n' +
        '        /* "#utility.yul":2849:2850   */\n' +
        '      dup2\n' +
        '        /* "#utility.yul":2844:2847   */\n' +
        '      dup5\n' +
        '        /* "#utility.yul":2840:2851   */\n' +
        '      add\n' +
        '        /* "#utility.yul":2833:2872   */\n' +
        '      mstore\n' +
        '        /* "#utility.yul":2805:2807   */\n' +
        '      0x20\n' +
        '        /* "#utility.yul":2802:2803   */\n' +
        '      dup2\n' +
        '        /* "#utility.yul":2798:2808   */\n' +
        '      add\n' +
        '        /* "#utility.yul":2793:2808   */\n' +
        '      swap1\n' +
        '      pop\n' +
        '        /* "#utility.yul":2769:2882   */\n' +
        '      jump(tag_77)\n' +
        '    tag_79:\n' +
        '        /* "#utility.yul":2900:2906   */\n' +
        '      dup4\n' +
        '        /* "#utility.yul":2897:2898   */\n' +
        '      dup2\n' +
        '        /* "#utility.yul":2894:2907   */\n' +
        '      gt\n' +
        '        /* "#utility.yul":2891:2893   */\n' +
        '      iszero\n' +
        '      tag_80\n' +
        '      jumpi\n' +
        '        /* "#utility.yul":2980:2981   */\n' +
        '      0x00\n' +
        '        /* "#utility.yul":2971:2977   */\n' +
        '      dup5\n' +
        '        /* "#utility.yul":2966:2969   */\n' +
        '      dup5\n' +
        '        /* "#utility.yul":2962:2978   */\n' +
        '      add\n' +
        '        /* "#utility.yul":2955:2982   */\n' +
        '      mstore\n' +
        '        /* "#utility.yul":2891:2893   */\n' +
        '    tag_80:\n' +
        '        /* "#utility.yul":2740:2998   */\n' +
        '      pop\n' +
        '      pop\n' +
        '      pop\n' +
        '      pop\n' +
        '      jump\t// out\n' +
        '        /* "#utility.yul":3004:3324   */\n' +
        '    tag_17:\n' +
        '        /* "#utility.yul":3048:3054   */\n' +
        '      0x00\n' +
        '        /* "#utility.yul":3085:3086   */\n' +
        '      0x02\n' +
        '        /* "#utility.yul":3079:3083   */\n' +
        '      dup3\n' +
        '        /* "#utility.yul":3075:3087   */\n' +
        '      div\n' +
        '        /* "#utility.yul":3065:3087   */\n' +
        '      swap1\n' +
        '      pop\n' +
        '        /* "#utility.yul":3132:3133   */\n' +
        '      0x01\n' +
        '        /* "#utility.yul":3126:3130   */\n' +
        '      dup3\n' +
        '        /* "#utility.yul":3122:3134   */\n' +
        '      and\n' +
        '        /* "#utility.yul":3153:3171   */\n' +
        '      dup1\n' +
        '        /* "#utility.yul":3143:3145   */\n' +
        '      tag_82\n' +
        '      jumpi\n' +
        '        /* "#utility.yul":3209:3213   */\n' +
        '      0x7f\n' +
        '        /* "#utility.yul":3201:3207   */\n' +
        '      dup3\n' +
        '        /* "#utility.yul":3197:3214   */\n' +
        '      and\n' +
        '        /* "#utility.yul":3187:3214   */\n' +
        '      swap2\n' +
        '      pop\n' +
        '        /* "#utility.yul":3143:3145   */\n' +
        '    tag_82:\n' +
        '        /* "#utility.yul":3271:3273   */\n' +
        '      0x20\n' +
        '        /* "#utility.yul":3263:3269   */\n' +
        '      dup3\n' +
        '        /* "#utility.yul":3260:3274   */\n' +
        '      lt\n' +
        '        /* "#utility.yul":3240:3258   */\n' +
        '      dup2\n' +
        '        /* "#utility.yul":3237:3275   */\n' +
        '      eq\n' +
        '        /* "#utility.yul":3234:3236   */\n' +
        '      iszero\n' +
        '      tag_83\n' +
        '      jumpi\n' +
        '        /* "#utility.yul":3290:3308   */\n' +
        '      tag_84\n' +
        '      tag_85\n' +
        '      jump\t// in\n' +
        '    tag_84:\n' +
        '        /* "#utility.yul":3234:3236   */\n' +
        '    tag_83:\n' +
        '        /* "#utility.yul":3055:3324   */\n' +
        '      pop\n' +
        '      swap2\n' +
        '      swap1\n' +
        '      pop\n' +
        '      jump\t// out\n' +
        '        /* "#utility.yul":3330:3611   */\n' +
        '    tag_66:\n' +
        '        /* "#utility.yul":3413:3440   */\n' +
        '      tag_87\n' +
        '        /* "#utility.yul":3435:3439   */\n' +
        '      dup3\n' +
        '        /* "#utility.yul":3413:3440   */\n' +
        '      tag_59\n' +
        '      jump\t// in\n' +
        '    tag_87:\n' +
        '        /* "#utility.yul":3405:3411   */\n' +
        '      dup2\n' +
        '        /* "#utility.yul":3401:3441   */\n' +
        '      add\n' +
        '        /* "#utility.yul":3543:3549   */\n' +
        '      dup2\n' +
        '        /* "#utility.yul":3531:3541   */\n' +
        '      dup2\n' +
        '        /* "#utility.yul":3528:3550   */\n' +
        '      lt\n' +
        '        /* "#utility.yul":3507:3525   */\n' +
        '      0xffffffffffffffff\n' +
        '        /* "#utility.yul":3495:3505   */\n' +
        '      dup3\n' +
        '        /* "#utility.yul":3492:3526   */\n' +
        '      gt\n' +
        '        /* "#utility.yul":3489:3551   */\n' +
        '      or\n' +
        '        /* "#utility.yul":3486:3488   */\n' +
        '      iszero\n' +
        '      tag_88\n' +
        '      jumpi\n' +
        '        /* "#utility.yul":3554:3572   */\n' +
        '      tag_89\n' +
        '      tag_71\n' +
        '      jump\t// in\n' +
        '    tag_89:\n' +
        '        /* "#utility.yul":3486:3488   */\n' +
        '    tag_88:\n' +
        '        /* "#utility.yul":3594:3604   */\n' +
        '      dup1\n' +
        '        /* "#utility.yul":3590:3592   */\n' +
        '      0x40\n' +
        '        /* "#utility.yul":3583:3605   */\n' +
        '      mstore\n' +
        '        /* "#utility.yul":3373:3611   */\n' +
        '      pop\n' +
        '      pop\n' +
        '      pop\n' +
        '      jump\t// out\n' +
        '        /* "#utility.yul":3617:3797   */\n' +
        '    tag_85:\n' +
        '        /* "#utility.yul":3665:3742   */\n' +
        '      0x4e487b7100000000000000000000000000000000000000000000000000000000\n' +
        '        /* "#utility.yul":3662:3663   */\n' +
        '      0x00\n' +
        '        /* "#utility.yul":3655:3743   */\n' +
        '      mstore\n' +
        '        /* "#utility.yul":3762:3766   */\n' +
        '      0x22\n' +
        '        /* "#utility.yul":3759:3760   */\n' +
        '      0x04\n' +
        '        /* "#utility.yul":3752:3767   */\n' +
        '      mstore\n' +
        '        /* "#utility.yul":3786:3790   */\n' +
        '      0x24\n' +
        '        /* "#utility.yul":3783:3784   */\n' +
        '      0x00\n' +
        '        /* "#utility.yul":3776:3791   */\n' +
        '      revert\n' +
        '        /* "#utility.yul":3803:3983   */\n' +
        '    tag_71:\n' +
        '        /* "#utility.yul":3851:3928   */\n' +
        '      0x4e487b7100000000000000000000000000000000000000000000000000000000\n' +
        '        /* "#utility.yul":3848:3849   */\n' +
        '      0x00\n' +
        '        /* "#utility.yul":3841:3929   */\n' +
        '      mstore\n' +
        '        /* "#utility.yul":3948:3952   */\n' +
        '      0x41\n' +
        '        /* "#utility.yul":3945:3946   */\n' +
        '      0x04\n' +
        '        /* "#utility.yul":3938:3953   */\n' +
        '      mstore\n' +
        '        /* "#utility.yul":3972:3976   */\n' +
        '      0x24\n' +
        '        /* "#utility.yul":3969:3970   */\n' +
        '      0x00\n' +
        '        /* "#utility.yul":3962:3977   */\n' +
        '      revert\n' +
        '        /* "#utility.yul":3989:4091   */\n' +
        '    tag_59:\n' +
        '        /* "#utility.yul":4030:4036   */\n' +
        '      0x00\n' +
        '        /* "#utility.yul":4081:4083   */\n' +
        '      0x1f\n' +
        '        /* "#utility.yul":4077:4084   */\n' +
        '      not\n' +
        '        /* "#utility.yul":4072:4074   */\n' +
        '      0x1f\n' +
        '        /* "#utility.yul":4065:4070   */\n' +
        '      dup4\n' +
        '        /* "#utility.yul":4061:4075   */\n' +
        '      add\n' +
        '        /* "#utility.yul":4057:4085   */\n' +
        '      and\n' +
        '        /* "#utility.yul":4047:4085   */\n' +
        '      swap1\n' +
        '      pop\n' +
        '        /* "#utility.yul":4037:4091   */\n' +
        '      swap2\n' +
        '      swap1\n' +
        '      pop\n' +
        '      jump\t// out\n' +
        '\n' +
        '    auxdata: 0xa264697066735822122082e9a9a9beaf1a920bebd9e5f75231f6270b58e56d5f2442033b5fc48e21cdd864736f6c63430008040033\n' +
        '}\n',
      bytecode: [Object],
      deployedBytecode: [Object],
      gasEstimates: [Object],
      legacyAssembly: [Object],
      methodIdentifiers: [Object]
    },
    ewasm: { wasm: '' },
    metadata: '{"compiler":{"version":"0.8.4+commit.c7e474f2"},"language":"Solidity","output":{"abi":[{"inputs":[{"internalType":"string","name":"initialMessage","type":"string"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"message","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"newMessage","type":"string"}],"name":"setMessage","outputs":[],"stateMutability":"nonpayable","type":"function"}],"devdoc":{"kind":"dev","methods":{},"version":1},"userdoc":{"kind":"user","methods":{},"version":1}},"settings":{"compilationTarget":{"inbox":"Inbox"},"evmVersion":"istanbul","libraries":{},"metadata":{"bytecodeHash":"ipfs"},"optimizer":{"enabled":false,"runs":200},"remappings":[]},"sources":{"inbox":{"keccak256":"0x036fff5b2fc06c8483a5a49dd13fa8ec7e1d2c8db11a6f1c82b01039ba89f955","urls":["bzz-raw://0efa9af4035af9d0fbf5057be4046bc51ca8615139dcc285a46a027862f9a46b","dweb:/ipfs/QmVSNFyixcr3qZ3zABorzM5vW26CxpuYKBPM3gQJSehP8C"]}},"version":1}',
    storageLayout: { storage: [Array], types: [Object] },
    userdoc: { kind: 'user', methods: {}, version: 1 }
  }
}
