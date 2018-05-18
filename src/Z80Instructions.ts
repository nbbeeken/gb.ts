import Z80 from "./Z80";

const logInstruction = true;

export default class Z80Instructions {

    /**
     * NOP
     * No Operation
     */
    public static 0x00 = (cpu: Z80) => {
        if (logInstruction) console.log("NOP       - No Operation");
    }

    /**
     * LD BC,nn
     * Load 16-bit immediate into BC
     */
    public static 0x01 = (cpu: Z80) => {
        if (logInstruction) console.log("LD BC,nn  - Load 16-bit immediate into BC");
    }

    /**
     * LD (BC),A
     * Save A to address pointed by BC
     */
    public static 0x02 = (cpu: Z80) => {
        if (logInstruction) console.log("LD (BC),A - Save A to address pointed by BC");
    }

    /**
     * INC BC
     * Increment 16-bit BC
     */
    public static 0x03 = (cpu: Z80) => {
        if (logInstruction) console.log("INC BC    - Increment 16-bit BC");
    }

    /**
     * INC B
     * Increment B
     */
    public static 0x04 = (cpu: Z80) => {
        if (logInstruction) console.log("INC B     - Increment B");
    }

    /**
     * DEC B
     * Decrement B
     */
    public static 0x05 = (cpu: Z80) => {
        if (logInstruction) console.log("DEC B     - Decrement B");
    }

    /**
     * LD B,n
     * Load 8-bit immediate into B
     */
    public static 0x06 = (cpu: Z80) => {
        if (logInstruction) console.log("LD B,n    - Load 8-bit immediate into B");
    }

    /**
     * RLC A
     * Rotate A left with carry
     */
    public static 0x07 = (cpu: Z80) => {
        if (logInstruction) console.log("RLC A     - Rotate A left with carry");
    }

    /**
     * LD (nn),SP
     * Save SP to given address
     */
    public static 0x08 = (cpu: Z80) => {
        if (logInstruction) console.log("LD (nn),SP- Save SP to given address");
    }

    /**
     * ADD HL,BC
     * Add 16-bit BC to HL
     */
    public static 0x09 = (cpu: Z80) => {
        if (logInstruction) console.log("ADD HL,BC - Add 16-bit BC to HL");
    }

    /**
     * LD A,(BC)
     * Load A from address pointed to by BC
     */
    public static 0x0A = (cpu: Z80) => {
        if (logInstruction) console.log("LD A,(BC) - Load A from address pointed to by BC");
    }

    /**
     * DEC BC
     * Decrement 16-bit BC
     */
    public static 0x0B = (cpu: Z80) => {
        if (logInstruction) console.log("DEC BC    - Decrement 16-bit BC");
    }

    /**
     * INC C
     * Increment C
     */
    public static 0x0C = (cpu: Z80) => {
        if (logInstruction) console.log("INC C     - Increment C");
    }

    /**
     * DEC C
     * Decrement C
     */
    public static 0x0D = (cpu: Z80) => {
        if (logInstruction) console.log("DEC C     - Decrement C");
    }

    /**
     * LD C,n
     * Load 8-bit immediate into C
     */
    public static 0x0E = (cpu: Z80) => {
        if (logInstruction) console.log("LD C,n    - Load 8-bit immediate into C");
    }

    /**
     * RRC A
     * Rotate A right with carry
     */
    public static 0x0F = (cpu: Z80) => {
        if (logInstruction) console.log("RRC A     - Rotate A right with carry");
    }

    /**
     * STOP
     * Stop processor
     */
    public static 0x10 = (cpu: Z80) => {
        if (logInstruction) console.log("STOP      - Stop processor");
    }

    /**
     * LD DE,nn
     * Load 16-bit immediate into DE
     */
    public static 0x11 = (cpu: Z80) => {
        if (logInstruction) console.log("LD DE,nn  - Load 16-bit immediate into DE");
    }

    /**
     * LD (DE),A
     * Save A to address pointed by DE
     */
    public static 0x12 = (cpu: Z80) => {
        if (logInstruction) console.log("LD (DE),A - Save A to address pointed by DE");
    }

    /**
     * INC DE
     * Increment 16-bit DE
     */
    public static 0x13 = (cpu: Z80) => {
        if (logInstruction) console.log("INC DE    - Increment 16-bit DE");
    }

    /**
     * INC D
     * Increment D
     */
    public static 0x14 = (cpu: Z80) => {
        if (logInstruction) console.log("INC D     - Increment D");
    }

    /**
     * DEC D
     * Decrement D
     */
    public static 0x15 = (cpu: Z80) => {
        if (logInstruction) console.log("DEC D     - Decrement D");
    }

    /**
     * LD D,n
     * Load 8-bit immediate into D
     */
    public static 0x16 = (cpu: Z80) => {
        if (logInstruction) console.log("LD D,n    - Load 8-bit immediate into D");
    }

    /**
     * RL A
     * Rotate A left
     */
    public static 0x17 = (cpu: Z80) => {
        if (logInstruction) console.log("RL A      - Rotate A left");
    }

    /**
     * JR n
     * Relative jump by signed immediate
     */
    public static 0x18 = (cpu: Z80) => {
        if (logInstruction) console.log("JR n      - Relative jump by signed immediate");
    }

    /**
     * ADD HL,DE
     * Add 16-bit DE to HL
     */
    public static 0x19 = (cpu: Z80) => {
        if (logInstruction) console.log("ADD HL,DE - Add 16-bit DE to HL");
    }

    /**
     * LD A,(DE)
     * Load A from address pointed to by DE
     */
    public static 0x1A = (cpu: Z80) => {
        if (logInstruction) console.log("LD A,(DE) - Load A from address pointed to by DE");
    }

    /**
     * DEC DE
     * Decrement 16-bit DE
     */
    public static 0x1B = (cpu: Z80) => {
        if (logInstruction) console.log("DEC DE    - Decrement 16-bit DE");
    }

    /**
     * INC E
     * Increment E
     */
    public static 0x1C = (cpu: Z80) => {
        if (logInstruction) console.log("INC E     - Increment E");
    }

    /**
     * DEC E
     * Decrement E
     */
    public static 0x1D = (cpu: Z80) => {
        if (logInstruction) console.log("DEC E     - Decrement E");
    }

    /**
     * LD E,n
     * Load 8-bit immediate into E
     */
    public static 0x1E = (cpu: Z80) => {
        if (logInstruction) console.log("LD E,n    - Load 8-bit immediate into E");
    }

    /**
     * RR A
     * Rotate A right
     */
    public static 0x1F = (cpu: Z80) => {
        if (logInstruction) console.log("RR A      - Rotate A right");
    }

