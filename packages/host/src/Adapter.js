import React from 'react';

class Adapter extends React.Component {
    constructor(props) {
        super(props);
        this.refHold;
    }
    init() {
        (async () => {
            const ReactDOM = (await import('app2/newReactDOM')).default;
            const React = (await import('app2/newReact')).default;
            const RemoteComponent = await this.props.importer();
            const { importer, children, ...rest } = this.props;
            ReactDOM.render(React.createElement(RemoteComponent.default, rest, children), this.refHold);
        })();
    };
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate', prevProps, prevState, snapshot);
        this.init();
    }

    componentDidMount() {
        this.init();
    }

    componentWillUnmount(){
        ReactDOM.unmountComponentAtNode(this.refHold);
    }

    render() {
        return (
            <div
                id={this.props.name}
                ref={ref => (this.refHold = ref)}
            />
        );
    }
}

export default Adapter;