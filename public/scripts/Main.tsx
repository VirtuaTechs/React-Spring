import * as React from 'react';
import ModelLoader from './modelLoader';

export class Main extends React.Component<{}, any> {
    private _modelLoader: any;
    private nextStep: any;

    constructor(props: any) {
        super(props);
        this.state = {
            shape: "Round",
            band: "",
            pave1: "",
            paveMilgrain: "",
            paveEngraving: "",
            pave2: "",
            shankSplit: "",
            channelStyle: "",
            milgrain: "",
            engraving: "",
            basket: "",
            bezel: "",
            halo: "",
            haloMilgrain: "",
            prongStyle: "",
            sideStones: "",
            sideStonesBand: "",
            sideStonesBasket: "",
            colorsTab: false,
            colorSelected: "Platinum"
        };
        this.nextStep = "diamond";
    }

    changeDiamond() {

    }

    changeShank(number: number) {
        this._modelLoader.changeShank(number);
        if (number == 1) {
            this.setState({ colorSelected: "Platinum" })
        }
        else if (number == 2) {
            this.setState({ colorSelected: "Yellow Gold" })
        }
        else if (number == 3) {
            this.setState({ colorSelected: "Rose Gold" })
        }
        this.setState({ colorsTab: false });
    }

    CreateSteps() {

        let stepsCount = 0;
        let stepName = [];
        let backName: string[] = [];

        if (this.state.shape != '') {
            stepName[stepsCount] = this.state.shape;
            backName[stepsCount] = "Diamond";
            stepsCount++;
        }

        if (this.state.band != '') {
            stepName[stepsCount] = this.state.band;
            backName[stepsCount] = "Band";
            stepsCount++;
        }

        if (this.state.pave1 != '') {
            stepName[stepsCount] = this.state.pave1;
            backName[stepsCount] = "Pave 1";
            stepsCount++;
        }

        if (this.state.paveMilgrain != '') {
            stepName[stepsCount] = this.state.paveMilgrain;
            backName[stepsCount] = "Pave Milgrain";
            stepsCount++;
        }

        if (this.state.paveEngraving != '') {
            stepName[stepsCount] = this.state.paveEngraving;
            backName[stepsCount] = "Pave Engraving";
            stepsCount++;
        }

        if (this.state.pave2 != '') {
            stepName[stepsCount] = this.state.pave2;
            backName[stepsCount] = "Pave 2";
            stepsCount++;
        }

        if (this.state.shankSplit != '') {
            stepName[stepsCount] = this.state.shankSplit;
            backName[stepsCount] = "Split Shank";
            stepsCount++;
        }

        if (this.state.channelStyle != '') {
            stepName[stepsCount] = this.state.channelStyle;
            backName[stepsCount] = "Channel Style";
            stepsCount++;
        }

        if (this.state.milgrain != '') {
            stepName[stepsCount] = this.state.milgrain;
            backName[stepsCount] = "Milgrain";
            stepsCount++;
        }

        if (this.state.engraving != '') {
            stepName[stepsCount] = this.state.engraving;
            backName[stepsCount] = "Engraving";
            stepsCount++;
        }

        if (this.state.basket != '') {
            stepName[stepsCount] = this.state.basket;
            backName[stepsCount] = "Basket";
            stepsCount++;
        }

        if (this.state.bezel != '') {
            stepName[stepsCount] = this.state.bezel;
            backName[stepsCount] = "Bezel";
            stepsCount++;
        }

        if (this.state.halo != '') {
            stepName[stepsCount] = this.state.halo;
            backName[stepsCount] = "Halo";
            stepsCount++;
        }

        if (this.state.haloMilgrain != '') {
            stepName[stepsCount] = this.state.haloMilgrain;
            backName[stepsCount] = "Halo Milgrain";
            stepsCount++;
        }

        if (this.state.prongStyle != '') {
            stepName[stepsCount] = this.state.prongStyle;
            backName[stepsCount] = "Prong Style";
            stepsCount++;
        }

        if (this.state.sideStones != '') {
            stepName[stepsCount] = this.state.sideStones;
            backName[stepsCount] = "Side Stones";
            stepsCount++;
        }

        if (this.state.sideStonesBand != '') {
            stepName[stepsCount] = this.state.sideStonesBand;
            backName[stepsCount] = "Side Stones Band";
            stepsCount++;
        }

        if (this.state.sideStonesBasket != '') {
            stepName[stepsCount] = this.state.sideStonesBasket;
            backName[stepsCount] = "Side Stones Basket";
            stepsCount++;
        }

        return (
            <div className='progressbar'>
                <div className='progressStep' style={{ display: (stepsCount > 0 ? 'block' : 'none') }} onClick={() => this.GoBack(backName[0])}>
                    <div className='progressStepName'>{backName[0]}</div>
                    <div className='progressCircle'>
                        1
                    </div>
                    {stepName[0]}
                </div>
                <div className='progressDash' style={{ display: (stepsCount > 0 ? 'block' : 'none') }} >

                </div>
                <div className='progressStep' style={{ display: (stepsCount > 1 ? 'block' : 'none') }} onClick={() => this.GoBack(backName[1])}>
                    <div className='progressStepName'>{backName[1]}</div>
                    <div className='progressCircle'>
                        2
                    </div>
                    {stepName[1]}
                </div>
                <div className='progressDash' style={{ display: (stepsCount > 1 ? 'block' : 'none') }} >

                </div>
                <div className='progressStep' style={{ display: (stepsCount > 2 ? 'block' : 'none') }} onClick={() => this.GoBack(backName[2])}>
                    <div className='progressStepName'>{backName[2]}</div>
                    <div className='progressCircle'>
                        3
                    </div>
                    {stepName[2]}
                </div>
                <div className='progressDash' style={{ display: (stepsCount > 2 ? 'block' : 'none') }}>

                </div>
                <div className='progressStep' style={{ display: (stepsCount > 3 ? 'block' : 'none') }} onClick={() => this.GoBack(backName[3])}>
                    <div className='progressStepName'>{backName[3]}</div>
                    <div className='progressCircle'>
                        4
                    </div>
                    {stepName[3]}
                </div>
                <div className='progressDash' style={{ display: (stepsCount > 3 ? 'block' : 'none') }}>

                </div>
                <div className='progressStep' style={{ display: (stepsCount > 4 ? 'block' : 'none') }} onClick={() => this.GoBack(backName[4])}>
                    <div className='progressStepName'>{backName[4]}</div>
                    <div className='progressCircle'>
                        5
                    </div>
                    {stepName[4]}
                </div>
                <div className='progressDash' style={{ display: (stepsCount > 4 ? 'block' : 'none') }}>

                </div>
                <div className='progressStep' style={{ display: (stepsCount > 5 ? 'block' : 'none') }} onClick={() => this.GoBack(backName[5])}>
                    <div className='progressStepName'>{backName[5]}</div>
                    <div className='progressCircle' >
                        6
                    </div>
                    {stepName[5]}
                </div>
                <div className='progressDash' style={{ display: (stepsCount > 5 ? 'block' : 'none') }} >

                </div>
                <div className='progressStep' style={{ display: (stepsCount > 6 ? 'block' : 'none') }} onClick={() => this.GoBack(backName[6])}>
                    <div className='progressStepName'>{backName[6]}</div>
                    <div className='progressCircle' >
                        7
                    </div>
                    {stepName[6]}
                </div>
                <div className='progressDash' style={{ display: (stepsCount > 6 ? 'block' : 'none') }}>

                </div>
                <div className='progressStep' style={{ display: (stepsCount > 7 ? 'block' : 'none') }} onClick={() => this.GoBack(backName[7])}>
                    <div className='progressStepName'>{backName[7]}</div>
                    <div className='progressCircle' >
                        8
                    </div>
                    {stepName[7]}
                </div>
                <div className='progressDash' style={{ display: (stepsCount > 7 ? 'block' : 'none') }}>

                </div>
                <div className='progressStep' style={{ display: (stepsCount > 8 ? 'block' : 'none') }} onClick={() => this.GoBack(backName[8])}>
                    <div className='progressStepName'>{backName[8]}</div>
                    <div className='progressCircle' >
                        9
                    </div>
                    {stepName[8]}
                </div>
                <div className='progressDash' style={{ display: (stepsCount > 8 ? 'block' : 'none') }}>

                </div>
                <div className='progressStep' style={{ display: (stepsCount > 9 ? 'block' : 'none') }} onClick={() => this.GoBack(backName[9])}>
                    <div className='progressStepName'>{backName[9]}</div>
                    <div className='progressCircle'>
                        10
                    </div>
                    {stepName[9]}
                </div>
            </div>
        );
    }

