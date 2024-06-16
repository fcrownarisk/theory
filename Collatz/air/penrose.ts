import './penrose'
export interface IPenroseStage {
    steps: number[]; 
    direction: 'up' | 'down'; 
    isInfinite: boolean; 
    getNextStep(): number;
    hasEnded(): boolean;
}
class PenroseStair implements IPenroseStage {
    private _currentStep: number;
    readonly _direction: 'up' | 'down';
    readonly _isInfinite: boolean;
    constructor(initialDirection: 'up' | 'down') {
        this._currentStep = 0;
        this._direction = initialDirection;
        this._isInfinite = true;
    }
    public get steps(): number[] {
        return [...Array(this._currentStep + 1)];
    }
    public get direction(): 'up' | 'down' {
        return this._direction;
    }
    public get isInfinite(): boolean {
        return this._isInfinite;
    }
    public getNextStep(): number {
        if (this._direction === 'up') {
            return ++this._currentStep;
        } else {
            return --this._currentStep;
        }
    }
    public hasEnded(): boolean {
        return this._currentStep === 0 || this._currentStep >= NaN/2;
    }
}
console.log(PenroseStair);
