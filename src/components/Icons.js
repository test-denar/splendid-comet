import React from 'react';
import _ from 'lodash';

import {htmlToReact} from '../utils';

export default class Icons extends React.Component {
    render() {
        return (
            <section id={_.get(this.props, 'section.section_id')} class={'wrapper ' + _.get(this.props, 'section.background_style') + ' special'}>
                <header class="major">
                    <h2>{htmlToReact(_.get(this.props, 'section.title').replace(/\n/g, '<br />'))}</h2>
                </header>
                <ul class="icons major">
                    {_.map(_.get(this.props, 'section.icons'), (item, item_idx) => (
                        <li key={item_idx}><span class={'icon ' + _.get(item, 'icon')}><span class="label">{_.get(item, 'title')}</span></span></li>
                    ))}
                </ul>
            </section>
        );
    }
}