    createHeading() {

        return null;

        let shape, band, pave1, paveMilgrain, paveEngraving, pave2, shankSplit, channelStyle, milgrain, engraving, basket, bezel, halo, haloMilgrain, prongStyle, sideStones, sideStonesBand, sideStonesBasket;

        if (this.state.shape != '')
            shape = <span className='selected'>You selected: {this.state.shape} Diamond </span>

        if (this.state.band != '')
            band = <span className='selected'>You selected: {this.state.band} Band </span>

        if (this.state.pave1 != '')
            pave1 = <span className='selected'>You selected: {this.state.pave1} Pave Style </span>

        if (this.state.paveMilgrain != '')
            paveMilgrain = <span className='selected'>You selected: {this.state.paveMilgrain} to PaveMilgrain </span>

        if (this.state.paveEngraving != '')
            paveEngraving = <span className='selected'>You selected: {this.state.shape} to Pave Engraving </span>

        if (this.state.pave2 != '')
            pave2 = <span className='selected'>You selected: {this.state.pave2} Pave Option </span>

        if (this.state.shankSplit != '')
            shankSplit = <span className='selected'>You selected: {this.state.shankSplit} Shank split </span>

        if (this.state.channelStyle != '')
            channelStyle = <span className='selected'>You selected: {this.state.channelStyle} as Channel Style </span>

        if (this.state.milgrain != '')
            milgrain = <span className='selected'>You selected: {this.state.milgrain} to Milgrains </span>

        if (this.state.engraving != '')
            engraving = <span className='selected'>You selected: {this.state.engraving} to Engraving </span>

        if (this.state.basket != '')
            basket = <span className='selected'>You selected: {this.state.basket} Basket Style </span>

        if (this.state.bezel != '')
            bezel = <span className='selected'>You selected: {this.state.bezel} Bezel </span>

        if (this.state.halo != '')
            halo = <span className='selected'>You selected: {this.state.halo} Halo Style </span>

        if (this.state.haloMilgrain != '')
            haloMilgrain = <span className='selected'>You selected: {this.state.haloMilgrain} to Halo Milgrains </span>

        if (this.state.prongStyle != '')
            prongStyle = <span className='selected'>You selected: {this.state.prongStyle} Prong Style </span>

        if (this.state.sideStones != '')
            sideStones = <span className='selected'>You selected: {this.state.sideStones} Side Stones </span>

        if (this.state.sideStonesBand != '')
            sideStonesBand = <span className='selected'>You selected: {this.state.sideStonesBand} Band Style </span>

        if (this.state.sideStonesBasket != '')
            sideStonesBasket = <span className='selected'>You selected: {this.state.sideStonesBasket} Basket Style </span>

        return (
            <div>
                {shape}
                {band}
                {pave1}
                {paveMilgrain}
                {paveEngraving}
                {pave2}
                {shankSplit}
                {channelStyle}
                {milgrain}
                {engraving}
                {basket}
                {bezel}
                {halo}
                {haloMilgrain}
                {prongStyle}
                {sideStones}
                {sideStonesBand}
                {sideStonesBasket}
            </div>
        )
    }

