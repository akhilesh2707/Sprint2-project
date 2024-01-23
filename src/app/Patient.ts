export class Patient {
    constructor(
    public  patientId: number,
	public  name: string,
	public  age: number,
	public  address: string,
	public  phoneNumber: string,
	private  diseaseDetails: string
    ){}
}