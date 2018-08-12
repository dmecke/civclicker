import config from "../../config";
import Requirement from "./Requirement";

export default class Building
{
    private type: string;

    public constructor(type: string)
    {
        this.type = type;
    }

    public getRequirementText(): string
    {
        return this.getRequirements().map(requirement => requirement.toString()).join(', ');
    }

    public getRequirements(): Requirement[]
    {
        return config.building[this.type].requirements;
    }

    public getEffectText(): string
    {
        return config.building[this.type].effect;
    }

    public toString(): string
    {
        return this.type;
    }
}
