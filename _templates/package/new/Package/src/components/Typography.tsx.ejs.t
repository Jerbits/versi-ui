---
to: packages/<%= h.capitalize(name) %>/src/components/<%= h.capitalize(name) %>.tsx
---
import { FC, ReactNode } from 'react';
import { default as cn } from 'classnames';
import './index.css';

export interface <%= h.capitalize(name) %>Props {

}

const <%= h.capitalize(name) %>: FC<<%= h.capitalize(name) %>Props> = ({ children, classes }: <%= h.capitalize(name) %>Props) => {

	return <><%= h.capitalize(name) %></>;
};


export default <%= h.capitalize(name) %>;