    GetNextStep() {
        let nextStep;

        if (this.nextStep == "diamond")
            nextStep = <this.diamonds scope={this} />
        else if (this.nextStep == "band")
            nextStep = <this.baseBand scope={this} />
        else if (this.nextStep == "pave1")
            nextStep = <this.pave1 scope={this} />
        else if (this.nextStep == "paveMilgrain")
            nextStep = <this.paveMilgrain scope={this} />
        else if (this.nextStep == "paveEngraving")
            nextStep = <this.paveEngraving scope={this} />
        else if (this.nextStep == "pave2")
            nextStep = <this.pave2 scope={this} />
        else if (this.nextStep == "shankSplit")
            nextStep = <this.shankSplit scope={this} />
        else if (this.nextStep == "channelStyle")
            nextStep = <this.channeStyle scope={this} />
        else if (this.nextStep == "milgrain")
            nextStep = <this.milgrain scope={this} />
        else if (this.nextStep == "engraving")
            nextStep = <this.engraving scope={this} />
        else if (this.nextStep == "basket")
            nextStep = <this.basket scope={this} />
        else if (this.nextStep == "bezel")
            nextStep = <this.bezel scope={this} />
        else if (this.nextStep == "halo")
            nextStep = <this.halo scope={this} />
        else if (this.nextStep == "haloMilgrain")
            nextStep = <this.haloMilgrain scope={this} />
        else if (this.nextStep == "prongStyle")
            nextStep = <this.prongStyle scope={this} />
        else if (this.nextStep == "sideStones")
            nextStep = <this.sideStones scope={this} />
        else if (this.nextStep == "sideStonesBand")
            nextStep = <this.sideStonesBand scope={this} />
        else if (this.nextStep == "sideStonesBasket")
            nextStep = <this.sideStonesBasket scope={this} />

        return (
            <div>
                {nextStep}
            </div>
        )
    }

