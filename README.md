# Gameboy Emulator

## Resources

[Pandocs](http://bgb.bircd.org/pandocs.htm#cpuregistersandflags)

[HOWTO Emulate](http://fms.komkon.org/EMUL8/HOWTO.html)

[Gameboy overview](http://fms.komkon.org/GameBoy/Tech/Software.html)

#### Instructions TODO

| Done  | Opcode | Instruction Name |
|-------|--------|------------------|
| `[x]` | `0xC3` | jp nn            |
| `[x]` | `0xE9` | jp (HL)          |
| `[x]` | `0xC2` | jp NZ,nn         |
| `[x]` | `0xCA` | jp Z,nn          |
| `[x]` | `0xD2` | jp NC, nn        |
| `[x]` | `0xDA` | jp C, nn         |
| `[x]` | `0x18` | jr n             |
| `[ ]` | `0x28` | jr Z, n          |
| `[ ]` | `0x20` | jr NZ,n          |
| `[x]` | `0x38` | jr C, n          |
| `[ ]` | `0x30` | jr NC, n         |

| Done  | Opcode | Instruction Name |
|-------|--------|------------------|
| `[ ]` | `0xCD` | call nn          |
| `[ ]` | `0xCC` | call Z,nn        |
| `[ ]` | `0xDC` | call C,nn        |
| `[ ]` | `0xC4` | call NZ, nn      |
| `[ ]` | `0xD4` | call NC, nn      |
| `[ ]` | `0xD9` | reti             |
| `[ ]` | `0xC6` | ret              |
| `[ ]` | `0xC9` | ret              |
| `[ ]` | `0xD8` | ret C            |
| `[ ]` | `0xD0` | ret NC           |
| `[ ]` | `0xC8` | ret Z            |
| `[ ]` | `0xC0` | ret NZ           |

| Done  | Opcode | Instruction Name |
|-------|--------|------------------|
| `[ ]` | `0x08` | ld (nn),SP       |
| `[ ]` | `0xFA` | ld A,(nn)        |
| `[ ]` | `0xF8` | ldhl sp, d       |

| Done  | Opcode | Instruction Name |
|-------|--------|------------------|
| `[ ]` | `0xE6` | and n            |
| `[ ]` | `0xA6` | and (HL)         |
| `[ ]` | `0x1F` | rr A             |
| `[ ]` | `0x0F` | rrc A            |
| `[ ]` | `0x07` | rlc A            |
| `[ ]` | `0x17` | rl A             |
| `[ ]` | `0x86` | add A,(HL)       |
| `[ ]` | `0xE8` | add SP, d        |
| `[ ]` | `0xDE` | sbc A, n         |
| `[ ]` | `0x9E` | sbc A, (HL)      |
| `[ ]` | `0xD6` | sub A, n         |
| `[ ]` | `0x96` | sub A, (HL)      |
| `[ ]` | `0xAE` | xor (HL)         |
| `[ ]` | `0xEE` | xor n            |
| `[ ]` | `0x3F` | ccf              |
| `[ ]` | `0x2F` | cpl              |
| `[ ]` | `0xBE` | cp (HL)          |
| `[ ]` | `0x37` | scf              |
| `[ ]` | `0x8E` | adc A,(HL)       |
| `[ ]` | `0xCE` | adc A,n          |
| `[ ]` | `0xB6` | or (HL)          |
| `[ ]` | `0xF6` | or n             |
| `[ ]` | `0x34` | inc (HL)         |
| `[ ]` | `0x35` | dec (HL)         |

| Done  | Opcode | Instruction Name |
|-------|--------|------------------|
| `[ ]` | `0x27` | daa              |
| `[ ]` | `0xFB` | ei               |
| `[ ]` | `0xF3` | di               |
| `[ ]` | `0x10` | stop             |
| `[ ]` | `0x76` | halt             |
