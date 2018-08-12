export default class Requirement
{
    private resource: string;
    private amount: number;

    public constructor(resource: string, amount: number)
    {
        this.resource = resource;
        this.amount = amount;
    }

    public getResource(): string
    {
        return this.resource;
    }

    public getAmount(): number
    {
        return this.amount;
    }

    public toString(): string
    {
        return this.amount + ' ' + this.resource;
    }
}