    GoBack(step: string) {

        if (step == "Diamond") {
            this.nextStep = "diamond"
            this.setState(this.state = {
                band: "",
                pave1: "",
                paveMilgrain: "",
                paveEngraving: "",
                pave2: "",
                shankSplit: "",
                channelStyle: "",
                milgrain: "",
                engraving: "",
                basket: "",
                bezel: "",
                halo: "",
                haloMilgrain: "",
                prongStyle: "",
                sideStones: "",
                sideStonesBand: "",
                sideStonesBasket: "",
            })
        }

        if (step == "Band") {
            this.nextStep = "band"
            this.setState(this.state = {
                pave1: "",
                paveMilgrain: "",
                paveEngraving: "",
                pave2: "",
                shankSplit: "",
                channelStyle: "",
                milgrain: "",
                engraving: "",
                basket: "",
                bezel: "",
                halo: "",
                haloMilgrain: "",
                prongStyle: "",
                sideStones: "",
                sideStonesBand: "",
                sideStonesBasket: "",
            })
        }

        if (step == "Pave 1") {
            this.nextStep = "pave1"
            this.setState(this.state = {
                paveMilgrain: "",
                paveEngraving: "",
                pave2: "",
                shankSplit: "",
                channelStyle: "",
                milgrain: "",
                engraving: "",
                basket: "",
                bezel: "",
                halo: "",
                haloMilgrain: "",
                prongStyle: "",
                sideStones: "",
                sideStonesBand: "",
                sideStonesBasket: "",
            })
        }

        if (step == "Pave Milgrain") {
            this.nextStep = "paveMilgrain"
            this.setState(this.state = {
                paveEngraving: "",
                pave2: "",
                shankSplit: "",
                channelStyle: "",
                milgrain: "",
                engraving: "",
                basket: "",
                bezel: "",
                halo: "",
                haloMilgrain: "",
                prongStyle: "",
                sideStones: "",
                sideStonesBand: "",
                sideStonesBasket: "",
            })
        }

        if (step == "Pave Engraving") {
            this.nextStep = "paveEngraving"
            this.setState(this.state = {
                pave2: "",
                shankSplit: "",
                channelStyle: "",
                milgrain: "",
                engraving: "",
                basket: "",
                bezel: "",
                halo: "",
                haloMilgrain: "",
                prongStyle: "",
                sideStones: "",
                sideStonesBand: "",
                sideStonesBasket: "",
            })
        }

        if (step == "Pave 2") {
            this.nextStep = "pave2"
            this.setState(this.state = {
                shankSplit: "",
                channelStyle: "",
                milgrain: "",
                engraving: "",
                basket: "",
                bezel: "",
                halo: "",
                haloMilgrain: "",
                prongStyle: "",
                sideStones: "",
                sideStonesBand: "",
                sideStonesBasket: "",
            })
        }

        if (step == "Shank Split") {
            this.nextStep = "shankSplit"
            this.setState(this.state = {
                channelStyle: "",
                milgrain: "",
                engraving: "",
                basket: "",
                bezel: "",
                halo: "",
                haloMilgrain: "",
                prongStyle: "",
                sideStones: "",
                sideStonesBand: "",
                sideStonesBasket: "",
            })
        }

        if (step == "Channel Style") {
            this.nextStep = "channelStyle"
            this.setState(this.state = {
                milgrain: "",
                engraving: "",
                basket: "",
                bezel: "",
                halo: "",
                haloMilgrain: "",
                prongStyle: "",
                sideStones: "",
                sideStonesBand: "",
                sideStonesBasket: "",
            })
        }

        if (step == "Milgrain") {
            this.nextStep = "milgrain"
            this.setState(this.state = {
                engraving: "",
                basket: "",
                bezel: "",
                halo: "",
                haloMilgrain: "",
                prongStyle: "",
                sideStones: "",
                sideStonesBand: "",
                sideStonesBasket: "",
            })
        }

        if (step == "Engraving") {
            this.nextStep = "engraving"
            this.setState(this.state = {
                basket: "",
                bezel: "",
                halo: "",
                haloMilgrain: "",
                prongStyle: "",
                sideStones: "",
                sideStonesBand: "",
                sideStonesBasket: "",
            })
        }

        if (step == "Basket") {
            this.nextStep = "basket"
            this.setState(this.state = {
                bezel: "",
                halo: "",
                haloMilgrain: "",
                prongStyle: "",
                sideStones: "",
                sideStonesBand: "",
                sideStonesBasket: "",
            })
        }

        if (step == "Bezel") {
            this.nextStep = "bezel"
            this.setState(this.state = {
                halo: "",
                haloMilgrain: "",
                prongStyle: "",
                sideStones: "",
                sideStonesBand: "",
                sideStonesBasket: "",
            })
        }

        if (step == "Halo") {
            this.nextStep = "halo"
            this.setState(this.state = {
                haloMilgrain: "",
                prongStyle: "",
                sideStones: "",
                sideStonesBand: "",
                sideStonesBasket: "",
            })
        }

        if (step == "Halo Milgrain") {
            this.nextStep = "haloMilgrain"
            this.setState(this.state = {
                prongStyle: "",
                sideStones: "",
                sideStonesBand: "",
                sideStonesBasket: "",
            })
        }

        if (step == "Prong Style") {
            this.nextStep = "prongStyle"
            this.setState(this.state = {
                sideStones: "",
                sideStonesBand: "",
                sideStonesBasket: "",
            })
        }

        if (step == "Side Stones") {
            this.nextStep = "sideStones"
            this.setState(this.state = {
                band: "",
                pave1: "",
                paveMilgrain: "",
                paveEngraving: "",
                pave2: "",
                shankSplit: "",
                channelStyle: "",
                milgrain: "",
                engraving: "",
                basket: "",
                bezel: "",
                halo: "",
                haloMilgrain: "",
                prongStyle: "",
                sideStonesBand: "",
                sideStonesBasket: "",
            })
        }

        if (step == "Side Stones Band") {
            this.nextStep = "sideStonesBand"
            this.setState(this.state = {
                band: "",
                pave1: "",
                paveMilgrain: "",
                paveEngraving: "",
                pave2: "",
                shankSplit: "",
                channelStyle: "",
                milgrain: "",
                engraving: "",
                basket: "",
                bezel: "",
                halo: "",
                haloMilgrain: "",
                prongStyle: "",
                sideStonesBasket: "",
            })
        }

        if (step == "Side Stones Basket") {
            this.nextStep = "sideStonesBasket"
            this.setState(this.state = {
                band: "",
                pave1: "",
                paveMilgrain: "",
                paveEngraving: "",
                pave2: "",
                shankSplit: "",
                channelStyle: "",
                milgrain: "",
                engraving: "",
                basket: "",
                bezel: "",
                halo: "",
                haloMilgrain: "",
                prongStyle: "",
            })
        }
    }

    changeModel(name: string) {
        this._modelLoader.changeModel(name);
        this.setState({ currentStep: 2 });
    }

    increaseSize() {
        this._modelLoader.increaseSize();
    }

    decreaseSize() {
        this._modelLoader.decreaseSize();
    }