    /**
     * JR NZ,n
     * Relative jump by signed immediate if last result was not zero
     */
    public static 0x20 = (cpu: Z80) => {
        if (logInstruction) console.log("JR NZ,n   - Relative jump by signed immediate if last result was not zero");
    }

    /**
     * LD HL,nn
     * Load 16-bit immediate into HL
     */
    public static 0x21 = (cpu: Z80) => {
        if (logInstruction) console.log("LD HL,nn  - Load 16-bit immediate into HL");
    }

    /**
     * LDI (HL),A
     * Save A to address pointed by HL, and increment HL
     */
    public static 0x22 = (cpu: Z80) => {
        if (logInstruction) console.log("LDI (HL),A- Save A to address pointed by HL, and increment HL");
    }

    /**
     * INC HL
     * Increment 16-bit HL
     */
    public static 0x23 = (cpu: Z80) => {
        if (logInstruction) console.log("INC HL    - Increment 16-bit HL");
    }

    /**
     * INC H
     * Increment H
     */
    public static 0x24 = (cpu: Z80) => {
        if (logInstruction) console.log("INC H     - Increment H");
    }

    /**
     * DEC H
     * Decrement H
     */
    public static 0x25 = (cpu: Z80) => {
        if (logInstruction) console.log("DEC H     - Decrement H");
    }

    /**
     * LD H,n
     * Load 8-bit immediate into H
     */
    public static 0x26 = (cpu: Z80) => {
        if (logInstruction) console.log("LD H,n    - Load 8-bit immediate into H");
    }

    /**
     * DAA
     * Adjust A for BCD addition
     */
    public static 0x27 = (cpu: Z80) => {
        if (logInstruction) console.log("DAA       - Adjust A for BCD addition");
    }

    /**
     * JR Z,n
     * Relative jump by signed immediate if last result was zero
     */
    public static 0x28 = (cpu: Z80) => {
        if (logInstruction) console.log("JR Z,n    - Relative jump by signed immediate if last result was zero");
    }

    /**
     * ADD HL,HL
     * Add 16-bit HL to HL
     */
    public static 0x29 = (cpu: Z80) => {
        if (logInstruction) console.log("ADD HL,HL - Add 16-bit HL to HL");
    }

    /**
     * LDI A,(HL)
     * Load A from address pointed to by HL, and increment HL
     */
    public static 0x2A = (cpu: Z80) => {
        if (logInstruction) console.log("LDI A,(HL)- Load A from address pointed to by HL, and increment HL");
    }

    /**
     * DEC HL
     * Decrement 16-bit HL
     */
    public static 0x2B = (cpu: Z80) => {
        if (logInstruction) console.log("DEC HL    - Decrement 16-bit HL");
    }

    /**
     * INC L
     * Increment L
     */
    public static 0x2C = (cpu: Z80) => {
        if (logInstruction) console.log("INC L     - Increment L");
    }

    /**
     * DEC L
     * Decrement L
     */
    public static 0x2D = (cpu: Z80) => {
        if (logInstruction) console.log("DEC L     - Decrement L");
    }

    /**
     * LD L,n
     * Load 8-bit immediate into L
     */
    public static 0x2E = (cpu: Z80) => {
        if (logInstruction) console.log("LD L,n    - Load 8-bit immediate into L");
    }

    /**
     * CPL
     * Complement (logical NOT) on A
     */
    public static 0x2F = (cpu: Z80) => {
        if (logInstruction) console.log("CPL       - Complement (logical NOT) on A");
    }

    /**
     * JR NC,n
     * Relative jump by signed immediate if last result caused no carry
     */
    public static 0x30 = (cpu: Z80) => {
        if (logInstruction) console.log("JR NC,n   - Relative jump by signed immediate if last result caused no carry");
    }

    /**
     * LD SP,nn
     * Load 16-bit immediate into SP
     */
    public static 0x31 = (cpu: Z80) => {
        if (logInstruction) console.log("LD SP,nn  - Load 16-bit immediate into SP");
        cpu.stackPointer = cpu.ram.read16(cpu.pc);
        cpu.programCounter += 2;
        cpu.clock.mCycles = 3;
    }

    /**
     * LDD (HL),A
     * Save A to address pointed by HL, and decrement HL
     */
    public static 0x32 = (cpu: Z80) => {
        if (logInstruction) console.log("LDD (HL),A- Save A to address pointed by HL, and decrement HL");
    }

    /**
     * INC SP
     * Increment 16-bit SP
     */
    public static 0x33 = (cpu: Z80) => {
        if (logInstruction) console.log("INC SP    - Increment 16-bit SP");
    }

    /**
     * INC (HL)
     * Increment value pointed by HL
     */
    public static 0x34 = (cpu: Z80) => {
        if (logInstruction) console.log("INC (HL)  - Increment value pointed by HL");
    }

    /**
     * DEC (HL)
     * Decrement value pointed by HL
     */
    public static 0x35 = (cpu: Z80) => {
        if (logInstruction) console.log("DEC (HL)  - Decrement value pointed by HL");
    }

    /**
     * LD (HL),n
     * Load 8-bit immediate into address pointed by HL
     */
    public static 0x36 = (cpu: Z80) => {
        if (logInstruction) console.log("LD (HL),n - Load 8-bit immediate into address pointed by HL");
    }

    /**
     * SCF
     * Set carry flag
     */
    public static 0x37 = (cpu: Z80) => {
        if (logInstruction) console.log("SCF       - Set carry flag");
    }

    /**
     * JR C,n
     * Relative jump by signed immediate if last result caused carry
     */
    public static 0x38 = (cpu: Z80) => {
        if (logInstruction) console.log("JR C,n    - Relative jump by signed immediate if last result caused carry");
    }

    /**
     * ADD HL,SP
     * Add 16-bit SP to HL
     */
    public static 0x39 = (cpu: Z80) => {
        if (logInstruction) console.log("ADD HL,SP - Add 16-bit SP to HL");
    }

    /**
     * LDD A,(HL)
     * Load A from address pointed to by HL, and decrement HL
     */
    public static 0x3A = (cpu: Z80) => {
        if (logInstruction) console.log("LDD A,(HL)- Load A from address pointed to by HL, and decrement HL");
    }

    /**
     * DEC SP
     * Decrement 16-bit SP
     */
    public static 0x3B = (cpu: Z80) => {
        if (logInstruction) console.log("DEC SP    - Decrement 16-bit SP");
    }

    /**
     * INC A
     * Increment A
     */
    public static 0x3C = (cpu: Z80) => {
        if (logInstruction) console.log("INC A     - Increment A");
    }

    /**
     * DEC A
     * Decrement A
     */
    public static 0x3D = (cpu: Z80) => {
        if (logInstruction) console.log("DEC A     - Decrement A");
    }

