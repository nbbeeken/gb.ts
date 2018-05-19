import Z80 from "./Z80";

const logInstruction = true;

export default class Z80Instructions {

    /**
     * NOP
     * No Operation
     */
    public static 0x00 = (cpu: Z80) => {
        if (logInstruction) console.log("NOP       - No Operation");
        throw Error("Not implemented");
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
        throw Error("Not implemented");
    }

    /**
     * INC BC
     * Increment 16-bit BC
     */
    public static 0x03 = (cpu: Z80) => {
        if (logInstruction) console.log("INC BC    - Increment 16-bit BC");
        throw Error("Not implemented");
    }

    /**
     * INC B
     * Increment B
     */
    public static 0x04 = (cpu: Z80) => {
        if (logInstruction) console.log("INC B     - Increment B");
        throw Error("Not implemented");
    }

    /**
     * DEC B
     * Decrement B
     */
    public static 0x05 = (cpu: Z80) => {
        if (logInstruction) console.log("DEC B     - Decrement B");
        throw Error("Not implemented");
    }

    /**
     * LD B,n
     * Load 8-bit immediate into B
     */
    public static 0x06 = (cpu: Z80) => {
        if (logInstruction) console.log("LD B,n    - Load 8-bit immediate into B");
        throw Error("Not implemented");
    }

    /**
     * RLC A
     * Rotate A left with carry
     */
    public static 0x07 = (cpu: Z80) => {
        if (logInstruction) console.log("RLC A     - Rotate A left with carry");
        throw Error("Not implemented");
    }

    /**
     * LD (nn),SP
     * Save SP to given address
     */
    public static 0x08 = (cpu: Z80) => {
        if (logInstruction) console.log("LD (nn),SP- Save SP to given address");
        throw Error("Not implemented");
    }

    /**
     * ADD HL,BC
     * Add 16-bit BC to HL
     */
    public static 0x09 = (cpu: Z80) => {
        if (logInstruction) console.log("ADD HL,BC - Add 16-bit BC to HL");
        throw Error("Not implemented");
    }

    /**
     * LD A,(BC)
     * Load A from address pointed to by BC
     */
    public static 0x0A = (cpu: Z80) => {
        if (logInstruction) console.log("LD A,(BC) - Load A from address pointed to by BC");
        throw Error("Not implemented");
    }

    /**
     * DEC BC
     * Decrement 16-bit BC
     */
    public static 0x0B = (cpu: Z80) => {
        if (logInstruction) console.log("DEC BC    - Decrement 16-bit BC");
        throw Error("Not implemented");
    }

    /**
     * INC C
     * Increment C
     */
    public static 0x0C = (cpu: Z80) => {
        if (logInstruction) console.log("INC C     - Increment C");
        cpu.registers.C++;
        cpu.programCounter++;
    }

    /**
     * DEC C
     * Decrement C
     */
    public static 0x0D = (cpu: Z80) => {
        if (logInstruction) console.log("DEC C     - Decrement C");
        throw Error("Not implemented");
    }

    /**
     * LD C,n
     * Load 8-bit immediate into C
     */
    public static 0x0E = (cpu: Z80) => {
        if (logInstruction) console.log("LD C,n    - Load 8-bit immediate into C");
        cpu.registers.C = cpu.ram.read8(cpu.pc);
        cpu.programCounter++;
    }

    /**
     * RRC A
     * Rotate A right with carry
     */
    public static 0x0F = (cpu: Z80) => {
        if (logInstruction) console.log("RRC A     - Rotate A right with carry");
        throw Error("Not implemented");
    }

    /**
     * STOP
     * Stop processor
     */
    public static 0x10 = (cpu: Z80) => {
        if (logInstruction) console.log("STOP      - Stop processor");
        throw Error("Not implemented");
    }

    /**
     * LD DE,nn
     * Load 16-bit immediate into DE
     */
    public static 0x11 = (cpu: Z80) => {
        if (logInstruction) console.log("LD DE,nn  - Load 16-bit immediate into DE");
        cpu.registers.DE = cpu.ram.read16(cpu.pc);
        cpu.programCounter++;
    }

    /**
     * LD (DE),A
     * Save A to address pointed by DE
     */
    public static 0x12 = (cpu: Z80) => {
        if (logInstruction) console.log("LD (DE),A - Save A to address pointed by DE");
        throw Error("Not implemented");
    }

    /**
     * INC DE
     * Increment 16-bit DE
     */
    public static 0x13 = (cpu: Z80) => {
        if (logInstruction) console.log("INC DE    - Increment 16-bit DE");
        throw Error("Not implemented");
    }

    /**
     * INC D
     * Increment D
     */
    public static 0x14 = (cpu: Z80) => {
        if (logInstruction) console.log("INC D     - Increment D");
        throw Error("Not implemented");
    }

    /**
     * DEC D
     * Decrement D
     */
    public static 0x15 = (cpu: Z80) => {
        if (logInstruction) console.log("DEC D     - Decrement D");
        throw Error("Not implemented");
    }

    /**
     * LD D,n
     * Load 8-bit immediate into D
     */
    public static 0x16 = (cpu: Z80) => {
        if (logInstruction) console.log("LD D,n    - Load 8-bit immediate into D");
        throw Error("Not implemented");
    }

    /**
     * RL A
     * Rotate A left
     */
    public static 0x17 = (cpu: Z80) => {
        if (logInstruction) console.log("RL A      - Rotate A left");
        throw Error("Not implemented");
    }

    /**
     * JR n
     * Relative jump by signed immediate
     */
    public static 0x18 = (cpu: Z80) => {
        if (logInstruction) console.log("JR n      - Relative jump by signed immediate");
        throw Error("Not implemented");
    }

    /**
     * ADD HL,DE
     * Add 16-bit DE to HL
     */
    public static 0x19 = (cpu: Z80) => {
        if (logInstruction) console.log("ADD HL,DE - Add 16-bit DE to HL");
        throw Error("Not implemented");
    }

    /**
     * LD A,(DE)
     * Load A from address pointed to by DE
     */
    public static 0x1A = (cpu: Z80) => {
        if (logInstruction) console.log("LD A,(DE) - Load A from address pointed to by DE");
        throw Error("Not implemented");
    }

    /**
     * DEC DE
     * Decrement 16-bit DE
     */
    public static 0x1B = (cpu: Z80) => {
        if (logInstruction) console.log("DEC DE    - Decrement 16-bit DE");
        throw Error("Not implemented");
    }

    /**
     * INC E
     * Increment E
     */
    public static 0x1C = (cpu: Z80) => {
        if (logInstruction) console.log("INC E     - Increment E");
        throw Error("Not implemented");
    }

    /**
     * DEC E
     * Decrement E
     */
    public static 0x1D = (cpu: Z80) => {
        if (logInstruction) console.log("DEC E     - Decrement E");
        throw Error("Not implemented");
    }

    /**
     * LD E,n
     * Load 8-bit immediate into E
     */
    public static 0x1E = (cpu: Z80) => {
        if (logInstruction) console.log("LD E,n    - Load 8-bit immediate into E");
        throw Error("Not implemented");
    }

    /**
     * RR A
     * Rotate A right
     */
    public static 0x1F = (cpu: Z80) => {
        if (logInstruction) console.log("RR A      - Rotate A right");
        throw Error("Not implemented");
    }

    /**
     * JR NZ,n
     * Relative jump by signed immediate if last result was not zero
     */
    public static 0x20 = (cpu: Z80) => {
        if (logInstruction) console.log("JR NZ,n   - Relative jump by signed immediate if last result was not zero");
        if (cpu.registers.sign) {
            cpu.programCounter += cpu.ram.read8(cpu.pc, true);
            cpu.clock.mCycles++;
        }
        cpu.programCounter++;
        cpu.clock.mCycles = 2;
    }

    /**
     * LD HL,nn
     * Load 16-bit immediate into HL
     */
    public static 0x21 = (cpu: Z80) => {
        if (logInstruction) console.log("LD HL,nn  - Load 16-bit immediate into HL");
        cpu.registers.HL = cpu.ram.read16(cpu.pc);
        cpu.programCounter += 2;
        cpu.clock.mCycles = 3;
    }

    /**
     * LDI (HL),A
     * Save A to address pointed by HL, and increment HL
     */
    public static 0x22 = (cpu: Z80) => {
        if (logInstruction) console.log("LDI (HL),A- Save A to address pointed by HL, and increment HL");
        throw Error("Not implemented");
    }

    /**
     * INC HL
     * Increment 16-bit HL
     */
    public static 0x23 = (cpu: Z80) => {
        if (logInstruction) console.log("INC HL    - Increment 16-bit HL");
        throw Error("Not implemented");
    }

    /**
     * INC H
     * Increment H
     */
    public static 0x24 = (cpu: Z80) => {
        if (logInstruction) console.log("INC H     - Increment H");
        throw Error("Not implemented");
    }

    /**
     * DEC H
     * Decrement H
     */
    public static 0x25 = (cpu: Z80) => {
        if (logInstruction) console.log("DEC H     - Decrement H");
        throw Error("Not implemented");
    }

    /**
     * LD H,n
     * Load 8-bit immediate into H
     */
    public static 0x26 = (cpu: Z80) => {
        if (logInstruction) console.log("LD H,n    - Load 8-bit immediate into H");
        cpu.registers.H = cpu.ram.read8(cpu.pc);
        cpu.programCounter++;
    }

    /**
     * DAA
     * Adjust A for BCD addition
     */
    public static 0x27 = (cpu: Z80) => {
        if (logInstruction) console.log("DAA       - Adjust A for BCD addition");
        throw Error("Not implemented");
    }

    /**
     * JR Z,n
     * Relative jump by signed immediate if last result was zero
     */
    public static 0x28 = (cpu: Z80) => {
        if (logInstruction) console.log("JR Z,n    - Relative jump by signed immediate if last result was zero");
        throw Error("Not implemented");
    }

    /**
     * ADD HL,HL
     * Add 16-bit HL to HL
     */
    public static 0x29 = (cpu: Z80) => {
        if (logInstruction) console.log("ADD HL,HL - Add 16-bit HL to HL");
        throw Error("Not implemented");
    }

    /**
     * LDI A,(HL)
     * Load A from address pointed to by HL, and increment HL
     */
    public static 0x2A = (cpu: Z80) => {
        if (logInstruction) console.log("LDI A,(HL)- Load A from address pointed to by HL, and increment HL");
        throw Error("Not implemented");
    }

    /**
     * DEC HL
     * Decrement 16-bit HL
     */
    public static 0x2B = (cpu: Z80) => {
        if (logInstruction) console.log("DEC HL    - Decrement 16-bit HL");
        throw Error("Not implemented");
    }

    /**
     * INC L
     * Increment L
     */
    public static 0x2C = (cpu: Z80) => {
        if (logInstruction) console.log("INC L     - Increment L");
        throw Error("Not implemented");
    }

    /**
     * DEC L
     * Decrement L
     */
    public static 0x2D = (cpu: Z80) => {
        if (logInstruction) console.log("DEC L     - Decrement L");
        throw Error("Not implemented");
    }

    /**
     * LD L,n
     * Load 8-bit immediate into L
     */
    public static 0x2E = (cpu: Z80) => {
        if (logInstruction) console.log("LD L,n    - Load 8-bit immediate into L");
        throw Error("Not implemented");
    }

    /**
     * CPL
     * Complement (logical NOT) on A
     */
    public static 0x2F = (cpu: Z80) => {
        if (logInstruction) console.log("CPL       - Complement (logical NOT) on A");
        throw Error("Not implemented");
    }

    /**
     * JR NC,n
     * Relative jump by signed immediate if last result caused no carry
     */
    public static 0x30 = (cpu: Z80) => {
        if (logInstruction) console.log("JR NC,n   - Relative jump by signed immediate if last result caused no carry");
        throw Error("Not implemented");
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
        cpu.ram.write8(cpu.registers.HL, cpu.registers.A);
    }

    /**
     * INC SP
     * Increment 16-bit SP
     */
    public static 0x33 = (cpu: Z80) => {
        if (logInstruction) console.log("INC SP    - Increment 16-bit SP");
        throw Error("Not implemented");
    }

    /**
     * INC (HL)
     * Increment value pointed by HL
     */
    public static 0x34 = (cpu: Z80) => {
        if (logInstruction) console.log("INC (HL)  - Increment value pointed by HL");
        throw Error("Not implemented");
    }

    /**
     * DEC (HL)
     * Decrement value pointed by HL
     */
    public static 0x35 = (cpu: Z80) => {
        if (logInstruction) console.log("DEC (HL)  - Decrement value pointed by HL");
        throw Error("Not implemented");
    }

    /**
     * LD (HL),n
     * Load 8-bit immediate into address pointed by HL
     */
    public static 0x36 = (cpu: Z80) => {
        if (logInstruction) console.log("LD (HL),n - Load 8-bit immediate into address pointed by HL");
        throw Error("Not implemented");
    }

    /**
     * SCF
     * Set carry flag
     */
    public static 0x37 = (cpu: Z80) => {
        if (logInstruction) console.log("SCF       - Set carry flag");
        throw Error("Not implemented");
    }

    /**
     * JR C,n
     * Relative jump by signed immediate if last result caused carry
     */
    public static 0x38 = (cpu: Z80) => {
        if (logInstruction) console.log("JR C,n    - Relative jump by signed immediate if last result caused carry");
        throw Error("Not implemented");
    }

    /**
     * ADD HL,SP
     * Add 16-bit SP to HL
     */
    public static 0x39 = (cpu: Z80) => {
        if (logInstruction) console.log("ADD HL,SP - Add 16-bit SP to HL");
        throw Error("Not implemented");
    }

    /**
     * LDD A,(HL)
     * Load A from address pointed to by HL, and decrement HL
     */
    public static 0x3A = (cpu: Z80) => {
        if (logInstruction) console.log("LDD A,(HL)- Load A from address pointed to by HL, and decrement HL");
        throw Error("Not implemented");
    }

    /**
     * DEC SP
     * Decrement 16-bit SP
     */
    public static 0x3B = (cpu: Z80) => {
        if (logInstruction) console.log("DEC SP    - Decrement 16-bit SP");
        throw Error("Not implemented");
    }

    /**
     * INC A
     * Increment A
     */
    public static 0x3C = (cpu: Z80) => {
        if (logInstruction) console.log("INC A     - Increment A");
        throw Error("Not implemented");
    }

    /**
     * DEC A
     * Decrement A
     */
    public static 0x3D = (cpu: Z80) => {
        if (logInstruction) console.log("DEC A     - Decrement A");
        throw Error("Not implemented");
    }

    /**
     * LD A,n
     * Load 8-bit immediate into A
     */
    public static 0x3E = (cpu: Z80) => {
        if (logInstruction) console.log("LD A,n    - Load 8-bit immediate into A");
        throw Error("Not implemented");
    }

    /**
     * CCF
     * Clear carry flag
     */
    public static 0x3F = (cpu: Z80) => {
        if (logInstruction) console.log("CCF       - Clear carry flag");
        throw Error("Not implemented");
    }

