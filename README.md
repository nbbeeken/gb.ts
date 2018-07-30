# Gameboy Emulator

## Resources

[Pandocs](http://bgb.bircd.org/pandocs.htm#cpuregistersandflags)

[HOWTO Emulate](http://fms.komkon.org/EMUL8/HOWTO.html)

[Gameboy overview](http://fms.komkon.org/GameBoy/Tech/Software.html)

#### Instructions TODO

| Done  | Opcode | Instruction Name |
|-------|--------|------------------|
| `[ ]` | `0xC3` | jp nn            |
| `[ ]` | `0xE9` | jp (HL)          |
| `[ ]` | `0x27` | daa              |
| `[ ]` | `0xCE` | adc A,n          |
| `[ ]` | `0xCC` | call Z,nn        |
| `[ ]` | `0x08` | ld (nn),SP       |
| `[ ]` | `0x1F` | rr A             |
| `[ ]` | `0xDC` | call C,nn        |
| `[ ]` | `0xE6` | and n            |
| `[ ]` | `0xD9` | reti             |
| `[ ]` | `0xCD` | call nn          |
| `[ ]` | `0x20` | jr NZ,n          |
| `[ ]` | `0xFA` | ld A,(nn)        |
| `[ ]` | `0xC9` | ret              |
| `[ ]` | `0x86` | add A,(HL)       |
| `[ ]` | `0x8E` | adc A,(HL)       |
| `[ ]` | `0xD0` | ret NC           |
| `[ ]` | `0xC2` | jp NZ,nn         |
| `[ ]` | `0x28` | jr Z, n          |
| `[ ]` | `0x07` | rlc A            |
| `[ ]` | `0xC8` | ret Z            |
| `[ ]` | `0x18` | jr n             |
| `[ ]` | `0xC0` | ret NZ           |
| `[ ]` | `0xFB` | ei               |
| `[ ]` | `0x0F` | rrc A            |
| `[ ]` | `0x17` | rl A             |
| `[ ]` | `0xB6` | or (HL)          |
| `[ ]` | `0x34` | inc (HL)         |
| `[ ]` | `0x10` | stop             |
| `[ ]` | `0xF3` | di               |
| `[ ]` | `0xC4` | call NZ, nn      |
| `[ ]` | `0x37` | scf              |
| `[ ]` | `0xCA` | jp Z,nn          |
| `[ ]` | `0xA6` | and (HL)         |
| `[ ]` | `0x35` | dec (HL)         |
| `[ ]` | `0xDE` | sbc A, n         |
| `[ ]` | `0x96` | sub A, (HL)      |
| `[ ]` | `0x76` | halt             |
| `[ ]` | `0xEE` | xor n            |
| `[ ]` | `0x3F` | ccf              |
| `[ ]` | `0xF8` | ldhl sp, d       |
| `[ ]` | `0x2F` | cpl              |
| `[ ]` | `0xE8` | add SP, d        |
| `[ ]` | `0xC6` | ret              |
| `[ ]` | `0x30` | jr NC, n         |
| `[ ]` | `0xD2` | jp NC, nn        |
| `[ ]` | `0xD4` | call NC, nn      |
| `[ ]` | `0xF6` | or n             |
| `[ ]` | `0x38` | jr C,            |
| `[ ]` | `0xD6` | sub A, n         |
| `[ ]` | `0xDA` | jp C, nn         |
| `[ ]` | `0xD8` | ret C            |
| `[ ]` | `0xAE` | xor (HL)         |
| `[ ]` | `0x9E` | sbc A, (HL)      |
| `[ ]` | `0xBE` | cp (HL)          |