    /**
     * LD A,n
     * Load 8-bit immediate into A
     */
    public static 0x3E = (cpu: Z80) => {
        if (logInstruction) console.log("LD A,n    - Load 8-bit immediate into A");
    }

    /**
     * CCF
     * Clear carry flag
     */
    public static 0x3F = (cpu: Z80) => {
        if (logInstruction) console.log("CCF       - Clear carry flag");
    }

    /**
     * LD B,B
     * Copy B to B
     */
    public static 0x40 = (cpu: Z80) => {
        if (logInstruction) console.log("LD B,B    - Copy B to B");
    }

    /**
     * LD B,C
     * Copy C to B
     */
    public static 0x41 = (cpu: Z80) => {
        if (logInstruction) console.log("LD B,C    - Copy C to B");
    }

    /**
     * LD B,D
     * Copy D to B
     */
    public static 0x42 = (cpu: Z80) => {
        if (logInstruction) console.log("LD B,D    - Copy D to B");
    }

    /**
     * LD B,E
     * Copy E to B
     */
    public static 0x43 = (cpu: Z80) => {
        if (logInstruction) console.log("LD B,E    - Copy E to B");
    }

    /**
     * LD B,H
     * Copy H to B
     */
    public static 0x44 = (cpu: Z80) => {
        if (logInstruction) console.log("LD B,H    - Copy H to B");
    }

    /**
     * LD B,L
     * Copy L to B
     */
    public static 0x45 = (cpu: Z80) => {
        if (logInstruction) console.log("LD B,L    - Copy L to B");
    }

    /**
     * LD B,(HL)
     * Copy value pointed by HL to B
     */
    public static 0x46 = (cpu: Z80) => {
        if (logInstruction) console.log("LD B,(HL) - Copy value pointed by HL to B");
    }

    /**
     * LD B,A
     * Copy A to B
     */
    public static 0x47 = (cpu: Z80) => {
        if (logInstruction) console.log("LD B,A    - Copy A to B");
    }

    /**
     * LD C,B
     * Copy B to C
     */
    public static 0x48 = (cpu: Z80) => {
        if (logInstruction) console.log("LD C,B    - Copy B to C");
    }

    /**
     * LD C,C
     * Copy C to C
     */
    public static 0x49 = (cpu: Z80) => {
        if (logInstruction) console.log("LD C,C    - Copy C to C");
    }

    /**
     * LD C,D
     * Copy D to C
     */
    public static 0x4A = (cpu: Z80) => {
        if (logInstruction) console.log("LD C,D    - Copy D to C");
    }

    /**
     * LD C,E
     * Copy E to C
     */
    public static 0x4B = (cpu: Z80) => {
        if (logInstruction) console.log("LD C,E    - Copy E to C");
    }

    /**
     * LD C,H
     * Copy H to C
     */
    public static 0x4C = (cpu: Z80) => {
        if (logInstruction) console.log("LD C,H    - Copy H to C");
    }

    /**
     * LD C,L
     * Copy L to C
     */
    public static 0x4D = (cpu: Z80) => {
        if (logInstruction) console.log("LD C,L    - Copy L to C");
    }

    /**
     * LD C,(HL)
     * Copy value pointed by HL to C
     */
    public static 0x4E = (cpu: Z80) => {
        if (logInstruction) console.log("LD C,(HL) - Copy value pointed by HL to C");
    }

    /**
     * LD C,A
     * Copy A to C
     */
    public static 0x4F = (cpu: Z80) => {
        if (logInstruction) console.log("LD C,A    - Copy A to C");
    }

    /**
     * LD D,B
     * Copy B to D
     */
    public static 0x50 = (cpu: Z80) => {
        if (logInstruction) console.log("LD D,B    - Copy B to D");
    }

    /**
     * LD D,C
     * Copy C to D
     */
    public static 0x51 = (cpu: Z80) => {
        if (logInstruction) console.log("LD D,C    - Copy C to D");
    }

    /**
     * LD D,D
     * Copy D to D
     */
    public static 0x52 = (cpu: Z80) => {
        if (logInstruction) console.log("LD D,D    - Copy D to D");
    }

    /**
     * LD D,E
     * Copy E to D
     */
    public static 0x53 = (cpu: Z80) => {
        if (logInstruction) console.log("LD D,E    - Copy E to D");
    }

    /**
     * LD D,H
     * Copy H to D
     */
    public static 0x54 = (cpu: Z80) => {
        if (logInstruction) console.log("LD D,H    - Copy H to D");
    }

    /**
     * LD D,L
     * Copy L to D
     */
    public static 0x55 = (cpu: Z80) => {
        if (logInstruction) console.log("LD D,L    - Copy L to D");
    }

    /**
     * LD D,(HL)
     * Copy value pointed by HL to D
     */
    public static 0x56 = (cpu: Z80) => {
        if (logInstruction) console.log("LD D,(HL) - Copy value pointed by HL to D");
    }

    /**
     * LD D,A
     * Copy A to D
     */
    public static 0x57 = (cpu: Z80) => {
        if (logInstruction) console.log("LD D,A    - Copy A to D");
    }

    /**
     * LD E,B
     * Copy B to E
     */
    public static 0x58 = (cpu: Z80) => {
        if (logInstruction) console.log("LD E,B    - Copy B to E");
    }

    /**
     * LD E,C
     * Copy C to E
     */
    public static 0x59 = (cpu: Z80) => {
        if (logInstruction) console.log("LD E,C    - Copy C to E");
    }

    /**
     * LD E,D
     * Copy D to E
     */
    public static 0x5A = (cpu: Z80) => {
        if (logInstruction) console.log("LD E,D    - Copy D to E");
    }

    /**
     * LD E,E
     * Copy E to E
     */
    public static 0x5B = (cpu: Z80) => {
        if (logInstruction) console.log("LD E,E    - Copy E to E");
    }

    /**
     * LD E,H
     * Copy H to E
     */
    public static 0x5C = (cpu: Z80) => {
        if (logInstruction) console.log("LD E,H    - Copy H to E");
    }

    /**
     * LD E,L
     * Copy L to E
     */
    public static 0x5D = (cpu: Z80) => {
        if (logInstruction) console.log("LD E,L    - Copy L to E");
    }

    /**
     * LD E,(HL)
     * Copy value pointed by HL to E
     */
    public static 0x5E = (cpu: Z80) => {
        if (logInstruction) console.log("LD E,(HL) - Copy value pointed by HL to E");
    }

    /**
     * LD E,A
     * Copy A to E
     */
    public static 0x5F = (cpu: Z80) => {
        if (logInstruction) console.log("LD E,A    - Copy A to E");
    }

    /**
     * LD H,B
     * Copy B to H
     */
    public static 0x60 = (cpu: Z80) => {
        if (logInstruction) console.log("LD H,B    - Copy B to H");
    }

