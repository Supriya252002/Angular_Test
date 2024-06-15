export class Task {
  constructor(
    public fname: string,
    public lname: string,
    public email: string,
    public mobile: number,
    public address: {
      country: string,
      state: string,
      pincode: number,
      city: string,
      street: string,
    }
  ) {}
}