    /**
     * LD B,B
     * Copy B to B
     */
    public static 0x40 = (cpu: Z80) => {
        if (logInstruction) console.log("LD B,B    - Copy B to B");
        throw Error("Not implemented");
    }

    /**
     * LD B,C
     * Copy C to B
     */
    public static 0x41 = (cpu: Z80) => {
        if (logInstruction) console.log("LD B,C    - Copy C to B");
        throw Error("Not implemented");
    }

    /**
     * LD B,D
     * Copy D to B
     */
    public static 0x42 = (cpu: Z80) => {
        if (logInstruction) console.log("LD B,D    - Copy D to B");
        throw Error("Not implemented");
    }

    /**
     * LD B,E
     * Copy E to B
     */
    public static 0x43 = (cpu: Z80) => {
        if (logInstruction) console.log("LD B,E    - Copy E to B");
        throw Error("Not implemented");
    }

    /**
     * LD B,H
     * Copy H to B
     */
    public static 0x44 = (cpu: Z80) => {
        if (logInstruction) console.log("LD B,H    - Copy H to B");
        throw Error("Not implemented");
    }

    /**
     * LD B,L
     * Copy L to B
     */
    public static 0x45 = (cpu: Z80) => {
        if (logInstruction) console.log("LD B,L    - Copy L to B");
        throw Error("Not implemented");
    }

    /**
     * LD B,(HL)
     * Copy value pointed by HL to B
     */
    public static 0x46 = (cpu: Z80) => {
        if (logInstruction) console.log("LD B,(HL) - Copy value pointed by HL to B");
        throw Error("Not implemented");
    }

    /**
     * LD B,A
     * Copy A to B
     */
    public static 0x47 = (cpu: Z80) => {
        if (logInstruction) console.log("LD B,A    - Copy A to B");
        throw Error("Not implemented");
    }

    /**
     * LD C,B
     * Copy B to C
     */
    public static 0x48 = (cpu: Z80) => {
        if (logInstruction) console.log("LD C,B    - Copy B to C");
        throw Error("Not implemented");
    }

    /**
     * LD C,C
     * Copy C to C
     */
    public static 0x49 = (cpu: Z80) => {
        if (logInstruction) console.log("LD C,C    - Copy C to C");
        throw Error("Not implemented");
    }

    /**
     * LD C,D
     * Copy D to C
     */
    public static 0x4A = (cpu: Z80) => {
        if (logInstruction) console.log("LD C,D    - Copy D to C");
        throw Error("Not implemented");
    }

    /**
     * LD C,E
     * Copy E to C
     */
    public static 0x4B = (cpu: Z80) => {
        if (logInstruction) console.log("LD C,E    - Copy E to C");
        throw Error("Not implemented");
    }

    /**
     * LD C,H
     * Copy H to C
     */
    public static 0x4C = (cpu: Z80) => {
        if (logInstruction) console.log("LD C,H    - Copy H to C");
        throw Error("Not implemented");
    }

    /**
     * LD C,L
     * Copy L to C
     */
    public static 0x4D = (cpu: Z80) => {
        if (logInstruction) console.log("LD C,L    - Copy L to C");
        throw Error("Not implemented");
    }

    /**
     * LD C,(HL)
     * Copy value pointed by HL to C
     */
    public static 0x4E = (cpu: Z80) => {
        if (logInstruction) console.log("LD C,(HL) - Copy value pointed by HL to C");
        throw Error("Not implemented");
    }

    /**
     * LD C,A
     * Copy A to C
     */
    public static 0x4F = (cpu: Z80) => {
        if (logInstruction) console.log("LD C,A    - Copy A to C");
        throw Error("Not implemented");
    }

    /**
     * LD D,B
     * Copy B to D
     */
    public static 0x50 = (cpu: Z80) => {
        if (logInstruction) console.log("LD D,B    - Copy B to D");
        throw Error("Not implemented");
    }

    /**
     * LD D,C
     * Copy C to D
     */
    public static 0x51 = (cpu: Z80) => {
        if (logInstruction) console.log("LD D,C    - Copy C to D");
        throw Error("Not implemented");
    }

    /**
     * LD D,D
     * Copy D to D
     */
    public static 0x52 = (cpu: Z80) => {
        if (logInstruction) console.log("LD D,D    - Copy D to D");
        throw Error("Not implemented");
    }

    /**
     * LD D,E
     * Copy E to D
     */
    public static 0x53 = (cpu: Z80) => {
        if (logInstruction) console.log("LD D,E    - Copy E to D");
        throw Error("Not implemented");
    }

    /**
     * LD D,H
     * Copy H to D
     */
    public static 0x54 = (cpu: Z80) => {
        if (logInstruction) console.log("LD D,H    - Copy H to D");
        throw Error("Not implemented");
    }

    /**
     * LD D,L
     * Copy L to D
     */
    public static 0x55 = (cpu: Z80) => {
        if (logInstruction) console.log("LD D,L    - Copy L to D");
        throw Error("Not implemented");
    }

    /**
     * LD D,(HL)
     * Copy value pointed by HL to D
     */
    public static 0x56 = (cpu: Z80) => {
        if (logInstruction) console.log("LD D,(HL) - Copy value pointed by HL to D");
        throw Error("Not implemented");
    }

    /**
     * LD D,A
     * Copy A to D
     */
    public static 0x57 = (cpu: Z80) => {
        if (logInstruction) console.log("LD D,A    - Copy A to D");
        throw Error("Not implemented");
    }

    /**
     * LD E,B
     * Copy B to E
     */
    public static 0x58 = (cpu: Z80) => {
        if (logInstruction) console.log("LD E,B    - Copy B to E");
        throw Error("Not implemented");
    }

    /**
     * LD E,C
     * Copy C to E
     */
    public static 0x59 = (cpu: Z80) => {
        if (logInstruction) console.log("LD E,C    - Copy C to E");
        throw Error("Not implemented");
    }

    /**
     * LD E,D
     * Copy D to E
     */
    public static 0x5A = (cpu: Z80) => {
        if (logInstruction) console.log("LD E,D    - Copy D to E");
        throw Error("Not implemented");
    }

    /**
     * LD E,E
     * Copy E to E
     */
    public static 0x5B = (cpu: Z80) => {
        if (logInstruction) console.log("LD E,E    - Copy E to E");
        throw Error("Not implemented");
    }

    /**
     * LD E,H
     * Copy H to E
     */
    public static 0x5C = (cpu: Z80) => {
        if (logInstruction) console.log("LD E,H    - Copy H to E");
        throw Error("Not implemented");
    }

    /**
     * LD E,L
     * Copy L to E
     */
    public static 0x5D = (cpu: Z80) => {
        if (logInstruction) console.log("LD E,L    - Copy L to E");
        throw Error("Not implemented");
    }

    /**
     * LD E,(HL)
     * Copy value pointed by HL to E
     */
    public static 0x5E = (cpu: Z80) => {
        if (logInstruction) console.log("LD E,(HL) - Copy value pointed by HL to E");
        throw Error("Not implemented");
    }

    /**
     * LD E,A
     * Copy A to E
     */
    public static 0x5F = (cpu: Z80) => {
        if (logInstruction) console.log("LD E,A    - Copy A to E");
        throw Error("Not implemented");
    }

    /**
     * LD H,B
     * Copy B to H
     */
    public static 0x60 = (cpu: Z80) => {
        if (logInstruction) console.log("LD H,B    - Copy B to H");
        throw Error("Not implemented");
    }

    /**
     * LD H,C
     * Copy C to H
     */
    public static 0x61 = (cpu: Z80) => {
        if (logInstruction) console.log("LD H,C    - Copy C to H");
        throw Error("Not implemented");
    }

    /**
     * LD H,D
     * Copy D to H
     */
    public static 0x62 = (cpu: Z80) => {
        if (logInstruction) console.log("LD H,D    - Copy D to H");
        throw Error("Not implemented");
    }

    /**
     * LD H,E
     * Copy E to H
     */
    public static 0x63 = (cpu: Z80) => {
        if (logInstruction) console.log("LD H,E    - Copy E to H");
        throw Error("Not implemented");
    }

    /**
     * LD H,H
     * Copy H to H
     */
    public static 0x64 = (cpu: Z80) => {
        if (logInstruction) console.log("LD H,H    - Copy H to H");
        throw Error("Not implemented");
    }

    /**
     * LD H,L
     * Copy L to H
     */
    public static 0x65 = (cpu: Z80) => {
        if (logInstruction) console.log("LD H,L    - Copy L to H");
        throw Error("Not implemented");
    }

    /**
     * LD H,(HL)
     * Copy value pointed by HL to H
     */
    public static 0x66 = (cpu: Z80) => {
        if (logInstruction) console.log("LD H,(HL) - Copy value pointed by HL to H");
        throw Error("Not implemented");
    }

    /**
     * LD H,A
     * Copy A to H
     */
    public static 0x67 = (cpu: Z80) => {
        if (logInstruction) console.log("LD H,A    - Copy A to H");
        throw Error("Not implemented");
    }

    /**
     * LD L,B
     * Copy B to L
     */
    public static 0x68 = (cpu: Z80) => {
        if (logInstruction) console.log("LD L,B    - Copy B to L");
        throw Error("Not implemented");
    }

    /**
     * LD L,C
     * Copy C to L
     */
    public static 0x69 = (cpu: Z80) => {
        if (logInstruction) console.log("LD L,C    - Copy C to L");
        throw Error("Not implemented");
    }

    /**
     * LD L,D
     * Copy D to L
     */
    public static 0x6A = (cpu: Z80) => {
        if (logInstruction) console.log("LD L,D    - Copy D to L");
        throw Error("Not implemented");
    }

    /**
     * LD L,E
     * Copy E to L
     */
    public static 0x6B = (cpu: Z80) => {
        if (logInstruction) console.log("LD L,E    - Copy E to L");
        throw Error("Not implemented");
    }

    /**
     * LD L,H
     * Copy H to L
     */
    public static 0x6C = (cpu: Z80) => {
        if (logInstruction) console.log("LD L,H    - Copy H to L");
        throw Error("Not implemented");
    }

    /**
     * LD L,L
     * Copy L to L
     */
    public static 0x6D = (cpu: Z80) => {
        if (logInstruction) console.log("LD L,L    - Copy L to L");
        throw Error("Not implemented");
    }

    /**
     * LD L,(HL)
     * Copy value pointed by HL to L
     */
    public static 0x6E = (cpu: Z80) => {
        if (logInstruction) console.log("LD L,(HL) - Copy value pointed by HL to L");
        throw Error("Not implemented");
    }

    /**
     * LD L,A
     * Copy A to L
     */
    public static 0x6F = (cpu: Z80) => {
        if (logInstruction) console.log("LD L,A    - Copy A to L");
        throw Error("Not implemented");
    }

    /**
     * LD (HL),B
     * Copy B to address pointed by HL
     */
    public static 0x70 = (cpu: Z80) => {
        if (logInstruction) console.log("LD (HL),B - Copy B to address pointed by HL");
        throw Error("Not implemented");
    }

    /**
     * LD (HL),C
     * Copy C to address pointed by HL
     */
    public static 0x71 = (cpu: Z80) => {
        if (logInstruction) console.log("LD (HL),C - Copy C to address pointed by HL");
        throw Error("Not implemented");
    }

    /**
     * LD (HL),D
     * Copy D to address pointed by HL
     */
    public static 0x72 = (cpu: Z80) => {
        if (logInstruction) console.log("LD (HL),D - Copy D to address pointed by HL");
        throw Error("Not implemented");
    }

    /**
     * LD (HL),E
     * Copy E to address pointed by HL
     */
    public static 0x73 = (cpu: Z80) => {
        if (logInstruction) console.log("LD (HL),E - Copy E to address pointed by HL");
        throw Error("Not implemented");
    }

    /**
     * LD (HL),H
     * Copy H to address pointed by HL
     */
    public static 0x74 = (cpu: Z80) => {
        if (logInstruction) console.log("LD (HL),H - Copy H to address pointed by HL");
        throw Error("Not implemented");
    }

    /**
     * LD (HL),L
     * Copy L to address pointed by HL
     */
    public static 0x75 = (cpu: Z80) => {
        if (logInstruction) console.log("LD (HL),L - Copy L to address pointed by HL");
        throw Error("Not implemented");
    }

    /**
     * HALT
     * Halt processor
     */
    public static 0x76 = (cpu: Z80) => {
        if (logInstruction) console.log("HALT      - Halt processor");
        throw Error("Not implemented");
    }

    /**
     * LD (HL),A
     * Copy A to address pointed by HL
     */
    public static 0x77 = (cpu: Z80) => {
        if (logInstruction) console.log("LD (HL),A - Copy A to address pointed by HL");
        cpu.ram.write8(cpu.registers.HL, cpu.registers.A);
        cpu.programCounter++;
    }

    /**
     * LD A,B
     * Copy B to A
     */
    public static 0x78 = (cpu: Z80) => {
        if (logInstruction) console.log("LD A,B    - Copy B to A");
        throw Error("Not implemented");
    }

    /**
     * LD A,C
     * Copy C to A
     */
    public static 0x79 = (cpu: Z80) => {
        if (logInstruction) console.log("LD A,C    - Copy C to A");
        throw Error("Not implemented");
    }

    /**
     * LD A,D
     * Copy D to A
     */
    public static 0x7A = (cpu: Z80) => {
        if (logInstruction) console.log("LD A,D    - Copy D to A");
        throw Error("Not implemented");
    }

    /**
     * LD A,E
     * Copy E to A
     */
    public static 0x7B = (cpu: Z80) => {
        if (logInstruction) console.log("LD A,E    - Copy E to A");
        throw Error("Not implemented");
    }

    /**
     * LD A,H
     * Copy H to A
     */
    public static 0x7C = (cpu: Z80) => {
        if (logInstruction) console.log("LD A,H    - Copy H to A");
        cpu.registers.A = cpu.registers.H;
    }

    /**
     * LD A,L
     * Copy L to A
     */
    public static 0x7D = (cpu: Z80) => {
        if (logInstruction) console.log("LD A,L    - Copy L to A");
        throw Error("Not implemented");
    }

    /**
     * LD A,(HL)
     * Copy value pointed by HL to A
     */
    public static 0x7E = (cpu: Z80) => {
        if (logInstruction) console.log("LD A,(HL) - Copy value pointed by HL to A");
        throw Error("Not implemented");
    }

    /**
     * LD A,A
     * Copy A to A
     */
    public static 0x7F = (cpu: Z80) => {
        if (logInstruction) console.log("LD A,A    - Copy A to A");
        throw Error("Not implemented");
    }

    /**
     * ADD A,B
     * Add B to A
     */
    public static 0x80 = (cpu: Z80) => {
        if (logInstruction) console.log("ADD A,B   - Add B to A");
        throw Error("Not implemented");
    }

    /**
     * ADD A,C
     * Add C to A
     */
    public static 0x81 = (cpu: Z80) => {
        if (logInstruction) console.log("ADD A,C   - Add C to A");
        throw Error("Not implemented");
    }