    /**
     * LD H,C
     * Copy C to H
     */
    public static 0x61 = (cpu: Z80) => {
        if (logInstruction) console.log("LD H,C    - Copy C to H");
    }

    /**
     * LD H,D
     * Copy D to H
     */
    public static 0x62 = (cpu: Z80) => {
        if (logInstruction) console.log("LD H,D    - Copy D to H");
    }

    /**
     * LD H,E
     * Copy E to H
     */
    public static 0x63 = (cpu: Z80) => {
        if (logInstruction) console.log("LD H,E    - Copy E to H");
    }

    /**
     * LD H,H
     * Copy H to H
     */
    public static 0x64 = (cpu: Z80) => {
        if (logInstruction) console.log("LD H,H    - Copy H to H");
    }

    /**
     * LD H,L
     * Copy L to H
     */
    public static 0x65 = (cpu: Z80) => {
        if (logInstruction) console.log("LD H,L    - Copy L to H");
    }

    /**
     * LD H,(HL)
     * Copy value pointed by HL to H
     */
    public static 0x66 = (cpu: Z80) => {
        if (logInstruction) console.log("LD H,(HL) - Copy value pointed by HL to H");
    }

    /**
     * LD H,A
     * Copy A to H
     */
    public static 0x67 = (cpu: Z80) => {
        if (logInstruction) console.log("LD H,A    - Copy A to H");
    }

    /**
     * LD L,B
     * Copy B to L
     */
    public static 0x68 = (cpu: Z80) => {
        if (logInstruction) console.log("LD L,B    - Copy B to L");
    }

    /**
     * LD L,C
     * Copy C to L
     */
    public static 0x69 = (cpu: Z80) => {
        if (logInstruction) console.log("LD L,C    - Copy C to L");
    }

    /**
     * LD L,D
     * Copy D to L
     */
    public static 0x6A = (cpu: Z80) => {
        if (logInstruction) console.log("LD L,D    - Copy D to L");
    }

    /**
     * LD L,E
     * Copy E to L
     */
    public static 0x6B = (cpu: Z80) => {
        if (logInstruction) console.log("LD L,E    - Copy E to L");
    }

    /**
     * LD L,H
     * Copy H to L
     */
    public static 0x6C = (cpu: Z80) => {
        if (logInstruction) console.log("LD L,H    - Copy H to L");
    }

    /**
     * LD L,L
     * Copy L to L
     */
    public static 0x6D = (cpu: Z80) => {
        if (logInstruction) console.log("LD L,L    - Copy L to L");
    }

    /**
     * LD L,(HL)
     * Copy value pointed by HL to L
     */
    public static 0x6E = (cpu: Z80) => {
        if (logInstruction) console.log("LD L,(HL) - Copy value pointed by HL to L");
    }

    /**
     * LD L,A
     * Copy A to L
     */
    public static 0x6F = (cpu: Z80) => {
        if (logInstruction) console.log("LD L,A    - Copy A to L");
    }

    /**
     * LD (HL),B
     * Copy B to address pointed by HL
     */
    public static 0x70 = (cpu: Z80) => {
        if (logInstruction) console.log("LD (HL),B - Copy B to address pointed by HL");
    }

    /**
     * LD (HL),C
     * Copy C to address pointed by HL
     */
    public static 0x71 = (cpu: Z80) => {
        if (logInstruction) console.log("LD (HL),C - Copy C to address pointed by HL");
    }

    /**
     * LD (HL),D
     * Copy D to address pointed by HL
     */
    public static 0x72 = (cpu: Z80) => {
        if (logInstruction) console.log("LD (HL),D - Copy D to address pointed by HL");
    }

    /**
     * LD (HL),E
     * Copy E to address pointed by HL
     */
    public static 0x73 = (cpu: Z80) => {
        if (logInstruction) console.log("LD (HL),E - Copy E to address pointed by HL");
    }

    /**
     * LD (HL),H
     * Copy H to address pointed by HL
     */
    public static 0x74 = (cpu: Z80) => {
        if (logInstruction) console.log("LD (HL),H - Copy H to address pointed by HL");
    }

    /**
     * LD (HL),L
     * Copy L to address pointed by HL
     */
    public static 0x75 = (cpu: Z80) => {
        if (logInstruction) console.log("LD (HL),L - Copy L to address pointed by HL");
    }

    /**
     * HALT
     * Halt processor
     */
    public static 0x76 = (cpu: Z80) => {
        if (logInstruction) console.log("HALT      - Halt processor");
    }

    /**
     * LD (HL),A
     * Copy A to address pointed by HL
     */
    public static 0x77 = (cpu: Z80) => {
        if (logInstruction) console.log("LD (HL),A - Copy A to address pointed by HL");
    }

    /**
     * LD A,B
     * Copy B to A
     */
    public static 0x78 = (cpu: Z80) => {
        if (logInstruction) console.log("LD A,B    - Copy B to A");
    }

    /**
     * LD A,C
     * Copy C to A
     */
    public static 0x79 = (cpu: Z80) => {
        if (logInstruction) console.log("LD A,C    - Copy C to A");
    }

    /**
     * LD A,D
     * Copy D to A
     */
    public static 0x7A = (cpu: Z80) => {
        if (logInstruction) console.log("LD A,D    - Copy D to A");
    }

    /**
     * LD A,E
     * Copy E to A
     */
    public static 0x7B = (cpu: Z80) => {
        if (logInstruction) console.log("LD A,E    - Copy E to A");
    }

    /**
     * LD A,H
     * Copy H to A
     */
    public static 0x7C = (cpu: Z80) => {
        if (logInstruction) console.log("LD A,H    - Copy H to A");
    }

    /**
     * LD A,L
     * Copy L to A
     */
    public static 0x7D = (cpu: Z80) => {
        if (logInstruction) console.log("LD A,L    - Copy L to A");
    }

    /**
     * LD A,(HL)
     * Copy value pointed by HL to A
     */
    public static 0x7E = (cpu: Z80) => {
        if (logInstruction) console.log("LD A,(HL) - Copy value pointed by HL to A");
    }

    /**
     * LD A,A
     * Copy A to A
     */
    public static 0x7F = (cpu: Z80) => {
        if (logInstruction) console.log("LD A,A    - Copy A to A");
    }

    /**
     * ADD A,B
     * Add B to A
     */
    public static 0x80 = (cpu: Z80) => {
        if (logInstruction) console.log("ADD A,B   - Add B to A");
    }

    /**
     * ADD A,C
     * Add C to A
     */
    public static 0x81 = (cpu: Z80) => {
        if (logInstruction) console.log("ADD A,C   - Add C to A");
    }

    /**
     * ADD A,D
     * Add D to A
     */
    public static 0x82 = (cpu: Z80) => {
        if (logInstruction) console.log("ADD A,D   - Add D to A");
    }

