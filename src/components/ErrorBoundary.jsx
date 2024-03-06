import { Component } from "react";

class ErrorBoundary extends Component {
    constructor() {
        super();
        this.state = { hasError: false, errorDetails: null };
    }

    componentDidCatch = (error) => {
        console.log(error);
        this.setState({ hasError: true, errorDetails: error });
    };

    render() {


         if (this.state.hasError) {
             const errorDetails =  this.state.errorDetails;
             console.log(errorDetails);
             return (<h1 className="errorH1">Something went wrong<br />
                 Details: <i>{this.state.errorDetails.toString()}</i>
             </h1>);
            //return (<h1 className="errorH1">Something went wrong, details: ${errorDetails}</h1>);
        } else {
            return this.props.children;
        }
    }
}
export default ErrorBoundary;