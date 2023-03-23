import * as React from 'react';
import { useSpring, animated } from '@react-spring/web'

export class Main extends React.Component<{}, any> {

    constructor(props: any) {
        super(props);
    }

    imageBottom() {
        const springs = useSpring({
            from: { y: '120vh' },
            to: { y: '30vh' },
            config: { duration: 1000 }
        });

        return (
            < animated.div style={{ ...springs }} > <img src='./assets/images/placeholder3.png' /> </animated.div>
        );
    }

    imageLeft() {
        const springs = useSpring({
            from: { x: '-120vw' },
            to: { x: '10vw' },
            config: { duration: 800 }
        });

        return (
            < animated.div style={{ ...springs }} > <img src='./assets/images/placeholder2.png' /> </animated.div>
        );
    }

    imageAppear() {
        const springs = useSpring({
            from: { scale: 0 },
            to: { scale: 1 },
            config: { duration: 300 }
        });

        return (
            < animated.div style={{ ...springs }} > <img src='./assets/images/placeholder1.png' /> </animated.div>
        );
    }

    render() {
        return (
            <div>
                <div className='imageBottom'><this.imageBottom /></div>
                <div className='imageLeft'><this.imageLeft /></div>
                <div className='imageAppear'><this.imageAppear /></div>
            </div>
        );
    }
}

export default Main;