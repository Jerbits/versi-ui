---
to: packages/<%= path %>/src/components/<%= h.capitalize(name) %>/<%= h.capitalize(name) %>.tsx
---
import { FC } from 'react';
import { default as cn } from 'classnames';

import "./<%= h.inflection.dasherize(h.inflection.underscore(name)) %>.scss";

export interface <%= h.capitalize(name) %>Props {
    prop?: string;
}

export const <%= h.capitalize(name) %>: FC<<%= h.capitalize(name) %>Props> = ({prop = ''}: <%= h.capitalize(name) %>Props) => {

    return (
        <div><%= h.capitalize(name) %> component {prop}</div>
    );
};