    /**
     * ADD A,D
     * Add D to A
     */
    public static 0x82 = (cpu: Z80) => {
        if (logInstruction) console.log("ADD A,D   - Add D to A");
        throw Error("Not implemented");
    }

    /**
     * ADD A,E
     * Add E to A
     */
    public static 0x83 = (cpu: Z80) => {
        if (logInstruction) console.log("ADD A,E   - Add E to A");
        throw Error("Not implemented");
    }

    /**
     * ADD A,H
     * Add H to A
     */
    public static 0x84 = (cpu: Z80) => {
        if (logInstruction) console.log("ADD A,H   - Add H to A");
        throw Error("Not implemented");
    }

    /**
     * ADD A,L
     * Add L to A
     */
    public static 0x85 = (cpu: Z80) => {
        if (logInstruction) console.log("ADD A,L   - Add L to A");
        throw Error("Not implemented");
    }

    /**
     * ADD A,(HL)
     * Add value pointed by HL to A
     */
    public static 0x86 = (cpu: Z80) => {
        if (logInstruction) console.log("ADD A,(HL)- Add value pointed by HL to A");
        throw Error("Not implemented");
    }

    /**
     * ADD A,A
     * Add A to A
     */
    public static 0x87 = (cpu: Z80) => {
        if (logInstruction) console.log("ADD A,A   - Add A to A");
        throw Error("Not implemented");
    }

    /**
     * ADC A,B
     * Add B and carry flag to A
     */
    public static 0x88 = (cpu: Z80) => {
        if (logInstruction) console.log("ADC A,B   - Add B and carry flag to A");
        throw Error("Not implemented");
    }

    /**
     * ADC A,C
     * Add C and carry flag to A
     */
    public static 0x89 = (cpu: Z80) => {
        if (logInstruction) console.log("ADC A,C   - Add C and carry flag to A");
        throw Error("Not implemented");
    }

    /**
     * ADC A,D
     * Add D and carry flag to A
     */
    public static 0x8A = (cpu: Z80) => {
        if (logInstruction) console.log("ADC A,D   - Add D and carry flag to A");
        throw Error("Not implemented");
    }

    /**
     * ADC A,E
     * Add E and carry flag to A
     */
    public static 0x8B = (cpu: Z80) => {
        if (logInstruction) console.log("ADC A,E   - Add E and carry flag to A");
        throw Error("Not implemented");
    }

    /**
     * ADC A,H
     * Add H and carry flag to A
     */
    public static 0x8C = (cpu: Z80) => {
        if (logInstruction) console.log("ADC A,H   - Add H and carry flag to A");
        throw Error("Not implemented");
    }

    /**
     * ADC A,L
     * Add and carry flag L to A
     */
    public static 0x8D = (cpu: Z80) => {
        if (logInstruction) console.log("ADC A,L   - Add and carry flag L to A");
        throw Error("Not implemented");
    }

    /**
     * ADC A,(HL)
     * Add value pointed by HL and carry flag to A
     */
    public static 0x8E = (cpu: Z80) => {
        if (logInstruction) console.log("ADC A,(HL)- Add value pointed by HL and carry flag to A");
        throw Error("Not implemented");
    }

    /**
     * ADC A,A
     * Add A and carry flag to A
     */
    public static 0x8F = (cpu: Z80) => {
        if (logInstruction) console.log("ADC A,A   - Add A and carry flag to A");
        throw Error("Not implemented");
    }

    /**
     * SUB A,B
     * Subtract B from A
     */
    public static 0x90 = (cpu: Z80) => {
        if (logInstruction) console.log("SUB A,B   - Subtract B from A");
        throw Error("Not implemented");
    }

    /**
     * SUB A,C
     * Subtract C from A
     */
    public static 0x91 = (cpu: Z80) => {
        if (logInstruction) console.log("SUB A,C   - Subtract C from A");
        throw Error("Not implemented");
    }

    /**
     * SUB A,D
     * Subtract D from A
     */
    public static 0x92 = (cpu: Z80) => {
        if (logInstruction) console.log("SUB A,D   - Subtract D from A");
        throw Error("Not implemented");
    }

    /**
     * SUB A,E
     * Subtract E from A
     */
    public static 0x93 = (cpu: Z80) => {
        if (logInstruction) console.log("SUB A,E   - Subtract E from A");
        throw Error("Not implemented");
    }

    /**
     * SUB A,H
     * Subtract H from A
     */
    public static 0x94 = (cpu: Z80) => {
        if (logInstruction) console.log("SUB A,H   - Subtract H from A");
        throw Error("Not implemented");
    }

    /**
     * SUB A,L
     * Subtract L from A
     */
    public static 0x95 = (cpu: Z80) => {
        if (logInstruction) console.log("SUB A,L   - Subtract L from A");
        throw Error("Not implemented");
    }

    /**
     * SUB A,(HL)
     * Subtract value pointed by HL from A
     */
    public static 0x96 = (cpu: Z80) => {
        if (logInstruction) console.log("SUB A,(HL)- Subtract value pointed by HL from A");
        throw Error("Not implemented");
    }

    /**
     * SUB A,A
     * Subtract A from A
     */
    public static 0x97 = (cpu: Z80) => {
        if (logInstruction) console.log("SUB A,A   - Subtract A from A");
        throw Error("Not implemented");
    }

    /**
     * SBC A,B
     * Subtract B and carry flag from A
     */
    public static 0x98 = (cpu: Z80) => {
        if (logInstruction) console.log("SBC A,B   - Subtract B and carry flag from A");
        throw Error("Not implemented");
    }

    /**
     * SBC A,C
     * Subtract C and carry flag from A
     */
    public static 0x99 = (cpu: Z80) => {
        if (logInstruction) console.log("SBC A,C   - Subtract C and carry flag from A");
        throw Error("Not implemented");
    }

    /**
     * SBC A,D
     * Subtract D and carry flag from A
     */
    public static 0x9A = (cpu: Z80) => {
        if (logInstruction) console.log("SBC A,D   - Subtract D and carry flag from A");
        throw Error("Not implemented");
    }

    /**
     * SBC A,E
     * Subtract E and carry flag from A
     */
    public static 0x9B = (cpu: Z80) => {
        if (logInstruction) console.log("SBC A,E   - Subtract E and carry flag from A");
        throw Error("Not implemented");
    }

    /**
     * SBC A,H
     * Subtract H and carry flag from A
     */
    public static 0x9C = (cpu: Z80) => {
        if (logInstruction) console.log("SBC A,H   - Subtract H and carry flag from A");
        throw Error("Not implemented");
    }

    /**
     * SBC A,L
     * Subtract and carry flag L from A
     */
    public static 0x9D = (cpu: Z80) => {
        if (logInstruction) console.log("SBC A,L   - Subtract and carry flag L from A");
        throw Error("Not implemented");
    }

    /**
     * SBC A,(HL)
     * Subtract value pointed by HL and carry flag from A
     */
    public static 0x9E = (cpu: Z80) => {
        if (logInstruction) console.log("SBC A,(HL)- Subtract value pointed by HL and carry flag from A");
        throw Error("Not implemented");
    }

    /**
     * SBC A,A
     * Subtract A and carry flag from A
     */
    public static 0x9F = (cpu: Z80) => {
        if (logInstruction) console.log("SBC A,A   - Subtract A and carry flag from A");
        throw Error("Not implemented");
    }

    /**
     * AND B
     * Logical AND B against A
     */
    public static 0xA0 = (cpu: Z80) => {
        if (logInstruction) console.log("AND B     - Logical AND B against A");
        throw Error("Not implemented");
    }

    /**
     * AND C
     * Logical AND C against A
     */
    public static 0xA1 = (cpu: Z80) => {
        if (logInstruction) console.log("AND C     - Logical AND C against A");
        throw Error("Not implemented");
    }

    /**
     * AND D
     * Logical AND D against A
     */
    public static 0xA2 = (cpu: Z80) => {
        if (logInstruction) console.log("AND D     - Logical AND D against A");
        throw Error("Not implemented");
    }

    /**
     * AND E
     * Logical AND E against A
     */
    public static 0xA3 = (cpu: Z80) => {
        if (logInstruction) console.log("AND E     - Logical AND E against A");
        throw Error("Not implemented");
    }

    /**
     * AND H
     * Logical AND H against A
     */
    public static 0xA4 = (cpu: Z80) => {
        if (logInstruction) console.log("AND H     - Logical AND H against A");
        throw Error("Not implemented");
    }

    /**
     * AND L
     * Logical AND L against A
     */
    public static 0xA5 = (cpu: Z80) => {
        if (logInstruction) console.log("AND L     - Logical AND L against A");
        throw Error("Not implemented");
    }

    /**
     * AND (HL)
     * Logical AND value pointed by HL against A
     */
    public static 0xA6 = (cpu: Z80) => {
        if (logInstruction) console.log("AND (HL)  - Logical AND value pointed by HL against A");
        throw Error("Not implemented");
    }

    /**
     * AND A
     * Logical AND A against A
     */
    public static 0xA7 = (cpu: Z80) => {
        if (logInstruction) console.log("AND A     - Logical AND A against A");
        throw Error("Not implemented");
    }

    /**
     * XOR B
     * Logical XOR B against A
     */
    public static 0xA8 = (cpu: Z80) => {
        if (logInstruction) console.log("XOR B     - Logical XOR B against A");
        throw Error("Not implemented");
    }

    /**
     * XOR C
     * Logical XOR C against A
     */
    public static 0xA9 = (cpu: Z80) => {
        if (logInstruction) console.log("XOR C     - Logical XOR C against A");
        throw Error("Not implemented");
    }

    /**
     * XOR D
     * Logical XOR D against A
     */
    public static 0xAA = (cpu: Z80) => {
        if (logInstruction) console.log("XOR D     - Logical XOR D against A");
        throw Error("Not implemented");
    }

    /**
     * XOR E
     * Logical XOR E against A
     */
    public static 0xAB = (cpu: Z80) => {
        if (logInstruction) console.log("XOR E     - Logical XOR E against A");
        throw Error("Not implemented");
    }

    /**
     * XOR H
     * Logical XOR H against A
     */
    public static 0xAC = (cpu: Z80) => {
        if (logInstruction) console.log("XOR H     - Logical XOR H against A");
        throw Error("Not implemented");
    }

    /**
     * XOR L
     * Logical XOR L against A
     */
    public static 0xAD = (cpu: Z80) => {
        if (logInstruction) console.log("XOR L     - Logical XOR L against A");
        throw Error("Not implemented");
    }

    /**
     * XOR (HL)
     * Logical XOR value pointed by HL against A
     */
    public static 0xAE = (cpu: Z80) => {
        if (logInstruction) console.log("XOR (HL)  - Logical XOR value pointed by HL against A");
        throw Error("Not implemented");
    }

    /**
     * XOR A
     * Logical XOR A against A
     */
    public static 0xAF = (cpu: Z80) => {
        if (logInstruction) console.log("XOR A     - Logical XOR A against A");
        cpu.registers.A ^= cpu.registers.A;
    }

    /**
     * OR B
     * Logical OR B against A
     */
    public static 0xB0 = (cpu: Z80) => {
        if (logInstruction) console.log("OR B      - Logical OR B against A");
        throw Error("Not implemented");
    }

    /**
     * OR C
     * Logical OR C against A
     */
    public static 0xB1 = (cpu: Z80) => {
        if (logInstruction) console.log("OR C      - Logical OR C against A");
        throw Error("Not implemented");
    }

    /**
     * OR D
     * Logical OR D against A
     */
    public static 0xB2 = (cpu: Z80) => {
        if (logInstruction) console.log("OR D      - Logical OR D against A");
        throw Error("Not implemented");
    }

    /**
     * OR E
     * Logical OR E against A
     */
    public static 0xB3 = (cpu: Z80) => {
        if (logInstruction) console.log("OR E      - Logical OR E against A");
        throw Error("Not implemented");
    }

    /**
     * OR H
     * Logical OR H against A
     */
    public static 0xB4 = (cpu: Z80) => {
        if (logInstruction) console.log("OR H      - Logical OR H against A");
        throw Error("Not implemented");
    }

    /**
     * OR L
     * Logical OR L against A
     */
    public static 0xB5 = (cpu: Z80) => {
        if (logInstruction) console.log("OR L      - Logical OR L against A");
        throw Error("Not implemented");
    }

    /**
     * OR (HL)
     * Logical OR value pointed by HL against A
     */
    public static 0xB6 = (cpu: Z80) => {
        if (logInstruction) console.log("OR (HL)   - Logical OR value pointed by HL against A");
        throw Error("Not implemented");
    }

    /**
     * OR A
     * Logical OR A against A
     */
    public static 0xB7 = (cpu: Z80) => {
        if (logInstruction) console.log("OR A      - Logical OR A against A");
        throw Error("Not implemented");
    }

    /**
     * CP B
     * Compare B against A
     */
    public static 0xB8 = (cpu: Z80) => {
        if (logInstruction) console.log("CP B      - Compare B against A");
        throw Error("Not implemented");
    }

    /**
     * CP C
     * Compare C against A
     */
    public static 0xB9 = (cpu: Z80) => {
        if (logInstruction) console.log("CP C      - Compare C against A");
        throw Error("Not implemented");
    }

    /**
     * CP D
     * Compare D against A
     */
    public static 0xBA = (cpu: Z80) => {
        if (logInstruction) console.log("CP D      - Compare D against A");
        throw Error("Not implemented");
    }

    /**
     * CP E
     * Compare E against A
     */
    public static 0xBB = (cpu: Z80) => {
        if (logInstruction) console.log("CP E      - Compare E against A");
        throw Error("Not implemented");
    }

    /**
     * CP H
     * Compare H against A
     */
    public static 0xBC = (cpu: Z80) => {
        if (logInstruction) console.log("CP H      - Compare H against A");
        throw Error("Not implemented");
    }

    /**
     * CP L
     * Compare L against A
     */
    public static 0xBD = (cpu: Z80) => {
        if (logInstruction) console.log("CP L      - Compare L against A");
        throw Error("Not implemented");
    }

    /**
     * CP (HL)
     * Compare value pointed by HL against A
     */
    public static 0xBE = (cpu: Z80) => {
        if (logInstruction) console.log("CP (HL)   - Compare value pointed by HL against A");
        throw Error("Not implemented");
    }

    /**
     * CP A
     * Compare A against A
     */
    public static 0xBF = (cpu: Z80) => {
        if (logInstruction) console.log("CP A      - Compare A against A");
        throw Error("Not implemented");
    }

    /**
     * RET NZ
     * Return if last result was not zero
     */
    public static 0xC0 = (cpu: Z80) => {
        if (logInstruction) console.log("RET NZ    - Return if last result was not zero");
        throw Error("Not implemented");
    }

    /**
     * POP BC
     * Pop 16-bit value from stack into BC
     */
    public static 0xC1 = (cpu: Z80) => {
        if (logInstruction) console.log("POP BC    - Pop 16-bit value from stack into BC");
        throw Error("Not implemented");
    }

    /**
     * JP NZ,nn
     * Absolute jump to 16-bit location if last result was not zero
     */
    public static 0xC2 = (cpu: Z80) => {
        if (logInstruction) console.log("JP NZ,nn  - Absolute jump to 16-bit location if last result was not zero");
        throw Error("Not implemented");
    }