    /**
     * ADD A,E
     * Add E to A
     */
    public static 0x83 = (cpu: Z80) => {
        if (logInstruction) console.log("ADD A,E   - Add E to A");
    }

    /**
     * ADD A,H
     * Add H to A
     */
    public static 0x84 = (cpu: Z80) => {
        if (logInstruction) console.log("ADD A,H   - Add H to A");
    }

    /**
     * ADD A,L
     * Add L to A
     */
    public static 0x85 = (cpu: Z80) => {
        if (logInstruction) console.log("ADD A,L   - Add L to A");
    }

    /**
     * ADD A,(HL)
     * Add value pointed by HL to A
     */
    public static 0x86 = (cpu: Z80) => {
        if (logInstruction) console.log("ADD A,(HL)- Add value pointed by HL to A");
    }

    /**
     * ADD A,A
     * Add A to A
     */
    public static 0x87 = (cpu: Z80) => {
        if (logInstruction) console.log("ADD A,A   - Add A to A");
    }

    /**
     * ADC A,B
     * Add B and carry flag to A
     */
    public static 0x88 = (cpu: Z80) => {
        if (logInstruction) console.log("ADC A,B   - Add B and carry flag to A");
    }

    /**
     * ADC A,C
     * Add C and carry flag to A
     */
    public static 0x89 = (cpu: Z80) => {
        if (logInstruction) console.log("ADC A,C   - Add C and carry flag to A");
    }

    /**
     * ADC A,D
     * Add D and carry flag to A
     */
    public static 0x8A = (cpu: Z80) => {
        if (logInstruction) console.log("ADC A,D   - Add D and carry flag to A");
    }

    /**
     * ADC A,E
     * Add E and carry flag to A
     */
    public static 0x8B = (cpu: Z80) => {
        if (logInstruction) console.log("ADC A,E   - Add E and carry flag to A");
    }

    /**
     * ADC A,H
     * Add H and carry flag to A
     */
    public static 0x8C = (cpu: Z80) => {
        if (logInstruction) console.log("ADC A,H   - Add H and carry flag to A");
    }

    /**
     * ADC A,L
     * Add and carry flag L to A
     */
    public static 0x8D = (cpu: Z80) => {
        if (logInstruction) console.log("ADC A,L   - Add and carry flag L to A");
    }

    /**
     * ADC A,(HL)
     * Add value pointed by HL and carry flag to A
     */
    public static 0x8E = (cpu: Z80) => {
        if (logInstruction) console.log("ADC A,(HL)- Add value pointed by HL and carry flag to A");
    }

    /**
     * ADC A,A
     * Add A and carry flag to A
     */
    public static 0x8F = (cpu: Z80) => {
        if (logInstruction) console.log("ADC A,A   - Add A and carry flag to A");
    }

    /**
     * SUB A,B
     * Subtract B from A
     */
    public static 0x90 = (cpu: Z80) => {
        if (logInstruction) console.log("SUB A,B   - Subtract B from A");
    }

    /**
     * SUB A,C
     * Subtract C from A
     */
    public static 0x91 = (cpu: Z80) => {
        if (logInstruction) console.log("SUB A,C   - Subtract C from A");
    }

    /**
     * SUB A,D
     * Subtract D from A
     */
    public static 0x92 = (cpu: Z80) => {
        if (logInstruction) console.log("SUB A,D   - Subtract D from A");
    }

    /**
     * SUB A,E
     * Subtract E from A
     */
    public static 0x93 = (cpu: Z80) => {
        if (logInstruction) console.log("SUB A,E   - Subtract E from A");
    }

    /**
     * SUB A,H
     * Subtract H from A
     */
    public static 0x94 = (cpu: Z80) => {
        if (logInstruction) console.log("SUB A,H   - Subtract H from A");
    }

    /**
     * SUB A,L
     * Subtract L from A
     */
    public static 0x95 = (cpu: Z80) => {
        if (logInstruction) console.log("SUB A,L   - Subtract L from A");
    }

    /**
     * SUB A,(HL)
     * Subtract value pointed by HL from A
     */
    public static 0x96 = (cpu: Z80) => {
        if (logInstruction) console.log("SUB A,(HL)- Subtract value pointed by HL from A");
    }

    /**
     * SUB A,A
     * Subtract A from A
     */
    public static 0x97 = (cpu: Z80) => {
        if (logInstruction) console.log("SUB A,A   - Subtract A from A");
    }

    /**
     * SBC A,B
     * Subtract B and carry flag from A
     */
    public static 0x98 = (cpu: Z80) => {
        if (logInstruction) console.log("SBC A,B   - Subtract B and carry flag from A");
    }

    /**
     * SBC A,C
     * Subtract C and carry flag from A
     */
    public static 0x99 = (cpu: Z80) => {
        if (logInstruction) console.log("SBC A,C   - Subtract C and carry flag from A");
    }

    /**
     * SBC A,D
     * Subtract D and carry flag from A
     */
    public static 0x9A = (cpu: Z80) => {
        if (logInstruction) console.log("SBC A,D   - Subtract D and carry flag from A");
    }

    /**
     * SBC A,E
     * Subtract E and carry flag from A
     */
    public static 0x9B = (cpu: Z80) => {
        if (logInstruction) console.log("SBC A,E   - Subtract E and carry flag from A");
    }

    /**
     * SBC A,H
     * Subtract H and carry flag from A
     */
    public static 0x9C = (cpu: Z80) => {
        if (logInstruction) console.log("SBC A,H   - Subtract H and carry flag from A");
    }

    /**
     * SBC A,L
     * Subtract and carry flag L from A
     */
    public static 0x9D = (cpu: Z80) => {
        if (logInstruction) console.log("SBC A,L   - Subtract and carry flag L from A");
    }

    /**
     * SBC A,(HL)
     * Subtract value pointed by HL and carry flag from A
     */
    public static 0x9E = (cpu: Z80) => {
        if (logInstruction) console.log("SBC A,(HL)- Subtract value pointed by HL and carry flag from A");
    }

    /**
     * SBC A,A
     * Subtract A and carry flag from A
     */
    public static 0x9F = (cpu: Z80) => {
        if (logInstruction) console.log("SBC A,A   - Subtract A and carry flag from A");
    }

    /**
     * AND B
     * Logical AND B against A
     */
    public static 0xA0 = (cpu: Z80) => {
        if (logInstruction) console.log("AND B     - Logical AND B against A");
    }

    /**
     * AND C
     * Logical AND C against A
     */
    public static 0xA1 = (cpu: Z80) => {
        if (logInstruction) console.log("AND C     - Logical AND C against A");
    }

