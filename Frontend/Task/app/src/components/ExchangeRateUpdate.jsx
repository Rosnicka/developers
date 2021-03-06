import React from 'react'
import LinearProgress from "@material-ui/core/LinearProgress";

class ExchangeRateUpdate extends React.Component {
    constructor(props) {
        super(props);

        this.state = {progress: 0};
        this.intervalTick = this.intervalTick.bind(this);
    }

    componentDidMount() {
        this.countdownInterval = null;
        this.intervalTick();
        this.interval = setInterval(this.intervalTick, 10000);
    }

    intervalTick() {
        clearInterval(this.countdownInterval);
        this.setState({progress: 0});
        this.props.fetchRates(this.props.pairIds);
        this.countdownInterval = setInterval(() => {
            this.setState({progress: this.state.progress + 1});
        }, 100)
    }

    render() {
        return (
            <LinearProgress variant="determinate" value={this.state.progress}/>
        );
    }
}

export default ExchangeRateUpdate;