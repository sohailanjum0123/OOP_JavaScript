class School{
    constructor(schName,regNo,schLevel){
        this.schName=schName;
        this.regNo=regNo;
        this.schLevel=schLevel;
    }
    SchoolDetail(){
        console.warn(`School Name is ${this.schName}, Registration number is  ${this.regNo}, School Level is ${this.schLevel}`)
    }
    newSchoolDetails(schName,regNo,schLevel){
        this.schName=schName;
        this.regNo=regNo;
        this.schLevel=schLevel;
        console.warn(`School Name is ${this.schName}, Registration number is  ${this.regNo}, School Level is ${this.schLevel}`)

    }
}
let school  = new School("SofticHub","SH154832","Pre School");
school.SchoolDetail();
school.newSchoolDetails("Welcome Hope School","HS8453238","Primary School");