    /**
     * JP nn
     * Absolute jump to 16-bit location
     */
    public static 0xC3 = (cpu: Z80) => {
        if (logInstruction) console.log("JP nn     - Absolute jump to 16-bit location");
        throw Error("Not implemented");
    }

    /**
     * CALL NZ,nn
     * Call routine at 16-bit location if last result was not zero
     */
    public static 0xC4 = (cpu: Z80) => {
        if (logInstruction) console.log("CALL NZ,nn- Call routine at 16-bit location if last result was not zero");
        throw Error("Not implemented");
    }

    /**
     * PUSH BC
     * Push 16-bit BC onto stack
     */
    public static 0xC5 = (cpu: Z80) => {
        if (logInstruction) console.log("PUSH BC   - Push 16-bit BC onto stack");
        throw Error("Not implemented");
    }

    /**
     * ADD A,n
     * Add 8-bit immediate to A
     */
    public static 0xC6 = (cpu: Z80) => {
        if (logInstruction) console.log("ADD A,n   - Add 8-bit immediate to A");
        throw Error("Not implemented");
    }

    /**
     * RST 0
     * Call routine at address 0000h
     */
    public static 0xC7 = (cpu: Z80) => {
        if (logInstruction) console.log("RST 0     - Call routine at address 0000h");
        throw Error("Not implemented");
    }

    /**
     * RET Z
     * Return if last result was zero
     */
    public static 0xC8 = (cpu: Z80) => {
        if (logInstruction) console.log("RET Z     - Return if last result was zero");
        throw Error("Not implemented");
    }

    /**
     * RET
     * Return to calling routine
     */
    public static 0xC9 = (cpu: Z80) => {
        if (logInstruction) console.log("RET       - Return to calling routine");
        throw Error("Not implemented");
    }

    /**
     * JP Z,nn
     * Absolute jump to 16-bit location if last result was zero
     */
    public static 0xCA = (cpu: Z80) => {
        if (logInstruction) console.log("JP Z,nn   - Absolute jump to 16-bit location if last result was zero");
        throw Error("Not implemented");
    }

    /**
     * Ext ops
     * Extended operations (two-byte instruction code)
     */
    public static 0xCB = (cpu: Z80) => {
        if (logInstruction) console.log("Ext ops   - Extended operations (two-byte instruction code)");
        throw Error("Not an Instruction!");
    }

    /**
     * CALL Z,nn
     * Call routine at 16-bit location if last result was zero
     */
    public static 0xCC = (cpu: Z80) => {
        if (logInstruction) console.log("CALL Z,nn - Call routine at 16-bit location if last result was zero");
        throw Error("Not implemented");
    }

    /**
     * CALL nn
     * Call routine at 16-bit location
     */
    public static 0xCD = (cpu: Z80) => {
        if (logInstruction) console.log("CALL nn   - Call routine at 16-bit location");
        throw Error("Not implemented");
    }

    /**
     * ADC A,n
     * Add 8-bit immediate and carry to A
     */
    public static 0xCE = (cpu: Z80) => {
        if (logInstruction) console.log("ADC A,n   - Add 8-bit immediate and carry to A");
        throw Error("Not implemented");
    }

    /**
     * RST 8
     * Call routine at address 0008h
     */
    public static 0xCF = (cpu: Z80) => {
        if (logInstruction) console.log("RST 8     - Call routine at address 0008h");
        throw Error("Not implemented");
    }

    /**
     * RET NC
     * Return if last result caused no carry
     */
    public static 0xD0 = (cpu: Z80) => {
        if (logInstruction) console.log("RET NC    - Return if last result caused no carry");
        throw Error("Not implemented");
    }

    /**
     * POP DE
     * Pop 16-bit value from stack into DE
     */
    public static 0xD1 = (cpu: Z80) => {
        if (logInstruction) console.log("POP DE    - Pop 16-bit value from stack into DE");
        throw Error("Not implemented");
    }

    /**
     * JP NC,nn
     * Absolute jump to 16-bit location if last result caused no carry
     */
    public static 0xD2 = (cpu: Z80) => {
        if (logInstruction) console.log("JP NC,nn  - Absolute jump to 16-bit location if last result caused no carry");
        throw Error("Not implemented");
    }

    /**
     * XX
     * Operation removed in this CPU
     */
    public static 0xD3 = (cpu: Z80) => {
        if (logInstruction) console.log("XX        - Operation removed in this CPU");
        throw Error("Not implemented");
    }

    /**
     * CALL NC,nn
     * Call routine at 16-bit location if last result caused no carry
     */
    public static 0xD4 = (cpu: Z80) => {
        if (logInstruction) console.log("CALL NC,nn- Call routine at 16-bit location if last result caused no carry");
        throw Error("Not implemented");
    }

    /**
     * PUSH DE
     * Push 16-bit DE onto stack
     */
    public static 0xD5 = (cpu: Z80) => {
        if (logInstruction) console.log("PUSH DE   - Push 16-bit DE onto stack");
        throw Error("Not implemented");
    }

    /**
     * SUB A,n
     * Subtract 8-bit immediate from A
     */
    public static 0xD6 = (cpu: Z80) => {
        if (logInstruction) console.log("SUB A,n   - Subtract 8-bit immediate from A");
        throw Error("Not implemented");
    }

    /**
     * RST 10
     * Call routine at address 0010h
     */
    public static 0xD7 = (cpu: Z80) => {
        if (logInstruction) console.log("RST 10    - Call routine at address 0010h");
        throw Error("Not implemented");
    }

    /**
     * RET C
     * Return if last result caused carry
     */
    public static 0xD8 = (cpu: Z80) => {
        if (logInstruction) console.log("RET C     - Return if last result caused carry");
        throw Error("Not implemented");
    }

    /**
     * RETI
     * Enable interrupts and return to calling routine
     */
    public static 0xD9 = (cpu: Z80) => {
        if (logInstruction) console.log("RETI      - Enable interrupts and return to calling routine");
        throw Error("Not implemented");
    }

    /**
     * JP C,nn
     * Absolute jump to 16-bit location if last result caused carry
     */
    public static 0xDA = (cpu: Z80) => {
        if (logInstruction) console.log("JP C,nn   - Absolute jump to 16-bit location if last result caused carry");
        throw Error("Not implemented");
    }

    /**
     * XX
     * Operation removed in this CPU
     */
    public static 0xDB = (cpu: Z80) => {
        if (logInstruction) console.log("XX        - Operation removed in this CPU");
        throw Error("Not implemented");
    }

    /**
     * CALL C,nn
     * Call routine at 16-bit location if last result caused carry
     */
    public static 0xDC = (cpu: Z80) => {
        if (logInstruction) console.log("CALL C,nn - Call routine at 16-bit location if last result caused carry");
        throw Error("Not implemented");
    }

    /**
     * XX
     * Operation removed in this CPU
     */
    public static 0xDD = (cpu: Z80) => {
        if (logInstruction) console.log("XX        - Operation removed in this CPU");
        throw Error("Not implemented");
    }

    /**
     * SBC A,n
     * Subtract 8-bit immediate and carry from A
     */
    public static 0xDE = (cpu: Z80) => {
        if (logInstruction) console.log("SBC A,n   - Subtract 8-bit immediate and carry from A");
        throw Error("Not implemented");
    }

    /**
     * RST 18
     * Call routine at address 0018h
     */
    public static 0xDF = (cpu: Z80) => {
        if (logInstruction) console.log("RST 18    - Call routine at address 0018h");
        throw Error("Not implemented");
    }

    /**
     * LDH (n),A
     * Save A at address pointed to by (FF00h + 8-bit immediate)
     */
    public static 0xE0 = (cpu: Z80) => {
        if (logInstruction) console.log("LDH (n),A - Save A at address pointed to by (FF00h + 8-bit immediate)");
        throw Error("Not implemented");
    }

    /**
     * POP HL
     * Pop 16-bit value from stack into HL
     */
    public static 0xE1 = (cpu: Z80) => {
        if (logInstruction) console.log("POP HL    - Pop 16-bit value from stack into HL");
        throw Error("Not implemented");
    }

    /**
     * LDH (C),A
     * Save A at address pointed to by (0xFF00 + C)
     */
    public static 0xE2 = (cpu: Z80) => {
        if (logInstruction) console.log("LDH (C),A - Save A at address pointed to by (FF00h + C)");
        cpu.ram.write8(cpu.registers.C | 0xFF00, cpu.registers.A);
        cpu.programCounter++;
    }

    /**
     * XX
     * Operation removed in this CPU
     */
    public static 0xE3 = (cpu: Z80) => {
        if (logInstruction) console.log("XX        - Operation removed in this CPU");
        throw Error("Not implemented");
    }

    /**
     * XX
     * Operation removed in this CPU
     */
    public static 0xE4 = (cpu: Z80) => {
        if (logInstruction) console.log("XX        - Operation removed in this CPU");
        throw Error("Not implemented");
    }

    /**
     * PUSH HL
     * Push 16-bit HL onto stack
     */
    public static 0xE5 = (cpu: Z80) => {
        if (logInstruction) console.log("PUSH HL   - Push 16-bit HL onto stack");
        throw Error("Not implemented");
    }

    /**
     * AND n
     * Logical AND 8-bit immediate against A
     */
    public static 0xE6 = (cpu: Z80) => {
        if (logInstruction) console.log("AND n     - Logical AND 8-bit immediate against A");
        throw Error("Not implemented");
    }

    /**
     * RST 20
     * Call routine at address 0020h
     */
    public static 0xE7 = (cpu: Z80) => {
        if (logInstruction) console.log("RST 20    - Call routine at address 0020h");
        throw Error("Not implemented");
    }

    /**
     * ADD SP,d
     * Add signed 8-bit immediate to SP
     */
    public static 0xE8 = (cpu: Z80) => {
        if (logInstruction) console.log("ADD SP,d  - Add signed 8-bit immediate to SP");
        throw Error("Not implemented");
    }

    /**
     * JP (HL)
     * Jump to 16-bit value pointed by HL
     */
    public static 0xE9 = (cpu: Z80) => {
        if (logInstruction) console.log("JP (HL)   - Jump to 16-bit value pointed by HL");
        throw Error("Not implemented");
    }

    /**
     * LD (nn),A
     * Save A at given 16-bit address
     */
    public static 0xEA = (cpu: Z80) => {
        if (logInstruction) console.log("LD (nn),A - Save A at given 16-bit address");
        throw Error("Not implemented");
    }

    /**
     * XX
     * Operation removed in this CPU
     */
    public static 0xEB = (cpu: Z80) => {
        if (logInstruction) console.log("XX        - Operation removed in this CPU");
        throw Error("Not implemented");
    }

    /**
     * XX
     * Operation removed in this CPU
     */
    public static 0xEC = (cpu: Z80) => {
        if (logInstruction) console.log("XX        - Operation removed in this CPU");
        throw Error("Not implemented");
    }

    /**
     * XX
     * Operation removed in this CPU
     */
    public static 0xED = (cpu: Z80) => {
        if (logInstruction) console.log("XX        - Operation removed in this CPU");
        throw Error("Not implemented");
    }

    /**
     * XOR n
     * Logical XOR 8-bit immediate against A
     */
    public static 0xEE = (cpu: Z80) => {
        if (logInstruction) console.log("XOR n     - Logical XOR 8-bit immediate against A");
        throw Error("Not implemented");
    }

    /**
     * RST 28
     * Call routine at address 0028h
     */
    public static 0xEF = (cpu: Z80) => {
        if (logInstruction) console.log("RST 28    - Call routine at address 0028h");
        throw Error("Not implemented");
    }

    /**
     * LDH A,(n)
     * Load A from address pointed to by (FF00h + 8-bit immediate)
     */
    public static 0xF0 = (cpu: Z80) => {
        if (logInstruction) console.log("LDH A,(n) - Load A from address pointed to by (FF00h + 8-bit immediate)");
        throw Error("Not implemented");
    }

    /**
     * POP AF
     * Pop 16-bit value from stack into AF
     */
    public static 0xF1 = (cpu: Z80) => {
        if (logInstruction) console.log("POP AF    - Pop 16-bit value from stack into AF");
        throw Error("Not implemented");
    }

    /**
     * XX
     * Operation removed in this CPU
     */
    public static 0xF2 = (cpu: Z80) => {
        if (logInstruction) console.log("XX        - Operation removed in this CPU");
        throw Error("Not implemented");
    }

    /**
     * DI
     * DIsable interrupts
     */
    public static 0xF3 = (cpu: Z80) => {
        if (logInstruction) console.log("DI        - DIsable interrupts");
        cpu.registers.interruptsEnabled = false;
    }

    /**
     * XX
     * Operation removed in this CPU
     */
    public static 0xF4 = (cpu: Z80) => {
        if (logInstruction) console.log("XX        - Operation removed in this CPU");
        throw Error("Not implemented");
    }

    /**
     * PUSH AF
     * Push 16-bit AF onto stack
     */
    public static 0xF5 = (cpu: Z80) => {
        if (logInstruction) console.log("PUSH AF   - Push 16-bit AF onto stack");
        throw Error("Not implemented");
    }

    /**
     * OR n
     * Logical OR 8-bit immediate against A
     */
    public static 0xF6 = (cpu: Z80) => {
        if (logInstruction) console.log("OR n      - Logical OR 8-bit immediate against A");
        throw Error("Not implemented");
    }

    /**
     * RST 30
     * Call routine at address 0030h
     */
    public static 0xF7 = (cpu: Z80) => {
        if (logInstruction) console.log("RST 30    - Call routine at address 0030h");
        throw Error("Not implemented");
    }

    /**
     * LDHL SP,d
     * Add signed 8-bit immediate to SP and save result in HL
     */
    public static 0xF8 = (cpu: Z80) => {
        if (logInstruction) console.log("LDHL SP,d - Add signed 8-bit immediate to SP and save result in HL");
        throw Error("Not implemented");
    }

    /**
     * LD SP,HL
     * Copy HL to SP
     */
    public static 0xF9 = (cpu: Z80) => {
        if (logInstruction) console.log("LD SP,HL  - Copy HL to SP");
        throw Error("Not implemented");
    }

    /**
     * LD A,(nn)
     * Load A from given 16-bit address
     */
    public static 0xFA = (cpu: Z80) => {
        if (logInstruction) console.log("LD A,(nn) - Load A from given 16-bit address");
        throw Error("Not implemented");
    }

    /**
     * EI
     * Enable interrupts
     */
    public static 0xFB = (cpu: Z80) => {
        if (logInstruction) console.log("EI        - Enable interrupts");
        cpu.registers.interruptsEnabled = true;
    }

    /**
     * XX
     * Operation removed in this CPU
     */
    public static 0xFC = (cpu: Z80) => {
        if (logInstruction) console.log("XX        - Operation removed in this CPU");
        throw Error("Not implemented");
    }

    /**
     * XX
     * Operation removed in this CPU
     */
    public static 0xFD = (cpu: Z80) => {
        if (logInstruction) console.log("XX        - Operation removed in this CPU");
        throw Error("Not implemented");
    }

