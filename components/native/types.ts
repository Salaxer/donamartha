import { DetailedHTMLProps, HTMLAttributes } from "react";

export declare interface ButtomElement extends 
DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement>{}

import { DetailedHTMLFactory, ReactHTML } from "react";

declare type UnwrapFactoryAttributes<F> = F extends DetailedHTMLFactory<infer P, any> ? P : never;
declare type UnwrapFactoryElement<F> = F extends DetailedHTMLFactory<any, infer P> ? P : never;

declare type HTMLAttributesWithoutCustomProps<
Attributes extends HTMLAttributes<Element>, 
Element extends HTMLElement, 
CustomProps
>={
    [K in Exclude<keyof Attributes, keyof CustomProps>]?: Attributes[K];
};

export declare type HTMLNativeProps<
// Here import the tag name using
TagName extends keyof ReactHTML, 
CustomProps
>= 
HTMLAttributesWithoutCustomProps<
UnwrapFactoryAttributes<ReactHTML[TagName]>, 
UnwrapFactoryElement<ReactHTML[TagName]>,
CustomProps
> & CustomProps;