    /**
     * AND D
     * Logical AND D against A
     */
    public static 0xA2 = (cpu: Z80) => {
        if (logInstruction) console.log("AND D     - Logical AND D against A");
    }

    /**
     * AND E
     * Logical AND E against A
     */
    public static 0xA3 = (cpu: Z80) => {
        if (logInstruction) console.log("AND E     - Logical AND E against A");
    }

    /**
     * AND H
     * Logical AND H against A
     */
    public static 0xA4 = (cpu: Z80) => {
        if (logInstruction) console.log("AND H     - Logical AND H against A");
    }

    /**
     * AND L
     * Logical AND L against A
     */
    public static 0xA5 = (cpu: Z80) => {
        if (logInstruction) console.log("AND L     - Logical AND L against A");
    }

    /**
     * AND (HL)
     * Logical AND value pointed by HL against A
     */
    public static 0xA6 = (cpu: Z80) => {
        if (logInstruction) console.log("AND (HL)  - Logical AND value pointed by HL against A");
    }

    /**
     * AND A
     * Logical AND A against A
     */
    public static 0xA7 = (cpu: Z80) => {
        if (logInstruction) console.log("AND A     - Logical AND A against A");
    }

    /**
     * XOR B
     * Logical XOR B against A
     */
    public static 0xA8 = (cpu: Z80) => {
        if (logInstruction) console.log("XOR B     - Logical XOR B against A");
    }

    /**
     * XOR C
     * Logical XOR C against A
     */
    public static 0xA9 = (cpu: Z80) => {
        if (logInstruction) console.log("XOR C     - Logical XOR C against A");
    }

    /**
     * XOR D
     * Logical XOR D against A
     */
    public static 0xAA = (cpu: Z80) => {
        if (logInstruction) console.log("XOR D     - Logical XOR D against A");
    }

    /**
     * XOR E
     * Logical XOR E against A
     */
    public static 0xAB = (cpu: Z80) => {
        if (logInstruction) console.log("XOR E     - Logical XOR E against A");
    }

    /**
     * XOR H
     * Logical XOR H against A
     */
    public static 0xAC = (cpu: Z80) => {
        if (logInstruction) console.log("XOR H     - Logical XOR H against A");
    }

    /**
     * XOR L
     * Logical XOR L against A
     */
    public static 0xAD = (cpu: Z80) => {
        if (logInstruction) console.log("XOR L     - Logical XOR L against A");
    }

    /**
     * XOR (HL)
     * Logical XOR value pointed by HL against A
     */
    public static 0xAE = (cpu: Z80) => {
        if (logInstruction) console.log("XOR (HL)  - Logical XOR value pointed by HL against A");
    }

    /**
     * XOR A
     * Logical XOR A against A
     */
    public static 0xAF = (cpu: Z80) => {
        if (logInstruction) console.log("XOR A     - Logical XOR A against A");
    }

    /**
     * OR B
     * Logical OR B against A
     */
    public static 0xB0 = (cpu: Z80) => {
        if (logInstruction) console.log("OR B      - Logical OR B against A");
    }

    /**
     * OR C
     * Logical OR C against A
     */
    public static 0xB1 = (cpu: Z80) => {
        if (logInstruction) console.log("OR C      - Logical OR C against A");
    }

    /**
     * OR D
     * Logical OR D against A
     */
    public static 0xB2 = (cpu: Z80) => {
        if (logInstruction) console.log("OR D      - Logical OR D against A");
    }

    /**
     * OR E
     * Logical OR E against A
     */
    public static 0xB3 = (cpu: Z80) => {
        if (logInstruction) console.log("OR E      - Logical OR E against A");
    }

    /**
     * OR H
     * Logical OR H against A
     */
    public static 0xB4 = (cpu: Z80) => {
        if (logInstruction) console.log("OR H      - Logical OR H against A");
    }

    /**
     * OR L
     * Logical OR L against A
     */
    public static 0xB5 = (cpu: Z80) => {
        if (logInstruction) console.log("OR L      - Logical OR L against A");
    }

    /**
     * OR (HL)
     * Logical OR value pointed by HL against A
     */
    public static 0xB6 = (cpu: Z80) => {
        if (logInstruction) console.log("OR (HL)   - Logical OR value pointed by HL against A");
    }

    /**
     * OR A
     * Logical OR A against A
     */
    public static 0xB7 = (cpu: Z80) => {
        if (logInstruction) console.log("OR A      - Logical OR A against A");
    }

    /**
     * CP B
     * Compare B against A
     */
    public static 0xB8 = (cpu: Z80) => {
        if (logInstruction) console.log("CP B      - Compare B against A");
    }

    /**
     * CP C
     * Compare C against A
     */
    public static 0xB9 = (cpu: Z80) => {
        if (logInstruction) console.log("CP C      - Compare C against A");
    }

    /**
     * CP D
     * Compare D against A
     */
    public static 0xBA = (cpu: Z80) => {
        if (logInstruction) console.log("CP D      - Compare D against A");
    }

    /**
     * CP E
     * Compare E against A
     */
    public static 0xBB = (cpu: Z80) => {
        if (logInstruction) console.log("CP E      - Compare E against A");
    }

    /**
     * CP H
     * Compare H against A
     */
    public static 0xBC = (cpu: Z80) => {
        if (logInstruction) console.log("CP H      - Compare H against A");
    }

    /**
     * CP L
     * Compare L against A
     */
    public static 0xBD = (cpu: Z80) => {
        if (logInstruction) console.log("CP L      - Compare L against A");
    }

    /**
     * CP (HL)
     * Compare value pointed by HL against A
     */
    public static 0xBE = (cpu: Z80) => {
        if (logInstruction) console.log("CP (HL)   - Compare value pointed by HL against A");
    }

    /**
     * CP A
     * Compare A against A
     */
    public static 0xBF = (cpu: Z80) => {
        if (logInstruction) console.log("CP A      - Compare A against A");
    }

    /**
     * RET NZ
     * Return if last result was not zero
     */
    public static 0xC0 = (cpu: Z80) => {
        if (logInstruction) console.log("RET NZ    - Return if last result was not zero");
    }

    /**
     * POP BC
     * Pop 16-bit value from stack into BC
     */
    public static 0xC1 = (cpu: Z80) => {
        if (logInstruction) console.log("POP BC    - Pop 16-bit value from stack into BC");
    }

    /**
     * JP NZ,nn
     * Absolute jump to 16-bit location if last result was not zero
     */
    public static 0xC2 = (cpu: Z80) => {
        if (logInstruction) console.log("JP NZ,nn  - Absolute jump to 16-bit location if last result was not zero");
    }

    /**
     * JP nn
     * Absolute jump to 16-bit location
     */
    public static 0xC3 = (cpu: Z80) => {
        if (logInstruction) console.log("JP nn     - Absolute jump to 16-bit location");
    }