    diamonds({ ...props }) {
        const scope = { ...props }.scope;
        return (
            <div className='Options'>
                <span className='heading'>Select your Shape</span>
                <div id='OptionsShapes'>
                    {/* <div onClick={() => scope.changeModel(1)}> <img src="" /> Option 1</div>
                    <div onClick={() => scope.changeModel(2)}> <img src="" /> Option 2</div> */}
                    <div onClick={() => scope.diamondSelected("Round")}> <img src="./assets/images/kwiat_round.png" /> Kwiat Round&#8482;</div>
                    <div onClick={() => scope.diamondSelected("Cushion")}> <img src="./assets/images//kwiat_cushion.png" /> Kwiat Cushion&#8482; </div>
                    <div onClick={() => scope.diamondSelected("Radiant")}> <img src="./assets/images//kwiat_radiant.png" /> Kwiat Radiant&#8482; </div>
                    <div onClick={() => scope.diamondSelected("Oval")}> <img src="./assets/images//kwiat_oval.png" /> Kwiat Oval&#8482;</div>
                    <div onClick={() => scope.diamondSelected("Emerald")}> <img src="./assets/images//kwiat_emerald.png" />Kwait Emerald Cut&#8482;</div>
                    <div onClick={() => scope.diamondSelected("Ashoka")}> <img src="./assets/images//ashoka.png" />ASHOKA&#174;</div>
                    <div onClick={() => scope.diamondSelected("FredRound")}> <img src="./assets/images//fred_leighton_round.png" />Fred Leighton Round&#8482;</div>
                </div>
            </div>
        );
    }

    diamondSelected(name: string) {
        this._modelLoader.changeModel(name);
        this.setState({ shape: name });
        this.nextStep = "band";
    }

    baseBand({ ...props }) {
        const scope = { ...props }.scope;
        const heading = scope.createHeading();
        return (
            <div className='Options'>
                {heading}
                <span className='heading'>Select Base Band Shape</span>
                <div id='OptionsShapes'>
                    <div onClick={() => scope.baseSelected("Pave")}> <img src="" /> Pave</div>
                    <div onClick={() => scope.baseSelected("Solitaire")}> <img src="" /> Solitaire </div>
                    <div onClick={() => scope.baseSelected("Channel")}> <img src="" /> Channel </div>
                    <div onClick={() => scope.baseSelected("SideStones")}> <img src="" /> Side Stones</div>
                </div>
            </div>
        )
    }

    baseSelected(name: string) {
        //this._modelLoader.changeBase(name);
        this.setState({ band: name });
        if (name == "Pave")
            this.nextStep = "pave1";
        else if (name == "Solitaire")
            this.nextStep = "engraving";
        else if (name == "Channel")
            this.nextStep = "channelStyle";
        else if (name == "SideStones")
            this.nextStep = "sideStones";
    }

    channeStyle({ ...props }) {
        const scope = { ...props }.scope;
        const heading = scope.createHeading();
        return (
            <div className='Options'>
                {heading}
                <span className='heading'>Select Channel Style</span>
                <div id='OptionsShapes'>
                    <div onClick={() => scope.channelSelected("Carre")}> <img src="" /> Carre</div>
                    <div onClick={() => scope.channelSelected("Vintage")}> <img src="" /> Vintage Style Pave</div>
                    <div onClick={() => scope.channelSelected("Mixed Step")}> <img src="" /> Mixed Step Cut</div>
                    <div onClick={() => scope.channelSelected("Uniform Round")}> <img src="" /> Uniform Round</div>
                    <div onClick={() => scope.channelSelected("Baguettes")}> <img src="" /> Baguettes</div>
                </div>
            </div>
        )
    }

    channelSelected(name: string) {
        //this._modelLoader.changeBase(name);
        this.setState({ channelStyle: name });
        this.nextStep = "milgrain";
    }

    milgrain({ ...props }) {
        const scope = { ...props }.scope;
        const heading = scope.createHeading();
        return (
            <div className='Options'>
                {heading}
                <span className='heading'>Select Milgrain</span>
                <div id='OptionsShapes'>
                    <div onClick={() => scope.milgrainSelected("Yes")}> <img src="" /> Yes</div>
                    <div onClick={() => scope.milgrainSelected("No")}> <img src="" /> No </div>
                </div>
            </div>
        )
    }

    milgrainSelected(name: string) {
        //this._modelLoader.changeBase(name);
        this.setState({ milgrain: name });
        this.nextStep = "engraving";
    }

    engraving({ ...props }) {
        const scope = { ...props }.scope;
        const heading = scope.createHeading();
        return (
            <div className='Options'>
                {heading}
                <span className='heading'>Select Engraving</span>
                <div id='OptionsShapes'>
                    <div onClick={() => scope.engravingSelected("Yes")}> <img src="" /> Yes </div>
                    <div onClick={() => scope.engravingSelected("No")}> <img src="" /> No </div>
                </div>
            </div>
        )
    }

    engravingSelected(name: string) {
        //this._modelLoader.changeBase(name);
        this.setState({ engraving: name });
        this.nextStep = "basket";
    }

