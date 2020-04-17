import { Component, Host, h, Prop } from '@stencil/core';

@Component({
    tag: 'inner-component',
    shadow: true,
})
export class InnerComponent {

    @Prop()
    public width;

    @Prop()
    public height;

    private style: any = {};

    componentWillLoad() {
        this.setStyle();
    }

    componentWillUpdate() {
        this.setStyle();
    }

    setStyle() {
        this.style = {
            width: `${this.width}px`,
            height: `${this.height}px`,
            backgroundColor: 'red'
        };
    }

    render() {
        return (
            <div style={this.style}>
                Size is {this.width} x {this.height} <br/>
                Style is <pre>{JSON.stringify(this.style, null, '\t')}</pre>
            </div>
        );
    }

}