    /**
     * CALL NZ,nn
     * Call routine at 16-bit location if last result was not zero
     */
    public static 0xC4 = (cpu: Z80) => {
        if (logInstruction) console.log("CALL NZ,nn- Call routine at 16-bit location if last result was not zero");
    }

    /**
     * PUSH BC
     * Push 16-bit BC onto stack
     */
    public static 0xC5 = (cpu: Z80) => {
        if (logInstruction) console.log("PUSH BC   - Push 16-bit BC onto stack");
    }

    /**
     * ADD A,n
     * Add 8-bit immediate to A
     */
    public static 0xC6 = (cpu: Z80) => {
        if (logInstruction) console.log("ADD A,n   - Add 8-bit immediate to A");
    }

    /**
     * RST 0
     * Call routine at address 0000h
     */
    public static 0xC7 = (cpu: Z80) => {
        if (logInstruction) console.log("RST 0     - Call routine at address 0000h");
    }

    /**
     * RET Z
     * Return if last result was zero
     */
    public static 0xC8 = (cpu: Z80) => {
        if (logInstruction) console.log("RET Z     - Return if last result was zero");
    }

    /**
     * RET
     * Return to calling routine
     */
    public static 0xC9 = (cpu: Z80) => {
        if (logInstruction) console.log("RET       - Return to calling routine");
    }

    /**
     * JP Z,nn
     * Absolute jump to 16-bit location if last result was zero
     */
    public static 0xCA = (cpu: Z80) => {
        if (logInstruction) console.log("JP Z,nn   - Absolute jump to 16-bit location if last result was zero");
    }

    /**
     * Ext ops
     * Extended operations (two-byte instruction code)
     */
    public static 0xCB = (cpu: Z80) => {
        if (logInstruction) console.log("Ext ops   - Extended operations (two-byte instruction code)");
        throw Error("Not implemented");
    }

    /**
     * CALL Z,nn
     * Call routine at 16-bit location if last result was zero
     */
    public static 0xCC = (cpu: Z80) => {
        if (logInstruction) console.log("CALL Z,nn - Call routine at 16-bit location if last result was zero");
    }

    /**
     * CALL nn
     * Call routine at 16-bit location
     */
    public static 0xCD = (cpu: Z80) => {
        if (logInstruction) console.log("CALL nn   - Call routine at 16-bit location");
    }

    /**
     * ADC A,n
     * Add 8-bit immediate and carry to A
     */
    public static 0xCE = (cpu: Z80) => {
        if (logInstruction) console.log("ADC A,n   - Add 8-bit immediate and carry to A");
    }

    /**
     * RST 8
     * Call routine at address 0008h
     */
    public static 0xCF = (cpu: Z80) => {
        if (logInstruction) console.log("RST 8     - Call routine at address 0008h");
    }

    /**
     * RET NC
     * Return if last result caused no carry
     */
    public static 0xD0 = (cpu: Z80) => {
        if (logInstruction) console.log("RET NC    - Return if last result caused no carry");
    }

    /**
     * POP DE
     * Pop 16-bit value from stack into DE
     */
    public static 0xD1 = (cpu: Z80) => {
        if (logInstruction) console.log("POP DE    - Pop 16-bit value from stack into DE");
    }

    /**
     * JP NC,nn
     * Absolute jump to 16-bit location if last result caused no carry
     */
    public static 0xD2 = (cpu: Z80) => {
        if (logInstruction) console.log("JP NC,nn  - Absolute jump to 16-bit location if last result caused no carry");
    }

    /**
     * XX
     * Operation removed in this CPU
     */
    public static 0xD3 = (cpu: Z80) => {
        if (logInstruction) console.log("XX        - Operation removed in this CPU");
    }

    /**
     * CALL NC,nn
     * Call routine at 16-bit location if last result caused no carry
     */
    public static 0xD4 = (cpu: Z80) => {
        if (logInstruction) console.log("CALL NC,nn- Call routine at 16-bit location if last result caused no carry");
    }

    /**
     * PUSH DE
     * Push 16-bit DE onto stack
     */
    public static 0xD5 = (cpu: Z80) => {
        if (logInstruction) console.log("PUSH DE   - Push 16-bit DE onto stack");
    }

    /**
     * SUB A,n
     * Subtract 8-bit immediate from A
     */
    public static 0xD6 = (cpu: Z80) => {
        if (logInstruction) console.log("SUB A,n   - Subtract 8-bit immediate from A");
    }

    /**
     * RST 10
     * Call routine at address 0010h
     */
    public static 0xD7 = (cpu: Z80) => {
        if (logInstruction) console.log("RST 10    - Call routine at address 0010h");
    }

    /**
     * RET C
     * Return if last result caused carry
     */
    public static 0xD8 = (cpu: Z80) => {
        if (logInstruction) console.log("RET C     - Return if last result caused carry");
    }

    /**
     * RETI
     * Enable interrupts and return to calling routine
     */
    public static 0xD9 = (cpu: Z80) => {
        if (logInstruction) console.log("RETI      - Enable interrupts and return to calling routine");
    }

    /**
     * JP C,nn
     * Absolute jump to 16-bit location if last result caused carry
     */
    public static 0xDA = (cpu: Z80) => {
        if (logInstruction) console.log("JP C,nn   - Absolute jump to 16-bit location if last result caused carry");
    }

    /**
     * XX
     * Operation removed in this CPU
     */
    public static 0xDB = (cpu: Z80) => {
        if (logInstruction) console.log("XX        - Operation removed in this CPU");
    }

    /**
     * CALL C,nn
     * Call routine at 16-bit location if last result caused carry
     */
    public static 0xDC = (cpu: Z80) => {
        if (logInstruction) console.log("CALL C,nn - Call routine at 16-bit location if last result caused carry");
    }

    /**
     * XX
     * Operation removed in this CPU
     */
    public static 0xDD = (cpu: Z80) => {
        if (logInstruction) console.log("XX        - Operation removed in this CPU");
    }

    /**
     * SBC A,n
     * Subtract 8-bit immediate and carry from A
     */
    public static 0xDE = (cpu: Z80) => {
        if (logInstruction) console.log("SBC A,n   - Subtract 8-bit immediate and carry from A");
    }

    /**
     * RST 18
     * Call routine at address 0018h
     */
    public static 0xDF = (cpu: Z80) => {
        if (logInstruction) console.log("RST 18    - Call routine at address 0018h");
    }

    /**
     * LDH (n),A
     * Save A at address pointed to by (FF00h + 8-bit immediate)
     */
    public static 0xE0 = (cpu: Z80) => {
        if (logInstruction) console.log("LDH (n),A - Save A at address pointed to by (FF00h + 8-bit immediate)");
    }