    pave1({ ...props }) {
        const scope = { ...props }.scope;
        const heading = scope.createHeading();
        return (
            <div className='Options'>
                {heading}
                <span className='heading'>Select Pave Style</span>
                <div id='OptionsShapes'>
                    <div onClick={() => scope.pave1Selected("3 Row Micropave")}> <img src="" /> 3 Row Micropave</div>
                    <div onClick={() => scope.pave1Selected("Vintage Style")}> <img src="" /> Vintage Style Pave </div>
                    <div onClick={() => scope.pave1Selected("Classic Single Row Cutdown")}> <img src="" /> Classic Single Row Cutdown Pave </div>
                </div>
            </div>
        )
    }

    pave1Selected(name: string) {
        //this._modelLoader.changeBase(name);
        this.setState({ pave1: name });
        if (name == "3 Row Micropave")
            this.nextStep = "basket";
        else if (name == "Vintage Style")
            this.nextStep = "paveMilgrain";
        else if (name == "Classic Single Row Cutdown")
            this.nextStep = "pave2";
    }


    paveMilgrain({ ...props }) {
        const scope = { ...props }.scope;
        const heading = scope.createHeading();
        return (
            <div className='Options'>
                {heading}
                <span className='heading'>Select Pave Milgrain</span>
                <div id='OptionsShapes'>
                    <div onClick={() => scope.paveMilgrainSelected("Yes")}> <img src="" /> Yes</div>
                    <div onClick={() => scope.paveMilgrainSelected("No")}> <img src="" /> No </div>
                </div>
            </div>
        )
    }

    paveMilgrainSelected(name: string) {
        //this._modelLoader.changeBase(name);
        this.setState({ paveMilgrain: name });
        this.nextStep = "paveEngraving";
    }

    paveEngraving({ ...props }) {
        const scope = { ...props }.scope;
        const heading = scope.createHeading();
        return (
            <div className='Options'>
                {heading}
                <span className='heading'>Select Pave Engraving</span>
                <div id='OptionsShapes'>
                    <div onClick={() => scope.paveEngravingSelected("Yes")}> <img src="" /> Yes </div>
                    <div onClick={() => scope.paveEngravingSelected("No")}> <img src="" /> No </div>
                </div>
            </div>
        )
    }

    paveEngravingSelected(name: string) {
        //this._modelLoader.changeBase(name);
        this.setState({ paveEngraving: name });
        this.nextStep = "pave2";
    }

    pave2({ ...props }) {
        const scope = { ...props }.scope;
        const heading = scope.createHeading();
        return (
            <div className='Options'>
                {heading}
                <span className='heading'>Select Pave Option</span>
                <div id='OptionsShapes'>
                    <div onClick={() => scope.pave2Selected("Split")}> <img src="" /> Split</div>
                    <div onClick={() => scope.pave2Selected("Graduated")}> <img src="" /> Graduated </div>
                    <div onClick={() => scope.pave2Selected("Uniform")}> <img src="" /> Uniform </div>
                </div>
            </div>
        )
    }

    pave2Selected(name: string) {
        //this._modelLoader.changeBase(name);
        this.setState({ pave2: name });
        if (name == "Split")
            this.nextStep = "shankSplit";
        else
            this.nextStep = "basket";
    }

    shankSplit({ ...props }) {
        const scope = { ...props }.scope;
        const heading = scope.createHeading();
        return (
            <div className='Options'>
                {heading}
                <span className='heading'>Select Shank Split</span>
                <div id='OptionsShapes'>
                    <div onClick={() => scope.shankSplitSelected("Subtle")}> <img src="" /> Subtle Split</div>
                    <div onClick={() => scope.shankSplitSelected("Wide")}> <img src="" /> Wide Split </div>
                    <div onClick={() => scope.shankSplitSelected("Medium")}> <img src="" /> Medium Split </div>
                </div>
            </div>
        )
    }

    shankSplitSelected(name: string) {
        //this._modelLoader.changeBase(name);
        this.setState({ shankSplit: name });
        this.nextStep = "basket";
    }

    basket({ ...props }) {
        const scope = { ...props }.scope;
        const heading = scope.createHeading();
        return (
            <div className='Options'>
                {heading}
                <span className='heading'>Select Basket Style</span>
                <div id='OptionsShapes'>
                    <div onClick={() => scope.basketSelected("Bezel")}> <img src="" /> Bezel </div>
                    <div onClick={() => scope.basketSelected("Floating")}> <img src="" /> Floating </div>
                    <div onClick={() => scope.basketSelected("Classic Prong with Shoulder")}> <img src="" /> Classic Prong with Shoulder  </div>
                    <div onClick={() => scope.basketSelected("Classic Prong without Shoulder")}> <img src="" /> Classic Prong without Shoulder </div>
                    <div onClick={() => scope.basketSelected("U Shape")}> <img src="" /> U Shape </div>
                </div>
            </div>
        )
    }

    basketSelected(name: string) {
        //this._modelLoader.changeBase(name);
        this.setState({ basket: name });
        if (name == "Bezel")
            this.nextStep = "bezel";
        else if (name != "U Shape")
            this.nextStep = "halo";
    }

    bezel({ ...props }) {
        const scope = { ...props }.scope;
        const heading = scope.createHeading();
        return (
            <div className='Options'>
                {heading}
                <span className='heading'>Select Bezel type</span>
                <div id='OptionsShapes'>
                    <div onClick={() => scope.bezelSelected("Polished")}> <img src="" /> Polished </div>
                    <div onClick={() => scope.bezelSelected("Milgrain")}> <img src="" /> Milgrain </div>
                </div>
            </div>
        )
    }