    /**
     * CP n
     * Compare 8-bit immediate against A
     */
    public static 0xFE = (cpu: Z80) => {
        if (logInstruction) console.log("CP n      - Compare 8-bit immediate against A");
        throw Error("Not implemented");
    }

    /**
     * RST 38
     * Call routine at address 0038h
     */
    public static 0xFF = (cpu: Z80) => {
        if (logInstruction) console.log("RST 38    - Call routine at address 0038h");
        throw Error("Not implemented");
    }

    /*
     *
     *
     *
     *
     * Bit Instructions
     *
     *
     *
     *
     */

    /**
     * RLC B
     * Rotate B left with carry
     */
    public static 0xCB00 = (cpu: Z80) => {
        console.log("RLC B     - Rotate B left with carry");
        throw Error("Not implemented");
    }

    /**
     * RLC C
     * Rotate C left with carry
     */
    public static 0xCB01 = (cpu: Z80) => {
        console.log("RLC C     - Rotate C left with carry");
        throw Error("Not implemented");
    }

    /**
     * RLC D
     * Rotate D left with carry
     */
    public static 0xCB02 = (cpu: Z80) => {
        console.log("RLC D     - Rotate D left with carry");
        throw Error("Not implemented");
    }

    /**
     * RLC E
     * Rotate E left with carry
     */
    public static 0xCB03 = (cpu: Z80) => {
        console.log("RLC E     - Rotate E left with carry");
        throw Error("Not implemented");
    }

    /**
     * RLC H
     * Rotate H left with carry
     */
    public static 0xCB04 = (cpu: Z80) => {
        console.log("RLC H     - Rotate H left with carry");
        throw Error("Not implemented");
    }

    /**
     * RLC L
     * Rotate L left with carry
     */
    public static 0xCB05 = (cpu: Z80) => {
        console.log("RLC L     - Rotate L left with carry");
        throw Error("Not implemented");
    }

    /**
     * RLC (HL)
     * Rotate value pointed by HL left with carry
     */
    public static 0xCB06 = (cpu: Z80) => {
        console.log("RLC (HL)  - Rotate value pointed by HL left with carry");
        throw Error("Not implemented");
    }

    /**
     * RLC A
     * Rotate A left with carry
     */
    public static 0xCB07 = (cpu: Z80) => {
        console.log("RLC A     - Rotate A left with carry");
        throw Error("Not implemented");
    }

    /**
     * RRC B
     * Rotate B right with carry
     */
    public static 0xCB08 = (cpu: Z80) => {
        console.log("RRC B     - Rotate B right with carry");
        throw Error("Not implemented");
    }

    /**
     * RRC C
     * Rotate C right with carry
     */
    public static 0xCB09 = (cpu: Z80) => {
        console.log("RRC C     - Rotate C right with carry");
        throw Error("Not implemented");
    }

    /**
     * RRC D
     * Rotate D right with carry
     */
    public static 0xCB0A = (cpu: Z80) => {
        console.log("RRC D     - Rotate D right with carry");
        throw Error("Not implemented");
    }

    /**
     * RRC E
     * Rotate E right with carry
     */
    public static 0xCB0B = (cpu: Z80) => {
        console.log("RRC E     - Rotate E right with carry");
        throw Error("Not implemented");
    }

    /**
     * RRC H
     * Rotate H right with carry
     */
    public static 0xCB0C = (cpu: Z80) => {
        console.log("RRC H     - Rotate H right with carry");
        throw Error("Not implemented");
    }

    /**
     * RRC L
     * Rotate L right with carry
     */
    public static 0xCB0D = (cpu: Z80) => {
        console.log("RRC L     - Rotate L right with carry");
        throw Error("Not implemented");
    }

    /**
     * RRC (HL)
     * Rotate value pointed by HL right with carry
     */
    public static 0xCB0E = (cpu: Z80) => {
        console.log("RRC (HL)  - Rotate value pointed by HL right with carry");
        throw Error("Not implemented");
    }

    /**
     * RRC A
     * Rotate A right with carry
     */
    public static 0xCB0F = (cpu: Z80) => {
        console.log("RRC A     - Rotate A right with carry");
        throw Error("Not implemented");
    }

    /**
     * RL B
     * Rotate B left
     */
    public static 0xCB10 = (cpu: Z80) => {
        console.log("RL B      - Rotate B left");
        throw Error("Not implemented");
    }

    /**
     * RL C
     * Rotate C left
     */
    public static 0xCB11 = (cpu: Z80) => {
        console.log("RL C      - Rotate C left");
        throw Error("Not implemented");
    }

    /**
     * RL D
     * Rotate D left
     */
    public static 0xCB12 = (cpu: Z80) => {
        console.log("RL D      - Rotate D left");
        throw Error("Not implemented");
    }

    /**
     * RL E
     * Rotate E left
     */
    public static 0xCB13 = (cpu: Z80) => {
        console.log("RL E      - Rotate E left");
        throw Error("Not implemented");
    }

    /**
     * RL H
     * Rotate H left
     */
    public static 0xCB14 = (cpu: Z80) => {
        console.log("RL H      - Rotate H left");
        throw Error("Not implemented");
    }

    /**
     * RL L
     * Rotate L left
     */
    public static 0xCB15 = (cpu: Z80) => {
        console.log("RL L      - Rotate L left");
        throw Error("Not implemented");
    }

    /**
     * RL (HL)
     * Rotate value pointed by HL left
     */
    public static 0xCB16 = (cpu: Z80) => {
        console.log("RL (HL)   - Rotate value pointed by HL left");
        throw Error("Not implemented");
    }

    /**
     * RL A
     * Rotate A left
     */
    public static 0xCB17 = (cpu: Z80) => {
        console.log("RL A      - Rotate A left");
        throw Error("Not implemented");
    }

    /**
     * RR B
     * Rotate B right
     */
    public static 0xCB18 = (cpu: Z80) => {
        console.log("RR B      - Rotate B right");
        throw Error("Not implemented");
    }

    /**
     * RR C
     * Rotate C right
     */
    public static 0xCB19 = (cpu: Z80) => {
        console.log("RR C      - Rotate C right");
        throw Error("Not implemented");
    }

    /**
     * RR D
     * Rotate D right
     */
    public static 0xCB1A = (cpu: Z80) => {
        console.log("RR D      - Rotate D right");
        throw Error("Not implemented");
    }

    /**
     * RR E
     * Rotate E right
     */
    public static 0xCB1B = (cpu: Z80) => {
        console.log("RR E      - Rotate E right");
        throw Error("Not implemented");
    }

    /**
     * RR H
     * Rotate H right
     */
    public static 0xCB1C = (cpu: Z80) => {
        console.log("RR H      - Rotate H right");
        throw Error("Not implemented");
    }

    /**
     * RR L
     * Rotate L right
     */
    public static 0xCB1D = (cpu: Z80) => {
        console.log("RR L      - Rotate L right");
        throw Error("Not implemented");
    }

    /**
     * RR (HL)
     * Rotate value pointed by HL right
     */
    public static 0xCB1E = (cpu: Z80) => {
        console.log("RR (HL)   - Rotate value pointed by HL right");
        throw Error("Not implemented");
    }

    /**
     * RR A
     * Rotate A right
     */
    public static 0xCB1F = (cpu: Z80) => {
        console.log("RR A      - Rotate A right");
        throw Error("Not implemented");
    }

    /**
     * SLA B
     * Shift B left preserving sign
     */
    public static 0xCB20 = (cpu: Z80) => {
        console.log("SLA B     - Shift B left preserving sign");
        throw Error("Not implemented");
    }

    /**
     * SLA C
     * Shift C left preserving sign
     */
    public static 0xCB21 = (cpu: Z80) => {
        console.log("SLA C     - Shift C left preserving sign");
        throw Error("Not implemented");
    }

    /**
     * SLA D
     * Shift D left preserving sign
     */
    public static 0xCB22 = (cpu: Z80) => {
        console.log("SLA D     - Shift D left preserving sign");
        throw Error("Not implemented");
    }

    /**
     * SLA E
     * Shift E left preserving sign
     */
    public static 0xCB23 = (cpu: Z80) => {
        console.log("SLA E     - Shift E left preserving sign");
        throw Error("Not implemented");
    }

    /**
     * SLA H
     * Shift H left preserving sign
     */
    public static 0xCB24 = (cpu: Z80) => {
        console.log("SLA H     - Shift H left preserving sign");
        throw Error("Not implemented");
    }

    /**
     * SLA L
     * Shift L left preserving sign
     */
    public static 0xCB25 = (cpu: Z80) => {
        console.log("SLA L     - Shift L left preserving sign");
        throw Error("Not implemented");
    }

    /**
     * SLA (HL)
     * Shift value pointed by HL left preserving sign
     */
    public static 0xCB26 = (cpu: Z80) => {
        console.log("SLA (HL)  - Shift value pointed by HL left preserving sign");
        throw Error("Not implemented");
    }

    /**
     * SLA A
     * Shift A left preserving sign
     */
    public static 0xCB27 = (cpu: Z80) => {
        console.log("SLA A     - Shift A left preserving sign");
        throw Error("Not implemented");
    }

    /**
     * SRA B
     * Shift B right preserving sign
     */
    public static 0xCB28 = (cpu: Z80) => {
        console.log("SRA B     - Shift B right preserving sign");
        throw Error("Not implemented");
    }

    /**
     * SRA C
     * Shift C right preserving sign
     */
    public static 0xCB29 = (cpu: Z80) => {
        console.log("SRA C     - Shift C right preserving sign");
        throw Error("Not implemented");
    }

    /**
     * SRA D
     * Shift D right preserving sign
     */
    public static 0xCB2A = (cpu: Z80) => {
        console.log("SRA D     - Shift D right preserving sign");
        throw Error("Not implemented");
    }

    /**
     * SRA E
     * Shift E right preserving sign
     */
    public static 0xCB2B = (cpu: Z80) => {
        console.log("SRA E     - Shift E right preserving sign");
        throw Error("Not implemented");
    }

    /**
     * SRA H
     * Shift H right preserving sign
     */
    public static 0xCB2C = (cpu: Z80) => {
        console.log("SRA H     - Shift H right preserving sign");
        throw Error("Not implemented");
    }

    /**
     * SRA L
     * Shift L right preserving sign
     */
    public static 0xCB2D = (cpu: Z80) => {
        console.log("SRA L     - Shift L right preserving sign");
        throw Error("Not implemented");
    }

    /**
     * SRA (HL)
     * Shift value pointed by HL right preserving sign
     */
    public static 0xCB2E = (cpu: Z80) => {
        console.log("SRA (HL)  - Shift value pointed by HL right preserving sign");
        throw Error("Not implemented");
    }

    /**
     * SRA A
     * Shift A right preserving sign
     */
    public static 0xCB2F = (cpu: Z80) => {
        console.log("SRA A     - Shift A right preserving sign");
        throw Error("Not implemented");
    }

    /**
     * SWAP B
     * Swap nybbles in B
     */
    public static 0xCB30 = (cpu: Z80) => {
        console.log("SWAP B    - Swap nybbles in B");
        throw Error("Not implemented");
    }

    /**
     * SWAP C
     * Swap nybbles in C
     */
    public static 0xCB31 = (cpu: Z80) => {
        console.log("SWAP C    - Swap nybbles in C");
        throw Error("Not implemented");
    }

    /**
     * SWAP D
     * Swap nybbles in D
     */
    public static 0xCB32 = (cpu: Z80) => {
        console.log("SWAP D    - Swap nybbles in D");
        throw Error("Not implemented");
    }

    /**
     * SWAP E
     * Swap nybbles in E
     */
    public static 0xCB33 = (cpu: Z80) => {
        console.log("SWAP E    - Swap nybbles in E");
        throw Error("Not implemented");
    }

    /**
     * SWAP H
     * Swap nybbles in H
     */
    public static 0xCB34 = (cpu: Z80) => {
        console.log("SWAP H    - Swap nybbles in H");
        throw Error("Not implemented");
    }

    /**
     * SWAP L
     * Swap nybbles in L
     */
    public static 0xCB35 = (cpu: Z80) => {
        console.log("SWAP L    - Swap nybbles in L");
        throw Error("Not implemented");
    }

    /**
     * SWAP (HL)
     * Swap nybbles in value pointed by HL
     */
    public static 0xCB36 = (cpu: Z80) => {
        console.log("SWAP (HL) - Swap nybbles in value pointed by HL");
        throw Error("Not implemented");
    }

    /**
     * SWAP A
     * Swap nybbles in A
     */
    public static 0xCB37 = (cpu: Z80) => {
        console.log("SWAP A    - Swap nybbles in A");
        throw Error("Not implemented");
    }

    /**
     * SRL B
     * Shift B right
     */
    public static 0xCB38 = (cpu: Z80) => {
        console.log("SRL B     - Shift B right");
        throw Error("Not implemented");
    }

    /**
     * SRL C
     * Shift C right
     */
    public static 0xCB39 = (cpu: Z80) => {
        console.log("SRL C     - Shift C right");
        throw Error("Not implemented");
    }

    /**
     * SRL D
     * Shift D right
     */
    public static 0xCB3A = (cpu: Z80) => {
        console.log("SRL D     - Shift D right");
        throw Error("Not implemented");
    }

    /**
     * SRL E
     * Shift E right
     */
    public static 0xCB3B = (cpu: Z80) => {
        console.log("SRL E     - Shift E right");
        throw Error("Not implemented");
    }

    /**
     * SRL H
     * Shift H right
     */
    public static 0xCB3C = (cpu: Z80) => {
        console.log("SRL H     - Shift H right");
        throw Error("Not implemented");
    }

    /**
     * SRL L
     * Shift L right
     */
    public static 0xCB3D = (cpu: Z80) => {
        console.log("SRL L     - Shift L right");
        throw Error("Not implemented");
    }

    /**
     * SRL (HL)
     * Shift value pointed by HL right
     */
    public static 0xCB3E = (cpu: Z80) => {
        console.log("SRL (HL)  - Shift value pointed by HL right");
        throw Error("Not implemented");
    }

    /**
     * SRL A
     * Shift A right
     */
    public static 0xCB3F = (cpu: Z80) => {
        console.log("SRL A     - Shift A right");
        throw Error("Not implemented");
    }

    /**
     * BIT 0,B
     * Test bit 0 of B
     */
    public static 0xCB40 = (cpu: Z80) => {
        console.log("BIT 0,B   - Test bit 0 of B");
        throw Error("Not implemented");
    }

    /**
     * BIT 0,C
     * Test bit 0 of C
     */
    public static 0xCB41 = (cpu: Z80) => {
        console.log("BIT 0,C   - Test bit 0 of C");
        throw Error("Not implemented");
    }

    /**
     * BIT 0,D
     * Test bit 0 of D
     */
    public static 0xCB42 = (cpu: Z80) => {
        console.log("BIT 0,D   - Test bit 0 of D");
        throw Error("Not implemented");
    }

