import { Component, State, h } from '@stencil/core';

@Component({
    tag: 'my-component',
    shadow: true
})
export class MyComponent {

    @State()
    private width = 300;

    @State()
    private height = 300;

    render() {
        return (
            <div>
                <button onClick={this.changeSize}>Change size</button>
                <inner-component width={this.width} height={this.height} />
            </div>
        );
    }

    changeSize = () => {
        this.width *= 2;
        this.height *= 2;
    };
}