    bezelSelected(name: string) {
        this.setState({ bezel: name });
    }

    halo({ ...props }) {
        const scope = { ...props }.scope;
        const heading = scope.createHeading();
        return (
            <div className='Options'>
                {heading}
                <span className='heading'>Select Halo type</span>
                <div id='OptionsShapes'>
                    <div onClick={() => scope.haloSelected("Step Cut")}> <img src="" /> Step Cut Halo </div>
                    <div onClick={() => scope.haloSelected("Vintage Style")}> <img src="" /> Vintage Style Halo </div>
                    <div onClick={() => scope.haloSelected("Pave Round Diamond")}> <img src="" /> Pave Round Diamond Halo </div>
                    <div onClick={() => scope.haloSelected("No")}> <img src="" /> No Halo </div>
                </div>
            </div>
        )
    }

    haloSelected(name: string) {
        //this._modelLoader.changeBase(name);
        this.setState({ halo: name });
        if (name == "Step Cut" || name == "Vintage Style")
            this.nextStep = "haloMilgrain";
        else if (name == "No")
            this.nextStep = "prongStyle";
    }

    haloMilgrain({ ...props }) {
        const scope = { ...props }.scope;
        const heading = scope.createHeading();
        return (
            <div className='Options'>
                {heading}
                <span className='heading'>Select Halo Milgrain type</span>
                <div id='OptionsShapes'>
                    <div onClick={() => scope.haloMilgrainSelected("Yes")}> <img src="" /> Yes </div>
                    <div onClick={() => scope.haloMilgrainSelected("No")}> <img src="" /> No </div>
                </div>
            </div>
        )
    }

    haloMilgrainSelected(name: string) {
        //this._modelLoader.changeBase(name);
        this.setState({ haloMilgrain: name });
    }

    prongStyle({ ...props }) {
        const scope = { ...props }.scope;
        const heading = scope.createHeading();
        return (
            <div className='Options'>
                {heading}
                <span className='heading'>Select Prong Style</span>
                <div id='OptionsShapes'>
                    <div onClick={() => scope.prongStyleSelected("6")}> <img src="" /> 6 </div>
                    <div onClick={() => scope.prongStyleSelected("Compass")}> <img src="" /> Compass </div>
                    <div onClick={() => scope.prongStyleSelected("Classic Claw")}> <img src="" /> Classic Claw Prong </div>
                    <div onClick={() => scope.prongStyleSelected("Split Claw")}> <img src="" /> Split Claw Prong </div>
                </div>
            </div>
        )
    }

    prongStyleSelected(name: string) {
        //this._modelLoader.changeBase(name);
        this.setState({ haloMilgrain: name });
        this.nextStep = "";
    }

    sideStones({ ...props }) {
        const scope = { ...props }.scope;
        const heading = scope.createHeading();
        return (
            <div className='Options'>
                {heading}
                <span className='heading'>Select Side Stone Style</span>
                <div id='OptionsShapes'>
                    <div onClick={() => scope.sideStonesSelected("6")}> <img src="" /> Round </div>
                    <div onClick={() => scope.sideStonesSelected("Compass")}> <img src="" /> Baguettes </div>
                    <div onClick={() => scope.sideStonesSelected("Classic Claw")}> <img src="" /> Bullets</div>
                    <div onClick={() => scope.sideStonesSelected("Split Claw")}> <img src="" /> Pears </div>
                    <div onClick={() => scope.sideStonesSelected("Split Claw")}> <img src="" /> Half Moon/Bullet </div>
                    <div onClick={() => scope.sideStonesSelected("Split Claw")}> <img src="" /> FL Round </div>
                    <div onClick={() => scope.sideStonesSelected("Split Claw")}> <img src="" /> Cushion </div>
                    <div onClick={() => scope.sideStonesSelected("Split Claw")}> <img src="" /> Epaulettes </div>
                    <div onClick={() => scope.sideStonesSelected("Split Claw")}> <img src="" /> Trapezoids </div>
                    <div onClick={() => scope.sideStonesSelected("Split Claw")}> <img src="" /> Half Moon </div>
                    <div onClick={() => scope.sideStonesSelected("Split Claw")}> <img src="" /> Trap/Bullet </div>
                    <div onClick={() => scope.sideStonesSelected("Split Claw")}> <img src="" /> Asscher </div>
                    <div onClick={() => scope.sideStonesSelected("Split Claw")}> <img src="" /> Ashoka </div>
                    <div onClick={() => scope.sideStonesSelected("Split Claw")}> <img src="" /> Emerald </div>
                    <div onClick={() => scope.sideStonesSelected("Split Claw")}> <img src="" /> Shields </div>
                    <div onClick={() => scope.sideStonesSelected("Split Claw")}> <img src="" /> Oval </div>
                    <div onClick={() => scope.sideStonesSelected("Split Claw")}> <img src="" /> Hearts </div>
                    <div onClick={() => scope.sideStonesSelected("Split Claw")}> <img src="" /> Radiant </div>
                    <div onClick={() => scope.sideStonesSelected("Split Claw")}> <img src="" /> Princess </div>
                </div>
            </div>
        )
    }

