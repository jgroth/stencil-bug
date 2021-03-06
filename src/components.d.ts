/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface InnerComponent {
        "height": any;
        "width": any;
    }
    interface MyComponent {
    }
}
declare global {
    interface HTMLInnerComponentElement extends Components.InnerComponent, HTMLStencilElement {
    }
    var HTMLInnerComponentElement: {
        prototype: HTMLInnerComponentElement;
        new (): HTMLInnerComponentElement;
    };
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLElementTagNameMap {
        "inner-component": HTMLInnerComponentElement;
        "my-component": HTMLMyComponentElement;
    }
}
declare namespace LocalJSX {
    interface InnerComponent {
        "height"?: any;
        "width"?: any;
    }
    interface MyComponent {
    }
    interface IntrinsicElements {
        "inner-component": InnerComponent;
        "my-component": MyComponent;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "inner-component": LocalJSX.InnerComponent & JSXBase.HTMLAttributes<HTMLInnerComponentElement>;
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
        }
    }
}
