import * as React from "react";

export interface IAppProps { compiler: string; framework: string; }

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export class App extends React.Component<IAppProps, {}> {
    public render() {
        return <h1>Hello from {this.props.compiler} and {this.props.framework}!</h1>;
    }
}