    sideStonesSelected(name: string) {
        //this._modelLoader.changeBase(name);
        this.setState({ sideStones: name });
        this.nextStep = "sideStonesBand";
    }

    sideStonesBand({ ...props }) {
        const scope = { ...props }.scope;
        const heading = scope.createHeading();
        return (
            <div className='Options'>
                {heading}
                <span className='heading'>Select Band</span>
                <div id='OptionsShapes'>
                    <div onClick={() => scope.sideStonesBandSelected("Vintage Style")}> <img src="" /> Vintage Style </div>
                    <div onClick={() => scope.sideStonesBandSelected("Classic Plain")}> <img src="" /> Classic Plain Band </div>
                    <div onClick={() => scope.sideStonesBandSelected("Single Row Pave")}> <img src="" /> Single Row Pave </div>
                </div>
            </div>
        )
    }

    sideStonesBandSelected(name: string) {
        //this._modelLoader.changeBase(name);
        this.setState({ sideStonesBand: name });
        this.nextStep = "sideStonesBasket";
    }

    sideStonesBasket({ ...props }) {
        const scope = { ...props }.scope;
        const heading = scope.createHeading();
        return (
            <div className='Options'>
                {heading}
                <span className='heading'>Select Basket Style</span>
                <div id='OptionsShapes'>
                    <div onClick={() => scope.sideStonesBasketSelected("Classic Prongs")}> <img src="" /> Classic Prongs With Shoulders </div>
                    <div onClick={() => scope.sideStonesBasketSelected("Pave Round")}> <img src="" /> Pave Round Diamond Halo </div>
                    <div onClick={() => scope.sideStonesBasketSelected("Bezel")}> <img src="" /> Bezel </div>
                    <div onClick={() => scope.sideStonesBasketSelected("Vintage Stye")}> <img src="" /> Vintage Stye </div>
                </div>
            </div>
        )
    }

    sideStonesBasketSelected(name: string) {
        //this._modelLoader.changeBase(name);
        this.setState({ sideStonesBasket: name });
    }

    openColorsTab() {
        this.setState({ colorsTab: true });
    }

    GetColor() {
        const colorSelected = this.state.colorSelected;
        let showPlatinum = false;
        let showYellow = false;
        let showRose = false;

        if (colorSelected == "Platinum")
            showPlatinum = true;

        if (colorSelected == "Yellow Gold")
            showYellow = true;

        if (colorSelected == "Rose Gold")
            showRose = true;

        return (
            <div>
                <div onClick={() => this.openColorsTab()} style={{ display: (showPlatinum ? "block" : "none") }}> <span className='circle platinum'></span> Platinum</div>
                <div onClick={() => this.openColorsTab()} style={{ display: (showYellow ? "block" : "none") }}> <span className='circle gold'></span> Yellow Gold</div>
                <div onClick={() => this.openColorsTab()} style={{ display: (showRose ? "block" : "none") }}> <span className='circle roseGold'></span> Rose Gold</div>
            </div>
        )
    }

    render() {
        //console.log(this.state);
        const nextStep = this.GetNextStep();
        const showing = this.state.colorsTab;
        const Step = this.CreateSteps();
        const selectedColor = this.GetColor();

        return (
            <div id="Main">
                <div id='three'>
                    <ModelLoader ref={(ref: any) => (this._modelLoader = ref)} />
                </div>
                <div id='OptionsContainer'>
                    <span className='heading'>Your Journey</span>
                    {Step}
                    {nextStep}
                    {/* <hr />
                    <span className='heading'>Select your Metal</span>
                    <div id='OptionsColor'>
                        <div onClick={() => this.changeShank(1)}> <span className='circle platinum'></span> Platinum</div>
                        <div onClick={() => this.changeShank(2)}> <span className='circle gold'></span>18K Yellow Gold</div>
                        <div onClick={() => this.changeShank(3)}> <span className='circle roseGold'></span>18K Rose Gold</div>
                    </div>
                    <hr />
                    <span className='heading'>Orientation of Diamond</span>
                    <div id='OptionsShapes'>
                        <div onClick={() => this.changeShank(1)}> <span></span> North-Soth</div>
                        <div onClick={() => this.changeShank(2)}> <span></span> East-West</div>
                    </div> */}
                </div>
                {/* <div id='ChildOptionsContainer' className={this.showChildOptions ? 'show' : 'hide'}>
                    <span className='closeButton' onClick={() => this.closeChild()}>X</span>
                    {comp}
                </div> */}
                <div className='rightButtonsBottom' style={{ display: (!showing ? 'block' : 'none') }}>
                    <span className='heading'>Color</span>
                    <div id='OptionsColor'>
                        {selectedColor}
                    </div>

                </div>
                <div className='rightButtonsBottomExpanded' style={{ display: (showing ? 'block' : 'none') }}>
                    <span className='heading'>Color</span>
                    <div id='OptionsColor'>
                        <div onClick={() => this.changeShank(1)}> <span className='circle platinum'></span> Platinum</div>
                        <div onClick={() => this.changeShank(2)}> <span className='circle gold'></span>18K Yellow Gold</div>
                        <div onClick={() => this.changeShank(3)}> <span className='circle roseGold'></span>18K Rose Gold</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Main;