    /**
     * BIT 0,E
     * Test bit 0 of E
     */
    public static 0xCB43 = (cpu: Z80) => {
        console.log("BIT 0,E   - Test bit 0 of E");
        throw Error("Not implemented");
    }

    /**
     * BIT 0,H
     * Test bit 0 of H
     */
    public static 0xCB44 = (cpu: Z80) => {
        console.log("BIT 0,H   - Test bit 0 of H");
        throw Error("Not implemented");
    }

    /**
     * BIT 0,L
     * Test bit 0 of L
     */
    public static 0xCB45 = (cpu: Z80) => {
        console.log("BIT 0,L   - Test bit 0 of L");
        throw Error("Not implemented");
    }

    /**
     * BIT 0,(HL)
     * Test bit 0 of value pointed by HL
     */
    public static 0xCB46 = (cpu: Z80) => {
        console.log("BIT 0,(HL)- Test bit 0 of value pointed by HL");
        throw Error("Not implemented");
    }

    /**
     * BIT 0,A
     * Test bit 0 of A
     */
    public static 0xCB47 = (cpu: Z80) => {
        console.log("BIT 0,A   - Test bit 0 of A");
        throw Error("Not implemented");
    }

    /**
     * BIT 1,B
     * Test bit 1 of B
     */
    public static 0xCB48 = (cpu: Z80) => {
        console.log("BIT 1,B   - Test bit 1 of B");
        throw Error("Not implemented");
    }

    /**
     * BIT 1,C
     * Test bit 1 of C
     */
    public static 0xCB49 = (cpu: Z80) => {
        console.log("BIT 1,C   - Test bit 1 of C");
        throw Error("Not implemented");
    }

    /**
     * BIT 1,D
     * Test bit 1 of D
     */
    public static 0xCB4A = (cpu: Z80) => {
        console.log("BIT 1,D   - Test bit 1 of D");
        throw Error("Not implemented");
    }

    /**
     * BIT 1,E
     * Test bit 1 of E
     */
    public static 0xCB4B = (cpu: Z80) => {
        console.log("BIT 1,E   - Test bit 1 of E");
        throw Error("Not implemented");
    }

    /**
     * BIT 1,H
     * Test bit 1 of H
     */
    public static 0xCB4C = (cpu: Z80) => {
        console.log("BIT 1,H   - Test bit 1 of H");
        throw Error("Not implemented");
    }

    /**
     * BIT 1,L
     * Test bit 1 of L
     */
    public static 0xCB4D = (cpu: Z80) => {
        console.log("BIT 1,L   - Test bit 1 of L");
        throw Error("Not implemented");
    }

    /**
     * BIT 1,(HL)
     * Test bit 1 of value pointed by HL
     */
    public static 0xCB4E = (cpu: Z80) => {
        console.log("BIT 1,(HL)- Test bit 1 of value pointed by HL");
        throw Error("Not implemented");
    }

    /**
     * BIT 1,A
     * Test bit 1 of A
     */
    public static 0xCB4F = (cpu: Z80) => {
        console.log("BIT 1,A   - Test bit 1 of A");
        throw Error("Not implemented");
    }

    /**
     * BIT 2,B
     * Test bit 2 of B
     */
    public static 0xCB50 = (cpu: Z80) => {
        console.log("BIT 2,B   - Test bit 2 of B");
        throw Error("Not implemented");
    }

    /**
     * BIT 2,C
     * Test bit 2 of C
     */
    public static 0xCB51 = (cpu: Z80) => {
        console.log("BIT 2,C   - Test bit 2 of C");
        throw Error("Not implemented");
    }

    /**
     * BIT 2,D
     * Test bit 2 of D
     */
    public static 0xCB52 = (cpu: Z80) => {
        console.log("BIT 2,D   - Test bit 2 of D");
        throw Error("Not implemented");
    }

    /**
     * BIT 2,E
     * Test bit 2 of E
     */
    public static 0xCB53 = (cpu: Z80) => {
        console.log("BIT 2,E   - Test bit 2 of E");
        throw Error("Not implemented");
    }

    /**
     * BIT 2,H
     * Test bit 2 of H
     */
    public static 0xCB54 = (cpu: Z80) => {
        console.log("BIT 2,H   - Test bit 2 of H");
        throw Error("Not implemented");
    }

    /**
     * BIT 2,L
     * Test bit 2 of L
     */
    public static 0xCB55 = (cpu: Z80) => {
        console.log("BIT 2,L   - Test bit 2 of L");
        throw Error("Not implemented");
    }

    /**
     * BIT 2,(HL)
     * Test bit 2 of value pointed by HL
     */
    public static 0xCB56 = (cpu: Z80) => {
        console.log("BIT 2,(HL)- Test bit 2 of value pointed by HL");
        throw Error("Not implemented");
    }

    /**
     * BIT 2,A
     * Test bit 2 of A
     */
    public static 0xCB57 = (cpu: Z80) => {
        console.log("BIT 2,A   - Test bit 2 of A");
        throw Error("Not implemented");
    }

    /**
     * BIT 3,B
     * Test bit 3 of B
     */
    public static 0xCB58 = (cpu: Z80) => {
        console.log("BIT 3,B   - Test bit 3 of B");
        throw Error("Not implemented");
    }

    /**
     * BIT 3,C
     * Test bit 3 of C
     */
    public static 0xCB59 = (cpu: Z80) => {
        console.log("BIT 3,C   - Test bit 3 of C");
        throw Error("Not implemented");
    }

    /**
     * BIT 3,D
     * Test bit 3 of D
     */
    public static 0xCB5A = (cpu: Z80) => {
        console.log("BIT 3,D   - Test bit 3 of D");
        throw Error("Not implemented");
    }

    /**
     * BIT 3,E
     * Test bit 3 of E
     */
    public static 0xCB5B = (cpu: Z80) => {
        console.log("BIT 3,E   - Test bit 3 of E");
        throw Error("Not implemented");
    }

    /**
     * BIT 3,H
     * Test bit 3 of H
     */
    public static 0xCB5C = (cpu: Z80) => {
        console.log("BIT 3,H   - Test bit 3 of H");
        throw Error("Not implemented");
    }

    /**
     * BIT 3,L
     * Test bit 3 of L
     */
    public static 0xCB5D = (cpu: Z80) => {
        console.log("BIT 3,L   - Test bit 3 of L");
        throw Error("Not implemented");
    }

    /**
     * BIT 3,(HL)
     * Test bit 3 of value pointed by HL
     */
    public static 0xCB5E = (cpu: Z80) => {
        console.log("BIT 3,(HL)- Test bit 3 of value pointed by HL");
        throw Error("Not implemented");
    }

    /**
     * BIT 3,A
     * Test bit 3 of A
     */
    public static 0xCB5F = (cpu: Z80) => {
        console.log("BIT 3,A   - Test bit 3 of A");
        throw Error("Not implemented");
    }

    /**
     * BIT 4,B
     * Test bit 4 of B
     */
    public static 0xCB60 = (cpu: Z80) => {
        console.log("BIT 4,B   - Test bit 4 of B");
        throw Error("Not implemented");
    }

    /**
     * BIT 4,C
     * Test bit 4 of C
     */
    public static 0xCB61 = (cpu: Z80) => {
        console.log("BIT 4,C   - Test bit 4 of C");
        throw Error("Not implemented");
    }

    /**
     * BIT 4,D
     * Test bit 4 of D
     */
    public static 0xCB62 = (cpu: Z80) => {
        console.log("BIT 4,D   - Test bit 4 of D");
        throw Error("Not implemented");
    }

    /**
     * BIT 4,E
     * Test bit 4 of E
     */
    public static 0xCB63 = (cpu: Z80) => {
        console.log("BIT 4,E   - Test bit 4 of E");
        throw Error("Not implemented");
    }

    /**
     * BIT 4,H
     * Test bit 4 of H
     */
    public static 0xCB64 = (cpu: Z80) => {
        console.log("BIT 4,H   - Test bit 4 of H");
        throw Error("Not implemented");
    }

    /**
     * BIT 4,L
     * Test bit 4 of L
     */
    public static 0xCB65 = (cpu: Z80) => {
        console.log("BIT 4,L   - Test bit 4 of L");
        throw Error("Not implemented");
    }

    /**
     * BIT 4,(HL)
     * Test bit 4 of value pointed by HL
     */
    public static 0xCB66 = (cpu: Z80) => {
        console.log("BIT 4,(HL)- Test bit 4 of value pointed by HL");
        throw Error("Not implemented");
    }

    /**
     * BIT 4,A
     * Test bit 4 of A
     */
    public static 0xCB67 = (cpu: Z80) => {
        console.log("BIT 4,A   - Test bit 4 of A");
        throw Error("Not implemented");
    }

    /**
     * BIT 5,B
     * Test bit 5 of B
     */
    public static 0xCB68 = (cpu: Z80) => {
        console.log("BIT 5,B   - Test bit 5 of B");
        throw Error("Not implemented");
    }

    /**
     * BIT 5,C
     * Test bit 5 of C
     */
    public static 0xCB69 = (cpu: Z80) => {
        console.log("BIT 5,C   - Test bit 5 of C");
        throw Error("Not implemented");
    }

    /**
     * BIT 5,D
     * Test bit 5 of D
     */
    public static 0xCB6A = (cpu: Z80) => {
        console.log("BIT 5,D   - Test bit 5 of D");
        throw Error("Not implemented");
    }

    /**
     * BIT 5,E
     * Test bit 5 of E
     */
    public static 0xCB6B = (cpu: Z80) => {
        console.log("BIT 5,E   - Test bit 5 of E");
        throw Error("Not implemented");
    }

    /**
     * BIT 5,H
     * Test bit 5 of H
     */
    public static 0xCB6C = (cpu: Z80) => {
        console.log("BIT 5,H   - Test bit 5 of H");
        throw Error("Not implemented");
    }

    /**
     * BIT 5,L
     * Test bit 5 of L
     */
    public static 0xCB6D = (cpu: Z80) => {
        console.log("BIT 5,L   - Test bit 5 of L");
        throw Error("Not implemented");
    }

    /**
     * BIT 5,(HL)
     * Test bit 5 of value pointed by HL
     */
    public static 0xCB6E = (cpu: Z80) => {
        console.log("BIT 5,(HL)- Test bit 5 of value pointed by HL");
        throw Error("Not implemented");
    }

    /**
     * BIT 5,A
     * Test bit 5 of A
     */
    public static 0xCB6F = (cpu: Z80) => {
        console.log("BIT 5,A   - Test bit 5 of A");
        throw Error("Not implemented");
    }

    /**
     * BIT 6,B
     * Test bit 6 of B
     */
    public static 0xCB70 = (cpu: Z80) => {
        console.log("BIT 6,B   - Test bit 6 of B");
        throw Error("Not implemented");
    }

    /**
     * BIT 6,C
     * Test bit 6 of C
     */
    public static 0xCB71 = (cpu: Z80) => {
        console.log("BIT 6,C   - Test bit 6 of C");
        throw Error("Not implemented");
    }

    /**
     * BIT 6,D
     * Test bit 6 of D
     */
    public static 0xCB72 = (cpu: Z80) => {
        console.log("BIT 6,D   - Test bit 6 of D");
        throw Error("Not implemented");
    }

    /**
     * BIT 6,E
     * Test bit 6 of E
     */
    public static 0xCB73 = (cpu: Z80) => {
        console.log("BIT 6,E   - Test bit 6 of E");
        throw Error("Not implemented");
    }

    /**
     * BIT 6,H
     * Test bit 6 of H
     */
    public static 0xCB74 = (cpu: Z80) => {
        console.log("BIT 6,H   - Test bit 6 of H");
        throw Error("Not implemented");
    }

    /**
     * BIT 6,L
     * Test bit 6 of L
     */
    public static 0xCB75 = (cpu: Z80) => {
        console.log("BIT 6,L   - Test bit 6 of L");
        throw Error("Not implemented");
    }

    /**
     * BIT 6,(HL)
     * Test bit 6 of value pointed by HL
     */
    public static 0xCB76 = (cpu: Z80) => {
        console.log("BIT 6,(HL)- Test bit 6 of value pointed by HL");
        throw Error("Not implemented");
    }

    /**
     * BIT 6,A
     * Test bit 6 of A
     */
    public static 0xCB77 = (cpu: Z80) => {
        console.log("BIT 6,A   - Test bit 6 of A");
        throw Error("Not implemented");
    }

    /**
     * BIT 7,B
     * Test bit 7 of B
     */
    public static 0xCB78 = (cpu: Z80) => {
        console.log("BIT 7,B   - Test bit 7 of B");
        throw Error("Not implemented");
    }

    /**
     * BIT 7,C
     * Test bit 7 of C
     */
    public static 0xCB79 = (cpu: Z80) => {
        console.log("BIT 7,C   - Test bit 7 of C");
        throw Error("Not implemented");
    }

    /**
     * BIT 7,D
     * Test bit 7 of D
     */
    public static 0xCB7A = (cpu: Z80) => {
        console.log("BIT 7,D   - Test bit 7 of D");
        throw Error("Not implemented");
    }

    /**
     * BIT 7,E
     * Test bit 7 of E
     */
    public static 0xCB7B = (cpu: Z80) => {
        console.log("BIT 7,E   - Test bit 7 of E");
        throw Error("Not implemented");
    }

    /**
     * BIT 7,H
     * Test bit 7 of H
     */
    public static 0xCB7C = (cpu: Z80) => {
        console.log("BIT 7,H   - Test bit 7 of H");
        cpu.registers.sign = !!(cpu.registers.H & 0x80);
        cpu.clock.mCycles = 3;
    }

    /**
     * BIT 7,L
     * Test bit 7 of L
     */
    public static 0xCB7D = (cpu: Z80) => {
        console.log("BIT 7,L   - Test bit 7 of L");
        throw Error("Not implemented");
    }

    /**
     * BIT 7,(HL)
     * Test bit 7 of value pointed by HL
     */
    public static 0xCB7E = (cpu: Z80) => {
        console.log("BIT 7,(HL)- Test bit 7 of value pointed by HL");
        throw Error("Not implemented");
    }

    /**
     * BIT 7,A
     * Test bit 7 of A
     */
    public static 0xCB7F = (cpu: Z80) => {
        console.log("BIT 7,A   - Test bit 7 of A");
        throw Error("Not implemented");
    }

    /**
     * RES 0,B
     * Clear (reset) bit 0 of B
     */
    public static 0xCB80 = (cpu: Z80) => {
        console.log("RES 0,B   - Clear (reset) bit 0 of B");
        throw Error("Not implemented");
    }

    /**
     * RES 0,C
     * Clear (reset) bit 0 of C
     */
    public static 0xCB81 = (cpu: Z80) => {
        console.log("RES 0,C   - Clear (reset) bit 0 of C");
        throw Error("Not implemented");
    }

    /**
     * RES 0,D
     * Clear (reset) bit 0 of D
     */
    public static 0xCB82 = (cpu: Z80) => {
        console.log("RES 0,D   - Clear (reset) bit 0 of D");
        throw Error("Not implemented");
    }