    /**
     * POP HL
     * Pop 16-bit value from stack into HL
     */
    public static 0xE1 = (cpu: Z80) => {
        if (logInstruction) console.log("POP HL    - Pop 16-bit value from stack into HL");
    }

    /**
     * LDH (C),A
     * Save A at address pointed to by (FF00h + C)
     */
    public static 0xE2 = (cpu: Z80) => {
        if (logInstruction) console.log("LDH (C),A - Save A at address pointed to by (FF00h + C)");
    }

    /**
     * XX
     * Operation removed in this CPU
     */
    public static 0xE3 = (cpu: Z80) => {
        if (logInstruction) console.log("XX        - Operation removed in this CPU");
    }

    /**
     * XX
     * Operation removed in this CPU
     */
    public static 0xE4 = (cpu: Z80) => {
        if (logInstruction) console.log("XX        - Operation removed in this CPU");
    }

    /**
     * PUSH HL
     * Push 16-bit HL onto stack
     */
    public static 0xE5 = (cpu: Z80) => {
        if (logInstruction) console.log("PUSH HL   - Push 16-bit HL onto stack");
    }

    /**
     * AND n
     * Logical AND 8-bit immediate against A
     */
    public static 0xE6 = (cpu: Z80) => {
        if (logInstruction) console.log("AND n     - Logical AND 8-bit immediate against A");
    }

    /**
     * RST 20
     * Call routine at address 0020h
     */
    public static 0xE7 = (cpu: Z80) => {
        if (logInstruction) console.log("RST 20    - Call routine at address 0020h");
    }

    /**
     * ADD SP,d
     * Add signed 8-bit immediate to SP
     */
    public static 0xE8 = (cpu: Z80) => {
        if (logInstruction) console.log("ADD SP,d  - Add signed 8-bit immediate to SP");
    }

    /**
     * JP (HL)
     * Jump to 16-bit value pointed by HL
     */
    public static 0xE9 = (cpu: Z80) => {
        if (logInstruction) console.log("JP (HL)   - Jump to 16-bit value pointed by HL");
    }

    /**
     * LD (nn),A
     * Save A at given 16-bit address
     */
    public static 0xEA = (cpu: Z80) => {
        if (logInstruction) console.log("LD (nn),A - Save A at given 16-bit address");
    }

    /**
     * XX
     * Operation removed in this CPU
     */
    public static 0xEB = (cpu: Z80) => {
        if (logInstruction) console.log("XX        - Operation removed in this CPU");
    }

    /**
     * XX
     * Operation removed in this CPU
     */
    public static 0xEC = (cpu: Z80) => {
        if (logInstruction) console.log("XX        - Operation removed in this CPU");
    }

    /**
     * XX
     * Operation removed in this CPU
     */
    public static 0xED = (cpu: Z80) => {
        if (logInstruction) console.log("XX        - Operation removed in this CPU");
    }

    /**
     * XOR n
     * Logical XOR 8-bit immediate against A
     */
    public static 0xEE = (cpu: Z80) => {
        if (logInstruction) console.log("XOR n     - Logical XOR 8-bit immediate against A");
    }

    /**
     * RST 28
     * Call routine at address 0028h
     */
    public static 0xEF = (cpu: Z80) => {
        if (logInstruction) console.log("RST 28    - Call routine at address 0028h");
    }

    /**
     * LDH A,(n)
     * Load A from address pointed to by (FF00h + 8-bit immediate)
     */
    public static 0xF0 = (cpu: Z80) => {
        if (logInstruction) console.log("LDH A,(n) - Load A from address pointed to by (FF00h + 8-bit immediate)");
    }

    /**
     * POP AF
     * Pop 16-bit value from stack into AF
     */
    public static 0xF1 = (cpu: Z80) => {
        if (logInstruction) console.log("POP AF    - Pop 16-bit value from stack into AF");
    }

    /**
     * XX
     * Operation removed in this CPU
     */
    public static 0xF2 = (cpu: Z80) => {
        if (logInstruction) console.log("XX        - Operation removed in this CPU");
    }

    /**
     * DI
     * DIsable interrupts
     */
    public static 0xF3 = (cpu: Z80) => {
        if (logInstruction) console.log("DI        - DIsable interrupts");
    }

    /**
     * XX
     * Operation removed in this CPU
     */
    public static 0xF4 = (cpu: Z80) => {
        if (logInstruction) console.log("XX        - Operation removed in this CPU");
    }

    /**
     * PUSH AF
     * Push 16-bit AF onto stack
     */
    public static 0xF5 = (cpu: Z80) => {
        if (logInstruction) console.log("PUSH AF   - Push 16-bit AF onto stack");
    }

    /**
     * OR n
     * Logical OR 8-bit immediate against A
     */
    public static 0xF6 = (cpu: Z80) => {
        if (logInstruction) console.log("OR n      - Logical OR 8-bit immediate against A");
    }

    /**
     * RST 30
     * Call routine at address 0030h
     */
    public static 0xF7 = (cpu: Z80) => {
        if (logInstruction) console.log("RST 30    - Call routine at address 0030h");
    }

    /**
     * LDHL SP,d
     * Add signed 8-bit immediate to SP and save result in HL
     */
    public static 0xF8 = (cpu: Z80) => {
        if (logInstruction) console.log("LDHL SP,d - Add signed 8-bit immediate to SP and save result in HL");
    }

    /**
     * LD SP,HL
     * Copy HL to SP
     */
    public static 0xF9 = (cpu: Z80) => {
        if (logInstruction) console.log("LD SP,HL  - Copy HL to SP");
    }

    /**
     * LD A,(nn)
     * Load A from given 16-bit address
     */
    public static 0xFA = (cpu: Z80) => {
        if (logInstruction) console.log("LD A,(nn) - Load A from given 16-bit address");
    }

    /**
     * EI
     * Enable interrupts
     */
    public static 0xFB = (cpu: Z80) => {
        if (logInstruction) console.log("EI        - Enable interrupts");
    }

    /**
     * XX
     * Operation removed in this CPU
     */
    public static 0xFC = (cpu: Z80) => {
        if (logInstruction) console.log("XX        - Operation removed in this CPU");
    }

    /**
     * XX
     * Operation removed in this CPU
     */
    public static 0xFD = (cpu: Z80) => {
        if (logInstruction) console.log("XX        - Operation removed in this CPU");
    }

    /**
     * CP n
     * Compare 8-bit immediate against A
     */
    public static 0xFE = (cpu: Z80) => {
        if (logInstruction) console.log("CP n      - Compare 8-bit immediate against A");
    }

    /**
     * RST 38
     * Call routine at address 0038h
     */
    public static 0xFF = (cpu: Z80) => {
        if (logInstruction) console.log("RST 38    - Call routine at address 0038h");
    }
}