    /**
     * RES 0,E
     * Clear (reset) bit 0 of E
     */
    public static 0xCB83 = (cpu: Z80) => {
        console.log("RES 0,E   - Clear (reset) bit 0 of E");
        throw Error("Not implemented");
    }

    /**
     * RES 0,H
     * Clear (reset) bit 0 of H
     */
    public static 0xCB84 = (cpu: Z80) => {
        console.log("RES 0,H   - Clear (reset) bit 0 of H");
        throw Error("Not implemented");
    }

    /**
     * RES 0,L
     * Clear (reset) bit 0 of L
     */
    public static 0xCB85 = (cpu: Z80) => {
        console.log("RES 0,L   - Clear (reset) bit 0 of L");
        throw Error("Not implemented");
    }

    /**
     * RES 0,(HL)
     * Clear (reset) bit 0 of value pointed by HL
     */
    public static 0xCB86 = (cpu: Z80) => {
        console.log("RES 0,(HL)- Clear (reset) bit 0 of value pointed by HL");
        throw Error("Not implemented");
    }

    /**
     * RES 0,A
     * Clear (reset) bit 0 of A
     */
    public static 0xCB87 = (cpu: Z80) => {
        console.log("RES 0,A   - Clear (reset) bit 0 of A");
        throw Error("Not implemented");
    }

    /**
     * RES 1,B
     * Clear (reset) bit 1 of B
     */
    public static 0xCB88 = (cpu: Z80) => {
        console.log("RES 1,B   - Clear (reset) bit 1 of B");
        throw Error("Not implemented");
    }

    /**
     * RES 1,C
     * Clear (reset) bit 1 of C
     */
    public static 0xCB89 = (cpu: Z80) => {
        console.log("RES 1,C   - Clear (reset) bit 1 of C");
        throw Error("Not implemented");
    }

    /**
     * RES 1,D
     * Clear (reset) bit 1 of D
     */
    public static 0xCB8A = (cpu: Z80) => {
        console.log("RES 1,D   - Clear (reset) bit 1 of D");
        throw Error("Not implemented");
    }

    /**
     * RES 1,E
     * Clear (reset) bit 1 of E
     */
    public static 0xCB8B = (cpu: Z80) => {
        console.log("RES 1,E   - Clear (reset) bit 1 of E");
        throw Error("Not implemented");
    }

    /**
     * RES 1,H
     * Clear (reset) bit 1 of H
     */
    public static 0xCB8C = (cpu: Z80) => {
        console.log("RES 1,H   - Clear (reset) bit 1 of H");
        throw Error("Not implemented");
    }

    /**
     * RES 1,L
     * Clear (reset) bit 1 of L
     */
    public static 0xCB8D = (cpu: Z80) => {
        console.log("RES 1,L   - Clear (reset) bit 1 of L");
        throw Error("Not implemented");
    }

    /**
     * RES 1,(HL)
     * Clear (reset) bit 1 of value pointed by HL
     */
    public static 0xCB8E = (cpu: Z80) => {
        console.log("RES 1,(HL)- Clear (reset) bit 1 of value pointed by HL");
        throw Error("Not implemented");
    }

    /**
     * RES 1,A
     * Clear (reset) bit 1 of A
     */
    public static 0xCB8F = (cpu: Z80) => {
        console.log("RES 1,A   - Clear (reset) bit 1 of A");
        throw Error("Not implemented");
    }

    /**
     * RES 2,B
     * Clear (reset) bit 2 of B
     */
    public static 0xCB90 = (cpu: Z80) => {
        console.log("RES 2,B   - Clear (reset) bit 2 of B");
        throw Error("Not implemented");
    }

    /**
     * RES 2,C
     * Clear (reset) bit 2 of C
     */
    public static 0xCB91 = (cpu: Z80) => {
        console.log("RES 2,C   - Clear (reset) bit 2 of C");
        throw Error("Not implemented");
    }

    /**
     * RES 2,D
     * Clear (reset) bit 2 of D
     */
    public static 0xCB92 = (cpu: Z80) => {
        console.log("RES 2,D   - Clear (reset) bit 2 of D");
        throw Error("Not implemented");
    }

    /**
     * RES 2,E
     * Clear (reset) bit 2 of E
     */
    public static 0xCB93 = (cpu: Z80) => {
        console.log("RES 2,E   - Clear (reset) bit 2 of E");
        throw Error("Not implemented");
    }

    /**
     * RES 2,H
     * Clear (reset) bit 2 of H
     */
    public static 0xCB94 = (cpu: Z80) => {
        console.log("RES 2,H   - Clear (reset) bit 2 of H");
        throw Error("Not implemented");
    }

    /**
     * RES 2,L
     * Clear (reset) bit 2 of L
     */
    public static 0xCB95 = (cpu: Z80) => {
        console.log("RES 2,L   - Clear (reset) bit 2 of L");
        throw Error("Not implemented");
    }

    /**
     * RES 2,(HL)
     * Clear (reset) bit 2 of value pointed by HL
     */
    public static 0xCB96 = (cpu: Z80) => {
        console.log("RES 2,(HL)- Clear (reset) bit 2 of value pointed by HL");
        throw Error("Not implemented");
    }

    /**
     * RES 2,A
     * Clear (reset) bit 2 of A
     */
    public static 0xCB97 = (cpu: Z80) => {
        console.log("RES 2,A   - Clear (reset) bit 2 of A");
        throw Error("Not implemented");
    }

    /**
     * RES 3,B
     * Clear (reset) bit 3 of B
     */
    public static 0xCB98 = (cpu: Z80) => {
        console.log("RES 3,B   - Clear (reset) bit 3 of B");
        throw Error("Not implemented");
    }

    /**
     * RES 3,C
     * Clear (reset) bit 3 of C
     */
    public static 0xCB99 = (cpu: Z80) => {
        console.log("RES 3,C   - Clear (reset) bit 3 of C");
        throw Error("Not implemented");
    }

    /**
     * RES 3,D
     * Clear (reset) bit 3 of D
     */
    public static 0xCB9A = (cpu: Z80) => {
        console.log("RES 3,D   - Clear (reset) bit 3 of D");
        throw Error("Not implemented");
    }

    /**
     * RES 3,E
     * Clear (reset) bit 3 of E
     */
    public static 0xCB9B = (cpu: Z80) => {
        console.log("RES 3,E   - Clear (reset) bit 3 of E");
        throw Error("Not implemented");
    }

    /**
     * RES 3,H
     * Clear (reset) bit 3 of H
     */
    public static 0xCB9C = (cpu: Z80) => {
        console.log("RES 3,H   - Clear (reset) bit 3 of H");
        throw Error("Not implemented");
    }

    /**
     * RES 3,L
     * Clear (reset) bit 3 of L
     */
    public static 0xCB9D = (cpu: Z80) => {
        console.log("RES 3,L   - Clear (reset) bit 3 of L");
        throw Error("Not implemented");
    }

    /**
     * RES 3,(HL)
     * Clear (reset) bit 3 of value pointed by HL
     */
    public static 0xCB9E = (cpu: Z80) => {
        console.log("RES 3,(HL)- Clear (reset) bit 3 of value pointed by HL");
        throw Error("Not implemented");
    }

    /**
     * RES 3,A
     * Clear (reset) bit 3 of A
     */
    public static 0xCB9F = (cpu: Z80) => {
        console.log("RES 3,A   - Clear (reset) bit 3 of A");
        throw Error("Not implemented");
    }

    /**
     * RES 4,B
     * Clear (reset) bit 4 of B
     */
    public static 0xCBA0 = (cpu: Z80) => {
        console.log("RES 4,B   - Clear (reset) bit 4 of B");
        throw Error("Not implemented");
    }

    /**
     * RES 4,C
     * Clear (reset) bit 4 of C
     */
    public static 0xCBA1 = (cpu: Z80) => {
        console.log("RES 4,C   - Clear (reset) bit 4 of C");
        throw Error("Not implemented");
    }

    /**
     * RES 4,D
     * Clear (reset) bit 4 of D
     */
    public static 0xCBA2 = (cpu: Z80) => {
        console.log("RES 4,D   - Clear (reset) bit 4 of D");
        throw Error("Not implemented");
    }

    /**
     * RES 4,E
     * Clear (reset) bit 4 of E
     */
    public static 0xCBA3 = (cpu: Z80) => {
        console.log("RES 4,E   - Clear (reset) bit 4 of E");
        throw Error("Not implemented");
    }

    /**
     * RES 4,H
     * Clear (reset) bit 4 of H
     */
    public static 0xCBA4 = (cpu: Z80) => {
        console.log("RES 4,H   - Clear (reset) bit 4 of H");
        throw Error("Not implemented");
    }

    /**
     * RES 4,L
     * Clear (reset) bit 4 of L
     */
    public static 0xCBA5 = (cpu: Z80) => {
        console.log("RES 4,L   - Clear (reset) bit 4 of L");
        throw Error("Not implemented");
    }

    /**
     * RES 4,(HL)
     * Clear (reset) bit 4 of value pointed by HL
     */
    public static 0xCBA6 = (cpu: Z80) => {
        console.log("RES 4,(HL)- Clear (reset) bit 4 of value pointed by HL");
        throw Error("Not implemented");
    }

    /**
     * RES 4,A
     * Clear (reset) bit 4 of A
     */
    public static 0xCBA7 = (cpu: Z80) => {
        console.log("RES 4,A   - Clear (reset) bit 4 of A");
        throw Error("Not implemented");
    }

    /**
     * RES 5,B
     * Clear (reset) bit 5 of B
     */
    public static 0xCBA8 = (cpu: Z80) => {
        console.log("RES 5,B   - Clear (reset) bit 5 of B");
        throw Error("Not implemented");
    }

    /**
     * RES 5,C
     * Clear (reset) bit 5 of C
     */
    public static 0xCBA9 = (cpu: Z80) => {
        console.log("RES 5,C   - Clear (reset) bit 5 of C");
        throw Error("Not implemented");
    }

    /**
     * RES 5,D
     * Clear (reset) bit 5 of D
     */
    public static 0xCBAA = (cpu: Z80) => {
        console.log("RES 5,D   - Clear (reset) bit 5 of D");
        throw Error("Not implemented");
    }

    /**
     * RES 5,E
     * Clear (reset) bit 5 of E
     */
    public static 0xCBAB = (cpu: Z80) => {
        console.log("RES 5,E   - Clear (reset) bit 5 of E");
        throw Error("Not implemented");
    }

    /**
     * RES 5,H
     * Clear (reset) bit 5 of H
     */
    public static 0xCBAC = (cpu: Z80) => {
        console.log("RES 5,H   - Clear (reset) bit 5 of H");
        throw Error("Not implemented");
    }

    /**
     * RES 5,L
     * Clear (reset) bit 5 of L
     */
    public static 0xCBAD = (cpu: Z80) => {
        console.log("RES 5,L   - Clear (reset) bit 5 of L");
        throw Error("Not implemented");
    }

    /**
     * RES 5,(HL)
     * Clear (reset) bit 5 of value pointed by HL
     */
    public static 0xCBAE = (cpu: Z80) => {
        console.log("RES 5,(HL)- Clear (reset) bit 5 of value pointed by HL");
        throw Error("Not implemented");
    }

    /**
     * RES 5,A
     * Clear (reset) bit 5 of A
     */
    public static 0xCBAF = (cpu: Z80) => {
        console.log("RES 5,A   - Clear (reset) bit 5 of A");
        throw Error("Not implemented");
    }

    /**
     * RES 6,B
     * Clear (reset) bit 6 of B
     */
    public static 0xCBB0 = (cpu: Z80) => {
        console.log("RES 6,B   - Clear (reset) bit 6 of B");
        throw Error("Not implemented");
    }

    /**
     * RES 6,C
     * Clear (reset) bit 6 of C
     */
    public static 0xCBB1 = (cpu: Z80) => {
        console.log("RES 6,C   - Clear (reset) bit 6 of C");
        throw Error("Not implemented");
    }

    /**
     * RES 6,D
     * Clear (reset) bit 6 of D
     */
    public static 0xCBB2 = (cpu: Z80) => {
        console.log("RES 6,D   - Clear (reset) bit 6 of D");
        throw Error("Not implemented");
    }

    /**
     * RES 6,E
     * Clear (reset) bit 6 of E
     */
    public static 0xCBB3 = (cpu: Z80) => {
        console.log("RES 6,E   - Clear (reset) bit 6 of E");
        throw Error("Not implemented");
    }

    /**
     * RES 6,H
     * Clear (reset) bit 6 of H
     */
    public static 0xCBB4 = (cpu: Z80) => {
        console.log("RES 6,H   - Clear (reset) bit 6 of H");
        throw Error("Not implemented");
    }

    /**
     * RES 6,L
     * Clear (reset) bit 6 of L
     */
    public static 0xCBB5 = (cpu: Z80) => {
        console.log("RES 6,L   - Clear (reset) bit 6 of L");
        throw Error("Not implemented");
    }

    /**
     * RES 6,(HL)
     * Clear (reset) bit 6 of value pointed by HL
     */
    public static 0xCBB6 = (cpu: Z80) => {
        console.log("RES 6,(HL)- Clear (reset) bit 6 of value pointed by HL");
        throw Error("Not implemented");
    }

    /**
     * RES 6,A
     * Clear (reset) bit 6 of A
     */
    public static 0xCBB7 = (cpu: Z80) => {
        console.log("RES 6,A   - Clear (reset) bit 6 of A");
        throw Error("Not implemented");
    }

    /**
     * RES 7,B
     * Clear (reset) bit 7 of B
     */
    public static 0xCBB8 = (cpu: Z80) => {
        console.log("RES 7,B   - Clear (reset) bit 7 of B");
        throw Error("Not implemented");
    }

    /**
     * RES 7,C
     * Clear (reset) bit 7 of C
     */
    public static 0xCBB9 = (cpu: Z80) => {
        console.log("RES 7,C   - Clear (reset) bit 7 of C");
        throw Error("Not implemented");
    }

    /**
     * RES 7,D
     * Clear (reset) bit 7 of D
     */
    public static 0xCBBA = (cpu: Z80) => {
        console.log("RES 7,D   - Clear (reset) bit 7 of D");
        throw Error("Not implemented");
    }

    /**
     * RES 7,E
     * Clear (reset) bit 7 of E
     */
    public static 0xCBBB = (cpu: Z80) => {
        console.log("RES 7,E   - Clear (reset) bit 7 of E");
        throw Error("Not implemented");
    }

    /**
     * RES 7,H
     * Clear (reset) bit 7 of H
     */
    public static 0xCBBC = (cpu: Z80) => {
        console.log("RES 7,H   - Clear (reset) bit 7 of H");
        throw Error("Not implemented");
    }

    /**
     * RES 7,L
     * Clear (reset) bit 7 of L
     */
    public static 0xCBBD = (cpu: Z80) => {
        console.log("RES 7,L   - Clear (reset) bit 7 of L");
        throw Error("Not implemented");
    }

    /**
     * RES 7,(HL)
     * Clear (reset) bit 7 of value pointed by HL
     */
    public static 0xCBBE = (cpu: Z80) => {
        console.log("RES 7,(HL)- Clear (reset) bit 7 of value pointed by HL");
        throw Error("Not implemented");
    }

    /**
     * RES 7,A
     * Clear (reset) bit 7 of A
     */
    public static 0xCBBF = (cpu: Z80) => {
        console.log("RES 7,A   - Clear (reset) bit 7 of A");
        throw Error("Not implemented");
    }

    /**
     * SET 0,B
     * Set bit 0 of B
     */
    public static 0xCBC0 = (cpu: Z80) => {
        console.log("SET 0,B   - Set bit 0 of B");
        throw Error("Not implemented");
    }

    /**
     * SET 0,C
     * Set bit 0 of C
     */
    public static 0xCBC1 = (cpu: Z80) => {
        console.log("SET 0,C   - Set bit 0 of C");
        throw Error("Not implemented");
    }

    /**
     * SET 0,D
     * Set bit 0 of D
     */
    public static 0xCBC2 = (cpu: Z80) => {
        console.log("SET 0,D   - Set bit 0 of D");
        throw Error("Not implemented");
    }

    /**
     * SET 0,E
     * Set bit 0 of E
     */
    public static 0xCBC3 = (cpu: Z80) => {
        console.log("SET 0,E   - Set bit 0 of E");
        throw Error("Not implemented");
    }

    /**
     * SET 0,H
     * Set bit 0 of H
     */
    public static 0xCBC4 = (cpu: Z80) => {
        console.log("SET 0,H   - Set bit 0 of H");
        throw Error("Not implemented");
    }

    /**
     * SET 0,L
     * Set bit 0 of L
     */
    public static 0xCBC5 = (cpu: Z80) => {
        console.log("SET 0,L   - Set bit 0 of L");
        throw Error("Not implemented");
    }

    /**
     * SET 0,(HL)
     * Set bit 0 of value pointed by HL
     */
    public static 0xCBC6 = (cpu: Z80) => {
        console.log("SET 0,(HL)- Set bit 0 of value pointed by HL");
        throw Error("Not implemented");
    }

    /**
     * SET 0,A
     * Set bit 0 of A
     */
    public static 0xCBC7 = (cpu: Z80) => {
        console.log("SET 0,A   - Set bit 0 of A");
        throw Error("Not implemented");
    }

    /**
     * SET 1,B
     * Set bit 1 of B
     */
    public static 0xCBC8 = (cpu: Z80) => {
        console.log("SET 1,B   - Set bit 1 of B");
        throw Error("Not implemented");
    }

    /**
     * SET 1,C
     * Set bit 1 of C
     */
    public static 0xCBC9 = (cpu: Z80) => {
        console.log("SET 1,C   - Set bit 1 of C");
        throw Error("Not implemented");
    }

    /**
     * SET 1,D
     * Set bit 1 of D
     */
    public static 0xCBCA = (cpu: Z80) => {
        console.log("SET 1,D   - Set bit 1 of D");
        throw Error("Not implemented");
    }

    /**
     * SET 1,E
     * Set bit 1 of E
     */
    public static 0xCBCB = (cpu: Z80) => {
        console.log("SET 1,E   - Set bit 1 of E");
        throw Error("Not implemented");
    }

    /**
     * SET 1,H
     * Set bit 1 of H
     */
    public static 0xCBCC = (cpu: Z80) => {
        console.log("SET 1,H   - Set bit 1 of H");
        throw Error("Not implemented");
    }

    /**
     * SET 1,L
     * Set bit 1 of L
     */
    public static 0xCBCD = (cpu: Z80) => {
        console.log("SET 1,L   - Set bit 1 of L");
        throw Error("Not implemented");
    }

    /**
     * SET 1,(HL)
     * Set bit 1 of value pointed by HL
     */
    public static 0xCBCE = (cpu: Z80) => {
        console.log("SET 1,(HL)- Set bit 1 of value pointed by HL");
        throw Error("Not implemented");
    }

    /**
     * SET 1,A
     * Set bit 1 of A
     */
    public static 0xCBCF = (cpu: Z80) => {
        console.log("SET 1,A   - Set bit 1 of A");
        throw Error("Not implemented");
    }

    /**
     * SET 2,B
     * Set bit 2 of B
     */
    public static 0xCBD0 = (cpu: Z80) => {
        console.log("SET 2,B   - Set bit 2 of B");
        throw Error("Not implemented");
    }

    /**
     * SET 2,C
     * Set bit 2 of C
     */
    public static 0xCBD1 = (cpu: Z80) => {
        console.log("SET 2,C   - Set bit 2 of C");
        throw Error("Not implemented");
    }

    /**
     * SET 2,D
     * Set bit 2 of D
     */
    public static 0xCBD2 = (cpu: Z80) => {
        console.log("SET 2,D   - Set bit 2 of D");
        throw Error("Not implemented");
    }

    /**
     * SET 2,E
     * Set bit 2 of E
     */
    public static 0xCBD3 = (cpu: Z80) => {
        console.log("SET 2,E   - Set bit 2 of E");
        throw Error("Not implemented");
    }

    /**
     * SET 2,H
     * Set bit 2 of H
     */
    public static 0xCBD4 = (cpu: Z80) => {
        console.log("SET 2,H   - Set bit 2 of H");
        throw Error("Not implemented");
    }

    /**
     * SET 2,L
     * Set bit 2 of L
     */
    public static 0xCBD5 = (cpu: Z80) => {
        console.log("SET 2,L   - Set bit 2 of L");
        throw Error("Not implemented");
    }

    /**
     * SET 2,(HL)
     * Set bit 2 of value pointed by HL
     */
    public static 0xCBD6 = (cpu: Z80) => {
        console.log("SET 2,(HL)- Set bit 2 of value pointed by HL");
        throw Error("Not implemented");
    }

    /**
     * SET 2,A
     * Set bit 2 of A
     */
    public static 0xCBD7 = (cpu: Z80) => {
        console.log("SET 2,A   - Set bit 2 of A");
        throw Error("Not implemented");
    }

    /**
     * SET 3,B
     * Set bit 3 of B
     */
    public static 0xCBD8 = (cpu: Z80) => {
        console.log("SET 3,B   - Set bit 3 of B");
        throw Error("Not implemented");
    }

    /**
     * SET 3,C
     * Set bit 3 of C
     */
    public static 0xCBD9 = (cpu: Z80) => {
        console.log("SET 3,C   - Set bit 3 of C");
        throw Error("Not implemented");
    }

    /**
     * SET 3,D
     * Set bit 3 of D
     */
    public static 0xCBDA = (cpu: Z80) => {
        console.log("SET 3,D   - Set bit 3 of D");
        throw Error("Not implemented");
    }

    /**
     * SET 3,E
     * Set bit 3 of E
     */
    public static 0xCBDB = (cpu: Z80) => {
        console.log("SET 3,E   - Set bit 3 of E");
        throw Error("Not implemented");
    }

    /**
     * SET 3,H
     * Set bit 3 of H
     */
    public static 0xCBDC = (cpu: Z80) => {
        console.log("SET 3,H   - Set bit 3 of H");
        throw Error("Not implemented");
    }

    /**
     * SET 3,L
     * Set bit 3 of L
     */
    public static 0xCBDD = (cpu: Z80) => {
        console.log("SET 3,L   - Set bit 3 of L");
        throw Error("Not implemented");
    }

    /**
     * SET 3,(HL)
     * Set bit 3 of value pointed by HL
     */
    public static 0xCBDE = (cpu: Z80) => {
        console.log("SET 3,(HL)- Set bit 3 of value pointed by HL");
        throw Error("Not implemented");
    }

    /**
     * SET 3,A
     * Set bit 3 of A
     */
    public static 0xCBDF = (cpu: Z80) => {
        console.log("SET 3,A   - Set bit 3 of A");
        throw Error("Not implemented");
    }

    /**
     * SET 4,B
     * Set bit 4 of B
     */
    public static 0xCBE0 = (cpu: Z80) => {
        console.log("SET 4,B   - Set bit 4 of B");
        throw Error("Not implemented");
    }

    /**
     * SET 4,C
     * Set bit 4 of C
     */
    public static 0xCBE1 = (cpu: Z80) => {
        console.log("SET 4,C   - Set bit 4 of C");
        throw Error("Not implemented");
    }

    /**
     * SET 4,D
     * Set bit 4 of D
     */
    public static 0xCBE2 = (cpu: Z80) => {
        console.log("SET 4,D   - Set bit 4 of D");
        throw Error("Not implemented");
    }

    /**
     * SET 4,E
     * Set bit 4 of E
     */
    public static 0xCBE3 = (cpu: Z80) => {
        console.log("SET 4,E   - Set bit 4 of E");
        throw Error("Not implemented");
    }

    /**
     * SET 4,H
     * Set bit 4 of H
     */
    public static 0xCBE4 = (cpu: Z80) => {
        console.log("SET 4,H   - Set bit 4 of H");
        throw Error("Not implemented");
    }

    /**
     * SET 4,L
     * Set bit 4 of L
     */
    public static 0xCBE5 = (cpu: Z80) => {
        console.log("SET 4,L   - Set bit 4 of L");
        throw Error("Not implemented");
    }

    /**
     * SET 4,(HL)
     * Set bit 4 of value pointed by HL
     */
    public static 0xCBE6 = (cpu: Z80) => {
        console.log("SET 4,(HL)- Set bit 4 of value pointed by HL");
        throw Error("Not implemented");
    }

    /**
     * SET 4,A
     * Set bit 4 of A
     */
    public static 0xCBE7 = (cpu: Z80) => {
        console.log("SET 4,A   - Set bit 4 of A");
        throw Error("Not implemented");
    }

    /**
     * SET 5,B
     * Set bit 5 of B
     */
    public static 0xCBE8 = (cpu: Z80) => {
        console.log("SET 5,B   - Set bit 5 of B");
        throw Error("Not implemented");
    }

    /**
     * SET 5,C
     * Set bit 5 of C
     */
    public static 0xCBE9 = (cpu: Z80) => {
        console.log("SET 5,C   - Set bit 5 of C");
        throw Error("Not implemented");
    }

    /**
     * SET 5,D
     * Set bit 5 of D
     */
    public static 0xCBEA = (cpu: Z80) => {
        console.log("SET 5,D   - Set bit 5 of D");
        throw Error("Not implemented");
    }

    /**
     * SET 5,E
     * Set bit 5 of E
     */
    public static 0xCBEB = (cpu: Z80) => {
        console.log("SET 5,E   - Set bit 5 of E");
        throw Error("Not implemented");
    }

    /**
     * SET 5,H
     * Set bit 5 of H
     */
    public static 0xCBEC = (cpu: Z80) => {
        console.log("SET 5,H   - Set bit 5 of H");
        throw Error("Not implemented");
    }

    /**
     * SET 5,L
     * Set bit 5 of L
     */
    public static 0xCBED = (cpu: Z80) => {
        console.log("SET 5,L   - Set bit 5 of L");
        throw Error("Not implemented");
    }

    /**
     * SET 5,(HL)
     * Set bit 5 of value pointed by HL
     */
    public static 0xCBEE = (cpu: Z80) => {
        console.log("SET 5,(HL)- Set bit 5 of value pointed by HL");
        throw Error("Not implemented");
    }

    /**
     * SET 5,A
     * Set bit 5 of A
     */
    public static 0xCBEF = (cpu: Z80) => {
        console.log("SET 5,A   - Set bit 5 of A");
        throw Error("Not implemented");
    }

    /**
     * SET 6,B
     * Set bit 6 of B
     */
    public static 0xCBF0 = (cpu: Z80) => {
        console.log("SET 6,B   - Set bit 6 of B");
        throw Error("Not implemented");
    }

    /**
     * SET 6,C
     * Set bit 6 of C
     */
    public static 0xCBF1 = (cpu: Z80) => {
        console.log("SET 6,C   - Set bit 6 of C");
        throw Error("Not implemented");
    }

    /**
     * SET 6,D
     * Set bit 6 of D
     */
    public static 0xCBF2 = (cpu: Z80) => {
        console.log("SET 6,D   - Set bit 6 of D");
        throw Error("Not implemented");
    }

    /**
     * SET 6,E
     * Set bit 6 of E
     */
    public static 0xCBF3 = (cpu: Z80) => {
        console.log("SET 6,E   - Set bit 6 of E");
        throw Error("Not implemented");
    }

    /**
     * SET 6,H
     * Set bit 6 of H
     */
    public static 0xCBF4 = (cpu: Z80) => {
        console.log("SET 6,H   - Set bit 6 of H");
        throw Error("Not implemented");
    }

    /**
     * SET 6,L
     * Set bit 6 of L
     */
    public static 0xCBF5 = (cpu: Z80) => {
        console.log("SET 6,L   - Set bit 6 of L");
        throw Error("Not implemented");
    }

    /**
     * SET 6,(HL)
     * Set bit 6 of value pointed by HL
     */
    public static 0xCBF6 = (cpu: Z80) => {
        console.log("SET 6,(HL)- Set bit 6 of value pointed by HL");
        throw Error("Not implemented");
    }

    /**
     * SET 6,A
     * Set bit 6 of A
     */
    public static 0xCBF7 = (cpu: Z80) => {
        console.log("SET 6,A   - Set bit 6 of A");
        throw Error("Not implemented");
    }

    /**
     * SET 7,B
     * Set bit 7 of B
     */
    public static 0xCBF8 = (cpu: Z80) => {
        console.log("SET 7,B   - Set bit 7 of B");
        throw Error("Not implemented");
    }

    /**
     * SET 7,C
     * Set bit 7 of C
     */
    public static 0xCBF9 = (cpu: Z80) => {
        console.log("SET 7,C   - Set bit 7 of C");
        throw Error("Not implemented");
    }

    /**
     * SET 7,D
     * Set bit 7 of D
     */
    public static 0xCBFA = (cpu: Z80) => {
        console.log("SET 7,D   - Set bit 7 of D");
        throw Error("Not implemented");
    }

    /**
     * SET 7,E
     * Set bit 7 of E
     */
    public static 0xCBFB = (cpu: Z80) => {
        console.log("SET 7,E   - Set bit 7 of E");
        throw Error("Not implemented");
    }

    /**
     * SET 7,H
     * Set bit 7 of H
     */
    public static 0xCBFC = (cpu: Z80) => {
        console.log("SET 7,H   - Set bit 7 of H");
        throw Error("Not implemented");
    }

    /**
     * SET 7,L
     * Set bit 7 of L
     */
    public static 0xCBFD = (cpu: Z80) => {
        console.log("SET 7,L   - Set bit 7 of L");
        throw Error("Not implemented");
    }

    /**
     * SET 7,(HL)
     * Set bit 7 of value pointed by HL
     */
    public static 0xCBFE = (cpu: Z80) => {
        console.log("SET 7,(HL)- Set bit 7 of value pointed by HL");
        throw Error("Not implemented");
    }

    /**
     * SET 7,A
     * Set bit 7 of A
     */
    public static 0xCBFF = (cpu: Z80) => {
        console.log("SET 7,A   - Set bit 7 of A");
        throw Error("Not implemented");
    }
}
